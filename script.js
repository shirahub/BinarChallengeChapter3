// window.onload = function () {
//   navbarToogle.addEventListener("click", classToggle, false);
// };
// const navbarToogle = document.querySelector(".navbar__toggle");

// document.addEventListener("DOMContentLoaded", function () {
//   navbarToogle.addEventListener("click", classToggle, false);
// });

// if (navbarToogle) {

// }

var x = document.querySelector(".navbar__toogle");
x.addEventListener("click", classToggle);

function classToggle() {
  const navs = document.querySelectorAll(".navbar__group");
  navs.forEach((nav) => nav.classList.toggle("navbar__toogle--show"));

  //   const navbar = document.querySelector(".navbar");
  //   navbar.classList.toggle("navbar__toggle--direction");
}

// function handleNavbarToogle() {

// }
