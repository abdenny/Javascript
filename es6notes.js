// let a = 3;

// if (true) {
//   let a = 4;

//   console.log(a);
// }

// console.log(a);
// var index = 0;

// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }
// console.log('outside', index);

//Template literals for strings
// let index = { name: 'index', value: 8 };
// let mystring = `hello "my name is" austin ${index.name} `;
// console.log(mystring);
// let today = new Date();
// console.log(today.to);

/////Destructing allow variable assignment without doing so individually
// let myArray = [4, 7, 3, 2, 1];

// let [a, b, c, d, e] = myArray;

// let luke = { occupation: 'jedi', father: 'anakin' };
// //// have to be the name of the keys
// let { occupation, father } = luke;
// console.log(occupation); // 'jedi'
// console.log(father); // 'anakin'

/////Arrow functions
// function helloWorld(){
//     console.log("Hello World.");
// }

// helloWorld()

// let helloWorldArrow = () => {
//   console.log('helloWorld.');
// };

/////Point of the arrow function is that this is changed in asynch
// setTimeout(function() {
//   console.log('hello world');
// }, 1000);

// console.log('print this first');

// function getType() {
//   console.log('Type is: ' + this.type);
// }

// console.log(getType());

/////////Using high order functions with arrow functions
// let nums = [5, 7, 3, 4, 9];
// let newArray = nums.map(nums => {
//   return nums * 2;
// });
// console.log(nums);
// console.log(newArray);

///Using destructing and arrow functions create a function called multiply that calcs 5 *20 *3
// let obj = {
//   x: 5,
//   y: 20,
//   z: 3
// };

// let multiply = object => {
//   let { x, y, z } = object;
//   return x * y * z;
// };
// console.log(multiply(obj));

/////Event listener
// let div = document.getElementById('myId')
// div.addEventListener('click', (e)=>{

// })

//////ES5 parameter defaults
// let addTwoNumbers = (a, b) => {
//   a = a || 0;
//   b = b || 0;

//   return a + b;
// };

// ///////ES6 way to define default parameters
// let addTwoNumbers = (a = 0, b = 0) => {
//   return a + b;
// };

//////// Rest parameters ES6 way   ////...args is a spread operator   ////This allows us to send any ammount /// for of is the key here
// let multiplyNums = (...args) => {
//   let m = 1;
//   for (let i of args) {
//     m = m * i;
//   }
//   console.log(m);
// };

// multiplyNums(4, 6, 6, 8);

/////////Spread operators
// let array1 = [5, 7, 8, 4, 3];

// let array2 = [...array1];

// array2.push(5);
// array2.push(7);

// let a, b, c, d, arr;

// a = [1, 2];
// b = [3, 4];
// c = [5, 6];

// arr = [0, ...a, ...b, ...c, 7, 8];

// console.log(arr);

//////Swap value
// a = 'first';
// b = 'second'[(b, a)] = [a, b];

// console.log(a);
// console.log(b);

/////Terneary   //(condition)? (true block): (else block)

// let a = 4;
// // if (a == 4) {
// //   console.log(`a is equal to 4`);
// // } else {
// //   console.log(`a is not equal to 4`);
// // }

// a == 4 ? console.log(`a is equal to 4`) : console.log(`a is not equal to 4`);

/////JS is a protypical language

///////////// classes in Js

class Parent {
  parentGreeting() {
    console.log('Im the parent');
  }
}

class Person extends Parent {
  constructor(firstName, lastName, age) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.count = 0;
  }
  // creating methods inside class to act on instance variables
  greeting = () => {
    console.log(`Hello ${this.firstName} ${this.lastName}!`);
    this.count++;
  };
  printCount = () => {
    console.log(this.count);
  };
}

let alina = new Person('alina', 'belova', 21);

console.log(alina);

alina.greeting();
alina.greeting();
alina.greeting();
alina.printCount();
alina.parentGreeting();
