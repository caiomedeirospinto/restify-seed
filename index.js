/*jslint node: true, indent: 2 */
'use strict';
var restify, plugins, bunyan, routes, log, server;

restify = require('restify');
plugins = require('restify-plugins');
bunyan  = require('bunyan');
routes  = require('./routes/');

log = bunyan.createLogger({
  name        : process.env.APP_NAME || 'restify-seed',
  level       : process.env.LOG_LEVEL || 'info',
  stream      : process.stdout,
  serializers : bunyan.stdSerializers
});

server = restify.createServer({
  name : process.env.APP_NAME || 'restify-seed',
  log  : log
});

server.use(plugins.bodyParser({ mapParams: false }));
server.use(plugins.queryParser());
server.use(plugins.gzipResponse());
server.pre(plugins.pre.sanitizePath());

/*jslint unparam:true*/
// Default error handler. Personalize according to your needs.
server.on('uncaughtException', function (req, res, route, err) {
  console.log('******* Begin Error *******');
  console.log(route);
  console.log('*******');
  console.log(err.stack);
  console.log('******* End Error *******');
  if (!res.headersSent) {
    return res.send(500, { ok : false });
  }
  res.write("\n");
  res.end();
});
/*jslint unparam:false*/

server.on('after', plugins.auditLogger({ log: log }));
routes(server);

console.log('Server started.');

server.listen(8080, function () {
  log.info('%s listening at %s', server.name, server.url);
});

module.exports = server;
