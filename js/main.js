const toggler = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".main-nav");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav--expanded");
});