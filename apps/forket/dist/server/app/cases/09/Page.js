import forketSerializeProps from "forket/lib/utils/serializeProps.js";
import React, { Suspense } from "react";
import db from "./db.js";
import Comments from "./Comments.js";
async function Page() {
  const note = await db.notes.get(42);
  const commentsPromise = db.comments.get(note.id);
  return /* @__PURE__ */ React.createElement("div", null, note.title, /* @__PURE__ */ React.createElement(Suspense, { fallback: /* @__PURE__ */ React.createElement("p", null, "Loading Comments...") }, /* @__PURE__ */ React.createElement(CommentsBoundary, { commentsPromise })));
}
function CommentsBoundary(props) {
  const serializedProps = JSON.stringify(forketSerializeProps(props, "Comments", "f_49"));
  const children = props.children;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children && /* @__PURE__ */ React.createElement("template", { type: "forket/children", id: "f_49", "data-c": "Comments" }, children), /* @__PURE__ */ React.createElement("template", { type: "forket/start/f_49", "data-c": "Comments" }), /* @__PURE__ */ React.createElement(Comments, { ...props, children }), /* @__PURE__ */ React.createElement("template", { type: "forket/end/f_49", "data-c": "Comments" }), /* @__PURE__ */ React.createElement("script", { id: "forket/init/f_49", dangerouslySetInnerHTML: {
    __html: `$F_booter(document.currentScript, "f_49", "Comments", ${JSON.stringify(serializedProps)});`
  } }));
}
export {
  Page as default
};
