'use strict';

window.addEventListener('load', prepareColorPicker);


function prepareColorPicker() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let spans = document.querySelectorAll('span.value');

    document.getElementById('red').value = r;
    spans[0].textContent = r;

    document.getElementById('green').value = g;
    spans[1].textContent = g;

    document.getElementById('blue').value = b;
    spans[2].textContent = b;

    document.querySelector('form').addEventListener('input', handleValueChange);

    updateColor();

}

function handleValueChange(evt) {

    //console.log(evt.target);
    //console.log(evt.currentTarget);
    let spans = document.querySelectorAll('span.value');

    if(evt.target.getAttribute('id') === 'red') {
        //console.log('Det är den röda!');
        spans[0].textContent = evt.target.value;
    }
    else if(evt.target.getAttribute('id') === 'green') {
       
        spans[1].textContent = evt.target.value;
    }
    else {
        spans[2].textContent = evt.target.value;

    }

    updateColor();

}

function updateColor() {
    let r = document.querySelector('#red').value;
    let g = document.querySelector('#green').value;
    let b = document.querySelector('#blue').value;

    let cssvalue = 'rgb(' + r + ',' + g + ',' + b + ')';

    document.querySelector('body').style.backgroundColor = cssvalue;

}