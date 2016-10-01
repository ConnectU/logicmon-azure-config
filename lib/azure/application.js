'use strict';

const moment = require("moment");
const msRestAzure = require("ms-rest-azure");
const findOrError = require(__dirname + "/find-or-error.js");

exports.createParameters = function(displayName, secret, yearsOffset) {
    let homepage = `http://${displayName}:8080`; // consider using url.format instead
    let identifierUriArray = [homepage];

    let startDate = moment();
    let endDate = startDate.clone().add(yearsOffset, "years");

    return {
        availableToOtherTenants: false,
        displayName: displayName,
        homepage: homepage,
        identifierUris: identifierUriArray,
        passwordCredentials: [{
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
            keyId: msRestAzure.generateUuid(),
            value: secret
        }]
    }
};

exports.find = function (applications, applicationName) {
    return findOrError(applications, (item) => item.displayName === applicationName, "Application not found");
};
