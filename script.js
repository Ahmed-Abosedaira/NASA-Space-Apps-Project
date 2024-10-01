const navbar = document.querySelector('#header');
const navbarHeight = navbar.getBoundingClientRect().height;

window.addEventListener('scroll', function() {
      if (window.scrollY > 450) {
        navbar.classList.add('header--dark');  
      } else {
        navbar.classList.remove('header--dark');  
      } 
  });