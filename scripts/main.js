/* SELECTORS */

const nav =     document.querySelector('#header nav')
const toggles = document.querySelectorAll('#header nav .toggle')
const links =   document.querySelectorAll('header nav ul li a')



/* MENU SHOW TOGGLE */
for (const toggle of toggles) {
    toggle.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}
for(link of links){
    link.addEventListener('click', function() {
        nav.classList.remove('show');
    })
}


/* SWIPER */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    Keyboard: true

});

  /* SCROLL REVEAL */
const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 700,
      reset: true
  })

scrollReveal.reveal(`
    #home .text, #home .image,
    #about .text, #about .image,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, { interval: 100 })

/* PAGE SCROLL CHANGE */
function pageScrollTransition() {
    const header =  document.querySelector('#header')
    const navHeight = header.offsetHeight // GET THE HEIGHT OF NAV
    
    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

/* BACK TO TOP */
function backToTop(){       
    const backToTopButton = document.querySelector('.back-to-top')
    
    if (window.scrollY >= 600) {
        backToTopButton.classList.add('show')
    }else {
        backToTopButton.classList.remove('show')
    }
}

/* WHEN SCROLLING */
window.addEventListener('scroll', function() {
    pageScrollTransition()
    backToTop()
})