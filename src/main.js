import { createApp } from 'vue'
import App from './App.vue'
import CasdoorSDK from "@/plugin";
const config = {
  serverUrl: "http://localhost:7001",
  clientId: "4262bea2b293539fe45e",
  organizationName: "casbin",
  appName: "app-casnode",
  redirectPath: "/callback",
};
createApp(App).mount('#app')
App.use(CasdoorSDK,config);
