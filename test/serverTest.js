// TODO: Redo Tests
require('./env.js')

var request = require('supertest');
describe('testing server', function () {
  var server;
  beforeEach(function () {
    server = require('../server.js');
  });
  afterEach(function () {
    server.close();
  });

  it('responds to static files', function testSlash(done) {
    request(server)
      .get('/index.html')
      .expect(200, done);
  });

  it('404 not found request', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
