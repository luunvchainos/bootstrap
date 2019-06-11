import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './sass/app.scss'
import VueRouter from 'vue-router';
import routes from './routes';
import axios from 'axios';

import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css' // needs css-loader

Vue.use(VueLayers);

export const HTTP = axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`,
    headers: {
        Authorization: 'Bearer {token}'
    }
})

window.$ = window.jQuery = require('jquery');

// frontend
require('./js/custom');

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({mode: 'history', routes});
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
