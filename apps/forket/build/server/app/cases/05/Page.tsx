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
    const serializedProps = JSON.stringify(forketSerializeProps(props, "LikeButton", "f_42"));
    const children = props.children;
    return (<>
      {children && (<template type="forket/children" id="f_42" data-c="LikeButton">
          {children}
        </template>)}
      <template type="forket/start/f_42" data-c="LikeButton"></template>
      <LikeButton {...props} children={children}/>
      <template type="forket/end/f_42" data-c="LikeButton"></template>
      <script id="forket/init/f_42" dangerouslySetInnerHTML={{
        __html: `$F_booter(document.currentScript, "f_42", "LikeButton", ${JSON.stringify(serializedProps)});`
    }}></script>
    </>);
}
