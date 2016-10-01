// const should = require('should');
// const Promise = require("bluebird");
// const graphRbacManagementClient = require('azure-graph');
// const msRestAzure = Promise.promisifyAll(require("ms-rest-azure"));
// const graphClient = Promise.promisifyAll(graphRbacManagementClient.prototype);

// const Application = require(__dirname.replace('test\\', '') + '/application.js');
// const ServicePrincipal = require(__dirname.replace('test\\', '') + '/serviceprincipal.js');
// const GraphLoginOptions = require(__dirname.replace('test\\', '') + "/graph-login-options.js");

// const specBase = require('./spec-base.js').specBase;
// const specName = 'Graph-ServicePrincipal';

// describe(specName, function () {
//     var base
//     var testAppName = 'graphSp-IntegTestApp'
//     var graphApplicationClient
//     var graphServicePrincipalClient

    // before(function () {
    //     base = new specBase(this, specName);
    //     return Promise.try(() => {
    //         return msRestAzure.loginWithUsernamePasswordAsync(base.username, base.password, GraphLoginOptions.get(base.tenant));
    //     }).then((credentials) => {
    //         var client = new graphRbacManagementClient(credentials, base.tenant);
    //         return Promise.try(() => {
    //             graphApplicationClient = Promise.promisifyAll(client.applications);
    //         }).then(() => {
    //             let testAppParams = Application.createParameters(testAppName, 'testsecret', 4)
    //             graphApplicationClient.createAsync(testAppParams)
    //         }).then(() => {
    //             graphServicePrincipalClient = Promise.promisifyAll(client.servicePrincipals);
    //         });
    //     });
    // });

    // after(function () {
    //     return Promise.try(() => {
    //         return graphApplicationClient.listAsync();
    //     }).then((applications) => {
    //         return applications.find((application) => application.displayName === testAppName);
    //     }).then((application) => {
    //         return graphApplicationClient.deleteMethodAsync(application.objectId);
    //     });
    // });


//     it.skip('ServicePrincipals should be listable', function () {

//         return Promise.try(() => {
//             return graphServicePrincipalClient.listAsync();
//         }).then((apps) => {
//             should.exist(apps);
//             apps.should.be.an.instanceOf(Array);
//             apps.should.not.be.empty;
//         });
//     });


//     it.skip('ServicePrincipal should be creatable', function () {

//         return Promise.try(() => {
//             return graphApplicationClient.listAsync();
//         }).then((applications) => {
//             return applications.find((application) => application.displayName === testAppName);
//         }).then((application) => {
//             return ServicePrincipal.createParameters(application.appId)
//         }).then((testSpParams) => {
//             return graphServicePrincipalClient.createAsync(testSpParams);
//         }).then((sp) => {
//             should.exist(sp);
//             sp.should.have.property("displayName", testAppName);
//         })
//     });

//     it.skip('ServicePrincipal should be findable', function () {
//         return Promise.try(() => {
//             return graphServicePrincipalClient.listAsync();
//         }).then((sps) => {
//             return sps.find((sp) => sp.displayName === testAppName);
//         }).then((sp) => {
//             should.exist(sp);
//             sp.should.have.property("displayName", testAppName);
//         });
//     });

//     it.skip('ServicePrincipal should be getable', function () {
//         return Promise.try(() => {
//             return graphServicePrincipalClient.listAsync();
//         }).then((sps) => {
//             return sps.find((sp) => sp.displayName === testAppName);
//         }).then((sp) => {
//             return graphServicePrincipalClient.getAsync(sp.objectId);
//         }).then((sp) => {
//             should.exist(sp);
//             sp.should.have.property("displayName", testAppName);
//         });
//     });

//     it.skip('ServicePrincipal should be updateable', function () {
//         let updatedTestAppParams = Application.createParameters(updatedTestAppName, "testsecret", 4);

//         return Promise.try(() => {
//             return graphServicePrincipalClient.listAsync();
//         }).then((sps) => {
//             return sps.find((sp) => sp.displayName === testAppName);
//         }).then((sp) => {
//             return graphServicePrincipalClient.patchAsync(sp.objectId, updatedTestAppParams);
//         }).then((nullResult) => {
//             should.not.exist(nullResult);
//         }).then(() => {
//             return graphServicePrincipalClient.listAsync();
//         }).then((sps) => {
//             return sps.find((app) => app.displayName === updatedTestAppName);
//         }).then((sp) => {
//             should.exist(sp);
//         })
//     });

//     it.skip('ServicePrincipal should be deleteable', function () {

//         return Promise.try(() => {
//             return graphServicePrincipalClient.listAsync();
//         }).then((sps) => {
//             return sps.find((sp) => sp.displayName === testAppName);
//         }).then((sp) => {
//             return graphServicePrincipalClient.deleteMethodAsync(sp.objectId);
//         }).then((nullResult) => {
//             should.not.exist(nullResult);
//         }).then(() => {
//             return graphServicePrincipalClient.listAsync();
//         }).then((sps) => {
//             return sps.find((sp) => sp.displayName === testAppName);
//         }).then((nullResult) => {
//             should.not.exist(nullResult);
//         })
//     });
// });
