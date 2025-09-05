document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  const navList = document.getElementById("main-nav-list");

  function isMobile() {
    return window.matchMedia("(max-width: 480px)").matches;
  }

  function closeMenu() {
    nav.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    nav.setAttribute("aria-expanded", "true");
    menuBtn.setAttribute("aria-expanded", "true");
  }

  menuBtn.addEventListener("click", function () {
    if (!isMobile()) return;
    const expanded = nav.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  });

  navList.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (isMobile()) closeMenu();
    });
  });

  window.addEventListener("resize", function () {
    if (!isMobile()) closeMenu();
  });

  closeMenu(); // asegúrate que al cargar esté cerrado
});
