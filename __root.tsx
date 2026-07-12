import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-ivory px-6">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-6">Error 404</div>
        <h1 className="font-display text-6xl md:text-7xl text-charcoal">Page not found</h1>
        <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
          The page you were looking for has wandered off the loom.
        </p>
        <div className="mt-10">
          <Link to="/" className="btn-luxe">Return home</Link>
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
    <div className="flex min-h-dvh items-center justify-center bg-ivory px-6">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-6">A moment of pause</div>
        <h1 className="font-display text-4xl text-charcoal">This page didn't load</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Something interrupted the weave. Please try again.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-luxe"
          >
            Try again
          </button>
          <a href="/" className="btn-luxe">Home</a>
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
      { title: "Zarmina — Grace woven in every thread" },
      {
        name: "description",
        content:
          "Zarmina curates handcrafted South Asian luxury — Kashmiri phirans, chikankari, and heirloom formals. Grace woven in every thread.",
      },
      { name: "author", content: "Zarmina" },
      { property: "og:title", content: "Zarmina — Grace woven in every thread" },
      {
        property: "og:description",
        content:
          "A curated house of handcrafted South Asian luxury. Timeless artistry for the modern wardrobe.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Zarmina" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
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
      <Outlet />
    </QueryClientProvider>
  );
}
