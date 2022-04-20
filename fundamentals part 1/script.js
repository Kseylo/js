// let markWeight = 95;
// let markHeight = 1.88;
// let johnWeight = 85;
// let johnHeight = 1.76;
// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / markHeight ** 2;
// markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

//TAKING DECISIONS: if/else Statements
// const age = 18;
// if (age >= 18) {
//     console.log("Can start driving");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Too young. Wait another ${yearsLeft} years`);
// }

// ASSIGNMENT
// const country = 'Russia';
// const population = 144.1;
// const averagePopulation = 33;

// if (population > averagePopulation) {
//     console.log(`${country} population is above average on ${population - averagePopulation}`);
// } else {
//     console.log(`${country} population is ${averagePopulation - population} below average`);
// }

//CODING CHALLENGE
// let markWeight = 95;
// let markHeight = 1.88;
// let johnWeight = 85;
// let johnHeight = 1.76;
// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / markHeight ** 2;
// markHigherBMI = markBMI > johnBMI;
// if (markHigherBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
// }

//TYPE CONVERSION AND COERCION TO

// const inputYear = '1998';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(String('23'));

//type coercion
// console.log("I am " + 23 + " years old");
// console.log('23' - '10' - 3 );
// console.log('23' + '10' + 3 );

// 5 false values: 0, '', undefined, null, Nan

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));
// console.log(Boolean(1));

// const money = 0; // try to change from 0 to 1 and see difference
// if (money) {
//     console.log("Don't spend it all!");
// } else {
//     console.log("Go get a job!");
// }

// EQUALITY OPERATORS
// const age = 18;
// if (age === 18 ) console.log("You just became an adult");
// if (age == "18") console.log("Does type coercion")

// const favourite = Number(prompt("What's you favourite number?"));
// if (favourite === 23) {
//     console.log(`Cool! ${favourite} is an amazing number!`)
// } else if(favourite === 7) {
//     console.log(`${favourite} is also a cool number`);
// } else {
//     console.log('Number is not 23 or 7');
// }

// if (favourite !== 23) console.log("Why not 23?");

//ASSIGNMENT

// const numNeighbours = Number(prompt("How many neighbor counties does your country have?"));
// if (numNeighbours === 1) {
//     console.log('Only 1 border!')
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log("No borders");
// }

//LOGIC OPERATORS

// const hasDriverLicense = true;
// const hasGoodVision = false;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// const shouldDriver = hasDriverLicense && hasGoodVision;

// if (shouldDriver) {
//     console.log("Sara is able to drive");
// } else {
//     console.log('Someone else should drive...');
// }

// ASSIGNMENT

// const language = "Russian";
// const population = 114.1;
// const isIsland = false;

// if (language == 'English' && population <= 50 && isIsland === false) {
//     console.log('You should live in Russia')
// } else {
//     console.log('Russia does not meet your criteria');
// }

// The switch Statement

// const day = 'bla';

// switch(day) {
//     case 'monday':
//         console.log("Plan course structure");
//         break;
//     case 'tuesday':
//         console.log("Prepare theory videos");
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log("Write code examples");
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'satudray':
//     case 'sunday':
//         console.log("Enjoy the weekend");
//         break;
//     default:
//         console.log("Not a valid day!");
// }

// The conditional (Ternary) Operator
// const age = 23;
// age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water")

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// Coding challenge

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? 15 : 20;
// console.log(
//   `The bill was ${bill}, the tip was ${
//     (bill / 100) * tip
//   }, and the total value ${bill + (bill / 100) * tip}`
// );

// solution
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );
