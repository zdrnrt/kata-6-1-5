
function mainMenu() {
    document.body.classList.toggle('aside--open');
}

let open = document.querySelector('.js-menu-open');
let close = document.querySelector('.js-menu-close');

open.addEventListener('click', mainMenu);
close.addEventListener('click', mainMenu);