const fs = require('fs');

const lines = fs.readFileSync('2020/5/src/seats.txt', {encoding: 'utf-8'}).split('\n').filter(x => x);

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

const seats = [];
for (const line of lines) {
    const s = new Seat(line);
    seats.push(s);
}
const ids = seats.map(s => s.id);

console.log(Math.max(...ids)); // part 1

ids.sort((a, b) => a-b); // part 2
for (let i = 0; i < ids.length - 1; i++) {
    if(ids[i+1]-ids[i] > 1) {
        console.log(ids[i]+1);
        break;
    }
}