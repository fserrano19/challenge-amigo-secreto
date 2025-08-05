//  Se crea e inicializa el arreglo para almacenar los nombres ingresados por el usuario.
let amigos = [];
let resultado = '';

// Funcion para agregar los nombres de los amigos del usuario.
function agregarAmigo(){
    resultado.innerHTML = '';
    // Se almacena el nombre del amigo en la variable nombreDeAmigo
    let nombreDeAmigo = document.getElementById('amigo').value;
    // Se utiliza una expresión regular para evitar numeros.
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    /*  Condicional para verificar si se ingresa un nombre valido, si el nombre contiene 
        numeros o caracteres especiales pide que ingrese un nombre valido y si es valido,
        se agrega en el arreglo que almacena los nombres y se limpia la caja de nombres. */
    if (nombreDeAmigo == '') {
        alert('Por favor ingrese un nombre.');
    }
    else if (!soloLetras.test(nombreDeAmigo)){
        alert("El nombre no debe contener números ni caracteres especiales.");
        document.getElementById('amigo').value = '';
    } else {
        amigos.push(nombreDeAmigo);
        actualizarListaAmigos(amigos);
        document.getElementById('amigo').value = '';
    }
    console.log(amigos);
    return amigos;
}

