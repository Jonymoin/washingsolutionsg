# Visitor IP logging

This project keeps the existing website and Google Ads tracking and adds a Netlify Edge Function.

## Files added
- `netlify/edge-functions/visitor-log.ts` — logs HTML navigation requests.
- `supabase/visitor_logs.sql` — creates the Supabase table and indexes.

## Supabase setup
1. Create a Supabase project.
2. Open SQL Editor and run `supabase/visitor_logs.sql`.
3. In Netlify, add these environment variables with **Functions** scope:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Trigger a new deploy after changing environment variables.

If the Supabase variables are not set, the Edge Function does not break the site; it writes the visitor record to the Netlify Edge Function logs instead.

The logger records IP, time, path/query string, referrer, user-agent, GCLID and UTM fields when present, plus the Netlify request ID.

It does not block visitors and does not claim that an IP represents a specific person or competitor. IPs can be shared or rotated.

Note: a single request cannot reliably provide visit duration. Duration should be measured separately with analytics/session instrumentation if needed.
