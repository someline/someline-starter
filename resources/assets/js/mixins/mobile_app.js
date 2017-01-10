export default{
    computed: {},
    methods: {
        AppHeaderSetTitle(title){
            this.bus.title = title;
        },
        AppTabBarSetShowAppTabBar(isShow){
            this.eventEmit("AppTabBar_setShowAppTabBar", isShow);
        },
        AppTabBarSelectTabBarItem(index){
            this.eventEmit("AppTabBar_selectTabBarItem", index);
        },
        AppHeaderSetNavButtonLeft(className){
            this.eventEmit("AppHeader_setNavButtonLeft", className);
        },
        AppHeaderSetNavButtonRight(className){
            this.eventEmit("AppHeader_setNavButtonRight", className);
        },
    }
}