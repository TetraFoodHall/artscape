// لیست تصاویر گالری همراه با اطلاعات
const galleryImages = [
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    alt: "thumb1",
    name: "غروب آرام",
    photographer: "ابوذر همتی ",
    dimensions: "1080x1080",
    thumbnails: [
      {
        src: "../images/photo_2025-05-24_11-27-22.jpg",
        alt: "تصویر کمکی 1",
        type: "image",
      },
      {
        src: "../images/photo_2025-05-22_15-30-26.jpg",
        alt: "تصویر کمکی 2",
        type: "image",
      },
      {
        src: "../video/15445977-uhd_3840_2160_30fps (1).mp4",
        alt: "ویدیو کمکی 1",
        type: "video",
      },
    ],
  },
  {
    src: "../images/photo_2025-05-22_15-30-26.jpg",
    alt: "thumb2",
    name: "صبح مه آلود",
    photographer: " ابوذر همتی",
    dimensions: "900x1200",
    thumbnails: [
      {
        src: "../images/photo_2025-05-22_15-30-26.jpg",
        alt: "تصویر کمکی 1",
        type: "image",
      },
      {
        src: "../images/photo_2025-05-22_15-30-33.jpg",
        alt: "تصویر کمکی 2",
        type: "image",
      },
    ],
  },
  {
    src: "../images/photo_2025-05-22_15-30-33.jpg",
    alt: "thumb3",
    name: "دریاچه آرام",
    photographer: " ابوذر همتی",
    dimensions: "1280x960",
    thumbnails: [
      {
        src: "../images/photo_2025-05-22_15-30-33.jpg",
        alt: "تصویر کمکی 1",
        type: "image",
      },
      {
        src: "../images/photo_2025-05-24_11-27-22.jpg",
        alt: "تصویر کمکی 2",
        type: "image",
      },
    ],
  },
];

// افزودن فرمت به هر عکس
galleryImages.forEach(function (img) {
  const match = img.src.match(/\.([a-zA-Z0-9]+)$/);
  img.format = match ? match[1].toUpperCase() : "";
});

function renderPhotoInfo(photoObj) {
  const infoBox = document.getElementById("sampleGalleryPhotoInfo");
  if (!infoBox) return;
  // استخراج فرمت از src اگر موجود نبود
  let format = photoObj.format;
  if (!format && photoObj.src) {
    const match = photoObj.src.match(/\.([a-zA-Z0-9]+)$/);
    format = match ? match[1].toUpperCase() : "";
  }
  // تعیین لیبل بر اساس نوع آیتم
  let label = "عکاس";
  if (photoObj.type === "video") {
    label = "فیلمبردار";
  }
  infoBox.innerHTML = `
    <div style="width:100%">
      <div class="mb-2"><i class="fa fa-user ms-2" style="color:#ffb84d;"></i> ${label}: <span style="font-weight:500; color:#fff;">${
    photoObj.photographer ? photoObj.photographer : "-"
  }</span></div>
      <div class="mb-2"><i class="fa fa-ruler-combined ms-2" style="color:#ffb84d;"></i> ابعاد: <span style="font-weight:500; color:#fff;">${
        photoObj.dimensions ? photoObj.dimensions : "-"
      }</span></div>
      <div class="mb-2"><i class="fa fa-file-image ms-2" style="color:#ffb84d;"></i> فرمت: <span style="font-weight:500; color:#fff;">${
        format ? format : "-"
      }</span></div>
      <div style="color:#ffb84d; font-size:1.1rem; font-weight:bold; margin-top:18px; text-align:right; letter-spacing:1px; direction:rtl;">${
        photoObj.name || photoObj.title || "-"
      }</div>
    </div>
  `;
}

function renderMainImage(photoObj) {
  const mainImg = document.getElementById("sampleGalleryMainImage");
  const video = document.getElementById("sampleGalleryVideo");
  // تنظیم استایل هماهنگ و کوچک‌تر برای هر دو
  if (mainImg) {
    mainImg.style.width = "90%";
    mainImg.style.maxHeight = "700px";
    mainImg.style.borderRadius = "10px";
    mainImg.style.objectFit = "cover";
    mainImg.style.margin = "0 auto";
    mainImg.style.display = mainImg.style.display || "block";
  }
  if (video) {
    video.style.width = "90%";
    video.style.maxHeight = "700px";
    video.style.borderRadius = "10px";
    video.style.objectFit = "cover";
    video.style.margin = "0 auto";
  }
  if (photoObj.type === "video") {
    if (mainImg) mainImg.style.display = "none";
    if (video) {
      video.src = photoObj.src;
      video.style.display = "block";
      video.load();
    }
  } else {
    if (mainImg && photoObj.src) {
      mainImg.src = photoObj.src;
      mainImg.alt = photoObj.name || photoObj.title || "عکس هنری";
      mainImg.style.display = "block";
    }
    if (video) {
      video.pause();
      video.style.display = "none";
    }
  }
}

function renderDescription(photoObj) {
  const caption = document.querySelector(".sampleGallery-caption p");
  if (caption) {
    caption.textContent =
      photoObj.description || photoObj.desc || caption.textContent;
  }
}

function renderThumbnailsAndNames(selectedIdx = 0) {
  const thumbnailsContainer = document.getElementById(
    "sampleGalleryThumbnails"
  );
  if (!thumbnailsContainer) return;
  thumbnailsContainer.innerHTML = "";
  // فقط از galleryImages[selectedIdx].thumbnails استفاده شود
  const thumbnails = galleryImages[selectedIdx].thumbnails || [];
  thumbnails.forEach(function (thumbObj, idx) {
    let thumbElem;
    if (thumbObj.type === "video") {
      thumbElem = document.createElement("video");
      thumbElem.src = thumbObj.src;
      thumbElem.className = "img-thumbnail sampleGallery-thumb-img";
      thumbElem.style.width = "110px";
      thumbElem.style.height = "110px";
      thumbElem.style.objectFit = "cover";
      thumbElem.style.cursor = "pointer";
      thumbElem.muted = true;
      thumbElem.loop = true;
      thumbElem.autoplay = true;
    } else {
      thumbElem = document.createElement("img");
      thumbElem.src = thumbObj.src;
      thumbElem.alt = thumbObj.alt;
      thumbElem.className = "img-thumbnail sampleGallery-thumb-img";
      thumbElem.style.width = "110px";
      thumbElem.style.height = "110px";
      thumbElem.style.objectFit = "cover";
      thumbElem.style.cursor = "pointer";
    }
    thumbElem.addEventListener("click", function () {
      if (thumbObj.type === "video") {
        renderMainImage({ src: thumbObj.src, type: "video" });
        renderPhotoInfo({ type: "video" });
        renderDescription({});
      } else {
        renderMainImage({ src: thumbObj.src });
        renderPhotoInfo({ src: thumbObj.src });
        renderDescription({});
      }
    });
    thumbnailsContainer.appendChild(thumbElem);
  });
}

// حذف کامل ارتباط تصاویر کوچک با galleryImages و فقط استفاده از galleryThumbnails
function renderThumbnailsDynamic(selectedIdx = 0) {
  renderThumbnailsAndNames(selectedIdx);
}

document.addEventListener("DOMContentLoaded", function () {
  // اگر اطلاعات از localStorage وجود داشت، آن را نمایش بده
  const selectedItem = localStorage.getItem("gallerySelectedItem");
  const selectedGallery = localStorage.getItem("gallerySelectedList");
  let selectedIdx = 0;
  if (selectedItem) {
    const photoObj = JSON.parse(selectedItem);
    selectedIdx = galleryImages.findIndex((img) => img.src === photoObj.src);
    renderMainImage(photoObj);
    renderPhotoInfo(photoObj);
    renderDescription(photoObj);
    renderThumbnailsAndNames(selectedIdx);
    localStorage.removeItem("gallerySelectedItem");
    localStorage.removeItem("gallerySelectedList");
  } else {
    // حالت پیش‌فرض
    renderThumbnailsAndNames(0);
    const mainImg = document.getElementById("sampleGalleryMainImage");
    if (mainImg && galleryImages.length > 0) {
      mainImg.src = galleryImages[0].src;
      renderPhotoInfo(galleryImages[0]);
    }
  }
});
