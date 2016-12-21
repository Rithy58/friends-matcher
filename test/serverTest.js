var request = require('supertest');
describe('testing server', function () {
  var server;
  beforeEach(function () {
    server = require('../server');
  });
  afterEach(function () {
    server.close();
  });

  it('404 not found request', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
