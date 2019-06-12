<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-4 border-bottom">
            <h5 class="page-title">問い合わせ詳細</h5>
            <div class="float-right">
                <router-link class="btn btn-sm btn-secondary mr-2" :to="{ name: 'Question' }">戻る</router-link>
                <button type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#myModal">コメント追加</button>
            </div>
        </div>
        <div>
            <div class="card-header w-100">
                <div class="d-flex justify-content-between pb-2" style="font-size:14px;">
                    <span>問い合わせ情報</span>
                </div>
            </div>
            <div class="card-body">
                <form id="inquiry-detail-form">
                    <div class="row">
                        <div class="col-sm">
                            <table class="table">
                                <tbody>
                                <tr>
                                    <th width="20%">件名</th>
                                    <td width="80%" class="form-view" id="view-contract-first-name-kanji">△△契約
                                        終了に関する問い合わせ
                                    </td>
                                </tr>
                                <tr>
                                    <th>問い合わせ日時</th>
                                    <td>2019-12-31 17:00</td>
                                </tr>
                                <tr>
                                    <th>ステータス</th>
                                    <td>完了</td>
                                </tr>
                                <tr>
                                    <th>対象サービス</th>
                                    <td>XXXXサービス</td>
                                </tr>
                                <tr>
                                    <th>対象デバイスID</th>
                                    <td>D000000001</td>
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
                                    <td width="100%">△△契約の契約終了はいつですか。</td>
                                </tr>
                                <tr>
                                    <th width="40%">問い合わせ回答</th>
                                </tr>
                                <tr>
                                    <td width="100%">△△契約の契約満了は2020年10月15日となります。</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </form>
                <div class="text-center">
                    <router-link class="btn btn-secondary mr-2 ml-2" :to="{ name: 'Question' }">戻る</router-link>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">コメント追加
                    </button>
                </div>
            </div>
        </div>

        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">追加コメント</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="閉じる">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <textarea class="w-100" name="add-inquiry-comment-text" rows="5"></textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
                        <router-link class="btn btn-primary" :to="{ name: 'QuestionAdd' }">追加</router-link>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "QuestionDetail",
        components: {},
        data() {
            return {}
        }
    }
</script>
