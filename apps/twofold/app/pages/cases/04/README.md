# Passing server function to client component

A client component receives a server function as a prop and calls it.

## Code

```typescript
// Page.tsx

import React from "react";

import LikeButton from "./LikeButton";
import { getLikeCount, incrementLike } from "./actions";

export default async function Page() {
  return (
    <div>
      <LikeButton initialCount={await getLikeCount()} incrementLike={incrementLike}/>
    </div>
  );
}

```

```typescript
// LikeButton.tsx

'use client';

import React, { useState, useTransition } from "react";

export default function LikeButton({ initialCount, incrementLike }) {
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