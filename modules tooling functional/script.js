// // importing module
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';

// console.log('Importing module');

// addToCart('bread', 5);
// console.log(totalQuantity, price);

// importing default export
// import add from './shoppingCart.js';

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
console.log(cart);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const aleksey = new Person('Aleksey');
