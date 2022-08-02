//Sesion 4 funciones
//!Ejemplo1
console.log("#######Ejemplo1###########");
function calculateAge(birthYear) {
  const age = 2022 - birthYear;
  return age;
}
const ageJohn = calculateAge(1995);
console.log(ageJohn);
function yearsUntilRetirement(year, name) {
  const age = calculateAge(year);
  const retirement = 65 - age;
  console.log(`${name} retires in ${retirement} years.`);
}
yearsUntilRetirement(1995, "John Doe");
//!Ejemplo2
console.log("#######Ejemplo2###########");
const whatDoYouDo = function (job, name) {
  switch (job) {
    case "developer":
      return name + " develops cool apps.";
    case "designer":
      return name + " designs awesome websites.";
    default:
      return name + " does something else.";
  }
};

console.log(whatDoYouDo("developer", "John Doe"));
console.log(whatDoYouDo("designer", "Jane Doe"));
console.log(whatDoYouDo("retired", "Mark Doe"));
//!Ejemplo3
console.log("#######Ejemplo3###########");
const lastName = "Doe";
(function (lastName) {
  const name = "John";
  console.log(name + " " + lastName);
})(lastName);
//*Reto 1
console.log("#######Reto1###########");
function power(base, exponent) {
  var result = 1;
  for (let i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
}
var resultadoPotencia = power(3, 6);
console.log(resultadoPotencia);
//*Reto 2
console.log("#######Reto2###########");
const getLargerInt = (number1, number2) =>
  number1 > number2 ? number1 : number2;
console.log(getLargerInt(24, 356));
//*Reto 3
console.log("#######Reto3###########");

function fibonacciSequence(limit) {
  var secuence = [0, 1];
  if (limit > 1) {
    for (let i = 2; i <= limit; i++) {
      let firstElement = i - 2;
      let lastElement = i - 1;
      let numberResult = secuence[firstElement] + secuence[lastElement];
      secuence.push(numberResult);
    }
    secuence.shift();
    return secuence;
  } else {
    secuence.shift();
    return secuence;
  }
}
console.log(fibonacciSequence(15));

function operation(number) {
  if (number <= 1) {
    return 1;
  } else {
    return operation(number - 2) + operation(number - 1);
  }
}
function fibonacciSequence2(limit) {
  if (limit > 0) {
    for (let i = 0; i < limit; i++) {
      console.log(operation(i));
    }
  } else {
    console.log("El limite debe ser mayor a 0");
  }
}
fibonacciSequence2(15);
//?Postwork

//!Postwork DeepEqual
function deepEqual(a, b) {
  let valA = typeof a;
  let valB = typeof b;
  if (valA != "object" && valB != "object") {
    return valA == valB;
    if (valA == valB) {
    } else {
      if (a == b) {
        return true;
      }
    }
  } else {
    console.log(Object.keys(a));
    console.log(Object.keys(b));
  }
}

const john = {
  firstName: "John",
  lastName: "Doe",
};

console.log("Test 1:", deepEqual(1, 1)); // true
console.log("Test 2:", deepEqual(1, "1")); // false
console.log("Test 3:", deepEqual(john, john)); // true
console.log("Test 4:", deepEqual(john, { firstName: "John", lastName: "Doe" })); // true
console.log("Test 5:", deepEqual(john, { firstName: "John" })); // false

//!PostWork Chunk
function chunk(array, size) {
  // Code goes here
}

const data = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Test 1:", chunk(data, 1)); // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log("Test 2:", chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log("Test 3:", chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]

//! Postwork Frequency

function frequency(string) {
  // Code goes here
}

console.log("Test 1:", frequency("cccbbbaaa"));
// {a: 3, b: 3, c: 3}
console.log("Test 2:", frequency("www.bedu.org"));
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log("Test 3:", frequency("john.doe@domain.com"));
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
