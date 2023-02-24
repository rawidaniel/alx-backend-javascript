const expect = require('chai').expect;
const { describe } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

describe('Test acalculateNumber function', function () {
  describe('test type of SUM', function () {
    it('calculateNumber should retrun rounded positive sum', function () {
      expect(calculateNumber('SUM', 3, 4)).to.equal(7);
      expect(calculateNumber('SUM', 6.1, 6.1)).to.equal(12);
      expect(calculateNumber('SUM', 3, 4)).to.equal(7);
      expect(calculateNumber('SUM', 5.7, 1.1)).to.equal(7);
      expect(calculateNumber('SUM', 0.1, 0.1)).to.equal(0);
      expect(calculateNumber('SUM', 0.8, 0.1)).to.equal(1);
    });
    it('calculateNumber should retrun rounded negative sum', function () {
      expect(calculateNumber('SUM', -1, -4)).to.equal(-5);
      expect(calculateNumber('SUM', -4.2, -4.1)).to.equal(-8);
      expect(calculateNumber('SUM', -1.5, -4.3)).to.equal(-5);
      expect(calculateNumber('SUM', -0.1, -0.1)).to.equal(-0);
      expect(calculateNumber('SUM', -0.8, -0.1)).to.equal(-1);
    });
    it('calculateNumber should retrun typeof number', function () {
      expect(calculateNumber('SUM', 3, 4)).to.be.a('number');
    });
  });

  describe('test type of SUBTRACT', function () {
    it('calculateNumber should retrun rounded positive substracted result', function () {
      expect(calculateNumber('SUBTRACT', 3, 4)).to.equal(-1);
      expect(calculateNumber('SUBTRACT', 6.1, 6.1)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 5.7, 1.1)).to.equal(5);
      expect(calculateNumber('SUBTRACT', 0.1, 0.1)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 0.8, 0.1)).to.equal(1);
    });
    it('calculateNumber should retrun rounded negative substract result', function () {
      expect(calculateNumber('SUBTRACT', -1, -4)).to.equal(3);
      expect(calculateNumber('SUBTRACT', -4.2, -4.1)).to.equal(0);
      expect(calculateNumber('SUBTRACT', -4.3, -1.6)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', -0.1, -0.1)).to.equal(0);
      expect(calculateNumber('SUBTRACT', -0.8, -0.1)).to.equal(-1);
    });
    it('calculateNumber should retrun typeof number', function () {
      expect(calculateNumber('SUBTRACT', 3, 4)).to.be.a('number');
    });
  });
  describe('test type of DIVIDE', function () {
    it('calculateNumber should retrun rounded positive divide result', function () {
      expect(calculateNumber('DIVIDE', 3, 4), 0.75);
      expect(calculateNumber('DIVIDE', 6.1, 6.1), 1);
      expect(calculateNumber('DIVIDE', 5.7, 1.1), 6);
      expect(calculateNumber('DIVIDE', 0.1, 0.1), 'Error');
      expect(calculateNumber('DIVIDE', 0.1, 0.8), 0);
    });
    it('calculateNumber should retrun rounded negative divide result', function () {
      expect(calculateNumber('DIVIDE', -1, 4), -0.25);
      expect(calculateNumber('DIVIDE', -4.2, 4.1), -1);
      expect(calculateNumber('DIVIDE', -4.3, 1.6), -2);
      expect(calculateNumber('DIVIDE', -0.1, -0.1), 'Error');
      expect(calculateNumber('DIVIDE', -0.1, -0.8), 0);
    });
    it('calculateNumber should retrun typeof number', function () {
      expect(calculateNumber('DIVIDE', 3, 4)).to.be.a('number');
    });
    it('calculateNumber should retrun typeof string when denominator is 0', function () {
      expect(calculateNumber('DIVIDE', 3, 0)).to.be.a('string');
    });
    it('returns Error', () => {
      expect(calculateNumber('DIVIDE', 2, 0), 'Error');
      expect(calculateNumber('DIVIDE', 3, 0), 'Error');
      expect(calculateNumber('DIVIDE', 4, 0), 'Error');
    });
  });
});
