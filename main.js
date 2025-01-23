

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

let textoBanner;

// Cargar el header y luego ejecutar el código que depende de él
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', 'pages/templates/header/header.html', () => {
        console.log("Header cargado, ahora sí podemos acceder a sus elementos");

        // Selecciona los elementos ya cargados
        btn = document.querySelector(".navbar__toogle-btn");
        mobileMenu = document.querySelector(".navbar__mobile-menu");
        textoBanner = document.getElementById("textoBanner")


        const hideResize= ()=>
        {
            mobileMenu.style.display="none";
            sw=false
        }

        window.addEventListener("resize",hideResize);



        
        let datos=["Sabias que CRISTIANO RONALDO gano 35 copas hasta el dia de hoy","La criptografía es una técnica que se utiliza para proteger la información mediante la transformación de los datos en un formato ilegible para aquellos que no tienen la clave de descifrado","Sabias que demichelis gano 50 kilos despues del mundial","Messi gano 35 millones de dolares con la victoria del mundial","El perrito kesi kesi de los memes te desea un feliz aprendizaje"]

        let puntero=Math.floor(Math.random() * 5);
        console.log(puntero)
        textoBanner.textContent=datos[puntero]


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

