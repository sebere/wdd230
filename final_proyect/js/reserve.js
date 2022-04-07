let hideText_btn = document.getElementById('readMore-btn');
let hideText = document.getElementById('span');

hideText_btn.addEventListener('click', toggleText);
function toggleText(){
    span.classList.toggle('show');
}