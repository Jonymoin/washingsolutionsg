import type { Config, Context } from "@netlify/edge-functions";

type VisitorLog = {
  ip: string;
  visited_at: string;
  path: string;
  referrer: string | null;
  user_agent: string | null;
  gclid: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  request_id: string | null;
};

function isHtmlNavigation(request: Request): boolean {
  if (request.method !== "GET" && request.method !== "HEAD") return false;

  const accept = request.headers.get("accept") ?? "";
  return accept.includes("text/html");
}

async function saveToSupabase(log: VisitorLog): Promise<void> {
  const url = Netlify.env.get("SUPABASE_URL");
  const key = Netlify.env.get("SUPABASE_SERVICE_ROLE_KEY");

  // Until the two environment variables are configured, keep the site working
  // and send the record to Netlify Edge Function logs instead.
  if (!url || !key) {
    console.log("[visitor-log]", JSON.stringify(log));
    return;
  }

  const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/visitor_logs`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(log),
  });

  if (!response.ok) {
    console.error(
      "[visitor-log] Supabase insert failed",
      response.status,
      await response.text(),
    );
  }
}

export default async function handler(
  request: Request,
  context: Context,
): Promise<Response> {
  if (!isHtmlNavigation(request)) {
    return context.next();
  }

  const url = new URL(request.url);

  const log: VisitorLog = {
    ip: context.ip,
    visited_at: new Date().toISOString(),
    path: `${url.pathname}${url.search}`,
    referrer: request.headers.get("referer"),
    user_agent: request.headers.get("user-agent"),
    gclid: url.searchParams.get("gclid"),
    utm_source: url.searchParams.get("utm_source"),
    utm_medium: url.searchParams.get("utm_medium"),
    utm_campaign: url.searchParams.get("utm_campaign"),
    request_id: context.requestId ?? null,
  };

  // Logging is asynchronous so the normal website response is not held up.
  context.waitUntil(saveToSupabase(log));

  return context.next();
}

export const config: Config = {
  path: "/*",
  excludedPath: [
    "/.netlify/*",
    "/_next/*",
    "/*.css",
    "/*.js",
    "/*.mjs",
    "/*.map",
    "/*.json",
    "/*.xml",
    "/*.txt",
    "/*.png",
    "/*.jpg",
    "/*.jpeg",
    "/*.webp",
    "/*.gif",
    "/*.svg",
    "/*.ico",
    "/*.woff",
    "/*.woff2",
    "/*.ttf",
    "/*.otf",
    "/*.mp4",
    "/*.webm",
  ],
};
