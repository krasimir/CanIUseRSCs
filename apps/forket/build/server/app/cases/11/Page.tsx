import forketSerializeProps from "forket/lib/utils/serializeProps.js";
import React from 'react';
import Player from "./Player.js";
import Controls from "./Controls.js";
function getTracks() {
    return new Promise((resolve)=>setTimeout(()=>resolve([
                'Track 1',
                'Track 2',
                'Track 3'
            ]), 1000));
}
export default async function Page() {
    const tracks = await getTracks();
    return <PlayerBoundary tracks={tracks}><ControlsBoundary/></PlayerBoundary>;
}
function PlayerBoundary(props) {
    const serializedProps = JSON.stringify(forketSerializeProps(props, "Player", "f_57"));
    const children = props.children;
    return (<>
      {children && (<template type="forket/children" id="f_57" data-c="Player">
          {children}
        </template>)}
      <template type="forket/start/f_57" data-c="Player"></template>
      <Player {...props} children={children}/>
      <template type="forket/end/f_57" data-c="Player"></template>
      <script id="forket/init/f_57" dangerouslySetInnerHTML={{
        __html: `$F_booter(document.currentScript, "f_57", "Player", ${JSON.stringify(serializedProps)});`
    }}></script>
    </>);
}
function ControlsBoundary(props) {
    const serializedProps = JSON.stringify(forketSerializeProps(props, "Controls", "f_58"));
    const children = props.children;
    return (<>
      {children && (<template type="forket/children" id="f_58" data-c="Controls">
          {children}
        </template>)}
      <template type="forket/start/f_58" data-c="Controls"></template>
      <Controls {...props} children={children}/>
      <template type="forket/end/f_58" data-c="Controls"></template>
      <script id="forket/init/f_58" dangerouslySetInnerHTML={{
        __html: `$F_booter(document.currentScript, "f_58", "Controls", ${JSON.stringify(serializedProps)});`
    }}></script>
    </>);
}
