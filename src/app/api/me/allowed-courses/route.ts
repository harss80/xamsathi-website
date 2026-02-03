import { NextRequest, NextResponse } from 'next/server';
import { createUserClientFromRequest } from '@/lib/supabase/request';

export async function GET(req: NextRequest) {
  const supabase = createUserClientFromRequest(req);
  const { data: userRes } = await supabase.auth.getUser();
  if (!userRes?.user) return NextResponse.json({ error: 'unauthenticated' }, { status: 401 });

  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('active', true)
    .order('created_at', { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
