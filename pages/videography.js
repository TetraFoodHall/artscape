// داینامیک ساختن نمونه کارهای ویدیویی
const videoSamples = [
  {
    src: "../images/photo_2025-05-22_15-30-26.jpg",
    category: "صنعتی",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-22_15-30-33.jpg",
    category: "تیزر تبلیغاتی",
    video: "../video/heZ7PSdsLD.mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "مراسم",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
    desc: "فیلمبرداری صنعتی با کیفیت بالا و نورپردازی حرفه‌ای.",
  },
];

const videoSampleItemsContainer = document.querySelector(".sampel-items");
const videoFilterNav = document.querySelectorAll(".sampel-navbar ul li");
let lastFilter = "همه";

function renderVideoSamples(filter) {
  lastFilter = filter;
  let filtered =
    filter === "همه"
      ? videoSamples
      : videoSamples.filter((item) => item.category === filter);
  videoSampleItemsContainer.innerHTML = "";
  filtered.forEach((item, idx) => {
    const wrapper = document.createElement("div");
    wrapper.className = "sample-item-wrapper fade-in";
    wrapper.style.animationDelay = idx * 80 + "ms";
    wrapper.innerHTML = `
      <img src="${item.src}" alt="نمونه کار ویدیویی ${
      idx + 1
    }" class="sample-img" />
      <div class="sample-hover-text">مشاهده ویدیو</div>
      <button class="play-video-btn" data-video="${
        item.video
      }" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.5);border:none;border-radius:50%;padding:12px;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;">
        <i class='fa-solid fa-play' style='color:#fff;font-size:1.5em;'></i>
      </button>
    `;
    videoSampleItemsContainer.appendChild(wrapper);
  });
  addVideoSampleClickHandlers();
}

function showVideoModal(videoSrc, sampleData) {
  let modal = document.getElementById("video-sample-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "video-sample-modal";
    modal.innerHTML = `
      <div class="modal-backdrop" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.85);z-index:9999;"></div>
      <div class="modal-content" style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10000;max-width:90vw;max-height:80vh;display:flex;flex-direction:column;align-items:center;">
        <button class="modal-close" style="position:absolute;top:-32px;left:0;background:transparent;border:none;border-radius:50%;width:36px;height:36px;font-size:1.5rem;z-index:2;cursor:pointer;color:#fff;">&times;</button>
        <video controls autoplay style="width:100%;height:60vh;max-width:90vw;background:#000;border-radius:12px;"><source src="${videoSrc}" type="video/mp4" /></video>
        <a href="#" class="view-sample-link" style="margin-top:18px;font-size:1.1rem;font-weight:bold;color:orange;text-decoration:none;display:inline-flex;align-items:center;gap:8px;">
          مشاهده نمونه کار <i class='fa-solid fa-arrow-left' style='font-size:1em;color:orange;'></i>
        </a>
      </div>
    `;
    document.body.appendChild(modal);
  } else {
    modal.querySelector("video source").src = videoSrc;
    modal.querySelector("video").load();
    modal.style.display = "block";
  }
  modal.querySelector(".modal-close").onclick = () => modal.remove();
  modal.querySelector(".modal-backdrop").onclick = () => modal.remove();
  // اضافه کردن رویداد کلیک به دکمه مشاهده نمونه کار
  const viewSampleBtn = modal.querySelector(".view-sample-link");
  if (viewSampleBtn) {
    viewSampleBtn.onclick = function (e) {
      e.preventDefault();
      // انتقال اطلاعات نمونه کار به localStorage و رفتن به صفحه جدید
      if (sampleData) {
        const data = {
          src: sampleData.src,
          video: sampleData.video,
          desc: sampleData.desc || "",
          index: sampleData.index || "",
          date: new Date().toLocaleDateString("fa-IR"),
        };
        localStorage.setItem("selectedVideoSample", JSON.stringify(data));
      }
      window.location.href = "videoGraphySampel.html";
    };
  }
}

function addVideoSampleClickHandlers() {
  document.querySelectorAll(".play-video-btn").forEach((btn, idx) => {
    btn.onclick = function (e) {
      e.stopPropagation();
      const videoSrc = this.getAttribute("data-video");
      // پیدا کردن اطلاعات نمونه کار مربوط به این دکمه
      let filtered =
        lastFilter === "همه"
          ? videoSamples
          : videoSamples.filter((item) => item.category === lastFilter);
      const sampleData = filtered[idx];
      showVideoModal(videoSrc, sampleData);
    };
  });
}

videoFilterNav.forEach((li) => {
  li.addEventListener("click", function () {
    videoFilterNav.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
    renderVideoSamples(this.textContent.trim());
  });
});

// نمایش اولیه همه نمونه‌ها
renderVideoSamples("همه");

// داینامیک اسلایدر نمونه کار فیلمبرداری
const videoSliderData = [
  {
    img: "../images/photo_2025-05-22_15-30-26.jpg",
    title: "فیلمبرداری صنعتی",
    desc: "فیلمبرداری حرفه‌ای پروژه‌های صنعتی و تبلیغاتی.",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
  },
  {
    img: "../images/photo_2025-05-22_15-30-33.jpg",
    title: "تیزر تبلیغاتی",
    desc: "ساخت تیزرهای تبلیغاتی خلاقانه و تاثیرگذار.",
    video: "../video/heZ7PSdsLD.mp4",
  },
  {
    img: "../images/photo_2025-05-24_11-27-22.jpg",
    title: "فیلمبرداری مراسم",
    desc: "فیلمبرداری حرفه‌ای مراسم و رویدادها.",
    video: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
  },
];

window.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".video-slider-wrapper");
  if (sliderWrapper) {
    sliderWrapper.innerHTML = "";
    videoSliderData.forEach((slide, idx) => {
      const slideDiv = document.createElement("div");
      slideDiv.className = "video-slider-slide" + (idx === 0 ? " active" : "");
      slideDiv.innerHTML = `
        <img src="${slide.img}" alt="${slide.title}" class="video-slider-img" />
        <div class="video-slider-content-box">
          <span class="corner-decoration corner-top-left"></span>
          <span class="corner-decoration corner-top-right"></span>
          <span class="corner-decoration corner-bottom-left"></span>
          <span class="corner-decoration corner-bottom-right"></span>
          <h2 class="video-slider-title">${slide.title}</h2>
          <p class="video-slider-desc">${slide.desc}</p>
          <a href="#" class="video-slider-btn play-btn" data-idx="${idx}" style="display:inline-flex;align-items:center;justify-content:center;gap:8px;">
            <i class='fa-solid fa-play' style='color:#222;font-size:1.3em;'></i>
          </a>
        </div>
      `;
      sliderWrapper.appendChild(slideDiv);
    });
  }

  const sliderSlides = document.querySelectorAll(
    ".video-slider-section .video-slider-slide"
  );
  let sliderCurrent = 0;
  let sliderInterval = null;

  function showSliderSlide(idx) {
    sliderSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === idx);
      // Remove fade-in-up from all text elements in all slides
      slide
        .querySelectorAll(
          ".video-slider-title, .video-slider-desc, .video-slider-btn"
        )
        .forEach((el) => {
          el.classList.remove("fade-in-up");
        });
    });
    // Add fade-in-up to text elements in the active slide (with a slight delay for smoothness)
    setTimeout(() => {
      const activeSlide = sliderSlides[idx];
      if (activeSlide) {
        activeSlide
          .querySelectorAll(
            ".video-slider-title, .video-slider-desc, .video-slider-btn"
          )
          .forEach((el, i) => {
            // Add a staggered delay for each element
            el.style.animationDelay = i * 0.08 + "s";
            el.classList.add("fade-in-up");
          });
      }
    }, 10);
    sliderCurrent = idx;
    updatePagination(idx);
  }

  function nextSliderSlide() {
    let next = sliderCurrent + 1;
    if (next >= sliderSlides.length) next = 0;
    showSliderSlide(next);
  }

  function startSliderInterval() {
    sliderInterval = setInterval(nextSliderSlide, 5000);
  }

  function resetSliderInterval() {
    if (sliderInterval) clearInterval(sliderInterval);
    startSliderInterval();
  }

  if (sliderSlides.length > 1) {
    startSliderInterval();
  }

  // پیجینیشن سمت چپ
  const pagination = document.querySelector(".video-slider-pagination");

  function updatePagination(activeIdx) {
    if (!pagination) return;
    const nums = pagination.querySelectorAll(".page-number");
    const seps = pagination.querySelectorAll(".separator");
    nums.forEach((num, i) => {
      num.classList.toggle("active", i === activeIdx);
    });
    seps.forEach((sep, i) => {
      sep.classList.toggle("shrink", i === activeIdx);
    });
  }

  if (pagination) {
    pagination.innerHTML = "";
    for (let i = 0; i < videoSliderData.length; i++) {
      const num = document.createElement("span");
      num.className = "page-number" + (i === 0 ? " active" : "");
      num.textContent = (i + 1)
        .toString()
        .padStart(2, "0")
        .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
      num.addEventListener("click", () => {
        showSliderSlide(i);
        resetSliderInterval();
      });
      pagination.appendChild(num);
      if (i < videoSliderData.length - 1) {
        const sep = document.createElement("span");
        sep.className = "separator";
        pagination.appendChild(sep);
      }
    }
  }

  // Video Modal
  let videoModal = document.getElementById("video-modal");
  if (!videoModal) {
    videoModal = document.createElement("div");
    videoModal.id = "video-modal";
    videoModal.style.cssText = `position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);`;
    videoModal.innerHTML = `
      <div id="video-modal-content" style="position:relative;max-width:90vw;max-height:80vh;">
        <button id="close-video-modal" style="position:absolute;top:-32px;left:0;background:transparent;border:none;border-radius:50%;width:36px;height:36px;font-size:1.5rem;z-index:2;cursor:pointer;color:#fff;">&times;</button>
        <video id="modal-video" controls style="width:100%;height:60vh;max-width:90vw;background:#000;border-radius:12px;"></video>
      </div>
    `;
    document.body.appendChild(videoModal);
  }
  const modalVideo = document.getElementById("modal-video");
  const closeVideoModal = document.getElementById("close-video-modal");
  if (closeVideoModal) {
    closeVideoModal.onclick = function () {
      videoModal.style.display = "none";
      if (modalVideo) {
        modalVideo.pause();
        modalVideo.currentTime = 0;
      }
    };
  }
  document.querySelectorAll(".play-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const idx = parseInt(this.getAttribute("data-idx"));
      if (!isNaN(idx) && videoSliderData[idx].video) {
        modalVideo.src = videoSliderData[idx].video;
        videoModal.style.display = "flex";
        modalVideo.play();
      }
    });
  });

  // انیمیشن مقدار رنج اینپوت‌ها از صفر تا مقدار نهایی
  document
    .querySelectorAll('.range-section input[type="range"]')
    .forEach(function (range) {
      let finalValue = parseInt(
        range.value ||
          range.getAttribute("value") ||
          range.getAttribute("defvalue") ||
          0
      );
      range.value = 0;
      // مقدار عددی نارنجی کنار رنج
      let valueSpan = document.createElement("span");
      valueSpan.className = "range-value";
      valueSpan.textContent = finalValue;
      range.parentNode.appendChild(valueSpan);
      // انیمیشن افزایش مقدار
      let current = 0;
      let step = Math.max(1, Math.round(finalValue / 40));
      function animate() {
        if (current < finalValue) {
          current += step;
          if (current > finalValue) current = finalValue;
          range.value = current;
          valueSpan.textContent = current;
          // برای رنگ progress
          let percent = (current / (parseInt(range.max) || 100)) * 100;
          range.style.setProperty("--progress", percent + "%");
          requestAnimationFrame(animate);
        } else {
          range.value = finalValue;
          valueSpan.textContent = finalValue;
          let percent = (finalValue / (parseInt(range.max) || 100)) * 100;
          range.style.setProperty("--progress", percent + "%");
        }
      }
      animate();
      // آپدیت مقدار و رنگ هنگام تغییر دستی
      range.addEventListener("input", function () {
        valueSpan.textContent = this.value;
        let percent = (this.value / (parseInt(this.max) || 100)) * 100;
        this.style.setProperty("--progress", percent + "%");
      });
    });

  // داینامیک کردن بخش درباره ما
  const aboutTabs = [
    {
      title: "سبک کاری ما",
      text: "سبک من ترکیبی است بین عکاسی تبلیغاتی و عکاسی هنری با لمس مد و روشنایی خلاق. عکس های من از نور، رنگ، تکنیک های پردازش سیاه و سفید، عکس های پرنعمت، چشم انداز خلاق و البته، مهمتر از همه، شخصیت های مردم من عکاسی الهام گرفته اند!",
      features: [
        {
          icon: "<i class='fa-solid fa-camera fa-2xl' style='color: #ac8a11'></i>",
          title: "حرفه ای بودن",
          desc: "ما تمام حرفه ، تعهد و مراقبت خود را سرمایه گذاری می کنیم.",
        },
        {
          icon: "<i class='fa-brands fa-envira fa-2xl' style='color: #ac8a11'></i>",
          title: "شفافیت",
          desc: "ما در هر اتفاقی که در داخل و خارج رخ می دهد شفاف هستیم.",
        },
      ],
      img: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      title: "ماموریت های ما",
      text: "ماموریت ما ارائه بهترین خدمات فیلمبرداری و عکاسی با بالاترین کیفیت و خلاقیت است تا رضایت کامل مشتریان را جلب کنیم.",
      features: [
        {
          icon: "<i class='fa-solid fa-bolt fa-2xl' style='color: #ac8a11'></i>",
          title: "سرعت عمل",
          desc: "ما پروژه‌ها را در سریع‌ترین زمان ممکن و با کیفیت بالا تحویل می‌دهیم.",
        },
        {
          icon: "<i class='fa-solid fa-users fa-2xl' style='color: #ac8a11'></i>",
          title: "تیم حرفه‌ای",
          desc: "تیم ما متشکل از افراد متخصص و با تجربه است.",
        },
      ],
      img: "../images/photo_2025-05-22_15-30-33.jpg",
    },
    {
      title: "چشم انداز ما",
      text: "چشم انداز ما تبدیل شدن به یکی از برترین استودیوهای خلاق در زمینه فیلمبرداری و عکاسی در سطح کشور است.",
      features: [
        {
          icon: "<i class='fa-solid fa-star fa-2xl' style='color: #ac8a11'></i>",
          title: "کیفیت ممتاز",
          desc: "همیشه کیفیت را در اولویت قرار می‌دهیم.",
        },
        {
          icon: "<i class='fa-solid fa-lightbulb fa-2xl' style='color: #ac8a11'></i>",
          title: "نوآوری",
          desc: "همواره به دنبال ایده‌های نو و خلاقانه هستیم.",
        },
      ],
      img: "../images/photo_2025-05-24_11-27-22.jpg",
    },
  ];

  const aboutNavItems = document.querySelectorAll(".about-nav ul li");
  const aboutCaption = document.querySelector(".about-caption p");
  const aboutFeatures = document.querySelectorAll(".about-feature");
  const aboutImage = document.querySelector(".about-image img");

  aboutNavItems.forEach((li, idx) => {
    li.style.cursor = "pointer";
    li.addEventListener("click", function () {
      aboutNavItems.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
      // تغییر متن
      aboutCaption.innerHTML = aboutTabs[idx].text;
      // تغییر ویژگی‌ها
      aboutFeatures.forEach((featureDiv, fIdx) => {
        if (aboutTabs[idx].features[fIdx]) {
          featureDiv.innerHTML =
            aboutTabs[idx].features[fIdx].icon +
            `<h4 class='mt-4'>${aboutTabs[idx].features[fIdx].title}</h4>` +
            `<p class='mt-4'>${aboutTabs[idx].features[fIdx].desc}</p>`;
        } else {
          featureDiv.innerHTML = "";
        }
      });
      // تغییر عکس
      aboutImage.src = aboutTabs[idx].img;
    });
  });
});
