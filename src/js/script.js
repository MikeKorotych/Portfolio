const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    cloceElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

cloceElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const levels = document.querySelectorAll('.level__item-value'),
    lines = document.querySelectorAll('.level__item-bar-fill');

levels.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});