
function brandMore(){
    if (!!document.querySelector('.js-brand-more')){
        let brandsMoreBtn = document.querySelector('.js-brand-more');
        brandsMoreBtn.addEventListener('click', function (){this.closest('.brand-list').classList.toggle('brand-list--open')});
    }
}

(function(){
    brandMore();
})()