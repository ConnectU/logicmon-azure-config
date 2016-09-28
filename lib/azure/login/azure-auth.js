

exports.getClientAad = function (username, password, tenant) {
    return Promise.try(() => {
        return msRestAzure.loginWithUsernamePasswordAsync(username, password, Application.createParameters(tenant));
    }).then((credentials) => {
        return new graphRbacManagementClient(credentials, tenant);
    }).then((client) => {
        return Promise.promisifyAll(client);
    });
}

exports.getGraphClient = function (username, password, tenant) {
    return Promise.try(() => {
        return msRestAzure.loginWithUsernamePasswordAsync(username, password, Application.createParameters(tenant));
    }).then((credentials) => {
        return new graphRbacManagementClient(credentials, tenant);
    }).then((client) => {
        return Promise.promisifyAll(client);
    });
}

