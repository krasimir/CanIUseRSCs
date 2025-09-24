# Client component imports server function

A client component imports server function and uses it.

## Code

```typescript
// Page.tsx

import React from "react";

import LikeButton from "./LikeButton";
import { getLikeCount } from "./actions";

export default async function Page() {
  return (
    <div>
      <LikeButton initialCount={await getLikeCount()}/>
    </div>
  );
}

```

```typescript
// LikeButton.tsx

'use client';

import React, { useState, useTransition } from "react";
import { incrementLike } from "./actions";

export default function LikeButton({ initialCount }) {
  const [isPending, startTransition] = useTransition();
  const [likeCount, setLikeCount] = useState(initialCount);

  const onClick = () => {
    startTransition(async () => {
      const currentCount = await incrementLike();
      setLikeCount(currentCount);
    });
  };

  return (
    <>
      <p>Total Likes: {likeCount}</p>
      <button onClick={onClick} disabled={isPending}>
        Like
      </button>
    </>
  );
}
```

```typescript
// actions.ts

"use server";

let likeCount = 0;
export async function incrementLike() {
  likeCount++;
  return likeCount;
}
export async function getLikeCount() {
  return likeCount;
}
```