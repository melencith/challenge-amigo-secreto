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
        alert("Por favor, inserte un nombre");
        return;
    }
    
    //actualiza el array
    amigos.push(nombre);

    //Se limpia el campo
    input.value = "";

    console.log("Amigos actuales:", amigos);
}