const expect = require('chai').expect;
const request = require('request');

describe('Index page', () => {
  it('request', () => {
    request('http://localhost:7865', (error, response, body) => {
      if (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.statusMessage).to.equal('OK');
        expect(response.body).to.equals('Welcome to the payment system');
      }
    });
  });
});
