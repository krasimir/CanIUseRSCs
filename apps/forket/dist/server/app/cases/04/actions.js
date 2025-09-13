"use server";
let likeCount = 0;
async function incrementLike() {
  likeCount++;
  return likeCount;
}
async function getLikeCount() {
  return likeCount;
}
export {
  getLikeCount,
  incrementLike
};
