function CambiarColor(fondo, texto) {
    const box = document.querySelector(".container");
    box.style.backgroundColor = fondo;
    const textElement = document.getElementById("text");
    textElement.style.color = texto;
}