<template>
    <div class="container-fluid page_detail">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-4 border-bottom">
            <h5 class="page-title">ELTRES最新データ</h5>
            <router-link class="btn btn-sm btn-secondary" :to="{ name: 'Detail' }">戻る</router-link>
        </div>
        <div class="card">
            <div class="card-header">
                <div class="d-flex justify-content-between">
                    <h6>ELTRES最新データ</h6>
                    <div class="mb-md-0">
                        <div class="btn-group mr-2"></div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <form id="service-provider-form">
                    <div class="row">
                        <div class="col-sm">
                            <table class="table">
                                <tbody><tr>
                                    <th width="40%">受信日時</th>
                                    <td width="60%">2019-02-10 16:25:48.233</td>
                                </tr>
                                <tr>
                                    <th width="40%">バッテリー残量</th>
                                    <td width="100%" class="form-view">250</td>
                                </tr>
                                <tr>
                                    <th width="40%">緯度</th>
                                    <td width="100%" class="">35</td>
                                </tr>
                                <tr>
                                    <th width="40%">経度</th>
                                    <td width="100%" class="">135</td>
                                </tr>
                                <tr>
                                    <th width="40%">アクティベート日時</th>
                                    <td width="100%" class="">2019-01-01</td>
                                </tr>
                                <tr>
                                    <th width="40%">
                                        配送状態<span color="red"></span>
                                    </th>
                                    <td width="100%" class="">配送中</td>
                                </tr>
                                <tr>
                                    <th width="40%">登録日時</th>
                                    <td width="100%" class="">2018-12-27 10:20:12</td>
                                </tr>
                                <tr>
                                    <th width="40%">有効期限</th>
                                    <td width="100%" class="">2019-12-31</td>
                                </tr>
                                <tr>
                                    <th width="40%">ペイロード項目</th>
                                    <td width="100%" class="">バッテリー残量</td>
                                </tr>
                                <tr>
                                    <th width="40%">ペイロード値</th>
                                    <td width="100%" class="">265</td>
                                </tr>
                                </tbody></table>
                        </div>
                    </div>
                </form>
                <div class="text-center">
                    <div class="justify-content-around d-inline-block">
                        <router-link class="btn btn-sm btn-secondary" :to="{ name: 'Detail' }">戻る</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Data",
        components: {},

        data() {
            return {
                titlePage: 'ELTRESデバイス一覧',
            }
        },

        methods: {},

        mounted: function () {
        },
    }
</script>
