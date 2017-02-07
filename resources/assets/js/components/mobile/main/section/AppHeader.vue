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
                <i :class="navButtonRightClass"></i>
            </button>
            <button @click="onClickNavButtonLeft"
                    class="pull-left dk">
                <i :class="navButtonLeftClass"></i>
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
                navButtonLeftClass: 'fa fa-chevron-left',
                navButtonRightClass: 'fa fa-plus',
            }
        },
        computed: {},
        components: {},
        watch: {},
        events: {},
        mounted(){
            console.log('Component Ready.');

            this.listenBus();
        },
        methods: {
            listenBus(){
                this.eventOn("AppHeader_setNavButtonLeft", this.setNavButtonLeft);
                this.eventOn("AppHeader_setNavButtonRight", this.setNavButtonRight);
            },
            setNavButtonLeft(className){
                console.log('AppHeader - setNavButtonLeft: ' + className);
                if (className == 'back') {
                    className = 'fa fa-chevron-left';
                }
                this.navButtonLeftClass = className;
            },
            setNavButtonRight(className){
                console.log('AppHeader - setNavButtonRight: ' + className);
                if (className == 'new' || className == 'plus') {
                    className = 'fa fa-plus';
                }
                this.navButtonRightClass = className;
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