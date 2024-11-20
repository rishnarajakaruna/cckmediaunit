// Nav Open/Close
const body = document.querySelector('body'),
  navContent = body.querySelector('.nav-content'),
  navOpenButton = body.querySelector('.navOpen-button'),
  navCloseButton = navContent.querySelector('.navClose-button');

if(navContent && navOpenButton) {
  navOpenButton.addEventListener("click", () =>{
    navContent.classList.add("open");
    body.style.overflowY = "hidden";
  })
}

if(navContent && navCloseButton) {
  navCloseButton.addEventListener("click", () =>{
    navContent.classList.remove("open");
    body.style.overflowY = "scroll";
  })
}

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  // Change header design
  if(scrollY > 10) {
    document.querySelector("header").classList.add("header-active");
  } else {
    document.querySelector("header").classList.remove("header-active");
  }

  // ScrollUp button
  const scrollUpButton = document.querySelector('.scrollUp-button');

  if(scrollY > 10) {
    scrollUpButton.classList.add("scrollUpButton-active");
  } else {
    scrollUpButton.classList.remove("scrollUpButton-active");
  }

})  

// Swiper js
// var swiper = new Swiper(".swiper", {
//   spaceBetween: 24,
//   slidesPerView: "auto",
//   grabCursor: true,
//   loop: 'true',

//   pagination: {
//     el: ".swiper-pagination",
//     dynamicBullets: true,
//     clickable: true,
//   },

//   breakpoints: {
//     992: {
//       spaceBetween: 50,
//     },
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
  
  
// Scroll-Reveal animation
  const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 1500,
    delay: 400,
  })
  
sr.reveal(`.section-title, .section-description, .explore-container, .quizzes-container, .footer-content, .footer-links`, {interval:100,})

// sr.reveal(``, {origin: 'left'})
// sr.reveal(``, {origin: 'right'})