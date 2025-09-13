import forketSerializeProps from "forket/lib/utils/serializeProps.js";
import React from "react";
import FancyText from "./FancyText.js";
import InspirationGenerator from "./InspirationGenerator.js";
import Copyright from "./Copyright.js";
export default async function Page() {
    return (<div>
      <FancyTextBoundary title text="Get Inspired App"/>
      <InspirationGeneratorBoundary>
        <Copyright year={2025}/>
      </InspirationGeneratorBoundary>
    </div>);
}
function FancyTextBoundary(props) {
    const serializedProps = JSON.stringify(forketSerializeProps(props, "FancyText", "f_53"));
    const children = props.children;
    return (<>
      {children && (<template type="forket/children" id="f_53" data-c="FancyText">
          {children}
        </template>)}
      <template type="forket/start/f_53" data-c="FancyText"></template>
      <FancyText {...props} children={children}/>
      <template type="forket/end/f_53" data-c="FancyText"></template>
      <script id="forket/init/f_53" dangerouslySetInnerHTML={{
        __html: `$F_booter(document.currentScript, "f_53", "FancyText", ${JSON.stringify(serializedProps)});`
    }}></script>
    </>);
}
function InspirationGeneratorBoundary(props) {
    const serializedProps = JSON.stringify(forketSerializeProps(props, "InspirationGenerator", "f_54"));
    const children = props.children;
    return (<>
      {children && (<template type="forket/children" id="f_54" data-c="InspirationGenerator">
          {children}
        </template>)}
      <template type="forket/start/f_54" data-c="InspirationGenerator"></template>
      <InspirationGenerator {...props} children={children}/>
      <template type="forket/end/f_54" data-c="InspirationGenerator"></template>
      <script id="forket/init/f_54" dangerouslySetInnerHTML={{
        __html: `$F_booter(document.currentScript, "f_54", "InspirationGenerator", ${JSON.stringify(serializedProps)});`
    }}></script>
    </>);
}
