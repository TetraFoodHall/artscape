// نمونه داده‌های وبلاگ
const weblogPosts = [
  {
    id: 1,
    image: "../images/photo_2025-05-24_11-27-22.jpg",
    title: "نوشته 3",
    date: "24 شهریور 1396",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد ...",
    comments: "بدون دیدگاه",
    likes: 13,
  },
  {
    id: 2,
    image: "../images/photo_2025-05-24_11-27-22.jpg",
    title: "نوشته 3",
    date: "24 شهریور 1396",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد ...",
    comments: "بدون دیدگاه",
    likes: 13,
  },
  {
    id: 3,
    image: "../images/photo_2025-05-24_11-27-22.jpg",
    title: "نوشته 3",
    date: "24 شهریور 1396",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد ...",
    comments: "بدون دیدگاه",
    likes: 13,
  },
  {
    id: 4,
    image: "../images/photo_2025-05-24_11-27-22.jpg",
    title: "نوشته 3",
    date: "24 شهریور 1396",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد ...",
    comments: "بدون دیدگاه",
    likes: 13,
  },
  {
    id: 6,
    image: "../images/photo_2025-05-24_11-27-22.jpg",
    title: "نوشته 3",
    date: "24 شهریور 1396",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد ...",
    comments: "بدون دیدگاه",
    likes: 13,
  },
];

window.addEventListener("DOMContentLoaded", function () {
  // داینامیک سازی پست‌ها
  const weblogItems = document.querySelector(".weblog-items .row");
  weblogItems.innerHTML = weblogPosts
    .map(
      (post) => `
      <div class="weblog col-12 col-sm-6 col-md-4 mt-4">
        <div class="weblog-img">
          <img src="${post.image}" alt="...." class="img-fluid" />
        </div>
        <div class="weblog-details">
          <div class="weblog-caption">
            <h4>${post.title}</h4>
            <p class="date">${post.date}</p>
            <p class="caption-text">${post.text}</p>
          </div>
          <div class="weblog-footer d-flex justify-content-between align-items-center text-center">
            <p class="comments"><i class="fa-regular fa-comment"></i> ${post.comments}</p>
            <p class="likes" id="likeBtn-${post.id}"><i class="fa-regular fa-heart"></i> <span id="likeCount-${post.id}">${post.likes}</span> لایک</p>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  const weblogNav = document.querySelectorAll(".weblog-navbar ul li");
  let weblogLastFilter = "همه";

  const weblogCategories = [
    "همه",
    "استودیو",
    "سبک زندگی",
    "طبیعت",
    "فشن و مد",
    "موزیک",
    "پرتره",
  ];

  const weblogPostsWithCat = weblogPosts.map((p, i) => ({
    ...p,
    category: weblogCategories[(i % (weblogCategories.length - 1)) + 1],
  }));

  function renderSkeletonItems(count) {
    const weblogItems = document.querySelector(".weblog-items .row");
    let skeletons = Array(count)
      .fill(`
    <div class="weblog col-12 col-sm-6 col-md-4 mt-4">
      <div class="weblog-img skeleton-box"></div>
      <div class="weblog-details">
        <div class="weblog-caption">
          <h4 class="skeleton-box skeleton-title"></h4>
          <p class="date skeleton-box skeleton-date"></p>
          <p class="caption-text skeleton-box skeleton-text"></p>
        </div>
        <div class="weblog-footer d-flex justify-content-between align-items-center text-center">
          <p class="comments skeleton-box skeleton-comment"></p>
          <p class="likes skeleton-box skeleton-like"></p>
        </div>
      </div>
    </div>
  `)
      .join("");
    weblogItems.innerHTML = skeletons;
  }

  function renderWeblogItems(filter) {
    const weblogItems = document.querySelector(".weblog-items .row");
    let filtered =
      filter === "همه"
        ? weblogPostsWithCat
        : weblogPostsWithCat.filter((p) => p.category === filter);
    renderSkeletonItems(filtered.length); // نمایش اسکلتون
    setTimeout(() => {
      weblogItems.innerHTML = filtered
        .map(
          (post) => `
      <div class="weblog col-12 col-sm-6 col-md-4 mt-4">
        <div class="weblog-img">
          <img src="${post.image}" alt="...." class="img-fluid" />
        </div>
        <div class="weblog-details">
          <div class="weblog-caption">
            <h4>${post.title}</h4>
            <p class="date">${post.date}</p>
            <p class="caption-text">${post.text}</p>
          </div>
          <div class="weblog-footer d-flex justify-content-between align-items-center text-center">
            <p class="comments"><i class="fa-regular fa-comment"></i> ${post.comments}</p>
            <p class="likes" id="likeBtn-${post.id}"><i class="fa-regular fa-heart"></i> <span id="likeCount-${post.id}">${post.likes}</span> لایک</p>
          </div>
        </div>
      </div>
    `
        )
        .join("");
      // لایک داینامیک برای هر پست (کد قبلی را اینجا هم فراخوانی کنید)
      filtered.forEach((post) => {
        const likeBtn = document.getElementById(`likeBtn-${post.id}`);
        const likeCount = document.getElementById(`likeCount-${post.id}`);
        const LIKE_KEY = `liked_weblog_${post.id}`;
        let liked = localStorage.getItem(LIKE_KEY) === "true";
        let count = parseInt(likeCount.textContent, 10) || 0;
        if (liked) {
          likeBtn.classList.add("liked");
          likeBtn.querySelector("i").classList.remove("fa-regular");
          likeBtn.querySelector("i").classList.add("fa-solid");
        }
        likeBtn.addEventListener("click", function () {
          liked = !liked;
          if (liked) {
            count++;
            likeBtn.classList.add("liked");
            likeBtn.querySelector("i").classList.remove("fa-regular");
            likeBtn.querySelector("i").classList.add("fa-solid");
          } else {
            count = Math.max(0, count - 1);
            likeBtn.classList.remove("liked");
            likeBtn.querySelector("i").classList.remove("fa-solid");
            likeBtn.querySelector("i").classList.add("fa-regular");
          }
          likeCount.textContent = count;
          localStorage.setItem(LIKE_KEY, liked);
          localStorage.setItem(LIKE_KEY + "_count", count);
        });
        const savedCount = localStorage.getItem(LIKE_KEY + "_count");
        if (savedCount !== null) {
          likeCount.textContent = savedCount;
          count = parseInt(savedCount, 10);
        }
      });
    }, 1000); // تاخیر ۱ ثانیه‌ای برای شبیه‌سازی لودینگ
  }

  weblogNav.forEach((li) => {
    li.style.cursor = "pointer";
    li.addEventListener("click", function () {
      weblogNav.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
      weblogLastFilter = this.textContent.trim();
      renderWeblogItems(weblogLastFilter);
    });
  });
  // مقدار اولیه
  if (weblogNav[0]) weblogNav[0].classList.add("active");
  renderWeblogItems("همه");

  // لایک داینامیک برای هر پست
  weblogPosts.forEach((post) => {
    const likeBtn = document.getElementById(`likeBtn-${post.id}`);
    const likeCount = document.getElementById(`likeCount-${post.id}`);
    const LIKE_KEY = `liked_weblog_${post.id}`;

    let liked = localStorage.getItem(LIKE_KEY) === "true";
    let count = parseInt(likeCount.textContent, 10) || 0;

    if (liked) {
      likeBtn.classList.add("liked");
      likeBtn.querySelector("i").classList.remove("fa-regular");
      likeBtn.querySelector("i").classList.add("fa-solid");
    }

    likeBtn.addEventListener("click", function () {
      liked = !liked;
      if (liked) {
        count++;
        likeBtn.classList.add("liked");
        likeBtn.querySelector("i").classList.remove("fa-regular");
        likeBtn.querySelector("i").classList.add("fa-solid");
      } else {
        count = Math.max(0, count - 1);
        likeBtn.classList.remove("liked");
        likeBtn.querySelector("i").classList.remove("fa-solid");
        likeBtn.querySelector("i").classList.add("fa-regular");
      }
      likeCount.textContent = count;
      localStorage.setItem(LIKE_KEY, liked);
      localStorage.setItem(LIKE_KEY + "_count", count);
    });

    const savedCount = localStorage.getItem(LIKE_KEY + "_count");
    if (savedCount !== null) {
      likeCount.textContent = savedCount;
      count = parseInt(savedCount, 10);
    }
  });
});
