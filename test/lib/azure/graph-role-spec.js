// const should = require('should');
// const Promise = require("bluebird");
// const msRestAzure = Promise.promisifyAll(require("ms-rest-azure"));

// const graphRbacManagementClient = require('azure-graph');

// Promise.promisifyAll(graphRbacManagementClient.prototype);
// Promise.promisifyAll(graphRbacManagementClient.Applications.prototype);

// const Application = require(__dirname.replace('test\\', '') + '/application/application.js');
// const specBase = require('./spec-base.js').specBase;
// const specName = 'Graph-Application';

// describe(specName, function () {
//     var base
//     var testAppName = 'azureconfig.logicmonitor.com'
//     var updatedTestAppName = 'updated.' + testAppName
//     var client
    
//     before(function () {
//       base = new specBase(this, specName);
//       return Promise.try(() => {
//             return msRestAzure.loginWithUsernamePasswordAsync(base.username, base.password, Application.createParameters(base.tenant));
//         }).then((credentials) => {
//             client = new graphRbacManagementClient(credentials, base.tenant);
//       });
//     });

//     after(function (done) {
//         done();
//     });


//     it('AAD Applications should be listable', function () {

//       	return Promise.try(() => {
//               return client.applications.listAsync();
//           }).then((apps) => {
//               should.exist(apps);
//               apps.should.be.an.instanceOf(Array);
//               apps.should.not.be.empty;
//           });
//     });


//     it('AAD Application should be updateable', function () {
//         let updatedTestAppParams = Application.createParameters(updatedTestAppName, "testsecret", 4);
 
//         return Promise.try(() => {
//             return client.applications.listAsync();
//         }).then((applications) => {
//             return findApplication(applications, testAppName);
//         }).then((application) => {
//             return client.applications.update(updatedTestAppParams, application.objectId);
//         }).then((nullResult) => {
//             should.not.exist(nullResult);
//         }).delay(10000).then(() => {
//             return client.applications.listAsync();
//         }).then((applications) => {
//             return findApplication(applications, testAppName);
//         }).then((application) => {
//             should.exist(app);
//             app.should.have.property("displayName", updatedTestAppName);
//         })
//     });
// });