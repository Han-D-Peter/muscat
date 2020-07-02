const headMenu = document.getElementById("head-menu");
const popupBox = document.getElementById("header__popupMenu-box");

const openPopup = () => {
  if (popupBox.style.display === "none") {
    popupBox.style.display = "block";
  } else {
    popupBox.style.display = "none";
  }
};

const init = () => {
  headMenu.addEventListener("click", openPopup);
};

if (headMenu) {
  init();
}
