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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, move) => acc + move, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(move => move > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(move => move < 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumOut.textContent = `${Math.abs(out)}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

const updateUI = function (acc) {
  displayMovements(acc.movements);
  // Dispaly balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

createUsernames(accounts);
// Event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // Dispaly UI and message
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
  }
  // Clear input field
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();
  // Update UI
  updateUI(currentAccount);
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
  }
  updateUI(currentAccount);
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // delete acc
    accounts.splice(index, 1);
    //hide ui
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
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
//////////////////////////////////////////////////////
// CODING CHALLENGE
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// const checkDogs = function (dogsJulia, dogsKate) {
//   const correctArr = dogsJulia.slice( );
//   correctArr.splice(0, 1);
//   correctArr.splice(-2);
//   const allDogs = [...correctArr, ...dogsKate];
//   allDogs.forEach(function (dog, i) {
//     const dogAge =
//       dog >= 3 ? `an adult, and is ${dog} years old` : 'still a puppy 🐶';
//     console.log(`Dog number ${i + 1} is ${dogAge}`);
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// const eurToUsd = 1.1;

// // const movementsUSD = movements.map(function (v) {
// //   return v * eurToUsd;
// // });

// // Arrow function with map
// // const movementsUSD = movements.map(v => v * eurToUsd);
// // console.log(movementsUSD);

// const movementsDescriptions = movements.map(
//   (v, i) =>
//     `Movement ${i + 1}: You ${v > 0 ? 'deposited' : 'withdrew'} ${Math.abs(v)}`
// );
// console.log(movementsDescriptions);
//////////////////////////////////////////////////////
// Filter examples
// const deposits = movements.filter(mov => mov > 0);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);
//////////////////////////////////////////////////////
// Reduce examples
// const balance = movements.reduce(function (acc, current, i, arr) {
//   return acc + current;
// }, 0);
// console.log(balance);
// const balance = movements.reduce((acc, current, i, arr) => acc + current, 0);
// console.log(balance);

// Maximum value
// const balanceMax = movements.reduce((acc, current) => {
//   if (acc > current) return acc;
//   else return current;
// }, movements[0]);
// console.log(balanceMax);
//////////////////////////////////////////////////////
// Coding Challenge
// const calcAverageHumanAge = function (dogArr) {
//   const dogAgeInHumanAge = dogArr.map(age =>
//     age <= 2 ? 2 * age : 16 + age * 4
//   );
//   const dogAgeLessThan18 = dogAgeInHumanAge.filter(age => age >= 18);
//   const average =
//     dogAgeLessThan18.reduce((acc, current) => acc + current, 0) /
//     dogAgeLessThan18.length;
//   return average;
// };
// const testData = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const testData2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(testData);
// console.log(testData2);

// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * 1.1)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);
//////////////////////////////////////////////////////
// Coding challenge
// const calcAverageHumanAge = function (dogArr) {
//   const dogAgeInHumanAge = dogArr.map(age =>
//     age <= 2 ? 2 * age : 16 + age * 4
//   );
//   const dogAgeLessThan18 = dogAgeInHumanAge.filter(age => age >= 18);
//   const average =
//     dogAgeLessThan18.reduce((acc, current) => acc + current, 0) /
//     dogAgeLessThan18.length;
//   return average;
// };

// const calcAverageHumanAge = dogArr =>
//   dogArr
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)Блин,
//     .reduce((acc, current, i, arr) => acc + current / arr.length, 0);
// const testData1 = [5, 2, 4, 1, 15, 8, 3];
// const testData2 = [16, 6, 10, 5, 6, 1, 4];
// console.log(calcAverageHumanAge(testData1));
// console.log(calcAverageHumanAge(testData2));
//////////////////////////////////////////////////////
// FIND METHOD
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);
// console.log(movements);

// console.log(accounts);

// const account = accounts.find(acc => acc.username === 'jd');
// // console.log(account);
// console.log(movements);
// console.log(movements.includes(-130));

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));
// const arr = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arr.flat());

// const overalBalance = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(overalBalance);
// const owners = ['Aleksey', 'Dasha', 'Jonas', 'Zach', 'Adam'];
// console.log(owners.sort());
// console.log(owners);

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);
// movements.sort((a, b) => a - b); //ascending order
// console.log(movements);
// movements.sort((a, b) => b - a); //descending order
// console.log(movements);
//////////////////////////////////////////////////////
// Ways of creating and filling arrays
// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]); // write by hand

// const arr = new Array(7);
// console.log(arr);
// arr.fill(1, 0, arr.length);
// console.log(arr);
// // Array.from(arr).sort((a, b) => a - b);
// const newArr = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(newArr);
// const randomDice = Array.from(
//   { length: 100 },
//   i => (i = Math.trunc(Math.random() * 6) + 1)
// );

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });
//////////////////////////////////////////////////////
// Arrays methods practice with

// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositSum);

// // 2.
// // const numDeposits1000 = accounts
// //   .flatMap(acc => acc.movements)
// //   .filter(mov => mov >= 1000).length;

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, current) => (current >= 1000 ? ++count : count), 0);
// console.log(numDeposits1000);

// // 3
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(deposits, withdrawals);

// // 4
// const convertTitleCase = function (title) {
//   const exceptions = ['a', 'an', 'and ', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(' ');
//   return titleCase;
// };
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));
//////////////////////////////////////////////////////
// CODING CHALLENGE
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// 1.
dogs.forEach(function (dog) {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// 2
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating too ${
    sarahDog.curFood > sarahDog.recommendedFood ? 'much' : 'little'
  }`
);

// 3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
// 6.
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

// 7
console.log(dogs.filter(checkEatingOkay));
// 8

// const sortedDogs = dogs
//   .slice()
//   .flatMap(dogs => dogs.recommendedFood)
//   .sort((a, b) => a - b);
// console.log(sortedDogs);
// create a shallow copy
const sortedDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood > b.recommendedFood);
console.log(sortedDogs);

// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
