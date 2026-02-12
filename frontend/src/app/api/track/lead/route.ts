import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => ({}))) as {
      action?: string;
      entity_type?: string;
      entity_id?: string;
      path?: string;
      referrer?: string;
      meta?: Record<string, unknown>;
    };

    const action = (body.action || '').toString();
    if (!action) return NextResponse.json({ error: 'action required' }, { status: 400 });

    const backend = process.env.NEXT_PUBLIC_BACKEND_URL || '';
    if (!backend) return NextResponse.json({ ok: true });

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      undefined;

    const user_agent = req.headers.get('user-agent') || undefined;

    const country = req.headers.get('x-vercel-ip-country') || undefined;
    const region = req.headers.get('x-vercel-ip-country-region') || undefined;
    const city = req.headers.get('x-vercel-ip-city') || undefined;

    await fetch(new URL('/api/track/lead', backend).toString(), {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        action,
        entity_type: body.entity_type || undefined,
        entity_id: body.entity_id || undefined,
        path: body.path || undefined,
        referrer: body.referrer || req.headers.get('referer') || undefined,
        ip,
        user_agent,
        country,
        region,
        city,
        meta: body.meta || undefined,
      }),
    }).catch(() => {});

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
