import { createClient } from '@supabase/supabase-js';

export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
  if (!url || !key) {
    throw new Error('Missing Supabase admin env');
  }
  return createClient(url, key);
}
