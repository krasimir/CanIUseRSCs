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