window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementsByClassName("navbar").classList.add("solid");
  } else {
   
    document.getElementsByClassName("navbar").classList.remove("solid");
  }
}


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
