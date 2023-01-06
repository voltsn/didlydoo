//récpérer btn save
let save = document.querySelector('#save-choice-btn');

//quand on clique sur save les valeurs entrées (stockées dans le json) s'ajoutent dans le tableau
save.addEventListener('click', addLine)

function addLine() {
    let input = document.querySelector('.attendee-input');
    let inputValue = input.value;
        input.value = "";
        

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

