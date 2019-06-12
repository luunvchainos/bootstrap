<template>
    <div class="container-fluid">
        <div class="display-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-4 border-bottom">
            <h5 class="page-title">請求書一覧</h5>
        </div>
        <div>
            <div class="card-header w-100">請求書一覧</div>
            <div class="card-body">
                <div class="card-title display-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 ">
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
                                v-model="value1"
                                type="month"
                                placeholder="---- --">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="float-right">
                        <div class="btn-group mr-2">
                            <button class="btn btn-sm btn-secondary">検索</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div>
            <div class="card-body">
                <div class="card-title display-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 ">
                    <div class="form-inline">
                        <span>全<span id="view-all-page">5</span>件中<span id="view-first-page">1</span>～<span
                            id="view-last-page">5</span>件を表示</span>
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
                            <th width="10%">請求月</th>
                            <th width="30%">請求内容</th>
                            <th width="15%">金額</th>
                            <th width="20%">支払方法</th>
                            <th width="25%"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>2019/4</td>
                            <td>2019年03月 利用料</td>
                            <td>￥903</td>
                            <td>クレジット</td>
                            <td>
                                <button class="btn btn-sm btn-primary">PDFダウンロード</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2019/3</td>
                            <td>2019年02月 利用料</td>
                            <td>￥1,903</td>
                            <td>請求書</td>
                            <td>
                                <button class="btn btn-sm btn-primary">PDFダウンロード</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2019/2</td>
                            <td>2019年01月 利用料</td>
                            <td>￥335</td>
                            <td>クレジット</td>
                            <td>
                                <button class="btn btn-sm btn-primary">PDFダウンロード</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2019/1</td>
                            <td>2018年12月 利用料</td>
                            <td>￥103</td>
                            <td>請求書</td>
                            <td>
                                <button class="btn btn-sm btn-primary">PDFダウンロード</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2018/12</td>
                            <td>2018年11月 利用料</td>
                            <td>￥21,903</td>
                            <td>クレジット</td>
                            <td>
                                <button class="btn btn-sm btn-primary">PDFダウンロード</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="form-inline">
                        <button class="btn btn-sm btn-outline-secondary mr-2">先頭</button>
                        <button class="btn btn-sm btn-outline-secondary mr-2">前のページ</button>
                        <button class="btn btn-sm btn-outline-secondary mr-2">次のページ</button>
                        <button class="btn btn-sm btn-outline-secondary mr-2">最後</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Bill",
        data() {
            return {
                value1: '',
                value2: '',
            }
        }
    }
</script>
