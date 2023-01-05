let btn = document.querySelector('.new-event-btn');

btn.addEventListener("click", showForm);

function showForm() {
    let form = document.querySelector('#event-form');
    form.style.display = 'flex';
}

let cross = document.querySelector('.cross');

cross.addEventListener("click", closeForm);

function closeForm() {
    let form = document.querySelector('#event-form');
    form.style.display = 'none';
}