const util = require('util');
const Promise = require("bluebird");
const Application = require('../lib/azure/application.js');
const graphRbacManagementClient = require('azure-graph');

var login = require('./azure-login.js');
var client
var appClient
var spClient

function initializeClient() {
    var credentials = login.getAzureCredentials();
    console.log(credentials)
    client = new graphRbacManagementClient(credentials, credentials.domain);
}

function initializeAppClient() {
    if (appClient == null) {
        initializeClient()
        appClient = Promise.promisifyAll(client.applications);
    }
    console.log(appClient)
    return appClient
}

function initializeSpClient() {
    if (spClient == null) {
        initializeClient()
        spClient = Promise.promisifyAll(client.servicePrincipals);
    }
    console.log(spClient)
    return spClient
}

exports.listApplications = function () {
    return Promise.try(() => {
        return initializeAppClient();
    }).then((graphApplicationClient) => {
        return graphApplicationClient.listAsync();
    }).then((applications) => {
        log(util.inspect(applications, { depth: null }));
        return applications;
    });
}
exports.createApplication = function () {
    return Promise.try(() => {
        return initializeAppClient();
    }).then((graphApplicationClient) => {
        return graphApplicationClient.createAsync();
    }).then((applications) => {
        log(util.inspect(applications, { depth: null }));
        return applications;
    });
}
exports.listServicePrincipals = function () {
    return Promise.try(() => {
        return initializeSpClient();
    }).then((graphServicePrincipalClient) => {
        return graphServicePrincipalClient.listAsync();
    }).then((servicePrincipals) => {
        log(util.inspect(servicePrincipals, { depth: null }));
        return servicePrincipals;
    });
}
exports.createServicePrincipal = function () {
    return Promise.try(() => {
        return initializeSpClient();
    }).then((graphServicePrincipalClient) => {
        return graphServicePrincipalClient.createAsync();
    }).then((servicePrincipal) => {
        log(util.inspect(servicePrincipal, { depth: null }));
        return servicePrincipal;
    });
}

