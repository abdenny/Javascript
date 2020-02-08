// function changeBackground() {
//   var div = document.getElementById('1');
//   div.setAttribute(
//     'style',
//     'background-color: green; height: 300px; width: 100%;'
//   );
// }

// function onMouseOut() {
//   var div = document.getElementById('1');
//   div.setAttribute(
//     'style',
//     'background-color: yellow; height: 300px; width: 100%;'
//   );

var div = document.getElementById('1');
div.addEventListener('mouseover', function(e) {
  //   alert('hello ' + e.srcElement.innerText);
  div.setAttribute('style', 'background-color: pink; height: 300px');
});
