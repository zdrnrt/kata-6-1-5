import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';



if (window.innerWidth < 768 && (!!document.querySelector('.js-brand-slider') || !!document.querySelector('.js-tech-slider')) ){
    if (!!document.querySelector('.js-brand-slider')){
        const brandSlider = new Swiper('.js-brand-slider', {
            modules: [Navigation, Pagination],
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
    };
    
    if (!!document.querySelector('.js-tech-slider')){
        const techSlider = new Swiper('.js-tech-slider', {
            modules: [Navigation, Pagination],
            speed: 400,
            spaceBetween: 16,
            centeredSlides: true,
            centerInsufficientSlides: true,
            slidePerView: 0.5,
            pagination: {
                el: '.js-tech-slider-nav',
                type: 'bullets',
                bulletActiveClass: 'tech-nav__btn--active',
                bulletClass: 'tech-nav__btn',
                bulletElement: 'button',
                clickable: true
            }
        });
    }
}