/*jslint node: true, indent: 2 */
'use strict';
var restify = require('restify');

module.exports = function (server) {
  /*jslint unparam: true*/
  var helloWorld = function (req, res, next) {
    server.log.debug("Hello World function execution.");
    res.send({
      message: "Hello World!!"
    });
    return next();
  };
  /*jslint unparam: false*/

  server.get('/say-hello', restify.plugins.conditionalHandler([
    { version: '1.0.0', handler: helloWorld }
  ]));
};
