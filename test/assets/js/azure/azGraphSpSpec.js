var should = require('should');
var Promise = require("bluebird")
var msRestAzure = require('ms-rest-azure');
var SpecBase = require('./azureSpecBase');
var azAuth = require(__dirname.replace('test\\', '') + '/azAuth');
var azGraph = require(__dirname.replace('test\\', '') + '/azGraphSp');
var azGraphApp = require(__dirname.replace('test\\', '') + '/azGraphApp');

var specPrefix = 'azGraphSpec';
var base
var testAppParams

describe(specPrefix + '-servicePrincipal', function () {
    var testAppName = 'spIntegrationTestApp'
    var testSpName = 'spIntegrationTest';

    before(function () {

        return Promise.try(() => {
            base = new SpecBase(this, specPrefix);
            return '';
        })

                return '';
            }).then(() =>
                azAuth.getCredsGraph(base.username, base.password, base.tenant))
            .then(credentials => {
                .then(() => {
                testAppParams = azGraph.createApplicationParameters('spIntegrationTestApp', 'testsecret', 4);
            }
                azGraphApp.createApplication(credentials, base.tenant, testAppParams))
    })


    after(function () {
        return Promise.try(() =>
            azAuth.getCredsGraph(base.username, base.password, base.tenant))
            .then((credentials) =>
                azGraphApp.findApplications(credentials, base.tenant, testAppName)
                    .then(application => ({ credentials: credentials, application: application })))
            .then(x =>
                azGraphApp.deleteApplication(x.credentials, base.tenant, x.application.objectId))
    });


    it('ServicePrincipals should be listable', function () {

        return Promise.try(() =>
            azAuth.getCredsGraph(base.username, base.password, base.tenant))
            .delay(2000)
            .then(credentials =>
                azGraph.listServicePrincipals(credentials, base.tenant))
            .then(sps => {
                should.exist(sps);
                sps.should.be.an.instanceOf(Array);
                sps.should.not.be.empty;
            });
    });

    it('ServicePrincipal should be creatable', function () {

        return Promise.try(() =>
            azAuth.getCredsGraph(base.username, base.password, base.tenant))
            .then((credentials) =>
                azGraphApp.findApplications(credentials, base.tenant, testAppName)
                    .then(application => ({ credentials: credentials, application: application })))
            .then(x => {
                var testSpParams = azGraph.createSpParameters(x.application.objectId)
                return azGraph.createServicePrincipal(x.credentials, base.tenant, testSpParams)
            })
            .then(sps => {
                should.exist(sps);
                sps.should.have.properties(['appId', 'displayName', 'objectId', 'objectType', 'servicePrincipalNames']);
            })
    });


    it('ServicePrincipal should be findable', function () {

        return Promise.try(() =>
            azAuth.getCredsGraph(base.username, base.password, base.tenant))
            .delay(2000)
            .then(credentials =>
                azGraph.findServicePrincipal(credentials, base.tenant, testSpName))
            .then(sps => {
                should.exist(sps);
                sps.should.have.properties(['appId', 'displayName', 'objectId', 'objectType', 'servicePrincipalNames']);
                sps.should.have.property('displayName', testAppName)
            });
    });

    it('ServicePrincipal should be getable', function () {

        return Promise.try(() =>
            azAuth.getCredsGraph(base.username, base.password, base.tenant))
            .then(credentials =>
                azGraph.findServicePrincipal(credentials, base.tenant, testSpName)
                    .then(servicePrincipal => ({ credentials: credentials, servicePrincipal: servicePrincipal })))
            .then(x =>
                azGraph.getServicePrincipal(x.credentials, base.tenant, x.servicePrincipal.objectId))
            .then(sps => {
                should.exist(sps);
                sps.should.have.properties(['appId', 'displayName', 'objectId', 'objectType', 'servicePrincipalNames']);
                sps.should.have.property('displayName', testSpName)
            });
    });

    //API Unclear as to how to update, also not sure if needed. 
    it.skip('ServicePrincipal should be updateable', function () {
        var updatedKeyCredParams = azGraph.createKeyCredParameters(updatedTestSpName)
        return Promise.try(() =>
            azAuth.getCredsGraph(base.username, base.password, base.tenant))
            .then((credentials) =>
                azGraph.findServicePrincipal(credentials, base.tenant, testSpName)
                    .then(servicePrincipal => ({ credentials: credentials, servicePrincipal: servicePrincipal })))
            .then(x =>
                azGraph.updateServicePrincipal(x.credentials, base.tenant, updatedKeyCredParams, x.servicePrincipal.objectId))
            .then(nullResult => {
                should.not.exist(nullResult);
            })
            .delay(10000)
            .then(azAuth.getCredsGraph(base.username, base.password, base.tenant)
                .then((credentials) =>
                    azGraph.findServicePrincipal(credentials, base.tenant, testSpName))
                .then(servicePrincipal => {
                    should.exist(servicePrincipal);
                    servicePrincipal.should.have.property('displayName', updatedTestSpName)
                }))
    });

    it('ServicePrincipal should be deletable', function () {

        return Promise.try(() =>
            azAuth.getCredsGraph(base.username, base.password, base.tenant))
            .then(credentials =>
                azGraph.findServicePrincipal(credentials, base.tenant, testSpName)
                    .then(servicePrincipal => ({ credentials: credentials, servicePrincipal: servicePrincipal })))
            .then(x =>
                azGraph.deleteServicePrincipal(x.credentials, base.tenant, x.servicePrincipal.objectId))
            .then(nullResult => {
                should.not.exist(nullResult);
            })
            .delay(2000)
            .then(azAuth.getCredsGraph(base.username, base.password, base.tenant)
                .then((credentials) =>
                    azGraph.findServicePrincipal(credentials, base.tenant, testAppName)
                        .should.be.rejectedWith("Application not found")
                ))
    });
});