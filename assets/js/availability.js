//récpérer btn save
let save = document.querySelector('#save-choice-btn');

//quand on clique sur save les valeurs entrées (stockées dans le json) s'ajoutent dans le tableau
save.addEventListener('click', addLine)

function addLine() {

    //récupérer valeur de l'input
    let input = document.querySelector('.attendee-input');
    let inputValue = input.value;
        input.value = "";

    //recupérer valeur du radio
    let choise1 = document.querySelector('input[name="yes"]');
    console.log(choise1);

    if (choise1 == true) {
        let td1 = document.querySelector('.event__table__antendee__choice');
        td1.textContent = "V";
    } else {
        let td1 = document.querySelector('.event__table__antendee__choice');
        td1.textContent = "X";
    }

    let tbody = document.querySelector('.event__table__antendees');
    fetch('package.json')
        .then((response) => response.json())
        .then((data) => {
            let element = data[0];
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

