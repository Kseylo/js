'use strict';

// const bookings = [];
// // DEFAULT PARAMETERS
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);
//////////////////////////////////////////////////////
// HOW PASSING ARGUMENTS WORKS
// const flight = 'LH234';
// const aleksey = {
//   name: 'Aleksey Sarychev',
//   passport: 1231233424,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 1231233424) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// // checkIn(flight, aleksey);
// // console.log(flight);
// // console.log(aleksey);

// // is the same as doing...
// //const flightNum = flight;
// //const passenger = aleksey;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(aleksey);
// checkIn(flight, aleksey);
//////////////////////////////////////////////////////
// FUNCTION ACCEPTING FUNCTION, CALLBACK FUNCTION
// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// // Higher order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('Javascript is the best', upperFirstWord);

// transformer('JavaScript is the best', oneWord);

// const multiply = function (a, b) {
//   return a * b;
// };

// const calculator = function (a, b, fn) {
//   console.log(`Calculating... ${a} * ${b}`);
//   console.log(`Calculation complete... result: ${fn(a, b)} `);
// };

// calculator(2, 4, multiply);
//////////////////////////////////////////////////////
// FUNCTION RETURNING FUNCTIONS
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey');
// greeterHey('Aleksey');
// greeterHey('Dasha');
// greet('Hello')('Aleksey');

// const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
// greetArrow('Hi')('Aleksey');
//////////////////////////////////////////////////////
// THE CALL AND APPLY METHODS

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// lufthansa.book(239, 'Aleksey Lozhkin');
// lufthansa.book(635, 'Dasha Reutskaya');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };
// // CALL METHOD
// const book = lufthansa.book;
// // Does NOT work
// // book(23, 'Aleksey Lozhkin');

// book.call(eurowings, 23, 'Aleksey Lozhkin');
// console.log(eurowings);

// book.call(lufthansa, 23, 'Some Shit');
// console.log(lufthansa);
// // APPLY METHOD
// const flightData = [583, 'George Cooper'];
// book.apply(eurowings, flightData);
// console.log(eurowings);

// book.call(lufthansa, ...flightData);

// // BIND METHOD
// const bookEW = book.bind(eurowings);
// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Alexa Symi');

// // With Event Listenters
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// // const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.1, 200));

// // const addVAT = addTax.bind(null, 0.23);
// // // addVAT = value => value + value * 0.23;
// // console.log(addVAT(100));

// // FUNCTION RETURNING FUNCTIONS
// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };
// const addTax = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const taxVAT = addTax(0.23);
// console.log(taxVAT(100));
//////////////////////////////////////////////////////
// CODING CHALLENGE
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll results are 13, 2, 4, 1
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]
//////////////////////////////////////////////////////
// Immediately invoked function expression for
// (function () {
//   console.log('This will never run again');
// })();
//////////////////////////////////////////////////////
// Closures
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
//example 1
// let f;
// // first birthplace
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// // second
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// //first closure
// g();
// f();
// // second closure
// h();
// f();
//example 2
// const boardsPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardsPassengers(180, 3);
// Coding challenge 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
