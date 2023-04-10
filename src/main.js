import Vue from 'vue'
import App from './App'
import '.env.js'
import store from './store'
import plugins from './plugins' // plugins
import uView from 'uview-ui'

// CSS
import './styles/index.scss'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.use(plugins)
Vue.use(uView)

App.mpType = 'app'

function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function'
  )
}

uni.addInterceptor({
  returnValue(res) {
    if (!isPromise(res)) {
      return res
    }
    return new Promise((resolve, reject) => {
      res.then(res => {
        if (res[0]) {
          reject(res[0])
        } else {
          resolve(res[1])
        }
      })
    })
  }
})

const app = new Vue({
  ...App
})
app.$mount()
