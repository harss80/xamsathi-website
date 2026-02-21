import { Router, Request, Response } from 'express';
import mongoose from 'mongoose';
import DiscussionComment from '../models/DiscussionComment';
import User from '../models/User';

const router = Router();

function normalizeBody(input: unknown): string {
  return typeof input === 'string' ? input.trim() : '';
}

function asObjectId(id: string): mongoose.Types.ObjectId {
  return new mongoose.Types.ObjectId(id);
}

router.get('/question/:questionId', async (req: Request, res: Response) => {
  try {
    const questionId = req.params.questionId;
    if (!questionId) return res.status(400).json({ error: 'questionId required' });

    const items = await DiscussionComment.find({ question_id: questionId, active: true })
      .sort({ created_at: 1 })
      .lean();

    return res.json({ items });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return res.status(500).json({ error: 'failed to load discussions', details: msg });
  }
});

router.post('/question/:questionId', async (req: Request, res: Response) => {
  try {
    const questionId = req.params.questionId;
    if (!questionId) return res.status(400).json({ error: 'questionId required' });

    const userId = req.header('x-user-id');
    if (!userId) return res.status(401).json({ error: 'User ID required' });

    const body = normalizeBody((req.body as Record<string, unknown> | null)?.body);
    const parentIdRaw = normalizeBody((req.body as Record<string, unknown> | null)?.parentId);

    if (!body) return res.status(400).json({ error: 'body required' });

    const user = await User.findById(userId).select('name active').lean();
    const u = user as { name?: unknown; active?: unknown } | null;
    if (!u || u.active === false) return res.status(401).json({ error: 'unauthorized' });

    let parentId: mongoose.Types.ObjectId | null = null;
    if (parentIdRaw) {
      if (!mongoose.Types.ObjectId.isValid(parentIdRaw)) {
        return res.status(400).json({ error: 'parentId invalid' });
      }
      parentId = asObjectId(parentIdRaw);
    }

    const created = await DiscussionComment.create({
      question_id: questionId,
      user_id: asObjectId(userId),
      user_name: String(u.name || 'Student'),
      body,
      parent_id: parentId,
      upvotes: 0,
      upvoters: [],
      active: true,
    });

    return res.json({ id: created._id });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return res.status(500).json({ error: 'failed to post comment', details: msg });
  }
});

router.post('/comment/:commentId/upvote', async (req: Request, res: Response) => {
  try {
    const commentId = req.params.commentId;
    if (!commentId) return res.status(400).json({ error: 'commentId required' });
    if (!mongoose.Types.ObjectId.isValid(commentId)) return res.status(400).json({ error: 'commentId invalid' });

    const userId = req.header('x-user-id');
    if (!userId) return res.status(401).json({ error: 'User ID required' });
    if (!mongoose.Types.ObjectId.isValid(userId)) return res.status(400).json({ error: 'User ID invalid' });

    const comment = await DiscussionComment.findById(commentId);
    if (!comment || comment.active === false) return res.status(404).json({ error: 'comment not found' });

    const uid = asObjectId(userId);
    const upvoters = (comment.upvoters || []) as mongoose.Types.ObjectId[];
    const hasUpvoted = upvoters.some((x: mongoose.Types.ObjectId) => x.toString() === uid.toString());

    if (hasUpvoted) {
      comment.upvoters = upvoters.filter((x: mongoose.Types.ObjectId) => x.toString() !== uid.toString());
      comment.upvotes = Math.max(0, (comment.upvotes || 0) - 1);
    } else {
      comment.upvoters = [...upvoters, uid];
      comment.upvotes = (comment.upvotes || 0) + 1;
    }

    await comment.save();

    return res.json({ upvotes: comment.upvotes, upvoted: !hasUpvoted });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return res.status(500).json({ error: 'failed to upvote', details: msg });
  }
});

export default router;
