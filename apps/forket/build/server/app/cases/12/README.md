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
  async function saveSelectedTrack(currentTrack) {
    "use server";
    console.log(`Selected track: ${currentTrack}/${tracks.length}`);
  }
  return <Player tracks={tracks} saveSelectedTrack={saveSelectedTrack}/>;
}
```

```typescript
// Player.tsx

"use client";

import React, { useState } from 'react';

export default function Player({ tracks, saveSelectedTrack }) {
  const [currentTrack, setCurrentTrack] = useState();
  return (
    <div>
      <h1>Music Player {currentTrack ? `(${currentTrack})` : ""}</h1>
      {tracks.map((track, index) => (
        <button key={index} onClick={() => setCurrentTrack(index + 1)}>
          {track}
        </button>
      ))}
      <div>
        {currentTrack && <button onClick={() => saveSelectedTrack(currentTrack)}>Save current track</button>}
      </div>
    </div>
  );
}
```