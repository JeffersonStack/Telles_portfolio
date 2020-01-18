(function() {
  "use strict";
  // Navbar Mobile

  // DOM Elements
  let buttonMobile = document.querySelector(".navbar-button");
  let displayMobile = document.querySelector(".navbar-menu");
  let openNavbar = false;

  buttonMobile.addEventListener("click", navbarMobile);
  function navbarMobile() {
    if (!openNavbar) {
      buttonMobile.classList.add("close");
      displayMobile.classList.add("show");

      openNavbar = true;
    } else {
      buttonMobile.classList.remove("close");
      displayMobile.classList.remove("show");

      openNavbar = false;
    }
  }
})();
