var util = require('util');
var moment = require('moment');
var msRestAzure = require('ms-rest-azure');
var authorization = require('azure-arm-authorization');
var graphRbacManagementClient = require('azure-graph');

exports.createApplicationParameters = function (displayName, secret, yearsOffset) {
    if (typeof secret !== 'string') throw new Error('Secret must be a string.');
    if (typeof yearsOffset !== 'number') throw new Error('Years offset must be a number.');
    var homepage = 'http://' + displayName + ':8080';
    var identifierUriArray = [homepage];
    var startDate = new Date(Date.now());
    var endDate = new Date(startDate.toISOString());
    var m = moment(startDate.toISOString());
    m.add(yearsOffset, 'years');
    endDate = new Date(m.toISOString());
    return {
        availableToOtherTenants: false,
        displayName: displayName,
        homepage: homepage,
        identifierUris: identifierUriArray,
        passwordCredentials: [{
            startDate: startDate,
            endDate: endDate,
            keyId: msRestAzure.generateUuid(),
            value: secret
        }]
    };
}

exports.getApplication = function (credentials, tenant, objectId) {
    var client = new graphRbacManagementClient(credentials, tenant);
    return new Promise(function (resolve, reject) {
        client.applications.get(objectId, function (err, result) {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

exports.findApplication = function (credentials, tenant, applicationName) {
    return exports.listApplications(credentials, tenant).then(applications => {
        let application = applications.find((app) => app.displayName === applicationName);
        if (application == null) {
            throw new Error("Application not found");
        } else {
            return application;
        }
    });
}

exports.listApplications = function (credentials, tenant) {
    var client = new graphRbacManagementClient(credentials, tenant);
    return new Promise(function (resolve, reject) {
        client.applications.list(function (err, result) {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

exports.createApplication = function (credentials, tenant, parameters) {
    var client = new graphRbacManagementClient(credentials, tenant);
    return new Promise(function (resolve, reject) {
        client.applications.create(parameters, function (err, app, req, res) {
            if (err) return reject(err);
            resolve(app);
        });
    });
}

exports.updateApplication = function (credentials, tenant, parameters, objectId) {
    var client = new graphRbacManagementClient(credentials, tenant);
    return new Promise(function (resolve, reject) {
        client.applications.patch(objectId, parameters, function (err, app, req, res) {
            if (err) return reject(err);
            resolve(app);
        });
    });

}

exports.deleteApplication = function (credentials, tenant, objectId) {
    var client = new graphRbacManagementClient(credentials, tenant);
    return new Promise(function (resolve, reject) {
        client.applications.deleteMethod(objectId, function (err, nullResult, req, res) {
            if (err) return reject(err);
            resolve(nullResult);
        });
    });
}


