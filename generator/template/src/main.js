<%_ if (options.application === 'mobile') { _%>
import 'lib-flexible';
<%_ } _%>
import Vue from 'vue';
import App from './App.vue';
import router from './router/.invoke/router.js';
import './components/global';
import './icons';
import './filters';
import './services';

/* eslint-disable */
Vue.config.productionTip = process.env.NODE_ENV === 'production';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // use Runtime-only
  // https://vuejs.org/v2/guide/installation.html
  render: (h) => h(App)
});
