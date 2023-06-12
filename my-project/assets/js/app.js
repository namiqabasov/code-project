const myul = document.querySelector(".myul");
const bars = document.querySelector(".bars");
const remove = document.querySelector(".remove");
const hamburger = document.querySelector(".hamburger");

console.log(window.location.href);

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

let basget_leng = document.querySelector(".basget_leng");

let basket_arr = [];

basket_arr = JSON.parse(localStorage.getItem("basket"));

basget_leng.innerHTML = basket_arr.length;

let wishlist_leng = document.querySelector(".wishlist_leng");

let wishlist_arr = [];
wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));
wishlist_leng.innerHTML = wishlist_arr.length;

//data ucun localstorage
window.onload = function () {
  if (localStorage.getItem("basket") !== null) {
    basket_arr = JSON.parse(localStorage.getItem("basket"));
  }
  if (localStorage.getItem("wishlist") !== null) {
    wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));
  }
};

function cretElement(data) {
  // createelement
  const carddiv = document.createElement("div");
  const imgdiv = document.createElement("div");
  const shopdiv = document.createElement("div");

  const myimg = document.createElement("img");

  const btndiv = document.createElement("div");

  const btnsee = document.createElement("a");
  const btnbasget = document.createElement("button");
  const btnwishlist = document.createElement("button");

  btnwishlist.classList.add("wislis");
  btnwishlist.innerHTML = `<i class="fa-regular fa-heart"></i>`;

  btnbasget.addEventListener("click", function () {
    if (basket_arr.find((x) => x.id == data.id) === undefined) {
      basket_arr.push({ ...data, count: 1 });
    }
    localStorage.setItem("basket", JSON.stringify(basket_arr));
    window.location.reload();
  });

  if (wishlist_arr.find((x) => x.id == data.id) !== undefined) {
    btnwishlist.innerHTML = `<i class="fa-solid fa-heart"></i>`;
  }

  btnwishlist.addEventListener("click", () => {
    if (wishlist_arr.find((x) => x.id == data.id) === undefined) {
      wishlist_arr.push(data);
      btnwishlist.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    } else {
      wishlist_arr = wishlist_arr.filter((x) => x.id !== data.id);
      btnwishlist.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
    window.location.reload();
  });

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
  btnsee.href = `http://127.0.0.1:5501/my-project/itemabout.html#${data.id}`;

  btnbasget.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>
Select Options`;
  p.innerText = data.name;
  h2.innerText = data.price + "$";

  // append
  pdiv.append(p, h2);
  shopdiv.append(myp, pdiv);

  btndiv.append(btnsee, btnbasget);
  imgdiv.append(myimg, btnwishlist, btndiv);
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

  const btnsee = document.createElement("a");
  const btnbasget = document.createElement("button");
  const btnwishlist = document.createElement("button");

  btnwishlist.classList.add("wislis");
  btnwishlist.innerHTML = `<i class="fa-regular fa-heart"></i>`;
  if (wishlist_arr.find((x) => x.id == data.id) !== undefined) {
    btnwishlist.innerHTML = `<i class="fa-solid fa-heart"></i>`;
  }
  btnbasget.addEventListener("click", function () {
    if (basket_arr.find((x) => x.id == data.id) === undefined) {
      basket_arr.push({ ...data, count: 1 });
    }
    localStorage.setItem("basket", JSON.stringify(basket_arr));
    window.location.reload();
  });
  btnwishlist.addEventListener("click", () => {
    if (wishlist_arr.find((x) => x.id == data.id) === undefined) {
      wishlist_arr.push(data);
      btnwishlist.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    } else {
      wishlist_arr = wishlist_arr.filter((x) => x.id !== data.id);
      btnwishlist.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
    window.location.reload();
  });

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
  btnsee.href = `http://127.0.0.1:5501/my-project/itemabout.html#${data.id}`;

  btnbasget.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>
Select Options`;
  p.innerText = data.name;
  h2.innerText = data.price + "$";

  // append
  carddiv.append(imgdiv, shopdiv);
  pdiv.append(p, h2);
  shopdiv.append(myp, pdiv);

  btndiv.append(btnsee, btnbasget);
  imgdiv.append(myimg, btnwishlist, btndiv);

  autoplay.append(carddiv);
}

myfetch();
myfetch1();
