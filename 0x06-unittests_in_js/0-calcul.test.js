const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test acalculateNumber function', function () {
  it('calculateNumber should retrun rounded positive sum', function () {
    assert.strictEqual(calculateNumber(3, 4), 7);
    assert.strictEqual(calculateNumber(6.1, 6.1), 12);
    assert.strictEqual(calculateNumber(5.7, 1.1), 7);
    assert.strictEqual(calculateNumber(0.1, 0.1), 0);
    assert.strictEqual(calculateNumber(0.8, 0.1), 1);
  });
  it('calculateNumber should retrun rounded negative sum', function () {
    assert.strictEqual(calculateNumber(-1, -4), -5);
    assert.strictEqual(calculateNumber(-4.2, -4.1), -8);
    assert.strictEqual(calculateNumber(-1.5, -4.3), -5);
    assert.strictEqual(calculateNumber(-0.1, -0.1), -0);
    assert.strictEqual(calculateNumber(-0.8, -0.1), -1);
  });
  it('calculateNumber should retrun typeof number', function () {
    assert.equal(typeof calculateNumber(3, 4), 'number');
  });
});
