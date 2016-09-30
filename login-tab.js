const aad = require('./lib/azure/public/azure-ad-login.js');

(function () {
    
    document.getElementById("live-id-launch").addEventListener('click', function (event) {
        log("User Launched LiveID Login Window.");
    })
    
    document.getElementById("azure-ad-login").addEventListener('click', function (event) {
        log("User clicked Azure AD Login Button.");
        log("Attempting to authenticate.");
        console.log(azureRestClient)
        var tenant = document.getElementById("tenant").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        azureRestClient = aad.authenticate(tenant, username, password)
        if(azureRestClient != null){
            log("Authentication successful.");    
        }else{
            log("Authenication failed.");
        }
        console.log(azureRestClient)
    })
} ());
