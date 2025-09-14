# Passing promise from server to client component

A server component passes a promise to a client component which "awaits" it and renders the result.

## Code

```typescript
// Page.tsx

import React, { Suspense } from "react";

import db from './db';
import Comments from "./Comments"

export default async function Page() {
  const note = await db.notes.get(42);

  const commentsPromise = db.comments.get(note.id);
  return (
    <div>
      {note.title}
      <Suspense fallback={<p>Loading Comments...</p>}>
        <Comments commentsPromise={commentsPromise} />
      </Suspense>
    </div>
  );
}

```

```typescript
// Comments.tsx

"use client";
import React, { use } from "react";

export default function Comments({ commentsPromise }) {
  const comments = use(commentsPromise);
  return comments.map(({ id, content }) => <p key={id}>Comment: {content}</p>);
}

```

```typescript
// db.ts

const db = {
  notes: {
    async get(id) {
      await new Promise((r) => setTimeout(r, 1000));
      return { id, title: "Some note" };
    }
  },
  comments: {
    async get(id) {
      await new Promise((r) => setTimeout(r, 1000));
      return [
        { id: 1, noteId: id, content: "First comment" },
        { id: 2, noteId: id, content: "Second comment" }
      ];
    }
  }
}

export default db;
```