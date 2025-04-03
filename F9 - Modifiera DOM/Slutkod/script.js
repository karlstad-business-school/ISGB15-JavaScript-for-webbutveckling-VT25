'use strict';


//F9
/*
Din uppgift är att modifiera tabellen som finns i index.html. 
När en användare går in på webbsidan ska koden vänta tills hela Docment Object Model (DOM) har laddats klart och då ska en anonym funktion anropa funktionen createColumns().

Krav:
    • Du får inte använda egenskaperna textContent, innerText, outerText, innerHTML eller outerHTML
    • Du ska använda alla egenskaper inom objektet oData.
    • Du får inte ändra i HTML-koden, CSS-koden eller objektet oData.
    • Du får inte göra något mer än det som står i beskrivningarna
*/





let oData = {
    time : 1000,
    timerId : null,
    h1Ref : document.querySelector("div h1"),
    tableRef: document.querySelector("table"),
};

window.addEventListener("load", function(){
    createColumns(oData.tableRef);
});



/*
Skriva klart koden för funktionen createColumns() som tar emot en referens till tabellen (tableRef i oData). 
Funktionen ska gå igenom alla tabellrader (TR) och lägga till en ny cell i slutet av varje rad som består av summan av den raden. 
Summan ska ni få fram genom funktionen sumOfAllCellsInARow(). 
Cellen med summan ska ha en bakgrundsfärg av ”lightblue” samt ”font-weight” med värdet ”bold”
*/
function createColumns(tableNodeRef) {
    let trRefs = tableNodeRef.querySelectorAll("tr");

    for(let i = 0; i < trRefs.length; i++){
        console.log(trRefs[i]);
        let tr = trRefs[i];

        let sum = sumOfAllCellsInARow(tr);

        let td = document.createElement("td");
        let tdText = document.createTextNode(sum);

        td.appendChild(tdText);
        tr.appendChild(td);

        td.style.fontWeight = "bold";
        td.style.backgroundColor = "lightblue";
    }
}



/*
Skriv klart koden för funktionen sumOfAllCellsInARow() som tar emot en referens till den rad ni vill räkna ut summan på. 
Här är det viktigt att tänka på att vissa av cellerna kan vara nummber, strängar eller tomma. 
Om ni upptäcker att en cell har ett värde som inte är ett nummer ska ni sätta bakgrundsfärgen till röd på den cellen. 
Till sist ska ni räkna ihop och returerna den totalt summan av hela raden. 
*/
function sumOfAllCellsInARow(trNodeRef) {
    let sum = 0;
    let tdRefs = trNodeRef.querySelectorAll("td");

    for(let i = 0; i < tdRefs.length; i++){
        let td = tdRefs[i];

        //td.textContent == td.firstChild.nodeValue;
        // "     " --> trim() = ""; 
        if(td.firstChild == null || td.firstChild.nodeValue.trim() == "" || isNaN(td.firstChild.nodeValue)){
            td.style.backgroundColor = "red";
        }else{
            sum += parseInt(td.firstChild.nodeValue);
        }
    }

    return sum;
}




/*
Lägg till en lyssnare när en användare trycker på tabellen. 
Kontrollera att användaren trycker på en av cellerna. 
Om användaren trycker på en cell ska du sätta texten i H1-taggen till cellens text. 
Du ska också starta en timer som sätter tillbaka texten till ”Table” efter en sekund (värdet på time i oData). 
Du ska också stänga av timern ifall en användare trycker på en ny cell.
*/

oData.tableRef.addEventListener("click", function(e){
    if(e.target.nodeName == "TD"){
        if(e.target.firstChild == null){
            oData.h1Ref.firstChild.nodeValue = "";
        }else{
            oData.h1Ref.firstChild.nodeValue = e.target.firstChild.nodeValue;
        }
        
        clearTimeout(oData.timerId);

        oData.timerId = setTimeout(function(){
            oData.h1Ref.firstChild.nodeValue = "Table";
        }, oData.time);

        console.log(oData.timerId);
    }
}); 