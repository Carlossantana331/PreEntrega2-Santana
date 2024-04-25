
//funcion  para imrpimir las tareas que tengo ingresadas
function listaTareas(tareas) {
    let lista = "Lista de tareas: \n";
    for (let i = 0; i < tareas.length; i++) {
        lista += (i + 1) + "- Tarea por hacer: " + tareas[i].tarea + "\n   Fecha límite: " + tareas[i].fechaLimite + "\n--------------------------------------\n";
    }
    return lista;
}

//funcion constructora de objetos
function tareaPorHacer (tarea, fechaLimite) {
    this.tarea = tarea;
    this.fechaLimite = fechaLimite;
}


// Funcion para agregar una nueva tarea al array
function agregarTarea(nuevaTarea) {
    tareas.push(nuevaTarea);
}


//Funcion para validar que la fecha sea ingresada como se solicita
function validarFecha(fecha) {
    
    let formatoFecha = /^\d{2}-\d{2}$/;  // Expresión regular para el formato DD-MM
    if (!formatoFecha.test(fecha)) {
        return false;
    }

    // Extraer el mes de la fecha
    let partesFecha = fecha.split("-");
    let mes = parseInt(partesFecha[1], 10);

    // Verificar si el mes es válido (de 01 a 12)
    return mes >= 1 && mes <= 12;
}


//variables
let tareas = [];
let eleccion = (0)

//se detiene el programa hasta que sea false
let continuar = true;

//mensaje de bienvenida
console.log(
    "Bienvenido a tu lista de tareas\n" 
)

//inicia el bucle hasta que el usuario decida detenerlo
while (continuar){

    //comprueba si hay tareas ya asignadas y de ser asi las muestra en pantalla
    if (tareas.length !== 0){
        console.log(listaTareas(tareas))
    
    }else{
        console.log("Aun no hay tareas en la lista.");
    }

    eleccion = prompt("Elige una opcion:\n1-Crear tarea\n2-Eliminar tarea\n3-Salir");

    //verificar si la entrada no es un número válido
    if (isNaN(eleccion)) {
        alert("Entrada inválida. Por favor, ingresa un número válido.");
        continue;
    }

    //convierte lo ingresado en un numero
    eleccion = parseInt(eleccion);


    switch (eleccion){
        
        //agrega una nueva tarea a la lista
        case 1:
            let tarea = prompt("Por favor, ingrese una nueva tarea: ")

            //verifica si la fecha es valida usando la funcion "validarFecha"
            let fechaValida = false;
            let fechaLimite;
            
            while (!fechaValida) {
                fechaLimite = prompt("Ingrese la fecha límite para la tarea (en formato: DD-MM): ");
                if (validarFecha(fechaLimite)) {
                    fechaValida = true;
                } else {
                    alert("Formato de fecha inválido. Por favor, ingrese una fecha en formato DD-MM.");
                }
            }

            //crea la nueva tarea y la agrega al array
            let nuevaTarea = new tareaPorHacer(tarea, fechaLimite);
            agregarTarea(nuevaTarea)
            break
        
        //elimina una tarea
        case 2:

            //verifica si hay tareas pendientes, y avisa si no las hay 
            if (tareas.length === 0) {
                console.log("No hay tareas para eliminar.");
            
            //llama a la lista de tareas y el usuario elige cual eliminar
            } else {
                console.log(listaTareas(tareas))
        
                let indiceEliminar = parseInt(prompt("Ingrese el numero de la tarea que desea eliminar: "));
                
                // Validar si el indice es correcto
                if (indiceEliminar >= 1 && indiceEliminar <= tareas.length) {
                    tareas.splice(indiceEliminar - 1, 1); //eliminar la tarea
                    console.log("Tarea eliminada.");
                } else {
                    console.log("numero inválido.");
                }
            }
            break;

        //termina el bucle 
        case 3:
            alert("Espero haberlo ayudado, adios")
            continuar = false

            break;

        //en caso de que el numero ingresado por el usuario sea invalido
        default:
            alert("Opción no válida. Por favor, elija una opción válida.")

    }
}

