import { Router, Request, Response } from 'express';
import Course from '../models/Course';
import User from '../models/User';

const router = Router();

router.put('/admission', async (req: Request, res: Response) => {
  const userId = req.header('x-user-id');
  if (!userId) return res.status(401).json({ error: 'x-user-id required' });

  const {
    name,
    class_grade,
    target_exam,
    stream,
    medium,
    school,
    city,
    guardian_phone,
    student_photo,
  } = req.body as {
    name?: string;
    class_grade?: number;
    target_exam?: 'neet' | 'jee' | 'cbse' | 'other';
    stream?: 'pcm' | 'pcb' | 'commerce' | 'arts' | 'na';
    medium?: 'english' | 'hindi' | 'other';
    school?: string;
    city?: string;
    guardian_phone?: string;
    student_photo?: string;
  };

  if (!student_photo || typeof student_photo !== 'string') {
    return res.status(400).json({ error: 'student_photo required' });
  }

  // Basic base64 data-url checks (MVP)
  if (!student_photo.startsWith('data:image/')) {
    return res.status(400).json({ error: 'student_photo must be an image data url' });
  }
  if (student_photo.length > 5.5 * 1024 * 1024) {
    return res.status(400).json({ error: 'student_photo too large' });
  }

  if (typeof class_grade === 'number') {
    if (class_grade < 1 || class_grade > 12) {
      return res.status(400).json({ error: 'class_grade must be between 1 and 12' });
    }
  }

  const allowedExam = new Set(['neet', 'jee', 'cbse', 'other']);
  if (target_exam && !allowedExam.has(target_exam)) {
    return res.status(400).json({ error: 'invalid target_exam' });
  }

  const allowedStream = new Set(['pcm', 'pcb', 'commerce', 'arts', 'na']);
  if (stream && !allowedStream.has(stream)) {
    return res.status(400).json({ error: 'invalid stream' });
  }

  const allowedMedium = new Set(['english', 'hindi', 'other']);
  if (medium && !allowedMedium.has(medium)) {
    return res.status(400).json({ error: 'invalid medium' });
  }

  try {
    const updateData: Record<string, unknown> = {
      onboarding_completed: true,
      student_photo,
    };
    if (typeof name === 'string' && name.trim()) updateData.name = name.trim();
    if (typeof class_grade === 'number') updateData.class_grade = class_grade;
    if (target_exam) updateData.target_exam = target_exam;
    if (stream) updateData.stream = stream;
    if (medium) updateData.medium = medium;
    if (typeof school === 'string') updateData.school = school.trim();
    if (typeof city === 'string') updateData.city = city.trim();
    if (typeof guardian_phone === 'string') updateData.guardian_phone = guardian_phone.trim();

    const updatedUser = await User.findByIdAndUpdate(userId, { $set: updateData }, { new: true }).select('-password');
    if (!updatedUser) return res.status(404).json({ error: 'User not found' });

    return res.json({ user: updatedUser });
  } catch (error) {
    console.error('Admission update error:', error);
    return res.status(500).json({ error: 'Failed to update admission form' });
  }
});

router.put('/profile', async (req: Request, res: Response) => {
  const userId = req.header('x-user-id');
  if (!userId) return res.status(401).json({ error: 'x-user-id required' });

  const { avatar, name, bio, phone, class_grade } = req.body as {
    avatar?: string;
    name?: string;
    bio?: string;
    phone?: string;
    class_grade?: number;
  };

  try {
    const updateData: Record<string, unknown> = {};
    if (avatar) updateData.avatar = avatar;
    if (name) updateData.name = name;
    if (bio) updateData.bio = bio;
    if (phone) updateData.phone = phone;
    if (typeof class_grade === 'number') {
      if (class_grade < 1 || class_grade > 12) {
        return res.status(400).json({ error: 'class_grade must be between 1 and 12' });
      }
      updateData.class_grade = class_grade;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, { $set: updateData }, { new: true }).select('-password');
    if (!updatedUser) return res.status(404).json({ error: 'User not found' });

    res.json({ user: updatedUser });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

router.get('/allowed-courses', async (req: Request, res: Response) => {
  const classHeader = req.header('x-class-grade');
  const classGrade = classHeader ? Number(classHeader) : NaN;
  if (!classHeader || Number.isNaN(classGrade)) {
    return res.status(400).json({ error: 'x-class-grade header required' });
  }

  const courses = await Course.find({ class_grade: classGrade, active: true })
    .select('_id title description class_grade')
    .sort({ createdAt: -1 })
    .lean();

  return res.json({ items: courses.map((c) => ({ id: c._id, title: c.title, description: c.description, class_grade: c.class_grade })) });
});

router.get('/', async (req: Request, res: Response) => {
  const userId = req.header('x-user-id');
  if (!userId) return res.status(401).json({ error: 'x-user-id required' });

  try {
    const user = await User.findById(userId).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
