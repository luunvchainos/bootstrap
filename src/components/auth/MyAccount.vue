<template>
    <div class="container-fluid">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-4 border-bottom">
                <span class="page-title">Myアカウント</span>
                <div class="float-right">
                    <button class="btn btn-sm btn-primary mr-2" data-toggle="modal" data-target="#csvModal">認証基盤に連携</button>
                    <button class="btn btn-sm btn-primary mr-2">保存</button>
                    <button type="button" class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#myModal">退会</button>
                </div>
            </div>
            <div>
                <div class="card-header w-100">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" v-model="checkEdit">
                        <label class="custom-control-label" for="customCheck1">変更する</label>
                    </div>
                </div>
                <div class="card-body">
                    <form id="my-account-form">
                        <div class="row">
                            <div class="col-sm">
                                <table class="table">
                                    <tbody><tr>
                                        <th width="30%">メールアドレス</th>
                                        <td v-if="!checkEdit">hogehoge@gmcenter.co.jp</td>
                                        <td v-if="checkEdit">
                                            <input class="form-control" value="hogehoge@gmcenter.co.jp" name="" type="text" size="256">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>アカウント名</th>
                                        <td v-if="!checkEdit">苗字氏名</td>
                                        <td v-if="checkEdit">
                                            <input class="form-control" value="苗字氏名" name="contractFamilyNameKanji" type="text" size="15">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>パスワード</th>
                                        <td>
                                            <router-link class="btn btn-sm btn-primary" :to="{ name: 'PasswordChange' }">パスワード変更</router-link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>多要素認証</th>
                                        <td v-if="!checkEdit">無効</td>
                                        <td v-if="checkEdit">
                                            <input type="radio" name="q4" value="有効"> 有効
                                            <input type="radio" name="q4" value="無効"> 無効
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="text-center mb-md-4">
                    <button class="btn btn-primary">保存</button>
                </div>
            </div>
            <!-- モーダルの設定 -->
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">退会確認</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="閉じる">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>退会しますか？</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary mr-2" data-dismiss="modal">閉じる</button>
                            <router-link class="btn btn-primary" :to="{ name: 'Login' }">退会</router-link>
                        </div><!-- /.modal-footer -->
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->
            <!-- 認証基盤連携モーダルの設定 -->
            <div class="modal fade" id="csvModal" tabindex="-1" role="dialog" aria-labelledby="csvModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">認証基盤連携確認</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="閉じる">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>認証基盤に連携しますか？</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary mr-2" data-dismiss="modal">閉じる</button>
                            <router-link class="btn btn-primary" :to="{ name: 'MyAccount' }">退会</router-link>
                        </div><!-- /.modal-footer -->
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->
    </div>
</template>

<script>
    export default {
        name: "MyAccount",
        data() {
            return {
                checkEdit: false,
            }
        }
    }
</script>
