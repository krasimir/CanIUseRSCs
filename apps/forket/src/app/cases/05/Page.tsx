import React from "react";
import LikeButton from "./LikeButton.js";
import { getLikeCount } from "./actions.js";
export default function Page() {
    return (<div>
      <LikeButton initialCount={getLikeCount()}/>
    </div>);
}
