<style scoped>
</style>

<template>

    <div class="wrapper">
        <b>Profile</b> for User {{ routeId }}
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

                this.AppHeaderSetTitle('Profile');
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

                this.$api.get('/users/' + this.routeId, {
                    params: {
//                        include: ''
                    }
                })
                    .then((response => {
                            console.log(response);
                        this.item = response.data.data;
                    }).bind(this))
                    .catch((error => {
                                console.error(error);
                    }).bind(this));

            }
        },
    }
</script>