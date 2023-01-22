function copiarAlportapapeles() {
    let texto = document.getElementById("texto-a-copiar");
    let boton = document.getElementById("boton-copiar");

    navigator.clipboard.writeText(texto.textContent);
}