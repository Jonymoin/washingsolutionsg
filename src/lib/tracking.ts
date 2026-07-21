// Google Ads conversion tracking. Safe on SSR: no-ops when gtag is unavailable.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export function trackConversion(url?: string): boolean {
  if (typeof window === "undefined") return true;
  try {
    if (typeof window.gtag_report_conversion === "function") {
      return window.gtag_report_conversion(url);
    }
    if (typeof window.gtag === "function") {
      const callback = () => {
        if (url) window.location.href = url;
      };
      window.gtag("event", "conversion", {
        send_to: "AW-17547034192/9vopCOvo_JcbEND8ia9B",
        value: 1.0,
        currency: "SGD",
        event_callback: callback,
      });
      return false;
    }
  } catch {
    // ignore
  }
  if (url) window.location.href = url;
  return false;
}

/** Wrap any onClick handler with conversion tracking. */
export function withTracking<E extends { preventDefault?: () => void }>(
  handler?: (e: E) => void,
) {
  return (e: E) => {
    trackConversion();
    handler?.(e);
  };
}
