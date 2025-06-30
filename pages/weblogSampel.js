let weblogSample = [
  {
    id: 1,
    weblogNumber: "شماره2",
    date: "24شهریور 1396",
    img: "../images/photo_2025-05-22_15-30-33.jpg",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و بااستفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی موردنیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتاب‌های زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می‌طلبد تا با نرم‌افزارها شناخت بیشتری را برای طراحان رایانه‌ای علی‌الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می‌توان امید داشت که تمام دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد. زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساساً مورد استفاده قرار گیرد.",
    likes: "0",
  },
];

const weblogSection = document.querySelector(".weblogs-section");
const likeElem = document.querySelector("like");
const likeCount = document.querySelector(".like-count");
weblogSample.forEach((weblogs) => {
  const weblog = document.createElement("div");
  weblog.classList.add("top-section", "col-12");
  weblog.innerHTML = `
    <section class="header-title"> 
      <h1>${weblogs.weblogNumber}</h1> 
      <p>${weblogs.date}</p> 
    </section> 
    <section class="main-container"> 
      <section class="header-img"> 
        <img src="${weblogs.img}" alt="..." class="img-fluid" /> 
      </section> 
      <section class="description col-12 mt-4"> 
        <p>${weblogs.desc}</p> 
        <p class="mt-4">${weblogs.desc}</p> 
      </section> 
      <section class="management"> 
        <p class="like">تعداد لایک <span class="like-count">${weblogs.likes}</span></p> 
        <section> 
          <button class="btn btn-dark text-white">نوشته قبلی</button> 
          <button class="btn btn-dark text-white">نوشته بعدی</button> 
        </section> 
      </section> 
    </section>
 `;
  weblogSection.append(weblog);
});
