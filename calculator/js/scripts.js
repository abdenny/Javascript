let buttons = document.querySelector('.buttons');
let input = document.querySelector('.input');
let equals = document.querySelector('.equal');
let numStorage = [];
let NumbersToBeAdded = [];
let NumbersToBeSubtracted = [];
let NumbersToBeMultiplied = [];
let NumbersToBeDivided = [];

///Functions
// function addNums(x, y) {
//   let equals = x + y;
//   input.append(equals)
// }
// function subNums(x, y) {
//   let equals = x - y;
// }
// function divideNums(x, y) {
//   let equals = x * y;
// }
// function multipleNums(x, y) {
//   let equals = x / y;
// }

function joinNumsOnOperationAddition() {
  let joined = numStorage.join('');
  let joinedNum = parseInt(joined);
  NumbersToBeAdded.push(joinedNum);
  numStorage = [];
  console.log(numStorage);
  console.log(NumbersToBeAdded);
}

function joinNumsOnOperationSubtraction() {
  let joined = numStorage.join('');
  let joinedNum = parseInt(joined);
  NumbersToBeSubtracted.push(joinedNum);
  numStorage = [];
  console.log(numStorage);
  console.log(NumbersToBeSubtracted);
}

function joinNumsOnOperationMulti() {
  let joined = numStorage.join('');
  let joinedNum = parseInt(joined);
  NumbersToBeMultiplied.push(joinedNum);
  numStorage = [];
  console.log(numStorage);
  console.log(NumbersToBeMultiplied);
}

function joinNumsOnOperationDivided() {
  let joined = numStorage.join('');
  let joinedNum = parseInt(joined);
  NumbersToBeDivided.push(joinedNum);
  numStorage = [];
  console.log(numStorage);
  console.log(NumbersToBeDivided);
}

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
    // case 'clear':
    //   input.replace('');
    //   break;
    case '+':
      input.append('+');
      joinNumsOnOperationAddition();
      break;
    case '-':
      input.append('-');
      joinNumsOnOperationSubtraction();
      break;
    case 'divide':
      input.append('/');
      joinNumsOnOperationDivided();
      break;
    case 'multiply':
      input.append('x');
      joinNumsOnOperationMulti();
      break;
    case 'equals':
      input.append('=');
  }
});

equals.addEventListener('click', function(e) {
  console.log('hello');
});
