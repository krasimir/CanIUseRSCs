import forketSerializeProps from "forket/lib/utils/serializeProps.js";
import React from "react";
import UpdateName from "./UpdateName.js";
async function Page() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(UpdateNameBoundary, null));
}
function UpdateNameBoundary(props) {
  const serializedProps = JSON.stringify(forketSerializeProps(props, "UpdateName", "f_51"));
  const children = props.children;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children && /* @__PURE__ */ React.createElement("template", { type: "forket/children", id: "f_51", "data-c": "UpdateName" }, children), /* @__PURE__ */ React.createElement("template", { type: "forket/start/f_51", "data-c": "UpdateName" }), /* @__PURE__ */ React.createElement(UpdateName, { ...props, children }), /* @__PURE__ */ React.createElement("template", { type: "forket/end/f_51", "data-c": "UpdateName" }), /* @__PURE__ */ React.createElement("script", { id: "forket/init/f_51", dangerouslySetInnerHTML: {
    __html: `$F_booter(document.currentScript, "f_51", "UpdateName", ${JSON.stringify(serializedProps)});`
  } }));
}
export {
  Page as default
};
