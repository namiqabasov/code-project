const myul = document.querySelector(".myul");
const bars = document.querySelector(".bars");
const remove = document.querySelector(".remove");

bars.addEventListener("click", function () {
  myul.classList.add("activebar");
});
remove.addEventListener("click", function () {
  myul.classList.remove("activebar");
});

//input ucun

const Searchi = document.querySelector(".Searchi");
const myinput = document.querySelector(".myinput");
const inputremov = document.querySelector(".inputremov");
Searchi.addEventListener("click", function () {
  myinput.classList.add("activinput");
});
inputremov.addEventListener("click", function () {
  myinput.classList.remove("activinput");
});
