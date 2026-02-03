import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/serverAdmin';

function isAuthorized(req: NextRequest) {
  const secret = req.headers.get('x-admin-secret');
  return secret && secret === process.env.ADMIN_PANEL_SECRET;
}

type IncomingQuestion = {
  test_id: string;
  body: string;
  options: string[];
  correct_indices: number[];
  explanation?: string;
  tags?: string[];
  pool_key?: string;
};

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  const supabase = createAdminClient();
  let payload: IncomingQuestion[];
  try {
    payload = await req.json();
    if (!Array.isArray(payload) || payload.length === 0) throw new Error('invalid body');
  } catch {
    return NextResponse.json({ error: 'Provide an array of questions' }, { status: 400 });
  }

  // Basic validation
  for (const q of payload) {
    if (!q.test_id || !q.body || !Array.isArray(q.options) || !Array.isArray(q.correct_indices)) {
      return NextResponse.json({ error: 'Each item requires test_id, body, options[], correct_indices[]' }, { status: 400 });
    }
  }

  const { data, error } = await supabase
    .from('questions')
    .insert(
      payload.map((q) => ({
        test_id: q.test_id,
        body: q.body,
        options: q.options,
        correct_indices: q.correct_indices,
        explanation: q.explanation ?? null,
        tags: q.tags ?? null,
        pool_key: q.pool_key ?? null,
      }))
    )
    .select('id')
    .limit(1);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, inserted: payload.length });
}
