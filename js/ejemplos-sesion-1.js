//Sesion 1 Fundamentos de javascript
//!Ejemplo1
// Numbers
typeof 10; // "number"
typeof 12.5; // "number"
typeof 2.5e6; // "number"
typeof Infinity; // "number"
typeof NaN; // "number"

// Strings
typeof " "; // "string" - Espacios en blanco cuentan como caracteres
typeof "Hello World"; // "string"
typeof "12"; // "string" - Números dentro de comillas son strings

// Booleans
typeof true; // "boolean"
typeof false; // "boolean"

// Undefined
typeof undefined; // "undefined"

var name;
typeof name; // "undefined" - Aún no se asigna un valor

// Null
typeof null; // "object"
//!Ejemplo2
var a = 5;
var b = 10;
var c = 15;

a + b; // 15

b - a; // 5

a * c; // 75

c / a; // 3

b % a; // 0
//!Ejemplo3

var a = 5;
var b = 10;
var c = 15;

a + b * c; // 155

(a + b) * c; // 255

(b / a) * c; // 30

b / (a * c); // 0.1333

a - b + c; // 10

a - (b + c); // -20
//!Reto 1
var a = 5;
var b = 10;
var c = 15;

var op1 = (((3 + b) * c) / a) * 2; // 78
var op2 = ((a + b * c) / 5) * 2; // 62
var op3 = b / a + 2 * c; // 32
var op4 = (a + b + c / c) * a; // 80
var op5 = (3 * a) / c + a + b + c; // 31
var op6 = a - ((b + c) * a) / 1; // -120

console.log(op1, op2, op3, op4, op5, op6);
