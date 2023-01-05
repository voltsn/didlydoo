function checkLength(string){
    return string >= 256;
}

function isInputValid(input, optional = true) {
    if (input === "" && optional){
        return false;
    }

    return checkLength(input);
}

function isDateValid(date) {
    const today = new Date().getTime();
    const userDate = new Date(date).getTime();
    return today < userDate;
}

export {isInputValid, isDateValid};