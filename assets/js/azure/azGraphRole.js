var util = require('util');
var moment = require('moment');
var msRestAzure = require('ms-rest-azure');
var authorization = require('azure-arm-authorization');
var graphRbacManagementClient = require('azure-graph');

exports.createRoleParameters = function (credentials, subscriptionId, roleId, servicePrincipal) {
    var roleDefinitionId = '/providers/Microsoft.Authorization/roleDefinitions/' + roleId;  // we shall be assigning the sp, a 'reader' role at the tenant level
    var authorization = new authorization(credentials, subscriptionId, null);
    var assignmentGuid = msrestazure.generateUuid();
    var roleDefinitionId = scope + '/providers/Microsoft.Authorization/roleDefinitions/' + roleId;
    var roleCreateParams = {
        properties: {
            principalId: servicePrincipal.objectId,
            //have taken this from the comments made above
            roleDefinitionId: roleDefinitionId,
            scope: scope
        }
    };
};



exports.createRole = function (credentials, subscriptionId, servicePrincipal, scope = "") {
    return new Promise(function (resolve, reject) {


        authorization.roleAssignments.create(scope, assignmentGuid, roleCreateParams, function (err, roleAssignment, req, res) {
            if (err) return reject(err);
            resolve(sp, res);
        });

    });

}


exports.updateRole = function (credentials, tenant, displayName) {
    return new Promise(function (resolve, reject) {

    });

}

exports.deleteRole = function (credentials, tenant) {
    return new Promise(function (resolve, reject) {

    });

}