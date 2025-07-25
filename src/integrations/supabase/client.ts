// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rgedldkagozpfzmlkwva.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnZWRsZGthZ296cGZ6bWxrd3ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4MDk3MjIsImV4cCI6MjA2NzM4NTcyMn0.-JF8DdSwnDZd8OapXUS7sgoGzqsn1_a4k726InOHdsY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});