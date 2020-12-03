const fs = require('fs');

const Map = require('./src/Map');

const lines = fs.readFileSync('2020/3/src/map.txt', { encoding: 'utf-8' }).split('\n').filter(x => x);
const map = new Map(lines.map(line => [...line]));
let x = 0;
let y = 0;
let trees = 0;

while (y < map.getHeight()) {
  const current = map.getPosition(x, y);
  if (current == '#') trees++;
  x += 3;
  y += 1;
}

console.log(trees);