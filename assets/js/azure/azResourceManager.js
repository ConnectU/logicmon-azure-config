var resourceManagement = require("azure-arm-resource");

exports.listResources = function (credentials, subscriptionId) {
    
    return new Promise(function (resolve, reject) {
        
        var client = new resourceManagement.ResourceManagementClient(credentials, subscriptionId);
        client.resources.list(function (err, result){
            if (err) return reject(err);
            resolve(result);
        });
    });
}