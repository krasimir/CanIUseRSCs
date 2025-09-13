import React from "react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const cases = fs.readdirSync(path.join(__dirname, "cases")).filter((name) => !name.startsWith("."));
async function App({ request }) {
  const caseId = request.params.case;
  let page = /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Can I Use RSCs \u{1F914} Forket"), /* @__PURE__ */ React.createElement("div", null, cases.map((caseId2) => /* @__PURE__ */ React.createElement("a", { href: `/case/${caseId2}`, key: caseId2, className: "case" }, caseId2))));
  try {
    if (caseId) {
      const mod = await import(`./cases/${caseId}/Page.js`);
      const Page = mod.default ?? mod.Page;
      if (!Page) throw new Error("No Page export found");
      page = /* @__PURE__ */ React.createElement(Page, null);
    }
  } catch (error) {
    console.error(error);
  }
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", { charSet: "utf-8" }), /* @__PURE__ */ React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), /* @__PURE__ */ React.createElement("title", null, "Forket"), /* @__PURE__ */ React.createElement("link", { rel: "stylesheet", href: "/assets/styles.css" })), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("main", null, page), /* @__PURE__ */ React.createElement("script", { src: "/bundle.js" })));
}
export {
  App as default
};
