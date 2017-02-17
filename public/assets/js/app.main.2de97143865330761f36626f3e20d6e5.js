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
Vue.component('sl-user-list', __webpack_require__(201));

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
exports.push([module.i, "\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"autosize-textarea.vue"}]);

/***/ }),

/***/ 171:
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

/* harmony default export */ __webpack_exports__["default"] = {
    props: [],
    data: function data() {
        return {
            //                msg: 'hello vue',
            items: []
        };
    },

    computed: {},
    components: {
        'sl-user-list-item': __webpack_require__(202)
    },
    mounted: function mounted() {
        console.log('Component Ready.');

        this.fetchData();
    },

    watch: {},
    events: {},
    methods: {
        fetchData: function fetchData() {
            var _this = this;

            this.$api.get('/users', {
                params: {
                    //                        include: ''
                }
            }).then(function (response) {
                console.log(response);
                _this.items = response.data.data;
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

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"UserListGroupItem.vue"}]);

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

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"UserList.vue"}]);

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

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(239)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(171),
  /* template */
  __webpack_require__(226),
  /* scopeId */
  "data-v-c83552aa",
  /* cssModules */
  null
)
Component.options.__file = "/Users/libern/Code/someline-starter-master/resources/assets/js/components/app/users/UserList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UserList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c83552aa", Component.options)
  } else {
    hotAPI.reload("data-v-c83552aa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(230)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(172),
  /* template */
  __webpack_require__(216),
  /* scopeId */
  "data-v-2c196e12",
  /* cssModules */
  null
)
Component.options.__file = "/Users/libern/Code/someline-starter-master/resources/assets/js/components/app/users/UserListGroupItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UserListGroupItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c196e12", Component.options)
  } else {
    hotAPI.reload("data-v-2c196e12", Component.options)
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

/***/ 216:
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
     require("vue-hot-reload-api").rerender("data-v-2c196e12", module.exports)
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

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper-md"
  }, [_c('h1', [_vm._v(_vm._s(_vm.$t('user.users')))]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "list-group list-group-lg list-group-sp"
  }, [_vm._l((_vm.items), function(item) {
    return [_c('div', {
      staticClass: "col-md-4 m-b-sm"
    }, [_c('sl-user-list-item', {
      attrs: {
        "item": item
      }
    })], 1)]
  })], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c83552aa", module.exports)
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
var content = __webpack_require__(188);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("17b2ca27", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2c196e12&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserListGroupItem.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2c196e12&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserListGroupItem.vue");
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

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("f4285234", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c83552aa&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserList.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c83552aa&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 242:
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

},[242]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzP2Q0ZjMqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZmlsdGVycy9ubDJici5qcz82ZTczKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9idXMuanM/MTgzZioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvanF1ZXJ5LmpzP2RlZTEqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3N0b3JlLmpzP2EzZTUqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3Rvb2xzLmpzPzJlMDAqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3VzZXIuanM/OTNiMSoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9sZXNzL2FwcC5sZXNzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvbGVzcy9jb25zb2xlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9sZXNzL21vYmlsZS5sZXNzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWU/ZDJkYSoqIiwid2VicGFjazovLy9Vc2VyTGlzdC52dWUiLCJ3ZWJwYWNrOi8vL1VzZXJMaXN0R3JvdXBJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRXhhbXBsZS52dWU/MGJmZSoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdEdyb3VwSXRlbS52dWU/MTgyMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlPzM4YzIqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3QudnVlPzgxMDEiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcz9kYTA0KiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRXhhbXBsZS52dWU/NWZjOSoqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3RHcm91cEl0ZW0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWU/MDVjNCoqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3RHcm91cEl0ZW0udnVlP2E3NzEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZT8wZGQ5KioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdC52dWU/MDY1OSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcz9lNmFjKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0R3JvdXBJdGVtLnZ1ZT8zOGZjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3QudnVlPzc2ODUiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanM/NmIyYioiLCJ3ZWJwYWNrOi8vL0V4YW1wbGUudnVlPzM0NGMqIiwid2VicGFjazovLy9hdXRvc2l6ZS10ZXh0YXJlYS52dWU/Mjk1MyoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanM/NTkxMSoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kaXJlY3RpdmVzL2ZvY3VzLmpzP2RiNWQqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZmlsdGVycy9oZWxwZXJzLmpzPzk4ZjQqIl0sIm5hbWVzIjpbInJlYWQiLCJ2YWwiLCJyZXBsYWNlIiwiUmVnRXhwIiwiY29tcHV0ZWQiLCJidXMiLCJ3aW5kb3ciLCJtZXRob2RzIiwiZXZlbnRFbWl0IiwibmFtZSIsImRhdGEiLCIkZW1pdCIsImV2ZW50T24iLCJjYWxsYmFjayIsIiRvbiIsImV2ZW50T2ZmIiwiJG9mZiIsIkFwcEhlYWRlclNldFRpdGxlIiwidGl0bGUiLCJBcHBUYWJCYXJTZXRTaG93QXBwVGFiQmFyIiwiaXNTaG93IiwiQXBwVGFiQmFyU2VsZWN0VGFiQmFySXRlbSIsImluZGV4IiwiQXBwSGVhZGVyU2V0TmF2QnV0dG9uTGVmdCIsImNsYXNzTmFtZSIsIkFwcEhlYWRlclNldE5hdkJ1dHRvblJpZ2h0Iiwic2Nyb2xsVG9Cb3R0b20iLCJzZWxlY3RvciIsImFuaW1hdGVkIiwiYW5pbWF0ZVRpbWUiLCIkZWxlbWVudCIsIiQiLCJzY3JvbGxIZWlnaHQiLCJwcm9wIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInZ1ZXhTdG9yZSIsInN0b3JlQ29tbWl0IiwiY29tbWl0Iiwic3RvcmVEaXNwYXRjaCIsImRpc3BhdGNoIiwibm93VGltZXN0YW1wIiwibW9tZW50IiwidW5peCIsIm1vbWVudEZyb21EYXRlVGltZSIsImRhdGVUaW1lIiwiZGF0ZVRpbWVUb1RpbWVzdGFtcCIsInVybCIsInBhdGgiLCJzdWJzdHJpbmciLCJiYXNlVXJsIiwicmVkaXJlY3RUb1VybCIsImxvY2F0aW9uIiwiaHJlZiIsInJlZGlyZWN0VG9VcmxGcm9tQmFzZVVybCIsInJlbG9hZFBhZ2UiLCJvYmplY3RUb0Zvcm1EYXRhIiwiaXRlbSIsImZvcm1fZGF0YSIsIkZvcm1EYXRhIiwia2V5IiwiYXBwZW5kIiwiaXNFbXB0eU9iamVjdCIsIm9iamVjdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJpc01vYmlsZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwicmVxdWlyZSIsIlZ1ZSIsImRpcmVjdGl2ZSIsImZpbHRlciIsIm1peGluIiwiY29tcG9uZW50IiwiVnVleCIsIlN0b3JlIiwic3RhdGUiLCJwbGF0Zm9ybSIsImNvdW50IiwibXV0YXRpb25zIiwiaW5jcmVtZW50IiwiYXBwIiwiZWwiLCJtc2ciLCJ3YXRjaCIsImV2ZW50cyIsImNyZWF0ZWQiLCJjb25zb2xlIiwibG9nIiwiaW5pdExvY2FsZSIsIm1vdW50ZWQiLCJ0aGF0IiwibGFuZyIsImxvY2FsZSIsImNvbmZpZyIsIlNvbWVsaW5lIiwibG9jYWxlcyIsImN1cnJlbnRVc2VySWQiLCJ1c2VyIiwidXNlcl9pZCIsIl8iLCJWdWVSb3V0ZXIiLCJWdWVJMThuIiwidXNlIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJMYXJhdmVsIiwiY3NyZlRva2VuIiwicHJvdG90eXBlIiwiJGh0dHAiLCJhcGlBeGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJ0aW1lb3V0IiwiJGFwaSIsImJpbmQiLCJmb2N1cyIsInZhbHVlIiwidm93ZWxzIiwibGFzdCIsInRvTG93ZXJDYXNlIiwic3Vic3RyIiwic2Vjb25kTGFzdCIsInRoaXJkTGFzdCIsImxhc3RUd28iLCJsYXN0VGhyZWUiLCJpbkFycmF5IiwiYXIiLCJpbmRleE9mIiwid29yZHMiLCJzcGxpdCIsInJlc3VsdHMiLCJpIiwibGV0dGVyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJwdXNoIiwic2xpY2UiLCJqb2luIiwiZGVjaW1hbHMiLCJNYXRoIiwicm91bmQiLCJwb3ciLCJzeW1ib2wiLCJ0b1N0cmluZyIsInBhcnRzIiwiZGF0ZSIsInRpbWUiLCJwYXJzZUludCIsImhvdXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDOUNBO0FBQUE7OztBQUdBLDhEQUFlO0FBQ1hBLFVBQU0sY0FBVUMsR0FBVixFQUFlO0FBQ2pCLGVBQU9BLElBQUlDLE9BQUosQ0FBWSxJQUFJQyxNQUFKLENBQVcsT0FBWCxFQUFvQixHQUFwQixDQUFaLEVBQXNDLFFBQXRDLENBQVA7QUFDSDtBQUhVLENBQWYsQzs7Ozs7Ozs7QUNIQSx3REFBYztBQUNWQyxjQUFVO0FBQ05DLFdBRE0saUJBQ0Q7QUFDRCxtQkFBT0MsT0FBT0QsR0FBZDtBQUNIO0FBSEssS0FEQTtBQU1WRSxhQUFTO0FBQ0xDLGlCQURLLHFCQUNLQyxJQURMLEVBQ1dDLElBRFgsRUFDZ0I7QUFDakIsaUJBQUtMLEdBQUwsQ0FBU00sS0FBVCxDQUFlRixJQUFmLEVBQXFCQyxJQUFyQjtBQUNILFNBSEk7QUFJTEUsZUFKSyxtQkFJR0gsSUFKSCxFQUlTSSxRQUpULEVBSWtCO0FBQ25CLGlCQUFLUixHQUFMLENBQVNTLEdBQVQsQ0FBYUwsSUFBYixFQUFtQkksUUFBbkI7QUFDSCxTQU5JO0FBT0xFLGdCQVBLLG9CQU9JTixJQVBKLEVBT1VJLFFBUFYsRUFPbUI7QUFD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QUF3QjtBQUMzQyxRQUFHdUQsTUFBTXZELE1BQU4sR0FBZUEsTUFBbEIsRUFBMEI7QUFDdEIsZUFBT3VELEtBQVA7QUFDSDs7QUFFRHZELGFBQVNBLFNBQVMsQ0FBbEI7O0FBRUEsV0FBT3VELE1BQU14RSxTQUFOLENBQWdCLENBQWhCLEVBQW1CaUIsTUFBbkIsSUFBNkIsS0FBcEM7QUFDSCxDQVJELEUiLCJmaWxlIjoiL2Fzc2V0cy9qcy9hcHAubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBvcHRpb25zLmNvbXB1dGVkIHx8IChvcHRpb25zLmNvbXB1dGVkID0ge30pXG4gICAgT2JqZWN0LmtleXMoY3NzTW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbW9kdWxlID0gY3NzTW9kdWxlc1trZXldXG4gICAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IExpYmVybiBvbiAyNi83LzE2LlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVhZDogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICByZXR1cm4gdmFsLnJlcGxhY2UobmV3IFJlZ0V4cCgnXFxyP1xcbicsICdnJyksICc8YnIgLz4nKTtcbiAgICB9LFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZmlsdGVycy9ubDJici5qcyIsImV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGJ1cygpe1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5idXM7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGV2ZW50RW1pdChuYW1lLCBkYXRhKXtcbiAgICAgICAgICAgIHRoaXMuYnVzLiRlbWl0KG5hbWUsIGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBldmVudE9uKG5hbWUsIGNhbGxiYWNrKXtcbiAgICAgICAgICAgIHRoaXMuYnVzLiRvbihuYW1lLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50T2ZmKG5hbWUsIGNhbGxiYWNrKXtcbiAgICAgICAgICAgIHRoaXMuYnVzLiRvZmYobmFtZSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICBBcHBIZWFkZXJTZXRUaXRsZSh0aXRsZSl7XG4gICAgICAgICAgICB0aGlzLmJ1cy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB9LFxuICAgICAgICBBcHBUYWJCYXJTZXRTaG93QXBwVGFiQmFyKGlzU2hvdyl7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RW1pdChcIkFwcFRhYkJhcl9zZXRTaG93QXBwVGFiQmFyXCIsIGlzU2hvdyk7XG4gICAgICAgIH0sXG4gICAgICAgIEFwcFRhYkJhclNlbGVjdFRhYkJhckl0ZW0oaW5kZXgpe1xuICAgICAgICAgICAgdGhpcy5ldmVudEVtaXQoXCJBcHBUYWJCYXJfc2VsZWN0VGFiQmFySXRlbVwiLCBpbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIEFwcEhlYWRlclNldE5hdkJ1dHRvbkxlZnQoY2xhc3NOYW1lKXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRFbWl0KFwiQXBwSGVhZGVyX3NldE5hdkJ1dHRvbkxlZnRcIiwgY2xhc3NOYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgQXBwSGVhZGVyU2V0TmF2QnV0dG9uUmlnaHQoY2xhc3NOYW1lKXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRFbWl0KFwiQXBwSGVhZGVyX3NldE5hdkJ1dHRvblJpZ2h0XCIsIGNsYXNzTmFtZSk7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2J1cy5qcyIsImV4cG9ydCBkZWZhdWx0e1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2Nyb2xsVG9Cb3R0b20oc2VsZWN0b3IsIGFuaW1hdGVkLCBhbmltYXRlVGltZSl7XG4gICAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIHZhciBzY3JvbGxIZWlnaHQgPSAkZWxlbWVudC5wcm9wKFwic2Nyb2xsSGVpZ2h0XCIpO1xuICAgICAgICAgICAgaWYgKGFuaW1hdGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhbmltYXRlVGltZSkge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRlVGltZSA9IDEwMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRlbGVtZW50LmFuaW1hdGUoe3Njcm9sbFRvcDogc2Nyb2xsSGVpZ2h0fSwgYW5pbWF0ZVRpbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWxlbWVudC5zY3JvbGxUb3Aoc2Nyb2xsSGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9qcXVlcnkuanMiLCJleHBvcnQgZGVmYXVsdHtcbiAgICBjb21wdXRlZDoge1xuICAgICAgICB2dWV4U3RvcmUoKXtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cudnVleFN0b3JlO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzdG9yZUNvbW1pdChuYW1lLCBkYXRhKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZ1ZXhTdG9yZS5jb21taXQobmFtZSwgZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0b3JlRGlzcGF0Y2gobmFtZSwgZGF0YSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52dWV4U3RvcmUuZGlzcGF0Y2gobmFtZSwgZGF0YSk7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3N0b3JlLmpzIiwiZXhwb3J0IGRlZmF1bHR7XG4gICAgY29tcHV0ZWQ6IHt9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbm93VGltZXN0YW1wKCl7XG4gICAgICAgICAgICByZXR1cm4gbW9tZW50KCkudW5peCgpO1xuICAgICAgICB9LFxuICAgICAgICBtb21lbnRGcm9tRGF0ZVRpbWUoZGF0ZVRpbWUpe1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlVGltZSwgJ1lZWVktTU0tREQgSEg6bW06c3MnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0ZVRpbWVUb1RpbWVzdGFtcChkYXRlVGltZSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb21lbnRGcm9tRGF0ZVRpbWUoZGF0ZVRpbWUpLnVuaXgoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXJsKHBhdGgpe1xuICAgICAgICAgICAgaWYgKHBhdGggJiYgcGF0aC5zdWJzdHJpbmcoMCwgMSkgIT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9ICcvJyArIHBhdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iYXNlVXJsICsgcGF0aDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVkaXJlY3RUb1VybCh1cmwpe1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZGlyZWN0VG9VcmxGcm9tQmFzZVVybCh1cmwpe1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnVybCh1cmwpO1xuICAgICAgICB9LFxuICAgICAgICByZWxvYWRQYWdlKCl7XG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG9Vcmwod2luZG93LmxvY2F0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2JqZWN0VG9Gb3JtRGF0YShpdGVtKXtcbiAgICAgICAgICAgIHZhciBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBmb3JtX2RhdGEuYXBwZW5kKGtleSwgaXRlbVtrZXldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZvcm1fZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNFbXB0eU9iamVjdChvYmplY3Qpe1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkubGVuZ3RoID09PSAwO1xuICAgICAgICB9LFxuICAgICAgICBpc01vYmlsZSgpe1xuICAgICAgICAgICAgdmFyIGlzTW9iaWxlID0gd2luZG93Lm1hdGNoTWVkaWEoXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gKGlzTW9iaWxlLm1hdGNoZXMpO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy90b29scy5qcyIsIlxuLyoqXG4gKiBGaXJzdCB3ZSB3aWxsIGxvYWQgYWxsIG9mIHRoaXMgcHJvamVjdCdzIEphdmFTY3JpcHQgZGVwZW5kZW5jaWVzIHdoaWNoXG4gKiBpbmNsdWRlcyBWdWUgYW5kIG90aGVyIGxpYnJhcmllcy4gSXQgaXMgYSBncmVhdCBzdGFydGluZyBwb2ludCB3aGVuXG4gKiBidWlsZGluZyByb2J1c3QsIHBvd2VyZnVsIHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgVnVlIGFuZCBMYXJhdmVsLlxuICovXG5cbnJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5cbi8vIFZ1ZSBEaXJlY3RpdmVzXG5WdWUuZGlyZWN0aXZlKCdmb2N1cycsIHJlcXVpcmUoJy4vZGlyZWN0aXZlcy9mb2N1cycpKTtcblxuLy8gVnVlIEZpbHRlcnNcblZ1ZS5maWx0ZXIoJ25sMmJyJywgcmVxdWlyZSgnLi9maWx0ZXJzL25sMmJyJykpO1xuXG4vLyBWdWUgTWl4aW5zXG5pbXBvcnQgTWl4SW5Vc2VyIGZyb20gJy4vbWl4aW5zL3VzZXInXG5pbXBvcnQgTWl4SW5KUXVlcnkgZnJvbSAnLi9taXhpbnMvanF1ZXJ5J1xuaW1wb3J0IE1peEluVG9vbHMgZnJvbSAnLi9taXhpbnMvdG9vbHMnXG5pbXBvcnQgTWl4SW5CdXMgZnJvbSAnLi9taXhpbnMvYnVzJ1xuaW1wb3J0IE1peEluU3RvcmUgZnJvbSAnLi9taXhpbnMvc3RvcmUnXG5WdWUubWl4aW4oTWl4SW5Vc2VyKTtcblZ1ZS5taXhpbihNaXhJbkpRdWVyeSk7XG5WdWUubWl4aW4oTWl4SW5Ub29scyk7XG5WdWUubWl4aW4oTWl4SW5CdXMpO1xuVnVlLm1peGluKE1peEluU3RvcmUpO1xuXG4vLyBWdWUgQ29tcG9uZW50c1xuVnVlLmNvbXBvbmVudCgnYXV0b3NpemUtdGV4dGFyZWEnLCByZXF1aXJlKCcuL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlJykpO1xuXG4vKipcbiAqIE5leHQsIHdlIHdpbGwgY3JlYXRlIGEgZnJlc2ggVnVlIGFwcGxpY2F0aW9uIGluc3RhbmNlIGFuZCBhdHRhY2ggaXQgdG9cbiAqIHRoZSBwYWdlLiBUaGVuLCB5b3UgbWF5IGJlZ2luIGFkZGluZyBjb21wb25lbnRzIHRvIHRoaXMgYXBwbGljYXRpb25cbiAqIG9yIGN1c3RvbWl6ZSB0aGUgSmF2YVNjcmlwdCBzY2FmZm9sZGluZyB0byBmaXQgeW91ciB1bmlxdWUgbmVlZHMuXG4gKi9cblxuVnVlLmNvbXBvbmVudCgnZXhhbXBsZScsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9FeGFtcGxlLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3NsLXVzZXItbGlzdCcsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3QudnVlJykpO1xuXG4vLyBCdXNcbmNvbnN0IGJ1cyA9IG5ldyBWdWUoe1xuICAgIGRhdGE6IHtcbiAgICAgICAgdGl0bGU6IFwiU29tZWxpbmVcIixcbiAgICB9XG59KTtcbndpbmRvdy5idXMgPSBidXM7XG5cbi8vIFZ1ZXhcbmNvbnN0IHZ1ZXhTdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcbiAgICBzdGF0ZToge1xuICAgICAgICBwbGF0Zm9ybTogJ2FwcCcsXG4gICAgICAgIGNvdW50OiAwXG4gICAgfSxcbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgaW5jcmVtZW50IChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuY291bnQrK1xuICAgICAgICB9XG4gICAgfVxufSk7XG53aW5kb3cudnVleFN0b3JlID0gdnVleFN0b3JlO1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuICAgIGRhdGE6IHtcbiAgICAgICAgbXNnOiBcImhlbGxvXCIsXG4gICAgfSxcbiAgICBjb21wdXRlZDoge30sXG4gICAgd2F0Y2g6IHt9LFxuICAgIGV2ZW50czoge30sXG4gICAgY3JlYXRlZCgpe1xuICAgICAgICBjb25zb2xlLmxvZygnQm9vdHN0cmFwLicpO1xuICAgICAgICB0aGlzLmluaXRMb2NhbGUoKTtcbiAgICB9LFxuICAgIG1vdW50ZWQoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ1JlYWR5LicpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBpbml0TG9jYWxlKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSW5pdCBMb2NhbGUuJyk7XG5cbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHZhciBsYW5nID0gdGhpcy5sb2NhbGU7XG5cbiAgICAgICAgICAgIFZ1ZS5jb25maWcubGFuZyA9IGxhbmc7XG4gICAgICAgICAgICBWdWUubG9jYWxlKGxhbmcsIHdpbmRvdy5Tb21lbGluZS5sb2NhbGVzKTtcblxuICAgICAgICB9LFxuICAgIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJleHBvcnQgZGVmYXVsdHtcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBiYXNlVXJsKCl7XG4gICAgICAgICAgICByZXR1cm4gU29tZWxpbmUuYmFzZVVybDtcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYWxlKCl7XG4gICAgICAgICAgICByZXR1cm4gU29tZWxpbmUubG9jYWxlO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW50VXNlcklkKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhTb21lbGluZS5zdGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gU29tZWxpbmUuc3RhdGUudXNlci51c2VyX2lkO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy91c2VyLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvbGVzcy9hcHAubGVzc1xuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2xlc3MvY29uc29sZS5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvbGVzcy9tb2JpbGUubGVzc1xuLy8gbW9kdWxlIGlkID0gMTUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcImF1dG9zaXplLXRleHRhcmVhLnZ1ZVwifV0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWRiNzgyOWFlJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwid3JhcHBlci1tZFwiPlxuXG4gICAgICAgIDxoMT57eyAkdCgndXNlci51c2VycycpIH19PC9oMT5cbiAgICAgICAgPGhyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1sZyBsaXN0LWdyb3VwLXNwXCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiaXRlbSBvZiBpdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgbS1iLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2wtdXNlci1saXN0LWl0ZW0gOml0ZW09XCJpdGVtXCI+PC9zbC11c2VyLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiBbXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgICAgIG1zZzogJ2hlbGxvIHZ1ZScsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge30sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdzbC11c2VyLWxpc3QtaXRlbSc6IHJlcXVpcmUoJy4vVXNlckxpc3RHcm91cEl0ZW0udnVlJyksXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgUmVhZHkuJyk7XG5cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7fSxcbiAgICAgICAgZXZlbnRzOiB7fSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZmV0Y2hEYXRhKCl7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRhcGkuZ2V0KCcvdXNlcnMnLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFVzZXJMaXN0LnZ1ZT80OTBkNDRmNiIsIjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjbGVhcmZpeFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInB1bGwtbGVmdCB0aHVtYi1zbSBhdmF0YXIgbS1yXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LnNvbWVsaW5lLmNvbS9lbi91c2VyL3Byb2ZpbGVwaG90by9vcmlnaW4vZjRjY2M0ZGU3OGMwM2ZlMmMzMjE0OTBjZjZmODE1N2Y4MjVlNGM0Zi5qcGdcIlxuICAgICAgICAgICAgICAgICBhbHQ9XCIuLi5cIj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNsZWFyXCI+XG4gICAgICAgICAgICA8c3Bhbj57eyBpdGVtLm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICA8IS0tPHByZT57eyBpdGVtIH19PC9wcmU+LS0+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2E+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczogWydpdGVtJ10sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgICAgICBtc2c6ICdoZWxsbyB2dWUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB1c2VySWQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtLnVzZXJfaWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluaygpe1xuICAgICAgICAgICAgICAgIHJldHVybiBcIi91c2Vycy9cIiArIHRoaXMudXNlcklkICsgXCIjL3VzZXIvXCIgKyB0aGlzLnVzZXJJZCArIFwiL3Byb2ZpbGVcIjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7fSxcbiAgICAgICAgZXZlbnRzOiB7fSxcbiAgICAgICAgbWV0aG9kczoge30sXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFVzZXJMaXN0R3JvdXBJdGVtLnZ1ZT84M2EzOGM4MiIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0V4YW1wbGUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYTQ3YjM4MjYhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRXhhbXBsZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9saWJlcm4vQ29kZS9zb21lbGluZS1zdGFydGVyLW1hc3Rlci9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRXhhbXBsZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBFeGFtcGxlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1hNDdiMzgyNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWE0N2IzODI2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIlVzZXJMaXN0R3JvdXBJdGVtLnZ1ZVwifV0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTJjMTk2ZTEyJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdEdyb3VwSXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtZGI3ODI5YWUmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1kYjc4MjlhZSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtZGI3ODI5YWVcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9saWJlcm4vQ29kZS9zb21lbGluZS1zdGFydGVyLW1hc3Rlci9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYXV0b3NpemUtdGV4dGFyZWEudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWRiNzgyOWFlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZGI3ODI5YWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIlVzZXJMaXN0LnZ1ZVwifV0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWM4MzU1MmFhJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDE5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX3ZtLl9tKDApXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiXG4gIH0sIFtfdm0uX3YoXCJFeGFtcGxlIENvbXBvbmVudFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWJvZHlcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBJJ20gYW4gZXhhbXBsZSBjb21wb25lbnQhXFxuICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1hNDdiMzgyNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYTQ3YjM4MjYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1jODM1NTJhYSZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVXNlckxpc3QudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1VzZXJMaXN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWM4MzU1MmFhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1VzZXJMaXN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi1jODM1NTJhYVwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2xpYmVybi9Db2RlL3NvbWVsaW5lLXN0YXJ0ZXItbWFzdGVyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVXNlckxpc3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWM4MzU1MmFhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYzgzNTUyYWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMmMxOTZlMTImc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VzZXJMaXN0R3JvdXBJdGVtLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Vc2VyTGlzdEdyb3VwSXRlbS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yYzE5NmUxMiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Vc2VyTGlzdEdyb3VwSXRlbS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtMmMxOTZlMTJcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9saWJlcm4vQ29kZS9zb21lbGluZS1zdGFydGVyLW1hc3Rlci9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0R3JvdXBJdGVtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFVzZXJMaXN0R3JvdXBJdGVtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yYzE5NmUxMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJjMTk2ZTEyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3RHcm91cEl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSAyMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0ZXh0YXJlYScpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWRiNzgyOWFlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1kYjc4MjlhZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwLWl0ZW0gY2xlYXJmaXhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgfVxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbGVhclwiXG4gIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLm5hbWUpKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdCB0aHVtYi1zbSBhdmF0YXIgbS1yXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly93d3cuc29tZWxpbmUuY29tL2VuL3VzZXIvcHJvZmlsZXBob3RvL29yaWdpbi9mNGNjYzRkZTc4YzAzZmUyYzMyMTQ5MGNmNmY4MTU3ZjgyNWU0YzRmLmpwZ1wiLFxuICAgICAgXCJhbHRcIjogXCIuLi5cIlxuICAgIH1cbiAgfSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTJjMTk2ZTEyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yYzE5NmUxMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdEdyb3VwSXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDIxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWRiNzgyOWFlJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNTEwYjc3NTBcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWRiNzgyOWFlJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWRiNzgyOWFlJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWRiNzgyOWFlJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIndyYXBwZXItbWRcIlxuICB9LCBbX2MoJ2gxJywgW192bS5fdihfdm0uX3MoX3ZtLiR0KCd1c2VyLnVzZXJzJykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtbGcgbGlzdC1ncm91cC1zcFwiXG4gIH0sIFtfdm0uX2woKF92bS5pdGVtcyksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtNCBtLWItc21cIlxuICAgIH0sIFtfYygnc2wtdXNlci1saXN0LWl0ZW0nLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcIml0ZW1cIjogaXRlbVxuICAgICAgfVxuICAgIH0pXSwgMSldXG4gIH0pXSwgMildKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWM4MzU1MmFhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1jODM1NTJhYSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yYzE5NmUxMiZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVXNlckxpc3RHcm91cEl0ZW0udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjE3YjJjYTI3XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yYzE5NmUxMiZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVXNlckxpc3RHcm91cEl0ZW0udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yYzE5NmUxMiZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVXNlckxpc3RHcm91cEl0ZW0udnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yYzE5NmUxMiZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3RHcm91cEl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSAyMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1jODM1NTJhYSZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVXNlckxpc3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImY0Mjg1MjM0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1jODM1NTJhYSZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVXNlckxpc3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1jODM1NTJhYSZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVXNlckxpc3QudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1jODM1NTJhYSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG52YXIgbGlzdFRvU3R5bGVzID0gcmVxdWlyZSgnLi9saXN0VG9TdHlsZXMnKVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24pIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHsgY3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgcGFydC5pZCA9IHBhcmVudElkICsgJzowJ1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnQuaWQgPSBwYXJlbnRJZCArICc6JyArIG5ld1N0eWxlc1tpZF0ucGFydHMubGVuZ3RoXG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLXZ1ZS1zc3ItaWR+PVwiJyArIG9iai5pZCArICdcIl0nKVxuICB2YXIgaGFzU1NSID0gc3R5bGVFbGVtZW50ICE9IG51bGxcblxuICAvLyBpZiBpbiBwcm9kdWN0aW9uIG1vZGUgYW5kIHN0eWxlIGlzIGFscmVhZHkgcHJvdmlkZWQgYnkgU1NSLFxuICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgaWYgKGhhc1NTUiAmJiBpc1Byb2R1Y3Rpb24pIHtcbiAgICByZXR1cm4gbm9vcFxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBzdHlsZUVsZW1lbnQgfHwgY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoIWhhc1NTUikge1xuICAgIHVwZGF0ZShvYmopXG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPkV4YW1wbGUgQ29tcG9uZW50PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEknbSBhbiBleGFtcGxlIGNvbXBvbmVudCFcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgbW91bnRlZC4nKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gRXhhbXBsZS52dWU/MTU1YWMyOWUiLCI8dGVtcGxhdGU+XG5cbiAgICA8dGV4dGFyZWE+PC90ZXh0YXJlYT5cblxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZD5cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IGF1dG9zaXplIGZyb20gJ2F1dG9zaXplJ1xuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczogWydyZXNpemVkJ10sXG4gICAgICAgIG1vdW50ZWQgKCkge1xuICAgICAgICAgICAgYXV0b3NpemUodGhpcy4kZWwpXG4gICAgICAgICAgICBpZiAodGhpcy5yZXNpemVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50W3RoaXMucmVzaXplZF0odGhpcy4kZWwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXV0b3NpemUtdGV4dGFyZWEudnVlP2E3NGVkOTNjIiwid2luZG93Ll8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbndpbmRvdy5tb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIGpRdWVyeSBhbmQgdGhlIEJvb3RzdHJhcCBqUXVlcnkgcGx1Z2luIHdoaWNoIHByb3ZpZGVzIHN1cHBvcnRcbiAqIGZvciBKYXZhU2NyaXB0IGJhc2VkIEJvb3RzdHJhcCBmZWF0dXJlcyBzdWNoIGFzIG1vZGFscyBhbmQgdGFicy4gVGhpc1xuICogY29kZSBtYXkgYmUgbW9kaWZpZWQgdG8gZml0IHRoZSBzcGVjaWZpYyBuZWVkcyBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICovXG5cbi8qKlxuICogQFdBUk5JTkc6IFRoZXNlIHR3byBsaWJyYXJpZXMgYXJlIGluY2x1ZGVkIGluIHRoZW1lLmpzLCBzbyBubyBuZWVkIHRvIGluY2x1ZGUgYWdhaW4uXG4gKi9cbi8vIHdpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuLy8gcmVxdWlyZSgnYm9vdHN0cmFwLXNhc3MnKTtcblxuLyoqXG4gKiBWdWUgaXMgYSBtb2Rlcm4gSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBidWlsZGluZyBpbnRlcmFjdGl2ZSB3ZWIgaW50ZXJmYWNlc1xuICogdXNpbmcgcmVhY3RpdmUgZGF0YSBiaW5kaW5nIGFuZCByZXVzYWJsZSBjb21wb25lbnRzLiBWdWUncyBBUEkgaXMgY2xlYW5cbiAqIGFuZCBzaW1wbGUsIGxlYXZpbmcgeW91IHRvIGZvY3VzIG9uIGJ1aWxkaW5nIHlvdXIgbmV4dCBncmVhdCBwcm9qZWN0LlxuICovXG5cbndpbmRvdy5WdWUgPSByZXF1aXJlKCd2dWUnKTtcbndpbmRvdy5WdWV4ID0gcmVxdWlyZSgndnVleCcpO1xud2luZG93LlZ1ZVJvdXRlciA9IHJlcXVpcmUoJ3Z1ZS1yb3V0ZXInKTtcbndpbmRvdy5WdWVJMThuID0gcmVxdWlyZSgndnVlLWkxOG4nKTtcbnJlcXVpcmUoJy4vZmlsdGVycy9oZWxwZXJzJyk7XG5cblZ1ZS51c2UoVnVleCk7XG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5WdWUudXNlKFZ1ZUkxOG4pO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXG4gKiB0byBvdXIgTGFyYXZlbCBiYWNrLWVuZC4gVGhpcyBsaWJyYXJ5IGF1dG9tYXRpY2FsbHkgaGFuZGxlcyBzZW5kaW5nIHRoZVxuICogQ1NSRiB0b2tlbiBhcyBhIGhlYWRlciBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIFwiWFNSRlwiIHRva2VuIGNvb2tpZS5cbiAqL1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7XG4gICAgJ1gtQ1NSRi1UT0tFTic6IHdpbmRvdy5MYXJhdmVsLmNzcmZUb2tlbixcbiAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgJ0FjY2VwdC1MYW5ndWFnZSc6IFNvbWVsaW5lLmxvY2FsZVxufTtcblxuVnVlLnByb3RvdHlwZS4kaHR0cCA9IHdpbmRvdy4kaHR0cCA9IHdpbmRvdy5heGlvcztcblxudmFyIGFwaUF4aW9zID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiAnL2FwaS8nLFxuICAgIHRpbWVvdXQ6IDEwMDAwLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi94LnNvbWVsaW5lLnYxK2pzb24nLFxuICAgIH1cbn0pO1xuVnVlLnByb3RvdHlwZS4kYXBpID0gd2luZG93LiRhcGkgPSBhcGlBeGlvcztcblxuLyoqXG4gKiBFY2hvIGV4cG9zZXMgYW4gZXhwcmVzc2l2ZSBBUEkgZm9yIHN1YnNjcmliaW5nIHRvIGNoYW5uZWxzIGFuZCBsaXN0ZW5pbmdcbiAqIGZvciBldmVudHMgdGhhdCBhcmUgYnJvYWRjYXN0IGJ5IExhcmF2ZWwuIEVjaG8gYW5kIGV2ZW50IGJyb2FkY2FzdGluZ1xuICogYWxsb3dzIHlvdXIgdGVhbSB0byBlYXNpbHkgYnVpbGQgcm9idXN0IHJlYWwtdGltZSB3ZWIgYXBwbGljYXRpb25zLlxuICovXG5cbi8vIGltcG9ydCBFY2hvIGZyb20gXCJsYXJhdmVsLWVjaG9cIlxuXG4vLyB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbi8vICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4vLyAgICAga2V5OiAneW91ci1wdXNoZXIta2V5J1xuLy8gfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBMaWJlcm4gb24gMjYvNS8xNi5cbiAqL1xuZXhwb3J0IGRlZmF1bHR7XG4gICAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsLmZvY3VzKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGlyZWN0aXZlcy9mb2N1cy5qcyIsIi8qKlxuICogQ2hhbmdlcyB2YWx1ZSB0byBwYXN0IHRlbnNlLlxuICogU2ltcGxlIGZpbHRlciBkb2VzIG5vdCBzdXBwb3J0IGlycmVndWxhciB2ZXJicyBzdWNoIGFzIGVhdC1hdGUsIGZseS1mbGV3LCBldGMuXG4gKiBodHRwOi8vanNmaWRkbGUubmV0L2JyeWFuX2svMHhjem1lMnIvXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKi9cblZ1ZS5maWx0ZXIoJ3Bhc3QtdGVuc2UnLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8vIFNsaWdodGx5IGZvbGxvd3MgaHR0cDovL3d3dy5veGZvcmRkaWN0aW9uYXJpZXMuY29tL3VzL3dvcmRzL3ZlcmItdGVuc2VzLWFkZGluZy1lZC1hbmQtaW5nXG4gICAgdmFyIHZvd2VscyA9IFsnYScsICdlJywgJ2knLCAnbycsICd1J107XG4gICAgaWYoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGFzdCA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3Vic3RyKHZhbHVlLmxlbmd0aCAtIDEpLFxuICAgICAgICBzZWNvbmRMYXN0ID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMiwgMSksXG4gICAgICAgIHRoaXJkTGFzdCA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3Vic3RyKHZhbHVlLmxlbmd0aCAtIDMsIDEpLFxuICAgICAgICBsYXN0VHdvID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMiksXG4gICAgICAgIGxhc3RUaHJlZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3Vic3RyKHZhbHVlLmxlbmd0aCAtIDMpLFxuICAgICAgICBpbkFycmF5ID0gZnVuY3Rpb24oYXIsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gYXIuaW5kZXhPZih2YWx1ZSkgIT0gLTFcbiAgICAgICAgfTtcblxuICAgIC8vIHBhcnRpY2lwbGUgb3IgYWxyZWFkeSBwYXN0IHRlbnNlLCBkb24ndCB3YW50XG4gICAgaWYobGFzdFRocmVlID09PSAnaW5nJyB8fCBsYXN0VHdvID09PSAnZWQnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBFbmRzIGluICdlJywgc2ltcGx5IGFkZCB0aGUgJ2QnXG4gICAgaWYobGFzdCA9PT0gJ2UnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSArICdkJztcbiAgICB9XG5cbiAgICAvLyBFbmRzIGluICdjJywgYWRkIHRoZSAna2VkJ1xuICAgIGlmKGxhc3QgPT09ICdjJykge1xuICAgICAgICByZXR1cm4gdmFsdWUgKyAna2VkJztcbiAgICB9XG5cbiAgICAvLyBFbmRzIHdpdGggY29uc29uYW50LCB2b3dlbCwgY29uc29uYW50LiBJJ20gc2ltcGxlLCBkb3VibGUgY29uc29uYW50IGFuZCBhZGQgJ2VkJ1xuICAgIGlmKCFpbkFycmF5KHZvd2VscywgdGhpcmRMYXN0KSAmJiBpbkFycmF5KHZvd2Vscywgc2Vjb25kTGFzdCkgJiYgIWluQXJyYXkodm93ZWxzLCBsYXN0KSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgKyBsYXN0ICsgJ2VkJztcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUgKyAnZWQnO1xufSk7XG5cbi8qKlxuICogVnVlIGZpbHRlciB0byBjb252ZXJ0IGEgc2x1ZyB0byBhIG1vcmUgaHVtYW4gZnJpZW5kbHkgZm9ybS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHN0cmluZy5cbiAqL1xuVnVlLmZpbHRlcignaHVtYW5hYmxlJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgd29yZHMgPSB2YWx1ZS5zcGxpdCgvWy1fXSsvZyk7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IodmFyIGk9MDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBsZXR0ZXIgPSB3b3Jkc1tpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGxldHRlciArIHdvcmRzW2ldLnNsaWNlKDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHMuam9pbignICcpO1xufSk7XG5cbi8qKlxuICogVnVlIGZpbHRlciB0byBjb252ZXJ0IHRoZSBnaXZlbiB2YWx1ZSB0byBwZXJjZW50LlxuICogaHR0cDovL2pzZmlkZGxlLm5ldC9icnlhbl9rL3FhdWYzcXloL1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAgICBUaGUgdmFsdWUgc3RyaW5nLlxuICogQHBhcmFtIHtOdW1iZXJ9IGRlY2ltYWxzIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMuXG4gKi9cblZ1ZS5maWx0ZXIoJ3BlcmNlbnRhZ2UnLCBmdW5jdGlvbih2YWx1ZSwgZGVjaW1hbHMpIHtcbiAgICBpZighdmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSAwO1xuICAgIH1cblxuICAgIGlmKCFkZWNpbWFscykge1xuICAgICAgICBkZWNpbWFscyA9IDA7XG4gICAgfVxuXG4gICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDtcbiAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgKiBNYXRoLnBvdygxMCwgZGVjaW1hbHMpKSAvIE1hdGgucG93KDEwLCBkZWNpbWFscyk7XG4gICAgdmFsdWUgPSB2YWx1ZSArICclJztcbiAgICByZXR1cm4gdmFsdWU7XG59KTtcblxuXG4vKipcbiAqIFZ1ZSBmaWx0ZXIgdG8gcm91bmQgdGhlIGRlY2ltYWwgdG8gdGhlIGdpdmVuIHBsYWNlLlxuICogaHR0cDovL2pzZmlkZGxlLm5ldC9icnlhbl9rLzNvdmExN3k5L1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAgICBUaGUgdmFsdWUgc3RyaW5nLlxuICogQHBhcmFtIHtOdW1iZXJ9IGRlY2ltYWxzIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMuXG4gKi9cblZ1ZS5maWx0ZXIoJ3JvdW5kJywgZnVuY3Rpb24odmFsdWUsIGRlY2ltYWxzKSB7XG4gICAgaWYoIXZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICB9XG5cbiAgICBpZighZGVjaW1hbHMpIHtcbiAgICAgICAgZGVjaW1hbHMgPSAwO1xuICAgIH1cblxuICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAqIE1hdGgucG93KDEwLCBkZWNpbWFscykpIC8gTWF0aC5wb3coMTAsIGRlY2ltYWxzKTtcbiAgICByZXR1cm4gdmFsdWU7XG59KTtcblxuXG4vKipcbiAqIFZ1ZSBmaWx0ZXIgdG8gY29udmVydCB0aGUgZ2l2ZW4gdmFsdWUgdG8gd2hvbGUgZG9sbGFycywgbm8gY2hhbmdlLlxuICogaHR0cDovL2pzZmlkZGxlLm5ldC9icnlhbl9rLzJ0NmJxcWZjL1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgc3RyaW5nLlxuICovXG5WdWUuZmlsdGVyKCduby1jaGFuZ2UnLCBmdW5jdGlvbih2YWx1ZSwgc3ltYm9sKSB7XG4gICAgaWYoIXZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICB9XG5cbiAgICBpZighc3ltYm9sKSB7XG4gICAgICAgIHN5bWJvbCA9ICckJztcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKS5zcGxpdCgnLicpWzBdO1xuICAgIHJldHVybiBzeW1ib2wgKyB2YWx1ZTtcbn0pO1xuXG4vKipcbiAqIFZ1ZSBmaWx0ZXIgdG8gbWFrZSBhIHNpbXBsZSB0aW1lc3RhbXAgZm9yIGFuIElTTyBkYXRlLlxuICogaHR0cDovL2pzZmlkZGxlLm5ldC9icnlhbl9rLzQ0a3F0cGVnL1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgc3RyaW5nLlxuICovXG5WdWUuZmlsdGVyKCd0aW1lc3RhbXAnLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciBwYXJ0cyA9IHZhbHVlLnNwbGl0KCcgJyk7XG4gICAgdmFyIGRhdGUgPSBwYXJ0c1swXTtcbiAgICB2YXIgdGltZSA9IHBhcnRzWzFdO1xuXG4gICAgZGF0ZSA9IGRhdGUuc3BsaXQoJy0nKTtcbiAgICB0aW1lID0gdGltZS5zcGxpdCgnOicpO1xuXG4gICAgaWYocGFyc2VJbnQodGltZVswXSwgMTApID4gMTIpIHtcbiAgICAgICAgdmFyIGhvdXIgPSBwYXJzZUludCh0aW1lWzBdLCAxMCkgJSAxMjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBob3VyID0gcGFyc2VJbnQodGltZVswXSwgMTApO1xuICAgIH1cblxuICAgIGhvdXIgPSBob3VyIDwgMTAgPyAnMCcgKyBob3VyIDogaG91cjtcblxuICAgIHJldHVybiAnWycgKyBkYXRlWzFdICsgJy8nICsgZGF0ZVsyXSArICcgJyArIGhvdXIgKyAnOicgKyB0aW1lWzFdICsgJ10nO1xufSk7XG5cbi8qKlxuICogVnVlIGZpbHRlciB0byB0cnVuY2F0ZSBhIHN0cmluZyB0byB0aGUgc3BlY2lmaWVkIGxlbmd0aC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgc3RyaW5nLlxuICovXG5WdWUuZmlsdGVyKCd0cnVuY2F0ZScsIGZ1bmN0aW9uKHZhbHVlLCBsZW5ndGgpIHtcbiAgICBpZih2YWx1ZS5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGxlbmd0aCA9IGxlbmd0aCAtIDM7XG5cbiAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKDAsIGxlbmd0aCkgKyAnLi4uJztcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZmlsdGVycy9oZWxwZXJzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==