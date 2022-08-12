/** @format */

const activeIcon = document.getElementById("active-icon");
const navItems = document.getElementById("nav-items");
const inactiveIcon = document.getElementById("inactive-icon");
activeIcon.addEventListener("click", () => {
  navItems.classList.toggle("active");
});
