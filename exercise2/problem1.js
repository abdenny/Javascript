///////////////////////////// First row
//creating elements and setting their class attributes
var container = document.getElementById('container');
var row1 = document.createElement('div');
var col1 = document.createElement('div');
var col2 = document.createElement('div');
var col3 = document.createElement('div');
var col4 = document.createElement('div');
var h1 = document.createElement('h1');
var h4 = document.createElement('h4');
var p = document.createElement('p');
container.className = 'container';
row1.className = 'row justify-content-md-around align-items-md-center';
col1.className = 'col text-center';
col2.className = 'col text-center';
col3.className = 'col text-center';
col4.className = 'col text-center';

//styling
row1.style.height = '100px';
row1.style.backgroundColor = 'dodgerblue';
h1.style.color = 'white';
h4.style.color = 'white';
p.style.color = 'white';
h1.style.margin = 'auto';
h4.style.margin = 'auto';
p.style.margin = 'auto';
p.style.fontSize = '24px';
row1.style.padding = '20px';
row1.style.marginBottom = '20px';

// Adding the content appending to DOM

h1.textContent = 'HighOnCoding';
h4.textContent = 'Home';
p.textContent = 'Categories';
col1.appendChild(h1);
col2.appendChild(h4);
col3.appendChild(p);
row1.appendChild(col1);
row1.appendChild(col2);
row1.appendChild(col3);
row1.appendChild(col4);
container.appendChild(row1);
