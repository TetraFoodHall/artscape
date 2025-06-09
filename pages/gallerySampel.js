// لیست تصاویر گالری همراه با اطلاعات
const galleryImages = [
  {
    src: "../images/photo_2025-05-24_11-27-22.jpg",
    alt: "thumb1",
    name: "غروب آرام",
    photographer: "ابوذر همتی ",
    dimensions: "1080x1080",
  },
  {
    src: "../images/photo_2025-05-22_15-30-26.jpg",
    alt: "thumb2",
    name: "صبح مه آلود",
    photographer: " ابوذر همتی",
    dimensions: "900x1200",
  },
  {
    src: "../images/photo_2025-05-22_15-30-33.jpg",
    alt: "thumb3",
    name: "دریاچه آرام",
    photographer: " ابوذر همتی",
    dimensions: "1280x960",
  },
];

function renderPhotoInfo(photoObj) {
  const infoBox = document.getElementById("sampleGalleryPhotoInfo");
  if (!infoBox) return;
  infoBox.innerHTML = `
    <div style="width:100%">
      <div class="mb-2"><i class="fa fa-user ms-2" style="color:#ffb84d;"></i> عکاس: <span style="font-weight:500; color:#fff;">${photoObj.photographer}</span></div>
      <div class="mb-2"><i class="fa fa-ruler-combined ms-2" style="color:#ffb84d;"></i> ابعاد: <span style="font-weight:500; color:#fff;">${photoObj.dimensions}</span></div>
      <div style="color:#ffb84d; font-size:1.1rem; font-weight:bold; margin-top:18px; text-align:right; letter-spacing:1px; direction:rtl;">${photoObj.name}</div>
    </div>
  `;
}

function renderThumbnailsAndNames() {
  const thumbnailsContainer = document.getElementById(
    "sampleGalleryThumbnails"
  );
  if (!thumbnailsContainer) return;
  thumbnailsContainer.innerHTML = "";
  galleryImages.forEach(function (imgObj, idx) {
    // تصویر کوچک
    const img = document.createElement("img");
    img.src = imgObj.src;
    img.alt = imgObj.alt;
    img.className = "img-thumbnail sampleGallery-thumb-img";
    img.style.width = "110px";
    img.style.height = "110px";
    img.style.objectFit = "cover";
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      document.getElementById("sampleGalleryMainImage").src = imgObj.src;
      renderPhotoInfo(imgObj);
    });
    thumbnailsContainer.appendChild(img);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderThumbnailsAndNames();
  // مقداردهی اولیه عکس اصلی و اطلاعات
  const mainImg = document.getElementById("sampleGalleryMainImage");
  if (mainImg && galleryImages.length > 0) {
    mainImg.src = galleryImages[0].src;
    renderPhotoInfo(galleryImages[0]);
  }
});
