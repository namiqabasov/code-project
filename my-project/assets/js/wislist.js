// nav position
const myul = document.querySelector(".myul");
const bars = document.querySelector(".bars");
const remove = document.querySelector(".remove");
const hamburger = document.querySelector(".hamburger");

bars.addEventListener("click", function () {
  myul.classList.add("activebar");
  hamburger.classList.add("is-active");
});
remove.addEventListener("click", function () {
  myul.classList.remove("activebar");
  hamburger.classList.remove("is-active");
});

const navbar = document.querySelector("nav");
function navscrol() {
  let myscrol = window.scrollY;
  if (myscrol < 300) {
    navbar.classList.remove("navbox");
  } else {
    navbar.classList.add("navbox");
  }
}
window.addEventListener("scroll", navscrol);

// nav position
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

//input ucun
let basget_leng = document.querySelector(".basget_leng");

let basket_arr = [];

basket_arr = JSON.parse(localStorage.getItem("basket"));

basget_leng.innerHTML = basket_arr.length;

//wishlist ucun
const Wishlistcard = document.querySelector(".Wishlistcard");

let wishlist_leng = document.querySelector(".wishlist_leng");

let wishlist_arr = [];
wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));
wishlist_leng.innerHTML = wishlist_arr.length;

wishlist_arr.forEach((element) => {
  const mydiv = document.createElement("div");
  const creddiv = document.createElement("div");
  const imgdiv = document.createElement("div");
  const myimg = document.createElement("img");
  const h3 = document.createElement("h3");
  const delet = document.createElement("button");

  imgdiv.className = "imgdiv";
  mydiv.classList.add("card");
  myimg.src = element.img_src;
  h3.innerHTML = element.name;
  delet.innerHTML = "X";

  //delete
  delet.addEventListener("click", () => {
    console.log(element.id);
    wishlist_arr = wishlist_arr.filter((x) => x.id !== element.id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
    window.location.reload();
    btn.parentElement.parentElement.remove();
  });

  creddiv.classList.add("wishlist_item");
  imgdiv.append(myimg);
  creddiv.append(h3, delet);
  mydiv.append(creddiv, imgdiv);
  Wishlistcard.append(mydiv);
});
