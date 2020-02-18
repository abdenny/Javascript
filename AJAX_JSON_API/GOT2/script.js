let i = 0;
let fullCharList = [];
let flag = true;
for (let p = 1; p <= 64; p++) {
  fetch(
    `https://www.anapioficeandfire.com/api/characters?page=${p}&pageSize=50`
  )
    .then(response => {
      return response.json();
    })
    .then(characters => {
      // console.log(characters);
      fullCharList = [...fullCharList, ...characters];
      // let LinkArray = characters.map((char)=>{
      //     var CharURL=char.url;
      //     return `<li><a href="${char.url}">Charater # ${i} and CharName is ${char.name}.</a></li>`
      // })
      // $('ul').append(LinkArray);
    })
    .then(() => {
      if (fullCharList.length >= 2130) {
        console.log(fullCharList);
        let ul = document.querySelector('ul');
        fullCharList.forEach(char => {
          let li = document.createElement('li');
          let a = document.createElement('a');
          a.innerHTML = `${char.name}`;
          a.href = `${char.url}`;
          li.append(a);
          ul.append(li);
          // return `<li><a href="${char.url}">${char.name}</a></li>`
        });
        // ul.innerHTML = liTags.join('');
      }
    })
    .catch(() => {}); //end of promise
} //end of loop
let div = document.querySelector('div');
div.addEventListener('click', e => {
  e.preventDefault();
  console.log("I'm here");
  console.log(e);
});
