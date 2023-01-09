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
      
    generateTableBody();

    generateTableFooter();

}


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

    
    let saveButton = document.querySelector('content-save-choice-btn');
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

let body=document.querySelector('body');
/*body.addEventListener('load', createEvent);*/

let submit = document.querySelector('.form-submit-btn');
submit.addEventListener('click', createEvent);

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