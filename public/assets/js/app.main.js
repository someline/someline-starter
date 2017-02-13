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
Vue.component('sl-user-list', __webpack_require__(200));

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_datasource__ = __webpack_require__(199);
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

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"UserList.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 199:
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

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(232)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(171),
  /* template */
  __webpack_require__(219),
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

/***/ 219:
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

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
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

/***/ 238:
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

},[238]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzP2Q0ZjMqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZmlsdGVycy9ubDJici5qcz82ZTczKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9idXMuanM/MTgzZioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvanF1ZXJ5LmpzP2RlZTEqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3N0b3JlLmpzP2EzZTUqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3Rvb2xzLmpzPzJlMDAqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3VzZXIuanM/OTNiMSoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9sZXNzL2FwcC5sZXNzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvbGVzcy9jb25zb2xlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9sZXNzL21vYmlsZS5sZXNzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWU/OGQyZioqIiwid2VicGFjazovLy9Vc2VyTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlPzBiZmUqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWU/MzhjMioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdC52dWU/ZmZmZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1kYXRhc291cmNlL2Rpc3QvdnVlLWRhdGFzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcz9kYTA0KiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlP2Y2MzkqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRXhhbXBsZS52dWU/MjMyMSoqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3QudnVlPzhkZTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZT8wNTI5KioiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanM/ZTZhYyoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdC52dWU/Nzk2YyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcz82YjJiKiIsIndlYnBhY2s6Ly8vRXhhbXBsZS52dWU/MzQ0YyoiLCJ3ZWJwYWNrOi8vL2F1dG9zaXplLXRleHRhcmVhLnZ1ZT8yOTUzKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcz81OTExKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2RpcmVjdGl2ZXMvZm9jdXMuanM/ZGI1ZCoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9maWx0ZXJzL2hlbHBlcnMuanM/OThmNCoiXSwibmFtZXMiOlsicmVhZCIsInZhbCIsInJlcGxhY2UiLCJSZWdFeHAiLCJjb21wdXRlZCIsImJ1cyIsIndpbmRvdyIsIm1ldGhvZHMiLCJldmVudEVtaXQiLCJuYW1lIiwiZGF0YSIsIiRlbWl0IiwiZXZlbnRPbiIsImNhbGxiYWNrIiwiJG9uIiwiZXZlbnRPZmYiLCIkb2ZmIiwiQXBwSGVhZGVyU2V0VGl0bGUiLCJ0aXRsZSIsIkFwcFRhYkJhclNldFNob3dBcHBUYWJCYXIiLCJpc1Nob3ciLCJBcHBUYWJCYXJTZWxlY3RUYWJCYXJJdGVtIiwiaW5kZXgiLCJBcHBIZWFkZXJTZXROYXZCdXR0b25MZWZ0IiwiY2xhc3NOYW1lIiwiQXBwSGVhZGVyU2V0TmF2QnV0dG9uUmlnaHQiLCJzY3JvbGxUb0JvdHRvbSIsInNlbGVjdG9yIiwiYW5pbWF0ZWQiLCJhbmltYXRlVGltZSIsIiRlbGVtZW50IiwiJCIsInNjcm9sbEhlaWdodCIsInByb3AiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidnVleFN0b3JlIiwic3RvcmVDb21taXQiLCJjb21taXQiLCJzdG9yZURpc3BhdGNoIiwiZGlzcGF0Y2giLCJub3dUaW1lc3RhbXAiLCJtb21lbnQiLCJ1bml4IiwibW9tZW50RnJvbURhdGVUaW1lIiwiZGF0ZVRpbWUiLCJkYXRlVGltZVRvVGltZXN0YW1wIiwidXJsIiwicGF0aCIsInN1YnN0cmluZyIsImJhc2VVcmwiLCJyZWRpcmVjdFRvVXJsIiwibG9jYXRpb24iLCJocmVmIiwicmVkaXJlY3RUb1VybEZyb21CYXNlVXJsIiwicmVsb2FkUGFnZSIsIm9iamVjdFRvRm9ybURhdGEiLCJpdGVtIiwiZm9ybV9kYXRhIiwiRm9ybURhdGEiLCJrZXkiLCJhcHBlbmQiLCJpc0VtcHR5T2JqZWN0Iiwib2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImlzTW9iaWxlIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJyZXF1aXJlIiwiVnVlIiwiZGlyZWN0aXZlIiwiZmlsdGVyIiwibWl4aW4iLCJjb21wb25lbnQiLCJWdWV4IiwiU3RvcmUiLCJzdGF0ZSIsInBsYXRmb3JtIiwiY291bnQiLCJtdXRhdGlvbnMiLCJpbmNyZW1lbnQiLCJhcHAiLCJlbCIsIm1zZyIsIndhdGNoIiwiZXZlbnRzIiwiY3JlYXRlZCIsImNvbnNvbGUiLCJsb2ciLCJpbml0TG9jYWxlIiwibW91bnRlZCIsInRoYXQiLCJsYW5nIiwibG9jYWxlIiwiY29uZmlnIiwiU29tZWxpbmUiLCJsb2NhbGVzIiwiY3VycmVudFVzZXJJZCIsInVzZXIiLCJ1c2VyX2lkIiwiXyIsIlZ1ZVJvdXRlciIsIlZ1ZUkxOG4iLCJ1c2UiLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsIkxhcmF2ZWwiLCJjc3JmVG9rZW4iLCJwcm90b3R5cGUiLCIkaHR0cCIsImFwaUF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInRpbWVvdXQiLCIkYXBpIiwiYmluZCIsImZvY3VzIiwidmFsdWUiLCJ2b3dlbHMiLCJsYXN0IiwidG9Mb3dlckNhc2UiLCJzdWJzdHIiLCJzZWNvbmRMYXN0IiwidGhpcmRMYXN0IiwibGFzdFR3byIsImxhc3RUaHJlZSIsImluQXJyYXkiLCJhciIsImluZGV4T2YiLCJ3b3JkcyIsInNwbGl0IiwicmVzdWx0cyIsImkiLCJsZXR0ZXIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInB1c2giLCJzbGljZSIsImpvaW4iLCJkZWNpbWFscyIsIk1hdGgiLCJyb3VuZCIsInBvdyIsInN5bWJvbCIsInRvU3RyaW5nIiwicGFydHMiLCJkYXRlIiwidGltZSIsInBhcnNlSW50IiwiaG91ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUFLakIsS0FBTCxDQUFXLEdBQVgsQ0FBUDs7QUFFQSxRQUFHa0IsU0FBU0QsS0FBSyxDQUFMLENBQVQsRUFBa0IsRUFBbEIsSUFBd0IsRUFBM0IsRUFBK0I7QUFDM0IsWUFBSUUsT0FBT0QsU0FBU0QsS0FBSyxDQUFMLENBQVQsRUFBa0IsRUFBbEIsSUFBd0IsRUFBbkM7QUFDSCxLQUZELE1BR0s7QUFDRCxZQUFJRSxPQUFPRCxTQUFTRCxLQUFLLENBQUwsQ0FBVCxFQUFrQixFQUFsQixDQUFYO0FBQ0g7O0FBRURFLFdBQU9BLE9BQU8sRUFBUCxHQUFZLE1BQU1BLElBQWxCLEdBQXlCQSxJQUFoQzs7QUFFQSxXQUFPLE1BQU1ILEtBQUssQ0FBTCxDQUFOLEdBQWdCLEdBQWhCLEdBQXNCQSxLQUFLLENBQUwsQ0FBdEIsR0FBZ0MsR0FBaEMsR0FBc0NHLElBQXRDLEdBQTZDLEdBQTdDLEdBQW1ERixLQUFLLENBQUwsQ0FBbkQsR0FBNkQsR0FBcEU7QUFDSCxDQWxCRDs7QUFvQkE7Ozs7QUFJQWhGLElBQUlFLE1BQUosQ0FBVyxVQUFYLEVBQXVCLFVBQVNnRCxLQUFULEVBQWdCdkQsTUFBaEIsRUFBd0I7QUFDM0MsUUFBR3VELE1BQU12RCxNQUFOLEdBQWVBLE1BQWxCLEVBQTBCO0FBQ3RCLGVBQU91RCxLQUFQO0FBQ0g7O0FBRUR2RCxhQUFTQSxTQUFTLENBQWxCOztBQUVBLFdBQU91RCxNQUFNeEUsU0FBTixDQUFnQixDQUFoQixFQUFtQmlCLE1BQW5CLElBQTZCLEtBQXBDO0FBQ0gsQ0FSRCxFIiwiZmlsZSI6Ii9hc3NldHMvanMvYXBwLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIHNjb3BlSWQsXG4gIGNzc01vZHVsZXNcbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIC8vIGluamVjdCBjc3NNb2R1bGVzXG4gIGlmIChjc3NNb2R1bGVzKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCAob3B0aW9ucy5jb21wdXRlZCA9IHt9KVxuICAgIE9iamVjdC5rZXlzKGNzc01vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGNzc01vZHVsZXNba2V5XVxuICAgICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8qKlxuICogQ3JlYXRlZCBieSBMaWJlcm4gb24gMjYvNy8xNi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlYWQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgcmV0dXJuIHZhbC5yZXBsYWNlKG5ldyBSZWdFeHAoJ1xccj9cXG4nLCAnZycpLCAnPGJyIC8+Jyk7XG4gICAgfSxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2ZpbHRlcnMvbmwyYnIuanMiLCJleHBvcnQgZGVmYXVsdHtcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBidXMoKXtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYnVzO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBldmVudEVtaXQobmFtZSwgZGF0YSl7XG4gICAgICAgICAgICB0aGlzLmJ1cy4kZW1pdChuYW1lLCBkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXZlbnRPbihuYW1lLCBjYWxsYmFjayl7XG4gICAgICAgICAgICB0aGlzLmJ1cy4kb24obmFtZSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICBldmVudE9mZihuYW1lLCBjYWxsYmFjayl7XG4gICAgICAgICAgICB0aGlzLmJ1cy4kb2ZmKG5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgQXBwSGVhZGVyU2V0VGl0bGUodGl0bGUpe1xuICAgICAgICAgICAgdGhpcy5idXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgfSxcbiAgICAgICAgQXBwVGFiQmFyU2V0U2hvd0FwcFRhYkJhcihpc1Nob3cpe1xuICAgICAgICAgICAgdGhpcy5ldmVudEVtaXQoXCJBcHBUYWJCYXJfc2V0U2hvd0FwcFRhYkJhclwiLCBpc1Nob3cpO1xuICAgICAgICB9LFxuICAgICAgICBBcHBUYWJCYXJTZWxlY3RUYWJCYXJJdGVtKGluZGV4KXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRFbWl0KFwiQXBwVGFiQmFyX3NlbGVjdFRhYkJhckl0ZW1cIiwgaW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICBBcHBIZWFkZXJTZXROYXZCdXR0b25MZWZ0KGNsYXNzTmFtZSl7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RW1pdChcIkFwcEhlYWRlcl9zZXROYXZCdXR0b25MZWZ0XCIsIGNsYXNzTmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIEFwcEhlYWRlclNldE5hdkJ1dHRvblJpZ2h0KGNsYXNzTmFtZSl7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RW1pdChcIkFwcEhlYWRlcl9zZXROYXZCdXR0b25SaWdodFwiLCBjbGFzc05hbWUpO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9idXMuanMiLCJleHBvcnQgZGVmYXVsdHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNjcm9sbFRvQm90dG9tKHNlbGVjdG9yLCBhbmltYXRlZCwgYW5pbWF0ZVRpbWUpe1xuICAgICAgICAgICAgdmFyICRlbGVtZW50ID0gJChzZWxlY3Rvcik7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gJGVsZW1lbnQucHJvcChcInNjcm9sbEhlaWdodFwiKTtcbiAgICAgICAgICAgIGlmIChhbmltYXRlZCkge1xuICAgICAgICAgICAgICAgIGlmICghYW5pbWF0ZVRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVRpbWUgPSAxMDAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkZWxlbWVudC5hbmltYXRlKHtzY3JvbGxUb3A6IHNjcm9sbEhlaWdodH0sIGFuaW1hdGVUaW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQuc2Nyb2xsVG9wKHNjcm9sbEhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvanF1ZXJ5LmpzIiwiZXhwb3J0IGRlZmF1bHR7XG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgdnVleFN0b3JlKCl7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnZ1ZXhTdG9yZTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc3RvcmVDb21taXQobmFtZSwgZGF0YSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52dWV4U3RvcmUuY29tbWl0KG5hbWUsIGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBzdG9yZURpc3BhdGNoKG5hbWUsIGRhdGEpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudnVleFN0b3JlLmRpc3BhdGNoKG5hbWUsIGRhdGEpO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9zdG9yZS5qcyIsImV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbXB1dGVkOiB7fSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG5vd1RpbWVzdGFtcCgpe1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudCgpLnVuaXgoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbW9tZW50RnJvbURhdGVUaW1lKGRhdGVUaW1lKXtcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQoZGF0ZVRpbWUsICdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGVUaW1lVG9UaW1lc3RhbXAoZGF0ZVRpbWUpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9tZW50RnJvbURhdGVUaW1lKGRhdGVUaW1lKS51bml4KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVybChwYXRoKXtcbiAgICAgICAgICAgIGlmIChwYXRoICYmIHBhdGguc3Vic3RyaW5nKDAsIDEpICE9ICcvJykge1xuICAgICAgICAgICAgICAgIHBhdGggPSAnLycgKyBwYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVVybCArIHBhdGg7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZGlyZWN0VG9VcmwodXJsKXtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICB9LFxuICAgICAgICByZWRpcmVjdFRvVXJsRnJvbUJhc2VVcmwodXJsKXtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy51cmwodXJsKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVsb2FkUGFnZSgpe1xuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvVXJsKHdpbmRvdy5sb2NhdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIG9iamVjdFRvRm9ybURhdGEoaXRlbSl7XG4gICAgICAgICAgICB2YXIgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBpdGVtKSB7XG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZChrZXksIGl0ZW1ba2V5XSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmb3JtX2RhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIGlzRW1wdHlPYmplY3Qob2JqZWN0KXtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfSxcbiAgICAgICAgaXNNb2JpbGUoKXtcbiAgICAgICAgICAgIHZhciBpc01vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KVwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIChpc01vYmlsZS5tYXRjaGVzKTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdG9vbHMuanMiLCJcbi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZXMgVnVlIGFuZCBvdGhlciBsaWJyYXJpZXMuIEl0IGlzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgd2hlblxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG5yZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuXG4vLyBWdWUgRGlyZWN0aXZlc1xuVnVlLmRpcmVjdGl2ZSgnZm9jdXMnLCByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvZm9jdXMnKSk7XG5cbi8vIFZ1ZSBGaWx0ZXJzXG5WdWUuZmlsdGVyKCdubDJicicsIHJlcXVpcmUoJy4vZmlsdGVycy9ubDJicicpKTtcblxuLy8gVnVlIE1peGluc1xuaW1wb3J0IE1peEluVXNlciBmcm9tICcuL21peGlucy91c2VyJ1xuaW1wb3J0IE1peEluSlF1ZXJ5IGZyb20gJy4vbWl4aW5zL2pxdWVyeSdcbmltcG9ydCBNaXhJblRvb2xzIGZyb20gJy4vbWl4aW5zL3Rvb2xzJ1xuaW1wb3J0IE1peEluQnVzIGZyb20gJy4vbWl4aW5zL2J1cydcbmltcG9ydCBNaXhJblN0b3JlIGZyb20gJy4vbWl4aW5zL3N0b3JlJ1xuVnVlLm1peGluKE1peEluVXNlcik7XG5WdWUubWl4aW4oTWl4SW5KUXVlcnkpO1xuVnVlLm1peGluKE1peEluVG9vbHMpO1xuVnVlLm1peGluKE1peEluQnVzKTtcblZ1ZS5taXhpbihNaXhJblN0b3JlKTtcblxuXG5cbi8vIFZ1ZSBDb21wb25lbnRzXG5WdWUuY29tcG9uZW50KCdhdXRvc2l6ZS10ZXh0YXJlYScsIHJlcXVpcmUoJy4vZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWUnKSk7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5WdWUuY29tcG9uZW50KCdleGFtcGxlJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL0V4YW1wbGUudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnc2wtdXNlci1saXN0JywgcmVxdWlyZSgnLi9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdC52dWUnKSk7XG5cbi8vIEJ1c1xuY29uc3QgYnVzID0gbmV3IFZ1ZSh7XG4gICAgZGF0YToge1xuICAgICAgICB0aXRsZTogXCJTb21lbGluZVwiLFxuICAgIH1cbn0pO1xud2luZG93LmJ1cyA9IGJ1cztcblxuLy8gVnVleFxuY29uc3QgdnVleFN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xuICAgIHN0YXRlOiB7XG4gICAgICAgIHBsYXRmb3JtOiAnYXBwJyxcbiAgICAgICAgY291bnQ6IDBcbiAgICB9LFxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBpbmNyZW1lbnQgKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5jb3VudCsrXG4gICAgICAgIH1cbiAgICB9XG59KTtcbndpbmRvdy52dWV4U3RvcmUgPSB2dWV4U3RvcmU7XG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG4gICAgZGF0YToge1xuICAgICAgICBtc2c6IFwiaGVsbG9cIixcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7fSxcbiAgICB3YXRjaDoge30sXG4gICAgZXZlbnRzOiB7fSxcbiAgICBjcmVhdGVkKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdCb290c3RyYXAuJyk7XG4gICAgICAgIHRoaXMuaW5pdExvY2FsZSgpO1xuICAgIH0sXG4gICAgbW91bnRlZCgpe1xuICAgICAgICBjb25zb2xlLmxvZygnUmVhZHkuJyk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGluaXRMb2NhbGUoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbml0IExvY2FsZS4nKTtcblxuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGxhbmcgPSB0aGlzLmxvY2FsZTtcblxuICAgICAgICAgICAgVnVlLmNvbmZpZy5sYW5nID0gbGFuZztcbiAgICAgICAgICAgIFZ1ZS5sb2NhbGUobGFuZywgd2luZG93LlNvbWVsaW5lLmxvY2FsZXMpO1xuXG4gICAgICAgIH0sXG4gICAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsImV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGJhc2VVcmwoKXtcbiAgICAgICAgICAgIHJldHVybiBTb21lbGluZS5iYXNlVXJsO1xuICAgICAgICB9LFxuICAgICAgICBsb2NhbGUoKXtcbiAgICAgICAgICAgIHJldHVybiBTb21lbGluZS5sb2NhbGU7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnRVc2VySWQoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFNvbWVsaW5lLnN0YXRlKTtcbiAgICAgICAgICAgIHJldHVybiBTb21lbGluZS5zdGF0ZS51c2VyLnVzZXJfaWQ7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3VzZXIuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9sZXNzL2FwcC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvbGVzcy9jb25zb2xlLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDE1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9sZXNzL21vYmlsZS5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiYXV0b3NpemUtdGV4dGFyZWEudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ1YzVlMzU4JnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwid3JhcHBlci1tZFwiPlxuXG4gICAgICAgIDxoMT57eyAkdCgndXNlci51c2VycycpIH19PC9oMT5cbiAgICAgICAgPGhyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cblxuICAgICAgICAgICAgPGRhdGFzb3VyY2VcbiAgICAgICAgICAgICAgICAgICAgOnRhYmxlLWRhdGE9XCJpdGVtc1wiXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlPVwiZW5cIlxuICAgICAgICAgICAgICAgICAgICA6Y29sdW1ucz1cImNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICA6cGFnaW5hdGlvbj1cInBhZ2luYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICB2LW9uOmNoYW5nZT1cImNoYW5nZVBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICB2LW9uOnNlYXJjaGluZz1cIm9uU2VhcmNoXCJcbiAgICAgICAgICAgID48L2RhdGFzb3VyY2U+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRGF0YXNvdXJjZSBmcm9tICd2dWUtZGF0YXNvdXJjZSc7XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiBbXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ2VtYWlsJywga2V5OiAnZW1haWwnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICduYW1lJywga2V5OiAnbmFtZSd9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgICAgICBwZXJwYWdlOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7fSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgRGF0YXNvdXJjZSxcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCBSZWFkeS4nKTtcblxuICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHt9LFxuICAgICAgICBldmVudHM6IHt9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBidWlsZFBhZ2luYXRvcihwYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogTWFrZSBidWlsZCBwYWdpbmF0b3IgZ2xvYmFsXG4gICAgICAgICAgICAgICAgbGV0IHBhZ2VyID0ge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbDogcGFnaW5hdGlvbi50b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgcGVyX3BhZ2U6IHBhZ2luYXRpb24ucGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcGFnZTogcGFnaW5hdGlvbi5jdXJyZW50X3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGxhc3RfcGFnZTogcGFnaW5hdGlvbi50b3RhbF9wYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogMSxcbiAgICAgICAgICAgICAgICAgICAgdG86IHBhZ2luYXRpb24ucGVyX3BhZ2VcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBwYWdlcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFuZ2VQYWdlKHZhbHVlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hEYXRhKHZhbHVlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25TZWFyY2gocXVlcnkpIHtcblxuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAncXVlcnknOiBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgJ3BhZ2UnOiAxXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hEYXRhKG9wdGlvbnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZldGNoRGF0YShvcHRpb25zKXtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG9wdGlvbnMucGFnZSA9IG9wdGlvbnMucGFnZSB8fCB0aGlzLm9wdGlvbnMucGFnZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnBlcnBhZ2UgPSBvcHRpb25zLnBlcnBhZ2UgfHwgdGhpcy5vcHRpb25zLnBlcnBhZ2U7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKG9wdGlvbnMucXVlcnkpID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucXVlcnkgPSB0aGlzLm9wdGlvbnMucXVlcnk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgICAgICAgICAgIC8vQFRPRE86IEJ1aWxkIHRoZSBxdWVyeSBwYXJhbWV0ZXIgaW4gYSBwcm9wZXIgd2F5XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBpLmdldChgL3VzZXJzP3BhZ2U9JHtvcHRpb25zLnBhZ2V9JnBlcl9wYWdlPSR7b3B0aW9ucy5wZXJwYWdlfSZzZWFyY2g9JHtvcHRpb25zLnF1ZXJ5fSZzZWFyY2hGaWVsZHM9bmFtZTpsaWtlYCwge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0gdGhpcy5idWlsZFBhZ2luYXRvcihyZXNwb25zZS5kYXRhLm1ldGEucGFnaW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFVzZXJMaXN0LnZ1ZT81NjlmMzQzYyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0V4YW1wbGUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYWNmNjBhNDghLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRXhhbXBsZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9nZXJtYW4vU2l0ZXMvc29tZWxpbmUtc3RhcnRlci9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRXhhbXBsZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBFeGFtcGxlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1hY2Y2MGE0OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWFjZjYwYTQ4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi00NWM1ZTM1OCZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXV0b3NpemUtdGV4dGFyZWEudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTQ1YzVlMzU4IS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi00NWM1ZTM1OFwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2dlcm1hbi9TaXRlcy9zb21lbGluZS1zdGFydGVyL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhdXRvc2l6ZS10ZXh0YXJlYS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDVjNWUzNThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NWM1ZTM1OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiVXNlckxpc3QudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU4YTI2NDVjJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDE5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJWdWVEYXRhc291cmNlQ29tcG9uZW50XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlZ1ZURhdGFzb3VyY2VDb21wb25lbnRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblxuLyoqKi8gfSxcbi8qIDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qXHJcblx0XHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdFx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG5cdCovXHJcblx0Ly8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGxpc3QgPSBbXTtcclxuXHRcclxuXHRcdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRcdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0XHR9O1xyXG5cdFxyXG5cdFx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRcdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBsaXN0O1xyXG5cdH07XHJcblxuXG4vKioqLyB9LFxuLyogMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Lypcblx0XHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRcdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcblx0Ki9cblx0dmFyIHN0eWxlc0luRG9tID0ge30sXG5cdFx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0XHR2YXIgbWVtbztcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdHJldHVybiBtZW1vO1xuXHRcdFx0fTtcblx0XHR9LFxuXHRcdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuXHRcdH0pLFxuXHRcdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG5cdFx0fSksXG5cdFx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdFx0c2luZ2xldG9uQ291bnRlciA9IDAsXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRcdGlmKGZhbHNlKSB7XG5cdFx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0XHR9XG5cdFxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRcdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHRcdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0XHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblx0XG5cdFx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cblx0XHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXHRcblx0XHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRcdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cdFxuXHRcdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cdFx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXHRcdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdFx0dmFyIHN0eWxlcyA9IFtdO1xuXHRcdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdFx0aWYoIW5ld1N0eWxlc1tpZF0pXG5cdFx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0eWxlcztcblx0fVxuXHRcblx0ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHRcdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcblx0XHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0XHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHRcdH1cblx0XHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0XHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHRcdH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuXHRcdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0XHRpZihpZHggPj0gMCkge1xuXHRcdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdFx0fVxuXHR9XG5cdFxuXHRmdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHRcdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cdFx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdFx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmV0dXJuIHN0eWxlRWxlbWVudDtcblx0fVxuXHRcblx0ZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG5cdFx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cdFxuXHRcdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHRcdH07XG5cdFx0fVxuXHRcblx0XHR1cGRhdGUob2JqKTtcblx0XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuXHRcdFx0aWYobmV3T2JqKSB7XG5cdFx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXHRcblx0dmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdGV4dFN0b3JlID0gW107XG5cdFxuXHRcdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cdFx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0XHR9O1xuXHR9KSgpO1xuXHRcblx0ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHRcdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblx0XG5cdFx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XG5cdFx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHRmdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XG5cdFx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdFx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXHRcblx0XHRpZiAobWVkaWEpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG5cdFx0fVxuXHRcblx0XHRpZiAoc291cmNlTWFwKSB7XG5cdFx0XHQvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcblx0XHRcdC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcblx0XHRcdGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJztcblx0XHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdFx0fVxuXHRcblx0XHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdFx0fVxuXHR9XG5cblxuLyoqKi8gfSxcbi8qIDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9EYXRhc291cmNlVXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHRcblx0dmFyIF9EYXRhc291cmNlVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRGF0YXNvdXJjZVV0aWxzKTtcblx0XG5cdHZhciBfRGF0YXNvdXJjZUxhbmd1YWdlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0XG5cdHZhciBfRGF0YXNvdXJjZUxhbmd1YWdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RhdGFzb3VyY2VMYW5ndWFnZSk7XG5cdFxuXHR2YXIgX1BhZ2luYXRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblx0XG5cdHZhciBfUGFnaW5hdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYWdpbmF0aW9uKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSB7XG5cdCAgY29tcG9uZW50czoge1xuXHQgICAgUGFnaW5hdGlvbjogX1BhZ2luYXRpb24yLmRlZmF1bHRcblx0ICB9LFxuXHQgIHByb3BzOiB7XG5cdCAgICB0YWJsZURhdGE6IHtcblx0ICAgICAgdHlwZTogQXJyYXksXG5cdCAgICAgIHJlcXVpcmVkOiB0cnVlXG5cdCAgICB9LFxuXHRcblx0ICAgIGxhbmd1YWdlOiB7XG5cdCAgICAgIHR5cGU6IFN0cmluZyxcblx0ICAgICAgZGVmYXVsdDogJ2VzJ1xuXHQgICAgfSxcblx0XG5cdCAgICBjb2x1bW5zOiB7XG5cdCAgICAgIHR5cGU6IEFycmF5LFxuXHQgICAgICByZXF1aXJlZDogdHJ1ZVxuXHQgICAgfSxcblx0XG5cdCAgICBwYWdpbmF0aW9uOiB7XG5cdCAgICAgIHR5cGU6IE9iamVjdCxcblx0ICAgICAgZGVmYXVsdDogZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgIHRvdGFsOiAwLFxuXHQgICAgICAgICAgdG86IDAsXG5cdCAgICAgICAgICBmcm9tOiAwLFxuXHQgICAgICAgICAgcGVyX3BhZ2U6IDE1XG5cdCAgICAgICAgfTtcblx0ICAgICAgfVxuXHQgICAgfSxcblx0XG5cdCAgICBhY3Rpb25zOiB7XG5cdCAgICAgIHR5cGU6IEFycmF5LFxuXHQgICAgICBkZWZhdWx0OiBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcblx0ICAgICAgICByZXR1cm4gW107XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXHQgIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG5cdCAgICByZXR1cm4ge1xuXHQgICAgICBsaW1pdHM6IFsxLCA1LCAxMCwgMTUsIDIwXSxcblx0ICAgICAgcGVycGFnZTogMTUsXG5cdCAgICAgIHNlbGVjdGVkOiBudWxsLFxuXHQgICAgICBpbmRleFNlbGVjdGVkOiAtMSxcblx0ICAgICAgc2VhcmNoOiAnJyB9O1xuXHQgIH0sXG5cdFxuXHQgIGNvbXB1dGVkOiB7XG5cdCAgICB0cmFuc2xhdGlvbjogZnVuY3Rpb24gdHJhbnNsYXRpb24oKSB7XG5cdCAgICAgIHJldHVybiBfRGF0YXNvdXJjZUxhbmd1YWdlMi5kZWZhdWx0LnRyYW5zbGF0aW9uc1t0aGlzLmxhbmd1YWdlXTtcblx0ICAgIH0sXG5cdFxuXHQgICAgdGFibGVJbmZvOiBfRGF0YXNvdXJjZVV0aWxzMi5kZWZhdWx0LnRhYmxlSW5mb1xuXHQgIH0sXG5cdCAgbWV0aG9kczoge1xuXHQgICAgZmV0Y2hGcm9tT2JqZWN0OiBfRGF0YXNvdXJjZVV0aWxzMi5kZWZhdWx0LmZldGNoRnJvbU9iamVjdCxcblx0ICAgIGNoYW5nZVBhZ2U6IF9EYXRhc291cmNlVXRpbHMyLmRlZmF1bHQuY2hhbmdlUGFnZSxcblx0ICAgIHNlbGVjdFJvdzogX0RhdGFzb3VyY2VVdGlsczIuZGVmYXVsdC5zZWxlY3RSb3csXG5cdCAgICBzZWFyY2hpbmc6IGZ1bmN0aW9uIHNlYXJjaGluZygpIHtcblx0ICAgICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XG5cdCAgICAgIHRoaXMuaW5kZXhTZWxlY3RlZCA9IC0xO1xuXHQgICAgICB0aGlzLiRlbWl0KCdzZWFyY2hpbmcnLCB0aGlzLnNlYXJjaCk7XG5cdCAgICB9XG5cdCAgfSxcblx0ICB3YXRjaDoge1xuXHQgICAgcGVycGFnZTogZnVuY3Rpb24gcGVycGFnZSgpIHtcblx0ICAgICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XG5cdCAgICAgIHRoaXMuaW5kZXhTZWxlY3RlZCA9IC0xO1xuXHQgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7IHBlcnBhZ2U6IHRoaXMucGVycGFnZSwgcGFnZTogMSB9KTtcblx0ICAgIH0sXG5cdCAgICB0YWJsZURhdGE6IGZ1bmN0aW9uIHRhYmxlRGF0YSgpIHtcblx0ICAgICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XG5cdCAgICAgIHRoaXMuaW5kZXhTZWxlY3RlZCA9IC0xO1xuXHQgICAgfVxuXHQgIH1cblx0fTtcblxuLyoqKi8gfSxcbi8qIDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmRlZmF1bHQgPSB7XG5cdCAgcHJvcHM6IFsncGFnZXMnLCAndHJhbnNsYXRpb24nXSxcblx0ICBjb21wdXRlZDoge1xuXHQgICAgaXRlbXM6IGZ1bmN0aW9uIGl0ZW1zKCkge1xuXHQgICAgICB2YXIgdGVtcCA9IFtdLFxuXHQgICAgICAgICAgYm90dG9tTGltaXQgPSB0aGlzLnBhZ2VzLmN1cnJlbnRfcGFnZSAtIDIsXG5cdCAgICAgICAgICB0b3BMaW1pdCA9IHRoaXMucGFnZXMuY3VycmVudF9wYWdlICsgMixcblx0ICAgICAgICAgIHNob3dpbmcgPSA1O1xuXHRcblx0ICAgICAgaWYgKGJvdHRvbUxpbWl0IDw9IDApIHtcblx0ICAgICAgICBib3R0b21MaW1pdCA9IDE7XG5cdCAgICAgICAgdG9wTGltaXQgPSA1O1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAodG9wTGltaXQgPj0gdGhpcy5wYWdlcy5sYXN0X3BhZ2UpIHtcblx0ICAgICAgICBib3R0b21MaW1pdCA9IHRoaXMucGFnZXMubGFzdF9wYWdlIC0gNDtcblx0ICAgICAgICB0b3BMaW1pdCA9IHRoaXMucGFnZXMubGFzdF9wYWdlO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAodGhpcy5wYWdlcy5sYXN0X3BhZ2UgPCA1KSB7XG5cdCAgICAgICAgc2hvd2luZyA9IHRoaXMucGFnZXMubGFzdF9wYWdlO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAoYm90dG9tTGltaXQgPD0gMCkge1xuXHQgICAgICAgIGJvdHRvbUxpbWl0ID0gMTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgaWYgKHRoaXMucGFnZXMubGFzdF9wYWdlID09IDAgfHwgdGhpcy5wYWdlcy5sYXN0X3BhZ2UgPT0gMSkge1xuXHQgICAgICAgIHNob3dpbmcgPSAxO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNob3dpbmc7IGkrKykge1xuXHQgICAgICAgIHRlbXBbaV0gPSBpICsgYm90dG9tTGltaXQ7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHJldHVybiB0ZW1wO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgbWV0aG9kczoge1xuXHQgICAgZmlyc3RQYWdlOiBmdW5jdGlvbiBmaXJzdFBhZ2UoKSB7XG5cdCAgICAgIGlmICh0aGlzLnBhZ2VzLmN1cnJlbnRfcGFnZSAhPSAxKSB7XG5cdCAgICAgICAgdGhpcy5jaGFuZ2UoMSk7XG5cdCAgICAgIH1cblx0ICAgIH0sXG5cdCAgICBwcmV2aW91czogZnVuY3Rpb24gcHJldmlvdXMoKSB7XG5cdCAgICAgIGlmICh0aGlzLnBhZ2VzLmN1cnJlbnRfcGFnZSAhPSAxKSB7XG5cdCAgICAgICAgdGhpcy5jaGFuZ2UoLS10aGlzLnBhZ2VzLmN1cnJlbnRfcGFnZSk7XG5cdCAgICAgIH1cblx0ICAgIH0sXG5cdCAgICBjaGFuZ2U6IGZ1bmN0aW9uIGNoYW5nZShwYWdlKSB7XG5cdCAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHBhZ2UpO1xuXHQgICAgfSxcblx0ICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG5cdCAgICAgIGlmICh0aGlzLnBhZ2VzLmN1cnJlbnRfcGFnZSAhPSB0aGlzLnBhZ2VzLmxhc3RfcGFnZSkge1xuXHQgICAgICAgIHRoaXMuY2hhbmdlKCsrdGhpcy5wYWdlcy5jdXJyZW50X3BhZ2UpO1xuXHQgICAgICB9XG5cdCAgICB9LFxuXHQgICAgbGFzdFBhZ2U6IGZ1bmN0aW9uIGxhc3RQYWdlKHBhZ2UpIHtcblx0ICAgICAgaWYgKHRoaXMucGFnZXMuY3VycmVudF9wYWdlICE9IHRoaXMucGFnZXMubGFzdF9wYWdlKSB7XG5cdCAgICAgICAgdGhpcy5jaGFuZ2UocGFnZSk7XG5cdCAgICAgIH1cblx0ICAgIH0sXG5cdCAgICBjaGFuZ2VQYWdlV2l0aEtleUJvYXJkOiBmdW5jdGlvbiBjaGFuZ2VQYWdlV2l0aEtleUJvYXJkKGtleSkge1xuXHQgICAgICBpZiAoa2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuXHQgICAgICAgIHRoaXMucHJldmlvdXMoKTtcblx0ICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuXHQgICAgICAgIHRoaXMubmV4dCgpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSxcblx0ICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuXHQgICAgdmFyIF90aGlzID0gdGhpcztcblx0XG5cdCAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoX3JlZikge1xuXHQgICAgICB2YXIga2V5ID0gX3JlZi5rZXk7XG5cdCAgICAgIHJldHVybiBfdGhpcy5jaGFuZ2VQYWdlV2l0aEtleUJvYXJkKGtleSk7XG5cdCAgICB9KTtcblx0ICB9XG5cdH07XG5cbi8qKiovIH0sXG4vKiA1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5kZWZhdWx0ID0ge1xuXHQgIHRyYW5zbGF0aW9uczoge1xuXHQgICAgJ2VuJzoge1xuXHQgICAgICAndGFibGUnOiB7XG5cdCAgICAgICAgJ2xhYmVsX2xpbWl0cyc6ICdTaG93Jyxcblx0ICAgICAgICAnbGFiZWxfc2VhcmNoJzogJ1NlYXJjaCcsXG5cdCAgICAgICAgJ3BsYWNlaG9sZGVyX3NlYXJjaCc6ICdUeXBlIHRvIHNlYXJjaC4uJyxcblx0ICAgICAgICAncmVjb3Jkc19ub3RfZm91bmQnOiAnTm8gcmVjb3JkcyBmb3VuZCdcblx0ICAgICAgfSxcblx0ICAgICAgJ3BhZ2luYXRpb24nOiB7XG5cdCAgICAgICAgJ2xhYmVsX3Nob3cnOiAnU2hvd2luZycsXG5cdCAgICAgICAgJ2xhYmVsX3RvJzogJ3RvJyxcblx0ICAgICAgICAnbGFiZWxfb2YnOiAnb2YnLFxuXHQgICAgICAgICdsYWJlbF9lbnRyaWVzJzogJ2VudHJpZXMnLFxuXHQgICAgICAgICdidG5fZmlyc3QnOiAnRmlyc3QnLFxuXHQgICAgICAgICdidG5fbGFzdCc6ICdMYXRlc3QnXG5cdCAgICAgIH1cblx0ICAgIH0sXG5cdFxuXHQgICAgJ2VzJzoge1xuXHQgICAgICAndGFibGUnOiB7XG5cdCAgICAgICAgJ2xhYmVsX2xpbWl0cyc6ICdNb3N0cmFyJyxcblx0ICAgICAgICAnbGFiZWxfc2VhcmNoJzogJ0J1c2NhcicsXG5cdCAgICAgICAgJ3BsYWNlaG9sZGVyX3NlYXJjaCc6ICdCdXNjYXIgLi4nLFxuXHQgICAgICAgICdyZWNvcmRzX25vdF9mb3VuZCc6ICdObyBzZSBlbmNvbnRyYXJvbiByZWdpc3Ryb3MuJ1xuXHQgICAgICB9LFxuXHQgICAgICAncGFnaW5hdGlvbic6IHtcblx0ICAgICAgICAnbGFiZWxfc2hvdyc6ICdNb3N0cmFuZG8nLFxuXHQgICAgICAgICdsYWJlbF90byc6ICdhJyxcblx0ICAgICAgICAnbGFiZWxfb2YnOiAnZGUnLFxuXHQgICAgICAgICdsYWJlbF9lbnRyaWVzJzogJ3JlZ2lzdHJvcycsXG5cdCAgICAgICAgJ2J0bl9maXJzdCc6ICdQcmltZXJvJyxcblx0ICAgICAgICAnYnRuX2xhc3QnOiAnw5psdGltbydcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH1cblx0fTtcblxuLyoqKi8gfSxcbi8qIDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmRlZmF1bHQgPSB7XG5cdCAgZmV0Y2hGcm9tT2JqZWN0OiBmdW5jdGlvbiBmZXRjaEZyb21PYmplY3Qob2JqLCBjb2x1bW4sIHJlbmRlcikge1xuXHQgICAgaWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG5cdCAgICB2YXIgX2luZGV4ID0gY29sdW1uLmluZGV4T2YoJy4nKTtcblx0ICAgIGlmIChfaW5kZXggPiAtMSkge1xuXHQgICAgICByZXR1cm4gdGhpcy5mZXRjaEZyb21PYmplY3Qob2JqW2NvbHVtbi5zdWJzdHJpbmcoMCwgX2luZGV4KV0sIGNvbHVtbi5zdWJzdHIoX2luZGV4ICsgMSkpO1xuXHQgICAgfVxuXHQgICAgaWYgKHR5cGVvZiByZW5kZXIgIT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgcmV0dXJuIHJlbmRlcihvYmpbY29sdW1uXSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gb2JqW2NvbHVtbl07XG5cdCAgfSxcblx0ICBjaGFuZ2VQYWdlOiBmdW5jdGlvbiBjaGFuZ2VQYWdlKHBhZ2UpIHtcblx0ICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xuXHQgICAgdGhpcy5pbmRleFNlbGVjdGVkID0gLTE7XG5cdCAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7IHBlcnBhZ2U6IHRoaXMucGVycGFnZSwgcGFnZTogcGFnZSB9KTtcblx0ICB9LFxuXHQgIHNlbGVjdFJvdzogZnVuY3Rpb24gc2VsZWN0Um93KHJvdywgaW5kZXgpIHtcblx0ICAgIGlmICh0aGlzLmluZGV4U2VsZWN0ZWQgPT0gaW5kZXgpIHtcblx0ICAgICAgdGhpcy5pbmRleFNlbGVjdGVkID0gLTE7XG5cdCAgICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5pbmRleFNlbGVjdGVkID0gaW5kZXg7XG5cdCAgICAgIHRoaXMuc2VsZWN0ZWQgPSB7XG5cdCAgICAgICAgJ3Jvdyc6IHJvdyxcblx0ICAgICAgICAnaW5kZXgnOiBpbmRleFxuXHQgICAgICB9O1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgdGFibGVJbmZvOiBmdW5jdGlvbiB0YWJsZUluZm8oKSB7XG5cdCAgICB2YXIgbGFiZWxfc2hvdyA9IHRoaXMudHJhbnNsYXRpb24ucGFnaW5hdGlvbi5sYWJlbF9zaG93O1xuXHQgICAgdmFyIGZyb20gPSB0aGlzLnBhZ2luYXRpb24uZnJvbSA9PSBudWxsID8gMCA6IHRoaXMucGFnaW5hdGlvbi5mcm9tO1xuXHQgICAgdmFyIGxhYmVsX3RvID0gdGhpcy50cmFuc2xhdGlvbi5wYWdpbmF0aW9uLmxhYmVsX3RvO1xuXHQgICAgdmFyIHRvID0gdGhpcy5wYWdpbmF0aW9uLnRvID09IG51bGwgPyAwIDogdGhpcy5wYWdpbmF0aW9uLnRvO1xuXHQgICAgdmFyIGxhYmVsX29mID0gdGhpcy50cmFuc2xhdGlvbi5wYWdpbmF0aW9uLmxhYmVsX29mO1xuXHQgICAgdmFyIHRvdGFsID0gdGhpcy5wYWdpbmF0aW9uLnRvdGFsO1xuXHQgICAgdmFyIGxhYmVsX2VudHJpZXMgPSB0aGlzLnRyYW5zbGF0aW9uLnBhZ2luYXRpb24ubGFiZWxfZW50cmllcztcblx0XG5cdCAgICByZXR1cm4gbGFiZWxfc2hvdyArICcgJyArIGZyb20gKyAnICcgKyBsYWJlbF90byArICcgJyArIHRvICsgJyAnICsgbGFiZWxfb2YgKyAnICcgKyB0b3RhbCArICcgJyArIGxhYmVsX2VudHJpZXM7XG5cdCAgfVxuXHR9O1xuXG4vKioqLyB9LFxuLyogNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0ZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKSgpO1xuXHQvLyBpbXBvcnRzXG5cdFxuXHRcblx0Ly8gbW9kdWxlXG5cdGV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5WdWVfX3BhZ2luYXRpb24gbmF2IC5wYWdpbmF0aW9uW2RhdGEtdi00NDE3YzQzNl0ge1xcbiAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCJdKTtcblx0XG5cdC8vIGV4cG9ydHNcblxuXG4vKioqLyB9LFxuLyogOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0ZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKSgpO1xuXHQvLyBpbXBvcnRzXG5cdFxuXHRcblx0Ly8gbW9kdWxlXG5cdGV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52dWUtZGF0YXNvdXJjZSAuVnVlX19wYW5lbC1ib2R5W2RhdGEtdi04ZGI0MzQ0Ml0ge1xcbiAgcGFkZGluZzogMDtcXG59XFxuLnZ1ZS1kYXRhc291cmNlIC5WdWVfX3BhbmVsLWJvZHkgLlZ1ZV9fdGFibGVbZGF0YS12LThkYjQzNDQyXSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi52dWUtZGF0YXNvdXJjZSAuVnVlX19wYW5lbC1mb290ZXIgLlZ1ZV9fZGF0YXNvdXJjZV9hY3Rpb25zW2RhdGEtdi04ZGI0MzQ0Ml0ge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cdFxuXHQvLyBleHBvcnRzXG5cblxuLyoqKi8gfSxcbi8qIDkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xuXHR2YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXHRcblx0Lyogc3R5bGVzICovXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTQpXG5cdFxuXHQvKiBzY3JpcHQgKi9cblx0X192dWVfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVxuXHRcblx0LyogdGVtcGxhdGUgKi9cblx0dmFyIF9fdnVlX3RlbXBsYXRlX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKVxuXHRfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cblx0aWYgKFxuXHQgIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuXHQgIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxuXHR9XG5cdGlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcblx0ICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xuXHR9XG5cdFxuXHRfX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcblx0X192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cdF9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LThkYjQzNDQyXCJcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuLyoqKi8gfSxcbi8qIDEwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cblx0dmFyIF9fdnVlX3N0eWxlc19fID0ge31cblx0XG5cdC8qIHN0eWxlcyAqL1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKVxuXHRcblx0Lyogc2NyaXB0ICovXG5cdF9fdnVlX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNClcblx0XG5cdC8qIHRlbXBsYXRlICovXG5cdHZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0X192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5cdGlmIChcblx0ICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcblx0ICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0X192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcblx0fVxuXHRpZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdCAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcblx0fVxuXHRcblx0X192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5cdF9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXHRfX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi00NDE3YzQzNlwiXG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cbi8qKiovIH0sXG4vKiAxMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcblx0ICByZXR1cm4gX2MoJ2RpdicsIHtcblx0ICAgIHN0YXRpY0NsYXNzOiBcIlZ1ZV9fcGFnaW5hdGlvblwiXG5cdCAgfSwgW19jKCduYXYnLCB7XG5cdCAgICBhdHRyczoge1xuXHQgICAgICBcImFyaWEtbGFiZWxcIjogXCJQYWdlIG5hdmlnYXRpb25cIlxuXHQgICAgfVxuXHQgIH0sIFtfYygndWwnLCB7XG5cdCAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uXCJcblx0ICB9LCBbX2MoJ2xpJywge1xuXHQgICAgY2xhc3M6IChfdm0ucGFnZXMuY3VycmVudF9wYWdlID09IDEpID8gJ2Rpc2FibGVkJyA6ICcnXG5cdCAgfSwgW19jKCdhJywge1xuXHQgICAgYXR0cnM6IHtcblx0ICAgICAgXCJocmVmXCI6IFwiI1wiXG5cdCAgICB9LFxuXHQgICAgb246IHtcblx0ICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcblx0ICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICAgICAgICBfdm0uZmlyc3RQYWdlKCRldmVudClcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50cmFuc2xhdGlvbi5idG5fZmlyc3QpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIHtcblx0ICAgIGNsYXNzOiAoX3ZtLnBhZ2VzLmN1cnJlbnRfcGFnZSA9PSAxKSA/ICdkaXNhYmxlZCcgOiAnJ1xuXHQgIH0sIFtfYygnYScsIHtcblx0ICAgIGF0dHJzOiB7XG5cdCAgICAgIFwiaHJlZlwiOiBcIiNcIixcblx0ICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiUHJldmlvdXNcIlxuXHQgICAgfSxcblx0ICAgIG9uOiB7XG5cdCAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG5cdCAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdCAgICAgICAgX3ZtLnByZXZpb3VzKCRldmVudClcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sIFtfYygnc3BhbicsIHtcblx0ICAgIGF0dHJzOiB7XG5cdCAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcblx0ICAgIH1cblx0ICB9LCBbX3ZtLl92KFwiwqtcIildKV0pXSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLml0ZW1zKSwgZnVuY3Rpb24obikge1xuXHQgICAgcmV0dXJuIF9jKCdsaScsIHtcblx0ICAgICAgY2xhc3M6IChfdm0ucGFnZXMuY3VycmVudF9wYWdlID09IG4pID8gJ2FjdGl2ZScgOiAnJ1xuXHQgICAgfSwgW19jKCdhJywge1xuXHQgICAgICBhdHRyczoge1xuXHQgICAgICAgIFwiaHJlZlwiOiBcIiNcIlxuXHQgICAgICB9LFxuXHQgICAgICBvbjoge1xuXHQgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG5cdCAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICAgICAgICAgIF92bS5jaGFuZ2Uobilcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH0sIFtfdm0uX3YoX3ZtLl9zKG4pKV0pXSlcblx0ICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywge1xuXHQgICAgY2xhc3M6IChfdm0ucGFnZXMuY3VycmVudF9wYWdlID09IF92bS5wYWdlcy5sYXN0X3BhZ2UpID8gJ2Rpc2FibGVkJyA6ICcnXG5cdCAgfSwgW19jKCdhJywge1xuXHQgICAgYXR0cnM6IHtcblx0ICAgICAgXCJocmVmXCI6IFwiI1wiLFxuXHQgICAgICBcImFyaWEtbGFiZWxcIjogXCJOZXh0XCJcblx0ICAgIH0sXG5cdCAgICBvbjoge1xuXHQgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuXHQgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgICAgICAgIF92bS5uZXh0KCRldmVudClcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sIFtfYygnc3BhbicsIHtcblx0ICAgIGF0dHJzOiB7XG5cdCAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcblx0ICAgIH1cblx0ICB9LCBbX3ZtLl92KFwiwrtcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIHtcblx0ICAgIGNsYXNzOiAoX3ZtLnBhZ2VzLmN1cnJlbnRfcGFnZSA9PSBfdm0ucGFnZXMubGFzdF9wYWdlKSA/ICdkaXNhYmxlZCcgOiAnJ1xuXHQgIH0sIFtfYygnYScsIHtcblx0ICAgIGF0dHJzOiB7XG5cdCAgICAgIFwiaHJlZlwiOiBcIiNcIlxuXHQgICAgfSxcblx0ICAgIG9uOiB7XG5cdCAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG5cdCAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdCAgICAgICAgX3ZtLmxhc3RQYWdlKF92bS5wYWdlcy5sYXN0X3BhZ2UpXG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udHJhbnNsYXRpb24uYnRuX2xhc3QpKV0pXSldLCAyKV0pXSlcblx0fSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuXG4vKioqLyB9LFxuLyogMTIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG5cdCAgcmV0dXJuIF9jKCdkaXYnLCB7XG5cdCAgICBzdGF0aWNDbGFzczogXCJ2dWUtZGF0YXNvdXJjZVwiXG5cdCAgfSwgW19jKCdkaXYnLCB7XG5cdCAgICBzdGF0aWNDbGFzczogXCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcblx0ICB9LCBbX2MoJ2RpdicsIHtcblx0ICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWhlYWRpbmdcIlxuXHQgIH0sIFtfYygnZGl2Jywge1xuXHQgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1pbmxpbmVcIlxuXHQgIH0sIFtfYygnZGl2Jywge1xuXHQgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBwdWxsLWxlZnRcIlxuXHQgIH0sIFtfYygnbGFiZWwnLCB7XG5cdCAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsIHByMlwiXG5cdCAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRyYW5zbGF0aW9uLnRhYmxlLmxhYmVsX2xpbWl0cykpXSksIF92bS5fdihcIiBcIiksIF9jKCdzZWxlY3QnLCB7XG5cdCAgICBkaXJlY3RpdmVzOiBbe1xuXHQgICAgICBuYW1lOiBcIm1vZGVsXCIsXG5cdCAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuXHQgICAgICB2YWx1ZTogKF92bS5wZXJwYWdlKSxcblx0ICAgICAgZXhwcmVzc2lvbjogXCJwZXJwYWdlXCJcblx0ICAgIH1dLFxuXHQgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG5cdCAgICBhdHRyczoge1xuXHQgICAgICBcIm51bWJlclwiOiBcIlwiXG5cdCAgICB9LFxuXHQgICAgb246IHtcblx0ICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG5cdCAgICAgICAgX3ZtLnBlcnBhZ2UgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG5cdCAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuXHQgICAgICAgIH0pLm1hcChmdW5jdGlvbihvKSB7XG5cdCAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO1xuXHQgICAgICAgICAgcmV0dXJuIHZhbFxuXHQgICAgICAgIH0pWzBdXG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LCBfdm0uX2woKF92bS5saW1pdHMpLCBmdW5jdGlvbihsaW1pdCkge1xuXHQgICAgcmV0dXJuIF9jKCdvcHRpb24nLCB7XG5cdCAgICAgIGRvbVByb3BzOiB7XG5cdCAgICAgICAgXCJ2YWx1ZVwiOiBsaW1pdFxuXHQgICAgICB9XG5cdCAgICB9LCBbX3ZtLl92KF92bS5fcyhsaW1pdCkpXSlcblx0ICB9KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcblx0ICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcHVsbC1yaWdodFwiXG5cdCAgfSwgW19jKCdpbnB1dCcsIHtcblx0ICAgIGRpcmVjdGl2ZXM6IFt7XG5cdCAgICAgIG5hbWU6IFwibW9kZWxcIixcblx0ICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG5cdCAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaCksXG5cdCAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcblx0ICAgIH1dLFxuXHQgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG5cdCAgICBhdHRyczoge1xuXHQgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG5cdCAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLnRyYW5zbGF0aW9uLnRhYmxlLnBsYWNlaG9sZGVyX3NlYXJjaFxuXHQgICAgfSxcblx0ICAgIGRvbVByb3BzOiB7XG5cdCAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5zZWFyY2gpXG5cdCAgICB9LFxuXHQgICAgb246IHtcblx0ICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcblx0ICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG5cdCAgICAgICAgX3ZtLnNlYXJjaCA9ICRldmVudC50YXJnZXQudmFsdWVcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuXHQgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG5cdCAgICBhdHRyczoge1xuXHQgICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuXHQgICAgfSxcblx0ICAgIG9uOiB7XG5cdCAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG5cdCAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdCAgICAgICAgX3ZtLnNlYXJjaGluZygkZXZlbnQpXG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udHJhbnNsYXRpb24udGFibGUubGFiZWxfc2VhcmNoKSArIFwiXFxuICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG5cdCAgICBzdGF0aWNDbGFzczogXCJjbGVhcmZpeFwiXG5cdCAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuXHQgICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtYm9keSBWdWVfX3BhbmVsLWJvZHlcIlxuXHQgIH0sIFtfYygndGFibGUnLCB7XG5cdCAgICBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIFZ1ZV9fdGFibGVcIlxuXHQgIH0sIFtfYygndGhlYWQnLCBbX2MoJ3RyJywgX3ZtLl9sKChfdm0uY29sdW1ucyksIGZ1bmN0aW9uKGNvbHVtbikge1xuXHQgICAgcmV0dXJuIF9jKCd0aCcsIFtfdm0uX3YoX3ZtLl9zKGNvbHVtbi5uYW1lKSldKVxuXHQgIH0pKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGJvZHknLCBbKF92bS5wYWdpbmF0aW9uLnRvdGFsID09IDApID8gX2MoJ3RyJywgW19jKCd0ZCcsIHtcblx0ICAgIGF0dHJzOiB7XG5cdCAgICAgIFwiY29sc3BhblwiOiBfdm0uY29sdW1ucy5sZW5ndGhcblx0ICAgIH1cblx0ICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udHJhbnNsYXRpb24udGFibGUucmVjb3Jkc19ub3RfZm91bmQpKV0pXSkgOiBfdm0uX2woKF92bS50YWJsZURhdGEpLCBmdW5jdGlvbihyb3csIGluZGV4KSB7XG5cdCAgICByZXR1cm4gX2MoJ3RyJywge1xuXHQgICAgICBjbGFzczoge1xuXHQgICAgICAgICdzdWNjZXNzJzogKGluZGV4ID09IF92bS5pbmRleFNlbGVjdGVkKVxuXHQgICAgICB9LFxuXHQgICAgICBvbjoge1xuXHQgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG5cdCAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICAgICAgICAgIF92bS5zZWxlY3RSb3cocm93LCBpbmRleClcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH0sIF92bS5fbCgoX3ZtLmNvbHVtbnMpLCBmdW5jdGlvbihrKSB7XG5cdCAgICAgIHJldHVybiBfYygndGQnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmZldGNoRnJvbU9iamVjdChyb3csIGsua2V5LCBrLnJlbmRlcikpICsgXCJcXG4gICAgICAgICAgXCIpXSlcblx0ICAgIH0pKVxuXHQgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygndHInLCBbX2MoJ3RkJywge1xuXHQgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcblx0ICAgIGF0dHJzOiB7XG5cdCAgICAgIFwiY29sc3BhblwiOiBfdm0uY29sdW1ucy5sZW5ndGhcblx0ICAgIH1cblx0ICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRhYmxlSW5mbykgKyBcIlxcbiAgICAgICAgICBcIildKV0pXSwgMildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuXHQgICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtZm9vdGVyIFZ1ZV9fcGFuZWwtZm9vdGVyXCJcblx0ICB9LCBbX2MoJ2RpdicsIHtcblx0ICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdFwiXG5cdCAgfSwgW19jKCdkaXYnLCB7XG5cdCAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXAgVnVlX19kYXRhc291cmNlX2FjdGlvbnNcIlxuXHQgIH0sIF92bS5fbCgoX3ZtLmFjdGlvbnMpLCBmdW5jdGlvbihidG4pIHtcblx0ICAgIHJldHVybiBfYygnYnV0dG9uJywge1xuXHQgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcblx0ICAgICAgY2xhc3M6IGJ0bi5jbGFzcyxcblx0ICAgICAgYXR0cnM6IHtcblx0ICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuXHQgICAgICB9LFxuXHQgICAgICBvbjoge1xuXHQgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG5cdCAgICAgICAgICBidG4uZXZlbnQoJGV2ZW50LCBfdm0uc2VsZWN0ZWQpXG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9LCBbKGJ0bi5pY29uKSA/IF9jKCdpJywge1xuXHQgICAgICBzdGF0aWNDbGFzczogXCJwcjFcIixcblx0ICAgICAgY2xhc3M6IGJ0bi5pY29uXG5cdCAgICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhidG4udGV4dCkgKyBcIlxcbiAgICAgICAgICBcIildKVxuXHQgIH0pKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuXHQgICAgc3RhdGljQ2xhc3M6IFwicHVsbC1yaWdodFwiXG5cdCAgfSwgW19jKCdwYWdpbmF0aW9uJywge1xuXHQgICAgYXR0cnM6IHtcblx0ICAgICAgXCJwYWdlc1wiOiBfdm0ucGFnaW5hdGlvbixcblx0ICAgICAgXCJ0cmFuc2xhdGlvblwiOiBfdm0udHJhbnNsYXRpb24ucGFnaW5hdGlvblxuXHQgICAgfSxcblx0ICAgIG9uOiB7XG5cdCAgICAgIFwiY2hhbmdlXCI6IF92bS5jaGFuZ2VQYWdlXG5cdCAgICB9XG5cdCAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcblx0ICAgIHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCJcblx0ICB9KV0pXSldKVxuXHR9LHN0YXRpY1JlbmRlckZuczogW119XG5cbi8qKiovIH0sXG4vKiAxMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblx0XG5cdC8vIGxvYWQgdGhlIHN0eWxlc1xuXHR2YXIgY29udGVudCA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cdGlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXHQvLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG5cdHZhciB1cGRhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKGNvbnRlbnQsIHt9KTtcblx0aWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cdC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcblx0aWYoZmFsc2UpIHtcblx0XHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRcdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ0MTdjNDM2JnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9QYWdpbmF0aW9uLnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NDE3YzQzNiZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUGFnaW5hdGlvbi52dWVcIik7XG5cdFx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRcdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xuXHR9XG5cbi8qKiovIH0sXG4vKiAxNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblx0XG5cdC8vIGxvYWQgdGhlIHN0eWxlc1xuXHR2YXIgY29udGVudCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cdGlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXHQvLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG5cdHZhciB1cGRhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKGNvbnRlbnQsIHt9KTtcblx0aWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cdC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcblx0aWYoZmFsc2UpIHtcblx0XHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRcdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LThkYjQzNDQyJnNjb3BlZD10cnVlIS4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXRhc291cmNlLnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi04ZGI0MzQ0MiZzY29wZWQ9dHJ1ZSEuLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGF0YXNvdXJjZS52dWVcIik7XG5cdFx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRcdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xuXHR9XG5cbi8qKiovIH1cbi8qKioqKiovIF0pXG59KTtcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZ1ZS1kYXRhc291cmNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtZGF0YXNvdXJjZS9kaXN0L3Z1ZS1kYXRhc291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0ZXh0YXJlYScpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQ1YzVlMzU4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00NWM1ZTM1OCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi01OGEyNjQ1YyZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVXNlckxpc3QudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1VzZXJMaXN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTU4YTI2NDVjIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1VzZXJMaXN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi01OGEyNjQ1Y1wiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2dlcm1hbi9TaXRlcy9zb21lbGluZS1zdGFydGVyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVXNlckxpc3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTU4YTI2NDVjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNThhMjY0NWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX3ZtLl9tKDApXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiXG4gIH0sIFtfdm0uX3YoXCJFeGFtcGxlIENvbXBvbmVudFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWJvZHlcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBJJ20gYW4gZXhhbXBsZSBjb21wb25lbnQhXFxuICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1hY2Y2MGE0OFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYWNmNjBhNDghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIndyYXBwZXItbWRcIlxuICB9LCBbX2MoJ2gxJywgW192bS5fdihfdm0uX3MoX3ZtLiR0KCd1c2VyLnVzZXJzJykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RhdGFzb3VyY2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFibGUtZGF0YVwiOiBfdm0uaXRlbXMsXG4gICAgICBcImxhbmd1YWdlXCI6IFwiZW5cIixcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY29sdW1ucyxcbiAgICAgIFwicGFnaW5hdGlvblwiOiBfdm0ucGFnaW5hdGlvblxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IF92bS5jaGFuZ2VQYWdlLFxuICAgICAgXCJzZWFyY2hpbmdcIjogX3ZtLm9uU2VhcmNoXG4gICAgfVxuICB9KV0sIDEpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNThhMjY0NWNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTU4YTI2NDVjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDVjNWUzNTgmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIzMTJjYTU5ZVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDVjNWUzNTgmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDVjNWUzNTgmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDVjNWUzNTgmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNThhMjY0NWMmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VzZXJMaXN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0NGI4ZTE3MlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNThhMjY0NWMmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VzZXJMaXN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNThhMjY0NWMmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VzZXJMaXN0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNThhMjY0NWMmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxudmFyIGxpc3RUb1N0eWxlcyA9IHJlcXVpcmUoJy4vbGlzdFRvU3R5bGVzJylcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7IGNzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHBhcnQuaWQgPSBwYXJlbnRJZCArICc6MCdcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0LmlkID0gcGFyZW50SWQgKyAnOicgKyBuZXdTdHlsZXNbaWRdLnBhcnRzLmxlbmd0aFxuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS12dWUtc3NyLWlkfj1cIicgKyBvYmouaWQgKyAnXCJdJylcbiAgdmFyIGhhc1NTUiA9IHN0eWxlRWxlbWVudCAhPSBudWxsXG5cbiAgLy8gaWYgaW4gcHJvZHVjdGlvbiBtb2RlIGFuZCBzdHlsZSBpcyBhbHJlYWR5IHByb3ZpZGVkIGJ5IFNTUixcbiAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gIGlmIChoYXNTU1IgJiYgaXNQcm9kdWN0aW9uKSB7XG4gICAgcmV0dXJuIG5vb3BcbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gc3R5bGVFbGVtZW50IHx8IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKCFoYXNTU1IpIHtcbiAgICB1cGRhdGUob2JqKVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5FeGFtcGxlIENvbXBvbmVudDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBJJ20gYW4gZXhhbXBsZSBjb21wb25lbnQhXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IG1vdW50ZWQuJylcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEV4YW1wbGUudnVlPzE1NWFjMjllIiwiPHRlbXBsYXRlPlxuXG4gICAgPHRleHRhcmVhPjwvdGV4dGFyZWE+XG5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBhdXRvc2l6ZSBmcm9tICdhdXRvc2l6ZSdcbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IFsncmVzaXplZCddLFxuICAgICAgICBtb3VudGVkICgpIHtcbiAgICAgICAgICAgIGF1dG9zaXplKHRoaXMuJGVsKVxuICAgICAgICAgICAgaWYgKHRoaXMucmVzaXplZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudFt0aGlzLnJlc2l6ZWRdKHRoaXMuJGVsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGF1dG9zaXplLXRleHRhcmVhLnZ1ZT9hNzRlZDkzYyIsIndpbmRvdy5fID0gcmVxdWlyZSgnbG9kYXNoJyk7XG53aW5kb3cubW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG5cbi8qKlxuICogV2UnbGwgbG9hZCBqUXVlcnkgYW5kIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbiB3aGljaCBwcm92aWRlcyBzdXBwb3J0XG4gKiBmb3IgSmF2YVNjcmlwdCBiYXNlZCBCb290c3RyYXAgZmVhdHVyZXMgc3VjaCBhcyBtb2RhbHMgYW5kIHRhYnMuIFRoaXNcbiAqIGNvZGUgbWF5IGJlIG1vZGlmaWVkIHRvIGZpdCB0aGUgc3BlY2lmaWMgbmVlZHMgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAqL1xuXG4vKipcbiAqIEBXQVJOSU5HOiBUaGVzZSB0d28gbGlicmFyaWVzIGFyZSBpbmNsdWRlZCBpbiB0aGVtZS5qcywgc28gbm8gbmVlZCB0byBpbmNsdWRlIGFnYWluLlxuICovXG4vLyB3aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcbi8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC1zYXNzJyk7XG5cbi8qKlxuICogVnVlIGlzIGEgbW9kZXJuIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgYnVpbGRpbmcgaW50ZXJhY3RpdmUgd2ViIGludGVyZmFjZXNcbiAqIHVzaW5nIHJlYWN0aXZlIGRhdGEgYmluZGluZyBhbmQgcmV1c2FibGUgY29tcG9uZW50cy4gVnVlJ3MgQVBJIGlzIGNsZWFuXG4gKiBhbmQgc2ltcGxlLCBsZWF2aW5nIHlvdSB0byBmb2N1cyBvbiBidWlsZGluZyB5b3VyIG5leHQgZ3JlYXQgcHJvamVjdC5cbiAqL1xuXG53aW5kb3cuVnVlID0gcmVxdWlyZSgndnVlJyk7XG53aW5kb3cuVnVleCA9IHJlcXVpcmUoJ3Z1ZXgnKTtcbndpbmRvdy5WdWVSb3V0ZXIgPSByZXF1aXJlKCd2dWUtcm91dGVyJyk7XG53aW5kb3cuVnVlSTE4biA9IHJlcXVpcmUoJ3Z1ZS1pMThuJyk7XG5yZXF1aXJlKCcuL2ZpbHRlcnMvaGVscGVycycpO1xuXG5WdWUudXNlKFZ1ZXgpO1xuVnVlLnVzZShWdWVSb3V0ZXIpO1xuVnVlLnVzZShWdWVJMThuKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uID0ge1xuICAgICdYLUNTUkYtVE9LRU4nOiB3aW5kb3cuTGFyYXZlbC5jc3JmVG9rZW4sXG4gICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBTb21lbGluZS5sb2NhbGVcbn07XG5cblZ1ZS5wcm90b3R5cGUuJGh0dHAgPSB3aW5kb3cuYXhpb3M7XG5cbnZhciBhcGlBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogJy9hcGkvJyxcbiAgICB0aW1lb3V0OiAxMDAwMCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24veC5zb21lbGluZS52MStqc29uJyxcbiAgICB9XG59KTtcblZ1ZS5wcm90b3R5cGUuJGFwaSA9IGFwaUF4aW9zO1xuXG4vKipcbiAqIEVjaG8gZXhwb3NlcyBhbiBleHByZXNzaXZlIEFQSSBmb3Igc3Vic2NyaWJpbmcgdG8gY2hhbm5lbHMgYW5kIGxpc3RlbmluZ1xuICogZm9yIGV2ZW50cyB0aGF0IGFyZSBicm9hZGNhc3QgYnkgTGFyYXZlbC4gRWNobyBhbmQgZXZlbnQgYnJvYWRjYXN0aW5nXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXG4gKi9cblxuLy8gaW1wb3J0IEVjaG8gZnJvbSBcImxhcmF2ZWwtZWNob1wiXG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6ICd5b3VyLXB1c2hlci1rZXknXG4vLyB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IExpYmVybiBvbiAyNi81LzE2LlxuICovXG5leHBvcnQgZGVmYXVsdHtcbiAgICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kaXJlY3RpdmVzL2ZvY3VzLmpzIiwiLyoqXG4gKiBDaGFuZ2VzIHZhbHVlIHRvIHBhc3QgdGVuc2UuXG4gKiBTaW1wbGUgZmlsdGVyIGRvZXMgbm90IHN1cHBvcnQgaXJyZWd1bGFyIHZlcmJzIHN1Y2ggYXMgZWF0LWF0ZSwgZmx5LWZsZXcsIGV0Yy5cbiAqIGh0dHA6Ly9qc2ZpZGRsZS5uZXQvYnJ5YW5fay8weGN6bWUyci9cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHN0cmluZy5cbiAqL1xuVnVlLmZpbHRlcigncGFzdC10ZW5zZScsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgLy8gU2xpZ2h0bHkgZm9sbG93cyBodHRwOi8vd3d3Lm94Zm9yZGRpY3Rpb25hcmllcy5jb20vdXMvd29yZHMvdmVyYi10ZW5zZXMtYWRkaW5nLWVkLWFuZC1pbmdcbiAgICB2YXIgdm93ZWxzID0gWydhJywgJ2UnLCAnaScsICdvJywgJ3UnXTtcbiAgICBpZighdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsYXN0ID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMSksXG4gICAgICAgIHNlY29uZExhc3QgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnN1YnN0cih2YWx1ZS5sZW5ndGggLSAyLCAxKSxcbiAgICAgICAgdGhpcmRMYXN0ID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMywgMSksXG4gICAgICAgIGxhc3RUd28gPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnN1YnN0cih2YWx1ZS5sZW5ndGggLSAyKSxcbiAgICAgICAgbGFzdFRocmVlID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMyksXG4gICAgICAgIGluQXJyYXkgPSBmdW5jdGlvbihhciwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBhci5pbmRleE9mKHZhbHVlKSAhPSAtMVxuICAgICAgICB9O1xuXG4gICAgLy8gcGFydGljaXBsZSBvciBhbHJlYWR5IHBhc3QgdGVuc2UsIGRvbid0IHdhbnRcbiAgICBpZihsYXN0VGhyZWUgPT09ICdpbmcnIHx8IGxhc3RUd28gPT09ICdlZCcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8vIEVuZHMgaW4gJ2UnLCBzaW1wbHkgYWRkIHRoZSAnZCdcbiAgICBpZihsYXN0ID09PSAnZScpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICsgJ2QnO1xuICAgIH1cblxuICAgIC8vIEVuZHMgaW4gJ2MnLCBhZGQgdGhlICdrZWQnXG4gICAgaWYobGFzdCA9PT0gJ2MnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSArICdrZWQnO1xuICAgIH1cblxuICAgIC8vIEVuZHMgd2l0aCBjb25zb25hbnQsIHZvd2VsLCBjb25zb25hbnQuIEknbSBzaW1wbGUsIGRvdWJsZSBjb25zb25hbnQgYW5kIGFkZCAnZWQnXG4gICAgaWYoIWluQXJyYXkodm93ZWxzLCB0aGlyZExhc3QpICYmIGluQXJyYXkodm93ZWxzLCBzZWNvbmRMYXN0KSAmJiAhaW5BcnJheSh2b3dlbHMsIGxhc3QpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSArIGxhc3QgKyAnZWQnO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZSArICdlZCc7XG59KTtcblxuLyoqXG4gKiBWdWUgZmlsdGVyIHRvIGNvbnZlcnQgYSBzbHVnIHRvIGEgbW9yZSBodW1hbiBmcmllbmRseSBmb3JtLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgc3RyaW5nLlxuICovXG5WdWUuZmlsdGVyKCdodW1hbmFibGUnLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB3b3JkcyA9IHZhbHVlLnNwbGl0KC9bLV9dKy9nKTtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGZvcih2YXIgaT0wOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGxldHRlciA9IHdvcmRzW2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICByZXN1bHRzLnB1c2gobGV0dGVyICsgd29yZHNbaV0uc2xpY2UoMSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cy5qb2luKCcgJyk7XG59KTtcblxuLyoqXG4gKiBWdWUgZmlsdGVyIHRvIGNvbnZlcnQgdGhlIGdpdmVuIHZhbHVlIHRvIHBlcmNlbnQuXG4gKiBodHRwOi8vanNmaWRkbGUubmV0L2JyeWFuX2svcWF1ZjNxeWgvXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlICAgIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKiBAcGFyYW0ge051bWJlcn0gZGVjaW1hbHMgVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcy5cbiAqL1xuVnVlLmZpbHRlcigncGVyY2VudGFnZScsIGZ1bmN0aW9uKHZhbHVlLCBkZWNpbWFscykge1xuICAgIGlmKCF2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IDA7XG4gICAgfVxuXG4gICAgaWYoIWRlY2ltYWxzKSB7XG4gICAgICAgIGRlY2ltYWxzID0gMDtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlICogMTAwO1xuICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAqIE1hdGgucG93KDEwLCBkZWNpbWFscykpIC8gTWF0aC5wb3coMTAsIGRlY2ltYWxzKTtcbiAgICB2YWx1ZSA9IHZhbHVlICsgJyUnO1xuICAgIHJldHVybiB2YWx1ZTtcbn0pO1xuXG5cbi8qKlxuICogVnVlIGZpbHRlciB0byByb3VuZCB0aGUgZGVjaW1hbCB0byB0aGUgZ2l2ZW4gcGxhY2UuXG4gKiBodHRwOi8vanNmaWRkbGUubmV0L2JyeWFuX2svM292YTE3eTkvXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlICAgIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKiBAcGFyYW0ge051bWJlcn0gZGVjaW1hbHMgVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcy5cbiAqL1xuVnVlLmZpbHRlcigncm91bmQnLCBmdW5jdGlvbih2YWx1ZSwgZGVjaW1hbHMpIHtcbiAgICBpZighdmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSAwO1xuICAgIH1cblxuICAgIGlmKCFkZWNpbWFscykge1xuICAgICAgICBkZWNpbWFscyA9IDA7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlICogTWF0aC5wb3coMTAsIGRlY2ltYWxzKSkgLyBNYXRoLnBvdygxMCwgZGVjaW1hbHMpO1xuICAgIHJldHVybiB2YWx1ZTtcbn0pO1xuXG5cbi8qKlxuICogVnVlIGZpbHRlciB0byBjb252ZXJ0IHRoZSBnaXZlbiB2YWx1ZSB0byB3aG9sZSBkb2xsYXJzLCBubyBjaGFuZ2UuXG4gKiBodHRwOi8vanNmaWRkbGUubmV0L2JyeWFuX2svMnQ2YnFxZmMvXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKi9cblZ1ZS5maWx0ZXIoJ25vLWNoYW5nZScsIGZ1bmN0aW9uKHZhbHVlLCBzeW1ib2wpIHtcbiAgICBpZighdmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSAwO1xuICAgIH1cblxuICAgIGlmKCFzeW1ib2wpIHtcbiAgICAgICAgc3ltYm9sID0gJyQnO1xuICAgIH1cblxuICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpLnNwbGl0KCcuJylbMF07XG4gICAgcmV0dXJuIHN5bWJvbCArIHZhbHVlO1xufSk7XG5cbi8qKlxuICogVnVlIGZpbHRlciB0byBtYWtlIGEgc2ltcGxlIHRpbWVzdGFtcCBmb3IgYW4gSVNPIGRhdGUuXG4gKiBodHRwOi8vanNmaWRkbGUubmV0L2JyeWFuX2svNDRrcXRwZWcvXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKi9cblZ1ZS5maWx0ZXIoJ3RpbWVzdGFtcCcsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHBhcnRzID0gdmFsdWUuc3BsaXQoJyAnKTtcbiAgICB2YXIgZGF0ZSA9IHBhcnRzWzBdO1xuICAgIHZhciB0aW1lID0gcGFydHNbMV07XG5cbiAgICBkYXRlID0gZGF0ZS5zcGxpdCgnLScpO1xuICAgIHRpbWUgPSB0aW1lLnNwbGl0KCc6Jyk7XG5cbiAgICBpZihwYXJzZUludCh0aW1lWzBdLCAxMCkgPiAxMikge1xuICAgICAgICB2YXIgaG91ciA9IHBhcnNlSW50KHRpbWVbMF0sIDEwKSAlIDEyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGhvdXIgPSBwYXJzZUludCh0aW1lWzBdLCAxMCk7XG4gICAgfVxuXG4gICAgaG91ciA9IGhvdXIgPCAxMCA/ICcwJyArIGhvdXIgOiBob3VyO1xuXG4gICAgcmV0dXJuICdbJyArIGRhdGVbMV0gKyAnLycgKyBkYXRlWzJdICsgJyAnICsgaG91ciArICc6JyArIHRpbWVbMV0gKyAnXSc7XG59KTtcblxuLyoqXG4gKiBWdWUgZmlsdGVyIHRvIHRydW5jYXRlIGEgc3RyaW5nIHRvIHRoZSBzcGVjaWZpZWQgbGVuZ3RoLlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKi9cblZ1ZS5maWx0ZXIoJ3RydW5jYXRlJywgZnVuY3Rpb24odmFsdWUsIGxlbmd0aCkge1xuICAgIGlmKHZhbHVlLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgbGVuZ3RoID0gbGVuZ3RoIC0gMztcblxuICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcoMCwgbGVuZ3RoKSArICcuLi4nO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9maWx0ZXJzL2hlbHBlcnMuanMiXSwic291cmNlUm9vdCI6IiJ9