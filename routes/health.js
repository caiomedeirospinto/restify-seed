/*jslint node: true, indent: 2 */
'use strict';
var restify = require('restify');
var health = require('../common/health');

module.exports = function (server) {
  /*jslint unparam: true*/
  var healthV1 = function (req, res, next) {
    server.log.debug("Health function execution.");
    res.send(health.v1);
    return next();
  };
  /*jslint unparam: false*/

  server.get('/health', restify.plugins.conditionalHandler([
    { version: '1.0.0', handler: healthV1 }
  ]));
};
