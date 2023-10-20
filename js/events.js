function CambiarColor(color) {
    const buttons = document.querySelector(".buttons");
    buttons.style.backgroundColor = color;
    
    const inputNombre = document.getElementById("textbox");
    inputNombre.style.color = color;
}

window.addEventListener("load", cargaPagina);
function cargaPagina() {
    var btn = document.getElementById("textbox").addEventListener("click", CambiarColor);
}