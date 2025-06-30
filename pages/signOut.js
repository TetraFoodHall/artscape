const signupForm = document.getElementById("signup-form");
const lockError = document.getElementById("lock-error");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    lockError.style.display = "none";
    lockError.textContent = "";

    const userId = document.getElementById("userId").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!userId || !email || !password || !confirmPassword) {
      lockError.textContent = "لطفا همه فیلدها را پر کنید.";
      lockError.style.display = "block";
      return;
    }
    if (!validateEmail(email)) {
      lockError.textContent = "ایمیل معتبر نیست.";
      lockError.style.display = "block";
      return;
    }
    if (password.length < 6) {
      lockError.textContent = "رمز عبور باید حداقل ۶ کاراکتر باشد.";
      lockError.style.display = "block";
      return;
    }
    if (password !== confirmPassword) {
      lockError.textContent = "رمز عبور و تکرار آن یکسان نیستند.";
      lockError.style.display = "block";
      return;
    }

    alert("ثبت‌نام با موفقیت انجام شد!");
    signupForm.reset();
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
