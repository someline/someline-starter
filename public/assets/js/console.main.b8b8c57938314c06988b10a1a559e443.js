webpackJsonp([2,4],{

/***/ 1:
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * Created by Libern on 26/7/16.
 */
/* harmony default export */ __webpack_exports__["default"] = {
    read: function read(val) {
        return val.replace(new RegExp('\r?\n', 'g'), '<br />');
    }
};

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    computed: {
        bus: function bus() {
            return window.bus;
        }
    },
    methods: {
        eventEmit: function eventEmit(name, data) {
            this.bus.$emit(name, data);
        },
        eventOn: function eventOn(name, callback) {
            this.bus.$on(name, callback);
        },
        eventOff: function eventOff(name, callback) {
            this.bus.$off(name, callback);
        },
        AppHeaderSetTitle: function AppHeaderSetTitle(title) {
            this.bus.title = title;
        },
        AppTabBarSetShowAppTabBar: function AppTabBarSetShowAppTabBar(isShow) {
            this.eventEmit("AppTabBar_setShowAppTabBar", isShow);
        },
        AppTabBarSelectTabBarItem: function AppTabBarSelectTabBarItem(index) {
            this.eventEmit("AppTabBar_selectTabBarItem", index);
        },
        AppHeaderSetNavButtonLeft: function AppHeaderSetNavButtonLeft(className) {
            this.eventEmit("AppHeader_setNavButtonLeft", className);
        },
        AppHeaderSetNavButtonRight: function AppHeaderSetNavButtonRight(className) {
            this.eventEmit("AppHeader_setNavButtonRight", className);
        }
    }
};

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    methods: {
        scrollToBottom: function scrollToBottom(selector, animated, animateTime) {
            var $element = $(selector);
            var scrollHeight = $element.prop("scrollHeight");
            if (animated) {
                if (!animateTime) {
                    animateTime = 1000;
                }
                $element.animate({ scrollTop: scrollHeight }, animateTime);
            } else {
                $element.scrollTop(scrollHeight);
            }
        }
    }
};

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    computed: {
        vuexStore: function vuexStore() {
            return window.vuexStore;
        }
    },
    methods: {
        storeCommit: function storeCommit(name, data) {
            return this.vuexStore.commit(name, data);
        },
        storeDispatch: function storeDispatch(name, data) {
            return this.vuexStore.dispatch(name, data);
        }
    }
};

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    computed: {},
    methods: {
        nowTimestamp: function nowTimestamp() {
            return moment().unix();
        },
        momentFromDateTime: function momentFromDateTime(dateTime) {
            return moment(dateTime, 'YYYY-MM-DD HH:mm:ss');
        },
        dateTimeToTimestamp: function dateTimeToTimestamp(dateTime) {
            return this.momentFromDateTime(dateTime).unix();
        },
        url: function url(path) {
            if (path && path.substring(0, 1) != '/') {
                path = '/' + path;
            }
            return this.baseUrl + path;
        },
        redirectToUrl: function redirectToUrl(url) {
            window.location.href = url;
        },
        redirectToUrlFromBaseUrl: function redirectToUrlFromBaseUrl(url) {
            window.location.href = this.url(url);
        },
        reloadPage: function reloadPage() {
            this.redirectToUrl(window.location);
        },
        objectToFormData: function objectToFormData(item) {
            var form_data = new FormData();

            for (var key in item) {
                form_data.append(key, item[key]);
            }

            return form_data;
        },
        isEmptyObject: function isEmptyObject(object) {
            return Object.keys(object).length === 0;
        },
        isMobile: function isMobile() {
            var isMobile = window.matchMedia("only screen and (max-width: 760px)");

            return isMobile.matches;
        }
    }
};

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_user__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_jquery__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_tools__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_bus__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_store__ = __webpack_require__(13);
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(7);

// Vue Directives
Vue.directive('focus', __webpack_require__(8));

// Vue Filters
Vue.filter('nl2br', __webpack_require__(10));

// Vue Mixins





Vue.mixin(__WEBPACK_IMPORTED_MODULE_0__mixins_user__["a" /* default */]);
Vue.mixin(__WEBPACK_IMPORTED_MODULE_1__mixins_jquery__["a" /* default */]);
Vue.mixin(__WEBPACK_IMPORTED_MODULE_2__mixins_tools__["a" /* default */]);
Vue.mixin(__WEBPACK_IMPORTED_MODULE_3__mixins_bus__["a" /* default */]);
Vue.mixin(__WEBPACK_IMPORTED_MODULE_4__mixins_store__["a" /* default */]);

// Vue Components
Vue.component('autosize-textarea', __webpack_require__(19));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('passport-clients', __webpack_require__(213));

Vue.component('passport-authorized-clients', __webpack_require__(212));

Vue.component('passport-personal-access-tokens', __webpack_require__(214));

Vue.component('example', __webpack_require__(18));
Vue.component('sl-oauth', __webpack_require__(203));

// Bus
var bus = new Vue({
    data: {
        title: "Someline"
    }
});
window.bus = bus;

// Vuex
var vuexStore = new Vuex.Store({
    state: {
        platform: 'console',
        count: 0
    },
    mutations: {
        increment: function increment(state) {
            state.count++;
        }
    }
});
window.vuexStore = vuexStore;

var app = new Vue({
    el: '#app',
    data: {
        msg: "hello"
    },
    computed: {},
    watch: {},
    events: {},
    created: function created() {
        console.log('Bootstrap.');
        this.initLocale();
    },
    mounted: function mounted() {
        console.log('Ready.');
    },

    methods: {
        initLocale: function initLocale() {
            console.log('Init Locale.');

            var that = this;
            var lang = this.locale;

            Vue.config.lang = lang;
            Vue.locale(lang, window.Someline.locales);
        }
    }
});

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    computed: {
        baseUrl: function baseUrl() {
            return Someline.baseUrl;
        },
        locale: function locale() {
            return Someline.locale;
        },
        currentUserId: function currentUserId() {
            console.log(Someline.state);
            return Someline.state.user.user_id;
        }
    }
};

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"autosize-textarea.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    mounted: function mounted() {
        console.log('Component ready.');
    }
};

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/libern/Code/someline-starter-master/resources/assets/js/components/Example.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Example.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a47b3826", Component.options)
  } else {
    hotAPI.reload("data-v-a47b3826", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    /*
     * The component's data.
     */
    data: function data() {
        return {
            tokens: []
        };
    },


    /**
     * Prepare the component (Vue 1.x).
     */
    ready: function ready() {
        this.prepareComponent();
    },


    /**
     * Prepare the component (Vue 2.x).
     */
    mounted: function mounted() {
        this.prepareComponent();
    },


    methods: {
        /**
         * Prepare the component (Vue 2.x).
         */
        prepareComponent: function prepareComponent() {
            this.getTokens();
        },


        /**
         * Get all of the authorized tokens for the user.
         */
        getTokens: function getTokens() {
            var _this = this;

            axios.get('/oauth/tokens').then(function (response) {
                _this.tokens = response.data;
            });
        },


        /**
         * Revoke the given token.
         */
        revoke: function revoke(token) {
            var _this2 = this;

            axios.delete('/oauth/tokens/' + token.id).then(function (response) {
                _this2.getTokens();
            });
        }
    }
};

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    /*
     * The component's data.
     */
    data: function data() {
        return {
            clients: [],

            createForm: {
                errors: [],
                name: '',
                redirect: ''
            },

            editForm: {
                errors: [],
                name: '',
                redirect: ''
            }
        };
    },


    /**
     * Prepare the component (Vue 1.x).
     */
    ready: function ready() {
        this.prepareComponent();
    },


    /**
     * Prepare the component (Vue 2.x).
     */
    mounted: function mounted() {
        this.prepareComponent();
    },


    methods: {
        /**
         * Prepare the component.
         */
        prepareComponent: function prepareComponent() {
            this.getClients();

            $('#modal-create-client').on('shown.bs.modal', function () {
                $('#create-client-name').focus();
            });

            $('#modal-edit-client').on('shown.bs.modal', function () {
                $('#edit-client-name').focus();
            });
        },


        /**
         * Get all of the OAuth clients for the user.
         */
        getClients: function getClients() {
            var _this = this;

            axios.get('/oauth/clients').then(function (response) {
                _this.clients = response.data;
            });
        },


        /**
         * Show the form for creating new clients.
         */
        showCreateClientForm: function showCreateClientForm() {
            $('#modal-create-client').modal('show');
        },


        /**
         * Create a new OAuth client for the user.
         */
        store: function store() {
            this.persistClient('post', '/oauth/clients', this.createForm, '#modal-create-client');
        },


        /**
         * Edit the given client.
         */
        edit: function edit(client) {
            this.editForm.id = client.id;
            this.editForm.name = client.name;
            this.editForm.redirect = client.redirect;

            $('#modal-edit-client').modal('show');
        },


        /**
         * Update the client being edited.
         */
        update: function update() {
            this.persistClient('put', '/oauth/clients/' + this.editForm.id, this.editForm, '#modal-edit-client');
        },


        /**
         * Persist the client to storage using the given form.
         */
        persistClient: function persistClient(method, uri, form, modal) {
            var _this2 = this;

            form.errors = [];

            axios[method](uri, form).then(function (response) {
                _this2.getClients();

                form.name = '';
                form.redirect = '';
                form.errors = [];

                $(modal).modal('hide');
            }).catch(function (response) {
                if (_typeof(response.data) === 'object') {
                    form.errors = _.flatten(_.toArray(response.data));
                } else {
                    form.errors = ['Something went wrong. Please try again.'];
                }
            });
        },


        /**
         * Destroy the given client.
         */
        destroy: function destroy(client) {
            var _this3 = this;

            axios.delete('/oauth/clients/' + client.id).then(function (response) {
                _this3.getClients();
            });
        }
    }
};

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    /*
     * The component's data.
     */
    data: function data() {
        return {
            accessToken: null,

            tokens: [],
            scopes: [],

            form: {
                name: '',
                scopes: [],
                errors: []
            }
        };
    },


    /**
     * Prepare the component (Vue 1.x).
     */
    ready: function ready() {
        this.prepareComponent();
    },


    /**
     * Prepare the component (Vue 2.x).
     */
    mounted: function mounted() {
        this.prepareComponent();
    },


    methods: {
        /**
         * Prepare the component.
         */
        prepareComponent: function prepareComponent() {
            this.getTokens();
            this.getScopes();

            $('#modal-create-token').on('shown.bs.modal', function () {
                $('#create-token-name').focus();
            });
        },


        /**
         * Get all of the personal access tokens for the user.
         */
        getTokens: function getTokens() {
            var _this = this;

            axios.get('/oauth/personal-access-tokens').then(function (response) {
                _this.tokens = response.data;
            });
        },


        /**
         * Get all of the available scopes.
         */
        getScopes: function getScopes() {
            var _this2 = this;

            axios.get('/oauth/scopes').then(function (response) {
                _this2.scopes = response.data;
            });
        },


        /**
         * Show the form for creating new tokens.
         */
        showCreateTokenForm: function showCreateTokenForm() {
            $('#modal-create-token').modal('show');
        },


        /**
         * Create a new personal access token.
         */
        store: function store() {
            var _this3 = this;

            this.accessToken = null;

            this.form.errors = [];

            axios.post('/oauth/personal-access-tokens', this.form).then(function (response) {
                _this3.form.name = '';
                _this3.form.scopes = [];
                _this3.form.errors = [];

                _this3.tokens.push(response.data.token);

                _this3.showAccessToken(response.data.accessToken);
            }).catch(function (response) {
                if (_typeof(response.data) === 'object') {
                    _this3.form.errors = _.flatten(_.toArray(response.data));
                } else {
                    _this3.form.errors = ['Something went wrong. Please try again.'];
                }
            });
        },


        /**
         * Toggle the given scope in the list of assigned scopes.
         */
        toggleScope: function toggleScope(scope) {
            if (this.scopeIsAssigned(scope)) {
                this.form.scopes = _.reject(this.form.scopes, function (s) {
                    return s == scope;
                });
            } else {
                this.form.scopes.push(scope);
            }
        },


        /**
         * Determine if the given scope has been assigned to the token.
         */
        scopeIsAssigned: function scopeIsAssigned(scope) {
            return _.indexOf(this.form.scopes, scope) >= 0;
        },


        /**
         * Show the given access token to the user.
         */
        showAccessToken: function showAccessToken(accessToken) {
            $('#modal-create-token').modal('hide');

            this.accessToken = accessToken;

            $('#modal-access-token').modal('show');
        },


        /**
         * Revoke the given token.
         */
        revoke: function revoke(token) {
            var _this4 = this;

            axios.delete('/oauth/personal-access-tokens/' + token.id).then(function (response) {
                _this4.getTokens();
            });
        }
    }
};

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.action-link[data-v-0632e6bd] {\n    cursor: pointer;\n}\n.m-b-none[data-v-0632e6bd] {\n    margin-bottom: 0;\n}\n", "", {"version":3,"sources":["/./resources/assets/js/components/passport/AuthorizedClients.vue?b2c8c1ec"],"names":[],"mappings":";AACA;IACA,gBAAA;CACA;AAEA;IACA,iBAAA;CACA","file":"AuthorizedClients.vue","sourcesContent":["<style scoped>\n    .action-link {\n        cursor: pointer;\n    }\n\n    .m-b-none {\n        margin-bottom: 0;\n    }\n</style>\n\n<template>\n    <div>\n        <div v-if=\"tokens.length > 0\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">Authorized Applications</div>\n\n                <div class=\"panel-body\">\n                    <!-- Authorized Tokens -->\n                    <table class=\"table table-borderless m-b-none\">\n                        <thead>\n                            <tr>\n                                <th>Name</th>\n                                <th>Scopes</th>\n                                <th></th>\n                            </tr>\n                        </thead>\n\n                        <tbody>\n                            <tr v-for=\"token in tokens\">\n                                <!-- Client Name -->\n                                <td style=\"vertical-align: middle;\">\n                                    {{ token.client.name }}\n                                </td>\n\n                                <!-- Scopes -->\n                                <td style=\"vertical-align: middle;\">\n                                    <span v-if=\"token.scopes.length > 0\">\n                                        {{ token.scopes.join(', ') }}\n                                    </span>\n                                </td>\n\n                                <!-- Revoke Button -->\n                                <td style=\"vertical-align: middle;\">\n                                    <a class=\"action-link text-danger\" @click=\"revoke(token)\">\n                                        Revoke\n                                    </a>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n    export default {\n        /*\n         * The component's data.\n         */\n        data() {\n            return {\n                tokens: []\n            };\n        },\n\n        /**\n         * Prepare the component (Vue 1.x).\n         */\n        ready() {\n            this.prepareComponent();\n        },\n\n        /**\n         * Prepare the component (Vue 2.x).\n         */\n        mounted() {\n            this.prepareComponent();\n        },\n\n        methods: {\n            /**\n             * Prepare the component (Vue 2.x).\n             */\n            prepareComponent() {\n                this.getTokens();\n            },\n\n            /**\n             * Get all of the authorized tokens for the user.\n             */\n            getTokens() {\n                axios.get('/oauth/tokens')\n                        .then(response => {\n                            this.tokens = response.data;\n                        });\n            },\n\n            /**\n             * Revoke the given token.\n             */\n            revoke(token) {\n                axios.delete('/oauth/tokens/' + token.id)\n                        .then(response => {\n                            this.getTokens();\n                        });\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.action-link[data-v-31728d50] {\n    cursor: pointer;\n}\n.m-b-none[data-v-31728d50] {\n    margin-bottom: 0;\n}\n", "", {"version":3,"sources":["/./resources/assets/js/components/passport/Clients.vue?0a388e40"],"names":[],"mappings":";AACA;IACA,gBAAA;CACA;AAEA;IACA,iBAAA;CACA","file":"Clients.vue","sourcesContent":["<style scoped>\n    .action-link {\n        cursor: pointer;\n    }\n\n    .m-b-none {\n        margin-bottom: 0;\n    }\n</style>\n\n<template>\n    <div>\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <div style=\"display: flex; justify-content: space-between; align-items: center;\">\n                    <span>\n                        OAuth Clients\n                    </span>\n\n                    <a class=\"action-link\" @click=\"showCreateClientForm\">\n                        Create New Client\n                    </a>\n                </div>\n            </div>\n\n            <div class=\"panel-body\">\n                <!-- Current Clients -->\n                <p class=\"m-b-none\" v-if=\"clients.length === 0\">\n                    You have not created any OAuth clients.\n                </p>\n\n                <table class=\"table table-borderless m-b-none\" v-if=\"clients.length > 0\">\n                    <thead>\n                        <tr>\n                            <th>Client ID</th>\n                            <th>Name</th>\n                            <th>Secret</th>\n                            <th></th>\n                            <th></th>\n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        <tr v-for=\"client in clients\">\n                            <!-- ID -->\n                            <td style=\"vertical-align: middle;\">\n                                {{ client.id }}\n                            </td>\n\n                            <!-- Name -->\n                            <td style=\"vertical-align: middle;\">\n                                {{ client.name }}\n                            </td>\n\n                            <!-- Secret -->\n                            <td style=\"vertical-align: middle;\">\n                                <code>{{ client.secret }}</code>\n                            </td>\n\n                            <!-- Edit Button -->\n                            <td style=\"vertical-align: middle;\">\n                                <a class=\"action-link\" @click=\"edit(client)\">\n                                    Edit\n                                </a>\n                            </td>\n\n                            <!-- Delete Button -->\n                            <td style=\"vertical-align: middle;\">\n                                <a class=\"action-link text-danger\" @click=\"destroy(client)\">\n                                    Delete\n                                </a>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n        <!-- Create Client Modal -->\n        <div class=\"modal fade\" id=\"modal-create-client\" tabindex=\"-1\" role=\"dialog\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button \" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\n                        <h4 class=\"modal-title\">\n                            Create Client\n                        </h4>\n                    </div>\n\n                    <div class=\"modal-body\">\n                        <!-- Form Errors -->\n                        <div class=\"alert alert-danger\" v-if=\"createForm.errors.length > 0\">\n                            <p><strong>Whoops!</strong> Something went wrong!</p>\n                            <br>\n                            <ul>\n                                <li v-for=\"error in createForm.errors\">\n                                    {{ error }}\n                                </li>\n                            </ul>\n                        </div>\n\n                        <!-- Create Client Form -->\n                        <form class=\"form-horizontal\" role=\"form\">\n                            <!-- Name -->\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3 control-label\">Name</label>\n\n                                <div class=\"col-md-7\">\n                                    <input id=\"create-client-name\" type=\"text\" class=\"form-control\"\n                                                                @keyup.enter=\"store\" v-model=\"createForm.name\">\n\n                                    <span class=\"help-block\">\n                                        Something your users will recognize and trust.\n                                    </span>\n                                </div>\n                            </div>\n\n                            <!-- Redirect URL -->\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3 control-label\">Redirect URL</label>\n\n                                <div class=\"col-md-7\">\n                                    <input type=\"text\" class=\"form-control\" name=\"redirect\"\n                                                    @keyup.enter=\"store\" v-model=\"createForm.redirect\">\n\n                                    <span class=\"help-block\">\n                                        Your application's authorization callback URL.\n                                    </span>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n\n                    <!-- Modal Actions -->\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\n                        <button type=\"button\" class=\"btn btn-primary\" @click=\"store\">\n                            Create\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- Edit Client Modal -->\n        <div class=\"modal fade\" id=\"modal-edit-client\" tabindex=\"-1\" role=\"dialog\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button \" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\n                        <h4 class=\"modal-title\">\n                            Edit Client\n                        </h4>\n                    </div>\n\n                    <div class=\"modal-body\">\n                        <!-- Form Errors -->\n                        <div class=\"alert alert-danger\" v-if=\"editForm.errors.length > 0\">\n                            <p><strong>Whoops!</strong> Something went wrong!</p>\n                            <br>\n                            <ul>\n                                <li v-for=\"error in editForm.errors\">\n                                    {{ error }}\n                                </li>\n                            </ul>\n                        </div>\n\n                        <!-- Edit Client Form -->\n                        <form class=\"form-horizontal\" role=\"form\">\n                            <!-- Name -->\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3 control-label\">Name</label>\n\n                                <div class=\"col-md-7\">\n                                    <input id=\"edit-client-name\" type=\"text\" class=\"form-control\"\n                                                                @keyup.enter=\"update\" v-model=\"editForm.name\">\n\n                                    <span class=\"help-block\">\n                                        Something your users will recognize and trust.\n                                    </span>\n                                </div>\n                            </div>\n\n                            <!-- Redirect URL -->\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3 control-label\">Redirect URL</label>\n\n                                <div class=\"col-md-7\">\n                                    <input type=\"text\" class=\"form-control\" name=\"redirect\"\n                                                    @keyup.enter=\"update\" v-model=\"editForm.redirect\">\n\n                                    <span class=\"help-block\">\n                                        Your application's authorization callback URL.\n                                    </span>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n\n                    <!-- Modal Actions -->\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\n                        <button type=\"button\" class=\"btn btn-primary\" @click=\"update\">\n                            Save Changes\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n    export default {\n        /*\n         * The component's data.\n         */\n        data() {\n            return {\n                clients: [],\n\n                createForm: {\n                    errors: [],\n                    name: '',\n                    redirect: ''\n                },\n\n                editForm: {\n                    errors: [],\n                    name: '',\n                    redirect: ''\n                }\n            };\n        },\n\n        /**\n         * Prepare the component (Vue 1.x).\n         */\n        ready() {\n            this.prepareComponent();\n        },\n\n        /**\n         * Prepare the component (Vue 2.x).\n         */\n        mounted() {\n            this.prepareComponent();\n        },\n\n        methods: {\n            /**\n             * Prepare the component.\n             */\n            prepareComponent() {\n                this.getClients();\n\n                $('#modal-create-client').on('shown.bs.modal', () => {\n                    $('#create-client-name').focus();\n                });\n\n                $('#modal-edit-client').on('shown.bs.modal', () => {\n                    $('#edit-client-name').focus();\n                });\n            },\n\n            /**\n             * Get all of the OAuth clients for the user.\n             */\n            getClients() {\n                axios.get('/oauth/clients')\n                        .then(response => {\n                            this.clients = response.data;\n                        });\n            },\n\n            /**\n             * Show the form for creating new clients.\n             */\n            showCreateClientForm() {\n                $('#modal-create-client').modal('show');\n            },\n\n            /**\n             * Create a new OAuth client for the user.\n             */\n            store() {\n                this.persistClient(\n                    'post', '/oauth/clients',\n                    this.createForm, '#modal-create-client'\n                );\n            },\n\n            /**\n             * Edit the given client.\n             */\n            edit(client) {\n                this.editForm.id = client.id;\n                this.editForm.name = client.name;\n                this.editForm.redirect = client.redirect;\n\n                $('#modal-edit-client').modal('show');\n            },\n\n            /**\n             * Update the client being edited.\n             */\n            update() {\n                this.persistClient(\n                    'put', '/oauth/clients/' + this.editForm.id,\n                    this.editForm, '#modal-edit-client'\n                );\n            },\n\n            /**\n             * Persist the client to storage using the given form.\n             */\n            persistClient(method, uri, form, modal) {\n                form.errors = [];\n\n                axios[method](uri, form)\n                    .then(response => {\n                        this.getClients();\n\n                        form.name = '';\n                        form.redirect = '';\n                        form.errors = [];\n\n                        $(modal).modal('hide');\n                    })\n                    .catch(response => {\n                        if (typeof response.data === 'object') {\n                            form.errors = _.flatten(_.toArray(response.data));\n                        } else {\n                            form.errors = ['Something went wrong. Please try again.'];\n                        }\n                    });\n            },\n\n            /**\n             * Destroy the given client.\n             */\n            destroy(client) {\n                axios.delete('/oauth/clients/' + client.id)\n                        .then(response => {\n                            this.getClients();\n                        });\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(22)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(21),
  /* scopeId */
  "data-v-db7829ae",
  /* cssModules */
  null
)
Component.options.__file = "/Users/libern/Code/someline-starter-master/resources/assets/js/essentials/autosize-textarea.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] autosize-textarea.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-db7829ae", Component.options)
  } else {
    hotAPI.reload("data-v-db7829ae", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.action-link[data-v-af1adf44] {\n    cursor: pointer;\n}\n.m-b-none[data-v-af1adf44] {\n    margin-bottom: 0;\n}\n", "", {"version":3,"sources":["/./resources/assets/js/components/passport/PersonalAccessTokens.vue?17591698"],"names":[],"mappings":";AACA;IACA,gBAAA;CACA;AAEA;IACA,iBAAA;CACA","file":"PersonalAccessTokens.vue","sourcesContent":["<style scoped>\n    .action-link {\n        cursor: pointer;\n    }\n\n    .m-b-none {\n        margin-bottom: 0;\n    }\n</style>\n\n<template>\n    <div>\n        <div>\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <div style=\"display: flex; justify-content: space-between; align-items: center;\">\n                        <span>\n                            Personal Access Tokens\n                        </span>\n\n                        <a class=\"action-link\" @click=\"showCreateTokenForm\">\n                            Create New Token\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"panel-body\">\n                    <!-- No Tokens Notice -->\n                    <p class=\"m-b-none\" v-if=\"tokens.length === 0\">\n                        You have not created any personal access tokens.\n                    </p>\n\n                    <!-- Personal Access Tokens -->\n                    <table class=\"table table-borderless m-b-none\" v-if=\"tokens.length > 0\">\n                        <thead>\n                            <tr>\n                                <th>Name</th>\n                                <th></th>\n                            </tr>\n                        </thead>\n\n                        <tbody>\n                            <tr v-for=\"token in tokens\">\n                                <!-- Client Name -->\n                                <td style=\"vertical-align: middle;\">\n                                    {{ token.name }}\n                                </td>\n\n                                <!-- Delete Button -->\n                                <td style=\"vertical-align: middle;\">\n                                    <a class=\"action-link text-danger\" @click=\"revoke(token)\">\n                                        Delete\n                                    </a>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <!-- Create Token Modal -->\n        <div class=\"modal fade\" id=\"modal-create-token\" tabindex=\"-1\" role=\"dialog\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button \" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\n                        <h4 class=\"modal-title\">\n                            Create Token\n                        </h4>\n                    </div>\n\n                    <div class=\"modal-body\">\n                        <!-- Form Errors -->\n                        <div class=\"alert alert-danger\" v-if=\"form.errors.length > 0\">\n                            <p><strong>Whoops!</strong> Something went wrong!</p>\n                            <br>\n                            <ul>\n                                <li v-for=\"error in form.errors\">\n                                    {{ error }}\n                                </li>\n                            </ul>\n                        </div>\n\n                        <!-- Create Token Form -->\n                        <form class=\"form-horizontal\" role=\"form\" @submit.prevent=\"store\">\n                            <!-- Name -->\n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">Name</label>\n\n                                <div class=\"col-md-6\">\n                                    <input id=\"create-token-name\" type=\"text\" class=\"form-control\" name=\"name\" v-model=\"form.name\">\n                                </div>\n                            </div>\n\n                            <!-- Scopes -->\n                            <div class=\"form-group\" v-if=\"scopes.length > 0\">\n                                <label class=\"col-md-4 control-label\">Scopes</label>\n\n                                <div class=\"col-md-6\">\n                                    <div v-for=\"scope in scopes\">\n                                        <div class=\"checkbox\">\n                                            <label>\n                                                <input type=\"checkbox\"\n                                                    @click=\"toggleScope(scope.id)\"\n                                                    :checked=\"scopeIsAssigned(scope.id)\">\n\n                                                    {{ scope.id }}\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n\n                    <!-- Modal Actions -->\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\n                        <button type=\"button\" class=\"btn btn-primary\" @click=\"store\">\n                            Create\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- Access Token Modal -->\n        <div class=\"modal fade\" id=\"modal-access-token\" tabindex=\"-1\" role=\"dialog\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button \" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\n                        <h4 class=\"modal-title\">\n                            Personal Access Token\n                        </h4>\n                    </div>\n\n                    <div class=\"modal-body\">\n                        <p>\n                            Here is your new personal access token. This is the only time it will be shown so don't lose it!\n                            You may now use this token to make API requests.\n                        </p>\n\n                        <pre><code>{{ accessToken }}</code></pre>\n                    </div>\n\n                    <!-- Modal Actions -->\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n    export default {\n        /*\n         * The component's data.\n         */\n        data() {\n            return {\n                accessToken: null,\n\n                tokens: [],\n                scopes: [],\n\n                form: {\n                    name: '',\n                    scopes: [],\n                    errors: []\n                }\n            };\n        },\n\n        /**\n         * Prepare the component (Vue 1.x).\n         */\n        ready() {\n            this.prepareComponent();\n        },\n\n        /**\n         * Prepare the component (Vue 2.x).\n         */\n        mounted() {\n            this.prepareComponent();\n        },\n\n        methods: {\n            /**\n             * Prepare the component.\n             */\n            prepareComponent() {\n                this.getTokens();\n                this.getScopes();\n\n                $('#modal-create-token').on('shown.bs.modal', () => {\n                    $('#create-token-name').focus();\n                });\n            },\n\n            /**\n             * Get all of the personal access tokens for the user.\n             */\n            getTokens() {\n                axios.get('/oauth/personal-access-tokens')\n                        .then(response => {\n                            this.tokens = response.data;\n                        });\n            },\n\n            /**\n             * Get all of the available scopes.\n             */\n            getScopes() {\n                axios.get('/oauth/scopes')\n                        .then(response => {\n                            this.scopes = response.data;\n                        });\n            },\n\n            /**\n             * Show the form for creating new tokens.\n             */\n            showCreateTokenForm() {\n                $('#modal-create-token').modal('show');\n            },\n\n            /**\n             * Create a new personal access token.\n             */\n            store() {\n                this.accessToken = null;\n\n                this.form.errors = [];\n\n                axios.post('/oauth/personal-access-tokens', this.form)\n                        .then(response => {\n                            this.form.name = '';\n                            this.form.scopes = [];\n                            this.form.errors = [];\n\n                            this.tokens.push(response.data.token);\n\n                            this.showAccessToken(response.data.accessToken);\n                        })\n                        .catch(response => {\n                            if (typeof response.data === 'object') {\n                                this.form.errors = _.flatten(_.toArray(response.data));\n                            } else {\n                                this.form.errors = ['Something went wrong. Please try again.'];\n                            }\n                        });\n            },\n\n            /**\n             * Toggle the given scope in the list of assigned scopes.\n             */\n            toggleScope(scope) {\n                if (this.scopeIsAssigned(scope)) {\n                    this.form.scopes = _.reject(this.form.scopes, s => s == scope);\n                } else {\n                    this.form.scopes.push(scope);\n                }\n            },\n\n            /**\n             * Determine if the given scope has been assigned to the token.\n             */\n            scopeIsAssigned(scope) {\n                return _.indexOf(this.form.scopes, scope) >= 0;\n            },\n\n            /**\n             * Show the given access token to the user.\n             */\n            showAccessToken(accessToken) {\n                $('#modal-create-token').modal('hide');\n\n                this.accessToken = accessToken;\n\n                $('#modal-access-token').modal('show');\n            },\n\n            /**\n             * Revoke the given token.\n             */\n            revoke(token) {\n                axios.delete('/oauth/personal-access-tokens/' + token.id)\n                        .then(response => {\n                            this.getTokens();\n                        });\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8 col-md-offset-2"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Example Component")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                    I'm an example component!\n                ")])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a47b3826", module.exports)
  }
}

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(173),
  /* template */
  __webpack_require__(225),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/libern/Code/someline-starter-master/resources/assets/js/components/console/OAuth.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] OAuth.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b19c587c", Component.options)
  } else {
    hotAPI.reload("data-v-b19c587c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('textarea')
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-db7829ae", module.exports)
  }
}

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(229)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(182),
  /* template */
  __webpack_require__(215),
  /* scopeId */
  "data-v-0632e6bd",
  /* cssModules */
  null
)
Component.options.__file = "/Users/libern/Code/someline-starter-master/resources/assets/js/components/passport/AuthorizedClients.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AuthorizedClients.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0632e6bd", Component.options)
  } else {
    hotAPI.reload("data-v-0632e6bd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(231)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(183),
  /* template */
  __webpack_require__(217),
  /* scopeId */
  "data-v-31728d50",
  /* cssModules */
  null
)
Component.options.__file = "/Users/libern/Code/someline-starter-master/resources/assets/js/components/passport/Clients.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Clients.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31728d50", Component.options)
  } else {
    hotAPI.reload("data-v-31728d50", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(238)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(184),
  /* template */
  __webpack_require__(224),
  /* scopeId */
  "data-v-af1adf44",
  /* cssModules */
  null
)
Component.options.__file = "/Users/libern/Code/someline-starter-master/resources/assets/js/components/passport/PersonalAccessTokens.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PersonalAccessTokens.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-af1adf44", Component.options)
  } else {
    hotAPI.reload("data-v-af1adf44", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.tokens.length > 0) ? _c('div', [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Authorized Applications")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('table', {
    staticClass: "table table-borderless m-b-none"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.tokens), function(token) {
    return _c('tr', [_c('td', {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_vm._v("\n                                " + _vm._s(token.client.name) + "\n                            ")]), _vm._v(" "), _c('td', {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [(token.scopes.length > 0) ? _c('span', [_vm._v("\n                                    " + _vm._s(token.scopes.join(', ')) + "\n                                ")]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_c('a', {
      staticClass: "action-link text-danger",
      on: {
        "click": function($event) {
          _vm.revoke(token)
        }
      }
    }, [_vm._v("\n                                    Revoke\n                                ")])])])
  }))])])])]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Scopes")]), _vm._v(" "), _c('th')])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0632e6bd", module.exports)
  }
}

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('div', {
    staticStyle: {
      "display": "flex",
      "justify-content": "space-between",
      "align-items": "center"
    }
  }, [_c('span', [_vm._v("\n                    OAuth Clients\n                ")]), _vm._v(" "), _c('a', {
    staticClass: "action-link",
    on: {
      "click": _vm.showCreateClientForm
    }
  }, [_vm._v("\n                    Create New Client\n                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [(_vm.clients.length === 0) ? _c('p', {
    staticClass: "m-b-none"
  }, [_vm._v("\n                You have not created any OAuth clients.\n            ")]) : _vm._e(), _vm._v(" "), (_vm.clients.length > 0) ? _c('table', {
    staticClass: "table table-borderless m-b-none"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.clients), function(client) {
    return _c('tr', [_c('td', {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_vm._v("\n                            " + _vm._s(client.id) + "\n                        ")]), _vm._v(" "), _c('td', {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_vm._v("\n                            " + _vm._s(client.name) + "\n                        ")]), _vm._v(" "), _c('td', {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_c('code', [_vm._v(_vm._s(client.secret))])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_c('a', {
      staticClass: "action-link",
      on: {
        "click": function($event) {
          _vm.edit(client)
        }
      }
    }, [_vm._v("\n                                Edit\n                            ")])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_c('a', {
      staticClass: "action-link text-danger",
      on: {
        "click": function($event) {
          _vm.destroy(client)
        }
      }
    }, [_vm._v("\n                                Delete\n                            ")])])])
  }))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "modal-create-client",
      "tabindex": "-1",
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [(_vm.createForm.errors.length > 0) ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._m(2), _vm._v(" "), _c('br'), _vm._v(" "), _c('ul', _vm._l((_vm.createForm.errors), function(error) {
    return _c('li', [_vm._v("\n                                " + _vm._s(error) + "\n                            ")])
  }))]) : _vm._e(), _vm._v(" "), _c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "role": "form"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-3 control-label"
  }, [_vm._v("Name")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-7"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.createForm.name),
      expression: "createForm.name"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "create-client-name",
      "type": "text"
    },
    domProps: {
      "value": _vm._s(_vm.createForm.name)
    },
    on: {
      "keyup": function($event) {
        if (_vm._k($event.keyCode, "enter", 13)) { return; }
        _vm.store($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.createForm.name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                    Something your users will recognize and trust.\n                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-3 control-label"
  }, [_vm._v("Redirect URL")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-7"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.createForm.redirect),
      expression: "createForm.redirect"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "redirect"
    },
    domProps: {
      "value": _vm._s(_vm.createForm.redirect)
    },
    on: {
      "keyup": function($event) {
        if (_vm._k($event.keyCode, "enter", 13)) { return; }
        _vm.store($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.createForm.redirect = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                    Your application's authorization callback URL.\n                                ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.store
    }
  }, [_vm._v("\n                        Create\n                    ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "modal-edit-client",
      "tabindex": "-1",
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [(_vm.editForm.errors.length > 0) ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._m(4), _vm._v(" "), _c('br'), _vm._v(" "), _c('ul', _vm._l((_vm.editForm.errors), function(error) {
    return _c('li', [_vm._v("\n                                " + _vm._s(error) + "\n                            ")])
  }))]) : _vm._e(), _vm._v(" "), _c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "role": "form"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-3 control-label"
  }, [_vm._v("Name")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-7"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editForm.name),
      expression: "editForm.name"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "edit-client-name",
      "type": "text"
    },
    domProps: {
      "value": _vm._s(_vm.editForm.name)
    },
    on: {
      "keyup": function($event) {
        if (_vm._k($event.keyCode, "enter", 13)) { return; }
        _vm.update($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editForm.name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                    Something your users will recognize and trust.\n                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-3 control-label"
  }, [_vm._v("Redirect URL")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-7"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editForm.redirect),
      expression: "editForm.redirect"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "redirect"
    },
    domProps: {
      "value": _vm._s(_vm.editForm.redirect)
    },
    on: {
      "keyup": function($event) {
        if (_vm._k($event.keyCode, "enter", 13)) { return; }
        _vm.update($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editForm.redirect = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                    Your application's authorization callback URL.\n                                ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.update
    }
  }, [_vm._v("\n                        Save Changes\n                    ")])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Client ID")]), _vm._v(" "), _c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Secret")]), _vm._v(" "), _c('th'), _vm._v(" "), _c('th')])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button ",
      "data-dismiss": "modal",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("\n                        Create Client\n                    ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('strong', [_vm._v("Whoops!")]), _vm._v(" Something went wrong!")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button ",
      "data-dismiss": "modal",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("\n                        Edit Client\n                    ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('strong', [_vm._v("Whoops!")]), _vm._v(" Something went wrong!")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-31728d50", module.exports)
  }
}

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("510b7750", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-db7829ae&scoped=true!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./autosize-textarea.vue", function() {
     var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-db7829ae&scoped=true!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./autosize-textarea.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('div', {
    staticStyle: {
      "display": "flex",
      "justify-content": "space-between",
      "align-items": "center"
    }
  }, [_c('span', [_vm._v("\n                        Personal Access Tokens\n                    ")]), _vm._v(" "), _c('a', {
    staticClass: "action-link",
    on: {
      "click": _vm.showCreateTokenForm
    }
  }, [_vm._v("\n                        Create New Token\n                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [(_vm.tokens.length === 0) ? _c('p', {
    staticClass: "m-b-none"
  }, [_vm._v("\n                    You have not created any personal access tokens.\n                ")]) : _vm._e(), _vm._v(" "), (_vm.tokens.length > 0) ? _c('table', {
    staticClass: "table table-borderless m-b-none"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.tokens), function(token) {
    return _c('tr', [_c('td', {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_vm._v("\n                                " + _vm._s(token.name) + "\n                            ")]), _vm._v(" "), _c('td', {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_c('a', {
      staticClass: "action-link text-danger",
      on: {
        "click": function($event) {
          _vm.revoke(token)
        }
      }
    }, [_vm._v("\n                                    Delete\n                                ")])])])
  }))]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "modal-create-token",
      "tabindex": "-1",
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [(_vm.form.errors.length > 0) ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._m(2), _vm._v(" "), _c('br'), _vm._v(" "), _c('ul', _vm._l((_vm.form.errors), function(error) {
    return _c('li', [_vm._v("\n                                " + _vm._s(error) + "\n                            ")])
  }))]) : _vm._e(), _vm._v(" "), _c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.store($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-4 control-label"
  }, [_vm._v("Name")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.name),
      expression: "form.name"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "create-token-name",
      "type": "text",
      "name": "name"
    },
    domProps: {
      "value": _vm._s(_vm.form.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.name = $event.target.value
      }
    }
  })])]), _vm._v(" "), (_vm.scopes.length > 0) ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-4 control-label"
  }, [_vm._v("Scopes")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, _vm._l((_vm.scopes), function(scope) {
    return _c('div', [_c('div', {
      staticClass: "checkbox"
    }, [_c('label', [_c('input', {
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": _vm.scopeIsAssigned(scope.id)
      },
      on: {
        "click": function($event) {
          _vm.toggleScope(scope.id)
        }
      }
    }), _vm._v("\n\n                                                " + _vm._s(scope.id) + "\n                                        ")])])])
  }))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.store
    }
  }, [_vm._v("\n                        Create\n                    ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "modal-access-token",
      "tabindex": "-1",
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('p', [_vm._v("\n                        Here is your new personal access token. This is the only time it will be shown so don't lose it!\n                        You may now use this token to make API requests.\n                    ")]), _vm._v(" "), _c('pre', [_c('code', [_vm._v(_vm._s(_vm.accessToken))])])]), _vm._v(" "), _vm._m(4)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th')])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button ",
      "data-dismiss": "modal",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("\n                        Create Token\n                    ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('strong', [_vm._v("Whoops!")]), _vm._v(" Something went wrong!")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button ",
      "data-dismiss": "modal",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("\n                        Personal Access Token\n                    ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-af1adf44", module.exports)
  }
}

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('passport-clients'), _vm._v(" "), _c('passport-authorized-clients'), _vm._v(" "), _c('passport-personal-access-tokens')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b19c587c", module.exports)
  }
}

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("00261635", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0632e6bd&scoped=true!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AuthorizedClients.vue", function() {
     var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0632e6bd&scoped=true!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AuthorizedClients.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(189);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("f7c283bc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-31728d50&scoped=true!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Clients.vue", function() {
     var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-31728d50&scoped=true!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Clients.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("86b71d56", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-af1adf44&scoped=true!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PersonalAccessTokens.vue", function() {
     var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-af1adf44&scoped=true!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PersonalAccessTokens.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(148);


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(23)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = { css: css, media: media, sourceMap: sourceMap }
    if (!newStyles[id]) {
      part.id = parentId + ':0'
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      part.id = parentId + ':' + newStyles[id].parts.length
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
  var hasSSR = styleElement != null

  // if in production mode and style is already provided by SSR,
  // simply do nothing.
  if (hasSSR && isProduction) {
    return noop
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = styleElement || createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (!hasSSR) {
    update(obj)
  }

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    mounted: function mounted() {
        console.log('Component mounted.');
    }
};

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_autosize__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_autosize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_autosize__);
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    props: ['resized'],
    mounted: function mounted() {
        __WEBPACK_IMPORTED_MODULE_0_autosize___default()(this.$el);
        if (this.resized) {
            this.$parent[this.resized](this.$el);
        }
    }
};

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(26);
window.moment = __webpack_require__(0);

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

window.Vue = __webpack_require__(29);
window.Vuex = __webpack_require__(30);
window.VueRouter = __webpack_require__(28);
window.VueI18n = __webpack_require__(27);
__webpack_require__(9);

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueI18n);

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(25);

window.axios.defaults.headers.common = {
  'X-CSRF-TOKEN': window.Laravel.csrfToken,
  'X-Requested-With': 'XMLHttpRequest',
  'Accept-Language': Someline.locale
};

Vue.prototype.$http = window.$http = window.axios;

var apiAxios = axios.create({
  baseURL: '/api/',
  timeout: 10000,
  headers: {
    'Accept': 'application/x.someline.v1+json'
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

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * Created by Libern on 26/5/16.
 */
/* harmony default export */ __webpack_exports__["default"] = {
    bind: function bind() {
        this.el.focus();
    }
};

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

/**
 * Changes value to past tense.
 * Simple filter does not support irregular verbs such as eat-ate, fly-flew, etc.
 * http://jsfiddle.net/bryan_k/0xczme2r/
 *
 * @param {String} value The value string.
 */
Vue.filter('past-tense', function (value) {
    // Slightly follows http://www.oxforddictionaries.com/us/words/verb-tenses-adding-ed-and-ing
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    if (!value) {
        return;
    }

    var last = value.toLowerCase().substr(value.length - 1),
        secondLast = value.toLowerCase().substr(value.length - 2, 1),
        thirdLast = value.toLowerCase().substr(value.length - 3, 1),
        lastTwo = value.toLowerCase().substr(value.length - 2),
        lastThree = value.toLowerCase().substr(value.length - 3),
        inArray = function inArray(ar, value) {
        return ar.indexOf(value) != -1;
    };

    // participle or already past tense, don't want
    if (lastThree === 'ing' || lastTwo === 'ed') {
        return value;
    }

    // Ends in 'e', simply add the 'd'
    if (last === 'e') {
        return value + 'd';
    }

    // Ends in 'c', add the 'ked'
    if (last === 'c') {
        return value + 'ked';
    }

    // Ends with consonant, vowel, consonant. I'm simple, double consonant and add 'ed'
    if (!inArray(vowels, thirdLast) && inArray(vowels, secondLast) && !inArray(vowels, last)) {
        return value + last + 'ed';
    }

    return value + 'ed';
});

/**
 * Vue filter to convert a slug to a more human friendly form.
 *
 * @param {String} value The value string.
 */
Vue.filter('humanable', function (value) {
    var words = value.split(/[-_]+/g);
    var results = [];
    for (var i = 0; i < words.length; i++) {
        var letter = words[i].charAt(0).toUpperCase();
        results.push(letter + words[i].slice(1));
    }
    return results.join(' ');
});

/**
 * Vue filter to convert the given value to percent.
 * http://jsfiddle.net/bryan_k/qauf3qyh/
 *
 * @param {String} value    The value string.
 * @param {Number} decimals The number of decimal places.
 */
Vue.filter('percentage', function (value, decimals) {
    if (!value) {
        value = 0;
    }

    if (!decimals) {
        decimals = 0;
    }

    value = value * 100;
    value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
    value = value + '%';
    return value;
});

/**
 * Vue filter to round the decimal to the given place.
 * http://jsfiddle.net/bryan_k/3ova17y9/
 *
 * @param {String} value    The value string.
 * @param {Number} decimals The number of decimal places.
 */
Vue.filter('round', function (value, decimals) {
    if (!value) {
        value = 0;
    }

    if (!decimals) {
        decimals = 0;
    }

    value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
    return value;
});

/**
 * Vue filter to convert the given value to whole dollars, no change.
 * http://jsfiddle.net/bryan_k/2t6bqqfc/
 *
 * @param {String} value The value string.
 */
Vue.filter('no-change', function (value, symbol) {
    if (!value) {
        value = 0;
    }

    if (!symbol) {
        symbol = '$';
    }

    value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',').split('.')[0];
    return symbol + value;
});

/**
 * Vue filter to make a simple timestamp for an ISO date.
 * http://jsfiddle.net/bryan_k/44kqtpeg/
 *
 * @param {String} value The value string.
 */
Vue.filter('timestamp', function (value) {
    var parts = value.split(' ');
    var date = parts[0];
    var time = parts[1];

    date = date.split('-');
    time = time.split(':');

    if (parseInt(time[0], 10) > 12) {
        var hour = parseInt(time[0], 10) % 12;
    } else {
        var hour = parseInt(time[0], 10);
    }

    hour = hour < 10 ? '0' + hour : hour;

    return '[' + date[1] + '/' + date[2] + ' ' + hour + ':' + time[1] + ']';
});

/**
 * Vue filter to truncate a string to the specified length.
 * @param {String} value The value string.
 */
Vue.filter('truncate', function (value, length) {
    if (value.length < length) {
        return value;
    }

    length = length - 3;

    return value.substring(0, length) + '...';
});

/***/ })

},[243]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzP2Q0ZjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9maWx0ZXJzL25sMmJyLmpzPzZlNzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYnVzLmpzPzE4M2YiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvanF1ZXJ5LmpzP2RlZTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvc3RvcmUuanM/YTNlNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy90b29scy5qcz8yZTAwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29uc29sZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy91c2VyLmpzPzkzYjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZT9kMmRhKiIsIndlYnBhY2s6Ly8vT0F1dGgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZT8wYmZlIiwid2VicGFjazovLy9BdXRob3JpemVkQ2xpZW50cy52dWUiLCJ3ZWJwYWNrOi8vL0NsaWVudHMudnVlIiwid2VicGFjazovLy9QZXJzb25hbEFjY2Vzc1Rva2Vucy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L0F1dGhvcml6ZWRDbGllbnRzLnZ1ZT81N2M4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXNzcG9ydC9DbGllbnRzLnZ1ZT9mYmE5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L1BlcnNvbmFsQWNjZXNzVG9rZW5zLnZ1ZT9iM2UxIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanM/ZGEwNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRXhhbXBsZS52dWU/NWZjOSoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbnNvbGUvT0F1dGgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWU/MDVjNCoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L0F1dGhvcml6ZWRDbGllbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQ2xpZW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L1BlcnNvbmFsQWNjZXNzVG9rZW5zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQXV0aG9yaXplZENsaWVudHMudnVlPzY1MjYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L0NsaWVudHMudnVlPzVmMjAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZT8wZGQ5KiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvUGVyc29uYWxBY2Nlc3NUb2tlbnMudnVlPzk3NDAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbnNvbGUvT0F1dGgudnVlPzA4YTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L0F1dGhvcml6ZWRDbGllbnRzLnZ1ZT82NjljIiwid2VicGFjazovLy8uL34vdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzP2U2YWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L0NsaWVudHMudnVlP2EyNmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L1BlcnNvbmFsQWNjZXNzVG9rZW5zLnZ1ZT8xYzM4Iiwid2VicGFjazovLy8uL34vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzPzZiMmIiLCJ3ZWJwYWNrOi8vL0V4YW1wbGUudnVlPzM0NGMiLCJ3ZWJwYWNrOi8vL2F1dG9zaXplLXRleHRhcmVhLnZ1ZT8yOTUzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzPzU5MTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kaXJlY3RpdmVzL2ZvY3VzLmpzP2RiNWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9maWx0ZXJzL2hlbHBlcnMuanM/OThmNCJdLCJuYW1lcyI6WyJyZWFkIiwidmFsIiwicmVwbGFjZSIsIlJlZ0V4cCIsImNvbXB1dGVkIiwiYnVzIiwid2luZG93IiwibWV0aG9kcyIsImV2ZW50RW1pdCIsIm5hbWUiLCJkYXRhIiwiJGVtaXQiLCJldmVudE9uIiwiY2FsbGJhY2siLCIkb24iLCJldmVudE9mZiIsIiRvZmYiLCJBcHBIZWFkZXJTZXRUaXRsZSIsInRpdGxlIiwiQXBwVGFiQmFyU2V0U2hvd0FwcFRhYkJhciIsImlzU2hvdyIsIkFwcFRhYkJhclNlbGVjdFRhYkJhckl0ZW0iLCJpbmRleCIsIkFwcEhlYWRlclNldE5hdkJ1dHRvbkxlZnQiLCJjbGFzc05hbWUiLCJBcHBIZWFkZXJTZXROYXZCdXR0b25SaWdodCIsInNjcm9sbFRvQm90dG9tIiwic2VsZWN0b3IiLCJhbmltYXRlZCIsImFuaW1hdGVUaW1lIiwiJGVsZW1lbnQiLCIkIiwic2Nyb2xsSGVpZ2h0IiwicHJvcCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ2dWV4U3RvcmUiLCJzdG9yZUNvbW1pdCIsImNvbW1pdCIsInN0b3JlRGlzcGF0Y2giLCJkaXNwYXRjaCIsIm5vd1RpbWVzdGFtcCIsIm1vbWVudCIsInVuaXgiLCJtb21lbnRGcm9tRGF0ZVRpbWUiLCJkYXRlVGltZSIsImRhdGVUaW1lVG9UaW1lc3RhbXAiLCJ1cmwiLCJwYXRoIiwic3Vic3RyaW5nIiwiYmFzZVVybCIsInJlZGlyZWN0VG9VcmwiLCJsb2NhdGlvbiIsImhyZWYiLCJyZWRpcmVjdFRvVXJsRnJvbUJhc2VVcmwiLCJyZWxvYWRQYWdlIiwib2JqZWN0VG9Gb3JtRGF0YSIsIml0ZW0iLCJmb3JtX2RhdGEiLCJGb3JtRGF0YSIsImtleSIsImFwcGVuZCIsImlzRW1wdHlPYmplY3QiLCJvYmplY3QiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiaXNNb2JpbGUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInJlcXVpcmUiLCJWdWUiLCJkaXJlY3RpdmUiLCJmaWx0ZXIiLCJtaXhpbiIsImNvbXBvbmVudCIsIlZ1ZXgiLCJTdG9yZSIsInN0YXRlIiwicGxhdGZvcm0iLCJjb3VudCIsIm11dGF0aW9ucyIsImluY3JlbWVudCIsImFwcCIsImVsIiwibXNnIiwid2F0Y2giLCJldmVudHMiLCJjcmVhdGVkIiwiY29uc29sZSIsImxvZyIsImluaXRMb2NhbGUiLCJtb3VudGVkIiwidGhhdCIsImxhbmciLCJsb2NhbGUiLCJjb25maWciLCJTb21lbGluZSIsImxvY2FsZXMiLCJjdXJyZW50VXNlcklkIiwidXNlciIsInVzZXJfaWQiLCJfIiwiVnVlUm91dGVyIiwiVnVlSTE4biIsInVzZSIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiTGFyYXZlbCIsImNzcmZUb2tlbiIsInByb3RvdHlwZSIsIiRodHRwIiwiYXBpQXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwidGltZW91dCIsIiRhcGkiLCJiaW5kIiwiZm9jdXMiLCJ2YWx1ZSIsInZvd2VscyIsImxhc3QiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0ciIsInNlY29uZExhc3QiLCJ0aGlyZExhc3QiLCJsYXN0VHdvIiwibGFzdFRocmVlIiwiaW5BcnJheSIsImFyIiwiaW5kZXhPZiIsIndvcmRzIiwic3BsaXQiLCJyZXN1bHRzIiwiaSIsImxldHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwicHVzaCIsInNsaWNlIiwiam9pbiIsImRlY2ltYWxzIiwiTWF0aCIsInJvdW5kIiwicG93Iiwic3ltYm9sIiwidG9TdHJpbmciLCJwYXJ0cyIsImRhdGUiLCJ0aW1lIiwicGFyc2VJbnQiLCJob3VyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzlDQTtBQUFBOzs7QUFHQSw4REFBZTtBQUNYQSxVQUFNLGNBQVVDLEdBQVYsRUFBZTtBQUNqQixlQUFPQSxJQUFJQyxPQUFKLENBQVksSUFBSUMsTUFBSixDQUFXLE9BQVgsRUFBb0IsR0FBcEIsQ0FBWixFQUFzQyxRQUF0QyxDQUFQO0FBQ0g7QUFIVSxDQUFm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QUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0RBQWtELFFBQVE7QUFDMUQ7QUFDQSxPQUFPO0FBQ1A7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrREFBa0QsUUFBUTtBQUMxRDtBQUNBLE9BQU87QUFDUDtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7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TixHQUFlQSxNQUFsQixFQUEwQjtBQUN0QixlQUFPdUQsS0FBUDtBQUNIOztBQUVEdkQsYUFBU0EsU0FBUyxDQUFsQjs7QUFFQSxXQUFPdUQsTUFBTXhFLFNBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUJpQixNQUFuQixJQUE2QixLQUFwQztBQUNILENBUkQsRSIsImZpbGUiOiIvYXNzZXRzL2pzL2NvbnNvbGUubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBvcHRpb25zLmNvbXB1dGVkIHx8IChvcHRpb25zLmNvbXB1dGVkID0ge30pXG4gICAgT2JqZWN0LmtleXMoY3NzTW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbW9kdWxlID0gY3NzTW9kdWxlc1trZXldXG4gICAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IExpYmVybiBvbiAyNi83LzE2LlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVhZDogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICByZXR1cm4gdmFsLnJlcGxhY2UobmV3IFJlZ0V4cCgnXFxyP1xcbicsICdnJyksICc8YnIgLz4nKTtcbiAgICB9LFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZmlsdGVycy9ubDJici5qcyIsImV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGJ1cygpe1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5idXM7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGV2ZW50RW1pdChuYW1lLCBkYXRhKXtcbiAgICAgICAgICAgIHRoaXMuYnVzLiRlbWl0KG5hbWUsIGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBldmVudE9uKG5hbWUsIGNhbGxiYWNrKXtcbiAgICAgICAgICAgIHRoaXMuYnVzLiRvbihuYW1lLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50T2ZmKG5hbWUsIGNhbGxiYWNrKXtcbiAgICAgICAgICAgIHRoaXMuYnVzLiRvZmYobmFtZSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICBBcHBIZWFkZXJTZXRUaXRsZSh0aXRsZSl7XG4gICAgICAgICAgICB0aGlzLmJ1cy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB9LFxuICAgICAgICBBcHBUYWJCYXJTZXRTaG93QXBwVGFiQmFyKGlzU2hvdyl7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RW1pdChcIkFwcFRhYkJhcl9zZXRTaG93QXBwVGFiQmFyXCIsIGlzU2hvdyk7XG4gICAgICAgIH0sXG4gICAgICAgIEFwcFRhYkJhclNlbGVjdFRhYkJhckl0ZW0oaW5kZXgpe1xuICAgICAgICAgICAgdGhpcy5ldmVudEVtaXQoXCJBcHBUYWJCYXJfc2VsZWN0VGFiQmFySXRlbVwiLCBpbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIEFwcEhlYWRlclNldE5hdkJ1dHRvbkxlZnQoY2xhc3NOYW1lKXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRFbWl0KFwiQXBwSGVhZGVyX3NldE5hdkJ1dHRvbkxlZnRcIiwgY2xhc3NOYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgQXBwSGVhZGVyU2V0TmF2QnV0dG9uUmlnaHQoY2xhc3NOYW1lKXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRFbWl0KFwiQXBwSGVhZGVyX3NldE5hdkJ1dHRvblJpZ2h0XCIsIGNsYXNzTmFtZSk7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2J1cy5qcyIsImV4cG9ydCBkZWZhdWx0e1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2Nyb2xsVG9Cb3R0b20oc2VsZWN0b3IsIGFuaW1hdGVkLCBhbmltYXRlVGltZSl7XG4gICAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIHZhciBzY3JvbGxIZWlnaHQgPSAkZWxlbWVudC5wcm9wKFwic2Nyb2xsSGVpZ2h0XCIpO1xuICAgICAgICAgICAgaWYgKGFuaW1hdGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhbmltYXRlVGltZSkge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRlVGltZSA9IDEwMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRlbGVtZW50LmFuaW1hdGUoe3Njcm9sbFRvcDogc2Nyb2xsSGVpZ2h0fSwgYW5pbWF0ZVRpbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWxlbWVudC5zY3JvbGxUb3Aoc2Nyb2xsSGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9qcXVlcnkuanMiLCJleHBvcnQgZGVmYXVsdHtcbiAgICBjb21wdXRlZDoge1xuICAgICAgICB2dWV4U3RvcmUoKXtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cudnVleFN0b3JlO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzdG9yZUNvbW1pdChuYW1lLCBkYXRhKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZ1ZXhTdG9yZS5jb21taXQobmFtZSwgZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0b3JlRGlzcGF0Y2gobmFtZSwgZGF0YSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52dWV4U3RvcmUuZGlzcGF0Y2gobmFtZSwgZGF0YSk7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3N0b3JlLmpzIiwiZXhwb3J0IGRlZmF1bHR7XG4gICAgY29tcHV0ZWQ6IHt9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbm93VGltZXN0YW1wKCl7XG4gICAgICAgICAgICByZXR1cm4gbW9tZW50KCkudW5peCgpO1xuICAgICAgICB9LFxuICAgICAgICBtb21lbnRGcm9tRGF0ZVRpbWUoZGF0ZVRpbWUpe1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlVGltZSwgJ1lZWVktTU0tREQgSEg6bW06c3MnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0ZVRpbWVUb1RpbWVzdGFtcChkYXRlVGltZSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb21lbnRGcm9tRGF0ZVRpbWUoZGF0ZVRpbWUpLnVuaXgoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXJsKHBhdGgpe1xuICAgICAgICAgICAgaWYgKHBhdGggJiYgcGF0aC5zdWJzdHJpbmcoMCwgMSkgIT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9ICcvJyArIHBhdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iYXNlVXJsICsgcGF0aDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVkaXJlY3RUb1VybCh1cmwpe1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZGlyZWN0VG9VcmxGcm9tQmFzZVVybCh1cmwpe1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnVybCh1cmwpO1xuICAgICAgICB9LFxuICAgICAgICByZWxvYWRQYWdlKCl7XG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG9Vcmwod2luZG93LmxvY2F0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2JqZWN0VG9Gb3JtRGF0YShpdGVtKXtcbiAgICAgICAgICAgIHZhciBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBmb3JtX2RhdGEuYXBwZW5kKGtleSwgaXRlbVtrZXldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZvcm1fZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNFbXB0eU9iamVjdChvYmplY3Qpe1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkubGVuZ3RoID09PSAwO1xuICAgICAgICB9LFxuICAgICAgICBpc01vYmlsZSgpe1xuICAgICAgICAgICAgdmFyIGlzTW9iaWxlID0gd2luZG93Lm1hdGNoTWVkaWEoXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gKGlzTW9iaWxlLm1hdGNoZXMpO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy90b29scy5qcyIsIi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZSBWdWUgYW5kIFZ1ZSBSZXNvdXJjZS4gVGhpcyBnaXZlcyBhIGdyZWF0IHN0YXJ0aW5nIHBvaW50IGZvclxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG5yZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuXG4vLyBWdWUgRGlyZWN0aXZlc1xuVnVlLmRpcmVjdGl2ZSgnZm9jdXMnLCByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvZm9jdXMnKSk7XG5cbi8vIFZ1ZSBGaWx0ZXJzXG5WdWUuZmlsdGVyKCdubDJicicsIHJlcXVpcmUoJy4vZmlsdGVycy9ubDJicicpKTtcblxuLy8gVnVlIE1peGluc1xuaW1wb3J0IE1peEluVXNlciBmcm9tICcuL21peGlucy91c2VyJ1xuaW1wb3J0IE1peEluSlF1ZXJ5IGZyb20gJy4vbWl4aW5zL2pxdWVyeSdcbmltcG9ydCBNaXhJblRvb2xzIGZyb20gJy4vbWl4aW5zL3Rvb2xzJ1xuaW1wb3J0IE1peEluQnVzIGZyb20gJy4vbWl4aW5zL2J1cydcbmltcG9ydCBNaXhJblN0b3JlIGZyb20gJy4vbWl4aW5zL3N0b3JlJ1xuVnVlLm1peGluKE1peEluVXNlcik7XG5WdWUubWl4aW4oTWl4SW5KUXVlcnkpO1xuVnVlLm1peGluKE1peEluVG9vbHMpO1xuVnVlLm1peGluKE1peEluQnVzKTtcblZ1ZS5taXhpbihNaXhJblN0b3JlKTtcblxuLy8gVnVlIENvbXBvbmVudHNcblZ1ZS5jb21wb25lbnQoJ2F1dG9zaXplLXRleHRhcmVhJywgcmVxdWlyZSgnLi9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZScpKTtcblxuLyoqXG4gKiBOZXh0LCB3ZSB3aWxsIGNyZWF0ZSBhIGZyZXNoIFZ1ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZSBhbmQgYXR0YWNoIGl0IHRvXG4gKiB0aGUgcGFnZS4gVGhlbiwgeW91IG1heSBiZWdpbiBhZGRpbmcgY29tcG9uZW50cyB0byB0aGlzIGFwcGxpY2F0aW9uXG4gKiBvciBjdXN0b21pemUgdGhlIEphdmFTY3JpcHQgc2NhZmZvbGRpbmcgdG8gZml0IHlvdXIgdW5pcXVlIG5lZWRzLlxuICovXG5cblZ1ZS5jb21wb25lbnQoXG4gICAgJ3Bhc3Nwb3J0LWNsaWVudHMnLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9wYXNzcG9ydC9DbGllbnRzLnZ1ZScpXG4pO1xuXG5WdWUuY29tcG9uZW50KFxuICAgICdwYXNzcG9ydC1hdXRob3JpemVkLWNsaWVudHMnLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9wYXNzcG9ydC9BdXRob3JpemVkQ2xpZW50cy52dWUnKVxuKTtcblxuVnVlLmNvbXBvbmVudChcbiAgICAncGFzc3BvcnQtcGVyc29uYWwtYWNjZXNzLXRva2VucycsXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL3Bhc3Nwb3J0L1BlcnNvbmFsQWNjZXNzVG9rZW5zLnZ1ZScpXG4pO1xuXG5WdWUuY29tcG9uZW50KCdleGFtcGxlJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL0V4YW1wbGUudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnc2wtb2F1dGgnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvY29uc29sZS9PQXV0aC52dWUnKSk7XG5cbi8vIEJ1c1xuY29uc3QgYnVzID0gbmV3IFZ1ZSh7XG4gICAgZGF0YToge1xuICAgICAgICB0aXRsZTogXCJTb21lbGluZVwiLFxuICAgIH1cbn0pO1xud2luZG93LmJ1cyA9IGJ1cztcblxuLy8gVnVleFxuY29uc3QgdnVleFN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xuICAgIHN0YXRlOiB7XG4gICAgICAgIHBsYXRmb3JtOiAnY29uc29sZScsXG4gICAgICAgIGNvdW50OiAwXG4gICAgfSxcbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgaW5jcmVtZW50IChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuY291bnQrK1xuICAgICAgICB9XG4gICAgfVxufSk7XG53aW5kb3cudnVleFN0b3JlID0gdnVleFN0b3JlO1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuICAgIGRhdGE6IHtcbiAgICAgICAgbXNnOiBcImhlbGxvXCIsXG4gICAgfSxcbiAgICBjb21wdXRlZDoge30sXG4gICAgd2F0Y2g6IHt9LFxuICAgIGV2ZW50czoge30sXG4gICAgY3JlYXRlZCgpe1xuICAgICAgICBjb25zb2xlLmxvZygnQm9vdHN0cmFwLicpO1xuICAgICAgICB0aGlzLmluaXRMb2NhbGUoKTtcbiAgICB9LFxuICAgIG1vdW50ZWQoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ1JlYWR5LicpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBpbml0TG9jYWxlKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSW5pdCBMb2NhbGUuJyk7XG5cbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHZhciBsYW5nID0gdGhpcy5sb2NhbGU7XG5cbiAgICAgICAgICAgIFZ1ZS5jb25maWcubGFuZyA9IGxhbmc7XG4gICAgICAgICAgICBWdWUubG9jYWxlKGxhbmcsIHdpbmRvdy5Tb21lbGluZS5sb2NhbGVzKTtcblxuICAgICAgICB9LFxuICAgIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb25zb2xlLmpzIiwiZXhwb3J0IGRlZmF1bHR7XG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgYmFzZVVybCgpe1xuICAgICAgICAgICAgcmV0dXJuIFNvbWVsaW5lLmJhc2VVcmw7XG4gICAgICAgIH0sXG4gICAgICAgIGxvY2FsZSgpe1xuICAgICAgICAgICAgcmV0dXJuIFNvbWVsaW5lLmxvY2FsZTtcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVudFVzZXJJZCgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coU29tZWxpbmUuc3RhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIFNvbWVsaW5lLnN0YXRlLnVzZXIudXNlcl9pZDtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdXNlci5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcImF1dG9zaXplLXRleHRhcmVhLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1kYjc4MjlhZSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2PlxuICAgICAgICA8cGFzc3BvcnQtY2xpZW50cz48L3Bhc3Nwb3J0LWNsaWVudHM+XG4gICAgICAgIDxwYXNzcG9ydC1hdXRob3JpemVkLWNsaWVudHM+PC9wYXNzcG9ydC1hdXRob3JpemVkLWNsaWVudHM+XG4gICAgICAgIDxwYXNzcG9ydC1wZXJzb25hbC1hY2Nlc3MtdG9rZW5zPjwvcGFzc3BvcnQtcGVyc29uYWwtYWNjZXNzLXRva2Vucz5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IHJlYWR5LicpXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBPQXV0aC52dWU/NjIxNGQ2ZmIiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9FeGFtcGxlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWE0N2IzODI2IS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0V4YW1wbGUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvbGliZXJuL0NvZGUvc29tZWxpbmUtc3RhcnRlci1tYXN0ZXIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gRXhhbXBsZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYTQ3YjM4MjZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1hNDdiMzgyNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRXhhbXBsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCI8c3R5bGUgc2NvcGVkPlxuICAgIC5hY3Rpb24tbGluayB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAubS1iLW5vbmUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHYtaWY9XCJ0b2tlbnMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPkF1dGhvcml6ZWQgQXBwbGljYXRpb25zPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIEF1dGhvcml6ZWQgVG9rZW5zIC0tPlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJsZXNzIG0tYi1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TY29wZXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cInRva2VuIGluIHRva2Vuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIENsaWVudCBOYW1lIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdG9rZW4uY2xpZW50Lm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFNjb3BlcyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJ0b2tlbi5zY29wZXMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRva2VuLnNjb3Blcy5qb2luKCcsICcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBSZXZva2UgQnV0dG9uIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhY3Rpb24tbGluayB0ZXh0LWRhbmdlclwiIEBjbGljaz1cInJldm9rZSh0b2tlbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXZva2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAvKlxuICAgICAgICAgKiBUaGUgY29tcG9uZW50J3MgZGF0YS5cbiAgICAgICAgICovXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRva2VuczogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXBhcmUgdGhlIGNvbXBvbmVudCAoVnVlIDEueCkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkeSgpIHtcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNvbXBvbmVudCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmVwYXJlIHRoZSBjb21wb25lbnQgKFZ1ZSAyLngpLlxuICAgICAgICAgKi9cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNvbXBvbmVudCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUHJlcGFyZSB0aGUgY29tcG9uZW50IChWdWUgMi54KS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcHJlcGFyZUNvbXBvbmVudCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFRva2VucygpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgYWxsIG9mIHRoZSBhdXRob3JpemVkIHRva2VucyBmb3IgdGhlIHVzZXIuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldFRva2VucygpIHtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9vYXV0aC90b2tlbnMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXZva2UgdGhlIGdpdmVuIHRva2VuLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXZva2UodG9rZW4pIHtcbiAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUoJy9vYXV0aC90b2tlbnMvJyArIHRva2VuLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG9rZW5zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEF1dGhvcml6ZWRDbGllbnRzLnZ1ZT9iMmM4YzFlYyIsIjxzdHlsZSBzY29wZWQ+XG4gICAgLmFjdGlvbi1saW5rIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5tLWItbm9uZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuPC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgT0F1dGggQ2xpZW50c1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhY3Rpb24tbGlua1wiIEBjbGljaz1cInNob3dDcmVhdGVDbGllbnRGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgTmV3IENsaWVudFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8IS0tIEN1cnJlbnQgQ2xpZW50cyAtLT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm0tYi1ub25lXCIgdi1pZj1cImNsaWVudHMubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgIFlvdSBoYXZlIG5vdCBjcmVhdGVkIGFueSBPQXV0aCBjbGllbnRzLlxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmxlc3MgbS1iLW5vbmVcIiB2LWlmPVwiY2xpZW50cy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2xpZW50IElEPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNlY3JldDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cImNsaWVudCBpbiBjbGllbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBJRCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjbGllbnQuaWQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBOYW1lIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNsaWVudC5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gU2VjcmV0IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPnt7IGNsaWVudC5zZWNyZXQgfX08L2NvZGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRWRpdCBCdXR0b24gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhY3Rpb24tbGlua1wiIEBjbGljaz1cImVkaXQoY2xpZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRGVsZXRlIEJ1dHRvbiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImFjdGlvbi1saW5rIHRleHQtZGFuZ2VyXCIgQGNsaWNrPVwiZGVzdHJveShjbGllbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBDcmVhdGUgQ2xpZW50IE1vZGFsIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiIGlkPVwibW9kYWwtY3JlYXRlLWNsaWVudFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uIFwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgQ2xpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGb3JtIEVycm9ycyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiB2LWlmPVwiY3JlYXRlRm9ybS5lcnJvcnMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+V2hvb3BzITwvc3Ryb25nPiBTb21ldGhpbmcgd2VudCB3cm9uZyE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiZXJyb3IgaW4gY3JlYXRlRm9ybS5lcnJvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVycm9yIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIENyZWF0ZSBDbGllbnQgRm9ybSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCIgcm9sZT1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE5hbWUgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29udHJvbC1sYWJlbFwiPk5hbWU8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY3JlYXRlLWNsaWVudC1uYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVudGVyPVwic3RvcmVcIiB2LW1vZGVsPVwiY3JlYXRlRm9ybS5uYW1lXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWV0aGluZyB5b3VyIHVzZXJzIHdpbGwgcmVjb2duaXplIGFuZCB0cnVzdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFJlZGlyZWN0IFVSTCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb250cm9sLWxhYmVsXCI+UmVkaXJlY3QgVVJMPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInJlZGlyZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAa2V5dXAuZW50ZXI9XCJzdG9yZVwiIHYtbW9kZWw9XCJjcmVhdGVGb3JtLnJlZGlyZWN0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgYXBwbGljYXRpb24ncyBhdXRob3JpemF0aW9uIGNhbGxiYWNrIFVSTC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTW9kYWwgQWN0aW9ucyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrPVwic3RvcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIEVkaXQgQ2xpZW50IE1vZGFsIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiIGlkPVwibW9kYWwtZWRpdC1jbGllbnRcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvbiBcIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdCBDbGllbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEZvcm0gRXJyb3JzIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHYtaWY9XCJlZGl0Rm9ybS5lcnJvcnMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+V2hvb3BzITwvc3Ryb25nPiBTb21ldGhpbmcgd2VudCB3cm9uZyE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiZXJyb3IgaW4gZWRpdEZvcm0uZXJyb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlcnJvciB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBFZGl0IENsaWVudCBGb3JtIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIiByb2xlPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTmFtZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb250cm9sLWxhYmVsXCI+TmFtZTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlZGl0LWNsaWVudC1uYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVudGVyPVwidXBkYXRlXCIgdi1tb2RlbD1cImVkaXRGb3JtLm5hbWVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZXRoaW5nIHlvdXIgdXNlcnMgd2lsbCByZWNvZ25pemUgYW5kIHRydXN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUmVkaXJlY3QgVVJMIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbnRyb2wtbGFiZWxcIj5SZWRpcmVjdCBVUkw8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicmVkaXJlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBrZXl1cC5lbnRlcj1cInVwZGF0ZVwiIHYtbW9kZWw9XCJlZGl0Rm9ybS5yZWRpcmVjdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGFwcGxpY2F0aW9uJ3MgYXV0aG9yaXphdGlvbiBjYWxsYmFjayBVUkwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIE1vZGFsIEFjdGlvbnMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIEBjbGljaz1cInVwZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIFRoZSBjb21wb25lbnQncyBkYXRhLlxuICAgICAgICAgKi9cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2xpZW50czogW10sXG5cbiAgICAgICAgICAgICAgICBjcmVhdGVGb3JtOiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yczogW10sXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdDogJydcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZWRpdEZvcm06IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0OiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXBhcmUgdGhlIGNvbXBvbmVudCAoVnVlIDEueCkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkeSgpIHtcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNvbXBvbmVudCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmVwYXJlIHRoZSBjb21wb25lbnQgKFZ1ZSAyLngpLlxuICAgICAgICAgKi9cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNvbXBvbmVudCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUHJlcGFyZSB0aGUgY29tcG9uZW50LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwcmVwYXJlQ29tcG9uZW50KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2xpZW50cygpO1xuXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWNyZWF0ZS1jbGllbnQnKS5vbignc2hvd24uYnMubW9kYWwnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNjcmVhdGUtY2xpZW50LW5hbWUnKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWVkaXQtY2xpZW50Jykub24oJ3Nob3duLmJzLm1vZGFsJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdC1jbGllbnQtbmFtZScpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBhbGwgb2YgdGhlIE9BdXRoIGNsaWVudHMgZm9yIHRoZSB1c2VyLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRDbGllbnRzKCkge1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL29hdXRoL2NsaWVudHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50cyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2hvdyB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgbmV3IGNsaWVudHMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNob3dDcmVhdGVDbGllbnRGb3JtKCkge1xuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1jcmVhdGUtY2xpZW50JykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ3JlYXRlIGEgbmV3IE9BdXRoIGNsaWVudCBmb3IgdGhlIHVzZXIuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHN0b3JlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVyc2lzdENsaWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc3QnLCAnL29hdXRoL2NsaWVudHMnLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0sICcjbW9kYWwtY3JlYXRlLWNsaWVudCdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFZGl0IHRoZSBnaXZlbiBjbGllbnQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGVkaXQoY2xpZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0Rm9ybS5pZCA9IGNsaWVudC5pZDtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRGb3JtLm5hbWUgPSBjbGllbnQubmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRGb3JtLnJlZGlyZWN0ID0gY2xpZW50LnJlZGlyZWN0O1xuXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWVkaXQtY2xpZW50JykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXBkYXRlIHRoZSBjbGllbnQgYmVpbmcgZWRpdGVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJzaXN0Q2xpZW50KFxuICAgICAgICAgICAgICAgICAgICAncHV0JywgJy9vYXV0aC9jbGllbnRzLycgKyB0aGlzLmVkaXRGb3JtLmlkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRGb3JtLCAnI21vZGFsLWVkaXQtY2xpZW50J1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFBlcnNpc3QgdGhlIGNsaWVudCB0byBzdG9yYWdlIHVzaW5nIHRoZSBnaXZlbiBmb3JtLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwZXJzaXN0Q2xpZW50KG1ldGhvZCwgdXJpLCBmb3JtLCBtb2RhbCkge1xuICAgICAgICAgICAgICAgIGZvcm0uZXJyb3JzID0gW107XG5cbiAgICAgICAgICAgICAgICBheGlvc1ttZXRob2RdKHVyaSwgZm9ybSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDbGllbnRzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ubmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZWRpcmVjdCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5lcnJvcnMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJChtb2RhbCkubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2UuZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmVycm9ycyA9IF8uZmxhdHRlbihfLnRvQXJyYXkocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmVycm9ycyA9IFsnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJ107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZXN0cm95IHRoZSBnaXZlbiBjbGllbnQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRlc3Ryb3koY2xpZW50KSB7XG4gICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKCcvb2F1dGgvY2xpZW50cy8nICsgY2xpZW50LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2xpZW50cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDbGllbnRzLnZ1ZT8wYTM4OGU0MCIsIjxzdHlsZSBzY29wZWQ+XG4gICAgLmFjdGlvbi1saW5rIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5tLWItbm9uZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuPC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJzb25hbCBBY2Nlc3MgVG9rZW5zXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYWN0aW9uLWxpbmtcIiBAY2xpY2s9XCJzaG93Q3JlYXRlVG9rZW5Gb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIE5ldyBUb2tlblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTm8gVG9rZW5zIE5vdGljZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtLWItbm9uZVwiIHYtaWY9XCJ0b2tlbnMubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UgaGF2ZSBub3QgY3JlYXRlZCBhbnkgcGVyc29uYWwgYWNjZXNzIHRva2Vucy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gUGVyc29uYWwgQWNjZXNzIFRva2VucyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVybGVzcyBtLWItbm9uZVwiIHYtaWY9XCJ0b2tlbnMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cInRva2VuIGluIHRva2Vuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIENsaWVudCBOYW1lIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdG9rZW4ubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRGVsZXRlIEJ1dHRvbiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYWN0aW9uLWxpbmsgdGV4dC1kYW5nZXJcIiBAY2xpY2s9XCJyZXZva2UodG9rZW4pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBDcmVhdGUgVG9rZW4gTW9kYWwgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCJtb2RhbC1jcmVhdGUtdG9rZW5cIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvbiBcIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIFRva2VuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGb3JtIEVycm9ycyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiB2LWlmPVwiZm9ybS5lcnJvcnMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+V2hvb3BzITwvc3Ryb25nPiBTb21ldGhpbmcgd2VudCB3cm9uZyE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiZXJyb3IgaW4gZm9ybS5lcnJvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVycm9yIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIENyZWF0ZSBUb2tlbiBGb3JtIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIiByb2xlPVwiZm9ybVwiIEBzdWJtaXQucHJldmVudD1cInN0b3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBOYW1lIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC00IGNvbnRyb2wtbGFiZWxcIj5OYW1lPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNyZWF0ZS10b2tlbi1uYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJuYW1lXCIgdi1tb2RlbD1cImZvcm0ubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gU2NvcGVzIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgdi1pZj1cInNjb3Blcy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC00IGNvbnRyb2wtbGFiZWxcIj5TY29wZXM8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cInNjb3BlIGluIHNjb3Blc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGVTY29wZShzY29wZS5pZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjaGVja2VkPVwic2NvcGVJc0Fzc2lnbmVkKHNjb3BlLmlkKVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgc2NvcGUuaWQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBNb2RhbCBBY3Rpb25zIC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJzdG9yZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gQWNjZXNzIFRva2VuIE1vZGFsIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiIGlkPVwibW9kYWwtYWNjZXNzLXRva2VuXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b24gXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcnNvbmFsIEFjY2VzcyBUb2tlblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlcmUgaXMgeW91ciBuZXcgcGVyc29uYWwgYWNjZXNzIHRva2VuLiBUaGlzIGlzIHRoZSBvbmx5IHRpbWUgaXQgd2lsbCBiZSBzaG93biBzbyBkb24ndCBsb3NlIGl0IVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBtYXkgbm93IHVzZSB0aGlzIHRva2VuIHRvIG1ha2UgQVBJIHJlcXVlc3RzLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cHJlPjxjb2RlPnt7IGFjY2Vzc1Rva2VuIH19PC9jb2RlPjwvcHJlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIE1vZGFsIEFjdGlvbnMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAvKlxuICAgICAgICAgKiBUaGUgY29tcG9uZW50J3MgZGF0YS5cbiAgICAgICAgICovXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBudWxsLFxuXG4gICAgICAgICAgICAgICAgdG9rZW5zOiBbXSxcbiAgICAgICAgICAgICAgICBzY29wZXM6IFtdLFxuXG4gICAgICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXBhcmUgdGhlIGNvbXBvbmVudCAoVnVlIDEueCkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkeSgpIHtcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNvbXBvbmVudCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmVwYXJlIHRoZSBjb21wb25lbnQgKFZ1ZSAyLngpLlxuICAgICAgICAgKi9cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNvbXBvbmVudCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUHJlcGFyZSB0aGUgY29tcG9uZW50LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwcmVwYXJlQ29tcG9uZW50KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG9rZW5zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTY29wZXMoKTtcblxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1jcmVhdGUtdG9rZW4nKS5vbignc2hvd24uYnMubW9kYWwnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNjcmVhdGUtdG9rZW4tbmFtZScpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBhbGwgb2YgdGhlIHBlcnNvbmFsIGFjY2VzcyB0b2tlbnMgZm9yIHRoZSB1c2VyLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRUb2tlbnMoKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvb2F1dGgvcGVyc29uYWwtYWNjZXNzLXRva2VucycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbnMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBhbGwgb2YgdGhlIGF2YWlsYWJsZSBzY29wZXMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldFNjb3BlcygpIHtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9vYXV0aC9zY29wZXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcGVzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTaG93IHRoZSBmb3JtIGZvciBjcmVhdGluZyBuZXcgdG9rZW5zLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzaG93Q3JlYXRlVG9rZW5Gb3JtKCkge1xuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1jcmVhdGUtdG9rZW4nKS5tb2RhbCgnc2hvdycpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDcmVhdGUgYSBuZXcgcGVyc29uYWwgYWNjZXNzIHRva2VuLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzdG9yZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5lcnJvcnMgPSBbXTtcblxuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9vYXV0aC9wZXJzb25hbC1hY2Nlc3MtdG9rZW5zJywgdGhpcy5mb3JtKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5uYW1lID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnNjb3BlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5lcnJvcnMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2gocmVzcG9uc2UuZGF0YS50b2tlbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dBY2Nlc3NUb2tlbihyZXNwb25zZS5kYXRhLmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2gocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2UuZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmVycm9ycyA9IF8uZmxhdHRlbihfLnRvQXJyYXkocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5lcnJvcnMgPSBbJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUb2dnbGUgdGhlIGdpdmVuIHNjb3BlIGluIHRoZSBsaXN0IG9mIGFzc2lnbmVkIHNjb3Blcy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdG9nZ2xlU2NvcGUoc2NvcGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY29wZUlzQXNzaWduZWQoc2NvcGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zY29wZXMgPSBfLnJlamVjdCh0aGlzLmZvcm0uc2NvcGVzLCBzID0+IHMgPT0gc2NvcGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zY29wZXMucHVzaChzY29wZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZXRlcm1pbmUgaWYgdGhlIGdpdmVuIHNjb3BlIGhhcyBiZWVuIGFzc2lnbmVkIHRvIHRoZSB0b2tlbi5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2NvcGVJc0Fzc2lnbmVkKHNjb3BlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uaW5kZXhPZih0aGlzLmZvcm0uc2NvcGVzLCBzY29wZSkgPj0gMDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2hvdyB0aGUgZ2l2ZW4gYWNjZXNzIHRva2VuIHRvIHRoZSB1c2VyLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzaG93QWNjZXNzVG9rZW4oYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY3JlYXRlLXRva2VuJykubW9kYWwoJ2hpZGUnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcblxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1hY2Nlc3MtdG9rZW4nKS5tb2RhbCgnc2hvdycpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXZva2UgdGhlIGdpdmVuIHRva2VuLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXZva2UodG9rZW4pIHtcbiAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUoJy9vYXV0aC9wZXJzb25hbC1hY2Nlc3MtdG9rZW5zLycgKyB0b2tlbi5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRva2VucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBQZXJzb25hbEFjY2Vzc1Rva2Vucy52dWU/MTc1OTE2OTgiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hY3Rpb24tbGlua1tkYXRhLXYtMDYzMmU2YmRdIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubS1iLW5vbmVbZGF0YS12LTA2MzJlNmJkXSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQXV0aG9yaXplZENsaWVudHMudnVlP2IyYzhjMWVjXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNBLGdCQUFBO0NBQ0E7QUFFQTtJQUNBLGlCQUFBO0NBQ0FcIixcImZpbGVcIjpcIkF1dGhvcml6ZWRDbGllbnRzLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8c3R5bGUgc2NvcGVkPlxcbiAgICAuYWN0aW9uLWxpbmsge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC5tLWItbm9uZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuPC9zdHlsZT5cXG5cXG48dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8ZGl2IHYtaWY9XFxcInRva2Vucy5sZW5ndGggPiAwXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+QXV0aG9yaXplZCBBcHBsaWNhdGlvbnM8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIEF1dGhvcml6ZWQgVG9rZW5zIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJsZXNzIG0tYi1ub25lXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TY29wZXM8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cXFwidG9rZW4gaW4gdG9rZW5zXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQ2xpZW50IE5hbWUgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0b2tlbi5jbGllbnQubmFtZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gU2NvcGVzIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cXFwidG9rZW4uc2NvcGVzLmxlbmd0aCA+IDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0b2tlbi5zY29wZXMuam9pbignLCAnKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFJldm9rZSBCdXR0b24gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYWN0aW9uLWxpbmsgdGV4dC1kYW5nZXJcXFwiIEBjbGljaz1cXFwicmV2b2tlKHRva2VuKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJldm9rZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgLypcXG4gICAgICAgICAqIFRoZSBjb21wb25lbnQncyBkYXRhLlxcbiAgICAgICAgICovXFxuICAgICAgICBkYXRhKCkge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIHRva2VuczogW11cXG4gICAgICAgICAgICB9O1xcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIC8qKlxcbiAgICAgICAgICogUHJlcGFyZSB0aGUgY29tcG9uZW50IChWdWUgMS54KS5cXG4gICAgICAgICAqL1xcbiAgICAgICAgcmVhZHkoKSB7XFxuICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ29tcG9uZW50KCk7XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgLyoqXFxuICAgICAgICAgKiBQcmVwYXJlIHRoZSBjb21wb25lbnQgKFZ1ZSAyLngpLlxcbiAgICAgICAgICovXFxuICAgICAgICBtb3VudGVkKCkge1xcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNvbXBvbmVudCgpO1xcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIG1ldGhvZHM6IHtcXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBQcmVwYXJlIHRoZSBjb21wb25lbnQgKFZ1ZSAyLngpLlxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHByZXBhcmVDb21wb25lbnQoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG9rZW5zKCk7XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBHZXQgYWxsIG9mIHRoZSBhdXRob3JpemVkIHRva2VucyBmb3IgdGhlIHVzZXIuXFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgZ2V0VG9rZW5zKCkge1xcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9vYXV0aC90b2tlbnMnKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbnMgPSByZXNwb25zZS5kYXRhO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogUmV2b2tlIHRoZSBnaXZlbiB0b2tlbi5cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICByZXZva2UodG9rZW4pIHtcXG4gICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKCcvb2F1dGgvdG9rZW5zLycgKyB0b2tlbi5pZClcXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG9rZW5zKCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wNjMyZTZiZCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXNzcG9ydC9BdXRob3JpemVkQ2xpZW50cy52dWVcbi8vIG1vZHVsZSBpZCA9IDE4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hY3Rpb24tbGlua1tkYXRhLXYtMzE3MjhkNTBdIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubS1iLW5vbmVbZGF0YS12LTMxNzI4ZDUwXSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQ2xpZW50cy52dWU/MGEzODhlNDBcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0EsZ0JBQUE7Q0FDQTtBQUVBO0lBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQ2xpZW50cy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHN0eWxlIHNjb3BlZD5cXG4gICAgLmFjdGlvbi1saW5rIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAubS1iLW5vbmUge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuXFxuPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgT0F1dGggQ2xpZW50c1xcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFjdGlvbi1saW5rXFxcIiBAY2xpY2s9XFxcInNob3dDcmVhdGVDbGllbnRGb3JtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgTmV3IENsaWVudFxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXG4gICAgICAgICAgICAgICAgPCEtLSBDdXJyZW50IENsaWVudHMgLS0+XFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJtLWItbm9uZVxcXCIgdi1pZj1cXFwiY2xpZW50cy5sZW5ndGggPT09IDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgWW91IGhhdmUgbm90IGNyZWF0ZWQgYW55IE9BdXRoIGNsaWVudHMuXFxuICAgICAgICAgICAgICAgIDwvcD5cXG5cXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJsZXNzIG0tYi1ub25lXFxcIiB2LWlmPVxcXCJjbGllbnRzLmxlbmd0aCA+IDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNsaWVudCBJRDwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNlY3JldDwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XFxcImNsaWVudCBpbiBjbGllbnRzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBJRCAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjbGllbnQuaWQgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBOYW1lIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNsaWVudC5uYW1lIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gU2VjcmV0IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPnt7IGNsaWVudC5zZWNyZXQgfX08L2NvZGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRWRpdCBCdXR0b24gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFjdGlvbi1saW5rXFxcIiBAY2xpY2s9XFxcImVkaXQoY2xpZW50KVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIERlbGV0ZSBCdXR0b24gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFjdGlvbi1saW5rIHRleHQtZGFuZ2VyXFxcIiBAY2xpY2s9XFxcImRlc3Ryb3koY2xpZW50KVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwhLS0gQ3JlYXRlIENsaWVudCBNb2RhbCAtLT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGlkPVxcXCJtb2RhbC1jcmVhdGUtY2xpZW50XFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uIFxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvYnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgQ2xpZW50XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGb3JtIEVycm9ycyAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiIHYtaWY9XFxcImNyZWF0ZUZvcm0uZXJyb3JzLmxlbmd0aCA+IDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPldob29wcyE8L3N0cm9uZz4gU29tZXRoaW5nIHdlbnQgd3JvbmchPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiZXJyb3IgaW4gY3JlYXRlRm9ybS5lcnJvcnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVycm9yIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQ3JlYXRlIENsaWVudCBGb3JtIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE5hbWUgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMyBjb250cm9sLWxhYmVsXFxcIj5OYW1lPC9sYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC03XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImNyZWF0ZS1jbGllbnQtbmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVudGVyPVxcXCJzdG9yZVxcXCIgdi1tb2RlbD1cXFwiY3JlYXRlRm9ybS5uYW1lXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWV0aGluZyB5b3VyIHVzZXJzIHdpbGwgcmVjb2duaXplIGFuZCB0cnVzdC5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUmVkaXJlY3QgVVJMIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTMgY29udHJvbC1sYWJlbFxcXCI+UmVkaXJlY3QgVVJMPC9sYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC03XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicmVkaXJlY3RcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBrZXl1cC5lbnRlcj1cXFwic3RvcmVcXFwiIHYtbW9kZWw9XFxcImNyZWF0ZUZvcm0ucmVkaXJlY3RcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBhcHBsaWNhdGlvbidzIGF1dGhvcml6YXRpb24gY2FsbGJhY2sgVVJMLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTW9kYWwgQWN0aW9ucyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPkNsb3NlPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIEBjbGljaz1cXFwic3RvcmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGVcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPCEtLSBFZGl0IENsaWVudCBNb2RhbCAtLT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGlkPVxcXCJtb2RhbC1lZGl0LWNsaWVudFxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZ1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvbiBcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L2J1dHRvbj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdCBDbGllbnRcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEZvcm0gRXJyb3JzIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgdi1pZj1cXFwiZWRpdEZvcm0uZXJyb3JzLmxlbmd0aCA+IDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPldob29wcyE8L3N0cm9uZz4gU29tZXRoaW5nIHdlbnQgd3JvbmchPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiZXJyb3IgaW4gZWRpdEZvcm0uZXJyb3JzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlcnJvciB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEVkaXQgQ2xpZW50IEZvcm0gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTmFtZSAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0zIGNvbnRyb2wtbGFiZWxcXFwiPk5hbWU8L2xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiZWRpdC1jbGllbnQtbmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVudGVyPVxcXCJ1cGRhdGVcXFwiIHYtbW9kZWw9XFxcImVkaXRGb3JtLm5hbWVcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZXRoaW5nIHlvdXIgdXNlcnMgd2lsbCByZWNvZ25pemUgYW5kIHRydXN0LlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBSZWRpcmVjdCBVUkwgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMyBjb250cm9sLWxhYmVsXFxcIj5SZWRpcmVjdCBVUkw8L2xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJyZWRpcmVjdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVudGVyPVxcXCJ1cGRhdGVcXFwiIHYtbW9kZWw9XFxcImVkaXRGb3JtLnJlZGlyZWN0XFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgYXBwbGljYXRpb24ncyBhdXRob3JpemF0aW9uIGNhbGxiYWNrIFVSTC5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIE1vZGFsIEFjdGlvbnMgLS0+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DbG9zZTwvYnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBAY2xpY2s9XFxcInVwZGF0ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgLypcXG4gICAgICAgICAqIFRoZSBjb21wb25lbnQncyBkYXRhLlxcbiAgICAgICAgICovXFxuICAgICAgICBkYXRhKCkge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGNsaWVudHM6IFtdLFxcblxcbiAgICAgICAgICAgICAgICBjcmVhdGVGb3JtOiB7XFxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IFtdLFxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXFxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdDogJydcXG4gICAgICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAgICAgZWRpdEZvcm06IHtcXG4gICAgICAgICAgICAgICAgICAgIGVycm9yczogW10sXFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcXG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0OiAnJ1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfTtcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICAvKipcXG4gICAgICAgICAqIFByZXBhcmUgdGhlIGNvbXBvbmVudCAoVnVlIDEueCkuXFxuICAgICAgICAgKi9cXG4gICAgICAgIHJlYWR5KCkge1xcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNvbXBvbmVudCgpO1xcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIC8qKlxcbiAgICAgICAgICogUHJlcGFyZSB0aGUgY29tcG9uZW50IChWdWUgMi54KS5cXG4gICAgICAgICAqL1xcbiAgICAgICAgbW91bnRlZCgpIHtcXG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDb21wb25lbnQoKTtcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogUHJlcGFyZSB0aGUgY29tcG9uZW50LlxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHByZXBhcmVDb21wb25lbnQoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2xpZW50cygpO1xcblxcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY3JlYXRlLWNsaWVudCcpLm9uKCdzaG93bi5icy5tb2RhbCcsICgpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICQoJyNjcmVhdGUtY2xpZW50LW5hbWUnKS5mb2N1cygpO1xcbiAgICAgICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWVkaXQtY2xpZW50Jykub24oJ3Nob3duLmJzLm1vZGFsJywgKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VkaXQtY2xpZW50LW5hbWUnKS5mb2N1cygpO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIEdldCBhbGwgb2YgdGhlIE9BdXRoIGNsaWVudHMgZm9yIHRoZSB1c2VyLlxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGdldENsaWVudHMoKSB7XFxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL29hdXRoL2NsaWVudHMnKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRzID0gcmVzcG9uc2UuZGF0YTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFNob3cgdGhlIGZvcm0gZm9yIGNyZWF0aW5nIG5ldyBjbGllbnRzLlxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHNob3dDcmVhdGVDbGllbnRGb3JtKCkge1xcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY3JlYXRlLWNsaWVudCcpLm1vZGFsKCdzaG93Jyk7XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBDcmVhdGUgYSBuZXcgT0F1dGggY2xpZW50IGZvciB0aGUgdXNlci5cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBzdG9yZSgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJzaXN0Q2xpZW50KFxcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc3QnLCAnL29hdXRoL2NsaWVudHMnLFxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtLCAnI21vZGFsLWNyZWF0ZS1jbGllbnQnXFxuICAgICAgICAgICAgICAgICk7XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBFZGl0IHRoZSBnaXZlbiBjbGllbnQuXFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgZWRpdChjbGllbnQpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0Rm9ybS5pZCA9IGNsaWVudC5pZDtcXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0Rm9ybS5uYW1lID0gY2xpZW50Lm5hbWU7XFxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdEZvcm0ucmVkaXJlY3QgPSBjbGllbnQucmVkaXJlY3Q7XFxuXFxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1lZGl0LWNsaWVudCcpLm1vZGFsKCdzaG93Jyk7XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBVcGRhdGUgdGhlIGNsaWVudCBiZWluZyBlZGl0ZWQuXFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgdXBkYXRlKCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnBlcnNpc3RDbGllbnQoXFxuICAgICAgICAgICAgICAgICAgICAncHV0JywgJy9vYXV0aC9jbGllbnRzLycgKyB0aGlzLmVkaXRGb3JtLmlkLFxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0Rm9ybSwgJyNtb2RhbC1lZGl0LWNsaWVudCdcXG4gICAgICAgICAgICAgICAgKTtcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFBlcnNpc3QgdGhlIGNsaWVudCB0byBzdG9yYWdlIHVzaW5nIHRoZSBnaXZlbiBmb3JtLlxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHBlcnNpc3RDbGllbnQobWV0aG9kLCB1cmksIGZvcm0sIG1vZGFsKSB7XFxuICAgICAgICAgICAgICAgIGZvcm0uZXJyb3JzID0gW107XFxuXFxuICAgICAgICAgICAgICAgIGF4aW9zW21ldGhvZF0odXJpLCBmb3JtKVxcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2xpZW50cygpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ubmFtZSA9ICcnO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVkaXJlY3QgPSAnJztcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmVycm9ycyA9IFtdO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICQobW9kYWwpLm1vZGFsKCdoaWRlJyk7XFxuICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3BvbnNlLmRhdGEgPT09ICdvYmplY3QnKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uZXJyb3JzID0gXy5mbGF0dGVuKF8udG9BcnJheShyZXNwb25zZS5kYXRhKSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5lcnJvcnMgPSBbJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLiddO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRGVzdHJveSB0aGUgZ2l2ZW4gY2xpZW50LlxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGRlc3Ryb3koY2xpZW50KSB7XFxuICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSgnL29hdXRoL2NsaWVudHMvJyArIGNsaWVudC5pZClcXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2xpZW50cygpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMzE3MjhkNTAmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQ2xpZW50cy52dWVcbi8vIG1vZHVsZSBpZCA9IDE4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtZGI3ODI5YWUmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1kYjc4MjlhZSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtZGI3ODI5YWVcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9saWJlcm4vQ29kZS9zb21lbGluZS1zdGFydGVyLW1hc3Rlci9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYXV0b3NpemUtdGV4dGFyZWEudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWRiNzgyOWFlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZGI3ODI5YWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmFjdGlvbi1saW5rW2RhdGEtdi1hZjFhZGY0NF0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tLWItbm9uZVtkYXRhLXYtYWYxYWRmNDRdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXNzcG9ydC9QZXJzb25hbEFjY2Vzc1Rva2Vucy52dWU/MTc1OTE2OThcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0EsZ0JBQUE7Q0FDQTtBQUVBO0lBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiUGVyc29uYWxBY2Nlc3NUb2tlbnMudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjxzdHlsZSBzY29wZWQ+XFxuICAgIC5hY3Rpb24tbGluayB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLm0tYi1ub25lIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG48L3N0eWxlPlxcblxcbjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyO1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcnNvbmFsIEFjY2VzcyBUb2tlbnNcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFjdGlvbi1saW5rXFxcIiBAY2xpY2s9XFxcInNob3dDcmVhdGVUb2tlbkZvcm1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgTmV3IFRva2VuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTm8gVG9rZW5zIE5vdGljZSAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJtLWItbm9uZVxcXCIgdi1pZj1cXFwidG9rZW5zLmxlbmd0aCA9PT0gMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgWW91IGhhdmUgbm90IGNyZWF0ZWQgYW55IHBlcnNvbmFsIGFjY2VzcyB0b2tlbnMuXFxuICAgICAgICAgICAgICAgICAgICA8L3A+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIFBlcnNvbmFsIEFjY2VzcyBUb2tlbnMgLS0+XFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmxlc3MgbS1iLW5vbmVcXFwiIHYtaWY9XFxcInRva2Vucy5sZW5ndGggPiAwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XFxcInRva2VuIGluIHRva2Vuc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIENsaWVudCBOYW1lIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdG9rZW4ubmFtZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRGVsZXRlIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJhY3Rpb24tbGluayB0ZXh0LWRhbmdlclxcXCIgQGNsaWNrPVxcXCJyZXZva2UodG9rZW4pXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwhLS0gQ3JlYXRlIFRva2VuIE1vZGFsIC0tPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgaWQ9XFxcIm1vZGFsLWNyZWF0ZS10b2tlblxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZ1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvbiBcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L2J1dHRvbj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIFRva2VuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGb3JtIEVycm9ycyAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiIHYtaWY9XFxcImZvcm0uZXJyb3JzLmxlbmd0aCA+IDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPldob29wcyE8L3N0cm9uZz4gU29tZXRoaW5nIHdlbnQgd3JvbmchPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiZXJyb3IgaW4gZm9ybS5lcnJvcnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVycm9yIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQ3JlYXRlIFRva2VuIEZvcm0gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgQHN1Ym1pdC5wcmV2ZW50PVxcXCJzdG9yZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTmFtZSAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC00IGNvbnRyb2wtbGFiZWxcXFwiPk5hbWU8L2xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiY3JlYXRlLXRva2VuLW5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIHYtbW9kZWw9XFxcImZvcm0ubmFtZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gU2NvcGVzIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiB2LWlmPVxcXCJzY29wZXMubGVuZ3RoID4gMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC00IGNvbnRyb2wtbGFiZWxcXFwiPlNjb3BlczwvbGFiZWw+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cXFwic2NvcGUgaW4gc2NvcGVzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJ0b2dnbGVTY29wZShzY29wZS5pZClcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjaGVja2VkPVxcXCJzY29wZUlzQXNzaWduZWQoc2NvcGUuaWQpXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgc2NvcGUuaWQgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBNb2RhbCBBY3Rpb25zIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+Q2xvc2U8L2J1dHRvbj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgQGNsaWNrPVxcXCJzdG9yZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8IS0tIEFjY2VzcyBUb2tlbiBNb2RhbCAtLT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGlkPVxcXCJtb2RhbC1hY2Nlc3MtdG9rZW5cXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b24gXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9idXR0b24+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcnNvbmFsIEFjY2VzcyBUb2tlblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZXJlIGlzIHlvdXIgbmV3IHBlcnNvbmFsIGFjY2VzcyB0b2tlbi4gVGhpcyBpcyB0aGUgb25seSB0aW1lIGl0IHdpbGwgYmUgc2hvd24gc28gZG9uJ3QgbG9zZSBpdCFcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IG1heSBub3cgdXNlIHRoaXMgdG9rZW4gdG8gbWFrZSBBUEkgcmVxdWVzdHMuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwcmU+PGNvZGU+e3sgYWNjZXNzVG9rZW4gfX08L2NvZGU+PC9wcmU+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTW9kYWwgQWN0aW9ucyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPkNsb3NlPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxuICAgICAgICAvKlxcbiAgICAgICAgICogVGhlIGNvbXBvbmVudCdzIGRhdGEuXFxuICAgICAgICAgKi9cXG4gICAgICAgIGRhdGEoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IG51bGwsXFxuXFxuICAgICAgICAgICAgICAgIHRva2VuczogW10sXFxuICAgICAgICAgICAgICAgIHNjb3BlczogW10sXFxuXFxuICAgICAgICAgICAgICAgIGZvcm06IHtcXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVzOiBbXSxcXG4gICAgICAgICAgICAgICAgICAgIGVycm9yczogW11cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH07XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgLyoqXFxuICAgICAgICAgKiBQcmVwYXJlIHRoZSBjb21wb25lbnQgKFZ1ZSAxLngpLlxcbiAgICAgICAgICovXFxuICAgICAgICByZWFkeSgpIHtcXG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDb21wb25lbnQoKTtcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICAvKipcXG4gICAgICAgICAqIFByZXBhcmUgdGhlIGNvbXBvbmVudCAoVnVlIDIueCkuXFxuICAgICAgICAgKi9cXG4gICAgICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ29tcG9uZW50KCk7XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFByZXBhcmUgdGhlIGNvbXBvbmVudC5cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBwcmVwYXJlQ29tcG9uZW50KCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmdldFRva2VucygpO1xcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNjb3BlcygpO1xcblxcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY3JlYXRlLXRva2VuJykub24oJ3Nob3duLmJzLm1vZGFsJywgKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgJCgnI2NyZWF0ZS10b2tlbi1uYW1lJykuZm9jdXMoKTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBHZXQgYWxsIG9mIHRoZSBwZXJzb25hbCBhY2Nlc3MgdG9rZW5zIGZvciB0aGUgdXNlci5cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBnZXRUb2tlbnMoKSB7XFxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL29hdXRoL3BlcnNvbmFsLWFjY2Vzcy10b2tlbnMnKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbnMgPSByZXNwb25zZS5kYXRhO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogR2V0IGFsbCBvZiB0aGUgYXZhaWxhYmxlIHNjb3Blcy5cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBnZXRTY29wZXMoKSB7XFxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL29hdXRoL3Njb3BlcycpXFxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3BlcyA9IHJlc3BvbnNlLmRhdGE7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBTaG93IHRoZSBmb3JtIGZvciBjcmVhdGluZyBuZXcgdG9rZW5zLlxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHNob3dDcmVhdGVUb2tlbkZvcm0oKSB7XFxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1jcmVhdGUtdG9rZW4nKS5tb2RhbCgnc2hvdycpO1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogQ3JlYXRlIGEgbmV3IHBlcnNvbmFsIGFjY2VzcyB0b2tlbi5cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBzdG9yZSgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IG51bGw7XFxuXFxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5lcnJvcnMgPSBbXTtcXG5cXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL29hdXRoL3BlcnNvbmFsLWFjY2Vzcy10b2tlbnMnLCB0aGlzLmZvcm0pXFxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ubmFtZSA9ICcnO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uc2NvcGVzID0gW107XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5lcnJvcnMgPSBbXTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaChyZXNwb25zZS5kYXRhLnRva2VuKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93QWNjZXNzVG9rZW4ocmVzcG9uc2UuZGF0YS5hY2Nlc3NUb2tlbik7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2gocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3BvbnNlLmRhdGEgPT09ICdvYmplY3QnKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZXJyb3JzID0gXy5mbGF0dGVuKF8udG9BcnJheShyZXNwb25zZS5kYXRhKSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZXJyb3JzID0gWydTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nXTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogVG9nZ2xlIHRoZSBnaXZlbiBzY29wZSBpbiB0aGUgbGlzdCBvZiBhc3NpZ25lZCBzY29wZXMuXFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgdG9nZ2xlU2NvcGUoc2NvcGUpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2NvcGVJc0Fzc2lnbmVkKHNjb3BlKSkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnNjb3BlcyA9IF8ucmVqZWN0KHRoaXMuZm9ybS5zY29wZXMsIHMgPT4gcyA9PSBzY29wZSk7XFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uc2NvcGVzLnB1c2goc2NvcGUpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBEZXRlcm1pbmUgaWYgdGhlIGdpdmVuIHNjb3BlIGhhcyBiZWVuIGFzc2lnbmVkIHRvIHRoZSB0b2tlbi5cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBzY29wZUlzQXNzaWduZWQoc2NvcGUpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uaW5kZXhPZih0aGlzLmZvcm0uc2NvcGVzLCBzY29wZSkgPj0gMDtcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFNob3cgdGhlIGdpdmVuIGFjY2VzcyB0b2tlbiB0byB0aGUgdXNlci5cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBzaG93QWNjZXNzVG9rZW4oYWNjZXNzVG9rZW4pIHtcXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWNyZWF0ZS10b2tlbicpLm1vZGFsKCdoaWRlJyk7XFxuXFxuICAgICAgICAgICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcXG5cXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWFjY2Vzcy10b2tlbicpLm1vZGFsKCdzaG93Jyk7XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBSZXZva2UgdGhlIGdpdmVuIHRva2VuLlxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHJldm9rZSh0b2tlbikge1xcbiAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUoJy9vYXV0aC9wZXJzb25hbC1hY2Nlc3MtdG9rZW5zLycgKyB0b2tlbi5pZClcXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG9rZW5zKCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hZjFhZGY0NCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXNzcG9ydC9QZXJzb25hbEFjY2Vzc1Rva2Vucy52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX3ZtLl9tKDApXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiXG4gIH0sIFtfdm0uX3YoXCJFeGFtcGxlIENvbXBvbmVudFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWJvZHlcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBJJ20gYW4gZXhhbXBsZSBjb21wb25lbnQhXFxuICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1hNDdiMzgyNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYTQ3YjM4MjYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL09BdXRoLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWIxOWM1ODdjIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL09BdXRoLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2xpYmVybi9Db2RlL3NvbWVsaW5lLXN0YXJ0ZXItbWFzdGVyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb25zb2xlL09BdXRoLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIE9BdXRoLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1iMTljNTg3Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWIxOWM1ODdjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb25zb2xlL09BdXRoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndGV4dGFyZWEnKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1kYjc4MjlhZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZGI3ODI5YWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMDYzMmU2YmQmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0F1dGhvcml6ZWRDbGllbnRzLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9BdXRob3JpemVkQ2xpZW50cy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0wNjMyZTZiZCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BdXRob3JpemVkQ2xpZW50cy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtMDYzMmU2YmRcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9saWJlcm4vQ29kZS9zb21lbGluZS1zdGFydGVyLW1hc3Rlci9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQXV0aG9yaXplZENsaWVudHMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQXV0aG9yaXplZENsaWVudHMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTA2MzJlNmJkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDYzMmU2YmRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L0F1dGhvcml6ZWRDbGllbnRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0zMTcyOGQ1MCZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50cy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ2xpZW50cy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zMTcyOGQ1MCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRzLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi0zMTcyOGQ1MFwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2xpYmVybi9Db2RlL3NvbWVsaW5lLXN0YXJ0ZXItbWFzdGVyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXNzcG9ydC9DbGllbnRzLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIENsaWVudHMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTMxNzI4ZDUwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzE3MjhkNTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L0NsaWVudHMudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWFmMWFkZjQ0JnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9QZXJzb25hbEFjY2Vzc1Rva2Vucy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUGVyc29uYWxBY2Nlc3NUb2tlbnMudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYWYxYWRmNDQhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUGVyc29uYWxBY2Nlc3NUb2tlbnMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LWFmMWFkZjQ0XCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvbGliZXJuL0NvZGUvc29tZWxpbmUtc3RhcnRlci1tYXN0ZXIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L1BlcnNvbmFsQWNjZXNzVG9rZW5zLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFBlcnNvbmFsQWNjZXNzVG9rZW5zLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1hZjFhZGY0NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWFmMWFkZjQ0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXNzcG9ydC9QZXJzb25hbEFjY2Vzc1Rva2Vucy52dWVcbi8vIG1vZHVsZSBpZCA9IDIxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFsoX3ZtLnRva2Vucy5sZW5ndGggPiAwKSA/IF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiXG4gIH0sIFtfdm0uX3YoXCJBdXRob3JpemVkIEFwcGxpY2F0aW9uc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWJvZHlcIlxuICB9LCBbX2MoJ3RhYmxlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWJvcmRlcmxlc3MgbS1iLW5vbmVcIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygndGJvZHknLCBfdm0uX2woKF92bS50b2tlbnMpLCBmdW5jdGlvbih0b2tlbikge1xuICAgIHJldHVybiBfYygndHInLCBbX2MoJ3RkJywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJ2ZXJ0aWNhbC1hbGlnblwiOiBcIm1pZGRsZVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3ModG9rZW4uY2xpZW50Lm5hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZCcsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwidmVydGljYWwtYWxpZ25cIjogXCJtaWRkbGVcIlxuICAgICAgfVxuICAgIH0sIFsodG9rZW4uc2NvcGVzLmxlbmd0aCA+IDApID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3ModG9rZW4uc2NvcGVzLmpvaW4oJywgJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RkJywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJ2ZXJ0aWNhbC1hbGlnblwiOiBcIm1pZGRsZVwiXG4gICAgICB9XG4gICAgfSwgW19jKCdhJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWxpbmsgdGV4dC1kYW5nZXJcIixcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnJldm9rZSh0b2tlbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXZva2VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKVxuICB9KSldKV0pXSldKSA6IF92bS5fZSgpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndGhlYWQnLCBbX2MoJ3RyJywgW19jKCd0aCcsIFtfdm0uX3YoXCJOYW1lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0aCcsIFtfdm0uX3YoXCJTY29wZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RoJyldKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMDYzMmU2YmRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTA2MzJlNmJkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQXV0aG9yaXplZENsaWVudHMudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgICBcImp1c3RpZnktY29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgIFwiYWxpZ24taXRlbXNcIjogXCJjZW50ZXJcIlxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgT0F1dGggQ2xpZW50c1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWxpbmtcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uc2hvd0NyZWF0ZUNsaWVudEZvcm1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZSBOZXcgQ2xpZW50XFxuICAgICAgICAgICAgICAgIFwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1ib2R5XCJcbiAgfSwgWyhfdm0uY2xpZW50cy5sZW5ndGggPT09IDApID8gX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibS1iLW5vbmVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFlvdSBoYXZlIG5vdCBjcmVhdGVkIGFueSBPQXV0aCBjbGllbnRzLlxcbiAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uY2xpZW50cy5sZW5ndGggPiAwKSA/IF9jKCd0YWJsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ib3JkZXJsZXNzIG0tYi1ub25lXCJcbiAgfSwgW192bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Rib2R5JywgX3ZtLl9sKChfdm0uY2xpZW50cyksIGZ1bmN0aW9uKGNsaWVudCkge1xuICAgIHJldHVybiBfYygndHInLCBbX2MoJ3RkJywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJ2ZXJ0aWNhbC1hbGlnblwiOiBcIm1pZGRsZVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhjbGllbnQuaWQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RkJywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJ2ZXJ0aWNhbC1hbGlnblwiOiBcIm1pZGRsZVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhjbGllbnQubmFtZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGQnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcInZlcnRpY2FsLWFsaWduXCI6IFwibWlkZGxlXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2NvZGUnLCBbX3ZtLl92KF92bS5fcyhjbGllbnQuc2VjcmV0KSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGQnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcInZlcnRpY2FsLWFsaWduXCI6IFwibWlkZGxlXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tbGlua1wiLFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZWRpdChjbGllbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZCcsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwidmVydGljYWwtYWxpZ25cIjogXCJtaWRkbGVcIlxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1saW5rIHRleHQtZGFuZ2VyXCIsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5kZXN0cm95KGNsaWVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSlcbiAgfSkpXSkgOiBfdm0uX2UoKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwgZmFkZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibW9kYWwtY3JlYXRlLWNsaWVudFwiLFxuICAgICAgXCJ0YWJpbmRleFwiOiBcIi0xXCIsXG4gICAgICBcInJvbGVcIjogXCJkaWFsb2dcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtZGlhbG9nXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudFwiXG4gIH0sIFtfdm0uX20oMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtYm9keVwiXG4gIH0sIFsoX3ZtLmNyZWF0ZUZvcm0uZXJyb3JzLmxlbmd0aCA+IDApID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1kYW5nZXJcIlxuICB9LCBbX3ZtLl9tKDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywgX3ZtLl9sKChfdm0uY3JlYXRlRm9ybS5lcnJvcnMpLCBmdW5jdGlvbihlcnJvcikge1xuICAgIHJldHVybiBfYygnbGknLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhlcnJvcikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKVxuICB9KSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZm9ybScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWhvcml6b250YWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJyb2xlXCI6IFwiZm9ybVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb250cm9sLWxhYmVsXCJcbiAgfSwgW192bS5fdihcIk5hbWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY3JlYXRlRm9ybS5uYW1lKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY3JlYXRlRm9ybS5uYW1lXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImNyZWF0ZS1jbGllbnQtbmFtZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmNyZWF0ZUZvcm0ubmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImtleXVwXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzKSkgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnN0b3JlKCRldmVudClcbiAgICAgIH0sXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5jcmVhdGVGb3JtLm5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9ja1wiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21ldGhpbmcgeW91ciB1c2VycyB3aWxsIHJlY29nbml6ZSBhbmQgdHJ1c3QuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29udHJvbC1sYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJSZWRpcmVjdCBVUkxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY3JlYXRlRm9ybS5yZWRpcmVjdCksXG4gICAgICBleHByZXNzaW9uOiBcImNyZWF0ZUZvcm0ucmVkaXJlY3RcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcIm5hbWVcIjogXCJyZWRpcmVjdFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmNyZWF0ZUZvcm0ucmVkaXJlY3QpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJrZXl1cFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMykpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5zdG9yZSgkZXZlbnQpXG4gICAgICB9LFxuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY3JlYXRlRm9ybS5yZWRpcmVjdCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgYXBwbGljYXRpb24ncyBhdXRob3JpemF0aW9uIGNhbGxiYWNrIFVSTC5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9vdGVyXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ2xvc2VcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5zdG9yZVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbCBmYWRlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJtb2RhbC1lZGl0LWNsaWVudFwiLFxuICAgICAgXCJ0YWJpbmRleFwiOiBcIi0xXCIsXG4gICAgICBcInJvbGVcIjogXCJkaWFsb2dcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtZGlhbG9nXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudFwiXG4gIH0sIFtfdm0uX20oMyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtYm9keVwiXG4gIH0sIFsoX3ZtLmVkaXRGb3JtLmVycm9ycy5sZW5ndGggPiAwKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcbiAgfSwgW192bS5fbSg0KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIF92bS5fbCgoX3ZtLmVkaXRGb3JtLmVycm9ycyksIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGVycm9yKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXG4gIH0pKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdmb3JtJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0taG9yaXpvbnRhbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInJvbGVcIjogXCJmb3JtXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zIGNvbnRyb2wtbGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiTmFtZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5lZGl0Rm9ybS5uYW1lKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZWRpdEZvcm0ubmFtZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJlZGl0LWNsaWVudC1uYW1lXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZWRpdEZvcm0ubmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImtleXVwXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzKSkgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnVwZGF0ZSgkZXZlbnQpXG4gICAgICB9LFxuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZWRpdEZvcm0ubmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWV0aGluZyB5b3VyIHVzZXJzIHdpbGwgcmVjb2duaXplIGFuZCB0cnVzdC5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb250cm9sLWxhYmVsXCJcbiAgfSwgW192bS5fdihcIlJlZGlyZWN0IFVSTFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5lZGl0Rm9ybS5yZWRpcmVjdCksXG4gICAgICBleHByZXNzaW9uOiBcImVkaXRGb3JtLnJlZGlyZWN0XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwicmVkaXJlY3RcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5lZGl0Rm9ybS5yZWRpcmVjdClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImtleXVwXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzKSkgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnVwZGF0ZSgkZXZlbnQpXG4gICAgICB9LFxuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZWRpdEZvcm0ucmVkaXJlY3QgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9ja1wiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGFwcGxpY2F0aW9uJ3MgYXV0aG9yaXphdGlvbiBjYWxsYmFjayBVUkwuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvb3RlclwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkNsb3NlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udXBkYXRlXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndGhlYWQnLCBbX2MoJ3RyJywgW19jKCd0aCcsIFtfdm0uX3YoXCJDbGllbnQgSURcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RoJywgW192bS5fdihcIk5hbWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RoJywgW192bS5fdihcIlNlY3JldFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGgnKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RoJyldKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b24gXCIsXG4gICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiw5dcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBDbGllbnRcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygncCcsIFtfYygnc3Ryb25nJywgW192bS5fdihcIldob29wcyFcIildKSwgX3ZtLl92KFwiIFNvbWV0aGluZyB3ZW50IHdyb25nIVwiKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b24gXCIsXG4gICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiw5dcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEVkaXQgQ2xpZW50XFxuICAgICAgICAgICAgICAgICAgICBcIildKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3AnLCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJXaG9vcHMhXCIpXSksIF92bS5fdihcIiBTb21ldGhpbmcgd2VudCB3cm9uZyFcIildKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTMxNzI4ZDUwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zMTcyOGQ1MCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L0NsaWVudHMudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1kYjc4MjlhZSZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXV0b3NpemUtdGV4dGFyZWEudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjUxMGI3NzUwXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1kYjc4MjlhZSZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXV0b3NpemUtdGV4dGFyZWEudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1kYjc4MjlhZSZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXV0b3NpemUtdGV4dGFyZWEudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1kYjc4MjlhZSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWhlYWRpbmdcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgICAgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICBcImFsaWduLWl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgICB9XG4gIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBQZXJzb25hbCBBY2Nlc3MgVG9rZW5zXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWxpbmtcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uc2hvd0NyZWF0ZVRva2VuRm9ybVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBOZXcgVG9rZW5cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1ib2R5XCJcbiAgfSwgWyhfdm0udG9rZW5zLmxlbmd0aCA9PT0gMCkgPyBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtLWItbm9uZVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFlvdSBoYXZlIG5vdCBjcmVhdGVkIGFueSBwZXJzb25hbCBhY2Nlc3MgdG9rZW5zLlxcbiAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnRva2Vucy5sZW5ndGggPiAwKSA/IF9jKCd0YWJsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ib3JkZXJsZXNzIG0tYi1ub25lXCJcbiAgfSwgW192bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Rib2R5JywgX3ZtLl9sKChfdm0udG9rZW5zKSwgZnVuY3Rpb24odG9rZW4pIHtcbiAgICByZXR1cm4gX2MoJ3RyJywgW19jKCd0ZCcsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwidmVydGljYWwtYWxpZ25cIjogXCJtaWRkbGVcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKHRva2VuLm5hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZCcsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwidmVydGljYWwtYWxpZ25cIjogXCJtaWRkbGVcIlxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1saW5rIHRleHQtZGFuZ2VyXCIsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5yZXZva2UodG9rZW4pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSlcbiAgfSkpXSkgOiBfdm0uX2UoKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbCBmYWRlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJtb2RhbC1jcmVhdGUtdG9rZW5cIixcbiAgICAgIFwidGFiaW5kZXhcIjogXCItMVwiLFxuICAgICAgXCJyb2xlXCI6IFwiZGlhbG9nXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWRpYWxvZ1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIlxuICB9LCBbX3ZtLl9tKDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJvZHlcIlxuICB9LCBbKF92bS5mb3JtLmVycm9ycy5sZW5ndGggPiAwKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcbiAgfSwgW192bS5fbSgyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIF92bS5fbCgoX3ZtLmZvcm0uZXJyb3JzKSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoZXJyb3IpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgfSkpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2Zvcm0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ob3Jpem9udGFsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicm9sZVwiOiBcImZvcm1cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnN0b3JlKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC00IGNvbnRyb2wtbGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiTmFtZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLm5hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiY3JlYXRlLXRva2VuLW5hbWVcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwibmFtZVwiOiBcIm5hbWVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5mb3JtLm5hbWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZm9ybS5uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnNjb3Blcy5sZW5ndGggPiAwKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTQgY29udHJvbC1sYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJTY29wZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiXG4gIH0sIF92bS5fbCgoX3ZtLnNjb3BlcyksIGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNoZWNrYm94XCJcbiAgICB9LCBbX2MoJ2xhYmVsJywgW19jKCdpbnB1dCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCJcbiAgICAgIH0sXG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcImNoZWNrZWRcIjogX3ZtLnNjb3BlSXNBc3NpZ25lZChzY29wZS5pZClcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS50b2dnbGVTY29wZShzY29wZS5pZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLCBfdm0uX3YoXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhzY29wZS5pZCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSlcbiAgfSkpXSkgOiBfdm0uX2UoKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9vdGVyXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ2xvc2VcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5zdG9yZVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbCBmYWRlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJtb2RhbC1hY2Nlc3MtdG9rZW5cIixcbiAgICAgIFwidGFiaW5kZXhcIjogXCItMVwiLFxuICAgICAgXCJyb2xlXCI6IFwiZGlhbG9nXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWRpYWxvZ1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIlxuICB9LCBbX3ZtLl9tKDMpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJvZHlcIlxuICB9LCBbX2MoJ3AnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgSGVyZSBpcyB5b3VyIG5ldyBwZXJzb25hbCBhY2Nlc3MgdG9rZW4uIFRoaXMgaXMgdGhlIG9ubHkgdGltZSBpdCB3aWxsIGJlIHNob3duIHNvIGRvbid0IGxvc2UgaXQhXFxuICAgICAgICAgICAgICAgICAgICAgICAgWW91IG1heSBub3cgdXNlIHRoaXMgdG9rZW4gdG8gbWFrZSBBUEkgcmVxdWVzdHMuXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3ByZScsIFtfYygnY29kZScsIFtfdm0uX3YoX3ZtLl9zKF92bS5hY2Nlc3NUb2tlbikpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oNCldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0aGVhZCcsIFtfYygndHInLCBbX2MoJ3RoJywgW192bS5fdihcIk5hbWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RoJyldKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b24gXCIsXG4gICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiw5dcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBUb2tlblxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdwJywgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiV2hvb3BzIVwiKV0pLCBfdm0uX3YoXCIgU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWhlYWRlclwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvbiBcIixcbiAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLDl1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgUGVyc29uYWwgQWNjZXNzIFRva2VuXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1mb290ZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDbG9zZVwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1hZjFhZGY0NFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYWYxYWRmNDQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXNzcG9ydC9QZXJzb25hbEFjY2Vzc1Rva2Vucy52dWVcbi8vIG1vZHVsZSBpZCA9IDIyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncGFzc3BvcnQtY2xpZW50cycpLCBfdm0uX3YoXCIgXCIpLCBfYygncGFzc3BvcnQtYXV0aG9yaXplZC1jbGllbnRzJyksIF92bS5fdihcIiBcIiksIF9jKCdwYXNzcG9ydC1wZXJzb25hbC1hY2Nlc3MtdG9rZW5zJyldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1iMTljNTg3Y1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYjE5YzU4N2MhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb25zb2xlL09BdXRoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMDYzMmU2YmQmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0F1dGhvcml6ZWRDbGllbnRzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIwMDI2MTYzNVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMDYzMmU2YmQmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0F1dGhvcml6ZWRDbGllbnRzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMDYzMmU2YmQmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0F1dGhvcml6ZWRDbGllbnRzLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMDYzMmU2YmQmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQXV0aG9yaXplZENsaWVudHMudnVlXG4vLyBtb2R1bGUgaWQgPSAyMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMzE3MjhkNTAmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudHMudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImY3YzI4M2JjXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zMTcyOGQ1MCZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50cy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTMxNzI4ZDUwJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRzLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMzE3MjhkNTAmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQ2xpZW50cy52dWVcbi8vIG1vZHVsZSBpZCA9IDIzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWFmMWFkZjQ0JnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9QZXJzb25hbEFjY2Vzc1Rva2Vucy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiODZiNzFkNTZcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWFmMWFkZjQ0JnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9QZXJzb25hbEFjY2Vzc1Rva2Vucy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWFmMWFkZjQ0JnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9QZXJzb25hbEFjY2Vzc1Rva2Vucy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWFmMWFkZjQ0JnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L1BlcnNvbmFsQWNjZXNzVG9rZW5zLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxudmFyIGxpc3RUb1N0eWxlcyA9IHJlcXVpcmUoJy4vbGlzdFRvU3R5bGVzJylcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7IGNzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHBhcnQuaWQgPSBwYXJlbnRJZCArICc6MCdcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0LmlkID0gcGFyZW50SWQgKyAnOicgKyBuZXdTdHlsZXNbaWRdLnBhcnRzLmxlbmd0aFxuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS12dWUtc3NyLWlkfj1cIicgKyBvYmouaWQgKyAnXCJdJylcbiAgdmFyIGhhc1NTUiA9IHN0eWxlRWxlbWVudCAhPSBudWxsXG5cbiAgLy8gaWYgaW4gcHJvZHVjdGlvbiBtb2RlIGFuZCBzdHlsZSBpcyBhbHJlYWR5IHByb3ZpZGVkIGJ5IFNTUixcbiAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gIGlmIChoYXNTU1IgJiYgaXNQcm9kdWN0aW9uKSB7XG4gICAgcmV0dXJuIG5vb3BcbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gc3R5bGVFbGVtZW50IHx8IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKCFoYXNTU1IpIHtcbiAgICB1cGRhdGUob2JqKVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5FeGFtcGxlIENvbXBvbmVudDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBJJ20gYW4gZXhhbXBsZSBjb21wb25lbnQhXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IG1vdW50ZWQuJylcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEV4YW1wbGUudnVlPzE1NWFjMjllIiwiPHRlbXBsYXRlPlxuXG4gICAgPHRleHRhcmVhPjwvdGV4dGFyZWE+XG5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBhdXRvc2l6ZSBmcm9tICdhdXRvc2l6ZSdcbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IFsncmVzaXplZCddLFxuICAgICAgICBtb3VudGVkICgpIHtcbiAgICAgICAgICAgIGF1dG9zaXplKHRoaXMuJGVsKVxuICAgICAgICAgICAgaWYgKHRoaXMucmVzaXplZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudFt0aGlzLnJlc2l6ZWRdKHRoaXMuJGVsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGF1dG9zaXplLXRleHRhcmVhLnZ1ZT9hNzRlZDkzYyIsIndpbmRvdy5fID0gcmVxdWlyZSgnbG9kYXNoJyk7XG53aW5kb3cubW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG5cbi8qKlxuICogV2UnbGwgbG9hZCBqUXVlcnkgYW5kIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbiB3aGljaCBwcm92aWRlcyBzdXBwb3J0XG4gKiBmb3IgSmF2YVNjcmlwdCBiYXNlZCBCb290c3RyYXAgZmVhdHVyZXMgc3VjaCBhcyBtb2RhbHMgYW5kIHRhYnMuIFRoaXNcbiAqIGNvZGUgbWF5IGJlIG1vZGlmaWVkIHRvIGZpdCB0aGUgc3BlY2lmaWMgbmVlZHMgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAqL1xuXG4vKipcbiAqIEBXQVJOSU5HOiBUaGVzZSB0d28gbGlicmFyaWVzIGFyZSBpbmNsdWRlZCBpbiB0aGVtZS5qcywgc28gbm8gbmVlZCB0byBpbmNsdWRlIGFnYWluLlxuICovXG4vLyB3aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcbi8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC1zYXNzJyk7XG5cbi8qKlxuICogVnVlIGlzIGEgbW9kZXJuIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgYnVpbGRpbmcgaW50ZXJhY3RpdmUgd2ViIGludGVyZmFjZXNcbiAqIHVzaW5nIHJlYWN0aXZlIGRhdGEgYmluZGluZyBhbmQgcmV1c2FibGUgY29tcG9uZW50cy4gVnVlJ3MgQVBJIGlzIGNsZWFuXG4gKiBhbmQgc2ltcGxlLCBsZWF2aW5nIHlvdSB0byBmb2N1cyBvbiBidWlsZGluZyB5b3VyIG5leHQgZ3JlYXQgcHJvamVjdC5cbiAqL1xuXG53aW5kb3cuVnVlID0gcmVxdWlyZSgndnVlJyk7XG53aW5kb3cuVnVleCA9IHJlcXVpcmUoJ3Z1ZXgnKTtcbndpbmRvdy5WdWVSb3V0ZXIgPSByZXF1aXJlKCd2dWUtcm91dGVyJyk7XG53aW5kb3cuVnVlSTE4biA9IHJlcXVpcmUoJ3Z1ZS1pMThuJyk7XG5yZXF1aXJlKCcuL2ZpbHRlcnMvaGVscGVycycpO1xuXG5WdWUudXNlKFZ1ZXgpO1xuVnVlLnVzZShWdWVSb3V0ZXIpO1xuVnVlLnVzZShWdWVJMThuKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uID0ge1xuICAgICdYLUNTUkYtVE9LRU4nOiB3aW5kb3cuTGFyYXZlbC5jc3JmVG9rZW4sXG4gICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBTb21lbGluZS5sb2NhbGVcbn07XG5cblZ1ZS5wcm90b3R5cGUuJGh0dHAgPSB3aW5kb3cuJGh0dHAgPSB3aW5kb3cuYXhpb3M7XG5cbnZhciBhcGlBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogJy9hcGkvJyxcbiAgICB0aW1lb3V0OiAxMDAwMCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24veC5zb21lbGluZS52MStqc29uJyxcbiAgICB9XG59KTtcblZ1ZS5wcm90b3R5cGUuJGFwaSA9IHdpbmRvdy4kYXBpID0gYXBpQXhpb3M7XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tIFwibGFyYXZlbC1lY2hvXCJcblxuLy8gd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4vLyAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuLy8gICAgIGtleTogJ3lvdXItcHVzaGVyLWtleSdcbi8vIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgTGliZXJuIG9uIDI2LzUvMTYuXG4gKi9cbmV4cG9ydCBkZWZhdWx0e1xuICAgIGJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbC5mb2N1cygpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2RpcmVjdGl2ZXMvZm9jdXMuanMiLCIvKipcbiAqIENoYW5nZXMgdmFsdWUgdG8gcGFzdCB0ZW5zZS5cbiAqIFNpbXBsZSBmaWx0ZXIgZG9lcyBub3Qgc3VwcG9ydCBpcnJlZ3VsYXIgdmVyYnMgc3VjaCBhcyBlYXQtYXRlLCBmbHktZmxldywgZXRjLlxuICogaHR0cDovL2pzZmlkZGxlLm5ldC9icnlhbl9rLzB4Y3ptZTJyL1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgc3RyaW5nLlxuICovXG5WdWUuZmlsdGVyKCdwYXN0LXRlbnNlJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAvLyBTbGlnaHRseSBmb2xsb3dzIGh0dHA6Ly93d3cub3hmb3JkZGljdGlvbmFyaWVzLmNvbS91cy93b3Jkcy92ZXJiLXRlbnNlcy1hZGRpbmctZWQtYW5kLWluZ1xuICAgIHZhciB2b3dlbHMgPSBbJ2EnLCAnZScsICdpJywgJ28nLCAndSddO1xuICAgIGlmKCF2YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGxhc3QgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnN1YnN0cih2YWx1ZS5sZW5ndGggLSAxKSxcbiAgICAgICAgc2Vjb25kTGFzdCA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3Vic3RyKHZhbHVlLmxlbmd0aCAtIDIsIDEpLFxuICAgICAgICB0aGlyZExhc3QgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnN1YnN0cih2YWx1ZS5sZW5ndGggLSAzLCAxKSxcbiAgICAgICAgbGFzdFR3byA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3Vic3RyKHZhbHVlLmxlbmd0aCAtIDIpLFxuICAgICAgICBsYXN0VGhyZWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnN1YnN0cih2YWx1ZS5sZW5ndGggLSAzKSxcbiAgICAgICAgaW5BcnJheSA9IGZ1bmN0aW9uKGFyLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFyLmluZGV4T2YodmFsdWUpICE9IC0xXG4gICAgICAgIH07XG5cbiAgICAvLyBwYXJ0aWNpcGxlIG9yIGFscmVhZHkgcGFzdCB0ZW5zZSwgZG9uJ3Qgd2FudFxuICAgIGlmKGxhc3RUaHJlZSA9PT0gJ2luZycgfHwgbGFzdFR3byA9PT0gJ2VkJykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gRW5kcyBpbiAnZScsIHNpbXBseSBhZGQgdGhlICdkJ1xuICAgIGlmKGxhc3QgPT09ICdlJykge1xuICAgICAgICByZXR1cm4gdmFsdWUgKyAnZCc7XG4gICAgfVxuXG4gICAgLy8gRW5kcyBpbiAnYycsIGFkZCB0aGUgJ2tlZCdcbiAgICBpZihsYXN0ID09PSAnYycpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICsgJ2tlZCc7XG4gICAgfVxuXG4gICAgLy8gRW5kcyB3aXRoIGNvbnNvbmFudCwgdm93ZWwsIGNvbnNvbmFudC4gSSdtIHNpbXBsZSwgZG91YmxlIGNvbnNvbmFudCBhbmQgYWRkICdlZCdcbiAgICBpZighaW5BcnJheSh2b3dlbHMsIHRoaXJkTGFzdCkgJiYgaW5BcnJheSh2b3dlbHMsIHNlY29uZExhc3QpICYmICFpbkFycmF5KHZvd2VscywgbGFzdCkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICsgbGFzdCArICdlZCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlICsgJ2VkJztcbn0pO1xuXG4vKipcbiAqIFZ1ZSBmaWx0ZXIgdG8gY29udmVydCBhIHNsdWcgdG8gYSBtb3JlIGh1bWFuIGZyaWVuZGx5IGZvcm0uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKi9cblZ1ZS5maWx0ZXIoJ2h1bWFuYWJsZScsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHdvcmRzID0gdmFsdWUuc3BsaXQoL1stX10rL2cpO1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgZm9yKHZhciBpPTA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbGV0dGVyID0gd29yZHNbaV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHJlc3VsdHMucHVzaChsZXR0ZXIgKyB3b3Jkc1tpXS5zbGljZSgxKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzLmpvaW4oJyAnKTtcbn0pO1xuXG4vKipcbiAqIFZ1ZSBmaWx0ZXIgdG8gY29udmVydCB0aGUgZ2l2ZW4gdmFsdWUgdG8gcGVyY2VudC5cbiAqIGh0dHA6Ly9qc2ZpZGRsZS5uZXQvYnJ5YW5fay9xYXVmM3F5aC9cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgICAgVGhlIHZhbHVlIHN0cmluZy5cbiAqIEBwYXJhbSB7TnVtYmVyfSBkZWNpbWFscyBUaGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzLlxuICovXG5WdWUuZmlsdGVyKCdwZXJjZW50YWdlJywgZnVuY3Rpb24odmFsdWUsIGRlY2ltYWxzKSB7XG4gICAgaWYoIXZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICB9XG5cbiAgICBpZighZGVjaW1hbHMpIHtcbiAgICAgICAgZGVjaW1hbHMgPSAwO1xuICAgIH1cblxuICAgIHZhbHVlID0gdmFsdWUgKiAxMDA7XG4gICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlICogTWF0aC5wb3coMTAsIGRlY2ltYWxzKSkgLyBNYXRoLnBvdygxMCwgZGVjaW1hbHMpO1xuICAgIHZhbHVlID0gdmFsdWUgKyAnJSc7XG4gICAgcmV0dXJuIHZhbHVlO1xufSk7XG5cblxuLyoqXG4gKiBWdWUgZmlsdGVyIHRvIHJvdW5kIHRoZSBkZWNpbWFsIHRvIHRoZSBnaXZlbiBwbGFjZS5cbiAqIGh0dHA6Ly9qc2ZpZGRsZS5uZXQvYnJ5YW5fay8zb3ZhMTd5OS9cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgICAgVGhlIHZhbHVlIHN0cmluZy5cbiAqIEBwYXJhbSB7TnVtYmVyfSBkZWNpbWFscyBUaGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzLlxuICovXG5WdWUuZmlsdGVyKCdyb3VuZCcsIGZ1bmN0aW9uKHZhbHVlLCBkZWNpbWFscykge1xuICAgIGlmKCF2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IDA7XG4gICAgfVxuXG4gICAgaWYoIWRlY2ltYWxzKSB7XG4gICAgICAgIGRlY2ltYWxzID0gMDtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgKiBNYXRoLnBvdygxMCwgZGVjaW1hbHMpKSAvIE1hdGgucG93KDEwLCBkZWNpbWFscyk7XG4gICAgcmV0dXJuIHZhbHVlO1xufSk7XG5cblxuLyoqXG4gKiBWdWUgZmlsdGVyIHRvIGNvbnZlcnQgdGhlIGdpdmVuIHZhbHVlIHRvIHdob2xlIGRvbGxhcnMsIG5vIGNoYW5nZS5cbiAqIGh0dHA6Ly9qc2ZpZGRsZS5uZXQvYnJ5YW5fay8ydDZicXFmYy9cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHN0cmluZy5cbiAqL1xuVnVlLmZpbHRlcignbm8tY2hhbmdlJywgZnVuY3Rpb24odmFsdWUsIHN5bWJvbCkge1xuICAgIGlmKCF2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IDA7XG4gICAgfVxuXG4gICAgaWYoIXN5bWJvbCkge1xuICAgICAgICBzeW1ib2wgPSAnJCc7XG4gICAgfVxuXG4gICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykuc3BsaXQoJy4nKVswXTtcbiAgICByZXR1cm4gc3ltYm9sICsgdmFsdWU7XG59KTtcblxuLyoqXG4gKiBWdWUgZmlsdGVyIHRvIG1ha2UgYSBzaW1wbGUgdGltZXN0YW1wIGZvciBhbiBJU08gZGF0ZS5cbiAqIGh0dHA6Ly9qc2ZpZGRsZS5uZXQvYnJ5YW5fay80NGtxdHBlZy9cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHN0cmluZy5cbiAqL1xuVnVlLmZpbHRlcigndGltZXN0YW1wJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcGFydHMgPSB2YWx1ZS5zcGxpdCgnICcpO1xuICAgIHZhciBkYXRlID0gcGFydHNbMF07XG4gICAgdmFyIHRpbWUgPSBwYXJ0c1sxXTtcblxuICAgIGRhdGUgPSBkYXRlLnNwbGl0KCctJyk7XG4gICAgdGltZSA9IHRpbWUuc3BsaXQoJzonKTtcblxuICAgIGlmKHBhcnNlSW50KHRpbWVbMF0sIDEwKSA+IDEyKSB7XG4gICAgICAgIHZhciBob3VyID0gcGFyc2VJbnQodGltZVswXSwgMTApICUgMTI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgaG91ciA9IHBhcnNlSW50KHRpbWVbMF0sIDEwKTtcbiAgICB9XG5cbiAgICBob3VyID0gaG91ciA8IDEwID8gJzAnICsgaG91ciA6IGhvdXI7XG5cbiAgICByZXR1cm4gJ1snICsgZGF0ZVsxXSArICcvJyArIGRhdGVbMl0gKyAnICcgKyBob3VyICsgJzonICsgdGltZVsxXSArICddJztcbn0pO1xuXG4vKipcbiAqIFZ1ZSBmaWx0ZXIgdG8gdHJ1bmNhdGUgYSBzdHJpbmcgdG8gdGhlIHNwZWNpZmllZCBsZW5ndGguXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHN0cmluZy5cbiAqL1xuVnVlLmZpbHRlcigndHJ1bmNhdGUnLCBmdW5jdGlvbih2YWx1ZSwgbGVuZ3RoKSB7XG4gICAgaWYodmFsdWUubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBsZW5ndGggPSBsZW5ndGggLSAzO1xuXG4gICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZygwLCBsZW5ndGgpICsgJy4uLic7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2ZpbHRlcnMvaGVscGVycy5qcyJdLCJzb3VyY2VSb290IjoiIn0=