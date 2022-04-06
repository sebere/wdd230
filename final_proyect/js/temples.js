//const requestURL = 'https://sebere.github.io/wdd230/chamber/js/data.json';
const requestURL = "js/info.json"
const cards = document.querySelector('div.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        // console.table(jsonObject);
        temples.forEach(displayTemples);
    });

function displayTemples(temples) {
  let card = document.createElement('section');
  card.setAttribute('class','tarjeta')

  //img
  let image = document.createElement('img');
  image.src = temples.imgfile;
  image.setAttribute('alt', temples.name);
  card.appendChild(image);

  //h2 name
  let h2 = document.createElement('h2');
  h2.textContent = temples.name;
  card.appendChild(h2);

  //p address
  let p1 = document.createElement('p');
  p1.textContent = temples.address;
  card.appendChild(p1);

  //p phone
  let p2 = document.createElement('p');
  p2.textContent = temples.phone;
  card.appendChild(p2);

  //p services
  let span = document.createElement('span');
  span.setAttribute('class','hide')
  span.setAttribute('id', 'hideText')
  span.textContent = temples.services;
  card.appendChild(span);  

  //p services
  let p3 = document.createElement('p');
  p3.textContent = temples.ordinance;
  span.appendChild(p3);

  //p services
  let p4 = document.createElement('p');
  p4.textContent = temples.closures;
  span.appendChild(p4);

  //p buttton
  let btn = document.createElement('button');
  btn.textContent = temples.button;
  btn.setAttribute('class','readMore-btn')
  btn.setAttribute('id', 'hideText_btn')
  card.appendChild(btn);  


  cards.appendChild(card);
  btn.addEventListener('click', toggleText);
  function toggleText(){
      span.classList.toggle('show');
  }
}








