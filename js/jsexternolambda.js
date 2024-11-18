const cambiarTexto = (id, valor) => {
    document.getElementById(id).innerText = valor;
};

const cambiarColor = (id, color) => {
    document.getElementById(id).style.color = color;
};

const cambiarTamanio = (id, valor) => {
    document.getElementById(id).style.fontSize = valor;
};
const agregarElemento = (id, elemento) => {
    document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + elemento;
};

const conceptosJS = () => {

    /*Tipos de variables en JS 
    
    var: globales, ya no se usa comunmente este tipo de dato
    let: local, dentro del bloque {}, no permite volver a declarar la variable en el mismo bloque
    const varibales cuyo valor no cambian
    */
    let nombre = "Dennisse"
    let numero1 = 10;
    let numero2 = 19.2;
    const PI = 3.14;

    console.log(nombre);
    console.log(numero1);
    console.log(numero2);
    console.log(PI);
    console.log("entro al metodo de calculo")

    /*Declaracion de arreglos*/
    const diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];

    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[4]);

    console.log(diasSemana[5]);
    //dentro de JS el concepto de nulo o no existencia:undefined

    let valor = null;
    console.log(valor);

    diasSemana.push('Sabado');
    console.log(diasSemana); //agregar elemento al final

    diasSemana.unshift('Dias');
    console.log(diasSemana); //agregar elemento al inicio

    const numImpares = [1, 3, 5, 7, 9, 11];
    console.log(numImpares);

    const numPares = [2, 4, 6, 8, 10];
    console.log(numPares);

    const numeros = numImpares.concat(numPares);
    console.log(numeros);

    for (const dia of diasSemana) {
        console.log(dia);

        if (dia === 'viernes') {

            console.log('Al fin viernes');
        } else {
            console.log('aun no llega viernes');
        }
    }

    //manejo de objetos
    const miEstudiante = {
        nombre: 'Dennisse',
        apellido: 'Andrade',
        edad: 27,
        genero: 'Femenino',
        ciudadNAcimienot: 'Quito'
    }

    console.log(miEstudiante);

    console.log(miEstudiante.apellido);
    console.log(miEstudiante.edad);

    if (miEstudiante.edad === 28) {
        console.log('Tiene 28');
    } else {
        console.log('Aun no tiene 28');
    }

    miEstudiante.apellido = 'Marin';
    console.log(miEstudiante);

    //declaraciones de atributos pero como objetos
    const miProfesor = {
        nombre: 'Alexandra',
        apellido: 'Andrade',
        direccion: {
            calle: "Av. America",
            casa: '185',
            barrio: 'belisario quevedo'
        }
    }

    console.log(miProfesor);
    console.log(miProfesor.direccion.barrio);

    miProfesor.direccion.calle = 'La planada';

    console.log(miProfesor);

    if (miProfesor.edad === miProfesor.estatura) {
        console.log('son iguales');
    } else {
        console.log('estos no son iguales');
    }

    //arreglo de objetos

    const est1 = {
        nombre: 'Dennisse',
        apellido: 'Andrade',
        edad: 27
    }

    const est2 = {
        nombre: 'Diego',
        apellido: 'Rivas',
        edad: 27
    }

    const est3 = {
        nombre: 'Mauricio',
        apellido: 'Cacuango',
        edad: 24
    }

    const arregloEstu = [est1, est2, est3];

    console.log(arregloEstu);

    console.log(arregloEstu[0]);
    console.log(arregloEstu[1].nombre);

    const arregloEstu2 = [{
        nombre: 'Alexandra',
        apellido: 'Marin',
        edad: 27
    }, {
        nombre: 'Alexander',
        apellido: 'Haro',
        edad: 27
    }, {
        nombre: 'Alexander',
        apellido: 'Alban',
        edad: 24
    }];

    console.log(arregloEstu2);

    console.table(arregloEstu2)

    const estudiante = arregloEstu2.pop(); //elimina el ultimo elemento del array

    console.log(estudiante);


    console.table(arregloEstu2);


    //desestructuracion de arreglos

    console.log('desestructuracion de arreglos')

    const colores = ['amarillo', 'azul', 'rojo'];

    const [col1, col2, col3] = colores;

    console.log(col1);
    console.log(col2);
    console.log(col3);

    const [m1, m2, m3, m4, m5, m6] = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

    console.log(m1);
    console.log(m2);
    console.log(m3);
    console.log(m4);
    console.log(m5);
    console.log(m6);

    const [, mes2, , , mes5] = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

    //desestructuracion de objetos

    console.log('desestructuracion de objetos')
    const auto = {
        marca: 'toyota',
        modelo: 'piur',
        color: 'plateado',
        anio: 2024
    }

    // const { modelo, color, anio, marca} = auto; // viene dada por le nombre del atributo no por la posicion




    console.log('desestructuracion de objetos')
    const auto2 = {
        marca: 'toyota',
        modelo: 'piur',
        color: 'plateado',
        anio: 2024
    }

    desestructuracion(auto);
    desestructuracion(auto2);

    const { nomP, raza, peso } = { nombre: 'perro', raza: 'pastor', peso: 15 };

    console.log(nomP);
    console.log(raza);
    console.log(peso);


    //declarar un arreglo de objetos

    //desestructurar el atributo de objeto del arreglo

    const arregloObj = {
        nombre: 'Justin',
        caracteristicas: {
            peso: 15,
            edad: 13,
            tipo: 'perro'
        }
    }
    ;

    /*
const {animal, caracteristicas} = arregloObj;
const{tipo}=caracteristicas;

console.log(animal);
console.log(caracteristicas);
console.log(tipo);
*/

    const { animal, caracteristicas: { tipo } } = arregloObj;

    console.log(tipo);
};



const desestructuracion = ({ modelo, color, anio, marca }) => {
    console.log('entro al metodo de desustructuracion')

    console.log(marca);
    console.log(color);
    console.log(anio);
    console.log(modelo);
};







