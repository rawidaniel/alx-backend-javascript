const assert = require('assert');
const { describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('Test acalculateNumber function', function () {
  describe('test type of SUM', function () {
    it('calculateNumber should retrun rounded positive sum', function () {
      assert.equal(calculateNumber('SUM', 3, 4), 7);
      assert.strictEqual(calculateNumber('SUM', 6.1, 6.1), 12);
      assert.strictEqual(calculateNumber('SUM', 5.7, 1.1), 7);
      assert.strictEqual(calculateNumber('SUM', 0.1, 0.1), 0);
      assert.strictEqual(calculateNumber('SUM', 0.8, 0.1), 1);
    });
    it('calculateNumber should retrun rounded negative sum', function () {
      assert.equal(calculateNumber('SUM', -1, -4), -5);
      assert.strictEqual(calculateNumber('SUM', -4.2, -4.1), -8);
      assert.strictEqual(calculateNumber('SUM', -1.5, -4.3), -5);
      assert.strictEqual(calculateNumber('SUM', -0.1, -0.1), -0);
      assert.strictEqual(calculateNumber('SUM', -0.8, -0.1), -1);
    });
    it('calculateNumber should retrun typeof number', function () {
      assert.equal(typeof calculateNumber('SUM', 3, 4), 'number');
    });
  });

  describe('test type of SUBTRACT', function () {
    it('calculateNumber should retrun rounded positive substracted result', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 4), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', 6.1, 6.1), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 5.7, 1.1), 5);
      assert.strictEqual(calculateNumber('SUBTRACT', 0.1, 0.1), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 0.8, 0.1), 1);
    });
    it('calculateNumber should retrun rounded negative substract result', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -1, -4), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', -4.2, -4.1), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -4.3, -1.6), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', -0.1, -0.1), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -0.8, -0.1), -1);
    });
    it('calculateNumber should retrun typeof number', function () {
      assert.strictEqual(typeof calculateNumber('SUBTRACT', 3, 4), 'number');
    });
  });
  describe('test type of DIVIDE', function () {
    it('calculateNumber should retrun rounded positive divide result', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 3, 4), 0.75);
      assert.strictEqual(calculateNumber('DIVIDE', 6.1, 6.1), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 5.7, 1.1), 6);
      assert.strictEqual(calculateNumber('DIVIDE', 0.1, 0.1), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 0.1, 0.8), 0);
    });
    it('calculateNumber should retrun rounded negative divide result', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -1, 4), -0.25);
      assert.strictEqual(calculateNumber('DIVIDE', -4.2, 4.1), -1);
      assert.strictEqual(calculateNumber('DIVIDE', -4.3, 1.6), -2);
      assert.strictEqual(calculateNumber('DIVIDE', -0.1, -0.1), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -0.1, -0.8), 0);
    });
    it('calculateNumber should retrun typeof number', function () {
      assert.strictEqual(typeof calculateNumber('DIVIDE', 3, 4), 'number');
    });
    it('calculateNumber should retrun typeof string when denominator is 0', function () {
      assert.strictEqual(typeof calculateNumber('DIVIDE', 3, 0), 'string');
    });
  });
});
