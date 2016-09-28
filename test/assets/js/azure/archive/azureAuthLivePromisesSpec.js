// var should = require('should');
// var resourceManagement = require("azure-arm-resource");
// var graphRbacManagementClient = require('azure-graph');
// var msRestAzure = require('ms-rest-azure');
// // var authorization = require('azure-arm-authorization');
// var util = require('util');
// var moment = require('moment');
// var SpecBase = require('./azureSpecBase');
// var azAuthInteractive = require(__dirname.replace('test\\', '') + '/azAuthInteractive');
// var azAuth = require(__dirname.replace('test\\', '') + '/azAuth');

// var specPrefix = 'azureAuthSpec';
// var base

// describe('AzureEnvironment', function () {

    // before(function (done) {
    //     base = new SpecBase(this, specPrefix);
    //     done();
    // });

    // after(function (done) {
    //     done();
    // });


    // //TODO: Figure out and test interactive auth 
    // it.skip('login should be successful for live id using callbacks', function (done) {
    //     msRestAzure.interactiveLogin(function (err, credentials) {
    //         if (err) console.log(err);
    //         done();
    //         should.exist(credentials)
    //     });
    // });

    //// Works
    // it.skip('login should be successful for azure ad user account using callbacks', function (done) {
    //     msRestAzure.loginWithUsernamePassword(base.username, base.password, function (err, credentials) {
    //         if (err) console.log(err);
    //         done();
    //         should.exist(credentials)
    //     });
    // });

    //// Works
    // it.skip('Resources should be listable for an azure ad user account with subscription owner rights', function (done) {
    //          azAuthInteractive(base.tenant)
    //         .then(result => {
    //             console.log('It worked: \n' + util.inspect(result, { depth: null }));
    //                 done();      
    //         })
    //         .catch(done);

    //     msRestAzure.loginWithUsernamePassword(base.username, base.password, function (err, credentials) {
    //         var client = new resourceManagement.ResourceManagementClient(credentials, base.subscriptionId);
    //         var list = client.resources.list(function (err, result) {
    //             console.log(result);
    //         });
    //     });
    // });

    // it.skip('Resources should be listable for an azure ad user account with subscription owner rights with a promise', function (done) {
    //     msRestAzure.loginWithUsernamePassword(base.username, base.password, function (err, credentials) {
    //         var client = new resourceManagement.ResourceManagementClient(credentials, base.subscriptionId);
    //         var list = client.resources.list(function (err, result) {
    //             console.log(result);
    //         });
    //     });
    // });

    // it.skip('Service principles should be listable for an azure ad user account with subscription owner rights', function (done) {
    //     msRestAzure.loginWithUsernamePassword(base.username, base.password, { tokenAudience: 'graph', domain: base.tenant }, function (err, credentials, subscriptions) {
    //         var client = new graphRbacManagementClient(credentials, base.tenant);
    //         var list = client.applications.list(function (err, result) {
    //             console.log(result);
    //             done();
    //         });
    //     });
    // });

    // it('We should be able to initiate interactive login using promise', function (done) {

    //     azAuthInteractive.getInteractiveCredsAsync(base.tenant)
    //         .then(result => {
    //             console.log('It worked: \n' + util.inspect(result, { depth: null }));
    //                 done();      
    //         })
    //         .catch(done);
    // });

    // it('We should be able to get credentials using interactive method', function (done) {

    //     azAuthInteractive(base.tenant)
    //         .then(result => {
    //             console.log('It worked: \n' + util.inspect(result, { depth: null }));
    //                 done();      
    //         })
    //         .catch(done);
    // });

    // it('A Service principle should be creatable for an azure ad user account with subscription owner rights', function (done) {

    //     var roleId = 'acdd72a7-3385-48ef-bd42-f606fba81ae7'; //that of a reader
    //     var roleDefinitionId = '/providers/Microsoft.Authorization/roleDefinitions/' + roleId;  // we shall be assigning the sp, a 'contributor' role at the tenant level
    //     var displayName = 'monitoringapplication';
    //     var homepage = 'http://' + displayName + ':8080';
    //     var identifierUris = [homepage];


    //     msrestazure.interactiveLogin(loginOptions, function (err, creds) {
    //         if (err) {
    //             console.log('Error occured in interactive login: \n' + util.inspect(err, { depth: null }));
    //             return;
    //         }

    //         var options = {
    //             domain: base.tenant,
    //             tokenAudience: 'graph',
    //             username: creds.username,
    //             tokenCache: creds.tokenCache,
    //             environment: creds.environment
    //         };
    //         var credsForGraph = new msrestazure.DeviceTokenCredentials(options);
    //         var graphClient = new graph(credsForGraph, base.tenant);
    //         var startDate = new Date(Date.now());
    //         var endDate = new Date(startDate.toISOString());
    //         var m = moment(endDate);
    //         m.add(4, 'years');
    //         endDate = new Date(m.toISOString());
    //         var applicationCreateParameters = {
    //             availableToOtherTenants: false,
    //             displayName: displayName,
    //             homepage: homepage,
    //             identifierUris: identifierUris,
    //             passwordCredentials: [{
    //                 startDate: startDate,
    //                 endDate: endDate,
    //                 keyId: msrestazure.generateUuid(),
    //                 value: base.secret
    //             }]
    //         };
    //         graphClient.applications.create(applicationCreateParameters, function (err, application, req, res) {
    //             if (err) {
    //                 console.log('Error occured while creating the application: \n' + util.inspect(err, { depth: null }));
    //                 return;
    //             }

    //             var servicePrincipalCreateParameters = {
    //                 appId: application.appId,
    //                 accountEnabled: true
    //             };
    //             console.log('Underlying Application objectId: ' + application.objectId);

    //             graphClient.servicePrincipals.create(servicePrincipalCreateParameters, function (err, sp, req, res) {
    //                 if (err) {
    //                     console.log('Error occured while creating the servicePrincipal: \n' + util.inspect(err, { depth: null }));
    //                     return;
    //                 }


    //                 var authzClient = new authorization(creds, base.subscriptionId, null);
    //                 var assignmentGuid = msrestazure.generateUuid();
    //                 var roleCreateParams = {
    //                     properties: {
    //                         principalId: sp.objectId,
    //                         //have taken this from the comments made above
    //                         roleDefinitionId: roleDefinitionId,
    //                         scope: scope
    //                     }
    //                 };


    //                 console.log('>>>>>>>>>>>\nSuccessfully created the servicePrincipal: \n' + util.inspect(sp, { depth: null }) + '\n');
    //                 authzClient.roleAssignments.create(scope, assignmentGuid, roleCreateParams, function (err, roleAssignment, req, res) {
    //                 if (err) {
    //                     console.log('\nError occured while creating the roleAssignment: \n' + util.inspect(err, { depth: null }));
    //                     return;
    //                 }

    //                 console.log('>>>>>>>>>>>\nSuccessfully created the role assignment for the servicePrincipal.\n');
    //                 console.log('>>>>>>>>>>>\nIn future for login you will need the following info:');
    //                 console.log('ServicePrincipal Id (SPN):    ' + sp.appId);
    //                 console.log('ServicePincipal Password:    ' + passwordForSp);
    //                 console.log('Tenant Id for ServicePrincipal:    ' + tenantId);
    //                 console.log('>>>>>>>>>>>\n');



    //     msRestAzure.loginWithUsernamePassword(base.username, base.password, { tokenAudience: 'graph', domain: base.tenant }, function (err, credentials, subscriptions) {
    //         var client = new graphRbacManagementClient(credentials, base.tenant);
    //         var list = client.applications.list(function (err, result) {
    //             console.log(result);
    //             done();
    //         });
    //     });
    // });

    // it('credentials should be instantiated for azure ad user account', function (done) {
    // var credentials = new msRestAzure.UserTokenCredentials('your-client-id', 'your-domain', 'your-username', 'your-password', 'your-redirect-uri');

    // var credentials = msRestAzure.loginWithUsernamePassword(base.username, base.password, function (err, credentials) {
    //     var client = new resourceManagement.ResourceManagementClient(credentials, base.subscriptionId);
    //     client.subscriptions.get(base.subscriptionId, function (err, result) {
    //         if (err) console.log(err);
    //         console.log(result);
    //         done();
    //     });
    //     should.exist(credentials)
    // });
    // });

// });