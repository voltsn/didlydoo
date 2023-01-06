import {isInputValid, isDateValid} from "./inputValidation.js";

let btn = document.querySelector('.new-event-btn');
let form = document.querySelector('#event-form');
let cross = document.querySelector('.cross');
const addDateBtn = document.querySelector('#add-date-btn');

btn.addEventListener("click", showForm);
cross.addEventListener("click", closeForm);
form.addEventListener("submit", handleFormSubmit);
addDateBtn.addEventListener("click", addDate);

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