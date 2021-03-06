import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,  // shortcut for "routes: routes" in ES6
  mode: 'history', // set modes for the URL; default is 'hash', while 'history' removes the hash from the URL
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return {x: 0, y: 0}; // scroll to given coordinates;
  }
});


router.beforeEach((to, from, next) => {  // global "before" navigation guard, applied always
  console.log('global beforeEach');
  next();
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
