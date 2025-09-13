"use client";
import React, { useState, useActionState } from "react";
import { updateUsername } from "./actions.js";
function UpdateName() {
  const [name, setName] = useState("");
  const [state, submitAction, isPending] = useActionState(updateUsername, {
    error: null
  });
  return /* @__PURE__ */ React.createElement("form", { action: submitAction }, !state.ok ? /* @__PURE__ */ React.createElement("input", { type: "text", name: "name", disabled: isPending, value: name, onChange: (e) => setName(e.target.value), placeholder: "type your name here" }) : /* @__PURE__ */ React.createElement("p", null, "Name saved successfully"), /* @__PURE__ */ React.createElement("p", { style: {
    marginTop: "2rem"
  } }, JSON.stringify(state)));
}
export {
  UpdateName as default
};
