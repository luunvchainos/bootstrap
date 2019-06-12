<template>
    <div class="container-fluid">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-4 border-bottom">
                <h5 class="page-title">問い合わせ一覧</h5>
                <router-link class="btn btn-sm btn-primary" :to="{ name: 'QuestionAddition' }">新規登録</router-link>
            </div>
            <div>
                <div class="card-header w-100">問い合わせ一覧</div>
                <div class="card-body">
                    <div class="card-title d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 " style="font-size:14px;">
                        <div class="form-inline">
                            <label>件名</label>
                            <input class="form-control" id="subject" type="text" size="30">
                            <div class="block">
                                <span class="demonstration mr-2 ml-2">開始日付</span>
                                <el-date-picker
                                    v-model="value1"
                                    type="date"
                                    placeholder="---- --">
                                </el-date-picker>
                            </div>
                            <div class="block">
                                <span class="demonstration ml-2 mr-2">～終了日付</span>
                                <el-date-picker
                                    v-model="value1"
                                    type="date"
                                    placeholder="---- --">
                                </el-date-picker>
                            </div>
                            <label>ステータス</label>
                            <select class="form-control custom-select" id="add-identification-form-2" size="1">
                                <option></option>
                                <option>登録</option>
                                <option>受付</option>
                                <option>対処中</option>
                                <option>完了</option>
                            </select>
                        </div>
                        <div class="btn-toolbar">
                            <div class="btn-group mr-2">
                                <button id="search-btn" class="btn btn-sm btn-secondary">検索</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-title d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 " style="font-size:14px;">
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
                                <th id="inquiry-id" width="10%">ID</th>
                                <th id="inquiry-subject" width="50%">件名</th>
                                <th id="inquiry-time" width="20%">問い合わせ日時</th>
                                <th id="inquiry-status" width="20%">ステータス</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><router-link :to="{ name: 'QuestionDetail' }">0123456789</router-link></td>
                                <td>○○契約に関する問い合わせ</td>
                                <td>2019-03-31 15:00</td>
                                <td><span>登録</span></td>
                            </tr>
                            <tr>
                                <td><router-link :to="{ name: 'QuestionDetail' }">0123456789</router-link></td>
                                <td>△△契約に関する問い合わせ</td>
                                <td>2019-06-30 12:00</td>
                                <td><span>受付</span></td>
                            </tr>
                            <tr>
                                <td><router-link :to="{ name: 'QuestionDetail' }">0123456789</router-link></td>
                                <td>システム停止に関する問い合わせ</td>
                                <td>2019-09-30 10:00</td>
                                <td><span>対処中</span></td>
                            </tr>
                            <tr>
                                <td><router-link :to="{ name: 'QuestionDetail' }">0123456789</router-link></td>
                                <td>△△契約 終了に関する問い合わせ</td>
                                <td>2019-12-31 17:00</td>
                                <td><span>完了</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="form-inline">
                        <button class="btn btn-sm btn-outline-secondary mr-2">先頭</button>
                        <button class="btn btn-sm btn-outline-secondary mr-2">前のページ</button>
                        <button class="btn btn-sm btn-outline-secondary mr-2">次のページ</button>
                        <button class="btn btn-sm btn-outline-secondary">最後</button>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: "Question",
        components: {},
        data() {
            return {
                value1: '',
                value2: '',
            }
        }
    }
</script>
