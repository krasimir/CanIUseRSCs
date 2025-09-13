import React, { Suspense } from "react";
import db from "./db.js";
import Comments from "./Comments.js";
export default async function Page() {
    const note = await db.notes.get(42);
    const commentsPromise = db.comments.get(note.id);
    return (<div>
      {note.title}
      <Suspense fallback={<p>Loading Comments...</p>}>
        <Comments commentsPromise={commentsPromise}/>
      </Suspense>
    </div>);
}
