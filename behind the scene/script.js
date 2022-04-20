'use strict';

// function calcAge(birthYear) {
//   const age = 2022 - birthYear;
//   //   console.log(firstName); // firstName declared in global scope
//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear} years.`;
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1998);
// Can't access this 2, because they declared in inner scope
// console.log(age);
// printAge();

// Variables hosting
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'aleksey';
// let job = 'software developer';
// const year = 1991;

// Functions hosting
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// It works because var is undefined and it's falsy value. Be careful with var!
// if (!numProduct) {
//   deleteShoppingCard();
// }

// var numProduct = 10;

// function deleteShoppingCard() {
//   console.log('All products deletes');
// }
// console.log(this);

// Undefined because we in strict mode
// const calcAge = function (birthYear) {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calcAge(1998);

// Because arrow function does not have own this,
// and it's point to parent scope (window in global scope)
// const calcAgeArrow = birthYear => {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1998);

// const aleksey = {
//   year: 1998,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };
// aleksey.calcAge();

// const dasha = {
//   year: 2000,
// };

// dasha.calcAge = aleksey.calcAge;
// dasha.calcAge();

// // undefined because it's not attached to any object

// const f = aleksey.calcAge;
// f();
// var firstName = 'Dasha';

// const aleksey = {
//   firstName: 'Aleksey',
//   year: 1998,
//   calcAge: function () {
//     // console.log(this);
//     // console.log(2022 - this.year);
//     // Solution 1 use self = this
//     // const self = this;
//     // const isMillenial = function () {
//     // console.log(self);
//     // console.log(self.year >= 1981 && self.year <= 1996);
//     //   console.log(this.year >= 1981 && this.year <= 1996);
//     //};

//     //Solution 2 because arrow function use parent
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// // we get undefined because arrow function does not have her own this keyword
// // and this.firstName = undefined(window object)
// // because we declared var firstName it gets into window object properties
// aleksey.greet();
// aleksey.calcAge();

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age, oldAge); //31, 30

// const me = {
//   name: 'Aleksey',
//   age: 24,
// };

// const friend = me;
// friend.age = 22;
// console.log(me); // age 22
// console.log(friend); // age 22
// friend.name = 'Dasha';
// console.log(me);

//Primitive types
let lastName = 'Lozhkin';
let oldLastName = lastName;
lastName = 'Sarychev';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2); //Object assign merge object
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
