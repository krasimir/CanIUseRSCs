import React from "react";

import LikeButton from "./LikeButton";
import { getLikeCount, incrementLike } from "./actions";

export default function Page() {
  return (
    <div>
      <LikeButton initialCount={getLikeCount()} incrementLike={incrementLike}/>
    </div>
  );
}
