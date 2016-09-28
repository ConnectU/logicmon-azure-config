var msRestAzure = require('ms-rest-azure');

exports.getCredsInteractive = function (tenantId) {
    var loginOptions = { domain: tenantId };

    return new Promise(function (resolve, reject) {
        msRestAzure.interactiveLogin(loginOptions, function (err, credentials) {
            if (err) return reject(err);
            resolve(credentials);
        });
    });
}