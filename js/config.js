// Supabase configuration
// Replace these with your actual Supabase project credentials
window.SUPABASE_URL = 'YOUR_SUPABASE_URL'; // e.g., https://xxxxx.supabase.co
window.SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Only create the client when URL is valid (avoids "Invalid supabaseUrl" and "supabase.from is not a function")
const url = window.SUPABASE_URL || '';
const key = window.SUPABASE_ANON_KEY || '';
const isValidUrl = url.startsWith('https://') && url.includes('.') && !url.includes('YOUR_') && !url.includes('your-project');
if (isValidUrl && key && !key.includes('YOUR_') && !key.includes('your-anon-key')) {
  window.supabase = window.supabase.createClient(url, key);
} else {
  window.supabase = null;
}