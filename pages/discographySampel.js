// موزیک پلیر و آلبوم موزیک (کپی شده از podcastHome.js)
const musics = [
  {
    title: "آسمان آبی",
    src: "../music/ali sorena - delambaroone.mp3",
    img: "../images/photo_2025-05-22_15-30-26.jpg",
  },
  {
    title: "طلوع امید",
    src: "../music/Poori - Ashghal.mp3",
    img: "../images/photo_2025-05-24_11-27-22.jpg",
  },
  {
    title: "شور زندگی",
    src: "../music/Reza Pishro - Qabil.mp3",
    img: "../images/nature-3082832_1280.jpg",
  },
  {
    title: "شور زندگی",
    src: "../music/SoelChigini - Bagheri_53f32991-c628-4680-bd1d-d1a4aab8d27a.mp3",
    img: "../images/nature-3082832_1280.jpg",
  },
];

let currentTrack = 0;
let isPlaying = false;

window.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const seekBar = document.getElementById("seekBar");
  const volumeBar = document.getElementById("volumeBar");
  const currentTimeEl = document.getElementById("currentTime");
  const durationEl = document.getElementById("duration");
  const albumScroll = document.getElementById("albumScroll");
  const volumeIcon = document.getElementById("volumeIcon");

  function loadTrack(index) {
    const music = musics[index];
    audioPlayer.src = music.src;
    audioPlayer.load();
    updatePlayPauseIcon(false);
    isPlaying = false;
    // نمایش عکس آهنگ فعلی سمت راست
    const trackImg = document.getElementById("currentTrackImg");
    if (trackImg) trackImg.src = music.img;
    // حذف تغییر نام آلبوم (نام آلبوم ثابت است)
  }

  function playTrack() {
    audioPlayer.play();
    isPlaying = true;
    updatePlayPauseIcon(true);
  }

  function pauseTrack() {
    audioPlayer.pause();
    isPlaying = false;
    updatePlayPauseIcon(false);
  }

  function updatePlayPauseIcon(playing) {
    playPauseBtn.innerHTML = playing
      ? '<i class="fa fa-pause"></i>'
      : '<i class="fa fa-play"></i>';
  }

  function updateVolumeIcon(vol) {
    if (!volumeIcon) return;
    if (vol == 0) {
      volumeIcon.innerHTML = '<i class="fa fa-volume-mute"></i>';
    } else if (vol < 0.5) {
      volumeIcon.innerHTML = '<i class="fa fa-volume-down"></i>';
    } else {
      volumeIcon.innerHTML = '<i class="fa fa-volume-up"></i>';
    }
  }

  playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
      pauseTrack();
    } else {
      playTrack();
    }
  });

  prevBtn.addEventListener("click", () => {
    currentTrack = (currentTrack - 1 + musics.length) % musics.length;
    loadTrack(currentTrack);
    playTrack();
  });

  nextBtn.addEventListener("click", () => {
    currentTrack = (currentTrack + 1) % musics.length;
    loadTrack(currentTrack);
    playTrack();
  });

  audioPlayer.addEventListener("timeupdate", () => {
    seekBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
  });

  audioPlayer.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audioPlayer.duration);
  });

  seekBar.addEventListener("input", () => {
    audioPlayer.currentTime = (seekBar.value / 100) * audioPlayer.duration;
  });

  volumeBar.addEventListener("input", () => {
    audioPlayer.volume = volumeBar.value;
    updateVolumeIcon(audioPlayer.volume);
  });

  if (volumeIcon) {
    volumeIcon.addEventListener("click", () => {
      if (audioPlayer.volume > 0) {
        audioPlayer.volume = 0;
        volumeBar.value = 0;
      } else {
        audioPlayer.volume = 1;
        volumeBar.value = 1;
      }
      updateVolumeIcon(audioPlayer.volume);
    });
  }

  updateVolumeIcon(audioPlayer.volume);

  audioPlayer.addEventListener("ended", () => {
    nextBtn.click();
  });

  function formatTime(sec) {
    if (isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  }

  // بازنویسی تابع renderAlbum برای استفاده از window.musics (که داینامیک می‌شود)
  function renderAlbum() {
    const albumScroll = document.getElementById("albumScroll");
    if (!albumScroll || !window.musics) return;
    albumScroll.innerHTML = "";
    window.musics.forEach((music, idx) => {
      const item = document.createElement("div");
      item.className = "album-item";
      item.innerHTML = `
        <div class="album-img-box">
          <img src="${music.img}" alt="${music.title}" />
          <div class="album-play-icon" data-idx="${idx}"><i class="fa fa-play"></i></div>
        </div>
        <div class="album-title">${music.title}</div>
      `;
      albumScroll.appendChild(item);
    });
    // رویداد پلی روی هر موزیک
    document.querySelectorAll(".album-play-icon").forEach((icon) => {
      icon.addEventListener("click", (e) => {
        const idx = +icon.getAttribute("data-idx");
        currentTrack = idx;
        loadTrack(currentTrack);
        playTrack();
      });
    });
  }

  // موزیک پلیر را داخل کانتینر قرار بده تا اورفلو نداشته باشد
  const musicContainer = document.querySelector('.music-container');
  if (musicContainer && !musicContainer.classList.contains('container')) {
    musicContainer.classList.add('container');
  }

  // مقداردهی اولیه
  loadTrack(currentTrack);
  renderAlbum();
  audioPlayer.volume = 1;

  // اگر اطلاعات آلبوم انتخاب شده وجود داشت، آن را نمایش بده
  const albumData = localStorage.getItem("selectedAlbum");
  if (albumData) {
    const album = JSON.parse(albumData);
    // عکس و نام و توضیحات و تاریخ
    const imgEl = document.querySelector(".discography-img img");
    const nameEl = document.querySelector(".discography-text h1, #albumName");
    const descEl = document.querySelector(".discography-text p:not(.date)");
    const dateEl = document.querySelector(".discography-text .date");
    if (imgEl) imgEl.src = album.img;
    if (nameEl) nameEl.textContent = album.title;
    if (descEl) descEl.textContent = album.description;
    if (dateEl) dateEl.textContent = album.date;
    // موزیک‌های آلبوم
    if (album.musics && Array.isArray(album.musics)) {
      window.musics = album.musics;
      // رندر مجدد آلبوم موزیک
      if (typeof renderAlbum === "function") renderAlbum();
      // عکس ترک فعلی
      const trackImg = document.getElementById("currentTrackImg");
      if (trackImg && album.musics[0]) trackImg.src = album.musics[0].img;
    }
    // ویژگی‌ها (لیست موزیک‌ها یا توضیحات بیشتر)
    const featuresEl = document.getElementById("albumFeatures");
    if (featuresEl) {
      featuresEl.innerHTML = "";
      // فقط عنوان موزیک را به عنوان آیتم لیست اضافه کن (بدون عکس)
      if (album.musics && Array.isArray(album.musics)) {
        album.musics.forEach(music => {
          const li = document.createElement("li");
          li.textContent = music.title;
          featuresEl.appendChild(li);
        });
      }
    }
    // داینامیک کردن لینک‌های دانلود
    const downloadBtns = document.querySelectorAll('.download-btn');
    if (album.downloadLinks) {
      // ترتیب: [اپل موزیک، یوتیوب موزیک، اسپاتیفای]
      const btnLinks = [
        album.downloadLinks.apple,
        album.downloadLinks.youtube,
        album.downloadLinks.spotify
      ];
      downloadBtns.forEach((btn, idx) => {
        const link = btnLinks[idx];
        const button = btn.querySelector('button');
        if (link && button) {
          button.onclick = function(e) {
            e.preventDefault();
            window.open(link, '_blank');
          };
        } else if (button) {
          button.onclick = null;
        }
      });
    }
  }
});