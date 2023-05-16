let menuBtn = document.querySelector("#menu-btn");
let closeBtn = document.querySelector("#close-btn");
let sectionBtn = document.querySelector("#hidden-menu-list");
let hiddenMenuBg = document.querySelector("#hidden-menu-bg");
let hiddenMenu = document.querySelector("#hidden-menu");

hiddenMenuBg.style.display = "none";
hiddenMenu.style.display = "none";

function openMenu() {
  hiddenMenuBg.style.display = "flex";
  hiddenMenu.style.display = "grid";
  setTimeout(function () {
    hiddenMenuBg.style.opacity = 0.7;
    hiddenMenu.style.opacity = 1;
  }, 10);
}

function closeMenu() {
  hiddenMenuBg.style.opacity = 0;
  hiddenMenu.style.opacity = 0;
  setTimeout(function () {
    hiddenMenuBg.style.display = "none";
    hiddenMenu.style.display = "none";
  }, 500);
}

function display() {
  if (hiddenMenu.style.display == "none") {
    openMenu();
  } else {
    closeMenu();
  }
}

menuBtn.addEventListener("click", display);
closeBtn.addEventListener("click", display);
sectionBtn.addEventListener("click", display);
window.addEventListener("resize", closeMenu);
