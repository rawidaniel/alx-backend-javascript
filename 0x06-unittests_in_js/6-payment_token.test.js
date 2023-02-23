const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = require('chai').expect;

describe('getPaymentTokenFromAPI', function () {
  it('getPaymentTokenFromAPI(true)', function (done) {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        console.log(res);
        expect(res).to.be.eql({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
