<template>
    <div class="container-fluid">
        <nav class="navbar flex-md-nowrap p-0">
            <div class="menu_trigger"><i class="fa fa-bars"></i></div>
            <router-link class="h2 title-page color-white" to="/">IDX</router-link>
            <div class="right-header">
                <a class="btn mr-4 btn-transparent show-lg" href="#"><i class="fa fa-phone"></i></a>

                <div class="show-lg">
                    <a class="btn btn-transparent dropdown-toggle" href="#" id="dropdown_1"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        イダ
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdown_1">
                        <li class="dropdown-item" :key="index" v-for="(i, index) in options1">
                            <router-link :to="i.href">{{ i.value }}</router-link>
                        </li>
                    </ul>
                </div>

                <div class="show-lg">
                    <a class="btn btn-transparent dropdown-toggle" href="#" id="dropdown_2"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        サービス
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdown_2">
                        <li class="dropdown-item" :key="index" v-for="(i, index) in options2">
                            <router-link :to="i.href">{{ i.value }}</router-link>
                        </li>
                    </ul>
                </div>

                <div class="">
                    <a class="btn btn-white dropdown-toggle" href="#" id="owner-dropdown"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        サービスプロバイダー
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="owner-dropdown">
                        <li class="dropdown-item">ID : {{ id }}</li>
                        <li class="dropdown-item">
                            <router-link :to="{ name: 'Login' }">Login</router-link>
                        </li>
                        <li class="dropdown-item">
                            <router-link :to="{ name: 'Order' }">Order</router-link>
                        </li>
                        <li class="dropdown-item">
                            <router-link :to="{ name: 'OrderDetail' }">Order Detail</router-link>
                        </li>
                        <li class="dropdown-item">
                            <router-link :to="{ name: 'Map' }" >Map</router-link>
                        </li>
                        <li class="dropdown-item">
                            <router-link :to="{ name: 'List' }" >List</router-link>
                        </li>
                        <li class="dropdown-item" :key="index" v-for="(i, index) in options3">
                            <router-link :to="i.href">{{ i.value }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <nav class="sidebar">
            <h2 class="sidebar-title">IDX</h2>
            <ul class="">
                <li :key="index" v-for="(item, index) in menu" class="level0" aria-expanded="false">
                    <a v-if="item.data.length > 0" data-toggle="collapse" :href="toHref(index)"><span>{{ item.name }}</span></a>
                    <router-link v-if="item.data.length === 0" :to="item.href"><span>{{ item.name }}</span></router-link>
                    <ul :class="toClass(index)" class="collapse" v-if="item.data.length > 0">
                        <li :key="index2" class="level1" v-for="(i, index2) in item.data">
                            <router-link :to="'/'+i.href">
                                <i class="fa fa-barcode"></i><span>{{ i.value }}</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "AppHeader",
        data() {
            return {
                title: "IDX",
                id: "NEI00000001",
                options1: [
                    {value: '契約企業情報', href: '#'},
                    {value: 'アカウント', href: '#'}
                ],
                options2: [
                    {value: 'アカウント', href: '#'},
                    {value: 'パスワード変更', href: '#'},
                    {value: 'ログアウト', href: '#'}
                ],
                options3: [
                    {value: '契約企業情報', href: '#'},
                    {value: 'アカウント', href: '#'},
                    {value: 'パスワード変更', href: '#'},
                    {value: 'ログアウト', href: '#'}
                ],
                menu: [
                    {
                        name: 'コネクティビィティ',
                        href: '#',
                        data: [
                            {value: 'ELTRES', href: 'list'},
                            {value: 'ZETA', href: 'list'},
                            {value: 'LoRa', href: 'list'},
                        ]
                    },
                    {
                        name: '注文',
                        href: '#',
                        data:[
                            {value: 'コネクティビィティ契約一覧', href: 'order'},
                            {value: 'ツール契約一覧', href: 'order/detail'},
                        ]
                    },
                    {
                        name: 'アカウント管理',
                        href: '#',
                        data:[
                            {value: 'アカウント', href: 'account'},
                        ]
                    },
                    {
                        name: '利用料金',
                        href: '#',
                        data:[
                            {value: '利用料金', href: 'fee'},
                            {value: 'ロール', href: 'bill'},
                        ]
                    },
                    {
                        name: 'お知らせ',
                        href: '#',
                        data:[
                            {value: 'お知らせ一覧', href: 'notice'},
                            {value: 'お知らせ情報', href: 'notice/detail'},
                        ]
                    },
                    {
                        name: '問い合わせ',
                        href: '#',
                        data:[
                            {value: '問い合わせ一覧', href: 'question'},
                            {value: '問い合わせ情報', href: 'question/detail'},
                        ]
                    },
                ],
            };
        },
        methods: {
            toHref: function (index) {
                return ".menu_" + index.toString();
            },
            toClass: function (index) {
                return "menu_" + index.toString();
            }
        }

    }
</script>
