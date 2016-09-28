const Promise = require("bluebird")
const should = require('should');
const msRestAzure = Promise.promisifyAll(require('ms-rest-azure'));
const getGraphLoginOptions = require(__dirname.replace('test\\', '') + "/login/graph-options.js");
const specBase = require('./spec-base.js').specBase;
const specName = 'Login';

describe(specName, function () {
    var base;

    before(function (done) {
        base = new specBase(this, specName);
        done();
    });

    it('Generic Authentication should work for an azure ad user account with subscription owner rights', function () {
        return Promise.try(() => {
            return msRestAzure.loginWithUsernamePasswordAsync(base.username, base.password);
        }).then((credentials) => {
            should.exist(credentials);
        });
    });

    it('Graph Authentication should work for an azure ad user account with subscription owner rights', function () {
        return Promise.try(() => {
            return msRestAzure.loginWithUsernamePasswordAsync(base.username, base.password, getGraphLoginOptions(base.tenant));
        }).then((credentials) => {
            should.exist(credentials);
        });
    });

});