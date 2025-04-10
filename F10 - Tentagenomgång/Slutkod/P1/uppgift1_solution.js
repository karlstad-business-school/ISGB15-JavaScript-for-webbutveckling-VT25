'use strict';

let oGlobalObject = {
    h2Ref : document.querySelector('h2'),
    milliSecondsStart : 0,
    milliSecondsStop : 0,
    nbrOfMouseEnter : 0,

    getNbrOfMilliSeconds : function() {
        return Date.now();
    },

    getNbrOfSeconds : function() {
        return ( (this.milliSecondsStop - this.milliSecondsStart) / 1000 );
    },

    resetForNewGame : function() {
        this.milliSecondsStart = 0;
        this.milliSecondsStop = 0;
        this.nbrOfMouseEnter = 0;
    },

    mouseenter : function() {
        //Här skriver du din kod!
    }
};
