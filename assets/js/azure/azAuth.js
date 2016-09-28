var msRestAzure = require('ms-rest-azure');
exports.getCreds = function (username, password) {
    return new Promise(function (resolve, reject) {
        msRestAzure.loginWithUsernamePassword(username, password, function (err, credentials) {
            if (err) return reject(err);
            resolve(credentials);
        });
    });
}

exports.getCredsGraph = function (username, password, tenant ) {
    return new Promise(function (resolve, reject) {
        msRestAzure.loginWithUsernamePassword(username, password, { tokenAudience: 'graph', domain: tenant  },  function (err, credentials) {
            if (err) return reject(err);
            resolve(credentials);
        });
    });
}