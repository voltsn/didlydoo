let submit = document.getElementById("form-submit-btn")

submit.addEventListener('click', showPart);
function showPart() {
    fetch("http://localhost:3000/api/events")
    .then((response) => response.json())
    .then((text) => {
        for (let i=0; i<=text.length; i++) {

            // Création de la div
            const div = document.createElement('div');

            // Création de nos paragraphes avec nos éléments du json
            const name = document.createElement('p')
            const description = document.createElement('p');
            const author = document.createElement('p');
            const dates = document.createElement('p');

            name.textContent = text[i].name;
            description.textContent = text[i].description;
            author.textContent = text[i].author;
            dates.textContent;

            div.appendChild(name);
            div.appendChild(description);
            div.appendChild(author); 
            
            for (let date of text[i].dates){
                textContent = date.date;
                div.appendChild(document.createTextNode(textContent));
            }

            document.body.appendChild(div);
        }
    });
};