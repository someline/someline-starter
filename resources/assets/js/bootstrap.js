window._ = require('lodash');
window.moment = require('moment');

require("babel-polyfill");
require('es6-shim');
require('promise.prototype.finally').shim();

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

/**
 * @WARNING: These two libraries are included in theme.js, so no need to include again.
 */
// window.$ = window.jQuery = require('jquery');
// require('bootstrap-sass');

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
window.Vue = Vue;
window.Vuex = Vuex;
window.VueRouter = VueRouter;
window.VueI18n = VueI18n;

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueI18n);

// @DEPRECATED
// require('./filters/helpers');

/**
 * Additional Setup
 *
 */

// Vue Directives
Vue.directive('focus', require('./directives/focus'));

// Vue Mixins
import MixInUser from './mixins/user'
import MixInJQuery from './mixins/jquery'
import MixInTools from './mixins/tools'
import MixInBus from './mixins/bus'
import MixInStore from './mixins/store'
import MixInNl2br from './mixins/nl2br'
Vue.mixin(MixInUser);
Vue.mixin(MixInJQuery);
Vue.mixin(MixInTools);
Vue.mixin(MixInBus);
Vue.mixin(MixInStore);
Vue.mixin(MixInNl2br);

// Vue Components
Vue.component('autosize-textarea', require('./essentials/autosize-textarea.vue'));

// Bus
const bus = new Vue({
    data: {
        title: "Someline",
    }
});
window.bus = bus;


/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest',
    'Accept-Language': window.Someline.locale
};

Vue.prototype.$http = window.$http = window.axios;

var apiAxios = axios.create({
    baseURL: '/api/',
    timeout: 10000,
    headers: {
        'Accept': 'application/x.someline.v1+json',
    }
});
Vue.prototype.$api = window.$api = apiAxios;

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
