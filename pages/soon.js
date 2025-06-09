// مقدار اولیه تایمر (مثلاً 5 دقیقه = 300 ثانیه)
let timeLeft = 300;
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 2); // دو روز بعد

toPersianDigits = (num) =>
  num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

function updateTimer() {
  const now = new Date();
  let diff = Math.max(0, Math.floor((targetDate - now) / 1000));
  let days = Math.floor(diff / (24 * 60 * 60));
  let hours = Math.floor((diff % (24 * 60 * 60)) / 3600);
  let minutes = Math.floor((diff % 3600) / 60);
  let seconds = diff % 60;
  document.getElementById("timer").innerHTML = `<span>${toPersianDigits(
    seconds.toString().padStart(2, "0")
  )}</span> : <span>${toPersianDigits(
    minutes.toString().padStart(2, "0")
  )}</span> : <span>${toPersianDigits(
    hours.toString().padStart(2, "0")
  )}</span> : <span>${toPersianDigits(
    days.toString().padStart(2, "0")
  )}</span><br><span style='font-size:1rem'>ثانیه : دقیقه : ساعت : روز</span>`;
  if (diff > 0) {
    setTimeout(updateTimer, 1000);
  } else {
    document.getElementById("timer").textContent = "زمان به پایان رسید!";
  }
}

updateTimer();

//
particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: false, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "star",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: {
        src: "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 4,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 14,
      direction: "left",
      random: false,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "grab" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
