import { createClient } from '@supabase/supabase-js'
import { ENV } from '@/lib/cfg'

export const supabaseAdmin = createClient(
    ENV.SUPABASE_PROJECT_URL,
    ENV.SUPABASE_SECRET_KEY
)
