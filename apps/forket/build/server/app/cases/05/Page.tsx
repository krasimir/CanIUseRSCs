import forketSerializeProps from "forket/lib/utils/serializeProps.js";
import React from "react";
import LikeButton from "./LikeButton.js";
import { getLikeCount } from "./actions.js";
export default function Page() {
    return (<div>
      <LikeButtonBoundary initialCount={getLikeCount()}/>
    </div>);
}
function LikeButtonBoundary(props) {
    const serializedProps = JSON.stringify(forketSerializeProps(props, "LikeButton", "f_47"));
    const children = props.children;
    return (<>
      {children && (<template type="forket/children" id="f_47" data-c="LikeButton">
          {children}
        </template>)}
      <template type="forket/start/f_47" data-c="LikeButton"></template>
      <LikeButton {...props} children={children}/>
      <template type="forket/end/f_47" data-c="LikeButton"></template>
      <script id="forket/init/f_47" dangerouslySetInnerHTML={{
        __html: `$F_booter(document.currentScript, "f_47", "LikeButton", ${JSON.stringify(serializedProps)});`
    }}></script>
    </>);
}
