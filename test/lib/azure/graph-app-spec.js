// const should = require('should');
// const Promise = require("bluebird");
// const graphRbacManagementClient = require('azure-graph');
// const msRestAzure = Promise.promisifyAll(require("ms-rest-azure"));
// const graphClient = Promise.promisifyAll(graphRbacManagementClient.prototype);

// const Application = require(__dirname.replace('test\\', '') + '/application.js');
// const GraphLoginOptions = require(__dirname.replace('test\\', '') + "/graph-login-options.js");

// const specBase = require('./spec-base.js').specBase;
// const specName = 'Graph-Application';

// describe(specName, function () {
//     var base
//     var testAppName = 'graphApp-IntegTestApp'
//     var updatedTestAppName = 'updated.' + testAppName
//     var graphApplicationClient

    // before(function () {
    //     base = new specBase(this, specName);
    //     return Promise.try(() => {
    //         return msRestAzure.loginWithUsernamePasswordAsync(base.username, base.password, GraphLoginOptions.get(base.tenant));
    //     }).then((credentials) => {
    //         var client = new graphRbacManagementClient(credentials, base.tenant);
    //         graphApplicationClient = Promise.promisifyAll(client.applications);
    //     });
    // });


    // it('AAD Applications should be listable', function () {

    //     return Promise.try(() => {
    //         return graphApplicationClient.listAsync();
    //     }).then((apps) => {
    //         should.exist(apps);
    //         apps.should.be.an.instanceOf(Array);
    //         apps.should.not.be.empty;
    //     });
    // });

    
    // it('AAD Application should be creatable', function () {

    //     let testAppParams = Application.createParameters(testAppName, 'testsecret', 4)
    //     return Promise.try(() => {
    //         return graphApplicationClient.createAsync(testAppParams);
    //     }).then((application) => {
    //         should.exist(application);
    //         application.should.have.property("displayName", testAppName);
    //     })
    // });

    // it('AAD Application should be findable', function () {
    //     return Promise.try(() => {
    //         return graphApplicationClient.listAsync();
    //     }).then((applications) => {
    //         // Application.find(applications, testAppName);
    //         return applications.find((application) => application.displayName === testAppName);
    //     }).then((application) => {
    //         should.exist(application);
    //         application.should.have.property("displayName", testAppName);
    //     });
    // });

    // it('AAD Application should be getable', function () {
    //     return Promise.try(() => {
    //         return graphApplicationClient.listAsync();
    //     }).then((applications) => {
    //         // return Application.find(applications, testAppName);
    //         return applications.find((application) => application.displayName === testAppName);
    //     }).then((application) => {
    //         return graphApplicationClient.getAsync(application.objectId);
    //     }).then((application) => {
    //         should.exist(application);
    //         application.should.have.property("displayName", testAppName);
    //     });
    // });

    // it('AAD Application should be updateable', function () {
    //     let updatedTestAppParams = Application.createParameters(updatedTestAppName, "testsecret", 4);

    //     return Promise.try(() => {
    //         return graphApplicationClient.listAsync();
    //     }).then((applications) => {
    //         // return Application.find(applications, testAppName);
    //         return applications.find((application) => application.displayName === testAppName);
    //     }).then((application) => {
    //         return graphApplicationClient.patchAsync(application.objectId, updatedTestAppParams);
    //     }).then((nullResult) => {
    //         should.not.exist(nullResult);
    //     }).then(() => {
    //         return graphApplicationClient.listAsync();
    //     }).then((applications) => {
    //         return applications.find((app) => app.displayName === updatedTestAppName);
    //     }).then((application) => {
    //         should.exist(application);
    //     })
    // });

    // it('AAD Application should be deleteable', function () {

    //     return Promise.try(() => {
    //         return graphApplicationClient.listAsync();
    //     }).then((applications) => {
    //         // return Application.find(applications, updatedTestAppName);
    //         return applications.find((application) => application.displayName === updatedTestAppName);
    //     }).then((application) => {
    //         return graphApplicationClient.deleteMethodAsync(application.objectId);
    //     }).then((nullResult) => {
    //         should.not.exist(nullResult);
    //     }).then(() => {
    //         return graphApplicationClient.listAsync();
    //     }).then((applications) => {
    //         // return Application.find(applications, testAppName);
    //         return applications.find((application) => application.displayName === testAppName);
    //     }).then((nullResult) => {
    //         should.not.exist(nullResult);
    //     }).then(() => {
    //         return graphApplicationClient.listAsync();
    //     }).then((applications) => {
    //         // return Application.find(applications, testAppName);
    //         return applications.find((application) => application.displayName === testAppName);
    //     }).then((nullResult) => {
    //         should.not.exist(nullResult);
    //     })
    // });
// });
