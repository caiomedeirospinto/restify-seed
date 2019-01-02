/*jslint node: true, stupid: true, unparam: true */
'use strict';
var restify = require('restify');

var healthV1;

healthV1 = function (req, res, next) {
  res.send({ msg: 'OK' });
  return next();
};

/*jslint unparam: false*/
module.exports = function (server) {
  server.get('/health', restify.plugins.conditionalHandler([
    { version: '1.0.0', handler: healthV1 }
  ]));
};
