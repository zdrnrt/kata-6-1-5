import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

function slider(){
    if (!!document.querySelector('.js-brand-slider')){
        const brandSlider = new Swiper('.js-brand-slider', {
            modules: [Navigation, Pagination],
            slidesPerView: 'auto',
            spaceBetween: 16,
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
            slidesPerView: 'auto',
            spaceBetween: 16,
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

    if (!!document.querySelector('.js-price-slider')){
        const priceSlider = new Swiper('.js-price-slider', {
            modules: [Navigation, Pagination],
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.js-price-slider-nav',
                type: 'bullets',
                bulletActiveClass: 'price-nav__btn--active',
                bulletClass: 'price-nav__btn',
                bulletElement: 'button',
                clickable: true
            }
        });
    }
}

(function(){
    if (window.innerWidth < 768 ){
        slider();
    }
})();