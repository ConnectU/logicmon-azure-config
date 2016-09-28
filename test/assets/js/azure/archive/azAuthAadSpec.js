var should = require('should');
var Promise = require("bluebird")
var msRestAzure = require('ms-rest-azure');
var SpecBase = require('./azureSpecBase');
var azAuth = require(__dirname.replace('test\\', '') + '/azAuth');

var specPrefix = 'azAuthAadSpec';
var base

describe(specPrefix, function () {

    before(function (done) {
        base = new SpecBase(this, specPrefix);
        done();
    });

    after(function (done) {
        done();
    });


    it.skip('Generic Authentication should work for an azure ad user account with subscription owner rights', function () {
        return Promise.try(() =>
            azAuth.getCreds(base.username, base.password))
            .then(credentials => {
                should.exist(credentials)
            });

    });

    it.skip('Graph Authentication should work for an azure ad user account with subscription owner rights', function () {
        return Promise.try(() =>
            azAuth.getCredsGraph(base.username, base.password, base.tenant))
            .then(credentials => {
                should.exist(credentials)
            });
    });
   
});