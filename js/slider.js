//Arreglo para almacenar las imagenes a usar en el slider
var Imagenes = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg"
];

var contador = 0;
var imagenElement = document.getElementById("Imagen");

imagenElement.src = Imagenes[contador];

var SliderDerecha = document.querySelector(".slider-derecho")
var SliderIzquierda = document.querySelector(".slider-izquierdo")

/*Esta funcion sirve para que cuando se de click en la flecha derecha la imagen se 
recorra hacia la derecha segun el vector*/
function MoverDerecha()
{
    contador++;
    //Condicion para seguir el bucle
    if(contador >= Imagenes.length)
    {
        contador = 0;
    }
    imagenElement.src = Imagenes[contador]
}
//Esto establece el suceso despues de el evento llamado "click" que sera la funcion respectiva
SliderDerecha.addEventListener("click", MoverDerecha)

function MoverIzquierda()
{
    contador--;
    if(contador < 0 )
    {
        contador = Imagenes.length - 1;
    }
    imagenElement.src = Imagenes[contador]
}
SliderIzquierda.addEventListener("click", MoverIzquierda)
//El set interval establece los intervalos de movimiento del slider usando la funcion MoverDerecha
setInterval(MoverDerecha,2500);