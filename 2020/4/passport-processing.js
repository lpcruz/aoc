const fs = require('fs');

const Passport = require('./src/Passport');

const lines = fs.readFileSync('2020/4/src/passport-data.txt', { encoding: 'utf-8' }).split('\n\n').filter(x => x);

let valid = 0;

for (const line of lines) {
  const p = new Passport(line);
  if (p.isValid()) valid++
}

valid = 0;

for (const line of lines) {
  const p = new Passport(line);
  if (p.isFullyValid()) valid++
}

console.log(valid);