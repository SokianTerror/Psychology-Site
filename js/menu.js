document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector("nav ul");
  const links = document.querySelectorAll("nav ul a");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("open");
      hamburger.classList.toggle("active");
    });

    links.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        hamburger.classList.remove("active");
      });
    });
  }
});
