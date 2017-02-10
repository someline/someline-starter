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
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"autosize-textarea.vue","sourceRoot":"webpack://"}]);

// exports


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
// imports


// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"UserListGroupItem.vue","sourceRoot":"webpack://"}]);

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

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"UserList.vue","sourceRoot":"webpack://"}]);

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

},[242]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzP2Q0ZjMqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZmlsdGVycy9ubDJici5qcz82ZTczKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9idXMuanM/MTgzZioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvanF1ZXJ5LmpzP2RlZTEqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3N0b3JlLmpzP2EzZTUqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3Rvb2xzLmpzPzJlMDAqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3VzZXIuanM/OTNiMSoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9sZXNzL2FwcC5sZXNzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvbGVzcy9jb25zb2xlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9sZXNzL21vYmlsZS5sZXNzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWU/ZDJkYSoqIiwid2VicGFjazovLy9Vc2VyTGlzdC52dWUiLCJ3ZWJwYWNrOi8vL1VzZXJMaXN0R3JvdXBJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRXhhbXBsZS52dWU/MGJmZSoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdEdyb3VwSXRlbS52dWU/MTgyMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlPzM4YzIqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3QudnVlPzgxMDEiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcz9kYTA0KiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRXhhbXBsZS52dWU/NWZjOSoqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3RHcm91cEl0ZW0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWU/MDVjNCoqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3RHcm91cEl0ZW0udnVlP2E3NzEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZT8wZGQ5KioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdC52dWU/MDY1OSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcz9lNmFjKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0R3JvdXBJdGVtLnZ1ZT8zOGZjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3QudnVlPzc2ODUiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanM/NmIyYioiLCJ3ZWJwYWNrOi8vL0V4YW1wbGUudnVlPzM0NGMqIiwid2VicGFjazovLy9hdXRvc2l6ZS10ZXh0YXJlYS52dWU/Mjk1MyoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanM/NTkxMSoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kaXJlY3RpdmVzL2ZvY3VzLmpzP2RiNWQqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZmlsdGVycy9oZWxwZXJzLmpzPzk4ZjQqIl0sIm5hbWVzIjpbInJlYWQiLCJ2YWwiLCJyZXBsYWNlIiwiUmVnRXhwIiwiY29tcHV0ZWQiLCJidXMiLCJ3aW5kb3ciLCJtZXRob2RzIiwiZXZlbnRFbWl0IiwibmFtZSIsImRhdGEiLCIkZW1pdCIsImV2ZW50T24iLCJjYWxsYmFjayIsIiRvbiIsImV2ZW50T2ZmIiwiJG9mZiIsIkFwcEhlYWRlclNldFRpdGxlIiwidGl0bGUiLCJBcHBUYWJCYXJTZXRTaG93QXBwVGFiQmFyIiwiaXNTaG93IiwiQXBwVGFiQmFyU2VsZWN0VGFiQmFySXRlbSIsImluZGV4IiwiQXBwSGVhZGVyU2V0TmF2QnV0dG9uTGVmdCIsImNsYXNzTmFtZSIsIkFwcEhlYWRlclNldE5hdkJ1dHRvblJpZ2h0Iiwic2Nyb2xsVG9Cb3R0b20iLCJzZWxlY3RvciIsImFuaW1hdGVkIiwiYW5pbWF0ZVRpbWUiLCIkZWxlbWVudCIsIiQiLCJzY3JvbGxIZWlnaHQiLCJwcm9wIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInZ1ZXhTdG9yZSIsInN0b3JlQ29tbWl0IiwiY29tbWl0Iiwic3RvcmVEaXNwYXRjaCIsImRpc3BhdGNoIiwibm93VGltZXN0YW1wIiwibW9tZW50IiwidW5peCIsIm1vbWVudEZyb21EYXRlVGltZSIsImRhdGVUaW1lIiwiZGF0ZVRpbWVUb1RpbWVzdGFtcCIsInVybCIsInBhdGgiLCJzdWJzdHJpbmciLCJiYXNlVXJsIiwicmVkaXJlY3RUb1VybCIsImxvY2F0aW9uIiwiaHJlZiIsInJlZGlyZWN0VG9VcmxGcm9tQmFzZVVybCIsInJlbG9hZFBhZ2UiLCJvYmplY3RUb0Zvcm1EYXRhIiwiaXRlbSIsImZvcm1fZGF0YSIsIkZvcm1EYXRhIiwia2V5IiwiYXBwZW5kIiwiaXNFbXB0eU9iamVjdCIsIm9iamVjdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJpc01vYmlsZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwicmVxdWlyZSIsIlZ1ZSIsImRpcmVjdGl2ZSIsImZpbHRlciIsIm1peGluIiwiY29tcG9uZW50IiwiVnVleCIsIlN0b3JlIiwic3RhdGUiLCJwbGF0Zm9ybSIsImNvdW50IiwibXV0YXRpb25zIiwiaW5jcmVtZW50IiwiYXBwIiwiZWwiLCJtc2ciLCJ3YXRjaCIsImV2ZW50cyIsImNyZWF0ZWQiLCJjb25zb2xlIiwibG9nIiwiaW5pdExvY2FsZSIsIm1vdW50ZWQiLCJ0aGF0IiwibGFuZyIsImxvY2FsZSIsImNvbmZpZyIsIlNvbWVsaW5lIiwibG9jYWxlcyIsImN1cnJlbnRVc2VySWQiLCJ1c2VyIiwidXNlcl9pZCIsIl8iLCJWdWVSb3V0ZXIiLCJWdWVJMThuIiwidXNlIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJMYXJhdmVsIiwiY3NyZlRva2VuIiwicHJvdG90eXBlIiwiJGh0dHAiLCJhcGlBeGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJ0aW1lb3V0IiwiJGFwaSIsImJpbmQiLCJmb2N1cyIsInZhbHVlIiwidm93ZWxzIiwibGFzdCIsInRvTG93ZXJDYXNlIiwic3Vic3RyIiwic2Vjb25kTGFzdCIsInRoaXJkTGFzdCIsImxhc3RUd28iLCJsYXN0VGhyZWUiLCJpbkFycmF5IiwiYXIiLCJpbmRleE9mIiwid29yZHMiLCJzcGxpdCIsInJlc3VsdHMiLCJpIiwibGV0dGVyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJwdXNoIiwic2xpY2UiLCJqb2luIiwiZGVjaW1hbHMiLCJNYXRoIiwicm91bmQiLCJwb3ciLCJzeW1ib2wiLCJ0b1N0cmluZyIsInBhcnRzIiwiZGF0ZSIsInRpbWUiLCJwYXJzZUludCIsImhvdXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDOUNBO0FBQUE7OztBQUdBLDhEQUFlO0FBQ1hBLFVBQU0sY0FBVUMsR0FBVixFQUFlO0FBQ2pCLGVBQU9BLElBQUlDLE9BQUosQ0FBWSxJQUFJQyxNQUFKLENBQVcsT0FBWCxFQUFvQixHQUFwQixDQUFaLEVBQXNDLFFBQXRDLENBQVA7QUFDSDtBQUhVLENBQWYsQzs7Ozs7Ozs7QUNIQSx3REFBYztBQUNWQyxjQUFVO0FBQ05DLFdBRE0saUJBQ0Q7QUFDRCxtQkFBT0MsT0FBT0QsR0FBZDtBQUNIO0FBSEssS0FEQTtBQU1WRSxhQUFTO0FBQ0xDLGlCQURLLHFCQUNLQyxJQURMLEVBQ1dDLElBRFgsRUFDZ0I7QUFDakIsaUJBQUtMLEdBQUwsQ0FBU00sS0FBVCxDQUFlRixJQUFmLEVBQXFCQyxJQUFyQjtBQUNILFNBSEk7QUFJTEUsZUFKSyxtQkFJR0gsSUFKSCxFQUlTSSxRQUpULEVBSWtCO0FBQ25CLGlCQUFLUixHQUFMLENBQVNTLEdBQVQsQ0FBYUwsSUFBYixFQUFtQkksUUFBbkI7QUFDSCxTQU5JO0FBT0xFLGdCQVBLLG9CQU9JTixJQVBKLEVBT1VJLFFBUFYsRUFPbUI7QUFD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QWdCdkQsTUFBaEIsRUFBd0I7QUFDM0MsUUFBR3VELE1BQU12RCxNQUFOLEdBQWVBLE1BQWxCLEVBQTBCO0FBQ3RCLGVBQU91RCxLQUFQO0FBQ0g7O0FBRUR2RCxhQUFTQSxTQUFTLENBQWxCOztBQUVBLFdBQU91RCxNQUFNeEUsU0FBTixDQUFnQixDQUFoQixFQUFtQmlCLE1BQW5CLElBQTZCLEtBQXBDO0FBQ0gsQ0FSRCxFIiwiZmlsZSI6Ii9hc3NldHMvanMvYXBwLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIHNjb3BlSWQsXG4gIGNzc01vZHVsZXNcbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIC8vIGluamVjdCBjc3NNb2R1bGVzXG4gIGlmIChjc3NNb2R1bGVzKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCAob3B0aW9ucy5jb21wdXRlZCA9IHt9KVxuICAgIE9iamVjdC5rZXlzKGNzc01vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGNzc01vZHVsZXNba2V5XVxuICAgICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8qKlxuICogQ3JlYXRlZCBieSBMaWJlcm4gb24gMjYvNy8xNi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlYWQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgcmV0dXJuIHZhbC5yZXBsYWNlKG5ldyBSZWdFeHAoJ1xccj9cXG4nLCAnZycpLCAnPGJyIC8+Jyk7XG4gICAgfSxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2ZpbHRlcnMvbmwyYnIuanMiLCJleHBvcnQgZGVmYXVsdHtcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBidXMoKXtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYnVzO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBldmVudEVtaXQobmFtZSwgZGF0YSl7XG4gICAgICAgICAgICB0aGlzLmJ1cy4kZW1pdChuYW1lLCBkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXZlbnRPbihuYW1lLCBjYWxsYmFjayl7XG4gICAgICAgICAgICB0aGlzLmJ1cy4kb24obmFtZSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICBldmVudE9mZihuYW1lLCBjYWxsYmFjayl7XG4gICAgICAgICAgICB0aGlzLmJ1cy4kb2ZmKG5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgQXBwSGVhZGVyU2V0VGl0bGUodGl0bGUpe1xuICAgICAgICAgICAgdGhpcy5idXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgfSxcbiAgICAgICAgQXBwVGFiQmFyU2V0U2hvd0FwcFRhYkJhcihpc1Nob3cpe1xuICAgICAgICAgICAgdGhpcy5ldmVudEVtaXQoXCJBcHBUYWJCYXJfc2V0U2hvd0FwcFRhYkJhclwiLCBpc1Nob3cpO1xuICAgICAgICB9LFxuICAgICAgICBBcHBUYWJCYXJTZWxlY3RUYWJCYXJJdGVtKGluZGV4KXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRFbWl0KFwiQXBwVGFiQmFyX3NlbGVjdFRhYkJhckl0ZW1cIiwgaW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICBBcHBIZWFkZXJTZXROYXZCdXR0b25MZWZ0KGNsYXNzTmFtZSl7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RW1pdChcIkFwcEhlYWRlcl9zZXROYXZCdXR0b25MZWZ0XCIsIGNsYXNzTmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIEFwcEhlYWRlclNldE5hdkJ1dHRvblJpZ2h0KGNsYXNzTmFtZSl7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RW1pdChcIkFwcEhlYWRlcl9zZXROYXZCdXR0b25SaWdodFwiLCBjbGFzc05hbWUpO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9idXMuanMiLCJleHBvcnQgZGVmYXVsdHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNjcm9sbFRvQm90dG9tKHNlbGVjdG9yLCBhbmltYXRlZCwgYW5pbWF0ZVRpbWUpe1xuICAgICAgICAgICAgdmFyICRlbGVtZW50ID0gJChzZWxlY3Rvcik7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gJGVsZW1lbnQucHJvcChcInNjcm9sbEhlaWdodFwiKTtcbiAgICAgICAgICAgIGlmIChhbmltYXRlZCkge1xuICAgICAgICAgICAgICAgIGlmICghYW5pbWF0ZVRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVRpbWUgPSAxMDAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkZWxlbWVudC5hbmltYXRlKHtzY3JvbGxUb3A6IHNjcm9sbEhlaWdodH0sIGFuaW1hdGVUaW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQuc2Nyb2xsVG9wKHNjcm9sbEhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvanF1ZXJ5LmpzIiwiZXhwb3J0IGRlZmF1bHR7XG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgdnVleFN0b3JlKCl7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnZ1ZXhTdG9yZTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc3RvcmVDb21taXQobmFtZSwgZGF0YSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52dWV4U3RvcmUuY29tbWl0KG5hbWUsIGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBzdG9yZURpc3BhdGNoKG5hbWUsIGRhdGEpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudnVleFN0b3JlLmRpc3BhdGNoKG5hbWUsIGRhdGEpO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9zdG9yZS5qcyIsImV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbXB1dGVkOiB7fSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG5vd1RpbWVzdGFtcCgpe1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudCgpLnVuaXgoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbW9tZW50RnJvbURhdGVUaW1lKGRhdGVUaW1lKXtcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQoZGF0ZVRpbWUsICdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGVUaW1lVG9UaW1lc3RhbXAoZGF0ZVRpbWUpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9tZW50RnJvbURhdGVUaW1lKGRhdGVUaW1lKS51bml4KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVybChwYXRoKXtcbiAgICAgICAgICAgIGlmIChwYXRoICYmIHBhdGguc3Vic3RyaW5nKDAsIDEpICE9ICcvJykge1xuICAgICAgICAgICAgICAgIHBhdGggPSAnLycgKyBwYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVVybCArIHBhdGg7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZGlyZWN0VG9VcmwodXJsKXtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICB9LFxuICAgICAgICByZWRpcmVjdFRvVXJsRnJvbUJhc2VVcmwodXJsKXtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy51cmwodXJsKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVsb2FkUGFnZSgpe1xuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvVXJsKHdpbmRvdy5sb2NhdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIG9iamVjdFRvRm9ybURhdGEoaXRlbSl7XG4gICAgICAgICAgICB2YXIgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBpdGVtKSB7XG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZChrZXksIGl0ZW1ba2V5XSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmb3JtX2RhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIGlzRW1wdHlPYmplY3Qob2JqZWN0KXtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfSxcbiAgICAgICAgaXNNb2JpbGUoKXtcbiAgICAgICAgICAgIHZhciBpc01vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KVwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIChpc01vYmlsZS5tYXRjaGVzKTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdG9vbHMuanMiLCJcbi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZXMgVnVlIGFuZCBvdGhlciBsaWJyYXJpZXMuIEl0IGlzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgd2hlblxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG5yZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuXG4vLyBWdWUgRGlyZWN0aXZlc1xuVnVlLmRpcmVjdGl2ZSgnZm9jdXMnLCByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvZm9jdXMnKSk7XG5cbi8vIFZ1ZSBGaWx0ZXJzXG5WdWUuZmlsdGVyKCdubDJicicsIHJlcXVpcmUoJy4vZmlsdGVycy9ubDJicicpKTtcblxuLy8gVnVlIE1peGluc1xuaW1wb3J0IE1peEluVXNlciBmcm9tICcuL21peGlucy91c2VyJ1xuaW1wb3J0IE1peEluSlF1ZXJ5IGZyb20gJy4vbWl4aW5zL2pxdWVyeSdcbmltcG9ydCBNaXhJblRvb2xzIGZyb20gJy4vbWl4aW5zL3Rvb2xzJ1xuaW1wb3J0IE1peEluQnVzIGZyb20gJy4vbWl4aW5zL2J1cydcbmltcG9ydCBNaXhJblN0b3JlIGZyb20gJy4vbWl4aW5zL3N0b3JlJ1xuVnVlLm1peGluKE1peEluVXNlcik7XG5WdWUubWl4aW4oTWl4SW5KUXVlcnkpO1xuVnVlLm1peGluKE1peEluVG9vbHMpO1xuVnVlLm1peGluKE1peEluQnVzKTtcblZ1ZS5taXhpbihNaXhJblN0b3JlKTtcblxuLy8gVnVlIENvbXBvbmVudHNcblZ1ZS5jb21wb25lbnQoJ2F1dG9zaXplLXRleHRhcmVhJywgcmVxdWlyZSgnLi9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZScpKTtcblxuLyoqXG4gKiBOZXh0LCB3ZSB3aWxsIGNyZWF0ZSBhIGZyZXNoIFZ1ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZSBhbmQgYXR0YWNoIGl0IHRvXG4gKiB0aGUgcGFnZS4gVGhlbiwgeW91IG1heSBiZWdpbiBhZGRpbmcgY29tcG9uZW50cyB0byB0aGlzIGFwcGxpY2F0aW9uXG4gKiBvciBjdXN0b21pemUgdGhlIEphdmFTY3JpcHQgc2NhZmZvbGRpbmcgdG8gZml0IHlvdXIgdW5pcXVlIG5lZWRzLlxuICovXG5cblZ1ZS5jb21wb25lbnQoJ2V4YW1wbGUnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvRXhhbXBsZS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdzbC11c2VyLWxpc3QnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0LnZ1ZScpKTtcblxuLy8gQnVzXG5jb25zdCBidXMgPSBuZXcgVnVlKHtcbiAgICBkYXRhOiB7XG4gICAgICAgIHRpdGxlOiBcIlNvbWVsaW5lXCIsXG4gICAgfVxufSk7XG53aW5kb3cuYnVzID0gYnVzO1xuXG4vLyBWdWV4XG5jb25zdCB2dWV4U3RvcmUgPSBuZXcgVnVleC5TdG9yZSh7XG4gICAgc3RhdGU6IHtcbiAgICAgICAgcGxhdGZvcm06ICdhcHAnLFxuICAgICAgICBjb3VudDogMFxuICAgIH0sXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIGluY3JlbWVudCAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmNvdW50KytcbiAgICAgICAgfVxuICAgIH1cbn0pO1xud2luZG93LnZ1ZXhTdG9yZSA9IHZ1ZXhTdG9yZTtcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbiAgICBkYXRhOiB7XG4gICAgICAgIG1zZzogXCJoZWxsb1wiLFxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHt9LFxuICAgIHdhdGNoOiB7fSxcbiAgICBldmVudHM6IHt9LFxuICAgIGNyZWF0ZWQoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0Jvb3RzdHJhcC4nKTtcbiAgICAgICAgdGhpcy5pbml0TG9jYWxlKCk7XG4gICAgfSxcbiAgICBtb3VudGVkKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWFkeS4nKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaW5pdExvY2FsZSgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0luaXQgTG9jYWxlLicpO1xuXG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgbGFuZyA9IHRoaXMubG9jYWxlO1xuXG4gICAgICAgICAgICBWdWUuY29uZmlnLmxhbmcgPSBsYW5nO1xuICAgICAgICAgICAgVnVlLmxvY2FsZShsYW5nLCB3aW5kb3cuU29tZWxpbmUubG9jYWxlcyk7XG5cbiAgICAgICAgfSxcbiAgICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwiZXhwb3J0IGRlZmF1bHR7XG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgYmFzZVVybCgpe1xuICAgICAgICAgICAgcmV0dXJuIFNvbWVsaW5lLmJhc2VVcmw7XG4gICAgICAgIH0sXG4gICAgICAgIGxvY2FsZSgpe1xuICAgICAgICAgICAgcmV0dXJuIFNvbWVsaW5lLmxvY2FsZTtcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVudFVzZXJJZCgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coU29tZWxpbmUuc3RhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIFNvbWVsaW5lLnN0YXRlLnVzZXIudXNlcl9pZDtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdXNlci5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2xlc3MvYXBwLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDE1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9sZXNzL2NvbnNvbGUubGVzc1xuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2xlc3MvbW9iaWxlLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJhdXRvc2l6ZS10ZXh0YXJlYS52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZGI3ODI5YWUmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiPHN0eWxlIHNjb3BlZD5cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyLW1kXCI+XG5cbiAgICAgICAgPGgxPnt7ICR0KCd1c2VyLnVzZXJzJykgfX08L2gxPlxuICAgICAgICA8aHI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWxnIGxpc3QtZ3JvdXAtc3BcIj5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpdGVtIG9mIGl0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBtLWItc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbC11c2VyLWxpc3QtaXRlbSA6aXRlbT1cIml0ZW1cIj48L3NsLXVzZXItbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IFtdLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgICAgbXNnOiAnaGVsbG8gdnVlJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7fSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3NsLXVzZXItbGlzdC1pdGVtJzogcmVxdWlyZSgnLi9Vc2VyTGlzdEdyb3VwSXRlbS52dWUnKSxcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCBSZWFkeS4nKTtcblxuICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHt9LFxuICAgICAgICBldmVudHM6IHt9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBmZXRjaERhdGEoKXtcblxuICAgICAgICAgICAgICAgIHRoaXMuJGFwaS5nZXQoJy91c2VycycsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSkuYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVXNlckxpc3QudnVlPzQ5MGQ0NGY2IiwiPHN0eWxlIHNjb3BlZD5cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNsZWFyZml4XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHVsbC1sZWZ0IHRodW1iLXNtIGF2YXRhciBtLXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuc29tZWxpbmUuY29tL2VuL3VzZXIvcHJvZmlsZXBob3RvL29yaWdpbi9mNGNjYzRkZTc4YzAzZmUyYzMyMTQ5MGNmNmY4MTU3ZjgyNWU0YzRmLmpwZ1wiXG4gICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2xlYXJcIj5cbiAgICAgICAgICAgIDxzcGFuPnt7IGl0ZW0ubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwhLS08cHJlPnt7IGl0ZW0gfCBqc29uIH19PC9wcmU+LS0+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2E+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczogWydpdGVtJ10sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgICAgICBtc2c6ICdoZWxsbyB2dWUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB1c2VySWQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtLnVzZXJfaWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluaygpe1xuICAgICAgICAgICAgICAgIHJldHVybiBcIi91c2Vycy9cIiArIHRoaXMudXNlcklkICsgXCIjL3VzZXIvXCIgKyB0aGlzLnVzZXJJZCArIFwiL3Byb2ZpbGVcIjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7fSxcbiAgICAgICAgZXZlbnRzOiB7fSxcbiAgICAgICAgbWV0aG9kczoge30sXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFVzZXJMaXN0R3JvdXBJdGVtLnZ1ZT84YzZlNjFhZSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0V4YW1wbGUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYTQ3YjM4MjYhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRXhhbXBsZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9saWJlcm4vQ29kZS9zb21lbGluZS1zdGFydGVyLW1hc3Rlci9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRXhhbXBsZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBFeGFtcGxlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1hNDdiMzgyNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWE0N2IzODI2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIlVzZXJMaXN0R3JvdXBJdGVtLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yYzE5NmUxMiZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3RHcm91cEl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSAxODhcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWRiNzgyOWFlJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYXV0b3NpemUtdGV4dGFyZWEudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZGI3ODI5YWUhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXV0b3NpemUtdGV4dGFyZWEudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LWRiNzgyOWFlXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvbGliZXJuL0NvZGUvc29tZWxpbmUtc3RhcnRlci1tYXN0ZXIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGF1dG9zaXplLXRleHRhcmVhLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1kYjc4MjlhZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWRiNzgyOWFlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJVc2VyTGlzdC52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYzgzNTUyYWEmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfdm0uX20oMClcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1oZWFkaW5nXCJcbiAgfSwgW192bS5fdihcIkV4YW1wbGUgQ29tcG9uZW50XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtYm9keVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIEknbSBhbiBleGFtcGxlIGNvbXBvbmVudCFcXG4gICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWE0N2IzODI2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1hNDdiMzgyNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWM4MzU1MmFhJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Vc2VyTGlzdC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVXNlckxpc3QudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYzgzNTUyYWEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVXNlckxpc3QudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LWM4MzU1MmFhXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvbGliZXJuL0NvZGUvc29tZWxpbmUtc3RhcnRlci1tYXN0ZXIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBVc2VyTGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYzgzNTUyYWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1jODM1NTJhYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0yYzE5NmUxMiZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVXNlckxpc3RHcm91cEl0ZW0udnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1VzZXJMaXN0R3JvdXBJdGVtLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTJjMTk2ZTEyIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1VzZXJMaXN0R3JvdXBJdGVtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi0yYzE5NmUxMlwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2xpYmVybi9Db2RlL3NvbWVsaW5lLXN0YXJ0ZXItbWFzdGVyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hcHAvdXNlcnMvVXNlckxpc3RHcm91cEl0ZW0udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVXNlckxpc3RHcm91cEl0ZW0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJjMTk2ZTEyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmMxOTZlMTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdEdyb3VwSXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3RleHRhcmVhJylcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZGI3ODI5YWVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWRiNzgyOWFlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAtaXRlbSBjbGVhcmZpeFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCIjXCJcbiAgICB9XG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNsZWFyXCJcbiAgfSwgW19jKCdzcGFuJywgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0ubmFtZSkpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0IHRodW1iLXNtIGF2YXRhciBtLXJcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogXCJodHRwczovL3d3dy5zb21lbGluZS5jb20vZW4vdXNlci9wcm9maWxlcGhvdG8vb3JpZ2luL2Y0Y2NjNGRlNzhjMDNmZTJjMzIxNDkwY2Y2ZjgxNTdmODI1ZTRjNGYuanBnXCIsXG4gICAgICBcImFsdFwiOiBcIi4uLlwiXG4gICAgfVxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMmMxOTZlMTJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTJjMTk2ZTEyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0R3JvdXBJdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZGI3ODI5YWUmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI1MTBiNzc1MFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZGI3ODI5YWUmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZGI3ODI5YWUmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZGI3ODI5YWUmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid3JhcHBlci1tZFwiXG4gIH0sIFtfYygnaDEnLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ3VzZXIudXNlcnMnKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdocicpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1sZyBsaXN0LWdyb3VwLXNwXCJcbiAgfSwgW192bS5fbCgoX3ZtLml0ZW1zKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC00IG0tYi1zbVwiXG4gICAgfSwgW19jKCdzbC11c2VyLWxpc3QtaXRlbScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaXRlbVwiOiBpdGVtXG4gICAgICB9XG4gICAgfSldLCAxKV1cbiAgfSldLCAyKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYzgzNTUyYWFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWM4MzU1MmFhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXBwL3VzZXJzL1VzZXJMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTJjMTk2ZTEyJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Vc2VyTGlzdEdyb3VwSXRlbS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMTdiMmNhMjdcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTJjMTk2ZTEyJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Vc2VyTGlzdEdyb3VwSXRlbS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTJjMTk2ZTEyJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Vc2VyTGlzdEdyb3VwSXRlbS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTJjMTk2ZTEyJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdEdyb3VwSXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDIzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWM4MzU1MmFhJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Vc2VyTGlzdC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiZjQyODUyMzRcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWM4MzU1MmFhJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Vc2VyTGlzdC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWM4MzU1MmFhJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Vc2VyTGlzdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWM4MzU1MmFhJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FwcC91c2Vycy9Vc2VyTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbnZhciBsaXN0VG9TdHlsZXMgPSByZXF1aXJlKCcuL2xpc3RUb1N0eWxlcycpXG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbikge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0geyBjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcCB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBwYXJ0LmlkID0gcGFyZW50SWQgKyAnOjAnXG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcGFydC5pZCA9IHBhcmVudElkICsgJzonICsgbmV3U3R5bGVzW2lkXS5wYXJ0cy5sZW5ndGhcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtdnVlLXNzci1pZH49XCInICsgb2JqLmlkICsgJ1wiXScpXG4gIHZhciBoYXNTU1IgPSBzdHlsZUVsZW1lbnQgIT0gbnVsbFxuXG4gIC8vIGlmIGluIHByb2R1Y3Rpb24gbW9kZSBhbmQgc3R5bGUgaXMgYWxyZWFkeSBwcm92aWRlZCBieSBTU1IsXG4gIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICBpZiAoaGFzU1NSICYmIGlzUHJvZHVjdGlvbikge1xuICAgIHJldHVybiBub29wXG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IHN0eWxlRWxlbWVudCB8fCBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmICghaGFzU1NSKSB7XG4gICAgdXBkYXRlKG9iailcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+RXhhbXBsZSBDb21wb25lbnQ8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSSdtIGFuIGV4YW1wbGUgY29tcG9uZW50IVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCBtb3VudGVkLicpXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBFeGFtcGxlLnZ1ZT8xNTVhYzI5ZSIsIjx0ZW1wbGF0ZT5cblxuICAgIDx0ZXh0YXJlYT48L3RleHRhcmVhPlxuXG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgYXV0b3NpemUgZnJvbSAnYXV0b3NpemUnXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiBbJ3Jlc2l6ZWQnXSxcbiAgICAgICAgbW91bnRlZCAoKSB7XG4gICAgICAgICAgICBhdXRvc2l6ZSh0aGlzLiRlbClcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2l6ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnRbdGhpcy5yZXNpemVkXSh0aGlzLiRlbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhdXRvc2l6ZS10ZXh0YXJlYS52dWU/YTc0ZWQ5M2MiLCJ3aW5kb3cuXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xud2luZG93Lm1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgalF1ZXJ5IGFuZCB0aGUgQm9vdHN0cmFwIGpRdWVyeSBwbHVnaW4gd2hpY2ggcHJvdmlkZXMgc3VwcG9ydFxuICogZm9yIEphdmFTY3JpcHQgYmFzZWQgQm9vdHN0cmFwIGZlYXR1cmVzIHN1Y2ggYXMgbW9kYWxzIGFuZCB0YWJzLiBUaGlzXG4gKiBjb2RlIG1heSBiZSBtb2RpZmllZCB0byBmaXQgdGhlIHNwZWNpZmljIG5lZWRzIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gKi9cblxuLyoqXG4gKiBAV0FSTklORzogVGhlc2UgdHdvIGxpYnJhcmllcyBhcmUgaW5jbHVkZWQgaW4gdGhlbWUuanMsIHNvIG5vIG5lZWQgdG8gaW5jbHVkZSBhZ2Fpbi5cbiAqL1xuLy8gd2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG4vLyByZXF1aXJlKCdib290c3RyYXAtc2FzcycpO1xuXG4vKipcbiAqIFZ1ZSBpcyBhIG1vZGVybiBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIGJ1aWxkaW5nIGludGVyYWN0aXZlIHdlYiBpbnRlcmZhY2VzXG4gKiB1c2luZyByZWFjdGl2ZSBkYXRhIGJpbmRpbmcgYW5kIHJldXNhYmxlIGNvbXBvbmVudHMuIFZ1ZSdzIEFQSSBpcyBjbGVhblxuICogYW5kIHNpbXBsZSwgbGVhdmluZyB5b3UgdG8gZm9jdXMgb24gYnVpbGRpbmcgeW91ciBuZXh0IGdyZWF0IHByb2plY3QuXG4gKi9cblxud2luZG93LlZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xud2luZG93LlZ1ZXggPSByZXF1aXJlKCd2dWV4Jyk7XG53aW5kb3cuVnVlUm91dGVyID0gcmVxdWlyZSgndnVlLXJvdXRlcicpO1xud2luZG93LlZ1ZUkxOG4gPSByZXF1aXJlKCd2dWUtaTE4bicpO1xucmVxdWlyZSgnLi9maWx0ZXJzL2hlbHBlcnMnKTtcblxuVnVlLnVzZShWdWV4KTtcblZ1ZS51c2UoVnVlUm91dGVyKTtcblZ1ZS51c2UoVnVlSTE4bik7XG5cbi8qKlxuICogV2UnbGwgbG9hZCB0aGUgYXhpb3MgSFRUUCBsaWJyYXJ5IHdoaWNoIGFsbG93cyB1cyB0byBlYXNpbHkgaXNzdWUgcmVxdWVzdHNcbiAqIHRvIG91ciBMYXJhdmVsIGJhY2stZW5kLiBUaGlzIGxpYnJhcnkgYXV0b21hdGljYWxseSBoYW5kbGVzIHNlbmRpbmcgdGhlXG4gKiBDU1JGIHRva2VuIGFzIGEgaGVhZGVyIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgXCJYU1JGXCIgdG9rZW4gY29va2llLlxuICovXG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbiA9IHtcbiAgICAnWC1DU1JGLVRPS0VOJzogd2luZG93LkxhcmF2ZWwuY3NyZlRva2VuLFxuICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgICAnQWNjZXB0LUxhbmd1YWdlJzogU29tZWxpbmUubG9jYWxlXG59O1xuXG5WdWUucHJvdG90eXBlLiRodHRwID0gd2luZG93LmF4aW9zO1xuXG52YXIgYXBpQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6ICcvYXBpLycsXG4gICAgdGltZW91dDogMTAwMDAsXG4gICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL3guc29tZWxpbmUudjEranNvbicsXG4gICAgfVxufSk7XG5WdWUucHJvdG90eXBlLiRhcGkgPSBhcGlBeGlvcztcblxuLyoqXG4gKiBFY2hvIGV4cG9zZXMgYW4gZXhwcmVzc2l2ZSBBUEkgZm9yIHN1YnNjcmliaW5nIHRvIGNoYW5uZWxzIGFuZCBsaXN0ZW5pbmdcbiAqIGZvciBldmVudHMgdGhhdCBhcmUgYnJvYWRjYXN0IGJ5IExhcmF2ZWwuIEVjaG8gYW5kIGV2ZW50IGJyb2FkY2FzdGluZ1xuICogYWxsb3dzIHlvdXIgdGVhbSB0byBlYXNpbHkgYnVpbGQgcm9idXN0IHJlYWwtdGltZSB3ZWIgYXBwbGljYXRpb25zLlxuICovXG5cbi8vIGltcG9ydCBFY2hvIGZyb20gXCJsYXJhdmVsLWVjaG9cIlxuXG4vLyB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbi8vICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4vLyAgICAga2V5OiAneW91ci1wdXNoZXIta2V5J1xuLy8gfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBMaWJlcm4gb24gMjYvNS8xNi5cbiAqL1xuZXhwb3J0IGRlZmF1bHR7XG4gICAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsLmZvY3VzKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGlyZWN0aXZlcy9mb2N1cy5qcyIsIi8qKlxuICogQ2hhbmdlcyB2YWx1ZSB0byBwYXN0IHRlbnNlLlxuICogU2ltcGxlIGZpbHRlciBkb2VzIG5vdCBzdXBwb3J0IGlycmVndWxhciB2ZXJicyBzdWNoIGFzIGVhdC1hdGUsIGZseS1mbGV3LCBldGMuXG4gKiBodHRwOi8vanNmaWRkbGUubmV0L2JyeWFuX2svMHhjem1lMnIvXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKi9cblZ1ZS5maWx0ZXIoJ3Bhc3QtdGVuc2UnLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8vIFNsaWdodGx5IGZvbGxvd3MgaHR0cDovL3d3dy5veGZvcmRkaWN0aW9uYXJpZXMuY29tL3VzL3dvcmRzL3ZlcmItdGVuc2VzLWFkZGluZy1lZC1hbmQtaW5nXG4gICAgdmFyIHZvd2VscyA9IFsnYScsICdlJywgJ2knLCAnbycsICd1J107XG4gICAgaWYoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGFzdCA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3Vic3RyKHZhbHVlLmxlbmd0aCAtIDEpLFxuICAgICAgICBzZWNvbmRMYXN0ID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMiwgMSksXG4gICAgICAgIHRoaXJkTGFzdCA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3Vic3RyKHZhbHVlLmxlbmd0aCAtIDMsIDEpLFxuICAgICAgICBsYXN0VHdvID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMiksXG4gICAgICAgIGxhc3RUaHJlZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3Vic3RyKHZhbHVlLmxlbmd0aCAtIDMpLFxuICAgICAgICBpbkFycmF5ID0gZnVuY3Rpb24oYXIsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gYXIuaW5kZXhPZih2YWx1ZSkgIT0gLTFcbiAgICAgICAgfTtcblxuICAgIC8vIHBhcnRpY2lwbGUgb3IgYWxyZWFkeSBwYXN0IHRlbnNlLCBkb24ndCB3YW50XG4gICAgaWYobGFzdFRocmVlID09PSAnaW5nJyB8fCBsYXN0VHdvID09PSAnZWQnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBFbmRzIGluICdlJywgc2ltcGx5IGFkZCB0aGUgJ2QnXG4gICAgaWYobGFzdCA9PT0gJ2UnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSArICdkJztcbiAgICB9XG5cbiAgICAvLyBFbmRzIGluICdjJywgYWRkIHRoZSAna2VkJ1xuICAgIGlmKGxhc3QgPT09ICdjJykge1xuICAgICAgICByZXR1cm4gdmFsdWUgKyAna2VkJztcbiAgICB9XG5cbiAgICAvLyBFbmRzIHdpdGggY29uc29uYW50LCB2b3dlbCwgY29uc29uYW50LiBJJ20gc2ltcGxlLCBkb3VibGUgY29uc29uYW50IGFuZCBhZGQgJ2VkJ1xuICAgIGlmKCFpbkFycmF5KHZvd2VscywgdGhpcmRMYXN0KSAmJiBpbkFycmF5KHZvd2Vscywgc2Vjb25kTGFzdCkgJiYgIWluQXJyYXkodm93ZWxzLCBsYXN0KSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgKyBsYXN0ICsgJ2VkJztcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUgKyAnZWQnO1xufSk7XG5cbi8qKlxuICogVnVlIGZpbHRlciB0byBjb252ZXJ0IGEgc2x1ZyB0byBhIG1vcmUgaHVtYW4gZnJpZW5kbHkgZm9ybS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHN0cmluZy5cbiAqL1xuVnVlLmZpbHRlcignaHVtYW5hYmxlJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgd29yZHMgPSB2YWx1ZS5zcGxpdCgvWy1fXSsvZyk7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IodmFyIGk9MDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBsZXR0ZXIgPSB3b3Jkc1tpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGxldHRlciArIHdvcmRzW2ldLnNsaWNlKDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHMuam9pbignICcpO1xufSk7XG5cbi8qKlxuICogVnVlIGZpbHRlciB0byBjb252ZXJ0IHRoZSBnaXZlbiB2YWx1ZSB0byBwZXJjZW50LlxuICogaHR0cDovL2pzZmlkZGxlLm5ldC9icnlhbl9rL3FhdWYzcXloL1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAgICBUaGUgdmFsdWUgc3RyaW5nLlxuICogQHBhcmFtIHtOdW1iZXJ9IGRlY2ltYWxzIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMuXG4gKi9cblZ1ZS5maWx0ZXIoJ3BlcmNlbnRhZ2UnLCBmdW5jdGlvbih2YWx1ZSwgZGVjaW1hbHMpIHtcbiAgICBpZighdmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSAwO1xuICAgIH1cblxuICAgIGlmKCFkZWNpbWFscykge1xuICAgICAgICBkZWNpbWFscyA9IDA7XG4gICAgfVxuXG4gICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDtcbiAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgKiBNYXRoLnBvdygxMCwgZGVjaW1hbHMpKSAvIE1hdGgucG93KDEwLCBkZWNpbWFscyk7XG4gICAgdmFsdWUgPSB2YWx1ZSArICclJztcbiAgICByZXR1cm4gdmFsdWU7XG59KTtcblxuXG4vKipcbiAqIFZ1ZSBmaWx0ZXIgdG8gcm91bmQgdGhlIGRlY2ltYWwgdG8gdGhlIGdpdmVuIHBsYWNlLlxuICogaHR0cDovL2pzZmlkZGxlLm5ldC9icnlhbl9rLzNvdmExN3k5L1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAgICBUaGUgdmFsdWUgc3RyaW5nLlxuICogQHBhcmFtIHtOdW1iZXJ9IGRlY2ltYWxzIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMuXG4gKi9cblZ1ZS5maWx0ZXIoJ3JvdW5kJywgZnVuY3Rpb24odmFsdWUsIGRlY2ltYWxzKSB7XG4gICAgaWYoIXZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICB9XG5cbiAgICBpZighZGVjaW1hbHMpIHtcbiAgICAgICAgZGVjaW1hbHMgPSAwO1xuICAgIH1cblxuICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAqIE1hdGgucG93KDEwLCBkZWNpbWFscykpIC8gTWF0aC5wb3coMTAsIGRlY2ltYWxzKTtcbiAgICByZXR1cm4gdmFsdWU7XG59KTtcblxuXG4vKipcbiAqIFZ1ZSBmaWx0ZXIgdG8gY29udmVydCB0aGUgZ2l2ZW4gdmFsdWUgdG8gd2hvbGUgZG9sbGFycywgbm8gY2hhbmdlLlxuICogaHR0cDovL2pzZmlkZGxlLm5ldC9icnlhbl9rLzJ0NmJxcWZjL1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgc3RyaW5nLlxuICovXG5WdWUuZmlsdGVyKCduby1jaGFuZ2UnLCBmdW5jdGlvbih2YWx1ZSwgc3ltYm9sKSB7XG4gICAgaWYoIXZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICB9XG5cbiAgICBpZighc3ltYm9sKSB7XG4gICAgICAgIHN5bWJvbCA9ICckJztcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKS5zcGxpdCgnLicpWzBdO1xuICAgIHJldHVybiBzeW1ib2wgKyB2YWx1ZTtcbn0pO1xuXG4vKipcbiAqIFZ1ZSBmaWx0ZXIgdG8gbWFrZSBhIHNpbXBsZSB0aW1lc3RhbXAgZm9yIGFuIElTTyBkYXRlLlxuICogaHR0cDovL2pzZmlkZGxlLm5ldC9icnlhbl9rLzQ0a3F0cGVnL1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgc3RyaW5nLlxuICovXG5WdWUuZmlsdGVyKCd0aW1lc3RhbXAnLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciBwYXJ0cyA9IHZhbHVlLnNwbGl0KCcgJyk7XG4gICAgdmFyIGRhdGUgPSBwYXJ0c1swXTtcbiAgICB2YXIgdGltZSA9IHBhcnRzWzFdO1xuXG4gICAgZGF0ZSA9IGRhdGUuc3BsaXQoJy0nKTtcbiAgICB0aW1lID0gdGltZS5zcGxpdCgnOicpO1xuXG4gICAgaWYocGFyc2VJbnQodGltZVswXSwgMTApID4gMTIpIHtcbiAgICAgICAgdmFyIGhvdXIgPSBwYXJzZUludCh0aW1lWzBdLCAxMCkgJSAxMjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBob3VyID0gcGFyc2VJbnQodGltZVswXSwgMTApO1xuICAgIH1cblxuICAgIGhvdXIgPSBob3VyIDwgMTAgPyAnMCcgKyBob3VyIDogaG91cjtcblxuICAgIHJldHVybiAnWycgKyBkYXRlWzFdICsgJy8nICsgZGF0ZVsyXSArICcgJyArIGhvdXIgKyAnOicgKyB0aW1lWzFdICsgJ10nO1xufSk7XG5cbi8qKlxuICogVnVlIGZpbHRlciB0byB0cnVuY2F0ZSBhIHN0cmluZyB0byB0aGUgc3BlY2lmaWVkIGxlbmd0aC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgc3RyaW5nLlxuICovXG5WdWUuZmlsdGVyKCd0cnVuY2F0ZScsIGZ1bmN0aW9uKHZhbHVlLCBsZW5ndGgpIHtcbiAgICBpZih2YWx1ZS5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGxlbmd0aCA9IGxlbmd0aCAtIDM7XG5cbiAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKDAsIGxlbmd0aCkgKyAnLi4uJztcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZmlsdGVycy9oZWxwZXJzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==