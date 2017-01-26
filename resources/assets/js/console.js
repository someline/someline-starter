/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// Vue Directives
Vue.directive('focus', require('./directives/focus'));

// Vue Filters
Vue.filter('nl2br', require('./filters/nl2br'));

// Vue Mixins
import MixInUser from './mixins/user'
import MixInJQuery from './mixins/jquery'
import MixInTools from './mixins/tools'
import MixInBus from './mixins/bus'
import MixInStore from './mixins/store'
Vue.mixin(MixInUser);
Vue.mixin(MixInJQuery);
Vue.mixin(MixInTools);
Vue.mixin(MixInBus);
Vue.mixin(MixInStore);

// Vue Components
Vue.component('autosize-textarea', require('./essentials/autosize-textarea.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue')
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue')
);

Vue.component('example', require('./components/Example.vue'));
Vue.component('sl-oauth', require('./components/console/OAuth.vue'));

// Bus
const bus = new Vue({
    data: {
        title: "Someline",
    }
});
window.bus = bus;

// Vuex
const vuexStore = new Vuex.Store({
    state: {
        platform: 'console',
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
});
window.vuexStore = vuexStore;

const app = new Vue({
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
