// <cases>
const cases = ["01","02","03","04","05","06","07","08","09","10","11","12"]
// </cases>

export default async function Page() {
  return (
    <>
      <title>Twofold</title>
      <main className="m-6 flex flex-col items-center *:min-h-64 *:min-w-64 lg:m-0 lg:min-h-svh lg:justify-center">
        <h1 className="text-4xl font-extrabold tracking-tighter">
          Can I Use RSCs 🤔 Twofold
        </h1>
        <div className="mt-4 text-center">
          {cases.map((caseId) => (
            <a href={`/case/${caseId}`} key={caseId} className="case">
              {caseId}
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
