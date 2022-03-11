# casdoor-vue-sdk


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

example :
```javascript
import Casdoor from 'casdoor-vue-sdk'
const config = {
  serverUrl: "http://localhost:7001",
  clientId: "288fdc8522f360207141",
  organizationName: "casbin-forum",
  appName: "forum",
  redirectPath: "/callback",
};
export default {
  name: 'App',
  components: {
  },
  mounted() {
    Casdoor.init(config); //init the SDK by the config when the application is mounted
  },
  methods: {
    login() {
      window.location.href=Casdoor.getSigninUrl()
    },
    signup() {
      window.location.href=Casdoor.getSignupUrl()
    },
  },
}
```
## For developer:
use command `webpack` in the root directory to build the sdk  
