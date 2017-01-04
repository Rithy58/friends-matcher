require('../env.js');

var request = require('supertest');
describe('testing authRouter', function () {
  var server;
  beforeEach(function () {
    server = require('../../server.js');
  });
  afterEach(function () {
    server.close();
  });

  it('responds to /auth', function(done) {
    request(server)
      .get('/auth')
      .expect(200, done);
  });

  it('GET /auth/web/login', function(done) {
    request(server)
      .get('/auth/web/login')
      .expect(302, done);
  });

  it('GET /auth/web/callback', function(done) {
    request(server)
      .get('/auth/web/callback')
      .expect(302, done);
  });
});
