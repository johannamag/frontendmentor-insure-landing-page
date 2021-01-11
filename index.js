const toggle = document.getElementById("toggle");
const close = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");

toggle.addEventListener("click", () => {
  close.classList.toggle("open");
  hamburger.classList.toggle("open");
  navItems.classList.toggle("open");
});
