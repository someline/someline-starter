<style scoped>
</style>

<template>

    <div class="wrapper">
        <p>
            <a href="javascript:;"
               @click="onClickDemoButton1"
               class="btn btn-primary btn-block btn-lg r-2x">
                Alert
            </a>
        </p>
        <p>
            <a href="javascript:;"
               @click="onClickDemoButton2"
               class="btn btn-success btn-block btn-lg r-2x">
                Action Sheet
            </a>
        </p>
        <p>
            <a href="javascript:;"
               @click="onClickDemoButton3"
               class="btn btn-warning btn-block btn-lg r-2x">
                Toptip
            </a>
        </p>
        <p>
            <a href="javascript:;"
               @click="onClickDemoButton4"
               class="btn btn-danger btn-block btn-lg r-2x">
                Cancel
            </a>
        </p>
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
        },
        components: {},
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

                this.AppHeaderSetNavButtonLeft('fa fa-smile-o');
                this.AppTabBarSelectTabBarItem(0);
            },
            onClickNavButtonLeft(){
                console.log('onClickNavButtonLeft');
                $.toast("耶", "success");
            },
            onClickNavButtonRight(){
                console.log('onClickNavButtonRight');
                $.actions({
                    actions: [{
                        text: "新文章",
                        onClick: function () {
                            //do something
                            $.toast("新文章");
                        }
                    }, {
                        text: "上传图片",
                        onClick: function () {
                            //do something
                            $.toast("上传图片");
                        }
                    }]
                });
            },
            fetchData(){

                this.$api.get('/users', {
                    params: {
//                        include: ''
                    }
                })
                    .then((response => {
                            console.log(response);
                        this.items = response.data.data;
                    }).bind(this))
                    .catch((error => {
                                console.error(error);
                    }).bind(this));

            },
            onClickDemoButton1(){
                // show alert
                $.alert("我是一个对话框");
            },
            onClickDemoButton2(){
                // show actionsheet
                $.actions({
                    actions: [{
                        text: "编辑",
                        onClick: function () {
                            //do something
                        }
                    }, {
                        text: "删除",
                        onClick: function () {
                            //do something
                        }
                    }]
                });
            },
            onClickDemoButton3(){
                // show toast
                $.toptip('警告', 'warning');
            },
            onClickDemoButton4(){
                // show toast
                $.toast("取消操作", "cancel");
            },
        },
    }
</script>