import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://qfrxlqmwpxsjywsptxuj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmcnhscW13cHhzanl3c3B0eHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxOTc4NTksImV4cCI6MjA1Mzc3Mzg1OX0.io-cimb8z-kuLeFlacyKqRjAhTOfy4MYPabokiyaRlk";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
