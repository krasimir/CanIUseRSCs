import React from "react";
async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1e3));
  return /* @__PURE__ */ React.createElement("div", null, "SSR Async Page");
}
export {
  Page as default
};
