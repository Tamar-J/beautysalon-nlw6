/* SELECTORS */
const header =  document.querySelector('#header')
const nav =     document.querySelector('#header nav')
const toggles = document.querySelectorAll('#header nav .toggle')
const links =   document.querySelectorAll('header nav ul li a')

const navHeight = header.offsetHeight // GET THE HEIGHT OF NAV

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

/* PAGE SCROLL CHANGE */
window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})