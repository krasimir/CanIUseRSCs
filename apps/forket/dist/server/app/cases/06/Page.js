import forketSerializeProps from "forket/lib/utils/serializeProps.js";
import React from "react";
import db from "./db.js";
import Button from "./Button.js";
async function createNoteAction() {
  "use server";
  return await db.notes.create();
}
async function Page() {
  return /* @__PURE__ */ React.createElement(EmptyNote, null);
}
function EmptyNote() {
  return /* @__PURE__ */ React.createElement(ButtonBoundary, { onClick: "$FSA_f_43_createNoteAction" });
}
function ButtonBoundary(props) {
  const serializedProps = JSON.stringify(forketSerializeProps(props, "Button", "f_44"));
  const children = props.children;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children && /* @__PURE__ */ React.createElement("template", { type: "forket/children", id: "f_44", "data-c": "Button" }, children), /* @__PURE__ */ React.createElement("template", { type: "forket/start/f_44", "data-c": "Button" }), /* @__PURE__ */ React.createElement(Button, { ...props, children }), /* @__PURE__ */ React.createElement("template", { type: "forket/end/f_44", "data-c": "Button" }), /* @__PURE__ */ React.createElement("script", { id: "forket/init/f_44", dangerouslySetInnerHTML: {
    __html: `$F_booter(document.currentScript, "f_44", "Button", ${JSON.stringify(serializedProps)});`
  } }));
}
export {
  createNoteAction,
  Page as default
};
