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

Vue.component('passport-clients', __webpack_require__(211));

Vue.component('passport-authorized-clients', __webpack_require__(210));

Vue.component('passport-personal-access-tokens', __webpack_require__(212));

Vue.component('example', __webpack_require__(18));
Vue.component('sl-oauth', __webpack_require__(201));

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

/***/ 172:
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
  __webpack_require__(21),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/german/Sites/someline-starter/resources/assets/js/components/Example.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Example.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-acf60a48", Component.options)
  } else {
    hotAPI.reload("data-v-acf60a48", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 181:
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

/***/ 182:
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

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(22)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  "data-v-45c5e358",
  /* cssModules */
  null
)
Component.options.__file = "/Users/german/Sites/someline-starter/resources/assets/js/essentials/autosize-textarea.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] autosize-textarea.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45c5e358", Component.options)
  } else {
    hotAPI.reload("data-v-45c5e358", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.action-link[data-v-1e9d7f49] {\n    cursor: pointer;\n}\n.m-b-none[data-v-1e9d7f49] {\n    margin-bottom: 0;\n}\n", "", {"version":3,"sources":["/./resources/assets/js/components/passport/Clients.vue?0a388e40"],"names":[],"mappings":";AACA;IACA,gBAAA;CACA;AAEA;IACA,iBAAA;CACA","file":"Clients.vue","sourcesContent":["<style scoped>\n    .action-link {\n        cursor: pointer;\n    }\n\n    .m-b-none {\n        margin-bottom: 0;\n    }\n</style>\n\n<template>\n    <div>\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <div style=\"display: flex; justify-content: space-between; align-items: center;\">\n                    <span>\n                        OAuth Clients\n                    </span>\n\n                    <a class=\"action-link\" @click=\"showCreateClientForm\">\n                        Create New Client\n                    </a>\n                </div>\n            </div>\n\n            <div class=\"panel-body\">\n                <!-- Current Clients -->\n                <p class=\"m-b-none\" v-if=\"clients.length === 0\">\n                    You have not created any OAuth clients.\n                </p>\n\n                <table class=\"table table-borderless m-b-none\" v-if=\"clients.length > 0\">\n                    <thead>\n                        <tr>\n                            <th>Client ID</th>\n                            <th>Name</th>\n                            <th>Secret</th>\n                            <th></th>\n                            <th></th>\n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        <tr v-for=\"client in clients\">\n                            <!-- ID -->\n                            <td style=\"vertical-align: middle;\">\n                                {{ client.id }}\n                            </td>\n\n                            <!-- Name -->\n                            <td style=\"vertical-align: middle;\">\n                                {{ client.name }}\n                            </td>\n\n                            <!-- Secret -->\n                            <td style=\"vertical-align: middle;\">\n                                <code>{{ client.secret }}</code>\n                            </td>\n\n                            <!-- Edit Button -->\n                            <td style=\"vertical-align: middle;\">\n                                <a class=\"action-link\" @click=\"edit(client)\">\n                                    Edit\n                                </a>\n                            </td>\n\n                            <!-- Delete Button -->\n                            <td style=\"vertical-align: middle;\">\n                                <a class=\"action-link text-danger\" @click=\"destroy(client)\">\n                                    Delete\n                                </a>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n        <!-- Create Client Modal -->\n        <div class=\"modal fade\" id=\"modal-create-client\" tabindex=\"-1\" role=\"dialog\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button \" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\n                        <h4 class=\"modal-title\">\n                            Create Client\n                        </h4>\n                    </div>\n\n                    <div class=\"modal-body\">\n                        <!-- Form Errors -->\n                        <div class=\"alert alert-danger\" v-if=\"createForm.errors.length > 0\">\n                            <p><strong>Whoops!</strong> Something went wrong!</p>\n                            <br>\n                            <ul>\n                                <li v-for=\"error in createForm.errors\">\n                                    {{ error }}\n                                </li>\n                            </ul>\n                        </div>\n\n                        <!-- Create Client Form -->\n                        <form class=\"form-horizontal\" role=\"form\">\n                            <!-- Name -->\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3 control-label\">Name</label>\n\n                                <div class=\"col-md-7\">\n                                    <input id=\"create-client-name\" type=\"text\" class=\"form-control\"\n                                                                @keyup.enter=\"store\" v-model=\"createForm.name\">\n\n                                    <span class=\"help-block\">\n                                        Something your users will recognize and trust.\n                                    </span>\n                                </div>\n                            </div>\n\n                            <!-- Redirect URL -->\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3 control-label\">Redirect URL</label>\n\n                                <div class=\"col-md-7\">\n                                    <input type=\"text\" class=\"form-control\" name=\"redirect\"\n                                                    @keyup.enter=\"store\" v-model=\"createForm.redirect\">\n\n                                    <span class=\"help-block\">\n                                        Your application's authorization callback URL.\n                                    </span>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n\n                    <!-- Modal Actions -->\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\n                        <button type=\"button\" class=\"btn btn-primary\" @click=\"store\">\n                            Create\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- Edit Client Modal -->\n        <div class=\"modal fade\" id=\"modal-edit-client\" tabindex=\"-1\" role=\"dialog\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button \" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\n                        <h4 class=\"modal-title\">\n                            Edit Client\n                        </h4>\n                    </div>\n\n                    <div class=\"modal-body\">\n                        <!-- Form Errors -->\n                        <div class=\"alert alert-danger\" v-if=\"editForm.errors.length > 0\">\n                            <p><strong>Whoops!</strong> Something went wrong!</p>\n                            <br>\n                            <ul>\n                                <li v-for=\"error in editForm.errors\">\n                                    {{ error }}\n                                </li>\n                            </ul>\n                        </div>\n\n                        <!-- Edit Client Form -->\n                        <form class=\"form-horizontal\" role=\"form\">\n                            <!-- Name -->\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3 control-label\">Name</label>\n\n                                <div class=\"col-md-7\">\n                                    <input id=\"edit-client-name\" type=\"text\" class=\"form-control\"\n                                                                @keyup.enter=\"update\" v-model=\"editForm.name\">\n\n                                    <span class=\"help-block\">\n                                        Something your users will recognize and trust.\n                                    </span>\n                                </div>\n                            </div>\n\n                            <!-- Redirect URL -->\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3 control-label\">Redirect URL</label>\n\n                                <div class=\"col-md-7\">\n                                    <input type=\"text\" class=\"form-control\" name=\"redirect\"\n                                                    @keyup.enter=\"update\" v-model=\"editForm.redirect\">\n\n                                    <span class=\"help-block\">\n                                        Your application's authorization callback URL.\n                                    </span>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n\n                    <!-- Modal Actions -->\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\n                        <button type=\"button\" class=\"btn btn-primary\" @click=\"update\">\n                            Save Changes\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n    export default {\n        /*\n         * The component's data.\n         */\n        data() {\n            return {\n                clients: [],\n\n                createForm: {\n                    errors: [],\n                    name: '',\n                    redirect: ''\n                },\n\n                editForm: {\n                    errors: [],\n                    name: '',\n                    redirect: ''\n                }\n            };\n        },\n\n        /**\n         * Prepare the component (Vue 1.x).\n         */\n        ready() {\n            this.prepareComponent();\n        },\n\n        /**\n         * Prepare the component (Vue 2.x).\n         */\n        mounted() {\n            this.prepareComponent();\n        },\n\n        methods: {\n            /**\n             * Prepare the component.\n             */\n            prepareComponent() {\n                this.getClients();\n\n                $('#modal-create-client').on('shown.bs.modal', () => {\n                    $('#create-client-name').focus();\n                });\n\n                $('#modal-edit-client').on('shown.bs.modal', () => {\n                    $('#edit-client-name').focus();\n                });\n            },\n\n            /**\n             * Get all of the OAuth clients for the user.\n             */\n            getClients() {\n                axios.get('/oauth/clients')\n                        .then(response => {\n                            this.clients = response.data;\n                        });\n            },\n\n            /**\n             * Show the form for creating new clients.\n             */\n            showCreateClientForm() {\n                $('#modal-create-client').modal('show');\n            },\n\n            /**\n             * Create a new OAuth client for the user.\n             */\n            store() {\n                this.persistClient(\n                    'post', '/oauth/clients',\n                    this.createForm, '#modal-create-client'\n                );\n            },\n\n            /**\n             * Edit the given client.\n             */\n            edit(client) {\n                this.editForm.id = client.id;\n                this.editForm.name = client.name;\n                this.editForm.redirect = client.redirect;\n\n                $('#modal-edit-client').modal('show');\n            },\n\n            /**\n             * Update the client being edited.\n             */\n            update() {\n                this.persistClient(\n                    'put', '/oauth/clients/' + this.editForm.id,\n                    this.editForm, '#modal-edit-client'\n                );\n            },\n\n            /**\n             * Persist the client to storage using the given form.\n             */\n            persistClient(method, uri, form, modal) {\n                form.errors = [];\n\n                axios[method](uri, form)\n                    .then(response => {\n                        this.getClients();\n\n                        form.name = '';\n                        form.redirect = '';\n                        form.errors = [];\n\n                        $(modal).modal('hide');\n                    })\n                    .catch(response => {\n                        if (typeof response.data === 'object') {\n                            form.errors = _.flatten(_.toArray(response.data));\n                        } else {\n                            form.errors = ['Something went wrong. Please try again.'];\n                        }\n                    });\n            },\n\n            /**\n             * Destroy the given client.\n             */\n            destroy(client) {\n                axios.delete('/oauth/clients/' + client.id)\n                        .then(response => {\n                            this.getClients();\n                        });\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.action-link[data-v-4a628be6] {\n    cursor: pointer;\n}\n.m-b-none[data-v-4a628be6] {\n    margin-bottom: 0;\n}\n", "", {"version":3,"sources":["/./resources/assets/js/components/passport/PersonalAccessTokens.vue?17591698"],"names":[],"mappings":";AACA;IACA,gBAAA;CACA;AAEA;IACA,iBAAA;CACA","file":"PersonalAccessTokens.vue","sourcesContent":["<style scoped>\n    .action-link {\n        cursor: pointer;\n    }\n\n    .m-b-none {\n        margin-bottom: 0;\n    }\n</style>\n\n<template>\n    <div>\n        <div>\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <div style=\"display: flex; justify-content: space-between; align-items: center;\">\n                        <span>\n                            Personal Access Tokens\n                        </span>\n\n                        <a class=\"action-link\" @click=\"showCreateTokenForm\">\n                            Create New Token\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"panel-body\">\n                    <!-- No Tokens Notice -->\n                    <p class=\"m-b-none\" v-if=\"tokens.length === 0\">\n                        You have not created any personal access tokens.\n                    </p>\n\n                    <!-- Personal Access Tokens -->\n                    <table class=\"table table-borderless m-b-none\" v-if=\"tokens.length > 0\">\n                        <thead>\n                            <tr>\n                                <th>Name</th>\n                                <th></th>\n                            </tr>\n                        </thead>\n\n                        <tbody>\n                            <tr v-for=\"token in tokens\">\n                                <!-- Client Name -->\n                                <td style=\"vertical-align: middle;\">\n                                    {{ token.name }}\n                                </td>\n\n                                <!-- Delete Button -->\n                                <td style=\"vertical-align: middle;\">\n                                    <a class=\"action-link text-danger\" @click=\"revoke(token)\">\n                                        Delete\n                                    </a>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <!-- Create Token Modal -->\n        <div class=\"modal fade\" id=\"modal-create-token\" tabindex=\"-1\" role=\"dialog\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button \" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\n                        <h4 class=\"modal-title\">\n                            Create Token\n                        </h4>\n                    </div>\n\n                    <div class=\"modal-body\">\n                        <!-- Form Errors -->\n                        <div class=\"alert alert-danger\" v-if=\"form.errors.length > 0\">\n                            <p><strong>Whoops!</strong> Something went wrong!</p>\n                            <br>\n                            <ul>\n                                <li v-for=\"error in form.errors\">\n                                    {{ error }}\n                                </li>\n                            </ul>\n                        </div>\n\n                        <!-- Create Token Form -->\n                        <form class=\"form-horizontal\" role=\"form\" @submit.prevent=\"store\">\n                            <!-- Name -->\n                            <div class=\"form-group\">\n                                <label class=\"col-md-4 control-label\">Name</label>\n\n                                <div class=\"col-md-6\">\n                                    <input id=\"create-token-name\" type=\"text\" class=\"form-control\" name=\"name\" v-model=\"form.name\">\n                                </div>\n                            </div>\n\n                            <!-- Scopes -->\n                            <div class=\"form-group\" v-if=\"scopes.length > 0\">\n                                <label class=\"col-md-4 control-label\">Scopes</label>\n\n                                <div class=\"col-md-6\">\n                                    <div v-for=\"scope in scopes\">\n                                        <div class=\"checkbox\">\n                                            <label>\n                                                <input type=\"checkbox\"\n                                                    @click=\"toggleScope(scope.id)\"\n                                                    :checked=\"scopeIsAssigned(scope.id)\">\n\n                                                    {{ scope.id }}\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n\n                    <!-- Modal Actions -->\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\n                        <button type=\"button\" class=\"btn btn-primary\" @click=\"store\">\n                            Create\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- Access Token Modal -->\n        <div class=\"modal fade\" id=\"modal-access-token\" tabindex=\"-1\" role=\"dialog\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button \" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\n                        <h4 class=\"modal-title\">\n                            Personal Access Token\n                        </h4>\n                    </div>\n\n                    <div class=\"modal-body\">\n                        <p>\n                            Here is your new personal access token. This is the only time it will be shown so don't lose it!\n                            You may now use this token to make API requests.\n                        </p>\n\n                        <pre><code>{{ accessToken }}</code></pre>\n                    </div>\n\n                    <!-- Modal Actions -->\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n    export default {\n        /*\n         * The component's data.\n         */\n        data() {\n            return {\n                accessToken: null,\n\n                tokens: [],\n                scopes: [],\n\n                form: {\n                    name: '',\n                    scopes: [],\n                    errors: []\n                }\n            };\n        },\n\n        /**\n         * Prepare the component (Vue 1.x).\n         */\n        ready() {\n            this.prepareComponent();\n        },\n\n        /**\n         * Prepare the component (Vue 2.x).\n         */\n        mounted() {\n            this.prepareComponent();\n        },\n\n        methods: {\n            /**\n             * Prepare the component.\n             */\n            prepareComponent() {\n                this.getTokens();\n                this.getScopes();\n\n                $('#modal-create-token').on('shown.bs.modal', () => {\n                    $('#create-token-name').focus();\n                });\n            },\n\n            /**\n             * Get all of the personal access tokens for the user.\n             */\n            getTokens() {\n                axios.get('/oauth/personal-access-tokens')\n                        .then(response => {\n                            this.tokens = response.data;\n                        });\n            },\n\n            /**\n             * Get all of the available scopes.\n             */\n            getScopes() {\n                axios.get('/oauth/scopes')\n                        .then(response => {\n                            this.scopes = response.data;\n                        });\n            },\n\n            /**\n             * Show the form for creating new tokens.\n             */\n            showCreateTokenForm() {\n                $('#modal-create-token').modal('show');\n            },\n\n            /**\n             * Create a new personal access token.\n             */\n            store() {\n                this.accessToken = null;\n\n                this.form.errors = [];\n\n                axios.post('/oauth/personal-access-tokens', this.form)\n                        .then(response => {\n                            this.form.name = '';\n                            this.form.scopes = [];\n                            this.form.errors = [];\n\n                            this.tokens.push(response.data.token);\n\n                            this.showAccessToken(response.data.accessToken);\n                        })\n                        .catch(response => {\n                            if (typeof response.data === 'object') {\n                                this.form.errors = _.flatten(_.toArray(response.data));\n                            } else {\n                                this.form.errors = ['Something went wrong. Please try again.'];\n                            }\n                        });\n            },\n\n            /**\n             * Toggle the given scope in the list of assigned scopes.\n             */\n            toggleScope(scope) {\n                if (this.scopeIsAssigned(scope)) {\n                    this.form.scopes = _.reject(this.form.scopes, s => s == scope);\n                } else {\n                    this.form.scopes.push(scope);\n                }\n            },\n\n            /**\n             * Determine if the given scope has been assigned to the token.\n             */\n            scopeIsAssigned(scope) {\n                return _.indexOf(this.form.scopes, scope) >= 0;\n            },\n\n            /**\n             * Show the given access token to the user.\n             */\n            showAccessToken(accessToken) {\n                $('#modal-create-token').modal('hide');\n\n                this.accessToken = accessToken;\n\n                $('#modal-access-token').modal('show');\n            },\n\n            /**\n             * Revoke the given token.\n             */\n            revoke(token) {\n                axios.delete('/oauth/personal-access-tokens/' + token.id)\n                        .then(response => {\n                            this.getTokens();\n                        });\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.action-link[data-v-9a389924] {\n    cursor: pointer;\n}\n.m-b-none[data-v-9a389924] {\n    margin-bottom: 0;\n}\n", "", {"version":3,"sources":["/./resources/assets/js/components/passport/AuthorizedClients.vue?b2c8c1ec"],"names":[],"mappings":";AACA;IACA,gBAAA;CACA;AAEA;IACA,iBAAA;CACA","file":"AuthorizedClients.vue","sourcesContent":["<style scoped>\n    .action-link {\n        cursor: pointer;\n    }\n\n    .m-b-none {\n        margin-bottom: 0;\n    }\n</style>\n\n<template>\n    <div>\n        <div v-if=\"tokens.length > 0\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">Authorized Applications</div>\n\n                <div class=\"panel-body\">\n                    <!-- Authorized Tokens -->\n                    <table class=\"table table-borderless m-b-none\">\n                        <thead>\n                            <tr>\n                                <th>Name</th>\n                                <th>Scopes</th>\n                                <th></th>\n                            </tr>\n                        </thead>\n\n                        <tbody>\n                            <tr v-for=\"token in tokens\">\n                                <!-- Client Name -->\n                                <td style=\"vertical-align: middle;\">\n                                    {{ token.client.name }}\n                                </td>\n\n                                <!-- Scopes -->\n                                <td style=\"vertical-align: middle;\">\n                                    <span v-if=\"token.scopes.length > 0\">\n                                        {{ token.scopes.join(', ') }}\n                                    </span>\n                                </td>\n\n                                <!-- Revoke Button -->\n                                <td style=\"vertical-align: middle;\">\n                                    <a class=\"action-link text-danger\" @click=\"revoke(token)\">\n                                        Revoke\n                                    </a>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n    export default {\n        /*\n         * The component's data.\n         */\n        data() {\n            return {\n                tokens: []\n            };\n        },\n\n        /**\n         * Prepare the component (Vue 1.x).\n         */\n        ready() {\n            this.prepareComponent();\n        },\n\n        /**\n         * Prepare the component (Vue 2.x).\n         */\n        mounted() {\n            this.prepareComponent();\n        },\n\n        methods: {\n            /**\n             * Prepare the component (Vue 2.x).\n             */\n            prepareComponent() {\n                this.getTokens();\n            },\n\n            /**\n             * Get all of the authorized tokens for the user.\n             */\n            getTokens() {\n                axios.get('/oauth/tokens')\n                        .then(response => {\n                            this.tokens = response.data;\n                        });\n            },\n\n            /**\n             * Revoke the given token.\n             */\n            revoke(token) {\n                axios.delete('/oauth/tokens/' + token.id)\n                        .then(response => {\n                            this.getTokens();\n                        });\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

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
  return _c('textarea')
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-45c5e358", module.exports)
  }
}

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(172),
  /* template */
  __webpack_require__(225),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/german/Sites/someline-starter/resources/assets/js/components/console/OAuth.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] OAuth.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d9c5891e", Component.options)
  } else {
    hotAPI.reload("data-v-d9c5891e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 21:
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
     require("vue-hot-reload-api").rerender("data-v-acf60a48", module.exports)
  }
}

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(236)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(181),
  /* template */
  __webpack_require__(223),
  /* scopeId */
  "data-v-9a389924",
  /* cssModules */
  null
)
Component.options.__file = "/Users/german/Sites/someline-starter/resources/assets/js/components/passport/AuthorizedClients.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AuthorizedClients.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9a389924", Component.options)
  } else {
    hotAPI.reload("data-v-9a389924", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(230)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(182),
  /* template */
  __webpack_require__(217),
  /* scopeId */
  "data-v-1e9d7f49",
  /* cssModules */
  null
)
Component.options.__file = "/Users/german/Sites/someline-starter/resources/assets/js/components/passport/Clients.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Clients.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e9d7f49", Component.options)
  } else {
    hotAPI.reload("data-v-1e9d7f49", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(231)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(183),
  /* template */
  __webpack_require__(218),
  /* scopeId */
  "data-v-4a628be6",
  /* cssModules */
  null
)
Component.options.__file = "/Users/german/Sites/someline-starter/resources/assets/js/components/passport/PersonalAccessTokens.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PersonalAccessTokens.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a628be6", Component.options)
  } else {
    hotAPI.reload("data-v-4a628be6", Component.options)
  }
})()}

module.exports = Component.exports


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
     require("vue-hot-reload-api").rerender("data-v-1e9d7f49", module.exports)
  }
}

/***/ }),

/***/ 218:
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
     require("vue-hot-reload-api").rerender("data-v-4a628be6", module.exports)
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
var update = __webpack_require__(3)("312ca59e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-45c5e358&scoped=true!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./autosize-textarea.vue", function() {
     var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-45c5e358&scoped=true!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./autosize-textarea.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 223:
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
     require("vue-hot-reload-api").rerender("data-v-9a389924", module.exports)
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
     require("vue-hot-reload-api").rerender("data-v-d9c5891e", module.exports)
  }
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

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(190);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("51e80215", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1e9d7f49&scoped=true!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Clients.vue", function() {
     var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1e9d7f49&scoped=true!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Clients.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(191);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("40a73c30", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4a628be6&scoped=true!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PersonalAccessTokens.vue", function() {
     var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4a628be6&scoped=true!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PersonalAccessTokens.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("5e2807a8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9a389924&scoped=true!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AuthorizedClients.vue", function() {
     var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9a389924&scoped=true!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AuthorizedClients.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 239:
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

Vue.prototype.$http = window.axios;

var apiAxios = axios.create({
  baseURL: '/api/',
  timeout: 10000,
  headers: {
    'Accept': 'application/x.someline.v1+json'
  }
});
Vue.prototype.$api = apiAxios;

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

},[239]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzP2Q0ZjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9maWx0ZXJzL25sMmJyLmpzPzZlNzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYnVzLmpzPzE4M2YiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvanF1ZXJ5LmpzP2RlZTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvc3RvcmUuanM/YTNlNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy90b29scy5qcz8yZTAwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29uc29sZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy91c2VyLmpzPzkzYjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZT84ZDJmKiIsIndlYnBhY2s6Ly8vT0F1dGgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZT8wYmZlIiwid2VicGFjazovLy9BdXRob3JpemVkQ2xpZW50cy52dWUiLCJ3ZWJwYWNrOi8vL0NsaWVudHMudnVlIiwid2VicGFjazovLy9QZXJzb25hbEFjY2Vzc1Rva2Vucy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQ2xpZW50cy52dWU/ZGY2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvUGVyc29uYWxBY2Nlc3NUb2tlbnMudnVlPzQzOTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L0F1dGhvcml6ZWRDbGllbnRzLnZ1ZT8yMTdiIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanM/ZGEwNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlP2Y2MzkqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb25zb2xlL09BdXRoLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRXhhbXBsZS52dWU/MjMyMSoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L0F1dGhvcml6ZWRDbGllbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQ2xpZW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L1BlcnNvbmFsQWNjZXNzVG9rZW5zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQ2xpZW50cy52dWU/MGJhMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvUGVyc29uYWxBY2Nlc3NUb2tlbnMudnVlPzA3NjUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZT8wNTI5KiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQXV0aG9yaXplZENsaWVudHMudnVlP2M0NzAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbnNvbGUvT0F1dGgudnVlP2Y2NjciLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanM/ZTZhYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQ2xpZW50cy52dWU/Yzg5NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvUGVyc29uYWxBY2Nlc3NUb2tlbnMudnVlPzViMDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L0F1dGhvcml6ZWRDbGllbnRzLnZ1ZT85ZjYyIiwid2VicGFjazovLy8uL34vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzPzZiMmIiLCJ3ZWJwYWNrOi8vL0V4YW1wbGUudnVlPzM0NGMiLCJ3ZWJwYWNrOi8vL2F1dG9zaXplLXRleHRhcmVhLnZ1ZT8yOTUzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzPzU5MTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kaXJlY3RpdmVzL2ZvY3VzLmpzP2RiNWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9maWx0ZXJzL2hlbHBlcnMuanM/OThmNCJdLCJuYW1lcyI6WyJyZWFkIiwidmFsIiwicmVwbGFjZSIsIlJlZ0V4cCIsImNvbXB1dGVkIiwiYnVzIiwid2luZG93IiwibWV0aG9kcyIsImV2ZW50RW1pdCIsIm5hbWUiLCJkYXRhIiwiJGVtaXQiLCJldmVudE9uIiwiY2FsbGJhY2siLCIkb24iLCJldmVudE9mZiIsIiRvZmYiLCJBcHBIZWFkZXJTZXRUaXRsZSIsInRpdGxlIiwiQXBwVGFiQmFyU2V0U2hvd0FwcFRhYkJhciIsImlzU2hvdyIsIkFwcFRhYkJhclNlbGVjdFRhYkJhckl0ZW0iLCJpbmRleCIsIkFwcEhlYWRlclNldE5hdkJ1dHRvbkxlZnQiLCJjbGFzc05hbWUiLCJBcHBIZWFkZXJTZXROYXZCdXR0b25SaWdodCIsInNjcm9sbFRvQm90dG9tIiwic2VsZWN0b3IiLCJhbmltYXRlZCIsImFuaW1hdGVUaW1lIiwiJGVsZW1lbnQiLCIkIiwic2Nyb2xsSGVpZ2h0IiwicHJvcCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ2dWV4U3RvcmUiLCJzdG9yZUNvbW1pdCIsImNvbW1pdCIsInN0b3JlRGlzcGF0Y2giLCJkaXNwYXRjaCIsIm5vd1RpbWVzdGFtcCIsIm1vbWVudCIsInVuaXgiLCJtb21lbnRGcm9tRGF0ZVRpbWUiLCJkYXRlVGltZSIsImRhdGVUaW1lVG9UaW1lc3RhbXAiLCJ1cmwiLCJwYXRoIiwic3Vic3RyaW5nIiwiYmFzZVVybCIsInJlZGlyZWN0VG9VcmwiLCJsb2NhdGlvbiIsImhyZWYiLCJyZWRpcmVjdFRvVXJsRnJvbUJhc2VVcmwiLCJyZWxvYWRQYWdlIiwib2JqZWN0VG9Gb3JtRGF0YSIsIml0ZW0iLCJmb3JtX2RhdGEiLCJGb3JtRGF0YSIsImtleSIsImFwcGVuZCIsImlzRW1wdHlPYmplY3QiLCJvYmplY3QiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiaXNNb2JpbGUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInJlcXVpcmUiLCJWdWUiLCJkaXJlY3RpdmUiLCJmaWx0ZXIiLCJtaXhpbiIsImNvbXBvbmVudCIsIlZ1ZXgiLCJTdG9yZSIsInN0YXRlIiwicGxhdGZvcm0iLCJjb3VudCIsIm11dGF0aW9ucyIsImluY3JlbWVudCIsImFwcCIsImVsIiwibXNnIiwid2F0Y2giLCJldmVudHMiLCJjcmVhdGVkIiwiY29uc29sZSIsImxvZyIsImluaXRMb2NhbGUiLCJtb3VudGVkIiwidGhhdCIsImxhbmciLCJsb2NhbGUiLCJjb25maWciLCJTb21lbGluZSIsImxvY2FsZXMiLCJjdXJyZW50VXNlcklkIiwidXNlciIsInVzZXJfaWQiLCJfIiwiVnVlUm91dGVyIiwiVnVlSTE4biIsInVzZSIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiTGFyYXZlbCIsImNzcmZUb2tlbiIsInByb3RvdHlwZSIsIiRodHRwIiwiYXBpQXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwidGltZW91dCIsIiRhcGkiLCJiaW5kIiwiZm9jdXMiLCJ2YWx1ZSIsInZvd2VscyIsImxhc3QiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0ciIsInNlY29uZExhc3QiLCJ0aGlyZExhc3QiLCJsYXN0VHdvIiwibGFzdFRocmVlIiwiaW5BcnJheSIsImFyIiwiaW5kZXhPZiIsIndvcmRzIiwic3BsaXQiLCJyZXN1bHRzIiwiaSIsImxldHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwicHVzaCIsInNsaWNlIiwiam9pbiIsImRlY2ltYWxzIiwiTWF0aCIsInJvdW5kIiwicG93Iiwic3ltYm9sIiwidG9TdHJpbmciLCJwYXJ0cyIsImRhdGUiLCJ0aW1lIiwicGFyc2VJbnQiLCJob3VyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzlDQTtBQUFBOzs7QUFHQSw4REFBZTtBQUNYQSxVQUFNLGNBQVVDLEdBQVYsRUFBZTtBQUNqQixlQUFPQSxJQUFJQyxPQUFKLENBQVksSUFBSUMsTUFBSixDQUFXLE9BQVgsRUFBb0IsR0FBcEIsQ0FBWixFQUFzQyxRQUF0QyxDQUFQO0FBQ0g7QUFIVSxDQUFm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QTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrREFBa0QsUUFBUTtBQUMxRDtBQUNBLE9BQU87QUFDUDtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtEQUFrRCxRQUFRO0FBQzFEO0FBQ0EsT0FBTztBQUNQO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrREFBa0QsUUFBUTtBQUMxRDtBQUNBLE9BQU87QUFDUDtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtEQUFrRCxRQUFRO0FBQzFEO0FBQ0EsT0FBTztBQUNQO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBLENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQSxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxhQUFhLGFBQWEsMEJBQTBCO0FBQ3JEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNsVEEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0EsQ0FB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QUFDSDs7QUFFRHZELGFBQVNBLFNBQVMsQ0FBbEI7O0FBRUEsV0FBT3VELE1BQU14RSxTQUFOLENBQWdCLENBQWhCLEVBQW1CaUIsTUFBbkIsSUFBNkIsS0FBcEM7QUFDSCxDQVJELEUiLCJmaWxlIjoiL2Fzc2V0cy9qcy9jb25zb2xlLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIHNjb3BlSWQsXG4gIGNzc01vZHVsZXNcbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIC8vIGluamVjdCBjc3NNb2R1bGVzXG4gIGlmIChjc3NNb2R1bGVzKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCAob3B0aW9ucy5jb21wdXRlZCA9IHt9KVxuICAgIE9iamVjdC5rZXlzKGNzc01vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGNzc01vZHVsZXNba2V5XVxuICAgICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8qKlxuICogQ3JlYXRlZCBieSBMaWJlcm4gb24gMjYvNy8xNi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlYWQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgcmV0dXJuIHZhbC5yZXBsYWNlKG5ldyBSZWdFeHAoJ1xccj9cXG4nLCAnZycpLCAnPGJyIC8+Jyk7XG4gICAgfSxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2ZpbHRlcnMvbmwyYnIuanMiLCJleHBvcnQgZGVmYXVsdHtcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBidXMoKXtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYnVzO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBldmVudEVtaXQobmFtZSwgZGF0YSl7XG4gICAgICAgICAgICB0aGlzLmJ1cy4kZW1pdChuYW1lLCBkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXZlbnRPbihuYW1lLCBjYWxsYmFjayl7XG4gICAgICAgICAgICB0aGlzLmJ1cy4kb24obmFtZSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICBldmVudE9mZihuYW1lLCBjYWxsYmFjayl7XG4gICAgICAgICAgICB0aGlzLmJ1cy4kb2ZmKG5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgQXBwSGVhZGVyU2V0VGl0bGUodGl0bGUpe1xuICAgICAgICAgICAgdGhpcy5idXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgfSxcbiAgICAgICAgQXBwVGFiQmFyU2V0U2hvd0FwcFRhYkJhcihpc1Nob3cpe1xuICAgICAgICAgICAgdGhpcy5ldmVudEVtaXQoXCJBcHBUYWJCYXJfc2V0U2hvd0FwcFRhYkJhclwiLCBpc1Nob3cpO1xuICAgICAgICB9LFxuICAgICAgICBBcHBUYWJCYXJTZWxlY3RUYWJCYXJJdGVtKGluZGV4KXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRFbWl0KFwiQXBwVGFiQmFyX3NlbGVjdFRhYkJhckl0ZW1cIiwgaW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICBBcHBIZWFkZXJTZXROYXZCdXR0b25MZWZ0KGNsYXNzTmFtZSl7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RW1pdChcIkFwcEhlYWRlcl9zZXROYXZCdXR0b25MZWZ0XCIsIGNsYXNzTmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIEFwcEhlYWRlclNldE5hdkJ1dHRvblJpZ2h0KGNsYXNzTmFtZSl7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RW1pdChcIkFwcEhlYWRlcl9zZXROYXZCdXR0b25SaWdodFwiLCBjbGFzc05hbWUpO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9idXMuanMiLCJleHBvcnQgZGVmYXVsdHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNjcm9sbFRvQm90dG9tKHNlbGVjdG9yLCBhbmltYXRlZCwgYW5pbWF0ZVRpbWUpe1xuICAgICAgICAgICAgdmFyICRlbGVtZW50ID0gJChzZWxlY3Rvcik7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gJGVsZW1lbnQucHJvcChcInNjcm9sbEhlaWdodFwiKTtcbiAgICAgICAgICAgIGlmIChhbmltYXRlZCkge1xuICAgICAgICAgICAgICAgIGlmICghYW5pbWF0ZVRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVRpbWUgPSAxMDAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkZWxlbWVudC5hbmltYXRlKHtzY3JvbGxUb3A6IHNjcm9sbEhlaWdodH0sIGFuaW1hdGVUaW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQuc2Nyb2xsVG9wKHNjcm9sbEhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvanF1ZXJ5LmpzIiwiZXhwb3J0IGRlZmF1bHR7XG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgdnVleFN0b3JlKCl7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnZ1ZXhTdG9yZTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc3RvcmVDb21taXQobmFtZSwgZGF0YSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52dWV4U3RvcmUuY29tbWl0KG5hbWUsIGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBzdG9yZURpc3BhdGNoKG5hbWUsIGRhdGEpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudnVleFN0b3JlLmRpc3BhdGNoKG5hbWUsIGRhdGEpO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9zdG9yZS5qcyIsImV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbXB1dGVkOiB7fSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG5vd1RpbWVzdGFtcCgpe1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudCgpLnVuaXgoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbW9tZW50RnJvbURhdGVUaW1lKGRhdGVUaW1lKXtcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQoZGF0ZVRpbWUsICdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGVUaW1lVG9UaW1lc3RhbXAoZGF0ZVRpbWUpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9tZW50RnJvbURhdGVUaW1lKGRhdGVUaW1lKS51bml4KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVybChwYXRoKXtcbiAgICAgICAgICAgIGlmIChwYXRoICYmIHBhdGguc3Vic3RyaW5nKDAsIDEpICE9ICcvJykge1xuICAgICAgICAgICAgICAgIHBhdGggPSAnLycgKyBwYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVVybCArIHBhdGg7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZGlyZWN0VG9VcmwodXJsKXtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICB9LFxuICAgICAgICByZWRpcmVjdFRvVXJsRnJvbUJhc2VVcmwodXJsKXtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy51cmwodXJsKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVsb2FkUGFnZSgpe1xuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvVXJsKHdpbmRvdy5sb2NhdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIG9iamVjdFRvRm9ybURhdGEoaXRlbSl7XG4gICAgICAgICAgICB2YXIgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBpdGVtKSB7XG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZChrZXksIGl0ZW1ba2V5XSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmb3JtX2RhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIGlzRW1wdHlPYmplY3Qob2JqZWN0KXtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfSxcbiAgICAgICAgaXNNb2JpbGUoKXtcbiAgICAgICAgICAgIHZhciBpc01vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KVwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIChpc01vYmlsZS5tYXRjaGVzKTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdG9vbHMuanMiLCIvKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGUgVnVlIGFuZCBWdWUgUmVzb3VyY2UuIFRoaXMgZ2l2ZXMgYSBncmVhdCBzdGFydGluZyBwb2ludCBmb3JcbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxucmVxdWlyZSgnLi9ib290c3RyYXAnKTtcblxuLy8gVnVlIERpcmVjdGl2ZXNcblZ1ZS5kaXJlY3RpdmUoJ2ZvY3VzJywgcmVxdWlyZSgnLi9kaXJlY3RpdmVzL2ZvY3VzJykpO1xuXG4vLyBWdWUgRmlsdGVyc1xuVnVlLmZpbHRlcignbmwyYnInLCByZXF1aXJlKCcuL2ZpbHRlcnMvbmwyYnInKSk7XG5cbi8vIFZ1ZSBNaXhpbnNcbmltcG9ydCBNaXhJblVzZXIgZnJvbSAnLi9taXhpbnMvdXNlcidcbmltcG9ydCBNaXhJbkpRdWVyeSBmcm9tICcuL21peGlucy9qcXVlcnknXG5pbXBvcnQgTWl4SW5Ub29scyBmcm9tICcuL21peGlucy90b29scydcbmltcG9ydCBNaXhJbkJ1cyBmcm9tICcuL21peGlucy9idXMnXG5pbXBvcnQgTWl4SW5TdG9yZSBmcm9tICcuL21peGlucy9zdG9yZSdcblZ1ZS5taXhpbihNaXhJblVzZXIpO1xuVnVlLm1peGluKE1peEluSlF1ZXJ5KTtcblZ1ZS5taXhpbihNaXhJblRvb2xzKTtcblZ1ZS5taXhpbihNaXhJbkJ1cyk7XG5WdWUubWl4aW4oTWl4SW5TdG9yZSk7XG5cbi8vIFZ1ZSBDb21wb25lbnRzXG5WdWUuY29tcG9uZW50KCdhdXRvc2l6ZS10ZXh0YXJlYScsIHJlcXVpcmUoJy4vZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWUnKSk7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5WdWUuY29tcG9uZW50KFxuICAgICdwYXNzcG9ydC1jbGllbnRzJyxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvcGFzc3BvcnQvQ2xpZW50cy52dWUnKVxuKTtcblxuVnVlLmNvbXBvbmVudChcbiAgICAncGFzc3BvcnQtYXV0aG9yaXplZC1jbGllbnRzJyxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvcGFzc3BvcnQvQXV0aG9yaXplZENsaWVudHMudnVlJylcbik7XG5cblZ1ZS5jb21wb25lbnQoXG4gICAgJ3Bhc3Nwb3J0LXBlcnNvbmFsLWFjY2Vzcy10b2tlbnMnLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9wYXNzcG9ydC9QZXJzb25hbEFjY2Vzc1Rva2Vucy52dWUnKVxuKTtcblxuVnVlLmNvbXBvbmVudCgnZXhhbXBsZScsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9FeGFtcGxlLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3NsLW9hdXRoJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvbnNvbGUvT0F1dGgudnVlJykpO1xuXG4vLyBCdXNcbmNvbnN0IGJ1cyA9IG5ldyBWdWUoe1xuICAgIGRhdGE6IHtcbiAgICAgICAgdGl0bGU6IFwiU29tZWxpbmVcIixcbiAgICB9XG59KTtcbndpbmRvdy5idXMgPSBidXM7XG5cbi8vIFZ1ZXhcbmNvbnN0IHZ1ZXhTdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcbiAgICBzdGF0ZToge1xuICAgICAgICBwbGF0Zm9ybTogJ2NvbnNvbGUnLFxuICAgICAgICBjb3VudDogMFxuICAgIH0sXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIGluY3JlbWVudCAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmNvdW50KytcbiAgICAgICAgfVxuICAgIH1cbn0pO1xud2luZG93LnZ1ZXhTdG9yZSA9IHZ1ZXhTdG9yZTtcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbiAgICBkYXRhOiB7XG4gICAgICAgIG1zZzogXCJoZWxsb1wiLFxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHt9LFxuICAgIHdhdGNoOiB7fSxcbiAgICBldmVudHM6IHt9LFxuICAgIGNyZWF0ZWQoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0Jvb3RzdHJhcC4nKTtcbiAgICAgICAgdGhpcy5pbml0TG9jYWxlKCk7XG4gICAgfSxcbiAgICBtb3VudGVkKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWFkeS4nKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaW5pdExvY2FsZSgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0luaXQgTG9jYWxlLicpO1xuXG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgbGFuZyA9IHRoaXMubG9jYWxlO1xuXG4gICAgICAgICAgICBWdWUuY29uZmlnLmxhbmcgPSBsYW5nO1xuICAgICAgICAgICAgVnVlLmxvY2FsZShsYW5nLCB3aW5kb3cuU29tZWxpbmUubG9jYWxlcyk7XG5cbiAgICAgICAgfSxcbiAgICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29uc29sZS5qcyIsImV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGJhc2VVcmwoKXtcbiAgICAgICAgICAgIHJldHVybiBTb21lbGluZS5iYXNlVXJsO1xuICAgICAgICB9LFxuICAgICAgICBsb2NhbGUoKXtcbiAgICAgICAgICAgIHJldHVybiBTb21lbGluZS5sb2NhbGU7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnRVc2VySWQoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFNvbWVsaW5lLnN0YXRlKTtcbiAgICAgICAgICAgIHJldHVybiBTb21lbGluZS5zdGF0ZS51c2VyLnVzZXJfaWQ7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3VzZXIuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJhdXRvc2l6ZS10ZXh0YXJlYS52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDVjNWUzNTgmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdj5cbiAgICAgICAgPHBhc3Nwb3J0LWNsaWVudHM+PC9wYXNzcG9ydC1jbGllbnRzPlxuICAgICAgICA8cGFzc3BvcnQtYXV0aG9yaXplZC1jbGllbnRzPjwvcGFzc3BvcnQtYXV0aG9yaXplZC1jbGllbnRzPlxuICAgICAgICA8cGFzc3BvcnQtcGVyc29uYWwtYWNjZXNzLXRva2Vucz48L3Bhc3Nwb3J0LXBlcnNvbmFsLWFjY2Vzcy10b2tlbnM+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCByZWFkeS4nKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gT0F1dGgudnVlPzYyMTRkNmZiIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRXhhbXBsZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1hY2Y2MGE0OCEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9FeGFtcGxlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2dlcm1hbi9TaXRlcy9zb21lbGluZS1zdGFydGVyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEV4YW1wbGUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWFjZjYwYTQ4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYWNmNjBhNDhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiPHN0eWxlIHNjb3BlZD5cbiAgICAuYWN0aW9uLWxpbmsge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLm0tYi1ub25lIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiB2LWlmPVwidG9rZW5zLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5BdXRob3JpemVkIEFwcGxpY2F0aW9uczwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBBdXRob3JpemVkIFRva2VucyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVybGVzcyBtLWItbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2NvcGVzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJ0b2tlbiBpbiB0b2tlbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBDbGllbnQgTmFtZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRva2VuLmNsaWVudC5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBTY29wZXMgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwidG9rZW4uc2NvcGVzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0b2tlbi5zY29wZXMuam9pbignLCAnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUmV2b2tlIEJ1dHRvbiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYWN0aW9uLWxpbmsgdGV4dC1kYW5nZXJcIiBAY2xpY2s9XCJyZXZva2UodG9rZW4pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmV2b2tlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgLypcbiAgICAgICAgICogVGhlIGNvbXBvbmVudCdzIGRhdGEuXG4gICAgICAgICAqL1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0b2tlbnM6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmVwYXJlIHRoZSBjb21wb25lbnQgKFZ1ZSAxLngpLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZHkoKSB7XG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDb21wb25lbnQoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJlcGFyZSB0aGUgY29tcG9uZW50IChWdWUgMi54KS5cbiAgICAgICAgICovXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDb21wb25lbnQoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFByZXBhcmUgdGhlIGNvbXBvbmVudCAoVnVlIDIueCkuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHByZXBhcmVDb21wb25lbnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUb2tlbnMoKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IGFsbCBvZiB0aGUgYXV0aG9yaXplZCB0b2tlbnMgZm9yIHRoZSB1c2VyLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRUb2tlbnMoKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvb2F1dGgvdG9rZW5zJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2VucyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmV2b2tlIHRoZSBnaXZlbiB0b2tlbi5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV2b2tlKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKCcvb2F1dGgvdG9rZW5zLycgKyB0b2tlbi5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRva2VucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBBdXRob3JpemVkQ2xpZW50cy52dWU/YjJjOGMxZWMiLCI8c3R5bGUgc2NvcGVkPlxuICAgIC5hY3Rpb24tbGluayB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAubS1iLW5vbmUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9BdXRoIENsaWVudHNcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYWN0aW9uLWxpbmtcIiBAY2xpY2s9XCJzaG93Q3JlYXRlQ2xpZW50Rm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIE5ldyBDbGllbnRcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPCEtLSBDdXJyZW50IENsaWVudHMgLS0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtLWItbm9uZVwiIHYtaWY9XCJjbGllbnRzLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICBZb3UgaGF2ZSBub3QgY3JlYXRlZCBhbnkgT0F1dGggY2xpZW50cy5cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJsZXNzIG0tYi1ub25lXCIgdi1pZj1cImNsaWVudHMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNsaWVudCBJRDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TZWNyZXQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJjbGllbnQgaW4gY2xpZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gSUQgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgY2xpZW50LmlkIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTmFtZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjbGllbnQubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFNlY3JldCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29kZT57eyBjbGllbnQuc2VjcmV0IH19PC9jb2RlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEVkaXQgQnV0dG9uIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYWN0aW9uLWxpbmtcIiBAY2xpY2s9XCJlZGl0KGNsaWVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIERlbGV0ZSBCdXR0b24gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhY3Rpb24tbGluayB0ZXh0LWRhbmdlclwiIEBjbGljaz1cImRlc3Ryb3koY2xpZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gQ3JlYXRlIENsaWVudCBNb2RhbCAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBpZD1cIm1vZGFsLWNyZWF0ZS1jbGllbnRcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvbiBcIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIENsaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRm9ybSBFcnJvcnMgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgdi1pZj1cImNyZWF0ZUZvcm0uZXJyb3JzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPldob29wcyE8L3N0cm9uZz4gU29tZXRoaW5nIHdlbnQgd3JvbmchPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cImVycm9yIGluIGNyZWF0ZUZvcm0uZXJyb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlcnJvciB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBDcmVhdGUgQ2xpZW50IEZvcm0gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiIHJvbGU9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBOYW1lIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbnRyb2wtbGFiZWxcIj5OYW1lPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNyZWF0ZS1jbGllbnQtbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBrZXl1cC5lbnRlcj1cInN0b3JlXCIgdi1tb2RlbD1cImNyZWF0ZUZvcm0ubmFtZVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21ldGhpbmcgeW91ciB1c2VycyB3aWxsIHJlY29nbml6ZSBhbmQgdHJ1c3QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBSZWRpcmVjdCBVUkwgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29udHJvbC1sYWJlbFwiPlJlZGlyZWN0IFVSTDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJyZWRpcmVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVudGVyPVwic3RvcmVcIiB2LW1vZGVsPVwiY3JlYXRlRm9ybS5yZWRpcmVjdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGFwcGxpY2F0aW9uJ3MgYXV0aG9yaXphdGlvbiBjYWxsYmFjayBVUkwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIE1vZGFsIEFjdGlvbnMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIEBjbGljaz1cInN0b3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBFZGl0IENsaWVudCBNb2RhbCAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBpZD1cIm1vZGFsLWVkaXQtY2xpZW50XCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b24gXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXQgQ2xpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGb3JtIEVycm9ycyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiB2LWlmPVwiZWRpdEZvcm0uZXJyb3JzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPldob29wcyE8L3N0cm9uZz4gU29tZXRoaW5nIHdlbnQgd3JvbmchPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cImVycm9yIGluIGVkaXRGb3JtLmVycm9yc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZXJyb3IgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRWRpdCBDbGllbnQgRm9ybSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCIgcm9sZT1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE5hbWUgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29udHJvbC1sYWJlbFwiPk5hbWU8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZWRpdC1jbGllbnQtbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBrZXl1cC5lbnRlcj1cInVwZGF0ZVwiIHYtbW9kZWw9XCJlZGl0Rm9ybS5uYW1lXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWV0aGluZyB5b3VyIHVzZXJzIHdpbGwgcmVjb2duaXplIGFuZCB0cnVzdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFJlZGlyZWN0IFVSTCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb250cm9sLWxhYmVsXCI+UmVkaXJlY3QgVVJMPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInJlZGlyZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAa2V5dXAuZW50ZXI9XCJ1cGRhdGVcIiB2LW1vZGVsPVwiZWRpdEZvcm0ucmVkaXJlY3RcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBhcHBsaWNhdGlvbidzIGF1dGhvcml6YXRpb24gY2FsbGJhY2sgVVJMLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBNb2RhbCBBY3Rpb25zIC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJ1cGRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXZlIENoYW5nZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAvKlxuICAgICAgICAgKiBUaGUgY29tcG9uZW50J3MgZGF0YS5cbiAgICAgICAgICovXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNsaWVudHM6IFtdLFxuXG4gICAgICAgICAgICAgICAgY3JlYXRlRm9ybToge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3Q6ICcnXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGVkaXRGb3JtOiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yczogW10sXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmVwYXJlIHRoZSBjb21wb25lbnQgKFZ1ZSAxLngpLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZHkoKSB7XG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDb21wb25lbnQoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJlcGFyZSB0aGUgY29tcG9uZW50IChWdWUgMi54KS5cbiAgICAgICAgICovXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDb21wb25lbnQoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFByZXBhcmUgdGhlIGNvbXBvbmVudC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcHJlcGFyZUNvbXBvbmVudCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldENsaWVudHMoKTtcblxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1jcmVhdGUtY2xpZW50Jykub24oJ3Nob3duLmJzLm1vZGFsJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKCcjY3JlYXRlLWNsaWVudC1uYW1lJykuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1lZGl0LWNsaWVudCcpLm9uKCdzaG93bi5icy5tb2RhbCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VkaXQtY2xpZW50LW5hbWUnKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgYWxsIG9mIHRoZSBPQXV0aCBjbGllbnRzIGZvciB0aGUgdXNlci5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0Q2xpZW50cygpIHtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9vYXV0aC9jbGllbnRzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudHMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNob3cgdGhlIGZvcm0gZm9yIGNyZWF0aW5nIG5ldyBjbGllbnRzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzaG93Q3JlYXRlQ2xpZW50Rm9ybSgpIHtcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY3JlYXRlLWNsaWVudCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZSBhIG5ldyBPQXV0aCBjbGllbnQgZm9yIHRoZSB1c2VyLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzdG9yZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlcnNpc3RDbGllbnQoXG4gICAgICAgICAgICAgICAgICAgICdwb3N0JywgJy9vYXV0aC9jbGllbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtLCAnI21vZGFsLWNyZWF0ZS1jbGllbnQnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWRpdCB0aGUgZ2l2ZW4gY2xpZW50LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBlZGl0KGNsaWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdEZvcm0uaWQgPSBjbGllbnQuaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0Rm9ybS5uYW1lID0gY2xpZW50Lm5hbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0Rm9ybS5yZWRpcmVjdCA9IGNsaWVudC5yZWRpcmVjdDtcblxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1lZGl0LWNsaWVudCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVwZGF0ZSB0aGUgY2xpZW50IGJlaW5nIGVkaXRlZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVyc2lzdENsaWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3B1dCcsICcvb2F1dGgvY2xpZW50cy8nICsgdGhpcy5lZGl0Rm9ybS5pZCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0Rm9ybSwgJyNtb2RhbC1lZGl0LWNsaWVudCdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQZXJzaXN0IHRoZSBjbGllbnQgdG8gc3RvcmFnZSB1c2luZyB0aGUgZ2l2ZW4gZm9ybS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcGVyc2lzdENsaWVudChtZXRob2QsIHVyaSwgZm9ybSwgbW9kYWwpIHtcbiAgICAgICAgICAgICAgICBmb3JtLmVycm9ycyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgYXhpb3NbbWV0aG9kXSh1cmksIGZvcm0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2xpZW50cygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLm5hbWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVkaXJlY3QgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uZXJyb3JzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQobW9kYWwpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3BvbnNlLmRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5lcnJvcnMgPSBfLmZsYXR0ZW4oXy50b0FycmF5KHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5lcnJvcnMgPSBbJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVzdHJveSB0aGUgZ2l2ZW4gY2xpZW50LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkZXN0cm95KGNsaWVudCkge1xuICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSgnL29hdXRoL2NsaWVudHMvJyArIGNsaWVudC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENsaWVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ2xpZW50cy52dWU/MGEzODhlNDAiLCI8c3R5bGUgc2NvcGVkPlxuICAgIC5hY3Rpb24tbGluayB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAubS1iLW5vbmUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVyc29uYWwgQWNjZXNzIFRva2Vuc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImFjdGlvbi1saW5rXCIgQGNsaWNrPVwic2hvd0NyZWF0ZVRva2VuRm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBOZXcgVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIE5vIFRva2VucyBOb3RpY2UgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibS1iLW5vbmVcIiB2LWlmPVwidG9rZW5zLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgWW91IGhhdmUgbm90IGNyZWF0ZWQgYW55IHBlcnNvbmFsIGFjY2VzcyB0b2tlbnMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIFBlcnNvbmFsIEFjY2VzcyBUb2tlbnMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmxlc3MgbS1iLW5vbmVcIiB2LWlmPVwidG9rZW5zLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJ0b2tlbiBpbiB0b2tlbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBDbGllbnQgTmFtZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRva2VuLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIERlbGV0ZSBCdXR0b24gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImFjdGlvbi1saW5rIHRleHQtZGFuZ2VyXCIgQGNsaWNrPVwicmV2b2tlKHRva2VuKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gQ3JlYXRlIFRva2VuIE1vZGFsIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiIGlkPVwibW9kYWwtY3JlYXRlLXRva2VuXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b24gXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBUb2tlblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRm9ybSBFcnJvcnMgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgdi1pZj1cImZvcm0uZXJyb3JzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPldob29wcyE8L3N0cm9uZz4gU29tZXRoaW5nIHdlbnQgd3JvbmchPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cImVycm9yIGluIGZvcm0uZXJyb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlcnJvciB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBDcmVhdGUgVG9rZW4gRm9ybSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCIgcm9sZT1cImZvcm1cIiBAc3VibWl0LnByZXZlbnQ9XCJzdG9yZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTmFtZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXCI+TmFtZTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJjcmVhdGUtdG9rZW4tbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibmFtZVwiIHYtbW9kZWw9XCJmb3JtLm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFNjb3BlcyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIHYtaWY9XCJzY29wZXMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXCI+U2NvcGVzPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJzY29wZSBpbiBzY29wZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidG9nZ2xlU2NvcGUoc2NvcGUuaWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2hlY2tlZD1cInNjb3BlSXNBc3NpZ25lZChzY29wZS5pZClcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHNjb3BlLmlkIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTW9kYWwgQWN0aW9ucyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrPVwic3RvcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIEFjY2VzcyBUb2tlbiBNb2RhbCAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBpZD1cIm1vZGFsLWFjY2Vzcy10b2tlblwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uIFwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJzb25hbCBBY2Nlc3MgVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZXJlIGlzIHlvdXIgbmV3IHBlcnNvbmFsIGFjY2VzcyB0b2tlbi4gVGhpcyBpcyB0aGUgb25seSB0aW1lIGl0IHdpbGwgYmUgc2hvd24gc28gZG9uJ3QgbG9zZSBpdCFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgbWF5IG5vdyB1c2UgdGhpcyB0b2tlbiB0byBtYWtlIEFQSSByZXF1ZXN0cy5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHByZT48Y29kZT57eyBhY2Nlc3NUb2tlbiB9fTwvY29kZT48L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBNb2RhbCBBY3Rpb25zIC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgLypcbiAgICAgICAgICogVGhlIGNvbXBvbmVudCdzIGRhdGEuXG4gICAgICAgICAqL1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogbnVsbCxcblxuICAgICAgICAgICAgICAgIHRva2VuczogW10sXG4gICAgICAgICAgICAgICAgc2NvcGVzOiBbXSxcblxuICAgICAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlczogW10sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yczogW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmVwYXJlIHRoZSBjb21wb25lbnQgKFZ1ZSAxLngpLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZHkoKSB7XG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDb21wb25lbnQoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJlcGFyZSB0aGUgY29tcG9uZW50IChWdWUgMi54KS5cbiAgICAgICAgICovXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDb21wb25lbnQoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFByZXBhcmUgdGhlIGNvbXBvbmVudC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcHJlcGFyZUNvbXBvbmVudCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFRva2VucygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2NvcGVzKCk7XG5cbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY3JlYXRlLXRva2VuJykub24oJ3Nob3duLmJzLm1vZGFsJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKCcjY3JlYXRlLXRva2VuLW5hbWUnKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgYWxsIG9mIHRoZSBwZXJzb25hbCBhY2Nlc3MgdG9rZW5zIGZvciB0aGUgdXNlci5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0VG9rZW5zKCkge1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL29hdXRoL3BlcnNvbmFsLWFjY2Vzcy10b2tlbnMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgYWxsIG9mIHRoZSBhdmFpbGFibGUgc2NvcGVzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRTY29wZXMoKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvb2F1dGgvc2NvcGVzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3BlcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2hvdyB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgbmV3IHRva2Vucy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2hvd0NyZWF0ZVRva2VuRm9ybSgpIHtcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY3JlYXRlLXRva2VuJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ3JlYXRlIGEgbmV3IHBlcnNvbmFsIGFjY2VzcyB0b2tlbi5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc3RvcmUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZXJyb3JzID0gW107XG5cbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCcvb2F1dGgvcGVyc29uYWwtYWNjZXNzLXRva2VucycsIHRoaXMuZm9ybSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ubmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zY29wZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZXJyb3JzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHJlc3BvbnNlLmRhdGEudG9rZW4pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93QWNjZXNzVG9rZW4ocmVzcG9uc2UuZGF0YS5hY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3BvbnNlLmRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5lcnJvcnMgPSBfLmZsYXR0ZW4oXy50b0FycmF5KHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZXJyb3JzID0gWydTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVG9nZ2xlIHRoZSBnaXZlbiBzY29wZSBpbiB0aGUgbGlzdCBvZiBhc3NpZ25lZCBzY29wZXMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRvZ2dsZVNjb3BlKHNjb3BlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2NvcGVJc0Fzc2lnbmVkKHNjb3BlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uc2NvcGVzID0gXy5yZWplY3QodGhpcy5mb3JtLnNjb3BlcywgcyA9PiBzID09IHNjb3BlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uc2NvcGVzLnB1c2goc2NvcGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGV0ZXJtaW5lIGlmIHRoZSBnaXZlbiBzY29wZSBoYXMgYmVlbiBhc3NpZ25lZCB0byB0aGUgdG9rZW4uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNjb3BlSXNBc3NpZ25lZChzY29wZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLmluZGV4T2YodGhpcy5mb3JtLnNjb3Blcywgc2NvcGUpID49IDA7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNob3cgdGhlIGdpdmVuIGFjY2VzcyB0b2tlbiB0byB0aGUgdXNlci5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2hvd0FjY2Vzc1Rva2VuKGFjY2Vzc1Rva2VuKSB7XG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWNyZWF0ZS10b2tlbicpLm1vZGFsKCdoaWRlJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW47XG5cbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtYWNjZXNzLXRva2VuJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmV2b2tlIHRoZSBnaXZlbiB0b2tlbi5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV2b2tlKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKCcvb2F1dGgvcGVyc29uYWwtYWNjZXNzLXRva2Vucy8nICsgdG9rZW4uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUb2tlbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gUGVyc29uYWxBY2Nlc3NUb2tlbnMudnVlPzE3NTkxNjk4IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTQ1YzVlMzU4JnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYXV0b3NpemUtdGV4dGFyZWEudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDVjNWUzNTghLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXV0b3NpemUtdGV4dGFyZWEudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTQ1YzVlMzU4XCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvZ2VybWFuL1NpdGVzL3NvbWVsaW5lLXN0YXJ0ZXIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGF1dG9zaXplLXRleHRhcmVhLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NWM1ZTM1OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ1YzVlMzU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hY3Rpb24tbGlua1tkYXRhLXYtMWU5ZDdmNDldIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubS1iLW5vbmVbZGF0YS12LTFlOWQ3ZjQ5XSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQ2xpZW50cy52dWU/MGEzODhlNDBcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0EsZ0JBQUE7Q0FDQTtBQUVBO0lBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQ2xpZW50cy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHN0eWxlIHNjb3BlZD5cXG4gICAgLmFjdGlvbi1saW5rIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAubS1iLW5vbmUge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuXFxuPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgT0F1dGggQ2xpZW50c1xcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFjdGlvbi1saW5rXFxcIiBAY2xpY2s9XFxcInNob3dDcmVhdGVDbGllbnRGb3JtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgTmV3IENsaWVudFxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXG4gICAgICAgICAgICAgICAgPCEtLSBDdXJyZW50IENsaWVudHMgLS0+XFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJtLWItbm9uZVxcXCIgdi1pZj1cXFwiY2xpZW50cy5sZW5ndGggPT09IDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgWW91IGhhdmUgbm90IGNyZWF0ZWQgYW55IE9BdXRoIGNsaWVudHMuXFxuICAgICAgICAgICAgICAgIDwvcD5cXG5cXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJsZXNzIG0tYi1ub25lXFxcIiB2LWlmPVxcXCJjbGllbnRzLmxlbmd0aCA+IDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNsaWVudCBJRDwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNlY3JldDwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XFxcImNsaWVudCBpbiBjbGllbnRzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBJRCAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjbGllbnQuaWQgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBOYW1lIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNsaWVudC5uYW1lIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gU2VjcmV0IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPnt7IGNsaWVudC5zZWNyZXQgfX08L2NvZGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRWRpdCBCdXR0b24gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFjdGlvbi1saW5rXFxcIiBAY2xpY2s9XFxcImVkaXQoY2xpZW50KVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIERlbGV0ZSBCdXR0b24gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFjdGlvbi1saW5rIHRleHQtZGFuZ2VyXFxcIiBAY2xpY2s9XFxcImRlc3Ryb3koY2xpZW50KVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwhLS0gQ3JlYXRlIENsaWVudCBNb2RhbCAtLT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGlkPVxcXCJtb2RhbC1jcmVhdGUtY2xpZW50XFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uIFxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvYnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgQ2xpZW50XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGb3JtIEVycm9ycyAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiIHYtaWY9XFxcImNyZWF0ZUZvcm0uZXJyb3JzLmxlbmd0aCA+IDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPldob29wcyE8L3N0cm9uZz4gU29tZXRoaW5nIHdlbnQgd3JvbmchPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiZXJyb3IgaW4gY3JlYXRlRm9ybS5lcnJvcnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVycm9yIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQ3JlYXRlIENsaWVudCBGb3JtIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE5hbWUgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMyBjb250cm9sLWxhYmVsXFxcIj5OYW1lPC9sYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC03XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImNyZWF0ZS1jbGllbnQtbmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVudGVyPVxcXCJzdG9yZVxcXCIgdi1tb2RlbD1cXFwiY3JlYXRlRm9ybS5uYW1lXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWV0aGluZyB5b3VyIHVzZXJzIHdpbGwgcmVjb2duaXplIGFuZCB0cnVzdC5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUmVkaXJlY3QgVVJMIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTMgY29udHJvbC1sYWJlbFxcXCI+UmVkaXJlY3QgVVJMPC9sYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC03XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicmVkaXJlY3RcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBrZXl1cC5lbnRlcj1cXFwic3RvcmVcXFwiIHYtbW9kZWw9XFxcImNyZWF0ZUZvcm0ucmVkaXJlY3RcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBhcHBsaWNhdGlvbidzIGF1dGhvcml6YXRpb24gY2FsbGJhY2sgVVJMLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTW9kYWwgQWN0aW9ucyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPkNsb3NlPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIEBjbGljaz1cXFwic3RvcmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGVcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPCEtLSBFZGl0IENsaWVudCBNb2RhbCAtLT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGlkPVxcXCJtb2RhbC1lZGl0LWNsaWVudFxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZ1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvbiBcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L2J1dHRvbj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdCBDbGllbnRcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEZvcm0gRXJyb3JzIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgdi1pZj1cXFwiZWRpdEZvcm0uZXJyb3JzLmxlbmd0aCA+IDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPldob29wcyE8L3N0cm9uZz4gU29tZXRoaW5nIHdlbnQgd3JvbmchPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiZXJyb3IgaW4gZWRpdEZvcm0uZXJyb3JzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlcnJvciB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEVkaXQgQ2xpZW50IEZvcm0gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTmFtZSAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0zIGNvbnRyb2wtbGFiZWxcXFwiPk5hbWU8L2xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiZWRpdC1jbGllbnQtbmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVudGVyPVxcXCJ1cGRhdGVcXFwiIHYtbW9kZWw9XFxcImVkaXRGb3JtLm5hbWVcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZXRoaW5nIHlvdXIgdXNlcnMgd2lsbCByZWNvZ25pemUgYW5kIHRydXN0LlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBSZWRpcmVjdCBVUkwgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMyBjb250cm9sLWxhYmVsXFxcIj5SZWRpcmVjdCBVUkw8L2xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJyZWRpcmVjdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVudGVyPVxcXCJ1cGRhdGVcXFwiIHYtbW9kZWw9XFxcImVkaXRGb3JtLnJlZGlyZWN0XFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgYXBwbGljYXRpb24ncyBhdXRob3JpemF0aW9uIGNhbGxiYWNrIFVSTC5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIE1vZGFsIEFjdGlvbnMgLS0+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DbG9zZTwvYnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBAY2xpY2s9XFxcInVwZGF0ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgLypcXG4gICAgICAgICAqIFRoZSBjb21wb25lbnQncyBkYXRhLlxcbiAgICAgICAgICovXFxuICAgICAgICBkYXRhKCkge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGNsaWVudHM6IFtdLFxcblxcbiAgICAgICAgICAgICAgICBjcmVhdGVGb3JtOiB7XFxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IFtdLFxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXFxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdDogJydcXG4gICAgICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAgICAgZWRpdEZvcm06IHtcXG4gICAgICAgICAgICAgICAgICAgIGVycm9yczogW10sXFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcXG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0OiAnJ1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfTtcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICAvKipcXG4gICAgICAgICAqIFByZXBhcmUgdGhlIGNvbXBvbmVudCAoVnVlIDEueCkuXFxuICAgICAgICAgKi9cXG4gICAgICAgIHJlYWR5KCkge1xcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNvbXBvbmVudCgpO1xcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIC8qKlxcbiAgICAgICAgICogUHJlcGFyZSB0aGUgY29tcG9uZW50IChWdWUgMi54KS5cXG4gICAgICAgICAqL1xcbiAgICAgICAgbW91bnRlZCgpIHtcXG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDb21wb25lbnQoKTtcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogUHJlcGFyZSB0aGUgY29tcG9uZW50LlxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHByZXBhcmVDb21wb25lbnQoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2xpZW50cygpO1xcblxcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY3JlYXRlLWNsaWVudCcpLm9uKCdzaG93bi5icy5tb2RhbCcsICgpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICQoJyNjcmVhdGUtY2xpZW50LW5hbWUnKS5mb2N1cygpO1xcbiAgICAgICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWVkaXQtY2xpZW50Jykub24oJ3Nob3duLmJzLm1vZGFsJywgKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VkaXQtY2xpZW50LW5hbWUnKS5mb2N1cygpO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIEdldCBhbGwgb2YgdGhlIE9BdXRoIGNsaWVudHMgZm9yIHRoZSB1c2VyLlxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGdldENsaWVudHMoKSB7XFxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL29hdXRoL2NsaWVudHMnKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRzID0gcmVzcG9uc2UuZGF0YTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFNob3cgdGhlIGZvcm0gZm9yIGNyZWF0aW5nIG5ldyBjbGllbnRzLlxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHNob3dDcmVhdGVDbGllbnRGb3JtKCkge1xcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY3JlYXRlLWNsaWVudCcpLm1vZGFsKCdzaG93Jyk7XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBDcmVhdGUgYSBuZXcgT0F1dGggY2xpZW50IGZvciB0aGUgdXNlci5cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBzdG9yZSgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJzaXN0Q2xpZW50KFxcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc3QnLCAnL29hdXRoL2NsaWVudHMnLFxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtLCAnI21vZGFsLWNyZWF0ZS1jbGllbnQnXFxuICAgICAgICAgICAgICAgICk7XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBFZGl0IHRoZSBnaXZlbiBjbGllbnQuXFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgZWRpdChjbGllbnQpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0Rm9ybS5pZCA9IGNsaWVudC5pZDtcXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0Rm9ybS5uYW1lID0gY2xpZW50Lm5hbWU7XFxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdEZvcm0ucmVkaXJlY3QgPSBjbGllbnQucmVkaXJlY3Q7XFxuXFxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1lZGl0LWNsaWVudCcpLm1vZGFsKCdzaG93Jyk7XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBVcGRhdGUgdGhlIGNsaWVudCBiZWluZyBlZGl0ZWQuXFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgdXBkYXRlKCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnBlcnNpc3RDbGllbnQoXFxuICAgICAgICAgICAgICAgICAgICAncHV0JywgJy9vYXV0aC9jbGllbnRzLycgKyB0aGlzLmVkaXRGb3JtLmlkLFxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0Rm9ybSwgJyNtb2RhbC1lZGl0LWNsaWVudCdcXG4gICAgICAgICAgICAgICAgKTtcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFBlcnNpc3QgdGhlIGNsaWVudCB0byBzdG9yYWdlIHVzaW5nIHRoZSBnaXZlbiBmb3JtLlxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHBlcnNpc3RDbGllbnQobWV0aG9kLCB1cmksIGZvcm0sIG1vZGFsKSB7XFxuICAgICAgICAgICAgICAgIGZvcm0uZXJyb3JzID0gW107XFxuXFxuICAgICAgICAgICAgICAgIGF4aW9zW21ldGhvZF0odXJpLCBmb3JtKVxcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2xpZW50cygpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ubmFtZSA9ICcnO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVkaXJlY3QgPSAnJztcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmVycm9ycyA9IFtdO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICQobW9kYWwpLm1vZGFsKCdoaWRlJyk7XFxuICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3BvbnNlLmRhdGEgPT09ICdvYmplY3QnKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uZXJyb3JzID0gXy5mbGF0dGVuKF8udG9BcnJheShyZXNwb25zZS5kYXRhKSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5lcnJvcnMgPSBbJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLiddO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRGVzdHJveSB0aGUgZ2l2ZW4gY2xpZW50LlxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGRlc3Ryb3koY2xpZW50KSB7XFxuICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSgnL29hdXRoL2NsaWVudHMvJyArIGNsaWVudC5pZClcXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2xpZW50cygpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMWU5ZDdmNDkmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQ2xpZW50cy52dWVcbi8vIG1vZHVsZSBpZCA9IDE5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hY3Rpb24tbGlua1tkYXRhLXYtNGE2MjhiZTZdIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubS1iLW5vbmVbZGF0YS12LTRhNjI4YmU2XSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvUGVyc29uYWxBY2Nlc3NUb2tlbnMudnVlPzE3NTkxNjk4XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNBLGdCQUFBO0NBQ0E7QUFFQTtJQUNBLGlCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlBlcnNvbmFsQWNjZXNzVG9rZW5zLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8c3R5bGUgc2NvcGVkPlxcbiAgICAuYWN0aW9uLWxpbmsge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC5tLWItbm9uZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuPC9zdHlsZT5cXG5cXG48dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJzb25hbCBBY2Nlc3MgVG9rZW5zXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJhY3Rpb24tbGlua1xcXCIgQGNsaWNrPVxcXCJzaG93Q3JlYXRlVG9rZW5Gb3JtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIE5ldyBUb2tlblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIE5vIFRva2VucyBOb3RpY2UgLS0+XFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwibS1iLW5vbmVcXFwiIHYtaWY9XFxcInRva2Vucy5sZW5ndGggPT09IDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBoYXZlIG5vdCBjcmVhdGVkIGFueSBwZXJzb25hbCBhY2Nlc3MgdG9rZW5zLlxcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBQZXJzb25hbCBBY2Nlc3MgVG9rZW5zIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJsZXNzIG0tYi1ub25lXFxcIiB2LWlmPVxcXCJ0b2tlbnMubGVuZ3RoID4gMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVxcXCJ0b2tlbiBpbiB0b2tlbnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBDbGllbnQgTmFtZSAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRva2VuLm5hbWUgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIERlbGV0ZSBCdXR0b24gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYWN0aW9uLWxpbmsgdGV4dC1kYW5nZXJcXFwiIEBjbGljaz1cXFwicmV2b2tlKHRva2VuKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8IS0tIENyZWF0ZSBUb2tlbiBNb2RhbCAtLT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGlkPVxcXCJtb2RhbC1jcmVhdGUtdG9rZW5cXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b24gXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9idXR0b24+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBUb2tlblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRm9ybSBFcnJvcnMgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiB2LWlmPVxcXCJmb3JtLmVycm9ycy5sZW5ndGggPiAwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5XaG9vcHMhPC9zdHJvbmc+IFNvbWV0aGluZyB3ZW50IHdyb25nITwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XFxcImVycm9yIGluIGZvcm0uZXJyb3JzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlcnJvciB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIENyZWF0ZSBUb2tlbiBGb3JtIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIEBzdWJtaXQucHJldmVudD1cXFwic3RvcmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE5hbWUgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXFxcIj5OYW1lPC9sYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImNyZWF0ZS10b2tlbi1uYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJuYW1lXFxcIiB2LW1vZGVsPVxcXCJmb3JtLm5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFNjb3BlcyAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgdi1pZj1cXFwic2NvcGVzLmxlbmd0aCA+IDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXFxcIj5TY29wZXM8L2xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XFxcInNjb3BlIGluIHNjb3Blc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwidG9nZ2xlU2NvcGUoc2NvcGUuaWQpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2hlY2tlZD1cXFwic2NvcGVJc0Fzc2lnbmVkKHNjb3BlLmlkKVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHNjb3BlLmlkIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTW9kYWwgQWN0aW9ucyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPkNsb3NlPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIEBjbGljaz1cXFwic3RvcmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGVcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPCEtLSBBY2Nlc3MgVG9rZW4gTW9kYWwgLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBpZD1cXFwibW9kYWwtYWNjZXNzLXRva2VuXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uIFxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvYnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJzb25hbCBBY2Nlc3MgVG9rZW5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVyZSBpcyB5b3VyIG5ldyBwZXJzb25hbCBhY2Nlc3MgdG9rZW4uIFRoaXMgaXMgdGhlIG9ubHkgdGltZSBpdCB3aWxsIGJlIHNob3duIHNvIGRvbid0IGxvc2UgaXQhXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBtYXkgbm93IHVzZSB0aGlzIHRva2VuIHRvIG1ha2UgQVBJIHJlcXVlc3RzLlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cHJlPjxjb2RlPnt7IGFjY2Vzc1Rva2VuIH19PC9jb2RlPjwvcHJlPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIE1vZGFsIEFjdGlvbnMgLS0+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DbG9zZTwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgLypcXG4gICAgICAgICAqIFRoZSBjb21wb25lbnQncyBkYXRhLlxcbiAgICAgICAgICovXFxuICAgICAgICBkYXRhKCkge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBudWxsLFxcblxcbiAgICAgICAgICAgICAgICB0b2tlbnM6IFtdLFxcbiAgICAgICAgICAgICAgICBzY29wZXM6IFtdLFxcblxcbiAgICAgICAgICAgICAgICBmb3JtOiB7XFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlczogW10sXFxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IFtdXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9O1xcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIC8qKlxcbiAgICAgICAgICogUHJlcGFyZSB0aGUgY29tcG9uZW50IChWdWUgMS54KS5cXG4gICAgICAgICAqL1xcbiAgICAgICAgcmVhZHkoKSB7XFxuICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ29tcG9uZW50KCk7XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgLyoqXFxuICAgICAgICAgKiBQcmVwYXJlIHRoZSBjb21wb25lbnQgKFZ1ZSAyLngpLlxcbiAgICAgICAgICovXFxuICAgICAgICBtb3VudGVkKCkge1xcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNvbXBvbmVudCgpO1xcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIG1ldGhvZHM6IHtcXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBQcmVwYXJlIHRoZSBjb21wb25lbnQuXFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgcHJlcGFyZUNvbXBvbmVudCgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUb2tlbnMoKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTY29wZXMoKTtcXG5cXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWNyZWF0ZS10b2tlbicpLm9uKCdzaG93bi5icy5tb2RhbCcsICgpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICQoJyNjcmVhdGUtdG9rZW4tbmFtZScpLmZvY3VzKCk7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogR2V0IGFsbCBvZiB0aGUgcGVyc29uYWwgYWNjZXNzIHRva2VucyBmb3IgdGhlIHVzZXIuXFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgZ2V0VG9rZW5zKCkge1xcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9vYXV0aC9wZXJzb25hbC1hY2Nlc3MtdG9rZW5zJylcXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zID0gcmVzcG9uc2UuZGF0YTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIEdldCBhbGwgb2YgdGhlIGF2YWlsYWJsZSBzY29wZXMuXFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgZ2V0U2NvcGVzKCkge1xcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9vYXV0aC9zY29wZXMnKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29wZXMgPSByZXNwb25zZS5kYXRhO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogU2hvdyB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgbmV3IHRva2Vucy5cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBzaG93Q3JlYXRlVG9rZW5Gb3JtKCkge1xcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY3JlYXRlLXRva2VuJykubW9kYWwoJ3Nob3cnKTtcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIENyZWF0ZSBhIG5ldyBwZXJzb25hbCBhY2Nlc3MgdG9rZW4uXFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgc3RvcmUoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBudWxsO1xcblxcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZXJyb3JzID0gW107XFxuXFxuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9vYXV0aC9wZXJzb25hbC1hY2Nlc3MtdG9rZW5zJywgdGhpcy5mb3JtKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLm5hbWUgPSAnJztcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnNjb3BlcyA9IFtdO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZXJyb3JzID0gW107XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2gocmVzcG9uc2UuZGF0YS50b2tlbik7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0FjY2Vzc1Rva2VuKHJlc3BvbnNlLmRhdGEuYWNjZXNzVG9rZW4pO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNwb25zZS5kYXRhID09PSAnb2JqZWN0Jykge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmVycm9ycyA9IF8uZmxhdHRlbihfLnRvQXJyYXkocmVzcG9uc2UuZGF0YSkpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmVycm9ycyA9IFsnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJ107XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFRvZ2dsZSB0aGUgZ2l2ZW4gc2NvcGUgaW4gdGhlIGxpc3Qgb2YgYXNzaWduZWQgc2NvcGVzLlxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHRvZ2dsZVNjb3BlKHNjb3BlKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjb3BlSXNBc3NpZ25lZChzY29wZSkpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zY29wZXMgPSBfLnJlamVjdCh0aGlzLmZvcm0uc2NvcGVzLCBzID0+IHMgPT0gc2NvcGUpO1xcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnNjb3Blcy5wdXNoKHNjb3BlKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRGV0ZXJtaW5lIGlmIHRoZSBnaXZlbiBzY29wZSBoYXMgYmVlbiBhc3NpZ25lZCB0byB0aGUgdG9rZW4uXFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgc2NvcGVJc0Fzc2lnbmVkKHNjb3BlKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiBfLmluZGV4T2YodGhpcy5mb3JtLnNjb3Blcywgc2NvcGUpID49IDA7XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBTaG93IHRoZSBnaXZlbiBhY2Nlc3MgdG9rZW4gdG8gdGhlIHVzZXIuXFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgc2hvd0FjY2Vzc1Rva2VuKGFjY2Vzc1Rva2VuKSB7XFxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1jcmVhdGUtdG9rZW4nKS5tb2RhbCgnaGlkZScpO1xcblxcbiAgICAgICAgICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW47XFxuXFxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1hY2Nlc3MtdG9rZW4nKS5tb2RhbCgnc2hvdycpO1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogUmV2b2tlIHRoZSBnaXZlbiB0b2tlbi5cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICByZXZva2UodG9rZW4pIHtcXG4gICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKCcvb2F1dGgvcGVyc29uYWwtYWNjZXNzLXRva2Vucy8nICsgdG9rZW4uaWQpXFxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRva2VucygpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNGE2MjhiZTYmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvUGVyc29uYWxBY2Nlc3NUb2tlbnMudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYWN0aW9uLWxpbmtbZGF0YS12LTlhMzg5OTI0XSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm0tYi1ub25lW2RhdGEtdi05YTM4OTkyNF0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L0F1dGhvcml6ZWRDbGllbnRzLnZ1ZT9iMmM4YzFlY1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDQSxnQkFBQTtDQUNBO0FBRUE7SUFDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJBdXRob3JpemVkQ2xpZW50cy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHN0eWxlIHNjb3BlZD5cXG4gICAgLmFjdGlvbi1saW5rIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAubS1iLW5vbmUge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuXFxuPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGRpdiB2LWlmPVxcXCJ0b2tlbnMubGVuZ3RoID4gMFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPkF1dGhvcml6ZWQgQXBwbGljYXRpb25zPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBBdXRob3JpemVkIFRva2VucyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtYm9yZGVybGVzcyBtLWItbm9uZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2NvcGVzPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XFxcInRva2VuIGluIHRva2Vuc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIENsaWVudCBOYW1lIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdG9rZW4uY2xpZW50Lm5hbWUgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFNjb3BlcyAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XFxcInRva2VuLnNjb3Blcy5sZW5ndGggPiAwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdG9rZW4uc2NvcGVzLmpvaW4oJywgJykgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBSZXZva2UgQnV0dG9uIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFjdGlvbi1saW5rIHRleHQtZGFuZ2VyXFxcIiBAY2xpY2s9XFxcInJldm9rZSh0b2tlbilcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXZva2VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgICAgIC8qXFxuICAgICAgICAgKiBUaGUgY29tcG9uZW50J3MgZGF0YS5cXG4gICAgICAgICAqL1xcbiAgICAgICAgZGF0YSgpIHtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICB0b2tlbnM6IFtdXFxuICAgICAgICAgICAgfTtcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICAvKipcXG4gICAgICAgICAqIFByZXBhcmUgdGhlIGNvbXBvbmVudCAoVnVlIDEueCkuXFxuICAgICAgICAgKi9cXG4gICAgICAgIHJlYWR5KCkge1xcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNvbXBvbmVudCgpO1xcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIC8qKlxcbiAgICAgICAgICogUHJlcGFyZSB0aGUgY29tcG9uZW50IChWdWUgMi54KS5cXG4gICAgICAgICAqL1xcbiAgICAgICAgbW91bnRlZCgpIHtcXG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDb21wb25lbnQoKTtcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogUHJlcGFyZSB0aGUgY29tcG9uZW50IChWdWUgMi54KS5cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBwcmVwYXJlQ29tcG9uZW50KCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmdldFRva2VucygpO1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogR2V0IGFsbCBvZiB0aGUgYXV0aG9yaXplZCB0b2tlbnMgZm9yIHRoZSB1c2VyLlxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGdldFRva2VucygpIHtcXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvb2F1dGgvdG9rZW5zJylcXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zID0gcmVzcG9uc2UuZGF0YTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFJldm9rZSB0aGUgZ2l2ZW4gdG9rZW4uXFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgcmV2b2tlKHRva2VuKSB7XFxuICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSgnL29hdXRoL3Rva2Vucy8nICsgdG9rZW4uaWQpXFxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRva2VucygpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOWEzODk5MjQmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQXV0aG9yaXplZENsaWVudHMudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0ZXh0YXJlYScpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQ1YzVlMzU4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00NWM1ZTM1OCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL09BdXRoLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWQ5YzU4OTFlIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL09BdXRoLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2dlcm1hbi9TaXRlcy9zb21lbGluZS1zdGFydGVyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb25zb2xlL09BdXRoLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIE9BdXRoLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1kOWM1ODkxZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWQ5YzU4OTFlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb25zb2xlL09BdXRoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfdm0uX20oMClcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1oZWFkaW5nXCJcbiAgfSwgW192bS5fdihcIkV4YW1wbGUgQ29tcG9uZW50XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtYm9keVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIEknbSBhbiBleGFtcGxlIGNvbXBvbmVudCFcXG4gICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWFjZjYwYTQ4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1hY2Y2MGE0OCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTlhMzg5OTI0JnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BdXRob3JpemVkQ2xpZW50cy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQXV0aG9yaXplZENsaWVudHMudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtOWEzODk5MjQhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQXV0aG9yaXplZENsaWVudHMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTlhMzg5OTI0XCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvZ2VybWFuL1NpdGVzL3NvbWVsaW5lLXN0YXJ0ZXIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L0F1dGhvcml6ZWRDbGllbnRzLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEF1dGhvcml6ZWRDbGllbnRzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi05YTM4OTkyNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTlhMzg5OTI0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXNzcG9ydC9BdXRob3JpemVkQ2xpZW50cy52dWVcbi8vIG1vZHVsZSBpZCA9IDIxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMWU5ZDdmNDkmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudHMudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NsaWVudHMudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMWU5ZDdmNDkhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50cy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtMWU5ZDdmNDlcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9nZXJtYW4vU2l0ZXMvc29tZWxpbmUtc3RhcnRlci9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQ2xpZW50cy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBDbGllbnRzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xZTlkN2Y0OVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTFlOWQ3ZjQ5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXNzcG9ydC9DbGllbnRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjExXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi00YTYyOGJlNiZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vUGVyc29uYWxBY2Nlc3NUb2tlbnMudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1BlcnNvbmFsQWNjZXNzVG9rZW5zLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTRhNjI4YmU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1BlcnNvbmFsQWNjZXNzVG9rZW5zLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi00YTYyOGJlNlwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2dlcm1hbi9TaXRlcy9zb21lbGluZS1zdGFydGVyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXNzcG9ydC9QZXJzb25hbEFjY2Vzc1Rva2Vucy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBQZXJzb25hbEFjY2Vzc1Rva2Vucy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNGE2MjhiZTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00YTYyOGJlNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvUGVyc29uYWxBY2Nlc3NUb2tlbnMudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgICBcImp1c3RpZnktY29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgIFwiYWxpZ24taXRlbXNcIjogXCJjZW50ZXJcIlxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgT0F1dGggQ2xpZW50c1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWxpbmtcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uc2hvd0NyZWF0ZUNsaWVudEZvcm1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZSBOZXcgQ2xpZW50XFxuICAgICAgICAgICAgICAgIFwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1ib2R5XCJcbiAgfSwgWyhfdm0uY2xpZW50cy5sZW5ndGggPT09IDApID8gX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibS1iLW5vbmVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFlvdSBoYXZlIG5vdCBjcmVhdGVkIGFueSBPQXV0aCBjbGllbnRzLlxcbiAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uY2xpZW50cy5sZW5ndGggPiAwKSA/IF9jKCd0YWJsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ib3JkZXJsZXNzIG0tYi1ub25lXCJcbiAgfSwgW192bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Rib2R5JywgX3ZtLl9sKChfdm0uY2xpZW50cyksIGZ1bmN0aW9uKGNsaWVudCkge1xuICAgIHJldHVybiBfYygndHInLCBbX2MoJ3RkJywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJ2ZXJ0aWNhbC1hbGlnblwiOiBcIm1pZGRsZVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhjbGllbnQuaWQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RkJywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJ2ZXJ0aWNhbC1hbGlnblwiOiBcIm1pZGRsZVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhjbGllbnQubmFtZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGQnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcInZlcnRpY2FsLWFsaWduXCI6IFwibWlkZGxlXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2NvZGUnLCBbX3ZtLl92KF92bS5fcyhjbGllbnQuc2VjcmV0KSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGQnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcInZlcnRpY2FsLWFsaWduXCI6IFwibWlkZGxlXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tbGlua1wiLFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZWRpdChjbGllbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZCcsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwidmVydGljYWwtYWxpZ25cIjogXCJtaWRkbGVcIlxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1saW5rIHRleHQtZGFuZ2VyXCIsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5kZXN0cm95KGNsaWVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSlcbiAgfSkpXSkgOiBfdm0uX2UoKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwgZmFkZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibW9kYWwtY3JlYXRlLWNsaWVudFwiLFxuICAgICAgXCJ0YWJpbmRleFwiOiBcIi0xXCIsXG4gICAgICBcInJvbGVcIjogXCJkaWFsb2dcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtZGlhbG9nXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudFwiXG4gIH0sIFtfdm0uX20oMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtYm9keVwiXG4gIH0sIFsoX3ZtLmNyZWF0ZUZvcm0uZXJyb3JzLmxlbmd0aCA+IDApID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1kYW5nZXJcIlxuICB9LCBbX3ZtLl9tKDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywgX3ZtLl9sKChfdm0uY3JlYXRlRm9ybS5lcnJvcnMpLCBmdW5jdGlvbihlcnJvcikge1xuICAgIHJldHVybiBfYygnbGknLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhlcnJvcikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKVxuICB9KSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZm9ybScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWhvcml6b250YWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJyb2xlXCI6IFwiZm9ybVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb250cm9sLWxhYmVsXCJcbiAgfSwgW192bS5fdihcIk5hbWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY3JlYXRlRm9ybS5uYW1lKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY3JlYXRlRm9ybS5uYW1lXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImNyZWF0ZS1jbGllbnQtbmFtZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmNyZWF0ZUZvcm0ubmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImtleXVwXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzKSkgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnN0b3JlKCRldmVudClcbiAgICAgIH0sXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5jcmVhdGVGb3JtLm5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9ja1wiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21ldGhpbmcgeW91ciB1c2VycyB3aWxsIHJlY29nbml6ZSBhbmQgdHJ1c3QuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29udHJvbC1sYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJSZWRpcmVjdCBVUkxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY3JlYXRlRm9ybS5yZWRpcmVjdCksXG4gICAgICBleHByZXNzaW9uOiBcImNyZWF0ZUZvcm0ucmVkaXJlY3RcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcIm5hbWVcIjogXCJyZWRpcmVjdFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmNyZWF0ZUZvcm0ucmVkaXJlY3QpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJrZXl1cFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMykpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5zdG9yZSgkZXZlbnQpXG4gICAgICB9LFxuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY3JlYXRlRm9ybS5yZWRpcmVjdCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgYXBwbGljYXRpb24ncyBhdXRob3JpemF0aW9uIGNhbGxiYWNrIFVSTC5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9vdGVyXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ2xvc2VcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5zdG9yZVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbCBmYWRlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJtb2RhbC1lZGl0LWNsaWVudFwiLFxuICAgICAgXCJ0YWJpbmRleFwiOiBcIi0xXCIsXG4gICAgICBcInJvbGVcIjogXCJkaWFsb2dcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtZGlhbG9nXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudFwiXG4gIH0sIFtfdm0uX20oMyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtYm9keVwiXG4gIH0sIFsoX3ZtLmVkaXRGb3JtLmVycm9ycy5sZW5ndGggPiAwKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcbiAgfSwgW192bS5fbSg0KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIF92bS5fbCgoX3ZtLmVkaXRGb3JtLmVycm9ycyksIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGVycm9yKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXG4gIH0pKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdmb3JtJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0taG9yaXpvbnRhbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInJvbGVcIjogXCJmb3JtXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zIGNvbnRyb2wtbGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiTmFtZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5lZGl0Rm9ybS5uYW1lKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZWRpdEZvcm0ubmFtZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJlZGl0LWNsaWVudC1uYW1lXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZWRpdEZvcm0ubmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImtleXVwXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzKSkgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnVwZGF0ZSgkZXZlbnQpXG4gICAgICB9LFxuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZWRpdEZvcm0ubmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWV0aGluZyB5b3VyIHVzZXJzIHdpbGwgcmVjb2duaXplIGFuZCB0cnVzdC5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb250cm9sLWxhYmVsXCJcbiAgfSwgW192bS5fdihcIlJlZGlyZWN0IFVSTFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5lZGl0Rm9ybS5yZWRpcmVjdCksXG4gICAgICBleHByZXNzaW9uOiBcImVkaXRGb3JtLnJlZGlyZWN0XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwicmVkaXJlY3RcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5lZGl0Rm9ybS5yZWRpcmVjdClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImtleXVwXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzKSkgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnVwZGF0ZSgkZXZlbnQpXG4gICAgICB9LFxuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZWRpdEZvcm0ucmVkaXJlY3QgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9ja1wiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGFwcGxpY2F0aW9uJ3MgYXV0aG9yaXphdGlvbiBjYWxsYmFjayBVUkwuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvb3RlclwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkNsb3NlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udXBkYXRlXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndGhlYWQnLCBbX2MoJ3RyJywgW19jKCd0aCcsIFtfdm0uX3YoXCJDbGllbnQgSURcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RoJywgW192bS5fdihcIk5hbWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RoJywgW192bS5fdihcIlNlY3JldFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGgnKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RoJyldKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b24gXCIsXG4gICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiw5dcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBDbGllbnRcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygncCcsIFtfYygnc3Ryb25nJywgW192bS5fdihcIldob29wcyFcIildKSwgX3ZtLl92KFwiIFNvbWV0aGluZyB3ZW50IHdyb25nIVwiKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b24gXCIsXG4gICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiw5dcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEVkaXQgQ2xpZW50XFxuICAgICAgICAgICAgICAgICAgICBcIildKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3AnLCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJXaG9vcHMhXCIpXSksIF92bS5fdihcIiBTb21ldGhpbmcgd2VudCB3cm9uZyFcIildKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTFlOWQ3ZjQ5XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xZTlkN2Y0OSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bhc3Nwb3J0L0NsaWVudHMudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1oZWFkaW5nXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICAgIFwianVzdGlmeS1jb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiXG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgUGVyc29uYWwgQWNjZXNzIFRva2Vuc1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1saW5rXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnNob3dDcmVhdGVUb2tlbkZvcm1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgTmV3IFRva2VuXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtYm9keVwiXG4gIH0sIFsoX3ZtLnRva2Vucy5sZW5ndGggPT09IDApID8gX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibS1iLW5vbmVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBZb3UgaGF2ZSBub3QgY3JlYXRlZCBhbnkgcGVyc29uYWwgYWNjZXNzIHRva2Vucy5cXG4gICAgICAgICAgICAgICAgXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS50b2tlbnMubGVuZ3RoID4gMCkgPyBfYygndGFibGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtYm9yZGVybGVzcyBtLWItbm9uZVwiXG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCd0Ym9keScsIF92bS5fbCgoX3ZtLnRva2VucyksIGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgcmV0dXJuIF9jKCd0cicsIFtfYygndGQnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcInZlcnRpY2FsLWFsaWduXCI6IFwibWlkZGxlXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyh0b2tlbi5uYW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGQnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcInZlcnRpY2FsLWFsaWduXCI6IFwibWlkZGxlXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tbGluayB0ZXh0LWRhbmdlclwiLFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0ucmV2b2tlKHRva2VuKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXG4gIH0pKV0pIDogX3ZtLl9lKCldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwgZmFkZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibW9kYWwtY3JlYXRlLXRva2VuXCIsXG4gICAgICBcInRhYmluZGV4XCI6IFwiLTFcIixcbiAgICAgIFwicm9sZVwiOiBcImRpYWxvZ1wiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1kaWFsb2dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCJcbiAgfSwgW192bS5fbSgxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5XCJcbiAgfSwgWyhfdm0uZm9ybS5lcnJvcnMubGVuZ3RoID4gMCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXG4gIH0sIFtfdm0uX20oMiksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygndWwnLCBfdm0uX2woKF92bS5mb3JtLmVycm9ycyksIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGVycm9yKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXG4gIH0pKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdmb3JtJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0taG9yaXpvbnRhbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInJvbGVcIjogXCJmb3JtXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5zdG9yZSgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXCJcbiAgfSwgW192bS5fdihcIk5hbWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZm9ybS5uYW1lKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImNyZWF0ZS10b2tlbi1uYW1lXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcIm5hbWVcIjogXCJuYW1lXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZm9ybS5uYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmZvcm0ubmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5zY29wZXMubGVuZ3RoID4gMCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC00IGNvbnRyb2wtbGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiU2NvcGVzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICB9LCBfdm0uX2woKF92bS5zY29wZXMpLCBmdW5jdGlvbihzY29wZSkge1xuICAgIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjaGVja2JveFwiXG4gICAgfSwgW19jKCdsYWJlbCcsIFtfYygnaW5wdXQnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiXG4gICAgICB9LFxuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJjaGVja2VkXCI6IF92bS5zY29wZUlzQXNzaWduZWQoc2NvcGUuaWQpXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0udG9nZ2xlU2NvcGUoc2NvcGUuaWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSwgX3ZtLl92KFwiXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3Moc2NvcGUuaWQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXG4gIH0pKV0pIDogX3ZtLl9lKCldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvb3RlclwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkNsb3NlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uc3RvcmVcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGVcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwgZmFkZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibW9kYWwtYWNjZXNzLXRva2VuXCIsXG4gICAgICBcInRhYmluZGV4XCI6IFwiLTFcIixcbiAgICAgIFwicm9sZVwiOiBcImRpYWxvZ1wiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1kaWFsb2dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCJcbiAgfSwgW192bS5fbSgzKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5XCJcbiAgfSwgW19jKCdwJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEhlcmUgaXMgeW91ciBuZXcgcGVyc29uYWwgYWNjZXNzIHRva2VuLiBUaGlzIGlzIHRoZSBvbmx5IHRpbWUgaXQgd2lsbCBiZSBzaG93biBzbyBkb24ndCBsb3NlIGl0IVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBtYXkgbm93IHVzZSB0aGlzIHRva2VuIHRvIG1ha2UgQVBJIHJlcXVlc3RzLlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwcmUnLCBbX2MoJ2NvZGUnLCBbX3ZtLl92KF92bS5fcyhfdm0uYWNjZXNzVG9rZW4pKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDQpXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndGhlYWQnLCBbX2MoJ3RyJywgW19jKCd0aCcsIFtfdm0uX3YoXCJOYW1lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0aCcpXSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uIFwiLFxuICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIsOXXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgVG9rZW5cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygncCcsIFtfYygnc3Ryb25nJywgW192bS5fdihcIldob29wcyFcIildKSwgX3ZtLl92KFwiIFNvbWV0aGluZyB3ZW50IHdyb25nIVwiKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b24gXCIsXG4gICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiw5dcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBlcnNvbmFsIEFjY2VzcyBUb2tlblxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9vdGVyXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ2xvc2VcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNGE2MjhiZTZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTRhNjI4YmU2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvUGVyc29uYWxBY2Nlc3NUb2tlbnMudnVlXG4vLyBtb2R1bGUgaWQgPSAyMThcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NWM1ZTM1OCZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXV0b3NpemUtdGV4dGFyZWEudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjMxMmNhNTllXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NWM1ZTM1OCZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXV0b3NpemUtdGV4dGFyZWEudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NWM1ZTM1OCZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXV0b3NpemUtdGV4dGFyZWEudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NWM1ZTM1OCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFsoX3ZtLnRva2Vucy5sZW5ndGggPiAwKSA/IF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiXG4gIH0sIFtfdm0uX3YoXCJBdXRob3JpemVkIEFwcGxpY2F0aW9uc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWJvZHlcIlxuICB9LCBbX2MoJ3RhYmxlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWJvcmRlcmxlc3MgbS1iLW5vbmVcIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygndGJvZHknLCBfdm0uX2woKF92bS50b2tlbnMpLCBmdW5jdGlvbih0b2tlbikge1xuICAgIHJldHVybiBfYygndHInLCBbX2MoJ3RkJywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJ2ZXJ0aWNhbC1hbGlnblwiOiBcIm1pZGRsZVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3ModG9rZW4uY2xpZW50Lm5hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZCcsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwidmVydGljYWwtYWxpZ25cIjogXCJtaWRkbGVcIlxuICAgICAgfVxuICAgIH0sIFsodG9rZW4uc2NvcGVzLmxlbmd0aCA+IDApID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3ModG9rZW4uc2NvcGVzLmpvaW4oJywgJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RkJywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJ2ZXJ0aWNhbC1hbGlnblwiOiBcIm1pZGRsZVwiXG4gICAgICB9XG4gICAgfSwgW19jKCdhJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWxpbmsgdGV4dC1kYW5nZXJcIixcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnJldm9rZSh0b2tlbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXZva2VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKVxuICB9KSldKV0pXSldKSA6IF92bS5fZSgpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndGhlYWQnLCBbX2MoJ3RyJywgW19jKCd0aCcsIFtfdm0uX3YoXCJOYW1lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0aCcsIFtfdm0uX3YoXCJTY29wZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RoJyldKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtOWEzODk5MjRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTlhMzg5OTI0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvQXV0aG9yaXplZENsaWVudHMudnVlXG4vLyBtb2R1bGUgaWQgPSAyMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ3Bhc3Nwb3J0LWNsaWVudHMnKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Bhc3Nwb3J0LWF1dGhvcml6ZWQtY2xpZW50cycpLCBfdm0uX3YoXCIgXCIpLCBfYygncGFzc3BvcnQtcGVyc29uYWwtYWNjZXNzLXRva2VucycpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZDljNTg5MWVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWQ5YzU4OTFlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29uc29sZS9PQXV0aC52dWVcbi8vIG1vZHVsZSBpZCA9IDIyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xZTlkN2Y0OSZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50cy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNTFlODAyMTVcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTFlOWQ3ZjQ5JnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMWU5ZDdmNDkmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudHMudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xZTlkN2Y0OSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXNzcG9ydC9DbGllbnRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNGE2MjhiZTYmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1BlcnNvbmFsQWNjZXNzVG9rZW5zLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0MGE3M2MzMFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNGE2MjhiZTYmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1BlcnNvbmFsQWNjZXNzVG9rZW5zLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNGE2MjhiZTYmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1BlcnNvbmFsQWNjZXNzVG9rZW5zLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNGE2MjhiZTYmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFzc3BvcnQvUGVyc29uYWxBY2Nlc3NUb2tlbnMudnVlXG4vLyBtb2R1bGUgaWQgPSAyMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi05YTM4OTkyNCZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXV0aG9yaXplZENsaWVudHMudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjVlMjgwN2E4XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi05YTM4OTkyNCZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXV0aG9yaXplZENsaWVudHMudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi05YTM4OTkyNCZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXV0aG9yaXplZENsaWVudHMudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi05YTM4OTkyNCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXNzcG9ydC9BdXRob3JpemVkQ2xpZW50cy52dWVcbi8vIG1vZHVsZSBpZCA9IDIzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbnZhciBsaXN0VG9TdHlsZXMgPSByZXF1aXJlKCcuL2xpc3RUb1N0eWxlcycpXG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbikge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0geyBjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcCB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBwYXJ0LmlkID0gcGFyZW50SWQgKyAnOjAnXG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcGFydC5pZCA9IHBhcmVudElkICsgJzonICsgbmV3U3R5bGVzW2lkXS5wYXJ0cy5sZW5ndGhcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtdnVlLXNzci1pZH49XCInICsgb2JqLmlkICsgJ1wiXScpXG4gIHZhciBoYXNTU1IgPSBzdHlsZUVsZW1lbnQgIT0gbnVsbFxuXG4gIC8vIGlmIGluIHByb2R1Y3Rpb24gbW9kZSBhbmQgc3R5bGUgaXMgYWxyZWFkeSBwcm92aWRlZCBieSBTU1IsXG4gIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICBpZiAoaGFzU1NSICYmIGlzUHJvZHVjdGlvbikge1xuICAgIHJldHVybiBub29wXG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IHN0eWxlRWxlbWVudCB8fCBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmICghaGFzU1NSKSB7XG4gICAgdXBkYXRlKG9iailcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+RXhhbXBsZSBDb21wb25lbnQ8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSSdtIGFuIGV4YW1wbGUgY29tcG9uZW50IVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCBtb3VudGVkLicpXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBFeGFtcGxlLnZ1ZT8xNTVhYzI5ZSIsIjx0ZW1wbGF0ZT5cblxuICAgIDx0ZXh0YXJlYT48L3RleHRhcmVhPlxuXG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgYXV0b3NpemUgZnJvbSAnYXV0b3NpemUnXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiBbJ3Jlc2l6ZWQnXSxcbiAgICAgICAgbW91bnRlZCAoKSB7XG4gICAgICAgICAgICBhdXRvc2l6ZSh0aGlzLiRlbClcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2l6ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnRbdGhpcy5yZXNpemVkXSh0aGlzLiRlbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhdXRvc2l6ZS10ZXh0YXJlYS52dWU/YTc0ZWQ5M2MiLCJ3aW5kb3cuXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xud2luZG93Lm1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgalF1ZXJ5IGFuZCB0aGUgQm9vdHN0cmFwIGpRdWVyeSBwbHVnaW4gd2hpY2ggcHJvdmlkZXMgc3VwcG9ydFxuICogZm9yIEphdmFTY3JpcHQgYmFzZWQgQm9vdHN0cmFwIGZlYXR1cmVzIHN1Y2ggYXMgbW9kYWxzIGFuZCB0YWJzLiBUaGlzXG4gKiBjb2RlIG1heSBiZSBtb2RpZmllZCB0byBmaXQgdGhlIHNwZWNpZmljIG5lZWRzIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gKi9cblxuLyoqXG4gKiBAV0FSTklORzogVGhlc2UgdHdvIGxpYnJhcmllcyBhcmUgaW5jbHVkZWQgaW4gdGhlbWUuanMsIHNvIG5vIG5lZWQgdG8gaW5jbHVkZSBhZ2Fpbi5cbiAqL1xuLy8gd2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG4vLyByZXF1aXJlKCdib290c3RyYXAtc2FzcycpO1xuXG4vKipcbiAqIFZ1ZSBpcyBhIG1vZGVybiBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIGJ1aWxkaW5nIGludGVyYWN0aXZlIHdlYiBpbnRlcmZhY2VzXG4gKiB1c2luZyByZWFjdGl2ZSBkYXRhIGJpbmRpbmcgYW5kIHJldXNhYmxlIGNvbXBvbmVudHMuIFZ1ZSdzIEFQSSBpcyBjbGVhblxuICogYW5kIHNpbXBsZSwgbGVhdmluZyB5b3UgdG8gZm9jdXMgb24gYnVpbGRpbmcgeW91ciBuZXh0IGdyZWF0IHByb2plY3QuXG4gKi9cblxud2luZG93LlZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xud2luZG93LlZ1ZXggPSByZXF1aXJlKCd2dWV4Jyk7XG53aW5kb3cuVnVlUm91dGVyID0gcmVxdWlyZSgndnVlLXJvdXRlcicpO1xud2luZG93LlZ1ZUkxOG4gPSByZXF1aXJlKCd2dWUtaTE4bicpO1xucmVxdWlyZSgnLi9maWx0ZXJzL2hlbHBlcnMnKTtcblxuVnVlLnVzZShWdWV4KTtcblZ1ZS51c2UoVnVlUm91dGVyKTtcblZ1ZS51c2UoVnVlSTE4bik7XG5cbi8qKlxuICogV2UnbGwgbG9hZCB0aGUgYXhpb3MgSFRUUCBsaWJyYXJ5IHdoaWNoIGFsbG93cyB1cyB0byBlYXNpbHkgaXNzdWUgcmVxdWVzdHNcbiAqIHRvIG91ciBMYXJhdmVsIGJhY2stZW5kLiBUaGlzIGxpYnJhcnkgYXV0b21hdGljYWxseSBoYW5kbGVzIHNlbmRpbmcgdGhlXG4gKiBDU1JGIHRva2VuIGFzIGEgaGVhZGVyIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgXCJYU1JGXCIgdG9rZW4gY29va2llLlxuICovXG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbiA9IHtcbiAgICAnWC1DU1JGLVRPS0VOJzogd2luZG93LkxhcmF2ZWwuY3NyZlRva2VuLFxuICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgICAnQWNjZXB0LUxhbmd1YWdlJzogU29tZWxpbmUubG9jYWxlXG59O1xuXG5WdWUucHJvdG90eXBlLiRodHRwID0gd2luZG93LmF4aW9zO1xuXG52YXIgYXBpQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6ICcvYXBpLycsXG4gICAgdGltZW91dDogMTAwMDAsXG4gICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL3guc29tZWxpbmUudjEranNvbicsXG4gICAgfVxufSk7XG5WdWUucHJvdG90eXBlLiRhcGkgPSBhcGlBeGlvcztcblxuLyoqXG4gKiBFY2hvIGV4cG9zZXMgYW4gZXhwcmVzc2l2ZSBBUEkgZm9yIHN1YnNjcmliaW5nIHRvIGNoYW5uZWxzIGFuZCBsaXN0ZW5pbmdcbiAqIGZvciBldmVudHMgdGhhdCBhcmUgYnJvYWRjYXN0IGJ5IExhcmF2ZWwuIEVjaG8gYW5kIGV2ZW50IGJyb2FkY2FzdGluZ1xuICogYWxsb3dzIHlvdXIgdGVhbSB0byBlYXNpbHkgYnVpbGQgcm9idXN0IHJlYWwtdGltZSB3ZWIgYXBwbGljYXRpb25zLlxuICovXG5cbi8vIGltcG9ydCBFY2hvIGZyb20gXCJsYXJhdmVsLWVjaG9cIlxuXG4vLyB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbi8vICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4vLyAgICAga2V5OiAneW91ci1wdXNoZXIta2V5J1xuLy8gfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBMaWJlcm4gb24gMjYvNS8xNi5cbiAqL1xuZXhwb3J0IGRlZmF1bHR7XG4gICAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsLmZvY3VzKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGlyZWN0aXZlcy9mb2N1cy5qcyIsIi8qKlxuICogQ2hhbmdlcyB2YWx1ZSB0byBwYXN0IHRlbnNlLlxuICogU2ltcGxlIGZpbHRlciBkb2VzIG5vdCBzdXBwb3J0IGlycmVndWxhciB2ZXJicyBzdWNoIGFzIGVhdC1hdGUsIGZseS1mbGV3LCBldGMuXG4gKiBodHRwOi8vanNmaWRkbGUubmV0L2JyeWFuX2svMHhjem1lMnIvXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKi9cblZ1ZS5maWx0ZXIoJ3Bhc3QtdGVuc2UnLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8vIFNsaWdodGx5IGZvbGxvd3MgaHR0cDovL3d3dy5veGZvcmRkaWN0aW9uYXJpZXMuY29tL3VzL3dvcmRzL3ZlcmItdGVuc2VzLWFkZGluZy1lZC1hbmQtaW5nXG4gICAgdmFyIHZvd2VscyA9IFsnYScsICdlJywgJ2knLCAnbycsICd1J107XG4gICAgaWYoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGFzdCA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3Vic3RyKHZhbHVlLmxlbmd0aCAtIDEpLFxuICAgICAgICBzZWNvbmRMYXN0ID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMiwgMSksXG4gICAgICAgIHRoaXJkTGFzdCA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3Vic3RyKHZhbHVlLmxlbmd0aCAtIDMsIDEpLFxuICAgICAgICBsYXN0VHdvID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMiksXG4gICAgICAgIGxhc3RUaHJlZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3Vic3RyKHZhbHVlLmxlbmd0aCAtIDMpLFxuICAgICAgICBpbkFycmF5ID0gZnVuY3Rpb24oYXIsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gYXIuaW5kZXhPZih2YWx1ZSkgIT0gLTFcbiAgICAgICAgfTtcblxuICAgIC8vIHBhcnRpY2lwbGUgb3IgYWxyZWFkeSBwYXN0IHRlbnNlLCBkb24ndCB3YW50XG4gICAgaWYobGFzdFRocmVlID09PSAnaW5nJyB8fCBsYXN0VHdvID09PSAnZWQnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBFbmRzIGluICdlJywgc2ltcGx5IGFkZCB0aGUgJ2QnXG4gICAgaWYobGFzdCA9PT0gJ2UnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSArICdkJztcbiAgICB9XG5cbiAgICAvLyBFbmRzIGluICdjJywgYWRkIHRoZSAna2VkJ1xuICAgIGlmKGxhc3QgPT09ICdjJykge1xuICAgICAgICByZXR1cm4gdmFsdWUgKyAna2VkJztcbiAgICB9XG5cbiAgICAvLyBFbmRzIHdpdGggY29uc29uYW50LCB2b3dlbCwgY29uc29uYW50LiBJJ20gc2ltcGxlLCBkb3VibGUgY29uc29uYW50IGFuZCBhZGQgJ2VkJ1xuICAgIGlmKCFpbkFycmF5KHZvd2VscywgdGhpcmRMYXN0KSAmJiBpbkFycmF5KHZvd2Vscywgc2Vjb25kTGFzdCkgJiYgIWluQXJyYXkodm93ZWxzLCBsYXN0KSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgKyBsYXN0ICsgJ2VkJztcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUgKyAnZWQnO1xufSk7XG5cbi8qKlxuICogVnVlIGZpbHRlciB0byBjb252ZXJ0IGEgc2x1ZyB0byBhIG1vcmUgaHVtYW4gZnJpZW5kbHkgZm9ybS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHN0cmluZy5cbiAqL1xuVnVlLmZpbHRlcignaHVtYW5hYmxlJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgd29yZHMgPSB2YWx1ZS5zcGxpdCgvWy1fXSsvZyk7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IodmFyIGk9MDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBsZXR0ZXIgPSB3b3Jkc1tpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGxldHRlciArIHdvcmRzW2ldLnNsaWNlKDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHMuam9pbignICcpO1xufSk7XG5cbi8qKlxuICogVnVlIGZpbHRlciB0byBjb252ZXJ0IHRoZSBnaXZlbiB2YWx1ZSB0byBwZXJjZW50LlxuICogaHR0cDovL2pzZmlkZGxlLm5ldC9icnlhbl9rL3FhdWYzcXloL1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAgICBUaGUgdmFsdWUgc3RyaW5nLlxuICogQHBhcmFtIHtOdW1iZXJ9IGRlY2ltYWxzIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMuXG4gKi9cblZ1ZS5maWx0ZXIoJ3BlcmNlbnRhZ2UnLCBmdW5jdGlvbih2YWx1ZSwgZGVjaW1hbHMpIHtcbiAgICBpZighdmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSAwO1xuICAgIH1cblxuICAgIGlmKCFkZWNpbWFscykge1xuICAgICAgICBkZWNpbWFscyA9IDA7XG4gICAgfVxuXG4gICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDtcbiAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgKiBNYXRoLnBvdygxMCwgZGVjaW1hbHMpKSAvIE1hdGgucG93KDEwLCBkZWNpbWFscyk7XG4gICAgdmFsdWUgPSB2YWx1ZSArICclJztcbiAgICByZXR1cm4gdmFsdWU7XG59KTtcblxuXG4vKipcbiAqIFZ1ZSBmaWx0ZXIgdG8gcm91bmQgdGhlIGRlY2ltYWwgdG8gdGhlIGdpdmVuIHBsYWNlLlxuICogaHR0cDovL2pzZmlkZGxlLm5ldC9icnlhbl9rLzNvdmExN3k5L1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAgICBUaGUgdmFsdWUgc3RyaW5nLlxuICogQHBhcmFtIHtOdW1iZXJ9IGRlY2ltYWxzIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMuXG4gKi9cblZ1ZS5maWx0ZXIoJ3JvdW5kJywgZnVuY3Rpb24odmFsdWUsIGRlY2ltYWxzKSB7XG4gICAgaWYoIXZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICB9XG5cbiAgICBpZighZGVjaW1hbHMpIHtcbiAgICAgICAgZGVjaW1hbHMgPSAwO1xuICAgIH1cblxuICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAqIE1hdGgucG93KDEwLCBkZWNpbWFscykpIC8gTWF0aC5wb3coMTAsIGRlY2ltYWxzKTtcbiAgICByZXR1cm4gdmFsdWU7XG59KTtcblxuXG4vKipcbiAqIFZ1ZSBmaWx0ZXIgdG8gY29udmVydCB0aGUgZ2l2ZW4gdmFsdWUgdG8gd2hvbGUgZG9sbGFycywgbm8gY2hhbmdlLlxuICogaHR0cDovL2pzZmlkZGxlLm5ldC9icnlhbl9rLzJ0NmJxcWZjL1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgc3RyaW5nLlxuICovXG5WdWUuZmlsdGVyKCduby1jaGFuZ2UnLCBmdW5jdGlvbih2YWx1ZSwgc3ltYm9sKSB7XG4gICAgaWYoIXZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICB9XG5cbiAgICBpZighc3ltYm9sKSB7XG4gICAgICAgIHN5bWJvbCA9ICckJztcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKS5zcGxpdCgnLicpWzBdO1xuICAgIHJldHVybiBzeW1ib2wgKyB2YWx1ZTtcbn0pO1xuXG4vKipcbiAqIFZ1ZSBmaWx0ZXIgdG8gbWFrZSBhIHNpbXBsZSB0aW1lc3RhbXAgZm9yIGFuIElTTyBkYXRlLlxuICogaHR0cDovL2pzZmlkZGxlLm5ldC9icnlhbl9rLzQ0a3F0cGVnL1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgc3RyaW5nLlxuICovXG5WdWUuZmlsdGVyKCd0aW1lc3RhbXAnLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciBwYXJ0cyA9IHZhbHVlLnNwbGl0KCcgJyk7XG4gICAgdmFyIGRhdGUgPSBwYXJ0c1swXTtcbiAgICB2YXIgdGltZSA9IHBhcnRzWzFdO1xuXG4gICAgZGF0ZSA9IGRhdGUuc3BsaXQoJy0nKTtcbiAgICB0aW1lID0gdGltZS5zcGxpdCgnOicpO1xuXG4gICAgaWYocGFyc2VJbnQodGltZVswXSwgMTApID4gMTIpIHtcbiAgICAgICAgdmFyIGhvdXIgPSBwYXJzZUludCh0aW1lWzBdLCAxMCkgJSAxMjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBob3VyID0gcGFyc2VJbnQodGltZVswXSwgMTApO1xuICAgIH1cblxuICAgIGhvdXIgPSBob3VyIDwgMTAgPyAnMCcgKyBob3VyIDogaG91cjtcblxuICAgIHJldHVybiAnWycgKyBkYXRlWzFdICsgJy8nICsgZGF0ZVsyXSArICcgJyArIGhvdXIgKyAnOicgKyB0aW1lWzFdICsgJ10nO1xufSk7XG5cbi8qKlxuICogVnVlIGZpbHRlciB0byB0cnVuY2F0ZSBhIHN0cmluZyB0byB0aGUgc3BlY2lmaWVkIGxlbmd0aC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgc3RyaW5nLlxuICovXG5WdWUuZmlsdGVyKCd0cnVuY2F0ZScsIGZ1bmN0aW9uKHZhbHVlLCBsZW5ndGgpIHtcbiAgICBpZih2YWx1ZS5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGxlbmd0aCA9IGxlbmd0aCAtIDM7XG5cbiAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKDAsIGxlbmd0aCkgKyAnLi4uJztcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZmlsdGVycy9oZWxwZXJzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==