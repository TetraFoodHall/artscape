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

window.addEventListener('DOMContentLoaded', function() {
  const data = localStorage.getItem('selectedPhotoSample');
  if (data) {
    const sample = JSON.parse(data);
    // عنوان و تاریخ
    const titleEl = document.querySelector('.header-title h1');
    if (titleEl) { titleEl.textContent = `نمونه کار ${sample.index || ''}`; }
    const dateEl = document.querySelector('.header-title p');
    if (dateEl) { dateEl.textContent = sample.date || ''; }
    // عکس
    const imgEl = document.querySelector('.header-img img');
    if (imgEl) { imgEl.src = sample.src; }
    // توضیحات
    const descEl = document.querySelector('.caption p');
    if (descEl) { descEl.textContent = sample.desc || ''; }
  }
});
