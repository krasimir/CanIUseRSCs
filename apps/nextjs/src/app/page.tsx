import fs from 'fs';
import path from 'path';
import styles from "./page.module.css";
import { fileURLToPath } from "url";
import Link from 'next/link';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cases = fs.readdirSync(path.join(__dirname, 'cases')).filter(name => !name.startsWith('.'));

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Can I Use RSCs 🤔 Next.js</h1>
        {cases.map((caseId) => (
          <Link href={`/case/${caseId}`} key={caseId} className="case">{caseId}</Link>
        ))}
      </main>
    </div>
  );
}
