import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectMongo } from './lib/mongo';
import adminRouter from './routes/admin';
import testsRouter from './routes/tests';
import meRouter from './routes/me';
import type { Request, Response, NextFunction } from 'express';

dotenv.config();

const app = express();

const allowedOrigin = process.env.ALLOWED_ORIGIN || '*';
const corsOptions = {
  origin: allowedOrigin === '*' ? true : allowedOrigin,
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'x-admin-secret', 'x-user-id', 'x-class-grade'],
  methods: ['GET', 'POST', 'OPTIONS'],
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json({ limit: '1mb' }));

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
app.use('/api/tests', testsRouter);
app.use('/api/me', meRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Backend listening on ${port}`);
});
