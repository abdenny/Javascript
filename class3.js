const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// companies.forEach(function(company) {
//   console.log(company.name);
// });
// ////////old way
// let arr = [0, 1, 2, 3, 4, 5];
// let newArray = [];
// for (let index = 0; index < arr.length; index++) {
//   newArray.push(2 * arr[index]);
// }
// console.log(newArray);

//////using map function
// let arr = [0, 1, 2, 3, 4, 5];
// let newArray = arr.map(function(element) {
//   return 2 * element;
// });
// console.log(newArray);

////// MAP
// let newCompArr = companies.map(function(element) {
//   element['start'] = element.start - 5;
//   return element;
// });

// console.log(newCompArr);

///////filter
// let arr = [45, 1, 23, -3, -4, 5];
// let newArr = arr.filter(function(arrElement) {
//   return arrElement < 10;
// });
// console.log(newArr);

/////////Filter out only retail companies
// let retailComp = companies.filter(function(element) {
//   return element.category == 'Retail';
// });
// console.log(retailComp);

//////////Some
// let arr = [0, 1, 2, 3, 4, 5];
// let myBoolean = arr.some(function(num) {
//   return num < 5;
// });
// console.log(myBoolean);
