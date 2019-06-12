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
import Order from '../components/order/Order.vue';
import OrderDetail from '../components/order/OrderDetail.vue';
import Account from '../components/account/Account.vue';
import Fee from '../components/fee/Fee.vue';
import FeeDetail from '../components/fee/Detail.vue';
import Bill from '../components/fee/Bill.vue';
import Notice from '../components/notice/Notice.vue';
import NoticeDetail from '../components/notice/Detail.vue';
import Question from '../components/question/Question.vue';
import QuestionAddition from '../components/question/Addition.vue';
import QuestionAdditionCompletion from '../components/question/Completion.vue';
import QuestionDetail from '../components/question/Detail.vue';

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
    { path: '/order/detail', name : 'OrderDetail', component: OrderDetail },
    { path: '/account', name : 'Account', component: Account },
    { path: '/fee', name : 'Fee', component: Fee },
    { path: '/fee/detail', name : 'FeeDetail', component: FeeDetail },
    { path: '/bill', name : 'Bill', component: Bill },
    { path: '/notice', name : 'Notice', component: Notice },
    { path: '/notice/detail', name : 'NoticeDetail', component: NoticeDetail },
    { path: '/question', name : 'Question', component: Question },
    { path: '/question/addition', name : 'QuestionAddition', component: QuestionAddition },
    { path: '/question/addition/completion', name : 'QuestionAdditionCompletion', component: QuestionAdditionCompletion },
    { path: '/question/detail', name : 'QuestionDetail', component: QuestionDetail },
]