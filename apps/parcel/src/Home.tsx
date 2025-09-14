"use server-entry";

import fs from "fs";
import path from "path";

// <cases>
const cases = ["01","02","03","04","05","06","07","08","09","10","11","12"]
// </cases>

import './client';
import './styles.css';

export async function Home({ children }: { children?: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Parcel / RSCs</title>
      </head>
      <body>
        <main>
          {children ? (
            children
          ) : (
            <>
              <h1>Can I Use RSCs - Parcel</h1>
              <div>
                {cases.map((caseId) => (
                  <a href={`/case/${caseId}`} key={caseId} className="case">
                    {caseId}
                  </a>
                ))}
              </div>
            </>
          )}
        </main>
      </body>
    </html>
  );
}
