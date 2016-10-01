const login = require('./js/azure-login.js');


(function () {
    
    document.getElementById("live-id-launch").addEventListener('click', function (event) {
        log("User Launched LiveID Login Window.");
    })
    
    document.getElementById("azure-ad-login").addEventListener('click', function (event) {
        log("User clicked Azure AD Login Button.");
        log("Attempting to authenticate.");
        var tenant = document.getElementById("tenant").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        Promise.resolve(login.authenticateAad(tenant, username, password));

    })
} ());
