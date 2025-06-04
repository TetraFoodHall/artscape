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
    commentsDiv.innerHTML = comments
      .map(
        (c) => `
        <div class="comment-item">
          <div class="comment-author">${c.name}</div>
          <div class="comment-date">${c.date}</div>
          <div class="comment-text">${c.comment}</div>
        </div>
      `
      )
      .join("");
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
      comments.unshift({ name, email, comment, date });
      localStorage.setItem(commentsKey, JSON.stringify(comments));
      commentForm.reset();
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
      thumbs.forEach(t => t.classList.remove("selected-thumb"));
      this.classList.add("selected-thumb");
      // بعد از لود شدن عکس جدید، ابعاد را مجدداً ست می‌کنیم تا تغییر نکند
      mainImg.onload = function() {
        mainImg.style.width = prevWidth + "px";
        mainImg.style.height = prevHeight + "px";
      };
    });
  });
});
