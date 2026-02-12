import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => ({}))) as { path?: string; referrer?: string };
    const path = (body.path || '').toString();
    if (!path) return NextResponse.json({ error: 'path required' }, { status: 400 });

    const backend = process.env.NEXT_PUBLIC_BACKEND_URL || '';
    if (!backend) return NextResponse.json({ ok: true });

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      undefined;

    const user_agent = req.headers.get('user-agent') || undefined;

    // Vercel-provided geo headers (no external API needed)
    const country = req.headers.get('x-vercel-ip-country') || undefined;
    const region = req.headers.get('x-vercel-ip-country-region') || undefined;
    const city = req.headers.get('x-vercel-ip-city') || undefined;

    const res = await fetch(new URL('/api/track/visit', backend).toString(), {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        path,
        referrer: body.referrer || req.headers.get('referer') || undefined,
        ip,
        user_agent,
        country,
        region,
        city,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
