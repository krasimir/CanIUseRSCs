"use client";
import React, { useState } from "react";
function Controls() {
  const [status, setStatus] = useState("idle");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { onClick: () => setStatus("play") }, "Play"), /* @__PURE__ */ React.createElement("button", { onClick: () => setStatus("pause") }, "Pause"), /* @__PURE__ */ React.createElement("button", { onClick: () => setStatus("next") }, "Next"), /* @__PURE__ */ React.createElement("button", { onClick: () => setStatus("previous") }, "Previous"), /* @__PURE__ */ React.createElement("div", null, status));
}
export {
  Controls as default
};
