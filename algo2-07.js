// //1.
// function collatzConjecture(num) {
//   while (num != 1) {
//     if (num % 2 == 0) {
//       num /= 2;
//     } else {
//       num = num * 3 + 1;
//     }
//     console.log(num);
//   }
// }

// collatzConjecture(15);

//2.
// function largestPalindromicNum() {
//   let largestPalindromic = 0;
//   let product1 = 0;
//   let product2 = 0;
//   for (let i = 100; i <= 999; i++) {
//     if (i == 913) {
//       let dummvar = 1;
//     }
//     for (let ii = 100; ii <= 999; ii++) {
//       if (ii == 993) {
//         let dummyvar2 = 1;
//       }
//       let palinNum = i * ii;
//       palinNum = String(palinNum); //convert out number to a string so we can iterate over it
//       let palinNumSplit = palinNum.split(''); //convert to an array
//       let palinNumReverse = palinNumSplit.reverse(); //reverse the array
//       let palinNumJoined = palinNumReverse.join(''); //turn the array back into a string
//       if (palinNum == palinNumJoined) {
//         if (Number(palinNum) > Number(largestPalindromic)) {
//           largestPalindromic = palinNum;
//           product1 = i;
//           product2 = ii;
//         }
//       }
//     }
//   }
//   console.log(
//     'Largest palindromic number of three digits is: ' + largestPalindromic
//   );
//   console.log('Made of the product of: ' + product1 + ' and ' + product2 + '.');
// }
// largestPalindromicNum();

// //3.
// function gcd(a, b) {
//   // Greatest common divisor
//   if (b == 0) return a;
//   return gcd(b, a % b);
// }
// function lcm(a, b) {
//   // Least common multiple
//   return (a * b) / gcd(a, b);
// }
// var number = 1;
// for (var i = 1; i <= 20; ++i) n = lcm(n, i);
// console.log(number);

//alternate 2.
// function isPalindrome(x) {
//   x = x.toString().split('');
//   var len = x.length;
//   for (var i = 0; i < len / 2; i++) {
//     if (x[i] !== x[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// function largestPalindrome() {
//   var largest = 0;
//   for (var i = 999; i >= 100; i--) {
//     for (var j = 999; j >= 100; j--) {
//       var mult = i * j;
//       if (mult < largest) break;
//       if (isPalindrome(mult) && mult > largest) {
//         largest = mult;
//       }
//     }
//   }
//   console.log(largest);
//   return largest;
// }
// largestPalindrome();
