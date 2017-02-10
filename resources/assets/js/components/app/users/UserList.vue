<style scoped>
</style>

<template>

    <div class="wrapper-md">

        <h1>{{ $t('user.users') }}</h1>
        <hr>

        <div class="row">

            <datasource
                    :table-data="items"
                    language="en"
                    :columns="columns"
                    :pagination="pagination"
                    v-on:change="changePage"
                    v-on:searching="onSearch"
            ></datasource>

        </div>

    </div>

</template>

<script>
    import Datasource from 'vue-datasource';
    export default{
        props: [],
        data(){
            return {
                pagination: {},
                items: [],
                columns: [
                    {name: 'email', key: 'email'},
                    {name: 'name', key: 'name'},
                ],
                options: {
                    page: 1,
                    perpage: 15,
                    query: '',
                },
            }
        },
        computed: {},
        components: {
            Datasource,
        },
        mounted(){
            console.log('Component Ready.');

            this.fetchData();
        },
        watch: {},
        events: {},
        methods: {
            buildPaginator(pagination) {
                // TODO: Make build paginator global
                let pager = {
                    total: pagination.total,
                    per_page: pagination.per_page,
                    current_page: pagination.current_page,
                    last_page: pagination.total_pages,
                    from: 1,
                    to: pagination.per_page
                };
                return pager;
            },
            changePage(values) {
                this.fetchData(values);
            },
            onSearch(query) {

                let options = {
                    'query': query,
                    'page': 1
                };

                this.fetchData(options);
            },
            fetchData(options){

                if (typeof(options) == 'undefined') {
                    options = {};
                }

                options.page = options.page || this.options.page;
                options.perpage = options.perpage || this.options.perpage;

                if (typeof(options.query) == 'undefined') {
                    options.query = this.options.query;
                }

                this.options = options;

                //@TODO: Build the query parameter in a proper way
                this.$api.get(`/users?page=${options.page}&per_page=${options.perpage}&search=${options.query}&searchFields=name:like`, {
                    params: {
//                        include: ''
                    }
                })
                    .then((response => {
                        this.items = response.data.data;
                        this.pagination = this.buildPaginator(response.data.meta.pagination);
                    }).bind(this))
                    .catch((error => {
                        console.error(error);
                    }).bind(this));

            }
        },
    }
</script>