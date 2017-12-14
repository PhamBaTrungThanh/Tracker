webpackJsonp([3],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tiny_cookie__ = __webpack_require__("./node_modules/tiny-cookie/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tiny_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tiny_cookie__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    data: function data() {
        return {
            rememberMe: false,
            username: "",
            password: "",
            formErrorMessage: false,
            disabledForm: false
        };
    },

    methods: {
        login: function login() {
            var _this = this;

            if (this.username !== false && this.password !== false) {
                this.disabledForm = "disabled";
                axios.post("./oauth/token", {
                    "grant_type": "password",
                    "client_id": "2",
                    "client_secret": "DRjEqkHVSWC2deWj3DudBoIVjRsowrC2pcSngpwB",
                    "scope": "",
                    "username": this.username,
                    "password": this.password
                }).then(function (response) {
                    if (response.status === 200) {
                        _this.$store.commit('SET_AUTHORIZATION_TOKEN', "Bearer " + response.data.access_token);
                        axios.defaults.headers.common['Authorization'] = "Bearer " + response.data.access_token;
                        if (_this.rememberMe) {
                            Object(__WEBPACK_IMPORTED_MODULE_0_tiny_cookie__["setCookie"])('cookie-token', "Bearer " + response.data.access_token, "1Y");
                        }
                        _this.$router.push({ name: "base.dashboard" });
                    }
                }).catch(function (error) {
                    console.log(error);
                    _this.formErrorMessage = error.response.data.message;
                    _this.password = "";
                });
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01e7f602\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Login.vue","sourceRoot":""}]);

// exports


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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-01e7f602\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "vertical", staticStyle: { height: "20vh" } }),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-4 offset-4" }, [
        _c("form", { staticClass: "form-signin" }, [
          _c("h2", { staticClass: "form-signin-heading" }, [
            _vm._v("Xin mời đăng nhập")
          ]),
          _vm._v(" "),
          _c("fieldset", { attrs: { disabled: _vm.disabledForm } }, [
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                { staticClass: "sr-only", attrs: { for: "inputEmail" } },
                [_vm._v("Email")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.username,
                    expression: "username"
                  }
                ],
                class: [
                  _vm.formErrorMessage ? "is-invalid" : "",
                  "form-control"
                ],
                attrs: {
                  type: "email",
                  id: "inputEmail",
                  placeholder: "Email",
                  required: "",
                  autofocus: ""
                },
                domProps: { value: _vm.username },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.username = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _vm.formErrorMessage
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.formErrorMessage) +
                        "\n                        "
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                { staticClass: "sr-only", attrs: { for: "inputPassword" } },
                [_vm._v("Mật khẩu")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.password,
                    expression: "password"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "password",
                  id: "inputPassword",
                  placeholder: "Mật khẩu",
                  required: ""
                },
                domProps: { value: _vm.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.password = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "checkbox" }, [
                _c("label", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.rememberMe,
                        expression: "rememberMe"
                      }
                    ],
                    attrs: { type: "checkbox", value: "remember-me" },
                    domProps: {
                      checked: Array.isArray(_vm.rememberMe)
                        ? _vm._i(_vm.rememberMe, "remember-me") > -1
                        : _vm.rememberMe
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.rememberMe,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = "remember-me",
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.rememberMe = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.rememberMe = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.rememberMe = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" Lưu tài khoản\n                        ")
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-lg btn-primary btn-block",
                attrs: { type: "submit" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.login($event)
                  }
                }
              },
              [_vm._v("Đăng nhập")]
            )
          ])
        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-01e7f602", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01e7f602\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01e7f602\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Login.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("b95d25b4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01e7f602\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Login.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01e7f602\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01e7f602\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Login.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Login.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-01e7f602\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Login.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources\\assets\\js\\components\\Login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01e7f602", Component.options)
  } else {
    hotAPI.reload("data-v-01e7f602", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW4udnVlPzY1ZjgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbnktY29va2llL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1jb29raWUvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luLnZ1ZT8zOGE2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbi52dWU/ZTk2MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW4udnVlIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwicmVtb3ZlQ29va2llIiwic2V0UmF3Q29va2llIiwiZ2V0UmF3Q29va2llIiwic2V0Q29va2llIiwiZ2V0QWxsQ29va2llcyIsImdldENvb2tpZSIsImlzQ29va2llRW5hYmxlZCIsInJlbW92ZSIsInNldFJhdyIsImdldFJhdyIsInNldCIsImdldEFsbCIsImdldCIsImlzRW5hYmxlZCIsInVuZGVmaW5lZCIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX3V0aWwiLCJyZXF1aXJlIiwia2V5IiwidmFsdWUiLCJyZSIsIlJlZ0V4cCIsImRvY3VtZW50IiwiY29va2llIiwiZW5hYmxlZCIsInRlc3QiLCJkZWNvZGVyIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVLZXkiLCJlc2NhcGVSZSIsIm1hdGNoIiwiZXhlYyIsImNvb2tpZXMiLCJsYXN0SW5kZXgiLCJpbmRleCIsImVuY29kZXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJhdHRycyIsImF0dHJzU3RyIiwiY29udmVydCIsInZhbHVlU3RyIiwibmV3Q29va2llIiwib3B0aW9ucyIsIm9wdHMiLCJleHBpcmVzIiwiZG9tYWluIiwiaGFzT3duIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwic3RyIiwicmVwbGFjZSIsImNvbXB1dGVFeHBpcmVzIiwibGFzdENoIiwiY2hhckF0IiwicGFyc2VJbnQiLCJEYXRlIiwic2V0RnVsbFllYXIiLCJnZXRGdWxsWWVhciIsInNldE1vbnRoIiwiZ2V0TW9udGgiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInNldEhvdXJzIiwiZ2V0SG91cnMiLCJzZXRNaW51dGVzIiwiZ2V0TWludXRlcyIsInNldFNlY29uZHMiLCJnZXRTZWNvbmRzIiwicmVzIiwidG9VVENTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUNBO0FBQ0E7MEJBRUE7O3dCQUVBO3NCQUNBO3NCQUNBOzhCQUNBOzBCQUVBO0FBTkE7QUFPQTs7OztBQUVBOztvRUFDQTtvQ0FDQTs7a0NBRUE7aUNBQ0E7cUNBQ0E7NkJBQ0E7cUNBQ0E7cUNBQ0E7QUFOQSw0Q0FPQTtpREFDQTtpR0FDQTttR0FDQTs4Q0FDQTttSkFDQTtBQUNBO21EQUNBO0FBQ0E7MENBQ0E7Z0NBQ0E7aUVBQ0E7cUNBQ0E7QUFDQTtBQUNBO0FBRUE7QUEzQkE7QUFWQSxHOzs7Ozs7O0FDckNBO0FBQ0E7OztBQUdBO0FBQ0EsK0xBQWdNLHFGQUFxRjs7QUFFclI7Ozs7Ozs7OztBQ1BBOzs7O0FBRUFBLFFBQVFDLFVBQVIsR0FBcUIsSUFBckI7QUFDQUQsUUFBUUUsWUFBUixHQUF1QkYsUUFBUUcsWUFBUixHQUF1QkgsUUFBUUksWUFBUixHQUF1QkosUUFBUUssU0FBUixHQUFvQkwsUUFBUU0sYUFBUixHQUF3Qk4sUUFBUU8sU0FBUixHQUFvQlAsUUFBUVEsZUFBUixHQUEwQlIsUUFBUVMs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QUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2ZXJ0aWNhbFwiIHN0eWxlPVwiaGVpZ2h0OiAyMHZoXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgb2Zmc2V0LTRcIj4gICAgIFxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1zaWduaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZm9ybS1zaWduaW4taGVhZGluZ1wiPlhpbiBt4budaSDEkcSDbmcgbmjhuq1wPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IDpkaXNhYmxlZD1cImRpc2FibGVkRm9ybVwiPiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbnB1dEVtYWlsXCIgY2xhc3M9XCJzci1vbmx5XCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwidXNlcm5hbWVcIiB0eXBlPVwiZW1haWxcIiBpZD1cImlucHV0RW1haWxcIiA6Y2xhc3M9XCJbZm9ybUVycm9yTWVzc2FnZSA/ICdpcy1pbnZhbGlkJyA6ICcnLCAnZm9ybS1jb250cm9sJ11cIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgcmVxdWlyZWQgYXV0b2ZvY3VzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCIgdi1pZj1cImZvcm1FcnJvck1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZm9ybUVycm9yTWVzc2FnZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbnB1dFBhc3N3b3JkXCIgY2xhc3M9XCJzci1vbmx5XCI+TeG6rXQga2jhuql1PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJpbnB1dFBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIk3huq10IGto4bqpdVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwicmVtZW1iZXItbWVcIiB2LW1vZGVsPVwicmVtZW1iZXJNZVwiPiBMxrB1IHTDoGkga2hv4bqjblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cImxvZ2luXCI+xJDEg25nIG5o4bqtcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gPCEtLSAvY29udGFpbmVyIC0tPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IHNldENvb2tpZSB9IGZyb20gJ3RpbnktY29va2llJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVtZW1iZXJNZTogZmFsc2UsXG4gICAgICAgICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgICAgICAgZm9ybUVycm9yTWVzc2FnZTogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlZEZvcm06IGZhbHNlLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGxvZ2luKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudXNlcm5hbWUgIT09IGZhbHNlICYmIHRoaXMucGFzc3dvcmQgIT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRGb3JtID0gXCJkaXNhYmxlZFwiO1xuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoYC4vb2F1dGgvdG9rZW5gLCB7XG4gICAgICAgICAgICAgICAgICAgIFwiZ3JhbnRfdHlwZVwiOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY2xpZW50X2lkXCI6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICBcImNsaWVudF9zZWNyZXRcIjogXCJEUmpFcWtIVlNXQzJkZVdqM0R1ZEJvSVZqUnNvd3JDMnBjU25ncHdCXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic2NvcGVcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICBcInBhc3N3b3JkXCI6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgfSkudGhlbiggcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX0FVVEhPUklaQVRJT05fVE9LRU4nLCBgQmVhcmVyICR7cmVzcG9uc2UuZGF0YS5hY2Nlc3NfdG9rZW59YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gIGBCZWFyZXIgJHtyZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbn1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVtZW1iZXJNZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvb2tpZSgnY29va2llLXRva2VuJywgYEJlYXJlciAke3Jlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VufWAsIFwiMVlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogXCJiYXNlLmRhc2hib2FyZFwifSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yTWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICBcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbi52dWU/YTBlMWYwYzIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIkxvZ2luLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTAxZTdmNjAyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMDFlN2Y2MDJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW4udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucmVtb3ZlQ29va2llID0gZXhwb3J0cy5zZXRSYXdDb29raWUgPSBleHBvcnRzLmdldFJhd0Nvb2tpZSA9IGV4cG9ydHMuc2V0Q29va2llID0gZXhwb3J0cy5nZXRBbGxDb29raWVzID0gZXhwb3J0cy5nZXRDb29raWUgPSBleHBvcnRzLmlzQ29va2llRW5hYmxlZCA9IGV4cG9ydHMucmVtb3ZlID0gZXhwb3J0cy5zZXRSYXcgPSBleHBvcnRzLmdldFJhdyA9IGV4cG9ydHMuc2V0ID0gZXhwb3J0cy5nZXRBbGwgPSBleHBvcnRzLmdldCA9IGV4cG9ydHMuaXNFbmFibGVkID0gdW5kZWZpbmVkO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vLyBDaGVjayBpZiB0aGUgYnJvd3NlciBjb29raWUgaXMgZW5hYmxlZC5cbmZ1bmN0aW9uIGlzRW5hYmxlZCgpIHtcbiAgdmFyIGtleSA9ICdAa2V5QCc7XG4gIHZhciB2YWx1ZSA9ICcxJztcbiAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnKD86Xnw7ICknICsga2V5ICsgJz0nICsgdmFsdWUgKyAnKD86O3wkKScpO1xuXG4gIGRvY3VtZW50LmNvb2tpZSA9IGtleSArICc9JyArIHZhbHVlO1xuXG4gIHZhciBlbmFibGVkID0gcmUudGVzdChkb2N1bWVudC5jb29raWUpO1xuXG4gIGlmIChlbmFibGVkKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgcmVtb3ZlKGtleSk7XG4gIH1cblxuICByZXR1cm4gZW5hYmxlZDtcbn1cblxuLy8gR2V0IHRoZSBjb29raWUgdmFsdWUgYnkga2V5LlxuZnVuY3Rpb24gZ2V0KGtleSkge1xuICB2YXIgZGVjb2RlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZGVjb2RlVVJJQ29tcG9uZW50O1xuXG4gIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyB8fCAha2V5KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgcmVLZXkgPSBuZXcgUmVnRXhwKCcoPzpefDsgKScgKyAoMCwgX3V0aWwuZXNjYXBlUmUpKGtleSkgKyAnKD86PShbXjtdKikpPyg/Ojt8JCknKTtcbiAgdmFyIG1hdGNoID0gcmVLZXkuZXhlYyhkb2N1bWVudC5jb29raWUpO1xuXG4gIGlmIChtYXRjaCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBkZWNvZGVyID09PSAnZnVuY3Rpb24nID8gZGVjb2RlcihtYXRjaFsxXSkgOiBtYXRjaFsxXTtcbn1cblxuLy8gVGhlIGFsbCBjb29raWVzXG5mdW5jdGlvbiBnZXRBbGwoKSB7XG4gIHZhciBkZWNvZGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBkZWNvZGVVUklDb21wb25lbnQ7XG5cbiAgdmFyIHJlS2V5ID0gLyg/Ol58OyApKFtePV0rPykoPzo9KFteO10qKSk/KD86O3wkKS9nO1xuICB2YXIgY29va2llcyA9IHt9O1xuICB2YXIgbWF0Y2ggPSB2b2lkIDA7XG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgd2hpbGUgKG1hdGNoID0gcmVLZXkuZXhlYyhkb2N1bWVudC5jb29raWUpKSB7XG4gICAgcmVLZXkubGFzdEluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaC5sZW5ndGggLSAxO1xuICAgIGNvb2tpZXNbbWF0Y2hbMV1dID0gdHlwZW9mIGRlY29kZXIgPT09ICdmdW5jdGlvbicgPyBkZWNvZGVyKG1hdGNoWzJdKSA6IG1hdGNoWzJdO1xuICB9XG5cbiAgcmV0dXJuIGNvb2tpZXM7XG59XG5cbi8vIFNldCBhIGNvb2tpZS5cbmZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gIHZhciBlbmNvZGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBlbmNvZGVVUklDb21wb25lbnQ7XG4gIHZhciBhdHRycyA9IGFyZ3VtZW50c1szXTtcblxuICBpZiAoKHR5cGVvZiBlbmNvZGVyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihlbmNvZGVyKSkgPT09ICdvYmplY3QnICYmIGVuY29kZXIgIT09IG51bGwpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIGF0dHJzID0gZW5jb2RlcjtcbiAgICBlbmNvZGVyID0gZW5jb2RlVVJJQ29tcG9uZW50O1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgfVxuICB2YXIgYXR0cnNTdHIgPSAoMCwgX3V0aWwuY29udmVydCkoYXR0cnMgfHwge30pO1xuICB2YXIgdmFsdWVTdHIgPSB0eXBlb2YgZW5jb2RlciA9PT0gJ2Z1bmN0aW9uJyA/IGVuY29kZXIodmFsdWUpIDogdmFsdWU7XG4gIHZhciBuZXdDb29raWUgPSBrZXkgKyAnPScgKyB2YWx1ZVN0ciArIGF0dHJzU3RyO1xuICBkb2N1bWVudC5jb29raWUgPSBuZXdDb29raWU7XG59XG5cbi8vIFJlbW92ZSBhIGNvb2tpZSBieSB0aGUgc3BlY2lmaWVkIGtleS5cbmZ1bmN0aW9uIHJlbW92ZShrZXksIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSB7IGV4cGlyZXM6IC0xIH07XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5kb21haW4pIHtcbiAgICBvcHRzLmRvbWFpbiA9IG9wdGlvbnMuZG9tYWluO1xuICB9XG5cbiAgcmV0dXJuIHNldChrZXksICdhJywgb3B0cyk7XG59XG5cbi8vIEdldCB0aGUgY29va2llJ3MgdmFsdWUgd2l0aG91dCBkZWNvZGluZy5cbmZ1bmN0aW9uIGdldFJhdyhrZXkpIHtcbiAgcmV0dXJuIGdldChrZXksIG51bGwpO1xufVxuXG4vLyBTZXQgYSBjb29raWUgd2l0aG91dCBlbmNvZGluZyB0aGUgdmFsdWUuXG5mdW5jdGlvbiBzZXRSYXcoa2V5LCB2YWx1ZSwgb3B0cykge1xuICByZXR1cm4gc2V0KGtleSwgdmFsdWUsIG51bGwsIG9wdHMpO1xufVxuXG5leHBvcnRzLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbmV4cG9ydHMuZ2V0ID0gZ2V0O1xuZXhwb3J0cy5nZXRBbGwgPSBnZXRBbGw7XG5leHBvcnRzLnNldCA9IHNldDtcbmV4cG9ydHMuZ2V0UmF3ID0gZ2V0UmF3O1xuZXhwb3J0cy5zZXRSYXcgPSBzZXRSYXc7XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbmV4cG9ydHMuaXNDb29raWVFbmFibGVkID0gaXNFbmFibGVkO1xuZXhwb3J0cy5nZXRDb29raWUgPSBnZXQ7XG5leHBvcnRzLmdldEFsbENvb2tpZXMgPSBnZXRBbGw7XG5leHBvcnRzLnNldENvb2tpZSA9IHNldDtcbmV4cG9ydHMuZ2V0UmF3Q29va2llID0gZ2V0UmF3O1xuZXhwb3J0cy5zZXRSYXdDb29raWUgPSBzZXRSYXc7XG5leHBvcnRzLnJlbW92ZUNvb2tpZSA9IHJlbW92ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1jb29raWUvbGliL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIGhhc093bihvYmosIGtleSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cblxuLy8gRXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycy5cbmZ1bmN0aW9uIGVzY2FwZVJlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1suKis/XiR8W1xcXSgpe31cXFxcLV0vZywgJ1xcXFwkJicpO1xufVxuXG4vLyBSZXR1cm4gYSBmdXR1cmUgZGF0ZSBieSB0aGUgZ2l2ZW4gc3RyaW5nLlxuZnVuY3Rpb24gY29tcHV0ZUV4cGlyZXMoc3RyKSB7XG4gIHZhciBsYXN0Q2ggPSBzdHIuY2hhckF0KHN0ci5sZW5ndGggLSAxKTtcbiAgdmFyIHZhbHVlID0gcGFyc2VJbnQoc3RyLCAxMCk7XG4gIHZhciBleHBpcmVzID0gbmV3IERhdGUoKTtcblxuICBzd2l0Y2ggKGxhc3RDaCkge1xuICAgIGNhc2UgJ1knOlxuICAgICAgZXhwaXJlcy5zZXRGdWxsWWVhcihleHBpcmVzLmdldEZ1bGxZZWFyKCkgKyB2YWx1ZSk7YnJlYWs7XG4gICAgY2FzZSAnTSc6XG4gICAgICBleHBpcmVzLnNldE1vbnRoKGV4cGlyZXMuZ2V0TW9udGgoKSArIHZhbHVlKTticmVhaztcbiAgICBjYXNlICdEJzpcbiAgICAgIGV4cGlyZXMuc2V0RGF0ZShleHBpcmVzLmdldERhdGUoKSArIHZhbHVlKTticmVhaztcbiAgICBjYXNlICdoJzpcbiAgICAgIGV4cGlyZXMuc2V0SG91cnMoZXhwaXJlcy5nZXRIb3VycygpICsgdmFsdWUpO2JyZWFrO1xuICAgIGNhc2UgJ20nOlxuICAgICAgZXhwaXJlcy5zZXRNaW51dGVzKGV4cGlyZXMuZ2V0TWludXRlcygpICsgdmFsdWUpO2JyZWFrO1xuICAgIGNhc2UgJ3MnOlxuICAgICAgZXhwaXJlcy5zZXRTZWNvbmRzKGV4cGlyZXMuZ2V0U2Vjb25kcygpICsgdmFsdWUpO2JyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBleHBpcmVzID0gbmV3IERhdGUoc3RyKTtcbiAgfVxuXG4gIHJldHVybiBleHBpcmVzO1xufVxuXG4vLyBDb252ZXJ0IGFuIG9iamVjdCB0byBhIGNvb2tpZSBvcHRpb24gc3RyaW5nLlxuZnVuY3Rpb24gY29udmVydChvcHRzKSB7XG4gIHZhciByZXMgPSAnJztcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgZm9yICh2YXIga2V5IGluIG9wdHMpIHtcbiAgICBpZiAoaGFzT3duKG9wdHMsIGtleSkpIHtcbiAgICAgIGlmICgvXmV4cGlyZXMkL2kudGVzdChrZXkpKSB7XG4gICAgICAgIHZhciBleHBpcmVzID0gb3B0c1trZXldO1xuXG4gICAgICAgIGlmICgodHlwZW9mIGV4cGlyZXMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGV4cGlyZXMpKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBleHBpcmVzICs9IHR5cGVvZiBleHBpcmVzID09PSAnbnVtYmVyJyA/ICdEJyA6ICcnO1xuICAgICAgICAgIGV4cGlyZXMgPSBjb21wdXRlRXhwaXJlcyhleHBpcmVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXMgKz0gJzsnICsga2V5ICsgJz0nICsgZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICAgICAgfSBlbHNlIGlmICgvXnNlY3VyZSQvLnRlc3Qoa2V5KSkge1xuICAgICAgICBpZiAob3B0c1trZXldKSB7XG4gICAgICAgICAgcmVzICs9ICc7JyArIGtleTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzICs9ICc7JyArIGtleSArICc9JyArIG9wdHNba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIWhhc093bihvcHRzLCAncGF0aCcpKSB7XG4gICAgcmVzICs9ICc7cGF0aD0vJztcbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydHMuaGFzT3duID0gaGFzT3duO1xuZXhwb3J0cy5lc2NhcGVSZSA9IGVzY2FwZVJlO1xuZXhwb3J0cy5jb21wdXRlRXhwaXJlcyA9IGNvbXB1dGVFeHBpcmVzO1xuZXhwb3J0cy5jb252ZXJ0ID0gY29udmVydDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1jb29raWUvbGliL3V0aWwuanMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidmVydGljYWxcIiwgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjIwdmhcIiB9IH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IG9mZnNldC00XCIgfSwgW1xuICAgICAgICBfYyhcImZvcm1cIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLXNpZ25pblwiIH0sIFtcbiAgICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1zaWduaW4taGVhZGluZ1wiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlhpbiBt4budaSDEkcSDbmcgbmjhuq1wXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImZpZWxkc2V0XCIsIHsgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZEZvcm0gfSB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNyLW9ubHlcIiwgYXR0cnM6IHsgZm9yOiBcImlucHV0RW1haWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkVtYWlsXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgIF92bS5mb3JtRXJyb3JNZXNzYWdlID8gXCJpcy1pbnZhbGlkXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgIGlkOiBcImlucHV0RW1haWxcIixcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS51c2VybmFtZSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS51c2VybmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uZm9ybUVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtRXJyb3JNZXNzYWdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzci1vbmx5XCIsIGF0dHJzOiB7IGZvcjogXCJpbnB1dFBhc3N3b3JkXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJN4bqtdCBraOG6qXVcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5wdXRQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiTeG6rXQga2jhuql1XCIsXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYXNzd29yZCB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2hlY2tib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZW1lbWJlck1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZW1lbWJlck1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiwgdmFsdWU6IFwicmVtZW1iZXItbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLnJlbWVtYmVyTWUpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShfdm0ucmVtZW1iZXJNZSwgXCJyZW1lbWJlci1tZVwiKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5yZW1lbWJlck1lXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0ucmVtZW1iZXJNZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gXCJyZW1lbWJlci1tZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiYgKF92bS5yZW1lbWJlck1lID0gJCRhLmNvbmNhdChbJCR2XSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0ucmVtZW1iZXJNZSA9ICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgJCRpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW1lbWJlck1lID0gJCRjXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBMxrB1IHTDoGkga2hv4bqjblxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tbGcgYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIF92bS5sb2dpbigkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwixJDEg25nIG5o4bqtcFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wMWU3ZjYwMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDFlN2Y2MDJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0wMWU3ZjYwMlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW4udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wMWU3ZjYwMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vTG9naW4udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJiOTVkMjViNFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wMWU3ZjYwMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vTG9naW4udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTAxZTdmNjAyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9Mb2dpbi52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMDFlN2Y2MDJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTAxZTdmNjAyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTAxZTdmNjAyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9Mb2dpbi52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwibGFzdCAyIHZlcnNpb25zXFxcIixcXFwiPiA1JSBpbiBCRVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9LFxcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCIsXFxcInRyYW5zZm9ybS1pbmxpbmUtZW52aXJvbm1lbnQtdmFyaWFibGVzXFxcIl19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wJmJ1c3RDYWNoZSEuL0xvZ2luLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDFlN2Y2MDJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vTG9naW4udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcTG9naW4udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgIHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7ICBjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wMWU3ZjYwMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTAxZTdmNjAyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuJyArICcgIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiXSwic291cmNlUm9vdCI6IiJ9