'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(
    36
  );
  console.log(output);
}
//////////////////////////////////////////////////////
// ENHANCED OBJECT LITERALS
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 ENHANCED object LITERALS
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
};
//////////////////////////////////////////////////////
// Looping objects, Object keys, Values, entries
// Property Names
// const properties = Object.keys(openingHours);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);
// // Property values
// const values = Object.values(openingHours);

// // Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// //////////////////////////////////////////////////////
// Optional chaining
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.fri?.open);
// // multiple chaining
// console.log(restaurant.openingHours?.fri?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods optional chaining
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// //Arrays optional chaining
// const users = [{ name: 'Aleksey', email: 'test@example.com' }];

// console.log(users[0]?.name ?? 'User array empty');

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via Del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const ingredients = [
//   prompt("Let's make a pasta! Ingredient 1?"),
//   prompt("Let's make a pasta! Ingredient 2?"),
//   prompt("Let's make a pasta! Ingredient 3?"),
// ];
// restaurant.orderPasta(...ingredients);
//////////////////////////////////////////////////////
// Object Destructuring
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// // console.log(restaurantName, hours, tags);
// //////////////////////////////////////////////////////
// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// //////////////////////////////////////////////////////
// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);
// ///////////////////////////////////////////////////////////////
// // Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const arr = [2, 3, 4];

//////////////////////////////////////////////////////
// //array destructuring
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];

// // Function destructuring
// const [started, mainCourse] = restaurant.order(2, 0);
// console.log(started, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
//////////////////////////////////////////////////////
// Spread Operator

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];
// // Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Aleksey';
// const nameArr = [...str, ' ', 'S.'];
// console.log(nameArr);

// objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
//////////////////////////////////////////////////////
// Short Circuiting (&& and ||)
// console.log(3 || 'Aleksey');
// console.log('' || 'Aleksey');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(null || undefined);
// // OR operator returns first truthy value or last falsy value if all values is false
// // We can use or operator to set default values
// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// // const guests2 = restaurant.numGuests || 10;
// // console.log(guests2);
// // // And operator return first falsy value or last truthy value if all values is true
// // // We can use and operator to execute code in the second operand
// // console.log(0 && 'Jonas');
// // console.log(7 && 'Jonas');

// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('mushrooms');
// // }
// // restaurant.orderPizzad && restaurant.orderPizza('mushrooms', 'spinach');

// //Nullish: null and undefined(NOT 0 or "")
// // If null or undefined, then second operand is executed
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);
//////////////////////////////////////////////////////
// CODING CHALLENGEs
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // Tasks
// // 1. Create one player array for each team (variables 'players1' and
// // 'players2')

// const [players1, players2] = game.players;

// // 2. The first player in any player array is the goalkeeper and the others are field
// // players. For Bayern Munich (team 1) create one variable ('gk') with the
// // goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// // field players
// const [gk, ...fieldPlayers] = game.players[0];

// // 3. Create an array 'allPlayers' containing all players of both teams (22
// //   players)

// const allPlayers = [...game.players[0], ...game.players[1]];

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// // new array ('players1Final') containing all the original team1 players plus
// // 'Thiago', 'Coutinho' and 'Perisic'

// const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];

// // 5. Based on the game.odds object, create one variable for each odd (called
// //   'team1', 'draw' and 'team2')
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// // 6. Write a function ('printGoals') that receives an arbitrary number of player
// // names (not an array) and prints each of them to the console, along with the
// // number of goals that were scored in total (number of player names passed in)
// function printGoals(...playerName) {
//   for (let i = 0; i < playerName.length; i++) {
//     console.log(`${playerName[i]} scored! Number of goals is ${i + 1}`);
//   }
// }
// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// // 7. The team with the lower odd is more likely to win. Print to the console which
// // team is more likely to win, without using an if/else statement or the ternary
// // operator.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

//////////////////////////////////////////////////////
// FOR OF
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for (const item of menu) {
// //   console.log(item);
// // }

// for (const [i, el] of menu.entries()) {
//   console.log(`${ i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

//////////////////////////////////////////////////////
// CODING CHALLENGE 2
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// // along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [k, v] of game.scored.entries()) {
//   console.log(`Goal ${k + 1}: ${v}`);
// }

// // 2. Use a loop to calculate the average odd and log it to the console (We already
// // studied how to calculate averages, you can go check if you don't remember)
// const values = Object.values(game.odds);
// const oddsLength = values.length;
// let sum = 0;
// for (const num of values) {
//   sum += num;
// }
// console.log(`Average odd is ${sum / oddsLength}`);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them
// // (except for "draw"). Hint: Note how the odds and the game objects have the
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
// // 4. Bonus: Create an object called 'scorers' which contains the names of the
// // players who scored as properties, and the number of goals as the value. In this
// // game, it will look like this:
// // {
// // Gnarby: 1,
// // Hummels: 1,
// // Lewandowski: 2
// // }
// const players = Object.values(game.scored);
// const counts = {};
// for (const goals of players) {
//   counts[goals] = counts[goals] ? counts[goals] + 1 : 1;
// }
// console.log(counts);
//////////////////////////////////////////////////////
// SETS
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet.has('Pizza'));
// ordersSet.add('Bread');
// ordersSet.delete('Pizza');
// console.log(ordersSet);
// for (const order of ordersSet) {
//   console.log(order);
// }
// // USE CASE REMOVE DUPLICATE VALUES FROM ARRAY
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
//////////////////////////////////////////////////////
// MAPS
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest.size);
// rest.set([1, 2], 'Test');
// console.log(rest.get([1, 2])); // returns undefined because this array not the same
// MAPS ITERATION
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try Again!'],
// ]);
// console.log(question);
// // Convert object to map
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Iteration maps
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
//////////////////////////////////////////////////////
// CODING CHALLENGE
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// // Your tasks:
// // 1. Create an array 'events' of the different game events that happened (no
// // duplicates)
// const events = [...new Set(gameEvents.values())];
// // 2. After the game has finished, is was found that the yellow card from minute 64
// // was unfair. So remove this event from the game events log.
// gameEvents.delete(64);
// // 3. Compute and log the following string to the console: "An event happened, on
// // average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// // 4. Loop over 'gameEvents' and log each element to the console, marking
// // whether it's in the first half or second half (after 45 min) of the game, like this:
// // ⚽
// // [FIRST HALF] 17:
// // GOAL
// for (const [time, events] of gameEvents.entries()) {
//   if (time < 45) {
//     console.log(`[FIRST HALF] ${time} ${events}`);
//   } else {
//     console.log(`[SECOND HALF] ${time} ${events}`);
//   }
// }
//////////////////////////////////////////////////////
// WORKING WITH STRINGS
// const airline = 'TAP Air Portugal';
// const plane = 'A320';
// // console.log(plane[0]);
// console.log(airline.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You got lucky');
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// console.log(typeof new String('Aleksey'));
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalizaion in name
// const passenger = 'ALekSeY';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);
// // Comparing emails
// const email = 'hello@aleksey.io';
// const loginEmail = '  Hello@AlEkSeY.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(email === normalizedEmail);

// // replacing part of strings
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);
// const announcements =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcements.replace('door', 'gate'));
// console.log(announcements.replaceAll('door', 'gate'));
// console.log(announcements.replace(/door/g, 'gate'));

//Booleans

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('A'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo'))
//   console.log('Part of the NEW Airbus family');

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };
// checkBaggage('I have a laptop, some food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a Gun for protection');
//////////////////////////////////////////////////////
// CODING CHALLENGE 4
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// §
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
/////FIRST SOLUTION
// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   let counter = 1;
//   for (const letter of rows) {
//     let inputText = letter.trim().toLowerCase();
//     let indexOfUnderscore = inputText.indexOf('_') + 1;
//     let strSliceBefore = inputText.slice(0, indexOfUnderscore).replace('_', '');
//     let underscoreChar = inputText
//       .slice(indexOfUnderscore)
//       .charAt(0)
//       .toUpperCase();
//     let str = inputText.slice(indexOfUnderscore).slice(1);
//     let resultStr = strSliceBefore + underscoreChar + str;
//     console.log(`${resultStr.padEnd(20)}${'✅'.repeat(counter)}`);
//     counter++;
//   }
// });
/////SECOND SOLUTION:
// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [i, row] of rows.entries()) {
//     const [firstPart, secondPart] = row.toLowerCase().trim().split('_');
//     const output = `${firstPart}${secondPart.replace(
//       secondPart[0],
//       secondPart[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });
