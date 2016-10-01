const Promise = require("bluebird");
const servicePrincipal = require('./js/azure-service-principal.js');

(function () {

    document.getElementById("list-applications").addEventListener('click', function (event) {
        log('User clicked "List Applications" button');
        log(servicePrincipal.listApplications());
    })

    document.getElementById("list-service-principals").addEventListener('click', function (event) {
        log('User clicked "List Service Principals" button');
        log(servicePrincipal.listServicePrincipals());
    })

    document.getElementById("create-service-principal").addEventListener('click', function (event) {

        log('User clicked "Create Service Principal" button');
        Promise.try(() => {
            return Promise.resolve(servicePrincipal.createApplication());
        }).then((application) => {
            document.getElementById("application-name-field").value = applicationResult.displayName
            document.getElementById("client-id-field").value = applicationResult.appId
            document.getElementById("auth-key-1-field").value = applicationResult.keyCredentials[0]
            document.getElementById("auth-key-2-field").value = applicationResult.keyCredentials[1]
        }).then((application) => {
            Promise.resolve(servicePrincipal.createservicePrincipal());
        }).catch(function(e) {
            log("Failed to create service principal");
        });
    })


} ());

