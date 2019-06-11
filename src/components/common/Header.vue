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
                        <li class="dropdown-item" v-for="i in options1">
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
                        <li class="dropdown-item" v-for="i in options2">
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
                            <router-link :to="{ name: 'Map' }" >Map</router-link>
                        </li>
                        <li class="dropdown-item">
                            <router-link :to="{ name: 'List' }" >List</router-link>
                        </li>
                        <li class="dropdown-item" v-for="i in options3">
                            <router-link :to="i.href">{{ i.value }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <nav class="sidebar">
            <h2 class="sidebar-title">IDX</h2>
            <ul class="">
                <li v-for="(item, index) in menu" class="level0" aria-expanded="false"><a data-toggle="collapse" :href="toHref(index)"><span>{{ item.name }}</span></a>
                    <ul :class="toClass(index)" class="collapse">
                        <li class="level1" v-for="i in item.data">
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
                pagination: {
                    current_page: [
                        {name: 'name'},
                        {
                            c: 'a'
                        },
                        {
                            c: 'a'
                        }
                    ]
                },
                menu: [
                    {
                        name: 'ELTRES',
                        data: [

                            {value: 'ELTRES', href: 'list'},
                            {value: 'ZETA', href: '#'},
                            {value: 'LoRa', href: '#'},
                            {value: 'Cat-M1', href: '#'},
                            {value: 'ネッツワイヤレス', href: '#'},
                            {value: 'NGN-VPN', href: '#'}
                        ]},
                    {
                        name: 'ELTRES',
                        data: [
                            {value: 'ELTRES', href: 'list'},
                            {value: 'ZETA', href: '#'},
                            {value: 'LoRa', href: '#'},
                            {value: 'Cat-M1', href: '#'},
                            {value: 'ネッツワイヤレス', href: '#'},
                            {value: 'NGN-VPN', href: '#'}
                        ]},
                    {
                        name: 'ELTRES',
                        data:[
                            {value: 'ELTRES', href: 'list'},
                            {value: 'ZETA', href: '#'},
                            {value: 'LoRa', href: '#'},
                            {value: 'Cat-M1', href: '#'},
                            {value: 'ネッツワイヤレス', href: '#'},
                            {value: 'NGN-VPN', href: '#'}
                        ]},
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
