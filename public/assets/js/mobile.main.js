webpackJsonp([1,4],[
/* 0 */,
/* 1 */
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
/* 2 */
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
/* 3 */
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
/* 4 */,
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"autosize-textarea.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 17 */,
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_user__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_jquery__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_tools__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_bus__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_store__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_mobile_app__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mobile_router__ = __webpack_require__(186);
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
Vue.mixin(__WEBPACK_IMPORTED_MODULE_5__mixins_mobile_app__["a" /* default */]);

// Vue Components
Vue.component('autosize-textarea', __webpack_require__(19));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('sl-app-header', __webpack_require__(206));
Vue.component('sl-app-tab-bar', __webpack_require__(207));

Vue.component('example', __webpack_require__(18));
Vue.component('sl-app-home', __webpack_require__(204));

// Vue Router

var router = new VueRouter(__WEBPACK_IMPORTED_MODULE_6__mobile_router__["a" /* default */]);

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
        platform: 'mobile',
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
    router: router,
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
        this.eventEmit('AppReady');
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
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */
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

/* harmony default export */ __webpack_exports__["default"] = {
    props: ['user_id'],
    data: function data() {
        return {
            //                msg: 'hello vue',
            items: []
        };
    },

    computed: {},
    components: {},
    watch: {},
    events: {},
    mounted: function mounted() {
        console.log('Component Ready.');

        this.listenBus();
        this.onAppReady();

        //            this.fetchData();
    },

    methods: {
        listenBus: function listenBus() {
            this.eventOn("AppReady", this.onAppReady);
            this.eventOn("AppHeader_onClickNavButtonLeft", this.onClickNavButtonLeft);
            this.eventOn("AppHeader_onClickNavButtonRight", this.onClickNavButtonRight);
        },
        onAppReady: function onAppReady() {
            console.log('onAppReady');

            this.AppHeaderSetNavButtonLeft('fa fa-smile-o');
            this.AppTabBarSelectTabBarItem(0);
        },
        onClickNavButtonLeft: function onClickNavButtonLeft() {
            console.log('onClickNavButtonLeft');
            $.toast("耶", "success");
        },
        onClickNavButtonRight: function onClickNavButtonRight() {
            console.log('onClickNavButtonRight');
            $.actions({
                actions: [{
                    text: "新文章",
                    onClick: function onClick() {
                        //do something
                        $.toast("新文章");
                    }
                }, {
                    text: "上传图片",
                    onClick: function onClick() {
                        //do something
                        $.toast("上传图片");
                    }
                }]
            });
        },
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
        },
        onClickDemoButton1: function onClickDemoButton1() {
            // show alert
            $.alert("我是一个对话框");
        },
        onClickDemoButton2: function onClickDemoButton2() {
            // show actionsheet
            $.actions({
                actions: [{
                    text: "编辑",
                    onClick: function onClick() {
                        //do something
                    }
                }, {
                    text: "删除",
                    onClick: function onClick() {
                        //do something
                    }
                }]
            });
        },
        onClickDemoButton3: function onClickDemoButton3() {
            // show toast
            $.toptip('警告', 'warning');
        },
        onClickDemoButton4: function onClickDemoButton4() {
            // show toast
            $.toast("取消操作", "cancel");
        }
    }
};

/***/ }),
/* 175 */
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

/* harmony default export */ __webpack_exports__["default"] = {
    props: ['user_id'],
    data: function data() {
        return {
            //                msg: 'hello vue',
            items: []
        };
    },

    computed: {},
    components: {},
    watch: {},
    events: {},
    mounted: function mounted() {
        console.log('Component Ready.');

        this.listenBus();
        this.onAppReady();

        //            this.fetchData();
    },

    methods: {
        listenBus: function listenBus() {
            this.eventOn("AppReady", this.onAppReady);
            this.eventOn("AppHeader_onClickNavButtonLeft", this.onClickNavButtonLeft);
            this.eventOn("AppHeader_onClickNavButtonRight", this.onClickNavButtonRight);
        },
        onAppReady: function onAppReady() {
            console.log('onAppReady');

            this.AppHeaderSetTitle('Someline App');
            this.AppHeaderSetNavButtonLeft(null);
            this.AppTabBarSelectTabBarItem(1);
        },
        onClickNavButtonLeft: function onClickNavButtonLeft() {
            console.log('onClickNavButtonLeft');
        },
        onClickNavButtonRight: function onClickNavButtonRight() {
            console.log('onClickNavButtonRight');
        },
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
        },
        onClickButtonUserDetail: function onClickButtonUserDetail() {
            this.redirectToUrl('/m/app#/user/1/profile');
        }
    }
};

/***/ }),
/* 176 */
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

/* harmony default export */ __webpack_exports__["default"] = {
    props: [],
    data: function data() {
        return {
            //                msg: 'hello vue',
            items: [],
            navButtonLeftClass: 'fa fa-chevron-left',
            navButtonRightClass: 'fa fa-plus'
        };
    },

    computed: {},
    components: {},
    watch: {},
    events: {},
    mounted: function mounted() {
        console.log('Component Ready.');

        this.listenBus();
    },

    methods: {
        listenBus: function listenBus() {
            this.eventOn("AppHeader_setNavButtonLeft", this.setNavButtonLeft);
            this.eventOn("AppHeader_setNavButtonRight", this.setNavButtonRight);
        },
        setNavButtonLeft: function setNavButtonLeft(className) {
            console.log('AppHeader - setNavButtonLeft: ' + className);
            if (className == 'back') {
                className = 'fa fa-chevron-left';
            }
            this.navButtonLeftClass = className;
        },
        setNavButtonRight: function setNavButtonRight(className) {
            console.log('AppHeader - setNavButtonRight: ' + className);
            if (className == 'new' || className == 'plus') {
                className = 'fa fa-plus';
            }
            this.navButtonRightClass = className;
        },
        onClickNavButtonLeft: function onClickNavButtonLeft() {
            console.log('AppHeader - onClickNavButtonLeft');
            this.eventEmit("AppHeader_onClickNavButtonLeft");
        },
        onClickNavButtonRight: function onClickNavButtonRight() {
            console.log('AppHeader - onClickNavButtonRight');
            this.eventEmit("AppHeader_onClickNavButtonRight");
        }
    }
};

/***/ }),
/* 177 */
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
//
//
//
//
//
//
//
//
//
//
//
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
            items: [],
            ShowAppTabBar: true,
            selected_tab_bar_item_index: 0
        };
    },

    computed: {},
    components: {
        'sl-tab-bar-item': __webpack_require__(208)
    },
    watch: {},
    events: {},
    mounted: function mounted() {
        console.log('Component Ready.');

        this.listenBus();
    },

    methods: {
        listenBus: function listenBus() {
            this.eventOn("AppTabBar_selectTabBarItem", this.selectTabBarItem);
            this.eventOn("AppTabBar_setShowAppTabBar", this.setShowAppTabBar);
        },
        setShowAppTabBar: function setShowAppTabBar(isShow) {
            if (isShow == undefined) {
                isShow = true;
            }
            console.log('AppTabBar - setShowAppTabBar: ' + isShow);
            this.ShowAppTabBar = isShow;
        },
        selectTabBarItem: function selectTabBarItem(index) {
            this.selected_tab_bar_item_index = index;
        },
        isSelectTabBarItem: function isSelectTabBarItem(index) {
            return this.selected_tab_bar_item_index == index;
        },
        onClickTabBarItem: function onClickTabBarItem(index) {
            console.log('AppTabBar - onClickTabBarItem: ' + index);
            this.eventEmit("AppTabBar_onClickTabBarItem", index);
        }
    }
};

/***/ }),
/* 178 */
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

/* harmony default export */ __webpack_exports__["default"] = {
    props: ['itemId', 'link', 'linkClass', 'linkClick'],
    data: function data() {
        return {
            //                msg: 'hello vue',
            items: []
        };
    },

    computed: {},
    components: {},
    mounted: function mounted() {
        console.log('Component Ready.');
    },

    watch: {},
    events: {},
    methods: {
        onClickLink: function onClickLink() {
            console.log('onClickLink');
            if (this.linkClick) {
                this.linkClick(this.itemId);
            }
        }
    }
};

/***/ }),
/* 179 */
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

/* harmony default export */ __webpack_exports__["default"] = {
    props: ['user_id'],
    data: function data() {
        return {
            //                msg: 'hello vue',
            items: [],
            selected_menu_item: 'profile'
        };
    },

    computed: {
        routeId: function routeId() {
            if (this.$route.params.id) {
                return this.$route.params.id;
            } else {
                return this.user_id;
            }
        },
        currentRoute: function currentRoute() {
            return "/user/" + this.routeId;
        },
        routeProfile: function routeProfile() {
            return this.currentRoute + "/profile";
        },
        routePosts: function routePosts() {
            return this.currentRoute + "/posts";
        }
    },
    components: {},
    watch: {},
    events: {},
    mounted: function mounted() {
        console.log('Component Ready.');
    },
    destroyed: function destroyed() {
        console.log('Component Destroyed.');
    },

    methods: {
        isSelectedMenuItem: function isSelectedMenuItem(item) {
            return this.selected_menu_item == item;
        },
        selectMenuItem: function selectMenuItem(item) {
            console.log('selectMenuItem');
            this.selected_menu_item = item;
        }
    }
};

/***/ }),
/* 180 */
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

/* harmony default export */ __webpack_exports__["default"] = {
    props: [],
    data: function data() {
        return {
            //                msg: 'hello vue',
            item: {}
        };
    },

    computed: {
        routeId: function routeId() {
            return this.$route.params.id;
        }
    },
    components: {},
    watch: {},
    events: {},
    mounted: function mounted() {
        console.log('Component Ready.');

        this.listenBus();
        this.onAppReady();

        this.fetchData();
    },
    destroyed: function destroyed() {
        console.log('Component Destroyed.');
        this.AppTabBarSetShowAppTabBar(true);
    },

    methods: {
        listenBus: function listenBus() {
            this.eventOn("AppReady", this.onAppReady);
            this.eventOn("AppHeader_onClickNavButtonLeft", this.onClickNavButtonLeft);
            this.eventOn("AppHeader_onClickNavButtonRight", this.onClickNavButtonRight);
        },
        onAppReady: function onAppReady() {
            console.log('onAppReady');

            this.AppHeaderSetTitle('Posts');
            this.AppHeaderSetNavButtonLeft('back');
            this.AppTabBarSetShowAppTabBar(false);
            this.AppHeaderSetNavButtonRight(null);
            this.AppTabBarSelectTabBarItem(null);
        },
        onClickNavButtonLeft: function onClickNavButtonLeft() {
            console.log('onClickNavButtonLeft');
            this.$router.go(-1);
        },
        onClickNavButtonRight: function onClickNavButtonRight() {
            console.log('onClickNavButtonRight');
        },
        fetchData: function fetchData() {
            var _this = this;

            this.$api.get('/users/' + this.routeId, {
                params: {
                    //                        include: ''
                }
            }).then(function (response) {
                console.log(response);
                _this.item = response.data.data;
            }.bind(this)).catch(function (error) {
                console.error(error);
            }.bind(this));
        }
    }
};

/***/ }),
/* 181 */
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

/* harmony default export */ __webpack_exports__["default"] = {
    props: [],
    data: function data() {
        return {
            //                msg: 'hello vue',
            item: {}
        };
    },

    computed: {
        routeId: function routeId() {
            return this.$route.params.id;
        }
    },
    components: {},
    watch: {},
    events: {},
    mounted: function mounted() {
        console.log('Component Ready.');

        this.listenBus();
        this.onAppReady();

        this.fetchData();
    },
    destroyed: function destroyed() {
        console.log('Component Destroyed.');
        this.AppTabBarSetShowAppTabBar(true);
    },

    methods: {
        listenBus: function listenBus() {
            this.eventOn("AppReady", this.onAppReady);
            this.eventOn("AppHeader_onClickNavButtonLeft", this.onClickNavButtonLeft);
            this.eventOn("AppHeader_onClickNavButtonRight", this.onClickNavButtonRight);
        },
        onAppReady: function onAppReady() {
            console.log('onAppReady');

            this.AppHeaderSetTitle('Profile');
            this.AppHeaderSetNavButtonLeft('back');
            this.AppTabBarSetShowAppTabBar(false);
            this.AppHeaderSetNavButtonRight(null);
            this.AppTabBarSelectTabBarItem(null);
        },
        onClickNavButtonLeft: function onClickNavButtonLeft() {
            console.log('onClickNavButtonLeft');
            this.$router.go(-1);
        },
        onClickNavButtonRight: function onClickNavButtonRight() {
            console.log('onClickNavButtonRight');
        },
        fetchData: function fetchData() {
            var _this = this;

            this.$api.get('/users/' + this.routeId, {
                params: {
                    //                        include: ''
                }
            }).then(function (response) {
                console.log(response);
                _this.item = response.data.data;
            }.bind(this)).catch(function (error) {
                console.error(error);
            }.bind(this));
        }
    }
};

/***/ }),
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    computed: {},
    methods: {
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
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    routes: [{
        path: '/',
        component: __webpack_require__(205)
    }, {
        path: '/user/:id',
        component: __webpack_require__(209),
        children: [{
            // default path will redirect to list
            path: '',
            redirect: function redirect(to) {
                window.location.href = '/users';
            }
        }, {
            path: 'profile',
            component: __webpack_require__(211)
        }, {
            path: 'posts',
            component: __webpack_require__(210)
        }]
    }]
};

/***/ }),
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"AppHeader.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Profile.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"App.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Home.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"AppTabBar.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Posts.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 196 */,
/* 197 */,
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"UserDetail.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"TabBarItem.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(235)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(174),
  /* template */
  __webpack_require__(221),
  /* scopeId */
  "data-v-5f6e8bef",
  /* cssModules */
  null
)
Component.options.__file = "/Users/libern/Code/someline-starter-master/resources/assets/js/components/mobile/home/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f6e8bef", Component.options)
  } else {
    hotAPI.reload("data-v-5f6e8bef", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(234)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(175),
  /* template */
  __webpack_require__(220),
  /* scopeId */
  "data-v-5ce1001b",
  /* cssModules */
  null
)
Component.options.__file = "/Users/libern/Code/someline-starter-master/resources/assets/js/components/mobile/main/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ce1001b", Component.options)
  } else {
    hotAPI.reload("data-v-5ce1001b", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(232)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(176),
  /* template */
  __webpack_require__(218),
  /* scopeId */
  "data-v-457bae5e",
  /* cssModules */
  null
)
Component.options.__file = "/Users/libern/Code/someline-starter-master/resources/assets/js/components/mobile/main/section/AppHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-457bae5e", Component.options)
  } else {
    hotAPI.reload("data-v-457bae5e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(236)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(177),
  /* template */
  __webpack_require__(222),
  /* scopeId */
  "data-v-7b55a8e2",
  /* cssModules */
  null
)
Component.options.__file = "/Users/libern/Code/someline-starter-master/resources/assets/js/components/mobile/main/section/AppTabBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppTabBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b55a8e2", Component.options)
  } else {
    hotAPI.reload("data-v-7b55a8e2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(241)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(178),
  /* template */
  __webpack_require__(228),
  /* scopeId */
  "data-v-e9e0815c",
  /* cssModules */
  null
)
Component.options.__file = "/Users/libern/Code/someline-starter-master/resources/assets/js/components/mobile/main/section/tabbar/TabBarItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TabBarItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e9e0815c", Component.options)
  } else {
    hotAPI.reload("data-v-e9e0815c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(240)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(179),
  /* template */
  __webpack_require__(227),
  /* scopeId */
  "data-v-d61b33c0",
  /* cssModules */
  null
)
Component.options.__file = "/Users/libern/Code/someline-starter-master/resources/assets/js/components/mobile/user/UserDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UserDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d61b33c0", Component.options)
  } else {
    hotAPI.reload("data-v-d61b33c0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(237)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(180),
  /* template */
  __webpack_require__(223),
  /* scopeId */
  "data-v-a7c8f20e",
  /* cssModules */
  null
)
Component.options.__file = "/Users/libern/Code/someline-starter-master/resources/assets/js/components/mobile/user/detail/Posts.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Posts.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a7c8f20e", Component.options)
  } else {
    hotAPI.reload("data-v-a7c8f20e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(233)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(181),
  /* template */
  __webpack_require__(219),
  /* scopeId */
  "data-v-488e6e4f",
  /* cssModules */
  null
)
Component.options.__file = "/Users/libern/Code/someline-starter-master/resources/assets/js/components/mobile/user/detail/Profile.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Profile.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-488e6e4f", Component.options)
  } else {
    hotAPI.reload("data-v-488e6e4f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "app-header navbar box-shadow bg-dark",
    attrs: {
      "id": "header",
      "role": "menu"
    }
  }, [_c('div', {
    staticClass: "navbar-header text-center dk",
    staticStyle: {
      "float": "none",
      "width": "auto"
    }
  }, [_c('button', {
    staticClass: "pull-right dk",
    on: {
      "click": _vm.onClickNavButtonRight
    }
  }, [_c('i', {
    class: _vm.navButtonRightClass
  })]), _vm._v(" "), _c('button', {
    staticClass: "pull-left dk",
    on: {
      "click": _vm.onClickNavButtonLeft
    }
  }, [_c('i', {
    class: _vm.navButtonLeftClass
  })]), _vm._v(" "), _c('div', {
    staticClass: "navbar-brand text-lt font-normal"
  }, [_vm._v("\n            " + _vm._s(_vm.bus.title) + "\n        ")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-457bae5e", module.exports)
  }
}

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('b', [_vm._v("Profile")]), _vm._v(" for User " + _vm._s(_vm.routeId) + "\n    "), _c('pre', [_vm._v(_vm._s(_vm.item))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-488e6e4f", module.exports)
  }
}

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper-md"
  }, [_c('a', {
    staticClass: "btn btn-primary btn-block btn-lg r-2x",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.onClickButtonUserDetail
    }
  }, [_vm._v("Show User Detail")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5ce1001b", module.exports)
  }
}

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('p', [_c('a', {
    staticClass: "btn btn-primary btn-block btn-lg r-2x",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.onClickDemoButton1
    }
  }, [_vm._v("\n            Alert\n        ")])]), _vm._v(" "), _c('p', [_c('a', {
    staticClass: "btn btn-success btn-block btn-lg r-2x",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.onClickDemoButton2
    }
  }, [_vm._v("\n            Action Sheet\n        ")])]), _vm._v(" "), _c('p', [_c('a', {
    staticClass: "btn btn-warning btn-block btn-lg r-2x",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.onClickDemoButton3
    }
  }, [_vm._v("\n            Toptip\n        ")])]), _vm._v(" "), _c('p', [_c('a', {
    staticClass: "btn btn-danger btn-block btn-lg r-2x",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.onClickDemoButton4
    }
  }, [_vm._v("\n            Cancel\n        ")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5f6e8bef", module.exports)
  }
}

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.ShowAppTabBar),
      expression: "ShowAppTabBar"
    }],
    staticClass: "app-footer navbar navbar-fixed-bottom bg-light lt b-t"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-2 hidden-xs"
  }), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('div', {
    staticClass: "w-xl w-auto-xs center-block"
  }, [_c('div', {
    staticClass: "btn-group btn-group-justified text-center text-sm"
  }, [(_vm.isSelectTabBarItem(0)) ? [_c('sl-tab-bar-item', {
    attrs: {
      "link": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "block text-md m-t-xs icon-user text-primary"
  }), _vm._v(" "), _c('span', {
    staticClass: "text-xs text-primary"
  }, [_vm._v("Account")])])] : [_c('sl-tab-bar-item', {
    attrs: {
      "link": "/m/",
      "item-id": "0",
      "link-click": _vm.onClickTabBarItem(0)
    }
  }, [_c('i', {
    staticClass: "block text-md m-t-xs icon-user"
  }), _vm._v(" "), _c('span', {
    staticClass: "text-xs"
  }, [_vm._v("Account")])])], _vm._v(" "), (_vm.isSelectTabBarItem(1)) ? [_c('sl-tab-bar-item', {
    attrs: {
      "link": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "block text-md m-t-xs icon-cloud-upload text-primary"
  }), _vm._v(" "), _c('span', {
    staticClass: "text-xs text-primary"
  }, [_vm._v("Upload")])])] : [_c('sl-tab-bar-item', {
    attrs: {
      "link": "/m/app",
      "item-id": "1",
      "link-click": _vm.onClickTabBarItem
    }
  }, [_c('i', {
    staticClass: "block text-md m-t-xs icon-cloud-upload"
  }), _vm._v(" "), _c('span', {
    staticClass: "text-xs"
  }, [_vm._v("Upload")])])], _vm._v(" "), (_vm.isSelectTabBarItem(2)) ? [_c('sl-tab-bar-item', {
    attrs: {
      "link": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "block text-md m-t-xs icon-clock text-primary"
  }), _vm._v(" "), _c('span', {
    staticClass: "text-xs text-primary"
  }, [_vm._v("Watch")])])] : [_c('sl-tab-bar-item', {
    attrs: {
      "link": "/m/app",
      "item-id": "2",
      "link-click": _vm.onClickTabBarItem
    }
  }, [_c('i', {
    staticClass: "block text-md m-t-xs icon-clock"
  }), _vm._v(" "), _c('span', {
    staticClass: "text-xs"
  }, [_vm._v("Watch")])])], _vm._v(" "), (_vm.isSelectTabBarItem(3)) ? [_c('sl-tab-bar-item', {
    attrs: {
      "link": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "block text-md m-t-xs icon-bag text-primary"
  }), _vm._v(" "), _c('span', {
    staticClass: "text-xs text-primary"
  }, [_vm._v("Shopping")])])] : [_c('sl-tab-bar-item', {
    attrs: {
      "link": "/m/app",
      "item-id": "3",
      "link-click": _vm.onClickTabBarItem
    }
  }, [_c('i', {
    staticClass: "block text-md m-t-xs icon-bag"
  }), _vm._v(" "), _c('span', {
    staticClass: "text-xs"
  }, [_vm._v("Shopping")])])]], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-2 hidden-xs"
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7b55a8e2", module.exports)
  }
}

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('b', [_vm._v("Posts")]), _vm._v(" for User " + _vm._s(_vm.routeId) + "\n    "), _c('pre', [_vm._v(_vm._s(_vm.item))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a7c8f20e", module.exports)
  }
}

/***/ }),
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper-md"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-header wrapper"
  }, [_c('ul', {
    staticClass: "nav nav-pills nav-justified"
  }, [_c('li', {
    class: {
      'active': _vm.isSelectedMenuItem('profile')
    }
  }, [_c('router-link', {
    attrs: {
      "to": _vm.routeProfile
    },
    nativeOn: {
      "click": function($event) {
        _vm.selectMenuItem('profile')
      }
    }
  }, [_vm._v("Profile")])], 1), _vm._v(" "), _c('li', {
    class: {
      'active': _vm.isSelectedMenuItem('posts')
    }
  }, [_c('router-link', {
    attrs: {
      "to": _vm.routePosts
    },
    nativeOn: {
      "click": function($event) {
        _vm.selectMenuItem('posts')
      }
    }
  }, [_vm._v("Posts")])], 1)])]), _vm._v(" "), _c('router-view')], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d61b33c0", module.exports)
  }
}

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "btn-group"
  }, [_c('a', {
    staticClass: "wrapper-xs block",
    class: _vm.linkClass,
    attrs: {
      "href": _vm.link
    },
    on: {
      "click": _vm.onClickLink
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e9e0815c", module.exports)
  }
}

/***/ }),
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(190);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2f73f97c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-457bae5e&scoped=true!./../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppHeader.vue", function() {
     var newContent = require("!!./../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-457bae5e&scoped=true!./../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppHeader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(191);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("56ed6bda", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-488e6e4f&scoped=true!./../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Profile.vue", function() {
     var newContent = require("!!./../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-488e6e4f&scoped=true!./../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Profile.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("486d268d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5ce1001b&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5ce1001b&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("6d26d3c7", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5f6e8bef&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5f6e8bef&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(194);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7b7b2b3a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7b55a8e2&scoped=true!./../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppTabBar.vue", function() {
     var newContent = require("!!./../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7b55a8e2&scoped=true!./../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppTabBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(195);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("e087aafa", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a7c8f20e&scoped=true!./../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Posts.vue", function() {
     var newContent = require("!!./../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a7c8f20e&scoped=true!./../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Posts.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 238 */,
/* 239 */,
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("5912a16f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d61b33c0&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserDetail.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d61b33c0&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserDetail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("76d4b9a0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e9e0815c&scoped=true!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TabBarItem.vue", function() {
     var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e9e0815c&scoped=true!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TabBarItem.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 242 */,
/* 243 */,
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(149);


/***/ })
],[244]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vL0V4YW1wbGUudnVlIiwid2VicGFjazovLy9hdXRvc2l6ZS10ZXh0YXJlYS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kaXJlY3RpdmVzL2ZvY3VzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZmlsdGVycy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZmlsdGVycy9ubDJici5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9idXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvanF1ZXJ5LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3Rvb2xzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZT9kMmRhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlPzM4YzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlPzVmYzkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZT8wNWM0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWU/MGRkOSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vYmlsZS5qcyIsIndlYnBhY2s6Ly8vSG9tZS52dWUiLCJ3ZWJwYWNrOi8vL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL0FwcEhlYWRlci52dWUiLCJ3ZWJwYWNrOi8vL0FwcFRhYkJhci52dWUiLCJ3ZWJwYWNrOi8vL1RhYkJhckl0ZW0udnVlIiwid2VicGFjazovLy9Vc2VyRGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vUG9zdHMudnVlIiwid2VicGFjazovLy9Qcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9tb2JpbGVfYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbW9iaWxlX3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi9BcHBIZWFkZXIudnVlPzZiNTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS91c2VyL2RldGFpbC9Qcm9maWxlLnZ1ZT81ZDZhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9BcHAudnVlPzRhNzAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9ob21lL0hvbWUudnVlPzdjMjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vQXBwVGFiQmFyLnZ1ZT9lODIzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9kZXRhaWwvUG9zdHMudnVlP2Q0N2QiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS91c2VyL1VzZXJEZXRhaWwudnVlPzA5OTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vdGFiYmFyL1RhYkJhckl0ZW0udnVlPzUxZmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9ob21lL0hvbWUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9BcHAudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9zZWN0aW9uL0FwcEhlYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vQXBwVGFiQmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi90YWJiYXIvVGFiQmFySXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS91c2VyL1VzZXJEZXRhaWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9kZXRhaWwvUG9zdHMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9kZXRhaWwvUHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vQXBwSGVhZGVyLnZ1ZT8xMGFkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9kZXRhaWwvUHJvZmlsZS52dWU/ZWIxMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vQXBwLnZ1ZT83YjgyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvaG9tZS9Ib21lLnZ1ZT8xM2FiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9zZWN0aW9uL0FwcFRhYkJhci52dWU/M2MwOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvZGV0YWlsL1Bvc3RzLnZ1ZT85YjY2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9Vc2VyRGV0YWlsLnZ1ZT9lOGJkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9zZWN0aW9uL3RhYmJhci9UYWJCYXJJdGVtLnZ1ZT8zOTdhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9zZWN0aW9uL0FwcEhlYWRlci52dWU/MjgwOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvZGV0YWlsL1Byb2ZpbGUudnVlP2RmNGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL0FwcC52dWU/NDAxMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL2hvbWUvSG9tZS52dWU/NmU1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi9BcHBUYWJCYXIudnVlP2ZhZDAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS91c2VyL2RldGFpbC9Qb3N0cy52dWU/Yzc0ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvVXNlckRldGFpbC52dWU/YzVlMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi90YWJiYXIvVGFiQmFySXRlbS52dWU/MDQ4MSJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJfIiwicmVxdWlyZSIsIm1vbWVudCIsIlZ1ZSIsIlZ1ZXgiLCJWdWVSb3V0ZXIiLCJWdWVJMThuIiwidXNlIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJMYXJhdmVsIiwiY3NyZlRva2VuIiwiU29tZWxpbmUiLCJsb2NhbGUiLCJwcm90b3R5cGUiLCIkaHR0cCIsImFwaUF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInRpbWVvdXQiLCIkYXBpIiwiYmluZCIsImVsIiwiZm9jdXMiLCJmaWx0ZXIiLCJ2YWx1ZSIsInZvd2VscyIsImxhc3QiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0ciIsImxlbmd0aCIsInNlY29uZExhc3QiLCJ0aGlyZExhc3QiLCJsYXN0VHdvIiwibGFzdFRocmVlIiwiaW5BcnJheSIsImFyIiwiaW5kZXhPZiIsIndvcmRzIiwic3BsaXQiLCJyZXN1bHRzIiwiaSIsImxldHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwicHVzaCIsInNsaWNlIiwiam9pbiIsImRlY2ltYWxzIiwiTWF0aCIsInJvdW5kIiwicG93Iiwic3ltYm9sIiwidG9TdHJpbmciLCJyZXBsYWNlIiwicGFydHMiLCJkYXRlIiwidGltZSIsInBhcnNlSW50IiwiaG91ciIsInN1YnN0cmluZyIsInJlYWQiLCJ2YWwiLCJSZWdFeHAiLCJjb21wdXRlZCIsImJ1cyIsIm1ldGhvZHMiLCJldmVudEVtaXQiLCJuYW1lIiwiZGF0YSIsIiRlbWl0IiwiZXZlbnRPbiIsImNhbGxiYWNrIiwiJG9uIiwiZXZlbnRPZmYiLCIkb2ZmIiwiQXBwSGVhZGVyU2V0VGl0bGUiLCJ0aXRsZSIsIkFwcFRhYkJhclNldFNob3dBcHBUYWJCYXIiLCJpc1Nob3ciLCJBcHBUYWJCYXJTZWxlY3RUYWJCYXJJdGVtIiwiaW5kZXgiLCJBcHBIZWFkZXJTZXROYXZCdXR0b25MZWZ0IiwiY2xhc3NOYW1lIiwiQXBwSGVhZGVyU2V0TmF2QnV0dG9uUmlnaHQiLCJzY3JvbGxUb0JvdHRvbSIsInNlbGVjdG9yIiwiYW5pbWF0ZWQiLCJhbmltYXRlVGltZSIsIiRlbGVtZW50IiwiJCIsInNjcm9sbEhlaWdodCIsInByb3AiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidnVleFN0b3JlIiwic3RvcmVDb21taXQiLCJjb21taXQiLCJzdG9yZURpc3BhdGNoIiwiZGlzcGF0Y2giLCJub3dUaW1lc3RhbXAiLCJ1bml4IiwibW9tZW50RnJvbURhdGVUaW1lIiwiZGF0ZVRpbWUiLCJkYXRlVGltZVRvVGltZXN0YW1wIiwidXJsIiwicGF0aCIsImJhc2VVcmwiLCJyZWRpcmVjdFRvVXJsIiwibG9jYXRpb24iLCJocmVmIiwicmVkaXJlY3RUb1VybEZyb21CYXNlVXJsIiwicmVsb2FkUGFnZSIsIm9iamVjdFRvRm9ybURhdGEiLCJpdGVtIiwiZm9ybV9kYXRhIiwiRm9ybURhdGEiLCJrZXkiLCJhcHBlbmQiLCJpc0VtcHR5T2JqZWN0Iiwib2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImlzTW9iaWxlIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJjdXJyZW50VXNlcklkIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwidXNlciIsInVzZXJfaWQiLCJkaXJlY3RpdmUiLCJtaXhpbiIsImNvbXBvbmVudCIsInJvdXRlciIsIlN0b3JlIiwicGxhdGZvcm0iLCJjb3VudCIsIm11dGF0aW9ucyIsImluY3JlbWVudCIsImFwcCIsIm1zZyIsIndhdGNoIiwiZXZlbnRzIiwiY3JlYXRlZCIsImluaXRMb2NhbGUiLCJtb3VudGVkIiwidGhhdCIsImxhbmciLCJjb25maWciLCJsb2NhbGVzIiwicm91dGVzIiwiY2hpbGRyZW4iLCJyZWRpcmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBLHdDQUF3QyxnQkFBZ0I7QUFDeEQsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqREE7QUFDQTtBQUNB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QSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDOUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDOUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDOUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDOUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDOUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7QUMvQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDckNBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDWEEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDbkJBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQzNDQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUNyR0EsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7QUNYQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUMzQ0EsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6Ii9hc3NldHMvanMvbW9iaWxlLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIHNjb3BlSWQsXG4gIGNzc01vZHVsZXNcbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIC8vIGluamVjdCBjc3NNb2R1bGVzXG4gIGlmIChjc3NNb2R1bGVzKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCAob3B0aW9ucy5jb21wdXRlZCA9IHt9KVxuICAgIE9iamVjdC5rZXlzKGNzc01vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGNzc01vZHVsZXNba2V5XVxuICAgICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxudmFyIGxpc3RUb1N0eWxlcyA9IHJlcXVpcmUoJy4vbGlzdFRvU3R5bGVzJylcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7IGNzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHBhcnQuaWQgPSBwYXJlbnRJZCArICc6MCdcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0LmlkID0gcGFyZW50SWQgKyAnOicgKyBuZXdTdHlsZXNbaWRdLnBhcnRzLmxlbmd0aFxuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS12dWUtc3NyLWlkfj1cIicgKyBvYmouaWQgKyAnXCJdJylcbiAgdmFyIGhhc1NTUiA9IHN0eWxlRWxlbWVudCAhPSBudWxsXG5cbiAgLy8gaWYgaW4gcHJvZHVjdGlvbiBtb2RlIGFuZCBzdHlsZSBpcyBhbHJlYWR5IHByb3ZpZGVkIGJ5IFNTUixcbiAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gIGlmIChoYXNTU1IgJiYgaXNQcm9kdWN0aW9uKSB7XG4gICAgcmV0dXJuIG5vb3BcbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gc3R5bGVFbGVtZW50IHx8IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKCFoYXNTU1IpIHtcbiAgICB1cGRhdGUob2JqKVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5FeGFtcGxlIENvbXBvbmVudDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBJJ20gYW4gZXhhbXBsZSBjb21wb25lbnQhXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IG1vdW50ZWQuJylcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEV4YW1wbGUudnVlPzE1NWFjMjllIiwiPHRlbXBsYXRlPlxuXG4gICAgPHRleHRhcmVhPjwvdGV4dGFyZWE+XG5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBhdXRvc2l6ZSBmcm9tICdhdXRvc2l6ZSdcbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IFsncmVzaXplZCddLFxuICAgICAgICBtb3VudGVkICgpIHtcbiAgICAgICAgICAgIGF1dG9zaXplKHRoaXMuJGVsKVxuICAgICAgICAgICAgaWYgKHRoaXMucmVzaXplZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudFt0aGlzLnJlc2l6ZWRdKHRoaXMuJGVsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGF1dG9zaXplLXRleHRhcmVhLnZ1ZT9hNzRlZDkzYyIsIndpbmRvdy5fID0gcmVxdWlyZSgnbG9kYXNoJyk7XG53aW5kb3cubW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG5cbi8qKlxuICogV2UnbGwgbG9hZCBqUXVlcnkgYW5kIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbiB3aGljaCBwcm92aWRlcyBzdXBwb3J0XG4gKiBmb3IgSmF2YVNjcmlwdCBiYXNlZCBCb290c3RyYXAgZmVhdHVyZXMgc3VjaCBhcyBtb2RhbHMgYW5kIHRhYnMuIFRoaXNcbiAqIGNvZGUgbWF5IGJlIG1vZGlmaWVkIHRvIGZpdCB0aGUgc3BlY2lmaWMgbmVlZHMgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAqL1xuXG4vKipcbiAqIEBXQVJOSU5HOiBUaGVzZSB0d28gbGlicmFyaWVzIGFyZSBpbmNsdWRlZCBpbiB0aGVtZS5qcywgc28gbm8gbmVlZCB0byBpbmNsdWRlIGFnYWluLlxuICovXG4vLyB3aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcbi8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC1zYXNzJyk7XG5cbi8qKlxuICogVnVlIGlzIGEgbW9kZXJuIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgYnVpbGRpbmcgaW50ZXJhY3RpdmUgd2ViIGludGVyZmFjZXNcbiAqIHVzaW5nIHJlYWN0aXZlIGRhdGEgYmluZGluZyBhbmQgcmV1c2FibGUgY29tcG9uZW50cy4gVnVlJ3MgQVBJIGlzIGNsZWFuXG4gKiBhbmQgc2ltcGxlLCBsZWF2aW5nIHlvdSB0byBmb2N1cyBvbiBidWlsZGluZyB5b3VyIG5leHQgZ3JlYXQgcHJvamVjdC5cbiAqL1xuXG53aW5kb3cuVnVlID0gcmVxdWlyZSgndnVlJyk7XG53aW5kb3cuVnVleCA9IHJlcXVpcmUoJ3Z1ZXgnKTtcbndpbmRvdy5WdWVSb3V0ZXIgPSByZXF1aXJlKCd2dWUtcm91dGVyJyk7XG53aW5kb3cuVnVlSTE4biA9IHJlcXVpcmUoJ3Z1ZS1pMThuJyk7XG5yZXF1aXJlKCcuL2ZpbHRlcnMvaGVscGVycycpO1xuXG5WdWUudXNlKFZ1ZXgpO1xuVnVlLnVzZShWdWVSb3V0ZXIpO1xuVnVlLnVzZShWdWVJMThuKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uID0ge1xuICAgICdYLUNTUkYtVE9LRU4nOiB3aW5kb3cuTGFyYXZlbC5jc3JmVG9rZW4sXG4gICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBTb21lbGluZS5sb2NhbGVcbn07XG5cblZ1ZS5wcm90b3R5cGUuJGh0dHAgPSB3aW5kb3cuYXhpb3M7XG5cbnZhciBhcGlBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogJy9hcGkvJyxcbiAgICB0aW1lb3V0OiAxMDAwMCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24veC5zb21lbGluZS52MStqc29uJyxcbiAgICB9XG59KTtcblZ1ZS5wcm90b3R5cGUuJGFwaSA9IGFwaUF4aW9zO1xuXG4vKipcbiAqIEVjaG8gZXhwb3NlcyBhbiBleHByZXNzaXZlIEFQSSBmb3Igc3Vic2NyaWJpbmcgdG8gY2hhbm5lbHMgYW5kIGxpc3RlbmluZ1xuICogZm9yIGV2ZW50cyB0aGF0IGFyZSBicm9hZGNhc3QgYnkgTGFyYXZlbC4gRWNobyBhbmQgZXZlbnQgYnJvYWRjYXN0aW5nXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXG4gKi9cblxuLy8gaW1wb3J0IEVjaG8gZnJvbSBcImxhcmF2ZWwtZWNob1wiXG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6ICd5b3VyLXB1c2hlci1rZXknXG4vLyB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IExpYmVybiBvbiAyNi81LzE2LlxuICovXG5leHBvcnQgZGVmYXVsdHtcbiAgICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kaXJlY3RpdmVzL2ZvY3VzLmpzIiwiLyoqXG4gKiBDaGFuZ2VzIHZhbHVlIHRvIHBhc3QgdGVuc2UuXG4gKiBTaW1wbGUgZmlsdGVyIGRvZXMgbm90IHN1cHBvcnQgaXJyZWd1bGFyIHZlcmJzIHN1Y2ggYXMgZWF0LWF0ZSwgZmx5LWZsZXcsIGV0Yy5cbiAqIGh0dHA6Ly9qc2ZpZGRsZS5uZXQvYnJ5YW5fay8weGN6bWUyci9cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHN0cmluZy5cbiAqL1xuVnVlLmZpbHRlcigncGFzdC10ZW5zZScsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgLy8gU2xpZ2h0bHkgZm9sbG93cyBodHRwOi8vd3d3Lm94Zm9yZGRpY3Rpb25hcmllcy5jb20vdXMvd29yZHMvdmVyYi10ZW5zZXMtYWRkaW5nLWVkLWFuZC1pbmdcbiAgICB2YXIgdm93ZWxzID0gWydhJywgJ2UnLCAnaScsICdvJywgJ3UnXTtcbiAgICBpZighdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsYXN0ID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMSksXG4gICAgICAgIHNlY29uZExhc3QgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnN1YnN0cih2YWx1ZS5sZW5ndGggLSAyLCAxKSxcbiAgICAgICAgdGhpcmRMYXN0ID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMywgMSksXG4gICAgICAgIGxhc3RUd28gPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnN1YnN0cih2YWx1ZS5sZW5ndGggLSAyKSxcbiAgICAgICAgbGFzdFRocmVlID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMyksXG4gICAgICAgIGluQXJyYXkgPSBmdW5jdGlvbihhciwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBhci5pbmRleE9mKHZhbHVlKSAhPSAtMVxuICAgICAgICB9O1xuXG4gICAgLy8gcGFydGljaXBsZSBvciBhbHJlYWR5IHBhc3QgdGVuc2UsIGRvbid0IHdhbnRcbiAgICBpZihsYXN0VGhyZWUgPT09ICdpbmcnIHx8IGxhc3RUd28gPT09ICdlZCcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8vIEVuZHMgaW4gJ2UnLCBzaW1wbHkgYWRkIHRoZSAnZCdcbiAgICBpZihsYXN0ID09PSAnZScpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICsgJ2QnO1xuICAgIH1cblxuICAgIC8vIEVuZHMgaW4gJ2MnLCBhZGQgdGhlICdrZWQnXG4gICAgaWYobGFzdCA9PT0gJ2MnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSArICdrZWQnO1xuICAgIH1cblxuICAgIC8vIEVuZHMgd2l0aCBjb25zb25hbnQsIHZvd2VsLCBjb25zb25hbnQuIEknbSBzaW1wbGUsIGRvdWJsZSBjb25zb25hbnQgYW5kIGFkZCAnZWQnXG4gICAgaWYoIWluQXJyYXkodm93ZWxzLCB0aGlyZExhc3QpICYmIGluQXJyYXkodm93ZWxzLCBzZWNvbmRMYXN0KSAmJiAhaW5BcnJheSh2b3dlbHMsIGxhc3QpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSArIGxhc3QgKyAnZWQnO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZSArICdlZCc7XG59KTtcblxuLyoqXG4gKiBWdWUgZmlsdGVyIHRvIGNvbnZlcnQgYSBzbHVnIHRvIGEgbW9yZSBodW1hbiBmcmllbmRseSBmb3JtLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgc3RyaW5nLlxuICovXG5WdWUuZmlsdGVyKCdodW1hbmFibGUnLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB3b3JkcyA9IHZhbHVlLnNwbGl0KC9bLV9dKy9nKTtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGZvcih2YXIgaT0wOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGxldHRlciA9IHdvcmRzW2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICByZXN1bHRzLnB1c2gobGV0dGVyICsgd29yZHNbaV0uc2xpY2UoMSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cy5qb2luKCcgJyk7XG59KTtcblxuLyoqXG4gKiBWdWUgZmlsdGVyIHRvIGNvbnZlcnQgdGhlIGdpdmVuIHZhbHVlIHRvIHBlcmNlbnQuXG4gKiBodHRwOi8vanNmaWRkbGUubmV0L2JyeWFuX2svcWF1ZjNxeWgvXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlICAgIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKiBAcGFyYW0ge051bWJlcn0gZGVjaW1hbHMgVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcy5cbiAqL1xuVnVlLmZpbHRlcigncGVyY2VudGFnZScsIGZ1bmN0aW9uKHZhbHVlLCBkZWNpbWFscykge1xuICAgIGlmKCF2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IDA7XG4gICAgfVxuXG4gICAgaWYoIWRlY2ltYWxzKSB7XG4gICAgICAgIGRlY2ltYWxzID0gMDtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlICogMTAwO1xuICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAqIE1hdGgucG93KDEwLCBkZWNpbWFscykpIC8gTWF0aC5wb3coMTAsIGRlY2ltYWxzKTtcbiAgICB2YWx1ZSA9IHZhbHVlICsgJyUnO1xuICAgIHJldHVybiB2YWx1ZTtcbn0pO1xuXG5cbi8qKlxuICogVnVlIGZpbHRlciB0byByb3VuZCB0aGUgZGVjaW1hbCB0byB0aGUgZ2l2ZW4gcGxhY2UuXG4gKiBodHRwOi8vanNmaWRkbGUubmV0L2JyeWFuX2svM292YTE3eTkvXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlICAgIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKiBAcGFyYW0ge051bWJlcn0gZGVjaW1hbHMgVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcy5cbiAqL1xuVnVlLmZpbHRlcigncm91bmQnLCBmdW5jdGlvbih2YWx1ZSwgZGVjaW1hbHMpIHtcbiAgICBpZighdmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSAwO1xuICAgIH1cblxuICAgIGlmKCFkZWNpbWFscykge1xuICAgICAgICBkZWNpbWFscyA9IDA7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlICogTWF0aC5wb3coMTAsIGRlY2ltYWxzKSkgLyBNYXRoLnBvdygxMCwgZGVjaW1hbHMpO1xuICAgIHJldHVybiB2YWx1ZTtcbn0pO1xuXG5cbi8qKlxuICogVnVlIGZpbHRlciB0byBjb252ZXJ0IHRoZSBnaXZlbiB2YWx1ZSB0byB3aG9sZSBkb2xsYXJzLCBubyBjaGFuZ2UuXG4gKiBodHRwOi8vanNmaWRkbGUubmV0L2JyeWFuX2svMnQ2YnFxZmMvXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKi9cblZ1ZS5maWx0ZXIoJ25vLWNoYW5nZScsIGZ1bmN0aW9uKHZhbHVlLCBzeW1ib2wpIHtcbiAgICBpZighdmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSAwO1xuICAgIH1cblxuICAgIGlmKCFzeW1ib2wpIHtcbiAgICAgICAgc3ltYm9sID0gJyQnO1xuICAgIH1cblxuICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpLnNwbGl0KCcuJylbMF07XG4gICAgcmV0dXJuIHN5bWJvbCArIHZhbHVlO1xufSk7XG5cbi8qKlxuICogVnVlIGZpbHRlciB0byBtYWtlIGEgc2ltcGxlIHRpbWVzdGFtcCBmb3IgYW4gSVNPIGRhdGUuXG4gKiBodHRwOi8vanNmaWRkbGUubmV0L2JyeWFuX2svNDRrcXRwZWcvXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKi9cblZ1ZS5maWx0ZXIoJ3RpbWVzdGFtcCcsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHBhcnRzID0gdmFsdWUuc3BsaXQoJyAnKTtcbiAgICB2YXIgZGF0ZSA9IHBhcnRzWzBdO1xuICAgIHZhciB0aW1lID0gcGFydHNbMV07XG5cbiAgICBkYXRlID0gZGF0ZS5zcGxpdCgnLScpO1xuICAgIHRpbWUgPSB0aW1lLnNwbGl0KCc6Jyk7XG5cbiAgICBpZihwYXJzZUludCh0aW1lWzBdLCAxMCkgPiAxMikge1xuICAgICAgICB2YXIgaG91ciA9IHBhcnNlSW50KHRpbWVbMF0sIDEwKSAlIDEyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGhvdXIgPSBwYXJzZUludCh0aW1lWzBdLCAxMCk7XG4gICAgfVxuXG4gICAgaG91ciA9IGhvdXIgPCAxMCA/ICcwJyArIGhvdXIgOiBob3VyO1xuXG4gICAgcmV0dXJuICdbJyArIGRhdGVbMV0gKyAnLycgKyBkYXRlWzJdICsgJyAnICsgaG91ciArICc6JyArIHRpbWVbMV0gKyAnXSc7XG59KTtcblxuLyoqXG4gKiBWdWUgZmlsdGVyIHRvIHRydW5jYXRlIGEgc3RyaW5nIHRvIHRoZSBzcGVjaWZpZWQgbGVuZ3RoLlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKi9cblZ1ZS5maWx0ZXIoJ3RydW5jYXRlJywgZnVuY3Rpb24odmFsdWUsIGxlbmd0aCkge1xuICAgIGlmKHZhbHVlLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgbGVuZ3RoID0gbGVuZ3RoIC0gMztcblxuICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcoMCwgbGVuZ3RoKSArICcuLi4nO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9maWx0ZXJzL2hlbHBlcnMuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgTGliZXJuIG9uIDI2LzcvMTYuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByZWFkOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHJldHVybiB2YWwucmVwbGFjZShuZXcgUmVnRXhwKCdcXHI/XFxuJywgJ2cnKSwgJzxiciAvPicpO1xuICAgIH0sXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9maWx0ZXJzL25sMmJyLmpzIiwiZXhwb3J0IGRlZmF1bHR7XG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgYnVzKCl7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmJ1cztcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZXZlbnRFbWl0KG5hbWUsIGRhdGEpe1xuICAgICAgICAgICAgdGhpcy5idXMuJGVtaXQobmFtZSwgZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50T24obmFtZSwgY2FsbGJhY2spe1xuICAgICAgICAgICAgdGhpcy5idXMuJG9uKG5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXZlbnRPZmYobmFtZSwgY2FsbGJhY2spe1xuICAgICAgICAgICAgdGhpcy5idXMuJG9mZihuYW1lLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIEFwcEhlYWRlclNldFRpdGxlKHRpdGxlKXtcbiAgICAgICAgICAgIHRoaXMuYnVzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIH0sXG4gICAgICAgIEFwcFRhYkJhclNldFNob3dBcHBUYWJCYXIoaXNTaG93KXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRFbWl0KFwiQXBwVGFiQmFyX3NldFNob3dBcHBUYWJCYXJcIiwgaXNTaG93KTtcbiAgICAgICAgfSxcbiAgICAgICAgQXBwVGFiQmFyU2VsZWN0VGFiQmFySXRlbShpbmRleCl7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RW1pdChcIkFwcFRhYkJhcl9zZWxlY3RUYWJCYXJJdGVtXCIsIGluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgQXBwSGVhZGVyU2V0TmF2QnV0dG9uTGVmdChjbGFzc05hbWUpe1xuICAgICAgICAgICAgdGhpcy5ldmVudEVtaXQoXCJBcHBIZWFkZXJfc2V0TmF2QnV0dG9uTGVmdFwiLCBjbGFzc05hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBBcHBIZWFkZXJTZXROYXZCdXR0b25SaWdodChjbGFzc05hbWUpe1xuICAgICAgICAgICAgdGhpcy5ldmVudEVtaXQoXCJBcHBIZWFkZXJfc2V0TmF2QnV0dG9uUmlnaHRcIiwgY2xhc3NOYW1lKTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYnVzLmpzIiwiZXhwb3J0IGRlZmF1bHR7XG4gICAgbWV0aG9kczoge1xuICAgICAgICBzY3JvbGxUb0JvdHRvbShzZWxlY3RvciwgYW5pbWF0ZWQsIGFuaW1hdGVUaW1lKXtcbiAgICAgICAgICAgIHZhciAkZWxlbWVudCA9ICQoc2VsZWN0b3IpO1xuICAgICAgICAgICAgdmFyIHNjcm9sbEhlaWdodCA9ICRlbGVtZW50LnByb3AoXCJzY3JvbGxIZWlnaHRcIik7XG4gICAgICAgICAgICBpZiAoYW5pbWF0ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFuaW1hdGVUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVUaW1lID0gMTAwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzY3JvbGxIZWlnaHR9LCBhbmltYXRlVGltZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbGVtZW50LnNjcm9sbFRvcChzY3JvbGxIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2pxdWVyeS5qcyIsImV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHZ1ZXhTdG9yZSgpe1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy52dWV4U3RvcmU7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHN0b3JlQ29tbWl0KG5hbWUsIGRhdGEpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudnVleFN0b3JlLmNvbW1pdChuYW1lLCBkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcmVEaXNwYXRjaChuYW1lLCBkYXRhKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZ1ZXhTdG9yZS5kaXNwYXRjaChuYW1lLCBkYXRhKTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvc3RvcmUuanMiLCJleHBvcnQgZGVmYXVsdHtcbiAgICBjb21wdXRlZDoge30sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBub3dUaW1lc3RhbXAoKXtcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQoKS51bml4KCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1vbWVudEZyb21EYXRlVGltZShkYXRlVGltZSl7XG4gICAgICAgICAgICByZXR1cm4gbW9tZW50KGRhdGVUaW1lLCAnWVlZWS1NTS1ERCBISDptbTpzcycpO1xuICAgICAgICB9LFxuICAgICAgICBkYXRlVGltZVRvVGltZXN0YW1wKGRhdGVUaW1lKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vbWVudEZyb21EYXRlVGltZShkYXRlVGltZSkudW5peCgpO1xuICAgICAgICB9LFxuICAgICAgICB1cmwocGF0aCl7XG4gICAgICAgICAgICBpZiAocGF0aCAmJiBwYXRoLnN1YnN0cmluZygwLCAxKSAhPSAnLycpIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gJy8nICsgcGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJhc2VVcmwgKyBwYXRoO1xuICAgICAgICB9LFxuICAgICAgICByZWRpcmVjdFRvVXJsKHVybCl7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVkaXJlY3RUb1VybEZyb21CYXNlVXJsKHVybCl7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMudXJsKHVybCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbG9hZFBhZ2UoKXtcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUb1VybCh3aW5kb3cubG9jYXRpb24pO1xuICAgICAgICB9LFxuICAgICAgICBvYmplY3RUb0Zvcm1EYXRhKGl0ZW0pe1xuICAgICAgICAgICAgdmFyIGZvcm1fZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gaXRlbSkge1xuICAgICAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoa2V5LCBpdGVtW2tleV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZm9ybV9kYXRhO1xuICAgICAgICB9LFxuICAgICAgICBpc0VtcHR5T2JqZWN0KG9iamVjdCl7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5sZW5ndGggPT09IDA7XG4gICAgICAgIH0sXG4gICAgICAgIGlzTW9iaWxlKCl7XG4gICAgICAgICAgICB2YXIgaXNNb2JpbGUgPSB3aW5kb3cubWF0Y2hNZWRpYShcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweClcIik7XG5cbiAgICAgICAgICAgIHJldHVybiAoaXNNb2JpbGUubWF0Y2hlcyk7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3Rvb2xzLmpzIiwiZXhwb3J0IGRlZmF1bHR7XG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgYmFzZVVybCgpe1xuICAgICAgICAgICAgcmV0dXJuIFNvbWVsaW5lLmJhc2VVcmw7XG4gICAgICAgIH0sXG4gICAgICAgIGxvY2FsZSgpe1xuICAgICAgICAgICAgcmV0dXJuIFNvbWVsaW5lLmxvY2FsZTtcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVudFVzZXJJZCgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coU29tZWxpbmUuc3RhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIFNvbWVsaW5lLnN0YXRlLnVzZXIudXNlcl9pZDtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdXNlci5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcImF1dG9zaXplLXRleHRhcmVhLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1kYjc4MjlhZSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9FeGFtcGxlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWE0N2IzODI2IS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0V4YW1wbGUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvbGliZXJuL0NvZGUvc29tZWxpbmUtc3RhcnRlci1tYXN0ZXIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gRXhhbXBsZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYTQ3YjM4MjZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1hNDdiMzgyNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRXhhbXBsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtZGI3ODI5YWUmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1kYjc4MjlhZSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtZGI3ODI5YWVcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9saWJlcm4vQ29kZS9zb21lbGluZS1zdGFydGVyLW1hc3Rlci9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYXV0b3NpemUtdGV4dGFyZWEudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWRiNzgyOWFlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZGI3ODI5YWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfdm0uX20oMClcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1oZWFkaW5nXCJcbiAgfSwgW192bS5fdihcIkV4YW1wbGUgQ29tcG9uZW50XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtYm9keVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIEknbSBhbiBleGFtcGxlIGNvbXBvbmVudCFcXG4gICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWE0N2IzODI2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1hNDdiMzgyNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0ZXh0YXJlYScpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWRiNzgyOWFlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1kYjc4MjlhZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZGI3ODI5YWUmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI1MTBiNzc1MFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZGI3ODI5YWUmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZGI3ODI5YWUmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZGI3ODI5YWUmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZSBWdWUgYW5kIFZ1ZSBSZXNvdXJjZS4gVGhpcyBnaXZlcyBhIGdyZWF0IHN0YXJ0aW5nIHBvaW50IGZvclxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG5yZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuXG4vLyBWdWUgRGlyZWN0aXZlc1xuVnVlLmRpcmVjdGl2ZSgnZm9jdXMnLCByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvZm9jdXMnKSk7XG5cbi8vIFZ1ZSBGaWx0ZXJzXG5WdWUuZmlsdGVyKCdubDJicicsIHJlcXVpcmUoJy4vZmlsdGVycy9ubDJicicpKTtcblxuLy8gVnVlIE1peGluc1xuaW1wb3J0IE1peEluVXNlciBmcm9tICcuL21peGlucy91c2VyJ1xuaW1wb3J0IE1peEluSlF1ZXJ5IGZyb20gJy4vbWl4aW5zL2pxdWVyeSdcbmltcG9ydCBNaXhJblRvb2xzIGZyb20gJy4vbWl4aW5zL3Rvb2xzJ1xuaW1wb3J0IE1peEluQnVzIGZyb20gJy4vbWl4aW5zL2J1cydcbmltcG9ydCBNaXhJblN0b3JlIGZyb20gJy4vbWl4aW5zL3N0b3JlJ1xuaW1wb3J0IE1peEluTW9iaWxlQXBwIGZyb20gJy4vbWl4aW5zL21vYmlsZV9hcHAnXG5WdWUubWl4aW4oTWl4SW5Vc2VyKTtcblZ1ZS5taXhpbihNaXhJbkpRdWVyeSk7XG5WdWUubWl4aW4oTWl4SW5Ub29scyk7XG5WdWUubWl4aW4oTWl4SW5CdXMpO1xuVnVlLm1peGluKE1peEluU3RvcmUpO1xuVnVlLm1peGluKE1peEluTW9iaWxlQXBwKTtcblxuLy8gVnVlIENvbXBvbmVudHNcblZ1ZS5jb21wb25lbnQoJ2F1dG9zaXplLXRleHRhcmVhJywgcmVxdWlyZSgnLi9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZScpKTtcblxuLyoqXG4gKiBOZXh0LCB3ZSB3aWxsIGNyZWF0ZSBhIGZyZXNoIFZ1ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZSBhbmQgYXR0YWNoIGl0IHRvXG4gKiB0aGUgcGFnZS4gVGhlbiwgeW91IG1heSBiZWdpbiBhZGRpbmcgY29tcG9uZW50cyB0byB0aGlzIGFwcGxpY2F0aW9uXG4gKiBvciBjdXN0b21pemUgdGhlIEphdmFTY3JpcHQgc2NhZmZvbGRpbmcgdG8gZml0IHlvdXIgdW5pcXVlIG5lZWRzLlxuICovXG5cblZ1ZS5jb21wb25lbnQoJ3NsLWFwcC1oZWFkZXInLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi9BcHBIZWFkZXIudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnc2wtYXBwLXRhYi1iYXInLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi9BcHBUYWJCYXIudnVlJykpO1xuXG5WdWUuY29tcG9uZW50KCdleGFtcGxlJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL0V4YW1wbGUudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnc2wtYXBwLWhvbWUnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvbW9iaWxlL2hvbWUvSG9tZS52dWUnKSk7XG5cbi8vIFZ1ZSBSb3V0ZXJcbmltcG9ydCBSb3V0ZXJDb25maWcgZnJvbSAnLi9tb2JpbGVfcm91dGVyJ1xuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcihSb3V0ZXJDb25maWcpO1xuXG4vLyBCdXNcbmNvbnN0IGJ1cyA9IG5ldyBWdWUoe1xuICAgIGRhdGE6IHtcbiAgICAgICAgdGl0bGU6IFwiU29tZWxpbmVcIixcbiAgICB9XG59KTtcbndpbmRvdy5idXMgPSBidXM7XG5cbi8vIFZ1ZXhcbmNvbnN0IHZ1ZXhTdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcbiAgICBzdGF0ZToge1xuICAgICAgICBwbGF0Zm9ybTogJ21vYmlsZScsXG4gICAgICAgIGNvdW50OiAwXG4gICAgfSxcbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgaW5jcmVtZW50IChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuY291bnQrK1xuICAgICAgICB9XG4gICAgfVxufSk7XG53aW5kb3cudnVleFN0b3JlID0gdnVleFN0b3JlO1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICByb3V0ZXIsXG4gICAgZWw6ICcjYXBwJyxcbiAgICBkYXRhOiB7XG4gICAgICAgIG1zZzogXCJoZWxsb1wiLFxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHt9LFxuICAgIHdhdGNoOiB7fSxcbiAgICBldmVudHM6IHt9LFxuICAgIGNyZWF0ZWQoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0Jvb3RzdHJhcC4nKTtcbiAgICAgICAgdGhpcy5pbml0TG9jYWxlKCk7XG4gICAgfSxcbiAgICBtb3VudGVkKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWFkeS4nKTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXQoJ0FwcFJlYWR5Jyk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGluaXRMb2NhbGUoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbml0IExvY2FsZS4nKTtcblxuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGxhbmcgPSB0aGlzLmxvY2FsZTtcblxuICAgICAgICAgICAgVnVlLmNvbmZpZy5sYW5nID0gbGFuZztcbiAgICAgICAgICAgIFZ1ZS5sb2NhbGUobGFuZywgd2luZG93LlNvbWVsaW5lLmxvY2FsZXMpO1xuXG4gICAgICAgIH0sXG4gICAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vYmlsZS5qcyIsIjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxuICAgICAgICAgICAgICAgQGNsaWNrPVwib25DbGlja0RlbW9CdXR0b24xXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tbGcgci0yeFwiPlxuICAgICAgICAgICAgICAgIEFsZXJ0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCJcbiAgICAgICAgICAgICAgIEBjbGljaz1cIm9uQ2xpY2tEZW1vQnV0dG9uMlwiXG4gICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2sgYnRuLWxnIHItMnhcIj5cbiAgICAgICAgICAgICAgICBBY3Rpb24gU2hlZXRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxuICAgICAgICAgICAgICAgQGNsaWNrPVwib25DbGlja0RlbW9CdXR0b24zXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1ibG9jayBidG4tbGcgci0yeFwiPlxuICAgICAgICAgICAgICAgIFRvcHRpcFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiXG4gICAgICAgICAgICAgICBAY2xpY2s9XCJvbkNsaWNrRGVtb0J1dHRvbjRcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2sgYnRuLWxnIHItMnhcIj5cbiAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ3VzZXJfaWQnLFxuICAgICAgICBdLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgICAgbXNnOiAnaGVsbG8gdnVlJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxuICAgICAgICB3YXRjaDoge30sXG4gICAgICAgIGV2ZW50czoge30sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgUmVhZHkuJyk7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdGVuQnVzKCk7XG4gICAgICAgICAgICB0aGlzLm9uQXBwUmVhZHkoKTtcblxuLy8gICAgICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xuXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGxpc3RlbkJ1cygpe1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRPbihcIkFwcFJlYWR5XCIsIHRoaXMub25BcHBSZWFkeSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudE9uKFwiQXBwSGVhZGVyX29uQ2xpY2tOYXZCdXR0b25MZWZ0XCIsIHRoaXMub25DbGlja05hdkJ1dHRvbkxlZnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRPbihcIkFwcEhlYWRlcl9vbkNsaWNrTmF2QnV0dG9uUmlnaHRcIiwgdGhpcy5vbkNsaWNrTmF2QnV0dG9uUmlnaHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQXBwUmVhZHkoKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb25BcHBSZWFkeScpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5BcHBIZWFkZXJTZXROYXZCdXR0b25MZWZ0KCdmYSBmYS1zbWlsZS1vJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5BcHBUYWJCYXJTZWxlY3RUYWJCYXJJdGVtKDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2tOYXZCdXR0b25MZWZ0KCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uQ2xpY2tOYXZCdXR0b25MZWZ0Jyk7XG4gICAgICAgICAgICAgICAgJC50b2FzdChcIuiAtlwiLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbGlja05hdkJ1dHRvblJpZ2h0KCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uQ2xpY2tOYXZCdXR0b25SaWdodCcpO1xuICAgICAgICAgICAgICAgICQuYWN0aW9ucyh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIuaWsOaWh+eroFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZG8gc29tZXRoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC50b2FzdChcIuaWsOaWh+eroFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLkuIrkvKDlm77niYdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RvIHNvbWV0aGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQudG9hc3QoXCLkuIrkvKDlm77niYdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmV0Y2hEYXRhKCl7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRhcGkuZ2V0KCcvdXNlcnMnLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbGlja0RlbW9CdXR0b24xKCl7XG4gICAgICAgICAgICAgICAgLy8gc2hvdyBhbGVydFxuICAgICAgICAgICAgICAgICQuYWxlcnQoXCLmiJHmmK/kuIDkuKrlr7nor53moYZcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbGlja0RlbW9CdXR0b24yKCl7XG4gICAgICAgICAgICAgICAgLy8gc2hvdyBhY3Rpb25zaGVldFxuICAgICAgICAgICAgICAgICQuYWN0aW9ucyh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIue8lui+kVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZG8gc29tZXRoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi5Yig6ZmkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kbyBzb21ldGhpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrRGVtb0J1dHRvbjMoKXtcbiAgICAgICAgICAgICAgICAvLyBzaG93IHRvYXN0XG4gICAgICAgICAgICAgICAgJC50b3B0aXAoJ+itpuWRiicsICd3YXJuaW5nJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbGlja0RlbW9CdXR0b240KCl7XG4gICAgICAgICAgICAgICAgLy8gc2hvdyB0b2FzdFxuICAgICAgICAgICAgICAgICQudG9hc3QoXCLlj5bmtojmk43kvZxcIiwgXCJjYW5jZWxcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBIb21lLnZ1ZT9hNjM0YWE3NiIsIjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwid3JhcHBlci1tZFwiPlxuXG4gICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxuICAgICAgICAgICBAY2xpY2s9XCJvbkNsaWNrQnV0dG9uVXNlckRldGFpbFwiXG4gICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tbGcgci0yeFwiPlNob3cgVXNlciBEZXRhaWw8L2E+XG5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICd1c2VyX2lkJyxcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgICAgIG1zZzogJ2hlbGxvIHZ1ZScsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge30sXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxuICAgICAgICB3YXRjaDoge30sXG4gICAgICAgIGV2ZW50czoge30sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgUmVhZHkuJyk7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdGVuQnVzKCk7XG4gICAgICAgICAgICB0aGlzLm9uQXBwUmVhZHkoKTtcblxuLy8gICAgICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xuXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGxpc3RlbkJ1cygpe1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRPbihcIkFwcFJlYWR5XCIsIHRoaXMub25BcHBSZWFkeSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudE9uKFwiQXBwSGVhZGVyX29uQ2xpY2tOYXZCdXR0b25MZWZ0XCIsIHRoaXMub25DbGlja05hdkJ1dHRvbkxlZnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRPbihcIkFwcEhlYWRlcl9vbkNsaWNrTmF2QnV0dG9uUmlnaHRcIiwgdGhpcy5vbkNsaWNrTmF2QnV0dG9uUmlnaHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQXBwUmVhZHkoKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb25BcHBSZWFkeScpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5BcHBIZWFkZXJTZXRUaXRsZSgnU29tZWxpbmUgQXBwJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5BcHBIZWFkZXJTZXROYXZCdXR0b25MZWZ0KG51bGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuQXBwVGFiQmFyU2VsZWN0VGFiQmFySXRlbSgxKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrTmF2QnV0dG9uTGVmdCgpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkNsaWNrTmF2QnV0dG9uTGVmdCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2tOYXZCdXR0b25SaWdodCgpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkNsaWNrTmF2QnV0dG9uUmlnaHQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmZXRjaERhdGEoKXtcblxuICAgICAgICAgICAgICAgIHRoaXMuJGFwaS5nZXQoJy91c2VycycsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSkuYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2tCdXR0b25Vc2VyRGV0YWlsKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvVXJsKCcvbS9hcHAjL3VzZXIvMS9wcm9maWxlJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBBcHAudnVlPzFmYWE5ZWY2IiwiPHN0eWxlIHNjb3BlZD5cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8IS0tIGhlYWRlciAtLT5cbiAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCIgY2xhc3M9XCJhcHAtaGVhZGVyIG5hdmJhciBib3gtc2hhZG93IGJnLWRhcmtcIiByb2xlPVwibWVudVwiPlxuICAgICAgICA8IS0tIG5hdmJhciBoZWFkZXIgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaGVhZGVyIHRleHQtY2VudGVyIGRrXCIgc3R5bGU9XCJmbG9hdDogbm9uZTt3aWR0aDogYXV0bztcIj5cblxuICAgICAgICAgICAgPCEtLSAvIG5hdmJhciBoZWFkZXIgLS0+XG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cIm9uQ2xpY2tOYXZCdXR0b25SaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHVsbC1yaWdodCBka1wiPlxuICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cIm5hdkJ1dHRvblJpZ2h0Q2xhc3NcIj48L2k+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwib25DbGlja05hdkJ1dHRvbkxlZnRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInB1bGwtbGVmdCBka1wiPlxuICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cIm5hdkJ1dHRvbkxlZnRDbGFzc1wiPjwvaT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPCEtLSB0aXRsZSAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItYnJhbmQgdGV4dC1sdCBmb250LW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgIHt7IGJ1cy50aXRsZSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tIC8gYnJhbmQgLS0+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczogW10sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgICAgICBtc2c6ICdoZWxsbyB2dWUnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICBuYXZCdXR0b25MZWZ0Q2xhc3M6ICdmYSBmYS1jaGV2cm9uLWxlZnQnLFxuICAgICAgICAgICAgICAgIG5hdkJ1dHRvblJpZ2h0Q2xhc3M6ICdmYSBmYS1wbHVzJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHt9LFxuICAgICAgICBjb21wb25lbnRzOiB7fSxcbiAgICAgICAgd2F0Y2g6IHt9LFxuICAgICAgICBldmVudHM6IHt9LFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IFJlYWR5LicpO1xuXG4gICAgICAgICAgICB0aGlzLmxpc3RlbkJ1cygpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBsaXN0ZW5CdXMoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50T24oXCJBcHBIZWFkZXJfc2V0TmF2QnV0dG9uTGVmdFwiLCB0aGlzLnNldE5hdkJ1dHRvbkxlZnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRPbihcIkFwcEhlYWRlcl9zZXROYXZCdXR0b25SaWdodFwiLCB0aGlzLnNldE5hdkJ1dHRvblJpZ2h0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXROYXZCdXR0b25MZWZ0KGNsYXNzTmFtZSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FwcEhlYWRlciAtIHNldE5hdkJ1dHRvbkxlZnQ6ICcgKyBjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChjbGFzc05hbWUgPT0gJ2JhY2snKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9ICdmYSBmYS1jaGV2cm9uLWxlZnQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm5hdkJ1dHRvbkxlZnRDbGFzcyA9IGNsYXNzTmFtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXROYXZCdXR0b25SaWdodChjbGFzc05hbWUpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBcHBIZWFkZXIgLSBzZXROYXZCdXR0b25SaWdodDogJyArIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSA9PSAnbmV3JyB8fCBjbGFzc05hbWUgPT0gJ3BsdXMnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9ICdmYSBmYS1wbHVzJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5uYXZCdXR0b25SaWdodENsYXNzID0gY2xhc3NOYW1lO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2tOYXZCdXR0b25MZWZ0KCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FwcEhlYWRlciAtIG9uQ2xpY2tOYXZCdXR0b25MZWZ0Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEVtaXQoXCJBcHBIZWFkZXJfb25DbGlja05hdkJ1dHRvbkxlZnRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbGlja05hdkJ1dHRvblJpZ2h0KCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FwcEhlYWRlciAtIG9uQ2xpY2tOYXZCdXR0b25SaWdodCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRFbWl0KFwiQXBwSGVhZGVyX29uQ2xpY2tOYXZCdXR0b25SaWdodFwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEFwcEhlYWRlci52dWU/MWZlYjM1MDUiLCI8c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuXG4gICAgPGZvb3RlciB2LXNob3c9XCJTaG93QXBwVGFiQmFyXCIgY2xhc3M9XCJhcHAtZm9vdGVyIG5hdmJhciBuYXZiYXItZml4ZWQtYm90dG9tIGJnLWxpZ2h0IGx0IGItdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgaGlkZGVuLXhzXCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIncteGwgdy1hdXRvLXhzIGNlbnRlci1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC1qdXN0aWZpZWQgdGV4dC1jZW50ZXIgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpc1NlbGVjdFRhYkJhckl0ZW0oMClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2wtdGFiLWJhci1pdGVtIGxpbms9XCJqYXZhc2NyaXB0OjtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJibG9jayB0ZXh0LW1kIG0tdC14cyBpY29uLXVzZXIgdGV4dC1wcmltYXJ5XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQteHMgdGV4dC1wcmltYXJ5XCI+QWNjb3VudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NsLXRhYi1iYXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbC10YWItYmFyLWl0ZW0gbGluaz1cIi9tL1wiIGl0ZW0taWQ9XCIwXCIgOmxpbmstY2xpY2s9XCJvbkNsaWNrVGFiQmFySXRlbSgwKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJsb2NrIHRleHQtbWQgbS10LXhzIGljb24tdXNlclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXhzXCI+QWNjb3VudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NsLXRhYi1iYXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXNTZWxlY3RUYWJCYXJJdGVtKDEpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsLXRhYi1iYXItaXRlbSBsaW5rPVwiamF2YXNjcmlwdDo7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmxvY2sgdGV4dC1tZCBtLXQteHMgaWNvbi1jbG91ZC11cGxvYWQgdGV4dC1wcmltYXJ5XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQteHMgdGV4dC1wcmltYXJ5XCI+VXBsb2FkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2wtdGFiLWJhci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsLXRhYi1iYXItaXRlbSBsaW5rPVwiL20vYXBwXCIgaXRlbS1pZD1cIjFcIiA6bGluay1jbGljaz1cIm9uQ2xpY2tUYWJCYXJJdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmxvY2sgdGV4dC1tZCBtLXQteHMgaWNvbi1jbG91ZC11cGxvYWRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14c1wiPlVwbG9hZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NsLXRhYi1iYXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXNTZWxlY3RUYWJCYXJJdGVtKDIpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsLXRhYi1iYXItaXRlbSBsaW5rPVwiamF2YXNjcmlwdDo7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmxvY2sgdGV4dC1tZCBtLXQteHMgaWNvbi1jbG9jayB0ZXh0LXByaW1hcnlcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14cyB0ZXh0LXByaW1hcnlcIj5XYXRjaDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NsLXRhYi1iYXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbC10YWItYmFyLWl0ZW0gbGluaz1cIi9tL2FwcFwiIGl0ZW0taWQ9XCIyXCIgOmxpbmstY2xpY2s9XCJvbkNsaWNrVGFiQmFySXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJsb2NrIHRleHQtbWQgbS10LXhzIGljb24tY2xvY2tcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14c1wiPldhdGNoPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2wtdGFiLWJhci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpc1NlbGVjdFRhYkJhckl0ZW0oMylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2wtdGFiLWJhci1pdGVtIGxpbms9XCJqYXZhc2NyaXB0OjtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJibG9jayB0ZXh0LW1kIG0tdC14cyBpY29uLWJhZyB0ZXh0LXByaW1hcnlcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14cyB0ZXh0LXByaW1hcnlcIj5TaG9wcGluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NsLXRhYi1iYXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbC10YWItYmFyLWl0ZW0gbGluaz1cIi9tL2FwcFwiIGl0ZW0taWQ9XCIzXCIgOmxpbmstY2xpY2s9XCJvbkNsaWNrVGFiQmFySXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJsb2NrIHRleHQtbWQgbS10LXhzIGljb24tYmFnXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQteHNcIj5TaG9wcGluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NsLXRhYi1iYXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiBoaWRkZW4teHNcIj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczogW10sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgICAgICBtc2c6ICdoZWxsbyB2dWUnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICBTaG93QXBwVGFiQmFyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkX3RhYl9iYXJfaXRlbV9pbmRleDogMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHt9LFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnc2wtdGFiLWJhci1pdGVtJzogcmVxdWlyZSgnLi90YWJiYXIvVGFiQmFySXRlbS52dWUnKSxcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHt9LFxuICAgICAgICBldmVudHM6IHt9LFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IFJlYWR5LicpO1xuXG4gICAgICAgICAgICB0aGlzLmxpc3RlbkJ1cygpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBsaXN0ZW5CdXMoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50T24oXCJBcHBUYWJCYXJfc2VsZWN0VGFiQmFySXRlbVwiLCB0aGlzLnNlbGVjdFRhYkJhckl0ZW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRPbihcIkFwcFRhYkJhcl9zZXRTaG93QXBwVGFiQmFyXCIsIHRoaXMuc2V0U2hvd0FwcFRhYkJhcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0U2hvd0FwcFRhYkJhcihpc1Nob3cpe1xuICAgICAgICAgICAgICAgIGlmIChpc1Nob3cgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBcHBUYWJCYXIgLSBzZXRTaG93QXBwVGFiQmFyOiAnICsgaXNTaG93KTtcbiAgICAgICAgICAgICAgICB0aGlzLlNob3dBcHBUYWJCYXIgPSBpc1Nob3c7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0VGFiQmFySXRlbShpbmRleCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF90YWJfYmFyX2l0ZW1faW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1NlbGVjdFRhYkJhckl0ZW0oaW5kZXgpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkX3RhYl9iYXJfaXRlbV9pbmRleCA9PSBpbmRleDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrVGFiQmFySXRlbShpbmRleCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FwcFRhYkJhciAtIG9uQ2xpY2tUYWJCYXJJdGVtOiAnICsgaW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRFbWl0KFwiQXBwVGFiQmFyX29uQ2xpY2tUYWJCYXJJdGVtXCIsIGluZGV4KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEFwcFRhYkJhci52dWU/MzY5YjM0OGEiLCI8c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxuICAgICAgICA8YSA6aHJlZj1cImxpbmtcIiBjbGFzcz1cIndyYXBwZXIteHMgYmxvY2tcIiA6Y2xhc3M9XCJsaW5rQ2xhc3NcIiBAY2xpY2s9XCJvbkNsaWNrTGlua1wiPlxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L2E+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAnaXRlbUlkJywgJ2xpbmsnLCAnbGlua0NsYXNzJywgJ2xpbmtDbGljaydcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgICAgIG1zZzogJ2hlbGxvIHZ1ZScsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge30sXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IFJlYWR5LicpO1xuXG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7fSxcbiAgICAgICAgZXZlbnRzOiB7fSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25DbGlja0xpbmsoKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb25DbGlja0xpbmsnKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saW5rQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5rQ2xpY2sodGhpcy5pdGVtSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFRhYkJhckl0ZW0udnVlPzZhZTQ2MDc0IiwiPHN0eWxlIHNjb3BlZD5cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyLW1kXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRlciB3cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi1waWxscyBuYXYtanVzdGlmaWVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSA6Y2xhc3M9XCJ7J2FjdGl2ZSc6aXNTZWxlY3RlZE1lbnVJdGVtKCdwcm9maWxlJyl9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwicm91dGVQcm9maWxlXCIgQGNsaWNrLm5hdGl2ZT1cInNlbGVjdE1lbnVJdGVtKCdwcm9maWxlJylcIj5Qcm9maWxlPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIDpjbGFzcz1cInsnYWN0aXZlJzppc1NlbGVjdGVkTWVudUl0ZW0oJ3Bvc3RzJyl9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwicm91dGVQb3N0c1wiIEBjbGljay5uYXRpdmU9XCJzZWxlY3RNZW51SXRlbSgncG9zdHMnKVwiPlBvc3RzPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAndXNlcl9pZCcsXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgICAgICBtc2c6ICdoZWxsbyB2dWUnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZF9tZW51X2l0ZW06ICdwcm9maWxlJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHJvdXRlSWQoKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcm91dGUucGFyYW1zLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlcl9pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3VycmVudFJvdXRlKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiL3VzZXIvXCIgKyB0aGlzLnJvdXRlSWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm91dGVQcm9maWxlKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFJvdXRlICsgXCIvcHJvZmlsZVwiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvdXRlUG9zdHMoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50Um91dGUgKyBcIi9wb3N0c1wiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge30sXG4gICAgICAgIHdhdGNoOiB7fSxcbiAgICAgICAgZXZlbnRzOiB7fSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCBSZWFkeS4nKTtcblxuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95ZWQoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgRGVzdHJveWVkLicpO1xuXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGlzU2VsZWN0ZWRNZW51SXRlbShpdGVtKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZF9tZW51X2l0ZW0gPT0gaXRlbTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3RNZW51SXRlbShpdGVtKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0TWVudUl0ZW0nKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX21lbnVfaXRlbSA9IGl0ZW07XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBVc2VyRGV0YWlsLnZ1ZT8xNTk5Njg4NCIsIjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgICA8Yj5Qb3N0czwvYj4gZm9yIFVzZXIge3sgcm91dGVJZCB9fVxuICAgICAgICA8cHJlPnt7IGl0ZW0gfX08L3ByZT5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IFtdLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgICAgbXNnOiAnaGVsbG8gdnVlJyxcbiAgICAgICAgICAgICAgICBpdGVtOiB7fSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHJvdXRlSWQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcm91dGUucGFyYW1zLmlkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge30sXG4gICAgICAgIHdhdGNoOiB7fSxcbiAgICAgICAgZXZlbnRzOiB7fSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCBSZWFkeS4nKTtcblxuICAgICAgICAgICAgdGhpcy5saXN0ZW5CdXMoKTtcbiAgICAgICAgICAgIHRoaXMub25BcHBSZWFkeSgpO1xuXG4gICAgICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95ZWQoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgRGVzdHJveWVkLicpO1xuICAgICAgICAgICAgdGhpcy5BcHBUYWJCYXJTZXRTaG93QXBwVGFiQmFyKHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBsaXN0ZW5CdXMoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50T24oXCJBcHBSZWFkeVwiLCB0aGlzLm9uQXBwUmVhZHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRPbihcIkFwcEhlYWRlcl9vbkNsaWNrTmF2QnV0dG9uTGVmdFwiLCB0aGlzLm9uQ2xpY2tOYXZCdXR0b25MZWZ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50T24oXCJBcHBIZWFkZXJfb25DbGlja05hdkJ1dHRvblJpZ2h0XCIsIHRoaXMub25DbGlja05hdkJ1dHRvblJpZ2h0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkFwcFJlYWR5KCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uQXBwUmVhZHknKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuQXBwSGVhZGVyU2V0VGl0bGUoJ1Bvc3RzJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5BcHBIZWFkZXJTZXROYXZCdXR0b25MZWZ0KCdiYWNrJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5BcHBUYWJCYXJTZXRTaG93QXBwVGFiQmFyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLkFwcEhlYWRlclNldE5hdkJ1dHRvblJpZ2h0KG51bGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuQXBwVGFiQmFyU2VsZWN0VGFiQmFySXRlbShudWxsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrTmF2QnV0dG9uTGVmdCgpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkNsaWNrTmF2QnV0dG9uTGVmdCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5nbygtMSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbGlja05hdkJ1dHRvblJpZ2h0KCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uQ2xpY2tOYXZCdXR0b25SaWdodCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZldGNoRGF0YSgpe1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBpLmdldCgnL3VzZXJzLycgKyB0aGlzLnJvdXRlSWQsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBQb3N0cy52dWU/N2U1OWUzODAiLCI8c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICAgPGI+UHJvZmlsZTwvYj4gZm9yIFVzZXIge3sgcm91dGVJZCB9fVxuICAgICAgICA8cHJlPnt7IGl0ZW0gfX08L3ByZT5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IFtdLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgICAgbXNnOiAnaGVsbG8gdnVlJyxcbiAgICAgICAgICAgICAgICBpdGVtOiB7fSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHJvdXRlSWQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcm91dGUucGFyYW1zLmlkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge30sXG4gICAgICAgIHdhdGNoOiB7fSxcbiAgICAgICAgZXZlbnRzOiB7fSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCBSZWFkeS4nKTtcblxuICAgICAgICAgICAgdGhpcy5saXN0ZW5CdXMoKTtcbiAgICAgICAgICAgIHRoaXMub25BcHBSZWFkeSgpO1xuXG4gICAgICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95ZWQoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgRGVzdHJveWVkLicpO1xuICAgICAgICAgICAgdGhpcy5BcHBUYWJCYXJTZXRTaG93QXBwVGFiQmFyKHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBsaXN0ZW5CdXMoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50T24oXCJBcHBSZWFkeVwiLCB0aGlzLm9uQXBwUmVhZHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRPbihcIkFwcEhlYWRlcl9vbkNsaWNrTmF2QnV0dG9uTGVmdFwiLCB0aGlzLm9uQ2xpY2tOYXZCdXR0b25MZWZ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50T24oXCJBcHBIZWFkZXJfb25DbGlja05hdkJ1dHRvblJpZ2h0XCIsIHRoaXMub25DbGlja05hdkJ1dHRvblJpZ2h0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkFwcFJlYWR5KCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uQXBwUmVhZHknKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuQXBwSGVhZGVyU2V0VGl0bGUoJ1Byb2ZpbGUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLkFwcEhlYWRlclNldE5hdkJ1dHRvbkxlZnQoJ2JhY2snKTtcbiAgICAgICAgICAgICAgICB0aGlzLkFwcFRhYkJhclNldFNob3dBcHBUYWJCYXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuQXBwSGVhZGVyU2V0TmF2QnV0dG9uUmlnaHQobnVsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5BcHBUYWJCYXJTZWxlY3RUYWJCYXJJdGVtKG51bGwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2tOYXZCdXR0b25MZWZ0KCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uQ2xpY2tOYXZCdXR0b25MZWZ0Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLmdvKC0xKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrTmF2QnV0dG9uUmlnaHQoKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb25DbGlja05hdkJ1dHRvblJpZ2h0Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmV0Y2hEYXRhKCl7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRhcGkuZ2V0KCcvdXNlcnMvJyArIHRoaXMucm91dGVJZCwge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFByb2ZpbGUudnVlPzM5ZTEyY2Q2IiwiZXhwb3J0IGRlZmF1bHR7XG4gICAgY29tcHV0ZWQ6IHt9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgQXBwSGVhZGVyU2V0VGl0bGUodGl0bGUpe1xuICAgICAgICAgICAgdGhpcy5idXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgfSxcbiAgICAgICAgQXBwVGFiQmFyU2V0U2hvd0FwcFRhYkJhcihpc1Nob3cpe1xuICAgICAgICAgICAgdGhpcy5ldmVudEVtaXQoXCJBcHBUYWJCYXJfc2V0U2hvd0FwcFRhYkJhclwiLCBpc1Nob3cpO1xuICAgICAgICB9LFxuICAgICAgICBBcHBUYWJCYXJTZWxlY3RUYWJCYXJJdGVtKGluZGV4KXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRFbWl0KFwiQXBwVGFiQmFyX3NlbGVjdFRhYkJhckl0ZW1cIiwgaW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICBBcHBIZWFkZXJTZXROYXZCdXR0b25MZWZ0KGNsYXNzTmFtZSl7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RW1pdChcIkFwcEhlYWRlcl9zZXROYXZCdXR0b25MZWZ0XCIsIGNsYXNzTmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIEFwcEhlYWRlclNldE5hdkJ1dHRvblJpZ2h0KGNsYXNzTmFtZSl7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RW1pdChcIkFwcEhlYWRlcl9zZXROYXZCdXR0b25SaWdodFwiLCBjbGFzc05hbWUpO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9tb2JpbGVfYXBwLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvdXRlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgICAgICBjb21wb25lbnQ6IHJlcXVpcmUoJy4vY29tcG9uZW50cy9tb2JpbGUvbWFpbi9BcHAudnVlJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICcvdXNlci86aWQnLFxuICAgICAgICAgICAgY29tcG9uZW50OiByZXF1aXJlKCcuL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvVXNlckRldGFpbC52dWUnKSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IHBhdGggd2lsbCByZWRpcmVjdCB0byBsaXN0XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdDogdG8gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3VzZXJzJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiAncHJvZmlsZScsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogcmVxdWlyZSgnLi9jb21wb25lbnRzL21vYmlsZS91c2VyL2RldGFpbC9Qcm9maWxlLnZ1ZScpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiAncG9zdHMnLFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHJlcXVpcmUoJy4vY29tcG9uZW50cy9tb2JpbGUvdXNlci9kZXRhaWwvUG9zdHMudnVlJyksXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgXSxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vYmlsZV9yb3V0ZXIuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJBcHBIZWFkZXIudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ1N2JhZTVlJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vQXBwSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIlByb2ZpbGUudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ4OGU2ZTRmJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS91c2VyL2RldGFpbC9Qcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIkFwcC52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNlMTAwMWImc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIkhvbWUudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVmNmU4YmVmJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9ob21lL0hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiQXBwVGFiQmFyLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03YjU1YThlMiZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9zZWN0aW9uL0FwcFRhYkJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJQb3N0cy52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTdjOGYyMGUmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvZGV0YWlsL1Bvc3RzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIlVzZXJEZXRhaWwudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWQ2MWIzM2MwJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS91c2VyL1VzZXJEZXRhaWwudnVlXG4vLyBtb2R1bGUgaWQgPSAxOThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiVGFiQmFySXRlbS52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZTllMDgxNWMmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi90YWJiYXIvVGFiQmFySXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDE5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNWY2ZThiZWYmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0hvbWUudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0hvbWUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNWY2ZThiZWYhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSG9tZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtNWY2ZThiZWZcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9saWJlcm4vQ29kZS9zb21lbGluZS1zdGFydGVyLW1hc3Rlci9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL2hvbWUvSG9tZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBIb21lLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZjZlOGJlZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVmNmU4YmVmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvaG9tZS9Ib21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi01Y2UxMDAxYiZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9BcHAudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNWNlMTAwMWIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQXBwLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi01Y2UxMDAxYlwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2xpYmVybi9Db2RlL3NvbWVsaW5lLXN0YXJ0ZXItbWFzdGVyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9BcHAudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQXBwLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01Y2UxMDAxYlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVjZTEwMDFiXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTQ1N2JhZTVlJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHBIZWFkZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FwcEhlYWRlci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00NTdiYWU1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BcHBIZWFkZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTQ1N2JhZTVlXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvbGliZXJuL0NvZGUvc29tZWxpbmUtc3RhcnRlci1tYXN0ZXIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vQXBwSGVhZGVyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEFwcEhlYWRlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDU3YmFlNWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NTdiYWU1ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi9BcHBIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTdiNTVhOGUyJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHBUYWJCYXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FwcFRhYkJhci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03YjU1YThlMiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BcHBUYWJCYXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTdiNTVhOGUyXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvbGliZXJuL0NvZGUvc29tZWxpbmUtc3RhcnRlci1tYXN0ZXIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vQXBwVGFiQmFyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEFwcFRhYkJhci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2I1NWE4ZTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03YjU1YThlMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi9BcHBUYWJCYXIudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWU5ZTA4MTVjJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJCYXJJdGVtLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9UYWJCYXJJdGVtLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWU5ZTA4MTVjIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1RhYkJhckl0ZW0udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LWU5ZTA4MTVjXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvbGliZXJuL0NvZGUvc29tZWxpbmUtc3RhcnRlci1tYXN0ZXIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vdGFiYmFyL1RhYkJhckl0ZW0udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVGFiQmFySXRlbS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZTllMDgxNWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lOWUwODE1Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi90YWJiYXIvVGFiQmFySXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDIwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtZDYxYjMzYzAmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VzZXJEZXRhaWwudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1VzZXJEZXRhaWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZDYxYjMzYzAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVXNlckRldGFpbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtZDYxYjMzYzBcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9saWJlcm4vQ29kZS9zb21lbGluZS1zdGFydGVyLW1hc3Rlci9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvVXNlckRldGFpbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBVc2VyRGV0YWlsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1kNjFiMzNjMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWQ2MWIzM2MwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9Vc2VyRGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1hN2M4ZjIwZSZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vUG9zdHMudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Bvc3RzLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWE3YzhmMjBlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Bvc3RzLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi1hN2M4ZjIwZVwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2xpYmVybi9Db2RlL3NvbWVsaW5lLXN0YXJ0ZXItbWFzdGVyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9kZXRhaWwvUG9zdHMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gUG9zdHMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWE3YzhmMjBlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYTdjOGYyMGVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS91c2VyL2RldGFpbC9Qb3N0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDIxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNDg4ZTZlNGYmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Byb2ZpbGUudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Byb2ZpbGUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDg4ZTZlNGYhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUHJvZmlsZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtNDg4ZTZlNGZcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9saWJlcm4vQ29kZS9zb21lbGluZS1zdGFydGVyLW1hc3Rlci9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvZGV0YWlsL1Byb2ZpbGUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gUHJvZmlsZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDg4ZTZlNGZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00ODhlNmU0ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvZGV0YWlsL1Byb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdoZWFkZXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXBwLWhlYWRlciBuYXZiYXIgYm94LXNoYWRvdyBiZy1kYXJrXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJoZWFkZXJcIixcbiAgICAgIFwicm9sZVwiOiBcIm1lbnVcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibmF2YmFyLWhlYWRlciB0ZXh0LWNlbnRlciBka1wiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImZsb2F0XCI6IFwibm9uZVwiLFxuICAgICAgXCJ3aWR0aFwiOiBcImF1dG9cIlxuICAgIH1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHVsbC1yaWdodCBka1wiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5vbkNsaWNrTmF2QnV0dG9uUmlnaHRcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBjbGFzczogX3ZtLm5hdkJ1dHRvblJpZ2h0Q2xhc3NcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnQgZGtcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ub25DbGlja05hdkJ1dHRvbkxlZnRcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBjbGFzczogX3ZtLm5hdkJ1dHRvbkxlZnRDbGFzc1xuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5hdmJhci1icmFuZCB0ZXh0LWx0IGZvbnQtbm9ybWFsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5idXMudGl0bGUpICsgXCJcXG4gICAgICAgIFwiKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00NTdiYWU1ZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNDU3YmFlNWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9zZWN0aW9uL0FwcEhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDIxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3cmFwcGVyXCJcbiAgfSwgW19jKCdiJywgW192bS5fdihcIlByb2ZpbGVcIildKSwgX3ZtLl92KFwiIGZvciBVc2VyIFwiICsgX3ZtLl9zKF92bS5yb3V0ZUlkKSArIFwiXFxuICAgIFwiKSwgX2MoJ3ByZScsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtKSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQ4OGU2ZTRmXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00ODhlNmU0ZiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS91c2VyL2RldGFpbC9Qcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIndyYXBwZXItbWRcIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tbGcgci0yeFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCJqYXZhc2NyaXB0OjtcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9uQ2xpY2tCdXR0b25Vc2VyRGV0YWlsXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU2hvdyBVc2VyIERldGFpbFwiKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNWNlMTAwMWJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTVjZTEwMDFiIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIndyYXBwZXJcIlxuICB9LCBbX2MoJ3AnLCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tbGcgci0yeFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCJqYXZhc2NyaXB0OjtcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9uQ2xpY2tEZW1vQnV0dG9uMVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIEFsZXJ0XFxuICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrIGJ0bi1sZyByLTJ4XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcImphdmFzY3JpcHQ6O1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ub25DbGlja0RlbW9CdXR0b24yXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgQWN0aW9uIFNoZWV0XFxuICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXdhcm5pbmcgYnRuLWJsb2NrIGJ0bi1sZyByLTJ4XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcImphdmFzY3JpcHQ6O1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ub25DbGlja0RlbW9CdXR0b24zXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgVG9wdGlwXFxuICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2sgYnRuLWxnIHItMnhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiamF2YXNjcmlwdDo7XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5vbkNsaWNrRGVtb0J1dHRvbjRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBDYW5jZWxcXG4gICAgICAgIFwiKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01ZjZlOGJlZlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNWY2ZThiZWYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvaG9tZS9Ib21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZm9vdGVyJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5TaG93QXBwVGFiQmFyKSxcbiAgICAgIGV4cHJlc3Npb246IFwiU2hvd0FwcFRhYkJhclwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYXBwLWZvb3RlciBuYXZiYXIgbmF2YmFyLWZpeGVkLWJvdHRvbSBiZy1saWdodCBsdCBiLXRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tMiBoaWRkZW4teHNcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tOFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIncteGwgdy1hdXRvLXhzIGNlbnRlci1ibG9ja1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1ncm91cCBidG4tZ3JvdXAtanVzdGlmaWVkIHRleHQtY2VudGVyIHRleHQtc21cIlxuICB9LCBbKF92bS5pc1NlbGVjdFRhYkJhckl0ZW0oMCkpID8gW19jKCdzbC10YWItYmFyLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGlua1wiOiBcImphdmFzY3JpcHQ6O1wiXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgdGV4dC1tZCBtLXQteHMgaWNvbi11c2VyIHRleHQtcHJpbWFyeVwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzIHRleHQtcHJpbWFyeVwiXG4gIH0sIFtfdm0uX3YoXCJBY2NvdW50XCIpXSldKV0gOiBbX2MoJ3NsLXRhYi1iYXItaXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsaW5rXCI6IFwiL20vXCIsXG4gICAgICBcIml0ZW0taWRcIjogXCIwXCIsXG4gICAgICBcImxpbmstY2xpY2tcIjogX3ZtLm9uQ2xpY2tUYWJCYXJJdGVtKDApXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgdGV4dC1tZCBtLXQteHMgaWNvbi11c2VyXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQteHNcIlxuICB9LCBbX3ZtLl92KFwiQWNjb3VudFwiKV0pXSldLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmlzU2VsZWN0VGFiQmFySXRlbSgxKSkgPyBbX2MoJ3NsLXRhYi1iYXItaXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsaW5rXCI6IFwiamF2YXNjcmlwdDo7XCJcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibG9jayB0ZXh0LW1kIG0tdC14cyBpY29uLWNsb3VkLXVwbG9hZCB0ZXh0LXByaW1hcnlcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC14cyB0ZXh0LXByaW1hcnlcIlxuICB9LCBbX3ZtLl92KFwiVXBsb2FkXCIpXSldKV0gOiBbX2MoJ3NsLXRhYi1iYXItaXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsaW5rXCI6IFwiL20vYXBwXCIsXG4gICAgICBcIml0ZW0taWRcIjogXCIxXCIsXG4gICAgICBcImxpbmstY2xpY2tcIjogX3ZtLm9uQ2xpY2tUYWJCYXJJdGVtXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgdGV4dC1tZCBtLXQteHMgaWNvbi1jbG91ZC11cGxvYWRcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC14c1wiXG4gIH0sIFtfdm0uX3YoXCJVcGxvYWRcIildKV0pXSwgX3ZtLl92KFwiIFwiKSwgKF92bS5pc1NlbGVjdFRhYkJhckl0ZW0oMikpID8gW19jKCdzbC10YWItYmFyLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGlua1wiOiBcImphdmFzY3JpcHQ6O1wiXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgdGV4dC1tZCBtLXQteHMgaWNvbi1jbG9jayB0ZXh0LXByaW1hcnlcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC14cyB0ZXh0LXByaW1hcnlcIlxuICB9LCBbX3ZtLl92KFwiV2F0Y2hcIildKV0pXSA6IFtfYygnc2wtdGFiLWJhci1pdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxpbmtcIjogXCIvbS9hcHBcIixcbiAgICAgIFwiaXRlbS1pZFwiOiBcIjJcIixcbiAgICAgIFwibGluay1jbGlja1wiOiBfdm0ub25DbGlja1RhYkJhckl0ZW1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibG9jayB0ZXh0LW1kIG0tdC14cyBpY29uLWNsb2NrXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQteHNcIlxuICB9LCBbX3ZtLl92KFwiV2F0Y2hcIildKV0pXSwgX3ZtLl92KFwiIFwiKSwgKF92bS5pc1NlbGVjdFRhYkJhckl0ZW0oMykpID8gW19jKCdzbC10YWItYmFyLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGlua1wiOiBcImphdmFzY3JpcHQ6O1wiXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgdGV4dC1tZCBtLXQteHMgaWNvbi1iYWcgdGV4dC1wcmltYXJ5XCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQteHMgdGV4dC1wcmltYXJ5XCJcbiAgfSwgW192bS5fdihcIlNob3BwaW5nXCIpXSldKV0gOiBbX2MoJ3NsLXRhYi1iYXItaXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsaW5rXCI6IFwiL20vYXBwXCIsXG4gICAgICBcIml0ZW0taWRcIjogXCIzXCIsXG4gICAgICBcImxpbmstY2xpY2tcIjogX3ZtLm9uQ2xpY2tUYWJCYXJJdGVtXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgdGV4dC1tZCBtLXQteHMgaWNvbi1iYWdcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC14c1wiXG4gIH0sIFtfdm0uX3YoXCJTaG9wcGluZ1wiKV0pXSldXSwgMildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1zbS0yIGhpZGRlbi14c1wiXG4gIH0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03YjU1YThlMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2I1NWE4ZTIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9zZWN0aW9uL0FwcFRhYkJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDIyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3cmFwcGVyXCJcbiAgfSwgW19jKCdiJywgW192bS5fdihcIlBvc3RzXCIpXSksIF92bS5fdihcIiBmb3IgVXNlciBcIiArIF92bS5fcyhfdm0ucm91dGVJZCkgKyBcIlxcbiAgICBcIiksIF9jKCdwcmUnLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbSkpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1hN2M4ZjIwZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYTdjOGYyMGUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9kZXRhaWwvUG9zdHMudnVlXG4vLyBtb2R1bGUgaWQgPSAyMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid3JhcHBlci1tZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1oZWFkZXIgd3JhcHBlclwiXG4gIH0sIFtfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibmF2IG5hdi1waWxscyBuYXYtanVzdGlmaWVkXCJcbiAgfSwgW19jKCdsaScsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ2FjdGl2ZSc6IF92bS5pc1NlbGVjdGVkTWVudUl0ZW0oJ3Byb2ZpbGUnKVxuICAgIH1cbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiBfdm0ucm91dGVQcm9maWxlXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnNlbGVjdE1lbnVJdGVtKCdwcm9maWxlJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJQcm9maWxlXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywge1xuICAgIGNsYXNzOiB7XG4gICAgICAnYWN0aXZlJzogX3ZtLmlzU2VsZWN0ZWRNZW51SXRlbSgncG9zdHMnKVxuICAgIH1cbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiBfdm0ucm91dGVQb3N0c1xuICAgIH0sXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zZWxlY3RNZW51SXRlbSgncG9zdHMnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlBvc3RzXCIpXSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItdmlldycpXSwgMSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1kNjFiMzNjMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZDYxYjMzYzAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9Vc2VyRGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1ncm91cFwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3cmFwcGVyLXhzIGJsb2NrXCIsXG4gICAgY2xhc3M6IF92bS5saW5rQ2xhc3MsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0ubGlua1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9uQ2xpY2tMaW5rXG4gICAgfVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZTllMDgxNWNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWU5ZTA4MTVjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi90YWJiYXIvVGFiQmFySXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDIyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ1N2JhZTVlJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHBIZWFkZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjJmNzNmOTdjXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NTdiYWU1ZSZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwSGVhZGVyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDU3YmFlNWUmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FwcEhlYWRlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ1N2JhZTVlJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vQXBwSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDg4ZTZlNGYmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Byb2ZpbGUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjU2ZWQ2YmRhXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00ODhlNmU0ZiZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUHJvZmlsZS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ4OGU2ZTRmJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Qcm9maWxlLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDg4ZTZlNGYmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvZGV0YWlsL1Byb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSAyMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2UxMDAxYiZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0ODZkMjY4ZFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNlMTAwMWImc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FwcC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjZTEwMDFiJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHAudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2UxMDAxYiZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAyMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01ZjZlOGJlZiZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSG9tZS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNmQyNmQzYzdcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVmNmU4YmVmJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Ib21lLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWY2ZThiZWYmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0hvbWUudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01ZjZlOGJlZiZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvaG9tZS9Ib21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2I1NWE4ZTImc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FwcFRhYkJhci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiN2I3YjJiM2FcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdiNTVhOGUyJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHBUYWJCYXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03YjU1YThlMiZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwVGFiQmFyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2I1NWE4ZTImc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi9BcHBUYWJCYXIudnVlXG4vLyBtb2R1bGUgaWQgPSAyMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hN2M4ZjIwZSZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUG9zdHMudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImUwODdhYWZhXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hN2M4ZjIwZSZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUG9zdHMudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hN2M4ZjIwZSZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUG9zdHMudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hN2M4ZjIwZSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9kZXRhaWwvUG9zdHMudnVlXG4vLyBtb2R1bGUgaWQgPSAyMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1kNjFiMzNjMCZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVXNlckRldGFpbC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNTkxMmExNmZcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWQ2MWIzM2MwJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Vc2VyRGV0YWlsLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZDYxYjMzYzAmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VzZXJEZXRhaWwudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1kNjFiMzNjMCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9Vc2VyRGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZTllMDgxNWMmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYkJhckl0ZW0udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjc2ZDRiOWEwXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1lOWUwODE1YyZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFiQmFySXRlbS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWU5ZTA4MTVjJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJCYXJJdGVtLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZTllMDgxNWMmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi90YWJiYXIvVGFiQmFySXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDI0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9