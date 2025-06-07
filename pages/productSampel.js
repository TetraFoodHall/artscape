document.addEventListener("DOMContentLoaded", function () {
  // --- داینامیک کردن اطلاعات محصول ---
  const selectedProduct = JSON.parse(
    localStorage.getItem("selectedProduct") || "null"
  );
  if (selectedProduct) {
    // تصویر اصلی
    const mainImg = document.querySelector(".main-product-img");
    if (mainImg) mainImg.src = selectedProduct.image;
    // عنوان
    const titleElem = document.querySelector(".product-caption h2");
    if (titleElem) titleElem.textContent = selectedProduct.title;
    // دسته‌بندی
    const catElem = document.querySelector(".product-caption p.text-right");
    if (catElem) catElem.textContent = selectedProduct.category;
    // قیمت
    const priceElem = document.getElementById("price");
    if (priceElem) priceElem.textContent = selectedProduct.price;
    // توضیحات (در صورت وجود)
    const descriptionContent = document.getElementById("description-content");
    if (descriptionContent) {
      descriptionContent.innerHTML = `<p style="font-size:1.1rem;line-height:2;">${
        selectedProduct.description || "توضیحات برای این محصول ثبت نشده است."
      }</p>`;
    }
    // گالری تصاویر داینامیک
    const thumbsContainer = document.getElementById("product-thumbnails");
    if (thumbsContainer) {
      thumbsContainer.innerHTML = "";
      let gallery = Array.isArray(selectedProduct.images)
        ? selectedProduct.images
        : [selectedProduct.image];
      gallery.forEach((imgSrc, idx) => {
        const thumb = document.createElement("img");
        thumb.src = imgSrc;
        thumb.className = "img-thumbnail thumb-img";
        thumb.style.width = "70px";
        thumb.style.height = "70px";
        thumb.style.objectFit = "cover";
        thumb.style.cursor = "pointer";
        thumb.alt = "thumb" + (idx + 1);
        if (mainImg && mainImg.src.includes(imgSrc))
          thumb.classList.add("selected-thumb");
        thumb.onclick = function () {
          mainImg.src = imgSrc;
          document
            .querySelectorAll(".thumb-img")
            .forEach((t) => t.classList.remove("selected-thumb"));
          thumb.classList.add("selected-thumb");
        };
        thumbsContainer.appendChild(thumb);
      });
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const qtyValue = document.getElementById("quantity-value");
  const increaseBtn = document.getElementById("increase-qty");
  const decreaseBtn = document.getElementById("decrease-qty");

  increaseBtn.addEventListener("click", function () {
    let value = parseInt(qtyValue.textContent, 10);
    if (value < 99) qtyValue.textContent = value + 1;
  });
  decreaseBtn.addEventListener("click", function () {
    let value = parseInt(qtyValue.textContent, 10);
    if (value > 1) qtyValue.textContent = value - 1;
  });
});

// تب سوییچ ساده
const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");
tabBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    tabPanes.forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    tabPanes[idx].classList.add("active");
  });
});

// --- Product Comments Logic ---
document.addEventListener("DOMContentLoaded", function () {
  localStorage.removeItem("productSampel-comments");

  const commentForm = document.getElementById("commentForm");
  const commentsDiv = document.querySelector(".comments-pane .comments");
  const commentsKey = "productSampel-comments";

  function updateCommentsCount(count) {
    const commentsTab = document.querySelector(".comments-section span");
    if (commentsTab) commentsTab.textContent = `(${count})`;
  }

  function renderComments() {
    const comments = JSON.parse(localStorage.getItem(commentsKey) || "[]");
    updateCommentsCount(comments.length);
    if (!comments.length) {
      commentsDiv.innerHTML =
        '<div class="text-warning">هیچ نظری برای این محصول ثبت نشده است.</div>';
      return;
    }
    // تابع بازگشتی برای نمایش کامنت و ریپلای‌ها
    function renderCommentItem(c, parentIdx, level = 0) {
      const rating = c.rating || 0;
      const stars = rating
        ? '<span style="color:orange;font-size:1.1rem;">' +
          "★".repeat(rating) +
          "☆".repeat(5 - rating) +
          "</span>"
        : "";
      const replies = c.replies || [];
      const idxAttr =
        parentIdx !== undefined ? `data-parent-idx="${parentIdx}"` : "";
      // تشخیص ادمین
      const isAdmin = c.name && c.name.trim().toLowerCase() === 'ادمین';
      return `
        <div class="comment-item" style="margin-right:${
          level * 24
        }px; border-right:${level ? "2px solid orange" : "none"}; padding-right:8px; margin-top:10px;">
          <div class="comment-author" style="display:flex;align-items:center;gap:8px;">
            <span${isAdmin ? ' style="color:#fff;background:orange;padding:2px 8px;border-radius:6px;font-weight:bold;"' : ''}>${c.name}${isAdmin ? ' <span style=\'font-size:0.9em; color:#fff; background:#d32f2f; border-radius:4px; padding:1px 6px; margin-right:6px;\'>ادمین</span>' : ''}</span> ${stars}
          </div>
          <div class="comment-date">${c.date}</div>
          <div class="comment-text"${isAdmin ? ' style="background:#fff3e0;color:#d32f2f;border-radius:6px;padding:6px 10px;"' : ''}>${c.comment}</div>
          <button class="reply-btn btn btn-sm btn-outline-warning mt-2" data-idx="${
            c.id
          }" ${idxAttr}>پاسخ</button>
          <form class="reply-form mt-2" data-idx="${
            c.id
          }" style="display:none;">
            <input type="text" class="form-control mb-2" name="name" placeholder="نام شما" required />
            <textarea class="form-control mb-2" name="comment" rows="2" placeholder="پاسخ شما..." required></textarea>
            <button type="submit" class="btn btn-primary btn-sm">ارسال پاسخ</button>
          </form>
          <div class="replies">
            ${replies
              .map((r) => renderCommentItem(r, c.id, level + 1))
              .join("")}
          </div>
        </div>
      `;
    }
    commentsDiv.innerHTML = comments
      .map((c) => renderCommentItem(c, undefined, 0))
      .join("");

    // اضافه کردن event به دکمه‌های reply و فرم‌ها
    document.querySelectorAll(".reply-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const idx = this.getAttribute("data-idx");
        const parentIdx = this.getAttribute("data-parent-idx");
        const form = document.querySelector(
          `form.reply-form[data-idx="${idx}"]`
        );
        if (form)
          form.style.display = form.style.display === "none" ? "block" : "none";
      });
    });
    document.querySelectorAll("form.reply-form").forEach((form) => {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const idx = this.getAttribute("data-idx");
        const name = this.name.value.trim();
        const comment = this.comment.value.trim();
        if (!name || !comment) return;
        const now = new Date();
        const date =
          now.toLocaleDateString("fa-IR") +
          " " +
          now.toLocaleTimeString("fa-IR", {
            hour: "2-digit",
            minute: "2-digit",
          });
        const comments = JSON.parse(localStorage.getItem(commentsKey) || "[]");
        // تابع بازگشتی برای پیدا کردن کامنت و افزودن ریپلای
        function addReply(commentsArr) {
          for (let c of commentsArr) {
            if (String(c.id) === String(idx)) {
              if (!c.replies) c.replies = [];
              c.replies.push({
                id: Date.now() + Math.random(),
                name,
                comment,
                date,
                replies: [],
              });
              return true;
            }
            if (c.replies && c.replies.length) {
              if (addReply(c.replies)) return true;
            }
          }
          return false;
        }
        addReply(comments);
        localStorage.setItem(commentsKey, JSON.stringify(comments));
        renderComments();
      });
    });
  }

  if (commentForm) {
    commentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = commentForm.name.value.trim();
      const email = commentForm.email.value.trim();
      const comment = commentForm.comment.value.trim();
      if (!name || !email || !comment) return;
      const now = new Date();
      const date =
        now.toLocaleDateString("fa-IR") +
        " " +
        now.toLocaleTimeString("fa-IR", { hour: "2-digit", minute: "2-digit" });
      const comments = JSON.parse(localStorage.getItem(commentsKey) || "[]");
      // اضافه کردن rating و id و replies
      comments.unshift({
        id: Date.now() + Math.random(),
        name,
        email,
        comment,
        date,
        rating: selectedRating,
        replies: [],
      });
      localStorage.setItem(commentsKey, JSON.stringify(comments));
      commentForm.reset();
      selectedRating = 0;
      // ریست رنگ ستاره‌ها و مقدار
      if (starRating) {
        const stars = starRating.querySelectorAll(".star");
        stars.forEach((star) => (star.style.color = "#bbb"));
      }
      if (selectedRatingValue) selectedRatingValue.textContent = "";
      renderComments();
    });
    renderComments();
  }

  // --- Star Rating Logic ---
  const starRating = document.getElementById("starRating");
  const selectedRatingValue = document.getElementById("selectedRatingValue");
  let selectedRating = 0;
  if (starRating) {
    const stars = starRating.querySelectorAll(".star");
    stars.forEach((star, idx) => {
      star.addEventListener("click", function () {
        selectedRating = idx + 1;
        updateStars();
        updateRatingValue(selectedRating);
      });
      star.addEventListener("mouseenter", function () {
        highlightStars(idx + 1);
        updateRatingValue(idx + 1);
      });
      star.addEventListener("mouseleave", function () {
        updateStars();
        updateRatingValue(selectedRating);
      });
    });
    function updateStars() {
      stars.forEach((star, i) => {
        star.style.color = i < selectedRating ? "orange" : "#bbb";
      });
    }
    function highlightStars(rating) {
      stars.forEach((star, i) => {
        star.style.color = i < rating ? "orange" : "#bbb";
      });
    }
    function updateRatingValue(val) {
      selectedRatingValue.textContent = val > 0 ? val : "";
    }
  }

  // توضیحات داینامیک محصول
  const descriptionContent = document.getElementById("description-content");
  if (descriptionContent) {
    // اینجا می‌توانید توضیحات را از دیتابیس یا سرور بگیرید. فعلاً یک نمونه استاتیک قرار داده می‌شود:
    descriptionContent.innerHTML = `
      <p style="font-size:1.1rem;line-height:2;">
        این محصول یک اثر هنری منحصر به فرد است که با بهترین متریال و دقت بالا تولید شده است. مناسب برای دکوراسیون منزل، محل کار و هدیه به عزیزان شما. کیفیت چاپ و رنگ فوق‌العاده، ارسال رایگان و ضمانت بازگشت وجه.
      </p>
    `;
  }
  // --- Availability Logic ---
  const isAvailable = true;

  const availElem = document.getElementById("is-availbe");
  if (availElem) {
    if (isAvailable) {
      availElem.textContent = "موجود";
      availElem.style.borderRadius = "8px";
      availElem.style.fontWeight = "bold";
    } else {
      availElem.textContent = "ناموجود";
      availElem.style.background = "#d32f2f";
      availElem.style.border = "#d32f2f";
      availElem.style.color = "#fff";
      availElem.style.padding = "0.5rem";
    }
  }

  // --- Image Gallery Logic ---
  const mainImg = document.querySelector(".main-product-img");
  const thumbs = document.querySelectorAll(".thumb-img");
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", function () {
      // ذخیره ابعاد فعلی عکس اصلی
      const prevWidth = mainImg.offsetWidth;
      const prevHeight = mainImg.offsetHeight;
      mainImg.src = this.src;
      // پس از تغییر src، ابعاد را ثابت نگه می‌داریم
      mainImg.style.width = prevWidth + "px";
      mainImg.style.height = prevHeight + "px";
      // Highlight selected thumbnail
      thumbs.forEach((t) => t.classList.remove("selected-thumb"));
      this.classList.add("selected-thumb");
      // بعد از لود شدن عکس جدید، ابعاد را مجدداً ست می‌کنیم تا تغییر نکند
      mainImg.onload = function () {
        mainImg.style.width = prevWidth + "px";
        mainImg.style.height = prevHeight + "px";
      };
    });
  });
});
