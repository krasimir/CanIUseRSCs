"use client";
import React from "react";
function Button({ onClick }) {
  return /* @__PURE__ */ React.createElement("button", { onClick: () => {
    onClick().then((data) => alert(JSON.stringify(data)));
  } }, "Create Empty Note");
}
export {
  Button as default
};
