<template>
    <div class="modal fade" :id="id" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ title }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="閉じる">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div>{{ content }}</div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="$emit('confirmClose')">閉じる</button>
                    <button type="button" class="btn btn-primary" v-on:click="$emit('confirmOK')">解約</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            id: {
                type: String,
                required: false
            },
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            }
        },
        computed: {

        },
        methods : {

        }
    }
</script>