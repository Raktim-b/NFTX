const clsBtn = document.querySelector(".close-btn");
const navCollapsed = document.querySelector(".nav-collapsed");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
let close = true;
clsBtn.addEventListener("click", () => {
  clsBtn.classList.toggle("open");
  overlay.classList.toggle("overlay-active");
  if (close == true) {
    close = false;
    navCollapsed.style.right = "0%";
    body.style.overflow = "hidden";
  } else {
    close = true;
    navCollapsed.style.right = "-100%";
    body.style.overflow = "visible";
  }
});
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
  },
});

const swiperSec = new Swiper(".swiper2", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: " .swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
  },
});
function animateCounter(element, target, duration = 2000, suffix = "") {
  let current = 0;
  const increment = target / (duration / 16); // 60fps
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + suffix;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + suffix;
    }
  }, 16);
}

// Animate banner stats immediately on page load
const bannerStats = document.querySelectorAll(".stat-number");
bannerStats.forEach((stat) => {
  const text = stat.textContent.trim();
  const number = parseInt(text.replace(/\D/g, "")); // Extract number
  const suffix = text.replace(/[0-9]/g, ""); // Extract k+ or other suffix
  stat.textContent = "0" + suffix;
  animateCounter(stat, number, 2000, suffix);
});
