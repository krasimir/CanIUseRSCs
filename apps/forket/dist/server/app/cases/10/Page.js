import forketSerializeProps from "forket/lib/utils/serializeProps.js";
import React from "react";
import FancyText from "./FancyText.js";
import InspirationGenerator from "./InspirationGenerator.js";
import Copyright from "./Copyright.js";
async function Page() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FancyTextBoundary, { title: true, text: "Get Inspired App" }), /* @__PURE__ */ React.createElement(InspirationGeneratorBoundary, null, /* @__PURE__ */ React.createElement(Copyright, { year: 2025 })));
}
function FancyTextBoundary(props) {
  const serializedProps = JSON.stringify(forketSerializeProps(props, "FancyText", "f_50"));
  const children = props.children;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children && /* @__PURE__ */ React.createElement("template", { type: "forket/children", id: "f_50", "data-c": "FancyText" }, children), /* @__PURE__ */ React.createElement("template", { type: "forket/start/f_50", "data-c": "FancyText" }), /* @__PURE__ */ React.createElement(FancyText, { ...props, children }), /* @__PURE__ */ React.createElement("template", { type: "forket/end/f_50", "data-c": "FancyText" }), /* @__PURE__ */ React.createElement("script", { id: "forket/init/f_50", dangerouslySetInnerHTML: {
    __html: `$F_booter(document.currentScript, "f_50", "FancyText", ${JSON.stringify(serializedProps)});`
  } }));
}
function InspirationGeneratorBoundary(props) {
  const serializedProps = JSON.stringify(forketSerializeProps(props, "InspirationGenerator", "f_51"));
  const children = props.children;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children && /* @__PURE__ */ React.createElement("template", { type: "forket/children", id: "f_51", "data-c": "InspirationGenerator" }, children), /* @__PURE__ */ React.createElement("template", { type: "forket/start/f_51", "data-c": "InspirationGenerator" }), /* @__PURE__ */ React.createElement(InspirationGenerator, { ...props, children }), /* @__PURE__ */ React.createElement("template", { type: "forket/end/f_51", "data-c": "InspirationGenerator" }), /* @__PURE__ */ React.createElement("script", { id: "forket/init/f_51", dangerouslySetInnerHTML: {
    __html: `$F_booter(document.currentScript, "f_51", "InspirationGenerator", ${JSON.stringify(serializedProps)});`
  } }));
}
export {
  Page as default
};
