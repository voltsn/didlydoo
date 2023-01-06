function checkLength(string){
    return string.length < 256;
}

function isInputValid(input, optional = false) {
    if (optional){
        if (input === "") {
            return null;
        }

        if (checkLength(input)) {
            return null;
        }

        return "length";
    }

    if (input === "") {
        return "empty";
    }

    return checkLength(input) ? null : "length";
}

function isDateValid(date) {
    const today = new Date().getTime();
    const userDate = new Date(date).getTime();
    return today < userDate ? null : "past date";
}

export {isInputValid, isDateValid};