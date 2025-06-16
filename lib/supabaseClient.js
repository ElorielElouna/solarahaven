import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tmhplvzsyzmdkkizgxuq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtaHBsdnpzeXptZGtraXpneHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNzE2MjMsImV4cCI6MjA2NTY0NzYyM30.DifYGL6L0hZLpjg9z5F7g9hW7RWcJVvDkhXWmmcE15k";

export const supabase = createClient(supabaseUrl, supabaseKey);
