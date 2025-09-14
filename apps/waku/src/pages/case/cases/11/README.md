# Nested Client Components

A test case for nested client components

## Code

```typescript
// Page.tsx

import React from 'react';

import Player from './Player';
import Controls from './Controls';

function getTracks() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(['Track 1', 'Track 2', 'Track 3']), 1000)
  );
}

export default async function Page() {
  const tracks = await getTracks();
  return <Player tracks={tracks}><Controls /></Player>;
}
```

```typescript
// Controls.tsx

"use client";

import React, { useState } from "react";

export default function Controls() {
  const [status, setStatus] = useState("idle");

  return (
    <div>
      <button onClick={() => setStatus("play")}>Play</button>
      <button onClick={() => setStatus("pause")}>Pause</button>
      <button onClick={() => setStatus("next")}>Next</button>
      <button onClick={() => setStatus("previous")}>Previous</button>
      <div>{status}</div>
    </div>
  );
}
```

```typescript
// Player.tsx

"use client";

import React, { useState } from 'react';

export default function Player({ tracks, children }) {
  return (
    <div>
      <h1>Music Player</h1>
      <ul>
        {tracks.map((track, index) => (
          <li key={index}>{track}</li>
        ))}
      </ul>
      {children}
    </div>
  );
}
```