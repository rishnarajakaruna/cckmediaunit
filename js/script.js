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
  if(scrollY > 5) {
    document.querySelector("header").classList.add("header-active");
  } else {
    document.querySelector("header").classList.remove("header-active");
  }

  // Nav-link indicator
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight,
          sectionTop = section.offsetTop - 100;

    let navId = document.querySelector(`.nav-content a[href='#${section.id}']`);
    if(scrollY > sectionTop && scrollY <=  sectionTop + sectionHeight) {
      navId.classList.add("active-navlink");           
    } else {
      navId.classList.remove("active-navlink");     
    }
          
    navId.addEventListener("click", () => {
      navContent.classList.remove("open");
      body.style.overflowY = "scroll";
    })
  })

  // ScrollUp button
  const scrollUpButton = document.querySelector('.scrollUp-button');

  if(scrollY > 250) {
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


//Homepage slider
var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    homeSlider = document.querySelector('.home-slider'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.home-slider .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 7000

nextBtn.onclick = function(){
  showSlider('next')
}

prevBtn.onclick = function(){
  showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
  runningTime.style.animation = 'none'
  runningTime.offsetHeight /* Trigger reflow */
  runningTime.style.animation = null 
  runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
  let sliderItemsDom = list.querySelectorAll('.home-slider .list .item')
  if(type === 'next'){
    list.appendChild(sliderItemsDom[0])
    homeSlider.classList.add('next')
  } else{
    list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
    homeSlider.classList.add('prev')
  }

  clearTimeout(runTimeOut)

  runTimeOut = setTimeout( () => {
    homeSlider.classList.remove('next')
    homeSlider.classList.remove('prev')
  }, timeRunning)


  clearTimeout(runNextAuto)
  runNextAuto = setTimeout(() => {
    nextBtn.click()
  }, timeAutoNext)

  resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()
