<template>
    <div class="container-fluid">
        <!-- Title -->
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-4 border-bottom">
            <h5 class="page-title">利用料金（明細</h5>
            <div class="float-right">
                <router-link class="btn btn-sm btn-secondary mr-2" :to="{ name: 'Fee' }">戻る</router-link>
                <input type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#myModal"
                       value="エクスポート">
            </div>
        </div>
        <div>
            <div class="card-header w-100">支払者情報</div>
            <div class="card-body">
                <div
                    class="card-title d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 ">
                    <table class="table">
                        <tbody>
                        <tr>
                            <th width="20%">企業名</th>
                            <td width="80%">○○株式会社</td>
                        </tr>
                        <tr>
                            <th>部署名</th>
                            <td>IoTビジネス推進本部</td>
                        </tr>
                        <tr>
                            <th>氏名</th>
                            <td>山田太郎</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div>
            <div class="card-header w-100">支払明細</div>
            <div class="card-body">
                <div class="sampletable table-responsive">
                    <div id="sort-coloum" data-id="service-provider-id" data-text="サービスプロバイダーID" data-type="ASC"></div>
                    <table id="select-view" class="table table-striped table-headerfixed">
                        <thead>
                        <tr>
                            <th id="service-provider-id" width="50%">商品名</th>
                            <th id="company-name" width="50%">金額</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="twidth50">1日1回データ取得回線</td>
                            <td class="twidth50">100円</td>
                        </tr>
                        <tr>
                            <td class="twidth50">1時間1回データ取得回線</td>
                            <td class="twidth50">100円</td>
                        </tr>
                        <tr>
                            <td class="twidth50">半日1回データ取得回線</td>
                            <td class="twidth50">100円</td>
                        </tr>
                        <tr>
                            <td class="twidth50">バッテリー残量グラフ(月間)</td>
                            <td class="twidth50">100円</td>
                        </tr>
                        <tr>
                            <td class="twidth50">バッテリー残量グラフ(年間)</td>
                            <td class="twidth50">100円</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">エクスポート確認</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="閉じる">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="col-sm">
                            <p>ご利用料金明細のCSVファイルをエクスポートします。<br>よろしいですか？</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
                        <button type="button" id="modal-add-btn" class="btn btn-primary" data-toggle="modal"
                                data-dismiss="modal" data-target="#modal">確認
                        </button>
                    </div><!-- /.modal-footer -->
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div>
    </div>
</template>

<script>
    export default {
        name: "FeeDetail",
        components: {},
        data() {
            return {}
        }
    }
</script>
