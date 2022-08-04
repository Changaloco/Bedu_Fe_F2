//Sesion 6 Programacion Orientada a Objetos
//!Ejercicio1
const Person = function (name, birthYear, job) {
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
};
const john = new Person("John", 1990, "Developer");
const mark = new Person("Mark", 1985, "Teacher");
const jane = new Person("Jane", 1975, "Designer");
console.log(john, mark, jane);
//?Ejercicio2
const Developer = function (name, skills, yearsOfExperience) {
  Person.call(this, name);
  this.skills = skills;
  this.yearsOfExperience = yearsOfExperience;
};
const gaben = new Developer("Gaben", "JavaScript", 10);

console.log(gaben);
//!Ejercicio3
Person.prototype.calculateAge = function () {
  const today = new Date();
  const year = today.getFullYear();

  console.log(year - this.birthYear);
};
john.calculateAge();

mark.calculateAge();

jane.calculateAge();
//?Reto1
const Vec = function (x, y) {
  this.x = x;
  this.y = y;
};

Vec.prototype.plus = function (vector) {
  return new Vec(this.x + vector.x, this.y + vector.y);
};
Vec.prototype.minus = function (vector) {
  return new Vec(this.x - vector.x, this.y - vector.y);
};
Vec.prototype.length = function () {
  return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
};
const vec1 = new Vec(1, 2);
const vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979
//!Reto2
const Group = function () {
  this.members = [];
};
Group.from = function (info) {
  let grupo = new Group();
  for (let i = 0; i < info.length; i++) {
    grupo.add(info[i]);
  }
  return grupo;
};
Group.prototype.add = function (number) {
  if (!this.has(number)) {
    this.members.push(number);
  }
};
Group.prototype.has = function (number) {
  return this.members.includes(number);
};
const group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false

group.add(10);
console.log(group.has(10)); // true
//?Reto3
const Triangle = function (a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
};
Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c;
};
const triangle = new Triangle(1, 2, 3);

console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
console.log(triangle.getPerimeter()); // 6
