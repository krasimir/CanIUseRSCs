"use client";
import React, { useState, useTransition } from "react";

import { updateMyName } from "./actions";

export default function UpdateMyName() {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const [isPending, startTransition] = useTransition();

  const submitAction = async () => {
    startTransition(async () => {
      const response = await updateMyName(name);
      alert("Response from updateName:" + JSON.stringify(response));
      if (response.error) {
        setError(response.error);
      } else {
        setError(null);
        setName("");
      }
    });
  };

  return (
    <form action={submitAction}>
      <input
        type="text"
        name="name"
        disabled={isPending}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="type your name here"
      />
      {error && <p>Failed: {error}</p>}
    </form>
  );
}
