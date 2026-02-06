import { Router, Request, Response, NextFunction } from 'express';
import Course from '../models/Course';
import Test from '../models/Test';
import Question from '../models/Question';
import Attempt from '../models/Attempt';

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

router.get('/questions', requireAdmin, async (req: Request, res: Response) => {
  const limit = Number(req.query.limit || 50);
  const page = Number(req.query.page || 1);
  const skip = (page - 1) * limit;
  const questions = await Question.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit).lean();
  return res.json({ items: questions });
});

router.get('/attempts', requireAdmin, async (req: Request, res: Response) => {
  const limit = Number(req.query.limit || 50);
  const page = Number(req.query.page || 1);
  const skip = (page - 1) * limit;
  const attempts = await Attempt.find({}).sort({ started_at: -1 }).skip(skip).limit(limit).lean();
  return res.json({ items: attempts });
});

// Mock users aggregation (since we don't have a users collection)
router.get('/users', requireAdmin, async (req: Request, res: Response) => {
  const limit = Number(req.query.limit || 50);
  const page = Number(req.query.page || 1);
  const skip = (page - 1) * limit;
  const pipeline = [
    {
      $group: {
        _id: '$user_id',
        class_grade: { $first: '$class_grade' },
        attempt_count: { $sum: 1 },
        avg_score: { $avg: { $cond: [{ $ne: ['$score', null] }, { $divide: ['$score', '$total'] }, null] } },
      },
    },
    { $sort: { attempt_count: -1 } },
    { $skip: skip },
    { $limit: limit },
    { $project: { user_id: '$_id', class_grade: 1, attempt_count: 1, avg_score: 1, _id: 0 } },
  ];
  const users = await Attempt.aggregate(pipeline);
  return res.json({ items: users });
});

// Mock jobs endpoint (placeholder)
router.get('/jobs', requireAdmin, async (req: Request, res: Response) => {
  // Placeholder: return empty jobs array for now
  return res.json({ items: [] });
});

// Analytics endpoint
router.get('/analytics', requireAdmin, async (req: Request, res: Response) => {
  const [totalCourses, totalTests, totalAttempts, totalUsers] = await Promise.all([
    Course.countDocuments(),
    Test.countDocuments(),
    Attempt.countDocuments(),
    Attempt.distinct('user_id').then((ids) => ids.length),
  ]);

  // Attempts over time (last 30 days)
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const attemptsOverTime = await Attempt.aggregate([
    { $match: { started_at: { $gte: thirtyDaysAgo } } },
    {
      $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$started_at' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { _id: 1 } },
    { $project: { date: '$_id', count: 1, _id: 0 } },
  ]);

  // Attempts by class
  const attemptsByClass = await Attempt.aggregate([
    {
      $group: {
        _id: '$class_grade',
        count: { $sum: 1 },
      },
    },
    { $sort: { _id: 1 } },
    { $project: { class_grade: '$_id', count: 1, _id: 0 } },
  ]);

  // Score distribution
  const scoreRanges = [
    { range: '0-25', min: 0, max: 0.25 },
    { range: '26-50', min: 0.26, max: 0.5 },
    { range: '51-75', min: 0.51, max: 0.75 },
    { range: '76-100', min: 0.76, max: 1 },
  ];
  const scoreDistribution = await Promise.all(
    scoreRanges.map(async ({ range, min, max }) => {
      const count = await Attempt.countDocuments({
        submitted_at: { $exists: true },
        $expr: {
          $and: [
            { $gte: [{ $divide: ['$score', '$total'] }, min] },
            { $lte: [{ $divide: ['$score', '$total'] }, max] },
          ],
        },
      });
      return { range, count };
    })
  );

  // Top tests by attempts
  const topTests = await Attempt.aggregate([
    {
      $group: {
        _id: '$test_id',
        attempts: { $sum: 1 },
      },
    },
    { $sort: { attempts: -1 } },
    { $limit: 5 },
    {
      $lookup: {
        from: 'tests',
        localField: '_id',
        foreignField: '_id',
        as: 'test',
      },
    },
    { $unwind: '$test' },
    { $project: { title: '$test.title', attempts: 1, _id: 0 } },
  ]);

  return res.json({
    totalCourses,
    totalTests,
    totalAttempts,
    totalUsers,
    attemptsOverTime,
    attemptsByClass,
    scoreDistribution,
    topTests,
  });
});

export default router;
