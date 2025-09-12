import styles from "../../page.module.css";

export default async function Case({ params }: { params: Promise<{ caseId: string }> }) {
  const { caseId } = await params;

  try {
    const mod = await import(`../../cases/${caseId}/Page`);

    const Page: React.ComponentType<any> = mod.default ?? (mod as any).Page;
    if (!Page) throw new Error("No Page export found");

    // Pass through route params if your sub-pages need them
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <Page />
        </main>
      </div>
    );
  } catch (err) {
    console.log(err);
    return <NotFound id={caseId} />;
  }
}

function NotFound({ id }: { id: string } = { id: "" }) {
  return <div>Page with ID={id} could not be found.</div>;
}
