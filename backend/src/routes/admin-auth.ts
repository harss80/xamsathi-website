import { Router, Request, Response } from 'express';
import crypto from 'crypto';
import User from '../models/User';
import { authenticateUser, generateToken, hashPassword, verifyToken } from '../lib/auth';

const router = Router();

function setAdminCookie(res: Response, token: string, req?: Request) {
  const isHttps = (req?.headers['x-forwarded-proto'] || '').toString().includes('https') || (req?.secure ?? false);
  const secure = isHttps ? '; Secure' : '';
  res.setHeader(
    'Set-Cookie',
    `admin_token=${encodeURIComponent(token)}; Path=/; HttpOnly; Max-Age=${60 * 60 * 24 * 30}; SameSite=None${secure}`
  );
}

function clearAdminCookie(res: Response) {
  res.setHeader('Set-Cookie', 'admin_token=; Path=/; HttpOnly; Max-Age=0; SameSite=None; Secure');
}

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

function sha256Hex(input: string): string {
  return crypto.createHash('sha256').update(input).digest('hex');
}

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as { email?: string; password?: string };
    if (!email || !password) return res.status(400).json({ error: 'email and password required' });

    const user = await authenticateUser(email, password);
    if (!user) return res.status(401).json({ error: 'invalid credentials' });
    if (user.role !== 'admin') return res.status(403).json({ error: 'forbidden' });

    const token = generateToken(user._id.toString());
    setAdminCookie(res, token, req);

    return res.json({
      admin: {
        id: user._id,
        email: user.email,
        name: user.name,
        last_login: user.last_login,
      },
    });
  } catch (e) {
    console.error('Admin login error:', e);
    return res.status(500).json({ error: 'internal server error' });
  }
});

router.post('/logout', async (_req: Request, res: Response) => {
  clearAdminCookie(res);
  return res.json({ ok: true });
});

router.get('/me', async (req: Request, res: Response) => {
  try {
    const cookieToken = readCookie(req, 'admin_token');
    const headerToken = (req.headers.authorization || '').replace('Bearer ', '');
    const token = cookieToken || headerToken;
    if (!token) return res.status(401).json({ error: 'unauthorized' });

    const decoded = verifyToken(token);
    if (!decoded?.userId) return res.status(401).json({ error: 'unauthorized' });

    const raw = await User.findById(decoded.userId)
      .select('email name role last_login active')
      .lean()
      .exec();
    const user = (Array.isArray(raw) ? raw[0] : raw) as { _id?: unknown; email?: string; name?: string; role?: string; last_login?: Date; active?: boolean } | null;
    if (!user || !user.active || user.role !== 'admin') return res.status(401).json({ error: 'unauthorized' });

    return res.json({
      admin: {
        id: user._id,
        email: user.email,
        name: user.name,
        last_login: user.last_login,
      },
    });
  } catch {
    return res.status(401).json({ error: 'unauthorized' });
  }
});

router.post('/forgot-password', async (req: Request, res: Response) => {
  try {
    const { email } = req.body as { email?: string };
    const normalizedEmail = (email || '').trim().toLowerCase();
    if (!normalizedEmail) return res.status(400).json({ error: 'email required' });

    const user = await User.findOne({ email: normalizedEmail, active: true });
    if (!user || user.role !== 'admin') {
      return res.json({ ok: true });
    }

    const rawToken = crypto.randomBytes(32).toString('hex');
    const tokenHash = sha256Hex(rawToken);

    user.reset_password_token_hash = tokenHash;
    user.reset_password_expires_at = new Date(Date.now() + 1000 * 60 * 30);
    await user.save();

    const baseUrl = (process.env.ADMIN_RESET_BASE_URL || '').trim() || 'https://www.xamsathi.in/admin';
    const resetLink = `${baseUrl}?reset_token=${rawToken}`;

    if (process.env.NODE_ENV !== 'production') {
      return res.json({ ok: true, reset_link: resetLink });
    }

    console.log('Admin reset link:', resetLink);
    return res.json({ ok: true });
  } catch (e) {
    console.error('Admin forgot-password error:', e);
    return res.status(500).json({ error: 'internal server error' });
  }
});

router.post('/reset-password', async (req: Request, res: Response) => {
  try {
    const { token, new_password } = req.body as { token?: string; new_password?: string };
    if (!token || !new_password) return res.status(400).json({ error: 'token and new_password required' });
    if (new_password.length < 8) return res.status(400).json({ error: 'password too short' });

    const tokenHash = sha256Hex(token);
    const user = await User.findOne({
      reset_password_token_hash: tokenHash,
      reset_password_expires_at: { $gt: new Date() },
      active: true,
      role: 'admin',
    });
    if (!user) return res.status(400).json({ error: 'invalid or expired token' });

    user.password = await hashPassword(new_password);
    user.reset_password_token_hash = undefined;
    user.reset_password_expires_at = undefined;
    await user.save();

    return res.json({ ok: true });
  } catch (e) {
    console.error('Admin reset-password error:', e);
    return res.status(500).json({ error: 'internal server error' });
  }
});

export default router;
