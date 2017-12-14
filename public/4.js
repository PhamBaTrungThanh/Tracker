webpackJsonp([4],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Base.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tiny_cookie__ = __webpack_require__("./node_modules/tiny-cookie/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tiny_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tiny_cookie__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    computed: _extends({
        pageTitle: function pageTitle() {
            return this.$route.meta.title;
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapState"])(['user'])),
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {

        console.log("Getting token from cookie");
        var cookieToken = Object(__WEBPACK_IMPORTED_MODULE_1_tiny_cookie__["getCookie"])('cookie-token');
        if (!cookieToken) {
            console.error("Cookies's empty, proceed to login");
            next({ name: "login" });
        } else {
            console.info("Token found from cookies");

            // do a call to ./user
            axios.get('http://tracker.dev/api/v1/user', {
                headers: {
                    'Authorization': cookieToken
                }
            }).then(function (response) {
                console.info("Token is legit");
                axios.defaults.headers.common['Authorization'] = cookieToken;
                next(function (vm) {
                    vm.$store.commit('SET_USER', response.data.data);
                    vm.$store.commit('SET_AUTHORIZATION_TOKEN', cookieToken);
                });
            }).catch(function (error) {
                if (error.response.status == 401) {
                    console.error("Token ilegal, proceed to login");
                    next({ name: "login" });
                } else {
                    console.log(error);
                }
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/tiny-cookie/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;
exports.removeCookie = exports.setRawCookie = exports.getRawCookie = exports.setCookie = exports.getAllCookies = exports.getCookie = exports.isCookieEnabled = exports.remove = exports.setRaw = exports.getRaw = exports.set = exports.getAll = exports.get = exports.isEnabled = undefined;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _util = __webpack_require__("./node_modules/tiny-cookie/lib/util.js");

// Check if the browser cookie is enabled.
function isEnabled() {
  var key = '@key@';
  var value = '1';
  var re = new RegExp('(?:^|; )' + key + '=' + value + '(?:;|$)');

  document.cookie = key + '=' + value;

  var enabled = re.test(document.cookie);

  if (enabled) {
    // eslint-disable-next-line
    remove(key);
  }

  return enabled;
}

// Get the cookie value by key.
function get(key) {
  var decoder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : decodeURIComponent;

  if (typeof key !== 'string' || !key) {
    return null;
  }

  var reKey = new RegExp('(?:^|; )' + (0, _util.escapeRe)(key) + '(?:=([^;]*))?(?:;|$)');
  var match = reKey.exec(document.cookie);

  if (match === null) {
    return null;
  }

  return typeof decoder === 'function' ? decoder(match[1]) : match[1];
}

// The all cookies
function getAll() {
  var decoder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : decodeURIComponent;

  var reKey = /(?:^|; )([^=]+?)(?:=([^;]*))?(?:;|$)/g;
  var cookies = {};
  var match = void 0;

  /* eslint-disable no-cond-assign */
  while (match = reKey.exec(document.cookie)) {
    reKey.lastIndex = match.index + match.length - 1;
    cookies[match[1]] = typeof decoder === 'function' ? decoder(match[2]) : match[2];
  }

  return cookies;
}

// Set a cookie.
function set(key, value) {
  var encoder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : encodeURIComponent;
  var attrs = arguments[3];

  if ((typeof encoder === 'undefined' ? 'undefined' : _typeof(encoder)) === 'object' && encoder !== null) {
    /* eslint-disable no-param-reassign */
    attrs = encoder;
    encoder = encodeURIComponent;
    /* eslint-enable no-param-reassign */
  }
  var attrsStr = (0, _util.convert)(attrs || {});
  var valueStr = typeof encoder === 'function' ? encoder(value) : value;
  var newCookie = key + '=' + valueStr + attrsStr;
  document.cookie = newCookie;
}

// Remove a cookie by the specified key.
function remove(key, options) {
  var opts = { expires: -1 };

  if (options && options.domain) {
    opts.domain = options.domain;
  }

  return set(key, 'a', opts);
}

// Get the cookie's value without decoding.
function getRaw(key) {
  return get(key, null);
}

// Set a cookie without encoding the value.
function setRaw(key, value, opts) {
  return set(key, value, null, opts);
}

exports.isEnabled = isEnabled;
exports.get = get;
exports.getAll = getAll;
exports.set = set;
exports.getRaw = getRaw;
exports.setRaw = setRaw;
exports.remove = remove;
exports.isCookieEnabled = isEnabled;
exports.getCookie = get;
exports.getAllCookies = getAll;
exports.setCookie = set;
exports.getRawCookie = getRaw;
exports.setRawCookie = setRaw;
exports.removeCookie = remove;

/***/ }),

/***/ "./node_modules/tiny-cookie/lib/util.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

// Escape special characters.
function escapeRe(str) {
  return str.replace(/[.*+?^$|[\](){}\\-]/g, '\\$&');
}

// Return a future date by the given string.
function computeExpires(str) {
  var lastCh = str.charAt(str.length - 1);
  var value = parseInt(str, 10);
  var expires = new Date();

  switch (lastCh) {
    case 'Y':
      expires.setFullYear(expires.getFullYear() + value);break;
    case 'M':
      expires.setMonth(expires.getMonth() + value);break;
    case 'D':
      expires.setDate(expires.getDate() + value);break;
    case 'h':
      expires.setHours(expires.getHours() + value);break;
    case 'm':
      expires.setMinutes(expires.getMinutes() + value);break;
    case 's':
      expires.setSeconds(expires.getSeconds() + value);break;
    default:
      expires = new Date(str);
  }

  return expires;
}

// Convert an object to a cookie option string.
function convert(opts) {
  var res = '';

  // eslint-disable-next-line
  for (var key in opts) {
    if (hasOwn(opts, key)) {
      if (/^expires$/i.test(key)) {
        var expires = opts[key];

        if ((typeof expires === 'undefined' ? 'undefined' : _typeof(expires)) !== 'object') {
          expires += typeof expires === 'number' ? 'D' : '';
          expires = computeExpires(expires);
        }
        res += ';' + key + '=' + expires.toUTCString();
      } else if (/^secure$/.test(key)) {
        if (opts[key]) {
          res += ';' + key;
        }
      } else {
        res += ';' + key + '=' + opts[key];
      }
    }
  }

  if (!hasOwn(opts, 'path')) {
    res += ';path=/';
  }

  return res;
}

exports.hasOwn = hasOwn;
exports.escapeRe = escapeRe;
exports.computeExpires = computeExpires;
exports.convert = convert;

/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
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
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-73672448\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Base.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrapper" }, [
    _c("div", { staticClass: "row no-gutters" }, [
      _c("div", { attrs: { id: "sidebar" } }, [
        _c("div", { staticClass: "userinfo" }, [
          _c("div", { staticClass: "user-avatar" }),
          _vm._v(" "),
          _c("h5", { staticClass: "text-center text-light" }, [
            _vm._v(_vm._s(_vm.user.username))
          ])
        ]),
        _vm._v(" "),
        _c("div", { attrs: { role: "sections" } }, [
          _c(
            "ul",
            [
              _c("router-link", { attrs: { tag: "li", to: "/dashboard" } }, [
                _c("a", [_vm._v("Thông báo")])
              ]),
              _vm._v(" "),
              _c("router-link", { attrs: { tag: "li", to: "/works" } }, [
                _c("a", [_vm._v("Công trường")])
              ]),
              _vm._v(" "),
              _c("router-link", { attrs: { tag: "li", to: "/materials" } }, [
                _c("a", [_vm._v("Vật tư/Báo giá")])
              ])
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col", attrs: { id: "main-content" } }, [
        _c("div", { staticClass: "container", attrs: { id: "navigation" } }, [
          _c(
            "div",
            {
              staticClass: "row align-items-center",
              staticStyle: { height: "100%" }
            },
            [
              _c("div", { staticClass: "col" }, [
                _c("span", { staticClass: "h4" }, [
                  _vm._v(_vm._s(_vm.pageTitle))
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("main", { staticClass: "container" }, [_c("router-view")], 1)
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-73672448", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/Base.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Base.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-73672448\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Base.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Base.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73672448", Component.options)
  } else {
    hotAPI.reload("data-v-73672448", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jhc2UudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LWNvb2tpZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbnktY29va2llL2xpYi91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQmFzZS52dWU/NmY2OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQmFzZS52dWUiXSwibmFtZXMiOlsiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJyZW1vdmVDb29raWUiLCJzZXRSYXdDb29raWUiLCJnZXRSYXdDb29raWUiLCJzZXRDb29raWUiLCJnZXRBbGxDb29raWVzIiwiZ2V0Q29va2llIiwiaXNDb29raWVFbmFibGVkIiwicmVtb3ZlIiwic2V0UmF3IiwiZ2V0UmF3Iiwic2V0IiwiZ2V0QWxsIiwiZ2V0IiwiaXNFbmFibGVkIiwidW5kZWZpbmVkIiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfdXRpbCIsInJlcXVpcmUiLCJrZXkiLCJ2YWx1ZSIsInJlIiwiUmVnRXhwIiwiZG9jdW1lbnQiLCJjb29raWUiLCJlbmFibGVkIiwidGVzdCIsImRlY29kZXIiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZUtleSIsImVzY2FwZVJlIiwibWF0Y2giLCJleGVjIiwiY29va2llcyIsImxhc3RJbmRleCIsImluZGV4IiwiZW5jb2RlciIsImVuY29kZVVSSUNvbXBvbmVudCIsImF0dHJzIiwiYXR0cnNTdHIiLCJjb252ZXJ0IiwidmFsdWVTdHIiLCJuZXdDb29raWUiLCJvcHRpb25zIiwib3B0cyIsImV4cGlyZXMiLCJkb21haW4iLCJoYXNPd24iLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJzdHIiLCJyZXBsYWNlIiwiY29tcHV0ZUV4cGlyZXMiLCJsYXN0Q2giLCJjaGFyQXQiLCJwYXJzZUludCIsIkRhdGUiLCJzZXRGdWxsWWVhciIsImdldEZ1bGxZZWFyIiwic2V0TW9udGgiLCJnZXRNb250aCIsInNldERhdGUiLCJnZXREYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsInNldE1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2V0U2Vjb25kcyIsImdldFNlY29uZHMiLCJyZXMiLCJ0b1VUQ1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBO0FBQ0E7O0FBR0E7QUFFQTt3Q0FDQTtvQ0FDQTtBQUNBOzhEQUNBLENBR0E7Z0VBRUE7O29CQUNBO3lGQUNBOzBCQUNBOzBCQUNBO3lCQUNBO2VBQ0E7eUJBRUE7O0FBQ0E7OztxQ0FJQTtBQUZBO0FBREEsd0NBSUE7NkJBQ0E7aUVBQ0E7bUNBQ0E7K0RBQ0E7Z0VBQ0E7QUFFQTtBQUNBLHNDQUNBO2tEQUNBO2tDQUNBO2lDQUNBO3VCQUNBO2dDQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUE3Q0EsRzs7Ozs7Ozs7QUMvQ0E7Ozs7QUFFQUEsUUFBUUMsVUFBUixHQUFxQixJQUFyQjtBQUNBRCxRQUFRRSxZQUFSLEdBQXVCRixRQUFRRyxZQUFSLEdBQXVCSCxRQUFRSSxZQUFSLEdBQXVCSixRQUFRSyxTQUFSLEdBQW9CTCxRQUFRTSxhQUFSLEdBQXdCTixRQUFRTyxTQUFSLEdBQW9CUCxRQUFRUSxlQUFSLEdBQTBCUixRQUFRUyxNQUFSLEdBQWlCVCxRQUFRVSxNQUFSLEdBQWlCVixRQUFRVyxNQUFSLEdBQWlCWCxRQUFRWSxHQUFSLEdBQWNaLFFBQVFhLE1BQVIsR0FBaUJiLFFBQVFjLEdB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QSxpQkFBaUIsNkJBQTZCLHFCQUFxQixFQUFFO0FBQ3JFLG1CQUFtQixtQ0FBbUMsbUJBQW1CLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiO0FBQ0EseUJBQXlCLHFCQUFxQjtBQUM5Qyw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0Esb2tCQUEyYTtBQUMzYTtBQUNBLHdTQUFnTDtBQUNoTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHdEQUF3RCxJQUFJOztBQUUzSTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwic2lkZWJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtbGlnaHRcIj57eyB1c2VyLnVzZXJuYW1lIH19PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJzZWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRhZz1cImxpXCIgdG89XCIvZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+VGjDtG5nIGLDoW88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRhZz1cImxpXCIgdG89XCIvd29ya3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5Dw7RuZyB0csaw4budbmc8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRhZz1cImxpXCIgdG89XCIvbWF0ZXJpYWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+VuG6rXQgdMawL0LDoW8gZ2nDoTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFpbi1jb250ZW50XCIgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmF2aWdhdGlvblwiIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9XCJoZWlnaHQ6IDEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImg0XCI+e3sgcGFnZVRpdGxlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1haW4gY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IG1hcFN0YXRlIH0gZnJvbSAndnVleCc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJ3RpbnktY29va2llJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIHBhZ2VUaXRsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJvdXRlLm1ldGEudGl0bGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAuLi5tYXBTdGF0ZShbXHJcbiAgICAgICAgICAgICd1c2VyJyxcclxuICAgICAgICBdKSxcclxuICAgIH0sXHJcbiAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHZXR0aW5nIHRva2VuIGZyb20gY29va2llXCIpO1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVRva2VuID0gZ2V0Q29va2llKCdjb29raWUtdG9rZW4nKTtcclxuICAgICAgICBpZiAoIWNvb2tpZVRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb29raWVzJ3MgZW1wdHksIHByb2NlZWQgdG8gbG9naW5cIik7XHJcbiAgICAgICAgICAgIG5leHQoe25hbWU6IFwibG9naW5cIn0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlRva2VuIGZvdW5kIGZyb20gY29va2llc1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRvIGEgY2FsbCB0byAuL3VzZXJcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vdHJhY2tlci5kZXYvYXBpL3YxL3VzZXJgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGNvb2tpZVRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiVG9rZW4gaXMgbGVnaXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGNvb2tpZVRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQodm0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kc3RvcmUuY29tbWl0KCdTRVRfVVNFUicsIHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRzdG9yZS5jb21taXQoJ1NFVF9BVVRIT1JJWkFUSU9OX1RPS0VOJywgY29va2llVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRva2VuIGlsZWdhbCwgcHJvY2VlZCB0byBsb2dpblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCh7bmFtZTogXCJsb2dpblwifSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9CYXNlLnZ1ZT81MTY1YjlkNSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucmVtb3ZlQ29va2llID0gZXhwb3J0cy5zZXRSYXdDb29raWUgPSBleHBvcnRzLmdldFJhd0Nvb2tpZSA9IGV4cG9ydHMuc2V0Q29va2llID0gZXhwb3J0cy5nZXRBbGxDb29raWVzID0gZXhwb3J0cy5nZXRDb29raWUgPSBleHBvcnRzLmlzQ29va2llRW5hYmxlZCA9IGV4cG9ydHMucmVtb3ZlID0gZXhwb3J0cy5zZXRSYXcgPSBleHBvcnRzLmdldFJhdyA9IGV4cG9ydHMuc2V0ID0gZXhwb3J0cy5nZXRBbGwgPSBleHBvcnRzLmdldCA9IGV4cG9ydHMuaXNFbmFibGVkID0gdW5kZWZpbmVkO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vLyBDaGVjayBpZiB0aGUgYnJvd3NlciBjb29raWUgaXMgZW5hYmxlZC5cbmZ1bmN0aW9uIGlzRW5hYmxlZCgpIHtcbiAgdmFyIGtleSA9ICdAa2V5QCc7XG4gIHZhciB2YWx1ZSA9ICcxJztcbiAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnKD86Xnw7ICknICsga2V5ICsgJz0nICsgdmFsdWUgKyAnKD86O3wkKScpO1xuXG4gIGRvY3VtZW50LmNvb2tpZSA9IGtleSArICc9JyArIHZhbHVlO1xuXG4gIHZhciBlbmFibGVkID0gcmUudGVzdChkb2N1bWVudC5jb29raWUpO1xuXG4gIGlmIChlbmFibGVkKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgcmVtb3ZlKGtleSk7XG4gIH1cblxuICByZXR1cm4gZW5hYmxlZDtcbn1cblxuLy8gR2V0IHRoZSBjb29raWUgdmFsdWUgYnkga2V5LlxuZnVuY3Rpb24gZ2V0KGtleSkge1xuICB2YXIgZGVjb2RlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZGVjb2RlVVJJQ29tcG9uZW50O1xuXG4gIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyB8fCAha2V5KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgcmVLZXkgPSBuZXcgUmVnRXhwKCcoPzpefDsgKScgKyAoMCwgX3V0aWwuZXNjYXBlUmUpKGtleSkgKyAnKD86PShbXjtdKikpPyg/Ojt8JCknKTtcbiAgdmFyIG1hdGNoID0gcmVLZXkuZXhlYyhkb2N1bWVudC5jb29raWUpO1xuXG4gIGlmIChtYXRjaCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBkZWNvZGVyID09PSAnZnVuY3Rpb24nID8gZGVjb2RlcihtYXRjaFsxXSkgOiBtYXRjaFsxXTtcbn1cblxuLy8gVGhlIGFsbCBjb29raWVzXG5mdW5jdGlvbiBnZXRBbGwoKSB7XG4gIHZhciBkZWNvZGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBkZWNvZGVVUklDb21wb25lbnQ7XG5cbiAgdmFyIHJlS2V5ID0gLyg/Ol58OyApKFtePV0rPykoPzo9KFteO10qKSk/KD86O3wkKS9nO1xuICB2YXIgY29va2llcyA9IHt9O1xuICB2YXIgbWF0Y2ggPSB2b2lkIDA7XG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgd2hpbGUgKG1hdGNoID0gcmVLZXkuZXhlYyhkb2N1bWVudC5jb29raWUpKSB7XG4gICAgcmVLZXkubGFzdEluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaC5sZW5ndGggLSAxO1xuICAgIGNvb2tpZXNbbWF0Y2hbMV1dID0gdHlwZW9mIGRlY29kZXIgPT09ICdmdW5jdGlvbicgPyBkZWNvZGVyKG1hdGNoWzJdKSA6IG1hdGNoWzJdO1xuICB9XG5cbiAgcmV0dXJuIGNvb2tpZXM7XG59XG5cbi8vIFNldCBhIGNvb2tpZS5cbmZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gIHZhciBlbmNvZGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBlbmNvZGVVUklDb21wb25lbnQ7XG4gIHZhciBhdHRycyA9IGFyZ3VtZW50c1szXTtcblxuICBpZiAoKHR5cGVvZiBlbmNvZGVyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihlbmNvZGVyKSkgPT09ICdvYmplY3QnICYmIGVuY29kZXIgIT09IG51bGwpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIGF0dHJzID0gZW5jb2RlcjtcbiAgICBlbmNvZGVyID0gZW5jb2RlVVJJQ29tcG9uZW50O1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgfVxuICB2YXIgYXR0cnNTdHIgPSAoMCwgX3V0aWwuY29udmVydCkoYXR0cnMgfHwge30pO1xuICB2YXIgdmFsdWVTdHIgPSB0eXBlb2YgZW5jb2RlciA9PT0gJ2Z1bmN0aW9uJyA/IGVuY29kZXIodmFsdWUpIDogdmFsdWU7XG4gIHZhciBuZXdDb29raWUgPSBrZXkgKyAnPScgKyB2YWx1ZVN0ciArIGF0dHJzU3RyO1xuICBkb2N1bWVudC5jb29raWUgPSBuZXdDb29raWU7XG59XG5cbi8vIFJlbW92ZSBhIGNvb2tpZSBieSB0aGUgc3BlY2lmaWVkIGtleS5cbmZ1bmN0aW9uIHJlbW92ZShrZXksIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSB7IGV4cGlyZXM6IC0xIH07XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5kb21haW4pIHtcbiAgICBvcHRzLmRvbWFpbiA9IG9wdGlvbnMuZG9tYWluO1xuICB9XG5cbiAgcmV0dXJuIHNldChrZXksICdhJywgb3B0cyk7XG59XG5cbi8vIEdldCB0aGUgY29va2llJ3MgdmFsdWUgd2l0aG91dCBkZWNvZGluZy5cbmZ1bmN0aW9uIGdldFJhdyhrZXkpIHtcbiAgcmV0dXJuIGdldChrZXksIG51bGwpO1xufVxuXG4vLyBTZXQgYSBjb29raWUgd2l0aG91dCBlbmNvZGluZyB0aGUgdmFsdWUuXG5mdW5jdGlvbiBzZXRSYXcoa2V5LCB2YWx1ZSwgb3B0cykge1xuICByZXR1cm4gc2V0KGtleSwgdmFsdWUsIG51bGwsIG9wdHMpO1xufVxuXG5leHBvcnRzLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbmV4cG9ydHMuZ2V0ID0gZ2V0O1xuZXhwb3J0cy5nZXRBbGwgPSBnZXRBbGw7XG5leHBvcnRzLnNldCA9IHNldDtcbmV4cG9ydHMuZ2V0UmF3ID0gZ2V0UmF3O1xuZXhwb3J0cy5zZXRSYXcgPSBzZXRSYXc7XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbmV4cG9ydHMuaXNDb29raWVFbmFibGVkID0gaXNFbmFibGVkO1xuZXhwb3J0cy5nZXRDb29raWUgPSBnZXQ7XG5leHBvcnRzLmdldEFsbENvb2tpZXMgPSBnZXRBbGw7XG5leHBvcnRzLnNldENvb2tpZSA9IHNldDtcbmV4cG9ydHMuZ2V0UmF3Q29va2llID0gZ2V0UmF3O1xuZXhwb3J0cy5zZXRSYXdDb29raWUgPSBzZXRSYXc7XG5leHBvcnRzLnJlbW92ZUNvb2tpZSA9IHJlbW92ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1jb29raWUvbGliL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIGhhc093bihvYmosIGtleSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cblxuLy8gRXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycy5cbmZ1bmN0aW9uIGVzY2FwZVJlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1suKis/XiR8W1xcXSgpe31cXFxcLV0vZywgJ1xcXFwkJicpO1xufVxuXG4vLyBSZXR1cm4gYSBmdXR1cmUgZGF0ZSBieSB0aGUgZ2l2ZW4gc3RyaW5nLlxuZnVuY3Rpb24gY29tcHV0ZUV4cGlyZXMoc3RyKSB7XG4gIHZhciBsYXN0Q2ggPSBzdHIuY2hhckF0KHN0ci5sZW5ndGggLSAxKTtcbiAgdmFyIHZhbHVlID0gcGFyc2VJbnQoc3RyLCAxMCk7XG4gIHZhciBleHBpcmVzID0gbmV3IERhdGUoKTtcblxuICBzd2l0Y2ggKGxhc3RDaCkge1xuICAgIGNhc2UgJ1knOlxuICAgICAgZXhwaXJlcy5zZXRGdWxsWWVhcihleHBpcmVzLmdldEZ1bGxZZWFyKCkgKyB2YWx1ZSk7YnJlYWs7XG4gICAgY2FzZSAnTSc6XG4gICAgICBleHBpcmVzLnNldE1vbnRoKGV4cGlyZXMuZ2V0TW9udGgoKSArIHZhbHVlKTticmVhaztcbiAgICBjYXNlICdEJzpcbiAgICAgIGV4cGlyZXMuc2V0RGF0ZShleHBpcmVzLmdldERhdGUoKSArIHZhbHVlKTticmVhaztcbiAgICBjYXNlICdoJzpcbiAgICAgIGV4cGlyZXMuc2V0SG91cnMoZXhwaXJlcy5nZXRIb3VycygpICsgdmFsdWUpO2JyZWFrO1xuICAgIGNhc2UgJ20nOlxuICAgICAgZXhwaXJlcy5zZXRNaW51dGVzKGV4cGlyZXMuZ2V0TWludXRlcygpICsgdmFsdWUpO2JyZWFrO1xuICAgIGNhc2UgJ3MnOlxuICAgICAgZXhwaXJlcy5zZXRTZWNvbmRzKGV4cGlyZXMuZ2V0U2Vjb25kcygpICsgdmFsdWUpO2JyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBleHBpcmVzID0gbmV3IERhdGUoc3RyKTtcbiAgfVxuXG4gIHJldHVybiBleHBpcmVzO1xufVxuXG4vLyBDb252ZXJ0IGFuIG9iamVjdCB0byBhIGNvb2tpZSBvcHRpb24gc3RyaW5nLlxuZnVuY3Rpb24gY29udmVydChvcHRzKSB7XG4gIHZhciByZXMgPSAnJztcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgZm9yICh2YXIga2V5IGluIG9wdHMpIHtcbiAgICBpZiAoaGFzT3duKG9wdHMsIGtleSkpIHtcbiAgICAgIGlmICgvXmV4cGlyZXMkL2kudGVzdChrZXkpKSB7XG4gICAgICAgIHZhciBleHBpcmVzID0gb3B0c1trZXldO1xuXG4gICAgICAgIGlmICgodHlwZW9mIGV4cGlyZXMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGV4cGlyZXMpKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBleHBpcmVzICs9IHR5cGVvZiBleHBpcmVzID09PSAnbnVtYmVyJyA/ICdEJyA6ICcnO1xuICAgICAgICAgIGV4cGlyZXMgPSBjb21wdXRlRXhwaXJlcyhleHBpcmVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXMgKz0gJzsnICsga2V5ICsgJz0nICsgZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICAgICAgfSBlbHNlIGlmICgvXnNlY3VyZSQvLnRlc3Qoa2V5KSkge1xuICAgICAgICBpZiAob3B0c1trZXldKSB7XG4gICAgICAgICAgcmVzICs9ICc7JyArIGtleTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzICs9ICc7JyArIGtleSArICc9JyArIG9wdHNba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIWhhc093bihvcHRzLCAncGF0aCcpKSB7XG4gICAgcmVzICs9ICc7cGF0aD0vJztcbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydHMuaGFzT3duID0gaGFzT3duO1xuZXhwb3J0cy5lc2NhcGVSZSA9IGVzY2FwZVJlO1xuZXhwb3J0cy5jb21wdXRlRXhwaXJlcyA9IGNvbXB1dGVFeHBpcmVzO1xuZXhwb3J0cy5jb252ZXJ0ID0gY29udmVydDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1jb29raWUvbGliL3V0aWwuanMiLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi9cbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIHZhciBmdW5jdGlvbmFsID0gb3B0aW9ucy5mdW5jdGlvbmFsXG4gICAgdmFyIGV4aXN0aW5nID0gZnVuY3Rpb25hbFxuICAgICAgPyBvcHRpb25zLnJlbmRlclxuICAgICAgOiBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuXG4gICAgaWYgKCFmdW5jdGlvbmFsKSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndyYXBwZXJcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbm8tZ3V0dGVyc1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwic2lkZWJhclwiIH0gfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVzZXJpbmZvXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXNlci1hdmF0YXJcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciB0ZXh0LWxpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlci51c2VybmFtZSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgcm9sZTogXCJzZWN0aW9uc1wiIH0gfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdGFnOiBcImxpXCIsIHRvOiBcIi9kYXNoYm9hcmRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwgW192bS5fdihcIlRow7RuZyBiw6FvXCIpXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0YWc6IFwibGlcIiwgdG86IFwiL3dvcmtzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoXCJDw7RuZyB0csaw4budbmdcIildKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRhZzogXCJsaVwiLCB0bzogXCIvbWF0ZXJpYWxzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoXCJW4bqtdCB0xrAvQsOhbyBnacOhXCIpXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xcIiwgYXR0cnM6IHsgaWQ6IFwibWFpbi1jb250ZW50XCIgfSB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIsIGF0dHJzOiB7IGlkOiBcIm5hdmlnYXRpb25cIiB9IH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwMCVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBhZ2VUaXRsZSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcIm1haW5cIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbX2MoXCJyb3V0ZXItdmlld1wiKV0sIDEpXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTczNjcyNDQ4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03MzY3MjQ0OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQmFzZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNzM2NzI0NDhcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jhc2UudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVudlxcXCIse1xcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcImxhc3QgMiB2ZXJzaW9uc1xcXCIsXFxcIj4gNSUgaW4gQkVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfSxcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiLFxcXCJ0cmFuc2Zvcm0taW5saW5lLWVudmlyb25tZW50LXZhcmlhYmxlc1xcXCJdfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCZidXN0Q2FjaGUhLi9CYXNlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzM2NzI0NDhcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vQmFzZS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXEJhc2UudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgIHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7ICBjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03MzY3MjQ0OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTczNjcyNDQ4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuJyArICcgIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9CYXNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQmFzZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA0Il0sInNvdXJjZVJvb3QiOiIifQ==