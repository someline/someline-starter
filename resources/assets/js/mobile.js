/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('sl-app-header', require('./components/mobile/main/section/AppHeader.vue').default);
Vue.component('sl-app-tab-bar', require('./components/mobile/main/section/AppTabBar.vue').default);

Vue.component('sl-app-home', require('./components/mobile/home/Home.vue').default);

// Vue Router
// import RouterConfig from './mobile_router'
// const router = new VueRouter(RouterConfig);

// Vuex
// const vuexStore = new Vuex.Store({
//     state: {
//         platform: 'mobile',
//         count: 0
//     },
//     mutations: {
//         increment (state) {
//             state.count++
//         }
//     }
// });
// window.vuexStore = vuexStore;

const app = new Vue({
    // router,
    el: '#app',
    data: {
        msg: "hello",
    },
    computed: {},
    watch: {},
    events: {},
    created(){
        console.log('Bootstrap.');
        this.initLocale();
    },
    mounted(){
        console.log('Ready.');
        this.eventEmit('AppReady');
    },
    methods: {
        initLocale(){
            console.log('Init Locale.');

            var that = this;
            var lang = this.locale;

            Vue.config.lang = lang;
            Vue.locale(lang, window.Someline.locales);

        },
    }
});
