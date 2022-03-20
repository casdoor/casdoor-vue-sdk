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

export default {
  install(app, options) {
    let CasdoorSDK = new Sdk(options);

    app.config.globalProperties.getSignupUrl = () => {
      return CasdoorSDK.getSignupUrl();
    };

    app.config.globalProperties.getSigninUrl = () => {
      return CasdoorSDK.getSigninUrl();
    };

    app.config.globalProperties.getUserProfileUrl = (userName, account) => {
      return CasdoorSDK.getUserProfileUrl(userName, account);
    };

    app.config.globalProperties.getMyProfileUrl = (account) => {
      return CasdoorSDK.getMyProfileUrl(account);
    };

    app.config.globalProperties.signin = (ServerUrl) => {
      return CasdoorSDK.signin(ServerUrl);
    };
  }
}
