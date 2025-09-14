"use server-entry";

// <cases>
const cases = ["01","02","03","04","05","06","07","08","09","10","11","12"]
// </cases>

import './client';
import './styles.css';

export async function Home() {
  return (
    <html>
      <head>
        <title>Parcel / RSCs</title>
      </head>
      <body>
        <main>
          <h1>Can I Use RSCs - Parcel</h1>
          <div>
            {cases.map((caseId) => (
              <a href={`/case/${caseId}`} key={caseId} className="case">
                {caseId}
              </a>
            ))}
          </div>
        </main>
      </body>
    </html>
  );
}
