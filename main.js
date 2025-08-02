// نمایش تعداد آیتم‌های سبد خرید روی همه صفحات
document.addEventListener("DOMContentLoaded", function () {
  // ...کدهای دیگر...
});
// داینامیک‌سازی بخش ویژگی‌ها در صفحه خدمات
if (window.location.pathname.includes("services.html")) {
  const features = [
    {
      id: 1,
      icon: "../icons/14639-NPQ7PS-09.svg",
      title: "عکاسی حرفه‌ای",
      caption: "ارائه خدمات عکاسی با بهترین کیفیت و تجهیزات روز دنیا.",
    },
    {
      id: 2,
      icon: "../icons/14639-NPQ7PS-07.svg",
      title: "طراحی گرافیک",
      caption: "طراحی لوگو، پوستر و بنرهای تبلیغاتی با خلاقیت بالا.",
    },
    {
      id: 3,
      icon: "../icons/14639-NPQ7PS-08.svg",
      title: "فیلمبرداری",
      caption: "فیلمبرداری حرفه‌ای مراسم و پروژه‌های تبلیغاتی.",
    },
    {
      id: 4,
      icon: "../icons/14639-NPQ7PS-09.svg",
      title: "فیلمبرداری",
      caption: "فیلمبرداری حرفه‌ای مراسم و پروژه‌های تبلیغاتی.",
    },
    {
      id: 5,
      icon: "../icons/14639-NPQ7PS-09.svg",
      title: "فیلمبرداری",
      caption: "فیلمبرداری حرفه‌ای مراسم و پروژه‌های تبلیغاتی.",
    },
    {
      id: 6,
      icon: "../icons/14639-NPQ7PS-13.svg",
      title: "فیلمبرداری",
      caption: "فیلمبرداری حرفه‌ای مراسم و پروژه‌های تبلیغاتی.",
    },
  ];

  window.addEventListener("DOMContentLoaded", function () {
    // حذف بخش استاتیک Feature اگر وجود دارد
    const featureStatic = document.querySelector(".Feature");
    if (featureStatic) featureStatic.parentNode.removeChild(featureStatic);
    // رندر داینامیک
    const featuresRow = document.getElementById("features-row");
    if (!featuresRow) return;
    featuresRow.innerHTML = "";
    features.forEach((feature, idx) => {
      const uniqueId = feature.id ? feature.id : idx + 1;
      const col = document.createElement("div");
      col.className =
        "col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center";
      col.innerHTML = `
        <div class="feature-box text-center p-4  rounded h-100" id="feature-${uniqueId}">
          <span style="display:inline-flex;align-items:center;justify-content:center;width:80px;height:80px;border:3px solid orange;border-radius:50%;margin-bottom:18px;background:#fff;">
            <img src="${feature.icon}" alt="icon" style="width:48px;height:48px;object-fit:contain;" />
          </span>
          <h5 class="mb-2" style="font-weight:bold;color:#fff;">${feature.title}</h5>
          <p  style="font-weight:bold;color:#fff;">${feature.caption}</p>
        </div>
      `;
      featuresRow.appendChild(col);
    });
  });
}

// اسلایدر خدمات در صفحه services.html
if (window.location.pathname.includes("services.html")) {
  // اسلایدر داینامیک خدمات
  // داده‌های داینامیک اسلایدر (قابل ویرایش توسط ادمین)
  const sliderData = [
    {
      img: "../images/photo_2025-05-22_15-30-26.jpg",
      title: "عکاسی حرفه‌ای",
      desc: "ارائه خدمات عکاسی با بهترین کیفیت و تجهیزات روز دنیا.",
      btn: "مشاهده بیشتر",
      link: "#",
    },
    {
      img: "../images/photo_2025-05-22_15-30-33.jpg",
      title: "طراحی گرافیک",
      desc: "طراحی لوگو، پوستر و بنرهای تبلیغاتی با خلاقیت بالا.",
      btn: "مشاهده بیشتر",
      link: "#",
    },
    {
      img: "../images/photo_2025-05-24_11-27-22.jpg",
      title: "فیلمبرداری حرفه‌ای",
      desc: "فیلمبرداری حرفه‌ای مراسم و پروژه‌های تبلیغاتی.",
      btn: "مشاهده بیشتر",
      link: "#",
    },
    {
      img: "../images/photo_2025-05-24_11-27-22.jpg",
      title: "فیلمبرداری حرفه‌ای",
      desc: "فیلمبرداری حرفه‌ای مراسم و پروژه‌های تبلیغاتی.",
      btn: "مشاهده بیشتر",
      link: "#",
    },
  ];

  // رندر داینامیک اسلایدر
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const sliderControls = document.querySelector(".slider-controls");
  if (sliderWrapper && sliderControls) {
    sliderWrapper.innerHTML = "";
    sliderControls.innerHTML = "";
    sliderData.forEach((slide, idx) => {
      const slideDiv = document.createElement("div");
      slideDiv.className = "slider-slide" + (idx === 0 ? " active" : "");
      slideDiv.innerHTML = `
        <img src="${slide.img}" alt="${slide.title}" class="slider-img mb-4" />
        <h2 class="slider-title">${slide.title}</h2>
        <p class="slider-desc">${slide.desc}</p>
        <a href="${slide.link}" class="slider-btn">${slide.btn}</a>
      `;
      sliderWrapper.appendChild(slideDiv);
      const dot = document.createElement("span");
      dot.className = "slider-dot" + (idx === 0 ? " active" : "");
      sliderControls.appendChild(dot);
    });
  }

  // اسکریپت جابجایی اسلایدها (همانند قبل)
  const sliderSlides = document.querySelectorAll(
    ".slider-section .slider-slide"
  );
  const sliderDots = document.querySelectorAll(".slider-section .slider-dot");
  let sliderCurrent = 0;
  let sliderInterval = null;

  function showSliderSlide(idx) {
    sliderSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === idx);
    });
    sliderDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === idx);
    });
    sliderCurrent = idx;
  }

  function nextSliderSlide() {
    let next = sliderCurrent + 1;
    if (next >= sliderSlides.length) next = 0;
    showSliderSlide(next);
  }

  function prevSliderSlide() {
    let prev = sliderCurrent - 1;
    if (prev < 0) prev = sliderSlides.length - 1;
    showSliderSlide(prev);
  }

  sliderDots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      showSliderSlide(idx);
      resetSliderInterval();
    });
  });

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
}

const pageNumbers = document.querySelectorAll(
  ".custom-pagination .page-number"
);
const separators = document.querySelectorAll(".custom-pagination .separator");
const carousel = document.querySelector("#heroCarousel");

pageNumbers.forEach((num, idx) => {
  num.addEventListener("click", () => {
    document
      .querySelector(".custom-pagination .page-number.active")
      .classList.remove("active");
    num.classList.add("active");
    separators.forEach((sep) => sep.classList.remove("shrink"));
    if (idx < separators.length) separators[idx].classList.add("shrink");
    if (carousel) {
      const bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel);
      bsCarousel.to(idx);
    }
  });
});

if (carousel) {
  // اطمینان از اینکه همیشه یک اسلاید فعال وجود دارد
  function ensureActiveSlide() {
    const items = carousel.querySelectorAll(".carousel-item");
    let hasActive = false;
    items.forEach((item) => {
      if (item.classList.contains("active")) hasActive = true;
    });
    if (!hasActive && items.length > 0) items[0].classList.add("active");
  }
  carousel.addEventListener("slid.bs.carousel", function (event) {
    ensureActiveSlide();
    const idx = event.to;
    document
      .querySelector(".custom-pagination .page-number.active")
      .classList.remove("active");
    pageNumbers[idx].classList.add("active");
    separators.forEach((sep) => sep.classList.remove("shrink"));
    if (idx < separators.length) separators[idx].classList.add("shrink");

    // کپشن‌ها را مخفی کن
    document.querySelectorAll(".carousel-caption").forEach((caption) => {
      caption.classList.remove("show-caption");
    });
    // کپشن اسلاید فعال را با تاخیر فید کن
    setTimeout(() => {
      const activeSlide = carousel.querySelector(
        ".carousel-item.active .carousel-caption"
      );
      if (activeSlide) activeSlide.classList.add("show-caption");
    }, 200);
  });

  // نمایش کپشن اسلاید اول هنگام لود
  window.addEventListener("DOMContentLoaded", () => {
    ensureActiveSlide();
    const firstCaption = carousel.querySelector(
      ".carousel-item.active .carousel-caption"
    );
    if (firstCaption)
      setTimeout(() => firstCaption.classList.add("show-caption"), 200);
  });
}

// اسلاید با درگ موس
(function enableCarouselDrag() {
  const carousel = document.getElementById("heroCarousel");
  if (!carousel) return;
  let startX = 0;
  let isDown = false;

  carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.clientX;
    carousel.style.cursor = "grabbing";
  });
  document.addEventListener("mouseup", () => {
    isDown = false;
    carousel.style.cursor = "";
  });
  carousel.addEventListener("mouseleave", () => {
    isDown = false;
    carousel.style.cursor = "";
  });
  carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    const diff = e.clientX - startX;
    if (Math.abs(diff) > 60) {
      const bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel);
      if (diff < 0) {
        bsCarousel.next();
      } else {
        bsCarousel.prev();
      }
      isDown = false;
      carousel.style.cursor = "";
    }
  });
})();

// loading
window.addEventListener("load", () => {
  const overlay = document.getElementById("loading-overlay");
  if (overlay) {
    overlay.style.opacity = "0";
    setTimeout(() => (overlay.style.display = "none"), 500);
  }
});

// اسلایدر دسته‌بندی
const categorySlider = document.getElementById("categorySlider");
const toggleCategorySlider = document.getElementById("toggleCategorySlider");
const catSlides = document.querySelectorAll("#categorySlider .category-slide");
let catCurrent = 0;

// --- Lock for preventing fast toggles ---
let sliderLock = false;

function showCatSlide(idx) {
  catSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === idx);
  });
}
if (toggleCategorySlider && categorySlider) {
  toggleCategorySlider.addEventListener("click", () => {
    if (sliderLock) return;
    sliderLock = true;
    // اگر اسلایدر درباره من باز است، آن را ببند
    if (aboutMeSlider.classList.contains("open")) {
      aboutMeSlider.classList.remove("open");
      setTimeout(() => {
        aboutMeSlider.style.display = "none";
        aboutMeBtn.textContent = "درباره من";
        aboutMeBtn.classList.remove("orange-text");
      }, 1000);
    }
    // باز و بسته کردن اسلایدر کتگوری
    if (categorySlider.classList.contains("open")) {
      categorySlider.classList.remove("open");
      setTimeout(() => {
        categorySlider.style.display = "none";
        toggleCategorySlider.textContent = "دسته بندی ها";
        toggleCategorySlider.classList.remove("orange-text");
        sliderLock = false;
      }, 1000);
    } else {
      // ابتدا مطمئن شویم اسلایدر دیگر بسته است
      categorySlider.style.display = "flex";
      setTimeout(() => {
        categorySlider.classList.add("open");
        toggleCategorySlider.textContent = "بستن";
        toggleCategorySlider.classList.add("orange-text");
        sliderLock = false;
      }, 10);
    }
  });
}

// اسلایدر درباره من
const aboutMeSlider = document.getElementById("aboutMeSlider");
const aboutMeBtn = document.querySelector(".left-about-me");
const aboutMeSlides = document.querySelectorAll(
  "#aboutMeSlider .category-slide"
);
let aboutMeCurrent = 0;

function showAboutMeSlide(idx) {
  aboutMeSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === idx);
  });
}
if (aboutMeBtn && aboutMeSlider) {
  aboutMeBtn.addEventListener("click", () => {
    if (sliderLock) return;
    sliderLock = true;
    // اگر اسلایدر کتگوری باز است، آن را ببند
    if (categorySlider.classList.contains("open")) {
      categorySlider.classList.remove("open");
      setTimeout(() => {
        categorySlider.style.display = "none";
        toggleCategorySlider.textContent = "دسته بندی ها";
        toggleCategorySlider.classList.remove("orange-text");
      }, 1000);
    }
    // باز و بسته کردن اسلایدر درباره من
    if (aboutMeSlider.classList.contains("open")) {
      aboutMeSlider.classList.remove("open");
      setTimeout(() => {
        aboutMeSlider.style.display = "none";
        aboutMeBtn.textContent = "درباره من";
        aboutMeBtn.classList.remove("orange-text");
        sliderLock = false;
      }, 1000);
    } else {
      aboutMeSlider.style.display = "flex";
      setTimeout(() => {
        aboutMeSlider.classList.add("open");
        aboutMeBtn.textContent = "بستن";
        aboutMeBtn.classList.add("orange-text");
        sliderLock = false;
      }, 10);
    }
  });
}
showCatSlide(catCurrent);
showAboutMeSlide(aboutMeCurrent);

// --- Vertical Pagination for Carousel ---
const verticalPageNumbers = document.querySelectorAll(
  ".vertical-pagination .page-number"
);
const verticalSeparators = document.querySelectorAll(
  ".vertical-pagination .separator"
);
verticalPageNumbers.forEach((num, idx) => {
  num.addEventListener("click", () => {
    document
      .querySelector(".vertical-pagination .page-number.active")
      .classList.remove("active");
    num.classList.add("active");
    verticalSeparators.forEach((sep) => sep.classList.remove("shrink"));
    if (idx < verticalSeparators.length)
      verticalSeparators[idx].classList.add("shrink");
    if (carousel) {
      const bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel);
      bsCarousel.to(idx);
    }
  });
});
if (carousel) {
  carousel.addEventListener("slid.bs.carousel", function (event) {
    const idx = event.to;
    document
      .querySelector(".vertical-pagination .page-number.active")
      .classList.remove("active");
    verticalPageNumbers[idx].classList.add("active");
    verticalSeparators.forEach((sep) => sep.classList.remove("shrink"));
    if (idx < verticalSeparators.length)
      verticalSeparators[idx].classList.add("shrink");
  });
}

// --- Animation for comment slider ---
const commentsSlider = document.getElementById("comments-slider");
let commentAutoInterval = null;

function animateComment(direction = 1) {
  if (!commentsSlider) return;
  commentsSlider.style.transition = "none";
  commentsSlider.style.transform = `translateX(${direction * 100}%)`;
  setTimeout(() => {
    commentsSlider.style.transition =
      "transform 0.7s cubic-bezier(0.77,0,0.18,1)";
    commentsSlider.style.transform = "translateX(0)";
  }, 20);
}

function renderComment(index, direction = 1) {
  if (!commentsSlider) return;
  const comment = commentsData[index];
  commentsSlider.innerHTML = `
    <div class="comment-right col-12 col-md-6">
      <img src="${comment.img}" />
    </div>
    <div class="comment-left col-12 col-md-6">
      <p>${comment.text}</p>
      <h2>${comment.name}</h2>
      <span>${comment.title}</span>
    </div>
  `;
  animateComment(direction);
}

function nextComment() {
  const prev = currentComment;
  currentComment = (currentComment + 1) % commentsData.length;
  renderComment(currentComment, 1);
}
function prevComment() {
  const prev = currentComment;
  currentComment =
    (currentComment - 1 + commentsData.length) % commentsData.length;
  renderComment(currentComment, -1);
}

const prevCommentBtn = document.getElementById("prev-comment");
const nextCommentBtn = document.getElementById("next-comment");
if (prevCommentBtn && nextCommentBtn) {
  prevCommentBtn.addEventListener("click", function () {
    prevComment();
    resetCommentInterval();
  });
  nextCommentBtn.addEventListener("click", function () {
    nextComment();
    resetCommentInterval();
  });
}

function startCommentInterval() {
  commentAutoInterval = setInterval(nextComment, 5000);
}
function resetCommentInterval() {
  if (commentAutoInterval) clearInterval(commentAutoInterval);
  startCommentInterval();
}

document.addEventListener("DOMContentLoaded", function () {
  renderComment(currentComment, 1);
  startCommentInterval();
});

// --- اسلایدر داینامیک دوره‌ها ---
if (window.location.pathname.includes("services.html")) {
  document.addEventListener("DOMContentLoaded", setupCoursesSlider);
}
const coursesData = [
  {
    title: "دوره عکاسی پرتره",
    price: "30تومان",
    image: "../images/photo_2025-05-22_15-30-26.jpg",
    features: [
      "آموزش نورپردازی حرفه‌ای",
      "آموزش ژست‌دهی",
      "ویرایش عکس پرتره",
      "کار با مدل",
      "خلاقیت در عکاسی پرتره",
    ],
  },
  {
    title: "دوره عکاسی طبیعت",
    price: "40تومان",
    image: "../images/photo_2025-05-22_15-30-33.jpg",
    features: [
      "آموزش عکاسی منظره",
      "تنظیمات دوربین",
      "ادیت عکس طبیعت",
      "شناخت نور طبیعی",
      "ترکیب‌بندی پیشرفته",
    ],
  },
  {
    title: "دوره فیلمبرداری",
    price: "50تومان",
    image: "../images/photo_2025-05-24_11-27-22.jpg",
    features: [
      "آموزش کار با دوربین فیلمبرداری",
      "تدوین و ادیت ویدیو",
      "نورپردازی ویدیو",
      "کارگردانی صحنه",
      "خلاقیت در فیلمبرداری",
    ],
  },
  {
    title: "دوره تدوین حرفه‌ای",
    price: "60تومان",
    image: "../images/photo_2025-05-24_11-27-22.jpg",
    features: [
      "آموزش نرم‌افزار پریمیر",
      "تکنیک‌های تدوین سینمایی",
      "افکت‌گذاری حرفه‌ای",
      "خروجی گرفتن با کیفیت",
      "ساخت تیزر تبلیغاتی",
    ],
  },
  {
    title: "دوره نورپردازی استودیو",
    price: "70تومان",
    image: "../images/photo_2025-05-22_15-30-26.jpg",
    features: [
      "شناخت تجهیزات نور",
      "نورپردازی پرتره",
      "نورپردازی محصولات",
      "ترکیب نورهای مختلف",
      "رفع مشکلات نور",
    ],
  },
  {
    title: "دوره نورپردازی استودیو",
    price: "70تومان",
    image: "../images/photo_2025-05-22_15-30-26.jpg",
    features: [
      "شناخت تجهیزات نور",
      "نورپردازی پرتره",
      "نورپردازی محصولات",
      "ترکیب نورهای مختلف",
      "رفع مشکلات نور",
    ],
  },
];

function setupCoursesSlider() {
  const slider = document.getElementById("courses-slider");
  if (!slider) return;

  // استایل اسکرول افقی و مخفی کردن اسکرول بار (در صورت نیاز)
  slider.style.display = "flex";
  slider.style.overflowX = "auto";
  slider.style.scrollSnapType = "x mandatory";
  slider.style.gap = "24px";
  slider.style.paddingBottom = "8px";

  function renderCourses() {
    slider.innerHTML = "";
    coursesData.forEach((course) => {
      const courseDiv = document.createElement("div");
      courseDiv.className =
        "course col-12 col-md-4 text-center flex-shrink-0 course-slide";
      courseDiv.style.scrollSnapAlign = "start";
      courseDiv.style.transition = "transform 0.6s cubic-bezier(0.77,0,0.18,1)";
      courseDiv.innerHTML = `
        <div class="course-header">
          <h4>${course.title}</h4>
          <h3>${course.price}</h3>
          <img src="${course.image}" alt="${course.title}" />
        </div>
        <div class="course-caption">
          <h4 class="mt-4 mb-4">سرفصل های دوره:</h4>
          ${course.features.map((f) => `<p class='mb-4'>${f}</p>`).join("")}
          <button class="btn">خرید</button>
        </div>
      `;
      slider.appendChild(courseDiv);
    });
  }

  renderCourses();

  // دکمه‌های اسکرول افقی
  const nextBtn = document.getElementById("courses-next");
  const prevBtn = document.getElementById("courses-prev");
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      slider.scrollBy({ left: 300, behavior: "smooth" });
    });
    prevBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -300, behavior: "smooth" });
    });
  }
}

// --- Dynamic Hero Slider for photographyPortfolio.html ---
// داینامیک‌سازی بخش کامنت‌ها با فاصله بین هر کامنت
if (window.location.pathname.includes("services.html")) {
  const comments = [
    {
      name: "نام مشتری ۱",
      image: "../images/photo_2025-05-22_15-30-33.jpg",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      name: "نام مشتری ۲",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
      comment:
        "این یک متن نمونه برای نمایش نظر مشتری است. کیفیت خدمات عالی بود!",
    },
    {
      name: "نام مشتری ۳",
      image: "../images/photo_2025-05-24_11-27-22.jpg",
      comment: "تجربه بسیار خوبی داشتم و حتماً دوباره همکاری خواهم کرد.",
    },
    {
      name: "نام مشتری ۳",
      image: "../images/photo_2025-05-24_11-27-22.jpg",
      comment: "تجربه بسیار خوبی داشتم و حتماً دوباره همکاری خواهم کرد.",
    },
    {
      name: "نام مشتری ۳",
      image: "../images/photo_2025-05-24_11-27-22.jpg",
      comment: "تجربه بسیار خوبی داشتم و حتماً دوباره همکاری خواهم کرد.",
    },
    {
      name: "نام مشتری ۳",
      image: "../images/photo_2025-05-24_11-27-22.jpg",
      comment: "تجربه بسیار خوبی داشتم و حتماً دوباره همکاری خواهم کرد.",
    },
    {
      name: "نام مشتری ۳",
      image: "../images/photo_2025-05-24_11-27-22.jpg",
      comment: "تجربه بسیار خوبی داشتم و حتماً دوباره همکاری خواهم کرد.",
    },
    {
      name: "نام مشتری ۳",
      image: "../images/photo_2025-05-24_11-27-22.jpg",
      comment: "تجربه بسیار خوبی داشتم و حتماً دوباره همکاری خواهم کرد.",
    },
    {
      name: "نام مشتری ۳",
      image: "../images/photo_2025-05-24_11-27-22.jpg",
      comment: "تجربه بسیار خوبی داشتم و حتماً دوباره همکاری خواهم کرد.",
    },
    {
      name: "نام مشتری ۳",
      image: "../images/photo_2025-05-24_11-27-22.jpg",
      comment: "تجربه بسیار خوبی داشتم و حتماً دوباره همکاری خواهم کرد.",
    },
    {
      name: "نام مشتری ۳",
      image: "../images/photo_2025-05-24_11-27-22.jpg",
      comment: "تجربه بسیار خوبی داشتم و حتماً دوباره همکاری خواهم کرد.",
    },
    {
      name: "نام مشتری ۳",
      image: "../images/photo_2025-05-24_11-27-22.jpg",
      comment: "تجربه بسیار خوبی داشتم و حتماً دوباره همکاری خواهم کرد.",
    },
  ];

  // تبدیل آرایه comments به ساختار مورد نیاز اسلایدر
  window.commentsData = comments.map((c) => ({
    name: c.name,
    img: c.image,
    text: c.comment,
    title: "مشتری هنرسازه",
  }));
  window.currentComment = 0;

  // رندر کامنت‌ها با پیجینیشن (هر صفحه ۳ کامنت)
  function renderCommentsPage(page = 1, perPage = 3) {
    const commentSection = document.querySelector(".comment-setion");
    if (!commentSection) return;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const pageComments = window.commentsData.slice(start, end);
    commentSection.innerHTML = pageComments
      .map(
        (comment) => `
        <div class="col-12 mb-4">
          <div class="comment-box d-flex flex-column flex-md-row align-items-center p-4 " style="background:#222; color:#fff;">
            <div class="comment-img" style="min-width:120px;">
              <img src="${comment.img}" alt="${comment.name}" style="width:100px;height:100px;object-fit:cover;border:3px solid orange;" />
            </div>
            <div class="comment-content text-center text-md-end">
            <h5 class="mb-1" style="font-weight:bold; border-bottom:1px solid orange; padding-bottom:1rem;">${comment.name}</h5>
              <p class="mb-2">${comment.text}</p>
              <span style="color:orange;">${comment.title}</span>
            </div>
          </div>
        </div>
      `
      )
      .join("");
  }

  function renderCommentsPagination(perPage = 3) {
    const total = window.commentsData.length;
    const pageCount = Math.ceil(total / perPage);
    let paginationHtml = "";
    if (pageCount > 1) {
      paginationHtml = '<div class="d-flex justify-content-center mt-3">';
      for (let i = 1; i <= pageCount; i++) {
        paginationHtml += `<button class="btn btn-sm mx-1 comment-page-btn text-white" data-page="${i}">${i}</button>`;
      }
      paginationHtml += "</div>";
    }
    let paginationContainer = document.getElementById("comments-pagination");
    if (!paginationContainer) {
      paginationContainer = document.createElement("div");
      paginationContainer.id = "comments-pagination";
      const commentsDiv = document.querySelector(".comments");
      if (commentsDiv) commentsDiv.appendChild(paginationContainer);
    }
    paginationContainer.innerHTML = paginationHtml;
  }

  document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 1;
    const perPage = 3;
    renderCommentsPage(currentPage, perPage);
    renderCommentsPagination(perPage);
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("comment-page-btn")) {
        currentPage = parseInt(e.target.getAttribute("data-page"));
        renderCommentsPage(currentPage, perPage);
        // Highlight active button
        document
          .querySelectorAll(".comment-page-btn")
          .forEach((btn) => btn.classList.remove("btn-warning"));
        e.target.classList.add("btn-warning");
      }
    });
    // Highlight first page button on load
    setTimeout(() => {
      const firstBtn = document.querySelector(".comment-page-btn");
      if (firstBtn) firstBtn.classList.add("btn-warning");
    }, 10);
  });
}

// شمارنده سبد خرید و پیام خالی بودن برای همه صفحات
function getBasketItemCount() {
  let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  return cartItems.reduce((sum, item) => sum + (item.count || 1), 0);
}

function updateBasketCount() {
  const basketCount = document.getElementById("basketCount");
  const basketEmptyMsg = document.getElementById("basketEmptyMsg");
  const count = getBasketItemCount();
  if (basketCount) {
    basketCount.textContent = count;
    basketCount.style.display = count > 0 ? "flex" : "none";
    basketCount.style.background = "#222";
    basketCount.style.color = "#fff";
    basketCount.style.fontSize = "0.85em";
    basketCount.style.minWidth = "22px";
    basketCount.style.height = "22px";
    basketCount.style.lineHeight = "22px";
    basketCount.style.textAlign = "center";
    basketCount.style.borderRadius = "50%";
    basketCount.style.position = "absolute";
    basketCount.style.top = "-8px";
    basketCount.style.left = "-8px";
    basketCount.style.padding = "0";
    basketCount.style.boxShadow = "0 0 4px #0008";
    basketCount.style.zIndex = "10";
    basketCount.style.transition = "all 0.2s";
    basketCount.style.justifyContent = "center";
    basketCount.style.alignItems = "center";
    basketCount.style.alignSelf = "flex-start";
  }
  if (basketEmptyMsg) {
    basketEmptyMsg.style.display = count === 0 ? "block" : "none";
  }
}

window.addEventListener("DOMContentLoaded", updateBasketCount);
window.updateBasketCount = updateBasketCount;

// نمایش پیام خالی بودن سبد هنگام هاور
const basketIcon = document.getElementById("basketIcon");
if (basketIcon) {
  basketIcon.addEventListener("mouseenter", function () {
    if (getBasketItemCount() === 0) {
      const basketEmptyMsg = document.getElementById("basketEmptyMsg");
      if (basketEmptyMsg) basketEmptyMsg.style.display = "block";
    }
  });
  basketIcon.addEventListener("mouseleave", function () {
    const basketEmptyMsg = document.getElementById("basketEmptyMsg");
    if (basketEmptyMsg) basketEmptyMsg.style.display = "none";
  });
}
