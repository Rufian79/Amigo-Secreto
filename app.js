// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosRestantes = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    amigos.push(nombre);
    amigosRestantes.push(nombre);
    actualizarLista();
    input.value = "";
    input.focus();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigosRestantes.length === 0) {
        alert("Todos los amigos han sido sorteados.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigosRestantes.length);
    const amigoSecreto = amigosRestantes.splice(indiceAleatorio, 1)[0];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Borra el resultado anterior
    
    const li = document.createElement("li");
    li.innerHTML = `El amigo secreto es: <strong>${amigoSecreto}</strong>`;
    resultado.appendChild(li);
}
