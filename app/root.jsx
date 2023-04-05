import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
  useCatch
} from "@remix-run/react";

import styles from "~/styles/shared.css"

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

function Document({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" rel="stylesheet" />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>

  )
}

export function CatchBoundary() {

  const caughtResponse = useCatch()

  return (
    <Document title={caughtResponse.statusText}>
      <main>
        <Error title={caughtResponse.statusText}>
          <p>{caughtResponse.data?.message || "Something went wrong, please try again later"}</p>
          <p>Back to <Link to="/">safety</Link>.</p>
        </Error>
      </main>
    </Document>)
}

/*export function ErrorBoundary() {

  return (
    <Document title="An error occured">
      <main>
        <Error title="An error occured">
          <p>{error.message || "Something went wrong, please try again later"}</p>
          <p>Back to <Link to="/">safety</Link>.</p>
        </Error>
      </main>
    </Document>
  )
}*/

export function links() {
  return ({ rel: "stylesheet", href: styles })
}