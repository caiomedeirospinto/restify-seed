/*jslint node: true, indent: 2 */
/*global describe: false, it: false */
"use strict";
var server = require('../index.js');
var chai = require("chai");
var chaiHttp = require("chai-http");
var expect = chai.expect;

chai.use(chaiHttp);

describe("Integration Test", function () {
  describe("Health API", function () {
    describe("#Get: /health - Version: 1.0.0", function () {
      it("should respond status 200", function (done) {
        chai
          .request(server)
          .get("/health")
          .end(function (err, res) {
            expect(err).to.equal(null);
            expect(res).to.have.status(200);
            done();
          });
      });
      it("should respond a message OK", function (done) {
        chai
          .request(server)
          .get("/health")
          .end(function (err, res) {
            expect(err).to.equal(null);
            expect(res.body).to.be.an('object').that.is.deep.equal({ ok: true });
            done();
          });
      });
    });
  });
});
