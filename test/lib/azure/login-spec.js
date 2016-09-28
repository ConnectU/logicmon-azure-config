const Promise = require("bluebird")
const should = require('should');
const msRestAzure = Promise.promisifyAll(require('ms-rest-azure'));
const GraphLoginOptions = require(__dirname.replace('test\\', '') + "/login/graph-login-options.js");
const specBase = require('./spec-base.js').specBase;
const specName = 'Login';

describe(specName, function () {
    var base;

    before(function (done) {
        base = new specBase(this, specName);
        done();
    });

    it.skip('Generic Authentication should work for an azure ad user account with subscription owner rights', function () {
        return Promise.try(() => {
            return msRestAzure.loginWithUsernamePasswordAsync(base.username, base.password);
        }).then((credentials) => {
            should.exist(credentials);
        });
    });

    it.skip('Graph Authentication should work for an azure ad user account with subscription owner rights', function () {
        return Promise.try(() => {
            return msRestAzure.loginWithUsernamePasswordAsync(base.username, base.password, GraphLoginOptions.get(base.tenant));
        }).then((credentials) => {
            should.exist(credentials);
        });
    });

});