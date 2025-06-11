document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".before-after-container");
  if (!container) return;
  const afterImg = container.querySelector(".after-img");
  const slider = container.querySelector(".slider-line");

  let isDragging = false;

  function setSlider(x) {
    const rect = container.getBoundingClientRect();
    let pos = x - rect.left;
    pos = Math.max(0, Math.min(pos, rect.width));
    const percent = (pos / rect.width) * 100;
    afterImg.style.clipPath = `inset(0 0 0 ${percent}%)`;
    slider.style.left = `${percent}%`;
  }

  // Mouse events
  slider.addEventListener("mousedown", function (e) {
    isDragging = true;
    slider.classList.add("active");
    e.preventDefault();
  });
  document.addEventListener("mouseup", function () {
    isDragging = false;
    slider.classList.remove("active");
  });
  document.addEventListener("mousemove", function (e) {
    if (!isDragging) return;
    setSlider(e.clientX);
  });

  // Touch events for mobile
  slider.addEventListener("touchstart", function (e) {
    isDragging = true;
    slider.classList.add("active");
    e.preventDefault();
  }, { passive: false });
  document.addEventListener("touchend", function () {
    isDragging = false;
    slider.classList.remove("active");
  });
  document.addEventListener("touchmove", function (e) {
    if (!isDragging) return;
    setSlider(e.touches[0].clientX);
    e.preventDefault();
  }, { passive: false });

  // مقدار اولیه
  setSlider(container.offsetWidth / 2 + container.getBoundingClientRect().left);
});