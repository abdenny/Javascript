///////////// 02/04 notes
// console.log('Hello World');

//Working with es5 atm

// var mystring = `THis
// is
// a
// many
// line
// string
// `;
// console.log(mystring);

// var myInteger = 2.1;

// var myBool = true;

// console.log(mystring.length);

// var num = 1;
// var num2 = 1.2;
// var school = 'Digital Crafts';

// var concat = 'hello ' + 'world ';
// console.log(concat);

// var boolean = !true;
// console.log(boolean);

// var not = !boolean;
// console.log(not);

// var and = boolean && false
//
var expr = 'papayas';

if (expr == 'oranges') {
  console.log('Oranges are .59 per pound');
} else if (expr == 'mangos') {
  console.log('Mangos are .80 per pound');
} else {
  console.log("We're out of papayas");
}

////// switch statement
switch (expr) {
  case 'oranges':
    console.log('oranges are .59 per pound');
    break;
  case 'mangos':
    console.log('mangos are .90 per pound');
  case 'papayas':
    console.log('were out of those');
    break;
}

for (let count = 0; count < 10; count++) {
  console.log(count);
  for (let inner = 0; inner < 3; inner++) {
    console.log(inner);
  }
}
