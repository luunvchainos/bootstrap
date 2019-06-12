<template>
    <div class="container-fluid">
        <!-- Title -->
        <div
            class="display-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-4 border-bottom">
            <h5 class="page-title">利用料金（合計）</h5>
        </div>
        <div>
            <div class="card-header w-100">今月のご利用料金 2019 年 04 月分</div>
            <div class="card-body">
                <div
                    class="card-title d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
                    <h2>500円</h2>
                </div>
            </div>
        </div>
        <div>
            <div class="card-header w-100">過去のご利用料金</div>
            <div class="card-body">
                <div
                    class="card-title d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
                    <div class="form-inline">
                        <div class="block">
                            <span class="demonstration">開始日</span>
                            <el-date-picker
                                v-model="value1"
                                type="month"
                                placeholder="---- --">
                            </el-date-picker>
                        </div>
                        <div class="block">
                            <span class="demonstration">～終了日</span>
                            <el-date-picker
                                v-model="value2"
                                type="month"
                                placeholder="---- --">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="float-right">
                        <div class="btn-group mr-2">
                            <button id="search-btn" class="btn btn-sm btn-secondary">検索</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div
                    class="card-title d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 ">
                    <div class="form-inline">
                        <span>全<span id="view-all-page">5</span>件中<span id="view-first-page">1</span>～<span
                            id="view-last-page">5</span>件を表示</span>
                    </div>
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <div class="form-inline">
                            <label>表示件数</label>
                            <select class="form-control" id="select-view-count">
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
                            <th id="service-provider-id" width="50%">年月</th>
                            <th id="company-name" width="50%">ご利用金額</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="twidth50">
                                <router-link :to="{ name: 'FeeDetail' }">2019-04</router-link>
                            </td>
                            <td class="twidth50">500円</td>
                        </tr>
                        <tr>
                            <td class="twidth50">
                                <router-link :to="{ name: 'FeeDetail' }">2019-03</router-link>
                            </td>
                            <td class="twidth50">700円</td>
                        </tr>
                        <tr>
                            <td class="twidth50">
                                <router-link :to="{ name: 'FeeDetail' }">2019-02</router-link>
                            </td>
                            <td class="twidth50">500円</td>
                        </tr>
                        <tr>
                            <td class="twidth50">
                                <router-link :to="{ name: 'FeeDetail' }">2019-01</router-link>
                            </td>
                            <td class="twidth50">500円</td>
                        </tr>
                        <tr>
                            <td class="twidth50">
                                <router-link :to="{ name: 'FeeDetail' }">2018-12</router-link>
                            </td>
                            <td class="twidth50">1000円</td>
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
        name: "Fee",
        components: { },
        data() {
            return {
                value1: '',
                value2: '',
            }
        }
    }
</script>
