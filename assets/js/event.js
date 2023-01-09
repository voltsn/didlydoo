function createEvent(author, name, description){
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
      
    generateTable;

    
}

function generateTable(people, dates){
    // creates a <table> element, <tbody>, <thead> and <tfoot> element
    const tbl = document.createElement("table");
    tbl.classList.add("table__event");

    const tblHead = document.createElement("thead");
    tblHead.classList.add("event__table__header__group");

    const tblBody = document.createElement("tbody");
    tblBody.classList.add("event__table__antendees");

    const tblFoot = document.createElement("tfoot");
    tblFoot.classList.add("event__table__footer");
    
  
    // creating all cells for dates choosen by creator in the table Header
    for (let i = 0; i < day.length; i++) {
        
        const thHead = document.createElement("th");
        thHead.classList.add("event__table__header");

        tblHead.appendChild(thHead);
    }


    //creating the Body Part
    for (let j = 0; j < people.length; j++) {
        const rowBody = document.createElement("tr");
        rowBody.classList.add("event__table__antendee");

        const tdBodyName = document.createElement("td");
        tdBodyName.classList.add("event__table__antendee__name");
        tdBodyName.appendChild(document.createTextNode(attendee.name));
//aller rechercher dans le Json le nom des personnes qui participent à l'événement

        const tdBodyChoice = document.createElement("td");
        tdBodyChoice.classList.add("event__table__antendee__choice");
        let p = people.available ? 'v' : 'x';
        tdBodyChoice.appendChild(document.createTextNode(p));
//noter une X si date à laquelle la personne est dispo (si true)


        rowBody.appendChild(tdBodyName);
        rowBody.appendChild(tdBodyChoice);

      }

      
      // add the row to the end of the table body
      tblBody.appendChild(rowBody);
      //add the table Body to the table
      tbl.appendChild(tblBody);
    
  
//construction table Footer
    const rowFoot = document.createElement("tr");  
    const tdFootInput = document.createElement("td");
    const attendeeInput = document.querySelector("attendee-input");

    attendeeInput.setAttribute("type", "text");
    attendeeInput.setAttribute("name", "attendee");
    attendeeInput.setAttribute("placeholder", "name");

    tdFootInput.appendChild(attendeeInput);
    rowFoot.appendChild(tdFootInput);
    tblFoot.appendChild(rowFoot);

    
    const tdFormControl = document.createElement("td");
    const divFormControl = document.createElement("div");
    divFormControl.classList.add("form-control");

    const labelFormControl = document.createElement('label');
    labelFormControl.setAttribute("for", "choice");
    labelFormControl.classList.add("form-label");

    divFormControl.appendChild(labelFormControl);


    const inputFormControl = document.createAttribute('input');
    inputFormControl.setAttribute("type", "radio");
    inputFormControl.setAttribute("name", "choice");


    divFormControl.appendChild(inputFormControl);
    tdFormControl.appendChild(divFormControl);
    rowFoot.appendChild(tdFormControl);

    tblFoot.appendChild(rowFoot);

    // put the <tbody> in the <table>
    tbl.appendChild(tblFoot);

    // appends <table> into <body>
    document.body.appendChild(tbl);
  
};

/*
function generateTableBody(day){
    let htmlCode =
    `<table class="event__table">
        <thead class="event__table__header-group">
            <th></th>
            <th class="event__table__header">${day}</th>
        </thead>
        <tbody class="event__table__antendees"></tbody>

        <tfoot class="event__table__footer">
            <tr>
                <td><input class="attendee-input" type="text" name="attendee" placeholder="Name"></td>
            
        
            </tr>
        </tfoot>
    </table>`;

    
    let saveButton = document.querySelector('.content-save-choice-btn');
    let body=document.querySelector('body');
    let insertHtml = body.insertBefore(htmlCode, saveButton);

    insertHtml;
    
  };

  
function generateTableFooter(){

  let htmlFoot= 
  ` <td>
        <div class="form-control">
            <label for="choice" class="form-label">Yes</label>
            <input type="radio" name="choice" >
        </div>
        <div class="form-control">
            <label for="choice" class="form-label">No</label>
            <input type="radio" name="choice">
        </div>
    </td>
  `
    let insertTableFooter = document.querySelector('attendee-input');
    insertTableFooter.insertAdjacentElement(htmlFoot);
}



let submit = document.querySelector('.form-submit-btn');
submit.addEventListener('click', createEvent);
*/
/*
function generateTable(day, people, ) {
    // creates a <table> element, <tbody>, <thead> and <tfoot> element
    const tbl = document.createElement("table");
    tbl.classList.add("table__event");

    const tblHead = document.createElement("thead");
    tblHead.classList.add("event__table__header__group");

    const thHead = document.createElement("th");
    thHead.classList.add("event__table__header");

    const tblBody = document.createElement("tbody");
    tblBody.classList.add("event__table__antendees");

    const tblFoot = document.createElement("tfoot");
    tblFoot.classList.add("event__table__footer")
    
  
    // creating all cells for dates choosen by creator
    for (let i = 0; i < date.length; i++) {
        tblHead.appendChild(thHead);
    }

    //creating the Body Part

    for (let j = 0; j < name.length; j++) {

        const rowBody = document.createElement("tr");
        rowBody.classList.add("event__table__antendee");

        const cellBodyName = document.createElement("td");
        cellBodyName.classList.add("event__table__antendee__name");
        cellBodyName.appendChild(document.createTextNode(db.attendee.name));


        const cellBodyChoice = document.createElement("td");
        cellBodyChoice.classList.add("event__table__antendee__choice");

//aller rechercher le nom de la personne qui donne ses disponibilités dans le JSON
        const cellTextBody = document.createTextNode(NAME DU JSON);

        //créer fonction qui écrit dans le cellTextBody si la personne est dispo ou non)
        cellBodyName.appendChild(cellTextBody);
        rowBody.appendChild(cellBodyName);
        rowBody.appendChild(cellBodyChoice);

      }
  
      // add the row to the end of the table body
      tblBody.appendChild(rowBody);
    
  
    const rowFoot = document.createElement("tr");  
    tdFootInput = document.createElement ("td")

    tblFoot.appendChild(rowFoot);
    rowFoot.appendChild(tdFootInput);

      footHTML(){
        let htmlCode =
        `<tfoot class="event__table__footer">
                    <tr>
                        <td><input class="attendee-input" type="text" name="attendee" placeholder="Name"></td>
                        <td>
                            <div class="form-control">
                                <label for="choice" class="form-label">Yes</label>
                                <input type="radio" name="choice" >
                            </div>
                            <div class="form-control">
                                <label for="choice" class="form-label">No</label>
                                <input type="radio" name="choice">
                            </div>
                        </td>
                        <td>
                            <div class="form-control">
                                <label for="choice" class="form-label">Yes</label>
                                <input type="radio" name="choice">
                            </div>
                            <div class="form-control">
                                <label for="choice" class="form-label">No</label>
                                <input type="radio" name="choice">
                            </div>
                        </td>
                        
                    </tr>
                </tfoot>`;
                return htmlCode;
      }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
*/