import React from "react";
import FancyText from "./FancyText.js";
import InspirationGenerator from "./InspirationGenerator.js";
import Copyright from "./Copyright.js";
export default async function Page() {
    return (<div>
      <FancyText title text="Get Inspired App"/>
      <InspirationGenerator>
        <Copyright year={2025}/>
      </InspirationGenerator>
    </div>);
}
