"use client";
import React, { useState } from "react";
function Player({ tracks, saveSelectedTrack }) {
  const [currentTrack, setCurrentTrack] = useState();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Music Player ", currentTrack ? `(${currentTrack})` : ""), tracks.map((track, index) => /* @__PURE__ */ React.createElement("button", { key: index, onClick: () => setCurrentTrack(index + 1) }, track)), /* @__PURE__ */ React.createElement("div", null, currentTrack && /* @__PURE__ */ React.createElement("button", { onClick: () => saveSelectedTrack(currentTrack) }, "Save current track")));
}
export {
  Player as default
};
