import fs from 'fs';
import { pull } from "@ryanflorence/async-provider";
import { Link } from "react-router";

import { Route } from "./+types/home";
import { stringContext } from "../context";

// <cases>
const cases = ["01","02","03","04","05","06","07","08","09","10","11","12"]
// </cases>

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");
  return {
    message: pull(stringContext),
    name: name || "Unknown",
  };
}

export function ServerComponent({ loaderData }: Route.ComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl">Can I Use RSCs 🤔 ReactRouter</h1>
      <div className="mt-4 text-center">
        {cases.map((caseId) => (
          <Link to={`/case/${caseId}`} key={caseId} className="case">
            {caseId}
          </Link>
        ))}
      </div>
    </main>
  );
}
