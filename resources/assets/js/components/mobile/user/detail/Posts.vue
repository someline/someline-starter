<style scoped>
</style>

<template>

    <div class="wrapper">
        <b>Posts</b> for User {{ routeId }}
        <pre>{{ item }}</pre>
    </div>

</template>

<script>
    export default{
        props: [],
        data(){
            return {
//                msg: 'hello vue',
                item: {},
            }
        },
        computed: {
            routeId(){
                return this.$route.params.id;
            },
        },
        components: {},
        http: {
            root: '/api',
            headers: {
                Accept: 'application/x.someline.v1+json'
            }
        },
        mounted(){
            console.log('Component Ready.');

            this.fetchData();
        },
        watch: {},
        events: {},
        methods: {
            fetchData(){

                var resource = this.$resource('users{/id}', {
//                    include: ''
                });

                // get item
                resource.get({
                    id: this.routeId,
                }).then((response) => {
                    console.log(response);
                    this.item = response.data.data;
                });

            }
        },
    }
</script>