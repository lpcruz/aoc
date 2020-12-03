const fs = require('fs');

const Map = require('./src/Map');

const lines = fs.readFileSync('2020/3/src/map.txt', { encoding: 'utf-8' }).split('\n').filter(x => x);
const map = new Map(lines.map(line => [...line]));

function trySlope(dx, dy) {
  let x = 0;
  let y = 0;
  let trees = 0;

  while (y < map.getHeight()) {
    const current = map.getPosition(x, y);
    if (current == '#') trees++;
    x += dx;
    y += dy;
  }
  return trees;
}
console.log(trySlope(3, 1,));
const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
let results = 1;
for (const slope of slopes) {
  results *= trySlope(...slope);
}
console.log(results);