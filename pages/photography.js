// داینامیک ساختن نمونه کارها
const sampleImages = [
  {
    src: "../images/photo_2025-05-22_15-30-26.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-22_15-30-33.jpg",
    category: "سبک زندگی",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "طبیعت",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-22_15-30-26.jpg",
    category: "فشن و مد",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-22_15-30-33.jpg",
    category: "پرتره",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    src: "../images/nature-3082832_1280.jpg",
    category: "استودیو",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
];

const sampleItemsContainer = document.querySelector(".sampel-items");
const filterNav = document.querySelectorAll(".sampel-navbar ul li");

// --- Pagination ---
const ITEMS_PER_ROW = 4;
const ROWS_PER_PAGE = 3;
const ITEMS_PER_PAGE = ITEMS_PER_ROW * ROWS_PER_PAGE;
let currentPage = 1;

function toPersianNumber(num) {
  return num
    .toString()
    .padStart(2, "0")
    .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  let pagination = document.querySelector(".sample-pagination");
  if (!pagination) {
    pagination = document.createElement("div");
    pagination.className =
      "sample-pagination d-flex justify-content-center mt-4";
    const sampelsSection = document.querySelector(".sampels");
    sampelsSection &&
      sampelsSection.parentElement.insertBefore(
        pagination,
        sampelsSection.nextSibling
      );
  }
  // حذف جداکننده‌های قبلی برای انیمیشن صحیح
  pagination.innerHTML = "";
  if (totalPages <= 1) {
    pagination.style.display = "none";
    return;
  }
  pagination.style.display = "flex";
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.className = "page-btn" + (i === currentPage ? " active" : "");
    btn.textContent = toPersianNumber(i);
    btn.onclick = () => {
      currentPage = i;
      renderSamples(lastFilter);
    };
    pagination.appendChild(btn);
    if (i < totalPages) {
      const sep = document.createElement("span");
      sep.className = "page-separator";
      sep.style.width =
        i === currentPage || i + 1 === currentPage ? "24px" : "10px";
      sep.style.background =
        i === currentPage || i + 1 === currentPage ? "#fff" : "orange";
      pagination.appendChild(sep);
      // انیمیشن باز و بسته شدن
      setTimeout(() => {
        sep.style.width =
          i === currentPage || i + 1 === currentPage ? "10px" : "24px";
        sep.style.background =
          i === currentPage || i + 1 === currentPage ? "orange" : "#fff";
      }, 10);
    }
  }
}

let lastFilter = "همه";
function renderSamples(filter) {
  lastFilter = filter;
  sampleItemsContainer.innerHTML = "";
  let filtered =
    filter === "همه"
      ? sampleImages
      : sampleImages.filter((img) => img.category === filter);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paged = filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  paged.forEach((item, idx) => {
    const wrapper = document.createElement("div");
    wrapper.className = "sample-item-wrapper fade-in";
    wrapper.style.animationDelay = idx * 80 + "ms";
    wrapper.innerHTML = `
      <img src="${item.src}" alt="نمونه کار ${
      startIdx + idx + 1
    }" class="sample-img" />
      <div class="sample-hover-text">مشاهده نمونه کار ${
        startIdx + idx + 1
      }</div>
    `;
    sampleItemsContainer.appendChild(wrapper);
  });
  addSampleClickHandlers();
  renderPagination(filtered.length);
}

// --- Modal for image preview ---
function createImageModal(images, startIdx) {
  // Remove old modal if exists
  const oldModal = document.getElementById("sample-image-modal");
  if (oldModal) oldModal.remove();

  let currentIdx = startIdx;
  const modal = document.createElement("div");
  modal.id = "sample-image-modal";

  // Helper functions for like system
  function getLikes(src) {
    const likes = JSON.parse(localStorage.getItem("sampleLikes") || "{}");
    return likes[src] || 0;
  }
  function setLikes(src, count) {
    const likes = JSON.parse(localStorage.getItem("sampleLikes") || "{}");
    likes[src] = count;
    localStorage.setItem("sampleLikes", JSON.stringify(likes));
  }
  function hasLiked(src) {
    const liked = JSON.parse(localStorage.getItem("sampleLiked") || "{}");
    return !!liked[src];
  }
  function setLiked(src) {
    const liked = JSON.parse(localStorage.getItem("sampleLiked") || "{}");
    liked[src] = true;
    localStorage.setItem("sampleLiked", JSON.stringify(liked));
  }
  function setUnliked(src) {
    const liked = JSON.parse(localStorage.getItem("sampleLiked") || "{}");
    delete liked[src];
    localStorage.setItem("sampleLiked", JSON.stringify(liked));
  }

  function renderLikeSection(src) {
    const likeCount = getLikes(src);
    const liked = hasLiked(src);
    return `
      <button class="like-btn${liked ? " liked" : ""}" title="لایک">
        <span class="like-count">${toPersianNumber(likeCount)}</span>
        <svg class="like-heart" viewBox="0 0 24 24" fill="${
          liked ? "orange" : "none"
        }" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z"/></svg>
        <span style="font-size:1em; font-weight:bold; color:orange;">لایک</span>
      </button>
    `;
  }

  modal.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="modal-content">
      <button class="modal-close">&times;</button>
      <button class="modal-arrow modal-arrow-right">&#8592;</button>
      <img src="${images[currentIdx].src}" class="modal-img" />
      <button class="modal-arrow modal-arrow-left">&#8594;</button>
      <div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin: 10px 0; font-weight: bold; font-size: 1.1em;">
        <div class="modal-counter">${toPersianNumber(
          currentIdx + 1
        )} / ${toPersianNumber(images.length)}</div>
        <a class="modal-link" href="#" id="viewSampleBtn" style="white-space: nowrap; font-weight: normal; font-size: 0.95em;">مشاهده نمونه کار</a>
        <div class="like-section">${renderLikeSection(
          images[currentIdx].src
        )}</div>
      </div>
      <div class="modal-desc mt-3" style="text-align:right; color:#444; font-size:1em;">${
        images[currentIdx].desc || ""
      }</div>
    </div>
  `;
  document.body.appendChild(modal);

  // Like button event
  function updateLikeBtn() {
    const likeSection = modal.querySelector(".like-section");
    likeSection.innerHTML = renderLikeSection(images[currentIdx].src);
    const likeBtn = likeSection.querySelector(".like-btn");
    likeBtn.onclick = function () {
      const src = images[currentIdx].src;
      let count = getLikes(src);
      if (hasLiked(src)) {
        // Unlike
        setLikes(src, Math.max(0, count - 1));
        setUnliked(src);
      } else {
        // Like
        setLikes(src, count + 1);
        setLiked(src);
      }
      updateLikeBtn();
    };
  }
  updateLikeBtn();

  // Close modal
  modal.querySelector(".modal-close").onclick = () => modal.remove();
  modal.querySelector(".modal-backdrop").onclick = () => modal.remove();

  // Helper to update modal content
  function updateModalContent() {
    modal.querySelector(".modal-img").src = images[currentIdx].src;
    modal.querySelector(".modal-link").href = `/pages/sample${
      currentIdx + 1
    }.html`;
    modal.querySelector(".modal-counter").textContent = `${toPersianNumber(
      currentIdx + 1
    )} / ${toPersianNumber(images.length)}`;
    updateLikeBtn();
  }

  // Next/Prev
  modal.querySelector(".modal-arrow-right").onclick = (e) => {
    e.stopPropagation();
    currentIdx = (currentIdx - 1 + images.length) % images.length;
    updateModalContent();
  };
  modal.querySelector(".modal-arrow-left").onclick = (e) => {
    e.stopPropagation();
    currentIdx = (currentIdx + 1) % images.length;
    updateModalContent();
  };

  // انتقال اطلاعات به صفحه photographySampel.html
  modal.querySelector("#viewSampleBtn").onclick = (e) => {
    e.preventDefault();
    const data = {
      src: images[currentIdx].src,
      desc: images[currentIdx].desc,
      index: currentIdx + 1,
      date: new Date().toLocaleDateString("fa-IR"),
    };
    localStorage.setItem("selectedPhotoSample", JSON.stringify(data));
    window.location.href = "photographySampel.html";
  };
}

// اضافه کردن رویداد کلیک به هر عکس
function addSampleClickHandlers() {
  // فقط عکس‌های قابل مشاهده در صفحه فعلی را انتخاب کن
  const visibleImgs = document.querySelectorAll(
    ".sample-item-wrapper .sample-img"
  );
  visibleImgs.forEach((img, idx) => {
    img.onclick = () => {
      // فقط آیتم‌های صفحه فعلی را به مدال بده
      const filtered =
        lastFilter === "همه"
          ? sampleImages
          : sampleImages.filter((img) => img.category === lastFilter);
      const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
      const paged = filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE);
      createImageModal(paged, idx);
    };
  });
}

filterNav.forEach((li) => {
  li.addEventListener("click", function () {
    filterNav.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
    currentPage = 1;
    renderSamples(this.textContent.trim());
  });
});

// نمایش اولیه همه نمونه‌ها
renderSamples("همه");
