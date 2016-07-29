import moment from 'moment';
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueI18n from 'vue-i18n';
import app from './app';
import MixInUser from './vue/mixins/user'
import MixInJQuery from './vue/mixins/jquery'
import MixInTools from './vue/mixins/tools'
import focus from './vue/directives/focus'
import nl2br from './vue/filters/nl2br'
import autosizeTextarea from './vue/essentials/autosize-textarea.vue'

Vue.directive(focus);

Vue.filter('nl2br', nl2br);

Vue.use(VueResource);
Vue.use(VueI18n);

Vue.mixin(MixInUser);
Vue.mixin(MixInJQuery);
Vue.mixin(MixInTools);

Vue.component('autosize-textarea', autosizeTextarea)

Vue.http.headers.common['X-CSRF-TOKEN'] = window.Someline.csrfToken;
// Vue.http.headers.common['Authorization'] = 'Bearer ' + window.Someline.jwtToken;
// Vue.http.headers.common['Accept'] = 'application/x.someline.v1+json';

Vue.http.interceptors.push((request, next) => {

    // modify request
    request.headers.Authorization = 'Bearer ' + window.Someline.jwtToken;
    request.url += "?" + new Date().getTime();

    // continue to next interceptor
    next((response) => {

        // unauthorized
        if (response.status == 401) {
            // reload page
            window.location = location;
        }

        var headers = response.headers;

        // update JWT token
        var jwtToken = headers['Authorization'];
        if (jwtToken) {
            window.Someline.jwtToken = jwtToken;
        }

    });
});

window.Vue = Vue;
window.moment = moment;

new Vue(app).$mount('#app');