const fs = require("fs");
var EstuaryApi = require('estuary_api');
var defaultClient = EstuaryApi.ApiClient.instance;
const util = require('util');


// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
const apiKey = fs.readFileSync("apikey.txt").toString().trim()
bearerAuth.apiKey = apiKey
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
bearerAuth.apiKeyPrefix = 'Bearer';

var apiInstance = new EstuaryApi.CollectionsApi();

const api = util.promisify(apiInstance.collectionsGet)


function cb() {
  return new Promise(resolve => {
    apiInstance.collectionsGet(function(a,b,c){
      resolve(b)
    });
  });
}


(async function(){
  const data = await cb()
  console.log(data)

  apiInstance.collectionsGet(function(result){
    console.log(result);
  });

})()

