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

    //Validar nombres repetidos
    if (amigos.includes(nombre)) {
    alert(`El nombre ${nombre}, ya se encuentra en la lista.`);
    
    //Se limpia el campo
    input.value = "";
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
    // contenedor
    const listaContainer = document.querySelector(".scroll-container");

    //Limpiar la lista existente
    lista.innerHTML = "";

    // Agregar o quitar clase de fondo según si hay amigos
    if (amigos.length === 0) {
        listaContainer.classList.remove("con-fondo");
    } else {
        listaContainer.classList.add("con-fondo");
    }

    //Iterar sobre el arreglo
    for (let i=0; i<amigos.length; i++){
        
        //Crear elemento de lista (<li>)
        const li = document.createElement("li");
        li.textContent = amigos[i];

        //Crear Botón eliminar amigo
        const btnEliminar = document.createElement("button");
        //evita envío de formularios
        btnEliminar.type = "button";
        btnEliminar.className = "btn-eliminar";
        btnEliminar.setAttribute("aria-label", `Eliminar ${amigos[i]}`);
        btnEliminar.textContent = "❌";

        //Permite añadir multiples eventos al mismo botón
        btnEliminar.addEventListener("click", () => {
            eliminarAmigo(i);
        });


        li.appendChild(btnEliminar);

        //Agregar elemento de la lista
        lista.appendChild(li);
    }  

    //mostrador contador de amigos
    const contAmigos = document.getElementById("contAmigos");
    contAmigos.innerHTML = `Total de amigos: ${amigos.length}`;
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
    li.classList.add("amigo-sorteado"); // clase para estilizarlo
    li.innerHTML = `🎉 El amigo secreto es: <strong>${nombreSorteado}</strong>`;

    resultado.appendChild(li);

}

function eliminarAmigo(indice){
    console.log(`Se eliminó: ${amigos[indice]}`);

    // borra 1 elemento en esa posición
    amigos.splice(indice,1);

    //Actualiza la lista
    actualizarLista();
}

function reiniciarJuego(){
    //vacia el arreglo de amigos
    amigos = [];

    //Limpiar la lista en HTML
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

     //Limpiamos el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    // Actualizar el contador
    const contAmigos = document.getElementById("contAmigos");
    contAmigos.innerHTML = "";

    // Quitar clase de fondo
    const listaContainer = document.querySelector(".scroll-container");
    listaContainer.classList.remove("con-fondo");

    console.log("Juego reiniciado");
}