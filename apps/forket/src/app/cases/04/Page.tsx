import React from "react";
import LikeButton from "./LikeButton.js";
import { getLikeCount, incrementLike } from "./actions.js";
export default function Page() {
    return (<div>
      <LikeButton initialCount={getLikeCount()} incrementLike={incrementLike}/>
    </div>);
}
