const { getOccurrence, validate } = require('../src/util');

describe('Day 2 utilities', () => {
  describe('getOccurrence', () => {
    it('should return the length of times a target value appears in an array', () => {
      expect(getOccurrence(['a', 'b', 'c', 'd', 'd'], 'd')).toEqual(2);
    });
  });

  describe('validate', () => {
    it('should return true when given value fulfills min limit', () => {
      const testLimitData = { min: 1, max: 9 };
      expect(validate(testLimitData, 1)).toEqual(true);
    });
  });
})