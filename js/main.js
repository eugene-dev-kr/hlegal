document.addEventListener('DOMContentLoaded', function() {


    //MOBILE MENU
    const burgerBtn = document.querySelector('.header__burger');
    const mobileMenu = document.querySelector('.mobile__nav');
    const closeMobileManu = document.querySelector('.mobile__nav-btn-close');
    burgerBtn.addEventListener('click', ()=> {
        mobileMenu.classList.add('visible');
    });
    closeMobileManu.addEventListener('click', ()=> {
        mobileMenu.classList.remove('visible');
    })


    //SWITCHED HEADER LANG
    const langSwitchBtn = document.querySelectorAll('.header__top-langs-switch');
    langSwitchBtn.forEach(button => {
        button.addEventListener('click',()=> {
            langSwitchBtn.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        })
    })

    //MOBILE CURRENT PAGE MENU
    const mobileMenuBtn = document.querySelectorAll('.mobile__nav-link');
    mobileMenuBtn.forEach(button => {
        button.addEventListener('click',()=> {
            mobileMenuBtn.forEach(btn => btn.classList.remove('current'));
            button.classList.add('current');
        })
    })


    // SERVICES TAB
    const servicesTabBtn = document.querySelectorAll('.hero__item');
    const servicesTabContent = document.querySelectorAll('.hero__content-item');
    servicesTabBtn.forEach((button, index) => {
       
        button.addEventListener('click', () => {
            
            servicesTabBtn.forEach(btn => {
                btn.classList.remove('title-gradient');
            });
            button.classList.add('title-gradient');

            servicesTabContent.forEach(item => {
                item.classList.remove('active');
            })
            servicesTabContent[index].classList.add('active');
        })
    })
})