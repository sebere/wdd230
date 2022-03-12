const apiURL = 'http://api.openweathermap.org/data/2.5/weather?q=Bogota&units=imperial&APPID=629e3b4d8e1f25635058e733470ee359';
fetch(apiURL)
  .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.querySelector('#current-temp').textContent = jsObject.main.temp;

        const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
  });
