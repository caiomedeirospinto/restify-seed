"use strict";
const server = require('../index.js');
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;

chai.use(chaiHttp);

describe("Health", () => {
  describe("#Get: /health - Version: 1.0.0", () => {
    it("should respond status 200", done => {
      chai
        .request(server)
        .get("/health")
				.end((err, res) => {
          expect(res).to.have.status(200);
					done();
				});
    });
    it("should respond a message OK", done => {
      chai
        .request(server)
				.get("/health")
				.end((err, res) => {
          expect(res.body).to.be.an('object').that.is.deep.equal({ msg: 'OK' });
					done();
				});
    });
  });
});