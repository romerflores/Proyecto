function loadComponent(containerId, filePath, callback) {
    fetch(filePath)
        .then(response => response.text())
        .then(content => {
            document.getElementById(containerId).innerHTML = content;

            if (callback) callback();  // Llamar al callback después de cargar
        })
        .catch(error => {
            console.error(`Error cargando ${filePath}:`, error);
        });
}

let sw=false

let btn;
let mobileMenu;

// Cargar el header y luego ejecutar el código que depende de él
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', 'pages/templates/header/header.html', () => {
        console.log("Header cargado, ahora sí podemos acceder a sus elementos");

        // Selecciona los elementos ya cargados
        btn = document.querySelector(".navbar__toogle-btn");
        mobileMenu = document.querySelector(".navbar__mobile-menu");


        
        
    });
});

function mostrarMenu()
{
    if(!sw)
    {
        mobileMenu.style.display="flex";
    }
    else{
        mobileMenu.style.display="none";
    }
    sw=!sw
}

