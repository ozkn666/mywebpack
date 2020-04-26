export default function () {
  const btn = document.querySelector('.p-hamburger-btn');
  const menu = document.querySelector('.p-hamburger-menu');
  const main = document.querySelector('.l-main');
  
  btn.addEventListener('click', function () {
    menu.classList.toggle('p-hamburger-menu__open');
    main.classList.toggle('p-hamburger-btn__open');
  });
}
