import { Router, Request, Response } from 'express';
import Visit from '../models/Visit';
import Lead from '../models/Lead';

const router = Router();

router.post('/visit', async (req: Request, res: Response) => {
  try {
    const { path, referrer, ip, user_agent, country, region, city } = req.body as {
      path?: string;
      referrer?: string;
      ip?: string;
      user_agent?: string;
      country?: string;
      region?: string;
      city?: string;
    };

    if (!path) return res.status(400).json({ error: 'path required' });

    await Visit.create({
      path,
      referrer: referrer || undefined,
      ip: ip || undefined,
      user_agent: user_agent || undefined,
      country: country || undefined,
      region: region || undefined,
      city: city || undefined,
    });

    return res.json({ ok: true });
  } catch (e) {
    console.error('Track visit error:', e);
    return res.status(500).json({ error: 'internal server error' });
  }
});

router.post('/lead', async (req: Request, res: Response) => {
  try {
    const { action, entity_type, entity_id, path, referrer, ip, user_agent, country, region, city, meta } = req.body as {
      action?: string;
      entity_type?: string;
      entity_id?: string;
      path?: string;
      referrer?: string;
      ip?: string;
      user_agent?: string;
      country?: string;
      region?: string;
      city?: string;
      meta?: Record<string, unknown>;
    };

    if (!action) return res.status(400).json({ error: 'action required' });

    await Lead.create({
      action,
      entity_type: entity_type || undefined,
      entity_id: entity_id || undefined,
      path: path || undefined,
      referrer: referrer || undefined,
      ip: ip || undefined,
      user_agent: user_agent || undefined,
      country: country || undefined,
      region: region || undefined,
      city: city || undefined,
      meta: meta || undefined,
    });

    return res.json({ ok: true });
  } catch (e) {
    console.error('Track lead error:', e);
    return res.status(500).json({ error: 'internal server error' });
  }
});

export default router;
