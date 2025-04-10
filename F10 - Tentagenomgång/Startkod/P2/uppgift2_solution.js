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
}
