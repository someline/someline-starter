<style scoped>
</style>

<template>

    <div class="wrapper-md">

        <div class="panel panel-default">

            <div class="panel-header wrapper">
                <ul class="nav nav-pills nav-justified">
                    <li :class="{'active':isSelectedMenuItem('profile')}">
                        <router-link :to="routeProfile" @click.native="selectMenuItem('profile')">Profile</router-link>
                    </li>
                    <li :class="{'active':isSelectedMenuItem('posts')}">
                        <router-link :to="routePosts" @click.native="selectMenuItem('posts')">Posts</router-link>
                    </li>
                </ul>
            </div>

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
                selected_menu_item: 'profile',
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

        },
        destroyed(){
            console.log('Component Destroyed.');

        },
        methods: {
            isSelectedMenuItem(item){
                return this.selected_menu_item == item;
            },
            selectMenuItem(item){
                console.log('selectMenuItem');
                this.selected_menu_item = item;
            },
        },
    }
</script>