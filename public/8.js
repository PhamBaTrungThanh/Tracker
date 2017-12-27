webpackJsonp([8],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"node\":\"current\",\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Base.vue":
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
                axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
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
  return _c(
    "div",
    { staticClass: "wrapper" },
    [
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
                  _c("a", [_vm._v("Dự án")])
                ]),
                _vm._v(" "),
                _c("router-link", { attrs: { tag: "li", to: "/invoice" } }, [
                  _c("a", [_vm._v("Hóa đơn")])
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
          _c(
            "div",
            { staticClass: "container-fluid", attrs: { id: "navigation" } },
            [
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
            ]
          ),
          _vm._v(" "),
          _c("main", { staticClass: "container-fluid" }, [_c("router-view")], 1)
        ])
      ]),
      _vm._v(" "),
      _c("dialogs-wrapper")
    ],
    1
  )
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
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"node\":\"current\",\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Base.vue")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jhc2UudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQmFzZS52dWU/NmY2OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQmFzZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNBO0FBQ0E7O0FBR0E7QUFFQTt3Q0FDQTtvQ0FDQTtBQUNBOzhEQUNBLENBR0E7Z0VBRUE7O29CQUNBO3lGQUNBOzBCQUNBOzBCQUNBO3lCQUNBO2VBQ0E7eUJBRUE7O0FBQ0E7OztxQ0FJQTtBQUZBO0FBREEsd0NBSUE7NkJBQ0E7aUVBQ0E7K0hBQ0E7bUNBQ0E7K0RBQ0E7Z0VBQ0E7QUFFQTtBQUNBLHNDQUNBO2tEQUNBO2tDQUNBO2lDQUNBO3VCQUNBO2dDQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUE5Q0EsRzs7Ozs7OztBQ2xEQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUsseUJBQXlCO0FBQzlCO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRCxtQkFBbUIsU0FBUyxnQkFBZ0IsRUFBRTtBQUM5QyxxQkFBcUIsMEJBQTBCO0FBQy9DLHVCQUF1Qiw2QkFBNkI7QUFDcEQ7QUFDQSxzQkFBc0Isd0NBQXdDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVMsbUJBQW1CLEVBQUU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVMsOEJBQThCLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVMsMEJBQTBCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVMsNEJBQTRCLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVMsOEJBQThCLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2QkFBNkIscUJBQXFCLEVBQUU7QUFDdkU7QUFDQTtBQUNBLGFBQWEseUNBQXlDLG1CQUFtQixFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsaUJBQWlCO0FBQ2pCO0FBQ0EsNkJBQTZCLHFCQUFxQjtBQUNsRCxnQ0FBZ0Msb0JBQW9CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUNBQWlDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBLHlsQkFBZ2M7QUFDaGM7QUFDQSx3U0FBZ0w7QUFDaEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSx3REFBd0QsSUFBSTs7QUFFM0k7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInNpZGViYXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtbGlnaHRcIj57eyB1c2VyLnVzZXJuYW1lIH19PC9oNT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwic2VjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdGFnPVwibGlcIiB0bz1cIi9kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlRow7RuZyBiw6FvPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdGFnPVwibGlcIiB0bz1cIi93b3Jrc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+ROG7sSDDoW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0YWc9XCJsaVwiIHRvPVwiL2ludm9pY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkjDs2EgxJHGoW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0YWc9XCJsaVwiIHRvPVwiL21hdGVyaWFsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+VuG6rXQgdMawL0LDoW8gZ2nDoTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1haW4tY29udGVudFwiIGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmF2aWdhdGlvblwiIGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT1cImhlaWdodDogMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImg0XCI+e3sgcGFnZVRpdGxlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGlhbG9ncy13cmFwcGVyPjwvZGlhbG9ncy13cmFwcGVyPiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4JztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAndGlueS1jb29raWUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgcGFnZVRpdGxlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcm91dGUubWV0YS50aXRsZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC4uLm1hcFN0YXRlKFtcclxuICAgICAgICAgICAgJ3VzZXInLFxyXG4gICAgICAgIF0pLFxyXG4gICAgfSxcclxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdldHRpbmcgdG9rZW4gZnJvbSBjb29raWVcIik7XHJcbiAgICAgICAgY29uc3QgY29va2llVG9rZW4gPSBnZXRDb29raWUoJ2Nvb2tpZS10b2tlbicpO1xyXG4gICAgICAgIGlmICghY29va2llVG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNvb2tpZXMncyBlbXB0eSwgcHJvY2VlZCB0byBsb2dpblwiKTtcclxuICAgICAgICAgICAgbmV4dCh7bmFtZTogXCJsb2dpblwifSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiVG9rZW4gZm91bmQgZnJvbSBjb29raWVzXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gZG8gYSBjYWxsIHRvIC4vdXNlclxyXG4gICAgICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly90cmFja2VyLmRldi9hcGkvdjEvdXNlcmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogY29va2llVG9rZW5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJUb2tlbiBpcyBsZWdpdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gY29va2llVG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQ1NSRi1UT0tFTiddID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQodm0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kc3RvcmUuY29tbWl0KCdTRVRfVVNFUicsIHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRzdG9yZS5jb21taXQoJ1NFVF9BVVRIT1JJWkFUSU9OX1RPS0VOJywgY29va2llVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRva2VuIGlsZWdhbCwgcHJvY2VlZCB0byBsb2dpblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCh7bmFtZTogXCJsb2dpblwifSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9CYXNlLnZ1ZT9kZmI4YTI2NCIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqL1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgdmFyIGZ1bmN0aW9uYWwgPSBvcHRpb25zLmZ1bmN0aW9uYWxcbiAgICB2YXIgZXhpc3RpbmcgPSBmdW5jdGlvbmFsXG4gICAgICA/IG9wdGlvbnMucmVuZGVyXG4gICAgICA6IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG5cbiAgICBpZiAoIWZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gZXhpc3RpbmcoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ3cmFwcGVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBuby1ndXR0ZXJzXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcInNpZGViYXJcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVzZXJpbmZvXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1c2VyLWF2YXRhclwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciB0ZXh0LWxpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLnVzZXJuYW1lKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IHJvbGU6IFwic2VjdGlvbnNcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdGFnOiBcImxpXCIsIHRvOiBcIi9kYXNoYm9hcmRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCBbX3ZtLl92KFwiVGjDtG5nIGLDoW9cIildKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRhZzogXCJsaVwiLCB0bzogXCIvd29ya3NcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCBbX3ZtLl92KFwiROG7sSDDoW5cIildKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRhZzogXCJsaVwiLCB0bzogXCIvaW52b2ljZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoXCJIw7NhIMSRxqFuXCIpXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0YWc6IFwibGlcIiwgdG86IFwiL21hdGVyaWFsc1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoXCJW4bqtdCB0xrAvQsOhbyBnacOhXCIpXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIsIGF0dHJzOiB7IGlkOiBcIm1haW4tY29udGVudFwiIH0gfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIsIGF0dHJzOiB7IGlkOiBcIm5hdmlnYXRpb25cIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwMCVcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaDRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucGFnZVRpdGxlKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibWFpblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtfYyhcInJvdXRlci12aWV3XCIpXSwgMSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGlhbG9ncy13cmFwcGVyXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzM2NzI0NDhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTczNjcyNDQ4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9CYXNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi03MzY3MjQ0OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQmFzZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwibGFzdCAyIHZlcnNpb25zXFxcIixcXFwiPiA1JSBpbiBCRVxcXCJdLFxcXCJub2RlXFxcIjpcXFwiY3VycmVudFxcXCIsXFxcInVnbGlmeVxcXCI6dHJ1ZX0sXFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIixcXFwidHJhbnNmb3JtLWlubGluZS1lbnZpcm9ubWVudC12YXJpYWJsZXNcXFwiXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAmYnVzdENhY2hlIS4vQmFzZS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTczNjcyNDQ4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL0Jhc2UudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxCYXNlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7ICByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkgeyAgY29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzM2NzI0NDhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03MzY3MjQ0OFwiLCBDb21wb25lbnQub3B0aW9ucylcbicgKyAnICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQmFzZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jhc2UudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gOCJdLCJzb3VyY2VSb290IjoiIn0=