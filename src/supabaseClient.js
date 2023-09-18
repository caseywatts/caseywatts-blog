import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseUrl = "https://gfdpkekcqnufsvydsdul.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmZHBrZWtjcW51ZnN2eWRzZHVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ5OTc2MzgsImV4cCI6MjAxMDU3MzYzOH0.lhRAgWtbq_WLOyDwetctFd-yRkFtDQYRLz-Fpq2p4Mc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
