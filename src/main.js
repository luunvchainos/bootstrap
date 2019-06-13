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
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'

require('./js/custom');

global.jQuery = require('jquery');
let $ = global.jQuery;
window.$ = $;

Vue.use(VueLayers);
Vue.use(ElementUI);

export const HTTP = axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`,
    headers: {
        Authorization: 'Bearer {token}'
    }
});

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({mode: 'history', routes});
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
