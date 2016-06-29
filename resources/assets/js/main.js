import moment from 'moment';
import Vue from 'vue';
import VueResource from 'vue-resource';
import app from './app';
import MixInUser from './vue/mixins/user'
import MixInJQuery from './vue/mixins/jquery'
import MixInTools from './vue/mixins/tools'
import focus from './vue/directives/focus'
import autosizeTextarea from './vue/essentials/autosize-textarea.vue'

Vue.directive(focus);

Vue.use(VueResource);
Vue.mixin(MixInUser);
Vue.mixin(MixInJQuery);
Vue.mixin(MixInTools);

Vue.component('autosize-textarea', autosizeTextarea)

Vue.http.headers.common['X-CSRF-TOKEN'] = window.Someline.csrfToken;
Vue.http.headers.common['Authorization'] = 'Bearer ' + window.Someline.jwtToken;
// Vue.http.headers.common['Accept'] = 'application/x.someline.v1+json';

Vue.http.interceptors.push({
    response: function (response) {
        var headers = response.headers();
        if (headers.authorization) {
            window.Someline.jwtToken = headers.authorization;
            Vue.http.headers.common['Authorization'] = 'Bearer ' + window.Someline.jwtToken;
        }
        return response
    }
});

window.Vue = Vue;
window.moment = moment;

new Vue(app).$mount('#app');