<style scoped>
</style>

<template>

    <div class="wrapper-md">

        <h2>User {{ routeId }}</h2>

        <div class="panel panel-default">

            <ul class="nav nav-tabs nav-justified">
                <li>
                    <router-link :to="routeProfile">Profile</router-link>
                </li>
                <li>
                    <router-link :to="routePosts">Posts</router-link>
                </li>
            </ul>

            <router-view></router-view>

        </div>

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

            }
        },
    }
</script>