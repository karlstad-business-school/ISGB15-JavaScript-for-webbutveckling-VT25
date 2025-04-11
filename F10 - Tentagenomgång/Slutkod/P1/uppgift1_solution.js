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
        console.log(this, oGlobalObject);
        if(oGlobalObject.nbrOfMouseEnter == 0){
            oGlobalObject.milliSecondsStart = oGlobalObject.getNbrOfMilliSeconds();
        }
        oGlobalObject.nbrOfMouseEnter += 1;

        if(oGlobalObject.nbrOfMouseEnter == 10){
            //Då är vi klara
            oGlobalObject.milliSecondsStop = oGlobalObject.getNbrOfMilliSeconds();
            let totaltTime = oGlobalObject.getNbrOfSeconds();
            oGlobalObject.h2Ref.textContent = "Det tog dig " + totaltTime + " att trigga onmouseenter händelsen tio gånger!";

            oGlobalObject.resetForNewGame();
        }else{
            oGlobalObject.h2Ref.textContent = "Du har nu triggat onmouseenter " + oGlobalObject.nbrOfMouseEnter + " gånger";
        }
    }
};
