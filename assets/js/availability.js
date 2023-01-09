//récpérer btn save
let save = document.querySelector('#save-choice-btn');

//quand on clique sur save les valeurs entrées (stockées dans le json) s'ajoutent dans le tableau
save.addEventListener('click', addLine)

function addLine() {
    let input = document.querySelector('.attendee-input');
    let inputValue = input.value;
        input.value = "";
    
    postData('http://localhost:3000/api/events/', { "attendees.name": inputValue})
    .then((data) => {
    console.log(data);
    });

    let tbody = document.querySelector('.event__table__antendees');
    fetch('server/db/db.json')
        .then((response) => response.json())
        .then((data) => {
            let element = data;
                let tr = `
                <tr class="event__table__antendee">
                    <td class="event__table__antendee__name">${inputValue}</td>
                    <td class="event__table__antendee__choice"></td>
                    <td class="event__table__antendee__choice"></td>
                </tr>
            `;
            tbody.insertAdjacentHTML("beforeend", tr);
        });
}

async function postData (url = "", data ={}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return response.json();
    
}

