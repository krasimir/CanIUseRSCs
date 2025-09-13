"use client";
import React from "react";
function Player({ tracks, children }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Music Player"), /* @__PURE__ */ React.createElement("ul", null, tracks.map((track, index) => /* @__PURE__ */ React.createElement("li", { key: index }, track))), children);
}
export {
  Player as default
};
