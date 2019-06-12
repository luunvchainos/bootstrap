import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './sass/app.scss'
import VueRouter from 'vue-router';
import routes from './routes';
import axios from 'axios';
import * as ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import locale from 'element-ui/lib/locale/lang/en';


import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'

Vue.use(VueLayers);
Vue.use(ElementUI);

export const HTTP = axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`,
    headers: {
        Authorization: 'Bearer {token}'
    }
})

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
// window.$ = window.jQuery = require('jquery');

// frontend
require('./js/custom');

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({mode: 'history', routes});
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
