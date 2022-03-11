// Copyright 2022 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
