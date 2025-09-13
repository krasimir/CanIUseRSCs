import forketSerializeProps from "forket/lib/utils/serializeProps.js";
import React from "react";
import Player from "./Player.js";
import Controls from "./Controls.js";
function getTracks() {
  return new Promise((resolve) => setTimeout(() => resolve([
    "Track 1",
    "Track 2",
    "Track 3"
  ]), 1e3));
}
async function Page() {
  const tracks = await getTracks();
  return /* @__PURE__ */ React.createElement(PlayerBoundary, { tracks }, /* @__PURE__ */ React.createElement(ControlsBoundary, null));
}
function PlayerBoundary(props) {
  const serializedProps = JSON.stringify(forketSerializeProps(props, "Player", "f_57"));
  const children = props.children;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children && /* @__PURE__ */ React.createElement("template", { type: "forket/children", id: "f_57", "data-c": "Player" }, children), /* @__PURE__ */ React.createElement("template", { type: "forket/start/f_57", "data-c": "Player" }), /* @__PURE__ */ React.createElement(Player, { ...props, children }), /* @__PURE__ */ React.createElement("template", { type: "forket/end/f_57", "data-c": "Player" }), /* @__PURE__ */ React.createElement("script", { id: "forket/init/f_57", dangerouslySetInnerHTML: {
    __html: `$F_booter(document.currentScript, "f_57", "Player", ${JSON.stringify(serializedProps)});`
  } }));
}
function ControlsBoundary(props) {
  const serializedProps = JSON.stringify(forketSerializeProps(props, "Controls", "f_58"));
  const children = props.children;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children && /* @__PURE__ */ React.createElement("template", { type: "forket/children", id: "f_58", "data-c": "Controls" }, children), /* @__PURE__ */ React.createElement("template", { type: "forket/start/f_58", "data-c": "Controls" }), /* @__PURE__ */ React.createElement(Controls, { ...props, children }), /* @__PURE__ */ React.createElement("template", { type: "forket/end/f_58", "data-c": "Controls" }), /* @__PURE__ */ React.createElement("script", { id: "forket/init/f_58", dangerouslySetInnerHTML: {
    __html: `$F_booter(document.currentScript, "f_58", "Controls", ${JSON.stringify(serializedProps)});`
  } }));
}
export {
  Page as default
};
