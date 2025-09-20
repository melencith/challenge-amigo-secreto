// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables
//Aquí guardaremos los nombres que el usuario vaya ingresando:
let amigos = []

//Implementa una función para agregar amigos

function agregarAmigo (){

    console.log("Se ejecutó la función agregarAmigo");

    //captura el nombre ingresado
    const input = document.getElementById("amigo");
    //elimina espacio en blanco
    const nombre = input.value.trim();

    //Si el usuario deja el campo vacio mostrar una alerta
    if (nombre == ""){
        alert("Por favor, inserte un nombre..");
        return;
    }

    if (amigos.includes(nombre)) {
    alert("Ese nombre ya se encuentra en la lista.");
    return;
    }

    //actualiza el array
    amigos.push(nombre);

    //Se limpia el campo
    input.value = "";

    //Actualizar la lista de amigos
    actualizarLista();

        console.log("Amigos actuales:", amigos);
}

function actualizarLista (){

    console.log("Se ejecutó la función actualizarLista");

    //Obtener elemento de la lista
    const lista = document.getElementById ("listaAmigos"); 

    //Limpiar la lista existente
    lista.innerHTML = "";

    //Iterar sobre el arreglo
    for (let i=0; i<amigos.length; i++){
        
        //Crear elemento de lista (<li>)
        const li = document.createElement("li");
        li.textContent = amigos[i];

        //Agregar elemento de la lista
        lista.appendChild(li);
    }  
}

function sortearAmigo() {

    console.log("Se ejecutó la función sortearAmigo");

    //Validar que tenga amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear...");
        return;
    }

    //Generar un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    //Obtener el nombre sorteado
    const nombreSorteado = amigos[indiceAleatorio]

    //Mostrar el resultado   
    const resultado = document.getElementById("resultado");

    //Limpiamos antes de mostrar
    resultado.innerHTML = ""; 

    const li = document.createElement("li");
    li.innerHTML = `🎉 El amigo secreto es: <strong>${nombreSorteado}</strong>`;

    resultado.appendChild(li);

}