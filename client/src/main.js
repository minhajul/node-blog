import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import { shop } from './store/shop';

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store(shop);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
