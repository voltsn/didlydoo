let submit = document.getElementById("form-submit-btn")

submit.addEventListener('click', showPart);
function showPart() {
    fetch("http://localhost:3000/api/events")
    .then((response) => response.json())
    .then((text) => {
        for (let i=0; i<=text.length; i++) {
            const div = document.createElement('div');

            const name = document.createElement('p')
            const author = document.createElement('p');
            const description = document.createElement('p');
            const dates = document.createElement('p')

            name.textContent = text[i].name;
            author.textContent = text[i].author;
            description.textContent = text[i].description;
            dates.textContent;
            for (let date of text[i].dates){
                textContent = date.date;
            }

            div.appendChild(name)
            div.appendChild(author); 
            div.appendChild(description);
            div.appendChild(document.createTextNode(textContent));
            
            document.body.appendChild(div);
        }
    });
};