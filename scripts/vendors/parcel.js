import path from 'path';
import fs from 'fs';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function setupParcel(cases) {
  const Home = path.join(__dirname, '..', '..', 'apps', 'parcel', 'src', 'Home.tsx');
  const Server = path.join(__dirname, '..', '..', 'apps', 'parcel', 'src', 'server.tsx');
  let homeContent = fs.readFileSync(Home, "utf-8");
  let serverContent = fs.readFileSync(Server, "utf-8");

  const imports = cases.map((c) => `import Case${c.id} from './cases/${c.id}/Page';`).join("\n");
  const mapping = cases.map((c) => `  '${c.id}': Case${c.id},`).join("\n");
  const casesList = cases.map((c) => c.id);

  serverContent = serverContent.replace(
    /\/\/ <case_imports>[\s\S]*?\/\/ <\/case_imports>/,
    `// <case_imports>\n${imports}\n// </case_imports>`
  );
  serverContent = serverContent.replace(
    /\/\/ <\/case_imports>/,
    `\nconst routes = {\n${mapping}\n}\n// </case_imports>`
  );
  homeContent = homeContent.replace(
    /\/\/ <cases>[\s\S]*?\/\/ <\/cases>/,
    `// <cases>\nconst cases = ${JSON.stringify(casesList)}\n// </cases>`
  );

  fs.writeFileSync(Home, homeContent);
  fs.writeFileSync(Server, serverContent);
}