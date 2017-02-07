<style scoped>
</style>

<template>

    <footer v-show="ShowAppTabBar" class="app-footer navbar navbar-fixed-bottom bg-light lt b-t">
        <div class="row">
            <div class="col-sm-2 hidden-xs">

            </div>
            <div class="col-sm-8">
                <div class="w-xl w-auto-xs center-block">
                    <div class="btn-group btn-group-justified text-center text-sm">
                        <template v-if="isSelectTabBarItem(0)">
                            <sl-tab-bar-item link="javascript:;">
                                <i class="block text-md m-t-xs icon-user text-primary"></i>
                                <span class="text-xs text-primary">Account</span>
                            </sl-tab-bar-item>
                        </template>
                        <template v-else>
                            <sl-tab-bar-item link="/m/" item-id="0" :link-click="onClickTabBarItem(0)">
                                <i class="block text-md m-t-xs icon-user"></i>
                                <span class="text-xs">Account</span>
                            </sl-tab-bar-item>
                        </template>

                        <template v-if="isSelectTabBarItem(1)">
                            <sl-tab-bar-item link="javascript:;">
                                <i class="block text-md m-t-xs icon-cloud-upload text-primary"></i>
                                <span class="text-xs text-primary">Upload</span>
                            </sl-tab-bar-item>
                        </template>
                        <template v-else>
                            <sl-tab-bar-item link="/m/app" item-id="1" :link-click="onClickTabBarItem">
                                <i class="block text-md m-t-xs icon-cloud-upload"></i>
                                <span class="text-xs">Upload</span>
                            </sl-tab-bar-item>
                        </template>

                        <template v-if="isSelectTabBarItem(2)">
                            <sl-tab-bar-item link="javascript:;">
                                <i class="block text-md m-t-xs icon-clock text-primary"></i>
                                <span class="text-xs text-primary">Watch</span>
                            </sl-tab-bar-item>
                        </template>
                        <template v-else>
                            <sl-tab-bar-item link="/m/app" item-id="2" :link-click="onClickTabBarItem">
                                <i class="block text-md m-t-xs icon-clock"></i>
                                <span class="text-xs">Watch</span>
                            </sl-tab-bar-item>
                        </template>

                        <template v-if="isSelectTabBarItem(3)">
                            <sl-tab-bar-item link="javascript:;">
                                <i class="block text-md m-t-xs icon-bag text-primary"></i>
                                <span class="text-xs text-primary">Shopping</span>
                            </sl-tab-bar-item>
                        </template>
                        <template v-else>
                            <sl-tab-bar-item link="/m/app" item-id="3" :link-click="onClickTabBarItem">
                                <i class="block text-md m-t-xs icon-bag"></i>
                                <span class="text-xs">Shopping</span>
                            </sl-tab-bar-item>
                        </template>

                    </div>
                </div>
            </div>
            <div class="col-sm-2 hidden-xs">

            </div>
        </div>
    </footer>

</template>

<script>
    export default{
        props: [],
        data(){
            return {
//                msg: 'hello vue',
                items: [],
                ShowAppTabBar: true,
                selected_tab_bar_item_index: 0,
            }
        },
        computed: {},
        components: {
            'sl-tab-bar-item': require('./tabbar/TabBarItem.vue'),
        },
        watch: {},
        events: {},
        mounted(){
            console.log('Component Ready.');

            this.listenBus();
        },
        methods: {
            listenBus(){
                this.eventOn("AppTabBar_selectTabBarItem", this.selectTabBarItem);
                this.eventOn("AppTabBar_setShowAppTabBar", this.setShowAppTabBar);
            },
            setShowAppTabBar(isShow){
                if (isShow == undefined) {
                    isShow = true;
                }
                console.log('AppTabBar - setShowAppTabBar: ' + isShow);
                this.ShowAppTabBar = isShow;
            },
            selectTabBarItem(index){
                this.selected_tab_bar_item_index = index;
            },
            isSelectTabBarItem(index){
                return this.selected_tab_bar_item_index == index;
            },
            onClickTabBarItem(index){
                console.log('AppTabBar - onClickTabBarItem: ' + index);
                this.eventEmit("AppTabBar_onClickTabBarItem", index);
            },
        },
    }
</script>