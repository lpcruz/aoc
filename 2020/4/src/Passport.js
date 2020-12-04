'use strict';

class Passport {
  static mandatory = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  constructor(input) {
    this.map = new Map();
    const list = input.split(/\s+/g);
    list.forEach(kv => {
      const [key, value] = kv.split(':');
      this.map.set(key, value);
    });
  }

  isValid() {
    return Passport.mandatory.every(key => this.map.has(key));
  }
}

module.exports = Passport;