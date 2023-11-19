'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);

document.getElementById('image-container').addEventListener('click', function() {
  // Toggle the visibility of the overlay on click for mobile devices
  var overlay = this.querySelector('.cap');
  overlay.style.opacity = overlay.style.opacity === '0' ? '1' : '0';
});

document.getElementById('image-container2').addEventListener('click', function() {
  // Toggle the visibility of the overlay on click for mobile devices
  var overlay = this.querySelector('.cap');
  overlay.style.opacity = overlay.style.opacity === '0' ? '1' : '0';
});
document.getElementById('image-container3').addEventListener('click', function() {
  // Toggle the visibility of the overlay on click for mobile devices
  var overlay = this.querySelector('.cap');
  overlay.style.opacity = overlay.style.opacity === '0' ? '1' : '0';
});
document.getElementById('image-container4').addEventListener('click', function() {
  // Toggle the visibility of the overlay on click for mobile devices
  var overlay = this.querySelector('.cap');
  overlay.style.opacity = overlay.style.opacity === '0' ? '1' : '0';
});
document.getElementById('image-container5').addEventListener('click', function() {
  // Toggle the visibility of the overlay on click for mobile devices
  var overlay = this.querySelector('.cap');
  overlay.style.opacity = overlay.style.opacity === '0' ? '1' : '0';
});
