import { Router, Request, Response, NextFunction } from 'express';
import Course from '../models/Course';
import Test from '../models/Test';
import Question from '../models/Question';
import Attempt from '../models/Attempt';
import Lead from '../models/Lead';
import Visit from '../models/Visit';
import { verifyToken } from '../lib/auth';
import User from '../models/User';
import FreeAccessEmail from '../models/FreeAccessEmail';

const router = Router();

function readCookie(req: Request, name: string): string | null {
  const raw = req.headers.cookie;
  if (!raw) return null;
  const parts = raw.split(';').map((p) => p.trim());
  for (const p of parts) {
    if (!p) continue;
    const eq = p.indexOf('=');
    if (eq < 0) continue;
    const k = p.slice(0, eq);
    if (k !== name) continue;
    return decodeURIComponent(p.slice(eq + 1));
  }
  return null;
}

function normalizeEmail(input: unknown): string {
  return typeof input === 'string' ? input.trim().toLowerCase() : '';
}

router.get('/free-access', requireAdmin, async (_req: Request, res: Response) => {
  const items = await FreeAccessEmail.find({}).sort({ createdAt: -1 as const }).lean();
  return res.json({ items: items.map((i) => ({ email: i.email, createdAt: i.createdAt })) });
});

router.post('/free-access', requireAdmin, async (req: Request, res: Response) => {
  const email = normalizeEmail((req.body as Record<string, unknown> | null)?.email);
  if (!email) return res.status(400).json({ error: 'email required' });

  await FreeAccessEmail.updateOne({ email }, { $set: { email } }, { upsert: true });
  await User.updateMany({ email }, { $set: { free_access: true } });
  return res.json({ ok: true });
});

router.delete('/free-access', requireAdmin, async (req: Request, res: Response) => {
  const email = normalizeEmail((req.body as Record<string, unknown> | null)?.email);
  if (!email) return res.status(400).json({ error: 'email required' });

  await FreeAccessEmail.deleteOne({ email });
  await User.updateMany({ email }, { $set: { free_access: false } });
  return res.json({ ok: true });
});

async function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const cookieToken = readCookie(req, 'admin_token');
  const headerToken = (req.headers.authorization || '').toString().replace('Bearer ', '');
  const token = cookieToken || headerToken;
  if (!token) return res.status(401).json({ error: 'unauthorized' });

  const decoded = verifyToken(token);
  if (!decoded?.userId) return res.status(401).json({ error: 'unauthorized' });

  const raw = await User.findById(decoded.userId).select('role active').lean().exec();
  const user = (Array.isArray(raw) ? raw[0] : raw) as { role?: string; active?: boolean } | null;
  if (!user || !user.active || user.role !== 'admin') return res.status(401).json({ error: 'unauthorized' });

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
  const questions = await Question.find({}).sort({ createdAt: -1 as const }).skip(skip).limit(limit).lean();
  return res.json({ items: questions });
});

router.get('/attempts', requireAdmin, async (req: Request, res: Response) => {
  const limit = Number(req.query.limit || 50);
  const page = Number(req.query.page || 1);
  const skip = (page - 1) * limit;
  const attempts = await Attempt.find({}).sort({ started_at: -1 as const }).skip(skip).limit(limit).lean();
  return res.json({ items: attempts });
});

router.get('/users', requireAdmin, async (req: Request, res: Response) => {
  const limit = Number(req.query.limit || 50);
  const page = Number(req.query.page || 1);
  const skip = (page - 1) * limit;

  const q = (req.query.q || '').toString().trim();
  const role = (req.query.role || '').toString().trim();

  const filter: Record<string, unknown> = {};
  if (role) filter.role = role;
  if (q) {
    filter.$or = [
      { email: { $regex: q, $options: 'i' } },
      { name: { $regex: q, $options: 'i' } },
      { phone: { $regex: q, $options: 'i' } },
    ];
  }

  const [items, total] = await Promise.all([
    User.find(filter)
      .select(
        'email name role class_grade phone avatar created_at last_login active onboarding_completed target_exam stream medium school city guardian_phone student_photo'
      )
      .sort({ created_at: -1 as const })
      .skip(skip)
      .limit(limit)
      .lean(),
    User.countDocuments(filter),
  ]);

  const normalized = items.map((u) => {
    if (!u || typeof u !== 'object') return u;
    const r = u as Record<string, unknown>;
    const hasPhoto = typeof r.student_photo === 'string' && !!r.student_photo;
    const { student_photo, ...rest } = r;
    void student_photo;
    return { ...rest, student_photo_present: hasPhoto };
  });

  return res.json({ items: normalized, total, page, limit });
});

router.get('/users/:id/leads', requireAdmin, async (req: Request, res: Response) => {
  const id = req.params.id;
  const limit = Number(req.query.limit || 50);
  const page = Number(req.query.page || 1);
  const skip = (page - 1) * limit;

  const [items, total] = await Promise.all([
    Lead.find({ user_id: id })
      .sort({ created_at: -1 as const })
      .skip(skip)
      .limit(limit)
      .lean(),
    Lead.countDocuments({ user_id: id }),
  ]);

  return res.json({ items, total, page, limit });
});

router.get('/leads', requireAdmin, async (req: Request, res: Response) => {
  const limit = Number(req.query.limit || 50);
  const page = Number(req.query.page || 1);
  const skip = (page - 1) * limit;

  const action = (req.query.action || '').toString().trim();
  const entity_type = (req.query.entity_type || '').toString().trim();
  const entity_id = (req.query.entity_id || '').toString().trim();

  const filter: Record<string, unknown> = {};
  if (action) filter.action = action;
  if (entity_type) filter.entity_type = entity_type;
  if (entity_id) filter.entity_id = entity_id;

  const [items, total] = await Promise.all([
    Lead.find(filter)
      .sort({ created_at: -1 as const })
      .skip(skip)
      .limit(limit)
      .lean(),
    Lead.countDocuments(filter),
  ]);

  return res.json({ items, total, page, limit });
});

router.get('/users/:id', requireAdmin, async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await User.findById(id)
    .select(
      'email name role class_grade phone avatar created_at last_login active onboarding_completed target_exam stream medium school city guardian_phone student_photo'
    )
    .lean();
  if (!user) return res.status(404).json({ error: 'not found' });

  const r = user as Record<string, unknown>;
  const hasPhoto = typeof r.student_photo === 'string' && !!r.student_photo;
  const { student_photo, ...rest } = r;
  void student_photo;
  return res.json({ user: { ...rest, student_photo_present: hasPhoto } });
});

router.get('/users/:id/attempts', requireAdmin, async (req: Request, res: Response) => {
  const id = req.params.id;
  const limit = Number(req.query.limit || 50);
  const page = Number(req.query.page || 1);
  const skip = (page - 1) * limit;

  const [items, total] = await Promise.all([
    Attempt.find({ user_id: id })
      .sort({ started_at: -1 as const })
      .skip(skip)
      .limit(limit)
      .lean(),
    Attempt.countDocuments({ user_id: id }),
  ]);

  return res.json({ items, total, page, limit });
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

  const leadsOverTime = await Lead.aggregate([
    { $match: { created_at: { $gte: thirtyDaysAgo } } },
    {
      $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$created_at' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { _id: 1 } },
    { $project: { date: '$_id', count: 1, _id: 0 } },
  ]);

  const visitsOverTime = await Visit.aggregate([
    { $match: { created_at: { $gte: thirtyDaysAgo } } },
    {
      $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$created_at' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { _id: 1 } },
    { $project: { date: '$_id', count: 1, _id: 0 } },
  ]);

  const topCountries = await Visit.aggregate([
    { $match: { country: { $exists: true, $nin: [null, ''] } } },
    { $group: { _id: '$country', count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 10 },
    { $project: { country: '$_id', count: 1, _id: 0 } },
  ]);

  const topRegions = await Visit.aggregate([
    { $match: { region: { $exists: true, $nin: [null, ''] } } },
    { $group: { _id: '$region', count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 10 },
    { $project: { region: '$_id', count: 1, _id: 0 } },
  ]);

  const topEntitiesByLeads = await Lead.aggregate([
    {
      $group: {
        _id: { entity_type: '$entity_type', entity_id: '$entity_id' },
        count: { $sum: 1 },
      },
    },
    { $sort: { count: -1 } },
    { $limit: 10 },
    {
      $project: {
        entity_type: '$_id.entity_type',
        entity_id: '$_id.entity_id',
        count: 1,
        _id: 0,
      },
    },
  ]);
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
    leadsOverTime,
    visitsOverTime,
    topCountries,
    topRegions,
    topEntitiesByLeads,
  });
});

export default router;
