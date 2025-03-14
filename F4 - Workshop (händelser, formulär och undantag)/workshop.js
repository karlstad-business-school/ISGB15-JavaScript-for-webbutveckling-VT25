'use strict';
let timerData = {
    timerId : 0
};

/*
    OBSERVERA att vi i denna workshop använder on-attributen i JavaScript och inte i HTML.
*/

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
function countNumberOfChars() {}

/*
    När användaren klickar på reset-knappen ska denna funktion anropas.
    I funktionen ska texten som utgör ett felmeddelande sättas till en tom sträng och
    därtill ska antalet tecken som visas för för textarena sättas till noll.
*/
function resetForm() {}

/*
    När användaren klickar på submit-knappen ska denna funktion anropas.
    Använd undantagshantering och kontrollera så att alla textfält har minst ett tecken.
    Om inte kasta ett undantag med en referens till textfältet som genererade undantaget och
    fånga det i catch. Sätt markören på textfältet och skriv ut en lämplig feltext.
    Om allt är ok returnera true annars false.
*/
function checkForm() {}

/*
    När användaren klickar på Starta timer knappen ska funktionen anropas.
*/
function startTimer() {
    /*
        1. Kontrollera om en timer är gång och om så är fallet avsluta timer.
        2. Starta en ny timer som exekverar en funktion en gång i sekunden.
    */
}

/*
    När användaren klickar på Stoppa timer knappen ska funktionen anropas.
*/
function stoppTimer() {
    /*
        1. Kontrollera om en timer är gång och om så är fallet avsluta timer.
    */
}