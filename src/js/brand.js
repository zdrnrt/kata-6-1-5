import Swiper from './libs/swiper-bundle.min.js';

function brandMore(){
    if (!!document.querySelector('.js-brand-more')){
        let brandsMoreBtn = document.querySelector('.js-brand-more');
        brandsMoreBtn.addEventListener('click', function (){this.closest('.brand-list').classList.toggle('brand-list--open')});
    }
}

(function() {
    brandMore();
    if (window.innerWidth < 768 && !!document.querySelector('.js-brand-slider')){
        const swiper = new Swiper('.js-brand-slider', {
            speed: 400,
            spaceBetween: 16,
            centeredSlides: true,
            centerInsufficientSlides: true,
            slidePerView: 0.5,
            pagination: {
                el: '.js-brand-slider-nav',
                type: 'bullets',
                bulletActiveClass: 'brand-nav__btn--active',
                bulletClass: 'brand-nav__btn',
                bulletElement: 'button',
                clickable: true
            }
        });
    }
}())