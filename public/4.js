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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jhc2UudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LWNvb2tpZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbnktY29va2llL2xpYi91dGlsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9CYXNlLnZ1ZT82ZjY4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9CYXNlLnZ1ZSJdLCJuYW1lcyI6WyJleHBvcnRzIiwiX19lc01vZHVsZSIsInJlbW92ZUNvb2tpZSIsInNldFJhd0Nvb2tpZSIsImdldFJhd0Nvb2tpZSIsInNldENvb2tpZSIsImdldEFsbENvb2tpZXMiLCJnZXRDb29raWUiLCJpc0Nvb2tpZUVuYWJsZWQiLCJyZW1vdmUiLCJzZXRSYXciLCJnZXRSYXciLCJzZXQiLCJnZXRBbGwiLCJnZXQiLCJpc0VuYWJsZWQiLCJ1bmRlZmluZWQiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl91dGlsIiwicmVxdWlyZSIsImtleSIsInZhbHVlIiwicmUiLCJSZWdFeHAiLCJkb2N1bWVudCIsImNvb2tpZSIsImVuYWJsZWQiLCJ0ZXN0IiwiZGVjb2RlciIsImFyZ3VtZW50cyIsImxlbmd0aCIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlS2V5IiwiZXNjYXBlUmUiLCJtYXRjaCIsImV4ZWMiLCJjb29raWVzIiwibGFzdEluZGV4IiwiaW5kZXgiLCJlbmNvZGVyIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYXR0cnMiLCJhdHRyc1N0ciIsImNvbnZlcnQiLCJ2YWx1ZVN0ciIsIm5ld0Nvb2tpZSIsIm9wdGlvbnMiLCJvcHRzIiwiZXhwaXJlcyIsImRvbWFpbiIsImhhc093biIsIk9iamVjdCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInN0ciIsInJlcGxhY2UiLCJjb21wdXRlRXhwaXJlcyIsImxhc3RDaCIsImNoYXJBdCIsInBhcnNlSW50IiwiRGF0ZSIsInNldEZ1bGxZZWFyIiwiZ2V0RnVsbFllYXIiLCJzZXRNb250aCIsImdldE1vbnRoIiwic2V0RGF0ZSIsImdldERhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwic2V0TWludXRlcyIsImdldE1pbnV0ZXMiLCJzZXRTZWNvbmRzIiwiZ2V0U2Vjb25kcyIsInJlcyIsInRvVVRDU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ0E7QUFDQTs7QUFHQTtBQUVBO3dDQUNBO29DQUNBO0FBQ0E7OERBQ0EsQ0FHQTtnRUFFQTs7b0JBQ0E7eUZBQ0E7MEJBQ0E7MEJBQ0E7eUJBQ0E7ZUFDQTt5QkFFQTs7QUFDQTs7O3FDQUlBO0FBRkE7QUFEQSx3Q0FJQTs2QkFDQTtpRUFDQTttQ0FDQTsrREFDQTtnRUFDQTtBQUVBO0FBQ0Esc0NBQ0E7a0RBQ0E7a0NBQ0E7aUNBQ0E7dUJBQ0E7Z0NBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQTdDQSxHOzs7Ozs7OztBQy9DQTs7OztBQUVBQSxRQUFRQyxVQUFSLEdBQXFCLElBQXJCO0FBQ0FELFFBQVFFLFlBQVIsR0FBdUJGLFFBQVFHLFlBQVIsR0FBdUJILFFBQVFJLFlBQVIsR0FBdUJKLFFBQVFLLFNBQVIsR0FBb0JMLFFBQVFNLGFBQVIsR0FBd0JOLFFBQVFPLFNBQVIsR0FBb0JQLFFBQVFRLGVBQVIsR0FBMEJSLFFBQVFTLE1BQVIsR0FBaUJULFFBQVFVLE1BQVIsR0FBaUJWLFFBQVFXLE1BQVIsR0FBaUJYLFFBQVFZLEdBQVIsR0FBY1osUUFBUWEsTUFBUixHQUFpQmIsUUFBUWMsR0FBUixHQUFjZCxRQUFRZSxTQUFSLEdBQW9CQyxTQUFuUjs7QUFFQSxJQUFJQyxVQUFVLE9BQU9DLE1BQVAsS0FBa0Is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b3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwic2lkZWJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtbGlnaHRcIj57eyB1c2VyLnVzZXJuYW1lIH19PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJzZWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRhZz1cImxpXCIgdG89XCIvZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+VGjDtG5nIGLDoW88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRhZz1cImxpXCIgdG89XCIvd29ya3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5Dw7RuZyB0csaw4budbmc8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRhZz1cImxpXCIgdG89XCIvbWF0ZXJpYWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+VuG6rXQgdMawL0LDoW8gZ2nDoTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFpbi1jb250ZW50XCIgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmF2aWdhdGlvblwiIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9XCJoZWlnaHQ6IDEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImg0XCI+e3sgcGFnZVRpdGxlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1haW4gY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IG1hcFN0YXRlIH0gZnJvbSAndnVleCc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJ3RpbnktY29va2llJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIHBhZ2VUaXRsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJvdXRlLm1ldGEudGl0bGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAuLi5tYXBTdGF0ZShbXHJcbiAgICAgICAgICAgICd1c2VyJyxcclxuICAgICAgICBdKSxcclxuICAgIH0sXHJcbiAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHZXR0aW5nIHRva2VuIGZyb20gY29va2llXCIpO1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVRva2VuID0gZ2V0Q29va2llKCdjb29raWUtdG9rZW4nKTtcclxuICAgICAgICBpZiAoIWNvb2tpZVRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb29raWVzJ3MgZW1wdHksIHByb2NlZWQgdG8gbG9naW5cIik7XHJcbiAgICAgICAgICAgIG5leHQoe25hbWU6IFwibG9naW5cIn0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlRva2VuIGZvdW5kIGZyb20gY29va2llc1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRvIGEgY2FsbCB0byAuL3VzZXJcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vdHJhY2tlci5kZXYvYXBpL3YxL3VzZXJgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGNvb2tpZVRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiVG9rZW4gaXMgbGVnaXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGNvb2tpZVRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQodm0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kc3RvcmUuY29tbWl0KCdTRVRfVVNFUicsIHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRzdG9yZS5jb21taXQoJ1NFVF9BVVRIT1JJWkFUSU9OX1RPS0VOJywgY29va2llVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRva2VuIGlsZWdhbCwgcHJvY2VlZCB0byBsb2dpblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCh7bmFtZTogXCJsb2dpblwifSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9CYXNlLnZ1ZT81MTY1YjlkNSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucmVtb3ZlQ29va2llID0gZXhwb3J0cy5zZXRSYXdDb29raWUgPSBleHBvcnRzLmdldFJhd0Nvb2tpZSA9IGV4cG9ydHMuc2V0Q29va2llID0gZXhwb3J0cy5nZXRBbGxDb29raWVzID0gZXhwb3J0cy5nZXRDb29raWUgPSBleHBvcnRzLmlzQ29va2llRW5hYmxlZCA9IGV4cG9ydHMucmVtb3ZlID0gZXhwb3J0cy5zZXRSYXcgPSBleHBvcnRzLmdldFJhdyA9IGV4cG9ydHMuc2V0ID0gZXhwb3J0cy5nZXRBbGwgPSBleHBvcnRzLmdldCA9IGV4cG9ydHMuaXNFbmFibGVkID0gdW5kZWZpbmVkO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vLyBDaGVjayBpZiB0aGUgYnJvd3NlciBjb29raWUgaXMgZW5hYmxlZC5cbmZ1bmN0aW9uIGlzRW5hYmxlZCgpIHtcbiAgdmFyIGtleSA9ICdAa2V5QCc7XG4gIHZhciB2YWx1ZSA9ICcxJztcbiAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnKD86Xnw7ICknICsga2V5ICsgJz0nICsgdmFsdWUgKyAnKD86O3wkKScpO1xuXG4gIGRvY3VtZW50LmNvb2tpZSA9IGtleSArICc9JyArIHZhbHVlO1xuXG4gIHZhciBlbmFibGVkID0gcmUudGVzdChkb2N1bWVudC5jb29raWUpO1xuXG4gIGlmIChlbmFibGVkKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgcmVtb3ZlKGtleSk7XG4gIH1cblxuICByZXR1cm4gZW5hYmxlZDtcbn1cblxuLy8gR2V0IHRoZSBjb29raWUgdmFsdWUgYnkga2V5LlxuZnVuY3Rpb24gZ2V0KGtleSkge1xuICB2YXIgZGVjb2RlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZGVjb2RlVVJJQ29tcG9uZW50O1xuXG4gIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyB8fCAha2V5KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgcmVLZXkgPSBuZXcgUmVnRXhwKCcoPzpefDsgKScgKyAoMCwgX3V0aWwuZXNjYXBlUmUpKGtleSkgKyAnKD86PShbXjtdKikpPyg/Ojt8JCknKTtcbiAgdmFyIG1hdGNoID0gcmVLZXkuZXhlYyhkb2N1bWVudC5jb29raWUpO1xuXG4gIGlmIChtYXRjaCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBkZWNvZGVyID09PSAnZnVuY3Rpb24nID8gZGVjb2RlcihtYXRjaFsxXSkgOiBtYXRjaFsxXTtcbn1cblxuLy8gVGhlIGFsbCBjb29raWVzXG5mdW5jdGlvbiBnZXRBbGwoKSB7XG4gIHZhciBkZWNvZGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBkZWNvZGVVUklDb21wb25lbnQ7XG5cbiAgdmFyIHJlS2V5ID0gLyg/Ol58OyApKFtePV0rPykoPzo9KFteO10qKSk/KD86O3wkKS9nO1xuICB2YXIgY29va2llcyA9IHt9O1xuICB2YXIgbWF0Y2ggPSB2b2lkIDA7XG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgd2hpbGUgKG1hdGNoID0gcmVLZXkuZXhlYyhkb2N1bWVudC5jb29raWUpKSB7XG4gICAgcmVLZXkubGFzdEluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaC5sZW5ndGggLSAxO1xuICAgIGNvb2tpZXNbbWF0Y2hbMV1dID0gdHlwZW9mIGRlY29kZXIgPT09ICdmdW5jdGlvbicgPyBkZWNvZGVyKG1hdGNoWzJdKSA6IG1hdGNoWzJdO1xuICB9XG5cbiAgcmV0dXJuIGNvb2tpZXM7XG59XG5cbi8vIFNldCBhIGNvb2tpZS5cbmZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gIHZhciBlbmNvZGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBlbmNvZGVVUklDb21wb25lbnQ7XG4gIHZhciBhdHRycyA9IGFyZ3VtZW50c1szXTtcblxuICBpZiAoKHR5cGVvZiBlbmNvZGVyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihlbmNvZGVyKSkgPT09ICdvYmplY3QnICYmIGVuY29kZXIgIT09IG51bGwpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIGF0dHJzID0gZW5jb2RlcjtcbiAgICBlbmNvZGVyID0gZW5jb2RlVVJJQ29tcG9uZW50O1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgfVxuICB2YXIgYXR0cnNTdHIgPSAoMCwgX3V0aWwuY29udmVydCkoYXR0cnMgfHwge30pO1xuICB2YXIgdmFsdWVTdHIgPSB0eXBlb2YgZW5jb2RlciA9PT0gJ2Z1bmN0aW9uJyA/IGVuY29kZXIodmFsdWUpIDogdmFsdWU7XG4gIHZhciBuZXdDb29raWUgPSBrZXkgKyAnPScgKyB2YWx1ZVN0ciArIGF0dHJzU3RyO1xuICBkb2N1bWVudC5jb29raWUgPSBuZXdDb29raWU7XG59XG5cbi8vIFJlbW92ZSBhIGNvb2tpZSBieSB0aGUgc3BlY2lmaWVkIGtleS5cbmZ1bmN0aW9uIHJlbW92ZShrZXksIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSB7IGV4cGlyZXM6IC0xIH07XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5kb21haW4pIHtcbiAgICBvcHRzLmRvbWFpbiA9IG9wdGlvbnMuZG9tYWluO1xuICB9XG5cbiAgcmV0dXJuIHNldChrZXksICdhJywgb3B0cyk7XG59XG5cbi8vIEdldCB0aGUgY29va2llJ3MgdmFsdWUgd2l0aG91dCBkZWNvZGluZy5cbmZ1bmN0aW9uIGdldFJhdyhrZXkpIHtcbiAgcmV0dXJuIGdldChrZXksIG51bGwpO1xufVxuXG4vLyBTZXQgYSBjb29raWUgd2l0aG91dCBlbmNvZGluZyB0aGUgdmFsdWUuXG5mdW5jdGlvbiBzZXRSYXcoa2V5LCB2YWx1ZSwgb3B0cykge1xuICByZXR1cm4gc2V0KGtleSwgdmFsdWUsIG51bGwsIG9wdHMpO1xufVxuXG5leHBvcnRzLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbmV4cG9ydHMuZ2V0ID0gZ2V0O1xuZXhwb3J0cy5nZXRBbGwgPSBnZXRBbGw7XG5leHBvcnRzLnNldCA9IHNldDtcbmV4cG9ydHMuZ2V0UmF3ID0gZ2V0UmF3O1xuZXhwb3J0cy5zZXRSYXcgPSBzZXRSYXc7XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbmV4cG9ydHMuaXNDb29raWVFbmFibGVkID0gaXNFbmFibGVkO1xuZXhwb3J0cy5nZXRDb29raWUgPSBnZXQ7XG5leHBvcnRzLmdldEFsbENvb2tpZXMgPSBnZXRBbGw7XG5leHBvcnRzLnNldENvb2tpZSA9IHNldDtcbmV4cG9ydHMuZ2V0UmF3Q29va2llID0gZ2V0UmF3O1xuZXhwb3J0cy5zZXRSYXdDb29raWUgPSBzZXRSYXc7XG5leHBvcnRzLnJlbW92ZUNvb2tpZSA9IHJlbW92ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1jb29raWUvbGliL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIGhhc093bihvYmosIGtleSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cblxuLy8gRXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycy5cbmZ1bmN0aW9uIGVzY2FwZVJlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1suKis/XiR8W1xcXSgpe31cXFxcLV0vZywgJ1xcXFwkJicpO1xufVxuXG4vLyBSZXR1cm4gYSBmdXR1cmUgZGF0ZSBieSB0aGUgZ2l2ZW4gc3RyaW5nLlxuZnVuY3Rpb24gY29tcHV0ZUV4cGlyZXMoc3RyKSB7XG4gIHZhciBsYXN0Q2ggPSBzdHIuY2hhckF0KHN0ci5sZW5ndGggLSAxKTtcbiAgdmFyIHZhbHVlID0gcGFyc2VJbnQoc3RyLCAxMCk7XG4gIHZhciBleHBpcmVzID0gbmV3IERhdGUoKTtcblxuICBzd2l0Y2ggKGxhc3RDaCkge1xuICAgIGNhc2UgJ1knOlxuICAgICAgZXhwaXJlcy5zZXRGdWxsWWVhcihleHBpcmVzLmdldEZ1bGxZZWFyKCkgKyB2YWx1ZSk7YnJlYWs7XG4gICAgY2FzZSAnTSc6XG4gICAgICBleHBpcmVzLnNldE1vbnRoKGV4cGlyZXMuZ2V0TW9udGgoKSArIHZhbHVlKTticmVhaztcbiAgICBjYXNlICdEJzpcbiAgICAgIGV4cGlyZXMuc2V0RGF0ZShleHBpcmVzLmdldERhdGUoKSArIHZhbHVlKTticmVhaztcbiAgICBjYXNlICdoJzpcbiAgICAgIGV4cGlyZXMuc2V0SG91cnMoZXhwaXJlcy5nZXRIb3VycygpICsgdmFsdWUpO2JyZWFrO1xuICAgIGNhc2UgJ20nOlxuICAgICAgZXhwaXJlcy5zZXRNaW51dGVzKGV4cGlyZXMuZ2V0TWludXRlcygpICsgdmFsdWUpO2JyZWFrO1xuICAgIGNhc2UgJ3MnOlxuICAgICAgZXhwaXJlcy5zZXRTZWNvbmRzKGV4cGlyZXMuZ2V0U2Vjb25kcygpICsgdmFsdWUpO2JyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBleHBpcmVzID0gbmV3IERhdGUoc3RyKTtcbiAgfVxuXG4gIHJldHVybiBleHBpcmVzO1xufVxuXG4vLyBDb252ZXJ0IGFuIG9iamVjdCB0byBhIGNvb2tpZSBvcHRpb24gc3RyaW5nLlxuZnVuY3Rpb24gY29udmVydChvcHRzKSB7XG4gIHZhciByZXMgPSAnJztcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgZm9yICh2YXIga2V5IGluIG9wdHMpIHtcbiAgICBpZiAoaGFzT3duKG9wdHMsIGtleSkpIHtcbiAgICAgIGlmICgvXmV4cGlyZXMkL2kudGVzdChrZXkpKSB7XG4gICAgICAgIHZhciBleHBpcmVzID0gb3B0c1trZXldO1xuXG4gICAgICAgIGlmICgodHlwZW9mIGV4cGlyZXMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGV4cGlyZXMpKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBleHBpcmVzICs9IHR5cGVvZiBleHBpcmVzID09PSAnbnVtYmVyJyA/ICdEJyA6ICcnO1xuICAgICAgICAgIGV4cGlyZXMgPSBjb21wdXRlRXhwaXJlcyhleHBpcmVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXMgKz0gJzsnICsga2V5ICsgJz0nICsgZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICAgICAgfSBlbHNlIGlmICgvXnNlY3VyZSQvLnRlc3Qoa2V5KSkge1xuICAgICAgICBpZiAob3B0c1trZXldKSB7XG4gICAgICAgICAgcmVzICs9ICc7JyArIGtleTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzICs9ICc7JyArIGtleSArICc9JyArIG9wdHNba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIWhhc093bihvcHRzLCAncGF0aCcpKSB7XG4gICAgcmVzICs9ICc7cGF0aD0vJztcbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydHMuaGFzT3duID0gaGFzT3duO1xuZXhwb3J0cy5lc2NhcGVSZSA9IGVzY2FwZVJlO1xuZXhwb3J0cy5jb21wdXRlRXhwaXJlcyA9IGNvbXB1dGVFeHBpcmVzO1xuZXhwb3J0cy5jb252ZXJ0ID0gY29udmVydDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1jb29raWUvbGliL3V0aWwuanMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid3JhcHBlclwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBuby1ndXR0ZXJzXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJzaWRlYmFyXCIgfSB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXNlcmluZm9cIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1c2VyLWF2YXRhclwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHRleHQtbGlnaHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLnVzZXJuYW1lKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyByb2xlOiBcInNlY3Rpb25zXCIgfSB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0YWc6IFwibGlcIiwgdG86IFwiL2Rhc2hib2FyZFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiYVwiLCBbX3ZtLl92KFwiVGjDtG5nIGLDoW9cIildKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRhZzogXCJsaVwiLCB0bzogXCIvd29ya3NcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwgW192bS5fdihcIkPDtG5nIHRyxrDhu51uZ1wiKV0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdGFnOiBcImxpXCIsIHRvOiBcIi9tYXRlcmlhbHNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwgW192bS5fdihcIlbhuq10IHTGsC9Cw6FvIGdpw6FcIildKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiLCBhdHRyczogeyBpZDogXCJtYWluLWNvbnRlbnRcIiB9IH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiwgYXR0cnM6IHsgaWQ6IFwibmF2aWdhdGlvblwiIH0gfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTAwJVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImg0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucGFnZVRpdGxlKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibWFpblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtfYyhcInJvdXRlci12aWV3XCIpXSwgMSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzM2NzI0NDhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTczNjcyNDQ4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9CYXNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi03MzY3MjQ0OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQmFzZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwibGFzdCAyIHZlcnNpb25zXFxcIixcXFwiPiA1JSBpbiBCRVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9LFxcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCIsXFxcInRyYW5zZm9ybS1pbmxpbmUtZW52aXJvbm1lbnQtdmFyaWFibGVzXFxcIl19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wJmJ1c3RDYWNoZSEuL0Jhc2UudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03MzY3MjQ0OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi9CYXNlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcQmFzZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkgeyAgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHsgIGNvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTczNjcyNDQ4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzM2NzI0NDhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4nICsgJyAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jhc2UudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9CYXNlLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiXSwic291cmNlUm9vdCI6IiJ9