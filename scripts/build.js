import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";
import { marked } from "marked";
import CleanCSS from "clean-css";

import { transformForketFile, setupForket } from "./vendors/forket.js";
import { setupVite } from './vendors/vite.js';
import { transformParcelFile, setupParcel } from "./vendors/parcel.js";
import { setupReactRouter } from './vendors/react-router.js'
import { setupWaku } from './vendors/waku.js'
import { setupRedwood } from './vendors/redwood.js'
import { setupTwofold } from './vendors/twofold.js'
import { setupReactServer } from "./vendors/react-server.js";

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
    processFile: transformForketFile,
    setup: setupForket
  },
  {
    name: "Vite",
    appDir: path.join(__dirname, "..", "apps", "vite", "src", "cases"),
    processFile(fileFrom, fileTo) {
      fs.copyFileSync(fileFrom, fileTo);
    },
    setup: setupVite
  },
  {
    name: "Parcel",
    appDir: path.join(__dirname, "..", "apps", "parcel", "src", "cases"),
    processFile: transformParcelFile,
    setup: setupParcel
  },
  {
    name: "ReactRouter",
    appDir: path.join(__dirname, "..", "apps", "react-router", "app", "routes", "cases"),
    processFile(fileFrom, fileTo) {
      fs.copyFileSync(fileFrom, fileTo);
    },
    setup: setupReactRouter
  },
  {
    name: "Waku",
    appDir: path.join(__dirname, "..", "apps", "waku", "src", "pages", "case", "cases"),
    processFile(fileFrom, fileTo) {
      fs.copyFileSync(fileFrom, fileTo);
    },
    setup: setupWaku
  },
  {
    name: "RedwoodSDK",
    appDir: path.join(__dirname, "..", "apps", "redwood", "src", "app", "pages", "cases"),
    processFile(fileFrom, fileTo) {
      fs.copyFileSync(fileFrom, fileTo);
    },
    setup: setupRedwood
  },
  {
    name: "Twofold",
    appDir: path.join(__dirname, "..", "apps", "twofold", "app", "pages", "cases"),
    processFile(fileFrom, fileTo) {
      fs.copyFileSync(fileFrom, fileTo);
    },
    setup: setupTwofold
  },
  {
    name: "react-server",
    appDir: path.join(__dirname, "..", "apps", "react-server", "src", "case", "cases"),
    processFile(fileFrom, fileTo) {
      fs.copyFileSync(fileFrom, fileTo);
    },
    setup: setupReactServer
  }
]
  .map((data) => {
    data = {
      ...data,
      ...APPS_META_DATA[data.name]
    };
    let success = Object.keys(data.cases)
      .map((caseId) => data.cases[caseId])
      .filter(Boolean).length;
    return {
      ...data,
      success,
      coverage: ((success / Object.keys(data.cases).length) * 100).toFixed(0)
    };
  })
  .sort((a, b) => b.coverage - a.coverage);

function moveCasesToTheApps() {
  APPS.forEach(({ appDir, processFile, setup }) => {
    copyFolder(CASES_DIR, appDir, processFile);
    if (setup) {
      setup(cases);
    }
    console.log(`Cases copied to "${appDir.replace(path.dirname(__dirname), "")}".`);
  });
}
function generateRepoReadme() {
  const readmePath = path.join(__dirname, 'templates', 'repo.md');
  let content = fs.readFileSync(readmePath, 'utf-8');

  content = content.replace(/{{NUM_OF_CASES}}/g, cases.length.toString());

  let genericInfo = '';
  genericInfo += APPS.map((a) => `- [${a.name}](${a.site}) (${a.coverage}% support) - ${a.description}`).join("\n");
  content = content.replace(/{{GENERIC_INFO}}/g, genericInfo);

  let tableOfSupport = `| Case | Framework / Library |\n`;
  tableOfSupport += `| ---- | ---- |\n`;
  tableOfSupport += `| | <img width="450"/> |\n`;
  tableOfSupport += cases
    .map((c) => {
      return `| (${c.id}) [${c.title}](./cases/${c.id})<br />${c.description} | ${APPS.map((a) => {
        return `${a.cases[c.id] ? "✅" : "❌"} [${a.name}](${a.site})`;
      }).join("<br />")} |`;
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
    let content = defaultContent.replace(/{{TITLE}}/g, c.title);
    content = content.replace(/{{DESCRIPTION}}/g, c.description);
    content = content.replace(/{{CODE}}/g, getTestCasesSourceCodeInMD(c));

    fs.writeFileSync(path.join(caseDir, "README.md"), content);
    console.log(`Case ${c.id} README.md generated successfully.`);
  });
}
function getTestCasesSourceCodeInMD(c) {
  const caseDir = path.join(__dirname, "..", "cases", c.id);
  const files = getFiles(caseDir).filter(f => !f.endsWith("case.json") && !f.endsWith("README.md"));
  return files
    .sort(f => f.endsWith("Page.tsx") ? -1 : 1)
    .map(f => {
      const fileContent = fs.readFileSync(f, "utf-8");
      return "```typescript\n// " + f.replace(caseDir + '/' , "") + "\n\n" + fileContent + "\n```";
    })
    .join('\n\n');
}
function buildSite() {
  let template = fs.readFileSync(path.join(__dirname, 'templates', 'site.html'), 'utf-8');
  let appTemplate = fs.readFileSync(path.join(__dirname, 'templates', 'site-app.html'), 'utf-8');

  template = template.replace(/{{NUM_OF_TEST_CASES}}/g, cases.length.toString());
  template = template.replace(/{{NUM_OF_APPS}}/g, APPS.length.toString());
  template = template.replace(/{{APPS}}/g, APPS.map(app => {
    return appTemplate
      .replace(/{{APP}}/g, app.name)
      .replace(/{{LOGO}}/g, app.logo)
      .replace(/{{DESCRIPTION}}/g, app.description)
      .replace(/{{COVERAGE}}/g, app.coverage)
      .replace(/{{ID}}/g, titleToSlug(app.name))
      .replace(/{{COVERAGE_CASES}}/g, `${app.success}/${Object.keys(app.cases).length}`)
      .replace(
        /{{LINKS}}/g,
        [
          `<a href="${app.site}" target="_blank">Web site</a>`,
          `<a href="${app.repoLink}" target="_blank">Test application</a>`
        ].join("<br />")
      )
      .replace(
        /{{TEST_CASES}}/g,
        cases
          .map((c) => {
            return `<li>
              <a href="#case-${c.id}" class="no-border">${app.cases[c.id] ? `✅ ${c.title}` : `❌ ${c.title}`}</a>
            </li>`;
          })
          .join("\n")
      );
  }).join("\n"));
  template = template.replace(
    /{{APPS_GRID}}/g,
    APPS.map((app) => {
      return `
      <div class="flex-centered" style="padding: 6px;">
        <a href="#${titleToSlug(app.name)}" class="flex app-link gap1 p1 lh1_2">
          <img src="{{LOGO}}" alt="{{APP}} Logo" class="app-logo">
          <span class="block w100p">
            <span class="fz2">{{APP}}</span>
            <small class="block op03">${app.coverage}%</small>
            <span class="line mt05">
              <span style="width:${app.coverage}%"></span>
            </span>
          </span>
        </a>
      </div>
    `
        .replace(/{{APP}}/g, app.name)
        .replace(/{{LOGO}}/g, app.logo);
    }).join("\n")
  );
  template = template.replace(/{{TEST_CASES}}/g, cases.map(c => {
    return `<div id="case-${c.id}" class="mt2">
    <h3>(${c.id}) ${c.title}</h3>
    <p>${c.description}</p>
    <div class="mt1">
      ${marked.parse(getTestCasesSourceCodeInMD(c))}
    </div>
</div>`;
  }).join('\n'));

  fs.writeFileSync(path.join(__dirname, '..', 'site', 'public', 'index.html'), template);
  console.log(`Site built successfully.`);

  const css = fs.readFileSync(path.join(__dirname, '..', 'site', 'public', 'assets', 'styles.css'), 'utf-8');
  const minified = new CleanCSS().minify(css).styles;
  fs.writeFileSync(path.join(__dirname, '..', 'site', 'public', 'assets', 'styles.min.css'), minified);
}

(async function () {
  generateRepoReadme();
  generateCasesREADME();
  moveCasesToTheApps();
  buildSite();
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
function titleToSlug(title) {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");
}
