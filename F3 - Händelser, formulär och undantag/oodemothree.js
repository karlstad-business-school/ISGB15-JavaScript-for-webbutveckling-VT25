let DateThree = {

    DayOfWeekObjectLiteral : function() {

        let Dagar = new Array(
            'Söndag',
            'Måndag',
            'Tisdag',
            'Onsdag',
            'Torsdag',
            'Fredag',
            'Lördag'
        );
    
        return Dagar[new Date().getDay()];

    }

}