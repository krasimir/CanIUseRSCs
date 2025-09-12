# Inlined server function (inside a server component)

Creating a server function and pass it as a prop to client component

## Code

```typescript
// Page.tsx

import React from "react";

import db from './db';
import Button from "./Button";

export default async function Page() {
  return (
    <EmptyNote />
  );
}

function EmptyNote() {
  async function createNoteAction() {
    // Server Function
    "use server";

    return await db.notes.create();
  }

  return <Button onClick={createNoteAction} />;
}

```

```typescript
// Button.tsx

"use client";
import React from "react";

export default function Button({ onClick }) {
  return (
    <button onClick={() => {
      onClick().then(data => alert(JSON.stringify(data)));
    }}>
      Create Empty Note
    </button>
  );
}

```

```typescript
// db.ts

const db = {
  notes: {
    create: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return {
        ok: true
      };
    }
  }
}

export default db;
```