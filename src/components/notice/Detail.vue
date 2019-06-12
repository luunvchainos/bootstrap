<template>
    <div class="container-fluid">
            <div class="display-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-4 border-bottom">
                <h5 class="page-title">お知らせ詳細</h5>
            </div>
            <div>
                <div class="card-header w-100">
                    <span>お知らせ情報</span>
                </div>
                <div class="card-body">
                    <form>
                        <div class="row">
                            <div class="col-sm">
                                <table class="table">
                                    <tbody><tr>
                                        <th width="20%">件名</th>
                                        <td width="100%" class="form-view" id="view-notice-subject">システム停止のお知らせ</td>
                                    </tr>
                                    <tr>
                                        <th width="20%">お知らせ日時</th>
                                        <td width="100%" class="form-view" id="view-notice-time">2019-03-31 15:00</td>
                                    </tr>
                                    <tr>
                                        <th width="20%">本文</th>
                                        <td width="100%" class="form-view"></td>
                                    </tr>
                                    </tbody></table>
                                <table class="table">
                                    <tbody><tr>
                                        <td width="100%" class="form-view" id="view-notice-content">○月×日9:00～16:00までサーバメンテナンスのため、システムを停止します。</td>
                                    </tr>
                                    </tbody></table>
                            </div>
                        </div>
                    </form>
                    <div class="text-center">
                        <router-link class="btn btn-secondary" :to="{ name: 'Notice' }">戻る</router-link>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: "NoticeDetail",
        components: {},
        data() {
            return {}
        }
    }
</script>
