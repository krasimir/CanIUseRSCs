import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import './index.css'

// <case_imports>
import Case01 from './cases/01/Page';
import Case02 from './cases/02/Page';
import Case03 from './cases/03/Page';
import Case04 from './cases/04/Page';
import Case05 from './cases/05/Page';
import Case06 from './cases/06/Page';
import Case07 from './cases/07/Page';
import Case08 from './cases/08/Page';
import Case09 from './cases/09/Page';
import Case10 from './cases/10/Page';
import Case11 from './cases/11/Page';
import Case12 from './cases/12/Page';

const routes = {
  '/case/01': Case01,
  '/case/02': Case02,
  '/case/03': Case03,
  '/case/04': Case04,
  '/case/05': Case05,
  '/case/06': Case06,
  '/case/07': Case07,
  '/case/08': Case08,
  '/case/09': Case09,
  '/case/10': Case10,
  '/case/11': Case11,
  '/case/12': Case12,
}
// </case_imports>

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cases = fs.readdirSync(path.join(__dirname, "cases")).filter((name) => !name.startsWith("."));

export function Root(props: { url: URL }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + RSC</title>
      </head>
      <body>
        <App {...props} />
      </body>
    </html>
  )
}

function App(props: { url: URL }) {
  const Case = routes[props.url.pathname as keyof typeof routes];
  let pageContent = null;
  if (Case) {
    pageContent = <Case />;
  }
  return (
    <div id="root">
      {!pageContent && <h1>Can I Use RSCs 🤔 Vite</h1>}
      <div className="card">
        {pageContent ? pageContent : cases.map((caseId) => (
          <a href={`/case/${caseId}`} key={caseId} className="case">
            {caseId}
          </a>
        ))}
      </div>
    </div>
  );
}
