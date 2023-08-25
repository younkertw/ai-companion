import { createClient } from '@supabase/supabase-js'

const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabase_anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Supabase
export const supabase = createClient(supabase_url!, supabase_anon_key!
//, {
//  realtime: {
//    params: {
//      eventsPerSecond: 0,
//    },
//  },
//})
)