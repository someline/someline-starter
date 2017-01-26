<style scoped>
</style>

<template>

    <div class="wrapper-md">

        <a href="javascript:;"
           @click="onClickButtonUserDetail"
           class="btn btn-primary btn-block btn-lg r-2x">Show User Detail</a>

    </div>

</template>

<script>
    export default{
        props: [
            'user_id',
        ],
        data(){
            return {
//                msg: 'hello vue',
                items: [],
            }
        },
        computed: {},
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

//            this.fetchData();

        },
        methods: {
            listenBus(){
                this.eventOn("AppReady", this.onAppReady);
                this.eventOn("AppHeader_onClickNavButtonLeft", this.onClickNavButtonLeft);
                this.eventOn("AppHeader_onClickNavButtonRight", this.onClickNavButtonRight);
            },
            onAppReady(){
                console.log('onAppReady');

                this.AppHeaderSetTitle('Someline App');
                this.AppHeaderSetNavButtonLeft(null);
                this.AppTabBarSelectTabBarItem(1);
            },
            onClickNavButtonLeft(){
                console.log('onClickNavButtonLeft');
            },
            onClickNavButtonRight(){
                console.log('onClickNavButtonRight');
            },
            fetchData(){

                var resource = this.$resource('users', {
//                    include: ''
                });

                // get item
                resource.get({}).then((response) => {
                    console.log(response);
                    this.items = response.data.data;
                });

            },
            onClickButtonUserDetail(){
                this.redirectToUrl('/m/app#/user/1/profile');
            },
        },
    }
</script>