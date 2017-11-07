import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App.vue'
import store from './store'

const vm = new Vue({
        el: '#app',
        store,
        render: h => h(App)
});

window.Vue = vm;
