import { Router, Request, Response, NextFunction } from 'express';
import Course from '../models/Course';
import Test from '../models/Test';
import Question from '../models/Question';

const router = Router();

function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const secret = req.headers['x-admin-secret'];
  if (!secret || secret !== process.env.ADMIN_PANEL_SECRET) {
    return res.status(401).json({ error: 'unauthorized' });
  }
  return next();
}

router.get('/courses', requireAdmin, async (req: Request, res: Response) => {
  const limit = Number(req.query.limit || 50);
  const page = Number(req.query.page || 1);
  const skip = (page - 1) * limit;
  const courses = await Course.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit).lean();
  return res.json({ items: courses });
});

router.post('/courses', requireAdmin, async (req: Request, res: Response) => {
  const { title, description, class_grade } = req.body as { title?: string; description?: string | null; class_grade?: number };
  if (!title || typeof class_grade !== 'number') {
    return res.status(400).json({ error: 'title and class_grade required' });
  }
  const created = await Course.create({ title, description: description ?? null, class_grade, active: true });
  return res.json({ id: created._id });
});

router.get('/tests', requireAdmin, async (req: Request, res: Response) => {
  const limit = Number(req.query.limit || 50);
  const page = Number(req.query.page || 1);
  const skip = (page - 1) * limit;
  const tests = await Test.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit).lean();
  return res.json({ items: tests });
});

router.post('/tests', requireAdmin, async (req: Request, res: Response) => {
  const { course_id, title, difficulty, duration_min } = req.body as { course_id?: string; title?: string; difficulty?: string | null; duration_min?: number };
  if (!course_id || !title) {
    return res.status(400).json({ error: 'course_id and title required' });
  }
  const created = await Test.create({ course_id, title, difficulty: difficulty ?? null, duration_min: duration_min ?? 60, active: true });
  return res.json({ id: created._id });
});

router.post('/questions', requireAdmin, async (req: Request, res: Response) => {
  const payload = req.body as Array<{ test_id: string; body: string; options: string[]; correct_indices: number[]; explanation?: string | null; tags?: string[] | null; pool_key?: string | null; active?: boolean }>;
  if (!Array.isArray(payload) || payload.length === 0) {
    return res.status(400).json({ error: 'array of questions required' });
  }
  const sanitized = payload.map((q) => ({
    test_id: q.test_id,
    body: q.body,
    options: q.options,
    correct_indices: Array.from(new Set(q.correct_indices || [])).sort((a, b) => a - b),
    explanation: q.explanation ?? null,
    tags: q.tags ?? null,
    pool_key: q.pool_key ?? null,
    active: q.active ?? true,
  }));
  const created = await Question.insertMany(sanitized);
  return res.json({ inserted: created.length });
});

export default router;
