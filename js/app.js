const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const navLinksLi = document.querySelectorAll('.nav-links li')


var initialSrc = "images/logo-white.png";
var scrollSrc = "images/logo.png";


window.addEventListener('scroll', () => {
    if(this.scrollY >= 100) {
        navbar.classList.add('scrolled'),
        $(".logo").attr("src", scrollSrc);
    } else {
        navbar.classList.remove('scrolled'),
        $(".logo").attr("src", initialSrc);
    }
})



hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})

navLinksLi.forEach(li => li.addEventListener('click', ()=> {
    navLinksLi.forEach(li => li.classList.remove('active'))
    li.classList.add('active')

    hamburger.classList.remove('active')
    navLinks.classList.remove('active')

}))


// Typed js
var options = {
    strings: [
        'Welcome To My Portfolio', 
        'This is M. Taha'
    ],
    typeSpeed: 40,
    loop: true,
    loopCount: Infinity,
    typeSpeed: 10,
    backDelay: 2000,
  };
  
var typed = new Typed('#hero-titles', options);

// AOS
AOS.init();