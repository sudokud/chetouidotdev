import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import css from './styles/shared.css?url'
import stylesheet from "~/tailwind.css?url";
import Navigation from "./components/Navigation"
import Time from '~/components/Time'
import Footer from '~/components/Footer'
import Socials from '~/components/Socials'
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: css },
  { rel: "stylesheet", href: stylesheet },
];

const queryClient = new QueryClient();

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-zinc-100 dark:bg-zinc-800">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Time/>
        <Socials/>
        <div className="flex flex-col h-dvh border">
          <Navigation/>
          <div className="container h-4/6 mx-auto max-w-600 py-9 px-9 rounded-3xl">
            <Outlet />
          </div>
        </div>
        <span className="site-version">v1.0</span>
        <Footer/>
      </QueryClientProvider>
    </React.Fragment>
)}

export function HydrateFallback() {
  return (
    <div className="container h-screen flex justify-center items-center">
      <p>Loading...</p>
    </div>
  )
}
