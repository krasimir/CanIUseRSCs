import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CASES_DIR = path.join(__dirname, '..', 'cases');

const APPS = [
  {
    app: 'next.js',
    appDir: path.join(__dirname, '..', 'apps', 'nextjs', 'src', 'app', 'cases'),
    processFile(fileFrom, fileTo) {
      fs.copyFileSync(fileFrom, fileTo);
    }
  }
]

APPS.forEach(({ app, appDir, processFile }) => {
  console.log(`(${app}) Preparing cases.`);
  copyFolder(CASES_DIR, appDir, processFile);
  console.log(`(${app}) Cases copied over successfully to "${appDir.replace(path.dirname(__dirname), '')}".`);
});

export default function copyFolder(src, dest, processFile) {
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