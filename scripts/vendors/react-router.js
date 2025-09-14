import path from 'path';
import fs from 'fs';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function setupReactRouter(cases) {
  const Home = path.join(__dirname, "..", "..", "apps", "react-router", "app", "routes", "home.tsx");
  const Case = path.join(__dirname, "..", "..", "apps", "react-router", "app", "routes", "case.tsx");
  let homeContent = fs.readFileSync(Home, "utf-8");
  let caseContent = fs.readFileSync(Case, "utf-8");

  const imports = cases.map((c) => `import Case${c.id} from './cases/${c.id}/Page';`).join("\n");
  const mapping = cases.map((c) => `  '${c.id}': Case${c.id},`).join("\n");
  const casesList = cases.map((c) => c.id);

  caseContent = caseContent.replace(
    /\/\/ <case_imports>[\s\S]*?\/\/ <\/case_imports>/,
    `// <case_imports>\n${imports}\n// </case_imports>`
  );
  caseContent = caseContent.replace(
    /\/\/ <\/case_imports>/,
    `\nconst routes = {\n${mapping}\n}\n// </case_imports>`
  );
  homeContent = homeContent.replace(
    /\/\/ <cases>[\s\S]*?\/\/ <\/cases>/,
    `// <cases>\nconst cases = ${JSON.stringify(casesList)}\n// </cases>`
  );

  fs.writeFileSync(Home, homeContent);
  fs.writeFileSync(Case, caseContent);
}