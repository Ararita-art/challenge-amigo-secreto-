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

//Actualizar nominaAmigo
function actualizarNominaAmigo() {
    //Obtener elemento de nominaAmigo
        const nominaAmigo = document.getElementById("listaAmigos");
    //Limpiar nominaAmigo
        nominaAmigo.innerHTML = "";
    //Iterar listaNombreAmigo
        listaNombreAmigo.forEach(amigo => {
            const li = document.createElement("li");
            li.textContent = amigo;
            nominaAmigo.appendChild(li);
        });
    }
    //Sortear nombre de listaNombreAmigo
function sortearlistaNombreAmigo() {
    //Validar contenido listaNombreAmigo
        if (listaNombreAmigo.length === 0) {
            alert("La lista está vacía, para jugar ingrese nombres.");
            return;
        }
    //Generar índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * listaNombreAmigo.length);
    //Obtener nombreAmigoSorteado
        const nombreAmigoSorteado = listaNombreAmigo[indiceAleatorio];
    //Mostrar nombreAmigoSorteado
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>${nombreAmigoSorteado}</li>`;
    }
    //Asignar eventos a botones
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById("btnAdicionar").addEventListener("click", ingresarNombreAmigo);
        document.getElementById("btnSortear").addEventListener("click", sortearlistaNombreAmigo);
    })