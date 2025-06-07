document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll(".circle-progress");
  circles.forEach((circle) => {
    const percent = parseInt(circle.getAttribute("data-percentage"), 10);
    const svg = circle.querySelector("svg");
    const ring = svg.querySelector(".progress-ring__circle");
    const radius = ring.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    ring.style.strokeDasharray = `${circumference} ${circumference}`;
    ring.style.strokeDashoffset = circumference;
    setTimeout(() => {
      const offset = circumference - (percent / 100) * circumference;
      ring.style.strokeDashoffset = offset;
    }, 300);
  });

  // تابع برای بررسی ورود به دید
  function handleScrollAnimation() {
    const animatedEls = document.querySelectorAll('.animate-left, .animate-right');
    animatedEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('in-view');
      }
    });
  }
  window.addEventListener('scroll', handleScrollAnimation);
  window.addEventListener('DOMContentLoaded', handleScrollAnimation);
});