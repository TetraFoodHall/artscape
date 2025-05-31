const podcastHeroSlides = [
  {
    img: "../images/photo_2025-05-24_11-27-22.jpg",
    title: "خدمات ما",
    text: "جهان بدون عکاسی برای ما مثل دنیای بدون نور است، که ذهن ما را باز می‌کند و احساسات را بیان می‌کند.",
    btn: "مشاهده نمونه کارها",
    btnLink: "#",
  },
  {
    img: "../images/photo_2025-05-22_15-30-26.jpg",
    title: "پادکست هنری",
    text: "با ما به دنیای هنر و خلاقیت سفر کنید و الهام بگیرید.",
    btn: "بشنوید",
    btnLink: "#",
  },
  {
    img: "../images/photo_2025-05-22_15-30-33.jpg",
    title: "مصاحبه با هنرمندان",
    text: "گفتگو با هنرمندان برجسته و شنیدن تجربیات آن‌ها.",
    btn: "مشاهده مصاحبه‌ها",
    btnLink: "#",
  },
];

function renderPodcastHeroSlides() {
  const carouselInner = document.querySelector(
    "#podcastHeroSlider .carousel-inner"
  );
  if (!carouselInner) return;
  carouselInner.innerHTML = "";
  podcastHeroSlides.forEach((slide, idx) => {
    const item = document.createElement("div");
    item.className = "carousel-item" + (idx === 0 ? " active" : "");
    item.innerHTML = `
      <img src="${slide.img}" alt="..." class="hero-bg-img" />
      <div class="hero-caption-box${idx === 0 ? " fade-in" : ""}">
        <h2 class="hero-caption-title">${slide.title}</h2>
        <p class="hero-caption-text">${slide.text}</p>
        <a href="${slide.btnLink}" class="hero-caption-btn">${slide.btn}</a>
      </div>
    `;
    carouselInner.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderPodcastHeroSlides();
  // پیجینیشن داینامیک بر اساس تعداد اسلایدها
  const totalPages = podcastHeroSlides.length;
  const pagination = document.createElement("div");
  pagination.className = "vertical-pagination";
  for (let i = 0; i < totalPages; i++) {
    const num = document.createElement("span");
    num.className = "page-number" + (i === 0 ? " active" : "");
    num.textContent = (i + 1)
      .toString()
      .padStart(2, "0")
      .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
    num.setAttribute("data-slide", i);
    pagination.appendChild(num);
    if (i < totalPages - 1) {
      const sep = document.createElement("span");
      sep.className = "separator";
      pagination.appendChild(sep);
    }
  }
  // اضافه کردن به صفحه (سمت چپ تصویر)
  const heroBg = document.querySelector(".hero-background");
  if (heroBg) {
    heroBg.style.position = "relative";
    pagination.style.position = "absolute";
    pagination.style.left = "2%";
    pagination.style.top = "40%";
    pagination.style.transform = "translateY(-40%)";
    heroBg.appendChild(pagination);
  }

  // رویداد کلیک برای فعال‌سازی شماره صفحه و تعویض اسلاید
  const pageNumbers = pagination.querySelectorAll(".page-number");
  const separators = pagination.querySelectorAll(".separator");
  pageNumbers.forEach((num, idx) => {
    num.addEventListener("click", () => {
      pagination
        .querySelector(".page-number.active")
        .classList.remove("active");
      num.classList.add("active");
      separators.forEach((sep) => sep.classList.remove("shrink"));
      if (idx < separators.length) separators[idx].classList.add("shrink");
      // تعویض اسلاید بوت‌استرپ
      const heroSlider = document.getElementById("podcastHeroSlider");
      if (heroSlider) {
        const bsCarousel = bootstrap.Carousel.getOrCreateInstance(heroSlider);
        bsCarousel.to(idx);
      }
    });
  });

  // انیمیشن فید برای باکس متن اسلایدر هنگام تغییر اسلاید (سینک با پیجینیشن)
  const heroSlider = document.getElementById("podcastHeroSlider");
  if (heroSlider) {
    // هر بار اسلاید عوض شد، فقط باکس متن اسلاید فعال fade-in بگیرد
    heroSlider.addEventListener("slid.bs.carousel", function () {
      document
        .querySelectorAll(".hero-caption-box")
        .forEach((box) => box.classList.remove("fade-in"));
      const active = heroSlider.querySelector(
        ".carousel-item.active .hero-caption-box"
      );
      if (active) {
        setTimeout(() => active.classList.add("fade-in"), 10);
      }
    });
    // برای اولین اسلاید
    setTimeout(() => {
      const first = heroSlider.querySelector(
        ".carousel-item.active .hero-caption-box"
      );
      if (first) first.classList.add("fade-in");
    }, 100);
  }

  // لیست موزیک‌ها (می‌توانید موزیک‌های بیشتری اضافه کنید)
  const musics = [
    {
      title: "آسمان آبی",
      src: "../video/15445977-uhd_3840_2160_30fps (1).mp4", // نمونه، باید فایل mp3 باشد
      img: "../images/photo_2025-05-22_15-30-26.jpg"
    },
    {
      title: "طلوع امید",
      src: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
      img: "../images/photo_2025-05-24_11-27-22.jpg"
    },
    {
      title: "شور زندگی",
      src: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
      img: "../images/nature-3082832_1280.jpg"
    },
    {
      title: "شور زندگی",
      src: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
      img: "../images/nature-3082832_1280.jpg"
    },
    {
      title: "شور زندگی",
      src: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
      img: "../images/nature-3082832_1280.jpg"
    },
    {
      title: "شور زندگی",
      src: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
      img: "../images/nature-3082832_1280.jpg"
    },
    {
      title: "شور زندگی",
      src: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
      img: "../images/nature-3082832_1280.jpg"
    },
  ];

  let currentTrack = 0;
  let isPlaying = false;
  const audioPlayer = document.getElementById('audioPlayer');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const seekBar = document.getElementById('seekBar');
  const volumeBar = document.getElementById('volumeBar');
  const currentTimeEl = document.getElementById('currentTime');
  const durationEl = document.getElementById('duration');
  const albumScroll = document.getElementById('albumScroll');
  const volumeIcon = document.getElementById('volumeIcon');

  function loadTrack(index) {
    const music = musics[index];
    audioPlayer.src = music.src;
    audioPlayer.load();
    updatePlayPauseIcon(false);
    isPlaying = false;
    // نمایش عکس آهنگ فعلی سمت راست
    const trackImg = document.getElementById('currentTrackImg');
    if (trackImg) trackImg.src = music.img;
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
    playPauseBtn.innerHTML = playing ? '<i class="fa fa-pause"></i>' : '<i class="fa fa-play"></i>';
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

  playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
      pauseTrack();
    } else {
      playTrack();
    }
  });

  prevBtn.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + musics.length) % musics.length;
    loadTrack(currentTrack);
    playTrack();
  });

  nextBtn.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % musics.length;
    loadTrack(currentTrack);
    playTrack();
  });

  audioPlayer.addEventListener('timeupdate', () => {
    seekBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
  });

  audioPlayer.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audioPlayer.duration);
  });

  seekBar.addEventListener('input', () => {
    audioPlayer.currentTime = (seekBar.value / 100) * audioPlayer.duration;
  });

  volumeBar.addEventListener('input', () => {
    audioPlayer.volume = volumeBar.value;
    updateVolumeIcon(audioPlayer.volume);
  });

  // کلیک روی آیکون صدا: قطع/وصل صدا
  if (volumeIcon) {
    volumeIcon.addEventListener('click', () => {
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

  // مقداردهی اولیه آیکون صدا
  updateVolumeIcon(audioPlayer.volume);

  audioPlayer.addEventListener('ended', () => {
    nextBtn.click();
  });

  function formatTime(sec) {
    if (isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  // ساخت آلبوم موزیک
  function renderAlbum() {
    albumScroll.innerHTML = '';
    musics.forEach((music, idx) => {
      const item = document.createElement('div');
      item.className = 'album-item';
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
    document.querySelectorAll('.album-play-icon').forEach(icon => {
      icon.addEventListener('click', (e) => {
        const idx = +icon.getAttribute('data-idx');
        currentTrack = idx;
        loadTrack(currentTrack);
        playTrack();
      });
    });
  }

  // مقداردهی اولیه
  window.addEventListener('DOMContentLoaded', () => {
    loadTrack(currentTrack);
    renderAlbum();
    audioPlayer.volume = 1;
  });
});
