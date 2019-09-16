// JS Goes here - ES6 supported
import './css/main.scss';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { init } from './lib/home-page-animation';

const getVisibleMenu = () => {
  return document.getElementsByClassName('header__brand-menu display')[0];
};

const whenDocumentLoaded = function() {
  init();

  const menuButtons = document.querySelectorAll('[data-menu-open]');
  const menuToggle = document.getElementById('drawer-toggle');
  const menuBodies = document.querySelectorAll('[data-menu-id]');

  const isMobile = window.innerWidth <= 756;

  menuToggle.addEventListener('click', () => {
    const drawer = document.getElementById('drawer');
    const drawerButton = document.getElementById('drawer-toggle-label');
    const isOpened = drawer.classList.contains('visible');

    if (isOpened) {
      const drawerMenu = getVisibleMenu();
      clearAllBodyScrollLocks(drawerMenu);
    } else {
      disableBodyScroll(drawer);
    }

    drawer.classList.toggle('visible');
    drawerButton.classList.toggle('hamburger-icon_close');

    for (const menu of menuBodies) {
      menu.classList.remove('display');
    }
  });

  for (const button of menuButtons) {
    const value = button.dataset.menuOpen;
    const menu = document.querySelector('[data-menu-id=' + value + ']');

    const callback = (event) => {
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
