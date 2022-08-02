//sesion 5 scope y this
//*Ejemplo1
console.log("================================");
console.log("Ejemplo1");
if (true) {
  var foo = "John Doe";

  console.log(foo); // "John Doe"
}

console.log(foo); // "John Doe"
const numbers = [1, 2, 3, 4, 5];
const doubles = [];

for (let i = 0; i < numbers.length; i++) {
  doubles.push(numbers[i] * 2);
}

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]
//console.log(i); // Uncaught ReferenceError: i is not defined
console.log("================================");
//!Ejemplo2
console.log("================================");
console.log("Ejemplo2");
console.log("================================");
//?Ejemplo3
console.log("================================");
console.log("Ejemplo3");
const john2 = {
  firstName: "John",
  lastName: "Doe",
  birthYear: 1990,
  calculateAge: function () {
    const today = new Date();
    const year = today.getFullYear();
    this.age = year - this.birthYear;
  },
};
const john3 = {
  firstName: "John",
  lastName: "Doe",
  birthYear: 1990,
  calculateAge: () => {
    const today = new Date();
    const year = today.getFullYear();
    this.age = year - this.birthYear;
  },
};
john2.calculateAge();
john3.calculateAge();
console.log(john2);
console.log(john3);
console.log(this);
console.log("================================");
//*Reto1
console.log("================================");
console.log("Reto1");
var singers = [
  { name: "Steven Tyler", band: "Aerosmith", born: 1948 },
  { name: "Karen Carpenter", band: "The Carpenters", born: 1950 },
  { name: "Kurt Cobain", band: "Nirvana", born: 1967 },
  { name: "Chris Cornell", band: "Soundgarden", born: 1964 },
];

function pluck(list, propertyName) {
  propertiesList = [];
  for (let i = 0; i < list.length; i++) {
    propertiesList.push(list[i][propertyName]);
  }
  return propertiesList;
}

console.log(pluck(singers, "name"));
// ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

console.log(pluck(singers, "band"));
// ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

console.log(pluck(singers, "born"));
// [1948, 1950, 1967, 1964]
console.log("================================");
//!Reto2
console.log("================================");
console.log("Reto2");
numbersP = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function createPhoneNumber(numbers) {
  bandera = false;
  telefono = "(xxx) xxx-xxxx";
  if (numbers.length == 10) {
    for (let number of numbers) {
      if (number >= 0 && number <= 9) {
        telefono = telefono.replace("x", number);
      } else {
        bandera = true;
        break;
      }
    }
    if (bandera == false) {
      console.log(telefono);
    } else {
      console.log("Alguno de los numeros es mayor al rango permitido");
    }
  } else {
    console.log("El arreglo no debe ser de mas de 10 numeros");
  }
}
createPhoneNumber(numbersP); //(123) 456-7890
console.log("================================");
//?Reto3
console.log("================================");
console.log("Reto3");
numbersM = [2, 1, 9, 5, 7, 3, 10];
function findMissingNumbers(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  auxArray = [];
  for (let i = 1; i <= numbers.at(-1); i++) {
    auxArray.push(i);
  }
  return auxArray.filter((x) => !numbers.includes(x));
}

console.log(findMissingNumbers(numbersM));

function findMissingNumbers2(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  auxArray = [];
  for (let i = 1; i <= numbers.at(-1); i++) {
    if (numbers.indexOf(i) < 0) {
      auxArray.push(i);
    }
  }
  return auxArray;
}
console.log(findMissingNumbers2(numbersM));
console.log("================================");
