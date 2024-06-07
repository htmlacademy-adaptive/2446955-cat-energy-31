/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-header__nav');
const navToggle = document.querySelector('.nav__toggle');

navMain.classList.remove('main-nav--nojs');

if (navMain.classList.contains ('nav--opened')) {
  navMain.classList.remove('nav--opened');
  navMain.classList.add('nav--closed');
}

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('nav-closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});
