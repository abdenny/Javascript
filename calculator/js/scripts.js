// let buttons = document.querySelector('.buttons');
// let input = document.querySelector('.input');
// let equals = document.querySelector('.equal');
// let numStorage = [];
// let combinedNums = [];
// let combinedNums2 = [];
// let calc = [0];
// let operationType = [0];

// function joinNumsOnOperation() {
//   if (operationType == '+') {
//     let equals = parseInt(combinedNums) + parseInt(combinedNums2);
//     calc.splice(0, 1, equals);
//   } else if (operationType == '-') {
//     let equals = parseInt(combinedNums) - parseInt(combinedNums2);
//     calc.splice(0, 1, equals);
//   } else if (operationType == '*') {
//     let equals = parseInt(combinedNums) * parseInt(combinedNums2);
//     calc.splice(0, 1, equals);
//   } else if (operationType == '/') {
//     let equals = parseInt(combinedNums) / parseInt(combinedNums2);
//     calc.splice(0, 1, equals);
//   }
//   console.log(calc);
// }

// function join() {
//   let joined = numStorage.join('');
//   let joinedNum = parseInt(joined);
//   return joinedNum;
// }
// /////EventListeners
// buttons.addEventListener('click', function(e) {
//   console.log(e.target.textContent);
//   switch (e.target.id) {
//     case '0':
//       input.append('0');
//       numStorage.push(0);
//     case '1':
//       input.append('1');
//       numStorage.push(1);
//       break;
//     case '2':
//       input.append('2');
//       numStorage.push(1);
//       break;
//     case '3':
//       input.append('3');
//       numStorage.push(3);
//       break;
//     case '4':
//       input.append('4');
//       numStorage.push(4);
//       break;
//     case '5':
//       input.append('5');
//       numStorage.push(5);
//       break;
//     case '6':
//       input.append('6');
//       numStorage.push(6);
//       break;
//     case '7':
//       input.append('7');
//       numStorage.push(7);
//       break;
//     case '8':
//       input.append('8');
//       numStorage.push(8);
//       break;
//     case '9':
//       input.append('9');
//       numStorage.push(9);
//       break;
//     case 'clear':
//       calc.splice(0, 1, 0);
//       operationType.splice(0, 1, 0);
//       input.innerHTML = '';
//       break;
//     case '+':
//       input.append('+');
//       combinedNums.push(join());
//       numStorage = [];
//       operationType.splice(0, 1, '+');
//       break;
//     case '-':
//       input.append('-');
//       combinedNums.push(join());
//       numStorage = [];
//       operationType.splice(0, 1, '-');
//       break;
//     case 'divide':
//       input.append('/');
//       combinedNums.push(join());
//       numStorage = [];
//       operationType.splice(0, 1, '/');
//       break;
//     case 'multiply':
//       input.append('*');
//       combinedNums.push(join());
//       numStorage = [];
//       operationType.splice(0, 1, '*');
//       break;
//     case 'equals':
//       combinedNums2.push(join());
//       numStorage = [];
//       joinNumsOnOperation();
//       calc.splice(0, 1, 0);
//       operationType.splice(0, 1, 0);
//       input.innerHTML = '';
//       break;
//   }
// });

let buttons = document.querySelector('.buttons');
let input = document.querySelector('.input');
let equals = document.querySelector('.equal');
let numStorage = [0];
let combinedNumStorage = [];
let combinedNumStorage2 = [];
let operation = ['0'];

function calculations(operation) {
  if (operation == '+') {
    let answer = parseInt(combinedNumStorage) + parseInt(combinedNumStorage2);
    input.append(answer);
  } else if (operation == '-') {
    let answer = parseInt(combinedNumStorage) - parseInt(combinedNumStorage2);
    input.append(answer);
  } else if (operation == '*') {
    let answer = parseInt(combinedNumStorage) * parseInt(combinedNumStorage2);
    input.append(answer);
  } else if (operation == '/') {
    let answer = parseInt(combinedNumStorage) / parseInt(combinedNumStorage2);
    input.append(answer);
  }
}

// function join() {
//   let joined = numStorage.join('');
//   let joinedNum = parseInt(joined);
//   console.log(joinedNum);
//   return joinedNum;
// }

// /////EventListeners
buttons.addEventListener('click', function(e) {
  switch (e.target.id) {
    case '0':
      input.append('0');
      numStorage.splice(0, 1, 0);
    case '1':
      input.append('1');
      numStorage.splice(0, 1, 1);
      break;
    case '2':
      input.append('2');
      numStorage.append(2);
      break;
    case '3':
      input.append('3');
      numStorage.splice(0, 1, 3);
      break;
    case '4':
      input.append('4');
      numStorage.splice(0, 1, 4);
      break;
    case '5':
      input.append('5');
      numStorage.splice(0, 1, 5);
      break;
    case '6':
      input.append('6');
      numStorage.splice(0, 1, 6);
      break;
    case '7':
      input.append('7');
      numStorage.splice(0, 1, 7);
      break;
    case '8':
      input.append('8');
      numStorage.push(8);
      break;
    case '9':
      input.append('9');
      numStorage.push(9);
      break;
    case '+':
      input.append('+');
      combinedNumStorage.push(numStorage);
      operation.splice(0, 1, '+');
      numStorage = [];
      break;
    case '-':
      input.append('-');
      combinedNumStorage.push(join());
      operation.splice(0, 1, '-');
      numStorage = [];
      break;
    case 'divide':
      input.append('/');
      combinedNumStorage.push(join());
      operation.splice(0, 1, '/');
      numStorage = [];
      break;
    case 'multiply':
      input.append('*');
      combinedNumStorage.push(join());
      operation.splice(0, 1, '*');
      numStorage = [];
      break;
    case 'clear':
      input.innerHTML = '';
      numStorage = [];
      combinedNumStorage = [];
      combinedNumStorage2 = [];
      operation = [];
      break;
    case 'equals':
      input.innerHTML = '';
      combinedNumStorage2.push(numStorage);
      calculations(operation);
  }
  console.log(operation);
});
