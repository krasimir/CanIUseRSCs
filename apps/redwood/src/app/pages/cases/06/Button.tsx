"use client";
import React from "react";

export default function Button({ onClick }) {
  return (
    <button onClick={() => {
      onClick().then(data => alert(JSON.stringify(data)));
    }}>
      Create Empty Note
    </button>
  );
}
