'use strict';

function _fourDigits(input, from, to) {
  if (!/^\d{4}$/.test(input)) {
    return false;
  }
  const int = parseInt(input);
  if (int < from) return false;
  if (int > to) return false;
  return true;
}

const eyeColors = new Set(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']);
class Passport {
  static mandatory = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  static fieldValidators = {
    byr: i => _fourDigits(i, 1920, 2002),
    iyr: i => _fourDigits(i, 2010, 2020),
    eyr: i => _fourDigits(i, 2020, 2030),
    hgt: i => {
      const cm = /^(?<value>\d+)cm$/.exec(i);
      if (cm) {
        return parseInt(cm.groups.value) >= 150 && parseInt(cm.groups.value) <= 193
      }
      const inches = /^(?<value>\d+)in$/.exec(i);
      if (inches) {
        return parseInt(inches.groups.value) >= 59 && parseInt(inches.groups.value) <= 76
      }
      return false;
    },
    hcl: i => /^#[0-9a-f]{6}$/.test(i),
    ecl: i => eyeColors.has(i),
    pid: i => /^\d{9}$/.test(i),
    cid: i => true
  };
  constructor(input) {
    this.map = new Map();
    const list = input.split(/\s+/g);
    list.forEach(kv => {
      const [key, value] = kv.split(':');
      if (key) this.map.set(key, value);
    });
  }

  isValid() {
    return Passport.mandatory.every(key => this.map.has(key));
  }

  isFullyValid() {
    console.log(this.map)
    console.log([...this.map.entries()])
    return Passport.mandatory.every(key => this.map.has(key))
      && [...this.map.entries()].every(([key, value]) =>
        Passport.fieldValidators[key](value)
      );
  }
}

module.exports = Passport;