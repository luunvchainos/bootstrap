<template>
    <div class="container-fluid page_list">
        <div class="display-flex align-items-center mt-4">
            <h5>{{ titlePage }}</h5>
            <router-link class="btn btn-sm btn-outline-secondary ml-auto" to="/group">グループ一覧</router-link>
        </div>
        <hr>
        <div class="card-header w-100">
            <h6>検索条件</h6>
        </div>
        <div
            class="top-content form-group display-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
            <div class="form-inline">
                <label>LfourID</label>
                <input class="form-control max-w-150" name="" type="text"/>
            </div>
            <div class="form-inline">
                <label>デバイス名</label>
                <input class="form-control max-w-150" name="" type="text"/>
            </div>
            <div class="form-inline">
                <label>配送状態</label>
                <select class="form-control min-w-150" name="">
                    <option value="1"></option>
                    <option value="2">配送中</option>
                    <option value="3">配送済</option>
                </select>
            </div>
            <div class="form-inline">
                <label>ステータス</label>
                <select class="form-control min-w-150" name="">
                    <option value="1"></option>
                    <option value="2">解約済</option>
                    <option value="3">使用中</option>
                </select>
            </div>
            <div class="form-inline">
                <label>所属グループ</label>
                <select class="form-control min-w-150" name="">
                    <option value="1"></option>
                    <option value="2">グループA</option>
                    <option value="3">グループB</option>
                    <option value="4">グループC</option>
                </select>
            </div>
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-2">
                    <button id="search-btn" class="btn btn-secondary">検索</button>
                </div>
            </div>
        </div>
        <div class="middle-content">
            <div class="display-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-4">
                <div class="form-inline w-100">
                    <div class="btn-group mr-2">
                        <button class="btn btn-primary" data-toggle="modal" data-target="#confirm-modal">故障交換</button>
                    </div>
                    <div class="btn-group mr-2">
                        <button class="btn btn-primary" data-toggle="modal" data-target="#confirm-modal">利用再開</button>
                    </div>
                    <div class="btn-group mr-2">
                        <button class="btn btn-primary" data-toggle="modal" data-target="#confirm-modal">利用停止</button>
                    </div>
                    <div class="btn-group mr-2">
                        <button class="btn btn-primary" data-toggle="modal" data-target="#confirm-modal">解約</button>
                    </div>
                    <div class="btn-group mr-2">
                        <button class="btn btn-primary" data-toggle="modal" data-target="#groupModal">グループ変更</button>
                    </div>
                    <div class="form-inline ml-auto">
                        <label>表示件数</label>
                        <select class="form-control" id="select-view-count">
                            <option value="10">10</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="500">500</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="table_wrapper">
                <div id="sort-coloum" data-id="device-id" data-text="デバイスID" data-type="ASC"></div>
                <table id="select-view" class="table table-striped table-headerfixed">
                    <thead>
                    <tr>
                        <th width="5%"></th>
                        <th width="15%">LfourID</th>
                        <th width="20%">デバイス名</th>
                        <th width="20%">所属グループ</th>
                        <th width="12%">ステータス</th>
                        <th width="13%">配送状態</th>
                        <th width="15%">有効期限</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" name="kaiyaku" value="1">
                        </td>
                        <td>
                            <router-link :to="{ name: 'Detail' }">0001</router-link>
                        </td>
                        <td>ELTRESデバイス01</td>
                        <td>グループA</td>
                        <td>使用前</td>
                        <td>配送中</td>
                        <td>2019-12-31</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="kaiyaku" value="1">
                        </td>
                        <td>
                            <router-link :to="{ name: 'Detail' }">0001</router-link>
                        </td>
                        <td>ELTRESデバイス01</td>
                        <td>グループA</td>
                        <td>使用前</td>
                        <td>配送中</td>
                        <td>2019-12-31</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="kaiyaku" value="1">
                        </td>
                        <td>
                            <router-link :to="{ name: 'Detail' }">0001</router-link>
                        </td>
                        <td>ELTRESデバイス01</td>
                        <td>グループA</td>
                        <td>使用前</td>
                        <td>配送中</td>
                        <td>2019-12-31</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="kaiyaku" value="1">
                        </td>
                        <td>
                            <router-link :to="{ name: 'Detail' }">0001</router-link>
                        </td>
                        <td>ELTRESデバイス01</td>
                        <td>グループA</td>
                        <td>使用前</td>
                        <td>配送中</td>
                        <td>2019-12-31</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="form-inline">
                <pagination v-bind:pagination="pagination" v-on:click.native="getAccounts(pagination.current_page)"
                            :offset="2"></pagination>
            </div>
        </div>

        <div class="modal fade p-3" id="groupModal">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">グループ選択</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="閉じる">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>x件のデバイスを選択したグループに変更します。</p>
                        <div class="table-responsive">
                            <table class="table table-striped table-headerfixed">
                                <thead>
                                <tr>
                                    <th width="10%">選択</th>
                                    <th width="30%">グループID</th>
                                    <th width="30%">グループ名</th>
                                    <th width="30%">説明</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <input type="radio" name="group">
                                    </td>
                                    <td>GROUP0001</td>
                                    <td>グループA</td>
                                    <td>テストグループその１</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="radio" name="group">
                                    </td>
                                    <td>GROUP0002</td>
                                    <td>グループB</td>
                                    <td>テストグループその１</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="radio" name="group">
                                    </td>
                                    <td>GROUP0003</td>
                                    <td>グループC</td>
                                    <td>テストグループその１</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
                        <button type="button" id="select-modal-select-btn" class="btn btn-primary" data-dismiss="modal">
                            更新
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <confirm-dialog v-bind:title="confirmModal.title"
                        v-bind:content="confirmModal.content"
                        v-bind:id="confirmModal.id"
                        v-on:confirmOK="processAccount"
                        v-on:confirmClose="closeConfirm"/>
    </div>

</template>

<script>
    import ConfirmDialog from '../services/ConfirmDialog';
    import Pagination from '../services/Pagination';

    export default {
        name: "List",
        components: {ConfirmDialog, Pagination},
        data() {
            return {
                titlePage: 'ELTRESデバイス一覧',
                pagination: {
                    from: 1,
                    current_page: 1,
                    per_page: 10,
                    total: 90,
                    total_pages: 9,
                },
                confirmModal: {
                    title: '解約確認',
                    content: 'x件のデバイスを解約しますがよろしいですか？',
                    id: 'confirm-modal',
                },
            }
        },
        methods: {
            getAccounts: function (page) {
                // var self = this;
                // var data = {};
                // if (page && is_locked) {
                //     data = {
                //         page: page,
                //         sort : self.sort,
                //         searchClientName: self.search_client_name,
                //         searchLoginId: self.search_login_id,
                //         searchName: self.search_name,
                //         enable: is_locked
                //     };
                // } else {
                //     data = {
                //         page: self.pagination.current_page,
                //         sort : self.sort,
                //         searchClientName: self.search_client_name,
                //         searchLoginId: self.search_login_id,
                //         searchName: self.search_name,
                //         enable: self.locked
                //     };
                // }
                // accountRequest.getAccounts(data).then(res => {
                //     self.accounts = res.data.data;
                //     self.pagination = res.data;
                // });
            },
            processAccount: function () {
            },
            closeConfirm: function () {
            },
            showModal: function () {
                $("#confirm-modal").modal('show');
            },
        },

        mounted: function () {
            this.getAccounts();
        },
    }
</script>
