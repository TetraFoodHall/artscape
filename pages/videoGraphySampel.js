document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("sampleVideo");
  if (video) {
    video.addEventListener("click", function () {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  }

  // نمایش اطلاعات نمونه کار ویدیویی از localStorage
  const data = localStorage.getItem('selectedVideoSample');
  if (data) {
    const sample = JSON.parse(data);
    // عنوان و تاریخ
    const titleEl = document.querySelector('.header-title h1');
    if (titleEl) { titleEl.textContent = `نمونه کار ${sample.index || ''}`; }
    const dateEl = document.querySelector('.header-title p');
    if (dateEl) { dateEl.textContent = sample.date || ''; }
    // عکس
    const imgEl = document.querySelector('.header-img img');
    if (imgEl) { imgEl.src = sample.src; }
    // توضیحات
    const descEl = document.querySelector('.caption p');
    if (descEl) { descEl.textContent = sample.desc || ''; }
    // ویدیو
    const videoEl = document.getElementById('sampleVideo');
    if (videoEl && sample.video) { videoEl.src = sample.video; }
  }
});