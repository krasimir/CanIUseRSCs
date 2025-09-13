"use client";
import React from "react";
export default function Expandable({ key, children }: {
    key: number;
    children: React.ReactNode;
}) {
    return (<div>
      {children}
    </div>);
}
