
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('sl-user-list', require('./components/app/users/UserList.vue').default);

// Vuex
// import Vuex from 'vuex'
// const vuexStore = new Vuex.Store({
//     state: {
//         platform: 'app',
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
    el: '#app',
    data: {
        msg: "hello",
    },
    computed: {},
    watch: {},
    events: {},
    created() {
        console.log('Bootstrap.');
        this.initLocale();
    },
    mounted() {
        console.log('Ready.');
    },
    methods: {
        initLocale() {
            console.log('Init Locale.');

            var that = this;
            var lang = this.locale;

            Vue.config.lang = lang;
            Vue.locale(lang, window.Someline.locales);

        },
    }
});
