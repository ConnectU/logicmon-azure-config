const Promise = require("bluebird");
const msRestAzure = Promise.promisifyAll(require("ms-rest-azure"));

module.exports = function getGraphLoginOptions(tenant) {
    return {
      tokenAudience: "graph", 
      domain: tenant 
    };
};