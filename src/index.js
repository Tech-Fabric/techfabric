// JS Goes here - ES6 supported
import './css/main.scss';
import { initializeHomePageAnimation } from './lib/home-page-animation';

const whenDocumentLoaded = function() {
  if (document.location.pathname === '/') {
    initializeHomePageAnimation();
  }

  const menuButtons = document.querySelectorAll('[data-menu-open]');
  const drawer = document.getElementById('drawer');
  const menuToggle = document.getElementById('drawer-toggle');
  const menuBodies = document.querySelectorAll('[data-menu-id]');

  const isMobile = window.innerWidth <= 756;

  menuToggle.addEventListener('click', () => {
    const drawerButton = document.getElementById('drawer-toggle-label');

    document.body.classList.toggle('drawer-opened');

    drawerButton.classList.toggle('hamburger-icon_close');

    for (const menu of menuBodies) {
      menu.classList.remove('display');
    }

    drawer.classList.remove('d-none');
  });

  for (const button of menuButtons) {
    const value = button.dataset.menuOpen;
    const menu = document.querySelector('[data-menu-id=' + value + ']');

    const callback = (event) => {
      isMobile && drawer.classList.toggle('d-none');
      menu.classList.toggle('display');
    };

    const eventName = isMobile ? 'click' : 'mouseenter';

    button.addEventListener(eventName, callback);

    if (!isMobile) {
      button.addEventListener('mouseleave', callback);
    }

    menu.addEventListener(eventName, callback);

    if (!isMobile) {
      menu.addEventListener('mouseleave', callback);
    }
  }
};

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  whenDocumentLoaded();
} else {
  document.addEventListener('DOMContentLoaded', whenDocumentLoaded);
}
