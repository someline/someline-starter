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
        computed: {
            routeId(){
                if (this.$route.params.id) {
                    return this.$route.params.id;
                } else {
                    return this.user_id;
                }
            },
            currentRoute(){
                return "/user/" + this.routeId;
            },
            routeProfile(){
                return this.currentRoute + "/profile";
            },
            routePosts(){
                return this.currentRoute + "/posts";
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


            this.listenBus();
            this.fetchData();
        },
        watch: {},
        events: {},
        methods: {
            listenBus(){
                this.eventOn("AppReady", this.onAppReady);
            },
            onAppReady(){
                console.log('onAppReady');

                this.AppTabBarSelectTabBarItem(1);
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