var should = require('should');
var resourceManagement = require("azure-arm-resource");
var graphRbacManagementClient = require('azure-graph');
var msRestAzure = require('ms-rest-azure');
// var authorization = require('azure-arm-authorization');
var util = require('util');
var moment = require('moment');
var SpecBase = require('./azureSpecBase');
var azAuthInteractive = require(__dirname.replace('test\\', '') + '/azAuthInteractive');
var azAuth = require(__dirname.replace('test\\', '') + '/azAuth');

var specPrefix = 'azureAuthAadCallbacksSpec';
var base;

describe('AzureADAuthUsingCallBacks', function () {

    before(function (done) {
        base = new SpecBase(this, specPrefix);
        done();
    });

    after(function (done) {
        done();
    });


    it.skip('Authentication should work for an azure ad user account with subscription owner rights', function (done) {
        msRestAzure.loginWithUsernamePassword(base.username, base.password, function (err, credentials) {
            if (err) console.log(err);
            should.exist(credentials);
            done();
        });
    });


    it.skip('Resources should be listable for an azure ad user account with subscription owner rights', function (done) {
        msRestAzure.loginWithUsernamePassword(base.username, base.password, function (err, credentials) {
            var client = new resourceManagement.ResourceManagementClient(credentials, base.subscriptionId);
            client.resources.list(function (err, result) {
                should.exist(result);
                result.should.be.an.instanceOf(Array);
                result.should.not.be.empty;
                done();
            });
        });
    });

    it.skip('Applications should be listable for an azure ad user account with subscription owner rights', function (done) {
        msRestAzure.loginWithUsernamePassword(base.username, base.password, function (err, credentials) {
            var client = new resourceManagement.ResourceManagementClient(credentials, base.subscriptionId);
            client.resources.list(function (err, result) {
                should.exist(result);
                result.should.be.an.instanceOf(Array);
                result.should.not.be.empty;
                done();
            });
        });
    });


});