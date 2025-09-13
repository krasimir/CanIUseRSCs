import forketSerializeProps from "forket/lib/utils/serializeProps.js";
import React from "react";
import UpdateMyName from "./UpdateMyName.js";
async function Page() {
  return /* @__PURE__ */ React.createElement(UpdateMyNameBoundary, null);
}
function UpdateMyNameBoundary(props) {
  const serializedProps = JSON.stringify(forketSerializeProps(props, "UpdateMyName", "f_46"));
  const children = props.children;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children && /* @__PURE__ */ React.createElement("template", { type: "forket/children", id: "f_46", "data-c": "UpdateMyName" }, children), /* @__PURE__ */ React.createElement("template", { type: "forket/start/f_46", "data-c": "UpdateMyName" }), /* @__PURE__ */ React.createElement(UpdateMyName, { ...props, children }), /* @__PURE__ */ React.createElement("template", { type: "forket/end/f_46", "data-c": "UpdateMyName" }), /* @__PURE__ */ React.createElement("script", { id: "forket/init/f_46", dangerouslySetInnerHTML: {
    __html: `$F_booter(document.currentScript, "f_46", "UpdateMyName", ${JSON.stringify(serializedProps)});`
  } }));
}
export {
  Page as default
};
