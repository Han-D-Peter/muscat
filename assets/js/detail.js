const backpage = document.getElementById("detail__backPage");

const moveBackpage = () => {
  window.history.back();
};

const init = () => {
  backpage.addEventListener("click", moveBackpage);
};

if (backpage) {
  init();
}
