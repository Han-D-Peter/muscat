//주관식
const nameinput = document.getElementById("nameinput");
const urlinput = document.getElementById("urlinput");
const tagsinput = document.getElementById("tagsinput");
const outlineinput = document.getElementById("outlineinput");
//input box(객관식)
const jobsupportinput = document.getElementById("jobsupportinput");
const siteinput = document.getElementById("siteinput");
const stayinput = document.getElementById("stayinput");
const economyinput = document.getElementById("economyinput");
const startupinput = document.getElementById("startupinput");
const scholarinput = document.getElementById("scholarinput");
const eduinput = document.getElementById("eduinput");
const rangeinput = document.getElementById("rangeinput");
const whereinput = document.getElementById("whereinput");
const orgainput = document.getElementById("orgainput");
const ratinginput = document.getElementById("ratinginput");
//대문항
const jobsupportSelection = document.querySelector(
  ".formSelect__jobsupport-selection"
);
const siteSelection = document.querySelector(".formSelect__site-selection");
const staySelection = document.querySelector(".formSelect__stay-selection");
const economySelection = document.querySelector(
  ".formSelect__economy-selection"
);
const startupSelection = document.querySelector(
  ".formSelect__startup-selection"
);
const scholarSelection = document.querySelector(
  ".formSelect__scholar-selection"
);
const eduSelection = document.querySelector(".formSelect__edu-selection");
//임시로 사용중지
//const rangeSelection = document.querySelector(".formSelect__range-selection");
const ratingSelection = document.querySelector(".formSelect__rating-selection");

const jobsupportClick = e => {
  const message = e.target.innerHTML;
  jobsupportinput.value = message;
};

const siteClick = e => {
  const message = e.target.innerHTML;
  siteinput.value = message;
};

const stayClick = e => {
  const message = e.target.innerHTML;
  stayinput.value = message;
};
const economyClick = e => {
  const message = e.target.innerHTML;
  economyinput.value = message;
};
const startupClick = e => {
  const message = e.target.innerHTML;
  startupinput.value = message;
};
const scholarClick = e => {
  const message = e.target.innerHTML;
  scholarinput.value = message;
};
const eduClick = e => {
  const message = e.target.innerHTML;
  eduinput.value = message;
};
const rangeClick = e => {
  const message = e.target.innerHTML;
  rangeinput.value = message;
};
const ratingClick = e => {
  const message = e.target.innerHTML;
  ratinginput.value = message;
};

function init() {
  jobsupportSelection.addEventListener("click", jobsupportClick);
  siteSelection.addEventListener("click", siteClick);
  staySelection.addEventListener("click", stayClick);
  economySelection.addEventListener("click", economyClick);
  startupSelection.addEventListener("click", startupClick);
  scholarSelection.addEventListener("click", scholarClick);
  eduSelection.addEventListener("click", eduClick);
  //rangeSelection.addEventListener("click", rangeClick);
  ratingSelection.addEventListener("click", ratingClick);
}

if (nameinput) {
  init();
}
