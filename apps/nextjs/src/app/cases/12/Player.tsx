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