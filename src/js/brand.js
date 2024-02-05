import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

if (window.innerWidth < 768 && !!document.querySelector('.js-brand-slider')){
    const swiper = new Swiper('.js-brand-slider', {
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
}