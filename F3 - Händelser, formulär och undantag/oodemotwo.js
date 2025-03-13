class ExtendedDate extends Date {

    DayOfWeekClass() {

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
}