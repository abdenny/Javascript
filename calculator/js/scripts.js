let buttons = document.querySelector('.buttons');
let input = document.querySelector('.input');
let equals = document.querySelector('.equal');
let numStorage = [];
let calc = [0];

function joinNumsOnOperation(operationType) {
  let joined = numStorage.join('');
  let joinedNum = parseInt(joined);
  if (operationType == '+') {
    let equals = joinedNum + calc[0];
    calc.splice(0, 1, equals);
  } else if (operationType == '-') {
    let equals = calc[0] - joinedNum;
    calc.splice(0, 1, equals);
  } else if (operationType == '*') {
    let equals = joinedNum * calc[0];
    calc.splice(0, 1, equals);
  } else if (operationType == '/') {
    let equals = calc[0] / joinedNum;
    calc.splice(0, 1, equals);
  }
  numStorage = [];
  console.log(numStorage);
  console.log(calc);
}

// let passIn = function makeNumStringInt() {
//   let joined = numStorage.join('');
//   let joinedNum = parseInt(joined);
//   return joinedNum;
// };

/////EventListeners
buttons.addEventListener('click', function(e) {
  console.log(e.target.textContent);
  switch (e.target.id) {
    case '0':
      input.append('0');
      numStorage.push(0);
    case '1':
      input.append('1');
      numStorage.push(1);
      break;
    case '2':
      input.append('2');
      numStorage.push(1);
      break;
    case '3':
      input.append('3');
      numStorage.push(3);
      break;
    case '4':
      input.append('4');
      numStorage.push(4);
      break;
    case '5':
      input.append('5');
      numStorage.push(5);
      break;
    case '6':
      input.append('6');
      numStorage.push(6);
      break;
    case '7':
      input.append('7');
      numStorage.push(7);
      break;
    case '8':
      input.append('8');
      numStorage.push(8);
      break;
    case '9':
      input.append('9');
      numStorage.push(9);
      break;
    case 'clear':
      calc.splice(0, 1, 0);
      input.innerHTML = '';
      break;
    case '+':
      input.append('+');
      numStorage.push('+');
      break;
    case '-':
      input.append('-');
      numStorage.push('-');
      break;
    case 'divide':
      input.append('/');
      numStorage.push('/');
      break;
    case 'multiply':
      input.append('*');
      numStorage.push('*');
      break;
    case 'equals':
      //   joinNumsOnOperation('-');
      break;
  }
});

// equals.addEventListener('click', function(e) {
//   console.log('hello');
// });
