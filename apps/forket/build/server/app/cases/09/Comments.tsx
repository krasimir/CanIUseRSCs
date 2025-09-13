"use client";
import React, { use } from "react";
export default function Comments({ commentsPromise }) {
    const comments = use(commentsPromise);
    return comments.map(({ id, content })=><p key={id}>Comment: {content}</p>);
}
