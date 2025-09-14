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