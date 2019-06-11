import Vue from 'vue'
import Router from 'vue-router'

import Map from '../components/Map.vue';
import Main from '../components/Main.vue';
import Login from '../components/Login.vue';
import List from '../components/post/List.vue';
import Detail from '../components/post/Detail.vue';
import Data from '../components/post/Data.vue';
import Group from '../components/post/Group.vue';
import GroupDetail from '../components/post/GroupDetail.vue';
import Addition from '../components/post/Addition.vue';
import Order from '../components/Order.vue';

Vue.use(Router);

export default [
    { path: '/', name : 'Home', component: Main },
    { path: '/map', name : 'Map', component: Map },
    { path: '/login', name : 'Login', component: Login },
    { path: '/list', name : 'List', component: List },
    { path: '/detail', name : 'Detail', component: Detail },
    { path: '/data', name : 'Data', component: Data },
    { path: '/group', name : 'Group', component: Group },
    { path: '/group/detail', name : 'GroupDetail', component: GroupDetail },
    { path: '/addition', name : 'Addition', component: Addition },
    { path: '/order', name : 'Order', component: Order },
]