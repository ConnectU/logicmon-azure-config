var util = require('util');
const Promise = require("bluebird");
const msRestAzure = Promise.promisifyAll(require("ms-rest-azure"));
const Application = require('../lib/azure/application.js');

var appClient
var spClient

function initializeAppClient() {
    if (appClient != null) {
        appClient = Promise.promisifyAll(azureRestClient.applications);
    }
    return appClient
}

function initializeSpClient() {
    if (spClient != null) {
        spClient = Promise.promisifyAll(azureRestClient.servicePrincipals);
    }
    return spClient
}

exports.listApplications = function () {
    return Promise.try(() => {
        return Promise.promisifyAll(azureRestClient.applications);
    }).then((graphApplicationClient) => {
        return graphApplicationClient.listAsync();
    }).then((applications) => {
        log(util.inspect(applications, { depth: null }));
        return false;
    });
}
exports.createApplication = function () {
    return Promise.try(() => {
        return initializeAppClient();
    }).then((graphApplicationClient) => {
        return graphApplicationClient.createAsync();
    }).then((applications) => {
        log(util.inspect(applications, { depth: null }));
        return false;
    });
}
exports.listServicePrincipals = function () {
    return Promise.try(() => {
        return initializeSpClient();
    }).then((graphServicePrincipalClient) => {
        return graphServicePrincipalClient.listAsync();
    }).then((servicePrincipals) => {
        log(util.inspect(servicePrincipals, { depth: null }));
        return false;
    });
}
exports.createServicePrincipals = function () {
    return Promise.try(() => {
        return initializeSpClient();
    }).then((graphServicePrincipalClient) => {
        return graphServicePrincipalClient.createAsync();
    }).then((servicePrincipal) => {
        log(util.inspect(servicePrincipal, { depth: null }));
        return false;
    });
}

