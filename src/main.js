import Vue from 'vue'
import App from './App'
import http from '@/utils/http'

Vue.prototype.$http = http // 微信小程序网络请求的配置
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
