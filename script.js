$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 500) { 
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });
});


const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const navbar = document.getElementsByClassName('navbar')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    navbar.classList.toggle('navbarHeight');
    
});

navbarLinks.addEventListener('click', () => {
    navbarLinks.classList.remove('active');
    navbar.classList.remove('navbarHeight');
});
