import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL: string = 'https://nkbqvpwicqtsoqwmjsit.supabase.co';
const SUPABASE_ANON_KEY: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rYnF2cHdpY3F0c29xd21qc2l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc1MzY3NDAsImV4cCI6MjA4MzExMjc0MH0.I4qmnhi-lF9CRLdSsprcWdtwhiXOtIH-Q2yOIKVmrJI';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
