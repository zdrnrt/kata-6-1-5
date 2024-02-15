function modal() {

    function listener(event) {
        if (event.code == 'Escape')
            modalClose()
    }

    function modalOpen() {
        document.body.classList.add('modal--show');
        document.getElementById(event.target.closest('.js-modal-open').dataset.modal).classList.add('modal--open');

        document.addEventListener('keydown', listener);
        
    }
    
    function modalClose() {
        document.removeEventListener('keydown', listener);
        
        document.body.classList.toggle('modal--show');
        document.querySelector('.modal--open').classList.remove('modal--open');
    }

    let modalOpenBtns = document.querySelectorAll('.js-modal-open');
    for (let btn of modalOpenBtns){
        btn.addEventListener('click', modalOpen);
    }

    let modalCloseBtns = document.querySelectorAll('.js-modal-close');
    for (let btn of modalCloseBtns){
        btn.addEventListener('click', modalClose);
    }

    let modalBg = document.querySelectorAll('.modal__bg');
    for (let bg of modalBg){
        bg.addEventListener('click', modalClose);
    }

}

(function(){
    modal();

})();
