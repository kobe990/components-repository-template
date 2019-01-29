import Vue from 'vue'
// 单组件调试，修改该import
import App from '../components/componentsA/samples/samplesA'

new Vue({
  el: '#app',
  render: h => h(App)
})
