import { NextRequest, NextResponse } from 'next/server';
import { createUserClientFromRequest } from '@/lib/supabase/request';

export async function POST(req: NextRequest) {
  const supabase = createUserClientFromRequest(req);
  const { data: userRes } = await supabase.auth.getUser();
  const user = userRes?.user;
  if (!user) return NextResponse.json({ error: 'unauthenticated' }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const { test_id } = body;
  if (!test_id) return NextResponse.json({ error: 'test_id required' }, { status: 400 });

  // Fetch test + course to validate class access
  const { data: test, error: testErr } = await supabase
    .from('tests')
    .select('id, course_id, title, duration_min')
    .eq('id', test_id)
    .single();
  if (testErr || !test) return NextResponse.json({ error: 'test not found or not accessible' }, { status: 404 });

  // Get questions ids (only active)
  const { data: qs, error: qErr } = await supabase
    .from('questions')
    .select('id')
    .eq('test_id', test_id)
    .eq('active', true);
  if (qErr) return NextResponse.json({ error: qErr.message }, { status: 500 });
  if (!qs || qs.length === 0) return NextResponse.json({ error: 'no questions' }, { status: 400 });

  // Shuffle
  const ids = (qs as Array<{ id: string }>).map((q) => q.id);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }

  // Create attempt
  const { data: attempt, error: aErr } = await supabase
    .from('attempts')
    .insert({ user_id: user.id, test_id: test_id, question_order: ids })
    .select('id')
    .single();
  if (aErr) return NextResponse.json({ error: aErr.message }, { status: 500 });

  return NextResponse.json({ attempt_id: attempt.id, test: { id: test.id, title: test.title, duration_min: test.duration_min }, questions_count: ids.length });
}
