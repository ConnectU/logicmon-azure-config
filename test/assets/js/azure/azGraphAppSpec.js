var should = require('should');
var Promise = require("bluebird")
var msRestAzure = require('ms-rest-azure');
var SpecBase = require('./azureSpecBase');
var azAuth = require(__dirname.replace('test\\', '') + '/azAuth');
var azGraph = require(__dirname.replace('test\\', '') + '/azGraphApp');


var specPrefix = 'azGraphSpec';
var base

describe(specPrefix + '-applications', function () {
    var testAppName = 'azureconfig.logicmonitor.com'
    var updatedTestAppName = 'updated.' + testAppName
    
    before(function (done) {
        base = new SpecBase(this, specPrefix);
        done();
    });

    after(function (done) {
        done();
    });


    it.skip('AAD Applications should be listable', function () {

        return Promise.try(() =>
            azAuth.getCredsGraph(base.username, base.password, base.tenant))
            .delay(2000)
            .then(credentials =>
                azGraph.listApplications(credentials, base.tenant))
            .then(apps => {
                should.exist(apps);
                apps.should.be.an.instanceOf(Array);
                apps.should.not.be.empty;
            });
    });


    it.skip('AAD Application should be creatable', function () {
        var testAppParams = azGraph.createApplicationParameters(testAppName, 'testsecret', 4)
        return Promise.try(() =>
            azAuth.getCredsGraph(base.username, base.password, base.tenant))
            .then(credentials =>
                azGraph.createApplication(credentials, base.tenant, testAppParams))
            .then(app => {
                should.exist(app);
                app.should.have.properties(['appId', 'availableToOtherTenants', 'displayName', 'homepage', 'identifierUris', 'objectId', 'objectType', 'replyUrls']);
            })
    });

    it.skip('AAD Application should be findable', function () {

        return Promise.try(() =>
            azAuth.getCredsGraph(base.username, base.password, base.tenant))
            .delay(2000)
            .then(credentials =>
                azGraph.findApplication(credentials, base.tenant, testAppName))
            .then(app => {
                should.exist(app);
                app.should.have.properties(['appId', 'availableToOtherTenants', 'displayName', 'homepage', 'identifierUris', 'objectId', 'objectType', 'replyUrls']);
                app.should.have.property('displayName', testAppName)
            });
    });

    it.skip('AAD Application should be getable', function () {

        return Promise.try(() =>
            azAuth.getCredsGraph(base.username, base.password, base.tenant))
            .then(credentials =>
                azGraph.findApplications(credentials, base.tenant, testAppName)
                    .then(application => ({ credentials: credentials, application: application })))
            .then(x =>
                azGraph.getApplication(x.credentials, base.tenant, x.application.objectId))
            .then(app => {
                should.exist(app);
                app.should.have.property('displayName', testAppName)
            });
    });

    it.skip('AAD Application should be updateable', function () {
        var updatedTestAppParams = azGraph.createApplicationParameters(updatedTestAppName, 'testsecret', 4)
        return Promise.try(() =>
            azAuth.getCredsGraph(base.username, base.password, base.tenant))
            .then((credentials) =>
                azGraph.findApplications(credentials, base.tenant, testAppName)
                    .then(application => ({ credentials: credentials, application: application })))
            .then(x =>
                azGraph.updateApplication(x.credentials, base.tenant, updatedTestAppParams, x.application.objectId))
            .then(nullResult => {
                should.not.exist(nullResult);
            })
            .delay(10000)
            .then(azAuth.getCredsGraph(base.username, base.password, base.tenant)
                .then((credentials) =>
                    azGraph.findApplications(credentials, base.tenant, updatedTestAppName))
                .then(app => {
                    should.exist(app);
                    app.should.have.property('displayName', updatedTestAppName)
                }))
    });

    it.skip('AAD Application should be deletable', function () {

        return Promise.try(() =>
            azAuth.getCredsGraph(base.username, base.password, base.tenant))
            .then((credentials) =>
                azGraph.findApplications(credentials, base.tenant, updatedTestAppName)
                    .then(application => ({ credentials: credentials, application: application })))
            .then(x =>
                azGraph.deleteApplication(x.credentials, base.tenant, x.application.objectId))
            .then(nullResult => {
                should.not.exist(nullResult);
            })
            .delay(2000)
            .then(azAuth.getCredsGraph(base.username, base.password, base.tenant)
                .then((credentials) =>
                    azGraph.findApplications(credentials, base.tenant, testAppName)
                        .should.be.rejectedWith("Application not found")
                ))
            .then(azAuth.getCredsGraph(base.username, base.password, base.tenant)
                .then((credentials) =>
                    azGraph.findApplications(credentials, base.tenant, updatedTestAppName)
                        .should.be.rejectedWith("Application not found")
                ))
    });
  
});