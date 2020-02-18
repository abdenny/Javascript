// alert('Welcome to Westeros! Click on a House bellow to learn more...');

//////Variables
let ids = [362, 7, 395, 169, 229, 16, 398, 285, 378];
const stark = document.querySelector('#stark');
const arryn = document.querySelector('#arryn');
const tully = document.querySelector('#tully');
const greyjoy = document.querySelector('#greyjoy');
const lannister = document.querySelector('#lannister');
const baratheon = document.querySelector('#baratheon');
const tyrell = document.querySelector('#tyrell');
const martell = document.querySelector('#martell');
const targaryen = document.querySelector('#targaryen');
let houseObject = [];
var valuedObjects = [];
var founder = [];

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

function houseMemNum(indexNum) {
  setTimeout(() => {
    valuedObjects.push(houseObject[indexNum].name);
    valuedObjects.push(houseObject[indexNum].founder);
    valuedObjects.push(houseObject[indexNum].swornMembers.length);
    let founderURL = valuedObjects[1];
    fetch(`${founderURL}`)
      .then(response => {
        return response.json();
      })
      .then(jsonArr => {
        founder.push(jsonArr);
      });
  }, 1000);
}

/////Event Listeners

stark.addEventListener('click', function(e) {
  callAPI();
  houseMemNum(0);
  setTimeout(() => {
    let houseName = `${valuedObjects[0]}--------------------`;
    let bannermen = `\n\n Sworn Members: ${valuedObjects[2]}`;
    document.getElementById('stark').innerHTML = houseName + bannermen;
  }, 1000);
  console.log(valuedObjects);
});

arryn.addEventListener('click', function(e) {
  callAPI();
  houseMemNum(1);
  setTimeout(() => {
    let houseName = `${valuedObjects[0]}--------------------`;
    let bannermen = `Sworn Members: ${valuedObjects[2]}`;
    document.getElementById('arryn').innerHTML = houseName + bannermen;
  }, 1000);
});

tully.addEventListener('click', function(e) {
  callAPI();
  houseMemNum(2);
  setTimeout(() => {
    let houseName = `${valuedObjects[0]}--------------------`;
    let bannermen = `Sworn Members: ${valuedObjects[2]}`;
    document.getElementById('tully').innerHTML = houseName + bannermen;
  }, 1000);
});

greyjoy.addEventListener('click', function(e) {
  callAPI();
  houseMemNum(3);
  setTimeout(() => {
    let houseName = `${valuedObjects[0]}--------------------`;
    let bannermen = `Sworn Members: ${valuedObjects[2]}`;
    document.getElementById('greyjoy').innerHTML = houseName + bannermen;
  }, 1000);
});

lannister.addEventListener('click', function(e) {
  callAPI();
  houseMemNum(4);
  setTimeout(() => {
    let houseName = `${valuedObjects[0]}--------------------`;
    let bannermen = `Sworn Members: ${valuedObjects[2]}`;
    document.getElementById('lannister').innerHTML = houseName + bannermen;
  }, 1000);
});

baratheon.addEventListener('click', function(e) {
  callAPI();
  houseMemNum(5);
  setTimeout(() => {
    let houseName = `${valuedObjects[0]}--------------------`;
    let bannermen = `Sworn Members: ${valuedObjects[2]}`;
    document.getElementById('baratheon').innerHTML = houseName + bannermen;
  }, 1000);
});

tyrell.addEventListener('click', function(e) {
  callAPI();
  houseMemNum(6);
  setTimeout(() => {
    let houseName = `${valuedObjects[0]}--------------------`;
    let bannermen = `Sworn Members: ${valuedObjects[2]}`;
    document.getElementById('tyrell').innerHTML = houseName + bannermen;
  }, 1000);
});

martell.addEventListener('click', function(e) {
  callAPI();
  houseMemNum(7);
  setTimeout(() => {
    let houseName = `${valuedObjects[0]}--------------------`;
    let bannermen = `Sworn Members: ${valuedObjects[2]}`;
    document.getElementById('martell').innerHTML = houseName + bannermen;
  }, 1000);
});

targaryen.addEventListener('click', function(e) {
  callAPI();
  houseMemNum(8);
  setTimeout(() => {
    let houseName = `${valuedObjects[0]}--------------------`;
    let bannermen = `Sworn Members: ${valuedObjects[2]}`;
    document.getElementById('targaryen').innerHTML = houseName + bannermen;
  }, 1000);
});
