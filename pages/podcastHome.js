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

  // کلیک روی آیکون صدا: قطع/وصل صدا
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

  // مقداردهی اولیه آیکون صدا
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

  // ساخت آلبوم موزیک
  function renderAlbum() {
    albumScroll.innerHTML = "";
    musics.forEach((music, idx) => {
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

  // --- دیسکوگرافی داینامیک با پیجینیشن ---
  const discographyItems = [
    // نمونه دیتا، ادمین می‌تواند این آرایه را ویرایش کند
    {
      img: "../images/photo_2025-05-24_11-27-22.jpg",
      link: "album1.html",
      title: "آلبوم ۱",
    },
    {
      img: "../images/photo_2025-05-22_15-30-26.jpg",
      link: "album2.html",
      title: "آلبوم ۲",
    },
    {
      img: "../images/photo_2025-05-22_15-30-33.jpg",
      link: "album3.html",
      title: "آلبوم ۳",
    },
    {
      img: "../images/nature-3082832_1280.jpg",
      link: "album4.html",
      title: "آلبوم ۴",
    },
    {
      img: "../images/photo_2025-05-24_11-27-22.jpg",
      link: "album5.html",
      title: "آلبوم ۵",
    },
    {
      img: "../images/photo_2025-05-22_15-30-26.jpg",
      link: "album6.html",
      title: "آلبوم ۶",
    },
    {
      img: "../images/photo_2025-05-22_15-30-33.jpg",
      link: "album7.html",
      title: "آلبوم ۷",
    },
    {
      img: "../images/nature-3082832_1280.jpg",
      link: "album8.html",
      title: "آلبوم ۸",
    },
    // ...
  ];

  const itemsPerPage = 6; // 2 ردیف × 3 ستون
  let currentDiscPage = 1;

  function renderDiscographyPage(page = 1) {
    const discRow = document.querySelector(".discography .row");
    if (!discRow) return;
    discRow.innerHTML = "";
    const startIdx = (page - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const pageItems = discographyItems.slice(startIdx, endIdx);
    pageItems.forEach((item) => {
      const col = document.createElement("div");
      col.className = "disc col-12 col-sm-6 col-md-4 mb-4";
      col.innerHTML = `
        <a href="${item.link}" class="disc-link">
          <img src="${item.img}" alt="${item.title}" class="img-fluid rounded shadow" />
        </a>
      `;
      discRow.appendChild(col);
    });
  }

  function renderDiscographyPagination() {
    const discographyDiv = document.querySelector(".discography");
    if (!discographyDiv) return;
    let pagination = discographyDiv.querySelector(".disc-pagination");
    if (pagination) pagination.remove();
    const totalPages = Math.ceil(discographyItems.length / itemsPerPage);
    if (totalPages <= 1) return;
    pagination = document.createElement("div");
    pagination.className = "disc-pagination d-flex justify-content-center mt-3";
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.className =
        "btn btn-sm mx-1" +
        (i === currentDiscPage ? " btn-primary" : " btn-outline-primary");
      btn.textContent = toPersianDigits(i);
      btn.addEventListener("click", () => {
        currentDiscPage = i;
        renderDiscographyPage(currentDiscPage);
        renderDiscographyPagination();
      });
      pagination.appendChild(btn);
    }
    discographyDiv.appendChild(pagination);
  }

  // مقداردهی اولیه دیسکوگرافی
  window.addEventListener("DOMContentLoaded", () => {
    renderDiscographyPage(currentDiscPage);
    renderDiscographyPagination();
  });

  // مقداردهی اولیه
  window.addEventListener("DOMContentLoaded", () => {
    loadTrack(currentTrack);
    renderAlbum();
    audioPlayer.volume = 1;
  });

  // اسکریپت برای باز کردن مدال ویدیو و توقف ویدیو هنگام بستن
  const videoBanner = document.getElementById("videoBanner");
  const videoModal = document.getElementById("officialVideoModal");
  const officialVideo = document.getElementById("officialVideo");

  if (videoBanner && videoModal && officialVideo) {
    videoBanner.addEventListener("click", function () {
      const modal = new bootstrap.Modal(videoModal);
      modal.show();
      // شروع ویدیو از ابتدا
      officialVideo.currentTime = 0;
      officialVideo.play();
    });
    videoModal.addEventListener("hidden.bs.modal", function () {
      officialVideo.pause();
      officialVideo.currentTime = 0;
    });
  }

  // --- پادکست های من: دیتا و رندر داینامیک با پیجینیشن ---
  const podcastItems = [
    {
      img: "../images/photo_2025-05-24_11-27-22.jpg",
      link: "podcast1.html",
      title: "پادکست ۱",
      date: "۱۴۰۴/۰۳/۰۱"
    },
    {
      img: "../images/photo_2025-05-22_15-30-26.jpg",
      link: "podcast2.html",
      title: "پادکست ۲",
      date: "۱۴۰۴/۰۳/۰۲"
    },
    {
      img: "../images/photo_2025-05-22_15-30-33.jpg",
      link: "podcast3.html",
      title: "پادکست ۳",
      date: "۱۴۰۴/۰۳/۰۳"
    },
    {
      img: "../images/nature-3082832_1280.jpg",
      link: "podcast4.html",
      title: "پادکست ۴",
      date: "۱۴۰۴/۰۳/۰۴"
    },
    {
      img: "../images/photo_2025-05-24_11-27-22.jpg",
      link: "podcast5.html",
      title: "پادکست ۵",
      date: "۱۴۰۴/۰۳/۰۵"
    },
    {
      img: "../images/photo_2025-05-22_15-30-26.jpg",
      link: "podcast6.html",
      title: "پادکست ۶",
      date: "۱۴۰۴/۰۳/۰۶"
    },
    // ...
  ];
  const podcastPerPage = 3;
  let currentPodcastPage = 1;

  function renderPodcastPage(page = 1) {
    const podcastRow = document.querySelector(".podcast-list .row");
    if (!podcastRow) return;
    podcastRow.innerHTML = "";
    const startIdx = (page - 1) * podcastPerPage;
    const endIdx = startIdx + podcastPerPage;
    const pageItems = podcastItems.slice(startIdx, endIdx);
    pageItems.forEach((item, idx) => {
      const col = document.createElement("div");
      col.className = "col-12 col-sm-6 col-md-4 mb-4";
      col.style.animationDelay = (idx * 0.12) + 's';
      col.innerHTML = `
        <div class="podcast-card bg-dark rounded shadow h-100 d-flex flex-column podcast-fade">
          <a href="${item.link}" class="d-block podcast-img-link">
            <img src="${item.img}" alt="${item.title}" class="img-fluid rounded-top podcast-img podcast-img-fixed" />
          </a>
          <div class="p-3 flex-grow-1 d-flex flex-column justify-content-end">
            <h5 class="podcast-title">${toPersianDigits(item.title)}</h5>
            <p class="podcast-desc mb-0">${item.date ? toPersianDigits(item.date) : toPersianDigits("۱۴۰۴/۰۳/۱۰")}</p>
          </div>
        </div>
      `;
      podcastRow.appendChild(col);
    });
  }

  function renderPodcastPagination() {
    const podcastList = document.querySelector(".podcast-list");
    if (!podcastList) return;
    let pagination = podcastList.querySelector(".podcast-pagination");
    if (pagination) pagination.remove();
    const totalPages = Math.ceil(podcastItems.length / podcastPerPage);
    if (totalPages <= 1) return;
    pagination = document.createElement("div");
    pagination.className = "podcast-pagination d-flex justify-content-center mt-3";
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.className =
        "btn btn-sm mx-1" +
        (i === currentPodcastPage ? " btn-primary" : " btn-outline-primary");
      btn.textContent = toPersianDigits(i);
      btn.addEventListener("click", () => {
        currentPodcastPage = i;
        renderPodcastPage(currentPodcastPage);
        renderPodcastPagination();
      });
      pagination.appendChild(btn);
    }
    podcastList.appendChild(pagination);
  }

  window.addEventListener("DOMContentLoaded", () => {
    renderPodcastPage(currentPodcastPage);
    renderPodcastPagination();
  });
});

// تبدیل اعداد انگلیسی به فارسی
function toPersianDigits(str) {
  return String(str).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}
