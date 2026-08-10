import Kdu from 'kdu'
import App from './App.kdu'
import { store } from './store/store'

new Kdu({
  store: store,
  el: '#app',
  render: h => h(App)
})
