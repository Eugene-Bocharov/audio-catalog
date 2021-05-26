const btn = document.querySelector('#navToggler');
const navMenu = document.querySelector('.nav__menu');

btn.addEventListener('click', () => {
  navMenu.classList.toggle('nav__menu_open');
});
