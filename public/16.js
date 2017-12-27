webpackJsonp([16],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"node\":\"current\",\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Invoice/Show.vue":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            invoice: null,
            received_list: [],
            total_paid: 0,
            mew_payment: false,
            payment_methods: [{
                label: "Chuyển khoản",
                id: "bank_transfer"
            }, {
                label: "Tiền mặt",
                id: "cash"
            }]
        };
    },

    computed: {
        percentComplete: function percentComplete() {
            return parseFloat(this.invoice.payment_total / this.invoice.total * 100).toFixed(2);
        }
    },

    methods: {
        fetchData: function fetchData() {
            var _this = this;

            axios.get(this.$store.state.apiBase + "/invoice/" + this.$route.params.id).then(function (result) {
                _this.invoice = result.data.data;
                _this.received_list = result.data.meta.received_list;
                _this.total_paid = _this.invoice.payments.reduce(function (payment) {
                    return payment.amount;
                });
            });
        },
        comma: function comma(number) {
            return window.commafly(number);
        },
        getFromMatrix: function getFromMatrix(receive_id, tracker_id) {
            var receive = this.received_list.find(function (r) {
                return r.receive_id === receive_id;
            });
            console.log(receive);
            var content = receive.trackers.find(function (t) {
                return t.tracker_id === tracker_id;
            });
            console.log(content);
            if (!content) {
                return "-";
            } else {
                return content.unit;
            }
        },
        cancel: function cancel() {
            this.$close(false);
        },
        submit: function submit() {},
        goBack: function goBack() {
            this.$router.push({
                name: "invoice.index"

            });
        },
        newReceive: function newReceive() {
            this.$router.push({
                name: "invoice.edit",
                query: {
                    action: "new_receive",
                    index: this.invoice.receives.length + 1
                }
            });
        },
        newPayment: function newPayment() {
            this.$router.push({
                name: "invoice.edit",
                query: {
                    action: "new_payment",
                    index: this.invoice.payments.length + 1
                }
            });
        }
    },
    created: function created() {
        this.fetchData();
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4eab7b63\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Invoice/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Show.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4eab7b63\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Invoice/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.invoice
    ? _c("div", [
        _c("a", { on: { click: _vm.goBack } }, [_vm._v("Về danh mục")]),
        _vm._v(" "),
        _c("h3", { staticClass: "text-center" }, [
          _vm._v(_vm._s(_vm.invoice.name))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v("Thông tin chi tiết")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col" }, [
                    _c("p", { staticClass: "card-text" }, [
                      _c("b", [_vm._v("Dự án:")]),
                      _vm._v(" "),
                      _c("a", [_vm._v(_vm._s(_vm.invoice.work.name))])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-text" }, [
                      _c("b", [_vm._v("Nhà cung cấp:")]),
                      _vm._v(" "),
                      _c("a", [_vm._v(_vm._s(_vm.invoice.provider.name))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("p", { staticClass: "card-text" }, [
                      _c("b", [_vm._v("Ngày ký:")]),
                      _vm._v(" "),
                      _c("a", [_vm._v(_vm._s(_vm.invoice.signed_at))])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-text" }, [
                      _c("b", [_vm._v("% thanh toán:")]),
                      _vm._v(" "),
                      _c("a", [_vm._v(_vm._s(_vm.percentComplete))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("p", { staticClass: "card-text" }, [
                      _c("b", [_vm._v("Tổng số tiền:")]),
                      _vm._v(" "),
                      _c("a", [
                        _vm._v(_vm._s(_vm.comma(_vm.invoice.total)) + " ")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-text" }, [
                      _c("b", [_vm._v("Đã thanh toán:")]),
                      _vm._v(" "),
                      _c("a", [
                        _vm._v(
                          _vm._s(_vm.comma(_vm.invoice.payment_total)) + " "
                        )
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [_vm._v("Thanh toán")]),
                _vm._v(" "),
                _c("table", { staticClass: "table payment-table" }, [
                  _vm._m(0, false, false),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.invoice.payments, function(row, index) {
                      return _c("tr", { key: row.id }, [
                        _c("td", { staticClass: "number-col" }, [
                          _vm._v(_vm._s(index + 1))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "name-col" }, [
                          _vm._v(_vm._s(row.name))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "date-col" }, [
                          _vm._v(_vm._s(row.pay_at))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "method-col" }, [
                          _vm._v(_vm._s(row.method))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pay-col" }, [
                          _vm._v(_vm._s(_vm.comma(row.amount)))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "note-col" }, [
                          _vm._v(_vm._s(row.note))
                        ])
                      ])
                    })
                  ),
                  _vm._v(" "),
                  _c("tfoot", [
                    _c("tr", [
                      _c("td", { attrs: { colspan: "4" } }, [
                        _vm._v("Tổng cộng")
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "2" } }, [
                        _vm._v(_vm._s(_vm.comma(_vm.invoice.payment_total)))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { attrs: { colspan: "4" } }, [
                        _vm._v("Còn lại")
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "2" } }, [
                        _vm._v(
                          _vm._s(
                            _vm.comma(
                              _vm.invoice.total - _vm.invoice.payment_total
                            )
                          )
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "form-group text-center" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: { click: _vm.newPayment }
                    },
                    [_vm._v("Thêm thanh toán")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [_vm._v("Vật tư")]),
                _vm._v(" "),
                _c(
                  "table",
                  { staticClass: "table receive-table scrollable-y" },
                  [
                    _c("thead", { staticClass: "thead-light" }, [
                      _c(
                        "tr",
                        [
                          _c("th", { staticClass: "number-col" }, [
                            _vm._v("#")
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "name-col" }, [
                            _vm._v("Tên")
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "unit-col" }, [
                            _vm._v("Số lượng đặt hàng")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.invoice.receives, function(row, index) {
                            return [
                              _c(
                                "th",
                                { key: index, staticClass: "received-col" },
                                [_vm._v("Nhận đợt " + _vm._s(index + 1))]
                              )
                            ]
                          }),
                          _vm._v(" "),
                          _c("th", { staticClass: "total-received-col" }, [
                            _vm._v("Thực nhận")
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "left-col" }, [
                            _vm._v("Còn lại")
                          ])
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.invoice.trackers, function(row, index) {
                        return _c(
                          "tr",
                          { key: row.id },
                          [
                            _c("td", { staticClass: "number-col" }, [
                              _vm._v(_vm._s(index + 1))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "name-col" }, [
                              _vm._v(_vm._s(row.material.name))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "unit-col" }, [
                              _vm._v(_vm._s(row.unit))
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.invoice.receives, function(receive) {
                              return [
                                _c(
                                  "td",
                                  {
                                    key: receive.id,
                                    staticClass: "received-col"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.getFromMatrix(receive.id, row.id)
                                      )
                                    )
                                  ]
                                )
                              ]
                            }),
                            _vm._v(" "),
                            _c("td", { staticClass: "total-received-col" }, [
                              _vm._v(_vm._s(row.received_unit))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "left-col" }, [
                              _vm._v(_vm._s(row.unit - row.received_unit))
                            ])
                          ],
                          2
                        )
                      })
                    )
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "form-group text-center" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: { click: _vm.newReceive }
                    },
                    [_vm._v("Nhận hàng")]
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { staticClass: "number-col" }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { staticClass: "name-col" }, [_vm._v("Tên")]),
        _vm._v(" "),
        _c("th", { staticClass: "date-col" }, [_vm._v("Ngày")]),
        _vm._v(" "),
        _c("th", { staticClass: "method-col" }, [_vm._v("Hình thức")]),
        _vm._v(" "),
        _c("th", { staticClass: "pay-col" }, [_vm._v("Số tiền")]),
        _vm._v(" "),
        _c("th", { staticClass: "note-col" }, [_vm._v("Ghi chú")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4eab7b63", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4eab7b63\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Invoice/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4eab7b63\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Invoice/Show.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("7413deae", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4eab7b63\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Show.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4eab7b63\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
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

var listToStyles = __webpack_require__("./node_modules/vue-style-loader/lib/listToStyles.js")

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

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

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

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),

/***/ "./resources/assets/js/components/Invoice/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4eab7b63\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Invoice/Show.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"node\":\"current\",\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Invoice/Show.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4eab7b63\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Invoice/Show.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\Invoice\\Show.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4eab7b63", Component.options)
  } else {
    hotAPI.reload("data-v-4eab7b63", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2UvU2hvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2UvU2hvdy52dWU/YzFkMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlL1Nob3cudnVlPzZmMWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2UvU2hvdy52dWU/MjMzNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2UvU2hvdy52dWUiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiY29uY2F0Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImxpc3RUb1N0eWxlcyIsInBhcmVudElkIiwic3R5bGVzIiwibmV3U3R5bGVzIiwiY3NzIiwibWVkaWEiLCJwYXJ0IiwicGFydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxSEE7MEJBRUE7O3FCQUVBOzJCQUNBO3dCQUNBO3lCQUNBOzt1QkFHQTtvQkFFQTtBQUhBLGFBREE7dUJBTUE7b0JBSUE7QUFMQTtBQVZBO0FBZ0JBOzs7b0RBRUE7NkZBQ0E7QUFHQTtBQUxBOzs7O0FBT0E7OzhHQUNBOzRDQUNBO3VEQUNBOzttQ0FDQTs7QUFDQTtBQUNBO3NDQUNBO21DQUNBO0FBQ0E7c0VBQ0E7O3dDQUNBOzt3QkFDQTs7d0NBQ0E7O3dCQUNBOzBCQUNBO3VCQUNBO21CQUNBOytCQUNBO0FBRUE7QUFDQTtrQ0FDQTt3QkFDQTtBQUNBO2tDQUVBLENBQ0E7a0NBQ0E7O3NCQUlBOztBQUhBO0FBSUE7MENBQ0E7O3NCQUVBOzs0QkFFQTswREFHQTtBQUpBO0FBRkE7QUFPQTswQ0FDQTs7c0JBRUE7OzRCQUVBOzBEQUdBO0FBSkE7QUFGQTtBQVFBO0FBckRBO2dDQXNEQTthQUNBO0FBQ0E7QUFqRkEsRzs7Ozs7OztBQ3RIQTtBQUNBOzs7QUFHQTtBQUNBLHliQUEwYixvRkFBb0Y7O0FBRTlnQjs7Ozs7Ozs7QUNQQTs7OztBQUlBO0FBQ0FBLE9BQU9DLE9BQVAsR0FBaUIsVUFBU0MsWUFBVCxFQUF1QjtBQUN2QyxLQUFJQyxPQUFPLEVBQVg7O0FBRUE7QUFDQUEsTUFBS0MsUUFBTCxHQUFnQixTQUFTQSxRQUFULEdBQW9CO0FBQ25DLFNBQU8sS0FBS0MsR0FBTCxD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ZW1wbGF0ZT5cclxuICAgIDxkaXYgdi1pZj1cImludm9pY2VcIj5cclxuICAgICAgICA8YSBAY2xpY2s9XCJnb0JhY2tcIj5W4buBIGRhbmggbeG7pWM8L2E+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57e2ludm9pY2UubmFtZX19PC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+VGjDtG5nIHRpbiBjaGkgdGnhur90PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPkThu7Egw6FuOjwvYj4gPGE+e3tpbnZvaWNlLndvcmsubmFtZX19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5OaMOgIGN1bmcgY+G6pXA6PC9iPiA8YT57e2ludm9pY2UucHJvdmlkZXIubmFtZX19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPk5nw6B5IGvDvTo8L2I+IDxhPnt7aW52b2ljZS5zaWduZWRfYXR9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+JSB0aGFuaCB0b8Ohbjo8L2I+IDxhPnt7cGVyY2VudENvbXBsZXRlfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+VOG7lW5nIHPhu5EgdGnhu4FuOjwvYj4gPGE+e3tjb21tYShpbnZvaWNlLnRvdGFsKX19IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPsSQw6MgdGhhbmggdG/DoW46PC9iPiA8YT57e2NvbW1hKGludm9pY2UucGF5bWVudF90b3RhbCl9fSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPlRoYW5oIHRvw6FuPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgcGF5bWVudC10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVwidGhlYWQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cIm51bWJlci1jb2xcIj4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwibmFtZS1jb2xcIj5Uw6puPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwiZGF0ZS1jb2xcIj5OZ8OgeTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cIm1ldGhvZC1jb2xcIj5Iw6xuaCB0aOG7qWM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJwYXktY29sXCI+U+G7kSB0aeG7gW48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJub3RlLWNvbFwiPkdoaSBjaMO6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIocm93LCBpbmRleCkgaW4gaW52b2ljZS5wYXltZW50c1wiIDprZXk9XCJyb3cuaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwibnVtYmVyLWNvbFwiPnt7IChpbmRleCArIDEpIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwibmFtZS1jb2xcIj57e3Jvdy5uYW1lfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJkYXRlLWNvbFwiPnt7cm93LnBheV9hdH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwibWV0aG9kLWNvbFwiPnt7cm93Lm1ldGhvZH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicGF5LWNvbFwiPnt7Y29tbWEocm93LmFtb3VudCl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIm5vdGUtY29sXCI+e3tyb3cubm90ZX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Zm9vdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNFwiPlThu5VuZyBj4buZbmc8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIj57e2NvbW1hKGludm9pY2UucGF5bWVudF90b3RhbCl9fTwvdGQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjRcIj5Dw7JuIGzhuqFpPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIyXCI+e3tjb21tYShpbnZvaWNlLnRvdGFsIC0gaW52b2ljZS5wYXltZW50X3RvdGFsKX19PC90ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGZvb3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJuZXdQYXltZW50XCI+VGjDqm0gdGhhbmggdG/DoW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+VuG6rXQgdMawPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgcmVjZWl2ZS10YWJsZSBzY3JvbGxhYmxlLXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cInRoZWFkLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJudW1iZXItY29sXCI+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cIm5hbWUtY29sXCI+VMOqbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInVuaXQtY29sXCI+U+G7kSBsxrDhu6NuZyDEkeG6t3QgaMOgbmc8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIocm93LCBpbmRleCkgaW4gaW52b2ljZS5yZWNlaXZlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicmVjZWl2ZWQtY29sXCIgOmtleT1cImluZGV4XCI+Tmjhuq1uIMSR4bujdCB7eyhpbmRleCArIDEpfX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0b3RhbC1yZWNlaXZlZC1jb2xcIj5UaOG7sWMgbmjhuq1uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwibGVmdC1jb2xcIj5Dw7JuIGzhuqFpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIocm93LCBpbmRleCkgaW4gaW52b2ljZS50cmFja2Vyc1wiIDprZXk9XCJyb3cuaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwibnVtYmVyLWNvbFwiPnt7IChpbmRleCArIDEpIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwibmFtZS1jb2xcIj57eyByb3cubWF0ZXJpYWwubmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInVuaXQtY29sXCI+e3sgcm93LnVuaXQgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKHJlY2VpdmUpIGluIGludm9pY2UucmVjZWl2ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJlY2VpdmVkLWNvbFwiIDprZXk9XCJyZWNlaXZlLmlkXCI+e3tnZXRGcm9tTWF0cml4KHJlY2VpdmUuaWQsIHJvdy5pZCl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRvdGFsLXJlY2VpdmVkLWNvbFwiPnt7cm93LnJlY2VpdmVkX3VuaXR9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImxlZnQtY29sXCI+e3sgcm93LnVuaXQgLSByb3cucmVjZWl2ZWRfdW5pdH19PC90ZD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrPVwibmV3UmVjZWl2ZVwiPk5o4bqtbiBow6BuZzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW52b2ljZTogbnVsbCxcclxuICAgICAgICAgICAgcmVjZWl2ZWRfbGlzdDogW10sXHJcbiAgICAgICAgICAgIHRvdGFsX3BhaWQ6IDAsXHJcbiAgICAgICAgICAgIG1ld19wYXltZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgcGF5bWVudF9tZXRob2RzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQ2h1eeG7g24ga2hv4bqjblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImJhbmtfdHJhbnNmZXJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJUaeG7gW4gbeG6t3RcIixcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJjYXNoXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIHBlcmNlbnRDb21wbGV0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5pbnZvaWNlLnBheW1lbnRfdG90YWwvdGhpcy5pbnZvaWNlLnRvdGFsKjEwMCkudG9GaXhlZCgyKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZmV0Y2hEYXRhKCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYCR7dGhpcy4kc3RvcmUuc3RhdGUuYXBpQmFzZX0vaW52b2ljZS8ke3RoaXMuJHJvdXRlLnBhcmFtcy5pZH1gKS50aGVuKCByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnZvaWNlID0gcmVzdWx0LmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVjZWl2ZWRfbGlzdCA9IHJlc3VsdC5kYXRhLm1ldGEucmVjZWl2ZWRfbGlzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxfcGFpZCA9IHRoaXMuaW52b2ljZS5wYXltZW50cy5yZWR1Y2UoIHBheW1lbnQgPT4gcGF5bWVudC5hbW91bnQgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21tYShudW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5jb21tYWZseShudW1iZXIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0RnJvbU1hdHJpeChyZWNlaXZlX2lkLCB0cmFja2VyX2lkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY2VpdmUgPSB0aGlzLnJlY2VpdmVkX2xpc3QuZmluZCggciA9PiByLnJlY2VpdmVfaWQgPT09IHJlY2VpdmVfaWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZWNlaXZlKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHJlY2VpdmUudHJhY2tlcnMuZmluZCggdCA9PiB0LnRyYWNrZXJfaWQgPT09IHRyYWNrZXJfaWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KVxyXG4gICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIi1cIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LnVuaXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbmNlbCgpIHtcclxuICAgICAgICAgICAgdGhpcy4kY2xvc2UoZmFsc2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VibWl0KCkge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdvQmFjaygpIHtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJpbnZvaWNlLmluZGV4XCIsXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5ld1JlY2VpdmUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiaW52b2ljZS5lZGl0XCIsXHJcbiAgICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJuZXdfcmVjZWl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmludm9pY2UucmVjZWl2ZXMubGVuZ3RoICsgMSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5ld1BheW1lbnQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiaW52b2ljZS5lZGl0XCIsXHJcbiAgICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJuZXdfcGF5bWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmludm9pY2UucGF5bWVudHMubGVuZ3RoICsgMSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlL1Nob3cudnVlPzY4ODgxODIzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJTaG93LnZ1ZVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTRlYWI3YjYzXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2UvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTRlYWI3YjYzXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2UvU2hvdy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqL1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgdmFyIGZ1bmN0aW9uYWwgPSBvcHRpb25zLmZ1bmN0aW9uYWxcbiAgICB2YXIgZXhpc3RpbmcgPSBmdW5jdGlvbmFsXG4gICAgICA/IG9wdGlvbnMucmVuZGVyXG4gICAgICA6IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG5cbiAgICBpZiAoIWZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gZXhpc3RpbmcoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5pbnZvaWNlXG4gICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgIF9jKFwiYVwiLCB7IG9uOiB7IGNsaWNrOiBfdm0uZ29CYWNrIH0gfSwgW192bS5fdihcIlbhu4EgZGFuaCBt4bulY1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaW52b2ljZS5uYW1lKSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRow7RuZyB0aW4gY2hpIHRp4bq/dFwiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwiROG7sSDDoW46XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW192bS5fdihfdm0uX3MoX3ZtLmludm9pY2Uud29yay5uYW1lKSldKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwiTmjDoCBjdW5nIGPhuqVwOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pbnZvaWNlLnByb3ZpZGVyLm5hbWUpKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwiTmfDoHkga8O9OlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pbnZvaWNlLnNpZ25lZF9hdCkpXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihcIiUgdGhhbmggdG/DoW46XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW192bS5fdihfdm0uX3MoX3ZtLnBlcmNlbnRDb21wbGV0ZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoXCJU4buVbmcgc+G7kSB0aeG7gW46XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uY29tbWEoX3ZtLmludm9pY2UudG90YWwpKSArIFwiIFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoXCLEkMOjIHRoYW5oIHRvw6FuOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5jb21tYShfdm0uaW52b2ljZS5wYXltZW50X3RvdGFsKSkgKyBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtfdm0uX3YoXCJUaGFuaCB0b8OhblwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHBheW1lbnQtdGFibGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMCwgZmFsc2UsIGZhbHNlKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmludm9pY2UucGF5bWVudHMsIGZ1bmN0aW9uKHJvdywgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogcm93LmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJudW1iZXItY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGluZGV4ICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZS1jb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mocm93Lm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGUtY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHJvdy5wYXlfYXQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1ldGhvZC1jb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mocm93Lm1ldGhvZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwicGF5LWNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uY29tbWEocm93LmFtb3VudCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdGUtY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHJvdy5ub3RlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0Zm9vdFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlThu5VuZyBj4buZbmdcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNvbW1hKF92bS5pbnZvaWNlLnBheW1lbnRfdG90YWwpKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiNFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ8OybiBs4bqhaVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiMlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbW1hKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmludm9pY2UudG90YWwgLSBfdm0uaW52b2ljZS5wYXltZW50X3RvdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm5ld1BheW1lbnQgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVGjDqm0gdGhhbmggdG/DoW5cIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW192bS5fdihcIlbhuq10IHTGsFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHJlY2VpdmUtdGFibGUgc2Nyb2xsYWJsZS15XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aGVhZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRoZWFkLWxpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtYmVyLWNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIjXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZS1jb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVMOqblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInVuaXQtY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlPhu5EgbMaw4bujbmcgxJHhurd0IGjDoG5nXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmludm9pY2UucmVjZWl2ZXMsIGZ1bmN0aW9uKHJvdywgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBzdGF0aWNDbGFzczogXCJyZWNlaXZlZC1jb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTmjhuq1uIMSR4bujdCBcIiArIF92bS5fcyhpbmRleCArIDEpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidG90YWwtcmVjZWl2ZWQtY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRo4buxYyBuaOG6rW5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0LWNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDw7JuIGzhuqFpXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmludm9pY2UudHJhY2tlcnMsIGZ1bmN0aW9uKHJvdywgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogcm93LmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtYmVyLWNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaW5kZXggKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lLWNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mocm93Lm1hdGVyaWFsLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInVuaXQtY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhyb3cudW5pdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmludm9pY2UucmVjZWl2ZXMsIGZ1bmN0aW9uKHJlY2VpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHJlY2VpdmUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyZWNlaXZlZC1jb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldEZyb21NYXRyaXgocmVjZWl2ZS5pZCwgcm93LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidG90YWwtcmVjZWl2ZWQtY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhyb3cucmVjZWl2ZWRfdW5pdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdC1jb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHJvdy51bml0IC0gcm93LnJlY2VpdmVkX3VuaXQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ubmV3UmVjZWl2ZSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJOaOG6rW4gaMOgbmdcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRoZWFkLWxpZ2h0XCIgfSwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJudW1iZXItY29sXCIgfSwgW192bS5fdihcIiNcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWUtY29sXCIgfSwgW192bS5fdihcIlTDqm5cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGUtY29sXCIgfSwgW192bS5fdihcIk5nw6B5XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJtZXRob2QtY29sXCIgfSwgW192bS5fdihcIkjDrG5oIHRo4bupY1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwicGF5LWNvbFwiIH0sIFtfdm0uX3YoXCJT4buRIHRp4buBblwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwibm90ZS1jb2xcIiB9LCBbX3ZtLl92KFwiR2hpIGNow7pcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00ZWFiN2I2M1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNGVhYjdiNjNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2UvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNGVhYjdiNjNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2UvU2hvdy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00ZWFiN2I2M1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vU2hvdy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjc0MTNkZWFlXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRlYWI3YjYzXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9TaG93LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00ZWFiN2I2M1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vU2hvdy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNGVhYjdiNjNcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52b2ljZS9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00ZWFiN2I2M1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlL1Nob3cudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTYiLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbnZhciBsaXN0VG9TdHlsZXMgPSByZXF1aXJlKCcuL2xpc3RUb1N0eWxlcycpXG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbikge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS12dWUtc3NyLWlkfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIgMTMgMTQgMTUgMTYgMTcgMTggMjEiLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00ZWFiN2I2M1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vU2hvdy52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwibGFzdCAyIHZlcnNpb25zXFxcIixcXFwiPiA1JSBpbiBCRVxcXCJdLFxcXCJub2RlXFxcIjpcXFwiY3VycmVudFxcXCIsXFxcInVnbGlmeVxcXCI6dHJ1ZX0sXFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIixcXFwidHJhbnNmb3JtLWlubGluZS1lbnZpcm9ubWVudC12YXJpYWJsZXNcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAmYnVzdENhY2hlIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTRlYWI3YjYzXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcSW52b2ljZVxcXFxTaG93LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7ICByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkgeyAgY29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNGVhYjdiNjNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00ZWFiN2I2M1wiLCBDb21wb25lbnQub3B0aW9ucylcbicgKyAnICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52b2ljZS9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52b2ljZS9TaG93LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDE2Il0sInNvdXJjZVJvb3QiOiIifQ==