'use strict';
let oGame = {};
oGame.score = null;
oGame.time = null;
oGame.intervalId = null;

window.addEventListener('load', prepareGame);


function prepareGame() {

    //ToDo:

    //Gömma spelplan
    
    //Skapa element som kan klickas
    
    //Lägg på klassen "target" (rundade hörn mm)
    
    //Lägg in element i gamArea
   
    //Lägg lyssnare på  startknapp (länk)
    
}

function startGame() {

    //ToDo:

    //Visa gameArea
   

    //Sätt startvärden i gameobj
    oGame.score = 0;
    oGame.time = 11;

    //Skriv ut startvärden #score
       
    //Ropa på moveTarget 1gång per sekund

    //lägg på lyssnare på target
  

}

//Metod för att flytta element med klassen target samt uppdatera kvarvarande tid
function moveTarget() {

    let target = document.querySelector('.target');
    let gameArea = document.querySelector('#gameArea');

    oGame.time--;
    document.querySelector('#time').textContent = 'Time remaining: ' + oGame.time;

    if(oGame.time<=0) {
        //Spelet slut
        clearInterval(oGame.intervalId);

        //Ta bort lyssnare på target
        document.querySelector('.target').removeEventListener('click', updateScore);
    }
    else {
        let left = Math.floor(Math.random() * (gameArea.offsetWidth - 20));
        let top = Math.floor(Math.random() * (gameArea.offsetHeight - 20));
    
        target.style.left = left + 'px';
        target.style.top = top + 'px';
    }




}

//Metod för att räkna upp poäng med 1 vid träff
function updateScore() {
    oGame.score++;
    document.querySelector('#score').textContent = 'Score: ' + oGame.score;
}