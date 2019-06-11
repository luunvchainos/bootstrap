<template>
    <div class="container-fluid">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mt-4 pb-2 mb-3 border-bottom">
                <h5 class="page-title">契約一覧</h5>
            </div>
            <div class="card mb-4" v-for="item in list">
                <div class="card-header">{{ item.name }}</div>
                <div class="card-body mb-0">
                    <div class="card-title d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 ">
                        <div class="form-inline">
                            <label>契約ID</label>
                            <input class="form-control" type="text">
                        </div>
                        <div class="form-inline">
                            <label>商品名</label>
                            <input class="form-control" type="text">
                        </div>
                        <div class="btn-toolbar">
                            <div class="btn-group mr-2">
                                <button class="btn btn-sm btn-secondary">検索</button>
                            </div>
                            <div class="btn-group mr-2">
                                <input type="button" class="btn btn-sm btn-primary" onclick="location.href='./connectivity-contract-addition.html'" value="契約追加">
                            </div>
                        </div>
                    </div>
                    <div class="card-title d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
                        <div class="form-inline">
                            <span>全<span>0</span>件中<span>0</span>～<span>0</span>件を表示</span>
                        </div>
                        <div class="btn-toolbar mb-2 mb-md-0">
                            <div class="form-inline">
                                <label>表示件数</label>
                                <select class="form-control">
                                    <option>10</option>
                                    <option>50</option>
                                    <option>100</option>
                                    <option>500</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="sampletable table-responsive">
                        <div data-data-text="サービスプロバイダーID" data-type="ASC"></div>
                        <table class="table table-striped table-headerfixed">
                            <thead>
                            <tr>
                                <th width="20%">契約ID</th>
                                <th width="20%">商品名</th>
                                <th width="20%">数量</th>
                                <th width="20%">契約日</th>
                                <th width="20%">ステータス</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="i in item.data">
                                <td>
                                    <router-link :to="i.href">{{ i.name }}</router-link>
                                </td>
                                <td>{{ i.name2 }}</td>
                                <td>{{ i.name3 }}</td>
                                <td>{{ i.name4 }}</td>
                                <td>{{ i.name5 }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="form-inline">
                        <div class="btn-group mr-2">
                            <button class="btn btn-sm btn-outline-secondary">先頭</button>
                        </div>
                        <div class="btn-group mr-2">
                            <button class="btn btn-sm btn-outline-secondary">前のページ</button>
                        </div>
                        <div class="btn-group mr-2">
                            <button class="btn btn-sm btn-outline-secondary">次のページ</button>
                        </div>
                        <div class="btn-group mr-2">
                            <button class="btn btn-sm btn-outline-secondary">最後</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: "Order",
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
            }
        },
    }
</script>
