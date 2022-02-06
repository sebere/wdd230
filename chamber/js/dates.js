const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last Update ${document.lastModified}`;

const currentYear = new Date();
document.querySelector("#year").innerText = currentYear.getFullYear();


const bannerMessage = (day) => {
    const ban =  document.querySelector("#banner");
    const bannerWords = document.createElement("h2");
    bannerWords.innerText = `🤝🏼 Come join us for the chamber meet and greet ${day} at 7:00 p.m.`;
    ban.appendChild(bannerWords);
}
const dayName = new Date();
switch(dayName.getDay()){
    case 1:
    bannerMessage("Wednesday")
    break;
    case 2:
        bannerMessage("Wednesday")
        break;
}