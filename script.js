let menuBtn = document.querySelector("#menu-btn");
let closeBtn = document.querySelector("#close-btn");
let sectionBtn = document.querySelector("#hidden-menu-list");
let hiddenMenuBg = document.querySelector("#hidden-menu-bg");
let hiddenMenu = document.querySelector("#hidden-menu");

hiddenMenuBg.style.display = "none";
hiddenMenu.style.display = "none";

function openMenu() {
    document.querySelector("body").style.overflow = "hidden";
    hiddenMenuBg.style.display = "flex";
    hiddenMenu.style.display = "grid";
    setTimeout(function () {
        hiddenMenuBg.style.opacity = 0.7;
        hiddenMenu.style.opacity = 1;
    }, 10);
}

function closeMenu() {
    document.querySelector("body").style.overflow = "auto";
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

// MODAL POPUP ANIMATION

let modalPopupContainer = document.querySelector("#modal-popup-container");
let arrContent = [];

function objBuilder(title, client, role, year, img_src, body_text, tags) {
    let newObj = new Object();
    arrContent.push(newObj);

    let i = arrContent.length - 1;

    arrContent[i].title = title;
    arrContent[i].client = client;
    arrContent[i].role = role;
    arrContent[i].year = year;
    arrContent[i].img_src = img_src;
    arrContent[i].body_text = body_text;
    arrContent[i].tags = tags;
}

objBuilder(
    "Tonic",
    "CANOPY",
    "Back End Dev",
    "2015",
    "./visuals/tonic-snapshot.png",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    ["HTML", "CSS", "JavaScript"]
);

objBuilder(
    "Multi-Post Stories",
    "CANOPY",
    "Back End Dev",
    "2015",
    "./visuals/multi-post-stories-snapshot.png",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    ["HTML", "CSS", "JavaScript"]
);

objBuilder(
    "Tonic",
    "CANOPY",
    "Back End Dev",
    "2015",
    "./visuals/tonic-snapshot-02.png",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    ["HTML", "CSS", "JavaScript"]
);

objBuilder(
    "Multi-Post Stories",
    "CANOPY",
    "Back End Dev",
    "2015",
    "./visuals/multi-post-stories-snapshot-02.png",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    ["HTML", "CSS", "JavaScript"]
);

function htmlBuilder(index) {
    modalPopupContainer.insertAdjacentHTML(
        "afterbegin",
        `<div id="work-card-popup">
      <h2 class="work-title-text">${arrContent[index].title}<i id="close-btn" class="bi bi-x"></i></h2>
      <ul class="client-role-year">
        <li class="work-client">${arrContent[index].client}</li>
        <span class="bullet">•</span>
        <li class="work-role">${arrContent[index].role}</li>
        <span class="bullet">•</span>
        <li class="work-year">${arrContent[index].year}</li>
      </ul>
      <img class="work-snapshot" src="${arrContent[index].img_src}" />
      <div class="after-snapshot">
        <p class="body-text">
        ${arrContent[index].body_text}
        </p>
        <div class="tags-button-container">
          <ul class="tag-list">
            <li class="tag">${arrContent[index].tags[0]}</li>
            <li class="tag">${arrContent[index].tags[1]}</li>
            <li class="tag">${arrContent[index].tags[2]}</li>
          </ul>
          <hr class="work-card-popup-line"></hr>
          <div class="work-buttons-container">
            <a class="button button-popup button-see-live" id="see-live-1">See live
              <i class="bi bi-arrow-up-right-circle"></i></a>
            <a class="button button-popup" id="see-source-1">See source <i class="bi bi-github" style="min-height: 18px"></i></a>
          </div>        
        </div>
      </div>
    </div>`
    );

    // BUTTON INTERACTION IN WORK CARD
    modalPopupContainer.classList.add("show");

    const closeButton = document.querySelector("#work-card-popup #close-btn");
    closeButton.addEventListener("click", () => {
        document.querySelector("body").style.overflow = "auto";
        modalPopupContainer.classList.remove("show");
        modalPopupContainer.innerHTML = "";
    });
}

let buttons = document.querySelectorAll(".work-card .button");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        document.querySelector("body").style.overflow = "hidden";
        htmlBuilder(index);
    });
});

// 1.0 LOCAL STORAGE
//   1.1 Testing for availability
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (error) {
        return (
            error instanceof DOMException &&
            // everything except Firefox
            (error.code === 22 ||
                // Firefox
                error.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                error.name === "QuotaExceededError" ||
                // Firefox
                error.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}

//   1.2 savingData
function saveData() {
    if (storageAvailable("localStorage")) {
        let nameInput = document.getElementById("name-input");
        let emailInput = document.getElementById("email-input");
        let messageInput = document.getElementById("message-box");
        let formObj = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };

        for (let i = 0; i < Object.keys(formObj).length; i++) {
            localStorage.setItem(Object.keys(formObj)[i], Object.values(formObj)[i]);
        }
    } else {
        console.log("ERROR: Localstorage not aviable.");
    }
}

// VALIDATION FORM

let form = document.getElementById("contact-me-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let errorMessage = document.getElementById("error-message");
    let emailInput = document.getElementById("email-input");
    saveData();

    if (emailInput.value !== emailInput.value.toLowerCase()) {
        errorMessage.textContent = "Email address must be written in lowercase";
        errorMessage.style.visibility = "visible";
    } else {
        errorMessage.textContent = "";
        errorMessage.style.visibility = "hidden";
        event.target.submit();
    }
});

window.addEventListener("load", () => {
    let nameInput = document.getElementById("name-input");
    let emailInput = document.getElementById("email-input");
    let messageInput = document.getElementById("message-box");

    nameInput.value = localStorage.getItem("name");
    emailInput.value = localStorage.getItem("email");
    messageInput.value = localStorage.getItem("message");
});
