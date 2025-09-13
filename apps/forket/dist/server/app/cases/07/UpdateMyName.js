"use client";
import React, { useState, useTransition } from "react";
import { updateMyName } from "./actions.js";
function UpdateMyName() {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();
  const submitAction = async () => {
    startTransition(async () => {
      const response = await updateMyName(name);
      if (response.error) {
        alert("Response from updateName:" + JSON.stringify(response));
        setError(response.error);
      } else {
        setError(null);
        setName("");
      }
    });
  };
  return /* @__PURE__ */ React.createElement("form", { action: submitAction }, /* @__PURE__ */ React.createElement("input", { type: "text", name: "name", disabled: isPending, value: name, onChange: (e) => setName(e.target.value), placeholder: "type your name here" }), error && /* @__PURE__ */ React.createElement("p", null, "Failed: ", error));
}
export {
  UpdateMyName as default
};
