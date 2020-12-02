const { getOccurrence, validate, validatePosition } = require('../src/util');

describe('🎄 AOC - Day 2 utilities', () => {
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

    it('should return true when given value fulfills max limit', () => {
      const testLimitData = { min: 1, max: 9 };
      expect(validate(testLimitData, 9)).toEqual(true);
    });
  });

  describe('validatePosition', () => {
    it('should return true when given value fulfills min limit', () => {
      const testLimitData = { min: 1, max: 9, password: ['a','b','c','d'] };
      expect(validatePosition(testLimitData, 'a')).toEqual(true);
    });

    it('should return true when given value fulfills max limit', () => {
      const testLimitData = { min: 1, max: 9, password: ['b','b','c','d','e','f','g','h','a'] };
      expect(validatePosition(testLimitData, 'a')).toEqual(true);
    });

    it('should return false when given value fulfills both max and min limit', () => {
      const testLimitData = { min: 1, max: 9, password: ['a','b','c','d','e','f','g','h','a'] };
      expect(validatePosition(testLimitData, 'a')).toEqual(false);
    });
  });
})