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
        props: [],
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
        mounted(){
            console.log('Component Ready.');

        },
        watch: {},
        events: {},
        methods: {
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