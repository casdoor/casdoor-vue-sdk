import Sdk from "casdoor-js-sdk";

let ServerUrl = '';
let CasdoorSDK;

let Casdoor = function(){}

Casdoor.init = function initCasdoorSdk(config) {
  CasdoorSDK = new Sdk(config);
  ServerUrl = config.serverUrl;
}

Casdoor.getSignupUrl= function getSignupUrl() {
  return CasdoorSDK.getSignupUrl();
}

Casdoor.getSigninUrl = function getSigninUrl() {
  return CasdoorSDK.getSigninUrl();
}

Casdoor.getUserProfileUrl = function getUserProfileUrl(userName, account) {
  return CasdoorSDK.getUserProfileUrl(userName, account);
}

Casdoor.getMyProfileUrl=  function getMyProfileUrl(account) {
  return CasdoorSDK.getMyProfileUrl(account);
}

Casdoor.getMyResourcesUrl=  function getMyResourcesUrl(account) {
  return CasdoorSDK.getMyProfileUrl(account).replace("/account?", "/resources?");
}

Casdoor.signin = function signin() {
  return CasdoorSDK.signin(ServerUrl);
}

export default Casdoor;
