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

let modalPopupContainer = document.querySelector("#modal-popup-container");

function htmlBuilder(tag, className, content) {
  modalPopupContainer.insertAdjacentHTML(
    "afterbegin",
    `
  <div id="work-card-popup">
      <h2 class="work-title-text">Tonic</h2>
      <ul class="client-role-year">
        <li class="work-client">CANOPY</li>
        <span class="bullet">•</span>
        <li class="work-role">Back End Dev</li>
        <span class="bullet">•</span>
        <li class="work-year">2015</li>
      </ul>
      <img class="work-snapshot" src="./visuals/tonic-snapshot.png" />
      <p class="body-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essent
      </p>
      <ul class="tag-list">
        <li class="tag">HTML</li>
        <li class="tag">CSS</li>
        <li class="tag">JavaScript</li>
      </ul>
      <hr class="work-card-popup-line"></hr>
      <div class="work-buttons-container">
        <a class="button button-popup button-see-live" id="see-live-1">See live
          <i class="bi bi-arrow-up-right-circle" style="min-height: 18px"></i></a>
        <a class="button button-popup" id="see-source-1">See source <i class="bi bi-github" style="min-height: 18px"></i></a>
      </div>
    </div>
    <div id="popup-container"></div>`
  );
}

let buttonWork01 = document.querySelector("#work-1");
buttonWork01.addEventListener("click", htmlBuilder);

// // Modal pop-up section
// let properties = {
//   "align-self": "center",
//   "justify-self": "center",
//   "height": "100vh",
//   "width": "100vw",
//   "z-index": 3,
//   "position": "fixed",
//   "top": 0,
//   "bottom": 0,
//   "left": 0,
//   "right": 0,
//   "display": "flex",
//   "background-color": "#000",
// };

// function htmlBuilder(id, obj) {
//   for (let i = 0; i < Object.keys(obj); i++) {
//     console.log(Object.keys(obj)[i] + ": " + Object.values[i]);
//   }
// }

// let modalContainer = document.querySelector("#modal-pop-up-container");
//
