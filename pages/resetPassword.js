document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reset-form");
  const emailInput = document.getElementById("resetEmail");
  const successMsg = document.getElementById("reset-success");
  const errorMsg = document.getElementById("reset-error");

  emailInput.addEventListener("input", function () {
    successMsg.style.display = "none";
    errorMsg.style.display = "none";
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    successMsg.style.display = "none";
    errorMsg.style.display = "none";

    if (!email) {
      errorMsg.textContent = "لطفاً ایمیل یا نام کاربری را وارد کنید.";
      errorMsg.style.display = "block";
      return;
    }
    if (!validateEmail(email) && !validateUsername(email)) {
      errorMsg.textContent = "ایمیل یا نام کاربری معتبر نیست.";
      errorMsg.style.display = "block";
      return;
    }

    form.querySelector('button[type="submit"]').disabled = true;
    setTimeout(function () {
      successMsg.textContent = "لینک بازیابی به ایمیل شما ارسال شد.";
      successMsg.style.display = "block";
      errorMsg.style.display = "none";
      form.querySelector('button[type="submit"]').disabled = false;
      emailInput.value = "";
    }, 1500);
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validateUsername(username) {
    const re = /^[\w\dآ-ی]{3,}$/;
    return re.test(username);
  }
});
