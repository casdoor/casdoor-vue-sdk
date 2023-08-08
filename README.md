# casdoor-vue-sdk

[![NPM version][npm-image]][npm-url]
[![NPM download][download-image]][download-url]
[![GitHub Actions](https://github.com/casdoor/casdoor-vue-sdk/actions/workflows/release.yml/badge.svg)](https://github.com/casdoor/casdoor-vue-sdk/actions/workflows/release.yml)
[![GitHub Actions](https://github.com/casdoor/casdoor-vue-sdk/actions/workflows/build.yml/badge.svg)](https://github.com/casdoor/casdoor-vue-sdk/actions/workflows/build.yml)
[![Coverage Status](https://codecov.io/gh/casdoor/casdoor-vue-sdk/branch/master/graph/badge.svg)](https://codecov.io/gh/casdoor/casdoor-vue-sdk)
[![Release](https://img.shields.io/github/release/casdoor/casdoor-vue-sdk.svg)](https://github.com/casdoor/casdoor-vue-sdk/releases/latest)
[![Discord](https://img.shields.io/discord/1022748306096537660?logo=discord&label=discord&color=5865F2)](https://discord.gg/5rPsrAzK7S)

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

For Vue3:
```javascript
// in main.js
import Casdoor from 'casdoor-vue-sdk'
const config = {
  serverUrl: "http://localhost:8000",
  clientId: "4262bea2b293539fe45e",
  organizationName: "casbin",
  appName: "app-casnode",
  redirectPath: "/callback",
};
const app = createApp(App)
app.use(Casdoor, config)
```

For Vue2:

```javascript
// in main.js
import Casdoor from 'casdoor-vue-sdk'
import VueCompositionAPI from '@vue/composition-api'
const config = {
  serverUrl: "http://localhost:8000",
  clientId: "4262bea2b293539fe45e",
  organizationName: "casbin",
  appName: "app-casnode",
  redirectPath: "/callback",
};
Vue.use(VueCompositionAPI)
Vue.use(Casdoor,config)
new Vue({
  render: h => h(App),
}).$mount('#app')
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

If you are using vue3 composition API, since it is inconvenient to obtain the Vue instance in `setup()`, `useCasdoor` provided a better way to access the sdk's methods.

```vue
<script>
import { useCasdoor } from 'casdoor-vue-sdk';

export default {
  setup() {

    const { getSigninUrl, getSignupUrl } = useCasdoor();

    function login() {
      window.location.href = getSigninUrl();
    }

    function signup() {
      window.location.href = getSignupUrl();
    }

    return {
      login,
      signup
    }
  }
}
</script>
```

## API reference interface
### Get sign up url
```javascript
getSignupUrl()
```
Return the casdoor url that navigates to the registration screen

### Get sign in url
```javascript
getSigninUrl()
```
Return the casdoor url that navigates to the login screen

### Get user profile page url
```javascript
getUserProfileUrl(userName, account)
```
Return the url to navigate to a specific user's casdoor personal page

### Get my profile page url
```javascript
getMyProfileUrl(account)
```

### Sign in
```javascript
signin(serverUrl, signinPath)
```
Handle the callback url from casdoor, call the back-end api to complete the login process

### Determine whether silent sign-in is being used
```javascript
isSilentSigninRequired()
```
We usually use this method to determine if silent login is being used. By default, if the silentSignin parameter is included in the URL and equals one, this method will return true. Of course, you can also use any method you prefer.

### silentSignin
```javascript
silentSignin(onSuccess, onFailure)
```
First, let's explain the two parameters of this method, which are the callback methods for successful and failed login. Next, I will describe the execution process of this method. We will create a hidden "iframe" element to redirect to the login page for authentication, thereby achieving the effect of silent sign-in.

## Q & A

Q1:  How to solve "...index.js implicitly has an 'any' type..." error in typescript project?

A1:  Add a new declaration (.d.ts) file containing `declare module 'casdoor-vue-sdk'. See it at [Shorthand ambient modules](https://www.typescriptlang.org/docs/handbook/modules.html#shorthand-ambient-modules)

## For developer:

use command `webpack` in the root directory to build the sdk  
