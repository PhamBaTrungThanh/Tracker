webpackJsonp([12],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"node\":\"current\",\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./node_modules/vue-fullscreen/src/component.vue":
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"node\":\"current\",\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Modals/NewInvoice.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__riophae_vue_treeselect__ = __webpack_require__("./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__riophae_vue_treeselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__riophae_vue_treeselect__);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    props: ['work_id'],
    data: function data() {
        return {
            new_list: [],
            new_materials_in_category: [],
            invoice_type_options: [{
                id: "invoice",
                label: "Hoá đơn mua hàng"
            }, {
                id: "contract",
                label: "Hợp đồng nguyên tắc"
            }],
            invoice_type: "invoice",
            provider_id: null,
            providers: [],
            signed_at: "",
            contract_number: "",
            new_provider: {
                name: "",
                tax_number: "",
                description: "",
                address: ""
            },
            selected_materials: []
        };
    },


    computed: {
        nested_list: function nested_list() {
            var _nestedList = [];
            this.list.forEach(function (node) {
                if (node.type === "category") {
                    _nestedList.push({
                        name: node.name,
                        id: node.id,
                        children: []
                    });
                }
                if (node.type === "material") {
                    if (node.name) {
                        _nestedList[_nestedList.length - 1].children.push(node);
                    }
                }
            });
            return _nestedList;
        },
        work: function work() {
            return this.$store.state.currentWork;
        },
        list: function list() {
            var _this = this;

            var index = 1;
            var _list = [];
            var _materials = this.work.flatten_list.filter(function (material) {
                return _this.selected_materials.indexOf(material.id) !== -1 && material.type === "material";
            });
            var _categories = [].concat(_toConsumableArray(new Set(_materials.map(function (material) {
                return material.category_id;
            }))));

            var _loop = function _loop(i) {
                var _category = _this.work.flatten_list.filter(function (category) {
                    return category.type === "category" && category.id === _categories[i];
                })[0];
                _list.push({
                    "type": "category",
                    "name": _category.label,
                    "uid": _this.uid(),
                    "keyid": index++,
                    "is_new": false,
                    "id": _category.id
                });
                var _childMaterials = _materials.filter(function (material) {
                    return material.type === "material" && material.category_id === _categories[i];
                }).map(function (material) {
                    return {
                        "name": material.name,
                        "type": "material",
                        "currency": material.currency,
                        "per": material.per,
                        "uid": _this.uid(),
                        "keyid": index++,
                        "boq_unit": material.boq_unit,
                        "boq_price": material.boq_price,
                        "brand": material.brand,
                        "is_new": false,
                        "unit": 0,
                        "price": 0,
                        "id": material.id
                    };
                });
                var _extra = _this.new_materials_in_category.filter(function (material) {
                    return material.category_id === _categories[i];
                }).map(function (material) {
                    return {
                        "name": "",
                        "type": "material",
                        "currency": "vnđ",
                        "per": "",
                        "uid": _this.uid(),
                        "keyid": index++,
                        "boq_unit": 0,
                        "boq_price": 0,
                        "is_new": true,
                        "brand": "",
                        "unit": 0,
                        "price": 0
                    };
                });
                _list.push.apply(_list, _toConsumableArray(_childMaterials).concat(_toConsumableArray(_extra)));
            };

            for (var i = 0; i < _categories.length; i++) {
                _loop(i);
            }
            for (var i = 0; i < this.new_list.length; i++) {
                this.new_list[i].keyid = index++;
            }
            return _list.concat(this.new_list);
        }
    },
    methods: {
        addCategory: function addCategory() {
            this.new_list.push({
                "type": "category",
                "name": "",
                "uid": this.uid(),
                "keyid": this.list.length,
                "is_new": true,
                "id": 0
            });
        },
        addMaterial: function addMaterial(keyid) {
            var _index = keyid + 1;
            var length = this.list.length;
            if (length > 1) {
                for (var i = keyid + 1; i < length; i++) {
                    if (this.list[i].type === "category" || i === length - 1) {
                        _index = i + 1;
                        break;
                    }
                }
            }
            this.new_list.splice(_index, 0, {
                "name": "",
                "type": "material",
                "currency": "vnđ",
                "uid": this.uid(),
                "keyid": "",
                "boq_unit": 0,
                "boq_price": 0,
                "is_new": true,
                "unit": 0,
                "price": 0,
                "brand": ""
            });
        },
        addMaterialTo: function addMaterialTo(category_id, key_id) {
            if (category_id === 0) {
                this.addMaterial(key_id);
            } else {
                this.new_materials_in_category.push({
                    "category_id": category_id
                });
            }
        },
        uid: function uid() {
            return Math.random().toString(36).substring(2) + new Date().getTime().toString(36).substring(10);
        },
        fetchProviders: function fetchProviders(callback) {
            callback(null, [{ id: 0, label: "Tạo nhà cung cấp mới" }].concat(this.providers.map(function (provider) {
                return { id: provider.id, label: provider.name };
            })));
        },
        cancel: function cancel() {
            this.$close(false);
        },
        submit: function submit() {
            var _this2 = this;

            axios.patch(this.$store.state.apiBase + '/work/' + this.work.id, {
                action: 'new_' + this.invoice_type,
                provider_id: this.provider_id,
                new_provider: this.new_provider,
                list: this.nested_list,
                signed_at: this.signed_at,
                contract_number: this.contract_number
            }).then(function (response) {
                if (response.status === 200) {
                    _this2.$swal("Hoàn tất", "Cập nhật thành công", "success").then(function (result) {
                        _this2.$close(true);
                    });
                }
            });
        }
    },
    mounted: function mounted() {
        var _this3 = this;

        axios.get(this.$store.state.apiBase + '/provider').then(function (response) {
            _this3.providers = response.data;
        });
    },

    directives: {
        focus: {
            // directive definition
            inserted: function inserted(el) {
                el.focus();
            }
        }
    },
    components: {
        Treeselect: __WEBPACK_IMPORTED_MODULE_0__riophae_vue_treeselect___default.a
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"node\":\"current\",\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Modals/NewWork.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            work_name: "",
            work_client: "",
            work_description: ""
        };
    },

    methods: {
        cancel: function cancel() {
            this.$close(false);
        },
        submit: function submit() {
            var _this = this;

            axios.post(this.$store.state.apiBase + "/work", {
                name: this.work_name,
                description: this.work_description,
                client: this.work_client
            }).then(function (response) {
                if (response.status === 200) {
                    _this.$swal("Hoàn tất", "Cập nhật thành công", "success").then(function (result) {
                        _this.$close(true);
                    });
                }
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"node\":\"current\",\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Reports/WorkReport.vue":
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
            detailedWork: [],
            material: false
        };
    },

    computed: {
        work: function work() {
            return this.$store.state.currentWork;
        }
    },
    methods: {
        showMaterialDetail: function showMaterialDetail(material_id) {
            var _this = this;

            axios.get(this.$store.state.apiBase + "/material/" + material_id).then(function (result) {
                _this.material = result.data.data;
            });
        },
        commafly: function commafly(number) {
            return window.commafly(number);
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"node\":\"current\",\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Works.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_fullscreen_src_component_vue__ = __webpack_require__("./node_modules/vue-fullscreen/src/component.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_fullscreen_src_component_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_fullscreen_src_component_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_modal_dialogs__ = __webpack_require__("./node_modules/vue-modal-dialogs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modals_NewWork_vue__ = __webpack_require__("./resources/assets/js/components/Modals/NewWork.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modals_NewWork_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Modals_NewWork_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modals_NewInvoice_vue__ = __webpack_require__("./resources/assets/js/components/Modals/NewInvoice.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modals_NewInvoice_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Modals_NewInvoice_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Reports_WorkReport__ = __webpack_require__("./resources/assets/js/components/Reports/WorkReport.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Reports_WorkReport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Reports_WorkReport__);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            fullscreen: false,
            current_work_id: false,
            action: false
        };
    },

    watch: {
        current_work_id: function current_work_id() {
            var _this = this;

            this.works.forEach(function (work) {
                if (work.id === _this.current_work_id) {
                    _this.$store.commit('SET_CURRENT_WORK', work);
                    return false;
                }
            });
        }
    },
    computed: {},
    methods: {
        fetchData: function fetchData() {
            var _this2 = this;

            this.current_work_id = false;
            axios.get(this.$store.state.apiBase + "/work").then(function (response) {

                _this2.works = response.data.data.map(function (work) {
                    var _flatten = [];
                    var boq_sum = 0;
                    work.nested_categories.forEach(function (_category) {
                        var _children = _category.children.map(function (material, index) {
                            boq_sum += parseFloat(material.boq_total);
                            return Object.assign({}, material, { "index": ++index });
                        });
                        _flatten.push.apply(_flatten, [_category].concat(_toConsumableArray(_children)));
                    });

                    return Object.assign({}, work, { flatten_list: _flatten, boq_sum: boq_sum });
                });
            }).catch(function (error) {
                console.log(error);
            });
        },
        viewReports: function viewReports(work_id) {
            this.current_work_id = work_id;
            this.$refs.fullscreen.enter();
        },

        comma: function comma(number) {
            return window.commafly(number);
        },
        newWork: function newWork() {
            var _this3 = this;

            Promise.resolve(__WEBPACK_IMPORTED_MODULE_1_vue_modal_dialogs__["a" /* default */].makeDialog(__WEBPACK_IMPORTED_MODULE_2__Modals_NewWork_vue___default.a)()).then(function (result) {
                if (result) {
                    _this3.fetchData();
                }
            });
        },
        newInvoice: function newInvoice() {
            var _this4 = this;

            Promise.resolve(__WEBPACK_IMPORTED_MODULE_1_vue_modal_dialogs__["a" /* default */].makeDialog(__WEBPACK_IMPORTED_MODULE_3__Modals_NewInvoice_vue___default.a)()).then(function (result) {
                if (result) {
                    _this4.fetchData();
                }
            });
        }
    },
    mounted: function mounted() {
        this.fetchData();
    },

    components: {
        "fullscreen": __WEBPACK_IMPORTED_MODULE_0_vue_fullscreen_src_component_vue___default.a,
        "work-report": __WEBPACK_IMPORTED_MODULE_4__Reports_WorkReport___default.a
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-02bf601c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Modals/NewWork.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"NewWork.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-092d6fdc\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Modals/NewInvoice.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"NewInvoice.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69a28cb9\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Reports/WorkReport.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"WorkReport.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ab2524ca\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Works.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Works.vue","sourceRoot":""}]);

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

/***/ "./node_modules/vue-fullscreen/src/component.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"node\":\"current\",\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./node_modules/vue-fullscreen/src/component.vue")
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-02bf601c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Modals/NewWork.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "dialog-wrapper",
      on: {
        click: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          _vm.cancel($event)
        }
      }
    },
    [
      _c("div", { staticClass: "dialog-content" }, [
        _c("div", { staticClass: "text-left" }, [
          _c("h3", { staticClass: "text-center" }, [
            _vm._v("Tạo công trình mới")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-form-label",
                      attrs: { for: "work_name" }
                    },
                    [_vm._v("Tên công trình")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.work_name,
                        expression: "work_name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "work_name", placeholder: "" },
                    domProps: { value: _vm.work_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.work_name = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-form-label",
                      attrs: { for: "work_client" }
                    },
                    [_vm._v("Chủ đầu tư")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.work_client,
                        expression: "work_client"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "work_client", placeholder: "" },
                    domProps: { value: _vm.work_client },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.work_client = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-form-label",
                      attrs: { for: "work_description" }
                    },
                    [_vm._v("Mô tả")]
                  ),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.work_description,
                        expression: "work_description"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "work_description", placeholder: "" },
                    domProps: { value: _vm.work_description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.work_description = $event.target.value
                      }
                    }
                  })
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group text-center" }, [
          _c(
            "button",
            { staticClass: "btn btn-primary", on: { click: _vm.submit } },
            [_vm._v("Lưu")]
          ),
          _vm._v(" "),
          _c("button", { staticClass: "btn", on: { click: _vm.cancel } }, [
            _vm._v("Bỏ qua")
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-02bf601c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-092d6fdc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Modals/NewInvoice.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "dialog-wrapper",
      on: {
        click: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          _vm.cancel($event)
        }
      }
    },
    [
      _c("div", { staticClass: "dialog-content big" }, [
        _c("h3", [_vm._v("Tạo đơn hàng mới")]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("h5", { staticClass: "text-center" }, [
              _vm._v("Thông tin chung")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("treeselect", {
                  attrs: { options: _vm.invoice_type_options },
                  model: {
                    value: _vm.invoice_type,
                    callback: function($$v) {
                      _vm.invoice_type = $$v
                    },
                    expression: "invoice_type"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col" }, [
                  _c("label", { attrs: { for: "signed_at" } }, [
                    _vm._v("Ngày ký")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.signed_at,
                        expression: "signed_at"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "date", id: "signed_at" },
                    domProps: { value: _vm.signed_at },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.signed_at = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c("label", { attrs: { for: "contract_number" } }, [
                    _vm._v("Số hợp đồng")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.contract_number,
                        expression: "contract_number"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "contract_number" },
                    domProps: { value: _vm.contract_number },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.contract_number = $event.target.value
                      }
                    }
                  })
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col" }, [
            _c("h5", { staticClass: "text-center" }, [_vm._v("Nhà cung cấp")]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("treeselect", {
                  attrs: {
                    "load-root-options": _vm.fetchProviders,
                    placeholder: "Chọn nhà cung cấp"
                  },
                  model: {
                    value: _vm.provider_id,
                    callback: function($$v) {
                      _vm.provider_id = $$v
                    },
                    expression: "provider_id"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _vm.provider_id === 0
              ? _c("div", [
                  _c("div", { staticClass: "form-group" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.new_provider.name,
                              expression: "new_provider.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Tên nhà cung cấp"
                          },
                          domProps: { value: _vm.new_provider.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.new_provider,
                                "name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.new_provider.tax_number,
                              expression: "new_provider.tax_number"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Mã số thuế" },
                          domProps: { value: _vm.new_provider.tax_number },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.new_provider,
                                "tax_number",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.new_provider.description,
                              expression: "new_provider.description"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Mô tả" },
                          domProps: { value: _vm.new_provider.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.new_provider,
                                "description",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.new_provider.address,
                              expression: "new_provider.address"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Địa chỉ" },
                          domProps: { value: _vm.new_provider.address },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.new_provider,
                                "address",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ])
                ])
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("h5", [_vm._v("Danh sách vật tư")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-group" },
          [
            _c("treeselect", {
              attrs: {
                multiple: true,
                options: _vm.work.nested_categories,
                "open-on-focus": true,
                "close-on-select": false,
                disableBranchNodes: true,
                placeholder: "Chọn vật tư theo danh sách"
              },
              model: {
                value: _vm.selected_materials,
                callback: function($$v) {
                  _vm.selected_materials = $$v
                },
                expression: "selected_materials"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("table", { staticClass: "table boq-table" }, [
            _c("thead", { staticClass: "thead-light text-center" }, [
              _c("tr", [
                _c("th", {
                  staticClass: "controls-col text-center",
                  attrs: { rowspan: "2" }
                }),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass: "text-left name-col",
                    attrs: { rowspan: "2" }
                  },
                  [_vm._v("Tên vật tư / Danh mục")]
                ),
                _vm._v(" "),
                _c("th", { staticClass: "per-col", attrs: { rowspan: "2" } }, [
                  _vm._v("Đơn vị tính")
                ]),
                _vm._v(" "),
                _c(
                  "th",
                  { staticClass: "currency-col", attrs: { rowspan: "2" } },
                  [_vm._v("Loại tiền")]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  { staticClass: "brand-col", attrs: { rowspan: "2" } },
                  [_vm._v("Hãng")]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  { staticClass: "invoice-col", attrs: { colspan: "3" } },
                  [
                    _vm.invoice_type === "invoice"
                      ? _c("span", [_vm._v("Đơn hàng")])
                      : _c("span", [_vm._v("Hợp đồng")])
                  ]
                ),
                _vm._v(" "),
                _c("th", { staticClass: "boq-col", attrs: { colspan: "2" } }, [
                  _vm._v("BOQ")
                ]),
                _vm._v(" "),
                _c(
                  "th",
                  { staticClass: "notes-col", attrs: { rowspan: "2" } },
                  [_vm._v("Ghi chú")]
                )
              ]),
              _vm._v(" "),
              _vm._m(0, false, false)
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.list, function(row) {
                  return _c(
                    "tr",
                    {
                      key: row.uid,
                      class: {
                        "category-row": row.type === "category",
                        "material-row": row.type === "material"
                      }
                    },
                    [
                      row.type === "category"
                        ? [
                            _c(
                              "td",
                              {
                                staticClass: "controls-col",
                                on: {
                                  click: function($event) {
                                    if (
                                      $event.target !== $event.currentTarget
                                    ) {
                                      return null
                                    }
                                    _vm.addMaterialTo(row.id, row.keyid)
                                  }
                                }
                              },
                              [_vm._v("+")]
                            ),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "9" } }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: row.name,
                                    expression: "row.name"
                                  }
                                ],
                                staticClass: "inline-td",
                                attrs: { type: "text" },
                                domProps: { value: row.name },
                                on: {
                                  focus: function($event) {
                                    $event.target.select()
                                  },
                                  keyup: function($event) {
                                    if (
                                      !("button" in $event) &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key
                                      )
                                    ) {
                                      return null
                                    }
                                    _vm.addMaterial(row.keyid)
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(row, "name", $event.target.value)
                                  }
                                }
                              })
                            ])
                          ]
                        : [
                            _c("td", { staticClass: "controls-col" }, [
                              _vm._v("-")
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: row.name,
                                    expression: "row.name"
                                  }
                                ],
                                staticClass: "inline-td",
                                attrs: { type: "text" },
                                domProps: { value: row.name },
                                on: {
                                  focus: function($event) {
                                    $event.target.select()
                                  },
                                  keyup: function($event) {
                                    if (
                                      !("button" in $event) &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key
                                      )
                                    ) {
                                      return null
                                    }
                                    _vm.addMaterial(row.keyid)
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(row, "name", $event.target.value)
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: row.per,
                                    expression: "row.per"
                                  }
                                ],
                                staticClass: "inline-td",
                                attrs: { type: "text", disabled: !row.is_new },
                                domProps: { value: row.per },
                                on: {
                                  focus: function($event) {
                                    $event.target.select()
                                  },
                                  keyup: function($event) {
                                    if (
                                      !("button" in $event) &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key
                                      )
                                    ) {
                                      return null
                                    }
                                    _vm.addMaterial(row.keyid)
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(row, "per", $event.target.value)
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: row.currency,
                                    expression: "row.currency"
                                  }
                                ],
                                staticClass: "inline-td",
                                attrs: { type: "text", disabled: !row.is_new },
                                domProps: { value: row.currency },
                                on: {
                                  focus: function($event) {
                                    $event.target.select()
                                  },
                                  keyup: function($event) {
                                    if (
                                      !("button" in $event) &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key
                                      )
                                    ) {
                                      return null
                                    }
                                    _vm.addMaterial(row.keyid)
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      row,
                                      "currency",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: row.brand,
                                    expression: "row.brand"
                                  }
                                ],
                                staticClass: "inline-td",
                                attrs: { type: "text", disabled: !row.is_new },
                                domProps: { value: row.brand },
                                on: {
                                  focus: function($event) {
                                    $event.target.select()
                                  },
                                  keyup: function($event) {
                                    if (
                                      !("button" in $event) &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key
                                      )
                                    ) {
                                      return null
                                    }
                                    _vm.addMaterial(row.keyid)
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(row, "brand", $event.target.value)
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: row.unit,
                                    expression: "row.unit"
                                  }
                                ],
                                staticClass: "inline-td",
                                attrs: { type: "text" },
                                domProps: { value: row.unit },
                                on: {
                                  focus: function($event) {
                                    $event.target.select()
                                  },
                                  keyup: function($event) {
                                    if (
                                      !("button" in $event) &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key
                                      )
                                    ) {
                                      return null
                                    }
                                    _vm.addMaterial(row.keyid)
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(row, "unit", $event.target.value)
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: row.price,
                                    expression: "row.price"
                                  }
                                ],
                                staticClass: "inline-td",
                                attrs: { type: "text" },
                                domProps: { value: row.price },
                                on: {
                                  focus: function($event) {
                                    $event.target.select()
                                  },
                                  keyup: function($event) {
                                    if (
                                      !("button" in $event) &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key
                                      )
                                    ) {
                                      return null
                                    }
                                    _vm.addMaterial(row.keyid)
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(row, "price", $event.target.value)
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(row.price * row.unit))]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: row.boq_unit,
                                    expression: "row.boq_unit"
                                  }
                                ],
                                staticClass: "inline-td",
                                attrs: { type: "text", disabled: !row.is_new },
                                domProps: { value: row.boq_unit },
                                on: {
                                  focus: function($event) {
                                    $event.target.select()
                                  },
                                  keyup: function($event) {
                                    if (
                                      !("button" in $event) &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key
                                      )
                                    ) {
                                      return null
                                    }
                                    _vm.addMaterial(row.keyid)
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      row,
                                      "boq_unit",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: row.boq_price,
                                    expression: "row.boq_price"
                                  }
                                ],
                                staticClass: "inline-td",
                                attrs: { type: "text", disabled: !row.is_new },
                                domProps: { value: row.boq_price },
                                on: {
                                  focus: function($event) {
                                    $event.target.select()
                                  },
                                  keyup: function($event) {
                                    if (
                                      !("button" in $event) &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key
                                      )
                                    ) {
                                      return null
                                    }
                                    _vm.addMaterial(row.keyid)
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      row,
                                      "boq_price",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td")
                          ]
                    ],
                    2
                  )
                }),
                _vm._v(" "),
                _c(
                  "tr",
                  { staticClass: "add-more", on: { click: _vm.addCategory } },
                  [
                    _c("td", { staticClass: "controls-col" }, [_vm._v("+")]),
                    _vm._v(" "),
                    _c("td", { attrs: { colspan: "9" } }, [
                      _vm._v("Thêm danh mục")
                    ])
                  ]
                )
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group text-center" }, [
          _c(
            "button",
            { staticClass: "btn btn-primary", on: { click: _vm.submit } },
            [_vm._v("Lưu")]
          ),
          _vm._v(" "),
          _c("button", { staticClass: "btn", on: { click: _vm.cancel } }, [
            _vm._v("Bỏ qua")
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { staticClass: "text-center boq-unit-col" }, [
        _vm._v("Số lượng")
      ]),
      _vm._v(" "),
      _c("th", { staticClass: "text-center boq-price-col" }, [
        _vm._v("Đơn giá")
      ]),
      _vm._v(" "),
      _c("th", { staticClass: "text-center boq-total-col" }, [
        _vm._v("Thành tiền")
      ]),
      _vm._v(" "),
      _c("th", { staticClass: "text-center boq-unit-col" }, [
        _vm._v("Số lượng")
      ]),
      _vm._v(" "),
      _c("th", { staticClass: "text-center boq-price-col" }, [
        _vm._v("Đơn giá")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-092d6fdc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-69a28cb9\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Reports/WorkReport.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "fullscreen-container work-report" }, [
    _c("h3", { staticClass: "text-center" }, [
      _vm._v("Báo cáo vật tư công trình " + _vm._s(_vm.work.name))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "report" }, [
      _c("div", { staticClass: "top" }, [
        _c("table", { staticClass: " trackers-table report-table table" }, [
          _vm._m(0, false, false),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm._l(_vm.work.flatten_list, function(row, key) {
                return [
                  row.type === "category"
                    ? _c(
                        "tr",
                        {
                          key: key,
                          class: { category: row.type === "category" }
                        },
                        [
                          _c("td"),
                          _vm._v(" "),
                          _c("td", { attrs: { colspan: "12" } }, [
                            _vm._v(_vm._s(row.label) + " "),
                            row.depth > 0 && row.children
                              ? _c("span", [
                                  _vm._v(
                                    "( " + _vm._s(row.children.length) + " )"
                                  )
                                ])
                              : _vm._e()
                          ])
                        ]
                      )
                    : _c(
                        "tr",
                        {
                          key: key,
                          class: { material: row.type === "material" },
                          on: {
                            click: function($event) {
                              _vm.showMaterialDetail(row.id)
                            }
                          }
                        },
                        [
                          _c("td", { staticClass: "index-col" }, [
                            _vm._v(_vm._s(row.index))
                          ]),
                          _vm._v(" "),
                          _c("td", {}, [_vm._v(_vm._s(row.name))]),
                          _vm._v(" "),
                          _c("td", { staticClass: "per-col child-col" }, [
                            _vm._v(_vm._s(row.per))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "currency-col child-col" }, [
                            _vm._v(_vm._s(row.currency))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "invoice_count-col child-col" },
                            [_vm._v(_vm._s(row.invoice_count))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "total_unit-col child-col" },
                            [_vm._v(_vm._s(row.total_unit))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "total_price-col child-col" },
                            [_vm._v(_vm._s(_vm.commafly(row.total_price)))]
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "boq_unit-col child-col" }, [
                            _vm._v(_vm._s(row.boq_unit))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "boq_unit-col child-col" }, [
                            _vm._v(_vm._s(_vm.commafly(row.boq_price)))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "boq_total-col child-col" }, [
                            _vm._v(
                              _vm._s(_vm.commafly(row.boq_price * row.boq_unit))
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "real_unit-col child-col" }, [
                            _vm._v(_vm._s(row.boq_unit - row.total_unit))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "real_count-col child-col" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.commafly(
                                    row.boq_price * row.boq_unit -
                                      row.total_price
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "percent-col child-col" }, [
                            _vm._v(
                              _vm._s(
                                parseFloat(
                                  (row.boq_price * row.boq_unit -
                                    row.total_price) /
                                    (row.boq_price * row.boq_unit) *
                                    100
                                ).toFixed(2)
                              ) + " %"
                            )
                          ])
                        ]
                      )
                ]
              })
            ],
            2
          ),
          _vm._v(" "),
          _c("tfoot", [
            _c("tr", [
              _c("td", { attrs: { colspan: "4" } }, [_vm._v("Tổng cộng")]),
              _vm._v(" "),
              _c("td", { attrs: { colspan: "1" } }, [
                _vm._v(_vm._s(_vm.work.invoice_count))
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.material
        ? _c("div", { staticClass: "bottom" }, [
            _c("br"),
            _vm._v(" "),
            _c("h4", { staticClass: "text-center" }, [
              _vm._v(_vm._s(_vm.material.name))
            ]),
            _vm._v(" "),
            _c("table", { staticClass: "table material-detail" }, [
              _vm._m(1, false, false),
              _vm._v(" "),
              _c(
                "tbody",
                { staticClass: "text-center" },
                _vm._l(_vm.material.invoices, function(row, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [_vm._v(_vm._s(index))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(row.signed_at))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(row.recieved_at))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(row.provider_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(row.unit))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(row.recieved_unit))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(row.unit - row.recieved_unit))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.commafly(row.cost)))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm.commafly(row.cost * row.unit)))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(_vm.commafly(row.cost * row.recieved_unit)) +
                          "\n                        "
                      )
                    ]),
                    _c("td", [_vm._v(_vm._s(row.notes))])
                  ])
                })
              ),
              _vm._v(" "),
              _c("tfoot", [
                _c("tr", [
                  _c(
                    "td",
                    { staticClass: "tfoot-title", attrs: { colspan: "4" } },
                    [_vm._v("Tổng cộng")]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "tfoot-content", attrs: { colspan: "3" } },
                    [_vm._v(_vm._s(_vm.material.total_unit))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "tfoot-content", attrs: { colspan: "3" } },
                    [_vm._v(_vm._s(_vm.commafly(_vm.material.total_price)))]
                  ),
                  _vm._v(" "),
                  _c("td")
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c(
                    "td",
                    { staticClass: "tfoot-title", attrs: { colspan: "4" } },
                    [_vm._v("BOQ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "tfoot-content", attrs: { colspan: "3" } },
                    [_vm._v(_vm._s(_vm.material.boq_unit))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "tfoot-content", attrs: { colspan: "3" } },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.commafly(
                            _vm.material.boq_price * _vm.material.boq_unit
                          )
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("td")
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c(
                    "td",
                    { staticClass: "tfoot-title", attrs: { colspan: "4" } },
                    [_vm._v("Chênh lệch")]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "tfoot-content", attrs: { colspan: "3" } },
                    [
                      _vm._v(
                        _vm._s(_vm.material.boq_unit - _vm.material.total_unit)
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "tfoot-content", attrs: { colspan: "3" } },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.commafly(
                            _vm.material.boq_price * _vm.material.boq_unit -
                              _vm.material.total_price
                          )
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("td")
                ])
              ])
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { staticClass: "index-col", attrs: { rowspan: "2" } }, [
          _vm._v("#")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "name-col", attrs: { rowspan: "2" } }, [
          _vm._v("Tên")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "per-col", attrs: { rowspan: "2" } }, [
          _vm._v("Đơn vị")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "currency-col", attrs: { rowspan: "2" } }, [
          _vm._v("Loại tiền")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "invoice_count-col child-col" }, [
          _vm._v("Tổng đơn hàng")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "total_unit-col child-col" }, [
          _vm._v("Số lượng đặt hàng")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "total_price-col child-col" }, [
          _vm._v("Giá trị đặt hàng")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "boq_unit-col child-col" }, [
          _vm._v("Số lượng BOQ")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "boq_unit-col child-col" }, [
          _vm._v("Đơn giá BOQ")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "boq_total-col child-col" }, [
          _vm._v("Giá trị BOQ")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "real_unit-col child-col" }, [
          _vm._v("Số lượng chưa thực hiện")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "real_count-col child-col" }, [
          _vm._v("Giá trị chưa thực hiện")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "percent-col child-col" }, [
          _vm._v("% chưa thực hiện")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light text-center" }, [
      _c("tr", [
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("STT")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("Ngày lập đơn")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("Ngày giao hàng")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("Nhà cung cấp")]),
        _vm._v(" "),
        _c("th", { attrs: { colspan: "3" } }, [_vm._v("Số lượng")]),
        _vm._v(" "),
        _c("th", { attrs: { colspan: "3" } }, [_vm._v("Giá trị")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("Ghi chú")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", [_vm._v("Số lượng đặt")]),
        _vm._v(" "),
        _c("th", [_vm._v("Số lượng đã nhận")]),
        _vm._v(" "),
        _c("th", [_vm._v("Số lượng còn lại")]),
        _vm._v(" "),
        _c("th", [_vm._v("Đơn giá")]),
        _vm._v(" "),
        _c("th", [_vm._v("Giá trị đặt hàng")]),
        _vm._v(" "),
        _c("th", [_vm._v("Giá trị đã nhận")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-69a28cb9", module.exports)
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
            [
              _vm._l(_vm.works, function(work) {
                return _c("div", { key: work.id, staticClass: "work" }, [
                  _c("div", { staticClass: "card" }, [
                    _c("img", {
                      staticClass: "card-img-top",
                      attrs: { src: work.image, alt: "Card image cap" }
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
                        _vm._v("Chủ đầu tư: "),
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
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "float-right btn",
                          on: {
                            click: function($event) {
                              work.showDetail = !work.showDetail
                              _vm.current_work_id = work.id
                            }
                          }
                        },
                        [_vm._v("Chi tiết")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  work.showDetail
                    ? _c("div", { staticClass: "work-detail" }, [
                        _c("div", { staticClass: "card" }, [
                          _c("div", { staticClass: "card-body" }, [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col" }, [
                                _c("p", { staticClass: "card-text" }, [
                                  _c("b", [_vm._v("Khởi công: ")]),
                                  _vm._v(_vm._s(work.started_at))
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "card-text" }, [
                                  _c("b", [_vm._v("Tổng giá trị BOQ: ")]),
                                  _vm._v(_vm._s(_vm.comma(work.boq_sum)))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col" }, [
                                _c("p", { staticClass: "card-text" }, [
                                  _c("b", [_vm._v("Số đơn hàng: ")]),
                                  _vm._v(_vm._s(work.invoice_count))
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "card-text" }, [
                                  _c("b", [_vm._v("Giá trị đơn hàng: ")]),
                                  _vm._v(_vm._s(_vm.comma(work.total_sum)))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col" }, [
                                _vm._m(0, true, false),
                                _vm._v(" "),
                                _c("p", { staticClass: "card-text" }, [
                                  _c("b", [_vm._v("Giá trị thanh toán: ")]),
                                  _vm._v(_vm._s(_vm.comma(work.paid_sum)))
                                ])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-body" }, [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col" }, [
                                _c("p", { staticClass: "text-center" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      on: {
                                        click: function($event) {
                                          _vm.newInvoice()
                                        }
                                      }
                                    },
                                    [_vm._v("Tạo đơn hàng")]
                                  )
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    : _vm._e()
                ])
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card work", on: { click: _vm.newWork } },
                [_vm._m(1, false, false)]
              )
            ],
            2
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
        [_vm.fullscreen ? _c("work-report") : _vm._e()],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "card-text" }, [
      _c("b", [_vm._v("Số người công tác: ")]),
      _vm._v("Chưa có thông tin")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c("h4", { staticClass: "card-title text-center" }, [
        _vm._v("Thêm công trường")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "card-text text-center" }, [
        _vm._v("\n                    Tạo công trường mới\n                ")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ab2524ca", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-02bf601c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Modals/NewWork.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-02bf601c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Modals/NewWork.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3dc28c00", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-02bf601c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./NewWork.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-02bf601c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./NewWork.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-092d6fdc\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Modals/NewInvoice.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-092d6fdc\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Modals/NewInvoice.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("304d45e4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-092d6fdc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./NewInvoice.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-092d6fdc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./NewInvoice.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69a28cb9\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Reports/WorkReport.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69a28cb9\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Reports/WorkReport.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("8490bfbc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69a28cb9\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./WorkReport.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69a28cb9\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./WorkReport.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
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

/***/ "./resources/assets/js/components/Modals/NewInvoice.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-092d6fdc\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Modals/NewInvoice.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"node\":\"current\",\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Modals/NewInvoice.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-092d6fdc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Modals/NewInvoice.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\Modals\\NewInvoice.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-092d6fdc", Component.options)
  } else {
    hotAPI.reload("data-v-092d6fdc", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Modals/NewWork.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-02bf601c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Modals/NewWork.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"node\":\"current\",\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Modals/NewWork.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-02bf601c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Modals/NewWork.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\Modals\\NewWork.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02bf601c", Component.options)
  } else {
    hotAPI.reload("data-v-02bf601c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Reports/WorkReport.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69a28cb9\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Reports/WorkReport.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"node\":\"current\",\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Reports/WorkReport.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-69a28cb9\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Reports/WorkReport.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\Reports\\WorkReport.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69a28cb9", Component.options)
  } else {
    hotAPI.reload("data-v-69a28cb9", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"node\":\"current\",\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Works.vue")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3Z1ZS1mdWxsc2NyZWVuL3NyYy9jb21wb25lbnQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTW9kYWxzL05ld0ludm9pY2UudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTW9kYWxzL05ld1dvcmsudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUmVwb3J0cy9Xb3JrUmVwb3J0LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dvcmtzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTW9kYWxzL05ld1dvcmsudnVlPzJiNmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01vZGFscy9OZXdJbnZvaWNlLnZ1ZT9iMWY3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SZXBvcnRzL1dvcmtSZXBvcnQudnVlP2MwMTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dvcmtzLnZ1ZT9mMDE2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWZ1bGxzY3JlZW4vc3JjL2NvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1mdWxsc2NyZWVuL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1mdWxsc2NyZWVuL3NyYy9jb21wb25lbnQudnVlPzRmNWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01vZGFscy9OZXdXb3JrLnZ1ZT8yYjQ1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Nb2RhbHMvTmV3SW52b2ljZS52dWU/NThhMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUmVwb3J0cy9Xb3JrUmVwb3J0LnZ1ZT85YTVjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xb3Jrcy52dWU/NmExZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTW9kYWxzL05ld1dvcmsudnVlPzkzMzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01vZGFscy9OZXdJbnZvaWNlLnZ1ZT80MjQxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SZXBvcnRzL1dvcmtSZXBvcnQudnVlPzlhMmEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dvcmtzLnZ1ZT9lMDhjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTW9kYWxzL05ld0ludm9pY2UudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Nb2RhbHMvTmV3V29yay52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JlcG9ydHMvV29ya1JlcG9ydC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dvcmtzLnZ1ZSJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidXNlU291cmNlTWFwIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJsZW5ndGgiLCJpZCIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJjb25jYXQiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic3VwcG9ydEZ1bGxTY3JlZW4iLCJkb2MiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsIm1vekZ1bGxTY3JlZW5FbmFibGVkIiwibXNGdWxsc2NyZWVuRW5hYmxlZCIsImZ1bGxTY3JlZW5TdGF0dXMiLCJmdWxsc2NyZWVuIiwibW96RnVsbFNjcmVlbiIsImZ1bGxzY3JlZW5FbGVtZW50IiwibXNGdWxsc2NyZWVuRWxlbWVudCIsIndlYmtpdElzRnVsbFNjcmVlbiIsInJlcXVlc3RGdWxsc2NyZWVuIiwiZWxlbWVudCIsIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJtc1JlcXVlc3RGdWxsc2NyZWVuIiwiY29uc29sZSIsImxvZyIsImV4aXRGdWxsc2NyZWVuIiwid2Via2l0RXhpdEZ1bGxzY3JlZW4iLCJtb3pDYW5jZWxGdWxsU2NyZWVuIiwibXNFeGl0RnVsbHNjcmVlbiIsIm9uRnVsbFNjcmVlbkV2ZW50IiwiY2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmRnVsbFNjcmVlbkV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV4dGVuZCIsImV4dGVuZGVkIiwiZGVlcCIsImFyZ3VtZW50cyIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCJtZXJnZSIsIm9iaiIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsImxpc3RUb1N0eWxlcyIsInBhcmVudElkIiwic3R5bGVzIiwibmV3U3R5bGVzIiwiY3NzIiwibWVkaWEiLCJwYXJ0IiwicGFydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOztBQUVBOzs7WUFJQTtlQUVBO0FBSEE7O1lBS0E7ZUFFQTtBQUhBOztZQUtBO2VBSUE7QUFMQTtBQVRBOzt3QkFlQTs7eUJBRUE7b0JBRUE7QUFIQTtBQUtBOzs7OzBDQUVBOzsyQkFFQTtzQkFDQTtpQkFDQTtrQkFFQTtBQUxBO0FBUUE7QUFWQTs7O21DQVlBOytCQUNBO0FBQ0E7d0ZBQ0E7ZUFDQTtlQUNBO2VBQ0E7QUFDQTthQUNBO29DQUNBO0FBQ0E7QUFDQTs0QkFDQTttQ0FDQTtBQUNBO0FBQ0E7cUZBQ0E7cUZBQ0E7QUFDQTswQkFDQTttQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2tDQUNBO2FBQ0E7QUFDQTt1Q0FDQTtpQ0FDQTthQUNBO0FBQ0E7QUFDQTtzREFDQTswQkFDQTs4QkFDQTtBQUNBO3dGQUNBO0FBQ0E7Z0NBQ0E7MkNBQ0E7QUFHQTtBQTVDQTs7OzJDQThDQTtnR0FDQTtvQ0FDQTtBQUNBO0FBR0E7QUFQQTs7OEJBUUE7NkJBQ0E7QUFDQTtBQXpGQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzRHQTtBQUNBO1lBRUE7MEJBQ0E7O3NCQUVBO3VDQUNBOztvQkFHQTt1QkFDQTtBQUZBLGFBREE7b0JBS0E7dUJBR0E7QUFKQTsw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MFdBQW1NO0FBQ25NO0FBQ0E7QUFDQTtBQUNBLDBsQkFBZ2M7QUFDaGM7QUFDQSx5U0FBZ0w7QUFDaEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSx3REFBd0QsSUFBSTs7QUFFM0k7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IDpzdHlsZT1cImlzRnVsbHNjcmVlbj9bd3JhcHBlclN0eWxlXTpbXVwiXHJcbiAgICAgICA6Y2xhc3M9XCJpc0Z1bGxzY3JlZW4/W2Z1bGxzY3JlZW5DbGFzc106W11cIlxyXG4gICAgICAgQGNsaWNrPVwic2hhZGVDbGljaygkZXZlbnQpXCJcclxuICA+XHJcbiAgICA8c2xvdD5cclxuICAgIDwvc2xvdD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge3N1cHBvcnRGdWxsU2NyZWVuLCBmdWxsU2NyZWVuU3RhdHVzLCByZXF1ZXN0RnVsbHNjcmVlbiwgZXhpdEZ1bGxzY3JlZW4sIG9uRnVsbFNjcmVlbkV2ZW50LCBvZmZGdWxsU2NyZWVuRXZlbnR9IGZyb20gJy4vdXRpbHMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJyMzMzMnXHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bGxzY3JlZW5DbGFzczoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAnZnVsbHNjcmVlbidcclxuICAgICAgfSxcclxuICAgICAgZnVsbHNjcmVlbjoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkYXRhICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdXBwb3J0RnVsbFNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgaXNGdWxsc2NyZWVuOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIHdyYXBwZXJTdHlsZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICdiYWNrZ3JvdW5kJzogdGhpcy5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgJ292ZXJmbG93LXknOiAnYXV0bycsXHJcbiAgICAgICAgICAnd2lkdGgnOiAnMTAwJScsXHJcbiAgICAgICAgICAnaGVpZ2h0JzogJzEwMCUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgdG9nZ2xlICh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAvLyDlpoLmnpzlt7Lnu4/mmK/lhajlsY/nirbmgIHvvIzliJnpgIDlh7pcclxuICAgICAgICAgIGlmIChmdWxsU2NyZWVuU3RhdHVzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5leGl0KClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXIoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YWx1ZSA/IHRoaXMuZW50ZXIoKSA6IHRoaXMuZXhpdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlbnRlciAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN1cHBvcnRGdWxsU2NyZWVuKSB7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgb25GdWxsU2NyZWVuRXZlbnQodGhpcy5mdWxsU2NyZWVuQ2FsbGJhY2spXHJcbiAgICAgICAgcmVxdWVzdEZ1bGxzY3JlZW4odGhpcy4kZWwpXHJcbiAgICAgIH0sXHJcbiAgICAgIGV4aXQgKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdXBwb3J0RnVsbFNjcmVlbikge1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4aXRGdWxsc2NyZWVuKClcclxuICAgICAgfSxcclxuICAgICAgZ2V0U3RhdGUgKCkge1xyXG4gICAgICAgIHJldHVybiBmdWxsU2NyZWVuU3RhdHVzKClcclxuICAgICAgfSxcclxuICAgICAgc2hhZGVDbGljayAoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy4kZWwpIHtcclxuICAgICAgICAgIHRoaXMuZXhpdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmdWxsU2NyZWVuQ2FsbGJhY2sgKCkge1xyXG4gICAgICAgIHRoaXMuaXNGdWxsc2NyZWVuID0gZnVsbFNjcmVlblN0YXR1cygpXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgLy8g6YCA5Ye65YWo5bGP5pe26Kej57uR5Zue6LCDXHJcbiAgICAgICAgICBvZmZGdWxsU2NyZWVuRXZlbnQodGhpcy5mdWxsU2NyZWVuQ2FsbGJhY2spXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMuaXNGdWxsc2NyZWVuKVxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTpmdWxsc2NyZWVuJywgdGhpcy5pc0Z1bGxzY3JlZW4pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgZnVsbHNjcmVlbiAodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgIT09IGZ1bGxTY3JlZW5TdGF0dXMoKSkge1xyXG4gICAgICAgICAgdmFsdWUgPyB0aGlzLmVudGVyKCkgOiB0aGlzLmV4aXQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVkICgpIHtcclxuICAgICAgdGhpcy5zdXBwb3J0RnVsbFNjcmVlbiA9IHN1cHBvcnRGdWxsU2NyZWVuKClcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbm9kZV9tb2R1bGVzL3Z1ZS1mdWxsc2NyZWVuL3NyYy9jb21wb25lbnQudnVlPzE3MzA2ZGIwIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImRpYWxvZy13cmFwcGVyXCIgQGNsaWNrLnNlbGY9XCJjYW5jZWxcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRpYWxvZy1jb250ZW50IGJpZ1wiPlxyXG4gICAgICAgICAgICA8aDM+VOG6oW8gxJHGoW4gaMOgbmcgbeG7m2k8L2gzPlxyXG4gICAgICAgICAgICA8aHI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlRow7RuZyB0aW4gY2h1bmc8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cmVlc2VsZWN0IDpvcHRpb25zPVwiaW52b2ljZV90eXBlX29wdGlvbnNcIiB2LW1vZGVsPVwiaW52b2ljZV90eXBlXCI+PC90cmVlc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic2lnbmVkX2F0XCI+TmfDoHkga8O9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwic2lnbmVkX2F0XCIgdi1tb2RlbD1cInNpZ25lZF9hdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRyYWN0X251bWJlclwiPlPhu5EgaOG7o3AgxJHhu5NuZzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNvbnRyYWN0X251bWJlclwiIHYtbW9kZWw9XCJjb250cmFjdF9udW1iZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPk5ow6AgY3VuZyBj4bqlcDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyZWVzZWxlY3QgOmxvYWQtcm9vdC1vcHRpb25zPVwiZmV0Y2hQcm92aWRlcnNcIiAgdi1tb2RlbD1cInByb3ZpZGVyX2lkXCIgcGxhY2Vob2xkZXI9XCJDaOG7jW4gbmjDoCBjdW5nIGPhuqVwXCI+PC90cmVlc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInByb3ZpZGVyX2lkID09PSAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJuZXdfcHJvdmlkZXIubmFtZVwiIHBsYWNlaG9sZGVyPVwiVMOqbiBuaMOgIGN1bmcgY+G6pXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cIm5ld19wcm92aWRlci50YXhfbnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJNw6Mgc+G7kSB0aHXhur9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cIm5ld19wcm92aWRlci5kZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiTcO0IHThuqNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cIm5ld19wcm92aWRlci5hZGRyZXNzXCIgcGxhY2Vob2xkZXI9XCLEkOG7i2EgY2jhu4lcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICA8aDU+RGFuaCBzw6FjaCB24bqtdCB0xrA8L2g1PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgIDx0cmVlc2VsZWN0IHYtbW9kZWw9XCJzZWxlY3RlZF9tYXRlcmlhbHNcIiA6bXVsdGlwbGU9XCJ0cnVlXCIgOm9wdGlvbnM9XCJ3b3JrLm5lc3RlZF9jYXRlZ29yaWVzXCIgOm9wZW4tb24tZm9jdXM9XCJ0cnVlXCIgOmNsb3NlLW9uLXNlbGVjdD1cImZhbHNlXCIgOmRpc2FibGVCcmFuY2hOb2Rlcz1cInRydWVcIiBwbGFjZWhvbGRlcj1cIkNo4buNbiB24bqtdCB0xrAgdGhlbyBkYW5oIHPDoWNoXCI+PC90cmVlc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIGJvcS10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cInRoZWFkLWxpZ2h0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dzcGFuPVwiMlwiIGNsYXNzPVwiY29udHJvbHMtY29sIHRleHQtY2VudGVyXCI+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dzcGFuPVwiMlwiIGNsYXNzPVwidGV4dC1sZWZ0IG5hbWUtY29sXCIgPlTDqm4gduG6rXQgdMawIC8gRGFuaCBt4bulYzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93c3Bhbj1cIjJcIiBjbGFzcz1cInBlci1jb2xcIj7EkMahbiB24buLIHTDrW5oPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dzcGFuPVwiMlwiIGNsYXNzPVwiY3VycmVuY3ktY29sXCI+TG/huqFpIHRp4buBbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93c3Bhbj1cIjJcIiBjbGFzcz1cImJyYW5kLWNvbFwiPkjDo25nPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPVwiM1wiIGNsYXNzPVwiaW52b2ljZS1jb2xcIj48c3BhbiB2LWlmPVwiaW52b2ljZV90eXBlID09PSAnaW52b2ljZSdcIj7EkMahbiBow6BuZzwvc3Bhbj48c3BhbiB2LWVsc2U+SOG7o3AgxJHhu5NuZzwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIyXCIgY2xhc3M9XCJib3EtY29sXCI+Qk9RPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dzcGFuPVwiMlwiIGNsYXNzPVwibm90ZXMtY29sXCI+R2hpIGNow7o8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWNlbnRlciBib3EtdW5pdC1jb2xcIj5T4buRIGzGsOG7o25nPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtY2VudGVyIGJvcS1wcmljZS1jb2xcIj7EkMahbiBnacOhPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtY2VudGVyIGJvcS10b3RhbC1jb2xcIj5UaMOgbmggdGnhu4FuPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtY2VudGVyIGJvcS11bml0LWNvbFwiPlPhu5EgbMaw4bujbmc8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGV4dC1jZW50ZXIgYm9xLXByaWNlLWNvbFwiPsSQxqFuIGdpw6E8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJyb3cgaW4gbGlzdFwiIDprZXk9XCJyb3cudWlkXCIgOmNsYXNzPVwieydjYXRlZ29yeS1yb3cnOiByb3cudHlwZSA9PT0gJ2NhdGVnb3J5JywgJ21hdGVyaWFsLXJvdyc6IHJvdy50eXBlID09PSAnbWF0ZXJpYWwnfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJyb3cudHlwZSA9PT0gJ2NhdGVnb3J5J1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNvbnRyb2xzLWNvbFwiIEBjbGljay5zZWxmPVwiYWRkTWF0ZXJpYWxUbyhyb3cuaWQsIHJvdy5rZXlpZClcIj4rPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjlcIj48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlubGluZS10ZFwiIHYtbW9kZWw9XCJyb3cubmFtZVwiIEBmb2N1cz1cIiRldmVudC50YXJnZXQuc2VsZWN0KClcIiBAa2V5dXAuZW50ZXI9XCJhZGRNYXRlcmlhbChyb3cua2V5aWQpXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNvbnRyb2xzLWNvbFwiPi08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlubGluZS10ZFwiIHYtbW9kZWw9XCJyb3cubmFtZVwiIEBmb2N1cz1cIiRldmVudC50YXJnZXQuc2VsZWN0KClcIiBAa2V5dXAuZW50ZXI9XCJhZGRNYXRlcmlhbChyb3cua2V5aWQpXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbmxpbmUtdGRcIiA6ZGlzYWJsZWQ9XCIhcm93LmlzX25ld1wiIHYtbW9kZWw9XCJyb3cucGVyXCIgQGZvY3VzPVwiJGV2ZW50LnRhcmdldC5zZWxlY3QoKVwiIEBrZXl1cC5lbnRlcj1cImFkZE1hdGVyaWFsKHJvdy5rZXlpZClcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlubGluZS10ZFwiIDpkaXNhYmxlZD1cIiFyb3cuaXNfbmV3XCIgdi1tb2RlbD1cInJvdy5jdXJyZW5jeVwiIEBmb2N1cz1cIiRldmVudC50YXJnZXQuc2VsZWN0KClcIiBAa2V5dXAuZW50ZXI9XCJhZGRNYXRlcmlhbChyb3cua2V5aWQpXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbmxpbmUtdGRcIiA6ZGlzYWJsZWQ9XCIhcm93LmlzX25ld1wiIHYtbW9kZWw9XCJyb3cuYnJhbmRcIiBAZm9jdXM9XCIkZXZlbnQudGFyZ2V0LnNlbGVjdCgpXCIgQGtleXVwLmVudGVyPVwiYWRkTWF0ZXJpYWwocm93LmtleWlkKVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5saW5lLXRkXCIgdi1tb2RlbD1cInJvdy51bml0XCIgQGZvY3VzPVwiJGV2ZW50LnRhcmdldC5zZWxlY3QoKVwiIEBrZXl1cC5lbnRlcj1cImFkZE1hdGVyaWFsKHJvdy5rZXlpZClcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlubGluZS10ZFwiIHYtbW9kZWw9XCJyb3cucHJpY2VcIiBAZm9jdXM9XCIkZXZlbnQudGFyZ2V0LnNlbGVjdCgpXCIgQGtleXVwLmVudGVyPVwiYWRkTWF0ZXJpYWwocm93LmtleWlkKVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHJvdy5wcmljZSAqIHJvdy51bml0IH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbmxpbmUtdGRcIiA6ZGlzYWJsZWQ9XCIhcm93LmlzX25ld1wiIHYtbW9kZWw9XCJyb3cuYm9xX3VuaXRcIiBAZm9jdXM9XCIkZXZlbnQudGFyZ2V0LnNlbGVjdCgpXCIgQGtleXVwLmVudGVyPVwiYWRkTWF0ZXJpYWwocm93LmtleWlkKVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5saW5lLXRkXCIgOmRpc2FibGVkPVwiIXJvdy5pc19uZXdcIiB2LW1vZGVsPVwicm93LmJvcV9wcmljZVwiIEBmb2N1cz1cIiRldmVudC50YXJnZXQuc2VsZWN0KClcIiBAa2V5dXAuZW50ZXI9XCJhZGRNYXRlcmlhbChyb3cua2V5aWQpXCI+PC90ZD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJhZGQtbW9yZVwiIEBjbGljaz1cImFkZENhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250cm9scy1jb2xcIj4rPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiOVwiPlRow6ptIGRhbmggbeG7pWM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB0ZXh0LWNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJzdWJtaXRcIj5MxrB1PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgQGNsaWNrPVwiY2FuY2VsXCI+QuG7jyBxdWE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICAgICAgICAgICBcclxuICAgIDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBUcmVlc2VsZWN0IGZyb20gJ0ByaW9waGFlL3Z1ZS10cmVlc2VsZWN0JztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFsnd29ya19pZCddLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZXdfbGlzdDogW10sXHJcbiAgICAgICAgICAgIG5ld19tYXRlcmlhbHNfaW5fY2F0ZWdvcnk6IFtdLFxyXG4gICAgICAgICAgICBpbnZvaWNlX3R5cGVfb3B0aW9uczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImludm9pY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJIb8OhIMSRxqFuIG11YSBow6BuZ1wiLFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImNvbnRyYWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSOG7o3AgxJHhu5NuZyBuZ3V5w6puIHThuq9jXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgaW52b2ljZV90eXBlOiBcImludm9pY2VcIixcclxuICAgICAgICAgICAgcHJvdmlkZXJfaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW10sXHJcbiAgICAgICAgICAgIHNpZ25lZF9hdDogXCJcIixcclxuICAgICAgICAgICAgY29udHJhY3RfbnVtYmVyOiBcIlwiLFxyXG4gICAgICAgICAgICBuZXdfcHJvdmlkZXI6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0YXhfbnVtYmVyOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBcIlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWxlY3RlZF9tYXRlcmlhbHM6IFtdLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBuZXN0ZWRfbGlzdCgpIHtcclxuICAgICAgICAgICAgbGV0IF9uZXN0ZWRMaXN0ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKCBub2RlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwiY2F0ZWdvcnlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIF9uZXN0ZWRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBub2RlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBub2RlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIm1hdGVyaWFsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9uZXN0ZWRMaXN0W19uZXN0ZWRMaXN0Lmxlbmd0aCAtIDFdLmNoaWxkcmVuLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIF9uZXN0ZWRMaXN0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd29yaygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmN1cnJlbnRXb3JrO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGlzdCgpIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gMTtcclxuICAgICAgICAgICAgbGV0IF9saXN0ID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IF9tYXRlcmlhbHMgPSB0aGlzLndvcmsuZmxhdHRlbl9saXN0LmZpbHRlciggbWF0ZXJpYWwgPT4geyByZXR1cm4gKCh0aGlzLnNlbGVjdGVkX21hdGVyaWFscy5pbmRleE9mKG1hdGVyaWFsLmlkKSAhPT0gLTEpICYmIChtYXRlcmlhbC50eXBlID09PSBcIm1hdGVyaWFsXCIpKSB9KTtcclxuICAgICAgICAgICAgY29uc3QgX2NhdGVnb3JpZXMgPSBbLi4ubmV3IFNldChfbWF0ZXJpYWxzLm1hcCggbWF0ZXJpYWwgPT4gbWF0ZXJpYWwuY2F0ZWdvcnlfaWQgKSldO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgX2NhdGVnb3J5ID0gdGhpcy53b3JrLmZsYXR0ZW5fbGlzdC5maWx0ZXIoIGNhdGVnb3J5ID0+IHsgcmV0dXJuIGNhdGVnb3J5LnR5cGUgPT09IFwiY2F0ZWdvcnlcIiAmJiBjYXRlZ29yeS5pZCA9PT0gX2NhdGVnb3JpZXNbaV19KVswXTtcclxuICAgICAgICAgICAgICAgIF9saXN0LnB1c2goIHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjYXRlZ29yeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBfY2F0ZWdvcnkubGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1aWRcIjogdGhpcy51aWQoKSxcclxuICAgICAgICAgICAgICAgICAgICBcImtleWlkXCI6IGluZGV4KyssXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpc19uZXdcIjogZmFsc2UsICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBfY2F0ZWdvcnkuaWQsICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgX2NoaWxkTWF0ZXJpYWxzID0gX21hdGVyaWFscy5maWx0ZXIoIG1hdGVyaWFsID0+IHsgcmV0dXJuIG1hdGVyaWFsLnR5cGUgPT09IFwibWF0ZXJpYWxcIiAmJiBtYXRlcmlhbC5jYXRlZ29yeV9pZCA9PT0gX2NhdGVnb3JpZXNbaV19KS5tYXAoIG1hdGVyaWFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogbWF0ZXJpYWwubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibWF0ZXJpYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiBtYXRlcmlhbC5jdXJyZW5jeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJcIjogbWF0ZXJpYWwucGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpZFwiOiB0aGlzLnVpZCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImtleWlkXCI6IGluZGV4KyssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9xX3VuaXRcIjogbWF0ZXJpYWwuYm9xX3VuaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9xX3ByaWNlXCI6IG1hdGVyaWFsLmJvcV9wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJicmFuZFwiOiBtYXRlcmlhbC5icmFuZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpc19uZXdcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidW5pdFwiOiAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiAwLCAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IG1hdGVyaWFsLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgX2V4dHJhID0gdGhpcy5uZXdfbWF0ZXJpYWxzX2luX2NhdGVnb3J5LmZpbHRlciggbWF0ZXJpYWwgPT4gbWF0ZXJpYWwuY2F0ZWdvcnlfaWQgPT09IF9jYXRlZ29yaWVzW2ldKS5tYXAoIG1hdGVyaWFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibWF0ZXJpYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiBcInZuxJFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJcIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aWRcIjogdGhpcy51aWQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJrZXlpZFwiOiBpbmRleCsrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvcV91bml0XCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9xX3ByaWNlXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXNfbmV3XCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnJhbmRcIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bml0XCI6ICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByaWNlXCI6IDAsICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBfbGlzdC5wdXNoKC4uLl9jaGlsZE1hdGVyaWFscywgLi4uX2V4dHJhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubmV3X2xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV3X2xpc3RbaV0ua2V5aWQgPSBpbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBfbGlzdC5jb25jYXQodGhpcy5uZXdfbGlzdCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgYWRkQ2F0ZWdvcnkoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3X2xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjYXRlZ29yeVwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpZFwiOiB0aGlzLnVpZCgpLFxyXG4gICAgICAgICAgICAgICAgXCJrZXlpZFwiOiB0aGlzLmxpc3QubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgXCJpc19uZXdcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRNYXRlcmlhbChrZXlpZCkge1xyXG4gICAgICAgICAgICBsZXQgX2luZGV4ID0ga2V5aWQgKyAxO1xyXG4gICAgICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5saXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKGxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBrZXlpZCArIDE7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbaV0udHlwZSA9PT0gXCJjYXRlZ29yeVwiIHx8IGkgPT09IGxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2luZGV4ID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5ld19saXN0LnNwbGljZShfaW5kZXgsIDAsIHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibWF0ZXJpYWxcIixcclxuICAgICAgICAgICAgICAgIFwiY3VycmVuY3lcIjogXCJ2bsSRXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpZFwiOiB0aGlzLnVpZCgpLFxyXG4gICAgICAgICAgICAgICAgXCJrZXlpZFwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJib3FfdW5pdFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgXCJib3FfcHJpY2VcIjogMCxcclxuICAgICAgICAgICAgICAgIFwiaXNfbmV3XCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInVuaXRcIjogIDAsXHJcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IDAsXHJcbiAgICAgICAgICAgICAgICBcImJyYW5kXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkTWF0ZXJpYWxUbyhjYXRlZ29yeV9pZCwga2V5X2lkKSB7XHJcbiAgICAgICAgICAgIGlmIChjYXRlZ29yeV9pZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNYXRlcmlhbChrZXlfaWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXdfbWF0ZXJpYWxzX2luX2NhdGVnb3J5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlfaWRcIjogY2F0ZWdvcnlfaWQsICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1aWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMikgXHJcbiAgICAgICAgICAgICAgICsgKG5ldyBEYXRlKCkpLmdldFRpbWUoKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDEwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZldGNoUHJvdmlkZXJzKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIFt7aWQ6IDAsIGxhYmVsOiBcIlThuqFvIG5ow6AgY3VuZyBj4bqlcCBt4bubaVwifV0uY29uY2F0KHRoaXMucHJvdmlkZXJzLm1hcCggcHJvdmlkZXIgPT4geyByZXR1cm4ge2lkOiBwcm92aWRlci5pZCwgbGFiZWw6IHByb3ZpZGVyLm5hbWV9IH0pKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW5jZWwoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGNsb3NlKGZhbHNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgYXhpb3MucGF0Y2goYCR7dGhpcy4kc3RvcmUuc3RhdGUuYXBpQmFzZX0vd29yay8ke3RoaXMud29yay5pZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb246IGBuZXdfJHt0aGlzLmludm9pY2VfdHlwZX1gLFxyXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJfaWQ6IHRoaXMucHJvdmlkZXJfaWQsXHJcbiAgICAgICAgICAgICAgICBuZXdfcHJvdmlkZXI6IHRoaXMubmV3X3Byb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgbGlzdDogdGhpcy5uZXN0ZWRfbGlzdCxcclxuICAgICAgICAgICAgICAgIHNpZ25lZF9hdDogdGhpcy5zaWduZWRfYXQsXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdF9udW1iZXI6IHRoaXMuY29udHJhY3RfbnVtYmVyLFxyXG4gICAgICAgICAgICB9KS50aGVuKCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzd2FsKFwiSG/DoG4gdOG6pXRcIiwgXCJD4bqtcCBuaOG6rXQgdGjDoG5oIGPDtG5nXCIsIFwic3VjY2Vzc1wiKS50aGVuKCByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRjbG9zZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGAke3RoaXMuJHN0b3JlLnN0YXRlLmFwaUJhc2V9L3Byb3ZpZGVyYCkudGhlbiAocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb3ZpZGVycyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZGlyZWN0aXZlczoge1xyXG4gICAgICAgIGZvY3VzOiB7XHJcbiAgICAgICAgICAgIC8vIGRpcmVjdGl2ZSBkZWZpbml0aW9uXHJcbiAgICAgICAgICAgIGluc2VydGVkOiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgICAgIGVsLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIFRyZWVzZWxlY3QsXHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01vZGFscy9OZXdJbnZvaWNlLnZ1ZT80YjE0MTg1YSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctd3JhcHBlclwiIEBjbGljay5zZWxmPVwiY2FuY2VsXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlThuqFvIGPDtG5nIHRyw6xuaCBt4bubaTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1mb3JtLWxhYmVsXCIgZm9yPVwid29ya19uYW1lXCI+VMOqbiBjw7RuZyB0csOsbmg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ3b3JrX25hbWVcIiB2LW1vZGVsPVwid29ya19uYW1lXCIgcGxhY2Vob2xkZXI9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbFwiIGZvcj1cIndvcmtfY2xpZW50XCI+Q2jhu6cgxJHhuqd1IHTGsDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIndvcmtfY2xpZW50XCIgdi1tb2RlbD1cIndvcmtfY2xpZW50XCIgcGxhY2Vob2xkZXI9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbFwiIGZvcj1cIndvcmtfZGVzY3JpcHRpb25cIj5Nw7QgdOG6ozwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ3b3JrX2Rlc2NyaXB0aW9uXCIgdi1tb2RlbD1cIndvcmtfZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIlwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrPVwic3VibWl0XCI+TMawdTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIEBjbGljaz1cImNhbmNlbFwiPkLhu48gcXVhPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAgICAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3b3JrX25hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIHdvcmtfY2xpZW50OiBcIlwiLFxyXG4gICAgICAgICAgICB3b3JrX2Rlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2FuY2VsKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRjbG9zZShmYWxzZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoYCR7dGhpcy4kc3RvcmUuc3RhdGUuYXBpQmFzZX0vd29ya2AsIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMud29ya19uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMud29ya19kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIGNsaWVudDogdGhpcy53b3JrX2NsaWVudCxcclxuICAgICAgICAgICAgfSkudGhlbiggcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3dhbChcIkhvw6BuIHThuqV0XCIsIFwiQ+G6rXAgbmjhuq10IHRow6BuaCBjw7RuZ1wiLCBcInN1Y2Nlc3NcIikudGhlbiggcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2xvc2UodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTW9kYWxzL05ld1dvcmsudnVlP2Y4YTZjY2Q4IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxzY3JlZW4tY29udGFpbmVyIHdvcmstcmVwb3J0XCI+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5Cw6FvIGPDoW8gduG6rXQgdMawIGPDtG5nIHRyw6xuaCB7e3dvcmsubmFtZX19PC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVwb3J0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cIiB0cmFja2Vycy10YWJsZSByZXBvcnQtdGFibGUgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3M9XCJ0aGVhZC1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJpbmRleC1jb2xcIiByb3dzcGFuPVwiMlwiPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwibmFtZS1jb2xcIiByb3dzcGFuPVwiMlwiPlTDqm48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicGVyLWNvbFwiIHJvd3NwYW49XCIyXCI+xJDGoW4gduG7izwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJjdXJyZW5jeS1jb2xcIiByb3dzcGFuPVwiMlwiPkxv4bqhaSB0aeG7gW48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwiaW52b2ljZV9jb3VudC1jb2wgY2hpbGQtY29sXCI+VOG7lW5nIMSRxqFuIGjDoG5nPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRvdGFsX3VuaXQtY29sIGNoaWxkLWNvbFwiPlPhu5EgbMaw4bujbmcgxJHhurd0IGjDoG5nPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRvdGFsX3ByaWNlLWNvbCBjaGlsZC1jb2xcIj5HacOhIHRy4buLIMSR4bq3dCBow6BuZzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJib3FfdW5pdC1jb2wgY2hpbGQtY29sXCI+U+G7kSBsxrDhu6NuZyBCT1E8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwiYm9xX3VuaXQtY29sIGNoaWxkLWNvbFwiPsSQxqFuIGdpw6EgQk9RPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cImJvcV90b3RhbC1jb2wgY2hpbGQtY29sXCI+R2nDoSB0cuG7iyBCT1E8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicmVhbF91bml0LWNvbCBjaGlsZC1jb2xcIj5T4buRIGzGsOG7o25nIGNoxrBhIHRo4buxYyBoaeG7h248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicmVhbF9jb3VudC1jb2wgY2hpbGQtY29sXCI+R2nDoSB0cuG7iyBjaMawYSB0aOG7sWMgaGnhu4duPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInBlcmNlbnQtY29sIGNoaWxkLWNvbFwiPiUgY2jGsGEgdGjhu7FjIGhp4buHbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIocm93LCBrZXkpIGluIHdvcmsuZmxhdHRlbl9saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1pZj1cInJvdy50eXBlID09PSAnY2F0ZWdvcnknXCIgOmNsYXNzPVwie2NhdGVnb3J5OiByb3cudHlwZSA9PT0gJ2NhdGVnb3J5J31cIiA6a2V5PVwia2V5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIxMlwiID57e3Jvdy5sYWJlbH19IDxzcGFuIHYtaWY9XCJyb3cuZGVwdGggPiAwICYmIHJvdy5jaGlsZHJlblwiPigge3tyb3cuY2hpbGRyZW4ubGVuZ3RofX0gKTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWVsc2UgOmtleT1cImtleVwiIEBjbGljaz1cInNob3dNYXRlcmlhbERldGFpbChyb3cuaWQpXCIgOmNsYXNzPVwieydtYXRlcmlhbCc6IHJvdy50eXBlID09PSAnbWF0ZXJpYWwnfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImluZGV4LWNvbFwiPnt7cm93LmluZGV4fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIlwiPnt7cm93Lm5hbWV9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicGVyLWNvbCBjaGlsZC1jb2xcIj57e3Jvdy5wZXJ9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY3VycmVuY3ktY29sIGNoaWxkLWNvbFwiPnt7cm93LmN1cnJlbmN5fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImludm9pY2VfY291bnQtY29sIGNoaWxkLWNvbFwiPnt7cm93Lmludm9pY2VfY291bnR9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidG90YWxfdW5pdC1jb2wgY2hpbGQtY29sXCI+e3tyb3cudG90YWxfdW5pdH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0b3RhbF9wcmljZS1jb2wgY2hpbGQtY29sXCI+e3tjb21tYWZseShyb3cudG90YWxfcHJpY2UpfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcV91bml0LWNvbCBjaGlsZC1jb2xcIj57e3Jvdy5ib3FfdW5pdH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3FfdW5pdC1jb2wgY2hpbGQtY29sXCI+e3tjb21tYWZseShyb3cuYm9xX3ByaWNlKX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3FfdG90YWwtY29sIGNoaWxkLWNvbFwiPnt7Y29tbWFmbHkocm93LmJvcV9wcmljZSAqIHJvdy5ib3FfdW5pdCl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmVhbF91bml0LWNvbCBjaGlsZC1jb2xcIj57eyByb3cuYm9xX3VuaXQgLSByb3cudG90YWxfdW5pdH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyZWFsX2NvdW50LWNvbCBjaGlsZC1jb2xcIj57e2NvbW1hZmx5KChyb3cuYm9xX3ByaWNlICogcm93LmJvcV91bml0KSAtIHJvdy50b3RhbF9wcmljZSl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicGVyY2VudC1jb2wgY2hpbGQtY29sXCI+e3sgcGFyc2VGbG9hdCgoKHJvdy5ib3FfcHJpY2UgKiByb3cuYm9xX3VuaXQpIC0gcm93LnRvdGFsX3ByaWNlKSAvIChyb3cuYm9xX3ByaWNlICogcm93LmJvcV91bml0KSAqIDEwMCkudG9GaXhlZCgyKX19ICU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHRmb290PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjRcIj5U4buVbmcgY+G7mW5nPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMVwiPnt7d29yay5pbnZvaWNlX2NvdW50fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Zm9vdD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiIHYtaWY9XCJtYXRlcmlhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7bWF0ZXJpYWwubmFtZX19PC9oND5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIG1hdGVyaWFsLWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cInRoZWFkLWxpZ2h0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dzcGFuPVwiMlwiPlNUVDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93c3Bhbj1cIjJcIj5OZ8OgeSBs4bqtcCDEkcahbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93c3Bhbj1cIjJcIj5OZ8OgeSBnaWFvIGjDoG5nPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dzcGFuPVwiMlwiPk5ow6AgY3VuZyBj4bqlcDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj1cIjNcIj5T4buRIGzGsOG7o25nPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPVwiM1wiPkdpw6EgdHLhu4s8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd3NwYW49XCIyXCI+R2hpIGNow7o8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlPhu5EgbMaw4bujbmcgxJHhurd0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5T4buRIGzGsOG7o25nIMSRw6Mgbmjhuq1uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5T4buRIGzGsOG7o25nIGPDsm4gbOG6oWk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPsSQxqFuIGdpw6E8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkdpw6EgdHLhu4sgxJHhurd0IGjDoG5nPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5HacOhIHRy4buLIMSRw6Mgbmjhuq1uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIocm93LCBpbmRleCkgaW4gbWF0ZXJpYWwuaW52b2ljZXNcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2luZGV4fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7cm93LnNpZ25lZF9hdH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3Jvdy5yZWNpZXZlZF9hdH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3Jvdy5wcm92aWRlcl9uYW1lfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7cm93LnVuaXR9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tyb3cucmVjaWV2ZWRfdW5pdH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3Jvdy51bml0IC0gcm93LnJlY2lldmVkX3VuaXR9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tjb21tYWZseShyb3cuY29zdCl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tjb21tYWZseShyb3cuY29zdCAqIHJvdy51bml0KX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2NvbW1hZmx5KHJvdy5jb3N0ICogcm93LnJlY2lldmVkX3VuaXQpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3Jvdy5ub3Rlc319PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Zm9vdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCI0XCIgY2xhc3M9XCJ0Zm9vdC10aXRsZVwiPlThu5VuZyBj4buZbmc8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGZvb3QtY29udGVudFwiIGNvbHNwYW49XCIzXCI+e3ttYXRlcmlhbC50b3RhbF91bml0fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGZvb3QtY29udGVudFwiIGNvbHNwYW49XCIzXCI+e3tjb21tYWZseShtYXRlcmlhbC50b3RhbF9wcmljZSl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCI0XCIgY2xhc3M9XCJ0Zm9vdC10aXRsZVwiPkJPUTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zm9vdC1jb250ZW50XCIgY29sc3Bhbj1cIjNcIj57e21hdGVyaWFsLmJvcV91bml0fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGZvb3QtY29udGVudFwiIGNvbHNwYW49XCIzXCI+e3tjb21tYWZseShtYXRlcmlhbC5ib3FfcHJpY2UqbWF0ZXJpYWwuYm9xX3VuaXQpfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNFwiIGNsYXNzPVwidGZvb3QtdGl0bGVcIj5DaMOqbmggbOG7h2NoPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRmb290LWNvbnRlbnRcIiBjb2xzcGFuPVwiM1wiPnt7bWF0ZXJpYWwuYm9xX3VuaXQgLSBtYXRlcmlhbC50b3RhbF91bml0fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGZvb3QtY29udGVudFwiIGNvbHNwYW49XCIzXCI+e3tjb21tYWZseSgobWF0ZXJpYWwuYm9xX3ByaWNlICogbWF0ZXJpYWwuYm9xX3VuaXQpIC0gbWF0ZXJpYWwudG90YWxfcHJpY2UpfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Zm9vdD5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkZXRhaWxlZFdvcms6IFtdLFxyXG4gICAgICAgICAgICBtYXRlcmlhbDogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgd29yaygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmN1cnJlbnRXb3JrO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNob3dNYXRlcmlhbERldGFpbChtYXRlcmlhbF9pZCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYCR7dGhpcy4kc3RvcmUuc3RhdGUuYXBpQmFzZX0vbWF0ZXJpYWwvJHttYXRlcmlhbF9pZH1gKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gcmVzdWx0LmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21tYWZseShudW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5jb21tYWZseShudW1iZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUmVwb3J0cy9Xb3JrUmVwb3J0LnZ1ZT81M2QyOTYwNiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgaWQ9XCJ3b3Jrc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWRlY2sgd29ya3NcIiB2LWlmPVwid29ya3NcIj5cclxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIndvcmsgaW4gd29ya3NcIiA6a2V5PVwid29yay5pZFwiIGNsYXNzPVwid29ya1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIDpzcmM9XCJ3b3JrLmltYWdlXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmQtdGl0bGVcIj57eyB3b3JrLm5hbWUgfX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPnt7IHdvcmsuZGVzY3JpcHRpb24gfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+Q2jhu6cgxJHhuqd1IHTGsDogPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPnt7IHdvcmsuY2xpZW50IH19PC9zbWFsbD48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJmbG9hdC1yaWdodCBidG4gYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJ2aWV3UmVwb3J0cyh3b3JrLmlkKVwiPlhlbSBiw6FvIGPDoW88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImZsb2F0LXJpZ2h0IGJ0blwiIEBjbGljaz1cIndvcmsuc2hvd0RldGFpbCA9ICF3b3JrLnNob3dEZXRhaWw7IGN1cnJlbnRfd29ya19pZCA9IHdvcmsuaWRcIj5DaGkgdGnhur90PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3JrLWRldGFpbFwiIHYtaWY9XCJ3b3JrLnNob3dEZXRhaWxcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj48Yj5LaOG7n2kgY8O0bmc6IDwvYj57eyB3b3JrLnN0YXJ0ZWRfYXQgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+PGI+VOG7lW5nIGdpw6EgdHLhu4sgQk9ROiA8L2I+e3sgY29tbWEod29yay5ib3Ffc3VtKSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+PGI+U+G7kSDEkcahbiBow6BuZzogPC9iPnt7d29yay5pbnZvaWNlX2NvdW50fX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+PGI+R2nDoSB0cuG7iyDEkcahbiBow6BuZzogPC9iPnt7Y29tbWEod29yay50b3RhbF9zdW0pfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPjxiPlPhu5EgbmfGsOG7nWkgY8O0bmcgdMOhYzogPC9iPkNoxrBhIGPDsyB0aMO0bmcgdGluPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPjxiPkdpw6EgdHLhu4sgdGhhbmggdG/DoW46IDwvYj57e2NvbW1hKHdvcmsucGFpZF9zdW0pfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJuZXdJbnZvaWNlKClcIj5U4bqhbyDEkcahbiBow6BuZzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHdvcmtcIiBAY2xpY2s9XCJuZXdXb3JrXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZSB0ZXh0LWNlbnRlclwiPlRow6ptIGPDtG5nIHRyxrDhu51uZzwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVOG6oW8gY8O0bmcgdHLGsOG7nW5nIG3hu5tpXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZnVsbHNjcmVlbiA6ZnVsbHNjcmVlbi5zeW5jPVwiZnVsbHNjcmVlblwiIHJlZj1cImZ1bGxzY3JlZW5cIiBiYWNrZ3JvdW5kPVwiI2ZmZmZmZlwiPlxyXG4gICAgICAgICAgICA8d29yay1yZXBvcnQgdi1pZj1cImZ1bGxzY3JlZW5cIiA+XHJcblxyXG4gICAgICAgICAgICA8L3dvcmstcmVwb3J0PlxyXG4gICAgICAgIDwvZnVsbHNjcmVlbj5cclxuXHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gXCJ2dWUtZnVsbHNjcmVlbi9zcmMvY29tcG9uZW50LnZ1ZVwiO1xyXG5pbXBvcnQgTW9kYWxEaWFsb2dzIGZyb20gJ3Z1ZS1tb2RhbC1kaWFsb2dzJztcclxuXHJcblxyXG5pbXBvcnQgTmV3V29yayBmcm9tIFwiLi9Nb2RhbHMvTmV3V29yay52dWVcIjtcclxuaW1wb3J0IE5ld0ludm9pY2UgZnJvbSBcIi4vTW9kYWxzL05ld0ludm9pY2UudnVlXCI7XHJcbmltcG9ydCBXb3JrUmVwb3J0IGZyb20gXCIuL1JlcG9ydHMvV29ya1JlcG9ydFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgd29ya3M6IFtdLFxyXG4gICAgICAgICAgICByZXBvcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgY3VycmVudF93b3JrX2lkOiBmYWxzZSxcclxuICAgICAgICAgICAgYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgICBjdXJyZW50X3dvcmtfaWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMud29ya3MuZm9yRWFjaCggd29yayA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAod29yay5pZCA9PT0gdGhpcy5jdXJyZW50X3dvcmtfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9DVVJSRU5UX1dPUksnLCB3b3JrKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGZldGNoRGF0YSgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50X3dvcmtfaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGAke3RoaXMuJHN0b3JlLnN0YXRlLmFwaUJhc2V9L3dvcmtgKS50aGVuKCByZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy53b3JrcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYXAoIHdvcmsgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfZmxhdHRlbiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib3Ffc3VtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB3b3JrLm5lc3RlZF9jYXRlZ29yaWVzLmZvckVhY2goIF9jYXRlZ29yeSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfY2hpbGRyZW4gPSBfY2F0ZWdvcnkuY2hpbGRyZW4ubWFwKCAobWF0ZXJpYWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3Ffc3VtICs9IHBhcnNlRmxvYXQobWF0ZXJpYWwuYm9xX3RvdGFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBtYXRlcmlhbCwge1wiaW5kZXhcIjogKytpbmRleH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZmxhdHRlbi5wdXNoKF9jYXRlZ29yeSwgLi4uX2NoaWxkcmVuKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgd29yaywge2ZsYXR0ZW5fbGlzdDogX2ZsYXR0ZW4sIGJvcV9zdW06IGJvcV9zdW19KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCggZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZpZXdSZXBvcnRzKHdvcmtfaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50X3dvcmtfaWQgPSB3b3JrX2lkO1xyXG4gICAgICAgICAgICB0aGlzLiRyZWZzLmZ1bGxzY3JlZW4uZW50ZXIoKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21tYTogKG51bWJlcikgPT4gd2luZG93LmNvbW1hZmx5KG51bWJlciksXHJcbiAgICAgICAgbmV3V29yaygpIHtcclxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKE1vZGFsRGlhbG9ncy5tYWtlRGlhbG9nKE5ld1dvcmspKCkpLnRoZW4oIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZXdJbnZvaWNlKCkge1xyXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoTW9kYWxEaWFsb2dzLm1ha2VEaWFsb2coTmV3SW52b2ljZSkoKSkudGhlbiggcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBcImZ1bGxzY3JlZW5cIiA6RnVsbHNjcmVlbixcclxuICAgICAgICBcIndvcmstcmVwb3J0XCI6IFdvcmtSZXBvcnQsXHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPlxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xb3Jrcy52dWU/MTMxNjE5NmQiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIk5ld1dvcmsudnVlXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMDJiZjYwMWNcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTW9kYWxzL05ld1dvcmsudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wMmJmNjAxY1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Nb2RhbHMvTmV3V29yay52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiTmV3SW52b2ljZS52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wOTJkNmZkY1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Nb2RhbHMvTmV3SW52b2ljZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTA5MmQ2ZmRjXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01vZGFscy9OZXdJbnZvaWNlLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJXb3JrUmVwb3J0LnZ1ZVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTY5YTI4Y2I5XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JlcG9ydHMvV29ya1JlcG9ydC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTY5YTI4Y2I5XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JlcG9ydHMvV29ya1JlcG9ydC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiV29ya3MudnVlXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtYWIyNTI0Y2FcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV29ya3MudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1hYjI1MjRjYVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xb3Jrcy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwibGFzdCAyIHZlcnNpb25zXFxcIixcXFwiPiA1JSBpbiBCRVxcXCJdLFxcXCJub2RlXFxcIjpcXFwiY3VycmVudFxcXCIsXFxcInVnbGlmeVxcXCI6dHJ1ZX0sXFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIixcXFwidHJhbnNmb3JtLWlubGluZS1lbnZpcm9ubWVudC12YXJpYWJsZXNcXFwiXX0hLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCZidXN0Q2FjaGUhLi9jb21wb25lbnQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTAwNmZlZDNmXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vY29tcG9uZW50LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXNcXFxcdnVlLWZ1bGxzY3JlZW5cXFxcc3JjXFxcXGNvbXBvbmVudC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkgeyAgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHsgIGNvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTAwNmZlZDNmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDA2ZmVkM2ZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4nICsgJyAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1mdWxsc2NyZWVuL3NyYy9jb21wb25lbnQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtZnVsbHNjcmVlbi9zcmMvY29tcG9uZW50LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIiwiZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRGdWxsU2NyZWVuICgpIHtcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG5cbiAgcmV0dXJuICgncmVxdWVzdEZ1bGxzY3JlZW4nIGluIGRvYykgfHxcbiAgICAoJ21velJlcXVlc3RGdWxsU2NyZWVuJyBpbiBkb2MgJiYgZG9jdW1lbnQubW96RnVsbFNjcmVlbkVuYWJsZWQpIHx8XG4gICAgKCdtc1JlcXVlc3RGdWxsc2NyZWVuJyBpbiBkb2MgJiYgZG9jdW1lbnQubXNGdWxsc2NyZWVuRW5hYmxlZCkgfHxcbiAgICAoJ3dlYmtpdFJlcXVlc3RGdWxsU2NyZWVuJyBpbiBkb2MpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmdWxsU2NyZWVuU3RhdHVzICgpIHtcbiAgaWYgKGRvY3VtZW50LmZ1bGxzY3JlZW4gfHxcbiAgICBkb2N1bWVudC5tb3pGdWxsU2NyZWVuIHx8XG4gICAgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgfHxcbiAgICBkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50IHx8XG4gICAgZG9jdW1lbnQud2Via2l0SXNGdWxsU2NyZWVuKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdEZ1bGxzY3JlZW4gKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICBlbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKClcbiAgfSBlbHNlIGlmIChlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpXG4gIH0gZWxzZSBpZiAoZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgIGVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4oKVxuICB9IGVsc2UgaWYgKGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgIGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbigpXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ0Z1bGxzY3JlZW4gQVBJIGlzIG5vdCBzdXBwb3J0ZWQuJylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhpdEZ1bGxzY3JlZW4gKCkge1xuICBpZiAoZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4pIHtcbiAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpXG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcbiAgICBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpXG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbikge1xuICAgIGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKVxuICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4pIHtcbiAgICBkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKClcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnRnVsbHNjcmVlbiBBUEkgaXMgbm90IHN1cHBvcnRlZC4nKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkZ1bGxTY3JlZW5FdmVudCAoY2FsbGJhY2spIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZnVsbHNjcmVlbmNoYW5nZScsIGNhbGxiYWNrKVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3pmdWxsc2NyZWVuY2hhbmdlJywgY2FsbGJhY2spXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ01TRnVsbHNjcmVlbkNoYW5nZScsIGNhbGxiYWNrKVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgY2FsbGJhY2spXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZGdWxsU2NyZWVuRXZlbnQgKGNhbGxiYWNrKSB7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBjYWxsYmFjaylcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW96ZnVsbHNjcmVlbmNoYW5nZScsIGNhbGxiYWNrKVxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdNU0Z1bGxzY3JlZW5DaGFuZ2UnLCBjYWxsYmFjaylcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsIGNhbGxiYWNrKVxufVxuXG4vLyDlrp7njrBqcXVlcnnlr7nosaHnu6fmib/vvIzmlK/mjIHmt7Hmi7fotJ1cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQgKCkge1xuICBjb25zdCBleHRlbmRlZCA9IHt9XG4gIGxldCBkZWVwID0gZmFsc2VcbiAgbGV0IGkgPSAwXG4gIGNvbnN0IGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50c1swXSkgPT09ICdbb2JqZWN0IEJvb2xlYW5dJykge1xuICAgIGRlZXAgPSBhcmd1bWVudHNbMF1cbiAgICBpKytcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlIChvYmopIHtcbiAgICBmb3IgKGxldCBwcm9wIGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSB7XG4gICAgICAgIGlmIChkZWVwICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmpbcHJvcF0pID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICAgIGV4dGVuZGVkW3Byb3BdID0gZXh0ZW5kKHRydWUsIGV4dGVuZGVkW3Byb3BdLCBvYmpbcHJvcF0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXh0ZW5kZWRbcHJvcF0gPSBvYmpbcHJvcF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgb2JqID0gYXJndW1lbnRzW2ldXG4gICAgbWVyZ2Uob2JqKVxuICB9XG5cbiAgcmV0dXJuIGV4dGVuZGVkXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWZ1bGxzY3JlZW4vc3JjL3V0aWxzLmpzIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICB2YXIgZnVuY3Rpb25hbCA9IG9wdGlvbnMuZnVuY3Rpb25hbFxuICAgIHZhciBleGlzdGluZyA9IGZ1bmN0aW9uYWxcbiAgICAgID8gb3B0aW9ucy5yZW5kZXJcbiAgICAgIDogb3B0aW9ucy5iZWZvcmVDcmVhdGVcblxuICAgIGlmICghZnVuY3Rpb25hbCkge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBleGlzdGluZyhoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBjbGFzczogX3ZtLmlzRnVsbHNjcmVlbiA/IFtfdm0uZnVsbHNjcmVlbkNsYXNzXSA6IFtdLFxuICAgICAgc3R5bGU6IF92bS5pc0Z1bGxzY3JlZW4gPyBbX3ZtLndyYXBwZXJTdHlsZV0gOiBbXSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uc2hhZGVDbGljaygkZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMDA2ZmVkM2ZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTAwNmZlZDNmXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL25vZGVfbW9kdWxlcy92dWUtZnVsbHNjcmVlbi9zcmMvY29tcG9uZW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0wMDZmZWQzZlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi9ub2RlX21vZHVsZXMvdnVlLWZ1bGxzY3JlZW4vc3JjL2NvbXBvbmVudC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJkaWFsb2ctd3JhcHBlclwiLFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0ICE9PSAkZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgX3ZtLmNhbmNlbCgkZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGlhbG9nLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1sZWZ0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlThuqFvIGPDtG5nIHRyw6xuaCBt4bubaVwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1mb3JtLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcIndvcmtfbmFtZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlTDqm4gY8O0bmcgdHLDrG5oXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS53b3JrX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIndvcmtfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIGlkOiBcIndvcmtfbmFtZVwiLCBwbGFjZWhvbGRlcjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLndvcmtfbmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS53b3JrX25hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1mb3JtLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcIndvcmtfY2xpZW50XCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2jhu6cgxJHhuqd1IHTGsFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ud29ya19jbGllbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIndvcmtfY2xpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgaWQ6IFwid29ya19jbGllbnRcIiwgcGxhY2Vob2xkZXI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS53b3JrX2NsaWVudCB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS53b3JrX2NsaWVudCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLWZvcm0tbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwid29ya19kZXNjcmlwdGlvblwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk3DtCB04bqjXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS53b3JrX2Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ3b3JrX2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ3b3JrX2Rlc2NyaXB0aW9uXCIsIHBsYWNlaG9sZGVyOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ud29ya19kZXNjcmlwdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS53b3JrX2Rlc2NyaXB0aW9uID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsIG9uOiB7IGNsaWNrOiBfdm0uc3VibWl0IH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJMxrB1XCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0blwiLCBvbjogeyBjbGljazogX3ZtLmNhbmNlbCB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkLhu48gcXVhXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTAyYmY2MDFjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wMmJmNjAxY1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTW9kYWxzL05ld1dvcmsudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTAyYmY2MDFjXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Nb2RhbHMvTmV3V29yay52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJkaWFsb2ctd3JhcHBlclwiLFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0ICE9PSAkZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgX3ZtLmNhbmNlbCgkZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGlhbG9nLWNvbnRlbnQgYmlnXCIgfSwgW1xuICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJU4bqhbyDEkcahbiBow6BuZyBt4bubaVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiVGjDtG5nIHRpbiBjaHVuZ1wiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInRyZWVzZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3B0aW9uczogX3ZtLmludm9pY2VfdHlwZV9vcHRpb25zIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmludm9pY2VfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5pbnZvaWNlX3R5cGUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpbnZvaWNlX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwic2lnbmVkX2F0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk5nw6B5IGvDvVwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2lnbmVkX2F0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaWduZWRfYXRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZGF0ZVwiLCBpZDogXCJzaWduZWRfYXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNpZ25lZF9hdCB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaWduZWRfYXQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImNvbnRyYWN0X251bWJlclwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJT4buRIGjhu6NwIMSR4buTbmdcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbnRyYWN0X251bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29udHJhY3RfbnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgaWQ6IFwiY29udHJhY3RfbnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jb250cmFjdF9udW1iZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29udHJhY3RfbnVtYmVyID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW192bS5fdihcIk5ow6AgY3VuZyBj4bqlcFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0cmVlc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibG9hZC1yb290LW9wdGlvbnNcIjogX3ZtLmZldGNoUHJvdmlkZXJzLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gbmjDoCBjdW5nIGPhuqVwXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnByb3ZpZGVyX2lkLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb3ZpZGVyX2lkID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvdmlkZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLnByb3ZpZGVyX2lkID09PSAwXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5ld19wcm92aWRlci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuZXdfcHJvdmlkZXIubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJUw6puIG5ow6AgY3VuZyBj4bqlcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmV3X3Byb3ZpZGVyLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5ld19wcm92aWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5ld19wcm92aWRlci50YXhfbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuZXdfcHJvdmlkZXIudGF4X251bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIk3DoyBz4buRIHRodeG6v1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmV3X3Byb3ZpZGVyLnRheF9udW1iZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5ld19wcm92aWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YXhfbnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uZXdfcHJvdmlkZXIuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5ld19wcm92aWRlci5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIk3DtCB04bqjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5uZXdfcHJvdmlkZXIuZGVzY3JpcHRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5ld19wcm92aWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uZXdfcHJvdmlkZXIuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmV3X3Byb3ZpZGVyLmFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCLEkOG7i2EgY2jhu4lcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm5ld19wcm92aWRlci5hZGRyZXNzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5uZXdfcHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkcmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoNVwiLCBbX3ZtLl92KFwiRGFuaCBzw6FjaCB24bqtdCB0xrBcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidHJlZXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLndvcmsubmVzdGVkX2NhdGVnb3JpZXMsXG4gICAgICAgICAgICAgICAgXCJvcGVuLW9uLWZvY3VzXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJjbG9zZS1vbi1zZWxlY3RcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlzYWJsZUJyYW5jaE5vZGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiB24bqtdCB0xrAgdGhlbyBkYW5oIHPDoWNoXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkX21hdGVyaWFscyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRfbWF0ZXJpYWxzID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkX21hdGVyaWFsc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgYm9xLXRhYmxlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJ0aGVhZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRoZWFkLWxpZ2h0IHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xzLWNvbCB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93c3BhbjogXCIyXCIgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtbGVmdCBuYW1lLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dzcGFuOiBcIjJcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlTDqm4gduG6rXQgdMawIC8gRGFuaCBt4bulY1wiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInBlci1jb2xcIiwgYXR0cnM6IHsgcm93c3BhbjogXCIyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLEkMahbiB24buLIHTDrW5oXCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3VycmVuY3ktY29sXCIsIGF0dHJzOiB7IHJvd3NwYW46IFwiMlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJMb+G6oWkgdGnhu4FuXCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnJhbmQtY29sXCIsIGF0dHJzOiB7IHJvd3NwYW46IFwiMlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJIw6NuZ1wiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImludm9pY2UtY29sXCIsIGF0dHJzOiB7IGNvbHNwYW46IFwiM1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmludm9pY2VfdHlwZSA9PT0gXCJpbnZvaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwixJDGoW4gaMOgbmdcIildKVxuICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJI4bujcCDEkeG7k25nXCIpXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcImJvcS1jb2xcIiwgYXR0cnM6IHsgY29sc3BhbjogXCIyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJCT1FcIilcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJub3Rlcy1jb2xcIiwgYXR0cnM6IHsgcm93c3BhbjogXCIyXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIkdoaSBjaMO6XCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgwLCBmYWxzZSwgZmFsc2UpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5saXN0LCBmdW5jdGlvbihyb3cpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiByb3cudWlkLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhdGVnb3J5LXJvd1wiOiByb3cudHlwZSA9PT0gXCJjYXRlZ29yeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXRlcmlhbC1yb3dcIjogcm93LnR5cGUgPT09IFwibWF0ZXJpYWxcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIHJvdy50eXBlID09PSBcImNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250cm9scy1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQgIT09ICRldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hZGRNYXRlcmlhbFRvKHJvdy5pZCwgcm93LmtleWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIrXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCI5XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvdy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyb3cubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbmxpbmUtdGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IHJvdy5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5zZWxlY3QoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhKFwiYnV0dG9uXCIgaW4gJGV2ZW50KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWRkTWF0ZXJpYWwocm93LmtleWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQocm93LCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2xzLWNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIi1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3cubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicm93Lm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5saW5lLXRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiByb3cubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQuc2VsZWN0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShcImJ1dHRvblwiIGluICRldmVudCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZE1hdGVyaWFsKHJvdy5rZXlpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KHJvdywgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvdy5wZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJvdy5wZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5saW5lLXRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBkaXNhYmxlZDogIXJvdy5pc19uZXcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IHJvdy5wZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnNlbGVjdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEoXCJidXR0b25cIiBpbiAkZXZlbnQpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hZGRNYXRlcmlhbChyb3cua2V5aWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChyb3csIFwicGVyXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvdy5jdXJyZW5jeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicm93LmN1cnJlbmN5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlubGluZS10ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgZGlzYWJsZWQ6ICFyb3cuaXNfbmV3IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiByb3cuY3VycmVuY3kgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnNlbGVjdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEoXCJidXR0b25cIiBpbiAkZXZlbnQpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hZGRNYXRlcmlhbChyb3cua2V5aWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbmN5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcm93LmJyYW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyb3cuYnJhbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5saW5lLXRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBkaXNhYmxlZDogIXJvdy5pc19uZXcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IHJvdy5icmFuZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQuc2VsZWN0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShcImJ1dHRvblwiIGluICRldmVudCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZE1hdGVyaWFsKHJvdy5rZXlpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KHJvdywgXCJicmFuZFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3cudW5pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicm93LnVuaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5saW5lLXRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiByb3cudW5pdCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQuc2VsZWN0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShcImJ1dHRvblwiIGluICRldmVudCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZE1hdGVyaWFsKHJvdy5rZXlpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KHJvdywgXCJ1bml0XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvdy5wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicm93LnByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlubGluZS10ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogcm93LnByaWNlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5zZWxlY3QoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhKFwiYnV0dG9uXCIgaW4gJGV2ZW50KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWRkTWF0ZXJpYWwocm93LmtleWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQocm93LCBcInByaWNlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhyb3cucHJpY2UgKiByb3cudW5pdCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcm93LmJvcV91bml0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyb3cuYm9xX3VuaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5saW5lLXRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBkaXNhYmxlZDogIXJvdy5pc19uZXcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IHJvdy5ib3FfdW5pdCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQuc2VsZWN0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShcImJ1dHRvblwiIGluICRldmVudCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZE1hdGVyaWFsKHJvdy5rZXlpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9xX3VuaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3cuYm9xX3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyb3cuYm9xX3ByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlubGluZS10ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgZGlzYWJsZWQ6ICFyb3cuaXNfbmV3IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiByb3cuYm9xX3ByaWNlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5zZWxlY3QoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhKFwiYnV0dG9uXCIgaW4gJGV2ZW50KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWRkTWF0ZXJpYWwocm93LmtleWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3FfcHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWRkLW1vcmVcIiwgb246IHsgY2xpY2s6IF92bS5hZGRDYXRlZ29yeSB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJjb250cm9scy1jb2xcIiB9LCBbX3ZtLl92KFwiK1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCI5XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGjDqm0gZGFuaCBt4bulY1wiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIiwgb246IHsgY2xpY2s6IF92bS5zdWJtaXQgfSB9LFxuICAgICAgICAgICAgW192bS5fdihcIkzGsHVcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuXCIsIG9uOiB7IGNsaWNrOiBfdm0uY2FuY2VsIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiQuG7jyBxdWFcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIGJvcS11bml0LWNvbFwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiU+G7kSBsxrDhu6NuZ1wiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIGJvcS1wcmljZS1jb2xcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIsSQxqFuIGdpw6FcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBib3EtdG90YWwtY29sXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJUaMOgbmggdGnhu4FuXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgYm9xLXVuaXQtY29sXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJT4buRIGzGsOG7o25nXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgYm9xLXByaWNlLWNvbFwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwixJDGoW4gZ2nDoVwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wOTJkNmZkY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDkyZDZmZGNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01vZGFscy9OZXdJbnZvaWNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0wOTJkNmZkY1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTW9kYWxzL05ld0ludm9pY2UudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnVsbHNjcmVlbi1jb250YWluZXIgd29yay1yZXBvcnRcIiB9LCBbXG4gICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiQsOhbyBjw6FvIHbhuq10IHTGsCBjw7RuZyB0csOsbmggXCIgKyBfdm0uX3MoX3ZtLndvcmsubmFtZSkpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcG9ydFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW1xuICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwiIHRyYWNrZXJzLXRhYmxlIHJlcG9ydC10YWJsZSB0YWJsZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX20oMCwgZmFsc2UsIGZhbHNlKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX2woX3ZtLndvcmsuZmxhdHRlbl9saXN0LCBmdW5jdGlvbihyb3csIGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICByb3cudHlwZSA9PT0gXCJjYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBjYXRlZ29yeTogcm93LnR5cGUgPT09IFwiY2F0ZWdvcnlcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIxMlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mocm93LmxhYmVsKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuZGVwdGggPiAwICYmIHJvdy5jaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKCBcIiArIF92bS5fcyhyb3cuY2hpbGRyZW4ubGVuZ3RoKSArIFwiIClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBtYXRlcmlhbDogcm93LnR5cGUgPT09IFwibWF0ZXJpYWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93TWF0ZXJpYWxEZXRhaWwocm93LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImluZGV4LWNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHJvdy5pbmRleCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHt9LCBbX3ZtLl92KF92bS5fcyhyb3cubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJwZXItY29sIGNoaWxkLWNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHJvdy5wZXIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImN1cnJlbmN5LWNvbCBjaGlsZC1jb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhyb3cuY3VycmVuY3kpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW52b2ljZV9jb3VudC1jb2wgY2hpbGQtY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhyb3cuaW52b2ljZV9jb3VudCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0b3RhbF91bml0LWNvbCBjaGlsZC1jb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHJvdy50b3RhbF91bml0KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRvdGFsX3ByaWNlLWNvbCBjaGlsZC1jb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5jb21tYWZseShyb3cudG90YWxfcHJpY2UpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJib3FfdW5pdC1jb2wgY2hpbGQtY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mocm93LmJvcV91bml0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJib3FfdW5pdC1jb2wgY2hpbGQtY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNvbW1hZmx5KHJvdy5ib3FfcHJpY2UpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJib3FfdG90YWwtY29sIGNoaWxkLWNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmNvbW1hZmx5KHJvdy5ib3FfcHJpY2UgKiByb3cuYm9xX3VuaXQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJyZWFsX3VuaXQtY29sIGNoaWxkLWNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHJvdy5ib3FfdW5pdCAtIHJvdy50b3RhbF91bml0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJlYWxfY291bnQtY29sIGNoaWxkLWNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbW1hZmx5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmJvcV9wcmljZSAqIHJvdy5ib3FfdW5pdCAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy50b3RhbF9wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInBlcmNlbnQtY29sIGNoaWxkLWNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJvdy5ib3FfcHJpY2UgKiByb3cuYm9xX3VuaXQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnRvdGFsX3ByaWNlKSAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocm93LmJvcV9wcmljZSAqIHJvdy5ib3FfdW5pdCkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiICVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0Zm9vdFwiLCBbXG4gICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiNFwiIH0gfSwgW192bS5fdihcIlThu5VuZyBj4buZbmdcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiMVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLndvcmsuaW52b2ljZV9jb3VudCkpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubWF0ZXJpYWxcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5tYXRlcmlhbC5uYW1lKSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSBtYXRlcmlhbC1kZXRhaWxcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgxLCBmYWxzZSwgZmFsc2UpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5tYXRlcmlhbC5pbnZvaWNlcywgZnVuY3Rpb24ocm93LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpbmRleCkpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3Mocm93LnNpZ25lZF9hdCkpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3Mocm93LnJlY2lldmVkX2F0KSldKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhyb3cucHJvdmlkZXJfbmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3Mocm93LnVuaXQpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHJvdy5yZWNpZXZlZF91bml0KSldKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhyb3cudW5pdCAtIHJvdy5yZWNpZXZlZF91bml0KSldKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uY29tbWFmbHkocm93LmNvc3QpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uY29tbWFmbHkocm93LmNvc3QgKiByb3cudW5pdCkpKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5jb21tYWZseShyb3cuY29zdCAqIHJvdy5yZWNpZXZlZF91bml0KSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhyb3cubm90ZXMpKV0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGZvb3RcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0Zm9vdC10aXRsZVwiLCBhdHRyczogeyBjb2xzcGFuOiBcIjRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJU4buVbmcgY+G7mW5nXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRmb290LWNvbnRlbnRcIiwgYXR0cnM6IHsgY29sc3BhbjogXCIzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubWF0ZXJpYWwudG90YWxfdW5pdCkpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRmb290LWNvbnRlbnRcIiwgYXR0cnM6IHsgY29sc3BhbjogXCIzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uY29tbWFmbHkoX3ZtLm1hdGVyaWFsLnRvdGFsX3ByaWNlKSkpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGZvb3QtdGl0bGVcIiwgYXR0cnM6IHsgY29sc3BhbjogXCI0XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQk9RXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRmb290LWNvbnRlbnRcIiwgYXR0cnM6IHsgY29sc3BhbjogXCIzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubWF0ZXJpYWwuYm9xX3VuaXQpKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0Zm9vdC1jb250ZW50XCIsIGF0dHJzOiB7IGNvbHNwYW46IFwiM1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbW1hZmx5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tYXRlcmlhbC5ib3FfcHJpY2UgKiBfdm0ubWF0ZXJpYWwuYm9xX3VuaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGZvb3QtdGl0bGVcIiwgYXR0cnM6IHsgY29sc3BhbjogXCI0XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2jDqm5oIGzhu4djaFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0Zm9vdC1jb250ZW50XCIsIGF0dHJzOiB7IGNvbHNwYW46IFwiM1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubWF0ZXJpYWwuYm9xX3VuaXQgLSBfdm0ubWF0ZXJpYWwudG90YWxfdW5pdClcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0Zm9vdC1jb250ZW50XCIsIGF0dHJzOiB7IGNvbHNwYW46IFwiM1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbW1hZmx5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tYXRlcmlhbC5ib3FfcHJpY2UgKiBfdm0ubWF0ZXJpYWwuYm9xX3VuaXQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1hdGVyaWFsLnRvdGFsX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRoZWFkLWxpZ2h0XCIgfSwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJpbmRleC1jb2xcIiwgYXR0cnM6IHsgcm93c3BhbjogXCIyXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiI1wiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWUtY29sXCIsIGF0dHJzOiB7IHJvd3NwYW46IFwiMlwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIlTDqm5cIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJwZXItY29sXCIsIGF0dHJzOiB7IHJvd3NwYW46IFwiMlwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIsSQxqFuIHbhu4tcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJjdXJyZW5jeS1jb2xcIiwgYXR0cnM6IHsgcm93c3BhbjogXCIyXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiTG/huqFpIHRp4buBblwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcImludm9pY2VfY291bnQtY29sIGNoaWxkLWNvbFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJU4buVbmcgxJHGoW4gaMOgbmdcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3RhbF91bml0LWNvbCBjaGlsZC1jb2xcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiU+G7kSBsxrDhu6NuZyDEkeG6t3QgaMOgbmdcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3RhbF9wcmljZS1jb2wgY2hpbGQtY29sXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIkdpw6EgdHLhu4sgxJHhurd0IGjDoG5nXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm9xX3VuaXQtY29sIGNoaWxkLWNvbFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJT4buRIGzGsOG7o25nIEJPUVwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcImJvcV91bml0LWNvbCBjaGlsZC1jb2xcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwixJDGoW4gZ2nDoSBCT1FcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJib3FfdG90YWwtY29sIGNoaWxkLWNvbFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJHacOhIHRy4buLIEJPUVwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInJlYWxfdW5pdC1jb2wgY2hpbGQtY29sXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlPhu5EgbMaw4bujbmcgY2jGsGEgdGjhu7FjIGhp4buHblwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInJlYWxfY291bnQtY29sIGNoaWxkLWNvbFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJHacOhIHRy4buLIGNoxrBhIHRo4buxYyBoaeG7h25cIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJwZXJjZW50LWNvbCBjaGlsZC1jb2xcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiJSBjaMawYSB0aOG7sWMgaGnhu4duXCIpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGVhZC1saWdodCB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgcm93c3BhbjogXCIyXCIgfSB9LCBbX3ZtLl92KFwiU1RUXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyByb3dzcGFuOiBcIjJcIiB9IH0sIFtfdm0uX3YoXCJOZ8OgeSBs4bqtcCDEkcahblwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgcm93c3BhbjogXCIyXCIgfSB9LCBbX3ZtLl92KFwiTmfDoHkgZ2lhbyBow6BuZ1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgcm93c3BhbjogXCIyXCIgfSB9LCBbX3ZtLl92KFwiTmjDoCBjdW5nIGPhuqVwXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjNcIiB9IH0sIFtfdm0uX3YoXCJT4buRIGzGsOG7o25nXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjNcIiB9IH0sIFtfdm0uX3YoXCJHacOhIHRy4buLXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyByb3dzcGFuOiBcIjJcIiB9IH0sIFtfdm0uX3YoXCJHaGkgY2jDulwiKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiU+G7kSBsxrDhu6NuZyDEkeG6t3RcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiU+G7kSBsxrDhu6NuZyDEkcOjIG5o4bqtblwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJT4buRIGzGsOG7o25nIGPDsm4gbOG6oWlcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwixJDGoW4gZ2nDoVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJHacOhIHRy4buLIMSR4bq3dCBow6BuZ1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJHacOhIHRy4buLIMSRw6Mgbmjhuq1uXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNjlhMjhjYjlcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTY5YTI4Y2I5XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SZXBvcnRzL1dvcmtSZXBvcnQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTY5YTI4Y2I5XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SZXBvcnRzL1dvcmtSZXBvcnQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJ3b3Jrc1wiIH0gfSxcbiAgICBbXG4gICAgICBfdm0ud29ya3NcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtZGVjayB3b3Jrc1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbChfdm0ud29ya3MsIGZ1bmN0aW9uKHdvcmspIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IHdvcmsuaWQsIHN0YXRpY0NsYXNzOiBcIndvcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWltZy10b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHdvcmsuaW1hZ2UsIGFsdDogXCJDYXJkIGltYWdlIGNhcFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh3b3JrLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh3b3JrLmRlc2NyaXB0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNo4bunIMSR4bqndSB0xrA6IFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic21hbGxcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LW11dGVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHdvcmsuY2xpZW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0IGJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52aWV3UmVwb3J0cyh3b3JrLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJYZW0gYsOhbyBjw6FvXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0IGJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmsuc2hvd0RldGFpbCA9ICF3b3JrLnNob3dEZXRhaWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50X3dvcmtfaWQgPSB3b3JrLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNoaSB0aeG6v3RcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgd29yay5zaG93RGV0YWlsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3JrLWRldGFpbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwiS2jhu59pIGPDtG5nOiBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHdvcmsuc3RhcnRlZF9hdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoXCJU4buVbmcgZ2nDoSB0cuG7iyBCT1E6IFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNvbW1hKHdvcmsuYm9xX3N1bSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihcIlPhu5EgxJHGoW4gaMOgbmc6IFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mod29yay5pbnZvaWNlX2NvdW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihcIkdpw6EgdHLhu4sgxJHGoW4gaMOgbmc6IFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNvbW1hKHdvcmsudG90YWxfc3VtKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDAsIHRydWUsIGZhbHNlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwiR2nDoSB0cuG7iyB0aGFuaCB0b8OhbjogXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uY29tbWEod29yay5wYWlkX3N1bSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubmV3SW52b2ljZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlThuqFvIMSRxqFuIGjDoG5nXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCB3b3JrXCIsIG9uOiB7IGNsaWNrOiBfdm0ubmV3V29yayB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fbSgxLCBmYWxzZSwgZmFsc2UpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJmdWxsc2NyZWVuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwiZnVsbHNjcmVlblwiLFxuICAgICAgICAgIGF0dHJzOiB7IGZ1bGxzY3JlZW46IF92bS5mdWxsc2NyZWVuLCBiYWNrZ3JvdW5kOiBcIiNmZmZmZmZcIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcInVwZGF0ZTpmdWxsc2NyZWVuXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uZnVsbHNjcmVlbiA9ICRldmVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5mdWxsc2NyZWVuID8gX2MoXCJ3b3JrLXJlcG9ydFwiKSA6IF92bS5fZSgpXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRleHRcIiB9LCBbXG4gICAgICBfYyhcImJcIiwgW192bS5fdihcIlPhu5EgbmfGsOG7nWkgY8O0bmcgdMOhYzogXCIpXSksXG4gICAgICBfdm0uX3YoXCJDaMawYSBjw7MgdGjDtG5nIHRpblwiKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlRow6ptIGPDtG5nIHRyxrDhu51uZ1wiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10ZXh0IHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFThuqFvIGPDtG5nIHRyxrDhu51uZyBt4bubaVxcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtYWIyNTI0Y2FcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWFiMjUyNGNhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xb3Jrcy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtYWIyNTI0Y2FcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dvcmtzLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTAyYmY2MDFjXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9OZXdXb3JrLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiM2RjMjhjMDBcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDJiZjYwMWNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL05ld1dvcmsudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTAyYmY2MDFjXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9OZXdXb3JrLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wMmJmNjAxY1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Nb2RhbHMvTmV3V29yay52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMDJiZjYwMWNcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTW9kYWxzL05ld1dvcmsudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDkyZDZmZGNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL05ld0ludm9pY2UudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIzMDRkNDVlNFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wOTJkNmZkY1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vTmV3SW52b2ljZS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDkyZDZmZGNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL05ld0ludm9pY2UudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTA5MmQ2ZmRjXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01vZGFscy9OZXdJbnZvaWNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wOTJkNmZkY1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Nb2RhbHMvTmV3SW52b2ljZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02OWEyOGNiOVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vV29ya1JlcG9ydC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjg0OTBiZmJjXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTY5YTI4Y2I5XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9Xb3JrUmVwb3J0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02OWEyOGNiOVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vV29ya1JlcG9ydC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNjlhMjhjYjlcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUmVwb3J0cy9Xb3JrUmVwb3J0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02OWEyOGNiOVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SZXBvcnRzL1dvcmtSZXBvcnQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYWIyNTI0Y2FcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL1dvcmtzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNDE4YzY1MmNcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYWIyNTI0Y2FcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL1dvcmtzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1hYjI1MjRjYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vV29ya3MudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWFiMjUyNGNhXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dvcmtzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1hYjI1MjRjYVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xb3Jrcy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxudmFyIGxpc3RUb1N0eWxlcyA9IHJlcXVpcmUoJy4vbGlzdFRvU3R5bGVzJylcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLXZ1ZS1zc3ItaWR+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAyMSIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTA5MmQ2ZmRjXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9OZXdJbnZvaWNlLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlbnZcXFwiLHtcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCJsYXN0IDIgdmVyc2lvbnNcXFwiLFxcXCI+IDUlIGluIEJFXFxcIl0sXFxcIm5vZGVcXFwiOlxcXCJjdXJyZW50XFxcIixcXFwidWdsaWZ5XFxcIjp0cnVlfSxcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiLFxcXCJ0cmFuc2Zvcm0taW5saW5lLWVudmlyb25tZW50LXZhcmlhYmxlc1xcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCZidXN0Q2FjaGUhLi9OZXdJbnZvaWNlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDkyZDZmZGNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vTmV3SW52b2ljZS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxNb2RhbHNcXFxcTmV3SW52b2ljZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkgeyAgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHsgIGNvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTA5MmQ2ZmRjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDkyZDZmZGNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4nICsgJyAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01vZGFscy9OZXdJbnZvaWNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTW9kYWxzL05ld0ludm9pY2UudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTAyYmY2MDFjXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9OZXdXb3JrLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlbnZcXFwiLHtcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCJsYXN0IDIgdmVyc2lvbnNcXFwiLFxcXCI+IDUlIGluIEJFXFxcIl0sXFxcIm5vZGVcXFwiOlxcXCJjdXJyZW50XFxcIixcXFwidWdsaWZ5XFxcIjp0cnVlfSxcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiLFxcXCJ0cmFuc2Zvcm0taW5saW5lLWVudmlyb25tZW50LXZhcmlhYmxlc1xcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCZidXN0Q2FjaGUhLi9OZXdXb3JrLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDJiZjYwMWNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vTmV3V29yay52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxNb2RhbHNcXFxcTmV3V29yay52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkgeyAgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHsgIGNvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTAyYmY2MDFjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDJiZjYwMWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4nICsgJyAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01vZGFscy9OZXdXb3JrLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTW9kYWxzL05ld1dvcmsudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTY5YTI4Y2I5XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9Xb3JrUmVwb3J0LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlbnZcXFwiLHtcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCJsYXN0IDIgdmVyc2lvbnNcXFwiLFxcXCI+IDUlIGluIEJFXFxcIl0sXFxcIm5vZGVcXFwiOlxcXCJjdXJyZW50XFxcIixcXFwidWdsaWZ5XFxcIjp0cnVlfSxcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiLFxcXCJ0cmFuc2Zvcm0taW5saW5lLWVudmlyb25tZW50LXZhcmlhYmxlc1xcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCZidXN0Q2FjaGUhLi9Xb3JrUmVwb3J0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjlhMjhjYjlcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vV29ya1JlcG9ydC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxSZXBvcnRzXFxcXFdvcmtSZXBvcnQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgIHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7ICBjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02OWEyOGNiOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY5YTI4Y2I5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuJyArICcgIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SZXBvcnRzL1dvcmtSZXBvcnQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SZXBvcnRzL1dvcmtSZXBvcnQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWFiMjUyNGNhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9Xb3Jrcy52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwibGFzdCAyIHZlcnNpb25zXFxcIixcXFwiPiA1JSBpbiBCRVxcXCJdLFxcXCJub2RlXFxcIjpcXFwiY3VycmVudFxcXCIsXFxcInVnbGlmeVxcXCI6dHJ1ZX0sXFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIixcXFwidHJhbnNmb3JtLWlubGluZS1lbnZpcm9ubWVudC12YXJpYWJsZXNcXFwiXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAmYnVzdENhY2hlIS4vV29ya3MudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1hYjI1MjRjYVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi9Xb3Jrcy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxXb3Jrcy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkgeyAgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHsgIGNvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWFiMjUyNGNhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYWIyNTI0Y2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4nICsgJyAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dvcmtzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV29ya3MudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiXSwic291cmNlUm9vdCI6IiJ9