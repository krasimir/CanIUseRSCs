# Hydrating client component

A client component that is hydrated on top of server-side rendered data.

## Code

```typescript
// Page.tsx

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
// Expandable.tsx

"use client";
import React, { useState } from "react";

export default function Expandable({ children }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <button onClick={() => setExpanded(!expanded)}>Toggle</button>
      {expanded && children}
    </div>
  );
}

```

```typescript
// db.ts

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