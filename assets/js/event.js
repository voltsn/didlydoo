function createEvent(author, name, description, date){
    const section =  document.createElement("section");
    section.classList.add("event");
    
    const eventHeading = document.createElement("h2");
    eventHeading.classList.add("event__heading");
    eventHeading.appendChild(document.createTextNode(name));

    const eventAuthor = document.createElement("h4");
    eventAuthor.classList.add("event__author");
    eventAuthor.appendChild(document.createTextNode(`Evenement créé par ${author}`));

    const eventDesc = document.createElement("p");
    eventDesc.classList.add("event__desc");
    eventDesc.appendChild(document.createTextNode(description));

    const eventDate = document.createElement("table");
    eventDate.classList.add("event__table");
    eventDate.appendChild(document.)


}


/*

<table class="event__table">
    <thead class="event__table__header-group">
        <th></th>
        <th class="event__table__header">11/12/2024</th>
        <th class="event__table__header">07/01/2025</th>
    </thead>
    <tbody class="event__table__antendees">
        <tr class="event__table__antendee">
        <td class="event__table__antendee__name">Michou</td>
        <td class="event__table__antendee__choice">x</td>
        <td class="event__table__antendee__choice">x</td>
        </tr>
</table>
*/