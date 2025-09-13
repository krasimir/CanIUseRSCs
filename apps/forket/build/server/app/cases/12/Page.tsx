import forketSerializeProps from "forket/lib/utils/serializeProps.js";
import React from 'react';
import Player from "./Player.js";
export async function saveSelectedTrack(currentTrack) {
    "use server";
    console.log(`Selected track: ${currentTrack}/${tracks.length}`);
}
function getTracks() {
    return new Promise((resolve)=>setTimeout(()=>resolve([
                'Track 1',
                'Track 2',
                'Track 3'
            ]), 1000));
}
export default async function Page() {
    const tracks = await getTracks();
    return <PlayerBoundary tracks={tracks} saveSelectedTrack={"$FSA_f_59_saveSelectedTrack"}/>;
}
function PlayerBoundary(props) {
    const serializedProps = JSON.stringify(forketSerializeProps(props, "Player", "f_60"));
    const children = props.children;
    return (<>
      {children && (<template type="forket/children" id="f_60" data-c="Player">
          {children}
        </template>)}
      <template type="forket/start/f_60" data-c="Player"></template>
      <Player {...props} children={children}/>
      <template type="forket/end/f_60" data-c="Player"></template>
      <script id="forket/init/f_60" dangerouslySetInnerHTML={{
        __html: `$F_booter(document.currentScript, "f_60", "Player", ${JSON.stringify(serializedProps)});`
    }}></script>
    </>);
}
