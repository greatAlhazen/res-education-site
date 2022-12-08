const menu = document.querySelector(".fa-bars");
const navbar = document.querySelector(".nav-list");
const link = document.querySelectorAll(".nav-list li a");

menu.addEventListener("click", function () {
  menu.classList.toggle("fa-close");
  navbar.classList.toggle("active");
});

link.forEach((item) => {
  item.addEventListener("click", function () {
    navbar.classList.remove("active");
    menu.classList.remove("fa-close");
    activateLink(item);
  });
});

const activateLink = (value) => {
  link.forEach((item) => {
    item.classList.remove("active");
  });
  value.classList.toggle("active");
};
