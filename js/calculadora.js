// Variables globales
const pantalla = document.getElementById('id-display');

let num1 = ''; 
let num2 = ''; 
let operacionActual = ''; 
let nuevo = false;


function escribirPantalla(numero) {
    if (pantalla.innerText === 'Error') borrar(); 
    if (nuevo) {
        pantalla.innerText = ''; 
        nuevo = false;
    }

    if (numero === '.' && pantalla.innerText.includes('.')) return; // Prevenir múltiples puntos decimales

    pantalla.innerText = pantalla.innerText === '0' ? numero : pantalla.innerText + numero;
    operacionActual += numero; 
}


function setOperacion(op) {
    const ultimoChar = pantalla.innerText.slice(-1);

    if (['+', '-', '*', '/'].includes(ultimoChar)) {

        pantalla.innerText = pantalla.innerText.slice(0, -1) + op;
        operacionActual = operacionActual.slice(0, -1) + op;
    } else {
        pantalla.innerText += op;
        operacionActual += op;
    }
}


function calcular() {
    if (operacionActual) {
       
        let resultado = eval(operacionActual);

        pantalla.innerText = resultado;
        operacionActual = resultado.toString(); 
        num1 = resultado; 
        nuevo = true;
    }
}


function borrar() {
    pantalla.innerText = '0';
    resetear();
}

function resetear() {
    num1 = '';
    num2 = '';
    operacionActual = '';
    nuevo = false;
}
