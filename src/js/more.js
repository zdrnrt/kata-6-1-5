import '../scss/component/_more.scss'

function more(){

    function moreOpen(event){
        event.target.closest('.js-more').classList.toggle('js-more--open');
    };
    if (!!document.querySelector('.js-more__btn') && window.innerWidth > 767){
        let brandsMoreBtns = document.querySelectorAll('.js-more__btn');
        for (let moreBtn of brandsMoreBtns){
            moreBtn.addEventListener('click', moreOpen);
        }
    }
}

(function(){
    more();
})()