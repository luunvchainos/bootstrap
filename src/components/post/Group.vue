<template>
    <div class="container-fluid page_detail">
        <!-- Title -->
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-4 border-bottom">
            <h5 class="page-title">ELTRESグループ一覧</h5>
            <div>
                <router-link class="btn btn-sm btn-primary mr-2" :to="{ name: 'Addition' }">グループ追加</router-link>
                <router-link class="btn btn-sm btn-secondary" :to="{ name: 'List' }">戻る</router-link>
            </div>
        </div>
        <div class="card-header w-100"><h6>検索条件</h6></div>
        <div class="top-content">
            <div class="card-title d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
                <div class="form-inline">
                    <label>グループID</label>
                    <input class="form-control max-w-150" type="text">
                </div>
                <div class="form-inline">
                    <label>グループ名</label>
                    <input class="form-control max-w-150" type="text">
                </div>
                <div class="btn-toolbar">
                    <div class="btn-group">
                        <button class="btn btn-sm btn-secondary">検索</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="middle-content">
            <div class="display-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-3">
                <div class="form-inline">
                    <span>全<span id="view-all-page">0</span>件中<span id="view-first-page">0</span>～<span id="view-last-page">0</span>件を表示</span>
                </div>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="form-inline">
                        <label>表示件数</label>
                        <select class="form-control" id="select-view-count" style="font-size: 14px;">
                            <option>10</option>
                            <option>50</option>
                            <option>100</option>
                            <option>500</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="sampletable table-responsive">
                <div id="sort-coloum" data-id="service-provider-id" data-text="サービスプロバイダーID" data-type="ASC"></div>
                <table id="select-view" class="table table-striped table-headerfixed">
                    <thead>
                    <tr>
                        <th width="30%">グループID</th>
                        <th width="30%">グループ名</th>
                        <th width="40%">説明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><router-link :to="{ name: 'GroupDetail' }">GROUP0001</router-link></td>
                        <td>グループA</td>
                        <td>テストグループその１</td>
                    </tr>
                    <tr>
                        <td><router-link :to="{ name: 'GroupDetail' }">GROUP0002</router-link></td>
                        <td>グループB</td>
                        <td>テストグループその2</td>
                    </tr>
                    <tr>
                        <td><router-link :to="{ name: 'GroupDetail' }">GROUP0003</router-link></td>
                        <td>グループC</td>
                        <td>テストグループその3</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="form-inline">
                <div class="btn-group mr-2">
                    <button id="search-btn-first" class="btn btn-sm btn-outline-secondary">先頭</button>
                </div>
                <div class="btn-group mr-2">
                    <button id="search-btn-previous" class="btn btn-sm btn-outline-secondary">前のページ</button>
                </div>
                <div class="btn-group mr-2">
                    <button id="search-btn-next" class="btn btn-sm btn-outline-secondary">次のページ</button>
                </div>
                <div class="btn-group mr-2">
                    <button id="search-btn-last" class="btn btn-sm btn-outline-secondary">最後</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Group",
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
