import path from 'path';
import fs from 'fs';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function setupVite(cases) {
  const root = path.join(__dirname, '..', '..', 'apps', 'vite', 'src', 'root.tsx');
  let rootContent = fs.readFileSync(root, "utf-8");
  const imports = cases.map((c) => `import Case${c.id} from './cases/${c.id}/Page';`).join("\n");
  const mapping = cases.map((c) => `  '/case/${c.id}': Case${c.id},`).join("\n");
  rootContent = rootContent.replace(
    /\/\/ <case_imports>[\s\S]*?\/\/ <\/case_imports>/,
    `// <case_imports>\n${imports}\n// </case_imports>`
  );
  rootContent = rootContent.replace(
    /\/\/ <\/case_imports>/,
    `\nconst routes = {\n${mapping}\n}\n// </case_imports>`
  );
  fs.writeFileSync(root, rootContent);
}