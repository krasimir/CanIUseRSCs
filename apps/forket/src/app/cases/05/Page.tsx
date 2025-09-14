import React from "react";
import LikeButton from "./LikeButton.js";
import { getLikeCount } from "./actions.js";
export default async function Page() {
    return (<div>
      <LikeButton initialCount={await getLikeCount()}/>
    </div>);
}
