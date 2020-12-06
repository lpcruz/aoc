'use strict';
function stringToInt(str) {
    return parseInt([...str].map(x => x === 'B' || x === 'R' ? 1 : 0).join(''), 2);
}

class Seat {
    constructor(string) {
        this.row = stringToInt(string.slice(0, 7));
        this.column = stringToInt(string.slice(7));
        this.id = this.row*8 + this.column;
    }
}

module.exports = Seat;