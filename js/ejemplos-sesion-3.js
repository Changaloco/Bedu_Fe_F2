//Sesion 3 Objetos y arrelgos.
//!Ejemplo1
console.log("Ejemplo1");
const numbers = [1, 3, 4, 7, 2, 1, 9, 0];
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
console.log(numbers);
console.log(doubled);
//!Ejemplo2
console.log("Ejemplo2");
const car = {
  brand: "Nissan",
  model: "Versa",
  year: 2020,
};
const keys = Object.keys(car);
const pairs = [];
for (let i = 0; i < keys.length; i++) {
  pairs.push([keys[i], car[keys[i]]]);
}
console.log(pairs);
//!Ejemplo3
console.log("Ejemplo3");
const person = {
  firstName: "John",
  lastName: "Doe",
};
const { firstName: name, country: ctry = "Unknown" } = person;
console.log(name, ctry);
//!Reto1
console.log("Reto1");
const numbersReto1 = [5, 3, 4, 7, 2, 1, 9, 7, 7];
var sumatoria = 0;
for (let numero of numbersReto1) {
  sumatoria = sumatoria + numero;
}
var promedio = sumatoria / numbersReto1.length;
console.log(promedio);
//!Reto2
console.log("Reto2");
var carObject = {};
const carReto2 = [
  ["brand", "Nissan"],
  ["model", "Versa"],
  ["year", 2020],
];
for (let propiedades of carReto2) {
  key = propiedades[0];
  carObject[key] = propiedades[1];
}
console.log(carObject);
//!Reto3
console.log("Reto3");
const personReto3 = {
  firstName: "John",
  lastName: "Doe",
  links: {
    web: {
      blog: "https://johndoe.com",
    },
    social: {
      facebook: "https://facebook.com/john.doe",
      instagram: "https://instagram.com/john.doe",
    },
  },
};
let links = personReto3.links;
const { facebook: fb, instagram: ig } = personReto3.links.social;
console.log(fb, ig);
