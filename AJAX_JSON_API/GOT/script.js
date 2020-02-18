// alert('Welcome to Westeros! Click on a House bellow to learn more...');
let ids = [362, 7, 395, 169, 229, 16, 398, 285, 378];
/////Functions
function callAPI() {
  for (let houses in ids) {
    fetch(`https://anapioficeandfire.com/api/houses/${ids[houses]}`)
      .then(response => {
        return response.json();
      })
      .then(jsonArr => {
        houseObject.push(jsonArr);
      });
  }
}

function callFounderAPI() {
  let founderURL = valuedObjects[1];
  fetch(`${founderURL}`)
    .then(response => {
      return response.json();
    })
    .then(jsonArr => {
      founder.push(jsonArr);
    });
}

function houseMemNum(indexNum) {
  setTimeout(() => {
    valuedObjects.push(houseObject[indexNum].name);
    valuedObjects.push(houseObject[indexNum].founder);
    valuedObjects.push(houseObject[indexNum].swornMembers.length);
    callFounderAPI();
  }, 1000);
}

/////Event Listeners

stark.addEventListener('click', function(e) {
  callAPI();
  houseMemNum(0);
  console.log(valuedObjects);
  console.log(founder);
});
// arryn.addEventListener('click', function(e) {
//   callAPI();
//   houseMemNum(1);
//   console.log(e.target);
// });
// tully.addEventListener('click', function(e) {
//   callAPI();
//   houseMemNum(2);
//   console.log(e.target);
// });
// greyjoy.addEventListener('click', function(e) {
//   callAPI();
//   houseMemNum(3);
//   console.log(e.target);
// });
// lannister.addEventListener('click', function(e) {
//   callAPI();
//   houseMemNum(4);
//   console.log(e.target);
// });
// baratheon.addEventListener('click', function(e) {
//   callAPI();
//   houseMemNum(5);
//   console.log(e.target);
// });
// tyrell.addEventListener('click', function(e) {
//   callAPI();
//   houseMemNum(6);
//   console.log(e.target);
// });
// martell.addEventListener('click', function(e) {
//   callAPI();
//   houseMemNum(7);
//   console.log(e.target);
// });
// targaryen.addEventListener('click', function(e) {
//   callAPI();
//   houseMemNum(8);
//   console.log(e.target);
// });
