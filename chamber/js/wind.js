const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Bogota&units=imperial&APPID=629e3b4d8e1f25635058e733470ee359';
fetch(apiURL)
  .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.querySelector('#tempe').textContent = jsObject.main.temp;

        const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        document.querySelector('#clima').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
  });

const t = parseInt(document.querySelector("#tempe").textContent);
const s = parseInt(document.getElementById("speed").textContent);

if(t <= 50 && s > 3) {
    const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16)
    document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}&#176;`;
}
else {
    document.querySelector("#windchill").innerHTML = "N/A"
}