"use client";
import React, { use } from "react";
function Comments({ commentsPromise }) {
  const comments = use(commentsPromise);
  return comments.map(({ id, content }) => /* @__PURE__ */ React.createElement("p", { key: id }, "Comment: ", content));
}
export {
  Comments as default
};
