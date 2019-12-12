// JS Goes here - ES6 supported
import './css/main.scss';
import { initializeHomePageAnimation } from './lib/home-page-animation';

const whenDocumentLoaded = function() {
  if (document.location.pathname === '/') {
    initializeHomePageAnimation();
  }

  const header = document.getElementById('header');
  const menuButtons = document.querySelectorAll('[data-menu-open]');
  const drawer = document.getElementById('drawer');
  const menuToggle = document.getElementById('drawer-toggle');
  const menuBodies = document.querySelectorAll('[data-menu-id]');

  const isMobile = ('ontouchstart' in window);
  const clickEvent = isMobile ? 'touchend' : 'click';

  const closeAllMenus = () => {
    header.classList.remove('menu-opened');

    menuBodies.forEach((menu) => {
      menu.classList.remove('display');
    });
  };

  menuToggle.addEventListener('click', () => {
    const drawerButton = document.getElementById('drawer-toggle-label');

    document.body.classList.toggle('drawer-opened');

    drawerButton.classList.toggle('hamburger-icon_close');

    for (const menu of menuBodies) {
      menu.classList.remove('display');
    }

    drawer.classList.remove('d-none');
  });

  // Close menu on iPad when user clicks outside
  if (isMobile) {
    window.addEventListener(clickEvent, (e) => {
      const openedMenus = document.getElementsByClassName('header__brand-menu display');
      const clickedOnDrawer = document.getElementById('drawer').contains(e.target);
      const clickedOnOpenedMenu = Array.prototype.some.call(openedMenus, (menu) => menu.contains(e.target));

      if (openedMenus && !clickedOnDrawer && !clickedOnOpenedMenu) {
        closeAllMenus();
      }
    });
  }

  menuButtons.forEach((button) => {
    const value = button.dataset.menuOpen;
    const menu = document.querySelector('[data-menu-id=' + value + ']');

    const callback = (event) => {
      if (isMobile) {
        closeAllMenus();
        if (!menu.classList.contains('display')) {
          menu.classList.toggle('display');
          header.classList.add('menu-opened');
        }
      } else {
        menu.classList.toggle('display');
      }
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
  });
};

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  whenDocumentLoaded();
} else {
  document.addEventListener('DOMContentLoaded', whenDocumentLoaded);
}
