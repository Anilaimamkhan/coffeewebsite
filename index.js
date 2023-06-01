let search_form = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
    search_form.classList.toggle("active") ;
    cart_item_container.classList.remove("active") ;
    nav.classList.remove("active");
}


let cart_item_container = document.querySelector(".cart-item-container");
document.querySelector("#cart-btn").onclick = () => {
    cart_item_container.classList.toggle("active") ;
    search_form.classList.remove("active") ;
    nav.classList.remove("active");
}


let nav = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
    nav.classList.toggle("active");
    search_form.classList.remove("active") ;
    cart_item_container.classList.remove("active") ;
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "3",
    spaceBetween: 30,
    autoplay:{
        delay:2500,
// disableOnInteraction:false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
       
        320: {
          slidesPerView: 1,
        //   spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
        //   spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
        //   spaceBetween: 20,
        },
      },
  });




//   console.log("skndk");
// header scroll start
let header = document.querySelector("header");
let top_scroll = document.querySelector(".fa-arrow-up");
const fun = () => {
    header.scrollIntoView({behavior:"smooth"});
}

top_scroll.addEventListener("click", fun);



window.onscroll =()=>{
    search_form.classList.remove("active") ;
    cart_item_container.classList.remove("active") ;
    nav.classList.remove("active");

}