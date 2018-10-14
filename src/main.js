import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://58pic.ooopic.com/58pic/15/87/11/39m58PICDQU_1024.jpg',
  loading: 'http://img.zcool.cn/community/0111f05784861b0000018c1b5fc48e.gif',
  attempt: 1
})
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
