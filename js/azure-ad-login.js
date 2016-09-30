var util = require('util');
const Promise = require("bluebird");
const graphRbacManagementClient = require("azure-graph");
const msRestAzure = Promise.promisifyAll(require("ms-rest-azure"));
const graphClient = Promise.promisifyAll(graphRbacManagementClient.prototype);

const GraphLoginOptions = require('../login/graph-login-options.js');

exports.authenticate = function (tenant, username, password) {
    return Promise.try(() => {
        return msRestAzure.loginWithUsernamePasswordAsync(username, password, GraphLoginOptions.get(tenant));
    }).then((credentials) => {
        return new graphRbacManagementClient(credentials, tenant);
    });
}    
