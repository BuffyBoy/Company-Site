'use strict';



/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);



/**
 * Section nav to switch btns
 */

document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('[data-filter-btn]');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Remove the 'active' class from all buttons
      filterButtons.forEach((btn) => {
        btn.classList.remove('active');
      });

      // Add the 'active' class to the clicked button
      button.classList.add('active');

      // Get the filter value from the data-filter-btn attribute
      const filterValue = button.getAttribute('data-filter-btn');

      // Show/hide project cards based on the filter
      projectCards.forEach((card) => {
        const cardTags = card.querySelector('.card-tag').textContent;

        if (filterValue === 'all' || cardTags.includes(filterValue)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});


/**
 * Contact Section Whatsapp send
 */

function Whatsapp() {
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let message = document.getElementById('message').value

  let Whatsappurl = 'https://wa.me/92256138361?text='
  + 'Name of Customer:' + name + '%0a'
  + 'Customer Email:' + email + '%0a'
  + 'Message:' + message;

  window.open(Whatsappurl, '_blank').focus();
}