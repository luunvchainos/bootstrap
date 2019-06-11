<template>
    <div class="container-fluid page_detail">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-4 border-bottom">
            <h5 class="page-title">ELTRESデバイス詳細</h5>
            <div>
                <router-link class="btn btn-sm btn-secondary mr-2" :to="{ name: 'Detail' }">戻る</router-link>
                <button id="modify-btn1" type="button" class="btn btn-sm btn-primary" onclick="changeSatatus()">保存</button>
                <router-link class="btn btn-sm btn-outline-secondary" :to="{ name: 'Data' }">最新データ</router-link>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <div class="d-flex justify-content-between">
                    <h6>ELTRESデバイス詳細</h6>
                    <div class="mb-md-0">
                        <div class="btn-group mr-2">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1">変更する</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <form id="service-provider-form">
                    <div class="row">
                        <div class="col-sm">
                            <table class="table">
                                <tbody>
                                <tr>
                                    <th width="40%">LfourID</th>
                                    <td width="60%">0001</td>
                                </tr>
                                <tr>
                                    <th width="40%">
                                        デバイス名<span color="red">*</span>
                                    </th>
                                    <td width="100%" class="form-view">ELTRESデバイス01</td>
                                    <td width="100%" class="form-input" id="input" style="display: none;">
                                        <input class="form-control" value="ELTRESデバイス01" name="contractFamilyNameKanji"
                                               type="text" size="15" style="font-size: 14px;">
                                    </td>
                                </tr>
                                <tr>
                                    <th width="40%">所属グループ</th>
                                    <td width="100%" class="">グループA</td>
                                </tr>
                                <tr>
                                    <th width="40%">ステータス</th>
                                    <td width="100%" class="">使用前</td>
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
                                    <th width="40%">
                                        有効期限<span color="red"></span>
                                    </th>
                                    <td width="100%" class="">2019-12-31</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </form>
                <div class="text-center">
                    <div class="justify-content-around d-inline-block">
                        <button id="modify-btn" type="button" class="btn btn btn-secondary">戻る</button>
                        <button id="modify-btn2" type="button" class="btn btn btn-primary d-none">保存</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Detail",
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
