let navbarBack = document.querySelector(".navbar");

// function observer(targetId, classAdd) {

//     const texto = document.getElementById(targetId);
//     const callback = (entradas, opciones) =>{

//     entradas.forEach((entrada) => {
//         if(entrada.isIntersecting){
//             navbarBack.classList.add(classAdd);
//             navbarBack.classList.remove("unsolid");
//         }
//         else{
//             if(document.querySelector(".navbar").classList.contains(classAdd)){
//                 navbarBack.classList.add("unsolid");
//             }
//             navbarBack.classList.remove(classAdd);
//         }

//     });
//     }
//     const opciones = new IntersectionObserver(callback, {
//         root:null,
//         rootMargin:"0px 0px 0px 0px",
//         threshold:0.2

//     });
//     opciones.observe(texto);
//     }
// observer("nosotros", 'solid');


$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.navbar').addClass('solid');
        $('.navbar').removeClass('unsolid');
    } else {
        $('.navbar').removeClass('solid');
        $('.navbar').addClass('unsolid');

    }
});

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const navbar = document.getElementsByClassName('navbar')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    navbar.classList.toggle('navbarHeight');
    if ($(window).scrollTop() <= 50) {
        $('.navbar').addClass('solid');
        $('.navbar').removeClass('unsolid');
    }
});

navbarLinks.addEventListener('click', () => {
    navbarLinks.classList.remove('active');
    navbar.classList.remove('navbarHeight');
});



$(document).ready(function () {
    let heightDiv = $(".b").height();
    $('.rect-container').height(heightDiv);
    console.log(heightDiv);
});

$("#paqueteOne").click(function (e) {
    e.preventDefault();
    $("#paquete").val("PAQUETE ONE PAGE");
    window.location.replace("#contacto");
});

$("#paqueteAvanzado").click(function (e) {
    e.preventDefault();
    $("#paquete").val("PAQUETE AVANZADO");
    window.location.replace("#contacto");
});

$("#paqueteEcomerce").click(function (e) {
    e.preventDefault();
    $("#paquete").val("PAQUETE E-COMMERCE");
    window.location.replace("#contacto");
});


let textChange = document.querySelector(".textChange");

setTimeout(function () {
    textChange.innerHTML = "Diseñá";
}, 2000);

setTimeout(function () {
    textChange.innerHTML = "";
}, 2500);

setTimeout(function () {
    textChange.innerHTML = "Renová";
}, 3000);

setTimeout(function () {
    textChange.innerHTML = "";
}, 3500);

setTimeout(function () {
    textChange.innerHTML = "Mejorá";
}, 4000);

setTimeout(function () {
    textChange.innerHTML = "";
}, 4500);

setTimeout(function () {
    textChange.innerHTML = "Creá tu página web";
}, 5000);




let mybutton = document.getElementById("wppIcon");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

$("#wppIcon").hide();

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

let reloadCache = getElementById("reloadCache");
reloadCache.addEventListener("click", function () {
    window.location.reload(true);
});
