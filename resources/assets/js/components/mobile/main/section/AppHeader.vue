<style scoped>
</style>

<template>
    <!-- header -->
    <header id="header" class="app-header navbar box-shadow bg-dark" role="menu">
        <!-- navbar header -->
        <div class="navbar-header text-center dk" style="float: none;width: auto;">

            <!-- / navbar header -->
            <button @click="onClickNavButtonRight"
                    class="pull-right dk">
                <i class="fa fa-plus"></i>
            </button>
            <button @click="onClickNavButtonLeft"
                    class="pull-left dk">
                <i class="fa fa-chevron-left"></i>
            </button>
            <!-- title -->
            <div class="navbar-brand text-lt font-normal">
                {{ bus.title }}
            </div>
            <!-- / brand -->

        </div>
    </header>
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

            this.fetchData();
        },
        watch: {},
        events: {},
        methods: {
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
            onClickNavButtonLeft(){
                console.log('AppHeader - onClickNavButtonLeft');
                this.eventEmit("AppHeader_onClickNavButtonLeft");
            },
            onClickNavButtonRight(){
                console.log('AppHeader - onClickNavButtonRight');
                this.eventEmit("AppHeader_onClickNavButtonRight");
            },
        },
    }
</script>