<template>
    <div class="display-flex align-items-center">
        <ul class="pagination mr-3">
            <li class="page-item" v-if="pagination.current_page > 1">
                <a class="page-link" href="#" aria-label="Previous" v-on:click.prevent="changePage(pagination.current_page - 1)">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item" v-for="page in pagesNumber" :class="{'active': page == pagination.current_page}">
                <a class="page-link" href="#" v-on:click.prevent="changePage(page)">{{ page }}</a>
            </li>
            <li class="page-item" v-if="pagination.current_page < pagination.total_pages">
                <a class="page-link" href="#" aria-label="Next" v-on:click.prevent="changePage(pagination.current_page + 1)">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
        <div>
            <span>全
                <span id="view-all-page">{{ pagination.total }}</span>件中
                <span id="view-first-page">{{ pagination.from }}</span> ～
                <span id="view-last-page">{{ pagination.from + pagination.per_page - 1 }}</span> 件を表示
            </span>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        pagination: {
            type: Object,
            required: true
        },
        offset: {
            type: Number,
            default: 4
        }
    },
    computed: {
        pagesNumber: function () {
            if (this.pagination.total_pages === 1) {
                return [];
            }
            let from = this.pagination.current_page - this.offset;
            if (from < 1) {
                from = 1;
            }
            let to = from + (this.offset * 2);
            if (to >= this.pagination.total_pages) {
                to = this.pagination.total_pages;
            }
            let pagesArray = [];
            for (from = 1; from <= to; from++) {
                pagesArray.push(from);
            }
            return pagesArray;
        }
    },
    methods : {
        changePage: function (page) {
            this.pagination.current_page = page;
        }
    }
}
</script>