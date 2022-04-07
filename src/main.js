import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  to.meta.title && (document.title = to.meta.title);
  next();
});

new Vue({
  vuetify,
  router,
  render: h => h(App),
  mounted(){
    // add class light to app element,
    // immediately when application run,
    // because light mode is default
    document.querySelector('#app').classList.add('light');
  }
}).$mount('#app');
