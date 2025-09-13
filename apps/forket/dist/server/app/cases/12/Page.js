import forketSerializeProps from "forket/lib/utils/serializeProps.js";
import React from "react";
import Player from "./Player.js";
async function saveSelectedTrack(currentTrack) {
  "use server";
  console.log(`Selected track: ${currentTrack}/${tracks.length}`);
}
function getTracks() {
  return new Promise((resolve) => setTimeout(() => resolve([
    "Track 1",
    "Track 2",
    "Track 3"
  ]), 1e3));
}
async function Page() {
  const tracks2 = await getTracks();
  return /* @__PURE__ */ React.createElement(PlayerBoundary, { tracks: tracks2, saveSelectedTrack: "$FSA_f_59_saveSelectedTrack" });
}
function PlayerBoundary(props) {
  const serializedProps = JSON.stringify(forketSerializeProps(props, "Player", "f_60"));
  const children = props.children;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children && /* @__PURE__ */ React.createElement("template", { type: "forket/children", id: "f_60", "data-c": "Player" }, children), /* @__PURE__ */ React.createElement("template", { type: "forket/start/f_60", "data-c": "Player" }), /* @__PURE__ */ React.createElement(Player, { ...props, children }), /* @__PURE__ */ React.createElement("template", { type: "forket/end/f_60", "data-c": "Player" }), /* @__PURE__ */ React.createElement("script", { id: "forket/init/f_60", dangerouslySetInnerHTML: {
    __html: `$F_booter(document.currentScript, "f_60", "Player", ${JSON.stringify(serializedProps)});`
  } }));
}
export {
  Page as default,
  saveSelectedTrack
};
