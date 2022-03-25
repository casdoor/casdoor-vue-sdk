# casdoor-vue-sdk

[![NPM version][npm-image]][npm-url]
[![NPM download][download-image]][download-url]
[![codebeat badge](https://codebeat.co/badges/6f2ad052-7fc8-42e1-b40f-0ca2648530c2)](https://codebeat.co/projects/github-com-casdoor-casdoor-vue-sdk-master)
[![GitHub Actions](https://github.com/casdoor/casdoor-vue-sdk/actions/workflows/release.yml/badge.svg)](https://github.com/casdoor/casdoor-vue-sdk/actions/workflows/release.yml)
[![GitHub Actions](https://github.com/casdoor/casdoor-vue-sdk/actions/workflows/build.yml/badge.svg)](https://github.com/casdoor/casdoor-vue-sdk/actions/workflows/build.yml)
[![Coverage Status](https://codecov.io/gh/casdoor/casdoor-vue-sdk/branch/master/graph/badge.svg)](https://codecov.io/gh/casdoor/casdoor-vue-sdk)
[![Release](https://img.shields.io/github/release/casdoor/casdoor-vue-sdk.svg)](https://github.com/casdoor/casdoor-vue-sdk/releases/latest)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/casbin/casdoor)

[npm-image]: https://img.shields.io/npm/v/casdoor-vue-sdk.svg?style=flat-square

[npm-url]: https://npmjs.com/package/casdoor-vue-sdk

[download-image]: https://img.shields.io/npm/dm/casdoor-vue-sdk.svg?style=flat-square

[download-url]: https://npmjs.com/package/casdoor-vue-sdk
 
This is Casdoor's SDK for js will allow you to easily connect your application to the Casdoor authentication system
without having to implement it from scratch.

Casdoor SDK is very simple to use. We will show you the steps below.
 
> Noted that this sdk has been applied to casnode, if you still don’t know how to use it after reading README.md, you can refer to it

## Installation

~~~shell script
# NPM
npm i casdoor-vue-sdk

# Yarn
yarn add casdoor-vue-sdk
~~~

## Init SDK

Initialization requires 5 parameters, which are all string type:

| Name (in order)  | Must | Description                                         |
| ---------------- | ---- | --------------------------------------------------- |
| serverUrl  | Yes  | your Casdoor server URL               |
| clientId         | Yes  | the Client ID of your Casdoor application                        |
| appName           | Yes  | the name of your Casdoor application |
| organizationName     | Yes  | the name of the Casdoor organization connected with your Casdoor application                    |
| redirectPath     | No  | the path of the redirect URL for your Casdoor application, will be `/callback` if not provided              |


install:

```javascript
// in main.js
import Casdoor from 'casdoor-vue-sdk'
const config = {
  serverUrl: "http://localhost:7001",
  clientId: "288fdc8522f360207141",
  organizationName: "casbin-forum",
  appName: "forum",
  redirectPath: "/callback",
};
const app = createApp(App)
app.use(Casdoor, config)
```

example:

```vue
// in app.vue
<script>
export default {
  name: 'App',
  methods: {
    login() {
      window.location.href = this.getSigninUrl();
    },
    signup() {
      window.location.href = this.getSignupUrl();
    }
  }
}
</script>
```

## For developer:

use command `webpack` in the root directory to build the sdk  
