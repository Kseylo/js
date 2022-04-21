'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];

//////////////////////////////////////////////////////
// SLICE
// // slice from index 2 to 4(not included)
// console.log(arr.slice(2, 4));
// //slice last 2 elements
// console.log(arr.slice(-2));
// // from index 1 and 2 last elemtns not included
// console.log(arr.slice(1, -2));
// // creates a shallow copy of the array
// console.log(arr.slice());

// //////////////////////////////////////////////////////
// // SPLICE
// // splice method mutate original array
// console.log(arr.splice(2));
// console.log(arr);
//////////////////////////////////////////////////////
// reverse
// reverse does mutate array
// console.log(arr.reverse());
// console.log(arr);

// //////////////////////////////////////////////////////
// // CONCAT
// // does not mutate original arrays
// const arr2 = ['f', 'g', 'h', 'i', 'j'];
// const letter = arr.concat(arr2);
// console.log(letter);
// // spread operator does the same
// console.log([...arr, ...arr2]);
// //////////////////////////////////////////////////////
// // JOIN
// console.log(letter.join('-'));
// Common for loop
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }
// For each
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index} You withdrew ${Math.abs(movement)}`);
//   }
// });
// WITH maps
// currencies.forEach(function (v, k) {
//   console.log(k, v);
// });
// WITH SET
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key) {
//   console.log(value, key);
// });
