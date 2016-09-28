var util = require('util');
var path = require('path');
var async = require('async');
var msRestAzure = require('ms-rest-azure');
var ResourceManagementClient = require('azure-arm-resource').ResourceManagementClient;
var SubscriptionManagementClient = require('azure-arm-resource').SubscriptionClient;
var WebSiteManagement = require('azure-arm-website');

//Environment Setup
_validateEnvironmentVariables('AZURE_AUTH_USER', 'AZURE_AUTH_PASS');
var username = process.env['AZURE_AUTH_USER'];
var password = process.env['AZURE_AUTH_PASS'];

var credentials = new msRestAzure.loginWithUsernamePassword (username, password);
 
(function (usernameInput, passwordInput, loginButton) {


    button.onclick = function () {
        msRestAzure.loginWithUsernamePassword(username, password, function (err, credentials) {
            var client = new someAzureServiceClient(credentials, 'your-subscriptionId');
            client.someOperationGroup.method(param1, param2, function (err, result) {
                if (err) console.log(err);
                console.log(result);
            });
        });
    };
})(document.getElementById('username'), document.getElementById('password'), document.getElementById('loginbutton'));

var validateInputs = function(usernameInput, passwordInput, loginButton){
        if (usernameInput == null || passwordInput == null || loginbutton == null) {
        console.log('Required DOM elements for the login API call event subscription were absent.',
             { username: usernameInput, password: passwordInput, loginbutton: loginButton });
        return false;
    }
}

 
function _validateEnvironmentVariables() {
    var missingenvs = [];
    for (var i = 0; i < arguments.length; i++) {
        if (!process.env[arguments[i]]) missingenvs.push(arguments[i]);
    }
    if (envs.length > 0) {
        throw new Error(util.format('please set/export the following environment variables: %s', envs.toString()));
    }
}

function _generateRandomId(prefix, exsitIds) {
    var newNumber;
    while (true) {
        newNumber = prefix + Math.floor(Math.random() * 10000);
        if (!exsitIds || !(newNumber in exsitIds)) {
            break;
        }
    }
    return newNumber;
}

    // var username = usernameInput.value;
    // var password = passwordInput.value;
    // var button = loginButton.value;