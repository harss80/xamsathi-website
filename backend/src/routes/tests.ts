import { Router, Request, Response } from 'express';
import Test, { ITest } from '../models/Test';
import Course, { ICourse } from '../models/Course';
import Question from '../models/Question';
import Attempt, { IAttempt } from '../models/Attempt';
import LeaderboardEntry from '../models/LeaderboardEntry';
import { allPhysicsQuestions } from '../data';



const router = Router();

// --- New Routes for Listing Content ---
router.get('/courses', async (req: Request, res: Response) => {
  // Optional: Filter by class_grade if passed in query or header, but for now return all active courses
  const classHeader = req.header('x-class-grade');
  const filter: any = { active: true };

  if (classHeader) {
    const grade = Number(classHeader);
    if (!isNaN(grade)) {
      filter.class_grade = grade;
    }
  }

  const courses = await Course.find(filter).sort({ class_grade: 1, createdAt: -1 }).lean();
  return res.json({ items: courses });
});

router.get('/courses/:courseId/tests', async (req: Request, res: Response) => {
  const { courseId } = req.params;
  if (!courseId) return res.status(400).json({ error: 'courseId required' });

  const classHeader = req.header('x-class-grade');
  const classGrade = classHeader ? Number(classHeader) : NaN;

  if (classHeader && Number.isNaN(classGrade)) {
    return res.status(400).json({ error: 'x-class-grade header must be a number' });
  }

  if (!Number.isNaN(classGrade)) {
    const course = await Course.findById(courseId).select('_id class_grade').lean();
    if (!course) return res.status(404).json({ error: 'course not found' });
    if ((course as any).class_grade !== classGrade) return res.status(403).json({ error: 'forbidden for this class' });
  }

  const tests = await Test.find({ course_id: courseId, active: true })
    .sort({ createdAt: 1 }) // Show in created order (Week 1 -> Week 4)
    .select('_id title difficulty duration_min')
    .lean();

  return res.json({ items: tests });
});
// --------------------------------------

router.post('/start', async (req: Request, res: Response) => {
  const userId = req.header('x-user-id');
  const classHeader = req.header('x-class-grade');
  const classGrade = classHeader ? Number(classHeader) : NaN;
  if (!userId) return res.status(401).json({ error: 'x-user-id required' });
  if (!classHeader || Number.isNaN(classGrade)) return res.status(400).json({ error: 'x-class-grade header required' });

  const body = req.body as { test_id?: string } | null;
  const test_id = body?.test_id;
  if (!test_id) return res.status(400).json({ error: 'test_id required' });

  const test = (await Test.findById(test_id).lean()) as (ITest & { _id: string }) | null;
  if (!test) return res.status(404).json({ error: 'test not found' });
  const course = (await Course.findById(test.course_id).lean()) as (ICourse & { _id: string }) | null;
  if (!course) return res.status(404).json({ error: 'course not found' });
  if (course.class_grade !== classGrade) return res.status(403).json({ error: 'forbidden for this class' });

  const qs = (await Question.find({ test_id, active: true }).select('_id').lean()) as Array<{ _id: unknown }>;
  if (!qs || qs.length === 0) return res.status(400).json({ error: 'no questions' });

  const ids: string[] = qs.map((q) => String(q._id));
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }

  const attempt = await Attempt.create({ user_id: userId, test_id, question_order: ids });
  return res.json({ attempt_id: attempt._id, test: { id: test._id, title: test.title, duration_min: test.duration_min }, questions_count: ids.length });
});

router.get('/questions', async (req: Request, res: Response) => {
  const userId = req.header('x-user-id');
  if (!userId) return res.status(401).json({ error: 'x-user-id required' });

  const attempt_id = req.query.attempt_id as string | undefined;
  if (!attempt_id) return res.status(400).json({ error: 'attempt_id required' });

  const attempt = (await Attempt.findById(attempt_id).lean()) as (IAttempt & { _id: string }) | null;
  if (!attempt) return res.status(404).json({ error: 'attempt not found' });
  if (attempt.user_id !== userId) return res.status(403).json({ error: 'forbidden' });
  if (attempt.submitted_at) return res.status(409).json({ error: 'attempt already submitted' });

  const ids: string[] = Array.isArray(attempt.question_order)
    ? (attempt.question_order as unknown[]).map((id) => String(id))
    : [];
  if (!ids.length) return res.status(400).json({ error: 'no questions in attempt' });

  const raw = await Question.find({ _id: { $in: ids } }).select('_id body options').lean();
  type QDoc = { _id: unknown; body: string; options: string[] };
  const byId = new Map<string, { id: string; body: string; options: string[] }>();
  for (const q of (raw as unknown as QDoc[])) {
    const idStr = String(q._id);
    byId.set(idStr, { id: idStr, body: q.body, options: q.options });
  }

  const ordered = ids
    .map((qid) => byId.get(String(qid)))
    .filter((v): v is { id: string; body: string; options: string[] } => Boolean(v));

  return res.json({ attempt_id, questions: ordered });
});

router.post('/submit', async (req: Request, res: Response) => {
  const userId = req.header('x-user-id');
  if (!userId) return res.status(401).json({ error: 'x-user-id required' });

  const body = req.body as { attempt_id?: string; answers?: { question_id: string; selected_indices: number[] }[] } | null;
  const attempt_id = body?.attempt_id;
  const answers = body?.answers || [];
  if (!attempt_id) return res.status(400).json({ error: 'attempt_id required' });

  const attempt = (await Attempt.findById(attempt_id).lean()) as (IAttempt & { _id: string }) | null;
  if (!attempt) return res.status(404).json({ error: 'attempt not found' });
  if (attempt.user_id !== userId) return res.status(403).json({ error: 'forbidden' });
  if (attempt.submitted_at) return res.status(409).json({ error: 'attempt already submitted' });

  const ids: string[] = Array.isArray(attempt.question_order)
    ? (attempt.question_order as unknown[]).map((id) => String(id))
    : [];
  const total = ids.length;
  if (!total) return res.status(400).json({ error: 'no questions in attempt' });

  const answersMap = new Map<string, number[]>();
  for (const a of answers) {
    if (a && a.question_id) {
      const uniqueSorted = Array.from(new Set(a.selected_indices || [])).sort((x, y) => x - y);
      answersMap.set(String(a.question_id), uniqueSorted);
    }
  }

  const raw = await Question.find({ _id: { $in: ids } }).select('_id correct_indices').lean();
  type QDoc = { _id: unknown; correct_indices: number[] };
  const correctMap = new Map<string, number[]>();
  for (const q of (raw as unknown as QDoc[])) {
    const idStr = String(q._id);
    const uniq = Array.from(new Set(q.correct_indices || [])).sort((x, y) => x - y);
    correctMap.set(idStr, uniq);
  }

  let score = 0;
  for (const qid of ids) {
    const sel = answersMap.get(String(qid)) || [];
    const corr = correctMap.get(String(qid)) || [];
    if (sel.length === corr.length && sel.every((v, i) => v === corr[i])) score += 1;
  }

  await Attempt.findByIdAndUpdate(attempt_id, { $set: { submitted_at: new Date(), score, total } });

  // Auto-upsert leaderboard entry (per-test leaderboard)
  try {
    const testSeriesId = String(attempt.test_id);
    const accuracy = total > 0 ? Math.round((score / total) * 100) : 0;
    const existing = await LeaderboardEntry.findOne({ user_id: userId, test_series_id: testSeriesId });
    if (!existing) {
      await LeaderboardEntry.create({ user_id: userId, test_series_id: testSeriesId, score, accuracy });
    } else if (typeof existing.score === 'number' && score > existing.score) {
      existing.score = score;
      existing.accuracy = accuracy;
      await existing.save();
    }
  } catch (e) {
    console.error('Leaderboard auto-submit error:', e);
  }
  return res.json({ attempt_id, score, total });
});

router.post('/auto-generate', (req: Request, res: Response) => {
  const { subject, chapters, numQuestions } = req.body;
  if (!subject || !numQuestions) {
    return res.status(400).json({ error: 'subject and numQuestions are required' });
  }

  let selectedQuestions: any[] = [];

  if (subject === 'Physics') {
    // Pick random questions from allPhysicsQuestions
    if (allPhysicsQuestions && allPhysicsQuestions.length > 0) {
      let pool = [...allPhysicsQuestions];
      // Shuffle pool
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      selectedQuestions = pool.slice(0, numQuestions);
    }
  }

  // If subject is not physics or we have no questions, return empty (or can handle fallback in frontend)
  return res.json({ questions: selectedQuestions });
});

export default router;
