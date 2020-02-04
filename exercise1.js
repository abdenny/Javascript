//Tuesday, Feb 4th.
//1. Madlib
// function madlib(name, subject) {
//   return console.log(name + "'s favorite subject is " + subject);
// }

// madlib('Austin', 'Biology');

//2. Tip calculator

// function tipAmmount(billAmmount, service) {
//   if (service == 'good') {
//     let tipTotal = billAmmount * 0.2;
//     console.log(tipTotal);
//     return tipTotal;
//   } else if (service == 'fair') {
//     let tipTotal = billAmmount * 0.15;
//     console.log(tipTotal);
//     return tipTotal;
//   } else {
//     let tipTotal = billAmmount * 0.1;
//     console.log(tipTotal);
//     return tipTotal;
//   }
// }
// tipAmmount(100, 'good');

// //3.
// function totalAmmount(billAmmount, service) {
//   if (service == 'good') {
//     let tipTotal = billAmmount * 0.2;
//     total = tipTotal + billAmmount;
//     console.log(total);
//     return total;
//   } else if (service == 'fair') {
//     let tipTotal = billAmmount * 0.15;
//     total = tipTotal + billAmmount;
//     console.log(total);
//     return total;
//   } else {
//     let tipTotal = billAmmount * 0.1;
//     total = tipTotal + billAmmount;
//     console.log(total);
//     return total;
//   }
// }
// totalAmmount(100, 'good');

////4.
// function printNumbers(startNum, lastNum) {
//   for (let i = startNum; i < lastNum; i++) {
//     console.log(i);
//   }
// }
// printNumbers(1, 11);

// function printNums(startNum, lastNum) {
//   while (startNum < lastNum) {
//     console.log(startNum);
//     startNum++;
//   }
// }
// printNums(1, 11);

////5.
// function printSquare(size) {
//   for (var i = 0; i < size; i++) {
//     console.log('*'.repeat(size));
//   }
// }

// printSquare(4);

// ////6.
// function printBox(width, height) {
//   console.log('*'.repeat(width));
//   for (let i = 0; i < height - 2; i++) {
//     console.log('*' + ' '.repeat(width - 2) + '*');
//   }
//   console.log('*'.repeat(width));
// }

// printBox(6, 4);

////7.
// function printBanner(text) {
//   length = text.length;
//   console.log('*'.repeat(length + 4));
//   console.log('* ' + text + ' *');
//   console.log('*'.repeat(length + 4));
// }

// printBanner('Welcome to DigitalCrafts');

////8.
// function leetspeak(phrase) {
//   let leetphrase = phrase
//     .toUpperCase()
//     .replace(/a/gi, '4')
//     .replace(/e/gi, '3')
//     .replace(/g/gi, '6')
//     .replace(/i/gi, '1')
//     .replace(/o/gi, '0')
//     .replace(/s/gi, '5')
//     .replace(/t/gi, '7');

//   return leetphrase;
// }
// console.log(leetspeak('I am a leet programming haxor'));

function longLongVowels(input) {
  let vowelString = input
    .replace(/aa/gi, 'aaaaa')
    .replace(/ee/gi, 'eeeee')
    .replace(/oo/gi, 'ooooo')
    .replace(/ii/gi, 'iiiii')
    .replace(/uu/gi, 'uuuuu');
  return vowelString;
}
console.log(longLongVowels('good'));
