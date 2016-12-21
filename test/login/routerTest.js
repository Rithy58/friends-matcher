var request = require('supertest');
describe('testing login router', function () {
  var server;
  beforeEach(function () {
    server = require('../../server');
  });
  afterEach(function () {
    server.close();
  });

  it('responds to /login', function testSlash(done) {
    request(server)
      .get('/login')
      .expect(200, done);
  });
});
