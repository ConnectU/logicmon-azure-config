var fs = require('fs');
var os = require('os');
var path = require('path');

/**
 * @class
 * Initializes a new instance of the azureSpecBase class.
 * @constructor
 *
 * @param {object} mochaSuiteObject - The mocha suite object
 *
 * @param {string} testPrefix - The prefix to use for the test suite
 *
 * @param {Array} env - (Optional) Array of environment variables required by the test
 * Example:
 * [
 *   { requiresToken: true },
 *   { name: 'AZURE_ARM_TEST_LOCATION', defaultValue: 'West US' },
 *   { name: 'AZURE_AD_TEST_PASSWORD'},
 * ];
 */

// function normalizeTestName(str) {
//     return str.replace(/[{}\[\]'";\(\)#@~`!%&\^\$\+=,\/\\?<>\|\*:]/ig, '').replace(/(\s+)/ig, '_');
// };

// function validateEnvironment(callback) {
//   var ids = [];
//   var envs = ['AZURE_AUTH_TENANT', 'AZURE_AUTH_USER_AAD', 'AZURE_AUTH_PASS', 'AZURE_AUTH_SUBSCRIPTION'];
//   envs.forEach(function (item) {
//     if (!process.env[item]) {
//       ids.push(item);
//     }
//   });

//   if (ids.length > 0) {
//     console.log('The following variables were not found:\n\t' + ids.join(', '));
//     process.exit();
//   }
//   callback();
// }

exports.specBase = function (mochaSuiteObject, testPrefix) {
    this.mochaSuiteObject = mochaSuiteObject;
    this.testPrefix = testPrefix;
    // this.testPrefix = this.normalizeTestName(testPrefix);
    this.currentTest = '';
    //authentication info
    this.tenant = process.env['AZURE_AUTH_TENANT'];
    this.usernameaad = process.env['AZURE_AUTH_USER_AAD'];
    this.usernamelive = process.env['AZURE_AUTH_USER_LIVE'];
    this.username = this.usernamelive
    this.password = process.env['AZURE_AUTH_PASS'];
    this.subscriptionId = process.env['AZURE_AUTH_SUBSCRIPTION'];
    this.clientId = process.env['AZURE_AUTH_CLIENT'];
    this.secret = process.env['AZURE_AUTH_KEY'];
    this.domain = process.env['AZURE_AUTH_DOMAIN'];

}