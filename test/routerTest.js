var request = require('supertest');
describe('testing router', function () {
  var server;
  beforeEach(function () {
    server = require('../server');
  });
  afterEach(function () {
    server.close();
  });

  it('responds to /auth', function testSlash(done) {
    request(server)
      .get('/auth')
      .expect(200, done);
  });
});
