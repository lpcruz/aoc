'use strict';

class Map {
  constructor(map) {
    this.map = map;
  }

  getPosition(x, y) {
    return this.map[y][x%this.map[0].length];
  }

  getHeight() {
    return this.map.length;
  }
}

module.exports = Map;
