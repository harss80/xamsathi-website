import { Router, Request, Response } from 'express';
import Course from '../models/Course';

const router = Router();

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

export default router;
