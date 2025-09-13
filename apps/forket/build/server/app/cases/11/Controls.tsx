"use client";
import React, { useState } from "react";
export default function Controls() {
    const [status, setStatus] = useState("idle");
    return (<div>
      <button onClick={()=>setStatus("play")}>Play</button>
      <button onClick={()=>setStatus("pause")}>Pause</button>
      <button onClick={()=>setStatus("next")}>Next</button>
      <button onClick={()=>setStatus("previous")}>Previous</button>
      <div>{status}</div>
    </div>);
}
