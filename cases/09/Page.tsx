import React, { Suspense } from "react";

import db from './db';
import Comments from "./Comments"

export default async function Page() {
  const note = await db.notes.get(42);

  // NOTE: not awaited, will start here and await on the client.
  const commentsPromise = db.comments.get(note.id);
  return (
    <div>
      {note}
      <Suspense fallback={<p>Loading Comments...</p>}>
        <Comments commentsPromise={commentsPromise} />
      </Suspense>
    </div>
  );
}
