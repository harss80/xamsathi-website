import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/serverAdmin';

function isAuthorized(req: NextRequest) {
  const secret = req.headers.get('x-admin-secret');
  return secret && secret === process.env.ADMIN_PANEL_SECRET;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  const supabase = createAdminClient();
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get('course_id');
  let query = supabase.from('tests').select('*').order('created_at', { ascending: false });
  if (courseId) query = query.eq('course_id', courseId);
  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  const supabase = createAdminClient();
  const body = await req.json();
  const { course_id, title, difficulty, duration_min } = body || {};
  if (!course_id || !title) {
    return NextResponse.json({ error: 'course_id and title required' }, { status: 400 });
  }
  const { data, error } = await supabase
    .from('tests')
    .insert({ course_id, title, difficulty: difficulty || null, duration_min: duration_min ?? 60 })
    .select('*')
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
