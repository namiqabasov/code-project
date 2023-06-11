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

// mocapi hissesi
async function myfetch() {
  const respon = await fetch(`http://localhost:3000/post`);
  const data = await respon.json();

  data.forEach((element) => {
    cretElement(element);
  });
}
async function myfetch1() {
  const respon = await fetch(`http://localhost:3000/post`);
  const data = await respon.json();

  const nevdata = await data.forEach((element) => {
    cretElement1(element);
  });

  $(".autoplay").slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
}
const mycards = document.querySelector(".mycards");
const autoplay = document.querySelector(".autoplay");
function cretElement(data) {
  // createelement
  const carddiv = document.createElement("div");
  const imgdiv = document.createElement("div");
  const shopdiv = document.createElement("div");

  const myimg = document.createElement("img");

  const btndiv = document.createElement("div");

  const btnsee = document.createElement("button");
  const btnbasget = document.createElement("button");
  const myp = document.createElement("p");
  myp.innerText = "";
  if (data.sale !== "false") {
    myp.innerText = "SALE!";
    myp.classList.add("sale");
  }

  const pdiv = document.createElement("div");
  const p = document.createElement("p");
  const h2 = document.createElement("h2");

  // classname
  carddiv.classList.add("card");
  imgdiv.classList.add("img");
  shopdiv.classList.add("shop");
  btndiv.classList.add("divbtn");
  btnsee.classList.add("see");
  btnbasget.classList.add("basket");
  pdiv.classList.add("ptag");

  // innertext

  myimg.src = data.img_src;
  btnsee.innerHTML = `<i class="fa-solid fa-eye"></i> View Details`;
  btnbasget.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>
Select Options`;
  p.innerText = data.name;
  h2.innerText = data.price;

  // append
  pdiv.append(p, h2);
  shopdiv.append(myp, pdiv);

  btndiv.append(btnsee, btnbasget);
  imgdiv.append(myimg, btndiv);
  carddiv.append(imgdiv, shopdiv);
  mycards.append(carddiv);
}
function cretElement1(data) {
  // createelement
  const carddiv = document.createElement("div");
  const imgdiv = document.createElement("div");
  const shopdiv = document.createElement("div");

  const myimg = document.createElement("img");

  const btndiv = document.createElement("div");

  const btnsee = document.createElement("button");
  const btnbasget = document.createElement("button");
  const myp = document.createElement("p");
  myp.innerText = "";
  if (data.sale !== "false") {
    myp.innerText = "SALE!";
    myp.classList.add("sale");
  }

  const pdiv = document.createElement("div");
  const p = document.createElement("p");
  const h2 = document.createElement("h2");

  // classname
  carddiv.classList.add("card");

  imgdiv.classList.add("img");
  shopdiv.classList.add("shop");
  btndiv.classList.add("divbtn");
  btnsee.classList.add("see");
  btnbasget.classList.add("basket");
  pdiv.classList.add("ptag");

  // innertext

  myimg.src = data.img_src;
  btnsee.innerHTML = `<i class="fa-solid fa-eye"></i> View Details`;
  btnbasget.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>
Select Options`;
  p.innerText = data.name;
  h2.innerText = data.price;

  // append
  carddiv.append(imgdiv, shopdiv);
  pdiv.append(p, h2);
  shopdiv.append(myp, pdiv);

  btndiv.append(btnsee, btnbasget);
  imgdiv.append(myimg, btndiv);

  autoplay.append(carddiv);
}

myfetch();
myfetch1();
