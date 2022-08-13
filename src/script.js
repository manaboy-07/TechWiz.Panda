/** @format */

const activeIcon = document.getElementById("active-icon");
const navItems = document.getElementById("nav-items");
const inactiveIcon = document.getElementById("inactive-icon");
const nav = document.querySelectorAll(".nav-item");
activeIcon.addEventListener("click", () => {
  navItems.classList.toggle("active");
});
nav.forEach((n) => {
  n.addEventListener("click", () => {
    navItems.classList.toggle("active");
  });
});

const TopBtn = document.getElementById("btn-top");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    TopBtn.style.display = "block";
  } else {
    TopBtn.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}