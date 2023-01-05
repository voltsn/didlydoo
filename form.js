let btn = document.querySelector('.new-event-btn');
console.log(btn);

btn.addEventListener("click", showForm);

function showForm() {
    let form = document.querySelector('#event-form');
    form.style.display = 'flex';

}