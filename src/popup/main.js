import Vue from 'vue';
import App from './App.vue';
import '../plugins/elements-ui';
import store from '../store';

/* eslint-disable no-new */
Vue.config.productionTip = false;
new Vue({
  store,
  el: '#app',
  render: (h) => h(App),
});
