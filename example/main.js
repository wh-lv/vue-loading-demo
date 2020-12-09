import Vue from 'vue'
import App from './App.vue'
import create from '../src/index'

Vue.config.productionTip = false

Vue.prototype.$create = create

new Vue({
  render: h => h(App),
}).$mount('#app')
