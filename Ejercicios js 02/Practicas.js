//*Arrow functions
//?Las funciones de flecha o arrow functions son una forma más concisa de escribir funciones en JavaScript. Ejemplo:

// Funcion tradicional
function sum(a, b)  {
    return a + b;
}

// Arrow function
const suma = (a, b) => 1 + 2;

//*Template literals
//?Las plantillas de cadenas o template literals son una forma más fácil de concatenar cadenas de texto en JavaScript. Ejemplo:

const nombre = "Miguel";
console.log(`Hola ${nombre}, ¿comó estas?`);

//*Desestructuración
//?La desestructuración es una forma de extraer valores de objetos y arreglos en variables separadas. Ejemplo:

const person = {
    name1: "Miguel",
    age1: 19,
    country1: "Mexico"
};
const {name1, age1} = person;
console.log(name1);
console.log(age1);

//*Clases
//?Las clases son una forma más clara y orientada a objetos de crear objetos en JavaScript. Ejemplo:


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);

    }
}

const Person = new Person("Miguel", 19);
Person .sayHello();

//*Promesas
//?Las promesas son una forma de manejar operaciones asincrónicas en JavaScript. Ejemplo:

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Datos recuperados correctamente.");
        }, 2000);
    });
}

fetchData()
.then(response => console.log(response))
.catch(error => console.error(error));

//*Spread operator
//?El operador de propagación o spread operator es una forma de descomponer un objeto o un arreglo en sus elementos individuales. Ejemplo:

const numbers01 = [1, 2, 3, 4];
console.log(...numbers01);

const person05 = {
    name3: "Miguel",
    age3: 30,
    country3: "Colombia"
};

console.log({...person05});

//*Default parameters
//?Los parámetros por defecto o default parameters son una forma de proporcionar valores predeterminados para los parámetros de una función. Ejemplo:

function greet(name4 = "amigo") {
    console.log(`Hola, ${name4}!`);
}

greet();
greet("Miguel");