//!Reto 1
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(vec) {
    return new Vector(this.x + vec.x, this.y + vec.y);
  }
  minus(vec) {
    return new Vector(this.x - vec.x, this.y - vec.y);
  }
  length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

const vec1 = new Vector(1, 2);
const vec2 = new Vector(2, 3);

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979
//?Reto 2
class Group {
  members = [];
  static from(arrayN) {
    let grupo = new Group();
    for (let i = 0; i < arrayN.length; i++) {
      grupo.add(arrayN[i]);
    }
    return grupo;
  }
  add(number) {
    if (this.has(number)) {
      console.log("Esta wea ya ha sido agregada");
    } else {
      this.members.push(number);
    }
  }
  has(number) {
    return this.members.includes(number);
  }
}
const group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false

group.add(10);
console.log(group.has(10)); // true
console.log(group);
//*Reto3
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getPerimeter() {
    return this.a + this.b + this.c;
  }
}
const triangle = new Triangle(1, 2, 3);
console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
console.log(triangle.getPerimeter()); // 6
