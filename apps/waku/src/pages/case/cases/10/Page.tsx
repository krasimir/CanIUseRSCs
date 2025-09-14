import React from "react";

import FancyText from "./FancyText";
import InspirationGenerator from "./InspirationGenerator";
import Copyright from "./Copyright";

export default async function Page() {
  return (
    <div>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2025} />
      </InspirationGenerator>
    </div>
  );
}
