// JS Goes here - ES6 supported

import "./css/main.scss";

const whenDocumentLoaded = function() {
  const menuButtons = document.querySelectorAll("[data-menu-open]");

  for (const button of menuButtons) {
    const value = button.dataset.menuOpen;
    const menu = document.querySelector("[data-menu-id=" + value + "]");

    const callback = () => {
      menu.classList.toggle("display");
    };

    button.addEventListener("mouseenter", callback);
    button.addEventListener("mouseleave", callback);

    menu.addEventListener("mouseenter", callback);
    menu.addEventListener("mouseleave", callback);
  }
};

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  whenDocumentLoaded();
} else {
  document.addEventListener("DOMContentLoaded", whenDocumentLoaded);
}
