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
