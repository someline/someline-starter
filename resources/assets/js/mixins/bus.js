export default{
    computed: {
        bus(){
            return window.bus;
        },
    },
    methods: {
        eventEmit(name, data){
            this.bus.$emit(name, data);
        },
        eventOn(name, callback){
            this.bus.$on(name, callback);
        },
        eventOff(name, callback){
            this.bus.$off(name, callback);
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