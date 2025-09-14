"use client";

import {
  isRouteErrorResponse,
  useRouteError,
} from "react-router";

export function ErrorReporter() {
  let error = useRouteError();
  return (
    <p>
      {isRouteErrorResponse(error)
        ? `${error.status} ${JSON.stringify(error.data)}`
        : error instanceof Error
          ? error.message
          : "Unknown Error"}
    </p>
  );
}
