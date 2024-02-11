function aside(){
    function asideToggle() {
        document.body.classList.toggle('aside--open');
    }

    let asideToggleBtns = document.querySelectorAll('.js-aside-toggle');
    let asideBg = document.querySelector('.aside__bg');

    for (let btn of asideToggleBtns){
        btn.addEventListener('click', asideToggle);
    }

    asideBg.addEventListener('click', asideToggle);
}

(function(){
    aside();
})();