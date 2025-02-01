//Declarar primera variable array
let listaNombreAmigo = []

//Desarrollar función ingresar nombreAmigo
function ingresarNombreAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();
//Validar nombreAmigo
    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
//Añadir valores a listaNombreAmigo
    listaNombreAmigo.push(nombreAmigo);

    actualizarNominaAmigo();

//Limpiar inputAmigo
    inputAmigo.value = "";
    inputAmigo.focus();
}