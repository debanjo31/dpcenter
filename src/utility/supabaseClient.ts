import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://omxgfeuyewlmhorxfokh.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9teGdmZXV5ZXdsbWhvcnhmb2toIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzNjMwODIsImV4cCI6MjAwMzkzOTA4Mn0.P-C7eeMf_WPOGHk_SmYj1tJfZKF3G3JwejArARA7t1c";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
