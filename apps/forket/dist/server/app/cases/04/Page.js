import forketSerializeProps from "forket/lib/utils/serializeProps.js";
import React from "react";
import LikeButton from "./LikeButton.js";
import { getLikeCount } from "./actions.js";
function Page() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(LikeButtonBoundary, { initialCount: getLikeCount(), incrementLike: "$FSA_f_37_incrementLike" }));
}
function LikeButtonBoundary(props) {
  const serializedProps = JSON.stringify(forketSerializeProps(props, "LikeButton", "f_39"));
  const children = props.children;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children && /* @__PURE__ */ React.createElement("template", { type: "forket/children", id: "f_39", "data-c": "LikeButton" }, children), /* @__PURE__ */ React.createElement("template", { type: "forket/start/f_39", "data-c": "LikeButton" }), /* @__PURE__ */ React.createElement(LikeButton, { ...props, children }), /* @__PURE__ */ React.createElement("template", { type: "forket/end/f_39", "data-c": "LikeButton" }), /* @__PURE__ */ React.createElement("script", { id: "forket/init/f_39", dangerouslySetInnerHTML: {
    __html: `$F_booter(document.currentScript, "f_39", "LikeButton", ${JSON.stringify(serializedProps)});`
  } }));
}
export {
  Page as default
};
