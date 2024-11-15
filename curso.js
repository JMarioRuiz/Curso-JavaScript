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