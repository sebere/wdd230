const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last Update ${document.lastModified}`;

const currentYear = new Date();
document.querySelector("#year").innerText = currentYear.getFullYear();


