let submit = document.querySelector(".form-submit-btn")

submit.addEventListener('click', showPart);
function showPart() {
    fetch("../server/db/db.json")
    .then((response) => response.json())
    .then((text) => {

    });
};