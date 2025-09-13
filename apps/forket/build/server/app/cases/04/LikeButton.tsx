'use client';
import React, { useState, useTransition } from "react";
export default function LikeButton({ initialCount, incrementLike }) {
    const [isPending, startTransition] = useTransition();
    const [likeCount, setLikeCount] = useState(initialCount);
    const onClick = ()=>{
        startTransition(async ()=>{
            const currentCount = await incrementLike();
            setLikeCount(currentCount);
        });
    };
    return (<>
      <p>Total Likes: {likeCount}</p>
      <button onClick={onClick} disabled={isPending}>
        Like
      </button>
    </>);
}
