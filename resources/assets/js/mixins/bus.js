export default{
    computed: {
        bus(){
            return window.bus;
        },
    },
    methods: {
        eventEmit(name, data){
            window.bus.$emit(name, data);
        },
        eventOn(name, callback){
            window.bus.$on(name, callback);
        },
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