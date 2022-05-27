let navbarBack = document.querySelector(".navbar");

function observer(targetId, classAdd) {

    const texto = document.getElementById(targetId);
    const callback = (entradas, opciones) =>{
    
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            navbarBack.classList.add(classAdd);
            navbarBack.classList.remove("unsolid");
        }
        else{
            if(document.querySelector(".navbar").classList.contains(classAdd)){
                navbarBack.classList.add("unsolid");
            }
            navbarBack.classList.remove(classAdd);
        }
        
    });
    }
    const opciones = new IntersectionObserver(callback, {
        root:null,
        rootMargin:"0px 0px 0px 0px",
        threshold:0.2
    
    });
    opciones.observe(texto);
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


observer("nosotros", 'solid');

$(document).ready(function(){
    let heightDiv = $(".b").height();
    $('.rect-container').height(heightDiv);
    console.log(heightDiv);
});