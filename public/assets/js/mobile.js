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

var listToStyles = __webpack_require__(24)

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
/* 5 */,
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_autosize__ = __webpack_require__(25);
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


window._ = __webpack_require__(27);
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

window.Vue = __webpack_require__(30);
window.Vuex = __webpack_require__(31);
window.VueRouter = __webpack_require__(29);
__webpack_require__(28);
__webpack_require__(10);

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(26);

window.axios.defaults.headers.common = {
  'X-CSRF-TOKEN': window.Laravel.csrfToken,
  'X-Requested-With': 'XMLHttpRequest',
  // 'Accept': 'application/x.someline.v1+json',
  'Accept-Language': Someline.locale
};

Vue.prototype.$http = window.axios;

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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony default export */ __webpack_exports__["a"] = {
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

/***/ }),
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(21),
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(23)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(22),
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(17);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("41ac8694", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-db7829ae&scoped=true!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./autosize-textarea.vue", function() {
     var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-db7829ae&scoped=true!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./autosize-textarea.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 24 */
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
/* 149 */,
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_user__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_jquery__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_tools__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_bus__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_mobile_app__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mobile_router__ = __webpack_require__(186);
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(8);

// Vue Directives
Vue.directive('focus', __webpack_require__(9));

// Vue Filters
Vue.filter('nl2br', __webpack_require__(11));

// Vue Mixins






Vue.mixin(__WEBPACK_IMPORTED_MODULE_0__mixins_user__["a" /* default */]);
Vue.mixin(__WEBPACK_IMPORTED_MODULE_1__mixins_jquery__["a" /* default */]);
Vue.mixin(__WEBPACK_IMPORTED_MODULE_2__mixins_tools__["a" /* default */]);
Vue.mixin(__WEBPACK_IMPORTED_MODULE_3__mixins_bus__["a" /* default */]);
Vue.mixin(__WEBPACK_IMPORTED_MODULE_4__mixins_store__["a" /* default */]);
Vue.mixin(__WEBPACK_IMPORTED_MODULE_5__mixins_mobile_app__["a" /* default */]);

// Vue Components
Vue.component('autosize-textarea', __webpack_require__(20));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('sl-app-header', __webpack_require__(206));
Vue.component('sl-app-tab-bar', __webpack_require__(207));

Vue.component('example', __webpack_require__(19));
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
/* WEBPACK VAR INJECTION */(function($) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    http: {
        root: '/api',
        headers: {
            Accept: 'application/x.someline.v1+json'
        }
    },
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

            var resource = this.$resource('users', {
                //                    include: ''
            });

            // get item
            resource.get({}).then(function (response) {
                console.log(response);
                _this.items = response.data.data;
            });
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

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
    http: {
        root: '/api',
        headers: {
            Accept: 'application/x.someline.v1+json'
        }
    },
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

            var resource = this.$resource('users', {
                //                    include: ''
            });

            // get item
            resource.get({}).then(function (response) {
                console.log(response);
                _this.items = response.data.data;
            });
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
    http: {
        root: '/api',
        headers: {
            Accept: 'application/x.someline.v1+json'
        }
    },
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
    http: {
        root: '/api',
        headers: {
            Accept: 'application/x.someline.v1+json'
        }
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
    http: {
        root: '/api',
        headers: {
            Accept: 'application/x.someline.v1+json'
        }
    },
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
    http: {
        root: '/api',
        headers: {
            Accept: 'application/x.someline.v1+json'
        }
    },
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
    http: {
        root: '/api',
        headers: {
            Accept: 'application/x.someline.v1+json'
        }
    },
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

            var resource = this.$resource('users{/id}', {
                //                    include: ''
            });

            // get item
            resource.get({
                id: this.routeId
            }).then(function (response) {
                console.log(response);
                _this.item = response.data.data;
            });
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
    http: {
        root: '/api',
        headers: {
            Accept: 'application/x.someline.v1+json'
        }
    },
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

            var resource = this.$resource('users{/id}', {
                //                    include: ''
            });

            // get item
            resource.get({
                id: this.routeId
            }).then(function (response) {
                console.log(response);
                _this.item = response.data.data;
            });
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
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 196 */,
/* 197 */,
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n", ""]);

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
var update = __webpack_require__(3)("0df20acc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-457bae5e&scoped=true!./../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppHeader.vue", function() {
     var newContent = require("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-457bae5e&scoped=true!./../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppHeader.vue");
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
var update = __webpack_require__(3)("2a85fab1", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-488e6e4f&scoped=true!./../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Profile.vue", function() {
     var newContent = require("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-488e6e4f&scoped=true!./../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Profile.vue");
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
var update = __webpack_require__(3)("e429132a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5ce1001b&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5ce1001b&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
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
var update = __webpack_require__(3)("511b00ae", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5f6e8bef&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5f6e8bef&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
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
var update = __webpack_require__(3)("450e2c58", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7b55a8e2&scoped=true!./../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppTabBar.vue", function() {
     var newContent = require("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7b55a8e2&scoped=true!./../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppTabBar.vue");
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
var update = __webpack_require__(3)("906f2abe", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a7c8f20e&scoped=true!./../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Posts.vue", function() {
     var newContent = require("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a7c8f20e&scoped=true!./../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Posts.vue");
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
var update = __webpack_require__(3)("1bf25bd1", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d61b33c0&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserDetail.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d61b33c0&scoped=true!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserDetail.vue");
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
var update = __webpack_require__(3)("cb8cfadc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e9e0815c&scoped=true!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TabBarItem.vue", function() {
     var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e9e0815c&scoped=true!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TabBarItem.vue");
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

module.exports = __webpack_require__(150);


/***/ })
],[244]);