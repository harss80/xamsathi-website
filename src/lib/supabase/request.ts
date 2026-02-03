import { createClient } from '@supabase/supabase-js';
import type { NextRequest } from 'next/server';

export function createUserClientFromRequest(req: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
  const auth = req.headers.get('authorization') || '';
  return createClient(url, anon, {
    global: { headers: { Authorization: auth } },
    auth: { persistSession: false, detectSessionInUrl: false },
  });
}
