const fs = require("fs");
var EstuaryApi = require('estuary_api');
var defaultClient = EstuaryApi.ApiClient.instance;



// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
const apiKey = fs.readFileSync("apikey.txt").toString().trim()
bearerAuth.apiKey = apiKey
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
bearerAuth.apiKeyPrefix = 'Bearer';

var apiInstance = new EstuaryApi.CollectionsApi();

exports.handler = async (event, context, callback) => {

function cb() {
  return new Promise(resolve => {
    apiInstance.collectionsGet(1,function(a,b,c){
      resolve(b)
    });
  });
}
  const data = await cb()

    return JSON.stringify(data)
};

