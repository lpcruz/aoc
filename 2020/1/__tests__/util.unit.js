'use strict';
const {
  _multiply,
  findTwoAndMultiply,
  findThreeAndMultiply
} = require('../src/util');

describe('🎄 AOC - Day 1 utilities', () => {
  describe('_multiply', () => {
    it('should return a product when given an array of ints', () => {
      expect(_multiply([1, 2, 3])).toEqual(6);
    });

    it('should throw an error if array is falsey', () => {
      expect(() => _multiply(null)).toThrowError('You must pass in an array of integers. Received null');
    });
  });

  describe('findTwoAndMultiply', () => {
    const target = 2020;
    const entries = [20, 15, 2000, 5, 1990, 10];
    it('should return a product of 2 found values that add to a target sum', () => {
      expect(findTwoAndMultiply([...entries], target)).toEqual(40000);
    });
  });

  describe('findThreeAndMultiple', () => {
    const target = 2020;
    const entries = [20, 15, 2000, 5, 1990, 10];
    it('should return a product of 3 found values that add to a target sum', () => {
      expect(findThreeAndMultiply([...entries], target)).toEqual(398000);
    });
  });
});