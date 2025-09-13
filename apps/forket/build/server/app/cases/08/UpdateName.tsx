"use client";
import React, { useState, useActionState } from "react";
import { updateUsername } from "./actions.js";
export default function UpdateName() {
    const [name, setName] = useState("");
    const [state, submitAction, isPending] = useActionState(updateUsername, {
        error: null
    });
    return (<form action={submitAction}>
      {!state.ok ? (<input type="text" name="name" disabled={isPending} value={name} onChange={(e)=>setName(e.target.value)} placeholder="type your name here"/>) : <p>Name saved successfully</p>}
      <p style={{
        marginTop: '2rem'
    }}>{JSON.stringify(state)}</p>
    </form>);
}
