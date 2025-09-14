# Server Functions with Actions

A server function is called inside a client component within a form submit handler to demonstrate server-side processing in response to a form submission.

## Code

```typescript
// Page.tsx

import React from "react";

import UpdateMyName from "./UpdateMyName";

export default async function Page() {
  return <UpdateMyName />;
}

```

```typescript
// UpdateMyName.tsx

"use client";
import React, { useState, useTransition } from "react";

import { updateMyName } from "./actions";

export default function UpdateMyName() {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const [isPending, startTransition] = useTransition();

  const submitAction = async () => {
    startTransition(async () => {
      const response = await updateMyName(name);
      if (response.error) {
        alert("Response from updateName:" + JSON.stringify(response));
        setError(response.error);
      } else {
        setError(null);
        setName("");
      }
    });
  };

  return (
    <form action={submitAction}>
      <input
        type="text"
        name="name"
        disabled={isPending}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="type your name here"
      />
      {error && <p>Failed: {error}</p>}
    </form>
  );
}

```

```typescript
// actions.ts

"use server";

import db from './db';

export async function updateMyName(name) {
  if (!name) {
    return { error: "Name is required" };
  }
  return await db.users.updateName(name);
}

```

```typescript
// db.ts

const db = {
  users: {
    updateName: async (name) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return {
        ok: true
      };
    }
  }
}

export default db;
```