import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import MouseMoveEffect from "./components/mouse-move-effect";
import  Nav  from "./components/nav";
import { Footer } from "./components/footer";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Tiago Nunes - Desenvolvedor Full Stack" />
        <meta property="og:description" content="Portfólio de Tiago Nunes, desenvolvedor Full Stack especializado em React, PHP, PostgreSQL e SQL Server." />
        <meta property="og:url" content="https://tiago-nunes-dev.vercel.app/" />
        <link rel="icon" type="image/x-icon" href="/assests/favicon.ico"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"></link>
        <Meta />
        <Links />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Tiago Nunes",
            "jobTitle": "Desenvolvedor Full Stack ",
            "url": "https://tiago-nunes-dev.vercel.app",
            "sameAs": [
              "https://github.com/Tiagonuness",
              "https://www.linkedin.com/in/tiago-nunes-09905724a/",
              "https://www.instagram.com/tiagonfps/",
              "https://x.com/tiagonfps"
            ]
          }
          `}
        </script>
      </head>
      <body className="font-dmSans py-4">
        <Nav />
        {children}
        <MouseMoveEffect />
        <ScrollRestoration />
        <Scripts />
        {/* <Footer /> */}
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
