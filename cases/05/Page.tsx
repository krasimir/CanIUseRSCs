import React from "react";

import LikeButton from "./LikeButton";
import { getLikeCount } from "./actions";

export default async function Page() {
  return (
    <div>
      <LikeButton initialCount={await getLikeCount()}/>
    </div>
  );
}
