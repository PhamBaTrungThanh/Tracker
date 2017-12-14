webpackJsonp([1],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./node_modules/vue-fullscreen/src/component.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vue-fullscreen/src/utils.js");
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
  props: {
    background: {
      type: String,
      default: '#333'
    },
    fullscreenClass: {
      type: String,
      default: 'fullscreen'
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      supportFullScreen: false,
      isFullscreen: false
    };
  },


  computed: {
    wrapperStyle: function wrapperStyle() {
      return {
        'background': this.background,
        'overflow-y': 'auto',
        'width': '100%',
        'height': '100%'
      };
    }
  },

  methods: {
    toggle: function toggle(value) {
      if (value === undefined) {
        // 如果已经是全屏状态，则退出
        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* fullScreenStatus */])()) {
          this.exit();
        } else {
          this.enter();
        }
      } else {
        value ? this.enter() : this.exit();
      }
    },
    enter: function enter() {
      if (!this.supportFullScreen) {
        return;
      }
      Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* onFullScreenEvent */])(this.fullScreenCallback);
      Object(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* requestFullscreen */])(this.$el);
    },
    exit: function exit() {
      if (!this.supportFullScreen) {
        return;
      }
      Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* exitFullscreen */])();
    },
    getState: function getState() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* fullScreenStatus */])();
    },
    shadeClick: function shadeClick(e) {
      if (e.target === this.$el) {
        this.exit();
      }
    },
    fullScreenCallback: function fullScreenCallback() {
      this.isFullscreen = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* fullScreenStatus */])();
      if (!this.isFullscreen) {
        // 退出全屏时解绑回调
        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* offFullScreenEvent */])(this.fullScreenCallback);
      }
      this.$emit('change', this.isFullscreen);
      this.$emit('update:fullscreen', this.isFullscreen);
    }
  },

  watch: {
    fullscreen: function fullscreen(value) {
      if (value !== Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* fullScreenStatus */])()) {
        value ? this.enter() : this.exit();
      }
    }
  },

  created: function created() {
    this.supportFullScreen = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* supportFullScreen */])();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Works.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_fullscreen_src_component_vue__ = __webpack_require__("./node_modules/vue-fullscreen/src/component.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_fullscreen_src_component_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_fullscreen_src_component_vue__);
//
//
//
//
//
//
//
//
//
//
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
            works: [],
            report: false,
            tableSetting: {
                stretchH: "all",
                contextMenu: true,
                colWidths: [20, 100, 30, 30, 50, 50, 60, 60, 60, 60, 60],
                mergeCells: [{ row: 0, col: 0, rowspan: 3, colspan: 1 }, { row: 0, col: 1, rowspan: 1, colspan: 3 }, { row: 0, col: 4, rowspan: 1, colspan: 5 }, { row: 0, col: 9, rowspan: 1, colspan: 2 }, { row: 0, col: 11, rowspan: 3, colspan: 1 },
                // row 2
                { row: 1, col: 1, rowspan: 2, colspan: 1 }, { row: 1, col: 2, rowspan: 2, colspan: 1 }, { row: 1, col: 3, rowspan: 2, colspan: 1 }, { row: 1, col: 4, rowspan: 2, colspan: 1 }, { row: 1, col: 5, rowspan: 2, colspan: 1 }, { row: 1, col: 6, rowspan: 2, colspan: 1 }, { row: 1, col: 7, rowspan: 1, colspan: 2 }, { row: 1, col: 9, rowspan: 2, colspan: 1 }, { row: 1, col: 10, rowspan: 2, colspan: 1 }]
            },
            fullscreen: false,
            data: {},
            tableHeaders: [["STT", "Loại vật tư", "", "", "Hợp đồng", "", "", "", "", "BOQ", "", "Ghi chú"], ["", "Tên hàng", "ĐVT", "Loại tiền", "Số Lượng", "Đơn giá", "Thành tiền", "Tạm ứng/thanh toán", "", "Số lượng", "Đơn giá", ""], ["", "", "", "", "", "", "", "Ngày", "Số tiền", "", "", ""]]
        };
    },

    computed: {
        tableData: function tableData() {
            return this.tableHeaders;
        }
    },
    methods: {
        viewReports: function viewReports(work_id) {
            var _this = this;

            this.$refs.fullscreen.enter();
            this.axios.get(this.$store.state.apiBase + "/work/" + work_id).then(function (response) {
                _this.report = response.data.data;
                _this.flattenData(_this.report.categories);
            }).catch(function (error) {
                console.log(error);
            });
        },
        flattenData: function flattenData(data) {
            for (var index in data) {}
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        this.axios.get(this.$store.state.apiBase + "/works").then(function (response) {
            _this2.works = response.data.data;
        }).catch(function (error) {
            console.log(error);
        });
    },

    components: {
        Fullscreen: __WEBPACK_IMPORTED_MODULE_0_vue_fullscreen_src_component_vue___default.a
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ab2524ca\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Works.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Works.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-fullscreen/src/component.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./node_modules/vue-fullscreen/src/component.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-006fed3f\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./node_modules/vue-fullscreen/src/component.vue")
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
Component.options.__file = "node_modules\\vue-fullscreen\\src\\component.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-006fed3f", Component.options)
  } else {
    hotAPI.reload("data-v-006fed3f", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/vue-fullscreen/src/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = supportFullScreen;
/* harmony export (immutable) */ __webpack_exports__["b"] = fullScreenStatus;
/* harmony export (immutable) */ __webpack_exports__["e"] = requestFullscreen;
/* harmony export (immutable) */ __webpack_exports__["a"] = exitFullscreen;
/* harmony export (immutable) */ __webpack_exports__["d"] = onFullScreenEvent;
/* harmony export (immutable) */ __webpack_exports__["c"] = offFullScreenEvent;
/* unused harmony export extend */
function supportFullScreen() {
  var doc = document.documentElement;

  return 'requestFullscreen' in doc || 'mozRequestFullScreen' in doc && document.mozFullScreenEnabled || 'msRequestFullscreen' in doc && document.msFullscreenEnabled || 'webkitRequestFullScreen' in doc;
}

function fullScreenStatus() {
  if (document.fullscreen || document.mozFullScreen || document.fullscreenElement || document.msFullscreenElement || document.webkitIsFullScreen) {
    return true;
  } else {
    return false;
  }
}

function requestFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else {
    console.log('Fullscreen API is not supported.');
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else {
    console.log('Fullscreen API is not supported.');
  }
}

function onFullScreenEvent(callback) {
  document.addEventListener('fullscreenchange', callback);
  document.addEventListener('mozfullscreenchange', callback);
  document.addEventListener('MSFullscreenChange', callback);
  document.addEventListener('webkitfullscreenchange', callback);
}

function offFullScreenEvent(callback) {
  document.removeEventListener('fullscreenchange', callback);
  document.removeEventListener('mozfullscreenchange', callback);
  document.removeEventListener('MSFullscreenChange', callback);
  document.removeEventListener('webkitfullscreenchange', callback);
}

// 实现jquery对象继承，支持深拷贝
function extend() {
  var extended = {};
  var deep = false;
  var i = 0;
  var length = arguments.length;

  if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
    deep = arguments[0];
    i++;
  }

  function merge(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          extended[prop] = extend(true, extended[prop], obj[prop]);
        } else {
          extended[prop] = obj[prop];
        }
      }
    }
  }

  for (; i < length; i++) {
    var obj = arguments[i];
    merge(obj);
  }

  return extended;
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-006fed3f\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./node_modules/vue-fullscreen/src/component.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: _vm.isFullscreen ? [_vm.fullscreenClass] : [],
      style: _vm.isFullscreen ? [_vm.wrapperStyle] : [],
      on: {
        click: function($event) {
          _vm.shadeClick($event)
        }
      }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-006fed3f", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ab2524ca\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Works.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "works" } },
    [
      _vm.works
        ? _c(
            "div",
            { staticClass: "card-deck works" },
            _vm._l(_vm.works, function(work) {
              return _c("div", { key: work.id, staticClass: "card work" }, [
                _c("img", {
                  staticClass: "card-img-top",
                  attrs: {
                    src: "http://via.placeholder.com/350x150",
                    alt: "Card image cap"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("h4", { staticClass: "card-title" }, [
                    _vm._v(_vm._s(work.name))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "card-text" }, [
                    _vm._v(_vm._s(work.description))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "card-text" }, [
                    _c("small", { staticClass: "text-muted" }, [
                      _vm._v(_vm._s(work.client))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "float-right btn btn-primary",
                      on: {
                        click: function($event) {
                          _vm.viewReports(work.id)
                        }
                      }
                    },
                    [_vm._v("Xem báo cáo")]
                  )
                ])
              ])
            })
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "fullscreen",
        {
          ref: "fullscreen",
          attrs: { fullscreen: _vm.fullscreen, background: "#ffffff" },
          on: {
            "update:fullscreen": function($event) {
              _vm.fullscreen = $event
            }
          }
        },
        [
          _vm.fullscreen
            ? _c("hot-table", {
                attrs: { settings: _vm.tableSetting, data: _vm.tableData }
              })
            : _vm._e()
        ],
        1
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-ab2524ca", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ab2524ca\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Works.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ab2524ca\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Works.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("418c652c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ab2524ca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Works.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ab2524ca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Works.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/Works.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ab2524ca\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Works.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Works.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ab2524ca\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Works.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\Works.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ab2524ca", Component.options)
  } else {
    hotAPI.reload("data-v-ab2524ca", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3Z1ZS1mdWxsc2NyZWVuL3NyYy9jb21wb25lbnQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV29ya3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xb3Jrcy52dWU/ZjAxNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWZ1bGxzY3JlZW4vc3JjL2NvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1mdWxsc2NyZWVuL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWZ1bGxzY3JlZW4vc3JjL2NvbXBvbmVudC52dWU/NGY1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV29ya3MudnVlPzZhMWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dvcmtzLnZ1ZT9lMDhjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xb3Jrcy52dWUiXSwibmFtZXMiOlsic3VwcG9ydEZ1bGxTY3JlZW4iLCJkb2MiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsIm1vekZ1bGxTY3JlZW5FbmFibGVkIiwibXNGdWxsc2NyZWVuRW5hYmxlZCIsImZ1bGxTY3JlZW5TdGF0dXMiLCJmdWxsc2NyZWVuIiwibW96RnVsbFNjcmVlbiIsImZ1bGxzY3JlZW5FbGVtZW50IiwibXNGdWxsc2NyZWVuRWxlbWVudCIsIndlYmtpdElzRnVsbFNjcmVlbiIsInJlcXVlc3RGdWxsc2NyZWVuIiwiZWxlbWVudCIsIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJtc1JlcXVlc3RGdWxsc2NyZWVuIiwiY29uc29sZSIsImxvZyIsImV4aXRGdWxsc2NyZWVuIiwid2Via2l0RXhpdEZ1bGxzY3JlZW4iLCJtb3pDYW5jZWxGdWxsU2NyZWVuIiwibXNFeGl0RnVsbHNjcmVlbiIsIm9uRnVsbFNjcmVlbkV2ZW50IiwiY2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmRnVsbFNjcmVlbkV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV4dGVuZCIsImV4dGVuZGVkIiwiZGVlcCIsImkiLCJsZW5ndGgiLCJhcmd1bWVudHMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJtZXJnZSIsIm9iaiIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7O0FBRUE7OztZQUlBO2VBRUE7QUFIQTs7WUFLQTtlQUVBO0FBSEE7O1lBS0E7ZUFJQTtBQUxBO0FBVEE7O3dCQWVBOzt5QkFFQTtvQkFFQTtBQUhBO0FBS0E7Ozs7MENBRUE7OzJCQUVBO3NCQUNBO2lCQUNBO2tCQUVBO0FBTEE7QUFRQTtBQVZBOzs7bUNBWUE7K0JBQ0E7QUFDQTt3RkFDQTtlQUNBO2VBQ0E7ZUFDQTtBQUNBO2FBQ0E7b0NBQ0E7QUFDQTtBQUNBOzRCQUNBO21DQUNBO0FBQ0E7QUFDQTtxRkFDQTtxRkFDQTtBQUNBOzBCQUNBO21DQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7a0NBQ0E7YUFDQTtBQUNBO3VDQUNBO2lDQUNBO2FBQ0E7QUFDQTtBQUNBO3NEQUNBOzBCQUNBOzhCQUNBO0FBQ0E7d0ZBQ0E7QUFDQTtnQ0FDQTsyQ0FDQTtBQUdBO0FBNUNBOzs7MkNBOENBO2dHQUNBO29DQUNBO0FBQ0E7QUFHQTtBQVBBOzs4QkFRQTs2QkFDQTtBQUNBO0FBekZBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNPQTtBQUNBOzBCQUVBOzttQkFFQTtvQkFDQTs7MEJBRUE7NkJBQ0E7cUVBQ0E7NEJBQ0Esd0NBQ0EsNENBQ0EsNENBQ0EsNENBQ0EsNkNBQ0E7QUFDQTt1REFDQSw0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a0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDdkZBOztBQUVBO0FBQ0EsNlVBQW1PO0FBQ25PO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnSkFBZ0osa0ZBQWtGO0FBQ2xPLHlKQUF5SixrRkFBa0Y7QUFDM087QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBLDBXQUFtTTtBQUNuTTtBQUNBO0FBQ0E7QUFDQSxxa0JBQTJhO0FBQzNhO0FBQ0EseVNBQWdMO0FBQ2hMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usd0RBQXdELElBQUk7O0FBRTNJO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IDpzdHlsZT1cImlzRnVsbHNjcmVlbj9bd3JhcHBlclN0eWxlXTpbXVwiXHJcbiAgICAgICA6Y2xhc3M9XCJpc0Z1bGxzY3JlZW4/W2Z1bGxzY3JlZW5DbGFzc106W11cIlxyXG4gICAgICAgQGNsaWNrPVwic2hhZGVDbGljaygkZXZlbnQpXCJcclxuICA+XHJcbiAgICA8c2xvdD5cclxuICAgIDwvc2xvdD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge3N1cHBvcnRGdWxsU2NyZWVuLCBmdWxsU2NyZWVuU3RhdHVzLCByZXF1ZXN0RnVsbHNjcmVlbiwgZXhpdEZ1bGxzY3JlZW4sIG9uRnVsbFNjcmVlbkV2ZW50LCBvZmZGdWxsU2NyZWVuRXZlbnR9IGZyb20gJy4vdXRpbHMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJyMzMzMnXHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bGxzY3JlZW5DbGFzczoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAnZnVsbHNjcmVlbidcclxuICAgICAgfSxcclxuICAgICAgZnVsbHNjcmVlbjoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkYXRhICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdXBwb3J0RnVsbFNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgaXNGdWxsc2NyZWVuOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIHdyYXBwZXJTdHlsZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICdiYWNrZ3JvdW5kJzogdGhpcy5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgJ292ZXJmbG93LXknOiAnYXV0bycsXHJcbiAgICAgICAgICAnd2lkdGgnOiAnMTAwJScsXHJcbiAgICAgICAgICAnaGVpZ2h0JzogJzEwMCUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgdG9nZ2xlICh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAvLyDlpoLmnpzlt7Lnu4/mmK/lhajlsY/nirbmgIHvvIzliJnpgIDlh7pcclxuICAgICAgICAgIGlmIChmdWxsU2NyZWVuU3RhdHVzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5leGl0KClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXIoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YWx1ZSA/IHRoaXMuZW50ZXIoKSA6IHRoaXMuZXhpdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlbnRlciAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN1cHBvcnRGdWxsU2NyZWVuKSB7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgb25GdWxsU2NyZWVuRXZlbnQodGhpcy5mdWxsU2NyZWVuQ2FsbGJhY2spXHJcbiAgICAgICAgcmVxdWVzdEZ1bGxzY3JlZW4odGhpcy4kZWwpXHJcbiAgICAgIH0sXHJcbiAgICAgIGV4aXQgKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdXBwb3J0RnVsbFNjcmVlbikge1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4aXRGdWxsc2NyZWVuKClcclxuICAgICAgfSxcclxuICAgICAgZ2V0U3RhdGUgKCkge1xyXG4gICAgICAgIHJldHVybiBmdWxsU2NyZWVuU3RhdHVzKClcclxuICAgICAgfSxcclxuICAgICAgc2hhZGVDbGljayAoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy4kZWwpIHtcclxuICAgICAgICAgIHRoaXMuZXhpdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmdWxsU2NyZWVuQ2FsbGJhY2sgKCkge1xyXG4gICAgICAgIHRoaXMuaXNGdWxsc2NyZWVuID0gZnVsbFNjcmVlblN0YXR1cygpXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgLy8g6YCA5Ye65YWo5bGP5pe26Kej57uR5Zue6LCDXHJcbiAgICAgICAgICBvZmZGdWxsU2NyZWVuRXZlbnQodGhpcy5mdWxsU2NyZWVuQ2FsbGJhY2spXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMuaXNGdWxsc2NyZWVuKVxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTpmdWxsc2NyZWVuJywgdGhpcy5pc0Z1bGxzY3JlZW4pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgZnVsbHNjcmVlbiAodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgIT09IGZ1bGxTY3JlZW5TdGF0dXMoKSkge1xyXG4gICAgICAgICAgdmFsdWUgPyB0aGlzLmVudGVyKCkgOiB0aGlzLmV4aXQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVkICgpIHtcclxuICAgICAgdGhpcy5zdXBwb3J0RnVsbFNjcmVlbiA9IHN1cHBvcnRGdWxsU2NyZWVuKClcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbm9kZV9tb2R1bGVzL3Z1ZS1mdWxsc2NyZWVuL3NyYy9jb21wb25lbnQudnVlPzE3MzA2ZGIwIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBpZD1cIndvcmtzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZGVjayB3b3Jrc1wiIHYtaWY9XCJ3b3Jrc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCB3b3JrXCIgdi1mb3I9XCJ3b3JrIGluIHdvcmtzXCIgOmtleT1cIndvcmsuaWRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWltZy10b3BcIiBzcmM9XCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zNTB4MTUwXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgd29yay5uYW1lIH19PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPnt7IHdvcmsuZGVzY3JpcHRpb24gfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+e3sgd29yay5jbGllbnQgfX08L3NtYWxsPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZmxvYXQtcmlnaHQgYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrPVwidmlld1JlcG9ydHMod29yay5pZClcIj5YZW0gYsOhbyBjw6FvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmdWxsc2NyZWVuIDpmdWxsc2NyZWVuLnN5bmM9XCJmdWxsc2NyZWVuXCIgcmVmPVwiZnVsbHNjcmVlblwiIGJhY2tncm91bmQ9XCIjZmZmZmZmXCI+XHJcbiAgICAgICAgICAgIDxob3QtdGFibGUgOnNldHRpbmdzPVwidGFibGVTZXR0aW5nXCIgdi1pZj1cImZ1bGxzY3JlZW5cIiA6ZGF0YT1cInRhYmxlRGF0YVwiPjwvaG90LXRhYmxlPlxyXG4gICAgICAgIDwvZnVsbHNjcmVlbj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSBcInZ1ZS1mdWxsc2NyZWVuL3NyYy9jb21wb25lbnQudnVlXCJcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3b3JrczogW10sXHJcbiAgICAgICAgICAgIHJlcG9ydDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRhYmxlU2V0dGluZzoge1xyXG4gICAgICAgICAgICAgICAgc3RyZXRjaEg6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWVudTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbFdpZHRoczogWzIwLCAxMDAsIDMwLCAzMCwgNTAsIDUwLCA2MCwgNjAsIDYwLCA2MCwgNjBdLFxyXG4gICAgICAgICAgICAgICAgbWVyZ2VDZWxsczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtyb3c6IDAsIGNvbDogMCwgcm93c3BhbjogMywgY29sc3BhbjogMX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3JvdzogMCwgY29sOiAxLCByb3dzcGFuOiAxLCBjb2xzcGFuOiAzfSxcclxuICAgICAgICAgICAgICAgICAgICB7cm93OiAwLCBjb2w6IDQsIHJvd3NwYW46IDEsIGNvbHNwYW46IDV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtyb3c6IDAsIGNvbDogOSwgcm93c3BhbjogMSwgY29sc3BhbjogMn0sXHJcbiAgICAgICAgICAgICAgICAgICAge3JvdzogMCwgY29sOiAxMSwgcm93c3BhbjogMywgY29sc3BhbjogMX0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcm93IDJcclxuICAgICAgICAgICAgICAgICAgICB7cm93OiAxLCBjb2w6IDEsIHJvd3NwYW46IDIsIGNvbHNwYW46IDF9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtyb3c6IDEsIGNvbDogMiwgcm93c3BhbjogMiwgY29sc3BhbjogMX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3JvdzogMSwgY29sOiAzLCByb3dzcGFuOiAyLCBjb2xzcGFuOiAxfSxcclxuICAgICAgICAgICAgICAgICAgICB7cm93OiAxLCBjb2w6IDQsIHJvd3NwYW46IDIsIGNvbHNwYW46IDF9LCBcclxuICAgICAgICAgICAgICAgICAgICB7cm93OiAxLCBjb2w6IDUsIHJvd3NwYW46IDIsIGNvbHNwYW46IDF9LCAgICBcclxuICAgICAgICAgICAgICAgICAgICB7cm93OiAxLCBjb2w6IDYsIHJvd3NwYW46IDIsIGNvbHNwYW46IDF9LCAgICBcclxuICAgICAgICAgICAgICAgICAgICB7cm93OiAxLCBjb2w6IDcsIHJvd3NwYW46IDEsIGNvbHNwYW46IDJ9LCAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtyb3c6IDEsIGNvbDogOSwgcm93c3BhbjogMiwgY29sc3BhbjogMX0sICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtyb3c6IDEsIGNvbDogMTAsIHJvd3NwYW46IDIsIGNvbHNwYW46IDF9LCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgdGFibGVIZWFkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJTVFRcIiwgXCJMb+G6oWkgduG6rXQgdMawXCIsIFwiXCIgICAsIFwiXCIgICAgICAgICAsIFwiSOG7o3AgxJHhu5NuZ1wiLCBcIlwiICAgICAgICwgXCJcIiAgICAgICAgICAsXCJcIiAgICAgICAgICAgICAgICAgICAsIFwiXCIgICAgICAsIFwiQk9RXCIgICAgICwgXCJcIiAgICAgICAsXCJHaGkgY2jDulwiXSxcclxuICAgICAgICAgICAgICAgIFtcIlwiICAgLCBcIlTDqm4gaMOgbmdcIiAgICwgXCLEkFZUXCIsIFwiTG/huqFpIHRp4buBblwiLCBcIlPhu5EgTMaw4bujbmdcIiwgXCLEkMahbiBnacOhXCIsIFwiVGjDoG5oIHRp4buBblwiLCBcIlThuqFtIOG7qW5nL3RoYW5oIHRvw6FuXCIsIFwiXCIgICAgICAsIFwiU+G7kSBsxrDhu6NuZ1wiLCBcIsSQxqFuIGdpw6FcIiwgXCJcIl0sXHJcbiAgICAgICAgICAgICAgICBbXCJcIiAgICwgXCJcIiAgICAgICAgICAgLCBcIlwiICAgLCBcIlwiICAgICAgICAgLCBcIlwiICAgICAgICAsIFwiXCIgICAgICAgLCBcIlwiICAgICAgICAgICwgXCJOZ8OgeVwiICAgICAgICAgICAgICAsXCJT4buRIHRp4buBblwiLCBcIlwiICAgICAgICAsIFwiXCIgICAgICAgLCBcIlwiXSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICB0YWJsZURhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhYmxlSGVhZGVycztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHZpZXdSZXBvcnRzKHdvcmtfaWQpIHtcclxuICAgICAgICAgICAgdGhpcy4kcmVmcy5mdWxsc2NyZWVuLmVudGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXhpb3MuZ2V0KGAke3RoaXMuJHN0b3JlLnN0YXRlLmFwaUJhc2V9L3dvcmsvJHt3b3JrX2lkfWApLnRoZW4oIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0ID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbGF0dGVuRGF0YSh0aGlzLnJlcG9ydC5jYXRlZ29yaWVzKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmbGF0dGVuRGF0YShkYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5heGlvcy5nZXQoYCR7dGhpcy4kc3RvcmUuc3RhdGUuYXBpQmFzZX0vd29ya3NgKS50aGVuKCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMud29ya3MgPSByZXNwb25zZS5kYXRhLmRhdGE7XHJcbiAgICAgICAgfSkuY2F0Y2goIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBGdWxsc2NyZWVuLFxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV29ya3MudnVlPzFkOTA1YmNhIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJXb3Jrcy52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1hYjI1MjRjYVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xb3Jrcy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWFiMjUyNGNhXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dvcmtzLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVudlxcXCIse1xcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcImxhc3QgMiB2ZXJzaW9uc1xcXCIsXFxcIj4gNSUgaW4gQkVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfSxcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiLFxcXCJ0cmFuc2Zvcm0taW5saW5lLWVudmlyb25tZW50LXZhcmlhYmxlc1xcXCJdfSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wJmJ1c3RDYWNoZSEuL2NvbXBvbmVudC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDA2ZmVkM2ZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi9jb21wb25lbnQudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIm5vZGVfbW9kdWxlc1xcXFx2dWUtZnVsbHNjcmVlblxcXFxzcmNcXFxcY29tcG9uZW50LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7ICByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkgeyAgY29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDA2ZmVkM2ZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wMDZmZWQzZlwiLCBDb21wb25lbnQub3B0aW9ucylcbicgKyAnICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWZ1bGxzY3JlZW4vc3JjL2NvbXBvbmVudC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1mdWxsc2NyZWVuL3NyYy9jb21wb25lbnQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0RnVsbFNjcmVlbiAoKSB7XG4gIGNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuXG4gIHJldHVybiAoJ3JlcXVlc3RGdWxsc2NyZWVuJyBpbiBkb2MpIHx8XG4gICAgKCdtb3pSZXF1ZXN0RnVsbFNjcmVlbicgaW4gZG9jICYmIGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbmFibGVkKSB8fFxuICAgICgnbXNSZXF1ZXN0RnVsbHNjcmVlbicgaW4gZG9jICYmIGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVuYWJsZWQpIHx8XG4gICAgKCd3ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbicgaW4gZG9jKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZnVsbFNjcmVlblN0YXR1cyAoKSB7XG4gIGlmIChkb2N1bWVudC5mdWxsc2NyZWVuIHx8XG4gICAgZG9jdW1lbnQubW96RnVsbFNjcmVlbiB8fFxuICAgIGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50IHx8XG4gICAgZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudCB8fFxuICAgIGRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbikge1xuICAgIHJldHVybiB0cnVlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RGdWxsc2NyZWVuIChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpXG4gIH0gZWxzZSBpZiAoZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgIGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKVxuICB9IGVsc2UgaWYgKGVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICBlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKClcbiAgfSBlbHNlIGlmIChlbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICBlbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4oKVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdGdWxsc2NyZWVuIEFQSSBpcyBub3Qgc3VwcG9ydGVkLicpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4aXRGdWxsc2NyZWVuICgpIHtcbiAgaWYgKGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKVxuICB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XG4gICAgZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKVxuICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4pIHtcbiAgICBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKClcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKSB7XG4gICAgZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbigpXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ0Z1bGxzY3JlZW4gQVBJIGlzIG5vdCBzdXBwb3J0ZWQuJylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25GdWxsU2NyZWVuRXZlbnQgKGNhbGxiYWNrKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBjYWxsYmFjaylcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW96ZnVsbHNjcmVlbmNoYW5nZScsIGNhbGxiYWNrKVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdNU0Z1bGxzY3JlZW5DaGFuZ2UnLCBjYWxsYmFjaylcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsIGNhbGxiYWNrKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmRnVsbFNjcmVlbkV2ZW50IChjYWxsYmFjaykge1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgY2FsbGJhY2spXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLCBjYWxsYmFjaylcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignTVNGdWxsc2NyZWVuQ2hhbmdlJywgY2FsbGJhY2spXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLCBjYWxsYmFjaylcbn1cblxuLy8g5a6e546wanF1ZXJ55a+56LGh57un5om/77yM5pSv5oyB5rex5ou36LSdXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kICgpIHtcbiAgY29uc3QgZXh0ZW5kZWQgPSB7fVxuICBsZXQgZGVlcCA9IGZhbHNlXG4gIGxldCBpID0gMFxuICBjb25zdCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXG5cbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudHNbMF0pID09PSAnW29iamVjdCBCb29sZWFuXScpIHtcbiAgICBkZWVwID0gYXJndW1lbnRzWzBdXG4gICAgaSsrXG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZSAob2JqKSB7XG4gICAgZm9yIChsZXQgcHJvcCBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xuICAgICAgICBpZiAoZGVlcCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqW3Byb3BdKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgICAgICBleHRlbmRlZFtwcm9wXSA9IGV4dGVuZCh0cnVlLCBleHRlbmRlZFtwcm9wXSwgb2JqW3Byb3BdKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV4dGVuZGVkW3Byb3BdID0gb2JqW3Byb3BdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXVxuICAgIG1lcmdlKG9iailcbiAgfVxuXG4gIHJldHVybiBleHRlbmRlZFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1mdWxsc2NyZWVuL3NyYy91dGlscy5qcyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBjbGFzczogX3ZtLmlzRnVsbHNjcmVlbiA/IFtfdm0uZnVsbHNjcmVlbkNsYXNzXSA6IFtdLFxuICAgICAgc3R5bGU6IF92bS5pc0Z1bGxzY3JlZW4gPyBbX3ZtLndyYXBwZXJTdHlsZV0gOiBbXSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uc2hhZGVDbGljaygkZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMDA2ZmVkM2ZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTAwNmZlZDNmXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL25vZGVfbW9kdWxlcy92dWUtZnVsbHNjcmVlbi9zcmMvY29tcG9uZW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0wMDZmZWQzZlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi9ub2RlX21vZHVsZXMvdnVlLWZ1bGxzY3JlZW4vc3JjL2NvbXBvbmVudC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwid29ya3NcIiB9IH0sXG4gICAgW1xuICAgICAgX3ZtLndvcmtzXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWRlY2sgd29ya3NcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS53b3JrcywgZnVuY3Rpb24od29yaykge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IHdvcmsuaWQsIHN0YXRpY0NsYXNzOiBcImNhcmQgd29ya1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWltZy10b3BcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zNTB4MTUwXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJDYXJkIGltYWdlIGNhcFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHdvcmsubmFtZSkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mod29yay5kZXNjcmlwdGlvbikpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic21hbGxcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LW11dGVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mod29yay5jbGllbnQpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodCBidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmlld1JlcG9ydHMod29yay5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJYZW0gYsOhbyBjw6FvXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJmdWxsc2NyZWVuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwiZnVsbHNjcmVlblwiLFxuICAgICAgICAgIGF0dHJzOiB7IGZ1bGxzY3JlZW46IF92bS5mdWxsc2NyZWVuLCBiYWNrZ3JvdW5kOiBcIiNmZmZmZmZcIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcInVwZGF0ZTpmdWxsc2NyZWVuXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uZnVsbHNjcmVlbiA9ICRldmVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5mdWxsc2NyZWVuXG4gICAgICAgICAgICA/IF9jKFwiaG90LXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBzZXR0aW5nczogX3ZtLnRhYmxlU2V0dGluZywgZGF0YTogX3ZtLnRhYmxlRGF0YSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1hYjI1MjRjYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYWIyNTI0Y2FcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dvcmtzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi1hYjI1MjRjYVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV29ya3MudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1hYjI1MjRjYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vV29ya3MudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0MThjNjUyY1wiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1hYjI1MjRjYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vV29ya3MudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWFiMjUyNGNhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9Xb3Jrcy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtYWIyNTI0Y2FcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV29ya3MudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWFiMjUyNGNhXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dvcmtzLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWFiMjUyNGNhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9Xb3Jrcy52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwibGFzdCAyIHZlcnNpb25zXFxcIixcXFwiPiA1JSBpbiBCRVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9LFxcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCIsXFxcInRyYW5zZm9ybS1pbmxpbmUtZW52aXJvbm1lbnQtdmFyaWFibGVzXFxcIl19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wJmJ1c3RDYWNoZSEuL1dvcmtzLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYWIyNTI0Y2FcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vV29ya3MudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcV29ya3MudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgIHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7ICBjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1hYjI1MjRjYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWFiMjUyNGNhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuJyArICcgIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xb3Jrcy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dvcmtzLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9