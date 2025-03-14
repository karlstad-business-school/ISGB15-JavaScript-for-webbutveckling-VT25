'use strict';
let timerData = {
    timerId : 0
};

/*
    OBSERVERA att vi i denna workshop använder on-attributen i JavaScript och inte i HTML.


*/

window.onload = function() {

    //När DOM:en är byggd...
    let formRef = document.querySelector('#theForm');
    formRef.onsubmit = checkForm;
    formRef.onreset = resetForm;

    document.querySelector('#start').onclick = startTimer;
    document.querySelector('#stop').onclick = stoppTimer;

    document.querySelector('#txtFritext').oninput = countNumberOfChars;

    document.querySelector('#txtNamn').focus();

};


/*
    När DOM:en är skapad i webbläsaren ska denna funktion anropas.
    I funktionen ska markören (fokus) sättas på första textrutan i formuläret.
*/
function setFocusOnForm() {}

/*
    När användaren ändrar texten i textarean ska denna funktion anropas.
    I funktionen ska antalet tecken som skrivits in i textarena alltid visas i
    DOM objektet med id = nbrOfChars.
*/
function countNumberOfChars() {

    document.querySelector('#nbrOfChars').textContent = 
        document.querySelector('#txtFritext').value.length;


}

/*
    När användaren klickar på reset-knappen ska denna funktion anropas.
    I funktionen ska texten som utgör ett felmeddelande sättas till en tom sträng och
    därtill ska antalet tecken som visas för för textarena sättas till noll.


*/
function resetForm() {

    document.querySelector('#nbrOfChars').textContent = 0;
    document.querySelector('#errorMsg').textContent = '';

}

/*
    När användaren klickar på submit-knappen ska denna funktion anropas.
    Använd undantagshantering och kontrollera så att alla textfält har minst ett tecken.
    Om inte kasta ett undantag med en referens till textfältet som genererade undantaget och
    fånga det i catch. Sätt markören på textfältet och skriv ut en lämplig feltext.
    Om allt är ok returnera true annars false.
*/
function checkForm() {

    try {

        let textRefs = document.querySelectorAll('input[type=text], textarea');
        console.log( textRefs );

        let textRefsDemo = document.getElementsByTagName('input');
        console.log( textRefsDemo);

        let currentTextRef = null;

        for(let counter = 0; counter < textRefs.length; counter++) {

            currentTextRef = textRefs.item(counter);
            //console.log(currentTextRef, currentTextRef.value);
            //console.log(textRefsDemo.item(counter), textRefsDemo.item(counter).value );

            if(currentTextRef.value.length === 0) {
                throw {
                    elementRef : currentTextRef
                };
            }

        }

        return true;


    }catch(oError) {


        document.querySelector('#errorMsg').textContent = 'Ange ' + oError.elementRef.getAttribute('title') + "!";
        oError.elementRef.focus();
        return false;
    }


}


function startTimer() {

    if(timerData.timerId !== 0) {
        stoppTimer();
    }

    timerData.timerId = setInterval(function() {
        document.querySelector('#timerDemo').textContent += '#';
    }, 1000);
}

function stoppTimer() {
    document.querySelector('#timerDemo').textContent = '';
    clearInterval(timerData.timerId);
}