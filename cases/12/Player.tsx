"use client";

import React, { useState } from 'react';

export default function Player({ tracks }) {
  const [currentTrack, setCurrentTrack] = useState(null);
  return (
    <div>
      <h1>Music Player ({currentTrack})</h1>
      {tracks.map((track, index) => (
        <button key={index} onClick={() => setCurrentTrack(index)}>
          {track}
        </button>
      ))}
    </div>
  );
}