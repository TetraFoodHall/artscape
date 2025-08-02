document.addEventListener("DOMContentLoaded", function () {
  // حذف آیتم از جدول سبد خرید (با delegation برای پشتیبانی از آیتم‌های داینامیک)
  const cartItemsBox = document.getElementById("cartItemsBox");
  if (cartItemsBox) {
    cartItemsBox.addEventListener("click", function (e) {
      if (e.target && e.target.classList.contains("btn-danger")) {
        const row = e.target.closest("tr");
        if (row) row.remove();
        // اگر هیچ ردیفی باقی نماند، پیام سبد خرید خالی نمایش داده شود و دکمه خرید نهایی مخفی شود
        const tbody = document.querySelector("#cartItemsBox tbody");
        if (tbody && tbody.children.length === 0) {
          document.getElementById("emptyCartBox").style.display = "block";
          document.getElementById("checkoutBtnBox").style.display = "none";
        }
        // بروزرسانی localStorage
        updateCartFromTable();
        updateBasketMsg();
      }
    });
  }

  // اگر آیتمی وجود داشت پیام سبد خرید خالی مخفی و دکمه خرید نهایی نمایش داده شود
  const tbody = document.querySelector("#cartItemsBox tbody");
  if (tbody && tbody.children.length > 0) {
    document.getElementById("emptyCartBox").style.display = "none";
    document.getElementById("checkoutBtnBox").style.display = "flex";
  } else {
    document.getElementById("checkoutBtnBox").style.display = "none";
  }

  // نمایش آیتم‌های سبد خرید از localStorage
  renderCartFromStorage();
  updateBasketMsg();
});

function renderCartFromStorage() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const tbody = document.querySelector("#cartItemsBox tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  cartItems.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><img src="${item.image}" alt="${item.title}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;"></td>
      <td>${item.title}</td>
      <td>${item.count || 1}</td>
      <td>${item.price}</td>
      <td><button class="btn btn-danger btn-sm">حذف</button></td>
    `;
    tbody.appendChild(tr);
  });
  updateBasketMsg();
}

function updateCartFromTable() {
  const tbody = document.querySelector("#cartItemsBox tbody");
  const rows = tbody ? Array.from(tbody.querySelectorAll("tr")) : [];
  const cartItems = rows.map((row) => {
    return {
      image: row.querySelector("img").src,
      title: row.children[1].textContent,
      count: parseInt(row.children[2].textContent) || 1,
      price: row.children[3].textContent,
      id: null, // اگر id نیاز است باید ذخیره شود
    };
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  updateBasketMsg();
}

function updateBasketMsg() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const basketMsg = document.getElementById("basketMsg");
  if (!basketMsg) return;
  if (cartItems.length === 0) {
    basketMsg.style.display = "block";
    basketMsg.textContent = "هیچ آیتمی به سبد خرید اضافه نشده";
  } else {
    basketMsg.style.display = "block";
    basketMsg.textContent = `${cartItems.length} آیتم در سبد خرید شما وجود دارد`;
  }
}
