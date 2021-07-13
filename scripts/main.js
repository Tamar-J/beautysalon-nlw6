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


/* TESTIMONIALS CAROUSEL SLIDER SWIPER */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    Keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }

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

/* ACTIVE VISIBLE MENU */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd) {
            document.querySelector(`#header nav ul li a[href*=${sectionId}]`)
                .classList.add('active')
        }else{
            document.querySelector(`#header nav ul li a[href*=${sectionId}]`)
                .classList.remove('active')
        }
    }
}

/* WHEN SCROLLING */
window.addEventListener('scroll', function() {
    pageScrollTransition()
    backToTop()
    activateMenuAtCurrentSection()
})
