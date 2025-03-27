'use strict';
let oGame = {};
oGame.score = null;
oGame.time = null;
oGame.intervalId = null;


window.addEventListener('load', prepareGame);


function prepareGame() {
    document.querySelector('#gameArea').classList.add('hidden');

    let target = document.createElement('div');
    target.classList.add('target');
    document.querySelector('#gameArea').appendChild(target);

    document.querySelector('.mybtn').addEventListener('click', startGame);
}

function startGame() {
    document.querySelector('#gameArea').classList.remove('hidden');
    oGame.score = 0;
    oGame.time = 10;

    //Skriv ut startvärden
    document.querySelector('#score').textContent = 'Score: ' + oGame.score;
    document.querySelector('#time').textContent = 'Time remaining: ' + oGame.time;

    let target = document.querySelector('.target');
    target.addEventListener('click', updateScore);

    moveTarget();

    oGame.intervalId = setInterval(moveTarget,1000);

}


function moveTarget() {

    let target = document.querySelector('.target');
    let gameArea = document.querySelector('#gameArea');

    oGame.time--;
    document.querySelector('#time').textContent = 'Time remaining: ' + oGame.time;

    if(oGame.time<=0) {
        //Spelet slut
    }
    else {
        let left = Math.floor(Math.random() * (gameArea.offsetWidth-50));
        let top = Math.floor(Math.random() * (gameArea.offsetHeight - 50));

        target.style.left = left + 'px';
        target.style.top = top + 'px';
    }


}

function updateScore() {

    oGame.score++;
    document.querySelector('#score').textContent = 'Score: ' + oGame.score;


}