import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CASES_DIR = path.join(__dirname, '..', 'cases');
const cases = fs.readdirSync(CASES_DIR)
  .filter((name) => !name.startsWith("."))
  .map((dir) => {
    const meta = JSON.parse(fs.readFileSync(path.join(CASES_DIR, dir, 'case.json'), 'utf-8'));
    return {
      id: dir,
      ...meta
    }
  });
const APPS_META_DATA = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'apps.json'), 'utf-8'));

const APPS = [
  {
    name: "Next.js",
    appDir: path.join(__dirname, "..", "apps", "nextjs", "src", "app", "cases"),
    processFile(fileFrom, fileTo) {
      fs.copyFileSync(fileFrom, fileTo);
    }
  },
  {
    name: "Forket",
    appDir: path.join(__dirname, "..", "apps", "forket", "src", "app", "cases"),
    processFile(fileFrom, fileTo) {
      fs.copyFileSync(fileFrom, fileTo);
    }
  }
].map((data) => ({ ...data, ...APPS_META_DATA[data.name] }));

function moveCasesToTheApps() {
  APPS.forEach(({ app, appDir, processFile }) => {
    copyFolder(CASES_DIR, appDir, processFile);
    console.log(`Cases copied to "${appDir.replace(path.dirname(__dirname), "")}".`);
  });
}
function generateRepoReadme() {
  const readmePath = path.join(__dirname, 'templates', 'repo.md');
  let content = fs.readFileSync(readmePath, 'utf-8');
  content += '\n\n';
  let tableOfSupport = `| Case | Framework / Library |\n`;
  tableOfSupport += `| ---- | ---- |\n`;
  tableOfSupport += cases
    .map((c) => {
      return `| (${c.id}) [${c.title}](./cases/${c.id})<br />${c.description} | ${APPS.map((a) => {
        return `${a.cases[c.id] ? "✅" : "❌"} [${a.name}](${a.site})`;
      }).join("\n")} |`;
    })
    .join("\n");
  tableOfSupport += "\n";
  content = content.replace(/{{TABLE_OF_SUPPORT}}/g, tableOfSupport);

  fs.writeFileSync(path.join(__dirname, "..", "README.md"), content);
  console.log('Repository README.md generated successfully.');
}
function generateCasesREADME() {
  const readmePath = path.join(__dirname, "templates", "case.md");
  let defaultContent = fs.readFileSync(readmePath, "utf-8");
  cases.forEach(c => {
    const caseDir = path.join(__dirname, "..", "cases", c.id);
    const files = getFiles(caseDir).filter(f => !f.endsWith("case.json") && !f.endsWith("README.md"));
    let content = defaultContent.replace(/{{TITLE}}/g, c.title);
    content = content.replace(/{{DESCRIPTION}}/g, c.description);
    content = content.replace(/{{CODE}}/g, files
      .sort(f => f.endsWith("Page.tsx") ? -1 : 1)
      .map(f => {
        const fileContent = fs.readFileSync(f, "utf-8");
        return "```typescript\n// " + f.replace(caseDir + '/' , "") + "\n\n" + fileContent + "\n```";
      })
      .join('\n\n'));

    fs.writeFileSync(path.join(caseDir, "README.md"), content);
    console.log(`Case ${c.id} README.md generated successfully.`);
  });
}

(async function () {
  generateRepoReadme();
  generateCasesREADME();
  moveCasesToTheApps();
})();


/* --------------- utils --------------- */

function copyFolder(src, dest, processFile) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyFolder(srcPath, destPath, processFile);
    } else {
      processFile(srcPath, destPath);
    }
  }
}
function getFiles(dir) {
  const res = [];
  (function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.isFile()) res.push(p);
    }
  })(path.resolve(dir));
  return res;
}