import React from 'react';
import Player from "./Player.js";
function getTracks() {
    return new Promise((resolve)=>setTimeout(()=>resolve([
                'Track 1',
                'Track 2',
                'Track 3'
            ]), 1000));
}
export default async function Page() {
    const tracks = await getTracks();
    async function saveSelectedTrack(currentTrack) {
        "use server";
        console.log(`Selected track: ${currentTrack}/${tracks.length}`);
    }
    return <Player tracks={tracks} saveSelectedTrack={saveSelectedTrack}/>;
}
