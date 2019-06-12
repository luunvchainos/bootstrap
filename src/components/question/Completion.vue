<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-4 border-bottom">
            <h5 class="page-title">問い合わせ新規登録完了</h5>
            <router-link class="btn btn-sm btn-secondary" :to="{ name: 'Question' }">戻る</router-link>
        </div>
        <div>
            <div class="card-body">
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <th width="40%">問い合わせの新規登録が完了しました。</th>
                            <td width="60%"></td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "QuestionAdditionCompletion",
        components: {},
        data() {
            return {}
        }
    }
</script>
