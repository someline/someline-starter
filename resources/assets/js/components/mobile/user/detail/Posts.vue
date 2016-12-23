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
        watch: {},
        events: {},
        mounted(){
            console.log('Component Ready.');

            this.listenBus();
            this.onAppReady();

            this.fetchData();
        },
        destroyed(){
            console.log('Component Destroyed.');
            this.AppTabBarSetShowAppTabBar(true);
        },
        methods: {
            listenBus(){
                this.eventOn("AppReady", this.onAppReady);
                this.eventOn("AppHeader_onClickNavButtonLeft", this.onClickNavButtonLeft);
                this.eventOn("AppHeader_onClickNavButtonRight", this.onClickNavButtonRight);
            },
            onAppReady(){
                console.log('onAppReady');

                this.AppHeaderSetTitle('Posts');
                this.AppHeaderSetNavButtonLeft('back');
                this.AppTabBarSetShowAppTabBar(false);
                this.AppHeaderSetNavButtonRight(null);
                this.AppTabBarSelectTabBarItem(null);
            },
            onClickNavButtonLeft(){
                console.log('onClickNavButtonLeft');
                this.$router.go(-1);
            },
            onClickNavButtonRight(){
                console.log('onClickNavButtonRight');
            },
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