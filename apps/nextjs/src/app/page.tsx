import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Can I Use RSCs 🤔 Next.js</h1>
      </main>
    </div>
  );
}
