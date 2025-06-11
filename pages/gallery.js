document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = [
    // فقط آیتم‌هایی که ادمین می‌خواهد اینجا قرار می‌گیرند
    // نمونه: فقط عکس‌ها و ویدیوهای دلخواه را اینجا قرار دهید
    {
      src: "../images/photo_2025-05-22_15-30-26.jpg",
      title: "اثر هنری ۱",
      desc: "توضیح کوتاه برای اثر هنری ۱",
      category: "استودیو",
      type: "image",
    },
    {
      src: "../images/photo_2025-05-22_15-30-33.jpg",
      title: "اثر هنری ۲",
      desc: "توضیح کوتاه برای اثر هنری ۲",
      category: "سبک زندگی",
      type: "image",
    },
    {
      src: "../images/photo_2025-05-24_11-27-22.jpg",
      title: "اثر هنری ۳",
      desc: "توضیح کوتاه برای اثر هنری ۳",
      category: "طبیعت",
      type: "image",
    },
    {
      src: "../images/nature-3082832_1280.jpg",
      title: "اثر هنری ۴",
      desc: "توضیح کوتاه برای اثر هنری ۴",
      category: "پرتره",
      type: "image",
    },
    {
      src: "../images/photo_2025-05-22_15-30-26.jpg",
      title: "اثر هنری ۵",
      desc: "توضیح کوتاه برای اثر هنری ۵",
      category: "فشن و مد",
      type: "image",
    },
    {
      src: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
      title: "ویدیو هنری ۱",
      desc: "توضیح کوتاه برای ویدیو هنری ۱",
      category: "ویدیو",
      type: "video",
      poster: "../images/photo_2025-05-24_11-27-22.jpg",
    },
    {
      src: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
      title: "ویدیو هنری ۱",
      desc: "توضیح کوتاه برای ویدیو هنری ۱",
      category: "ویدیو",
      type: "video",
      poster: "../images/photo_2025-05-24_11-27-22.jpg",
    },
  ];

  let currentCategory = "همه";
  let currentPage = 1;
  const imagesPerRow = 3;
  const rowsPerPage = 3;
  const imagesPerPage = imagesPerRow * rowsPerPage; // 9 عکس در هر صفحه

  function renderGallery() {
    const picturesRow = document.querySelector(".pictures .row");
    if (!picturesRow) return;
    picturesRow.innerHTML = "";
    let filtered =
      currentCategory === "همه"
        ? galleryImages
        : galleryImages.filter((img) => img.category === currentCategory);
    // Pagination
    const totalPages = Math.ceil(filtered.length / imagesPerPage);
    if (currentPage > totalPages) currentPage = 1;
    const start = (currentPage - 1) * imagesPerPage;
    const end = start + imagesPerPage;
    const pageImages = filtered.slice(start, end);
    pageImages.forEach((img, idx) => {
      const col = document.createElement("div");
      col.className = "picture col-12 col-md-4 mb-4";
      let mediaHtml = "";
      if (img.type === "video") {
        // اگر ویدیو بود، ویدیو یا کاور ویدیو را نمایش بده و آیکون پلی اضافه کن
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
        // عکس معمولی
        mediaHtml = `
          <div class="gallery-img-wrapper" style="position:relative; cursor:pointer;">
            <img src="${img.src}" alt="${img.title}" class="img-fluid gallery-img" />
            <div class="gallery-hover-text">${img.title}</div>
          </div>
        `;
      }
      col.innerHTML = mediaHtml;
      picturesRow.appendChild(col);
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
      if (hoverText) {
        hoverText.style.pointerEvents = "none";
      }
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
        renderGallery();
      };
      pagination.appendChild(btn);
    }
  }

  // دسته‌بندی
  const navLis = document.querySelectorAll(".gallery-nav ul li");
  navLis.forEach((li) => {
    li.style.cursor = "pointer";
    li.addEventListener("click", function () {
      navLis.forEach((item) => item.classList.remove("gallery-nav-active"));
      this.classList.add("gallery-nav-active");
      currentCategory = this.textContent.trim();
      currentPage = 1; // Reset page on category change
      renderGallery();
    });
  });
  // مقدار اولیه
  if (navLis[0]) navLis[0].classList.add("gallery-nav-active");
  renderGallery();

  // تعریف تابع به صورت global
  window.createGalleryModal = function (index, images) {
    // حذف مدال قبلی اگر وجود دارد
    let oldModal = document.getElementById("gallery-modal");
    if (oldModal) oldModal.remove();

    const img = images[index];
    let content = "";
    if (img.type === "video") {
      const poster = img.poster ? `poster="${img.poster}"` : "";
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
    let productBtn = "";
    // دکمه مشاهده محصول برای همه آیتم‌ها (عکس و ویدیو)
    productBtn = `
      <div style="text-align:center;margin-top:16px;">
        <a href="#" class="btn btn-dark gallery-view-product-btn" style="min-width:160px;">مشاهده محصول</a>
      </div>
    `;
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
          <div id="gallery-modal-desc" style="text-align:right;margin-top:8px;font-size:1rem;color:#444;">${
            img.desc || ""
          }</div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHtml);
    // اگر ویدیو بود، بعد از اضافه شدن به DOM، load و سپس play کن و مطمئن شو muted باشد
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
    // بستن با کلیک روی بک‌گراند
    document
      .getElementById("gallery-modal")
      .addEventListener("click", function (e) {
        if (e.target === this) {
          this.remove();
          removeGalleryModalKeyListeners();
        }
      });
    // Navigation buttons
    document.getElementById("gallery-modal-prev").onclick = function (e) {
      e.stopPropagation();
      if (index > 0) {
        window.createGalleryModal(index - 1, images);
      }
    };
    document.getElementById("gallery-modal-next").onclick = function (e) {
      e.stopPropagation();
      if (index < images.length - 1) {
        window.createGalleryModal(index + 1, images);
      }
    };
    // جلوگیری از چندبار اضافه شدن event listener
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
    // افزودن رویداد به دکمه مشاهده محصول
    const viewProductBtn = document.querySelector(
      "#gallery-modal .gallery-view-product-btn"
    );
    if (viewProductBtn) {
      viewProductBtn.addEventListener("click", function (e) {
        e.preventDefault();
        // اطلاعات کامل آیتم و کل لیست را با فیلدهای کامل منتقل کن
        // فیلدهای اضافی برای نمونه
        const item = Object.assign({}, images[index], {
          name: images[index].title,
          description: images[index].desc,
          photographer: images[index].photographer || "ابوذر همتی", // نمونه مقدار پیش‌فرض
          dimensions: images[index].dimensions || "1080x1080", // نمونه مقدار پیش‌فرض
        });
        // لیست کامل با فیلدهای کامل
        const itemsArray = images.map((img) =>
          Object.assign({}, img, {
            name: img.title,
            description: img.desc,
            photographer: img.photographer || "ابوذر همتی",
            dimensions: img.dimensions || "1080x1080",
          })
        );
        localStorage.setItem("gallerySelectedItem", JSON.stringify(item));
        localStorage.setItem("gallerySelectedList", JSON.stringify(itemsArray));
        window.location.href = "gallerySampel.html";
      });
    }
  };
});
