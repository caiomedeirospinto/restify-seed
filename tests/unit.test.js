/*jslint node: true, indent: 2 */
/*global describe: false, it: false */
"use strict";
var expect = require("chai").expect;
var health = require("../common/health");

describe("Unit Test", function () {
  describe("Health", function () {
    describe("#Health - Version: 1.0.0", function () {
      it("should return a json with message OK", function () {
        expect(health.v1).to.be.deep.equal({ ok: true });
      });
    });
  });
});
