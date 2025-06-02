document.addEventListener("DOMContentLoaded", function () {
  // Like button logic
  const likeBtn = document.getElementById("likeBtn");
  const likeCount = document.getElementById("likeCount");
  const likeSection = document.getElementById("likeSection");
  const storageKey = "myPodcastSampel-liked";
  const countKey = "myPodcastSampel-likeCount";

  // Get like state from localStorage
  let liked = localStorage.getItem(storageKey) === "true";

  // --- Like count should be saved globally (simulate server with localStorage) ---
  let count = parseInt(localStorage.getItem(countKey) || "0", 10);

  function updateLikeUI() {
    likeSection.classList.toggle("liked", liked);
    likeCount.textContent = count;
  }

  likeBtn.addEventListener("click", function () {
    // Prevent multiple users on same browser from cheating
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

  updateLikeUI();

  // --- Podcast Dynamic Render ---
  const podcastData = localStorage.getItem("selectedPodcast");
  if (podcastData) {
    localStorage.removeItem("selectedAlbum");
    const podcast = JSON.parse(podcastData);
    // Update main image
    const imgEl = document.querySelector(".discography-img img");
    if (imgEl) imgEl.src = podcast.img;
    // Update title
    const nameEl = document.querySelector(".discography-text h1, #albumName");
    if (nameEl) nameEl.textContent = podcast.title;
    // Update date
    const dateEl = document.querySelector(".discography-text .date");
    if (dateEl) dateEl.textContent = podcast.date || "";
    // Update caption (if available)
    const captionEl = document.getElementById("article-title");
    if (captionEl && podcast.caption) captionEl.textContent = podcast.caption;
    // Update description (if available)
    const descEl = document.querySelector(".discography-text p:not(.date)");
    if (descEl && podcast.description) descEl.textContent = podcast.description;
    // Update article content (if available)
    const articleContentEl = document.getElementById("article-content");
    if (articleContentEl && podcast.description)
      articleContentEl.textContent = podcast.description;
    // Set musics if available (for player)
    if (podcast.musics && Array.isArray(podcast.musics)) {
      window.musics = podcast.musics;
      // Reset currentTrack to 0 for new podcast
      if (typeof currentTrack !== "undefined") currentTrack = 0;
      // If renderAlbum exists, call it
      if (typeof renderAlbum === "function") renderAlbum();
      // Load first track for player
      if (typeof loadTrack === "function") loadTrack(0);
      const trackImg = document.getElementById("currentTrackImg");
      if (trackImg && podcast.musics[0]) trackImg.src = podcast.musics[0].img;
    }
    // Update features list (music titles or features)
    const featuresEl = document.getElementById("albumFeatures");
    if (featuresEl) {
      featuresEl.innerHTML = "";
      if (podcast.features && Array.isArray(podcast.features)) {
        podcast.features.forEach((f) => {
          const li = document.createElement("li");
          li.textContent = f;
          featuresEl.appendChild(li);
        });
      } else if (podcast.musics && Array.isArray(podcast.musics)) {
        podcast.musics.forEach((music) => {
          const li = document.createElement("li");
          li.textContent = music.title;
          featuresEl.appendChild(li);
        });
      }
    }
    // Update download links for buttons
    const downloadBtns = document.querySelectorAll(".download-btn");
    if (podcast.downloadLinks) {
      const btnLinks = [
        podcast.downloadLinks.apple,
        podcast.downloadLinks.youtube,
        podcast.downloadLinks.spotify,
      ];
      downloadBtns.forEach((btn, idx) => {
        const link = btnLinks[idx];
        const button = btn.querySelector("button");
        if (link && button) {
          button.onclick = function (e) {
            e.preventDefault();
            window.open(link, "_blank");
          };
        } else if (button) {
          button.onclick = null;
        }
      });
    }
  }
});
