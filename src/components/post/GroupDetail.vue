<template>
    <div class="container-fluid page_detail">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-4 border-bottom">
                <h5 class="page-title">ELTRESグループ設定</h5>
                <div class="float-right">
                    <router-link class="btn btn-sm btn-secondary mr-2" :to="{ name: 'Group' }">戻る</router-link>
                    <button type="button" class="btn btn-sm btn-outline-secondary mr-2" data-toggle="modal" data-target="#devicesModal">デバイス一覧</button>
                    <button class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#myModal">削除</button>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between pb-2" style="font-size: 14px;">
                        <div>
                            グループID：<span>GROUP001</span>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck3">
                            <label class="custom-control-label" for="customCheck3" name="custom-check">変更する</label>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="accordion" id="accordion" role="tablist" aria-multiselectable="true">
                        <div class="card">
                            <div class="card-header" role="tab" id="headingOne">
                                <div class="d-flex justify-content-between pb-2" style="font-size: 14px;">
                                    <a class="text-body stretched-link text-decoration-none" data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne">グループ詳細
                                    </a>

                                </div>
                            </div>
                            <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                <div class="card-body">
                                    <form>
                                        <div class="row">
                                            <div class="col-sm">
                                                <table class="table">
                                                    <tbody><tr>
                                                        <th width="30%">グループ名</th>
                                                        <td width="70%">
                                                            <span class="form-view">GROUP001</span>
                                                            <input type="text" class="form-control form-input" value="GROUP001">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th width="30%">説明</th>
                                                        <td width="70%">
                                                            <span class="form-view">テストグループその１</span>
                                                            <input type="text" class="form-control form-input" value="テストグループその１">
                                                        </td>
                                                    </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" role="tab" id="headingTwo">
                                <div class="d-flex justify-content-between pb-2" style="font-size: 14px;">
                                    <a class="collapsed text-body stretched-link text-decoration-none" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">データ収集設定</a>
                                </div>
                            </div>
                            <div id="collapseTwo" class="collapse show" role="tabpanel" aria-labelledby="headingTwo">
                                <div class="card-body">
                                    <form>
                                        <div class="row">
                                            <div class="col-sm">
                                                <table class="table">
                                                    <tbody><tr>
                                                        <th width="30%">収集ルール</th>
                                                        <td width="70%">
                                                            <span class="form-view">1日1回データ取得回線</span><select class="form-control custom-select form-input">
                                                            <option value="contract1">1日1回データ取得回線</option>
                                                            <option value="contract2">1時間1回データ取得回線</option>
                                                            <option value="contract3">半日1回データ取得回線</option>
                                                            <option value="contract4">3分1回データ取得回線</option>
                                                            <option value="contract5">5分1回データ取得回線</option>
                                                            <option value="contract6">設定しない</option>
                                                        </select>
                                                        </td>
                                                    </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" role="tab">
                                <div class="d-flex justify-content-between pb-2" style="font-size: 14px;">
                                    <a class="collapsed text-body" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">データ可視化設定</a>
                                </div>
                            </div>
                            <div class="collapse show" role="tabpanel" aria-labelledby="headingThree">
                                <div class="card-body">
                                    <form>
                                        <div class="row">
                                            <div class="col-sm">
                                                <table class="table">
                                                    <tbody><tr>
                                                        <th width="30%">カスタマイズ商品名</th>
                                                        <td id="serviceProviderId" width="70%">
                                                            <span class="form-view">バッテリー残量グラフ(月間)</span> <select class="form-control custom-select form-input">
                                                            <option value="contract1">バッテリー残量グラフ(月間)</option>
                                                            <option value="contract2">バッテリー残量グラフ(年間)</option>
                                                            <option value="contract3">回線状態（例）</option>
                                                            <option value="contract4">設定しない</option>
                                                        </select>
                                                        </td>
                                                    </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <!-- 監視設定 -->
                        <div class="card">
                            <div class="card-header" role="tab">
                                <div class="d-flex justify-content-between pb-2" style="font-size: 14px;">
                                    <a class="collapsed text-body" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">監視設定</a>
                                </div>
                            </div>
                            <div class="collapse show" role="tabpanel" aria-labelledby="headingThree">
                                <div class="card-body">
                                    <form>
                                        <div class="row">
                                            <div class="col-sm">
                                                <table class="table">
                                                    <tbody><tr>
                                                        <th width="70%">
                                                            <div class="customCheck1">
                                                                <div class="custom-control custom-checkbox">
                                                                    <input class="custom-control-input" type="checkbox" id="monitoring-preference-check" disabled="">
                                                                    <label class="custom-control-label" for="monitoring-preference-check">最新のデータが以下の時間を超えたらメール送信する</label>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td width="10%">
                                                            <input class="form-control" id="eltres-form-1" name="contractFirstNameKanji" type="tel" value="">
                                                        </td>
                                                        <td width="10%">
                                                            <select class="form-control custom-select" id="eltres-form-2" size="1">
                                                                <option></option>
                                                                <option>分</option>
                                                                <option>時間</option>
                                                                <option>日</option>
                                                                <option>週</option>
                                                                <option>月</option>
                                                                <option>年</option>
                                                            </select>
                                                        </td>
                                                        <td width="10%">
                                                            <span id="monitoring-preference-num">1</span>
                                                            <span id="monitoring-preference-rank">日</span>
                                                            <span>以上前</span>
                                                        </td>
                                                    </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <div class="justify-content-around d-inline-block">
                                                <button type="button" class="btn btn-secondary mr-2 ml-2" onclick="location.href='./eltres-group.html'">戻る</button>
                                                <button id="modify-btn2" type="button" class="btn btn-primary d-none">保存</button>
                                                <button id="modify-btn" type="button" class="btn btn-secondary mr-2 ml-2" data-toggle="modal" data-target="#myModal">削除</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="devicesModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-keyboard="false" data-backdrop="static">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                デバイス一覧 グループID：<span>GROUP001</span>
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="閉じる">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="sampletable table-responsive">
                                    <div></div>
                                    <table id="select-view" class="table table-striped table-headerfixed">
                                        <thead>
                                        <tr>
                                            <th width="15%">LfourID</th>
                                            <th width="20%">デバイス名</th>
                                            <th width="20%">所属グループ</th>
                                            <th width="15%">ステータス</th>
                                            <th width="15%">配送状態</th>
                                            <th width="15%">有効期限</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>0001</td>
                                            <td>ELTRESデバイス01</td>
                                            <td>グループA</td>
                                            <td>使用前</td>
                                            <td>配送中</td>
                                            <td>2019-12-31</td>
                                        </tr>
                                        <tr>
                                            <td>0001</td>
                                            <td>ELTRESデバイス01</td>
                                            <td>グループA</td>
                                            <td>使用前</td>
                                            <td>配送中</td>
                                            <td>2019-12-31</td>
                                        </tr>
                                        <tr>
                                            <td>0001</td>
                                            <td>ELTRESデバイス01</td>
                                            <td>グループA</td>
                                            <td>使用前</td>
                                            <td>配送中</td>
                                            <td>2019-12-31</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- モーダルの設定 -->
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">削除確認</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="閉じる">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>このグループを削除してよろしいですか？</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
                            <button type="button" id="modal-add-btn" class="btn btn-primary" onclick="location.href='./eltres-group.html'">削除</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: "GroupDetail",
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
