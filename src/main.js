import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ColorThief from 'colorthief'

library.add(faArrowLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(axios, ColorThief)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
