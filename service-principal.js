const Promise = require("bluebird");
const ServicePrincipal = require('./lib/azure/public/azure-ad-service-principal.js');

(function () {


    document.getElementById("list-applications").addEventListener('click', function (event) {
        log('User clicked "List Applications" button');
        log(ServicePrincipal.listApplications());
    })

    document.getElementById("list-service-principals").addEventListener('click', function (event) {
        log('User clicked "List Service Principals" button');
        log(ServicePrincipal.listServicePrincipals());
    })

    document.getElementById("create-service-principal").addEventListener('click', function (event) {
        log('User clicked "Create Service Principal" button');
        var applicationResult = ServicePrincipal.createApplication()
        if (applicationResult != null) {
            var servicePrincipal = ServicePrincipal.createApplication()
            if (servicePrincipal) {
                log("Service Principal Creation Successful.");
            } else {
                log("Service Principal Creation Failed.");
            }
            document.getElementById("application-name-field").value = applicationResult.displayName
            document.getElementById("client-id-field").value = applicationResult.appId
            document.getElementById("auth-key-1-field").value = applicationResult.keyCredentials[0]
            document.getElementById("auth-key-2-field").value = applicationResult.keyCredentials[1]
        } else {
            log("Not Authenticated, please use Login tab to Authenticate.");
        }
    })


} ());
