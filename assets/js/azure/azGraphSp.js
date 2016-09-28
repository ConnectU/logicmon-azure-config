var util = require('util');
var moment = require('moment');
var msRestAzure = require('ms-rest-azure');
var authorization = require('azure-arm-authorization');
var graphRbacManagementClient = require('azure-graph');

exports.createSpParameters = function (applicationId) {
    return {
        appId: applicationId,
        accountEnabled: true
    }
};

exports.createKeyCredParameters = function (key) {
    return {
        appId: key,
        accountEnabled: true
    }
};

exports.listServicePrincipals = function (credentials, tenant) {
    var graphClient = new graphRbacManagementClient(credentials, tenant);
    return new Promise(function (resolve, reject) {
        graphClient.servicePrincipals.list(function (err, sp, req, res) {
            if (err) return reject(err);
            resolve(sp, res);
        });
    });
}

exports.findServicePrincipal = function (credentials, tenant, spName) {
    return exports.listServicePrincipals(credentials, tenant).then(sps => {
        let servicePrincicpal = sps.find((sp) => sp.displayName === spName);
        if (servicePrincicpal == null) {
            throw new Error("Application not found");
        } else {
            return servicePrincicpal;
        }
    });
}

exports.getServicePrincipal = function (credentials, tenant, objectId) {
    var client = new graphRbacManagementClient(credentials, tenant);
    return new Promise(function (resolve, reject) {
        client.servicePrincipals.get(objectId, function (err, result) {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

exports.createServicePrincipal = function (credentials, tenant, parameters) {
    var graphClient = new graphRbacManagementClient(credentials, tenant);
    return new Promise(function (resolve, reject) {
        graphClient.servicePrincipals.create(parameters, function (err, sp, req, res) {
            if (err) return reject(err);
            resolve(sp, res);
        });
    });
}

exports.updateServicePrincipalKeyCreds = function (credentials, tenant, parameters) {
    return new Promise(function (resolve, reject) {
        graphClient.servicePrincipal.update(parameters, function (err, sp, req, res) {
            if (err) return reject(err);
            resolve(sp, res);
        });
    });

}

exports.deleteServicePrincipal = function (credentials, tenant) {
    var client = new graphRbacManagementClient(credentials, tenant);
    return new Promise(function (resolve, reject) {
        client.servicePrincipals.deleteMethod(objectId, function (err, result) {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

