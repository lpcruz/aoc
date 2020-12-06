const fs = require('fs');
const Seat = require('../5/src/Seat');

const lines = fs.readFileSync('2020/5/src/seats.txt', { encoding: 'utf-8' }).split('\n').filter(x => x);

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