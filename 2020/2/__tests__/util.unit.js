const { getOccurrence } = require('../src/util');

describe('Day 2 utilities', () => {
  describe('getOccurrence', () => {
    it('should return the length of times a target value appears in an array', () => {
      expect(getOccurrence(['a', 'b', 'c', 'd', 'd'], 'd')).toEqual(2);
    });
  })
})