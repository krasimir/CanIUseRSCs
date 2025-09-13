# Inlined server action to access variables in the near scope

When we define a inlined server action inside a component, it should be able to access variables in the near scope.

## Code

```typescript
// Page.tsx

import React from 'react';

import Player from './Player';

function getTracks() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(['Track 1', 'Track 2', 'Track 3']), 1000)
  );
}

export default async function Page() {
  const tracks = await getTracks();
  return <Player tracks={tracks} />;
}
```

```typescript
// Player.tsx

"use client";

import React, { useState } from 'react';

export default function Player({ tracks }) {
  return (
    <div>
      <h1>Music Player</h1>
      {tracks.map((track, index) => (
        <button key={index}>{track}</button>
      ))}
    </div>
  );
}
```