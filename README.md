# Restify Seed
Base project to start a API Rest developmemt
---

https://img.shields.io/github/license/caiomedeirospinto/restify-seed.svg?style=flat

**Desarrollado por**: Caio Medeiros Pinto - Red Hat Chile Ltda.

**Runtime**: Node.js

## Main goal

Be a simple and complete base project to start a API Rest development, with all of the Node.Js runtime power and best practices for Javascript programming language, that consider libraries to manage trace, debug and continuos deployment, futhermore of the deployment strategies based on software containers.

## Base dependencies

Libraries used like a base for the API Rest service:

* [Restify](http://restify.com/).
* [Config](https://www.npmjs.com/package/config).
* [Bluebird](http://bluebirdjs.com/docs/getting-started.html).
* [Bunyan](https://www.npmjs.com/package/bunyan).
* [Restify Errors](https://www.npmjs.com/package/restify-errors).

And libraries used to test and develop:

* [Mocha](https://mochajs.org/).
* [Chai](https://www.chaijs.com/).
* [Chai Http](https://www.chaijs.com/plugins/chai-http/).
* [Jslint](https://www.jslint.com/).
* [Mocha junit reporter](https://www.npmjs.com/package/mocha-junit-reporter).
* [Supervisor](https://www.npmjs.com/package/supervisor).

For auto-generated documentation:

* [Open API Definition (Swagger)](https://www.npmjs.com/package/restify-swagger-jsdoc).
* [JsDoc](https://www.npmjs.com/package/jsdoc).

For metrics, trace and error detection:

* [Jeager Client](https://www.npmjs.com/package/jaeger-client).
* [Prometheus Client](https://www.npmjs.com/package/prom-client).
* [Bunyan Sentry Stream](https://www.npmjs.com/package/bunyan-sentry-stream).

For database integration:

* [Mongoose](https://www.npmjs.com/package/mongoose).
* [Sequelize](https://www.npmjs.com/package/sequelize).

## ORM Example

* **MongoDB**: this integration was maid using [Mongoose](https://www.npmjs.com/package/mongoose) library.
* **MySql**: this integration was maid with [Sequelize](https://www.npmjs.com/package/sequelize) that is .

## How to use?

First, prepare your development environment installing the following components:

* [NodeJs](https://nodejs.org/es/)
* [Npm](https://www.npmjs.com/).
* [Docker](https://www.docker.com/).
* [Source to Image](https://github.com/openshift/source-to-image).

To execute in debug mode use the bellow command:

```bash
# Directly on the host, this command execute another one that was configured in package.json as the debug action.
$ npm run debug
# Containerized with Docker, this process used s2i and docker to execut the code.
$ npm run containerized
```

The main file is `index.js` that has the base code of the service, there's principals configurations and these are:

**Web server configuration**

```javascript
...
server = restify.createServer({
  name : process.env.APP_NAME || 'my-rest-api',
  log  : log
});
...
```

**Logger class configuration**

```javascript
...
log = bunyan.createLogger({
  name        : process.env.APP_NAME || 'my-rest-api',
  level       : process.env.LOG_LEVEL || 'info',
  stream      : process.stdout,
  serializers : bunyan.stdSerializers
});
...
```

Futhermore, to add new api routes to the base project is than easier to create a javascript file on `routes/` path using the following format:

```javascript
/*jslint node: true, indent: 2 */
'use strict';
var restify = require('restify');

// Any common componente needed. Example:
var health  = require('../common/services/health');

// Exports a function that declare HTTP functions
module.exports = function (server) {
  
  // Methods that consider request and response as input to invoice a business or logical function
  /*jslint unparam: true*/
  var healthV1 = function (req, res, next) {
    server.log.debug("Health function execution.");
    res.send(health.v1);
    return next();
  };
  /*jslint unparam: false*/

  // Declare HTTP paths by method and version
  server.get('/health', restify.plugins.conditionalHandler([
    { version: '1.0.0', handler: healthV1 }
  ]));
};
```

This way the `routes/index.js` file will identify that new route in runtime and will configure the APIs defined in it. All the business logical and complex process must be organized on `commons/` path.

List of environment variables available:

* **NODE_ENV**: define the environment where the API will be running, and also define the configuration file that will use. For more information check on the Config library [documentation](https://www.npmjs.com/package/config).
* **APP_NAME**: project name.
* **LOG_LEVEL**: API verbosity that can be set with any of these values: info (Default value), debug, error, warn.
* **AUDIT_LOG_ENABLED**: enable the audit logs.

## How to test?

To execute the testing tasks 

```bash
$ npm run test
```

Para crear pruebas automáticas revisar el formato utilizado para ellas en los archivos `tests/unit.test.js` y `tests/integration.test.js`.

## Deploy on Openshift

Possible ways to deploy this base project on Openshift:

* With Openshift templates.
* With Jenkins pipeline.
* With Helm.