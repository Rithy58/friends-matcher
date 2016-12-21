var request = require('supertest');
describe('testing router', function () {
  var server;
  beforeEach(function () {
    server = require('../server');
  });
  afterEach(function () {
    server.close();
  });

  it('responds to /', function testSlash(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });
});
