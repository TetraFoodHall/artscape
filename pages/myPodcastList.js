// --- پادکست های من: دیتا و رندر داینامیک با پیجینیشن ---
const podcastItems = [
  {
    img: "../images/photo_2025-05-24_11-27-22.jpg",
    link: "podcast1.html",
    title: "پادکست ۱",
    date: "۱۴۰۴/۰۳/۰۱",
    category: "استودیو",
  },
  {
    img: "../images/photo_2025-05-22_15-30-26.jpg",
    link: "podcast2.html",
    title: "پادکست ۲",
    date: "۱۴۰۴/۰۳/۰۲",
    category: "سبک زندگی",
  },
  {
    img: "../images/photo_2025-05-22_15-30-33.jpg",
    link: "podcast3.html",
    title: "پادکست ۳",
    date: "۱۴۰۴/۰۳/۰۳",
    category: "طبیعت",
  },
  {
    img: "../images/nature-3082832_1280.jpg",
    link: "podcast4.html",
    title: "پادکست ۴",
    date: "۱۴۰۴/۰۳/۰۴",
    category: "فشن و مد",
  },
  {
    img: "../images/photo_2025-05-24_11-27-22.jpg",
    link: "podcast5.html",
    title: "پادکست ۵",
    date: "۱۴۰۴/۰۳/۰۵",
    category: "موزیک",
  },
  {
    img: "../images/photo_2025-05-22_15-30-26.jpg",
    link: "podcast6.html",
    title: "پادکست ۶",
    date: "۱۴۰۴/۰۳/۰۶",
    category: "پرتره",
  },
  // ... سایر پادکست‌ها با دسته‌بندی‌های مختلف یا تکراری ...
];
const podcastPerPage = 12;
let currentPodcastPage = 1;
let currentCategory = null; // دسته‌بندی فعال
let currentSearch = ""; // مقدار سرچ فعال

// دسته‌بندی‌های موجود (مطابق لیست سمت راست)
const podcastCategories = [
  "استودیو",
  "سبک زندگی",
  "طبیعت",
  "فشن و مد",
  "موزیک",
  "پرتره",
];

function normalizeDigits(str) {
  // تبدیل اعداد فارسی به انگلیسی و بالعکس
  if (!str) return "";
  return str
    .replace(/[۰-۹]/g, (d) => "0123456789"["۰۱۲۳۴۵۶۷۸۹".indexOf(d)])
    .replace(/[0-9]/g, (d) => d); // فقط اعداد فارسی را به انگلیسی برگردان
}

function normalizeText(str) {
  // تبدیل اعداد فارسی به انگلیسی و حذف فاصله‌ها
  if (!str) return "";
  return str
    .replace(/[۰-۹]/g, (d) => "0123456789"["۰۱۲۳۴۵۶۷۸۹".indexOf(d)])
    .replace(/[0-9]/g, (d) => d)
    .replace(/\s+/g, ""); // حذف همه فاصله‌ها
}

function getFilteredPodcasts() {
  let filtered = podcastItems;
  if (currentCategory && currentCategory !== "همه") {
    filtered = filtered.filter((item) => {
      return (
        (item.category && item.category === currentCategory) ||
        (item.title && item.title.includes(currentCategory))
      );
    });
  }
  if (currentSearch && currentSearch.trim() !== "") {
    const search = normalizeText(currentSearch.trim());
    filtered = filtered.filter((item) => {
      const titleNorm = normalizeText(item.title);
      return titleNorm.includes(search);
    });
  }
  return filtered;
}

function renderPodcastPage(page = 1) {
  const podcastRow = document.querySelector(".podcast-list .row");
  if (!podcastRow) return;
  podcastRow.innerHTML = "";
  const filtered = getFilteredPodcasts();
  const startIdx = (page - 1) * podcastPerPage;
  const endIdx = startIdx + podcastPerPage;
  const pageItems = filtered.slice(startIdx, endIdx);
  if (filtered.length === 0) {
    const notFound = document.createElement("div");
    notFound.className = "col-12 text-center text-warning py-5";
    notFound.textContent = "پادکستی پیدا نشد";
    podcastRow.appendChild(notFound);
    return;
  }
  pageItems.forEach((item, idx) => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 mb-4";
    col.style.animationDelay = idx * 0.12 + "s";
    col.innerHTML = `
      <div class="podcast-card bg-dark rounded shadow h-100 d-flex flex-column podcast-fade">
        <a href="${item.link}" class="d-block podcast-img-link">
          <img src="${item.img}" alt="${item.title}" class="img-fluid rounded-top podcast-img podcast-img-fixed" />
        </a>
        <div class="p-3 flex-grow-1 d-flex flex-column justify-content-end">
          <h5 class="podcast-title">${toPersianDigits(item.title)}</h5>
          <p class="podcast-desc mb-0">${
            item.date
              ? toPersianDigits(item.date)
              : toPersianDigits("۱۴۰۴/۰۳/۱۰")
          }</p>
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
  const filtered = getFilteredPodcasts();
  const totalPages = Math.ceil(filtered.length / podcastPerPage);
  if (totalPages <= 1) return;
  pagination = document.createElement("div");
  pagination.className =
    "podcast-pagination d-flex justify-content-center mt-3 gap-2";
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.className =
      "btn btn-sm rounded-circle shadow-none border-0" +
      (i === currentPodcastPage
        ? " bg-primary text-white"
        : " bg-light text-dark");
    btn.style.width = "36px";
    btn.style.height = "36px";
    btn.style.fontWeight = "bold";
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
  // اضافه کردن رویداد کلیک به دسته‌بندی‌ها
  const catLinks = document.querySelectorAll(
    ".category-filter .list-group-item a"
  );
  catLinks.forEach((a) => {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      catLinks.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
      // مقدار دسته‌بندی را ست کن
      const cat = this.textContent.trim();
      currentCategory = cat;
      currentPodcastPage = 1;
      renderPodcastPage(currentPodcastPage);
      renderPodcastPagination();
    });
  });
  // رویداد سرچ
  const searchInput = document.querySelector(
    ".category-filter .form-control"
  );
  const searchBtn = document.querySelector(
    ".category-filter .btn-outline-secondary"
  );
  function doSearch() {
    currentSearch = searchInput.value;
    currentPodcastPage = 1;
    renderPodcastPage(currentPodcastPage);
    renderPodcastPagination();
  }
  if (searchInput && searchBtn) {
    searchBtn.addEventListener("click", doSearch);
    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") doSearch();
    });
  }
  renderPodcastPage(currentPodcastPage);
  renderPodcastPagination();
});

// تبدیل اعداد انگلیسی به فارسی
function toPersianDigits(str) {
  return String(str).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}
