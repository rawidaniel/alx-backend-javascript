const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  it('Stub the function Utils.calculateNumber to always return the same number 10', function () {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    const result = sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be
      .true;
    expect(Utils.calculateNumber('SUM', 100, 20), result);
    expect(consoleSpy.calledWithExactly('The total is: 10')).to.be.true;
  });
});
