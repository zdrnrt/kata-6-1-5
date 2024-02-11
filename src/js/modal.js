
function modalOpen() {
    console.log(event.target);
    document.body.classList.add('modal--show');
    document.getElementById(event.target.closest('.js-modal-open').dataset.modal).classList.add('modal--open');
}

function modalClose() {
    document.body.classList.toggle('modal--show');
    console.log(document.querySelector('.modal--open'));
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
