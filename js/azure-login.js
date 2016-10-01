const Promise = require("bluebird");
const msRestAzureAsync = Promise.promisifyAll(require("ms-rest-azure"));
const msRestAzure = require("ms-rest-azure");
const GraphLoginOptions = require('../lib/azure/graph-login-options.js');

var azureCredentials

exports.getAzureCredentials = function () {
    return azureCredentials
}

exports.authenticateAad = function (tenant, username, password) {
    return Promise.try(() => {
        return msRestAzureAsync.loginWithUsernamePasswordAsync(username, password, GraphLoginOptions.get(tenant));
    }).then((credentials) => {
        azureCredentials = credentials
    }).then(() => {
        if (azureCredentials == null) {
            throw "Authentication not set, cause unknown.";
        }
    }).then(() => {
        log("Authentication Successful.");
        console.log("Authentication Successful.");
    }).catch(function (e) {
        log("Authentication Failed.");
        console.log("Authentication Failed.");
    });
}

exports.authenticateLive = function (tenant, username, password) {
    return msRestAzure.interactiveLoginAsync();
}  
