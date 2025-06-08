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
