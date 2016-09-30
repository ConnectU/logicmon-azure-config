const Promise = require("bluebird");
const msRestAzure = Promise.promisifyAll(require("ms-rest-azure"));

module.exports.get = function (tenant) {
    return {
      tokenAudience: "graph", 
      domain: tenant 
    };
};