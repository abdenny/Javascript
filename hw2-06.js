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
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

console.log(lengthSort(people));
