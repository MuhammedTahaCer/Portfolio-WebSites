//change navbar style on scroll

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY >0)
})


//show/hide FAQ's answer

const showhide = document.querySelectorAll('.faq');//All ifadesi önemli

showhide.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        //change icon
        const icon =faq.querySelector('.faq_icon i');

        if(icon.className==='fa-solid fa-question'){
        //<i class="fa-regular fa-face-grin-wide"></i>
            icon.className="fa-regular fa-face-grin-wide";
        } else {
            icon.className="fa-solid fa-question";
        }
    })
    
})


//show hide nav menu at 1024

const menu = document.querySelector(".nav__menu");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

openBtn.addEventListener('click', () => {
    menu.style.display="flex";
    closeBtn.style.display="inline-block";
    openBtn.style.display="none";
})

const closingNavigation = () =>{
    menu.style.display="none";
    closeBtn.style.display="none";
    openBtn.style.display="inline-block";
}

closeBtn.addEventListener('click', closingNavigation)