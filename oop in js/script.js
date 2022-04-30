'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never create method in constructor function
//   //   this.calcAge = function () {
//   //     console.log(2022 - this.birthYear);
//   //   };
// };

// const aleksey = new Person('Aleksey', 1998);
// console.log(aleksey);
// console.log(aleksey instanceof Person);

// // 1. New empty object is create
// // 2. Function is called, this keyword is pointing in this new object
// // 3. object linked to prototype
// // 4. function automatically return that object

// // Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };
// aleksey.calcAge();
// console.log(aleksey.__proto__);
// console.log(aleksey.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(aleksey));
// Person.prototype.species = 'Homo Sapiens';
// console.log(aleksey.species);
// // inside aleksey object
// console.log(aleksey.hasOwnProperty('firstName'));
// // inside prototype property of person
// console.log(aleksey.hasOwnProperty('species'));

// //prototype of aleksey Person.prototype
// console.log(aleksey.__proto__);
// //prototype of prototype is object.prototype
// console.log(aleksey.__proto__.__proto__);
// // prototype of object.prototype is null
// console.log(aleksey.__proto__.__proto__.__proto__);
// console.log(Person.prototype.constructor);

// const arr = [3, 4, 5, 6, 6, 7, 7, 8, 9, 10];
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__ === Object.prototype);
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());
// // Static

// Person.hey = function () {
//   console.log('Hey there!');
// };
// Person.hey();
// // can't use because it's in constructor
// // aleksey.hey();

// //Coding challenge
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} accelerating to ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} braking to ${this.speed} km/h`);
// };
// const bmw = new Car('BMW', 120);
// bmw.accelerate();
// bmw.brake();

// const mercedes = new Car('Mercedes', 95);
// mercedes.accelerate();
// mercedes.brake();

// // ES6 classes
// // class expression
// // const PersonCl = class {}
// // class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Instance methods
//   // Methods will be added to prototype property
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2022 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   // static method
//   static hey() {
//     console.log('Hey there!');
//   }
// }
// const jessica = new PersonCl('Jessica Davis', 1998);
// jessica.calcAge();
// // getter
// console.log(jessica.age);

// // Class just hides true nature
// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };
// jessica.greet();

// // 1. Classes are NOT hoisted. We can't use them before they declared
// // 2. Class are first-class citizens. We can pass them into the function
// // 3. Classes are executed in strict mode

// const account = {
//   owner: 'jonas',
//   movements: [200, 540, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// // getter
// console.log(account.latest);
// // setter
// account.latest = 50;
// console.log(account.movements);
// static method calling
// PersonCl.hey();
// Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2000;
// console.log(steven);
// steven.calcAge();
// console.log(steven.__proto__);
// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 2001);
// sarah.calcAge();

// Coding challenge

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} going at ${this.speed}`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car('Ford', 120);
// console.log(ford);
// ford.accelerate();
// ford.brake();
// console.log(ford.speedUS);
// ford.speedUS = 80;
// console.log(ford);

// Inheritance between classes
// Function constructor method
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2002, 'CS');
// mike.introduce();
// mike.calcAge();
// // Point to Student.prototype
// console.log(mike.__proto__);
// // Points to Person.prototype that we inheritet in line 219
// console.log(mike.__proto__.__proto__ === Person.prototype);
// // Points to Person constructor, but should point to student
// console.log(Student.prototype.constructor);
// // Fix
// Student.prototype.constructor = Student;
// console.log(Student.prototype.constructor);

// // Coding challenge 3
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} accelerating to ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} braking to ${this.speed} km/h`);
// };
// const bmw = new Car('BMW', 120);

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.speed} going at ${this.speed}, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla.charge);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// console.log(tesla);

// Inheritance betweens classess ES6 classes
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2022 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   static hey() {
//     console.log('Hey there!');
//   }
// }

// class StudentCl extends PersonCl {
//   // Works even without constructor, but course would be undefined
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first. Is responsible for creating this keyword
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   // overwriting method
//   calcAge() {
//     console.log(
//       `I'm ${
//         2022 - this.birthYear
//       } years old, but as a student i feel more like ${
//         2022 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2003, 'CS');
// martha.introduce();
// martha.calcAge();
//////////////////////////////////////////////////////
// Inheritance Between. Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 1997, 'CS');
// jay.introduce();
// jay.calcAge( );

// Public fields
// Private fields
// Public methods
// Private methods
// class Account {
//   // Public fields(instances)
//   locale = navigator.language;
//   // Private fields
//   #movements = [];
//   #pin;
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // protected property
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }
//   // Public methods
//   // Public interface
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this;
//     }
//   }
//   // Private methods
//   #approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('Aleksey', 'RUB', 1111);
// console.log(acc1);
// acc1.deposit(100);
// acc1.withdraw(90);
// console.log(acc1);
// console.log(acc1.getMovements());
// acc1.requestLoan(100);
// console.log(acc1.getMovements());
// // Chaining
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());
// Coding challenge

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 8;
//     console.log(`${this.make} going at ${this.speed}`);
//     return this;
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// class EV extends Car {
//   #charge;
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }
//   chargeBattery(chargeTo) {
//     this.#charge = chargeTo;
//     return this;
//   }
//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     console.log(
//       `${this.make} going at ${this.speed}, with a charge of ${this.#charge}`
//     );
//     return this;
//   }
// }

// const rivian = new EV('Rivian', 120, 23);
// console.log(rivian);
// rivian.chargeBattery(90);
// console.log(rivian);
// rivian.accelerate();
// console.log(rivian);
// rivian.brake();
// console.log(rivian);
// rivian.accelerate().chargeBattery(99).brake();
// console.log(rivian);
