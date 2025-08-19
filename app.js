/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';*/

//EN LUGAR DE UTILIZAR UN SELECTOR PARA CADA ELEMENTO, 
// SE PUEDE CREAR UNA FUNCIÓN QUE ASIGNE UN TEXTO A UN ELEMENTO HTML
let numeroSecreto = 0;
let intentos= 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10; // Definimos el número máximo para el juego

console.log(numeroSecreto); // Para verificar el número secreto en la consola

function asignarTextoElemento(elemento, texto) { // función que asigna un texto a un elemento HTML
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
} 

function verificarIntento() {
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
    
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces' }` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número es menor');
        } else {
            asignarTextoElemento('p', 'El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;

    console.log(numeroGenerado); // Para verificar el número generado en la consola
    console.log(listaNumerosSorteados); // Para verificar la lista de números sorteados en la consola
    //si ya se sorteo todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.'); 

    } else {
        // si el numero ya fue sorteado, generar otro
        if (listaNumerosSorteados.includes(numeroGenerado)){
            
            return generarNumeroSecreto(); // llamada recursiva para generar un nuevo número
         // si el numero no fue sorteado, agregarlo a la lista y retornarlo 
        }   else { 
           listaNumerosSorteados.push(numeroGenerado);
           return numeroGenerado;  
        }
    }
 
    

}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;

}


function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de interavalo de numero
    //generar el numero secreto}
   //inicializar el numero de intentos
   condicionesIniciales();
    //deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');


    


}


condicionesIniciales();
    
