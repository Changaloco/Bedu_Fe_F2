//Sesion 7 programacion funcional
//!Ejemplo1
const car = {
  brand: "Nissan",
  model: "Sentra",
  year: 2020,
};
function addColor(car) {
  car.color = "Black";
  return car;
}
console.log("Before calling addColor()", car);

const sameCar = addColor(car);

console.log("After calling addColor()", car);
console.log("After calling addColor()", sameCar);

console.log("Same car?", car === sameCar); // true
function addColor2(car) {
  const newCar = Object.assign({}, car, {
    color: "Black",
  });
  return newCar;
}
console.log("Before calling addColor()", car);

const newCar = addColor2(car);

console.log("After calling addColor()", car);
console.log("After calling addColor()", newCar);

console.log("Same car?", car === newCar); // false
//?Ejemplo2
const cart = [
  {
    item: "Laptop",
    quantity: 1,
  },
];
function addItemToCart(item, quantity) {
  cart.push({
    item: item,
    quantity: quantity,
  });
}
function addItemToCart2(cart, item, quantity) {
  const newCart = cart.map(function (element) {
    return element;
  });

  newCart.push({
    item: item,
    quantity: quantity,
  });

  return newCart;
}

sameArray = addItemToCart2(cart, "Phone", 1);

console.log(sameArray);
//*Ejemplo3
function sumDigits(number) {
  return number
    .toString()
    .split("")
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    }, 0);
}

console.log(sumDigits(12345));
//!Reto1
function flatten(arrays) {
  return arrays.reduce(
    (newArray, arrInd) =>
      Array.isArray(arrInd)
        ? newArray.concat(flatten(arrInd))
        : newArray.concat(arrInd),
    []
  );
}

const arrays = [[1, 2, 3], [4, 5], [6]];
const array = flatten(arrays);

console.log(array); // [1, 2, 3, 4, 5, 6]
//?Reto2
function compact(array) {
  return array.filter(function (value) {
    if (value) {
      return value;
    }
  });
}

const array2 = [0, 1, false, 2, "", 3];
const compactedArray = compact(array2);

console.log(compactedArray); // [1, 2, 3]
//*Reto3
function loop(start, test, update, body) {
  do {
    body(start);
    start = update(start);
  } while (test(start));
}

const test = function (n) {
  return n > 0;
};

const update = function (n) {
  return n - 1;
};

loop(3, test, update, console.log);
// 3
// 2
// 1
