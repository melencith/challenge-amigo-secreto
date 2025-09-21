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
    li.classList.add("amigo-sorteado"); // clase animada a todo el li
    li.innerHTML = `🎉 El amigo secreto es: <strong>${nombreSorteado}</strong>`;

    resultado.appendChild(li);

    // Aplicar animación después de estar en el DOM
    setTimeout(() => {
        li.classList.add("amigo-sorteado-animado");
    }, 50); // pequeño retraso para que el navegador registre el cambio

    // Quitar clase animada después de la animación
    setTimeout(() => {
        li.classList.remove("amigo-sorteado-animado");
    }, 1550); // coincide con duración de animación

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

    // Ocultar la ruleta
    const ruletaOverlay = document.getElementById("ruleta-overlay");
    ruletaOverlay.style.display = "none";

    gradosActuales = 0;
    ruleta.style.transform = "rotate(0deg)";
}

// --- Animación de ruleta ---
const btnSortear = document.querySelector(".button-draw");
const ruletaOverlay = document.getElementById("ruleta-overlay");
const ruleta = document.getElementById("ruleta");

let gradosActuales = 0;

function girarRuleta() {

    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear...");
        return;
    }

    // Ocultar el resultado anterior mientras gira la ruleta
    const resultado = document.getElementById("resultado");
    resultado.style.visibility = "hidden"; // <-- ocultamos el texto viejo

    // Mostrar overlay
    ruletaOverlay.style.display = "flex";

    // Parpadeo rápido
    let parpadeo = 0;
    ruleta.style.transition = "none";

    function parpadear() {
        ruleta.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
        parpadeo++;

        if (parpadeo < 10) {
            setTimeout(parpadear, 50);
        } else {
            // Giro final animado
            setTimeout(() => {
                const giros = Math.floor(Math.random() * 10) + 10; // 10-19 vueltas
                gradosActuales += giros * 360;

                ruleta.style.transition = "transform 4s cubic-bezier(0.25, 1, 0.5, 1)";
                ruleta.style.transform = `rotate(${gradosActuales}deg)`;

                // Esperar que termine la animación antes de mostrar el resultado
                setTimeout(() => {
                    // Ocultar ruleta después de que termine de girar
                    ruletaOverlay.style.display = "none";

                    // Mostrar el resultado ahora y animarlo
                    resultado.style.visibility = "visible";

                    // Llamar a la función sortearAmigo()
                    sortearAmigo();   

                }, 4500); // 4s de animación + 0.5s de margen

            },50); // deja 50ms para que se aplique el estilo sin transición
        }
    }

    parpadear();
}
