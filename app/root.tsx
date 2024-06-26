import { Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import css from "./styles/shared.css?url";
import CustomLayout from "./components/CustomLayout";
import React from "react";
import { useOutlet } from "@remix-run/react";
import { Loader } from '@geist-ui/icons'
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: css },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const outlet = useOutlet();
  return <CustomLayout>{outlet}</CustomLayout>;
}

export function HydrateFallback() {
  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <p><Loader/></p>
    </div>
  );
}
