var pantalla = document.getElementById('id-display');

var num1 = '';
var num2 = '';
var op = '';
var res = '';
var nuevo = false;


const setearValor = (valor)=>{
   let valoractual =  pantalla.innerText;
    console.log(valoractual);
    pantalla.innerText = valor; 

};


const setearValorConcatenado = (valor)=>{
    let valoractual =  pantalla.innerText;
     console.log(valoractual);
     pantalla.innerText;
     t = valoractual + valor; 
 
 };

 const escribirPantalla=(numero)=>{
    if(num1===null){
        num1 = numero;
        console.log(num1);

    } else {
        num2 = numero;
        console.log(num2);
    }

 };


 const operacion = (op)=>{
    operacion = op
 }

 const calcular = ()=>{
    let valFinal;
    if(operacion === '+'){
        valFinal = num1 + num2;
    } else if(operacion === '-'){
        valFinal = num1 - num2;

    }else if(operacion === '/'){
        valFinal = num1 / num2;

    }else if(operacion === '*'){
        valFinal = num1 * num2;

    }

 }