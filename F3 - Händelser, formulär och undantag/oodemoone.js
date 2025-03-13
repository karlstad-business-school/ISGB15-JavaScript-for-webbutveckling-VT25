Date.prototype.DayOfWeekPrototype = function() {
	
    let Dagar = new Array(
        'Söndag',
        'Måndag',
        'Tisdag',
        'Onsdag',
        'Torsdag',
        'Fredag',
        'Lördag'
    );

    return Dagar[this.getDay()];
}