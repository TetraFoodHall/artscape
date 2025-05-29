// اضافه کردن استایل فعال به li های لیست محصولات شاپ
window.addEventListener("DOMContentLoaded", function () {
  const shopList = document.querySelectorAll(".shop-left-header ul li");
  shopList.forEach((li) => {
    li.addEventListener("click", function () {
      shopList.forEach((item) => item.classList.remove("shop-left-active"));
      this.classList.add("shop-left-active");
    });
  });
});

window.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      id: 1,
      title: "محصول 30",
      category: "سبک زندگی",
      price: "80تومان",
      image: "../images/photo_2025-05-22_15-30-33.jpg",
    },
    {
      id: 2,
      title: "محصول 31",
      category: "استودیو",
      price: "90تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 3,
      title: "محصول 32",
      category: "فشن و مد",
      price: "120تومان",
      image: "../images/photo_2025-05-24_11-27-22.jpg",
    },
    {
      id: 4,
      title: "محصول 33",
      category: "پرتره",
      price: "70تومان",
      image: "../images/photo_2025-05-22_15-30-33.jpg",
    },
    {
      id: 5,
      title: "محصول 34",
      category: "سبک زندگی",
      price: "85تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 6,
      title: "محصول 35",
      category: "استودیو",
      price: "100تومان",
      image: "../images/photo_2025-05-24_11-27-22.jpg",
    },
    {
      id: 7,
      title: "محصول 36",
      category: "فشن و مد",
      price: "130تومان",
      image: "../images/photo_2025-05-22_15-30-33.jpg",
    },
    {
      id: 8,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 9,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 10,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 11,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 12,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 13,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 14,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 15,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 16,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 17,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 18,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 19,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 20,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 21,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 22,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 23,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 24,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 25,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 26,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 27,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 28,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 29,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
    {
      id: 30,
      title: "محصول 37",
      category: "پرتره",
      price: "75تومان",
      image: "../images/photo_2025-05-22_15-30-26.jpg",
    },
  ];

  const productsRow = document.getElementById("products-row");
  let rowsToShow = 4;
  const productsPerRow = 3;
  const productsPerPage = rowsToShow * productsPerRow; // 12 محصول در هر صفحه
  let selectedCategory = "همه";
  let currentPage = 1;

  function getFilteredProducts() {
    return selectedCategory === "همه"
      ? products
      : products.filter((p) => p.category === selectedCategory);
  }

  function renderProducts(page) {
    productsRow.innerHTML = "";
    const filteredProducts = getFilteredProducts();
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const pageProducts = filteredProducts.slice(start, end);
    pageProducts.forEach((product, i) => {
      const col = document.createElement("div");
      col.className = "col-lg-4 col-md-6 col-12 mb-4";
      col.innerHTML = `
        <div class="product shop-product-card">
          <div class="product-image-wrapper" style="position: relative; overflow: hidden">
            <img src="${product.image}" alt="${product.title}" />
            <button class="add-to-cart-btn">
              <i class="fa-solid fa-basket-shopping"></i>
              افزودن به سبد خرید
            </button>
          </div>
          <h3>${product.title}</h3>
          <h4>${product.category}</h4>
          <p>${product.price}</p>
        </div>
      `;
      setTimeout(() => {
        col.querySelector(".product").classList.add("product-fade");
      }, 60 * i);
      productsRow.appendChild(col);
    });
    renderPagination(filteredProducts.length, page);
  }

  function renderPagination(totalProducts, activePage) {
    let pagination = document.getElementById("products-pagination");
    if (!pagination) {
      pagination = document.createElement("div");
      pagination.id = "products-pagination";
      pagination.style.display = "flex";
      pagination.style.justifyContent = "center";
      pagination.style.gap = "0.5rem";
      pagination.style.margin = "2rem auto 0 auto";
      productsRow.parentElement.appendChild(pagination);
    }
    pagination.innerHTML = "";
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.style.padding = "0.5rem 1rem";
      btn.style.border = "1px solid orange";
      btn.style.background = i === activePage ? "#fff " : "rgb(11, 11, 11)  ";
      btn.style.color = i === activePage ? "black" : "#fff ";
      btn.style.borderRadius = "50%";
      btn.style.cursor = "pointer";
      btn.style.fontWeight = "bold";
      btn.onclick = function () {
        currentPage = i;
        renderProducts(currentPage);
      };
      pagination.appendChild(btn);
    }
    pagination.style.display = totalPages > 1 ? "flex" : "none";
  }

  // اضافه کردن فیلتر دسته‌بندی
  const categoryList = document.querySelectorAll(".shop-left-header ul li");
  categoryList.forEach((li) => {
    li.addEventListener("click", function () {
      selectedCategory = this.textContent.trim();
      currentPage = 1;
      categoryList.forEach((item) => item.classList.remove("shop-left-active"));
      this.classList.add("shop-left-active");
      renderProducts(currentPage);
    });
  });

  // مقدار اولیه
  renderProducts(currentPage);

  // --- Like & Modal for shop products ---
  function toPersianNumber(num) {
    return num
      .toString()
      .padStart(2, "0")
      .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  }
  function getShopLikes(id) {
    const likes = JSON.parse(localStorage.getItem("shopLikes") || "{}");
    return likes[id] || 0;
  }
  function setShopLikes(id, count) {
    const likes = JSON.parse(localStorage.getItem("shopLikes") || "{}");
    likes[id] = count;
    localStorage.setItem("shopLikes", JSON.stringify(likes));
  }
  function hasShopLiked(id) {
    const liked = JSON.parse(localStorage.getItem("shopLiked") || "{}");
    return !!liked[id];
  }
  function setShopLiked(id) {
    const liked = JSON.parse(localStorage.getItem("shopLiked") || "{}");
    liked[id] = true;
    localStorage.setItem("shopLiked", JSON.stringify(liked));
  }
  function setShopUnliked(id) {
    const liked = JSON.parse(localStorage.getItem("shopLiked") || "{}");
    delete liked[id];
    localStorage.setItem("shopLiked", JSON.stringify(liked));
  }
  function renderShopLikeSection(id) {
    const likeCount = getShopLikes(id);
    const liked = hasShopLiked(id);
    return `
      <button class="like-btn${liked ? " liked" : ""}" title="لایک">
        <span class="like-count">${toPersianNumber(likeCount)}</span>
        <svg class="like-heart" viewBox="0 0 24 24" fill="${
          liked ? "orange" : "none"
        }" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z"/></svg>
        <span style="font-size:1em; font-weight:bold; color:orange;">لایک</span>
      </button>
    `;
  }
  function createShopProductModal(
    product,
    allProducts = null,
    startIdx = null
  ) {
    const productsArr = allProducts || products;
    let currentIdx =
      startIdx !== null
        ? startIdx
        : productsArr.findIndex((p) => p.id === product.id);
    const oldModal = document.getElementById("shop-product-modal");
    if (oldModal) oldModal.remove();
    const modal = document.createElement("div");
    modal.id = "shop-product-modal";
    function renderLikeSection(id) {
      return renderShopLikeSection(id);
    }
    function updateLikeBtn() {
      const likeSection = modal.querySelector(".like-section");
      likeSection.innerHTML = renderLikeSection(productsArr[currentIdx].id);
      const likeBtn = likeSection.querySelector(".like-btn");
      likeBtn.onclick = function () {
        let count = getShopLikes(productsArr[currentIdx].id);
        if (hasShopLiked(productsArr[currentIdx].id)) {
          setShopLikes(productsArr[currentIdx].id, Math.max(0, count - 1));
          setShopUnliked(productsArr[currentIdx].id);
        } else {
          setShopLikes(productsArr[currentIdx].id, count + 1);
          setShopLiked(productsArr[currentIdx].id);
        }
        updateLikeBtn();
      };
    }
    function updateModalContent() {
      modal.querySelector(".modal-img").src = productsArr[currentIdx].image;
      modal.querySelector(".modal-title").textContent =
        productsArr[currentIdx].title;
      modal.querySelector(".modal-price").textContent =
        productsArr[currentIdx].price;
      updateLikeBtn();
    }
    modal.innerHTML = `
      <div class="modal-backdrop"></div>
      <div class="modal-content" style="display: flex; flex-direction: column; align-items: center; position: relative;">
        <button class="modal-close">&times;</button>
        <div style="display: flex; align-items: center; justify-content: center; width: 100%; position: relative;">
          <button class="modal-arrow modal-arrow-left" style="position: absolute; left: -48px; top: 50%; transform: translateY(-50%);">&#8592;</button>
          <img src="${product.image}" class="modal-img" style="max-width:60vw; max-height:60vh; object-fit:contain; border-radius:12px; margin-bottom:1.5rem;" />
          <button class="modal-arrow modal-arrow-right" style="position: absolute; right: -48px; top: 50%; transform: translateY(-50%);">&#8594;</button>
        </div>
        <div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin: 10px 0; font-weight: bold; font-size: 1.1em;">
          <div class="modal-title" style="color:#fff;">${product.title}</div>
          <div class="modal-price" style="color:#fff;">${product.price}</div>
          <a class="modal-link" href="#" style="white-space: nowrap; font-weight: normal; font-size: 0.95em; color: orange;">مشاهده محصول</a>
          <div class="like-section">${renderLikeSection(product.id)}</div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    // Like button event
    updateLikeBtn();
    // Close modal
    modal.querySelector(".modal-close").onclick = () => modal.remove();
    modal.querySelector(".modal-backdrop").onclick = () => modal.remove();
    // Arrows
    modal.querySelector(".modal-arrow-right").onclick = (e) => {
      e.stopPropagation();
      currentIdx = (currentIdx + 1) % productsArr.length;
      updateModalContent();
    };
    modal.querySelector(".modal-arrow-left").onclick = (e) => {
      e.stopPropagation();
      currentIdx = (currentIdx - 1 + productsArr.length) % productsArr.length;
      updateModalContent();
    };
  }
  // Attach click event to product images after render
  function addShopProductClickHandlers() {
    const productImgs = document.querySelectorAll(
      ".shop-product-card .product-image-wrapper img"
    );
    const filtered = getFilteredProducts();
    productImgs.forEach((img, idx) => {
      img.style.cursor = "pointer";
      img.onclick = function () {
        // Find product by image src
        const product = filtered[idx];
        if (product) createShopProductModal(product, filtered, idx);
      };
    });
  }
  // Patch renderProducts to call addShopProductClickHandlers
  const origRenderProducts = renderProducts;
  renderProducts = function (page) {
    origRenderProducts(page);
    addShopProductClickHandlers();
  };
  // Initial call
  addShopProductClickHandlers();
});
