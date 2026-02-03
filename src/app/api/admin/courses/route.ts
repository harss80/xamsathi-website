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
  const limit = Number(searchParams.get('limit') || 50);
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  const supabase = createAdminClient();
  const body = await req.json();
  const { title, description, class_grade } = body || {};
  if (!title || !class_grade) {
    return NextResponse.json({ error: 'title and class_grade required' }, { status: 400 });
  }
  const { data, error } = await supabase
    .from('courses')
    .insert({ title, description: description || null, class_grade })
    .select('*')
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
