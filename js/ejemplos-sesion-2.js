//Sesion 2 Controles de flujo
//!Ejemplo1
const time = 26;
let greeting;
if (time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20) {
  greeting = "Good evening";
}

console.log(greeting); // Good afternoon
//!Ejemplo2
const day = 5;
let text;

switch (day) {
  case 0:
    text = "Sunday";
    break;
  case 1:
    text = "Monday";
    break;
  case 2:
    text = "Tuesday";
    break;
  case 3:
    text = "Wednesday";
    break;
  case 4:
    text = "Thursday";
    break;
  case 5:
    text = "Friday";
    break;
  case 6:
    text = "Saturday";
    break;
  default:
    text = "Error";
}

console.log(text); // Tuesday
//!Ejemplo3
for (let i = 0; i <= 5; i++) {
  console.log("Hello World");
}
//!Reto 1
if (time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20 && time <= 24) {
  greeting = "Good evening";
} else {
  greeting = "Time invalid!";
}
console.log(greeting);
//!Reto 2
const start = 0;
const end = 100;
for (i = start; i <= end; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//!Reto 3
console.log("Numeros primos");
for (k = start; k <= end; k++) {
  nPrimo = true;
  for (j = 2; j < k; j++) {
    if (k % j === 0 && j != k) {
      nPrimo = false;
    }
  }
  if (nPrimo === true && k != 0 && k != 1) {
    console.log(k);
  }
}
