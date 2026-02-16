import { Router, Request, Response } from 'express';
import { createUser, authenticateUser, generateToken, verifyToken } from '../lib/auth';
import User from '../models/User';
import FreeAccessEmail from '../models/FreeAccessEmail';

const router = Router();

// Sign up
router.post('/signup', async (req: Request, res: Response) => {
  try {
    const { email, password, name, class_grade } = req.body as {
      email?: string;
      password?: string;
      name?: string;
      class_grade?: number;
    };
    if (!email || !password || !name || typeof class_grade !== 'number') {
      return res.status(400).json({ error: 'email, password, name, and class_grade required' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'password must be at least 6 characters' });
    }
    if (class_grade < 1 || class_grade > 12) {
      return res.status(400).json({ error: 'class_grade must be between 1 and 12' });
    }
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: 'email already exists' });
    }
    const user = await createUser(email, password, name, class_grade);
    try {
      const normalizedEmail = email.trim().toLowerCase();
      const allowed = await FreeAccessEmail.findOne({ email: normalizedEmail }).select('_id').lean();
      if (allowed) {
        await User.findByIdAndUpdate(user._id, { $set: { free_access: true } });
        (user as any).free_access = true;
      }
    } catch (e) {
      console.error('Free access check error (signup):', e);
    }
    const token = generateToken(user._id.toString());
    return res.status(201).json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        class_grade: user.class_grade,
        avatar: user.avatar,
        free_access: (user as any).free_access,
        onboarding_completed: user.onboarding_completed,
      },
      token,
    });
  } catch (err) {
    console.error('Signup error:', err);
    return res.status(500).json({ error: 'internal server error' });
  }
});

// Login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as { email?: string; password?: string };
    if (!email || !password) {
      return res.status(400).json({ error: 'email and password required' });
    }
    const user = await authenticateUser(email, password);
    if (!user) {
      return res.status(401).json({ error: 'invalid credentials' });
    }
    try {
      const normalizedEmail = (user.email || '').trim().toLowerCase();
      const allowed = await FreeAccessEmail.findOne({ email: normalizedEmail }).select('_id').lean();
      if (allowed && !(user as any).free_access) {
        await User.findByIdAndUpdate(user._id, { $set: { free_access: true } });
        (user as any).free_access = true;
      }
    } catch (e) {
      console.error('Free access check error (login):', e);
    }
    const token = generateToken(user._id.toString());
    return res.json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        class_grade: user.class_grade,
        avatar: user.avatar,
        last_login: user.last_login,
        free_access: (user as any).free_access,
        onboarding_completed: user.onboarding_completed,
      },
      token,
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'internal server error' });
  }
});

// Get current user (protected)
router.get('/me', async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'token required' });
  }
  try {
    const decoded = verifyToken(token);
    if (!decoded || !decoded.userId) {
      return res.status(401).json({ error: 'invalid token' });
    }
    const user = await User.findById(decoded.userId).select('-password');
    if (!user || !user.active) {
      return res.status(401).json({ error: 'user not found' });
    }
    return res.json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        class_grade: user.class_grade,
        avatar: user.avatar,
        last_login: user.last_login,
        created_at: user.created_at,
        free_access: (user as any).free_access,
        onboarding_completed: user.onboarding_completed,
      },
    });
  } catch (err) {
    console.error('Auth me error:', err);
    return res.status(401).json({ error: 'invalid token' });
  }
});

export default router;
