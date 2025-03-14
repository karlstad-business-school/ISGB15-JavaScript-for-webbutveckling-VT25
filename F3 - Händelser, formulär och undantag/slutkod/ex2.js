'use strict';

function myOwnOnLoad() {
    /*
        I funktionen söker vi i DOM:en efter ett object av som är input med attributet name satt till nickName.
        Returen (referensen till DOM objektet) placerar vi sedan i variabeln domRef och anropar focus() vilket
        sätter fokus på DOM objektet i webbläsaren.
    */
    console.log('myOwnOnLoad');
    let domRef = document.querySelector('input[name=nickName]');
    domRef.focus();
}
function myOwnOnReset() {
    console.log('myOwnOnReset');
}

function myOwnOnInput(textElement) {

    /*
        Denna funktion tar emot en referens till ett objekt av typen input.
    */
    console.log('myOwnOnInput');
    console.log(textElement, textElement.value, textElement.value.length);

}

function myOwnOnSubmit () {

    /*
        I funktionen kontrollerar vi om det finns en text som är minst fem tecken i 
        input med attributet name satt till nickName. Om texten är under fem tecken
        skapas ett object literal som kastas med throw och fångas i catch.
        Det nya objekte innehåller två attribute där det första utgör en referens till
        input som vi sökte fram i DOM:en och det andra en konstant sträng.

        I catch söker vi på nytt i DOM:en och ändrar texten i ett objekct samt sätter 
        fokus på input som genererade undantaget.

        OBSERVERA return true om allt är okej och return false om ett undantag kastas.
    */
    try {

        let nickName = document.querySelector('[name=nickName]');

        if(nickName.value.length < 5) {

            throw {
                element : nickName,
                errorMsg : 'Nickname ska vara minst fem tecken långt!'
            };

        }

        return true;

    }catch(oE) {

        document.querySelector('#errorMsg').textContent = oE.errorMsg;
        oE.element.focus();
        return false;

    }


}

