import {isInputValid, isDateValid} from "./inputValidation.js";

let btn = document.querySelector('.new-event-btn');
let form = document.querySelector('#event-form');
let cross = document.querySelector('.cross');
const addDateBtn = document.querySelector('#add-date-btn');
let submit = document.querySelector('.form-submit-btn');

btn.addEventListener("click", showForm);
cross.addEventListener("click", closeForm);
form.addEventListener("submit", handleFormSubmit);
addDateBtn.addEventListener("click", addDate);
submit.addEventListener('click', submitEvent);

function submitEvent() {
    authorValue();
    nameValue();
    descValue();
    dateValue();
}

function dateValue() {
    const date = document.querySelectorAll('input[type=date]');
    let tableDate = [];
    for (let i = 0; i < date.length; i++) {
        const dateValue = date[i].value;
        console.log(dateValue);
        tableDate.push(date[i].value);
    };
    console.log(tableDate);
    return tableDate
}

function descValue() {
    const desc = document.querySelector('textarea[name=description]');
    const descValue = desc.value;
    console.log(descValue);
    return desc.value;
}

function nameValue() {
    const name = document.querySelector('input[name=name]');
    const nameValue = name.value;
    console.log(nameValue);
    return name.value;
}

function authorValue() {
    const author = document.querySelector('input[name=author]');
    const authorValue = author.value;
    console.log(authorValue);
    return author.value;
}

function showForm() {
    form.style.display = 'flex';
}

function closeForm() {
    let form = document.querySelector('#event-form');
    form.style.display = 'none';
}

function addDate(event){
    event.preventDefault();

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("required", "");
    dateInput.classList.add("form-text-input");

    this.parentElement.insertBefore(dateInput, this);
}

function handleFormSubmit(event) {
    event.preventDefault();
    const textInputs = this.querySelectorAll("input[type=text]");
    const dateInputs = this.querySelectorAll("input[type=date]");
    let toSubmit = true;

    async function postData (url = "", data ={}) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        console.log(response);
        return response.json();
        
    }
    postData('http://localhost:3000/api/events/', { "name": nameValue(), "description": descValue(), "author": authorValue(), "dates": dateValue()})
        .then((data) => {
        console.log(data);
    });

    for (let textInput of textInputs) {
        let error = isInputValid(textInput.value);
        inputStatus(error, textInput);

        if (error !== null) {
            toSubmit = false;
        }
    }

    for (let dateInput of dateInputs){
        let error = isDateValid(dateInput.value);
        inputStatus(error, dateInput);
        if (error !== null) {
            toSubmit = false;
        }
    }
}

function inputStatus(status, input){
    switch(status) {
        case "empty":
            input.parentElement.classList.add("error");
            input.parentElement.setAttribute("data-after","Please fill this field.");
            break;
        case "length":
            input.parentElement.classList.add("error");
            input.parentElement.setAttribute("data-after","Input must shorter than 256 characters.");
            break;
        case "past date":
            input.parentElement.classList.add("error");
            input.parentElement.setAttribute("data-after","The event cannot take place in the past.");
            break;
        case null:
            if (input.parentElement.classList.contains("error")){
                input.parentElement.classList.remove("error");
            }
    }
}