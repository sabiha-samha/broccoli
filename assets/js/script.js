'use strict';



// add event on multiple elements

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


const header = document.querySelector("[data-header]");
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navToggler, "click", toggleNavbar);


/**
 * back top btn
 */

const BackTopBtn = document.querySelector("[data-back-to-top]");

const activeElem = function () {
  console.log("Scrolled!");
  if (window.scrollY > 50) {
    header.classList.add("active");
    BackTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    BackTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElem);