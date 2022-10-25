import type {
  LinksFunction,
  MetaFunction
} from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import blogStyles from "~/styles/blog.css";

export const links: LinksFunction = () => ([
  { rel: "stylesheet", href: blogStyles }
]);

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Heitor Silva | Blog",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
