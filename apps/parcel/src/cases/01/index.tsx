"use server-entry";

import '../../client';
import '../../styles.css';
import Page from './Page';

export default async function Component() {
  return (
    <html>
      <head>
        <title>Parcel / RSCs</title>
      </head>
      <body>
        <main>
          <Page />
        </main>
      </body>
    </html>
  );
}