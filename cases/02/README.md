# Mixing server and client components

In this example we are passing server generated data as a child of a client component.

## Code

```typescript
"use client";
import React from "react";

export default function Expandable({ key, children }: { key: number; children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}

```

```typescript
import React from "react";

import db from "./db";
import Expandable from "./Expandable";

export default async function Page() {
  const notes = await db.notes.getAll();

  return (
    <div>
      {notes.map((note) => (
        <Expandable key={note.id}>
          <p>{note.content}</p>
        </Expandable>
      ))}
    </div>
  );
}

```

```typescript
const db = {
  notes: {
    getAll: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return [
        { id: 1, content: "Note 1" },
        { id: 2, content: "Note 2" },
        { id: 3, content: "Note 3" }
      ];
    }
  }
};

export default db;

```