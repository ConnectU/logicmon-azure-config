var should = require('should');
var Promise = require("bluebird")
var msRestAzure = require('ms-rest-azure');
var SpecBase = require('./azureSpecBase');
var azAuth = require(__dirname.replace('test\\', '') + '/azAuth');
var azGraph = require(__dirname.replace('test\\', '') + '/azGraphRole');

var specPrefix = 'azGraphSpec';
var base

describe(specPrefix + '-role', function () {
    var testRoleId = 'acdd72a7-3385-48ef-bd42-f606fba81ae7'; //that of a reader
    var testAppId = 'acdd72a7-3385-48ef-bd42-f606fba81ae7'; //that of a reader

    before(function (done) {
        base = new SpecBase(this, specPrefix);
        done();
    });

    after(function (done) {
        done();
    });

  
    it.skip('AAD roles should be listable for an azure ad user account with subscription owner rights', function () {

        return Promise.try(() =>
            azAuth.getCredsGraph(base.username, base.password, base.tenant))
            .delay(2000)
            .then(credentials =>
                azGraph.listApplications(credentials, base.tenant))
            .then(apps => {
                should.exist(apps);
                apps.should.be.an.instanceOf(Array);
                apps.should.not.be.empty;
            });
    });

});