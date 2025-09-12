"use server";

let likeCount = 0;
export async function incrementLike() {
  likeCount++;
  return likeCount;
}
export async function getLikeCount() {
  return likeCount;
}