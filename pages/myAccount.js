const form = document.getElementById("lock-form");
const userIdInput = document.getElementById("userId");
const passwordInput = document.getElementById("password");
const rememberMe = document.getElementById("rememberMe");
const errorDiv = document.getElementById("lock-error");

window.addEventListener("DOMContentLoaded", () => {
  const savedUserId = localStorage.getItem("rememberedUserId");
  if (savedUserId) {
    userIdInput.value = savedUserId;
    rememberMe.checked = true;
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  errorDiv.style.display = "none";
  const userId = userIdInput.value.trim();
  const password = passwordInput.value.trim();

  if (!userId || !password) {
    errorDiv.textContent = "لطفاً همه فیلدها را پر کنید.";
    errorDiv.style.display = "block";
    return;
  }

  if (rememberMe.checked) {
    localStorage.setItem("rememberedUserId", userId);
    // ذخیره لاگ ورود کاربر
    const logs = JSON.parse(localStorage.getItem("userLoginLogs") || "[]");
    logs.push({ userId, date: new Date().toISOString() });
    localStorage.setItem("userLoginLogs", JSON.stringify(logs));
  } else {
    localStorage.removeItem("rememberedUserId");
  }

  errorDiv.style.color = "green";
  errorDiv.textContent = "ورود موفقیت‌آمیز بود!";
  errorDiv.style.display = "block";
});
