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