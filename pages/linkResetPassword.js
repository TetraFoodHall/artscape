document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reset-form");
  const newPassword = document.getElementById("newPassword");
  const confirmPassword = document.getElementById("confirmPassword");
  const successMsg = document.getElementById("reset-success");
  const errorMsg = document.getElementById("reset-error");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    successMsg.style.display = "none";
    errorMsg.style.display = "none";

    if (newPassword.value.length < 6) {
      errorMsg.textContent = "رمز عبور باید حداقل ۶ کاراکتر باشد.";
      errorMsg.style.display = "block";
      return;
    }
    if (newPassword.value !== confirmPassword.value) {
      errorMsg.textContent = "رمز عبور و تکرار آن یکسان نیستند.";
      errorMsg.style.display = "block";
      return;
    }

    successMsg.textContent = "رمز عبور با موفقیت تغییر کرد.";
    successMsg.style.display = "block";
    form.reset();
  });
});
