import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectMongo } from './lib/mongo';
import adminRouter from './routes/admin';
import testsRouter from './routes/tests';
import meRouter from './routes/me';
import authRouter from './routes/auth';
import authGoogleRouter from './routes/auth-google';
import adminAuthRouter from './routes/admin-auth';
import trackRouter from './routes/track';
import leaderboardRouter from './routes/leaderboard';
import type { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { ensureBootstrapAdmin } from './lib/bootstrap-admin';
import paymentsRouter from './routes/payments';
import gamificationRouter from './routes/gamification';

dotenv.config();

const app = express();

const allowedOrigin = process.env.ALLOWED_ORIGIN || '*';
const allowedOrigins = allowedOrigin
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

const corsOptions = {
  origin:
    allowedOrigin === '*'
      ? true
      : (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) return callback(null, true);
        return callback(new Error('Not allowed by CORS'));
      },
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'x-admin-secret', 'x-user-id', 'x-class-grade'],
  methods: ['GET', 'POST', 'OPTIONS'],
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json({ limit: '1mb' }));

app.use((req: Request, res: Response, next: NextFunction) => {
  const started = Date.now();
  const mongoStatusIn = mongoose.connection.readyState === 1 ? 'connected' : `state-${mongoose.connection.readyState}`;
  console.log(`[REQ] ${req.method} ${req.originalUrl} mongo=${mongoStatusIn}`);
  res.on('finish', () => {
    const mongoStatusOut = mongoose.connection.readyState === 1 ? 'connected' : `state-${mongoose.connection.readyState}`;
    console.log(`[RES] ${req.method} ${req.originalUrl} ${res.statusCode} ${Date.now() - started}ms mongo=${mongoStatusOut}`);
  });
  next();
});

app.get('/api/health', (_req: Request, res: Response) => res.json({ ok: true }));

// Ensure DB connects on first request
app.use(async (_req: Request, _res: Response, next: NextFunction) => {
  try {
    await connectMongo();
  } catch (e) {
    return next(e);
  }
  return next();
});

app.use('/api/admin', adminRouter);
app.use('/api/admin-auth', adminAuthRouter);
app.use('/api/track', trackRouter);
app.use('/api/tests', testsRouter);
app.use('/api/me', meRouter);
app.use('/api/auth', authRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/auth', authGoogleRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/gamification', gamificationRouter);

const port = process.env.PORT || 3001;
connectMongo()
  .then(async () => {
    try {
      await ensureBootstrapAdmin();
    } catch (e) {
      console.error('Bootstrap admin error:', (e as Error).message);
    }
  })
  .catch((e) => console.error('Mongo: startup connect error', (e as Error).message));
app.listen(port, () => {
  console.log(`Backend listening on ${port}`);
});
