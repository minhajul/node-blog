import Vue from 'vue'
import App from './App'
import router from './router'
import store  from './store/index';
import { sync } from 'vuex-router-sync';

Vue.config.productionTip = false;

sync(store, router);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
