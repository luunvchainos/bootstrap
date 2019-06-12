<template>
    <div class="container-fluid">
        <div class="display-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-4 border-bottom">
            <h5 class="page-title">アカウント管理</h5>
        </div>
        <!-- タブボタン部分 -->
        <ul class="nav nav-tabs border-bottom-0">
            <li class="nav-item"><a href="#tab1" class="nav-link active show" data-toggle="tab">アカウント</a></li>
            <li class="nav-item"><a href="#tab2" class="nav-link" data-toggle="tab">ロール</a></li>
        </ul>
        <!--タブのコンテンツ部分-->
        <div class="tab-content top-content border">
            <!-- [アカウント]タブ -->
            <div id="tab1" class="tab-pane active show">
                <div class="pt-2">
                        <div class="card-title display-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pull-right mb-2">
                            <input type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#accountModal" value="アカウント追加"
                            @click="statusAccount = 2"/>
                        </div>
                        <div role="tablist" class="sampletable table-responsive nav nav-tabs">
                            <div data-data-text="サービスプロバイダーID" data-type="ASC"></div>
                            <table class="table table-striped table-headerfixed">
                                <thead>
                                    <tr>
                                        <th width="20%">メールアドレス</th>
                                        <th width="15%">アカウント名</th>
                                        <th width="20%">概要</th>
                                        <th width="15%">作成日時</th>
                                        <th width="15%">更新日時</th>
                                        <th width="15%">ロール</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="twidth20">
                                            <a href="#tab3" data-href="#tab1" data-toggle="modal" data-target="#accountModal" data-type="アカウント" data-action="詳細" data-value="ACCOUNT001"
                                            @click="statusAccount = 0">
                                                hogehoge@test.mail
                                            </a>
                                        </td>
                                        <td class="twidth15">名字氏名</td>
                                        <td class="twidth20">画面を表示するためにテスト登録</td>
                                        <td class="twidth15">2019-03-10</td>
                                        <td class="twidth15">2019-03-10</td>
                                        <td class="twidth15">管理者ロール</td>
                                    </tr>
                                    <tr>
                                        <td class="twidth20">
                                            <a @click="statusRole = 0" href="#tab3" data-href="#tab1" data-toggle="modal" data-target="#accountModal" data-type="アカウント" data-action="詳細" data-value="ACCOUNT002">test2@mail.address</a>
                                        </td>
                                        <td class="twidth15">テストアカウント2</td>
                                        <td class="twidth20">一般ロール登録テスト</td>
                                        <td class="twidth15">2019-03-10</td>
                                        <td class="twidth15">2019-03-10</td>
                                        <td class="twidth15">一般ロール</td>
                                    </tr>
                                    <tr>
                                        <td class="twidth20">
                                            <a @click="statusRole = 0" href="#tab3" data-href="#tab1" data-toggle="modal" data-target="#accountModal" data-type="アカウント" data-action="詳細" data-value="ACCOUNT003">test3@mail.address</a>
                                        </td>
                                        <td class="twidth15">テストアカウント3</td>
                                        <td class="twidth20">特殊ロール登録テスト</td>
                                        <td class="twidth15">2019-03-10</td>
                                        <td class="twidth15">2019-03-10</td>
                                        <td class="twidth15">特殊ロール</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
            <!-- [ロール]タブ -->
            <div id="tab2" class="tab-pane">
                <div class="pt-2">
                        <div class="card-title d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pull-right mb-2">
                            <input type="button" class="btn btn-sm btn-primary"
                                   data-type="ロール" data-action="登録" data-href="#tab1" data-toggle="modal" data-target="#roleModal" value="ロール追加"
                                   @click="statusRole = 2"/>
                        </div>
                        <div class="sampletable table-responsive">
                            <div data-data-text="サービスプロバイダーID" data-type="ASC"></div>
                            <table class="table table-striped table-headerfixed">
                                <thead>
                                <tr>
                                    <th width="20%">ロール名</th>
                                    <th width="40%">概要</th>
                                    <th width="20%">作成日時</th>
                                    <th width="20%">更新日時</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="twidth20">
                                        <a @click="statusRole = 0" href="#tab3" data-href="#tab1" data-toggle="modal" data-target="#roleModal" data-type="ロール" data-action="詳細" data-value="管理者ロール">管理者ロール</a>
                                    </td>
                                    <td class="twidth40">管理者</td>
                                    <td class="twidth20">2019-03-10</td>
                                    <td class="twidth20">2019-03-10</td>
                                </tr>
                                <tr>
                                    <td class="twidth20">
                                        <a @click="statusRole = 0" href="#tab3" data-href="#tab1" data-toggle="modal" data-target="#roleModal" data-type="ロール" data-action="詳細" data-value="管理者ロール">一般ロール</a>
                                    </td>
                                    <td class="twidth40">一般ユーザー</td>
                                    <td class="twidth20">2019-03-10</td>
                                    <td class="twidth20">2019-03-10</td>
                                </tr>
                                <tr>
                                    <td class="twidth20">
                                        <a @click="statusRole = 0" href="#tab3" data-href="#tab1" data-toggle="modal" data-target="#roleModal" data-type="ロール" data-action="詳細" data-value="管理者ロール">特殊ロール</a>
                                    </td>
                                    <td class="twidth40">○○専用</td>
                                    <td class="twidth20">2019-03-10</td>
                                    <td class="twidth20">2019-03-10</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>

            <!-- アカウント 削除確認 -->
            <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="accountModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">削除確認</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="閉じる">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>削除しますか？</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#accountModal">閉じる</button>
                            <button type="button" class="btn btn-primary my-tab" data-dismiss="modal">削除</button>
                        </div>
                    </div>
                </div>
            </div>

            <!--&lt;!&ndash; アカウント 追加／詳細・変更用モーダル &ndash;&gt;-->
            <div class="modal fade" id="accountModal" tabindex="-1" role="dialog" aria-labelledby="accountModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">アカウント<span class="action-name"></span></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="閉じる">
                                <span aria-hidden="true">×</span>
                            </button>
                            <!-- メニューバーにボタンがあればここに追加 -->
                        </div>
                        <div class="customCheck1 mr-3 mt-3" v-if="statusAccount !== 2">
                            <div class="custom-control custom-checkbox pull-right align-middle">
                                <input type="checkbox" class="custom-control-input" id="customCheck1" @click="statusAccount = checkedAccount ? 0 : 1" v-model="checkedAccount">
                                <label class="custom-control-label" for="customCheck1">変更する</label>
                            </div>
                        </div>
                        <div class="modal-body">
                            <form>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th width="40%">メールアドレス</th>
                                            <td width="100%" v-if="statusAccount === 0">hogehoge@test.mail</td>
                                            <td width="100%" v-if="statusAccount === 1">
                                                <input class="form-control" name="email" type="text" value="hogehoge@test.mail">
                                            </td>
                                            <td width="100%" v-if="statusAccount === 2">
                                                <input class="form-control" name="email" type="text" value="">
                                            </td>
                                        </tr>
                                        <tr>
                                            <th width="40%">アカウント名</th>
                                            <td width="100%" v-if="statusAccount === 0">管理者ロール</td>
                                            <td width="100%" v-if="statusAccount === 1">
                                                <input class="form-control" name="contractFirstNameKanji" type="text" size="15" value="管理者ロール">
                                            </td>
                                            <td width="100%" v-if="statusAccount === 2">
                                                <input class="form-control" name="contractFirstNameKanji" type="text" size="15" value="">
                                            </td>
                                        </tr>
                                        <tr>
                                            <th width="40%">概要</th>
                                            <td width="100%" v-if="statusAccount === 0">管理者</td>
                                            <td width="100%" v-if="statusAccount === 1">
                                                <input class="form-control" name="contractFirstNameKanji" type="text" size="13" value="管理者">
                                            </td>
                                            <td width="100%" v-if="statusAccount === 2">
                                                <input class="form-control" name="contractFirstNameKanji" type="text" size="13" value="">
                                            </td>
                                        </tr>
                                        <tr v-if="statusAccount !== 2">
                                            <th width="40%">作成日時</th>
                                            <td width="100%">2019-03-10</td>
                                        </tr>
                                        <tr v-if="statusAccount !== 2">
                                            <th width="40%">更新日時</th>
                                            <td width="100%">2019-03-10</td>
                                        </tr>
                                        <tr>
                                            <th width="20%">ロール</th>
                                            <td width="100%" v-if="statusAccount === 0">管理者ロール</td>
                                            <td width="100%" v-if="statusAccount === 1">
                                                <select class="form-control custom-select">
                                                    <option value="contract1" selected="">管理者ロール</option>
                                                    <option value="contract2">特殊ロール</option>
                                                    <option value="contract3">一般ロール</option>
                                                </select>
                                            </td>
                                            <td width="100%" v-if="statusAccount === 2">
                                                <select class="form-control custom-select">
                                                    <option value="contract1">管理者ロール</option>
                                                    <option value="contract2">特殊ロール</option>
                                                    <option value="contract3">一般ロール</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
                            <button type="button" data-dismiss="modal" class="btn btn-primary" v-if="statusAccount === 1">保存</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" v-if="statusAccount === 2">追加</button>
                            <button v-if="statusAccount !== 2" type="button" class="btn btn-secondary mr-2 ml-2" data-toggle="modal" data-target="#deleteModal" data-dismiss="modal">削除</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ロール 削除確認 -->
            <div class="modal fade" id="roleDeleteModal" tabindex="-1" role="dialog" aria-labelledby="roleModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">削除確認</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="閉じる">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>削除しますか？</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#roleModal">閉じる</button>
                            <button type="button" class="btn btn-primary my-tab" data-dismiss="modal">削除</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ロール 追加／詳細・変更用モーダル -->
            <div class="modal fade" id="roleModal" tabindex="-1" role="dialog" aria-labelledby="roleModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                ロール<span class="action-name"></span>
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="閉じる">
                                <span aria-hidden="true">×</span>
                            </button>
                            <!-- メニューバーにボタンがあればここに追加 -->
                        </div>
                        <div class="customCheck2 mt-3 mr-3" v-if="statusRole !== 2">
                            <div class="custom-control custom-checkbox pull-right align-middle">
                                <input type="checkbox" class="custom-control-input" id="customCheck2" @click="statusRole = checkedRole ? 0 : 1" v-model="checkedRole">
                                <label class="custom-control-label" for="customCheck2">変更する</label>
                            </div>
                        </div>
                        <div class="modal-body">
                            <div id="tab3" class="tab-pane">
                                <form>
                                    <div class="row">
                                        <div class="col-12">
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <th width="25%">ロール名</th>
                                                        <td width="100%" v-if="statusRole === 0">管理者ロール</td>
                                                        <td width="100%" v-if="statusRole === 1">
                                                            <input class="form-control" name="contractFirstNameKanji" type="text" size="15" value="管理者ロール">
                                                        </td>
                                                        <td width="100%" v-if="statusRole === 2">
                                                            <input class="form-control" name="contractFirstNameKanji" type="text" size="15" value="">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th width="25%">概要</th>
                                                        <td width="100%" v-if="statusRole === 0">管理者</td>
                                                        <td width="100%" v-if="statusRole === 1">
                                                            <input class="form-control" name="contractFirstNameKanji" type="text" size="13" value="管理者">
                                                        </td>
                                                        <td width="100%" v-if="statusRole === 2">
                                                            <input class="form-control" name="contractFirstNameKanji" type="text" size="13" value="">
                                                        </td>
                                                    </tr>
                                                    <tr v-if="statusRole !== 2">
                                                        <th width="25%">作成日時</th>
                                                        <td width="100%">2019-03-10</td>
                                                    </tr>
                                                    <tr v-if="statusRole !== 2">
                                                        <th width="25%">更新日時</th>
                                                        <td width="100%">2019-03-10</td>
                                                    </tr>
                                                    <tr>
                                                        <th width="25%">権限</th>
                                                        <td width="100%" v-if="statusRole === 0">
                                                            <div style="height:25vh; overflow-y:scroll;">
                                                                <table>
                                                                    <tbody><tr><th>コネクティビィティ/ELTRES</th><td><input type="checkbox" checked="checked" disabled="disabled"></td></tr>
                                                                    <tr><th>コネクティビィティ/ZETA</th><td><input type="checkbox" disabled="disabled"></td></tr>
                                                                    <tr><th>コネクティビィティ/LoRa</th><td><input type="checkbox" checked="checked" disabled="disabled"></td></tr>
                                                                    <tr><th>コネクティビィティ/ネッツワイヤレス</th><td><input type="checkbox" checked="checked" disabled="disabled"></td></tr>
                                                                    <tr><th>コネクティビィティ/NGN-VPN</th><td><input type="checkbox" disabled="disabled"></td></tr>
                                                                    <tr><th>サービス/IoT</th><td><input type="checkbox" checked="checked" disabled="disabled"></td></tr>
                                                                    <tr><th>サービス/Communication</th><td><input type="checkbox" checked="checked" disabled="disabled"></td></tr>
                                                                    <tr><th>サービス/Office</th><td><input type="checkbox" checked="checked" disabled="disabled"></td></tr>
                                                                    <tr><th>サービス/Maps</th><td><input type="checkbox" disabled="disabled"></td></tr>
                                                                    <tr><th>サービス/IAM</th><td><input type="checkbox" checked="checked" disabled="disabled"></td></tr>
                                                                    <tr><th>契約</th><td><input type="checkbox" checked="checked" disabled="disabled"></td></tr>
                                                                    <tr><th>システム利用状況</th><td><input type="checkbox" checked="checked" disabled="disabled"></td></tr>
                                                                    <tr><th>アカウント管理</th><td><input type="checkbox" checked="checked" disabled="disabled"></td></tr>
                                                                    <tr><th>ダッシュボード作成</th><td><input type="checkbox" checked="checked" disabled="disabled"></td></tr>
                                                                    <tr><th>システム稼働状況</th><td><input type="checkbox" checked="checked" disabled="disabled"></td></tr>
                                                                    </tbody></table>
                                                            </div>
                                                        </td>
                                                        <td width="100%" v-if="statusRole === 1">
                                                            <div style="height:21vh; overflow-y:scroll;">
                                                                <table>
                                                                    <tbody><tr><th>コネクティビィティ/ELTRES</th><td><input type="checkbox" checked="checked"></td></tr>
                                                                    <tr><th>コネクティビィティ/ZETA</th><td><input type="checkbox"></td></tr>
                                                                    <tr><th>コネクティビィティ/LoRa</th><td><input type="checkbox" checked="checked"></td></tr>
                                                                    <tr><th>コネクティビィティ/ネッツワイヤレス</th><td><input type="checkbox" checked="checked"></td></tr>
                                                                    <tr><th>コネクティビィティ/NGN-VPN</th><td><input type="checkbox"></td></tr>
                                                                    <tr><th>サービス/IoT</th><td><input type="checkbox" checked="checked"></td></tr>
                                                                    <tr><th>サービス/Communication</th><td><input type="checkbox" checked="checked"></td></tr>
                                                                    <tr><th>サービス/Office</th><td><input type="checkbox" checked="checked"></td></tr>
                                                                    <tr><th>サービス/Maps</th><td><input type="checkbox"></td></tr>
                                                                    <tr><th>サービス/IAM</th><td><input type="checkbox" checked="checked"></td></tr>
                                                                    <tr><th>契約</th><td><input type="checkbox" checked="checked"></td></tr>
                                                                    <tr><th>システム利用状況</th><td><input type="checkbox" checked="checked"></td></tr>
                                                                    <tr><th>アカウント管理</th><td><input type="checkbox" checked="checked"></td></tr>
                                                                    <tr><th>ダッシュボード作成</th><td><input type="checkbox" checked="checked"></td></tr>
                                                                    <tr><th>システム稼働状況</th><td><input type="checkbox" checked="checked"></td></tr>
                                                                    </tbody></table>
                                                            </div>
                                                        </td>
                                                        <td width="100%" v-if="statusRole === 2">
                                                            <div style="height:40vh; overflow-y:scroll;">
                                                                <table>
                                                                    <tbody><tr><th>コネクティビィティ/ELTRES</th><td><input type="checkbox"></td></tr>
                                                                    <tr><th>コネクティビィティ/ZETA</th><td><input type="checkbox"></td></tr>
                                                                    <tr><th>コネクティビィティ/LoRa</th><td><input type="checkbox"></td></tr>
                                                                    <tr><th>コネクティビィティ/ネッツワイヤレス</th><td><input type="checkbox"></td></tr>
                                                                    <tr><th>コネクティビィティ/NGN-VPN</th><td><input type="checkbox"></td></tr>
                                                                    <tr><th>サービス/IoT</th><td><input type="checkbox"></td></tr>
                                                                    <tr><th>サービス/Communication</th><td><input type="checkbox"></td></tr>
                                                                    <tr><th>サービス/Office</th><td><input type="checkbox"></td></tr>
                                                                    <tr><th>サービス/Maps</th><td><input type="checkbox"></td></tr>
                                                                    <tr><th>サービス/IAM</th><td><input type="checkbox"></td></tr>
                                                                    <tr><th>契約</th><td><input type="checkbox"></td></tr>
                                                                    <tr><th>システム利用状況</th><td><input type="checkbox"></td></tr>
                                                                    <tr><th>アカウント管理</th><td><input type="checkbox"></td></tr>
                                                                    <tr><th>ダッシュボード作成</th><td><input type="checkbox"></td></tr>
                                                                    <tr><th>システム稼働状況</th><td><input type="checkbox"></td></tr>
                                                                    </tbody></table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
                            <button id="modify-btn2" type="button" data-dismiss="modal" class="btn btn-primary" v-if="statusRole === 1">保存</button>
                            <button id="add-btn2" type="button" class="btn btn-primary" data-dismiss="modal" v-if="statusRole === 2">追加</button>
                            <button v-if="statusRole !== 2" type="button" class="btn btn-secondary mr-2 ml-2 no-create" data-toggle="modal" data-target="#roleDeleteModal" data-dismiss="modal">削除</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Account",
        data() {
            return {
                list: [
                    {
                        name: 'コネクティビィティ契約一覧',
                        data: [
                            {
                                name: '00000001',
                                href: '#',
                                name2: '1日1回データ取得回線',
                                name3: '2000',
                                name4: '2019-03-01',
                                name5: '契約中'
                            },
                            {
                                name: '00000002',
                                href: '#',
                                name2: '1日1回データ取得回線',
                                name3: '2000',
                                name4: '2019-03-01',
                                name5: '契約中'
                            },
                            {
                                name: '00000003',
                                href: '#',
                                name2: '1日1回データ取得回線',
                                name3: '2000',
                                name4: '2019-03-01',
                                name5: '契約中'
                            },
                        ]
                    },
                    {
                        name: 'コネクティビィティ契約一覧',
                        data: [
                            {
                                name: '00000001',
                                href: '#',
                                name2: '1日1回データ取得回線',
                                name3: '2000',
                                name4: '2019-03-01',
                                name5: '契約中'
                            },
                            {
                                name: '00000002',
                                href: '#',
                                name2: '1日1回データ取得回線',
                                name3: '2000',
                                name4: '2019-03-01',
                                name5: '契約中'
                            },
                            {
                                name: '00000003',
                                href: '#',
                                name2: '1日1回データ取得回線',
                                name3: '2000',
                                name4: '2019-03-01',
                                name5: '契約中'
                            },
                        ]
                    },
                ],
                statusAccount: 0,
                statusRole: 0,
                checkedAccount: 0,
                checkedRole: 0,
            }
        },
    }
</script>
