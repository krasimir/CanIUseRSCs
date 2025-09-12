import React from "react";

import LikeButton from "./LikeButton";
import { getLikeCount } from "./actions";

export default function Page() {
  return (
    <div>
      <LikeButton initialCount={getLikeCount()}/>
    </div>
  );
}
