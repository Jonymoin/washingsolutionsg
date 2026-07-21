import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
const GTAG_INIT = `
window.addEventListener("load", function () {
  var s = document.createElement("script");
  s.src = "https://www.googletagmanager.com/gtag/js?id=AW-17547034192";
  s.async = true;
  document.body.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'AW-17547034192');
});
window.gtag_report_conversion = function (url) {
  var callback = function () {
    if (typeof url !== "undefined") { window.location = url; }
  };
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-17547034192/9vopCOvo_JcbEND8ia9B",
      value: 1.0,
      currency: "SGD",
      event_callback: callback,
    });
  } else if (typeof url !== "undefined") {
    window.location = url;
  }
  return false;
};
window.addEventListener("load", function () {
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "tb3xwtbom1");
});
`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-black text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <a href="/" className="btn-yellow">Go home</a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-yellow"
          >
            Try again
          </button>
          <a href="/" className="btn-outline">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Washing Machine Repair Singapore | WashingSolutionSG" },
      {
        name: "description",
        content:
          "Same-day washing machine repair service in Singapore. All brands — Samsung, LG, Bosch, Electrolux and more. Open 7 days a week. Call +65 8530 1773.",
      },
      { name: "author", content: "WashingSolutionSG" },
      { name: "theme-color", content: "#F5EE00" },
      { property: "og:title", content: "Washing Machine Repair Singapore | WashingSolutionSG" },
      {
        property: "og:description",
        content:
          "Trusted washing machine repair specialists in Singapore. Same-day service, all brands, 7 days a week.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Washing Machine Repair Singapore | WashingSolutionSG" },
      {
        name: "twitter:description",
        content:
          "Same-day washing machine repair service in Singapore. Open 7 days a week.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/x-icon" },
      { rel: "canonical", href: "/" },
    ],
    scripts: [{ children: GTAG_INIT }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </QueryClientProvider>
  );
}
