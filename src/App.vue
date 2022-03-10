<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <button @click="login">log in</button>
<!--  <button @click="signup">sign up</button>-->
</template>

<script>
import Casdoor from './plugin/index'

const config = {
  serverUrl: "http://localhost:7001",
  clientId: "4262bea2b293539fe45e",
  organizationName: "casbin",
  appName: "app-casnode",
  redirectPath: "/callback",
};
export default {
  name: 'App',
  components: {
  },
  //call helper.init when the app is mounted
  mounted() {
    Casdoor.init(config)
  },
  methods: {
    login() {
      window.location.href=Casdoor.getSigninUrl()
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
