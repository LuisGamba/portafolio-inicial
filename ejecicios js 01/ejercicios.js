console.log("bruh")

// Fundamentos JS: (CTRL + K y Q separada - Inicia node) 

// Declara una variable llamada "nombre" y asígnale tu nombre. Luego, declara otra variable llamada "edad" y 
// asígnale tu edad. Finalmente, imprime en la consola la concatenación de ambas variables.
let nombre = "Luis Miguel Gamba Tovar";
let edad = "19";
console.log(nombre + " tiene " + edad + " años.");

// Declara dos variables numéricas y realiza varias operaciones con ellas, como suma, resta, multiplicación y división.
let numa = 20;
let numb = 2;
console.log(numa + numb)
console.log(numa - numb)
console.log(numa * numb)
console.log(numa / numb)

// Declara una variable numérica y utiliza un condicional para imprimir en la consola si el número es mayor o menor que 10.
let num = 1 ;
if (num > 10) {
    console.log("El numero es mayor que 10");
} else {
    console.log("El numero es menor a 10");
}

// Utiliza un bucle "for" para imprimir en la consola los números del 1 al 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Crea una función que reciba dos números como parámetros y devuelva la suma de ambos.
function sumar(num1, num2) {
    return num1 + num2;
}
console.log(sumar(10, 10));

// Crea un array de números y utiliza un bucle "for" para imprimir en la consola cada uno de ellos.
let numeros = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
} 

// Crea un objeto que represente una persona y tenga propiedades como nombre, edad y género. Luego, imprime en la consola el nombre y la edad de la persona.
let persona = {
    nombre: "Miguel",
    edad: 19,
    genero: "Masculino"
}
    console.log("- Nombre: " + persona.nombre + " - Edad: ", persona.edad)

    // Crea un array de números y utiliza el método "forEach" para imprimir en la consola cada uno de ellos.
    let numeros2 = [1, 2, 3, 4, 5];
    numeros.forEach(function(numero) {
        console.log(numero);
    });

    // Crea una cadena de texto y utiliza el método "toUpperCase" para convertir todos sus caracteres a mayúsculas.
    let texto = "Hola Mundo";
    console.log(texto.toUpperCase());

    // Crea un botón en HTML y utiliza JavaScript para detectar cuando se hace clic en él y mostrar un mensaje en la consola.
    //const miBtn = document.getElementById('miBoton');

    //miBtn.addEventListener('click', () => {
    //console.log('mensaje')
//})

// ++ Ejercicios Practicos ++

// Crea una función que tome dos números como argumentos y devuelva su suma.
function sumar2(num1, num2) {
    return num1 + num2;
}
console.log(sumar2(6, 5));

// Crea una función que tome una cadena como argumento y devuelva el número de caracteres que tiene.
let numeros3 = [5, 4, 35, 3, 7, 10, 24, 79, 27, 6]
console.log (numeros3.length)

// Crea una función que tome un array de números como argumento y devuelva el número más grande.
function numeromayor (numeros) {
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++){
        if (numeros[i] > mayor){
            mayor = numeros[i];
}
}
return mayor;
}
const arraynums = [8, 21, 64, 18, 16]
console.log(numeromayor(arraynums));

// Crea una función que tome una cadena como argumento y devuelva la misma cadena pero con todas las letras en mayúsculas.
function conmayus(cadena){
    return cadena.toUpperCase();
}
console.log(conmayus("que"));

// Crea una función que tome un objeto como argumento y devuelva un array con todas las claves del objeto.
function objetoclaves(obj) {
    return Object.values(obj);

}
const objeto = {
    nombre: 'Miguel',
    apellido: 'Gamba',
    email:'luisgamto@gmail.com',
    edad: '19'
}
console.log(objetoclaves(objeto));

// Crea una función que tome un array de números como argumento y devuelva un nuevo array con los números ordenados de menor a mayor.
function ordenNumero(array) {
    return array.sort((a, b) => a - b)
}

const numbers = [3, 1, 4, 8, 4, 9, 2, 6, 7, 3, 5]
const ordenNumeros = orderNumero(numbers)

console.log(ordenNumeros)

// Crea una función que tome dos fechas como argumentos y devuelva el número de días que hay entre ellas.
function calcularDiasEntreFechas(fecha1, fecha2) {

    const fecha1Ms = fecha1.getTime();
    const fecha2Ms = fecha2.getTime();

    const diferenciaMs = fecha2Ms - fecha1Ms;

    const dias = Math.round(diferenciaMs / 86400000);

    return dias;
}

const fecha1 = new Date('2021-01-01');
const fecha2 = new Date('2022-01-07');
const diasEntreFechas = calcularDiasEntreFechas(fecha1, fecha2);
console.log(diasEntreFechas);

// Crea una función que tome un array de strings como argumento y devuelva un nuevo array con la longitud de cada string.
function longArrays(array) {
    const arrayFinal = []
    for (let i = 0; i < array.length; i++) {
        arrayFinal.push(array[i].length)
    }
    return arrayFinal;
}

const arrayEjemplo = ["Hola", "buenos dias", "!."]
console.log(longArrays(arrayEjemplo))

// Crea una función que tome un objeto como argumento y devuelva un nuevo objeto con las mismas claves pero con los valores invertidos.
const string = 'palabra'
console.log(string.split("").reverse())


function cambiaPropObjeto(object) {
    const Miobj = {
        name: object.name.split("").reverse().join(""),
        lastName: object.lastName.split("").reverse().join("")
    }
    return Miobj
}
const objetoPrueba = {
    name: 'Luis',
    lastName: 'Miguel'
}
const objetoPrueba02 = {
    name: 'Gamba',
    lastName: 'Tovar'
}

console.log(cambiaPropObjeto(objetoPrueba))
console.log(cambiaPropObjeto(objetoPrueba02))

// Crea una función que tome un número como argumento y devuelva un array con todos los números enteros desde 1 hasta ese número.
function longArrayX(x) {
    const miArray = []

    for (let i = 1; i <= x; i++) {
        miArray.push(i)
    }

    return miArray;
}

const longitudArray = 10;
console.log(longArrayX(longitudArray))

// Crea una función que tome un array de strings como argumento y devuelva un nuevo array con todas las strings en mayúsculas.

function arraysUpper(array) {
    const miArray = []

    for (let i = 0; i < array.length; i++) {
        miArray.push(array[i].toUpperCase())
    }

    return miArray

}

const arrayPalabras = ["hola", "mundo", "en javascript"]
console.log(arraysUpper(arrayPalabras))

// Crea una función que tome dos strings como argumentos y devuelva true si son iguales (sin importar mayúsculas o minúsculas) o false si son diferentes.

function twoStrings(str01, str02) {

    if (str01.toUpperCase() === str02.toUpperCase()) {
        return true
    } else {
        return false
    }
}

const string01 = 'hola mundo'
const string02 = 'HOla MuNdO'
const string03 = 'Soy unico'

console.log(twoStrings(string01, string02))
console.log(twoStrings(string01, string03))

//  Crea una función que tome un array de objetos y un string como argumentos y devuelva un nuevo array con todos los objetos que contienen una propiedad con ese string como clave.

function stringObject(arrayObjc, clave) {
    const miArray = []

    for (let i = 0; i < arrayObjc.length; i++) {
        miArray.push(arrayObjc[i])
    }

    for (let i = 0; i < miArray.length; i++) {
        miArray[i].lastName = clave
    }

    return miArray

}

const arrayObjetos = [{ name: 'Luis', lastName: 'Cruz' }, { name: 'Lucho', lastName: 'Estefano' }, { name: 'Lucho', lastName: 'Tijeras' }]
const clave = 'Fajardo'

console.log(stringObject(arrayObjetos, clave))


// Crea una función que tome un array de números como argumento y devuelva true si todos los números son pares o false si alguno es impar

function esPar(array) {
    let miBool = true 
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2) === 0) {
            miBool = true
        } else {
            return false
            break;
        }
    }
    return miBool
}

const arrayNumeros = [2, 4, 6, 18, 22, 80, 48, 74]
const arrayNumeros2 = [2, 3, 6, 7, 10, 18]

console.log(esPar(arrayNumeros))
console.log(esPar(arrayNumeros2))