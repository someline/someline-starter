webpackJsonp([3,4],{

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

/***/ 147:
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
 * includes Vue and other libraries. It is a great starting point when
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

Vue.component('example', __webpack_require__(18));
Vue.component('sl-user-list', __webpack_require__(202));

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
        platform: 'app',
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

/***/ 150:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"autosize-textarea.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_datasource__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_datasource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_datasource__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    props: [],
    data: function data() {
        return {
            pagination: {},
            items: [],
            columns: [{ name: 'email', key: 'email' }, { name: 'name', key: 'name' }],
            options: {
                page: 1,
                perpage: 15,
                query: ''
            }
        };
    },

    computed: {},
    components: {
        'sl-user-list-item': __webpack_require__(203),
        Datasource: __WEBPACK_IMPORTED_MODULE_0_vue_datasource___default.a
    },
    mounted: function mounted() {
        console.log('Component Ready.');

        this.fetchData();
    },

    watch: {},
    events: {},
    methods: {
        buildPaginator: function buildPaginator(pagination) {
            // TODO: Make build paginator global
            var pager = {
                total: pagination.total,
                per_page: pagination.per_page,
                current_page: pagination.current_page,
                last_page: pagination.total_pages,
                from: 1,
                to: pagination.per_page
            };
            return pager;
        },
        changePage: function changePage(values) {
            this.fetchData(values);
        },
        onSearch: function onSearch(query) {

            var options = {
                'query': query,
                'page': 1
            };

            this.fetchData(options);
        },
        fetchData: function fetchData(options) {
            var _this = this;

            if (typeof options == 'undefined') {
                options = {};
            }

            options.page = options.page || this.options.page;
            options.perpage = options.perpage || this.options.perpage;

            if (typeof options.query == 'undefined') {
                options.query = this.options.query;
            }

            this.options = options;

            //@TODO: Build the query parameter in a proper way
            this.$api.get('/users?page=' + options.page + '&per_page=' + options.perpage + '&search=' + options.query + '&searchFields=name:like', {
                params: {
                    //                        include: ''
                }
            }).then(function (response) {
                _this.items = response.data.data;
                _this.pagination = _this.buildPaginator(response.data.meta.pagination);
            }.bind(this)).catch(function (error) {
                console.error(error);
            }.bind(this));
        }
    }
};

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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    props: ['item'],
    data: function data() {
        return {
            //                msg: 'hello vue'
        };
    },

    computed: {
        userId: function userId() {
            return this.item.user_id;
        },
        link: function link() {
            return "/users/" + this.userId + "#/user/" + this.userId + "/profile";
        }
    },
    watch: {},
    events: {},
    methods: {}
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

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"UserList.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"UserListGroupItem.vue","sourceRoot":"webpack://"}]);

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

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueDatasourceComponent"] = factory();
	else
		root["VueDatasourceComponent"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(9);

/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DatasourceUtils = __webpack_require__(6);
	
	var _DatasourceUtils2 = _interopRequireDefault(_DatasourceUtils);
	
	var _DatasourceLanguage = __webpack_require__(5);
	
	var _DatasourceLanguage2 = _interopRequireDefault(_DatasourceLanguage);
	
	var _Pagination = __webpack_require__(10);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    Pagination: _Pagination2.default
	  },
	  props: {
	    tableData: {
	      type: Array,
	      required: true
	    },
	
	    language: {
	      type: String,
	      default: 'es'
	    },
	
	    columns: {
	      type: Array,
	      required: true
	    },
	
	    pagination: {
	      type: Object,
	      default: function _default() {
	        return {
	          total: 0,
	          to: 0,
	          from: 0,
	          per_page: 15
	        };
	      }
	    },
	
	    actions: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    }
	  },
	  data: function data() {
	    return {
	      limits: [1, 5, 10, 15, 20],
	      perpage: 15,
	      selected: null,
	      indexSelected: -1,
	      search: '' };
	  },
	
	  computed: {
	    translation: function translation() {
	      return _DatasourceLanguage2.default.translations[this.language];
	    },
	
	    tableInfo: _DatasourceUtils2.default.tableInfo
	  },
	  methods: {
	    fetchFromObject: _DatasourceUtils2.default.fetchFromObject,
	    changePage: _DatasourceUtils2.default.changePage,
	    selectRow: _DatasourceUtils2.default.selectRow,
	    searching: function searching() {
	      this.selected = null;
	      this.indexSelected = -1;
	      this.$emit('searching', this.search);
	    }
	  },
	  watch: {
	    perpage: function perpage() {
	      this.selected = null;
	      this.indexSelected = -1;
	      this.$emit('change', { perpage: this.perpage, page: 1 });
	    },
	    tableData: function tableData() {
	      this.selected = null;
	      this.indexSelected = -1;
	    }
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['pages', 'translation'],
	  computed: {
	    items: function items() {
	      var temp = [],
	          bottomLimit = this.pages.current_page - 2,
	          topLimit = this.pages.current_page + 2,
	          showing = 5;
	
	      if (bottomLimit <= 0) {
	        bottomLimit = 1;
	        topLimit = 5;
	      }
	
	      if (topLimit >= this.pages.last_page) {
	        bottomLimit = this.pages.last_page - 4;
	        topLimit = this.pages.last_page;
	      }
	
	      if (this.pages.last_page < 5) {
	        showing = this.pages.last_page;
	      }
	
	      if (bottomLimit <= 0) {
	        bottomLimit = 1;
	      }
	
	      if (this.pages.last_page == 0 || this.pages.last_page == 1) {
	        showing = 1;
	      }
	
	      for (var i = 0; i < showing; i++) {
	        temp[i] = i + bottomLimit;
	      }
	
	      return temp;
	    }
	  },
	  methods: {
	    firstPage: function firstPage() {
	      if (this.pages.current_page != 1) {
	        this.change(1);
	      }
	    },
	    previous: function previous() {
	      if (this.pages.current_page != 1) {
	        this.change(--this.pages.current_page);
	      }
	    },
	    change: function change(page) {
	      this.$emit('change', page);
	    },
	    next: function next() {
	      if (this.pages.current_page != this.pages.last_page) {
	        this.change(++this.pages.current_page);
	      }
	    },
	    lastPage: function lastPage(page) {
	      if (this.pages.current_page != this.pages.last_page) {
	        this.change(page);
	      }
	    },
	    changePageWithKeyBoard: function changePageWithKeyBoard(key) {
	      if (key === 'ArrowLeft') {
	        this.previous();
	      } else if (key === 'ArrowRight') {
	        this.next();
	      }
	    }
	  },
	  created: function created() {
	    var _this = this;
	
	    window.addEventListener('keyup', function (_ref) {
	      var key = _ref.key;
	      return _this.changePageWithKeyBoard(key);
	    });
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  translations: {
	    'en': {
	      'table': {
	        'label_limits': 'Show',
	        'label_search': 'Search',
	        'placeholder_search': 'Type to search..',
	        'records_not_found': 'No records found'
	      },
	      'pagination': {
	        'label_show': 'Showing',
	        'label_to': 'to',
	        'label_of': 'of',
	        'label_entries': 'entries',
	        'btn_first': 'First',
	        'btn_last': 'Latest'
	      }
	    },
	
	    'es': {
	      'table': {
	        'label_limits': 'Mostrar',
	        'label_search': 'Buscar',
	        'placeholder_search': 'Buscar ..',
	        'records_not_found': 'No se encontraron registros.'
	      },
	      'pagination': {
	        'label_show': 'Mostrando',
	        'label_to': 'a',
	        'label_of': 'de',
	        'label_entries': 'registros',
	        'btn_first': 'Primero',
	        'btn_last': 'Último'
	      }
	    }
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  fetchFromObject: function fetchFromObject(obj, column, render) {
	    if (typeof obj === 'undefined') return false;
	    var _index = column.indexOf('.');
	    if (_index > -1) {
	      return this.fetchFromObject(obj[column.substring(0, _index)], column.substr(_index + 1));
	    }
	    if (typeof render != 'undefined') {
	      return render(obj[column]);
	    }
	    return obj[column];
	  },
	  changePage: function changePage(page) {
	    this.selected = null;
	    this.indexSelected = -1;
	    this.$emit('change', { perpage: this.perpage, page: page });
	  },
	  selectRow: function selectRow(row, index) {
	    if (this.indexSelected == index) {
	      this.indexSelected = -1;
	      this.selected = null;
	    } else {
	      this.indexSelected = index;
	      this.selected = {
	        'row': row,
	        'index': index
	      };
	    }
	  },
	  tableInfo: function tableInfo() {
	    var label_show = this.translation.pagination.label_show;
	    var from = this.pagination.from == null ? 0 : this.pagination.from;
	    var label_to = this.translation.pagination.label_to;
	    var to = this.pagination.to == null ? 0 : this.pagination.to;
	    var label_of = this.translation.pagination.label_of;
	    var total = this.pagination.total;
	    var label_entries = this.translation.pagination.label_entries;
	
	    return label_show + ' ' + from + ' ' + label_to + ' ' + to + ' ' + label_of + ' ' + total + ' ' + label_entries;
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.Vue__pagination nav .pagination[data-v-4417c436] {\n  margin: 10px 0 !important;\n}\n", ""]);
	
	// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.vue-datasource .Vue__panel-body[data-v-8db43442] {\n  padding: 0;\n}\n.vue-datasource .Vue__panel-body .Vue__table[data-v-8db43442] {\n    margin-bottom: 0;\n}\n.vue-datasource .Vue__panel-footer .Vue__datasource_actions[data-v-8db43442] {\n  margin: 10px 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(14)
	
	/* script */
	__vue_exports__ = __webpack_require__(3)
	
	/* template */
	var __vue_template__ = __webpack_require__(12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-8db43442"
	
	module.exports = __vue_exports__


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(13)
	
	/* script */
	__vue_exports__ = __webpack_require__(4)
	
	/* template */
	var __vue_template__ = __webpack_require__(11)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4417c436"
	
	module.exports = __vue_exports__


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "Vue__pagination"
	  }, [_c('nav', {
	    attrs: {
	      "aria-label": "Page navigation"
	    }
	  }, [_c('ul', {
	    staticClass: "pagination"
	  }, [_c('li', {
	    class: (_vm.pages.current_page == 1) ? 'disabled' : ''
	  }, [_c('a', {
	    attrs: {
	      "href": "#"
	    },
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.firstPage($event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.translation.btn_first))])]), _vm._v(" "), _c('li', {
	    class: (_vm.pages.current_page == 1) ? 'disabled' : ''
	  }, [_c('a', {
	    attrs: {
	      "href": "#",
	      "aria-label": "Previous"
	    },
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.previous($event)
	      }
	    }
	  }, [_c('span', {
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }, [_vm._v("«")])])]), _vm._v(" "), _vm._l((_vm.items), function(n) {
	    return _c('li', {
	      class: (_vm.pages.current_page == n) ? 'active' : ''
	    }, [_c('a', {
	      attrs: {
	        "href": "#"
	      },
	      on: {
	        "click": function($event) {
	          $event.preventDefault();
	          _vm.change(n)
	        }
	      }
	    }, [_vm._v(_vm._s(n))])])
	  }), _vm._v(" "), _c('li', {
	    class: (_vm.pages.current_page == _vm.pages.last_page) ? 'disabled' : ''
	  }, [_c('a', {
	    attrs: {
	      "href": "#",
	      "aria-label": "Next"
	    },
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.next($event)
	      }
	    }
	  }, [_c('span', {
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }, [_vm._v("»")])])]), _vm._v(" "), _c('li', {
	    class: (_vm.pages.current_page == _vm.pages.last_page) ? 'disabled' : ''
	  }, [_c('a', {
	    attrs: {
	      "href": "#"
	    },
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.lastPage(_vm.pages.last_page)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.translation.btn_last))])])], 2)])])
	},staticRenderFns: []}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "vue-datasource"
	  }, [_c('div', {
	    staticClass: "panel panel-default"
	  }, [_c('div', {
	    staticClass: "panel-heading"
	  }, [_c('div', {
	    staticClass: "form-inline"
	  }, [_c('div', {
	    staticClass: "form-group pull-left"
	  }, [_c('label', {
	    staticClass: "control-label pr2"
	  }, [_vm._v(_vm._s(_vm.translation.table.label_limits))]), _vm._v(" "), _c('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.perpage),
	      expression: "perpage"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "number": ""
	    },
	    on: {
	      "change": function($event) {
	        _vm.perpage = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        })[0]
	      }
	    }
	  }, _vm._l((_vm.limits), function(limit) {
	    return _c('option', {
	      domProps: {
	        "value": limit
	      }
	    }, [_vm._v(_vm._s(limit))])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "form-group pull-right"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.search),
	      expression: "search"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "placeholder": _vm.translation.table.placeholder_search
	    },
	    domProps: {
	      "value": _vm._s(_vm.search)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.search = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('button', {
	    staticClass: "btn btn-primary",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.searching($event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.translation.table.label_search) + "\n          ")])]), _vm._v(" "), _c('div', {
	    staticClass: "clearfix"
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "panel-body Vue__panel-body"
	  }, [_c('table', {
	    staticClass: "table table-striped Vue__table"
	  }, [_c('thead', [_c('tr', _vm._l((_vm.columns), function(column) {
	    return _c('th', [_vm._v(_vm._s(column.name))])
	  }))]), _vm._v(" "), _c('tbody', [(_vm.pagination.total == 0) ? _c('tr', [_c('td', {
	    attrs: {
	      "colspan": _vm.columns.length
	    }
	  }, [_vm._v(_vm._s(_vm.translation.table.records_not_found))])]) : _vm._l((_vm.tableData), function(row, index) {
	    return _c('tr', {
	      class: {
	        'success': (index == _vm.indexSelected)
	      },
	      on: {
	        "click": function($event) {
	          $event.preventDefault();
	          _vm.selectRow(row, index)
	        }
	      }
	    }, _vm._l((_vm.columns), function(k) {
	      return _c('td', [_vm._v("\n            " + _vm._s(_vm.fetchFromObject(row, k.key, k.render)) + "\n          ")])
	    }))
	  }), _vm._v(" "), _c('tr', [_c('td', {
	    staticClass: "text-center",
	    attrs: {
	      "colspan": _vm.columns.length
	    }
	  }, [_vm._v("\n            " + _vm._s(_vm.tableInfo) + "\n          ")])])], 2)])]), _vm._v(" "), _c('div', {
	    staticClass: "panel-footer Vue__panel-footer"
	  }, [_c('div', {
	    staticClass: "pull-left"
	  }, [_c('div', {
	    staticClass: "btn-group Vue__datasource_actions"
	  }, _vm._l((_vm.actions), function(btn) {
	    return _c('button', {
	      staticClass: "btn btn-default",
	      class: btn.class,
	      attrs: {
	        "type": "button"
	      },
	      on: {
	        "click": function($event) {
	          btn.event($event, _vm.selected)
	        }
	      }
	    }, [(btn.icon) ? _c('i', {
	      staticClass: "pr1",
	      class: btn.icon
	    }) : _vm._e(), _vm._v("\n            " + _vm._s(btn.text) + "\n          ")])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "pull-right"
	  }, [_c('pagination', {
	    attrs: {
	      "pages": _vm.pagination,
	      "translation": _vm.translation.pagination
	    },
	    on: {
	      "change": _vm.changePage
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "clearfix"
	  })])])])
	},staticRenderFns: []}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4417c436&scoped=true!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4417c436&scoped=true!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8db43442&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Datasource.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8db43442&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Datasource.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-datasource.js.map

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(236)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(171),
  /* template */
  __webpack_require__(222),
  /* scopeId */
  "data-v-58a2645c",
  /* cssModules */
  null
)
Component.options.__file = "/Users/german/Sites/someline-starter/resources/assets/js/components/app/users/UserList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UserList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58a2645c", Component.options)
  } else {
    hotAPI.reload("data-v-58a2645c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(237)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(172),
  /* template */
  __webpack_require__(223),
  /* scopeId */
  "data-v-5947db34",
  /* cssModules */
  null
)
Component.options.__file = "/Users/german/Sites/someline-starter/resources/assets/js/components/app/users/UserListGroupItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UserListGroupItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5947db34", Component.options)
  } else {
    hotAPI.reload("data-v-5947db34", Component.options)
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

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper-md"
  }, [_c('h1', [_vm._v(_vm._s(_vm.$t('user.users')))]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('datasource', {
    attrs: {
      "table-data": _vm.items,
      "language": "en",
      "columns": _vm.columns,
      "pagination": _vm.pagination
    },
    on: {
      "change": _vm.changePage,
      "searching": _vm.onSearch
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-58a2645c", module.exports)
  }
}

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "list-group-item clearfix",
    attrs: {
      "href": "#"
    }
  }, [_vm._m(0), _vm._v(" "), _c('span', {
    staticClass: "clear"
  }, [_c('span', [_vm._v(_vm._s(_vm.item.name))])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "pull-left thumb-sm avatar m-r"
  }, [_c('img', {
    attrs: {
      "src": "https://www.someline.com/en/user/profilephoto/origin/f4ccc4de78c03fe2c321490cf6f8157f825e4c4f.jpg",
      "alt": "..."
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5947db34", module.exports)
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

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("44b8e172", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-58a2645c&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserList.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-58a2645c&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(194);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("42e63b6a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5947db34&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserListGroupItem.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5947db34&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserListGroupItem.vue");
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

__webpack_require__(147);
__webpack_require__(150);
__webpack_require__(151);
module.exports = __webpack_require__(152);


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

},[243]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzP2Q0ZjMqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZmlsdGVycy9ubDJici5qcz82ZTczKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9idXMuanM/MTgzZioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvanF1ZXJ5LmpzP2RlZTEqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3N0b3JlLmpzP2EzZTUqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3Rvb2xzLmpzPzJlMDAqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3VzZXIuanM/OTNiMSoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9sZXNzL2FwcC5sZXNzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvbGVzcy9jb25zb2xlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9sZXNzL21vYmlsZS5sZXNzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWU/OGQyZioqIiwid2VicGFjazovLy9Vc2VyTGlzdC52dWUiLCJ3ZWJwYWNrOi8vL1VzZXJMaXN0R3JvdXBJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRXhhbXBsZS52dWU/MGJmZSoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZT8zOGMyKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0LnZ1ZT9mZmZlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3RHcm91cEl0ZW0udnVlP2U1YTAiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcz9kYTA0KiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlP2Y2MzkqKiIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1kYXRhc291cmNlL2Rpc3QvdnVlLWRhdGFzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdEdyb3VwSXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlPzIzMjEqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlPzA1MjkqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0LnZ1ZT84ZGU4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3RHcm91cEl0ZW0udnVlPzhhOGYiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanM/ZTZhYyoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdC52dWU/Nzk2YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0R3JvdXBJdGVtLnZ1ZT85OGQ2Iiwid2VicGFjazovLy8uL34vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzPzZiMmIqIiwid2VicGFjazovLy9FeGFtcGxlLnZ1ZT8zNDRjKiIsIndlYnBhY2s6Ly8vYXV0b3NpemUtdGV4dGFyZWEudnVlPzI5NTMqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzPzU5MTEqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGlyZWN0aXZlcy9mb2N1cy5qcz9kYjVkKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2ZpbHRlcnMvaGVscGVycy5qcz85OGY0KiJdLCJuYW1lcyI6WyJyZWFkIiwidmFsIiwicmVwbGFjZSIsIlJlZ0V4cCIsImNvbXB1dGVkIiwiYnVzIiwid2luZG93IiwibWV0aG9kcyIsImV2ZW50RW1pdCIsIm5hbWUiLCJkYXRhIiwiJGVtaXQiLCJldmVudE9uIiwiY2FsbGJhY2siLCIkb24iLCJldmVudE9mZiIsIiRvZmYiLCJBcHBIZWFkZXJTZXRUaXRsZSIsInRpdGxlIiwiQXBwVGFiQmFyU2V0U2hvd0FwcFRhYkJhciIsImlzU2hvdyIsIkFwcFRhYkJhclNlbGVjdFRhYkJhckl0ZW0iLCJpbmRleCIsIkFwcEhlYWRlclNldE5hdkJ1dHRvbkxlZnQiLCJjbGFzc05hbWUiLCJBcHBIZWFkZXJTZXROYXZCdXR0b25SaWdodCIsInNjcm9sbFRvQm90dG9tIiwic2VsZWN0b3IiLCJhbmltYXRlZCIsImFuaW1hdGVUaW1lIiwiJGVsZW1lbnQiLCIkIiwic2Nyb2xsSGVpZ2h0IiwicHJvcCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ2dWV4U3RvcmUiLCJzdG9yZUNvbW1pdCIsImNvbW1pdCIsInN0b3JlRGlzcGF0Y2giLCJkaXNwYXRjaCIsIm5vd1RpbWVzdGFtcCIsIm1vbWVudCIsInVuaXgiLCJtb21lbnRGcm9tRGF0ZVRpbWUiLCJkYXRlVGltZSIsImRhdGVUaW1lVG9UaW1lc3RhbXAiLCJ1cmwiLCJwYXRoIiwic3Vic3RyaW5nIiwiYmFzZVVybCIsInJlZGlyZWN0VG9VcmwiLCJsb2NhdGlvbiIsImhyZWYiLCJyZWRpcmVjdFRvVXJsRnJvbUJhc2VVcmwiLCJyZWxvYWRQYWdlIiwib2JqZWN0VG9Gb3JtRGF0YSIsIml0ZW0iLCJmb3JtX2RhdGEiLCJGb3JtRGF0YSIsImtleSIsImFwcGVuZCIsImlzRW1wdHlPYmplY3QiLCJvYmplY3QiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiaXNNb2JpbGUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInJlcXVpcmUiLCJWdWUiLCJkaXJlY3RpdmUiLCJmaWx0ZXIiLCJtaXhpbiIsImNvbXBvbmVudCIsIlZ1ZXgiLCJTdG9yZSIsInN0YXRlIiwicGxhdGZvcm0iLCJjb3VudCIsIm11dGF0aW9ucyIsImluY3JlbWVudCIsImFwcCIsImVsIiwibXNnIiwid2F0Y2giLCJldmVudHMiLCJjcmVhdGVkIiwiY29uc29sZSIsImxvZyIsImluaXRMb2NhbGUiLCJtb3VudGVkIiwidGhhdCIsImxhbmciLCJsb2NhbGUiLCJjb25maWciLCJTb21lbGluZSIsImxvY2FsZXMiLCJjdXJyZW50VXNlcklkIiwidXNlciIsInVzZXJfaWQiLCJfIiwiVnVlUm91dGVyIiwiVnVlSTE4biIsInVzZSIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiTGFyYXZlbCIsImNzcmZUb2tlbiIsInByb3RvdHlwZSIsIiRodHRwIiwiYXBpQXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwidGltZW91dCIsIiRhcGkiLCJiaW5kIiwiZm9jdXMiLCJ2YWx1ZSIsInZvd2VscyIsImxhc3QiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0ciIsInNlY29uZExhc3QiLCJ0aGlyZExhc3QiLCJsYXN0VHdvIiwibGFzdFRocmVlIiwiaW5BcnJheSIsImFyIiwiaW5kZXhPZiIsIndvcmRzIiwic3BsaXQiLCJyZXN1bHRzIiwiaSIsImxldHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwicHVzaCIsInNsaWNlIiwiam9pbiIsImRlY2ltYWxzIiwiTWF0aCIsInJvdW5kIiwicG93Iiwic3ltYm9sIiwidG9TdHJpbmciLCJwYXJ0cyIsImRhdGUiLCJ0aW1lIiwicGFyc2VJbnQiLCJob3VyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzlDQTtBQUFBOzs7QUFHQSw4REFBZTtBQUNYQSxVQUFNLGNBQVVDLEdBQVYsRUFBZTtBQUNqQixlQUFPQSxJQUFJQyxPQUFKLENBQVksSUFBSUMsTUFBSixDQUFXLE9BQVgsRUFBb0IsR0FBcEIsQ0FBWixFQUFzQyxRQUF0QyxDQUFQO0FBQ0g7QUFIVSxDQUFmLEM7Ozs7Ozs7O0FDSEEsd0RBQWM7QUFDVkMsY0FBVTtBQUNOQyxXQURNLGlCQUNEO0FBQ0QsbUJBQU9DLE9BQU9ELEdBQWQ7QUFDSDtBQUhLLEtBREE7QUFNVkUsYUFBUztBQUNMQyxpQkFESyxxQkFDS0MsSUFETCxFQUNXQyxJQURYLEVBQ2dCO0FBQ2pCLGlCQUFLTCxHQUFMLENBQVNNLEtBQVQsQ0FBZUYsSUFBZixFQUFxQkMsSUFBckI7QUFDSCxTQUhJO0FBSUxFLGVBSkssbUJBSUdILElBSkgsRUFJU0ksUUFKVCxFQUlrQjtBQUNuQixpQkFBS1IsR0FBTCxDQUFTUyxHQUFULENBQWFMLElBQWIsRUFBbUJJLFFBQW5C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QTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0NBQW9DO0FBQy9ELElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFD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Y2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIHNjb3BlSWQsXG4gIGNzc01vZHVsZXNcbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIC8vIGluamVjdCBjc3NNb2R1bGVzXG4gIGlmIChjc3NNb2R1bGVzKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCAob3B0aW9ucy5jb21wdXRlZCA9IHt9KVxuICAgIE9iamVjdC5rZXlzKGNzc01vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGNzc01vZHVsZXNba2V5XVxuICAgICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8qKlxuICogQ3JlYXRlZCBieSBMaWJlcm4gb24gMjYvNy8xNi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlYWQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgcmV0dXJuIHZhbC5yZXBsYWNlKG5ldyBSZWdFeHAoJ1xccj9cXG4nLCAnZycpLCAnPGJyIC8+Jyk7XG4gICAgfSxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2ZpbHRlcnMvbmwyYnIuanMiLCJleHBvcnQgZGVmYXVsdHtcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBidXMoKXtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYnVzO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBldmVudEVtaXQobmFtZSwgZGF0YSl7XG4gICAgICAgICAgICB0aGlzLmJ1cy4kZW1pdChuYW1lLCBkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXZlbnRPbihuYW1lLCBjYWxsYmFjayl7XG4gICAgICAgICAgICB0aGlzLmJ1cy4kb24obmFtZSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICBldmVudE9mZihuYW1lLCBjYWxsYmFjayl7XG4gICAgICAgICAgICB0aGlzLmJ1cy4kb2ZmKG5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgQXBwSGVhZGVyU2V0VGl0bGUodGl0bGUpe1xuICAgICAgICAgICAgdGhpcy5idXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgfSxcbiAgICAgICAgQXBwVGFiQmFyU2V0U2hvd0FwcFRhYkJhcihpc1Nob3cpe1xuICAgICAgICAgICAgdGhpcy5ldmVudEVtaXQoXCJBcHBUYWJCYXJfc2V0U2hvd0FwcFRhYkJhclwiLCBpc1Nob3cpO1xuICAgICAgICB9LFxuICAgICAgICBBcHBUYWJCYXJTZWxlY3RUYWJCYXJJdGVtKGluZGV4KXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRFbWl0KFwiQXBwVGFiQmFyX3NlbGVjdFRhYkJhckl0ZW1cIiwgaW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICBBcHBIZWFkZXJTZXROYXZCdXR0b25MZWZ0KGNsYXNzTmFtZSl7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RW1pdChcIkFwcEhlYWRlcl9zZXROYXZCdXR0b25MZWZ0XCIsIGNsYXNzTmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIEFwcEhlYWRlclNldE5hdkJ1dHRvblJpZ2h0KGNsYXNzTmFtZSl7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RW1pdChcIkFwcEhlYWRlcl9zZXROYXZCdXR0b25SaWdodFwiLCBjbGFzc05hbWUpO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9idXMuanMiLCJleHBvcnQgZGVmYXVsdHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNjcm9sbFRvQm90dG9tKHNlbGVjdG9yLCBhbmltYXRlZCwgYW5pbWF0ZVRpbWUpe1xuICAgICAgICAgICAgdmFyICRlbGVtZW50ID0gJChzZWxlY3Rvcik7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gJGVsZW1lbnQucHJvcChcInNjcm9sbEhlaWdodFwiKTtcbiAgICAgICAgICAgIGlmIChhbmltYXRlZCkge1xuICAgICAgICAgICAgICAgIGlmICghYW5pbWF0ZVRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVRpbWUgPSAxMDAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkZWxlbWVudC5hbmltYXRlKHtzY3JvbGxUb3A6IHNjcm9sbEhlaWdodH0sIGFuaW1hdGVUaW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQuc2Nyb2xsVG9wKHNjcm9sbEhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvanF1ZXJ5LmpzIiwiZXhwb3J0IGRlZmF1bHR7XG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgdnVleFN0b3JlKCl7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnZ1ZXhTdG9yZTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc3RvcmVDb21taXQobmFtZSwgZGF0YSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52dWV4U3RvcmUuY29tbWl0KG5hbWUsIGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBzdG9yZURpc3BhdGNoKG5hbWUsIGRhdGEpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudnVleFN0b3JlLmRpc3BhdGNoKG5hbWUsIGRhdGEpO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9zdG9yZS5qcyIsImV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbXB1dGVkOiB7fSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG5vd1RpbWVzdGFtcCgpe1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudCgpLnVuaXgoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbW9tZW50RnJvbURhdGVUaW1lKGRhdGVUaW1lKXtcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQoZGF0ZVRpbWUsICdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGVUaW1lVG9UaW1lc3RhbXAoZGF0ZVRpbWUpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9tZW50RnJvbURhdGVUaW1lKGRhdGVUaW1lKS51bml4KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVybChwYXRoKXtcbiAgICAgICAgICAgIGlmIChwYXRoICYmIHBhdGguc3Vic3RyaW5nKDAsIDEpICE9ICcvJykge1xuICAgICAgICAgICAgICAgIHBhdGggPSAnLycgKyBwYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVVybCArIHBhdGg7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZGlyZWN0VG9VcmwodXJsKXtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICB9LFxuICAgICAgICByZWRpcmVjdFRvVXJsRnJvbUJhc2VVcmwodXJsKXtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy51cmwodXJsKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVsb2FkUGFnZSgpe1xuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvVXJsKHdpbmRvdy5sb2NhdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIG9iamVjdFRvRm9ybURhdGEoaXRlbSl7XG4gICAgICAgICAgICB2YXIgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBpdGVtKSB7XG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZChrZXksIGl0ZW1ba2V5XSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmb3JtX2RhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIGlzRW1wdHlPYmplY3Qob2JqZWN0KXtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfSxcbiAgICAgICAgaXNNb2JpbGUoKXtcbiAgICAgICAgICAgIHZhciBpc01vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KVwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIChpc01vYmlsZS5tYXRjaGVzKTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdG9vbHMuanMiLCJcbi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZXMgVnVlIGFuZCBvdGhlciBsaWJyYXJpZXMuIEl0IGlzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgd2hlblxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG5yZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuXG4vLyBWdWUgRGlyZWN0aXZlc1xuVnVlLmRpcmVjdGl2ZSgnZm9jdXMnLCByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvZm9jdXMnKSk7XG5cbi8vIFZ1ZSBGaWx0ZXJzXG5WdWUuZmlsdGVyKCdubDJicicsIHJlcXVpcmUoJy4vZmlsdGVycy9ubDJicicpKTtcblxuLy8gVnVlIE1peGluc1xuaW1wb3J0IE1peEluVXNlciBmcm9tICcuL21peGlucy91c2VyJ1xuaW1wb3J0IE1peEluSlF1ZXJ5IGZyb20gJy4vbWl4aW5zL2pxdWVyeSdcbmltcG9ydCBNaXhJblRvb2xzIGZyb20gJy4vbWl4aW5zL3Rvb2xzJ1xuaW1wb3J0IE1peEluQnVzIGZyb20gJy4vbWl4aW5zL2J1cydcbmltcG9ydCBNaXhJblN0b3JlIGZyb20gJy4vbWl4aW5zL3N0b3JlJ1xuVnVlLm1peGluKE1peEluVXNlcik7XG5WdWUubWl4aW4oTWl4SW5KUXVlcnkpO1xuVnVlLm1peGluKE1peEluVG9vbHMpO1xuVnVlLm1peGluKE1peEluQnVzKTtcblZ1ZS5taXhpbihNaXhJblN0b3JlKTtcblxuXG5cbi8vIFZ1ZSBDb21wb25lbnRzXG5WdWUuY29tcG9uZW50KCdhdXRvc2l6ZS10ZXh0YXJlYScsIHJlcXVpcmUoJy4vZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWUnKSk7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5WdWUuY29tcG9uZW50KCdleGFtcGxlJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL0V4YW1wbGUudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnc2wtdXNlci1saXN0JywgcmVxdWlyZSgnLi9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdC52dWUnKSk7XG5cbi8vIEJ1c1xuY29uc3QgYnVzID0gbmV3IFZ1ZSh7XG4gICAgZGF0YToge1xuICAgICAgICB0aXRsZTogXCJTb21lbGluZVwiLFxuICAgIH1cbn0pO1xud2luZG93LmJ1cyA9IGJ1cztcblxuLy8gVnVleFxuY29uc3QgdnVleFN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xuICAgIHN0YXRlOiB7XG4gICAgICAgIHBsYXRmb3JtOiAnYXBwJyxcbiAgICAgICAgY291bnQ6IDBcbiAgICB9LFxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBpbmNyZW1lbnQgKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5jb3VudCsrXG4gICAgICAgIH1cbiAgICB9XG59KTtcbndpbmRvdy52dWV4U3RvcmUgPSB2dWV4U3RvcmU7XG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG4gICAgZGF0YToge1xuICAgICAgICBtc2c6IFwiaGVsbG9cIixcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7fSxcbiAgICB3YXRjaDoge30sXG4gICAgZXZlbnRzOiB7fSxcbiAgICBjcmVhdGVkKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdCb290c3RyYXAuJyk7XG4gICAgICAgIHRoaXMuaW5pdExvY2FsZSgpO1xuICAgIH0sXG4gICAgbW91bnRlZCgpe1xuICAgICAgICBjb25zb2xlLmxvZygnUmVhZHkuJyk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGluaXRMb2NhbGUoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbml0IExvY2FsZS4nKTtcblxuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGxhbmcgPSB0aGlzLmxvY2FsZTtcblxuICAgICAgICAgICAgVnVlLmNvbmZpZy5sYW5nID0gbGFuZztcbiAgICAgICAgICAgIFZ1ZS5sb2NhbGUobGFuZywgd2luZG93LlNvbWVsaW5lLmxvY2FsZXMpO1xuXG4gICAgICAgIH0sXG4gICAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsImV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGJhc2VVcmwoKXtcbiAgICAgICAgICAgIHJldHVybiBTb21lbGluZS5iYXNlVXJsO1xuICAgICAgICB9LFxuICAgICAgICBsb2NhbGUoKXtcbiAgICAgICAgICAgIHJldHVybiBTb21lbGluZS5sb2NhbGU7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnRVc2VySWQoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFNvbWVsaW5lLnN0YXRlKTtcbiAgICAgICAgICAgIHJldHVybiBTb21lbGluZS5zdGF0ZS51c2VyLnVzZXJfaWQ7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3VzZXIuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9sZXNzL2FwcC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvbGVzcy9jb25zb2xlLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDE1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9sZXNzL21vYmlsZS5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiYXV0b3NpemUtdGV4dGFyZWEudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ1YzVlMzU4JnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwid3JhcHBlci1tZFwiPlxuXG4gICAgICAgIDxoMT57eyAkdCgndXNlci51c2VycycpIH19PC9oMT5cbiAgICAgICAgPGhyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cblxuICAgICAgICAgICAgPGRhdGFzb3VyY2VcbiAgICAgICAgICAgICAgICAgICAgOnRhYmxlLWRhdGE9XCJpdGVtc1wiXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlPVwiZW5cIlxuICAgICAgICAgICAgICAgICAgICA6Y29sdW1ucz1cImNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICA6cGFnaW5hdGlvbj1cInBhZ2luYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICB2LW9uOmNoYW5nZT1cImNoYW5nZVBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICB2LW9uOnNlYXJjaGluZz1cIm9uU2VhcmNoXCJcbiAgICAgICAgICAgID48L2RhdGFzb3VyY2U+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRGF0YXNvdXJjZSBmcm9tICd2dWUtZGF0YXNvdXJjZSc7XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiBbXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ2VtYWlsJywga2V5OiAnZW1haWwnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICduYW1lJywga2V5OiAnbmFtZSd9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgICAgICBwZXJwYWdlOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7fSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3NsLXVzZXItbGlzdC1pdGVtJzogcmVxdWlyZSgnLi9Vc2VyTGlzdEdyb3VwSXRlbS52dWUnKSxcbiAgICAgICAgICAgIERhdGFzb3VyY2UsXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgUmVhZHkuJyk7XG5cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7fSxcbiAgICAgICAgZXZlbnRzOiB7fSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgYnVpbGRQYWdpbmF0b3IocGFnaW5hdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IE1ha2UgYnVpbGQgcGFnaW5hdG9yIGdsb2JhbFxuICAgICAgICAgICAgICAgIGxldCBwYWdlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IHBhZ2luYXRpb24udG90YWwsXG4gICAgICAgICAgICAgICAgICAgIHBlcl9wYWdlOiBwYWdpbmF0aW9uLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3BhZ2U6IHBhZ2luYXRpb24uY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICAgICAgICBsYXN0X3BhZ2U6IHBhZ2luYXRpb24udG90YWxfcGFnZXMsXG4gICAgICAgICAgICAgICAgICAgIGZyb206IDEsXG4gICAgICAgICAgICAgICAgICAgIHRvOiBwYWdpbmF0aW9uLnBlcl9wYWdlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFnZXI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhbmdlUGFnZSh2YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoRGF0YSh2YWx1ZXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU2VhcmNoKHF1ZXJ5KSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3F1ZXJ5JzogcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICdwYWdlJzogMVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoRGF0YShvcHRpb25zKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmZXRjaERhdGEob3B0aW9ucyl7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvcHRpb25zLnBhZ2UgPSBvcHRpb25zLnBhZ2UgfHwgdGhpcy5vcHRpb25zLnBhZ2U7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wZXJwYWdlID0gb3B0aW9ucy5wZXJwYWdlIHx8IHRoaXMub3B0aW9ucy5wZXJwYWdlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZihvcHRpb25zLnF1ZXJ5KSA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnF1ZXJ5ID0gdGhpcy5vcHRpb25zLnF1ZXJ5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgICAgICAgICAgICAvL0BUT0RPOiBCdWlsZCB0aGUgcXVlcnkgcGFyYW1ldGVyIGluIGEgcHJvcGVyIHdheVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwaS5nZXQoYC91c2Vycz9wYWdlPSR7b3B0aW9ucy5wYWdlfSZwZXJfcGFnZT0ke29wdGlvbnMucGVycGFnZX0mc2VhcmNoPSR7b3B0aW9ucy5xdWVyeX0mc2VhcmNoRmllbGRzPW5hbWU6bGlrZWAsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbiA9IHRoaXMuYnVpbGRQYWdpbmF0b3IocmVzcG9uc2UuZGF0YS5tZXRhLnBhZ2luYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9KS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBVc2VyTGlzdC52dWU/NTg3NjA4MTIiLCI8c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY2xlYXJmaXhcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwdWxsLWxlZnQgdGh1bWItc20gYXZhdGFyIG0tclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5zb21lbGluZS5jb20vZW4vdXNlci9wcm9maWxlcGhvdG8vb3JpZ2luL2Y0Y2NjNGRlNzhjMDNmZTJjMzIxNDkwY2Y2ZjgxNTdmODI1ZTRjNGYuanBnXCJcbiAgICAgICAgICAgICAgICAgYWx0PVwiLi4uXCI+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjbGVhclwiPlxuICAgICAgICAgICAgPHNwYW4+e3sgaXRlbS5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgPCEtLTxwcmU+e3sgaXRlbSB8IGpzb24gfX08L3ByZT4tLT5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvYT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiBbJ2l0ZW0nXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgICAgIG1zZzogJ2hlbGxvIHZ1ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHVzZXJJZCgpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW0udXNlcl9pZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiL3VzZXJzL1wiICsgdGhpcy51c2VySWQgKyBcIiMvdXNlci9cIiArIHRoaXMudXNlcklkICsgXCIvcHJvZmlsZVwiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHt9LFxuICAgICAgICBldmVudHM6IHt9LFxuICAgICAgICBtZXRob2RzOiB7fSxcbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVXNlckxpc3RHcm91cEl0ZW0udnVlPzhjNmU2MWFlIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRXhhbXBsZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1hY2Y2MGE0OCEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9FeGFtcGxlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2dlcm1hbi9TaXRlcy9zb21lbGluZS1zdGFydGVyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEV4YW1wbGUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWFjZjYwYTQ4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYWNmNjBhNDhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTQ1YzVlMzU4JnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYXV0b3NpemUtdGV4dGFyZWEudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDVjNWUzNTghLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXV0b3NpemUtdGV4dGFyZWEudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTQ1YzVlMzU4XCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvZ2VybWFuL1NpdGVzL3NvbWVsaW5lLXN0YXJ0ZXIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGF1dG9zaXplLXRleHRhcmVhLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NWM1ZTM1OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ1YzVlMzU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJVc2VyTGlzdC52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNThhMjY0NWMmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIlVzZXJMaXN0R3JvdXBJdGVtLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01OTQ3ZGIzNCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3RHcm91cEl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSAxOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0ZXh0YXJlYScpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQ1YzVlMzU4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00NWM1ZTM1OCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlZ1ZURhdGFzb3VyY2VDb21wb25lbnRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVnVlRGF0YXNvdXJjZUNvbXBvbmVudFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXG4vKioqLyB9LFxuLyogMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LypcclxuXHRcdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0XHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcblx0Ki9cclxuXHQvLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgbGlzdCA9IFtdO1xyXG5cdFxyXG5cdFx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdFx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHRcdH07XHJcblx0XHJcblx0XHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdFx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGxpc3Q7XHJcblx0fTtcclxuXG5cbi8qKiovIH0sXG4vKiAyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKlxuXHRcdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdFx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuXHQqL1xuXHR2YXIgc3R5bGVzSW5Eb20gPSB7fSxcblx0XHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHRcdHZhciBtZW1vO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdFx0fSksXG5cdFx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0XHR9KSxcblx0XHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcblx0XHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdFx0aWYoZmFsc2UpIHtcblx0XHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHRcdH1cblx0XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdFx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXHRcblx0XHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cdFxuXHRcdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XG5cdFx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblx0XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0XHR9XG5cdFx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XG5cdFx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0XHR9XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcblx0XHR2YXIgc3R5bGVzID0gW107XG5cdFx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cdFx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHRcdH1cblx0XHRyZXR1cm4gc3R5bGVzO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XG5cdFx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHRcdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRcdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHRcdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdFx0fVxuXHR9XG5cdFxuXHRmdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdFx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xuXHRcdGlmKGlkeCA+PSAwKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0XHR9XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG5cdFx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0XHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0XHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcblx0XHRyZXR1cm4gc3R5bGVFbGVtZW50O1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0XHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblx0XG5cdFx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXHRcdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdFx0fTtcblx0XHR9XG5cdFxuXHRcdHVwZGF0ZShvYmopO1xuXHRcblx0XHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG5cdFx0XHRpZihuZXdPYmopIHtcblx0XHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZW1vdmUoKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cdFxuXHR2YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHRcdHZhciB0ZXh0U3RvcmUgPSBbXTtcblx0XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblx0XHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHRcdH07XG5cdH0pKCk7XG5cdFxuXHRmdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdFx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXHRcblx0XHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlcztcblx0XHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0XHR2YXIgY3NzID0gb2JqLmNzcztcblx0XHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cdFx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cdFxuXHRcdGlmIChtZWRpYSkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcblx0XHR9XG5cdFxuXHRcdGlmIChzb3VyY2VNYXApIHtcblx0XHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuXHRcdFx0Ly8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuXHRcdFx0Y3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nO1xuXHRcdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0XHR9XG5cdFxuXHRcdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0XHR9XG5cdH1cblxuXG4vKioqLyB9LFxuLyogMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX0RhdGFzb3VyY2VVdGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cdFxuXHR2YXIgX0RhdGFzb3VyY2VVdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EYXRhc291cmNlVXRpbHMpO1xuXHRcblx0dmFyIF9EYXRhc291cmNlTGFuZ3VhZ2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXHRcblx0dmFyIF9EYXRhc291cmNlTGFuZ3VhZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRGF0YXNvdXJjZUxhbmd1YWdlKTtcblx0XG5cdHZhciBfUGFnaW5hdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXHRcblx0dmFyIF9QYWdpbmF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhZ2luYXRpb24pO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdGV4cG9ydHMuZGVmYXVsdCA9IHtcblx0ICBjb21wb25lbnRzOiB7XG5cdCAgICBQYWdpbmF0aW9uOiBfUGFnaW5hdGlvbjIuZGVmYXVsdFxuXHQgIH0sXG5cdCAgcHJvcHM6IHtcblx0ICAgIHRhYmxlRGF0YToge1xuXHQgICAgICB0eXBlOiBBcnJheSxcblx0ICAgICAgcmVxdWlyZWQ6IHRydWVcblx0ICAgIH0sXG5cdFxuXHQgICAgbGFuZ3VhZ2U6IHtcblx0ICAgICAgdHlwZTogU3RyaW5nLFxuXHQgICAgICBkZWZhdWx0OiAnZXMnXG5cdCAgICB9LFxuXHRcblx0ICAgIGNvbHVtbnM6IHtcblx0ICAgICAgdHlwZTogQXJyYXksXG5cdCAgICAgIHJlcXVpcmVkOiB0cnVlXG5cdCAgICB9LFxuXHRcblx0ICAgIHBhZ2luYXRpb246IHtcblx0ICAgICAgdHlwZTogT2JqZWN0LFxuXHQgICAgICBkZWZhdWx0OiBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgdG90YWw6IDAsXG5cdCAgICAgICAgICB0bzogMCxcblx0ICAgICAgICAgIGZyb206IDAsXG5cdCAgICAgICAgICBwZXJfcGFnZTogMTVcblx0ICAgICAgICB9O1xuXHQgICAgICB9XG5cdCAgICB9LFxuXHRcblx0ICAgIGFjdGlvbnM6IHtcblx0ICAgICAgdHlwZTogQXJyYXksXG5cdCAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuXHQgICAgICAgIHJldHVybiBbXTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cdCAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcblx0ICAgIHJldHVybiB7XG5cdCAgICAgIGxpbWl0czogWzEsIDUsIDEwLCAxNSwgMjBdLFxuXHQgICAgICBwZXJwYWdlOiAxNSxcblx0ICAgICAgc2VsZWN0ZWQ6IG51bGwsXG5cdCAgICAgIGluZGV4U2VsZWN0ZWQ6IC0xLFxuXHQgICAgICBzZWFyY2g6ICcnIH07XG5cdCAgfSxcblx0XG5cdCAgY29tcHV0ZWQ6IHtcblx0ICAgIHRyYW5zbGF0aW9uOiBmdW5jdGlvbiB0cmFuc2xhdGlvbigpIHtcblx0ICAgICAgcmV0dXJuIF9EYXRhc291cmNlTGFuZ3VhZ2UyLmRlZmF1bHQudHJhbnNsYXRpb25zW3RoaXMubGFuZ3VhZ2VdO1xuXHQgICAgfSxcblx0XG5cdCAgICB0YWJsZUluZm86IF9EYXRhc291cmNlVXRpbHMyLmRlZmF1bHQudGFibGVJbmZvXG5cdCAgfSxcblx0ICBtZXRob2RzOiB7XG5cdCAgICBmZXRjaEZyb21PYmplY3Q6IF9EYXRhc291cmNlVXRpbHMyLmRlZmF1bHQuZmV0Y2hGcm9tT2JqZWN0LFxuXHQgICAgY2hhbmdlUGFnZTogX0RhdGFzb3VyY2VVdGlsczIuZGVmYXVsdC5jaGFuZ2VQYWdlLFxuXHQgICAgc2VsZWN0Um93OiBfRGF0YXNvdXJjZVV0aWxzMi5kZWZhdWx0LnNlbGVjdFJvdyxcblx0ICAgIHNlYXJjaGluZzogZnVuY3Rpb24gc2VhcmNoaW5nKCkge1xuXHQgICAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcblx0ICAgICAgdGhpcy5pbmRleFNlbGVjdGVkID0gLTE7XG5cdCAgICAgIHRoaXMuJGVtaXQoJ3NlYXJjaGluZycsIHRoaXMuc2VhcmNoKTtcblx0ICAgIH1cblx0ICB9LFxuXHQgIHdhdGNoOiB7XG5cdCAgICBwZXJwYWdlOiBmdW5jdGlvbiBwZXJwYWdlKCkge1xuXHQgICAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcblx0ICAgICAgdGhpcy5pbmRleFNlbGVjdGVkID0gLTE7XG5cdCAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHsgcGVycGFnZTogdGhpcy5wZXJwYWdlLCBwYWdlOiAxIH0pO1xuXHQgICAgfSxcblx0ICAgIHRhYmxlRGF0YTogZnVuY3Rpb24gdGFibGVEYXRhKCkge1xuXHQgICAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcblx0ICAgICAgdGhpcy5pbmRleFNlbGVjdGVkID0gLTE7XG5cdCAgICB9XG5cdCAgfVxuXHR9O1xuXG4vKioqLyB9LFxuLyogNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IHtcblx0ICBwcm9wczogWydwYWdlcycsICd0cmFuc2xhdGlvbiddLFxuXHQgIGNvbXB1dGVkOiB7XG5cdCAgICBpdGVtczogZnVuY3Rpb24gaXRlbXMoKSB7XG5cdCAgICAgIHZhciB0ZW1wID0gW10sXG5cdCAgICAgICAgICBib3R0b21MaW1pdCA9IHRoaXMucGFnZXMuY3VycmVudF9wYWdlIC0gMixcblx0ICAgICAgICAgIHRvcExpbWl0ID0gdGhpcy5wYWdlcy5jdXJyZW50X3BhZ2UgKyAyLFxuXHQgICAgICAgICAgc2hvd2luZyA9IDU7XG5cdFxuXHQgICAgICBpZiAoYm90dG9tTGltaXQgPD0gMCkge1xuXHQgICAgICAgIGJvdHRvbUxpbWl0ID0gMTtcblx0ICAgICAgICB0b3BMaW1pdCA9IDU7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGlmICh0b3BMaW1pdCA+PSB0aGlzLnBhZ2VzLmxhc3RfcGFnZSkge1xuXHQgICAgICAgIGJvdHRvbUxpbWl0ID0gdGhpcy5wYWdlcy5sYXN0X3BhZ2UgLSA0O1xuXHQgICAgICAgIHRvcExpbWl0ID0gdGhpcy5wYWdlcy5sYXN0X3BhZ2U7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGlmICh0aGlzLnBhZ2VzLmxhc3RfcGFnZSA8IDUpIHtcblx0ICAgICAgICBzaG93aW5nID0gdGhpcy5wYWdlcy5sYXN0X3BhZ2U7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGlmIChib3R0b21MaW1pdCA8PSAwKSB7XG5cdCAgICAgICAgYm90dG9tTGltaXQgPSAxO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAodGhpcy5wYWdlcy5sYXN0X3BhZ2UgPT0gMCB8fCB0aGlzLnBhZ2VzLmxhc3RfcGFnZSA9PSAxKSB7XG5cdCAgICAgICAgc2hvd2luZyA9IDE7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hvd2luZzsgaSsrKSB7XG5cdCAgICAgICAgdGVtcFtpXSA9IGkgKyBib3R0b21MaW1pdDtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgcmV0dXJuIHRlbXA7XG5cdCAgICB9XG5cdCAgfSxcblx0ICBtZXRob2RzOiB7XG5cdCAgICBmaXJzdFBhZ2U6IGZ1bmN0aW9uIGZpcnN0UGFnZSgpIHtcblx0ICAgICAgaWYgKHRoaXMucGFnZXMuY3VycmVudF9wYWdlICE9IDEpIHtcblx0ICAgICAgICB0aGlzLmNoYW5nZSgxKTtcblx0ICAgICAgfVxuXHQgICAgfSxcblx0ICAgIHByZXZpb3VzOiBmdW5jdGlvbiBwcmV2aW91cygpIHtcblx0ICAgICAgaWYgKHRoaXMucGFnZXMuY3VycmVudF9wYWdlICE9IDEpIHtcblx0ICAgICAgICB0aGlzLmNoYW5nZSgtLXRoaXMucGFnZXMuY3VycmVudF9wYWdlKTtcblx0ICAgICAgfVxuXHQgICAgfSxcblx0ICAgIGNoYW5nZTogZnVuY3Rpb24gY2hhbmdlKHBhZ2UpIHtcblx0ICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgcGFnZSk7XG5cdCAgICB9LFxuXHQgICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcblx0ICAgICAgaWYgKHRoaXMucGFnZXMuY3VycmVudF9wYWdlICE9IHRoaXMucGFnZXMubGFzdF9wYWdlKSB7XG5cdCAgICAgICAgdGhpcy5jaGFuZ2UoKyt0aGlzLnBhZ2VzLmN1cnJlbnRfcGFnZSk7XG5cdCAgICAgIH1cblx0ICAgIH0sXG5cdCAgICBsYXN0UGFnZTogZnVuY3Rpb24gbGFzdFBhZ2UocGFnZSkge1xuXHQgICAgICBpZiAodGhpcy5wYWdlcy5jdXJyZW50X3BhZ2UgIT0gdGhpcy5wYWdlcy5sYXN0X3BhZ2UpIHtcblx0ICAgICAgICB0aGlzLmNoYW5nZShwYWdlKTtcblx0ICAgICAgfVxuXHQgICAgfSxcblx0ICAgIGNoYW5nZVBhZ2VXaXRoS2V5Qm9hcmQ6IGZ1bmN0aW9uIGNoYW5nZVBhZ2VXaXRoS2V5Qm9hcmQoa2V5KSB7XG5cdCAgICAgIGlmIChrZXkgPT09ICdBcnJvd0xlZnQnKSB7XG5cdCAgICAgICAgdGhpcy5wcmV2aW91cygpO1xuXHQgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG5cdCAgICAgICAgdGhpcy5uZXh0KCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXHQgIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XG5cdCAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHRcblx0ICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChfcmVmKSB7XG5cdCAgICAgIHZhciBrZXkgPSBfcmVmLmtleTtcblx0ICAgICAgcmV0dXJuIF90aGlzLmNoYW5nZVBhZ2VXaXRoS2V5Qm9hcmQoa2V5KTtcblx0ICAgIH0pO1xuXHQgIH1cblx0fTtcblxuLyoqKi8gfSxcbi8qIDUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmRlZmF1bHQgPSB7XG5cdCAgdHJhbnNsYXRpb25zOiB7XG5cdCAgICAnZW4nOiB7XG5cdCAgICAgICd0YWJsZSc6IHtcblx0ICAgICAgICAnbGFiZWxfbGltaXRzJzogJ1Nob3cnLFxuXHQgICAgICAgICdsYWJlbF9zZWFyY2gnOiAnU2VhcmNoJyxcblx0ICAgICAgICAncGxhY2Vob2xkZXJfc2VhcmNoJzogJ1R5cGUgdG8gc2VhcmNoLi4nLFxuXHQgICAgICAgICdyZWNvcmRzX25vdF9mb3VuZCc6ICdObyByZWNvcmRzIGZvdW5kJ1xuXHQgICAgICB9LFxuXHQgICAgICAncGFnaW5hdGlvbic6IHtcblx0ICAgICAgICAnbGFiZWxfc2hvdyc6ICdTaG93aW5nJyxcblx0ICAgICAgICAnbGFiZWxfdG8nOiAndG8nLFxuXHQgICAgICAgICdsYWJlbF9vZic6ICdvZicsXG5cdCAgICAgICAgJ2xhYmVsX2VudHJpZXMnOiAnZW50cmllcycsXG5cdCAgICAgICAgJ2J0bl9maXJzdCc6ICdGaXJzdCcsXG5cdCAgICAgICAgJ2J0bl9sYXN0JzogJ0xhdGVzdCdcblx0ICAgICAgfVxuXHQgICAgfSxcblx0XG5cdCAgICAnZXMnOiB7XG5cdCAgICAgICd0YWJsZSc6IHtcblx0ICAgICAgICAnbGFiZWxfbGltaXRzJzogJ01vc3RyYXInLFxuXHQgICAgICAgICdsYWJlbF9zZWFyY2gnOiAnQnVzY2FyJyxcblx0ICAgICAgICAncGxhY2Vob2xkZXJfc2VhcmNoJzogJ0J1c2NhciAuLicsXG5cdCAgICAgICAgJ3JlY29yZHNfbm90X2ZvdW5kJzogJ05vIHNlIGVuY29udHJhcm9uIHJlZ2lzdHJvcy4nXG5cdCAgICAgIH0sXG5cdCAgICAgICdwYWdpbmF0aW9uJzoge1xuXHQgICAgICAgICdsYWJlbF9zaG93JzogJ01vc3RyYW5kbycsXG5cdCAgICAgICAgJ2xhYmVsX3RvJzogJ2EnLFxuXHQgICAgICAgICdsYWJlbF9vZic6ICdkZScsXG5cdCAgICAgICAgJ2xhYmVsX2VudHJpZXMnOiAncmVnaXN0cm9zJyxcblx0ICAgICAgICAnYnRuX2ZpcnN0JzogJ1ByaW1lcm8nLFxuXHQgICAgICAgICdidG5fbGFzdCc6ICfDmmx0aW1vJ1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXHR9O1xuXG4vKioqLyB9LFxuLyogNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IHtcblx0ICBmZXRjaEZyb21PYmplY3Q6IGZ1bmN0aW9uIGZldGNoRnJvbU9iamVjdChvYmosIGNvbHVtbiwgcmVuZGVyKSB7XG5cdCAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcblx0ICAgIHZhciBfaW5kZXggPSBjb2x1bW4uaW5kZXhPZignLicpO1xuXHQgICAgaWYgKF9pbmRleCA+IC0xKSB7XG5cdCAgICAgIHJldHVybiB0aGlzLmZldGNoRnJvbU9iamVjdChvYmpbY29sdW1uLnN1YnN0cmluZygwLCBfaW5kZXgpXSwgY29sdW1uLnN1YnN0cihfaW5kZXggKyAxKSk7XG5cdCAgICB9XG5cdCAgICBpZiAodHlwZW9mIHJlbmRlciAhPSAndW5kZWZpbmVkJykge1xuXHQgICAgICByZXR1cm4gcmVuZGVyKG9ialtjb2x1bW5dKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBvYmpbY29sdW1uXTtcblx0ICB9LFxuXHQgIGNoYW5nZVBhZ2U6IGZ1bmN0aW9uIGNoYW5nZVBhZ2UocGFnZSkge1xuXHQgICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XG5cdCAgICB0aGlzLmluZGV4U2VsZWN0ZWQgPSAtMTtcblx0ICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHsgcGVycGFnZTogdGhpcy5wZXJwYWdlLCBwYWdlOiBwYWdlIH0pO1xuXHQgIH0sXG5cdCAgc2VsZWN0Um93OiBmdW5jdGlvbiBzZWxlY3RSb3cocm93LCBpbmRleCkge1xuXHQgICAgaWYgKHRoaXMuaW5kZXhTZWxlY3RlZCA9PSBpbmRleCkge1xuXHQgICAgICB0aGlzLmluZGV4U2VsZWN0ZWQgPSAtMTtcblx0ICAgICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLmluZGV4U2VsZWN0ZWQgPSBpbmRleDtcblx0ICAgICAgdGhpcy5zZWxlY3RlZCA9IHtcblx0ICAgICAgICAncm93Jzogcm93LFxuXHQgICAgICAgICdpbmRleCc6IGluZGV4XG5cdCAgICAgIH07XG5cdCAgICB9XG5cdCAgfSxcblx0ICB0YWJsZUluZm86IGZ1bmN0aW9uIHRhYmxlSW5mbygpIHtcblx0ICAgIHZhciBsYWJlbF9zaG93ID0gdGhpcy50cmFuc2xhdGlvbi5wYWdpbmF0aW9uLmxhYmVsX3Nob3c7XG5cdCAgICB2YXIgZnJvbSA9IHRoaXMucGFnaW5hdGlvbi5mcm9tID09IG51bGwgPyAwIDogdGhpcy5wYWdpbmF0aW9uLmZyb207XG5cdCAgICB2YXIgbGFiZWxfdG8gPSB0aGlzLnRyYW5zbGF0aW9uLnBhZ2luYXRpb24ubGFiZWxfdG87XG5cdCAgICB2YXIgdG8gPSB0aGlzLnBhZ2luYXRpb24udG8gPT0gbnVsbCA/IDAgOiB0aGlzLnBhZ2luYXRpb24udG87XG5cdCAgICB2YXIgbGFiZWxfb2YgPSB0aGlzLnRyYW5zbGF0aW9uLnBhZ2luYXRpb24ubGFiZWxfb2Y7XG5cdCAgICB2YXIgdG90YWwgPSB0aGlzLnBhZ2luYXRpb24udG90YWw7XG5cdCAgICB2YXIgbGFiZWxfZW50cmllcyA9IHRoaXMudHJhbnNsYXRpb24ucGFnaW5hdGlvbi5sYWJlbF9lbnRyaWVzO1xuXHRcblx0ICAgIHJldHVybiBsYWJlbF9zaG93ICsgJyAnICsgZnJvbSArICcgJyArIGxhYmVsX3RvICsgJyAnICsgdG8gKyAnICcgKyBsYWJlbF9vZiArICcgJyArIHRvdGFsICsgJyAnICsgbGFiZWxfZW50cmllcztcblx0ICB9XG5cdH07XG5cbi8qKiovIH0sXG4vKiA3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKCk7XG5cdC8vIGltcG9ydHNcblx0XG5cdFxuXHQvLyBtb2R1bGVcblx0ZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLlZ1ZV9fcGFnaW5hdGlvbiBuYXYgLnBhZ2luYXRpb25bZGF0YS12LTQ0MTdjNDM2XSB7XFxuICBtYXJnaW46IDEwcHggMCAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIl0pO1xuXHRcblx0Ly8gZXhwb3J0c1xuXG5cbi8qKiovIH0sXG4vKiA4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKCk7XG5cdC8vIGltcG9ydHNcblx0XG5cdFxuXHQvLyBtb2R1bGVcblx0ZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnZ1ZS1kYXRhc291cmNlIC5WdWVfX3BhbmVsLWJvZHlbZGF0YS12LThkYjQzNDQyXSB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4udnVlLWRhdGFzb3VyY2UgLlZ1ZV9fcGFuZWwtYm9keSAuVnVlX190YWJsZVtkYXRhLXYtOGRiNDM0NDJdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLnZ1ZS1kYXRhc291cmNlIC5WdWVfX3BhbmVsLWZvb3RlciAuVnVlX19kYXRhc291cmNlX2FjdGlvbnNbZGF0YS12LThkYjQzNDQyXSB7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuXCIsIFwiXCJdKTtcblx0XG5cdC8vIGV4cG9ydHNcblxuXG4vKioqLyB9LFxuLyogOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG5cdHZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cdFxuXHQvKiBzdHlsZXMgKi9cblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNClcblx0XG5cdC8qIHNjcmlwdCAqL1xuXHRfX3Z1ZV9leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpXG5cdFxuXHQvKiB0ZW1wbGF0ZSAqL1xuXHR2YXIgX192dWVfdGVtcGxhdGVfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpXG5cdF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuXHRpZiAoXG5cdCAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG5cdCAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG5cdH1cblx0aWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuXHQgIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG5cdH1cblx0XG5cdF9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuXHRfX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblx0X192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtOGRiNDM0NDJcIlxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG4vKioqLyB9LFxuLyogMTAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xuXHR2YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXHRcblx0Lyogc3R5bGVzICovXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTMpXG5cdFxuXHQvKiBzY3JpcHQgKi9cblx0X192dWVfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KVxuXHRcblx0LyogdGVtcGxhdGUgKi9cblx0dmFyIF9fdnVlX3RlbXBsYXRlX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHRfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cblx0aWYgKFxuXHQgIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuXHQgIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxuXHR9XG5cdGlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcblx0ICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xuXHR9XG5cdFxuXHRfX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcblx0X192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cdF9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTQ0MTdjNDM2XCJcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuLyoqKi8gfSxcbi8qIDExICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuXHQgIHJldHVybiBfYygnZGl2Jywge1xuXHQgICAgc3RhdGljQ2xhc3M6IFwiVnVlX19wYWdpbmF0aW9uXCJcblx0ICB9LCBbX2MoJ25hdicsIHtcblx0ICAgIGF0dHJzOiB7XG5cdCAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIlBhZ2UgbmF2aWdhdGlvblwiXG5cdCAgICB9XG5cdCAgfSwgW19jKCd1bCcsIHtcblx0ICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb25cIlxuXHQgIH0sIFtfYygnbGknLCB7XG5cdCAgICBjbGFzczogKF92bS5wYWdlcy5jdXJyZW50X3BhZ2UgPT0gMSkgPyAnZGlzYWJsZWQnIDogJydcblx0ICB9LCBbX2MoJ2EnLCB7XG5cdCAgICBhdHRyczoge1xuXHQgICAgICBcImhyZWZcIjogXCIjXCJcblx0ICAgIH0sXG5cdCAgICBvbjoge1xuXHQgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuXHQgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgICAgICAgIF92bS5maXJzdFBhZ2UoJGV2ZW50KVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRyYW5zbGF0aW9uLmJ0bl9maXJzdCkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywge1xuXHQgICAgY2xhc3M6IChfdm0ucGFnZXMuY3VycmVudF9wYWdlID09IDEpID8gJ2Rpc2FibGVkJyA6ICcnXG5cdCAgfSwgW19jKCdhJywge1xuXHQgICAgYXR0cnM6IHtcblx0ICAgICAgXCJocmVmXCI6IFwiI1wiLFxuXHQgICAgICBcImFyaWEtbGFiZWxcIjogXCJQcmV2aW91c1wiXG5cdCAgICB9LFxuXHQgICAgb246IHtcblx0ICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcblx0ICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICAgICAgICBfdm0ucHJldmlvdXMoJGV2ZW50KVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSwgW19jKCdzcGFuJywge1xuXHQgICAgYXR0cnM6IHtcblx0ICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuXHQgICAgfVxuXHQgIH0sIFtfdm0uX3YoXCLCq1wiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uaXRlbXMpLCBmdW5jdGlvbihuKSB7XG5cdCAgICByZXR1cm4gX2MoJ2xpJywge1xuXHQgICAgICBjbGFzczogKF92bS5wYWdlcy5jdXJyZW50X3BhZ2UgPT0gbikgPyAnYWN0aXZlJyA6ICcnXG5cdCAgICB9LCBbX2MoJ2EnLCB7XG5cdCAgICAgIGF0dHJzOiB7XG5cdCAgICAgICAgXCJocmVmXCI6IFwiI1wiXG5cdCAgICAgIH0sXG5cdCAgICAgIG9uOiB7XG5cdCAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcblx0ICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgICAgICAgICAgX3ZtLmNoYW5nZShuKVxuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfSwgW192bS5fdihfdm0uX3MobikpXSldKVxuXHQgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCB7XG5cdCAgICBjbGFzczogKF92bS5wYWdlcy5jdXJyZW50X3BhZ2UgPT0gX3ZtLnBhZ2VzLmxhc3RfcGFnZSkgPyAnZGlzYWJsZWQnIDogJydcblx0ICB9LCBbX2MoJ2EnLCB7XG5cdCAgICBhdHRyczoge1xuXHQgICAgICBcImhyZWZcIjogXCIjXCIsXG5cdCAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIk5leHRcIlxuXHQgICAgfSxcblx0ICAgIG9uOiB7XG5cdCAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG5cdCAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdCAgICAgICAgX3ZtLm5leHQoJGV2ZW50KVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSwgW19jKCdzcGFuJywge1xuXHQgICAgYXR0cnM6IHtcblx0ICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuXHQgICAgfVxuXHQgIH0sIFtfdm0uX3YoXCLCu1wiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywge1xuXHQgICAgY2xhc3M6IChfdm0ucGFnZXMuY3VycmVudF9wYWdlID09IF92bS5wYWdlcy5sYXN0X3BhZ2UpID8gJ2Rpc2FibGVkJyA6ICcnXG5cdCAgfSwgW19jKCdhJywge1xuXHQgICAgYXR0cnM6IHtcblx0ICAgICAgXCJocmVmXCI6IFwiI1wiXG5cdCAgICB9LFxuXHQgICAgb246IHtcblx0ICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcblx0ICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICAgICAgICBfdm0ubGFzdFBhZ2UoX3ZtLnBhZ2VzLmxhc3RfcGFnZSlcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50cmFuc2xhdGlvbi5idG5fbGFzdCkpXSldKV0sIDIpXSldKVxuXHR9LHN0YXRpY1JlbmRlckZuczogW119XG5cbi8qKiovIH0sXG4vKiAxMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcblx0ICByZXR1cm4gX2MoJ2RpdicsIHtcblx0ICAgIHN0YXRpY0NsYXNzOiBcInZ1ZS1kYXRhc291cmNlXCJcblx0ICB9LCBbX2MoJ2RpdicsIHtcblx0ICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuXHQgIH0sIFtfYygnZGl2Jywge1xuXHQgICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiXG5cdCAgfSwgW19jKCdkaXYnLCB7XG5cdCAgICBzdGF0aWNDbGFzczogXCJmb3JtLWlubGluZVwiXG5cdCAgfSwgW19jKCdkaXYnLCB7XG5cdCAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHB1bGwtbGVmdFwiXG5cdCAgfSwgW19jKCdsYWJlbCcsIHtcblx0ICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWwgcHIyXCJcblx0ICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udHJhbnNsYXRpb24udGFibGUubGFiZWxfbGltaXRzKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlbGVjdCcsIHtcblx0ICAgIGRpcmVjdGl2ZXM6IFt7XG5cdCAgICAgIG5hbWU6IFwibW9kZWxcIixcblx0ICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG5cdCAgICAgIHZhbHVlOiAoX3ZtLnBlcnBhZ2UpLFxuXHQgICAgICBleHByZXNzaW9uOiBcInBlcnBhZ2VcIlxuXHQgICAgfV0sXG5cdCAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcblx0ICAgIGF0dHJzOiB7XG5cdCAgICAgIFwibnVtYmVyXCI6IFwiXCJcblx0ICAgIH0sXG5cdCAgICBvbjoge1xuXHQgICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcblx0ICAgICAgICBfdm0ucGVycGFnZSA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcblx0ICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG5cdCAgICAgICAgfSkubWFwKGZ1bmN0aW9uKG8pIHtcblx0ICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7XG5cdCAgICAgICAgICByZXR1cm4gdmFsXG5cdCAgICAgICAgfSlbMF1cblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sIF92bS5fbCgoX3ZtLmxpbWl0cyksIGZ1bmN0aW9uKGxpbWl0KSB7XG5cdCAgICByZXR1cm4gX2MoJ29wdGlvbicsIHtcblx0ICAgICAgZG9tUHJvcHM6IHtcblx0ICAgICAgICBcInZhbHVlXCI6IGxpbWl0XG5cdCAgICAgIH1cblx0ICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGxpbWl0KSldKVxuXHQgIH0pKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuXHQgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBwdWxsLXJpZ2h0XCJcblx0ICB9LCBbX2MoJ2lucHV0Jywge1xuXHQgICAgZGlyZWN0aXZlczogW3tcblx0ICAgICAgbmFtZTogXCJtb2RlbFwiLFxuXHQgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcblx0ICAgICAgdmFsdWU6IChfdm0uc2VhcmNoKSxcblx0ICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hcIlxuXHQgICAgfV0sXG5cdCAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcblx0ICAgIGF0dHJzOiB7XG5cdCAgICAgIFwidHlwZVwiOiBcInRleHRcIixcblx0ICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0udHJhbnNsYXRpb24udGFibGUucGxhY2Vob2xkZXJfc2VhcmNoXG5cdCAgICB9LFxuXHQgICAgZG9tUHJvcHM6IHtcblx0ICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnNlYXJjaClcblx0ICAgIH0sXG5cdCAgICBvbjoge1xuXHQgICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuXHQgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cblx0ICAgICAgICBfdm0uc2VhcmNoID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG5cdCAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcblx0ICAgIGF0dHJzOiB7XG5cdCAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG5cdCAgICB9LFxuXHQgICAgb246IHtcblx0ICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcblx0ICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICAgICAgICBfdm0uc2VhcmNoaW5nKCRldmVudClcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50cmFuc2xhdGlvbi50YWJsZS5sYWJlbF9zZWFyY2gpICsgXCJcXG4gICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcblx0ICAgIHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCJcblx0ICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG5cdCAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1ib2R5IFZ1ZV9fcGFuZWwtYm9keVwiXG5cdCAgfSwgW19jKCd0YWJsZScsIHtcblx0ICAgIHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLXN0cmlwZWQgVnVlX190YWJsZVwiXG5cdCAgfSwgW19jKCd0aGVhZCcsIFtfYygndHInLCBfdm0uX2woKF92bS5jb2x1bW5zKSwgZnVuY3Rpb24oY29sdW1uKSB7XG5cdCAgICByZXR1cm4gX2MoJ3RoJywgW192bS5fdihfdm0uX3MoY29sdW1uLm5hbWUpKV0pXG5cdCAgfSkpXSksIF92bS5fdihcIiBcIiksIF9jKCd0Ym9keScsIFsoX3ZtLnBhZ2luYXRpb24udG90YWwgPT0gMCkgPyBfYygndHInLCBbX2MoJ3RkJywge1xuXHQgICAgYXR0cnM6IHtcblx0ICAgICAgXCJjb2xzcGFuXCI6IF92bS5jb2x1bW5zLmxlbmd0aFxuXHQgICAgfVxuXHQgIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50cmFuc2xhdGlvbi50YWJsZS5yZWNvcmRzX25vdF9mb3VuZCkpXSldKSA6IF92bS5fbCgoX3ZtLnRhYmxlRGF0YSksIGZ1bmN0aW9uKHJvdywgaW5kZXgpIHtcblx0ICAgIHJldHVybiBfYygndHInLCB7XG5cdCAgICAgIGNsYXNzOiB7XG5cdCAgICAgICAgJ3N1Y2Nlc3MnOiAoaW5kZXggPT0gX3ZtLmluZGV4U2VsZWN0ZWQpXG5cdCAgICAgIH0sXG5cdCAgICAgIG9uOiB7XG5cdCAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcblx0ICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgICAgICAgICAgX3ZtLnNlbGVjdFJvdyhyb3csIGluZGV4KVxuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfSwgX3ZtLl9sKChfdm0uY29sdW1ucyksIGZ1bmN0aW9uKGspIHtcblx0ICAgICAgcmV0dXJuIF9jKCd0ZCcsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uZmV0Y2hGcm9tT2JqZWN0KHJvdywgay5rZXksIGsucmVuZGVyKSkgKyBcIlxcbiAgICAgICAgICBcIildKVxuXHQgICAgfSkpXG5cdCAgfSksIF92bS5fdihcIiBcIiksIF9jKCd0cicsIFtfYygndGQnLCB7XG5cdCAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuXHQgICAgYXR0cnM6IHtcblx0ICAgICAgXCJjb2xzcGFuXCI6IF92bS5jb2x1bW5zLmxlbmd0aFxuXHQgICAgfVxuXHQgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udGFibGVJbmZvKSArIFwiXFxuICAgICAgICAgIFwiKV0pXSldLCAyKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG5cdCAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1mb290ZXIgVnVlX19wYW5lbC1mb290ZXJcIlxuXHQgIH0sIFtfYygnZGl2Jywge1xuXHQgICAgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0XCJcblx0ICB9LCBbX2MoJ2RpdicsIHtcblx0ICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1ncm91cCBWdWVfX2RhdGFzb3VyY2VfYWN0aW9uc1wiXG5cdCAgfSwgX3ZtLl9sKChfdm0uYWN0aW9ucyksIGZ1bmN0aW9uKGJ0bikge1xuXHQgICAgcmV0dXJuIF9jKCdidXR0b24nLCB7XG5cdCAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuXHQgICAgICBjbGFzczogYnRuLmNsYXNzLFxuXHQgICAgICBhdHRyczoge1xuXHQgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG5cdCAgICAgIH0sXG5cdCAgICAgIG9uOiB7XG5cdCAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcblx0ICAgICAgICAgIGJ0bi5ldmVudCgkZXZlbnQsIF92bS5zZWxlY3RlZClcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH0sIFsoYnRuLmljb24pID8gX2MoJ2knLCB7XG5cdCAgICAgIHN0YXRpY0NsYXNzOiBcInByMVwiLFxuXHQgICAgICBjbGFzczogYnRuLmljb25cblx0ICAgIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKGJ0bi50ZXh0KSArIFwiXFxuICAgICAgICAgIFwiKV0pXG5cdCAgfSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG5cdCAgICBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0XCJcblx0ICB9LCBbX2MoJ3BhZ2luYXRpb24nLCB7XG5cdCAgICBhdHRyczoge1xuXHQgICAgICBcInBhZ2VzXCI6IF92bS5wYWdpbmF0aW9uLFxuXHQgICAgICBcInRyYW5zbGF0aW9uXCI6IF92bS50cmFuc2xhdGlvbi5wYWdpbmF0aW9uXG5cdCAgICB9LFxuXHQgICAgb246IHtcblx0ICAgICAgXCJjaGFuZ2VcIjogX3ZtLmNoYW5nZVBhZ2Vcblx0ICAgIH1cblx0ICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuXHQgICAgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIlxuXHQgIH0pXSldKV0pXG5cdH0sc3RhdGljUmVuZGVyRm5zOiBbXX1cblxuLyoqKi8gfSxcbi8qIDEzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXHRcblx0Ly8gbG9hZCB0aGUgc3R5bGVzXG5cdHZhciBjb250ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblx0aWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cdC8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cblx0dmFyIHVwZGF0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMikoY29udGVudCwge30pO1xuXHRpZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcblx0Ly8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuXHRpZihmYWxzZSkge1xuXHRcdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdFx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDQxN2M0MzYmc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1BhZ2luYXRpb24udnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ0MTdjNDM2JnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9QYWdpbmF0aW9uLnZ1ZVwiKTtcblx0XHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdFx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG5cdH1cblxuLyoqKi8gfSxcbi8qIDE0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXHRcblx0Ly8gbG9hZCB0aGUgc3R5bGVzXG5cdHZhciBjb250ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblx0aWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cdC8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cblx0dmFyIHVwZGF0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMikoY29udGVudCwge30pO1xuXHRpZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcblx0Ly8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuXHRpZihmYWxzZSkge1xuXHRcdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdFx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOGRiNDM0NDImc2NvcGVkPXRydWUhLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0RhdGFzb3VyY2UudnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LThkYjQzNDQyJnNjb3BlZD10cnVlIS4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXRhc291cmNlLnZ1ZVwiKTtcblx0XHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdFx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG5cdH1cblxuLyoqKi8gfVxuLyoqKioqKi8gXSlcbn0pO1xuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dnVlLWRhdGFzb3VyY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1kYXRhc291cmNlL2Rpc3QvdnVlLWRhdGFzb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDIwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNThhMjY0NWMmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VzZXJMaXN0LnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Vc2VyTGlzdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01OGEyNjQ1YyEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Vc2VyTGlzdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtNThhMjY0NWNcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9nZXJtYW4vU2l0ZXMvc29tZWxpbmUtc3RhcnRlci9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFVzZXJMaXN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01OGEyNjQ1Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU4YTI2NDVjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTU5NDdkYjM0JnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Vc2VyTGlzdEdyb3VwSXRlbS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVXNlckxpc3RHcm91cEl0ZW0udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNTk0N2RiMzQhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVXNlckxpc3RHcm91cEl0ZW0udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTU5NDdkYjM0XCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvZ2VybWFuL1NpdGVzL3NvbWVsaW5lLXN0YXJ0ZXIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdEdyb3VwSXRlbS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBVc2VyTGlzdEdyb3VwSXRlbS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTk0N2RiMzRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01OTQ3ZGIzNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0R3JvdXBJdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfdm0uX20oMClcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1oZWFkaW5nXCJcbiAgfSwgW192bS5fdihcIkV4YW1wbGUgQ29tcG9uZW50XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtYm9keVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIEknbSBhbiBleGFtcGxlIGNvbXBvbmVudCFcXG4gICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWFjZjYwYTQ4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1hY2Y2MGE0OCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NWM1ZTM1OCZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXV0b3NpemUtdGV4dGFyZWEudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjMxMmNhNTllXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NWM1ZTM1OCZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXV0b3NpemUtdGV4dGFyZWEudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NWM1ZTM1OCZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXV0b3NpemUtdGV4dGFyZWEudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NWM1ZTM1OCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3cmFwcGVyLW1kXCJcbiAgfSwgW19jKCdoMScsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgndXNlci51c2VycycpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkYXRhc291cmNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhYmxlLWRhdGFcIjogX3ZtLml0ZW1zLFxuICAgICAgXCJsYW5ndWFnZVwiOiBcImVuXCIsXG4gICAgICBcImNvbHVtbnNcIjogX3ZtLmNvbHVtbnMsXG4gICAgICBcInBhZ2luYXRpb25cIjogX3ZtLnBhZ2luYXRpb25cbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBfdm0uY2hhbmdlUGFnZSxcbiAgICAgIFwic2VhcmNoaW5nXCI6IF92bS5vblNlYXJjaFxuICAgIH1cbiAgfSldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTU4YTI2NDVjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01OGEyNjQ1YyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cC1pdGVtIGNsZWFyZml4XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgIH1cbiAgfSwgW192bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2xlYXJcIlxuICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5uYW1lKSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnQgdGh1bWItc20gYXZhdGFyIG0tclwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBcImh0dHBzOi8vd3d3LnNvbWVsaW5lLmNvbS9lbi91c2VyL3Byb2ZpbGVwaG90by9vcmlnaW4vZjRjY2M0ZGU3OGMwM2ZlMmMzMjE0OTBjZjZmODE1N2Y4MjVlNGM0Zi5qcGdcIixcbiAgICAgIFwiYWx0XCI6IFwiLi4uXCJcbiAgICB9XG4gIH0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01OTQ3ZGIzNFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNTk0N2RiMzQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3RHcm91cEl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSAyMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNThhMjY0NWMmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VzZXJMaXN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0NGI4ZTE3MlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNThhMjY0NWMmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VzZXJMaXN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNThhMjY0NWMmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VzZXJMaXN0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNThhMjY0NWMmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTk0N2RiMzQmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VzZXJMaXN0R3JvdXBJdGVtLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0MmU2M2I2YVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTk0N2RiMzQmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VzZXJMaXN0R3JvdXBJdGVtLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTk0N2RiMzQmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VzZXJMaXN0R3JvdXBJdGVtLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTk0N2RiMzQmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0R3JvdXBJdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxudmFyIGxpc3RUb1N0eWxlcyA9IHJlcXVpcmUoJy4vbGlzdFRvU3R5bGVzJylcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7IGNzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHBhcnQuaWQgPSBwYXJlbnRJZCArICc6MCdcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0LmlkID0gcGFyZW50SWQgKyAnOicgKyBuZXdTdHlsZXNbaWRdLnBhcnRzLmxlbmd0aFxuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS12dWUtc3NyLWlkfj1cIicgKyBvYmouaWQgKyAnXCJdJylcbiAgdmFyIGhhc1NTUiA9IHN0eWxlRWxlbWVudCAhPSBudWxsXG5cbiAgLy8gaWYgaW4gcHJvZHVjdGlvbiBtb2RlIGFuZCBzdHlsZSBpcyBhbHJlYWR5IHByb3ZpZGVkIGJ5IFNTUixcbiAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gIGlmIChoYXNTU1IgJiYgaXNQcm9kdWN0aW9uKSB7XG4gICAgcmV0dXJuIG5vb3BcbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gc3R5bGVFbGVtZW50IHx8IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKCFoYXNTU1IpIHtcbiAgICB1cGRhdGUob2JqKVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5FeGFtcGxlIENvbXBvbmVudDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBJJ20gYW4gZXhhbXBsZSBjb21wb25lbnQhXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IG1vdW50ZWQuJylcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEV4YW1wbGUudnVlPzE1NWFjMjllIiwiPHRlbXBsYXRlPlxuXG4gICAgPHRleHRhcmVhPjwvdGV4dGFyZWE+XG5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBhdXRvc2l6ZSBmcm9tICdhdXRvc2l6ZSdcbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IFsncmVzaXplZCddLFxuICAgICAgICBtb3VudGVkICgpIHtcbiAgICAgICAgICAgIGF1dG9zaXplKHRoaXMuJGVsKVxuICAgICAgICAgICAgaWYgKHRoaXMucmVzaXplZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudFt0aGlzLnJlc2l6ZWRdKHRoaXMuJGVsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGF1dG9zaXplLXRleHRhcmVhLnZ1ZT9hNzRlZDkzYyIsIndpbmRvdy5fID0gcmVxdWlyZSgnbG9kYXNoJyk7XG53aW5kb3cubW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG5cbi8qKlxuICogV2UnbGwgbG9hZCBqUXVlcnkgYW5kIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbiB3aGljaCBwcm92aWRlcyBzdXBwb3J0XG4gKiBmb3IgSmF2YVNjcmlwdCBiYXNlZCBCb290c3RyYXAgZmVhdHVyZXMgc3VjaCBhcyBtb2RhbHMgYW5kIHRhYnMuIFRoaXNcbiAqIGNvZGUgbWF5IGJlIG1vZGlmaWVkIHRvIGZpdCB0aGUgc3BlY2lmaWMgbmVlZHMgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAqL1xuXG4vKipcbiAqIEBXQVJOSU5HOiBUaGVzZSB0d28gbGlicmFyaWVzIGFyZSBpbmNsdWRlZCBpbiB0aGVtZS5qcywgc28gbm8gbmVlZCB0byBpbmNsdWRlIGFnYWluLlxuICovXG4vLyB3aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcbi8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC1zYXNzJyk7XG5cbi8qKlxuICogVnVlIGlzIGEgbW9kZXJuIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgYnVpbGRpbmcgaW50ZXJhY3RpdmUgd2ViIGludGVyZmFjZXNcbiAqIHVzaW5nIHJlYWN0aXZlIGRhdGEgYmluZGluZyBhbmQgcmV1c2FibGUgY29tcG9uZW50cy4gVnVlJ3MgQVBJIGlzIGNsZWFuXG4gKiBhbmQgc2ltcGxlLCBsZWF2aW5nIHlvdSB0byBmb2N1cyBvbiBidWlsZGluZyB5b3VyIG5leHQgZ3JlYXQgcHJvamVjdC5cbiAqL1xuXG53aW5kb3cuVnVlID0gcmVxdWlyZSgndnVlJyk7XG53aW5kb3cuVnVleCA9IHJlcXVpcmUoJ3Z1ZXgnKTtcbndpbmRvdy5WdWVSb3V0ZXIgPSByZXF1aXJlKCd2dWUtcm91dGVyJyk7XG53aW5kb3cuVnVlSTE4biA9IHJlcXVpcmUoJ3Z1ZS1pMThuJyk7XG5yZXF1aXJlKCcuL2ZpbHRlcnMvaGVscGVycycpO1xuXG5WdWUudXNlKFZ1ZXgpO1xuVnVlLnVzZShWdWVSb3V0ZXIpO1xuVnVlLnVzZShWdWVJMThuKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uID0ge1xuICAgICdYLUNTUkYtVE9LRU4nOiB3aW5kb3cuTGFyYXZlbC5jc3JmVG9rZW4sXG4gICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBTb21lbGluZS5sb2NhbGVcbn07XG5cblZ1ZS5wcm90b3R5cGUuJGh0dHAgPSB3aW5kb3cuYXhpb3M7XG5cbnZhciBhcGlBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogJy9hcGkvJyxcbiAgICB0aW1lb3V0OiAxMDAwMCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24veC5zb21lbGluZS52MStqc29uJyxcbiAgICB9XG59KTtcblZ1ZS5wcm90b3R5cGUuJGFwaSA9IGFwaUF4aW9zO1xuXG4vKipcbiAqIEVjaG8gZXhwb3NlcyBhbiBleHByZXNzaXZlIEFQSSBmb3Igc3Vic2NyaWJpbmcgdG8gY2hhbm5lbHMgYW5kIGxpc3RlbmluZ1xuICogZm9yIGV2ZW50cyB0aGF0IGFyZSBicm9hZGNhc3QgYnkgTGFyYXZlbC4gRWNobyBhbmQgZXZlbnQgYnJvYWRjYXN0aW5nXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXG4gKi9cblxuLy8gaW1wb3J0IEVjaG8gZnJvbSBcImxhcmF2ZWwtZWNob1wiXG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6ICd5b3VyLXB1c2hlci1rZXknXG4vLyB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IExpYmVybiBvbiAyNi81LzE2LlxuICovXG5leHBvcnQgZGVmYXVsdHtcbiAgICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kaXJlY3RpdmVzL2ZvY3VzLmpzIiwiLyoqXG4gKiBDaGFuZ2VzIHZhbHVlIHRvIHBhc3QgdGVuc2UuXG4gKiBTaW1wbGUgZmlsdGVyIGRvZXMgbm90IHN1cHBvcnQgaXJyZWd1bGFyIHZlcmJzIHN1Y2ggYXMgZWF0LWF0ZSwgZmx5LWZsZXcsIGV0Yy5cbiAqIGh0dHA6Ly9qc2ZpZGRsZS5uZXQvYnJ5YW5fay8weGN6bWUyci9cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHN0cmluZy5cbiAqL1xuVnVlLmZpbHRlcigncGFzdC10ZW5zZScsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgLy8gU2xpZ2h0bHkgZm9sbG93cyBodHRwOi8vd3d3Lm94Zm9yZGRpY3Rpb25hcmllcy5jb20vdXMvd29yZHMvdmVyYi10ZW5zZXMtYWRkaW5nLWVkLWFuZC1pbmdcbiAgICB2YXIgdm93ZWxzID0gWydhJywgJ2UnLCAnaScsICdvJywgJ3UnXTtcbiAgICBpZighdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsYXN0ID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMSksXG4gICAgICAgIHNlY29uZExhc3QgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnN1YnN0cih2YWx1ZS5sZW5ndGggLSAyLCAxKSxcbiAgICAgICAgdGhpcmRMYXN0ID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMywgMSksXG4gICAgICAgIGxhc3RUd28gPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnN1YnN0cih2YWx1ZS5sZW5ndGggLSAyKSxcbiAgICAgICAgbGFzdFRocmVlID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMyksXG4gICAgICAgIGluQXJyYXkgPSBmdW5jdGlvbihhciwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBhci5pbmRleE9mKHZhbHVlKSAhPSAtMVxuICAgICAgICB9O1xuXG4gICAgLy8gcGFydGljaXBsZSBvciBhbHJlYWR5IHBhc3QgdGVuc2UsIGRvbid0IHdhbnRcbiAgICBpZihsYXN0VGhyZWUgPT09ICdpbmcnIHx8IGxhc3RUd28gPT09ICdlZCcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8vIEVuZHMgaW4gJ2UnLCBzaW1wbHkgYWRkIHRoZSAnZCdcbiAgICBpZihsYXN0ID09PSAnZScpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICsgJ2QnO1xuICAgIH1cblxuICAgIC8vIEVuZHMgaW4gJ2MnLCBhZGQgdGhlICdrZWQnXG4gICAgaWYobGFzdCA9PT0gJ2MnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSArICdrZWQnO1xuICAgIH1cblxuICAgIC8vIEVuZHMgd2l0aCBjb25zb25hbnQsIHZvd2VsLCBjb25zb25hbnQuIEknbSBzaW1wbGUsIGRvdWJsZSBjb25zb25hbnQgYW5kIGFkZCAnZWQnXG4gICAgaWYoIWluQXJyYXkodm93ZWxzLCB0aGlyZExhc3QpICYmIGluQXJyYXkodm93ZWxzLCBzZWNvbmRMYXN0KSAmJiAhaW5BcnJheSh2b3dlbHMsIGxhc3QpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSArIGxhc3QgKyAnZWQnO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZSArICdlZCc7XG59KTtcblxuLyoqXG4gKiBWdWUgZmlsdGVyIHRvIGNvbnZlcnQgYSBzbHVnIHRvIGEgbW9yZSBodW1hbiBmcmllbmRseSBmb3JtLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgc3RyaW5nLlxuICovXG5WdWUuZmlsdGVyKCdodW1hbmFibGUnLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB3b3JkcyA9IHZhbHVlLnNwbGl0KC9bLV9dKy9nKTtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGZvcih2YXIgaT0wOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGxldHRlciA9IHdvcmRzW2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICByZXN1bHRzLnB1c2gobGV0dGVyICsgd29yZHNbaV0uc2xpY2UoMSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cy5qb2luKCcgJyk7XG59KTtcblxuLyoqXG4gKiBWdWUgZmlsdGVyIHRvIGNvbnZlcnQgdGhlIGdpdmVuIHZhbHVlIHRvIHBlcmNlbnQuXG4gKiBodHRwOi8vanNmaWRkbGUubmV0L2JyeWFuX2svcWF1ZjNxeWgvXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlICAgIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKiBAcGFyYW0ge051bWJlcn0gZGVjaW1hbHMgVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcy5cbiAqL1xuVnVlLmZpbHRlcigncGVyY2VudGFnZScsIGZ1bmN0aW9uKHZhbHVlLCBkZWNpbWFscykge1xuICAgIGlmKCF2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IDA7XG4gICAgfVxuXG4gICAgaWYoIWRlY2ltYWxzKSB7XG4gICAgICAgIGRlY2ltYWxzID0gMDtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlICogMTAwO1xuICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAqIE1hdGgucG93KDEwLCBkZWNpbWFscykpIC8gTWF0aC5wb3coMTAsIGRlY2ltYWxzKTtcbiAgICB2YWx1ZSA9IHZhbHVlICsgJyUnO1xuICAgIHJldHVybiB2YWx1ZTtcbn0pO1xuXG5cbi8qKlxuICogVnVlIGZpbHRlciB0byByb3VuZCB0aGUgZGVjaW1hbCB0byB0aGUgZ2l2ZW4gcGxhY2UuXG4gKiBodHRwOi8vanNmaWRkbGUubmV0L2JyeWFuX2svM292YTE3eTkvXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlICAgIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKiBAcGFyYW0ge051bWJlcn0gZGVjaW1hbHMgVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcy5cbiAqL1xuVnVlLmZpbHRlcigncm91bmQnLCBmdW5jdGlvbih2YWx1ZSwgZGVjaW1hbHMpIHtcbiAgICBpZighdmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSAwO1xuICAgIH1cblxuICAgIGlmKCFkZWNpbWFscykge1xuICAgICAgICBkZWNpbWFscyA9IDA7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlICogTWF0aC5wb3coMTAsIGRlY2ltYWxzKSkgLyBNYXRoLnBvdygxMCwgZGVjaW1hbHMpO1xuICAgIHJldHVybiB2YWx1ZTtcbn0pO1xuXG5cbi8qKlxuICogVnVlIGZpbHRlciB0byBjb252ZXJ0IHRoZSBnaXZlbiB2YWx1ZSB0byB3aG9sZSBkb2xsYXJzLCBubyBjaGFuZ2UuXG4gKiBodHRwOi8vanNmaWRkbGUubmV0L2JyeWFuX2svMnQ2YnFxZmMvXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKi9cblZ1ZS5maWx0ZXIoJ25vLWNoYW5nZScsIGZ1bmN0aW9uKHZhbHVlLCBzeW1ib2wpIHtcbiAgICBpZighdmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSAwO1xuICAgIH1cblxuICAgIGlmKCFzeW1ib2wpIHtcbiAgICAgICAgc3ltYm9sID0gJyQnO1xuICAgIH1cblxuICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpLnNwbGl0KCcuJylbMF07XG4gICAgcmV0dXJuIHN5bWJvbCArIHZhbHVlO1xufSk7XG5cbi8qKlxuICogVnVlIGZpbHRlciB0byBtYWtlIGEgc2ltcGxlIHRpbWVzdGFtcCBmb3IgYW4gSVNPIGRhdGUuXG4gKiBodHRwOi8vanNmaWRkbGUubmV0L2JyeWFuX2svNDRrcXRwZWcvXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKi9cblZ1ZS5maWx0ZXIoJ3RpbWVzdGFtcCcsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHBhcnRzID0gdmFsdWUuc3BsaXQoJyAnKTtcbiAgICB2YXIgZGF0ZSA9IHBhcnRzWzBdO1xuICAgIHZhciB0aW1lID0gcGFydHNbMV07XG5cbiAgICBkYXRlID0gZGF0ZS5zcGxpdCgnLScpO1xuICAgIHRpbWUgPSB0aW1lLnNwbGl0KCc6Jyk7XG5cbiAgICBpZihwYXJzZUludCh0aW1lWzBdLCAxMCkgPiAxMikge1xuICAgICAgICB2YXIgaG91ciA9IHBhcnNlSW50KHRpbWVbMF0sIDEwKSAlIDEyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGhvdXIgPSBwYXJzZUludCh0aW1lWzBdLCAxMCk7XG4gICAgfVxuXG4gICAgaG91ciA9IGhvdXIgPCAxMCA/ICcwJyArIGhvdXIgOiBob3VyO1xuXG4gICAgcmV0dXJuICdbJyArIGRhdGVbMV0gKyAnLycgKyBkYXRlWzJdICsgJyAnICsgaG91ciArICc6JyArIHRpbWVbMV0gKyAnXSc7XG59KTtcblxuLyoqXG4gKiBWdWUgZmlsdGVyIHRvIHRydW5jYXRlIGEgc3RyaW5nIHRvIHRoZSBzcGVjaWZpZWQgbGVuZ3RoLlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKi9cblZ1ZS5maWx0ZXIoJ3RydW5jYXRlJywgZnVuY3Rpb24odmFsdWUsIGxlbmd0aCkge1xuICAgIGlmKHZhbHVlLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgbGVuZ3RoID0gbGVuZ3RoIC0gMztcblxuICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcoMCwgbGVuZ3RoKSArICcuLi4nO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9maWx0ZXJzL2hlbHBlcnMuanMiXSwic291cmNlUm9vdCI6IiJ9