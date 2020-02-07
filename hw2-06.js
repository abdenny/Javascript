/////////////HW For Feb 6.
///1.
// let arr = [45, 1, 23, -3, -4, 5];
// let newArr = arr.filter(function(arrElement) {
//   return arrElement =< 0;
// });
// console.log(newArr);

//2.
// let arr = [42, 1, 22, -3, -4, 6];
// let newArr = arr.filter(function(arrElement) {
//   if (arrElement % 2 === 0) {
//     if (arrElement >= 0) {
//       return arrElement;
//     }
//   }
// });
// console.log(newArr);

//3.
// function square(arr) {
//   return arr.map(function(num) {
//     return num ** 2;
//   });
// }
// console.log(square([42, 1, 22, -3, -4, 6]));

//4.
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0 },
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];

// function citiesLess70(arr) {
//   return arr.filter(function(object) {
//     return object.temperature < 70;
//   });
// }
// console.log(citiesLess70(cities));

//5.
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0 },
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];

// function citiesNewArray(arr) {
//   return arr.map(function(object) {
//     return object.name;
//   });
// }
// console.log(citiesNewArray(cities));

//6.
// var people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];

// function sayGoodJob(arr) {
//   return arr.map(function(object) {
//     return 'Good job! ' + object;
//   });
// }

// console.log(sayGoodJob(people));

//7.
// var people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];

// function alpha(arr) {
//   return arr.sort();
// }

// console.log(alpha(people));

// 8.
// let people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];

// function sortLength(arr) {
//   return arr.sort(function(a, b) {
//     return a.length - b.length;
//   });
// }

// console.log(sortLength(people));

//9.
// function sumArr(total, num) {
//   return total + num;
// }

// function compareArr(a, b) {
//   var A = a.reduce(sumArr);
//   var B = b.reduce(sumArr);
//   return A - B;
// }

// function sortArr(arr) {
//   return arr.sort(compareArr);
// }

// var arr = [
//   [1, 3, 4],
//   [3, 6],
//   [2, 4, 6, 8]
// ];
// console.log(sortArr(arr));

//10.
// function helloWorld() {
//   console.log('Hello, world!');
// }

// function call3Times(fun) {
//   fun();
//   fun();
//   fun();
// }

// call3Times(helloWorld);

//11.
// function callNTimes(N, fun) {
//   for (var i = 0; i < N; i++) {
//     fun();
//   }
// }

// callNTimes(9, helloWorld);

//12.
function sum(total, num) {
  return total + num;
}

function sumAnArray(arr) {
  return arr.reduce(sum);
}

var numbers = [1, 2, 3, 4, 5];
console.log(sumAnArray(numbers));

//13.
// function letterToAdd(x, word) {
//   return x + word[0].toUpperCase();
// }

// function acronym(words) {
//   return words.reduce(letterToAdd, '');
// }

// var words = ['national', 'aeronautics', 'space', 'administration'];
// console.log(acronym(words));

////// Large Problems
//1.
// function customForEach(arr, fun) {
//   for (var i = 0; i < arr.length; i++) {
//     fun(arr[i]);
//   }
// }

// var arr = [{ name: 'Bob' }, { name: 'Alice' }, { name: 'Joe' }];
// customForEach(arr, function(person) {
//   console.log('Hello, ' + person.name + '!');
// });

//2.
// function customMap (arr, fun) {
//     return fun(arr);
// }

// var values = [1, 2, 3, 4, -5];
// console.log(customMap(values, square));

//3.
// function myCipher(text) {
//   var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//   var letters = text.split('');

//   var newLetters = letters.map(letter => {
//     if (alphabet.indexOf(letter.toUpperCase()) + 13 >= 26) {
//       return alphabet[alphabet.indexOf(letter.toUpperCase()) + 13 - 26];
//     } else {
//       return alphabet[alphabet.indexOf(letter.toUpperCase()) + 13];
//     }
//   });
//   var result = newLetters.join('');
//   return result;
// }

// console.log(myCipher('this is my cipherrrr'));
