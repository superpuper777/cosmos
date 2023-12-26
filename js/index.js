(function () {
  const burgerItem = document.querySelector('.header__burger');
  const menu = document.querySelector('.menu');
  const esc = document.querySelector('.header__menu-close');
  const menuLinks = document.querySelectorAll('.menu__link');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('menu--active');
  });
  esc.addEventListener('click', () => {
    menu.classList.remove('menu--active');
  });
  if (window.innerWidth <= 560) {
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', () => {
        menu.classList.remove('menu--active');
      });
    }
  }
})();
