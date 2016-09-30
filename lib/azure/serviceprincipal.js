'use strict';

exports.createParameters = function (applicationId) {
    return {
        appId: applicationId,
        accountEnabled: true
    }
};

exports.createKeyCredParameters = function (applicationId) {
    return {
        appId: key,
        accountEnabled: true
    }
};
