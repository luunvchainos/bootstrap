<template>
    <div class="container-fluid">
        <div class="display-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-4 border-bottom">
            <h5 class="page-title">NESICからのお知らせ</h5>
        </div>
        <!-- 一覧 -->
        <div>
            <div class="card-header w-100">お知らせ一覧</div>
            <div class="card-body">
                <div
                    class="card-title d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 "
                    style="font-size:14px;">
                    <div class="form-inline">
                        <div class="block">
                            <span class="demonstration mr-2">開始日付</span>
                            <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="---- -- --">
                            </el-date-picker>
                        </div>
                        <div class="block">
                            <span class="demonstration ml-2 mr-2">～終了日付</span>
                            <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="---- -- --">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="btn-toolbar">
                        <div class="btn-group mr-2">
                            <button id="search-btn" class="btn btn-sm btn-secondary">検索</button>
                        </div>
                    </div>
                </div>
                <div
                    class="card-title d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 "
                    style="font-size:14px;">
                    <div class="form-inline">
                        <span>全<span id="view-all-page">0</span>件中<span id="view-first-page">0</span>～<span
                            id="view-last-page">0</span>件を表示</span>
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
                            <th id="subject" width="60%">件名</th>
                            <th id="notice-time" width="40%">お知らせ日時</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td width="60%"><router-link :to="{ name: 'NoticeDetail' }">システム停止のお知らせ</router-link></td>
                            <td width="40%">2019-03-31 15:00</td>
                        </tr>
                        <tr>
                            <td width="60%"><router-link :to="{ name: 'NoticeDetail' }">△△契約 終了のお知らせ</router-link></td>
                            <td width="40%">2019-06-30 12:00</td>
                        </tr>
                        <tr>
                            <td width="60%"><router-link :to="{ name: 'NoticeDetail' }">□□契約に関するお知らせ</router-link></td>
                            <td width="40%">2019-12-31 17:00</td>
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
    </div>
</template>

<script>
    export default {
        name: "Notice",
        components: {},
        data() {
            return {
                value1: '',
                value2: '',
            }
        }
    }
</script>
