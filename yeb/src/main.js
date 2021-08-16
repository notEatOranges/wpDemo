import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './directives/headTop/directive'
import less from 'less'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'mini', zIndex: 3000 });
Vue.use(less)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
