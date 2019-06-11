<template>
    <div class="container-fluid page_detail">
        <div class="display-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-4 border-bottom">
            <h5 class="page-title">ELTRESグループ追加</h5>
            <div>
                <router-link class="btn btn-sm btn-secondary mr-2" :to="{ name: 'List' }">戻る</router-link>
                <button type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#myModal">登録</button>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h6>ELTRESグループ情報</h6>
            </div>
            <div class="card-body">
                <table class="table">
                    <tbody>
                    <tr>
                        <th width="40%">グループ名</th>
                        <td width="60%" class="">
                            <input type="text" class="form-control " value="">
                        </td>
                    </tr>
                    <tr>
                        <th>説明</th>
                        <td>
                            <input type="text" class="form-control " value="">
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="text-center">
                    <router-link class="btn btn-secondary mr-2" :to="{ name: 'List' }">戻る</router-link>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">登録</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Addition",
        components: {},

        data() {
            return {
                titlePage: 'ELTRESグループ追加',
            }
        },

        methods: {},

        mounted: function () {
        },
    }
</script>
