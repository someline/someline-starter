
window._ = require('lodash');
window.Popper = require('popper.js').default;
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
// try {
//     window.$ = window.jQuery = require('jquery');
//
//     require('bootstrap-sass');
// } catch (e) {}

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue');

// import Vuex from 'vuex'
// window.Vuex = Vuex;
// Vue.use(Vuex);

// import VueRouter from 'vue-router'
// window.VueRouter = VueRouter;
// Vue.use(VueRouter);

import VueI18n from 'vue-i18n'
window.VueI18n = VueI18n;
Vue.use(VueI18n);

// @DEPRECATED
// require('./filters/helpers');

/**
 * Additional Setup
 *
 */

// Vue Directives
// Vue.directive('focus', require('./directives/focus').default);

// Vue Mixins
import MixInUser from './mixins/user'
Vue.mixin(MixInUser);

import MixInJQuery from './mixins/jquery'
Vue.mixin(MixInJQuery);

import MixInTools from './mixins/tools'
Vue.mixin(MixInTools);

import MixInBus from './mixins/bus'
Vue.mixin(MixInBus);

import MixInNl2br from './mixins/nl2br'
Vue.mixin(MixInNl2br);

// import MixInStore from './mixins/store'
// Vue.mixin(MixInStore);

// Vue Components
// Vue.component('autosize-textarea', require('./essentials/autosize-textarea.vue').default);

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

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Accept-Language'] = window.Someline.locale;
// window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;

Vue.prototype.$http = window.$http = window.axios;

var apiAxios = window.axios.create({
    baseURL: '/api/',
    timeout: 30000,
    headers: {
        'Accept': 'application/x.someline.v1+json',
    }
});
Vue.prototype.$api = window.$api = apiAxios;

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
