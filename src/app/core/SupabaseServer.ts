import 'server-only';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const SupabaseServer = createClient(
        supabaseUrl,
        supabaseServiceKey
    );

export default SupabaseServer;