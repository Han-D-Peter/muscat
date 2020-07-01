const headMenu = document.getElementById("head-menu");
const popupBox = document.getElementById("header__popupMenu-box");
const header = document.querySelector(".header");

let popupTogle = true;

const openPopup = () => {
  if (popupTogle) {
    popupBox.style.display = "block";
    popupTogle = false;
  } else {
    popupBox.style.display = "none";
    popupTogle = true;
  }
};

const init = () => {
  headMenu.addEventListener("click", openPopup);
};

init();
