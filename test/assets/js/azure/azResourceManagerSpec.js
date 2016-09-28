var should = require('should');
var Promise = require("bluebird")
var msRestAzure = require('ms-rest-azure');
var util = require('util');
var SpecBase = require('./azureSpecBase');
var azAuth = require(__dirname.replace('test\\', '') + '/azAuth');
var azResourceManager = require(__dirname.replace('test\\', '') + '/azResourceManager');

var specPrefix = 'azResourceManagerSpec';
var base

describe(specPrefix, function () {

    before(function (done) {
        base = new SpecBase(this, specPrefix);
        done();
    });

    after(function (done) {
        done();
    });

    it.skip('Resources should be listable for an azure ad user account with subscription owner rights', function () {
        return Promise.try(() =>
            azAuth.getCreds(base.username, base.password))
            .then(credentials =>
                azResourceManager.listResources(credentials, base.subscriptionId))
            .then(resources => {
                should.exist(resources);
                resources.should.be.an.instanceOf(Array);
                resources.should.not.be.empty;
            });
    });

});