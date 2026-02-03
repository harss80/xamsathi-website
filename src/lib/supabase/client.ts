import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!url || !anon) {
  // Do not throw at import time in Next.js. Warn once in dev.
  if (process.env.NODE_ENV !== 'production') {
    console.warn('Supabase client missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY');
  }
}

export const supabase = createClient(url || 'http://localhost', anon || '');
