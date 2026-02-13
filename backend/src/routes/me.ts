import { Router, Request, Response } from 'express';
import Course from '../models/Course';
import User from '../models/User';

const router = Router();

router.put('/profile', async (req: Request, res: Response) => {
  const userId = req.header('x-user-id');
  if (!userId) return res.status(401).json({ error: 'x-user-id required' });

  const { avatar, name, bio, phone } = req.body;

  try {
    const updateData: any = {};
    if (avatar) updateData.avatar = avatar;
    if (name) updateData.name = name;
    if (bio) updateData.bio = bio; // If bio is added to schema later
    if (phone) updateData.phone = phone;

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
