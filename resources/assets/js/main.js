import moment from 'moment';
import Vue from 'vue';
import VueResource from 'vue-resource';
import app from './app';
import MixInUser from './vue/mixins/user'
import MixInJQuery from './vue/mixins/jquery'
import MixInTools from './vue/mixins/tools'
import focus from './vue/directives/focus'

Vue.directive(focus);

Vue.use(VueResource);
Vue.mixin(MixInUser);
Vue.mixin(MixInJQuery);
Vue.mixin(MixInTools);

Vue.http.headers.common['X-CSRF-TOKEN'] = window.Someline.csrfToken;
Vue.http.headers.common['Authorization'] = 'Bearer ' + window.Someline.jwtToken;

window.Vue = Vue;
window.moment = moment;

new Vue(app).$mount('#app');