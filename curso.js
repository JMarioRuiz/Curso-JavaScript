//mensaje en consola
console.log("hola mundo");

//alerta del navegador
alert("ejemplo alerta");

//para recibir datos desde el navegador como modal
prompt("Dame tu nombre: ");

//como declarar variables
let nombre = "Mario";

//como declarar constantes
const PI = 3.1416;

/*
los nombres de las variables no pueden tener espacios en blanco
los nombres de las variables no pueden iniciar con numeros
ciertas palabras no pueden ser variables ya que son palabras reservadas de js
*/

let edad = 24;
let cambio = 2.5;

//si queremos realizar operaciones complejas, se puede emplear la biblioteca Math
Math.pi;
Math.pow(10,2);

//TIPO DE DATOS
/*
string
number
boolean
undefined
symbol
null
*/

//convertir un tipo de dato a otro
parseInt();
parseFloat();
parseString();

/*todos los objetos de js incluyen el metodo toString() para convertirlo a 
un string
*/

//TYPE COERCION
console.log(10 + "5");
console.log("10" === 10);

//BOOLEANOS
let notificacionesActivas = false;
let activo = false;

let resultado = Boolean(1);
console.log(resultado);
/*
se toma como falso el 0, "", false, undefined, NaN, null, -0
*/

//OPERADORES DE COMPARACION
/*
== igual
=== estrictamente igual

!= desigualdad
!== desigualdad estricta

> mayor que
< menor que

=> mayor o igual que
<= menor o igual que
*/

//OPERADORES LOGICOS
/*
&& operador AND
|| operador OR
! operador de negacion o not
?? operador nullish coalescing // fusion de nulos o union nulosa
*/

//let edad = 20;
console.log(0 || "");
console.log(edad > 10 || edad < 25);
console.log(!(10 > 15));

console.log(null ?? "hola");

//CICLOS
/*
for (var i = 0; i < 10; i++)
while (i <  10)
do while (i < 10)
break; es par romper el ciclo
continue; es para continuar el ciclo
*/

//FUNCIONES
//Declaracion de funcion
function saludar(){
    console.log("hola mundo");
}

function cuadrado(numero){
    return numero * numero;
}

//Expresion de funcion
let func = function(){}

/*
tanto let como const solamente va a estar al alcance dentro de un bloque de la funcion
va a estar disponible al bloque mas proximo
const siempre sera para una constante que nunca va a cambiar de valor
var se utiiliza si quieres utilizar una variable sin la limitiante de estar dentro de un
bloque de funcion
en los demas casos se va a emplear let para declarar una variable ya que es la manera 
correcta y actualizaa de declarar variables en js
*/

//ARGUMENTO DE FUNCIONES

//asingarle un valor a una variable, le estas declarando un valor por defecto
function cuadrado(numero = 20){
    console.log(numero);
    return numero * numero;
}

function saludar(apellido, nombre = ""){
    
}

//con el argumento arguments se puede recuperar un arreglo de todos
//los argumentos de la función

console.log(arguments);

/*
un argumento puede ser enviado como valor o como referencia
decimos que un valor a sido enviado como referencia cuando el parametro apunto a la misma
direccion que el argumento original
decimos que pasamos un argumento como valor cuando se envia una copia del argumento orignal
los arreglos y objetos siempre se envian como referencia, lo demas como una copia
*/

/* 
Funcion pura: no produce efectos secundarios
*/

//HOISTING
/* 
en js, hoisting te permite usar funuciones y variables antes de que se
hayan declarado
se puede utilizar pero lo recomendable es no hacer eso
*/

//ARREGLOS / ARRAYS
/*
Pueden almacenar cualquier tipo de dato de primera clase, funciones, objetos, numeros, cadenas, booleanos e incluso otros lenguajes.
Una de las propiedades de los arreglos es su longitud, la longitud es igual a la cantidad de elementos dentro del arreglo.
Cada elemento en el arreglo ocupa una posicion, y accede a dicho elemento usando el nombre del arreglo mas la posicion del elemento
que queremos, a dicha posicion tambien se le conoce coo el index.
Las posiciones de los elementos inician a contar desde 0, de manera que el primer elemento del arreglo tiene como index 0.
La ultima posicion del arreglo es igual a la longitud del arreglo, menos uno, ese menos uno repsonde al hecho de que la cuenta inicia de 0.
*/

let calificaciones = [10,9,8,7,6];

let arreglo = ["rails","laravel","django"];

arreglo[0] = "express";

//el metodo push agrega el elemento al final del arreglo
arreglo.push(3);
//el metodo unshift agrega el elemento al inicio del arreglo
arreglo.unshift(5);
//el metodo pop elimina el ultimo elemento del arreglo
arreglo.pop();
//el metodo shift elimina el primer elemento del arreglo
arreglo.shift();

console.log(arreglo[0]);

//recorrer arreglo
let arreglo = [1,2,3,4];

for(let i = 0; i < arreglo.length; i++){
    let elemento = arreglo[i];
    console.log(elemento);
}

//foreach
let lenguajes = ["ruby","php","javascript","python"];

// for (let i = 0; i < lenguajes.length; i++) {
//     console.log(lenguajes[i]);
// }

lenguajes.forEach(function(lenguaje, indice, arreglo){
    console.log(lenguaje, indice, arreglo);
});

//map

let numeros = [1,2,3,4,5];

let cuadrados = numeros.map(function(numero){
    return numero * numero;
});

console.log(cuadrados);

numeros = ["1", "2", "3", "4", "5"];

numeros = numeros.map(function(numString){
    return parseInt(numString);
});

console.log(numeros);

//Filter
//se conservan solamente aquellos elementos que cumplen con el filtro

numeros = [1,2,3,4,5];

let pares = numeros.filter(function(numero){
    return numero % 2 === 0;
});

console.log(pares);

//reduce
/*
el metodo reduce se utliza para reducir los elementos de un array y retornar un valor unico
como segundo argumento de la funcion, podemos pasar un volor que el acumulador lo tomara como su primer valor
de la interaccion
*/

numeros = [1,2,3,4,5];

numeros.reduce(function(acumulado, numero){
    return acumulado + numero;
}, 0);

nombres = ["Cody", "Jacob"];

let html = nombre.reduce(function(acc,nombre){
    return acc + "<li>" + nombre + "</li>";
},"");

console.log(html);

//BUSCAR ELEMENTO EN UN ARREGLO

let arreglo = ["ruby", "python", "java"];

//indexOf -> === -> posicion
//includes -> === -> true|false

// find -> funcion prueba -> elemento encontrado
// findIndex -> function prueba -> posicion
// some -> funcion prueba -> true|false

let respuesta = arreglo.find(function(elemento,posicion,arreglo){
    return elemento === "ruby"
});

console.log(respuesta);

//Spread y rest sintax

//Interable
//Spread syntax (...)

let arreglo = [1,2,3];

console.log(arreglo);
console.log(...arreglo);

//Rest parameters (...)

function promedio (nombre, ...calificaciones){
    console.log(arguments);
    console.log(nombre,calificaciones);
}

promedio("Cody", 10, 9, 8, 7, 6);