//اطلاعات تست
const validUsers = [
  { id: "user1", password: "pass123" },
  { id: "artscape", password: "gallery2025" },
  { id: "test", password: "test" },
];

function checkCredentials(id, password) {
  return validUsers.some(
    (user) => user.id === id && user.password === password
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const lockOverlay = document.getElementById("lock-overlay");
  const lockForm = document.getElementById("lock-form");
  const lockError = document.getElementById("lock-error");

  // اگر قبلا وارد شده باشد، فرم نمایش داده نشود (اول localStorage بعد sessionStorage)
  if (
    localStorage.getItem("galleryRemembered") === "true" ||
    sessionStorage.getItem("galleryUnlocked") === "true"
  ) {
    lockOverlay.style.display = "none";
    const savedUserId =
      localStorage.getItem("galleryUserId") ||
      sessionStorage.getItem("galleryUserId");
    if (savedUserId) {
      renderUserItems(savedUserId);
    }
    return;
  }

  lockForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const userId = document.getElementById("userId").value.trim();
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("rememberMe").checked;
    if (checkCredentials(userId, password)) {
      if (rememberMe) {
        localStorage.setItem("galleryRemembered", "true");
        localStorage.setItem("galleryUserId", userId); // ذخیره آیدی کاربر
      } else {
        sessionStorage.setItem("galleryUnlocked", "true");
        sessionStorage.setItem("galleryUserId", userId); // ذخیره آیدی کاربر
      }
      lockOverlay.style.display = "none";
      renderUserItems(userId);
      // showLogoutButton(); // حذف نمایش دکمه خروج
    } else {
      lockError.textContent = "آیدی یا رمز عبور اشتباه است.";
      lockError.style.display = "block";
      lockForm.classList.add("shake");
      setTimeout(() => lockForm.classList.remove("shake"), 500);
    }
  });
});

const userItems = {
  user1: [
    {
      src: "../images/photo_2025-05-22_15-30-26.jpg",
      title: "اثر اختصاصی ۱",
      desc: "توضیح کوتاه برای اثر اختصاصی ۱",
      category: "استودیو",
      type: "image",
    },
    {
      src: "../images/photo_2025-05-22_15-30-33.jpg",
      title: "اثر اختصاصی ۲",
      desc: "توضیح کوتاه برای اثر اختصاصی ۲",
      category: "سبک زندگی",
      type: "image",
    },
    {
      src: "../images/photo_2025-05-22_15-30-33.jpg",
      title: "اثر اختصاصی ۲",
      desc: "توضیح کوتاه برای اثر اختصاصی ۲",
      category: "سبک زندگی",
      type: "image",
    },
  ],
  artscape: [
    {
      src: "../images/photo_2025-05-24_11-27-22.jpg",
      title: "نمونه آرت اسکیپ",
      desc: "اثر ویژه آرت اسکیپ",
      category: "طبیعت",
      type: "image",
    },
    {
      src: "../video/Animation - 1749370533746.webm",
      title: "ویدیو نمونه",
      desc: "ویدیو اختصاصی",
      category: "ویدیو",
      type: "video",
      poster: "../images/photo_2025-05-24_11-27-22.jpg",
    },
  ],
  test: [
    {
      src: "../images/nature-3082832_1280.jpg",
      title: "طبیعت",
      desc: "عکس طبیعت برای تست",
      category: "طبیعت",
      type: "image",
    },
  ],
};

// متغیرهای وضعیت
let currentCategory = "همه";
let currentPage = 1;
const imagesPerRow = 3;
const rowsPerPage = 3;
const imagesPerPage = imagesPerRow * rowsPerPage;
let currentUserId = null;

function renderUserItems(userId) {
  currentUserId = userId;
  const row = document.querySelector(".pictures .row");
  if (!row) return;
  row.innerHTML = "";
  const items = userItems[userId] || [];
  // دسته‌بندی
  let filtered =
    currentCategory === "همه"
      ? items
      : items.filter((img) => img.category === currentCategory);
  const totalPages = Math.ceil(filtered.length / imagesPerPage);
  if (currentPage > totalPages) currentPage = 1;
  const start = (currentPage - 1) * imagesPerPage;
  const end = start + imagesPerPage;
  const pageImages = filtered.slice(start, end);
  if (pageImages.length === 0) {
    row.innerHTML =
      '<div class="col-12 text-center" style="min-height:220px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;">آیتمی برای شما ثبت نشده است.</div>';
    document.getElementById("gallery-pagination").style.display = "none";
    // جلوگیری از اورفلو
    row.parentElement.style.overflow = "hidden";
    row.parentElement.style.minHeight = "220px";
    return;
  } else {
    // بازگرداندن حالت عادی در صورت وجود آیتم
    row.parentElement.style.overflow = "";
    row.parentElement.style.minHeight = "";
  }
  pageImages.forEach((img, idx) => {
    const col = document.createElement("div");
    col.className = "picture col-12 col-md-4 mb-4";
    let mediaHtml = "";
    if (img.type === "video") {
      const poster = img.poster ? `poster="${img.poster}"` : "";
      mediaHtml = `
        <div class="gallery-img-wrapper" style="position:relative; cursor:pointer;">
          <video ${poster} class="img-fluid gallery-img" style="object-fit:cover;width:100%;height:100%;display:block;background:#000;" muted>
            <source src="${img.src}" type="video/mp4">
            مرورگر شما از ویدیو پشتیبانی نمی‌کند.
          </video>
          <div class="gallery-play-icon" style="position:absolute;top:10px;left:10px;width:32px;height:32px;z-index:2;">
            <svg viewBox="0 0 32 32" width="32" height="32">
              <circle cx="16" cy="16" r="16" fill="rgba(0,0,0,0.5)"/>
              <polygon points="12,9 24,16 12,23" fill="#fff"/>
            </svg>
          </div>
          <div class="gallery-hover-text">${img.title}</div>
        </div>
      `;
    } else {
      mediaHtml = `
        <div class="gallery-img-wrapper" style="position:relative; cursor:pointer;">
          <img src="${img.src}" alt="${img.title}" class="img-fluid gallery-img" />
          <div class="gallery-hover-text">${img.title}</div>
        </div>
      `;
    }
    col.innerHTML = mediaHtml;
    row.appendChild(col);
  });
  // Hover effect
  document.querySelectorAll(".gallery-img-wrapper").forEach((wrap) => {
    wrap.addEventListener("mouseenter", function () {
      this.querySelector(".gallery-hover-text").style.opacity = 1;
    });
    wrap.addEventListener("mouseleave", function () {
      this.querySelector(".gallery-hover-text").style.opacity = 0;
    });
    const hoverText = wrap.querySelector(".gallery-hover-text");
    if (hoverText) hoverText.style.pointerEvents = "none";
  });
  // Modal logic
  document
    .querySelectorAll(".gallery-img-wrapper img, .gallery-img-wrapper video")
    .forEach((imgElem, i) => {
      imgElem.addEventListener("click", function () {
        createGalleryModal(i, pageImages);
      });
    });
  renderPagination(filtered.length, totalPages);
}

function renderPagination(totalImages, totalPages) {
  const pagination = document.getElementById("gallery-pagination");
  if (!pagination) return;
  pagination.innerHTML = "";
  if (totalPages <= 1) {
    pagination.style.display = "none";
    return;
  }
  pagination.style.display = "flex";
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = i === currentPage ? "active" : "";
    btn.onclick = function () {
      currentPage = i;
      renderUserItems(currentUserId);
    };
    pagination.appendChild(btn);
  }
}

function getFileExtension(filename) {
  return filename.split(".").pop().split("?")[0].toLowerCase();
}
function getFileSize(url, callback) {
  fetch(url, { method: "HEAD" })
    .then((response) => {
      const size = response.headers.get("content-length");
      if (size) {
        callback(Number(size));
      } else {
        callback(null);
      }
    })
    .catch(() => callback(null));
}
// مدال گالری مشابه gallery.js
function createGalleryModal(index, images) {
  let oldModal = document.getElementById("gallery-modal");
  if (oldModal) oldModal.remove();
  const img = images[index];
  let content = "";
  if (img.type === "video") {
    const poster = img.poster ? `poster=\"${img.poster}\"` : "";
    content = `
      <video ${poster} controls autoplay style="max-width:100%;max-height:70vh;display:block;margin:0 auto;background:#000;">
        <source src="${img.src}" type="video/mp4">
        مرورگر شما از ویدیو پشتیبانی نمی‌کند.
      </video>
    `;
  } else {
    content = `
      <img src="${img.src}" alt="${img.title}" style="max-width:100%;max-height:70vh;display:block;margin:0 auto;" />
    `;
  }
  // دکمه دانلود برای هر نوع
  let productBtn = `
    <div style="text-align:center;margin-top:16px;">
      <a href="${img.src}" download class="btn btn-dark" id="download-product-btn" style="min-width:160px;">دانلود محصول</a>
    </div>
  `;
  // نمایش فرمت و حجم
  const ext = getFileExtension(img.src);
  let fileInfoHtml = `<span>فرمت: <b>${ext}</b></span> | <span id='file-size-info'>حجم: ...</span>`;
  // مدال
  const modalHtml = `
    <div id="gallery-modal" style="position:fixed;z-index:9999;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;">
      <div style="background:#141414;padding:24px 16px 8px 16px;border-radius:12px;max-width:90vw;max-height:90vh;position:relative;box-shadow:0 0 32px #0002;">
        <button id="gallery-modal-close" style="position:absolute;top:8px;left:8px;background:none;border:none;font-size:2rem;line-height:1;cursor:pointer;">&times;</button>
        <div style="margin-bottom:8px;text-align:center;font-weight:bold;">${
          img.title
        }</div>
        <div style="display:flex;justify-content:center;align-items:center;">
          ${
            img.type === "video"
              ? `<video ${
                  img.poster ? `poster='${img.poster}'` : ""
                } controls autoplay style='width:600px;height:400px;object-fit:cover;display:block;background:#000;border-radius:10px;'>
              <source src='${
                img.src
              }' type='video/mp4'>مرورگر شما از ویدیو پشتیبانی نمی‌کند.</video>`
              : `<img src='${img.src}' alt='${img.title}' style='width:600px;height:400px;object-fit:cover;display:block;border-radius:10px;' />`
          }
        </div>
        ${productBtn}
        <div id="gallery-modal-nav" style="display:flex;justify-content:space-between;margin-top:16px;">
          <button id="gallery-modal-prev" style="background:none;border:none;cursor:pointer;font-size:1.5rem;">&#10094;</button>
          <button id="gallery-modal-next" style="background:none;border:none;cursor:pointer;font-size:1.5rem;">&#10095;</button>
        </div>
        <div id="gallery-modal-counter" style="text-align:center;margin-top:8px;font-size:0.9rem;color:#666;">
          ${index + 1} از ${images.length}
        </div>
        <div id="gallery-modal-desc" style="text-align:center;margin:16px auto 0 auto;font-size:1rem;color:#444;display:flex;justify-content:center;align-items:center;gap:16px;">${fileInfoHtml}</div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);
  // حجم فایل را واکشی و نمایش بده
  getFileSize(img.src, function (size) {
    const el = document.getElementById("file-size-info");
    if (el) {
      if (size) {
        let sizeStr =
          size < 1024 * 1024
            ? (size / 1024).toFixed(1) + " KB"
            : (size / (1024 * 1024)).toFixed(2) + " MB";
        el.textContent = "حجم: " + sizeStr;
      } else {
        el.textContent = "حجم: نامشخص";
      }
    }
  });
  if (img.type === "video") {
    const video = document.querySelector("#gallery-modal video");
    if (video) {
      video.muted = true;
      video.load();
      setTimeout(() => {
        video.play().catch(() => {});
      }, 100);
    }
  }
  document.getElementById("gallery-modal-close").onclick = function () {
    document.getElementById("gallery-modal").remove();
    removeGalleryModalKeyListeners();
  };
  document
    .getElementById("gallery-modal")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        this.remove();
        removeGalleryModalKeyListeners();
      }
    });
  document.getElementById("gallery-modal-prev").onclick = function (e) {
    e.stopPropagation();
    if (index > 0) {
      createGalleryModal(index - 1, images);
    }
  };
  document.getElementById("gallery-modal-next").onclick = function (e) {
    e.stopPropagation();
    if (index < images.length - 1) {
      createGalleryModal(index + 1, images);
    }
  };
  // دانلود با کلیک روی دکمه (برای دانلود ویدیو/عکس با نام مناسب)
  document.getElementById("download-product-btn").onclick = function (e) {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = img.src;
    link.download = (img.title || "product") + "." + ext;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  removeGalleryModalKeyListeners();
  window.galleryModalKeyListener = function (e) {
    const modal = document.getElementById("gallery-modal");
    if (!modal) return;
    if (e.key === "Escape") {
      modal.remove();
      removeGalleryModalKeyListeners();
    } else if (e.key === "ArrowLeft") {
      document.getElementById("gallery-modal-prev").click();
    } else if (e.key === "ArrowRight") {
      document.getElementById("gallery-modal-next").click();
    }
  };
  document.addEventListener("keydown", window.galleryModalKeyListener);
  function removeGalleryModalKeyListeners() {
    if (window.galleryModalKeyListener) {
      document.removeEventListener("keydown", window.galleryModalKeyListener);
      window.galleryModalKeyListener = null;
    }
  }
}

// اضافه کردن فیلتر دسته‌بندی برای گالری رمزدار

document.addEventListener("DOMContentLoaded", function () {
  // اضافه کردن رویداد کلیک به فیلترها
  const navLis = document.querySelectorAll(".gallery-nav ul li");
  navLis.forEach((li) => {
    li.style.cursor = "pointer";
    li.addEventListener("click", function () {
      navLis.forEach((item) => item.classList.remove("gallery-nav-active"));
      this.classList.add("gallery-nav-active");
      currentCategory = this.textContent.trim();
      currentPage = 1;
      if (currentUserId) renderUserItems(currentUserId);
    });
  });
  // مقدار اولیه
  if (navLis[0]) navLis[0].classList.add("gallery-nav-active");
});
