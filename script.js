let menuBtn = document.querySelector("#menu-btn");
let closeBtn = document.querySelector("#close-btn");
let sectionBtn = document.querySelector("#hidden-menu-list");
let hiddenMenuBg = document.querySelector("#hidden-menu-bg");
let hiddenMenu = document.querySelector("#hidden-menu");

hiddenMenuBg.style.display = "none";
hiddenMenu.style.display = "none";

function display() {
  document.body.style.overflow = "hidden";
  if (hiddenMenu.style.display == "none") {
    hiddenMenuBg.style.display = "flex";
    hiddenMenu.style.display = "grid";
  } else {
    hiddenMenuBg.style.display = "none";
    hiddenMenu.style.display = "none";
  }
  document.body.style.overflow = "visible";
}

menuBtn.addEventListener("click", display);
closeBtn.addEventListener("click", display);
sectionBtn.addEventListener("click", display);
