import React from 'react';
import fs from "fs";
import path from "path";

// <case_imports>
import Case01 from './cases/01/Page.js';
import Case02 from './cases/02/Page.js';
import Case03 from './cases/03/Page.js';
import Case04 from './cases/04/Page.js';
import Case05 from './cases/05/Page.js';
import Case06 from './cases/06/Page.js';
import Case07 from './cases/07/Page.js';
import Case08 from './cases/08/Page.js';
import Case09 from './cases/09/Page.js';
import Case10 from './cases/10/Page.js';
// </case_imports>

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cases = fs.readdirSync(path.join(__dirname, "cases")).filter((name) => !name.startsWith("."));

export default async function App({ request }) {
  const caseId = request.params.case;
  let page = (
    <div>
      <h1>Can I Use RSCs 🤔 Forket</h1>
      <div>
        {cases.map((caseId) => (
          <a href={`/case/${caseId}`} key={caseId} className="case">
            {caseId}
          </a>
        ))}
      </div>
    </div>
  );
  
  try {
    if (caseId) {
      const mod = await import(`./cases/${caseId}/Page.js`);
      const Page: React.ComponentType<any> = mod.default ?? (mod as any).Page;
      if (!Page) throw new Error("No Page export found");
      page = <Page />;
    } 
  } catch(error) {
    console.error(error);
  }

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Forket</title>
        <link rel="stylesheet" href="/assets/styles.css" />
      </head>
      <body>
        <main>{page}</main>
        <script src="/bundle.js" />
      </body>
    </html>
  );
}