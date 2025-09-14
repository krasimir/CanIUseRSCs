import { provide } from "@ryanflorence/async-provider";
import { Outlet, unstable_MiddlewareFunction } from "react-router";

import { stringContext } from "./context";
import { ErrorReporter } from "./root.client.tsx";
import "./styles.css";

export const unstable_middleware: unstable_MiddlewareFunction<Response>[] = [
  async ({ request }, next) => {
    console.log(">>> RSC middleware", request.url);
    let res = await provide(new Map([[stringContext, "Hello World!!!"]]), next);
    res.headers.set("X-Custom-Header", "Value");
    console.log("<<< RSC middleware", request.url);
    return res;
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>React Router Parcel</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

export function ServerComponent() {
  return (
    <div id="root">
      <Outlet />
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div className="container my-8 px-8 mx-auto">
      <div className="paper prose max-w-none">
        <h1>Oooops</h1>
        <ErrorReporter />
      </div>
    </div>
  );
}
