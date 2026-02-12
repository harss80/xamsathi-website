import { Router, Request, Response } from 'express';
import User from '../models/User';
import { authenticateUser, generateToken, verifyToken } from '../lib/auth';

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

export default router;
