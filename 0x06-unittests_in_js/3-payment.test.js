const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it("sendPaymentRequestToApi(100, 20) is the same Utils.calculateNumber('SUM', 100, 20)", function () {
    const functionSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');
    const totalAmount = 10,
      totalShipping = 20;
    const result = sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(functionSpy.calledOnce).to.be.true;
    expect(functionSpy.calledOnceWith('SUM', totalAmount, totalShipping)).to.be
      .true;
    expect(Utils.calculateNumber(totalAmount, totalShipping), result);
    expect(consoleSpy.calledWithExactly('The total is: 30')).to.be.true;
  });
});
