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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vL0V4YW1wbGUudnVlIiwid2VicGFjazovLy9hdXRvc2l6ZS10ZXh0YXJlYS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kaXJlY3RpdmVzL2ZvY3VzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZmlsdGVycy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZmlsdGVycy9ubDJici5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9idXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvanF1ZXJ5LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3Rvb2xzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZT9kMmRhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlPzM4YzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlPzVmYzkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZT8wNWM0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWU/MGRkOSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vYmlsZS5qcyIsIndlYnBhY2s6Ly8vSG9tZS52dWUiLCJ3ZWJwYWNrOi8vL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL0FwcEhlYWRlci52dWUiLCJ3ZWJwYWNrOi8vL0FwcFRhYkJhci52dWUiLCJ3ZWJwYWNrOi8vL1RhYkJhckl0ZW0udnVlIiwid2VicGFjazovLy9Vc2VyRGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vUG9zdHMudnVlIiwid2VicGFjazovLy9Qcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9tb2JpbGVfYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbW9iaWxlX3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi9BcHBIZWFkZXIudnVlPzZiNTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS91c2VyL2RldGFpbC9Qcm9maWxlLnZ1ZT81ZDZhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9BcHAudnVlPzRhNzAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9ob21lL0hvbWUudnVlPzdjMjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vQXBwVGFiQmFyLnZ1ZT9lODIzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9kZXRhaWwvUG9zdHMudnVlP2Q0N2QiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS91c2VyL1VzZXJEZXRhaWwudnVlPzA5OTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vdGFiYmFyL1RhYkJhckl0ZW0udnVlPzUxZmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9ob21lL0hvbWUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9BcHAudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9zZWN0aW9uL0FwcEhlYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vQXBwVGFiQmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi90YWJiYXIvVGFiQmFySXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS91c2VyL1VzZXJEZXRhaWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9kZXRhaWwvUG9zdHMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9kZXRhaWwvUHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vQXBwSGVhZGVyLnZ1ZT8xMGFkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9kZXRhaWwvUHJvZmlsZS52dWU/ZWIxMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vQXBwLnZ1ZT83YjgyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvaG9tZS9Ib21lLnZ1ZT8xM2FiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9zZWN0aW9uL0FwcFRhYkJhci52dWU/M2MwOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvZGV0YWlsL1Bvc3RzLnZ1ZT85YjY2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9Vc2VyRGV0YWlsLnZ1ZT9lOGJkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9zZWN0aW9uL3RhYmJhci9UYWJCYXJJdGVtLnZ1ZT8zOTdhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9zZWN0aW9uL0FwcEhlYWRlci52dWU/MjgwOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvZGV0YWlsL1Byb2ZpbGUudnVlP2RmNGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL0FwcC52dWU/NDAxMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL2hvbWUvSG9tZS52dWU/NmU1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi9BcHBUYWJCYXIudnVlP2ZhZDAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS91c2VyL2RldGFpbC9Qb3N0cy52dWU/Yzc0ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvVXNlckRldGFpbC52dWU/YzVlMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi90YWJiYXIvVGFiQmFySXRlbS52dWU/MDQ4MSJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJfIiwicmVxdWlyZSIsIm1vbWVudCIsIlZ1ZSIsIlZ1ZXgiLCJWdWVSb3V0ZXIiLCJWdWVJMThuIiwidXNlIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJMYXJhdmVsIiwiY3NyZlRva2VuIiwiU29tZWxpbmUiLCJsb2NhbGUiLCJwcm90b3R5cGUiLCIkaHR0cCIsImFwaUF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInRpbWVvdXQiLCIkYXBpIiwiYmluZCIsImVsIiwiZm9jdXMiLCJmaWx0ZXIiLCJ2YWx1ZSIsInZvd2VscyIsImxhc3QiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0ciIsImxlbmd0aCIsInNlY29uZExhc3QiLCJ0aGlyZExhc3QiLCJsYXN0VHdvIiwibGFzdFRocmVlIiwiaW5BcnJheSIsImFyIiwiaW5kZXhPZiIsIndvcmRzIiwic3BsaXQiLCJyZXN1bHRzIiwiaSIsImxldHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwicHVzaCIsInNsaWNlIiwiam9pbiIsImRlY2ltYWxzIiwiTWF0aCIsInJvdW5kIiwicG93Iiwic3ltYm9sIiwidG9TdHJpbmciLCJyZXBsYWNlIiwicGFydHMiLCJkYXRlIiwidGltZSIsInBhcnNlSW50IiwiaG91ciIsInN1YnN0cmluZyIsInJlYWQiLCJ2YWwiLCJSZWdFeHAiLCJjb21wdXRlZCIsImJ1cyIsIm1ldGhvZHMiLCJldmVudEVtaXQiLCJuYW1lIiwiZGF0YSIsIiRlbWl0IiwiZXZlbnRPbiIsImNhbGxiYWNrIiwiJG9uIiwiZXZlbnRPZmYiLCIkb2ZmIiwiQXBwSGVhZGVyU2V0VGl0bGUiLCJ0aXRsZSIsIkFwcFRhYkJhclNldFNob3dBcHBUYWJCYXIiLCJpc1Nob3ciLCJBcHBUYWJCYXJTZWxlY3RUYWJCYXJJdGVtIiwiaW5kZXgiLCJBcHBIZWFkZXJTZXROYXZCdXR0b25MZWZ0IiwiY2xhc3NOYW1lIiwiQXBwSGVhZGVyU2V0TmF2QnV0dG9uUmlnaHQiLCJzY3JvbGxUb0JvdHRvbSIsInNlbGVjdG9yIiwiYW5pbWF0ZWQiLCJhbmltYXRlVGltZSIsIiRlbGVtZW50IiwiJCIsInNjcm9sbEhlaWdodCIsInByb3AiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidnVleFN0b3JlIiwic3RvcmVDb21taXQiLCJjb21taXQiLCJzdG9yZURpc3BhdGNoIiwiZGlzcGF0Y2giLCJub3dUaW1lc3RhbXAiLCJ1bml4IiwibW9tZW50RnJvbURhdGVUaW1lIiwiZGF0ZVRpbWUiLCJkYXRlVGltZVRvVGltZXN0YW1wIiwidXJsIiwicGF0aCIsImJhc2VVcmwiLCJyZWRpcmVjdFRvVXJsIiwibG9jYXRpb24iLCJocmVmIiwicmVkaXJlY3RUb1VybEZyb21CYXNlVXJsIiwicmVsb2FkUGFnZSIsIm9iamVjdFRvRm9ybURhdGEiLCJpdGVtIiwiZm9ybV9kYXRhIiwiRm9ybURhdGEiLCJrZXkiLCJhcHBlbmQiLCJpc0VtcHR5T2JqZWN0Iiwib2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImlzTW9iaWxlIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJjdXJyZW50VXNlcklkIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwidXNlciIsInVzZXJfaWQiLCJkaXJlY3RpdmUiLCJtaXhpbiIsImNvbXBvbmVudCIsInJvdXRlciIsIlN0b3JlIiwicGxhdGZvcm0iLCJjb3VudCIsIm11dGF0aW9ucyIsImluY3JlbWVudCIsImFwcCIsIm1zZyIsIndhdGNoIiwiZXZlbnRzIiwiY3JlYXRlZCIsImluaXRMb2NhbGUiLCJtb3VudGVkIiwidGhhdCIsImxhbmciLCJjb25maWciLCJsb2NhbGVzIiwicm91dGVzIiwiY2hpbGRyZW4iLCJyZWRpcmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBLHdDQUF3QyxnQkFBZ0I7QUFDeEQsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqREE7QUFDQTtBQUNB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K0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQWtHO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQWtHO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQWtHO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQWtHO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQWtHO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7OztBQy9CQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUNyQ0EsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUNYQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUNuQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDM0NBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQ3JHQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7OztBQ1hBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQzNDQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoiL2Fzc2V0cy9qcy9tb2JpbGUubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBvcHRpb25zLmNvbXB1dGVkIHx8IChvcHRpb25zLmNvbXB1dGVkID0ge30pXG4gICAgT2JqZWN0LmtleXMoY3NzTW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbW9kdWxlID0gY3NzTW9kdWxlc1trZXldXG4gICAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG52YXIgbGlzdFRvU3R5bGVzID0gcmVxdWlyZSgnLi9saXN0VG9TdHlsZXMnKVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24pIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHsgY3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgcGFydC5pZCA9IHBhcmVudElkICsgJzowJ1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnQuaWQgPSBwYXJlbnRJZCArICc6JyArIG5ld1N0eWxlc1tpZF0ucGFydHMubGVuZ3RoXG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLXZ1ZS1zc3ItaWR+PVwiJyArIG9iai5pZCArICdcIl0nKVxuICB2YXIgaGFzU1NSID0gc3R5bGVFbGVtZW50ICE9IG51bGxcblxuICAvLyBpZiBpbiBwcm9kdWN0aW9uIG1vZGUgYW5kIHN0eWxlIGlzIGFscmVhZHkgcHJvdmlkZWQgYnkgU1NSLFxuICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgaWYgKGhhc1NTUiAmJiBpc1Byb2R1Y3Rpb24pIHtcbiAgICByZXR1cm4gbm9vcFxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBzdHlsZUVsZW1lbnQgfHwgY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoIWhhc1NTUikge1xuICAgIHVwZGF0ZShvYmopXG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPkV4YW1wbGUgQ29tcG9uZW50PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEknbSBhbiBleGFtcGxlIGNvbXBvbmVudCFcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgbW91bnRlZC4nKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gRXhhbXBsZS52dWU/MTU1YWMyOWUiLCI8dGVtcGxhdGU+XG5cbiAgICA8dGV4dGFyZWE+PC90ZXh0YXJlYT5cblxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZD5cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IGF1dG9zaXplIGZyb20gJ2F1dG9zaXplJ1xuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczogWydyZXNpemVkJ10sXG4gICAgICAgIG1vdW50ZWQgKCkge1xuICAgICAgICAgICAgYXV0b3NpemUodGhpcy4kZWwpXG4gICAgICAgICAgICBpZiAodGhpcy5yZXNpemVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50W3RoaXMucmVzaXplZF0odGhpcy4kZWwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXV0b3NpemUtdGV4dGFyZWEudnVlP2E3NGVkOTNjIiwid2luZG93Ll8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbndpbmRvdy5tb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIGpRdWVyeSBhbmQgdGhlIEJvb3RzdHJhcCBqUXVlcnkgcGx1Z2luIHdoaWNoIHByb3ZpZGVzIHN1cHBvcnRcbiAqIGZvciBKYXZhU2NyaXB0IGJhc2VkIEJvb3RzdHJhcCBmZWF0dXJlcyBzdWNoIGFzIG1vZGFscyBhbmQgdGFicy4gVGhpc1xuICogY29kZSBtYXkgYmUgbW9kaWZpZWQgdG8gZml0IHRoZSBzcGVjaWZpYyBuZWVkcyBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICovXG5cbi8qKlxuICogQFdBUk5JTkc6IFRoZXNlIHR3byBsaWJyYXJpZXMgYXJlIGluY2x1ZGVkIGluIHRoZW1lLmpzLCBzbyBubyBuZWVkIHRvIGluY2x1ZGUgYWdhaW4uXG4gKi9cbi8vIHdpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuLy8gcmVxdWlyZSgnYm9vdHN0cmFwLXNhc3MnKTtcblxuLyoqXG4gKiBWdWUgaXMgYSBtb2Rlcm4gSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBidWlsZGluZyBpbnRlcmFjdGl2ZSB3ZWIgaW50ZXJmYWNlc1xuICogdXNpbmcgcmVhY3RpdmUgZGF0YSBiaW5kaW5nIGFuZCByZXVzYWJsZSBjb21wb25lbnRzLiBWdWUncyBBUEkgaXMgY2xlYW5cbiAqIGFuZCBzaW1wbGUsIGxlYXZpbmcgeW91IHRvIGZvY3VzIG9uIGJ1aWxkaW5nIHlvdXIgbmV4dCBncmVhdCBwcm9qZWN0LlxuICovXG5cbndpbmRvdy5WdWUgPSByZXF1aXJlKCd2dWUnKTtcbndpbmRvdy5WdWV4ID0gcmVxdWlyZSgndnVleCcpO1xud2luZG93LlZ1ZVJvdXRlciA9IHJlcXVpcmUoJ3Z1ZS1yb3V0ZXInKTtcbndpbmRvdy5WdWVJMThuID0gcmVxdWlyZSgndnVlLWkxOG4nKTtcbnJlcXVpcmUoJy4vZmlsdGVycy9oZWxwZXJzJyk7XG5cblZ1ZS51c2UoVnVleCk7XG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5WdWUudXNlKFZ1ZUkxOG4pO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXG4gKiB0byBvdXIgTGFyYXZlbCBiYWNrLWVuZC4gVGhpcyBsaWJyYXJ5IGF1dG9tYXRpY2FsbHkgaGFuZGxlcyBzZW5kaW5nIHRoZVxuICogQ1NSRiB0b2tlbiBhcyBhIGhlYWRlciBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIFwiWFNSRlwiIHRva2VuIGNvb2tpZS5cbiAqL1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7XG4gICAgJ1gtQ1NSRi1UT0tFTic6IHdpbmRvdy5MYXJhdmVsLmNzcmZUb2tlbixcbiAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgJ0FjY2VwdC1MYW5ndWFnZSc6IFNvbWVsaW5lLmxvY2FsZVxufTtcblxuVnVlLnByb3RvdHlwZS4kaHR0cCA9IHdpbmRvdy4kaHR0cCA9IHdpbmRvdy5heGlvcztcblxudmFyIGFwaUF4aW9zID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiAnL2FwaS8nLFxuICAgIHRpbWVvdXQ6IDEwMDAwLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi94LnNvbWVsaW5lLnYxK2pzb24nLFxuICAgIH1cbn0pO1xuVnVlLnByb3RvdHlwZS4kYXBpID0gd2luZG93LiRhcGkgPSBhcGlBeGlvcztcblxuLyoqXG4gKiBFY2hvIGV4cG9zZXMgYW4gZXhwcmVzc2l2ZSBBUEkgZm9yIHN1YnNjcmliaW5nIHRvIGNoYW5uZWxzIGFuZCBsaXN0ZW5pbmdcbiAqIGZvciBldmVudHMgdGhhdCBhcmUgYnJvYWRjYXN0IGJ5IExhcmF2ZWwuIEVjaG8gYW5kIGV2ZW50IGJyb2FkY2FzdGluZ1xuICogYWxsb3dzIHlvdXIgdGVhbSB0byBlYXNpbHkgYnVpbGQgcm9idXN0IHJlYWwtdGltZSB3ZWIgYXBwbGljYXRpb25zLlxuICovXG5cbi8vIGltcG9ydCBFY2hvIGZyb20gXCJsYXJhdmVsLWVjaG9cIlxuXG4vLyB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbi8vICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4vLyAgICAga2V5OiAneW91ci1wdXNoZXIta2V5J1xuLy8gfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBMaWJlcm4gb24gMjYvNS8xNi5cbiAqL1xuZXhwb3J0IGRlZmF1bHR7XG4gICAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsLmZvY3VzKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGlyZWN0aXZlcy9mb2N1cy5qcyIsIi8qKlxuICogQ2hhbmdlcyB2YWx1ZSB0byBwYXN0IHRlbnNlLlxuICogU2ltcGxlIGZpbHRlciBkb2VzIG5vdCBzdXBwb3J0IGlycmVndWxhciB2ZXJicyBzdWNoIGFzIGVhdC1hdGUsIGZseS1mbGV3LCBldGMuXG4gKiBodHRwOi8vanNmaWRkbGUubmV0L2JyeWFuX2svMHhjem1lMnIvXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBzdHJpbmcuXG4gKi9cblZ1ZS5maWx0ZXIoJ3Bhc3QtdGVuc2UnLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8vIFNsaWdodGx5IGZvbGxvd3MgaHR0cDovL3d3dy5veGZvcmRkaWN0aW9uYXJpZXMuY29tL3VzL3dvcmRzL3ZlcmItdGVuc2VzLWFkZGluZy1lZC1hbmQtaW5nXG4gICAgdmFyIHZvd2VscyA9IFsnYScsICdlJywgJ2knLCAnbycsICd1J107XG4gICAgaWYoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGFzdCA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3Vic3RyKHZhbHVlLmxlbmd0aCAtIDEpLFxuICAgICAgICBzZWNvbmRMYXN0ID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMiwgMSksXG4gICAgICAgIHRoaXJkTGFzdCA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3Vic3RyKHZhbHVlLmxlbmd0aCAtIDMsIDEpLFxuICAgICAgICBsYXN0VHdvID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMiksXG4gICAgICAgIGxhc3RUaHJlZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3Vic3RyKHZhbHVlLmxlbmd0aCAtIDMpLFxuICAgICAgICBpbkFycmF5ID0gZnVuY3Rpb24oYXIsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gYXIuaW5kZXhPZih2YWx1ZSkgIT0gLTFcbiAgICAgICAgfTtcblxuICAgIC8vIHBhcnRpY2lwbGUgb3IgYWxyZWFkeSBwYXN0IHRlbnNlLCBkb24ndCB3YW50XG4gICAgaWYobGFzdFRocmVlID09PSAnaW5nJyB8fCBsYXN0VHdvID09PSAnZWQnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBFbmRzIGluICdlJywgc2ltcGx5IGFkZCB0aGUgJ2QnXG4gICAgaWYobGFzdCA9PT0gJ2UnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSArICdkJztcbiAgICB9XG5cbiAgICAvLyBFbmRzIGluICdjJywgYWRkIHRoZSAna2VkJ1xuICAgIGlmKGxhc3QgPT09ICdjJykge1xuICAgICAgICByZXR1cm4gdmFsdWUgKyAna2VkJztcbiAgICB9XG5cbiAgICAvLyBFbmRzIHdpdGggY29uc29uYW50LCB2b3dlbCwgY29uc29uYW50LiBJJ20gc2ltcGxlLCBkb3VibGUgY29uc29uYW50IGFuZCBhZGQgJ2VkJ1xuICAgIGlmKCFpbkFycmF5KHZvd2VscywgdGhpcmRMYXN0KSAmJiBpbkFycmF5KHZvd2Vscywgc2Vjb25kTGFzdCkgJiYgIWluQXJyYXkodm93ZWxzLCBsYXN0KSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgKyBsYXN0ICsgJ2VkJztcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUgKyAnZWQnO1xufSk7XG5cbi8qKlxuICogVnVlIGZpbHRlciB0byBjb252ZXJ0IGEgc2x1ZyB0byBhIG1vcmUgaHVtYW4gZnJpZW5kbHkgZm9ybS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHN0cmluZy5cbiAqL1xuVnVlLmZpbHRlcignaHVtYW5hYmxlJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgd29yZHMgPSB2YWx1ZS5zcGxpdCgvWy1fXSsvZyk7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IodmFyIGk9MDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBsZXR0ZXIgPSB3b3Jkc1tpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGxldHRlciArIHdvcmRzW2ldLnNsaWNlKDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHMuam9pbignICcpO1xufSk7XG5cbi8qKlxuICogVnVlIGZpbHRlciB0byBjb252ZXJ0IHRoZSBnaXZlbiB2YWx1ZSB0byBwZXJjZW50LlxuICogaHR0cDovL2pzZmlkZGxlLm5ldC9icnlhbl9rL3FhdWYzcXloL1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAgICBUaGUgdmFsdWUgc3RyaW5nLlxuICogQHBhcmFtIHtOdW1iZXJ9IGRlY2ltYWxzIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMuXG4gKi9cblZ1ZS5maWx0ZXIoJ3BlcmNlbnRhZ2UnLCBmdW5jdGlvbih2YWx1ZSwgZGVjaW1hbHMpIHtcbiAgICBpZighdmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSAwO1xuICAgIH1cblxuICAgIGlmKCFkZWNpbWFscykge1xuICAgICAgICBkZWNpbWFscyA9IDA7XG4gICAgfVxuXG4gICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDtcbiAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgKiBNYXRoLnBvdygxMCwgZGVjaW1hbHMpKSAvIE1hdGgucG93KDEwLCBkZWNpbWFscyk7XG4gICAgdmFsdWUgPSB2YWx1ZSArICclJztcbiAgICByZXR1cm4gdmFsdWU7XG59KTtcblxuXG4vKipcbiAqIFZ1ZSBmaWx0ZXIgdG8gcm91bmQgdGhlIGRlY2ltYWwgdG8gdGhlIGdpdmVuIHBsYWNlLlxuICogaHR0cDovL2pzZmlkZGxlLm5ldC9icnlhbl9rLzNvdmExN3k5L1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAgICBUaGUgdmFsdWUgc3RyaW5nLlxuICogQHBhcmFtIHtOdW1iZXJ9IGRlY2ltYWxzIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMuXG4gKi9cblZ1ZS5maWx0ZXIoJ3JvdW5kJywgZnVuY3Rpb24odmFsdWUsIGRlY2ltYWxzKSB7XG4gICAgaWYoIXZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICB9XG5cbiAgICBpZighZGVjaW1hbHMpIHtcbiAgICAgICAgZGVjaW1hbHMgPSAwO1xuICAgIH1cblxuICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAqIE1hdGgucG93KDEwLCBkZWNpbWFscykpIC8gTWF0aC5wb3coMTAsIGRlY2ltYWxzKTtcbiAgICByZXR1cm4gdmFsdWU7XG59KTtcblxuXG4vKipcbiAqIFZ1ZSBmaWx0ZXIgdG8gY29udmVydCB0aGUgZ2l2ZW4gdmFsdWUgdG8gd2hvbGUgZG9sbGFycywgbm8gY2hhbmdlLlxuICogaHR0cDovL2pzZmlkZGxlLm5ldC9icnlhbl9rLzJ0NmJxcWZjL1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgc3RyaW5nLlxuICovXG5WdWUuZmlsdGVyKCduby1jaGFuZ2UnLCBmdW5jdGlvbih2YWx1ZSwgc3ltYm9sKSB7XG4gICAgaWYoIXZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICB9XG5cbiAgICBpZighc3ltYm9sKSB7XG4gICAgICAgIHN5bWJvbCA9ICckJztcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKS5zcGxpdCgnLicpWzBdO1xuICAgIHJldHVybiBzeW1ib2wgKyB2YWx1ZTtcbn0pO1xuXG4vKipcbiAqIFZ1ZSBmaWx0ZXIgdG8gbWFrZSBhIHNpbXBsZSB0aW1lc3RhbXAgZm9yIGFuIElTTyBkYXRlLlxuICogaHR0cDovL2pzZmlkZGxlLm5ldC9icnlhbl9rLzQ0a3F0cGVnL1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgc3RyaW5nLlxuICovXG5WdWUuZmlsdGVyKCd0aW1lc3RhbXAnLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciBwYXJ0cyA9IHZhbHVlLnNwbGl0KCcgJyk7XG4gICAgdmFyIGRhdGUgPSBwYXJ0c1swXTtcbiAgICB2YXIgdGltZSA9IHBhcnRzWzFdO1xuXG4gICAgZGF0ZSA9IGRhdGUuc3BsaXQoJy0nKTtcbiAgICB0aW1lID0gdGltZS5zcGxpdCgnOicpO1xuXG4gICAgaWYocGFyc2VJbnQodGltZVswXSwgMTApID4gMTIpIHtcbiAgICAgICAgdmFyIGhvdXIgPSBwYXJzZUludCh0aW1lWzBdLCAxMCkgJSAxMjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBob3VyID0gcGFyc2VJbnQodGltZVswXSwgMTApO1xuICAgIH1cblxuICAgIGhvdXIgPSBob3VyIDwgMTAgPyAnMCcgKyBob3VyIDogaG91cjtcblxuICAgIHJldHVybiAnWycgKyBkYXRlWzFdICsgJy8nICsgZGF0ZVsyXSArICcgJyArIGhvdXIgKyAnOicgKyB0aW1lWzFdICsgJ10nO1xufSk7XG5cbi8qKlxuICogVnVlIGZpbHRlciB0byB0cnVuY2F0ZSBhIHN0cmluZyB0byB0aGUgc3BlY2lmaWVkIGxlbmd0aC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgc3RyaW5nLlxuICovXG5WdWUuZmlsdGVyKCd0cnVuY2F0ZScsIGZ1bmN0aW9uKHZhbHVlLCBsZW5ndGgpIHtcbiAgICBpZih2YWx1ZS5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGxlbmd0aCA9IGxlbmd0aCAtIDM7XG5cbiAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKDAsIGxlbmd0aCkgKyAnLi4uJztcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZmlsdGVycy9oZWxwZXJzLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IExpYmVybiBvbiAyNi83LzE2LlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVhZDogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICByZXR1cm4gdmFsLnJlcGxhY2UobmV3IFJlZ0V4cCgnXFxyP1xcbicsICdnJyksICc8YnIgLz4nKTtcbiAgICB9LFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZmlsdGVycy9ubDJici5qcyIsImV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGJ1cygpe1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5idXM7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGV2ZW50RW1pdChuYW1lLCBkYXRhKXtcbiAgICAgICAgICAgIHRoaXMuYnVzLiRlbWl0KG5hbWUsIGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBldmVudE9uKG5hbWUsIGNhbGxiYWNrKXtcbiAgICAgICAgICAgIHRoaXMuYnVzLiRvbihuYW1lLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50T2ZmKG5hbWUsIGNhbGxiYWNrKXtcbiAgICAgICAgICAgIHRoaXMuYnVzLiRvZmYobmFtZSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICBBcHBIZWFkZXJTZXRUaXRsZSh0aXRsZSl7XG4gICAgICAgICAgICB0aGlzLmJ1cy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB9LFxuICAgICAgICBBcHBUYWJCYXJTZXRTaG93QXBwVGFiQmFyKGlzU2hvdyl7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RW1pdChcIkFwcFRhYkJhcl9zZXRTaG93QXBwVGFiQmFyXCIsIGlzU2hvdyk7XG4gICAgICAgIH0sXG4gICAgICAgIEFwcFRhYkJhclNlbGVjdFRhYkJhckl0ZW0oaW5kZXgpe1xuICAgICAgICAgICAgdGhpcy5ldmVudEVtaXQoXCJBcHBUYWJCYXJfc2VsZWN0VGFiQmFySXRlbVwiLCBpbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIEFwcEhlYWRlclNldE5hdkJ1dHRvbkxlZnQoY2xhc3NOYW1lKXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRFbWl0KFwiQXBwSGVhZGVyX3NldE5hdkJ1dHRvbkxlZnRcIiwgY2xhc3NOYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgQXBwSGVhZGVyU2V0TmF2QnV0dG9uUmlnaHQoY2xhc3NOYW1lKXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRFbWl0KFwiQXBwSGVhZGVyX3NldE5hdkJ1dHRvblJpZ2h0XCIsIGNsYXNzTmFtZSk7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2J1cy5qcyIsImV4cG9ydCBkZWZhdWx0e1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2Nyb2xsVG9Cb3R0b20oc2VsZWN0b3IsIGFuaW1hdGVkLCBhbmltYXRlVGltZSl7XG4gICAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIHZhciBzY3JvbGxIZWlnaHQgPSAkZWxlbWVudC5wcm9wKFwic2Nyb2xsSGVpZ2h0XCIpO1xuICAgICAgICAgICAgaWYgKGFuaW1hdGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhbmltYXRlVGltZSkge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRlVGltZSA9IDEwMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRlbGVtZW50LmFuaW1hdGUoe3Njcm9sbFRvcDogc2Nyb2xsSGVpZ2h0fSwgYW5pbWF0ZVRpbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWxlbWVudC5zY3JvbGxUb3Aoc2Nyb2xsSGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9qcXVlcnkuanMiLCJleHBvcnQgZGVmYXVsdHtcbiAgICBjb21wdXRlZDoge1xuICAgICAgICB2dWV4U3RvcmUoKXtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cudnVleFN0b3JlO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzdG9yZUNvbW1pdChuYW1lLCBkYXRhKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZ1ZXhTdG9yZS5jb21taXQobmFtZSwgZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0b3JlRGlzcGF0Y2gobmFtZSwgZGF0YSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52dWV4U3RvcmUuZGlzcGF0Y2gobmFtZSwgZGF0YSk7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3N0b3JlLmpzIiwiZXhwb3J0IGRlZmF1bHR7XG4gICAgY29tcHV0ZWQ6IHt9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbm93VGltZXN0YW1wKCl7XG4gICAgICAgICAgICByZXR1cm4gbW9tZW50KCkudW5peCgpO1xuICAgICAgICB9LFxuICAgICAgICBtb21lbnRGcm9tRGF0ZVRpbWUoZGF0ZVRpbWUpe1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlVGltZSwgJ1lZWVktTU0tREQgSEg6bW06c3MnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0ZVRpbWVUb1RpbWVzdGFtcChkYXRlVGltZSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb21lbnRGcm9tRGF0ZVRpbWUoZGF0ZVRpbWUpLnVuaXgoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXJsKHBhdGgpe1xuICAgICAgICAgICAgaWYgKHBhdGggJiYgcGF0aC5zdWJzdHJpbmcoMCwgMSkgIT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9ICcvJyArIHBhdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iYXNlVXJsICsgcGF0aDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVkaXJlY3RUb1VybCh1cmwpe1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZGlyZWN0VG9VcmxGcm9tQmFzZVVybCh1cmwpe1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnVybCh1cmwpO1xuICAgICAgICB9LFxuICAgICAgICByZWxvYWRQYWdlKCl7XG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG9Vcmwod2luZG93LmxvY2F0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2JqZWN0VG9Gb3JtRGF0YShpdGVtKXtcbiAgICAgICAgICAgIHZhciBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBmb3JtX2RhdGEuYXBwZW5kKGtleSwgaXRlbVtrZXldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZvcm1fZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNFbXB0eU9iamVjdChvYmplY3Qpe1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkubGVuZ3RoID09PSAwO1xuICAgICAgICB9LFxuICAgICAgICBpc01vYmlsZSgpe1xuICAgICAgICAgICAgdmFyIGlzTW9iaWxlID0gd2luZG93Lm1hdGNoTWVkaWEoXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gKGlzTW9iaWxlLm1hdGNoZXMpO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy90b29scy5qcyIsImV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGJhc2VVcmwoKXtcbiAgICAgICAgICAgIHJldHVybiBTb21lbGluZS5iYXNlVXJsO1xuICAgICAgICB9LFxuICAgICAgICBsb2NhbGUoKXtcbiAgICAgICAgICAgIHJldHVybiBTb21lbGluZS5sb2NhbGU7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnRVc2VySWQoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFNvbWVsaW5lLnN0YXRlKTtcbiAgICAgICAgICAgIHJldHVybiBTb21lbGluZS5zdGF0ZS51c2VyLnVzZXJfaWQ7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3VzZXIuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJhdXRvc2l6ZS10ZXh0YXJlYS52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZGI3ODI5YWUmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Vzc2VudGlhbHMvYXV0b3NpemUtdGV4dGFyZWEudnVlXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRXhhbXBsZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1hNDdiMzgyNiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9FeGFtcGxlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2xpYmVybi9Db2RlL3NvbWVsaW5lLXN0YXJ0ZXItbWFzdGVyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEV4YW1wbGUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWE0N2IzODI2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYTQ3YjM4MjZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWRiNzgyOWFlJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYXV0b3NpemUtdGV4dGFyZWEudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZGI3ODI5YWUhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXV0b3NpemUtdGV4dGFyZWEudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LWRiNzgyOWFlXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvbGliZXJuL0NvZGUvc29tZWxpbmUtc3RhcnRlci1tYXN0ZXIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGF1dG9zaXplLXRleHRhcmVhLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1kYjc4MjlhZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWRiNzgyOWFlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX3ZtLl9tKDApXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiXG4gIH0sIFtfdm0uX3YoXCJFeGFtcGxlIENvbXBvbmVudFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWJvZHlcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBJJ20gYW4gZXhhbXBsZSBjb21wb25lbnQhXFxuICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1hNDdiMzgyNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYTQ3YjM4MjYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndGV4dGFyZWEnKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1kYjc4MjlhZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZGI3ODI5YWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWRiNzgyOWFlJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNTEwYjc3NTBcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWRiNzgyOWFlJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWRiNzgyOWFlJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hdXRvc2l6ZS10ZXh0YXJlYS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWRiNzgyOWFlJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9lc3NlbnRpYWxzL2F1dG9zaXplLXRleHRhcmVhLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCIvKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGUgVnVlIGFuZCBWdWUgUmVzb3VyY2UuIFRoaXMgZ2l2ZXMgYSBncmVhdCBzdGFydGluZyBwb2ludCBmb3JcbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxucmVxdWlyZSgnLi9ib290c3RyYXAnKTtcblxuLy8gVnVlIERpcmVjdGl2ZXNcblZ1ZS5kaXJlY3RpdmUoJ2ZvY3VzJywgcmVxdWlyZSgnLi9kaXJlY3RpdmVzL2ZvY3VzJykpO1xuXG4vLyBWdWUgRmlsdGVyc1xuVnVlLmZpbHRlcignbmwyYnInLCByZXF1aXJlKCcuL2ZpbHRlcnMvbmwyYnInKSk7XG5cbi8vIFZ1ZSBNaXhpbnNcbmltcG9ydCBNaXhJblVzZXIgZnJvbSAnLi9taXhpbnMvdXNlcidcbmltcG9ydCBNaXhJbkpRdWVyeSBmcm9tICcuL21peGlucy9qcXVlcnknXG5pbXBvcnQgTWl4SW5Ub29scyBmcm9tICcuL21peGlucy90b29scydcbmltcG9ydCBNaXhJbkJ1cyBmcm9tICcuL21peGlucy9idXMnXG5pbXBvcnQgTWl4SW5TdG9yZSBmcm9tICcuL21peGlucy9zdG9yZSdcbmltcG9ydCBNaXhJbk1vYmlsZUFwcCBmcm9tICcuL21peGlucy9tb2JpbGVfYXBwJ1xuVnVlLm1peGluKE1peEluVXNlcik7XG5WdWUubWl4aW4oTWl4SW5KUXVlcnkpO1xuVnVlLm1peGluKE1peEluVG9vbHMpO1xuVnVlLm1peGluKE1peEluQnVzKTtcblZ1ZS5taXhpbihNaXhJblN0b3JlKTtcblZ1ZS5taXhpbihNaXhJbk1vYmlsZUFwcCk7XG5cbi8vIFZ1ZSBDb21wb25lbnRzXG5WdWUuY29tcG9uZW50KCdhdXRvc2l6ZS10ZXh0YXJlYScsIHJlcXVpcmUoJy4vZXNzZW50aWFscy9hdXRvc2l6ZS10ZXh0YXJlYS52dWUnKSk7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5WdWUuY29tcG9uZW50KCdzbC1hcHAtaGVhZGVyJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vQXBwSGVhZGVyLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3NsLWFwcC10YWItYmFyJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vQXBwVGFiQmFyLnZ1ZScpKTtcblxuVnVlLmNvbXBvbmVudCgnZXhhbXBsZScsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9FeGFtcGxlLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3NsLWFwcC1ob21lJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL21vYmlsZS9ob21lL0hvbWUudnVlJykpO1xuXG4vLyBWdWUgUm91dGVyXG5pbXBvcnQgUm91dGVyQ29uZmlnIGZyb20gJy4vbW9iaWxlX3JvdXRlcidcbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoUm91dGVyQ29uZmlnKTtcblxuLy8gQnVzXG5jb25zdCBidXMgPSBuZXcgVnVlKHtcbiAgICBkYXRhOiB7XG4gICAgICAgIHRpdGxlOiBcIlNvbWVsaW5lXCIsXG4gICAgfVxufSk7XG53aW5kb3cuYnVzID0gYnVzO1xuXG4vLyBWdWV4XG5jb25zdCB2dWV4U3RvcmUgPSBuZXcgVnVleC5TdG9yZSh7XG4gICAgc3RhdGU6IHtcbiAgICAgICAgcGxhdGZvcm06ICdtb2JpbGUnLFxuICAgICAgICBjb3VudDogMFxuICAgIH0sXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIGluY3JlbWVudCAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmNvdW50KytcbiAgICAgICAgfVxuICAgIH1cbn0pO1xud2luZG93LnZ1ZXhTdG9yZSA9IHZ1ZXhTdG9yZTtcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gICAgcm91dGVyLFxuICAgIGVsOiAnI2FwcCcsXG4gICAgZGF0YToge1xuICAgICAgICBtc2c6IFwiaGVsbG9cIixcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7fSxcbiAgICB3YXRjaDoge30sXG4gICAgZXZlbnRzOiB7fSxcbiAgICBjcmVhdGVkKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdCb290c3RyYXAuJyk7XG4gICAgICAgIHRoaXMuaW5pdExvY2FsZSgpO1xuICAgIH0sXG4gICAgbW91bnRlZCgpe1xuICAgICAgICBjb25zb2xlLmxvZygnUmVhZHkuJyk7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0KCdBcHBSZWFkeScpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBpbml0TG9jYWxlKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSW5pdCBMb2NhbGUuJyk7XG5cbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHZhciBsYW5nID0gdGhpcy5sb2NhbGU7XG5cbiAgICAgICAgICAgIFZ1ZS5jb25maWcubGFuZyA9IGxhbmc7XG4gICAgICAgICAgICBWdWUubG9jYWxlKGxhbmcsIHdpbmRvdy5Tb21lbGluZS5sb2NhbGVzKTtcblxuICAgICAgICB9LFxuICAgIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2JpbGUuanMiLCI8c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCJcbiAgICAgICAgICAgICAgIEBjbGljaz1cIm9uQ2xpY2tEZW1vQnV0dG9uMVwiXG4gICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgYnRuLWxnIHItMnhcIj5cbiAgICAgICAgICAgICAgICBBbGVydFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiXG4gICAgICAgICAgICAgICBAY2xpY2s9XCJvbkNsaWNrRGVtb0J1dHRvbjJcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrIGJ0bi1sZyByLTJ4XCI+XG4gICAgICAgICAgICAgICAgQWN0aW9uIFNoZWV0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCJcbiAgICAgICAgICAgICAgIEBjbGljaz1cIm9uQ2xpY2tEZW1vQnV0dG9uM1wiXG4gICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4td2FybmluZyBidG4tYmxvY2sgYnRuLWxnIHItMnhcIj5cbiAgICAgICAgICAgICAgICBUb3B0aXBcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxuICAgICAgICAgICAgICAgQGNsaWNrPVwib25DbGlja0RlbW9CdXR0b240XCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLWJsb2NrIGJ0bi1sZyByLTJ4XCI+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICd1c2VyX2lkJyxcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgICAgIG1zZzogJ2hlbGxvIHZ1ZScsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7fSxcbiAgICAgICAgd2F0Y2g6IHt9LFxuICAgICAgICBldmVudHM6IHt9LFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IFJlYWR5LicpO1xuXG4gICAgICAgICAgICB0aGlzLmxpc3RlbkJ1cygpO1xuICAgICAgICAgICAgdGhpcy5vbkFwcFJlYWR5KCk7XG5cbi8vICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcblxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBsaXN0ZW5CdXMoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50T24oXCJBcHBSZWFkeVwiLCB0aGlzLm9uQXBwUmVhZHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRPbihcIkFwcEhlYWRlcl9vbkNsaWNrTmF2QnV0dG9uTGVmdFwiLCB0aGlzLm9uQ2xpY2tOYXZCdXR0b25MZWZ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50T24oXCJBcHBIZWFkZXJfb25DbGlja05hdkJ1dHRvblJpZ2h0XCIsIHRoaXMub25DbGlja05hdkJ1dHRvblJpZ2h0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkFwcFJlYWR5KCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uQXBwUmVhZHknKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuQXBwSGVhZGVyU2V0TmF2QnV0dG9uTGVmdCgnZmEgZmEtc21pbGUtbycpO1xuICAgICAgICAgICAgICAgIHRoaXMuQXBwVGFiQmFyU2VsZWN0VGFiQmFySXRlbSgwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrTmF2QnV0dG9uTGVmdCgpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkNsaWNrTmF2QnV0dG9uTGVmdCcpO1xuICAgICAgICAgICAgICAgICQudG9hc3QoXCLogLZcIiwgXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2tOYXZCdXR0b25SaWdodCgpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkNsaWNrTmF2QnV0dG9uUmlnaHQnKTtcbiAgICAgICAgICAgICAgICAkLmFjdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLmlrDmlofnq6BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RvIHNvbWV0aGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQudG9hc3QoXCLmlrDmlofnq6BcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi5LiK5Lyg5Zu+54mHXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kbyBzb21ldGhpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLnRvYXN0KFwi5LiK5Lyg5Zu+54mHXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZldGNoRGF0YSgpe1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBpLmdldCgnL3VzZXJzJywge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSkuYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2tEZW1vQnV0dG9uMSgpe1xuICAgICAgICAgICAgICAgIC8vIHNob3cgYWxlcnRcbiAgICAgICAgICAgICAgICAkLmFsZXJ0KFwi5oiR5piv5LiA5Liq5a+56K+d5qGGXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2tEZW1vQnV0dG9uMigpe1xuICAgICAgICAgICAgICAgIC8vIHNob3cgYWN0aW9uc2hlZXRcbiAgICAgICAgICAgICAgICAkLmFjdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLnvJbovpFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RvIHNvbWV0aGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIuWIoOmZpFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZG8gc29tZXRoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbGlja0RlbW9CdXR0b24zKCl7XG4gICAgICAgICAgICAgICAgLy8gc2hvdyB0b2FzdFxuICAgICAgICAgICAgICAgICQudG9wdGlwKCforablkYonLCAnd2FybmluZycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2tEZW1vQnV0dG9uNCgpe1xuICAgICAgICAgICAgICAgIC8vIHNob3cgdG9hc3RcbiAgICAgICAgICAgICAgICAkLnRvYXN0KFwi5Y+W5raI5pON5L2cXCIsIFwiY2FuY2VsXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gSG9tZS52dWU/YTYzNGFhNzYiLCI8c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXItbWRcIj5cblxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCJcbiAgICAgICAgICAgQGNsaWNrPVwib25DbGlja0J1dHRvblVzZXJEZXRhaWxcIlxuICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgYnRuLWxnIHItMnhcIj5TaG93IFVzZXIgRGV0YWlsPC9hPlxuXG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAndXNlcl9pZCcsXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgICAgICBtc2c6ICdoZWxsbyB2dWUnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHt9LFxuICAgICAgICBjb21wb25lbnRzOiB7fSxcbiAgICAgICAgd2F0Y2g6IHt9LFxuICAgICAgICBldmVudHM6IHt9LFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IFJlYWR5LicpO1xuXG4gICAgICAgICAgICB0aGlzLmxpc3RlbkJ1cygpO1xuICAgICAgICAgICAgdGhpcy5vbkFwcFJlYWR5KCk7XG5cbi8vICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcblxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBsaXN0ZW5CdXMoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50T24oXCJBcHBSZWFkeVwiLCB0aGlzLm9uQXBwUmVhZHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRPbihcIkFwcEhlYWRlcl9vbkNsaWNrTmF2QnV0dG9uTGVmdFwiLCB0aGlzLm9uQ2xpY2tOYXZCdXR0b25MZWZ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50T24oXCJBcHBIZWFkZXJfb25DbGlja05hdkJ1dHRvblJpZ2h0XCIsIHRoaXMub25DbGlja05hdkJ1dHRvblJpZ2h0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkFwcFJlYWR5KCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uQXBwUmVhZHknKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuQXBwSGVhZGVyU2V0VGl0bGUoJ1NvbWVsaW5lIEFwcCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuQXBwSGVhZGVyU2V0TmF2QnV0dG9uTGVmdChudWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLkFwcFRhYkJhclNlbGVjdFRhYkJhckl0ZW0oMSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbGlja05hdkJ1dHRvbkxlZnQoKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb25DbGlja05hdkJ1dHRvbkxlZnQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrTmF2QnV0dG9uUmlnaHQoKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb25DbGlja05hdkJ1dHRvblJpZ2h0Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmV0Y2hEYXRhKCl7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRhcGkuZ2V0KCcvdXNlcnMnLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrQnV0dG9uVXNlckRldGFpbCgpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUb1VybCgnL20vYXBwIy91c2VyLzEvcHJvZmlsZScpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQXBwLnZ1ZT8xZmFhOWVmNiIsIjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG4gICAgPCEtLSBoZWFkZXIgLS0+XG4gICAgPGhlYWRlciBpZD1cImhlYWRlclwiIGNsYXNzPVwiYXBwLWhlYWRlciBuYXZiYXIgYm94LXNoYWRvdyBiZy1kYXJrXCIgcm9sZT1cIm1lbnVcIj5cbiAgICAgICAgPCEtLSBuYXZiYXIgaGVhZGVyIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlciB0ZXh0LWNlbnRlciBka1wiIHN0eWxlPVwiZmxvYXQ6IG5vbmU7d2lkdGg6IGF1dG87XCI+XG5cbiAgICAgICAgICAgIDwhLS0gLyBuYXZiYXIgaGVhZGVyIC0tPlxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJvbkNsaWNrTmF2QnV0dG9uUmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInB1bGwtcmlnaHQgZGtcIj5cbiAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XCJuYXZCdXR0b25SaWdodENsYXNzXCI+PC9pPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cIm9uQ2xpY2tOYXZCdXR0b25MZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwdWxsLWxlZnQgZGtcIj5cbiAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XCJuYXZCdXR0b25MZWZ0Q2xhc3NcIj48L2k+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwhLS0gdGl0bGUgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWJyYW5kIHRleHQtbHQgZm9udC1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICB7eyBidXMudGl0bGUgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLSAvIGJyYW5kIC0tPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IFtdLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgICAgbXNnOiAnaGVsbG8gdnVlJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgbmF2QnV0dG9uTGVmdENsYXNzOiAnZmEgZmEtY2hldnJvbi1sZWZ0JyxcbiAgICAgICAgICAgICAgICBuYXZCdXR0b25SaWdodENsYXNzOiAnZmEgZmEtcGx1cycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7fSxcbiAgICAgICAgY29tcG9uZW50czoge30sXG4gICAgICAgIHdhdGNoOiB7fSxcbiAgICAgICAgZXZlbnRzOiB7fSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCBSZWFkeS4nKTtcblxuICAgICAgICAgICAgdGhpcy5saXN0ZW5CdXMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgbGlzdGVuQnVzKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudE9uKFwiQXBwSGVhZGVyX3NldE5hdkJ1dHRvbkxlZnRcIiwgdGhpcy5zZXROYXZCdXR0b25MZWZ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50T24oXCJBcHBIZWFkZXJfc2V0TmF2QnV0dG9uUmlnaHRcIiwgdGhpcy5zZXROYXZCdXR0b25SaWdodCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0TmF2QnV0dG9uTGVmdChjbGFzc05hbWUpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBcHBIZWFkZXIgLSBzZXROYXZCdXR0b25MZWZ0OiAnICsgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09ICdiYWNrJykge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSAnZmEgZmEtY2hldnJvbi1sZWZ0JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5uYXZCdXR0b25MZWZ0Q2xhc3MgPSBjbGFzc05hbWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0TmF2QnV0dG9uUmlnaHQoY2xhc3NOYW1lKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXBwSGVhZGVyIC0gc2V0TmF2QnV0dG9uUmlnaHQ6ICcgKyBjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChjbGFzc05hbWUgPT0gJ25ldycgfHwgY2xhc3NOYW1lID09ICdwbHVzJykge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSAnZmEgZmEtcGx1cyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubmF2QnV0dG9uUmlnaHRDbGFzcyA9IGNsYXNzTmFtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrTmF2QnV0dG9uTGVmdCgpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBcHBIZWFkZXIgLSBvbkNsaWNrTmF2QnV0dG9uTGVmdCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRFbWl0KFwiQXBwSGVhZGVyX29uQ2xpY2tOYXZCdXR0b25MZWZ0XCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2tOYXZCdXR0b25SaWdodCgpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBcHBIZWFkZXIgLSBvbkNsaWNrTmF2QnV0dG9uUmlnaHQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50RW1pdChcIkFwcEhlYWRlcl9vbkNsaWNrTmF2QnV0dG9uUmlnaHRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBBcHBIZWFkZXIudnVlPzFmZWIzNTA1IiwiPHN0eWxlIHNjb3BlZD5cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cblxuICAgIDxmb290ZXIgdi1zaG93PVwiU2hvd0FwcFRhYkJhclwiIGNsYXNzPVwiYXBwLWZvb3RlciBuYXZiYXIgbmF2YmFyLWZpeGVkLWJvdHRvbSBiZy1saWdodCBsdCBiLXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIGhpZGRlbi14c1wiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LXhsIHctYXV0by14cyBjZW50ZXItYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtanVzdGlmaWVkIHRleHQtY2VudGVyIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXNTZWxlY3RUYWJCYXJJdGVtKDApXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsLXRhYi1iYXItaXRlbSBsaW5rPVwiamF2YXNjcmlwdDo7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmxvY2sgdGV4dC1tZCBtLXQteHMgaWNvbi11c2VyIHRleHQtcHJpbWFyeVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXhzIHRleHQtcHJpbWFyeVwiPkFjY291bnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbC10YWItYmFyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2wtdGFiLWJhci1pdGVtIGxpbms9XCIvbS9cIiBpdGVtLWlkPVwiMFwiIDpsaW5rLWNsaWNrPVwib25DbGlja1RhYkJhckl0ZW0oMClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJibG9jayB0ZXh0LW1kIG0tdC14cyBpY29uLXVzZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14c1wiPkFjY291bnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbC10YWItYmFyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImlzU2VsZWN0VGFiQmFySXRlbSgxKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbC10YWItYmFyLWl0ZW0gbGluaz1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJsb2NrIHRleHQtbWQgbS10LXhzIGljb24tY2xvdWQtdXBsb2FkIHRleHQtcHJpbWFyeVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXhzIHRleHQtcHJpbWFyeVwiPlVwbG9hZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NsLXRhYi1iYXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbC10YWItYmFyLWl0ZW0gbGluaz1cIi9tL2FwcFwiIGl0ZW0taWQ9XCIxXCIgOmxpbmstY2xpY2s9XCJvbkNsaWNrVGFiQmFySXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJsb2NrIHRleHQtbWQgbS10LXhzIGljb24tY2xvdWQtdXBsb2FkXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQteHNcIj5VcGxvYWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbC10YWItYmFyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImlzU2VsZWN0VGFiQmFySXRlbSgyKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbC10YWItYmFyLWl0ZW0gbGluaz1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJsb2NrIHRleHQtbWQgbS10LXhzIGljb24tY2xvY2sgdGV4dC1wcmltYXJ5XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQteHMgdGV4dC1wcmltYXJ5XCI+V2F0Y2g8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbC10YWItYmFyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2wtdGFiLWJhci1pdGVtIGxpbms9XCIvbS9hcHBcIiBpdGVtLWlkPVwiMlwiIDpsaW5rLWNsaWNrPVwib25DbGlja1RhYkJhckl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJibG9jayB0ZXh0LW1kIG0tdC14cyBpY29uLWNsb2NrXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQteHNcIj5XYXRjaDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NsLXRhYi1iYXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXNTZWxlY3RUYWJCYXJJdGVtKDMpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsLXRhYi1iYXItaXRlbSBsaW5rPVwiamF2YXNjcmlwdDo7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmxvY2sgdGV4dC1tZCBtLXQteHMgaWNvbi1iYWcgdGV4dC1wcmltYXJ5XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQteHMgdGV4dC1wcmltYXJ5XCI+U2hvcHBpbmc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbC10YWItYmFyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2wtdGFiLWJhci1pdGVtIGxpbms9XCIvbS9hcHBcIiBpdGVtLWlkPVwiM1wiIDpsaW5rLWNsaWNrPVwib25DbGlja1RhYkJhckl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJibG9jayB0ZXh0LW1kIG0tdC14cyBpY29uLWJhZ1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXhzXCI+U2hvcHBpbmc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbC10YWItYmFyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgaGlkZGVuLXhzXCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IFtdLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgICAgbXNnOiAnaGVsbG8gdnVlJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgU2hvd0FwcFRhYkJhcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZF90YWJfYmFyX2l0ZW1faW5kZXg6IDAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7fSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3NsLXRhYi1iYXItaXRlbSc6IHJlcXVpcmUoJy4vdGFiYmFyL1RhYkJhckl0ZW0udnVlJyksXG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7fSxcbiAgICAgICAgZXZlbnRzOiB7fSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCBSZWFkeS4nKTtcblxuICAgICAgICAgICAgdGhpcy5saXN0ZW5CdXMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgbGlzdGVuQnVzKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudE9uKFwiQXBwVGFiQmFyX3NlbGVjdFRhYkJhckl0ZW1cIiwgdGhpcy5zZWxlY3RUYWJCYXJJdGVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50T24oXCJBcHBUYWJCYXJfc2V0U2hvd0FwcFRhYkJhclwiLCB0aGlzLnNldFNob3dBcHBUYWJCYXIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFNob3dBcHBUYWJCYXIoaXNTaG93KXtcbiAgICAgICAgICAgICAgICBpZiAoaXNTaG93ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpc1Nob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXBwVGFiQmFyIC0gc2V0U2hvd0FwcFRhYkJhcjogJyArIGlzU2hvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5TaG93QXBwVGFiQmFyID0gaXNTaG93O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdFRhYkJhckl0ZW0oaW5kZXgpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfdGFiX2Jhcl9pdGVtX2luZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNTZWxlY3RUYWJCYXJJdGVtKGluZGV4KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZF90YWJfYmFyX2l0ZW1faW5kZXggPT0gaW5kZXg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbGlja1RhYkJhckl0ZW0oaW5kZXgpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBcHBUYWJCYXIgLSBvbkNsaWNrVGFiQmFySXRlbTogJyArIGluZGV4KTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50RW1pdChcIkFwcFRhYkJhcl9vbkNsaWNrVGFiQmFySXRlbVwiLCBpbmRleCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBBcHBUYWJCYXIudnVlPzM2OWIzNDhhIiwiPHN0eWxlIHNjb3BlZD5cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cbiAgICAgICAgPGEgOmhyZWY9XCJsaW5rXCIgY2xhc3M9XCJ3cmFwcGVyLXhzIGJsb2NrXCIgOmNsYXNzPVwibGlua0NsYXNzXCIgQGNsaWNrPVwib25DbGlja0xpbmtcIj5cbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9hPlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ2l0ZW1JZCcsICdsaW5rJywgJ2xpbmtDbGFzcycsICdsaW5rQ2xpY2snXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgICAgICBtc2c6ICdoZWxsbyB2dWUnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHt9LFxuICAgICAgICBjb21wb25lbnRzOiB7fSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCBSZWFkeS4nKTtcblxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge30sXG4gICAgICAgIGV2ZW50czoge30sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uQ2xpY2tMaW5rKCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uQ2xpY2tMaW5rJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlua0NsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlua0NsaWNrKHRoaXMuaXRlbUlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBUYWJCYXJJdGVtLnZ1ZT82YWU0NjA3NCIsIjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwid3JhcHBlci1tZFwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkZXIgd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtcGlsbHMgbmF2LWp1c3RpZmllZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgOmNsYXNzPVwieydhY3RpdmUnOmlzU2VsZWN0ZWRNZW51SXRlbSgncHJvZmlsZScpfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInJvdXRlUHJvZmlsZVwiIEBjbGljay5uYXRpdmU9XCJzZWxlY3RNZW51SXRlbSgncHJvZmlsZScpXCI+UHJvZmlsZTwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSA6Y2xhc3M9XCJ7J2FjdGl2ZSc6aXNTZWxlY3RlZE1lbnVJdGVtKCdwb3N0cycpfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInJvdXRlUG9zdHNcIiBAY2xpY2submF0aXZlPVwic2VsZWN0TWVudUl0ZW0oJ3Bvc3RzJylcIj5Qb3N0czwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cblxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ3VzZXJfaWQnLFxuICAgICAgICBdLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgICAgbXNnOiAnaGVsbG8gdnVlJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRfbWVudV9pdGVtOiAncHJvZmlsZScsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICByb3V0ZUlkKCl7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcm91dGUucGFyYW1zLmlkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXJfaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1cnJlbnRSb3V0ZSgpe1xuICAgICAgICAgICAgICAgIHJldHVybiBcIi91c2VyL1wiICsgdGhpcy5yb3V0ZUlkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvdXRlUHJvZmlsZSgpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRSb3V0ZSArIFwiL3Byb2ZpbGVcIjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByb3V0ZVBvc3RzKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFJvdXRlICsgXCIvcG9zdHNcIjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxuICAgICAgICB3YXRjaDoge30sXG4gICAgICAgIGV2ZW50czoge30sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgUmVhZHkuJyk7XG5cbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveWVkKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IERlc3Ryb3llZC4nKTtcblxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBpc1NlbGVjdGVkTWVudUl0ZW0oaXRlbSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRfbWVudV9pdGVtID09IGl0ZW07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0TWVudUl0ZW0oaXRlbSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdE1lbnVJdGVtJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9tZW51X2l0ZW0gPSBpdGVtO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVXNlckRldGFpbC52dWU/MTU5OTY4ODQiLCI8c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICAgPGI+UG9zdHM8L2I+IGZvciBVc2VyIHt7IHJvdXRlSWQgfX1cbiAgICAgICAgPHByZT57eyBpdGVtIH19PC9wcmU+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiBbXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgICAgIG1zZzogJ2hlbGxvIHZ1ZScsXG4gICAgICAgICAgICAgICAgaXRlbToge30sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICByb3V0ZUlkKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxuICAgICAgICB3YXRjaDoge30sXG4gICAgICAgIGV2ZW50czoge30sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgUmVhZHkuJyk7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdGVuQnVzKCk7XG4gICAgICAgICAgICB0aGlzLm9uQXBwUmVhZHkoKTtcblxuICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveWVkKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IERlc3Ryb3llZC4nKTtcbiAgICAgICAgICAgIHRoaXMuQXBwVGFiQmFyU2V0U2hvd0FwcFRhYkJhcih0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgbGlzdGVuQnVzKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudE9uKFwiQXBwUmVhZHlcIiwgdGhpcy5vbkFwcFJlYWR5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50T24oXCJBcHBIZWFkZXJfb25DbGlja05hdkJ1dHRvbkxlZnRcIiwgdGhpcy5vbkNsaWNrTmF2QnV0dG9uTGVmdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudE9uKFwiQXBwSGVhZGVyX29uQ2xpY2tOYXZCdXR0b25SaWdodFwiLCB0aGlzLm9uQ2xpY2tOYXZCdXR0b25SaWdodCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25BcHBSZWFkeSgpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkFwcFJlYWR5Jyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLkFwcEhlYWRlclNldFRpdGxlKCdQb3N0cycpO1xuICAgICAgICAgICAgICAgIHRoaXMuQXBwSGVhZGVyU2V0TmF2QnV0dG9uTGVmdCgnYmFjaycpO1xuICAgICAgICAgICAgICAgIHRoaXMuQXBwVGFiQmFyU2V0U2hvd0FwcFRhYkJhcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5BcHBIZWFkZXJTZXROYXZCdXR0b25SaWdodChudWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLkFwcFRhYkJhclNlbGVjdFRhYkJhckl0ZW0obnVsbCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbGlja05hdkJ1dHRvbkxlZnQoKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb25DbGlja05hdkJ1dHRvbkxlZnQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIuZ28oLTEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2tOYXZCdXR0b25SaWdodCgpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkNsaWNrTmF2QnV0dG9uUmlnaHQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmZXRjaERhdGEoKXtcblxuICAgICAgICAgICAgICAgIHRoaXMuJGFwaS5nZXQoJy91c2Vycy8nICsgdGhpcy5yb3V0ZUlkLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSkuYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gUG9zdHMudnVlPzdlNTllMzgwIiwiPHN0eWxlIHNjb3BlZD5cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxiPlByb2ZpbGU8L2I+IGZvciBVc2VyIHt7IHJvdXRlSWQgfX1cbiAgICAgICAgPHByZT57eyBpdGVtIH19PC9wcmU+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiBbXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgICAgIG1zZzogJ2hlbGxvIHZ1ZScsXG4gICAgICAgICAgICAgICAgaXRlbToge30sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICByb3V0ZUlkKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxuICAgICAgICB3YXRjaDoge30sXG4gICAgICAgIGV2ZW50czoge30sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgUmVhZHkuJyk7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdGVuQnVzKCk7XG4gICAgICAgICAgICB0aGlzLm9uQXBwUmVhZHkoKTtcblxuICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveWVkKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IERlc3Ryb3llZC4nKTtcbiAgICAgICAgICAgIHRoaXMuQXBwVGFiQmFyU2V0U2hvd0FwcFRhYkJhcih0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgbGlzdGVuQnVzKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudE9uKFwiQXBwUmVhZHlcIiwgdGhpcy5vbkFwcFJlYWR5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50T24oXCJBcHBIZWFkZXJfb25DbGlja05hdkJ1dHRvbkxlZnRcIiwgdGhpcy5vbkNsaWNrTmF2QnV0dG9uTGVmdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudE9uKFwiQXBwSGVhZGVyX29uQ2xpY2tOYXZCdXR0b25SaWdodFwiLCB0aGlzLm9uQ2xpY2tOYXZCdXR0b25SaWdodCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25BcHBSZWFkeSgpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkFwcFJlYWR5Jyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLkFwcEhlYWRlclNldFRpdGxlKCdQcm9maWxlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5BcHBIZWFkZXJTZXROYXZCdXR0b25MZWZ0KCdiYWNrJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5BcHBUYWJCYXJTZXRTaG93QXBwVGFiQmFyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLkFwcEhlYWRlclNldE5hdkJ1dHRvblJpZ2h0KG51bGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuQXBwVGFiQmFyU2VsZWN0VGFiQmFySXRlbShudWxsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrTmF2QnV0dG9uTGVmdCgpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkNsaWNrTmF2QnV0dG9uTGVmdCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5nbygtMSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbGlja05hdkJ1dHRvblJpZ2h0KCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uQ2xpY2tOYXZCdXR0b25SaWdodCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZldGNoRGF0YSgpe1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBpLmdldCgnL3VzZXJzLycgKyB0aGlzLnJvdXRlSWQsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSkuYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBQcm9maWxlLnZ1ZT8zOWUxMmNkNiIsImV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbXB1dGVkOiB7fSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIEFwcEhlYWRlclNldFRpdGxlKHRpdGxlKXtcbiAgICAgICAgICAgIHRoaXMuYnVzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIH0sXG4gICAgICAgIEFwcFRhYkJhclNldFNob3dBcHBUYWJCYXIoaXNTaG93KXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRFbWl0KFwiQXBwVGFiQmFyX3NldFNob3dBcHBUYWJCYXJcIiwgaXNTaG93KTtcbiAgICAgICAgfSxcbiAgICAgICAgQXBwVGFiQmFyU2VsZWN0VGFiQmFySXRlbShpbmRleCl7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RW1pdChcIkFwcFRhYkJhcl9zZWxlY3RUYWJCYXJJdGVtXCIsIGluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgQXBwSGVhZGVyU2V0TmF2QnV0dG9uTGVmdChjbGFzc05hbWUpe1xuICAgICAgICAgICAgdGhpcy5ldmVudEVtaXQoXCJBcHBIZWFkZXJfc2V0TmF2QnV0dG9uTGVmdFwiLCBjbGFzc05hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBBcHBIZWFkZXJTZXROYXZCdXR0b25SaWdodChjbGFzc05hbWUpe1xuICAgICAgICAgICAgdGhpcy5ldmVudEVtaXQoXCJBcHBIZWFkZXJfc2V0TmF2QnV0dG9uUmlnaHRcIiwgY2xhc3NOYW1lKTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvbW9iaWxlX2FwcC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICByb3V0ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICAgICAgY29tcG9uZW50OiByZXF1aXJlKCcuL2NvbXBvbmVudHMvbW9iaWxlL21haW4vQXBwLnZ1ZScpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnL3VzZXIvOmlkJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogcmVxdWlyZSgnLi9jb21wb25lbnRzL21vYmlsZS91c2VyL1VzZXJEZXRhaWwudnVlJyksXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdCBwYXRoIHdpbGwgcmVkaXJlY3QgdG8gbGlzdFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3Q6IHRvID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy91c2Vycyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ3Byb2ZpbGUnLFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHJlcXVpcmUoJy4vY29tcG9uZW50cy9tb2JpbGUvdXNlci9kZXRhaWwvUHJvZmlsZS52dWUnKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ3Bvc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiByZXF1aXJlKCcuL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvZGV0YWlsL1Bvc3RzLnZ1ZScpLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIF0sXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2JpbGVfcm91dGVyLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiQXBwSGVhZGVyLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NTdiYWU1ZSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9zZWN0aW9uL0FwcEhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJQcm9maWxlLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00ODhlNmU0ZiZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9kZXRhaWwvUHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDE5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJBcHAudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjZTEwMDFiJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDE5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJIb21lLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01ZjZlOGJlZiZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvaG9tZS9Ib21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIkFwcFRhYkJhci52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2I1NWE4ZTImc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi9BcHBUYWJCYXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiUG9zdHMudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWE3YzhmMjBlJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS91c2VyL2RldGFpbC9Qb3N0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJVc2VyRGV0YWlsLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1kNjFiMzNjMCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9Vc2VyRGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIlRhYkJhckl0ZW0udnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWU5ZTA4MTVjJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vdGFiYmFyL1RhYkJhckl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSAxOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTVmNmU4YmVmJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Ib21lLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Ib21lLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTVmNmU4YmVmIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0hvbWUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTVmNmU4YmVmXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvbGliZXJuL0NvZGUvc29tZWxpbmUtc3RhcnRlci1tYXN0ZXIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9ob21lL0hvbWUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gSG9tZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWY2ZThiZWZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ZjZlOGJlZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL2hvbWUvSG9tZS52dWVcbi8vIG1vZHVsZSBpZCA9IDIwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNWNlMTAwMWImc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FwcC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQXBwLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTVjZTEwMDFiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FwcC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtNWNlMTAwMWJcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9saWJlcm4vQ29kZS9zb21lbGluZS1zdGFydGVyLW1hc3Rlci9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vQXBwLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEFwcC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWNlMTAwMWJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01Y2UxMDAxYlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi00NTdiYWU1ZSZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwSGVhZGVyLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9BcHBIZWFkZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDU3YmFlNWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQXBwSGVhZGVyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi00NTdiYWU1ZVwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2xpYmVybi9Db2RlL3NvbWVsaW5lLXN0YXJ0ZXItbWFzdGVyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9zZWN0aW9uL0FwcEhlYWRlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBBcHBIZWFkZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ1N2JhZTVlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDU3YmFlNWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vQXBwSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi03YjU1YThlMiZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwVGFiQmFyLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9BcHBUYWJCYXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtN2I1NWE4ZTIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQXBwVGFiQmFyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi03YjU1YThlMlwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2xpYmVybi9Db2RlL3NvbWVsaW5lLXN0YXJ0ZXItbWFzdGVyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9zZWN0aW9uL0FwcFRhYkJhci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBBcHBUYWJCYXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdiNTVhOGUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2I1NWE4ZTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vQXBwVGFiQmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1lOWUwODE1YyZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFiQmFySXRlbS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVGFiQmFySXRlbS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1lOWUwODE1YyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9UYWJCYXJJdGVtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi1lOWUwODE1Y1wiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2xpYmVybi9Db2RlL3NvbWVsaW5lLXN0YXJ0ZXItbWFzdGVyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9zZWN0aW9uL3RhYmJhci9UYWJCYXJJdGVtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFRhYkJhckl0ZW0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWU5ZTA4MTVjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZTllMDgxNWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vdGFiYmFyL1RhYkJhckl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSAyMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWQ2MWIzM2MwJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Vc2VyRGV0YWlsLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Vc2VyRGV0YWlsLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWQ2MWIzM2MwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1VzZXJEZXRhaWwudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LWQ2MWIzM2MwXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvbGliZXJuL0NvZGUvc29tZWxpbmUtc3RhcnRlci1tYXN0ZXIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS91c2VyL1VzZXJEZXRhaWwudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVXNlckRldGFpbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZDYxYjMzYzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1kNjFiMzNjMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvVXNlckRldGFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtYTdjOGYyMGUmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Bvc3RzLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Qb3N0cy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1hN2M4ZjIwZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Qb3N0cy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtYTdjOGYyMGVcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9saWJlcm4vQ29kZS9zb21lbGluZS1zdGFydGVyLW1hc3Rlci9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvZGV0YWlsL1Bvc3RzLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFBvc3RzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1hN2M4ZjIwZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWE3YzhmMjBlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9kZXRhaWwvUG9zdHMudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTQ4OGU2ZTRmJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Qcm9maWxlLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Qcm9maWxlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTQ4OGU2ZTRmIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Byb2ZpbGUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTQ4OGU2ZTRmXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvbGliZXJuL0NvZGUvc29tZWxpbmUtc3RhcnRlci1tYXN0ZXIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS91c2VyL2RldGFpbC9Qcm9maWxlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFByb2ZpbGUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ4OGU2ZTRmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDg4ZTZlNGZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS91c2VyL2RldGFpbC9Qcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnaGVhZGVyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFwcC1oZWFkZXIgbmF2YmFyIGJveC1zaGFkb3cgYmctZGFya1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiaGVhZGVyXCIsXG4gICAgICBcInJvbGVcIjogXCJtZW51XCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5hdmJhci1oZWFkZXIgdGV4dC1jZW50ZXIgZGtcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJmbG9hdFwiOiBcIm5vbmVcIixcbiAgICAgIFwid2lkdGhcIjogXCJhdXRvXCJcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtcmlnaHQgZGtcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ub25DbGlja05hdkJ1dHRvblJpZ2h0XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgY2xhc3M6IF92bS5uYXZCdXR0b25SaWdodENsYXNzXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0IGRrXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9uQ2xpY2tOYXZCdXR0b25MZWZ0XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgY2xhc3M6IF92bS5uYXZCdXR0b25MZWZ0Q2xhc3NcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJuYXZiYXItYnJhbmQgdGV4dC1sdCBmb250LW5vcm1hbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uYnVzLnRpdGxlKSArIFwiXFxuICAgICAgICBcIildKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDU3YmFlNWVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTQ1N2JhZTVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi9BcHBIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAyMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid3JhcHBlclwiXG4gIH0sIFtfYygnYicsIFtfdm0uX3YoXCJQcm9maWxlXCIpXSksIF92bS5fdihcIiBmb3IgVXNlciBcIiArIF92bS5fcyhfdm0ucm91dGVJZCkgKyBcIlxcbiAgICBcIiksIF9jKCdwcmUnLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbSkpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00ODhlNmU0ZlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNDg4ZTZlNGYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvdXNlci9kZXRhaWwvUHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDIxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3cmFwcGVyLW1kXCJcbiAgfSwgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgYnRuLWxnIHItMnhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiamF2YXNjcmlwdDo7XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5vbkNsaWNrQnV0dG9uVXNlckRldGFpbFxuICAgIH1cbiAgfSwgW192bS5fdihcIlNob3cgVXNlciBEZXRhaWxcIildKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVjZTEwMDFiXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01Y2UxMDAxYiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDIyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3cmFwcGVyXCJcbiAgfSwgW19jKCdwJywgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgYnRuLWxnIHItMnhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiamF2YXNjcmlwdDo7XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5vbkNsaWNrRGVtb0J1dHRvbjFcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBBbGVydFxcbiAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9jayBidG4tbGcgci0yeFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCJqYXZhc2NyaXB0OjtcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9uQ2xpY2tEZW1vQnV0dG9uMlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIEFjdGlvbiBTaGVldFxcbiAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1ibG9jayBidG4tbGcgci0yeFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCJqYXZhc2NyaXB0OjtcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9uQ2xpY2tEZW1vQnV0dG9uM1xuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFRvcHRpcFxcbiAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXIgYnRuLWJsb2NrIGJ0bi1sZyByLTJ4XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcImphdmFzY3JpcHQ6O1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ub25DbGlja0RlbW9CdXR0b240XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgQ2FuY2VsXFxuICAgICAgICBcIildKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNWY2ZThiZWZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTVmNmU4YmVmIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL2hvbWUvSG9tZS52dWVcbi8vIG1vZHVsZSBpZCA9IDIyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2Zvb3RlcicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uU2hvd0FwcFRhYkJhciksXG4gICAgICBleHByZXNzaW9uOiBcIlNob3dBcHBUYWJCYXJcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImFwcC1mb290ZXIgbmF2YmFyIG5hdmJhci1maXhlZC1ib3R0b20gYmctbGlnaHQgbHQgYi10XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTIgaGlkZGVuLXhzXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLThcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3LXhsIHctYXV0by14cyBjZW50ZXItYmxvY2tcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXAgYnRuLWdyb3VwLWp1c3RpZmllZCB0ZXh0LWNlbnRlciB0ZXh0LXNtXCJcbiAgfSwgWyhfdm0uaXNTZWxlY3RUYWJCYXJJdGVtKDApKSA/IFtfYygnc2wtdGFiLWJhci1pdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxpbmtcIjogXCJqYXZhc2NyaXB0OjtcIlxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrIHRleHQtbWQgbS10LXhzIGljb24tdXNlciB0ZXh0LXByaW1hcnlcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC14cyB0ZXh0LXByaW1hcnlcIlxuICB9LCBbX3ZtLl92KFwiQWNjb3VudFwiKV0pXSldIDogW19jKCdzbC10YWItYmFyLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGlua1wiOiBcIi9tL1wiLFxuICAgICAgXCJpdGVtLWlkXCI6IFwiMFwiLFxuICAgICAgXCJsaW5rLWNsaWNrXCI6IF92bS5vbkNsaWNrVGFiQmFySXRlbSgwKVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrIHRleHQtbWQgbS10LXhzIGljb24tdXNlclwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzXCJcbiAgfSwgW192bS5fdihcIkFjY291bnRcIildKV0pXSwgX3ZtLl92KFwiIFwiKSwgKF92bS5pc1NlbGVjdFRhYkJhckl0ZW0oMSkpID8gW19jKCdzbC10YWItYmFyLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGlua1wiOiBcImphdmFzY3JpcHQ6O1wiXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgdGV4dC1tZCBtLXQteHMgaWNvbi1jbG91ZC11cGxvYWQgdGV4dC1wcmltYXJ5XCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQteHMgdGV4dC1wcmltYXJ5XCJcbiAgfSwgW192bS5fdihcIlVwbG9hZFwiKV0pXSldIDogW19jKCdzbC10YWItYmFyLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGlua1wiOiBcIi9tL2FwcFwiLFxuICAgICAgXCJpdGVtLWlkXCI6IFwiMVwiLFxuICAgICAgXCJsaW5rLWNsaWNrXCI6IF92bS5vbkNsaWNrVGFiQmFySXRlbVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrIHRleHQtbWQgbS10LXhzIGljb24tY2xvdWQtdXBsb2FkXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQteHNcIlxuICB9LCBbX3ZtLl92KFwiVXBsb2FkXCIpXSldKV0sIF92bS5fdihcIiBcIiksIChfdm0uaXNTZWxlY3RUYWJCYXJJdGVtKDIpKSA/IFtfYygnc2wtdGFiLWJhci1pdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxpbmtcIjogXCJqYXZhc2NyaXB0OjtcIlxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrIHRleHQtbWQgbS10LXhzIGljb24tY2xvY2sgdGV4dC1wcmltYXJ5XCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQteHMgdGV4dC1wcmltYXJ5XCJcbiAgfSwgW192bS5fdihcIldhdGNoXCIpXSldKV0gOiBbX2MoJ3NsLXRhYi1iYXItaXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsaW5rXCI6IFwiL20vYXBwXCIsXG4gICAgICBcIml0ZW0taWRcIjogXCIyXCIsXG4gICAgICBcImxpbmstY2xpY2tcIjogX3ZtLm9uQ2xpY2tUYWJCYXJJdGVtXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgdGV4dC1tZCBtLXQteHMgaWNvbi1jbG9ja1wiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzXCJcbiAgfSwgW192bS5fdihcIldhdGNoXCIpXSldKV0sIF92bS5fdihcIiBcIiksIChfdm0uaXNTZWxlY3RUYWJCYXJJdGVtKDMpKSA/IFtfYygnc2wtdGFiLWJhci1pdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxpbmtcIjogXCJqYXZhc2NyaXB0OjtcIlxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrIHRleHQtbWQgbS10LXhzIGljb24tYmFnIHRleHQtcHJpbWFyeVwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzIHRleHQtcHJpbWFyeVwiXG4gIH0sIFtfdm0uX3YoXCJTaG9wcGluZ1wiKV0pXSldIDogW19jKCdzbC10YWItYmFyLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGlua1wiOiBcIi9tL2FwcFwiLFxuICAgICAgXCJpdGVtLWlkXCI6IFwiM1wiLFxuICAgICAgXCJsaW5rLWNsaWNrXCI6IF92bS5vbkNsaWNrVGFiQmFySXRlbVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrIHRleHQtbWQgbS10LXhzIGljb24tYmFnXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQteHNcIlxuICB9LCBbX3ZtLl92KFwiU2hvcHBpbmdcIildKV0pXV0sIDIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tMiBoaWRkZW4teHNcIlxuICB9KV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtN2I1NWE4ZTJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTdiNTVhOGUyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vc2VjdGlvbi9BcHBUYWJCYXIudnVlXG4vLyBtb2R1bGUgaWQgPSAyMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid3JhcHBlclwiXG4gIH0sIFtfYygnYicsIFtfdm0uX3YoXCJQb3N0c1wiKV0pLCBfdm0uX3YoXCIgZm9yIFVzZXIgXCIgKyBfdm0uX3MoX3ZtLnJvdXRlSWQpICsgXCJcXG4gICAgXCIpLCBfYygncHJlJywgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0pKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYTdjOGYyMGVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWE3YzhmMjBlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvZGV0YWlsL1Bvc3RzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIndyYXBwZXItbWRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGVyIHdyYXBwZXJcIlxuICB9LCBbX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5hdiBuYXYtcGlsbHMgbmF2LWp1c3RpZmllZFwiXG4gIH0sIFtfYygnbGknLCB7XG4gICAgY2xhc3M6IHtcbiAgICAgICdhY3RpdmUnOiBfdm0uaXNTZWxlY3RlZE1lbnVJdGVtKCdwcm9maWxlJylcbiAgICB9XG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjogX3ZtLnJvdXRlUHJvZmlsZVxuICAgIH0sXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zZWxlY3RNZW51SXRlbSgncHJvZmlsZScpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUHJvZmlsZVwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ2FjdGl2ZSc6IF92bS5pc1NlbGVjdGVkTWVudUl0ZW0oJ3Bvc3RzJylcbiAgICB9XG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjogX3ZtLnJvdXRlUG9zdHNcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc2VsZWN0TWVudUl0ZW0oJ3Bvc3RzJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJQb3N0c1wiKV0pXSwgMSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLXZpZXcnKV0sIDEpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZDYxYjMzYzBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWQ2MWIzM2MwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvVXNlckRldGFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IDIyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXBcIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid3JhcHBlci14cyBibG9ja1wiLFxuICAgIGNsYXNzOiBfdm0ubGlua0NsYXNzLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogX3ZtLmxpbmtcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5vbkNsaWNrTGlua1xuICAgIH1cbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWU5ZTA4MTVjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1lOWUwODE1YyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vdGFiYmFyL1RhYkJhckl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSAyMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NTdiYWU1ZSZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwSGVhZGVyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIyZjczZjk3Y1wiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDU3YmFlNWUmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FwcEhlYWRlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ1N2JhZTVlJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHBIZWFkZXIudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NTdiYWU1ZSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tb2JpbGUvbWFpbi9zZWN0aW9uL0FwcEhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDIzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ4OGU2ZTRmJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Qcm9maWxlLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI1NmVkNmJkYVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDg4ZTZlNGYmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Byb2ZpbGUudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00ODhlNmU0ZiZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUHJvZmlsZS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ4OGU2ZTRmJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS91c2VyL2RldGFpbC9Qcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNlMTAwMWImc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FwcC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNDg2ZDI2OGRcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjZTEwMDFiJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHAudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2UxMDAxYiZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNlMTAwMWImc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL21haW4vQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWY2ZThiZWYmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0hvbWUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjZkMjZkM2M3XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01ZjZlOGJlZiZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSG9tZS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVmNmU4YmVmJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Ib21lLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWY2ZThiZWYmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL2hvbWUvSG9tZS52dWVcbi8vIG1vZHVsZSBpZCA9IDIzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdiNTVhOGUyJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHBUYWJCYXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjdiN2IyYjNhXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03YjU1YThlMiZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwVGFiQmFyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2I1NWE4ZTImc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FwcFRhYkJhci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdiNTVhOGUyJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vQXBwVGFiQmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTdjOGYyMGUmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Bvc3RzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJlMDg3YWFmYVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTdjOGYyMGUmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Bvc3RzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTdjOGYyMGUmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Bvc3RzLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTdjOGYyMGUmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvZGV0YWlsL1Bvc3RzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZDYxYjMzYzAmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VzZXJEZXRhaWwudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjU5MTJhMTZmXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1kNjFiMzNjMCZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVXNlckRldGFpbC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWQ2MWIzM2MwJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Vc2VyRGV0YWlsLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZDYxYjMzYzAmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlL3VzZXIvVXNlckRldGFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IDI0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWU5ZTA4MTVjJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJCYXJJdGVtLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI3NmQ0YjlhMFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZTllMDgxNWMmc2NvcGVkPXRydWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYkJhckl0ZW0udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1lOWUwODE1YyZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFiQmFySXRlbS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWU5ZTA4MTVjJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS9tYWluL3NlY3Rpb24vdGFiYmFyL1RhYkJhckl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSAyNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==