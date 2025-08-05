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

// Funcion actualizar la lista de amigos en la pantalla.
function actualizarListaAmigos(listaDeAmigos){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Para limpiar el contenido previo.
    /*  se verifica que hay nombres en la lista, luego se crea un elemento li en el html para
    listar los nombres agregados, con el for se recorre cada posicion del arreglo y se agrega 
    a la lista, finalmente se agrega todo bajo la misma lista.*/
    if (listaDeAmigos.length > 0) {
        for (let i = 0; i < listaDeAmigos.length; i++) {
            let li = document.createElement('li');
            li.textContent = listaDeAmigos[i];
            lista.appendChild(li);            
        }
    } else {
        let li = document.createElement('li');
        li.textContent = 'No hay amigos agregados.';
        lista.appendChild(li);
    }
}

