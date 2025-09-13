import forketSerializeProps from "forket/lib/utils/serializeProps.js";
import React from "react";
import LikeButton from "./LikeButton.js";
import { getLikeCount, incrementLike } from "./actions.js";
export default function Page() {
    return (<div>
      <LikeButtonBoundary initialCount={getLikeCount()} incrementLike={"$FSA_f_42_incrementLike"}/>
    </div>);
}
function LikeButtonBoundary(props) {
    const serializedProps = JSON.stringify(forketSerializeProps(props, "LikeButton", "f_44"));
    const children = props.children;
    return (<>
      {children && (<template type="forket/children" id="f_44" data-c="LikeButton">
          {children}
        </template>)}
      <template type="forket/start/f_44" data-c="LikeButton"></template>
      <LikeButton {...props} children={children}/>
      <template type="forket/end/f_44" data-c="LikeButton"></template>
      <script id="forket/init/f_44" dangerouslySetInnerHTML={{
        __html: `$F_booter(document.currentScript, "f_44", "LikeButton", ${JSON.stringify(serializedProps)});`
    }}></script>
    </>);
}
