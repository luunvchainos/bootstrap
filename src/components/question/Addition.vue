<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-4 border-bottom">
            <h5 class="page-title">問い合わせ新規登録</h5>
            <div class="float-right">
                <router-link class="btn btn-sm btn-secondary mr-2" :to="{ name: 'Question' }">戻る</router-link>
                <button type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#myModal">登録</button>
            </div>
        </div>
        <div>
            <div class="card-header w-100">新規登録</div>
            <div class="card-body">
                <form id="inquiry-detail-form">
                    <div class="row">
                        <div class="col-sm">
                            <table class="table">
                                <tbody>
                                <tr>
                                    <th width="20%">件名</th>
                                    <td width="80%"><input class="form-control"></td>
                                </tr>
                                <tr>
                                    <th width="20%">対象サービス</th>
                                    <td width="80%"><input class="form-control">
                                    </td>
                                </tr>
                                <tr>
                                    <th width="20%">対象デバイスID</th>
                                    <td width="80%">
                                        <span class="mr-2">D000000001</span>
                                        <button type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#selectModal">選択</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <table class="table">
                                <tbody>
                                <tr>
                                    <th width="40%">問い合わせ内容</th>
                                </tr>
                                <tr>
                                    <td width="100%"><textarea id="add-inquiry-form-content" name="inquiryAnswerText"
                                                               cols="170" rows="5"></textarea></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </form>
                <div class="text-center">
                    <div class="justify-content-around d-inline-block">
                        <router-link class="btn btn-secondary mr-2" :to="{ name: 'Question' }">戻る</router-link>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">登録</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 登録確認モーダル -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">登録確認</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="閉じる">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>問い合わせを登録しますか？</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary mr-2" data-dismiss="modal">閉じる</button>
                        <router-link class="btn btn-primary" :to="{ name: 'QuestionAdditionCompletion' }">登録</router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- デバイス一覧選択モーダル -->
        <div class="modal fade" id="selectModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             data-keyboard="false" data-backdrop="static">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">デバイス一覧選択</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="閉じる">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="p-3">
                            <div class="sampletable table-responsive">
                                <div id="sort-coloum" data-id="service-provider-id" data-text="サービスプロバイダーID"
                                     data-type="ASC"></div>
                                <label for="radio-1">
                                </label>
                                <table id="select-view" class="table table-striped table-headerfixed">
                                    <thead>
                                    <tr>
                                        <th id="select-radio" width="10%">選択</th>
                                        <th id="device-id" width="20%">デバイスID</th>
                                        <th id="service-provider-id" width="20%">機器状態</th>
                                        <th id="company-name" width="20%">回線利用状態</th>
                                        <th id="contract-family-first-name" width="30%">ステータス</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><input id="radio-1" type="radio" name="connectivity-select"></td>
                                        <td>D000000001</td>
                                        <td>正常</td>
                                        <td>利用中</td>
                                        <td></td>

                                    </tr>
                                    <tr>
                                        <td><input type="radio" name="connectivity-select"></td>
                                        <td>D000000002</td>
                                        <td>正常</td>
                                        <td>停止中</td>
                                        <td>解約済</td>
                                    </tr>
                                    <tr>
                                        <td><input type="radio" name="connectivity-select"></td>
                                        <td>D000000003</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><input type="radio" name="connectivity-select"></td>
                                        <td>D000000004</td>
                                        <td>異常</td>
                                        <td>停止中</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><input type="radio" name="connectivity-select"></td>
                                        <td>D000000005</td>
                                        <td>正常</td>
                                        <td>停止中</td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary mr-2" data-dismiss="modal">閉じる</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal">選択</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "QuestionAddition",
        components: {},
        data() {
            return {
            }
        }
    }
</script>
