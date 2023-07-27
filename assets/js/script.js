'use strict';



/**
 * Testimonial  Functionality
 */

// const btn = document.getElementsByClassName("li-btn");
// const slide = document.getElementById("slide");

// btn[0].addEventListener('click', function (){
//   slide.style.transform = "translateX(0px)";
//   for(let i=0; i < 2; i++) {
//     btn[i].classList.remove("li-active");
//   }
//   this.classList.add("li-active");
// })

// btn[1].addEventListener("click", function () {
//   slide.style.transform = "translateX(-800px)";
//   for (let i = 0; i < 2; i++) {
//     btn[i].classList.remove("li-active");
//   }
//   this.classList.add("li-active");
// });

/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}





/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

