<template>
    <div class="container-fluid page_detail">
            <div class="display-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-4 border-bottom">
                <h5 class="page-title">コネクティビィティ契約詳細</h5>
                <div class="float-right">
                    <input type="button" class="btn btn-sm btn-secondary mr-2" onclick="location.href='./21_order.html'" value="戻る">
                    <input type="button" class="btn btn-sm btn-outline-secondary mr-2" onclick="location.href='./device.html'" value="デバイス一覧">
                    <button class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#myModal">解約</button>
                </div>
            </div>
            <div>
                <div class="card-header w-100">
                    コネクティビィティ契約情報
                </div>
                <div class="card-body">
                    <form id="service-provider-form">
                        <div class="row">
                            <div class="col-sm">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th width="40%">契約ID</th>
                                            <td id="serviceProviderId" width="60%">1</td>
                                        </tr>
                                        <tr>
                                            <th>商品名</th>
                                            <td class="form-view">1日1回データ取得回</td>
                                        </tr>
                                        <tr>
                                            <th>申込日</th>
                                            <td class="form-view" id="view-contract-family-name-kana">2019-02-20</td>
                                        </tr>
                                        <!--<tr>-->
                                            <!--<th></th>-->
                                            <!--<td class="form-view" id="view-postcode"></td>-->
                                        <!--</tr>-->
                                        <!--<tr>-->
                                            <!--<th></th>-->
                                            <!--<td class="form-view" id="view-block"></td>-->
                                        <!--</tr>-->
                                        <!--<tr>-->
                                            <!--<th></th>-->
                                            <!--<td class="form-view" id="view-phone-number"></td>-->
                                        <!--</tr>-->
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-sm">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th width="40%"></th>
                                            <td width="100%" class="form-view"><span class="hidden">.</span></td>
                                        </tr>
                                        <tr>
                                            <th>数量</th>
                                            <td class="form-view" id="view-contract-family-name-kanji"><a href="./device.html">2000</a></td>
                                        </tr>
                                        <tr>
                                            <th>契約日</th>
                                            <td class="form-view" id="view-contract-first-name-kana">2019-03-01</td>
                                        </tr>
                                        <!--<tr>-->
                                            <!--<th></th>-->
                                            <!--<td class="form-view" id="view-city"></td>-->
                                        <!--</tr>-->
                                        <!--<tr>-->
                                            <!--<th></th>-->
                                            <!--<td class="form-view" id="view-building"></td>-->
                                        <!--</tr>-->
                                        <!--<tr>-->
                                            <!--<th></th>-->
                                            <!--<td class="form-view" id="view-email"></td>-->
                                        <!--</tr>-->
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </form>
                    <div class="text-center">
                        <div class="justify-content-around d-inline-block">
                            <div class="btn-group mr-2">
                                <input type="button" class="btn btn-secondary mr-2 ml-2" onclick="location.href='./21_order.html'" value="戻る">
                            </div>
                            <div class="btn-group mr-2">
                                <button class="btn btn-secondary" data-toggle="modal" data-target="#myModal">解約</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">解約確認</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="閉じる">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="col-sm">
                                <p>コネクティビィティ契約を解約します。<br>なお、全てのデバイスもあわせて解約されます。</p>
                                <p>解約希望日を選択してください。</p>
                                <div class="btn-group mr-2">
                                    <datetime format="MM/DD/YYYY" class="form-control" v-model="val"></datetime>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
                            <button type="button" id="modal-add-btn" class="btn btn-primary" data-toggle="modal" data-dismiss="modal" data-target="#secondModal" onclick="location.href='./21_order.html'">解約</button>
                        </div><!-- /.modal-footer -->
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->
    </div>
</template>

<script>
    import datetime from 'vuejs-datetimepicker';

    export default {
        name: "OrderDetail",
        components: { datetime },

        data() {
            return {
                titlePage: 'ELTRESデバイス一覧',
                show: 0,
                val: '',
            }
        },

        methods: {},

        mounted: function () {
        },
    }
</script>
