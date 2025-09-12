# Server function used as a from action

A server function is used as the action for a form to demonstrate server-side processing in response to a form submission.

## Code

```typescript
// Page.tsx

import React from "react";

import UpdateName from "./UpdateName";

export default async function Page() {
  return (
    <div>
      <UpdateName />
    </div>
  );
}

```

```typescript
// UpdateName.tsx

"use client";
import React, { useState, useActionState } from "react";

import { updateUsername } from "./actions";

export default function UpdateName() {
  const [name, setName] = useState("");
  const [state, submitAction, isPending] = useActionState(updateUsername, { error: null });
  return (
    <form action={submitAction}>
      {!state.ok ? (
        <input
          type="text"
          name="name"
          disabled={isPending}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="type your name here"
        />
      ) : <p>Name saved successfully</p>}
      <p style={{ marginTop: '2rem' }}>{JSON.stringify(state)}</p>
    </form>
  );
}

```

```typescript
// actions.ts

"use server";

import db from './db';

export async function updateUsername(currentState, formData) {
  if (!formData.get("name")) {
    return { error: "Name is required" };
  }
  return await db.users.updateName(formData.get("name"));
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