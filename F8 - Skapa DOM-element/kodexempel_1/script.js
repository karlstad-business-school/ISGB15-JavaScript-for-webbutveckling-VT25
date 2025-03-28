'use strict';

window.addEventListener('load', ()=> {
    //renderPage();
    //(renderPageInnerHTML();
    renderPageTheRightWay();
});

function renderPage(){
    document.writeln('<main><h1>Sida skapad vid load...</h1><button class="btn btn-primary" onClick="btnClick();">Tryck på mig!</button></main>');

}

function renderPageInnerHTML(){

    let b = document.querySelector('body');

    b.innerHTML='<main><h1>Sida skapad vid load...</h1><button class="btn btn-primary" onClick="btnClick();">Tryck på mig!</button></main>';

}


function btnClick() {
    alert('tjo!');
}

function renderPageTheRightWay() {

    let c = document.querySelector('body');

    let main = document.createElement('main');
    let h1 = document.createElement('h1');
    //h1.textContent = 'Sida skapad vid load...';
    let textTillH1 = document.createTextNode('Sida skapad vid load...');
    let knapp = document.createElement('button');
    let textTillKnapp = document.createTextNode('Klicka på mig!');

    c.appendChild(main);
    main.appendChild(h1);
    h1.appendChild(textTillH1);
    main.appendChild(knapp);
    knapp.appendChild(textTillKnapp);

    knapp.classList.add('btn', 'btn-primary');
    knapp.addEventListener('click',btnClick);


}
