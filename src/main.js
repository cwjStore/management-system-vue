// import Vue from 'vue';
import App from './App.vue'
// import router from './router'
import store from './vuex'
import directive from "./directive"
import filters from "./filter"
import VueCookies from 'vue-cookies'
import 'element-ui/lib/theme-chalk/index.css';
import { messages } from '../public/utils/i18n';
import VueI18n from 'vue-i18n';
import "./assets/icon/iconfont.css";

import {getGlobalRequestUrl} from './service/enterService'

Vue.use(VueI18n);
Vue.use(VueCookies)
Vue.use(directive)
Vue.use(filters) 
import ElementUI from 'element-ui';
Vue.use(ElementUI);
const i18n = new VueI18n({
  locale: 'zh',
  messages
});

Vue.config.productionTip = false;
window.eventBus = new Vue();

let router = null;

getGlobalRequestUrl().then(()=>{

  router = require('./router').default;

  new Vue({
    router,
    i18n,
    store,
    render: h => h(App),
  }).$mount('#app')
})


