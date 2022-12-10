const menu = document.querySelector(".fa-bars");
const navbar = document.querySelector(".nav-list");
const link = document.querySelectorAll(".nav-list li a");
const sections = document.querySelectorAll('section')


/* link activate */
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


/* link activate when window scroll load */

window.addEventListener('scroll',function(){
    sections.forEach((item) =>{
      const height = item.clientHeight;
      const offset = item.getBoundingClientRect().top + this.window.scrollY - 200;
      const top = window.scrollY;
      if(top >= offset && top < offset + height){
        const id = item.getAttribute('id');
        const element =document.querySelector('[href="#' + id + '"]');
        activateLink(element);
      }
    })
})



/* custom activate link */
const activateLink = (value) => {
  link.forEach((item) => {
    item.classList.remove("active");
  });
  value.classList.toggle("active");
};
