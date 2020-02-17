let submission = document.querySelector('#button');

/////Event listeners
submission.addEventListener('click', function(e) {
  let cityName = document.querySelector('#cityname');
  console.log(cityName.value);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=13de831c3f47f8af303dbbe2d38e2e4f`;
  console.log(url);
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(weatherObj => {
      let k = weatherObj.main.temp;
      let cels = k - 273;
      let F = cels * 1.8 + 32;
      let tempDisplay = document.querySelector('.tempDisplay');
      tempDisplay.innerText = F.toFixed(1);
    });
});
