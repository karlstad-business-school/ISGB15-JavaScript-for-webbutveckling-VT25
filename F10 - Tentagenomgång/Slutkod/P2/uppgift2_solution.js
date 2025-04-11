'use strict';

function hasTextNode( pRef ) {
    if( pRef.hasChildNodes() ) {
        if( pRef.firstChild.nodeType === 3 ) //TEXT_NODE
            return true;
    }
    return false;
}

function init() {
    //Här skriver du din kod!
    let div = document.getElementById("pCont");
    let counter = 1; //i + 1;

    for(let i = 0; i < div.children.length; i++){
        let child = div.children[i];
        if(hasTextNode(child)){
            child.firstChild.nodeValue = counter;
            counter++;
        }else{
            let textNode = document.createTextNode(counter);
            child.appendChild(textNode);
            counter++;
        }
    }
}
