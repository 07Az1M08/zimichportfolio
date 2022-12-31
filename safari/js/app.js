// Swiper

var swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  grid: {
    rows: 2,
  },
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 80,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});
swiper.on("resize", function () {
  window.location.reload();
});

const burger = document.querySelector(".menu__icon");
const header__bot = document.querySelector(".header__bot");
const header = document.querySelector(".header_nav");
const menu__icon = document.querySelector(".menu__icon");
const nav__items = document.querySelectorAll(".nav__link");

const anchors = document.querySelectorAll('body a[href*="#"]');

// Burger-menu

document.addEventListener("click", (e) => {
  const click = e.composedPath().includes(header__bot);
  const isBurger = e.composedPath().includes(burger);
  const isHeader = e.composedPath().includes(header);

  if (!click && !isBurger && !isHeader) {
    header__bot.classList.remove("header__bot-active");
    menu__icon.classList.remove("active");
  }
  if (isBurger) {
    header__bot.classList.toggle("header__bot-active");
    menu__icon.classList.toggle("active");
  }
});

for (nav__item of nav__items) {
  if (nav__item) {
    nav__item.addEventListener("click", function (e) {
      header__bot.classList.remove("header__bot-active");
      menu__icon.classList.remove("active");
    });
  }
}

// smooth scroll

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      anchorId = this.getAttribute("href");
      document.querySelector(anchorId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".scroll",
});
