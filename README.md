# Restify Seed

![Last release](https://img.shields.io/github/release/caiomedeirospinto/restify-seed.svg?style=flat)
![Last release date](https://img.shields.io/github/release-date/caiomedeirospinto/restify-seed.svg?style=flat)
![Last commit](https://img.shields.io/github/last-commit/caiomedeirospinto/restify-seed.svg?style=flat)
![Build Status](https://travis-ci.org/caiomedeirospinto/restify-seed.svg?branch=master)
![Issues](https://img.shields.io/github/issues/caiomedeirospinto/restify-seed.svg?style=flat)
![Libraries.io](https://img.shields.io/librariesio/github/caiomedeirospinto/restify-seed.svg?style=flat)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/caiomedeirospinto/restify-seed.svg?style=flat)
![Code type percent](https://img.shields.io/github/languages/top/caiomedeirospinto/restify-seed.svg?style=flat)
![License](https://img.shields.io/github/license/caiomedeirospinto/restify-seed.svg?style=flat)

**Made by**: Caio Medeiros Pinto - Red Hat Chile Ltda.

**Runtime**: Node.js

## Main goal

Be a simple and complete base project to start a API Rest development with all of the Node.Js power and best practices for Javascript programming language, that consider libraries to manage trace, debug and continuos deployment, futhermore of the deployment strategies based on software containers.

## Dependencies

The following list contains the core, testing and other kind of libraries used in this project:

Name|Description
------|------
[Restify](http://restify.com/)| API Rest framework.
[Config](https://www.npmjs.com/package/config)| Configuration management library.
[Bluebird](http://bluebirdjs.com/docs/getting-started.html)| Promise library.
[Bunyan](https://www.npmjs.com/package/bunyan)| Logger library.
[Restify Errors](https://www.npmjs.com/package/restify-errors)| Errors management library for Restify framework.
[Mocha](https://mochajs.org/)|Testing framework
[Chai](https://www.chaijs.com/)|Testing framework
[Chai Http](https://www.chaijs.com/plugins/chai-http/)|Testing framework
[Jslint](https://www.jslint.com/)|Linter framework
[Mocha junit reporter](https://www.npmjs.com/package/mocha-junit-reporter)|Tool to export the testing output as a JUnit report
[Supervisor](https://www.npmjs.com/package/supervisor)|Tool to watch the code changes in runtime
[Open API Definition (Swagger)](https://www.npmjs.com/package/restify-swagger-jsdoc)|Restify Swagger documentation helper
[JsDoc](https://www.npmjs.com/package/jsdoc)|Javascript auto-generated docs tool
[Jeager Client](https://www.npmjs.com/package/jaeger-client)|Jaeger client for Javascript
[Prometheus Client](https://www.npmjs.com/package/prom-client)|Prometheus client for Javascript
[Bunyan Sentry Stream](https://www.npmjs.com/package/bunyan-sentry-stream)|Sentry integration library
[Mongoose](https://www.npmjs.com/package/mongoose)|MongoDB integration library
[Sequelize](https://www.npmjs.com/package/sequelize)|SQL Database ORM library

## ORM Examples

* **MongoDB**: this integration was maid using [Mongoose](https://www.npmjs.com/package/mongoose) library.
* **MySql**: this integration was maid with [Sequelize](https://www.npmjs.com/package/sequelize) that is .

## How to use

First, prepare your development environment installing the following components:

To run it locally:

* [NodeJs](https://nodejs.org/es/)
* [Npm](https://www.npmjs.com/).

Or if you want to run it in containerized mode:

* [Docker](https://www.docker.com/).
* [Source to Image](https://github.com/openshift/source-to-image).

To execute in debug mode use the bellow command:

```bash
# Directly on the host, this command execute another one that was configured in package.json as the debug action.
$ npm run debug

> restify-seed@1.0.0 debug /home/caio/Documentos/Consulting/restify-generator
> supervisor -w 'index.js,routes/' --inspect --debug index.js


Running node-supervisor with
  program '--inspect --debug index.js'
  --watch 'index.js,routes/'
  --extensions 'node,js'
  --exec 'node'

Starting child process with 'node --inspect --debug index.js'
Watching directory '/home/caio/Documentos/Consulting/restify-generator/index.js' for changes.
Press rs for restarting the process.
Watching directory '/home/caio/Documentos/Consulting/restify-generator/routes' for changes.
Press rs for restarting the process.
Debugger listening on ws://127.0.0.1:9229/afff16c9-ba6c-4704-a459-1d375fdb31fe
For help see https://nodejs.org/en/docs/inspector
{"name":"restify-seed","hostname":"cm-workstation","pid":11802,"level":30,"msg":"Server started.","time":"2019-02-08T20:33:35.625Z","v":0}
{"name":"restify-seed","hostname":"cm-workstation","pid":11802,"level":30,"msg":"restify-seed listening at http://[::]:8080","time":"2019-02-08T20:33:35.629Z","v":0}
```

And this one to execute in containerized mode:

```bash
# Containerized with Docker, this process used s2i and docker to execut the code.
$ npm run containerized

> restify-seed@1.0.0 containerized /home/caio/Documentos/Consulting/restify-generator
> s2i build -q . registry.access.redhat.com/rhoar-nodejs/nodejs-8 local-develop && docker run --rm -p 8080:8080 local-develop

npm info it worked if it ends with ok
npm info using npm@6.4.1
npm info using node@v8.15.0
npm timing stage:loadCurrentTree Completed in 190ms
npm timing stage:loadIdealTree:cloneCurrentTree Completed in 2ms
npm timing stage:loadIdealTree:loadShrinkwrap Completed in 113ms
npm timing stage:loadIdealTree:loadAllDepsIntoIdealTree Completed in 68ms
npm timing stage:loadIdealTree Completed in 235ms
npm timing stage:generateActionsToTake Completed in 31ms
npm timing audit compress Completed in 4ms
npm info audit Submitting payload of 5752bytes
npm timing stage:executeActions Completed in 148ms
npm timing stage:rollbackFailedOptional Completed in 1ms
npm timing stage:runTopLevelLifecycles Completed in 635ms
npm timing audit submit Completed in 616ms
npm http fetch POST 200 https://registry.npmjs.org/-/npm/v1/security/audits/quick 521ms
npm timing audit body Completed in 4ms
npm timing npm Completed in 1382ms
npm info ok
Build completed successfully
git version 1.8.3.1
Environment:
  DEV_MODE=false
  NODE_ENV=production
  DEBUG_PORT=5858
Running as user uid=1001(default) gid=0(root) groups=0(root)
Launching via npm...
npm info it worked if it ends with ok
npm info using npm@6.4.1
npm info using node@v8.15.0
npm info lifecycle restify-seed@1.0.0~prestart: restify-seed@1.0.0
npm info lifecycle restify-seed@1.0.0~start: restify-seed@1.0.0

> restify-seed@1.0.0 start /opt/app-root/src
> node index.js

{"name":"restify-seed","hostname":"90d544df92fd","pid":21,"level":30,"msg":"Server started.","time":"2019-02-12T00:55:22.924Z","v":0}
{"name":"restify-seed","hostname":"90d544df92fd","pid":21,"level":30,"msg":"restify-seed listening at http://[::]:8080","time":"2019-02-12T00:55:22.928Z","v":0}
```

The main file is `index.js` that has the base code of the service, there's principals configurations and these are:

### Web server configuration

```javascript
...
server = restify.createServer({
  name : process.env.APP_NAME || 'my-rest-api',
  log  : log
});
...
```

### Logger class configuration

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

List of environment variables available by default:

* **NODE_ENV**: define the environment where the API will be running, and also define the configuration file that will use. For more information check on the Config library [documentation](https://www.npmjs.com/package/config).
* **APP_NAME**: project name.
* **LOG_LEVEL**: API verbosity that can be set with any of these values: info (Default value), debug, error, warn.
* **AUDIT_LOG_ENABLED**: enable the audit logs.

## How to test

To execute the testing tasks:

```bash
$ npm test

> restify-seed@1.0.0 test /home/caio/Documentos/Consulting/restify-generator
> jslint --indent 2 --color 'package.json' 'index.js' 'routes/**/*.js' 'common/**/*.js' 'tests/**/*.js' && LOG_LEVEL=error node_modules/.bin/mocha -c -u qunit --timeout 5000 tests


package.json is OK.

index.js is OK.

routes/health.js is OK.

routes/index.js is OK.

common/health.js is OK.

tests/integration.test.js is OK.

tests/unit.test.js is OK.


  Integration Test
    Health API
      #Get: /health - Version: 1.0.0
        ✓ should respond status 200 (50ms)
        ✓ should respond a message OK

  Unit Test
    Health
      #Health - Version: 1.0.0
        ✓ should return a json with message OK


  3 passing (85ms)
```

Check on the files `tests/unit.test.js` and `tests/integration.test.js` to test new functionalities based on the format defined in those files.

## Deploy on Openshift

Possible ways to deploy this base project on Openshift:

### With Openshift templates

Using the template `openshift/templates/nodejs.json` is possible deploy a basic production version that uses the default configuration, to use this method just use the bellow command:

```bash
# To check possible parameters
$ oc process -f openshift/templates/nodejs.json --parameters
NAME                     DESCRIPTION                                                                                               GENERATOR           VALUE
NAME                     The name assigned to all of the frontend objects defined in this template.                                                    restify-seed
NAMESPACE                The OpenShift Namespace where the ImageStream resides.                                                                        openshift
NODEJS_VERSION           Version of NodeJS image to be used (6, 8, or latest).                                                                         8
MEMORY_LIMIT             Maximum amount of memory the container can use.                                                                               512Mi
MEMORY_REQUEST           Minimal amount of memory that the container needs.                                                                            100Mi
CPU_LIMIT                Maximum amount of cpu the container can use.                                                                                  200m
CPU_REQUEST              Minimal amount of cpu that the container needs.                                                                               50m
SOURCE_REPOSITORY_URL    The URL of the repository with your application source code.                                                                  https://github.com/caiomedeirospinto/restify-seed
SOURCE_REPOSITORY_REF    Set this to a branch name, tag or other ref of your repository if you are not using the default branch.
CONTEXT_DIR              Set this to the relative path to your project if it is not in the root of your repository.
APPLICATION_DOMAIN       The exposed hostname that will route to the Node.js service, if left blank a value will be defaulted.
GITHUB_WEBHOOK_SECRET    Github trigger secret.  A difficult to guess string encoded as part of the webhook URL.  Not encrypted.   expression          [a-zA-Z0-9]{40}
GENERIC_WEBHOOK_SECRET   A secret string used to configure the Generic webhook.                                                    expression          [a-zA-Z0-9]{40}
NPM_MIRROR               The custom NPM mirror URL
LOG_LEVEL                Level of log that the app will use                                                                                            info
# To change parameters use -p or --param with KEY=Value joined by coma (,)
$ oc new-app -f openshift/templates/nodejs.json
--> Deploying template "myproject/restify-seed" for "openshift/templates/nodejs.json" to project myproject

     * With parameters:
        * Name=restify-seed
        * Namespace=openshift
        * Version of NodeJS Image=8
        * Memory Limit=512Mi
        * Memory Requested=100Mi
        * CPU Limit=200m
        * CPU Requested=50m
        * Git Repository URL=https://github.com/caiomedeirospinto/restify-seed
        * Git Reference=
        * Context Directory=
        * Application Hostname=
        * GitHub Webhook Secret=MJGF58IWRK24nqrH2VEwy4OuibHuvaky3DeLq8DO # generated
        * Generic Webhook Secret=paQplcPt6OwLU2YYQXpfbGLWNHwvS7IUauPYfWrP # generated
        * Custom NPM Mirror URL=
        * Level of log that the app will use=info

--> Creating resources ...
    service "restify-seed" created
    route.route.openshift.io "restify-seed" created
    imagestream.image.openshift.io "restify-seed" created
    buildconfig.build.openshift.io "restify-seed" created
    deploymentconfig.apps.openshift.io "restify-seed" created
--> Success
    Access your application via route 'restify-seed-myproject.192.168.42.234.nip.io'
    Use 'oc start-build restify-seed' to start a build.
    Run 'oc status' to view your app.
```

### With Jenkins pipeline

A simple CI flow for Node.Js is defined on the **Jenkinsfile** that is in  `openshift/pipelines/` path, with this file is possible deploy this code usisng the following command:

```bash
$ oc new-app https://github.com/caiomedeirospinto/restify-seed --strategy=pipeline --context-dir=openshift/pipelines/
# TODO: output here
```

### With Helm

Helm is a easy way to deploy this code using only a variables file, for that use the following command:

```bash
# Change the values in helm/values.yaml file to configure the deployment
$ helm install stable/nodejs --name restify-seed -f helm/values.yaml
```