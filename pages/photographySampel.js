// Like button logic for photography sample page
// Keys are unique for this page
const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");
const likeSection = document.getElementById("likeSection");
const storageKey = "photographySampel-liked";
const countKey = "photographySampel-likeCount";

let liked = localStorage.getItem(storageKey) === "true";
let count = parseInt(localStorage.getItem(countKey) || "0", 10);

function updateLikeUI() {
  if (likeSection) likeSection.classList.toggle("liked", liked);
  if (likeCount) likeCount.textContent = count;
}

if (likeBtn && likeCount && likeSection) {
  updateLikeUI();
  likeBtn.addEventListener("click", function () {
    if (liked) {
      liked = false;
      count = Math.max(0, count - 1);
    } else {
      liked = true;
      count = count + 1;
    }
    localStorage.setItem(storageKey, liked);
    localStorage.setItem(countKey, count);
    updateLikeUI();
  });
}
