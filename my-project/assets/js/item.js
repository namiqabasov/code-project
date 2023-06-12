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

//animation
const Discover = document.querySelector(".Discover");
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  Discover.style.backgroundPositionX = -scrollPosition + "px";
});

// nav position

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

//basget ucun
let wishlist_leng = document.querySelector(".wishlist_leng");

let wishlist_arr = [];
wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));
wishlist_leng.innerHTML = wishlist_arr.length;

let basget_leng = document.querySelector(".basget_leng");

let basket_arr = [];

basket_arr = JSON.parse(localStorage.getItem("basket"));

basget_leng.innerHTML = basket_arr.length;
//basget ucun

// fetch ucun

const myseebox = document.querySelector(".myseebox");

async function myfetchid() {
  const response = await fetch(
    `http://localhost:3000/post/${window.location.hash.slice(1)}`
  );
  const data = await response.json();

  mycreate(data);
}

function mycreate(data) {
  const divimg = document.createElement("div");
  const divabout = document.createElement("div");
  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const btndiv = document.createElement("div");
  const input = document.createElement("input");
  const btn = document.createElement("button");

  input.addEventListener("click", function () {
    if (Number(input.value) <= 1) {
      input.value = 1;
    }
  });

  btn.addEventListener("click", function () {
    if (basket_arr.find((x) => x.id == data.id) === undefined) {
      basket_arr.push({ ...data, count: Number(input.value) });
    }
    localStorage.setItem("basket", JSON.stringify(basket_arr));
    window.location.reload();
  });

  divimg.classList.add("myimg");
  divabout.classList.add("about");
  btndiv.classList.add("impbtn");

  img.src = data.img_src;
  h2.innerText = data.name;
  h3.innerText = data.price + "$";
  p.innerText = data.command;
  input.type = "number";
  input.value = 1;
  btn.innerText = "ADD TO CART";

  divimg.appendChild(img);
  btndiv.append(input, btn);
  divabout.append(h2, h3, p, btndiv);

  myseebox.append(divimg, divabout);
}

myfetchid();
