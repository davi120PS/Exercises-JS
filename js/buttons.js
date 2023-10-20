function cambiarColorC(color) 
{
    document.getElementById('colorBox').style.backgroundColor = color;
}
function cambiarColorL(color) 
{
    document.getElementById('Letras').style.color = color;
}


// Botones
function CambiarColor(color) {
    const buttons = document.querySelector(".buttons");
    buttons.style.backgroundColor = color;
}
function cambiarColorL(color) 
{
    document.getElementById('textbox').style.color = color;
}

window.addEventListener("load", cargaPagina);
function cargaPagina() {
    var btn = document.getElementById("textbox").addEventListener("click", CambiarColor);
}