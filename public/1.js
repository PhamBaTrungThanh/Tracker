webpackJsonp([1],{

/***/ "./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.min.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * vue-treeselect v0.0.6 | (c) 2017 Riophae Lee
 * Released under the MIT License.
 * https://github.com/riophae/vue-treeselect
 */
!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.VueTreeselect = t() : e.VueTreeselect = t();
}(this, function () {
  return function (e) {
    function t(i) {
      if (n[i]) return n[i].exports;var s = n[i] = { i: i, l: !1, exports: {} };return e[i].call(s.exports, s, s.exports, t), s.l = !0, s.exports;
    }var n = {};return t.m = e, t.c = n, t.d = function (e, n, i) {
      t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: i });
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(n, "a", n), n;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "/", t(t.s = 4);
  }([function (e, t) {
    e.exports = function (e, t, n, i, s, o) {
      var r,
          a = e = e || {},
          l = _typeof(e.default);"object" !== l && "function" !== l || (r = e, a = e.default);var c = "function" == typeof a ? a.options : a;t && (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), n && (c.functional = !0), s && (c._scopeId = s);var u;if (o ? (u = function u(e) {
        e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(o);
      }, c._ssrRegister = u) : i && (u = i), u) {
        var d = c.functional,
            h = d ? c.render : c.beforeCreate;d ? (c._injectStyles = u, c.render = function (e, t) {
          return u.call(t), h(e, t);
        }) : c.beforeCreate = h ? [].concat(h, u) : [u];
      }return { esModule: r, exports: a, options: c };
    };
  }, function (e, t) {
    function n(e) {
      var t = typeof e === "undefined" ? "undefined" : _typeof(e);return null != e && ("object" == t || "function" == t);
    }e.exports = n;
  }, function (e, t, n) {
    var i = n(9),
        s = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
        o = i || s || Function("return this")();e.exports = o;
  }, function (e, t, n) {
    var i = n(2),
        s = i.Symbol;e.exports = s;
  }, function (e, t, n) {
    "use strict";
    function i(e) {
      return function (t) {
        "mousedown" === t.type && 0 === t.button && e.call(this, t);
      };
    }function s() {}function o(e) {
      return null != e && "object" === (void 0 === e ? "undefined" : x(e)) && Object.getPrototypeOf(e) === Object.prototype;
    }function r(e, t, n) {
      o(n) ? (e[t] || (e[t] = {}), l(e[t], n)) : e[t] = n;
    }function a(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }function l(e, t) {
      if (null == t) ;else if (o(t)) for (var n = Object.keys(t), i = 0, s = n.length; i < s; i++) {
        r(e, n[i], t[n[i]]);
      } else N();return e;
    }function c(e) {
      return S(function () {
        return Array.isArray(e);
      }, function () {
        return "unexpected type";
      }), e[e.length - 1];
    }function u(e, t, n) {
      for (var i = 0, s = e.length; i < s; i++) {
        if (t.call(n, e[i], i, e)) return i;
      }return -1;
    }function d(e, t, n) {
      return "function" == typeof Array.prototype.findIndex ? e.findIndex(t, n) : u(e, t, n);
    }function h(e, t) {
      var n = e.indexOf(t);-1 !== n && e.splice(n, 1);
    }function p(e, t) {
      if (e.length !== t.length) return !1;for (var n = 0; n < e.length; n++) {
        if (e[n] !== t[n]) return !1;
      }return !0;
    }function f(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
    }function v(e, t) {
      for (var n = 0;;) {
        if (e.level < n) return -1;if (t.level < n) return 1;if (e.index[n] !== t.index[n]) return e.index[n] - t.index[n];n++;
      }
    }function _(e, t) {
      return e.level !== t.level ? e.level - t.level : v(e, t);
    }function m(e) {
      return "and " + e + " more";
    }function C(e) {
      return "Failed to load children options: " + (e.message || String(e)) + ".";
    }function y(e) {
      n(5);
    }Object.defineProperty(t, "__esModule", { value: !0 });var b = n(6),
        g = n.n(b),
        E = n(7),
        O = n.n(E),
        x = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    },
        S = s,
        N = s,
        w = { provide: function provide() {
        return { instance: this, UNCHECKED: 0, INDETERMINATE: 1, CHECKED: 2, UNMATCHED: 0, DESCENDANT_MATCHED: 1, MATCHED: 2 };
      }, props: { autofocus: { type: Boolean, default: !1 }, backspaceRemoves: { type: Boolean, default: !0 }, branchNodesFirst: { type: Boolean, default: !1 }, clearable: { type: Boolean, default: !0 }, clearAllText: { type: String, default: "Clear all" }, clearOnSelect: { type: Boolean, default: !1 }, clearValueText: { type: String, default: "Clear value" }, closeOnSelect: { type: Boolean, default: !0 }, deleteRemoves: { type: Boolean, default: !0 }, disableBranchNodes: { type: Boolean, default: !1 }, disabled: { type: Boolean, default: !1 }, defaultExpandLevel: { type: Number, default: 0 }, escapeClearsValue: { type: Boolean, default: !0 }, flat: { type: Boolean, default: !1 }, id: { default: null }, limit: { type: Number, default: 1 / 0 }, limitText: { type: Function, default: m }, loadChildrenErrorText: { type: Function, default: C }, loadChildrenOptions: { type: Function }, loadingText: { type: String, default: "Loading..." }, loadRootOptions: { type: Function }, maxHeight: { type: Number, default: 300 }, multiple: { type: Boolean, default: !1 }, noChildrenText: { type: String, default: "No children options..." }, noResultsText: { type: String, default: "No results found..." }, noOptionsText: { type: String, default: "No options available." }, openDirection: { type: String, default: "auto" }, openOnClick: { type: Boolean, default: !0 }, openOnFocus: { type: Boolean, default: !1 }, options: { type: Array }, placeholder: { type: String, default: "Select..." }, retainScrollPosition: { type: Boolean, default: !0 }, retryText: { type: String, default: "Retry?" }, retryTitle: { type: String, default: "Click to retry" }, searchable: { type: Boolean, default: !0 }, showCount: { type: Boolean, default: !1 }, showCountOf: { type: String, default: "ALL_CHILDREN", validator: function validator(e) {
            return -1 !== ["ALL_CHILDREN", "ALL_DESCENDANTS", "LEAF_CHILDREN", "LEAF_DESCENDANTS"].indexOf(e);
          } }, showCountOnSearch: null, sortValueBy: { type: String, default: "ORDER_SELECTED" }, subItemsLimit: { type: Number, default: 1 / 0 }, tabIndex: { type: Number, default: 0 }, value: null }, data: function data() {
        return { internalValue: [], isFocused: !1, isOpen: !1, nodeCheckedStateMap: Object.create(null), nodeMap: Object.create(null), normalizedOptions: null, noSearchResults: !0, optimizedHeight: 0, prefferedOpenDirection: "below", rootOptionsLoaded: !1, loadingRootOptions: !1, loadingRootOptionsError: "", searchingCount: Object.create(null), searching: !1, searchQuery: "", selectedNodeMap: Object.create(null), lastScrollPosition: 0 };
      }, computed: { selectedNodesNumber: function selectedNodesNumber() {
          return this.internalValue.length;
        }, hasValue: function hasValue() {
          return this.selectedNodesNumber > 0;
        }, selectedNodes: function selectedNodes() {
          return this.internalValue.map(this.getNode);
        }, single: function single() {
          return !this.multiple;
        }, visibleValue: function visibleValue() {
          return this.selectedNodes.slice(0, this.limit);
        }, hasExceededLimit: function hasExceededLimit() {
          return this.selectedNodesNumber > this.limit;
        }, shouldShowClearIcon: function shouldShowClearIcon() {
          return this.clearable && !this.disabled && this.hasValue;
        }, showCountOnSearchComputed: function showCountOnSearchComputed() {
          return "boolean" == typeof this.showCountOnSearch ? this.showCountOnSearch : this.showCount;
        } }, watch: { disabled: function disabled(e) {
          e && this.isOpen && this.closeMenu();
        }, multiple: function multiple(e) {
          e && this.buildNodeCheckedStateMap();
        }, searchQuery: O()(function () {
          this.handleSearch(), this.$emit("search-change", this.searchQuery, this.id);
        }, 200), sortValueBy: function sortValueBy() {
          this.sortValue();
        }, internalValue: function internalValue() {
          this.$emit("input", this.getValue(), this.id);
        }, value: function value(e) {
          var t = e || 0 === e ? this.multiple ? e.slice() : [e] : [];!p(t, this.internalValue) && (this.internalValue = t, this.buildSelectedNodeMap(), this.buildNodeCheckedStateMap());
        } }, methods: { verifyProps: function verifyProps() {
          var e = this;this.loadRootOptions || (this.options ? Array.isArray(this.options) || S(function () {
            return !1;
          }, function () {
            return "Expected prop `options` to be an array, instead got: " + e.options + ".";
          }) : S(function () {
            return !1;
          }, function () {
            return "Required prop `options` is not provided.";
          }));
        }, resetFlags: function resetFlags() {
          this._blurOnSelect = !1, this._wasClickedOnValueItem = !1;
        }, initialize: function initialize(e) {
          Array.isArray(e) && (this.rootOptionsLoaded = !0), this.initializeRootOptions(e || []), this.initializeValue(), this.buildSelectedNodeMap(), this.buildNodeCheckedStateMap();
        }, getValue: function getValue() {
          return this.multiple ? this.internalValue.slice() : this.internalValue[0];
        }, getNode: function getNode(e) {
          return S(function () {
            return null != e;
          }, function () {
            return "Invalid node id: " + e;
          }), this.nodeMap[e] || { id: e, label: e + " (unknown)", ancestors: [], parentNode: null, isUnknownNode: !0, isLeaf: !0, isBranch: !1 };
        }, isSelected: function isSelected(e) {
          return e.id in this.selectedNodeMap;
        }, checkIfBranchNode: function checkIfBranchNode(e) {
          S(function () {
            return e && e.isBranch;
          }, function () {
            return "Expected a branch node, instead got: " + e;
          });
        }, traverseDescendants: function traverseDescendants(e, t, n) {
          var i = this;"function" == typeof t && (n = t, t = 1 / 0), e.isBranch && e.level < t && e.children.forEach(function (e) {
            i.traverseDescendants(e, t, n), n(e);
          });
        }, traverseAncestors: function traverseAncestors(e, t) {
          var n = e.parentNode;null !== n && (t(n), this.traverseAncestors(n, t));
        }, traverseAllNodes: function traverseAllNodes(e) {
          var t = this;this.normalizedOptions.forEach(function (n) {
            t.traverseDescendants(n, e), e(n);
          });
        }, toggleClickOutsideEvent: function toggleClickOutsideEvent(e) {
          e ? document.addEventListener("mousedown", this.handleClickOutside, !1) : document.removeEventListener("mousedown", this.handleClickOutside, !1);
        }, focusInput: function focusInput() {
          this.$refs.value.focusInput();
        }, blurInput: function blurInput() {
          this.$refs.value.blurInput();
        }, handleMouseDown: i(function (e) {
          if (e.preventDefault(), e.stopPropagation(), !this.disabled) {
            this.$refs.value.$el.contains(e.target) && (!this.isOpen || this.searchable || this._wasClickedOnValueItem ? this.isOpen || !this.openOnClick && !this.isFocused || this.openMenu() : this.closeMenu()), this._blurOnSelect ? this.blurInput() : this.focusInput(), this.resetFlags();
          }
        }), handleMouseDownOnClear: i(function (e) {
          e.stopPropagation(), e.preventDefault(), this.clear(), this.focusInput();
        }), handleMouseDownOnArrow: i(function (e) {
          e.preventDefault(), e.stopPropagation(), this.focusInput(), this.toggleMenu();
        }), handleClickOutside: function handleClickOutside(e) {
          this.$refs.wrapper && !this.$refs.wrapper.contains(e.target) && (this.blurInput(), this.closeMenu());
        }, handleSearch: function handleSearch() {
          var e = this;this.searchQuery ? (this.searching = !0, this.noSearchResults = !0, this.traverseAllNodes(function (t) {
            if (t.isBranch) {
              var n;t.expandsOnSearch = !1, t.hasMatchedChild = !1, e.searchingCount[t.id] = (n = {}, f(n, "ALL_CHILDREN", 0), f(n, "ALL_DESCENDANTS", 0), f(n, "LEAF_CHILDREN", 0), f(n, "LEAF_DESCENDANTS", 0), n);
            }
          }), this.traverseAllNodes(function (t) {
            var n = t.isMatched = g()(e.searchQuery.toLowerCase(), t.label.toLowerCase());n && (e.noSearchResults = !1, t.ancestors.forEach(function (t) {
              return e.searchingCount[t.id].ALL_DESCENDANTS++;
            }), t.isLeaf && t.ancestors.forEach(function (t) {
              return e.searchingCount[t.id].LEAF_DESCENDANTS++;
            }), null !== t.parentNode && (e.searchingCount[t.parentNode.id].ALL_CHILDREN += 1, t.isLeaf && (e.searchingCount[t.parentNode.id].LEAF_CHILDREN += 1))), (n || t.isBranch && t.expandsOnSearch) && null !== t.parentNode && (t.parentNode.expandsOnSearch = !0, t.parentNode.hasMatchedChild = !0);
          })) : this.searching = !1;
        }, closeMenu: function closeMenu() {
          this.isOpen && (this.isOpen = !1, this.retainScrollPosition && this.$refs.menu && (this.lastScrollPosition = this.$refs.menu.scrollTop), this.toggleClickOutsideEvent(!1), this.searchQuery = "", this.$emit("close", this.getValue(), this.id));
        }, openMenu: function openMenu() {
          this.disabled || this.isOpen || (this.isOpen = !0, this.$nextTick(this.adjustPosition), this.retainScrollPosition && this.$nextTick(this.restoreScrollPosition), this.rootOptionsLoaded || this.loadOptions(!0), this.toggleClickOutsideEvent(!0), this.$emit("open", this.id));
        }, toggleMenu: function toggleMenu() {
          this.isOpen ? this.closeMenu() : this.openMenu();
        }, toggleExpanded: function toggleExpanded(e) {
          this.checkIfBranchNode(e), this.searching ? e.expandsOnSearch = !e.expandsOnSearch : e.isExpanded = !e.isExpanded;
        }, initializeValue: function initializeValue() {
          this.multiple ? (this.internalValue = Array.isArray(this.value) ? this.value.slice() : [], this.sortValue()) : this.internalValue = null != this.value ? [this.value] : [];
        }, initializeRootOptions: function initializeRootOptions(e) {
          this.normalizedOptions = this.normalize(null, e);
        }, buildSelectedNodeMap: function buildSelectedNodeMap() {
          var e = this.selectedNodeMap = Object.create(null);this.internalValue.forEach(function (t) {
            e[t] = !0;
          });
        }, buildNodeCheckedStateMap: function buildNodeCheckedStateMap() {
          var e = this,
              t = this.nodeCheckedStateMap = Object.create(null);this.multiple && (this.selectedNodes.forEach(function (n) {
            t[n.id] = 2, e.flat || (e.traverseDescendants(n, function (e) {
              t[e.id] = 2;
            }), e.traverseAncestors(n, function (e) {
              t[e.id] = 1;
            }));
          }), this.normalizedOptions.forEach(function (n) {
            n.id in t || (t[n.id] = 0), e.traverseDescendants(n, function (e) {
              e.id in t || (t[e.id] = 0);
            });
          }));
        }, normalize: function normalize(e, t) {
          var n = this,
              i = t.map(function (t, i) {
            n.checkDuplication(t), n.verifyNodeShape(t);var s = null === e,
                o = t.id,
                r = t.label,
                a = t.children,
                l = t.isDisabled,
                c = void 0 !== l && l,
                u = Array.isArray(a) || null === a || void 0 === a && !!t.isBranch,
                d = !u,
                h = s ? 0 : e.level + 1,
                p = s ? [] : e.ancestors.concat(e),
                v = (s ? [] : e.index).concat(i),
                _ = n.nodeMap[o] = { id: o, label: r, level: h, ancestors: p, index: v, parentNode: e, isDisabled: c, isMatched: !1, isLeaf: d, isBranch: u, isRootNode: s, raw: t };if (u) {
              var m,
                  C = Array.isArray(a);C || S(function () {
                return "function" == typeof n.loadChildrenOptions;
              }, function () {
                return "Unloaded branch node detected. `loadChildrenOptions` prop is required to load its children.";
              }), _.isLoaded = C, _.isPending = !1, _.isExpanded = h < n.defaultExpandLevel, _.hasMatchedChild = !1, _.expandsOnSearch = !1, _.loadingChildrenError = "", _.count = (m = {}, f(m, "ALL_CHILDREN", 0), f(m, "ALL_DESCENDANTS", 0), f(m, "LEAF_CHILDREN", 0), f(m, "LEAF_DESCENDANTS", 0), m), _.children = C ? n.normalize(_, a) : [], _.isExpanded && !_.isLoaded && n.loadOptions(!1, _);
            }return _.ancestors.forEach(function (e) {
              return e.count.ALL_DESCENDANTS++;
            }), d && _.ancestors.forEach(function (e) {
              return e.count.LEAF_DESCENDANTS++;
            }), null !== e && (e.count.ALL_CHILDREN += 1, d && (e.count.LEAF_CHILDREN += 1)), _;
          });if (this.branchNodesFirst) {
            var s = i.filter(function (e) {
              return e.isBranch;
            }),
                o = i.filter(function (e) {
              return e.isLeaf;
            });i = s.concat(o);
          }return i;
        }, loadOptions: function loadOptions(e, t) {
          var n = this;if (e) {
            if (this.loadingRootOptions) return;var i = function i(e, t) {
              n.loadingRootOptions = !1, e ? n.loadingRootOptionsError = e.message || String(e) : t ? Array.isArray(t) ? (n.initialize(t), n.rootOptionsLoaded = !0) : n.loadingRootOptionsError = "received unrecognizable data" : n.loadingRootOptionsError = "no data received";
            };this.loadingRootOptions = !0, this.loadingRootOptionsError = "", this.loadRootOptions(i);
          } else {
            if (t.isPending) return;var s = t.raw,
                o = function o(e, i) {
              t.isPending = !1, e ? t.loadingChildrenError = n.loadChildrenErrorText(e) : Array.isArray(i) ? (t.children = n.normalize(t, i), t.isLoaded = !0, n.buildNodeCheckedStateMap()) : (t.loadingChildrenError = "Received unrecognizable data", S(function () {
                return !1;
              }, function () {
                return "Received unrecognizable data " + i + " while loading children options of node " + t.id;
              }));
            };t.isPending = !0, t.loadingChildrenError = "", this.loadChildrenOptions(s, o);
          }
        }, checkDuplication: function checkDuplication(e) {
          var t = this;S(function () {
            return !a(t.nodeMap, e.id);
          }, function () {
            return "Detected duplicate presence of node id " + JSON.stringify(e.id) + '. Their labels are "' + t.nodeMap[e.id].label + '" and "' + e.label + '" respectively.';
          });
        }, verifyNodeShape: function verifyNodeShape() {}, select: function select(e) {
          this.single && this.clear();var t = this.multiple && !this.flat ? 0 === this.nodeCheckedStateMap[e.id] : !this.isSelected(e);t ? this._selectNode(e) : this._deselectNode(e), this.buildSelectedNodeMap(), this.buildNodeCheckedStateMap(), this.searching && t && (this.single || this.clearOnSelect) && (this.searchQuery = ""), this.single && this.closeOnSelect && (this.closeMenu(), this.searchable && (this._blurOnSelect = !0));
        }, clear: function clear() {
          this.hasValue && (this.internalValue = [], this.buildSelectedNodeMap(), this.buildNodeCheckedStateMap());
        }, _selectNode: function _selectNode(e) {
          if (this.addValue(e), this.multiple && !this.flat && !e.isRootNode) {
            var t = e.parentNode,
                n = t.children;n.every(this.isSelected) && (n.forEach(this.removeValue), this._selectNode(t));
          }
        }, _deselectNode: function _deselectNode(e) {
          var t = this;if (this.removeValue(e), this.multiple && !this.flat && (this.selectedNodes.forEach(function (n) {
            -1 !== n.ancestors.indexOf(e) && t.removeValue(n);
          }), !e.isRootNode)) {
            var n = d(e.ancestors, this.isSelected);if (-1 !== n) {
              var i = e.ancestors[n],
                  s = e.ancestors.concat(e);this.removeValue(i), this.traverseDescendants(i, e.level, function (e) {
                -1 === s.indexOf(e) && t.addValue(e);
              });
            }
          }
        }, addValue: function addValue(e) {
          this.internalValue.push(e.id), this.selectedNodeMap[e.id] = !0, this.sortValue();
        }, removeValue: function removeValue(e) {
          h(this.internalValue, e.id), delete this.selectedNodeMap[e.id];
        }, maybeRemoveLastValue: function maybeRemoveLastValue() {
          if (this.hasValue) {
            var e = c(this.internalValue),
                t = this.getNode(e);this.removeValue(t), this.buildSelectedNodeMap(), this.buildNodeCheckedStateMap();
          }
        }, sortValue: function sortValue() {
          var e = this;"LEVEL" === this.sortValueBy ? this.internalValue.sort(function (t, n) {
            return _(e.nodeMap[t], e.nodeMap[n]);
          }) : "INDEX" === this.sortValueBy && this.internalValue.sort(function (t, n) {
            return v(e.nodeMap[t], e.nodeMap[n]);
          });
        }, restoreScrollPosition: function restoreScrollPosition() {
          this.$refs.menu && (this.$refs.menu.scrollTop = this.lastScrollPosition);
        }, adjustPosition: function adjustPosition() {
          if ("undefined" != typeof window) {
            var e = this.$el.getBoundingClientRect(),
                t = e.top,
                n = window.innerHeight - e.bottom;n > this.maxHeight || n > t || "below" === this.openDirection || "bottom" === this.openDirection ? (this.prefferedOpenDirection = "below", this.optimizedHeight = Math.min(n - 40, this.maxHeight)) : (this.prefferedOpenDirection = "above", this.optimizedHeight = Math.min(t - 40, this.maxHeight));
          }
        } }, created: function created() {
        this.verifyProps(), this.resetFlags(), this.initialize(this.options);
      }, mounted: function mounted() {
        this.autofocus && this.$refs.value.focusInput();
      }, destroyed: function destroyed() {
        this.toggleClickOutsideEvent(!1);
      } },
        D = { computed: { limitText: function limitText() {
          var e = this.instance.selectedNodesNumber - this.instance.limit;return this.instance.limitText(e);
        } }, methods: { focusInput: function focusInput() {
          this.$refs.input.focus();
        }, blurInput: function blurInput() {
          this.$refs.input.blur();
        }, handleMouseDownOnValue: i(function () {
          this.instance._wasClickedOnValueItem = !0;
        }) } },
        M = { name: "vue-treeselect--placeholder", inject: ["instance"] },
        A = function A() {
      var e = this,
          t = e.$createElement;return (e._self._c || t)("div", { staticClass: "vue-treeselect__placeholder vue-treeselect-helper-zoom-effect-off" }, [e._t("placeholder", [e._v(e._s(e.instance.placeholder))])], 2);
    },
        L = [],
        T = { render: A, staticRenderFns: L },
        V = T,
        R = n(0),
        k = R(M, V, !1, null, null, null),
        I = k.exports,
        $ = { BACKSPACE: 8, ESCAPE: 27, DELETE: 46 },
        B = { name: "vue-treeselect--input", inject: ["instance"], data: function data() {
        return { inputWidth: 5 };
      }, computed: { needsAutoSize: function needsAutoSize() {
          return this.instance.multiple;
        } }, updated: function updated() {
        this.needsAutoSize && this.updateInputWidth();
      }, methods: { focus: function focus() {
          this.instance.disabled || this.$refs.input && this.$refs.input.focus();
        }, blur: function blur() {
          this.$refs.input && this.$refs.input.blur();
        }, onFocus: function onFocus() {
          this.instance.isFocused = !0, !this.instance.isOpen && this.instance.openOnFocus && this.instance.openMenu();
        }, onBlur: function onBlur() {
          this.instance.isFocused = !1, this.instance.closeMenu();
        }, onInput: function onInput(e) {
          this.instance.searchQuery = e.target.value;
        }, onKeyDown: function onKeyDown(e) {
          if (!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)) switch ("which" in e ? e.which : e.keyCode) {case $.BACKSPACE:
              this.instance.backspaceRemoves && !this.instance.searchQuery.length && this.instance.maybeRemoveLastValue();break;case $.DELETE:
              this.instance.deleteRemoves && !this.instance.searchQuery.length && this.instance.maybeRemoveLastValue();break;case $.ESCAPE:
              this.instance.searchQuery.length ? this.instance.searchQuery = "" : this.instance.isOpen ? this.instance.closeMenu() : this.instance.escapeClearsValue && this.instance.clear();break;default:
              this.instance.isOpen || this.instance.openMenu();}
        }, onMouseDown: function onMouseDown(e) {
          this.instance.searchQuery.length && e.stopPropagation();
        }, renderInputWrapper: function renderInputWrapper(e) {
          var t = { class: "vue-treeselect__input-wrapper" },
              n = [];return this.instance.searchable && !this.instance.disabled && (n.push(this.renderInput(e)), this.needsAutoSize && n.push(this.renderSizer(e))), this.instance.searchable || l(t, { on: { focus: this.onFocus, blur: this.onBlur, keydown: this.onKeyDown }, ref: "input" }), this.instance.searchable || this.instance.disabled || l(t, { attrs: { tabIndex: this.instance.tabIndex } }), e("div", t, n);
        }, renderInput: function renderInput(e) {
          return e("input", { class: "vue-treeselect__input", attrs: { type: "text", autocomplete: "off", tabIndex: this.instance.tabIndex }, domProps: { value: this.instance.searchQuery }, style: { width: this.needsAutoSize ? this.inputWidth + "px" : null }, on: { focus: this.onFocus, input: this.onInput, blur: this.onBlur, keydown: this.onKeyDown, mousedown: this.onMouseDown }, ref: "input" });
        }, renderSizer: function renderSizer(e) {
          return e("div", { class: "vue-treeselect__sizer", domProps: { textContent: this.instance.searchQuery }, ref: "sizer" });
        }, updateInputWidth: function updateInputWidth() {
          this.inputWidth = Math.max(5, this.$refs.sizer ? this.$refs.sizer.scrollWidth + 5 : 0);
        } }, render: function render(e) {
        return this.renderInputWrapper(e);
      } },
        j = n(0),
        F = j(B, null, !1, null, null, null),
        z = F.exports,
        P = { name: "vue-treeselect--multi-value", components: { Placeholder: I, SearchInput: z }, mixins: [D], inject: ["instance"] },
        H = function H() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;return n("div", { staticClass: "vue-treeselect__value-wrapper" }, [n("transition-group", { staticClass: "vue-treeselect__multi-value", attrs: { tag: "div", name: "vue-treeselect__multi-value-item--zoom", appear: "" } }, [e._l(e.instance.visibleValue, function (t) {
        return [n("div", { key: "value-" + t.id, staticClass: "vue-treeselect__multi-value-item-wrapper", on: { mousedown: e.handleMouseDownOnValue } }, [n("div", { staticClass: "vue-treeselect__multi-value-item" }, [n("span", { staticClass: "vue-treeselect__multi-value-label" }, [e._v(e._s(t.label))]), n("span", { staticClass: "vue-treeselect__icon vue-treeselect__value-remove", on: { mousedown: function mousedown(n) {
              e.instance.select(t);
            } } }, [e._v("×")])])])];
      }), e._v(" "), e.instance.hasExceededLimit ? n("div", { key: "limit-tip", staticClass: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off" }, [n("span", { staticClass: "vue-treeselect__limit-tip-text" }, [e._v(e._s(e.limitText))])]) : e._e(), e._v(" "), e.instance.hasValue || e.instance.searchQuery ? e._e() : n("placeholder", { key: "placeholer" }), e._v(" "), n("search-input", { key: "input", ref: "input" })], 2)], 1);
    },
        Q = [],
        K = { render: H, staticRenderFns: Q },
        W = K,
        U = n(0),
        q = U(P, W, !1, null, null, null),
        X = q.exports,
        J = { name: "vue-treeselect--single-value", components: { Placeholder: I, SearchInput: z }, mixins: [D], inject: ["instance"] },
        G = function G() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;return n("div", { staticClass: "vue-treeselect__value-wrapper" }, [e.instance.hasValue && !e.instance.searchQuery ? n("div", { staticClass: "vue-treeselect__single-value" }, [e._v("\n    " + e._s(e.instance.selectedNodes[0].label) + "\n  ")]) : e.instance.searchQuery ? e._e() : n("placeholder"), e._v(" "), n("search-input", { key: "input", ref: "input" })], 1);
    },
        Y = [],
        Z = { render: G, staticRenderFns: Y },
        ee = Z,
        te = n(0),
        ne = te(J, ee, !1, null, null, null),
        ie = ne.exports,
        se = { props: { node: { type: Object, required: !0 } }, computed: { checkedState: function checkedState() {
          return this.instance.nodeCheckedStateMap[this.node.id];
        }, shouldExpand: function shouldExpand() {
          return !!this.node.isBranch && (this.instance.searching ? this.node.expandsOnSearch : this.node.isExpanded);
        } }, watch: { "node.isExpanded": function nodeIsExpanded(e) {
          !0 !== e || this.node.isLoaded || this.instance.loadOptions(!1, this.node);
        } }, methods: { handleMouseDownOnOption: i(function () {
          this.node.isBranch && this.instance.disableBranchNodes ? this.instance.toggleExpanded(this.node) : this.instance.select(this.node);
        }), handleMouseDownOnOptionArrow: i(function () {
          this.instance.toggleExpanded(this.node);
        }) } },
        oe = { name: "vue-treeselect--option", inject: ["instance", "UNCHECKED", "INDETERMINATE", "CHECKED"], mixins: [se] },
        re = function re() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;return n("div", { staticClass: "vue-treeselect__list-item" }, [n("div", { class: ["vue-treeselect__option", { "vue-treeselect__option--disabled": e.node.disabled, "vue-treeselect__option--root": e.node.isRootNode, "vue-treeselect__option--child": !e.node.isRootNode, "vue-treeselect__option--selected": e.instance.isSelected(e.node), "vue-treeselect__option--matched": e.instance.searching && e.node.isMatched, "vue-treeselect__option--hide": e.instance.searching && !(e.node.isMatched || e.node.hasMatchedChild) }] }, [e.node.isLeaf ? n("div", { staticClass: "vue-treeselect__option-arrow-placeholder" }, [e._v(" ")]) : n("div", { staticClass: "vue-treeselect__option-arrow-wrapper", on: { mousedown: e.handleMouseDownOnOptionArrow } }, [n("transition", { attrs: { name: "vue-treeselect__option-arrow--prepare", appear: "" } }, [n("span", { class: ["vue-treeselect__option-arrow", { "vue-treeselect__option-arrow--rotated": e.shouldExpand }] })])], 1), e._v(" "), n("div", { staticClass: "vue-treeselect__label-wrapper", on: { mousedown: e.handleMouseDownOnOption } }, [e.instance.multiple && !e.instance.disableBranchNodes ? n("div", { staticClass: "vue-treeselect__checkbox-wrapper" }, [n("span", { class: ["vue-treeselect__checkbox", { "vue-treeselect__checkbox--checked": e.checkedState === e.CHECKED, "vue-treeselect__checkbox--indeterminate": e.checkedState === e.INDETERMINATE, "vue-treeselect__checkbox--unchecked": e.checkedState === e.UNCHECKED }] }, [n("span", { staticClass: "vue-treeselect__checkbox-mark" })])]) : e._e(), e._v(" "), n("label", { staticClass: "vue-treeselect__label" }, [e._v("\n        " + e._s(e.node.label) + "\n        "), e.node.isBranch ? n("span", { staticClass: "vue-treeselect__count" }, [!e.instance.searching && e.instance.showCount ? [e._v("(" + e._s(e.node.count[e.instance.showCountOf]) + ")")] : e.instance.searching && e.instance.showCountOnSearchComputed ? [e._v("(" + e._s(e.instance.searchingCount[e.node.id][e.instance.showCountOf]) + ")")] : e._e()], 2) : e._e()])])]), e._v(" "), e.shouldExpand ? n("div", { staticClass: "vue-treeselect__list" }, [e.node.isLoaded ? [e.node.children.length ? e._l(e.node.children, function (e) {
        return n("vue-treeselect--option", { key: e.id, attrs: { node: e } });
      }) : n("div", { staticClass: "vue-treeselect__no-children-tip" }, [e._m(0), e._v(" "), n("span", { staticClass: "vue-treeselect__no-children-tip-text" }, [e._v(e._s(e.instance.noChildrenText))])])] : e.node.isPending ? n("div", { staticClass: "vue-treeselect__loading-tip" }, [e._m(1), e._v(" "), n("span", { staticClass: "vue-treeselect__loading-tip-text" }, [e._v(e._s(e.instance.loadingText))])]) : e.node.loadingChildrenError ? n("div", { staticClass: "vue-treeselect__error-tip" }, [e._m(2), e._v(" "), n("span", { staticClass: "vue-treeselect__error-tip-text" }, [e._v("\n        " + e._s(e.node.loadingChildrenError) + "\n        "), n("a", { staticClass: "vue-treeselect__retry", attrs: { title: e.instance.retryTitle }, on: { click: function click(t) {
            e.instance.loadOptions(!1, e.node);
          } } }, [e._v("\n          " + e._s(e.instance.retryText) + "\n        ")])])]) : e._e()], 2) : e._e()]);
    },
        ae = [function () {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;return n("div", { staticClass: "vue-treeselect__icon-wrapper" }, [n("span", { staticClass: "vue-treeselect__icon-warning" })]);
    }, function () {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;return n("div", { staticClass: "vue-treeselect__icon-wrapper" }, [n("span", { staticClass: "vue-treeselect__icon-loader" })]);
    }, function () {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;return n("div", { staticClass: "vue-treeselect__icon-wrapper" }, [n("span", { staticClass: "vue-treeselect__icon-error" })]);
    }],
        le = { render: re, staticRenderFns: ae },
        ce = le,
        ue = n(0),
        de = ue(oe, ce, !1, null, null, null),
        he = de.exports,
        pe = { name: "vue-treeselect", components: { TreeselectOption: he }, mixins: [w], computed: { ValueComponent: function ValueComponent() {
          return this.multiple ? X : ie;
        } } },
        fe = function fe() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;return n("div", { ref: "wrapper", class: ["vue-treeselect", { "vue-treeselect--single": !e.multiple, "vue-treeselect--multi": e.multiple, "vue-treeselect--searchable": e.searchable, "vue-treeselect--disabled": e.disabled, "vue-treeselect--focused": e.isFocused, "vue-treeselect--has-value": e.hasValue, "vue-treeselect--open": e.isOpen, "vue-treeselect--open-above": "above" === e.prefferedOpenDirection, "vue-treeselect--open-below": "below" === e.prefferedOpenDirection, "vue-treeselect--branch-nodes-disabled": e.disableBranchNodes }], on: { mousedown: e.handleMouseDown } }, [n("div", { staticClass: "vue-treeselect__control" }, [n(e.ValueComponent, { ref: "value", tag: "component" }), e._v(" "), e.shouldShowClearIcon ? n("div", { staticClass: "vue-treeselect__clear", attrs: { title: e.multiple ? e.clearAllText : e.clearValueText }, on: { mousedown: e.handleMouseDownOnClear } }, [e._v("×")]) : e._e(), e._v(" "), n("div", { staticClass: "vue-treeselect__arrow-wrapper", on: { mousedown: e.handleMouseDownOnArrow } }, [n("span", { class: ["vue-treeselect__arrow", { "vue-treeselect__arrow--rotated": e.isOpen }] })])], 1), e._v(" "), e.isOpen ? n("div", { ref: "menu", staticClass: "vue-treeselect__menu", style: { maxHeight: e.optimizedHeight + "px" } }, [e.rootOptionsLoaded ? [e.searching && e.noSearchResults ? n("div", { staticClass: "vue-treeselect__no-results-tip" }, [e._m(0), e._v(" "), n("span", { staticClass: "vue-treeselect__no-results-tip-text" }, [e._v(e._s(e.noResultsText))])]) : 0 === e.normalizedOptions.length ? n("div", { staticClass: "vue-treeselect__no-options-tip" }, [e._m(1), e._v(" "), n("span", { staticClass: "vue-treeselect__no-options-tip-text" }, [e._v(e._s(e.noOptionsText))])]) : n("div", { staticClass: "vue-treeselect__list" }, e._l(e.normalizedOptions, function (e) {
        return n("treeselect-option", { key: e.id, attrs: { node: e } });
      }))] : [e.loadingRootOptions ? n("div", { staticClass: "vue-treeselect__loading-tip" }, [e._m(2), e._v(" "), n("span", { staticClass: "vue-treeselect__loading-tip-text" }, [e._v(e._s(e.loadingText))])]) : e.loadingRootOptionsError ? n("div", { staticClass: "vue-treeselect__error-tip" }, [e._m(3), e._v(" "), n("span", { staticClass: "vue-treeselect__error-tip-text" }, [e._v("\n          Failed to load options: " + e._s(e.loadingRootOptionsError) + ".\n          "), n("a", { staticClass: "vue-treeselect__retry", attrs: { title: e.retryTitle }, on: { click: function click(t) {
            e.loadOptions(!0);
          } } }, [e._v("\n            " + e._s(e.retryText) + "\n          ")])])]) : e._e()]], 2) : e._e()]);
    },
        ve = [function () {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;return n("div", { staticClass: "vue-treeselect__icon-wrapper" }, [n("span", { staticClass: "vue-treeselect__icon-warning" })]);
    }, function () {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;return n("div", { staticClass: "vue-treeselect__icon-wrapper" }, [n("span", { staticClass: "vue-treeselect__icon-warning" })]);
    }, function () {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;return n("div", { staticClass: "vue-treeselect__icon-wrapper" }, [n("span", { staticClass: "vue-treeselect__icon-loader" })]);
    }, function () {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;return n("div", { staticClass: "vue-treeselect__icon-wrapper" }, [n("span", { staticClass: "vue-treeselect__icon-error" })]);
    }],
        _e = { render: fe, staticRenderFns: ve },
        me = _e,
        Ce = n(0),
        ye = y,
        be = Ce(pe, me, !1, ye, null, null),
        ge = be.exports;n.d(t, "Treeselect", function () {
      return ge;
    }), n.d(t, "treeselectMixin", function () {
      return w;
    }), n.d(t, "optionMixin", function () {
      return se;
    }), n.d(t, "valueMixin", function () {
      return D;
    });t.default = ge;
  }, function (e, t) {}, function (e, t, n) {
    "use strict";
    function i(e, t) {
      var n = t.length,
          i = e.length;if (i > n) return !1;if (i === n) return e === t;e: for (var s = 0, o = 0; s < i; s++) {
        for (var r = e.charCodeAt(s); o < n;) {
          if (t.charCodeAt(o++) === r) continue e;
        }return !1;
      }return !0;
    }e.exports = i;
  }, function (e, t, n) {
    function i(e, t, n) {
      function i(t) {
        var n = C,
            i = y;return C = y = void 0, x = t, g = e.apply(i, n);
      }function u(e) {
        return x = e, E = setTimeout(p, t), S ? i(e) : g;
      }function d(e) {
        var n = e - O,
            i = e - x,
            s = t - n;return N ? c(s, b - i) : s;
      }function h(e) {
        var n = e - O,
            i = e - x;return void 0 === O || n >= t || n < 0 || N && i >= b;
      }function p() {
        var e = o();if (h(e)) return f(e);E = setTimeout(p, d(e));
      }function f(e) {
        return E = void 0, w && C ? i(e) : (C = y = void 0, g);
      }function v() {
        void 0 !== E && clearTimeout(E), x = 0, C = O = y = E = void 0;
      }function _() {
        return void 0 === E ? g : f(o());
      }function m() {
        var e = o(),
            n = h(e);if (C = arguments, y = this, O = e, n) {
          if (void 0 === E) return u(O);if (N) return E = setTimeout(p, t), i(O);
        }return void 0 === E && (E = setTimeout(p, t)), g;
      }var C,
          y,
          b,
          g,
          E,
          O,
          x = 0,
          S = !1,
          N = !1,
          w = !0;if ("function" != typeof e) throw new TypeError(a);return t = r(t) || 0, s(n) && (S = !!n.leading, N = "maxWait" in n, b = N ? l(r(n.maxWait) || 0, t) : b, w = "trailing" in n ? !!n.trailing : w), m.cancel = v, m.flush = _, m;
    }var s = n(1),
        o = n(8),
        r = n(11),
        a = "Expected a function",
        l = Math.max,
        c = Math.min;e.exports = i;
  }, function (e, t, n) {
    var i = n(2),
        s = function s() {
      return i.Date.now();
    };e.exports = s;
  }, function (e, t, n) {
    (function (t) {
      var n = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && t.Object === Object && t;e.exports = n;
    }).call(t, n(10));
  }, function (e, t) {
    var n;n = function () {
      return this;
    }();try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
    }e.exports = n;
  }, function (e, t, n) {
    function i(e) {
      if ("number" == typeof e) return e;if (o(e)) return r;if (s(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;e = s(t) ? t + "" : t;
      }if ("string" != typeof e) return 0 === e ? e : +e;e = e.replace(a, "");var n = c.test(e);return n || u.test(e) ? d(e.slice(2), n ? 2 : 8) : l.test(e) ? r : +e;
    }var s = n(1),
        o = n(12),
        r = NaN,
        a = /^\s+|\s+$/g,
        l = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        d = parseInt;e.exports = i;
  }, function (e, t, n) {
    function i(e) {
      return "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || o(e) && s(e) == r;
    }var s = n(13),
        o = n(16),
        r = "[object Symbol]";e.exports = i;
  }, function (e, t, n) {
    function i(e) {
      return null == e ? void 0 === e ? l : a : c && c in Object(e) ? o(e) : r(e);
    }var s = n(3),
        o = n(14),
        r = n(15),
        a = "[object Null]",
        l = "[object Undefined]",
        c = s ? s.toStringTag : void 0;e.exports = i;
  }, function (e, t, n) {
    function i(e) {
      var t = r.call(e, l),
          n = e[l];try {
        e[l] = void 0;var i = !0;
      } catch (e) {}var s = a.call(e);return i && (t ? e[l] = n : delete e[l]), s;
    }var s = n(3),
        o = Object.prototype,
        r = o.hasOwnProperty,
        a = o.toString,
        l = s ? s.toStringTag : void 0;e.exports = i;
  }, function (e, t) {
    function n(e) {
      return s.call(e);
    }var i = Object.prototype,
        s = i.toString;e.exports = n;
  }, function (e, t) {
    function n(e) {
      return null != e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
    }e.exports = n;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Materials.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__riophae_vue_treeselect__ = __webpack_require__("./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__riophae_vue_treeselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__riophae_vue_treeselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Rows_MaterialRow__ = __webpack_require__("./resources/assets/js/components/Rows/MaterialRow.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Rows_MaterialRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Rows_MaterialRow__);
//
//
//
//
//
//
//
//
//
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
            rows: false
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.axios.get(this.$store.state.apiBase + '/material/categories').then(function (response) {
            _this.$store.commit('UPDATE_CATEGORY_LIST', response.data.data);
        }).catch(function (error) {
            console.log(error);
        });
        this.axios.get(this.$store.state.apiBase + '/material').then(function (response) {
            _this.rows = response.data.data;
        }).catch(function (error) {
            console.log(error);
        });
    },

    components: {
        MaterialRow: __WEBPACK_IMPORTED_MODULE_1__Rows_MaterialRow___default.a
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Rows/MaterialRow.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        row: {
            type: Object,
            default: {}
        },
        depth: {
            type: Number,
            default: 0
        }
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0044bdf2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Rows/MaterialRow.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"MaterialRow.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ef104c5\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Materials.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Materials.vue","sourceRoot":""}]);

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0044bdf2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Rows/MaterialRow.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.depth == 0
    ? _c("tr", [
        _c("th", { attrs: { scope: "row", colspan: "4" } }, [
          _vm._v(_vm._s(_vm.row.name))
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0044bdf2", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5ef104c5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Materials.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "material-table" }, [
    _c("table", { staticClass: "table table-bordered table-hover table-sm" }, [
      _vm._m(0, false, false),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.rows, function(row, index) {
          return _c("material-row", { key: index, attrs: { row: row } })
        })
      )
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
        _c("th", { staticClass: "col-1", attrs: { scope: "col" } }, [
          _vm._v("#")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "col-8", attrs: { scope: "col" } }, [
          _vm._v("Tên")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "col-1", attrs: { scope: "col" } }, [
          _vm._v("Đơn vị")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "col-2", attrs: { scope: "col" } }, [
          _vm._v("Hãng")
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5ef104c5", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0044bdf2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Rows/MaterialRow.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0044bdf2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Rows/MaterialRow.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("8169e13c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0044bdf2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./MaterialRow.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0044bdf2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./MaterialRow.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ef104c5\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Materials.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ef104c5\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Materials.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3107338f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ef104c5\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Materials.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ef104c5\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Materials.vue");
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

/***/ "./resources/assets/js/components/Materials.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ef104c5\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Materials.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Materials.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5ef104c5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Materials.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\Materials.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ef104c5", Component.options)
  } else {
    hotAPI.reload("data-v-5ef104c5", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Rows/MaterialRow.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0044bdf2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Rows/MaterialRow.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Rows/MaterialRow.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0044bdf2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Rows/MaterialRow.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\Rows\\MaterialRow.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0044bdf2", Component.options)
  } else {
    hotAPI.reload("data-v-0044bdf2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJpb3BoYWUvdnVlLXRyZWVzZWxlY3QvZGlzdC92dWUtdHJlZXNlbGVjdC5taW4uanMiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NYXRlcmlhbHMudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jvd3MvTWF0ZXJpYWxSb3cudnVlPzYxYTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGVyaWFscy52dWU/NDg1NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZT8zOTAxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NYXRlcmlhbHMudnVlPzQyNjAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jvd3MvTWF0ZXJpYWxSb3cudnVlPzMxMjAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGVyaWFscy52dWU/NTU1ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGVyaWFscy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jvd3MvTWF0ZXJpYWxSb3cudnVlIl0sIm5hbWVzIjpbImUiLCJ0IiwiZXhwb3J0cyIsIm1vZHVsZSIsIlZ1ZVRyZWVzZWxlY3QiLCJpIiwibiIsInMiLCJsIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJnZXQiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInIiLCJhIiwib3B0aW9ucyIsInJlbmRlciIsInN0YXRpY1JlbmRlckZucyIsIl9jb21waWxlZCIsImZ1bmN0aW9uYWwiLCJfc2NvcGVJZCIsInUiLCIkdm5vZGUiLCJzc3JDb250ZXh0IiwicGFyZW50IiwiX19WVUVfU1NSX0NPTlRFWFRfXyIsIl9yZWdpc3RlcmVkQ29tcG9uZW50cyIsImFkZCIsIl9zc3JSZWdpc3RlciIsImgiLCJiZWZvcmVDcmVhdGUiLCJfaW5qZWN0U3R5bGVzIiwiY29uY2F0IiwiZXNNb2R1bGUiLCJzZWxmIiwiRnVuY3Rpb24iLCJTeW1ib2wiLCJ0eXBlIiwiYnV0dG9uIiwieCIsImdldFByb3RvdHlwZU9mIiwia2V5cyIsImxlbmd0aCIsIk4iLCJTIiwiQXJyYXkiLCJpc0FycmF5IiwiZmluZEluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImYiLCJ2YWx1ZSIsIndyaXRhYmxlIiwidiIsImxldmVsIiwiaW5kZXgiLCJfIiwiQyIsIm1lc3NhZ2UiLCJTdHJpbmciLCJ5IiwiYiIsImciLCJFIiwiTyIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJ3IiwicHJvdmlkZSIsImluc3RhbmNlIiwiVU5DSEVDS0VEIiwiSU5ERVRFUk1JTkFURSIsIkNIRUNLRUQiLCJVTk1BVENIRUQiLCJERVNDRU5EQU5UX01BVENIRUQiLCJNQVRDSEVEIiwicHJvcHMiLCJhdXRvZm9jdXMiLCJCb29sZWFuIiwiYmFja3NwYWNlUmVtb3ZlcyIsImJyYW5jaE5vZGVzRmlyc3QiLCJjbGVhcmFibGUiLCJjbGVhckFsbFRleHQiLCJjbGVhck9uU2VsZWN0IiwiY2xlYXJWYWx1ZVRleHQiLCJjbG9zZU9uU2VsZWN0IiwiZGVsZXRlUmVtb3ZlcyIsImRpc2FibGVCcmFuY2hOb2RlcyIsImRpc2FibGVkIiwiZGVmYXVsdEV4cGFuZExldmVsIiwiTnVtYmVyIiwiZXNjYXBlQ2xlYXJzVmFsdWUiLCJmbGF0IiwiaWQiLCJsaW1pdCIsImxpbWl0VGV4dCIsImxvYWRDaGlsZHJlbkVycm9yVGV4dCIsImxvYWRDaGlsZHJlbk9wdGlvbnMiLCJsb2FkaW5nVGV4dCIsImxvYWRSb290T3B0aW9ucyIsIm1heEhlaWdodCIsIm11bHRpcGxlIiwibm9DaGlsZHJlblRleHQiLCJub1Jlc3VsdHNUZXh0Iiwibm9PcHRpb25zVGV4dCIsIm9wZW5EaXJlY3Rpb24iLCJvcGVuT25DbGljayIsIm9wZW5PbkZvY3VzIiwicGxhY2Vob2xkZXIiLCJyZXRhaW5TY3JvbGxQb3NpdGlvbiIsInJldHJ5VGV4dCIsInJldHJ5VGl0bGUiLCJzZWFyY2hhYmxlIiwic2hvd0NvdW50Iiwic2hvd0NvdW50T2YiLCJ2YWxpZGF0b3IiLCJzaG93Q291bnRPblNlYXJjaCIsInNvcnRWYWx1ZUJ5Iiwic3ViSXRlbXNMaW1pdCIsInRhYkluZGV4IiwiZGF0YSIsImludGVybmFsVmFsdWUiLCJpc0ZvY3VzZWQiLCJpc09wZW4iLCJub2RlQ2hlY2tlZFN0YXRlTWFwIiwiY3JlYXRlIiwibm9kZU1hcCIsIm5vcm1hbGl6ZWRPcHRpb25zIiwibm9TZWFyY2hSZXN1bHRzIiwib3B0aW1pemVkSGVpZ2h0IiwicHJlZmZlcmVkT3BlbkRpcmVjdGlvbiIsInJvb3RPcHRpb25zTG9hZGVkIiwibG9hZGluZ1Jvb3RPcHRpb25zIiwibG9hZGluZ1Jvb3RPcHRpb25zRXJyb3IiLCJzZWFyY2hpbmdDb3VudCIsInNlYXJjaGluZyIsInNlYXJjaFF1ZXJ5Iiwic2VsZWN0ZWROb2RlTWFwIiwibGFzdFNjcm9sbFBvc2l0aW9uIiwiY29tcHV0ZWQiLCJzZWxlY3RlZE5vZGVzTnVtYmVyIiwiaGFzVmFsdWUiLCJzZWxlY3RlZE5vZGVzIiwibWFwIiwiZ2V0Tm9kZSIsInNpbmdsZSIsInZpc2libGVWYWx1ZSIsInNsaWNlIiwiaGFzRXhjZWVkZWRMaW1pdCIsInNob3VsZFNob3dDbGVhckljb24iLCJzaG93Q291bnRPblNlYXJjaENvbXB1dGVkIiwid2F0Y2giLCJjbG9zZU1lbnUiLCJidWlsZE5vZGVDaGVja2VkU3RhdGVNYXAiLCJoYW5kbGVTZWFyY2giLCIkZW1pdCIsInNvcnRWYWx1ZSIsImdldFZhbHVlIiwiYnVpbGRTZWxlY3RlZE5vZGVNYXAiLCJtZXRob2RzIiwidmVyaWZ5UHJvcHMiLCJyZXNldEZsYWdzIiwiX2JsdXJPblNlbGVjdCIsIl93YXNDbGlja2VkT25WYWx1ZUl0ZW0iLCJpbml0aWFsaXplIiwiaW5pdGlhbGl6ZVJvb3RPcHRpb25zIiwiaW5pdGlhbGl6ZVZhbHVlIiwibGFiZWwiLCJhbmNlc3RvcnMiLCJwYXJlbnROb2RlIiwiaXNVbmtub3duTm9kZSIsImlzTGVhZiIsImlzQnJhbmNoIiwiaXNTZWxlY3RlZCIsImNoZWNrSWZCcmFuY2hOb2RlIiwidHJhdmVyc2VEZXNjZW5kYW50cyIsImNoaWxkcmVuIiwiZm9yRWFjaCIsInRyYXZlcnNlQW5jZXN0b3JzIiwidHJhdmVyc2VBbGxOb2RlcyIsInRvZ2dsZUNsaWNrT3V0c2lkZUV2ZW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZvY3VzSW5wdXQiLCIkcmVmcyIsImJsdXJJbnB1dCIsImhhbmRsZU1vdXNlRG93biIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiJGVsIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJvcGVuTWVudSIsImhhbmRsZU1vdXNlRG93bk9uQ2xlYXIiLCJjbGVhciIsImhhbmRsZU1vdXNlRG93bk9uQXJyb3ciLCJ0b2dnbGVNZW51Iiwid3JhcHBlciIsImV4cGFuZHNPblNlYXJjaCIsImhhc01hdGNoZWRDaGlsZCIsImlzTWF0Y2hlZCIsInRvTG93ZXJDYXNlIiwiQUxMX0RFU0NFTkRBTlRTIiwiTEVBRl9ERVNDRU5EQU5UUyIsIkFMTF9DSElMRFJFTiIsIkxFQUZfQ0hJTERSRU4iLCJtZW51Iiwic2Nyb2xsVG9wIiwiJG5leHRUaWNrIiwiYWRqdXN0UG9zaXRpb24iLCJyZXN0b3JlU2Nyb2xsUG9zaXRpb24iLCJsb2FkT3B0aW9ucyIsInRvZ2dsZUV4cGFuZGVkIiwiaXNFeHBhbmRlZCIsIm5vcm1hbGl6ZSIsImNoZWNrRHVwbGljYXRpb24iLCJ2ZXJpZnlOb2RlU2hhcGUiLCJpc0Rpc2FibGVkIiwiaXNSb290Tm9kZSIsInJhdyIsImlzTG9hZGVkIiwiaXNQZW5kaW5nIiwibG9hZGluZ0NoaWxkcmVuRXJyb3IiLCJjb3VudCIsImZpbHRlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZWxlY3QiLCJfc2VsZWN0Tm9kZSIsIl9kZXNlbGVjdE5vZGUiLCJhZGRWYWx1ZSIsImV2ZXJ5IiwicmVtb3ZlVmFsdWUiLCJwdXNoIiwibWF5YmVSZW1vdmVMYXN0VmFsdWUiLCJzb3J0Iiwid2luZG93IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiaW5uZXJIZWlnaHQiLCJib3R0b20iLCJNYXRoIiwibWluIiwiY3JlYXRlZCIsIm1vdW50ZWQiLCJkZXN0cm95ZWQiLCJEIiwiaW5wdXQiLCJmb2N1cyIsImJsdXIiLCJoYW5kbGVNb3VzZURvd25PblZhbHVlIiwiTSIsIm5hbWUiLCJpbmplY3QiLCJBIiwiJGNyZWF0ZUVsZW1lbnQiLCJfc2VsZiIsIl9jIiwic3RhdGljQ2xhc3MiLCJfdCIsIl92IiwiX3MiLCJMIiwiVCIsIlYiLCJSIiwiayIsIkkiLCIkIiwiQkFDS1NQQUNFIiwiRVNDQVBFIiwiREVMRVRFIiwiQiIsImlucHV0V2lkdGgiLCJuZWVkc0F1dG9TaXplIiwidXBkYXRlZCIsInVwZGF0ZUlucHV0V2lkdGgiLCJvbkZvY3VzIiwib25CbHVyIiwib25JbnB1dCIsIm9uS2V5RG93biIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm1ldGFLZXkiLCJ3aGljaCIsImtleUNvZGUiLCJvbk1vdXNlRG93biIsInJlbmRlcklucHV0V3JhcHBlciIsImNsYXNzIiwicmVuZGVySW5wdXQiLCJyZW5kZXJTaXplciIsIm9uIiwia2V5ZG93biIsInJlZiIsImF0dHJzIiwiYXV0b2NvbXBsZXRlIiwiZG9tUHJvcHMiLCJzdHlsZSIsIndpZHRoIiwibW91c2Vkb3duIiwidGV4dENvbnRlbnQiLCJtYXgiLCJzaXplciIsInNjcm9sbFdpZHRoIiwiaiIsIkYiLCJ6IiwiUCIsImNvbXBvbmVudHMiLCJQbGFjZWhvbGRlciIsIlNlYXJjaElucHV0IiwibWl4aW5zIiwiSCIsInRhZyIsImFwcGVhciIsIl9sIiwia2V5IiwiX2UiLCJRIiwiSyIsIlciLCJVIiwicSIsIlgiLCJKIiwiRyIsIlkiLCJaIiwiZWUiLCJ0ZSIsIm5lIiwiaWUiLCJzZSIsIm5vZGUiLCJyZXF1aXJlZCIsImNoZWNrZWRTdGF0ZSIsInNob3VsZEV4cGFuZCIsImhhbmRsZU1vdXNlRG93bk9uT3B0aW9uIiwiaGFuZGxlTW91c2VEb3duT25PcHRpb25BcnJvdyIsIm9lIiwicmUiLCJfbSIsInRpdGxlIiwiY2xpY2siLCJhZSIsImxlIiwiY2UiLCJ1ZSIsImRlIiwiaGUiLCJwZSIsIlRyZWVzZWxlY3RPcHRpb24iLCJWYWx1ZUNvbXBvbmVudCIsImZlIiwidmUiLCJtZSIsIkNlIiwieWUiLCJiZSIsImdlIiwiY2hhckNvZGVBdCIsImFwcGx5Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImFyZ3VtZW50cyIsIlR5cGVFcnJvciIsImxlYWRpbmciLCJtYXhXYWl0IiwidHJhaWxpbmciLCJjYW5jZWwiLCJmbHVzaCIsIkRhdGUiLCJub3ciLCJldmFsIiwidmFsdWVPZiIsInJlcGxhY2UiLCJ0ZXN0IiwiTmFOIiwicGFyc2VJbnQiLCJ0b1N0cmluZ1RhZyIsInRvU3RyaW5nIiwidXNlU291cmNlTWFwIiwibGlzdCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImpvaW4iLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImxpc3RUb1N0eWxlcyIsInBhcmVudElkIiwic3R5bGVzIiwibmV3U3R5bGVzIiwiY3NzIiwibWVkaWEiLCJwYXJ0IiwicGFydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7QUFLQSxDQUFFLFVBQVNBLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsOENBQWlCQyxPQUFqQixNQUEwQiw0Q0FBaUJDLE1BQWpCLEVBQTFCLEdBQWtEQSxPQUFPRCxPQUFQLEdBQWVELEdBQWpFLEdBQXFFLFFBQXNDLGlDQUFPLEVBQVAsb0NBQVVBLENBQVY7QUFBQTtBQUFBO0FBQUEsb0dBQXRDLEdBQW1ELG9CQUFpQkMsT0FBakIseUNBQWlCQSxPQUFqQixLQUF5QkEsUUFBUUUsYUFBUixHQUFzQkgsR0FBL0MsR0FBbURELEVBQUVJLGFBQUYsR0FBZ0JILEdBQTNMO0FBQStMLENBQTlNLENBQWdOLElBQWhOLEVBQXNOLFlBQVU7QUFBQyxTQUFRLFVBQVNELENBQVQsRUFBVztBQUFDLGFBQVNDLENBQVQsQ0FBV0ksQ0FBWCxFQUFhO0FBQUMsVUFBR0MsRUFBRUQsQ0FBRixDQUFILEVBQVEsT0FBT0MsRUFBRUQsQ0FBRixFQUFLSCxPQUFaLENBQW9CLElBQUlLLElBQUVELEVBQUVELENB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O0FBQ0E7QUFDQTtBQUNBLHFYQUFzTTtBQUN0TTtBQUNBO0FBQ0E7QUFDQSxnbEJBQTJhO0FBQzNhO0FBQ0Esb1RBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usd0RBQXdELElBQUk7O0FBRTNJO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogdnVlLXRyZWVzZWxlY3QgdjAuMC42IHwgKGMpIDIwMTcgUmlvcGhhZSBMZWVcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yaW9waGFlL3Z1ZS10cmVlc2VsZWN0XG4gKi9cbiEoZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlZ1ZVRyZWVzZWxlY3Q9dCgpOmUuVnVlVHJlZXNlbGVjdD10KCl9KSh0aGlzLChmdW5jdGlvbigpe3JldHVybiAoZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChpKXtpZihuW2ldKXJldHVybiBuW2ldLmV4cG9ydHM7dmFyIHM9bltpXT17aTppLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbaV0uY2FsbChzLmV4cG9ydHMscyxzLmV4cG9ydHMsdCkscy5sPSEwLHMuZXhwb3J0c312YXIgbj17fTtyZXR1cm4gdC5tPWUsdC5jPW4sdC5kPWZ1bmN0aW9uKGUsbixpKXt0Lm8oZSxuKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbix7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0Oml9KX0sdC5uPWZ1bmN0aW9uKGUpe3ZhciBuPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQobixcImFcIixuKSxufSx0Lm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHQucD1cIi9cIix0KHQucz00KX0pKFsoZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0LG4saSxzLG8pe3ZhciByLGE9ZT1lfHx7fSxsPXR5cGVvZiBlLmRlZmF1bHQ7XCJvYmplY3RcIiE9PWwmJlwiZnVuY3Rpb25cIiE9PWx8fChyPWUsYT1lLmRlZmF1bHQpO3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YS5vcHRpb25zOmE7dCYmKGMucmVuZGVyPXQucmVuZGVyLGMuc3RhdGljUmVuZGVyRm5zPXQuc3RhdGljUmVuZGVyRm5zLGMuX2NvbXBpbGVkPSEwKSxuJiYoYy5mdW5jdGlvbmFsPSEwKSxzJiYoYy5fc2NvcGVJZD1zKTt2YXIgdTtpZihvPyh1PWZ1bmN0aW9uKGUpe2U9ZXx8dGhpcy4kdm5vZGUmJnRoaXMuJHZub2RlLnNzckNvbnRleHR8fHRoaXMucGFyZW50JiZ0aGlzLnBhcmVudC4kdm5vZGUmJnRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0LGV8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9ffHwoZT1fX1ZVRV9TU1JfQ09OVEVYVF9fKSxpJiZpLmNhbGwodGhpcyxlKSxlJiZlLl9yZWdpc3RlcmVkQ29tcG9uZW50cyYmZS5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG8pfSxjLl9zc3JSZWdpc3Rlcj11KTppJiYodT1pKSx1KXt2YXIgZD1jLmZ1bmN0aW9uYWwsaD1kP2MucmVuZGVyOmMuYmVmb3JlQ3JlYXRlO2Q/KGMuX2luamVjdFN0eWxlcz11LGMucmVuZGVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHUuY2FsbCh0KSxoKGUsdCl9KTpjLmJlZm9yZUNyZWF0ZT1oP1tdLmNvbmNhdChoLHUpOlt1XX1yZXR1cm57ZXNNb2R1bGU6cixleHBvcnRzOmEsb3B0aW9uczpjfX19KSwoZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBuKGUpe3ZhciB0PXR5cGVvZiBlO3JldHVybiBudWxsIT1lJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX1lLmV4cG9ydHM9bn0pLChmdW5jdGlvbihlLHQsbil7dmFyIGk9big5KSxzPVwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixvPWl8fHN8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtlLmV4cG9ydHM9b30pLChmdW5jdGlvbihlLHQsbil7dmFyIGk9bigyKSxzPWkuU3ltYm9sO2UuZXhwb3J0cz1zfSksKGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKGUpe3JldHVybiBmdW5jdGlvbih0KXtcIm1vdXNlZG93blwiPT09dC50eXBlJiYwPT09dC5idXR0b24mJmUuY2FsbCh0aGlzLHQpfX1mdW5jdGlvbiBzKCl7fWZ1bmN0aW9uIG8oZSl7cmV0dXJuIG51bGwhPWUmJlwib2JqZWN0XCI9PT0odm9pZCAwPT09ZT9cInVuZGVmaW5lZFwiOngoZSkpJiZPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSk9PT1PYmplY3QucHJvdG90eXBlfWZ1bmN0aW9uIHIoZSx0LG4pe28obik/KGVbdF18fChlW3RdPXt9KSxsKGVbdF0sbikpOmVbdF09bn1mdW5jdGlvbiBhKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfWZ1bmN0aW9uIGwoZSx0KXtpZihudWxsPT10KTtlbHNlIGlmKG8odCkpZm9yKHZhciBuPU9iamVjdC5rZXlzKHQpLGk9MCxzPW4ubGVuZ3RoO2k8cztpKyspcihlLG5baV0sdFtuW2ldXSk7ZWxzZSBOKCk7cmV0dXJuIGV9ZnVuY3Rpb24gYyhlKXtyZXR1cm4gUygoZnVuY3Rpb24oKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKX0pLChmdW5jdGlvbigpe3JldHVyblwidW5leHBlY3RlZCB0eXBlXCJ9KSksZVtlLmxlbmd0aC0xXX1mdW5jdGlvbiB1KGUsdCxuKXtmb3IodmFyIGk9MCxzPWUubGVuZ3RoO2k8cztpKyspaWYodC5jYWxsKG4sZVtpXSxpLGUpKXJldHVybiBpO3JldHVybi0xfWZ1bmN0aW9uIGQoZSx0LG4pe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXg/ZS5maW5kSW5kZXgodCxuKTp1KGUsdCxuKX1mdW5jdGlvbiBoKGUsdCl7dmFyIG49ZS5pbmRleE9mKHQpOy0xIT09biYmZS5zcGxpY2UobiwxKX1mdW5jdGlvbiBwKGUsdCl7aWYoZS5sZW5ndGghPT10Lmxlbmd0aClyZXR1cm4hMTtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKylpZihlW25dIT09dFtuXSlyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiBmKGUsdCxuKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPW4sZX1mdW5jdGlvbiB2KGUsdCl7Zm9yKHZhciBuPTA7Oyl7aWYoZS5sZXZlbDxuKXJldHVybi0xO2lmKHQubGV2ZWw8bilyZXR1cm4gMTtpZihlLmluZGV4W25dIT09dC5pbmRleFtuXSlyZXR1cm4gZS5pbmRleFtuXS10LmluZGV4W25dO24rK319ZnVuY3Rpb24gXyhlLHQpe3JldHVybiBlLmxldmVsIT09dC5sZXZlbD9lLmxldmVsLXQubGV2ZWw6dihlLHQpfWZ1bmN0aW9uIG0oZSl7cmV0dXJuXCJhbmQgXCIrZStcIiBtb3JlXCJ9ZnVuY3Rpb24gQyhlKXtyZXR1cm5cIkZhaWxlZCB0byBsb2FkIGNoaWxkcmVuIG9wdGlvbnM6IFwiKyhlLm1lc3NhZ2V8fFN0cmluZyhlKSkrXCIuXCJ9ZnVuY3Rpb24geShlKXtuKDUpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBiPW4oNiksZz1uLm4oYiksRT1uKDcpLE89bi5uKEUpLHg9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sUz1zLE49cyx3PXtwcm92aWRlOmZ1bmN0aW9uKCl7cmV0dXJue2luc3RhbmNlOnRoaXMsVU5DSEVDS0VEOjAsSU5ERVRFUk1JTkFURToxLENIRUNLRUQ6MixVTk1BVENIRUQ6MCxERVNDRU5EQU5UX01BVENIRUQ6MSxNQVRDSEVEOjJ9fSxwcm9wczp7YXV0b2ZvY3VzOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sYmFja3NwYWNlUmVtb3Zlczp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LGJyYW5jaE5vZGVzRmlyc3Q6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxjbGVhcmFibGU6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxjbGVhckFsbFRleHQ6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJDbGVhciBhbGxcIn0sY2xlYXJPblNlbGVjdDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGNsZWFyVmFsdWVUZXh0Ont0eXBlOlN0cmluZyxkZWZhdWx0OlwiQ2xlYXIgdmFsdWVcIn0sY2xvc2VPblNlbGVjdDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LGRlbGV0ZVJlbW92ZXM6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxkaXNhYmxlQnJhbmNoTm9kZXM6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxkaXNhYmxlZDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGRlZmF1bHRFeHBhbmRMZXZlbDp7dHlwZTpOdW1iZXIsZGVmYXVsdDowfSxlc2NhcGVDbGVhcnNWYWx1ZTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LGZsYXQ6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxpZDp7ZGVmYXVsdDpudWxsfSxsaW1pdDp7dHlwZTpOdW1iZXIsZGVmYXVsdDoxLzB9LGxpbWl0VGV4dDp7dHlwZTpGdW5jdGlvbixkZWZhdWx0Om19LGxvYWRDaGlsZHJlbkVycm9yVGV4dDp7dHlwZTpGdW5jdGlvbixkZWZhdWx0OkN9LGxvYWRDaGlsZHJlbk9wdGlvbnM6e3R5cGU6RnVuY3Rpb259LGxvYWRpbmdUZXh0Ont0eXBlOlN0cmluZyxkZWZhdWx0OlwiTG9hZGluZy4uLlwifSxsb2FkUm9vdE9wdGlvbnM6e3R5cGU6RnVuY3Rpb259LG1heEhlaWdodDp7dHlwZTpOdW1iZXIsZGVmYXVsdDozMDB9LG11bHRpcGxlOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sbm9DaGlsZHJlblRleHQ6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJObyBjaGlsZHJlbiBvcHRpb25zLi4uXCJ9LG5vUmVzdWx0c1RleHQ6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJObyByZXN1bHRzIGZvdW5kLi4uXCJ9LG5vT3B0aW9uc1RleHQ6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJObyBvcHRpb25zIGF2YWlsYWJsZS5cIn0sb3BlbkRpcmVjdGlvbjp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcImF1dG9cIn0sb3Blbk9uQ2xpY2s6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxvcGVuT25Gb2N1czp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LG9wdGlvbnM6e3R5cGU6QXJyYXl9LHBsYWNlaG9sZGVyOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiU2VsZWN0Li4uXCJ9LHJldGFpblNjcm9sbFBvc2l0aW9uOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0scmV0cnlUZXh0Ont0eXBlOlN0cmluZyxkZWZhdWx0OlwiUmV0cnk/XCJ9LHJldHJ5VGl0bGU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJDbGljayB0byByZXRyeVwifSxzZWFyY2hhYmxlOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sc2hvd0NvdW50Ont0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sc2hvd0NvdW50T2Y6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJBTExfQ0hJTERSRU5cIix2YWxpZGF0b3I6ZnVuY3Rpb24oZSl7cmV0dXJuLTEhPT1bXCJBTExfQ0hJTERSRU5cIixcIkFMTF9ERVNDRU5EQU5UU1wiLFwiTEVBRl9DSElMRFJFTlwiLFwiTEVBRl9ERVNDRU5EQU5UU1wiXS5pbmRleE9mKGUpfX0sc2hvd0NvdW50T25TZWFyY2g6bnVsbCxzb3J0VmFsdWVCeTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIk9SREVSX1NFTEVDVEVEXCJ9LHN1Ykl0ZW1zTGltaXQ6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MS8wfSx0YWJJbmRleDp7dHlwZTpOdW1iZXIsZGVmYXVsdDowfSx2YWx1ZTpudWxsfSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue2ludGVybmFsVmFsdWU6W10saXNGb2N1c2VkOiExLGlzT3BlbjohMSxub2RlQ2hlY2tlZFN0YXRlTWFwOk9iamVjdC5jcmVhdGUobnVsbCksbm9kZU1hcDpPYmplY3QuY3JlYXRlKG51bGwpLG5vcm1hbGl6ZWRPcHRpb25zOm51bGwsbm9TZWFyY2hSZXN1bHRzOiEwLG9wdGltaXplZEhlaWdodDowLHByZWZmZXJlZE9wZW5EaXJlY3Rpb246XCJiZWxvd1wiLHJvb3RPcHRpb25zTG9hZGVkOiExLGxvYWRpbmdSb290T3B0aW9uczohMSxsb2FkaW5nUm9vdE9wdGlvbnNFcnJvcjpcIlwiLHNlYXJjaGluZ0NvdW50Ok9iamVjdC5jcmVhdGUobnVsbCksc2VhcmNoaW5nOiExLHNlYXJjaFF1ZXJ5OlwiXCIsc2VsZWN0ZWROb2RlTWFwOk9iamVjdC5jcmVhdGUobnVsbCksbGFzdFNjcm9sbFBvc2l0aW9uOjB9fSxjb21wdXRlZDp7c2VsZWN0ZWROb2Rlc051bWJlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmludGVybmFsVmFsdWUubGVuZ3RofSxoYXNWYWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNlbGVjdGVkTm9kZXNOdW1iZXI+MH0sc2VsZWN0ZWROb2RlczpmdW5jdGlvbigpe3JldHVybiB0aGlzLmludGVybmFsVmFsdWUubWFwKHRoaXMuZ2V0Tm9kZSl9LHNpbmdsZTpmdW5jdGlvbigpe3JldHVybiF0aGlzLm11bHRpcGxlfSx2aXNpYmxlVmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZWxlY3RlZE5vZGVzLnNsaWNlKDAsdGhpcy5saW1pdCl9LGhhc0V4Y2VlZGVkTGltaXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZWxlY3RlZE5vZGVzTnVtYmVyPnRoaXMubGltaXR9LHNob3VsZFNob3dDbGVhckljb246ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGVhcmFibGUmJiF0aGlzLmRpc2FibGVkJiZ0aGlzLmhhc1ZhbHVlfSxzaG93Q291bnRPblNlYXJjaENvbXB1dGVkOmZ1bmN0aW9uKCl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiB0aGlzLnNob3dDb3VudE9uU2VhcmNoP3RoaXMuc2hvd0NvdW50T25TZWFyY2g6dGhpcy5zaG93Q291bnR9fSx3YXRjaDp7ZGlzYWJsZWQ6ZnVuY3Rpb24oZSl7ZSYmdGhpcy5pc09wZW4mJnRoaXMuY2xvc2VNZW51KCl9LG11bHRpcGxlOmZ1bmN0aW9uKGUpe2UmJnRoaXMuYnVpbGROb2RlQ2hlY2tlZFN0YXRlTWFwKCl9LHNlYXJjaFF1ZXJ5Ok8oKSgoZnVuY3Rpb24oKXt0aGlzLmhhbmRsZVNlYXJjaCgpLHRoaXMuJGVtaXQoXCJzZWFyY2gtY2hhbmdlXCIsdGhpcy5zZWFyY2hRdWVyeSx0aGlzLmlkKX0pLDIwMCksc29ydFZhbHVlQnk6ZnVuY3Rpb24oKXt0aGlzLnNvcnRWYWx1ZSgpfSxpbnRlcm5hbFZhbHVlOmZ1bmN0aW9uKCl7dGhpcy4kZW1pdChcImlucHV0XCIsdGhpcy5nZXRWYWx1ZSgpLHRoaXMuaWQpfSx2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lfHwwPT09ZT90aGlzLm11bHRpcGxlP2Uuc2xpY2UoKTpbZV06W107IXAodCx0aGlzLmludGVybmFsVmFsdWUpJiYodGhpcy5pbnRlcm5hbFZhbHVlPXQsdGhpcy5idWlsZFNlbGVjdGVkTm9kZU1hcCgpLHRoaXMuYnVpbGROb2RlQ2hlY2tlZFN0YXRlTWFwKCkpfX0sbWV0aG9kczp7dmVyaWZ5UHJvcHM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMubG9hZFJvb3RPcHRpb25zfHwodGhpcy5vcHRpb25zP0FycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zKXx8UygoZnVuY3Rpb24oKXtyZXR1cm4hMX0pLChmdW5jdGlvbigpe3JldHVyblwiRXhwZWN0ZWQgcHJvcCBgb3B0aW9uc2AgdG8gYmUgYW4gYXJyYXksIGluc3RlYWQgZ290OiBcIitlLm9wdGlvbnMrXCIuXCJ9KSk6UygoZnVuY3Rpb24oKXtyZXR1cm4hMX0pLChmdW5jdGlvbigpe3JldHVyblwiUmVxdWlyZWQgcHJvcCBgb3B0aW9uc2AgaXMgbm90IHByb3ZpZGVkLlwifSkpKX0scmVzZXRGbGFnczpmdW5jdGlvbigpe3RoaXMuX2JsdXJPblNlbGVjdD0hMSx0aGlzLl93YXNDbGlja2VkT25WYWx1ZUl0ZW09ITF9LGluaXRpYWxpemU6ZnVuY3Rpb24oZSl7QXJyYXkuaXNBcnJheShlKSYmKHRoaXMucm9vdE9wdGlvbnNMb2FkZWQ9ITApLHRoaXMuaW5pdGlhbGl6ZVJvb3RPcHRpb25zKGV8fFtdKSx0aGlzLmluaXRpYWxpemVWYWx1ZSgpLHRoaXMuYnVpbGRTZWxlY3RlZE5vZGVNYXAoKSx0aGlzLmJ1aWxkTm9kZUNoZWNrZWRTdGF0ZU1hcCgpfSxnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm11bHRpcGxlP3RoaXMuaW50ZXJuYWxWYWx1ZS5zbGljZSgpOnRoaXMuaW50ZXJuYWxWYWx1ZVswXX0sZ2V0Tm9kZTpmdW5jdGlvbihlKXtyZXR1cm4gUygoZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9ZX0pLChmdW5jdGlvbigpe3JldHVyblwiSW52YWxpZCBub2RlIGlkOiBcIitlfSkpLHRoaXMubm9kZU1hcFtlXXx8e2lkOmUsbGFiZWw6ZStcIiAodW5rbm93bilcIixhbmNlc3RvcnM6W10scGFyZW50Tm9kZTpudWxsLGlzVW5rbm93bk5vZGU6ITAsaXNMZWFmOiEwLGlzQnJhbmNoOiExfX0saXNTZWxlY3RlZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5pZCBpbiB0aGlzLnNlbGVjdGVkTm9kZU1hcH0sY2hlY2tJZkJyYW5jaE5vZGU6ZnVuY3Rpb24oZSl7UygoZnVuY3Rpb24oKXtyZXR1cm4gZSYmZS5pc0JyYW5jaH0pLChmdW5jdGlvbigpe3JldHVyblwiRXhwZWN0ZWQgYSBicmFuY2ggbm9kZSwgaW5zdGVhZCBnb3Q6IFwiK2V9KSl9LHRyYXZlcnNlRGVzY2VuZGFudHM6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXRoaXM7XCJmdW5jdGlvblwiPT10eXBlb2YgdCYmKG49dCx0PTEvMCksZS5pc0JyYW5jaCYmZS5sZXZlbDx0JiZlLmNoaWxkcmVuLmZvckVhY2goKGZ1bmN0aW9uKGUpe2kudHJhdmVyc2VEZXNjZW5kYW50cyhlLHQsbiksbihlKX0pKX0sdHJhdmVyc2VBbmNlc3RvcnM6ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLnBhcmVudE5vZGU7bnVsbCE9PW4mJih0KG4pLHRoaXMudHJhdmVyc2VBbmNlc3RvcnMobix0KSl9LHRyYXZlcnNlQWxsTm9kZXM6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczt0aGlzLm5vcm1hbGl6ZWRPcHRpb25zLmZvckVhY2goKGZ1bmN0aW9uKG4pe3QudHJhdmVyc2VEZXNjZW5kYW50cyhuLGUpLGUobil9KSl9LHRvZ2dsZUNsaWNrT3V0c2lkZUV2ZW50OmZ1bmN0aW9uKGUpe2U/ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlLCExKTpkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5oYW5kbGVDbGlja091dHNpZGUsITEpfSxmb2N1c0lucHV0OmZ1bmN0aW9uKCl7dGhpcy4kcmVmcy52YWx1ZS5mb2N1c0lucHV0KCl9LGJsdXJJbnB1dDpmdW5jdGlvbigpe3RoaXMuJHJlZnMudmFsdWUuYmx1cklucHV0KCl9LGhhbmRsZU1vdXNlRG93bjppKChmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSwhdGhpcy5kaXNhYmxlZCl7dGhpcy4kcmVmcy52YWx1ZS4kZWwuY29udGFpbnMoZS50YXJnZXQpJiYoIXRoaXMuaXNPcGVufHx0aGlzLnNlYXJjaGFibGV8fHRoaXMuX3dhc0NsaWNrZWRPblZhbHVlSXRlbT90aGlzLmlzT3Blbnx8IXRoaXMub3Blbk9uQ2xpY2smJiF0aGlzLmlzRm9jdXNlZHx8dGhpcy5vcGVuTWVudSgpOnRoaXMuY2xvc2VNZW51KCkpLHRoaXMuX2JsdXJPblNlbGVjdD90aGlzLmJsdXJJbnB1dCgpOnRoaXMuZm9jdXNJbnB1dCgpLHRoaXMucmVzZXRGbGFncygpfX0pKSxoYW5kbGVNb3VzZURvd25PbkNsZWFyOmkoKGZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuY2xlYXIoKSx0aGlzLmZvY3VzSW5wdXQoKX0pKSxoYW5kbGVNb3VzZURvd25PbkFycm93OmkoKGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMuZm9jdXNJbnB1dCgpLHRoaXMudG9nZ2xlTWVudSgpfSkpLGhhbmRsZUNsaWNrT3V0c2lkZTpmdW5jdGlvbihlKXt0aGlzLiRyZWZzLndyYXBwZXImJiF0aGlzLiRyZWZzLndyYXBwZXIuY29udGFpbnMoZS50YXJnZXQpJiYodGhpcy5ibHVySW5wdXQoKSx0aGlzLmNsb3NlTWVudSgpKX0saGFuZGxlU2VhcmNoOmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLnNlYXJjaFF1ZXJ5Pyh0aGlzLnNlYXJjaGluZz0hMCx0aGlzLm5vU2VhcmNoUmVzdWx0cz0hMCx0aGlzLnRyYXZlcnNlQWxsTm9kZXMoKGZ1bmN0aW9uKHQpe2lmKHQuaXNCcmFuY2gpe3ZhciBuO3QuZXhwYW5kc09uU2VhcmNoPSExLHQuaGFzTWF0Y2hlZENoaWxkPSExLGUuc2VhcmNoaW5nQ291bnRbdC5pZF09KG49e30sZihuLFwiQUxMX0NISUxEUkVOXCIsMCksZihuLFwiQUxMX0RFU0NFTkRBTlRTXCIsMCksZihuLFwiTEVBRl9DSElMRFJFTlwiLDApLGYobixcIkxFQUZfREVTQ0VOREFOVFNcIiwwKSxuKX19KSksdGhpcy50cmF2ZXJzZUFsbE5vZGVzKChmdW5jdGlvbih0KXt2YXIgbj10LmlzTWF0Y2hlZD1nKCkoZS5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpLHQubGFiZWwudG9Mb3dlckNhc2UoKSk7biYmKGUubm9TZWFyY2hSZXN1bHRzPSExLHQuYW5jZXN0b3JzLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiBlLnNlYXJjaGluZ0NvdW50W3QuaWRdLkFMTF9ERVNDRU5EQU5UUysrfSkpLHQuaXNMZWFmJiZ0LmFuY2VzdG9ycy5mb3JFYWNoKChmdW5jdGlvbih0KXtyZXR1cm4gZS5zZWFyY2hpbmdDb3VudFt0LmlkXS5MRUFGX0RFU0NFTkRBTlRTKyt9KSksbnVsbCE9PXQucGFyZW50Tm9kZSYmKGUuc2VhcmNoaW5nQ291bnRbdC5wYXJlbnROb2RlLmlkXS5BTExfQ0hJTERSRU4rPTEsdC5pc0xlYWYmJihlLnNlYXJjaGluZ0NvdW50W3QucGFyZW50Tm9kZS5pZF0uTEVBRl9DSElMRFJFTis9MSkpKSwobnx8dC5pc0JyYW5jaCYmdC5leHBhbmRzT25TZWFyY2gpJiZudWxsIT09dC5wYXJlbnROb2RlJiYodC5wYXJlbnROb2RlLmV4cGFuZHNPblNlYXJjaD0hMCx0LnBhcmVudE5vZGUuaGFzTWF0Y2hlZENoaWxkPSEwKX0pKSk6dGhpcy5zZWFyY2hpbmc9ITF9LGNsb3NlTWVudTpmdW5jdGlvbigpe3RoaXMuaXNPcGVuJiYodGhpcy5pc09wZW49ITEsdGhpcy5yZXRhaW5TY3JvbGxQb3NpdGlvbiYmdGhpcy4kcmVmcy5tZW51JiYodGhpcy5sYXN0U2Nyb2xsUG9zaXRpb249dGhpcy4kcmVmcy5tZW51LnNjcm9sbFRvcCksdGhpcy50b2dnbGVDbGlja091dHNpZGVFdmVudCghMSksdGhpcy5zZWFyY2hRdWVyeT1cIlwiLHRoaXMuJGVtaXQoXCJjbG9zZVwiLHRoaXMuZ2V0VmFsdWUoKSx0aGlzLmlkKSl9LG9wZW5NZW51OmZ1bmN0aW9uKCl7dGhpcy5kaXNhYmxlZHx8dGhpcy5pc09wZW58fCh0aGlzLmlzT3Blbj0hMCx0aGlzLiRuZXh0VGljayh0aGlzLmFkanVzdFBvc2l0aW9uKSx0aGlzLnJldGFpblNjcm9sbFBvc2l0aW9uJiZ0aGlzLiRuZXh0VGljayh0aGlzLnJlc3RvcmVTY3JvbGxQb3NpdGlvbiksdGhpcy5yb290T3B0aW9uc0xvYWRlZHx8dGhpcy5sb2FkT3B0aW9ucyghMCksdGhpcy50b2dnbGVDbGlja091dHNpZGVFdmVudCghMCksdGhpcy4kZW1pdChcIm9wZW5cIix0aGlzLmlkKSl9LHRvZ2dsZU1lbnU6ZnVuY3Rpb24oKXt0aGlzLmlzT3Blbj90aGlzLmNsb3NlTWVudSgpOnRoaXMub3Blbk1lbnUoKX0sdG9nZ2xlRXhwYW5kZWQ6ZnVuY3Rpb24oZSl7dGhpcy5jaGVja0lmQnJhbmNoTm9kZShlKSx0aGlzLnNlYXJjaGluZz9lLmV4cGFuZHNPblNlYXJjaD0hZS5leHBhbmRzT25TZWFyY2g6ZS5pc0V4cGFuZGVkPSFlLmlzRXhwYW5kZWR9LGluaXRpYWxpemVWYWx1ZTpmdW5jdGlvbigpe3RoaXMubXVsdGlwbGU/KHRoaXMuaW50ZXJuYWxWYWx1ZT1BcnJheS5pc0FycmF5KHRoaXMudmFsdWUpP3RoaXMudmFsdWUuc2xpY2UoKTpbXSx0aGlzLnNvcnRWYWx1ZSgpKTp0aGlzLmludGVybmFsVmFsdWU9bnVsbCE9dGhpcy52YWx1ZT9bdGhpcy52YWx1ZV06W119LGluaXRpYWxpemVSb290T3B0aW9uczpmdW5jdGlvbihlKXt0aGlzLm5vcm1hbGl6ZWRPcHRpb25zPXRoaXMubm9ybWFsaXplKG51bGwsZSl9LGJ1aWxkU2VsZWN0ZWROb2RlTWFwOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5zZWxlY3RlZE5vZGVNYXA9T2JqZWN0LmNyZWF0ZShudWxsKTt0aGlzLmludGVybmFsVmFsdWUuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZVt0XT0hMH0pKX0sYnVpbGROb2RlQ2hlY2tlZFN0YXRlTWFwOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PXRoaXMubm9kZUNoZWNrZWRTdGF0ZU1hcD1PYmplY3QuY3JlYXRlKG51bGwpO3RoaXMubXVsdGlwbGUmJih0aGlzLnNlbGVjdGVkTm9kZXMuZm9yRWFjaCgoZnVuY3Rpb24obil7dFtuLmlkXT0yLGUuZmxhdHx8KGUudHJhdmVyc2VEZXNjZW5kYW50cyhuLChmdW5jdGlvbihlKXt0W2UuaWRdPTJ9KSksZS50cmF2ZXJzZUFuY2VzdG9ycyhuLChmdW5jdGlvbihlKXt0W2UuaWRdPTF9KSkpfSkpLHRoaXMubm9ybWFsaXplZE9wdGlvbnMuZm9yRWFjaCgoZnVuY3Rpb24obil7bi5pZCBpbiB0fHwodFtuLmlkXT0wKSxlLnRyYXZlcnNlRGVzY2VuZGFudHMobiwoZnVuY3Rpb24oZSl7ZS5pZCBpbiB0fHwodFtlLmlkXT0wKX0pKX0pKSl9LG5vcm1hbGl6ZTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMsaT10Lm1hcCgoZnVuY3Rpb24odCxpKXtuLmNoZWNrRHVwbGljYXRpb24odCksbi52ZXJpZnlOb2RlU2hhcGUodCk7dmFyIHM9bnVsbD09PWUsbz10LmlkLHI9dC5sYWJlbCxhPXQuY2hpbGRyZW4sbD10LmlzRGlzYWJsZWQsYz12b2lkIDAhPT1sJiZsLHU9QXJyYXkuaXNBcnJheShhKXx8bnVsbD09PWF8fHZvaWQgMD09PWEmJiEhdC5pc0JyYW5jaCxkPSF1LGg9cz8wOmUubGV2ZWwrMSxwPXM/W106ZS5hbmNlc3RvcnMuY29uY2F0KGUpLHY9KHM/W106ZS5pbmRleCkuY29uY2F0KGkpLF89bi5ub2RlTWFwW29dPXtpZDpvLGxhYmVsOnIsbGV2ZWw6aCxhbmNlc3RvcnM6cCxpbmRleDp2LHBhcmVudE5vZGU6ZSxpc0Rpc2FibGVkOmMsaXNNYXRjaGVkOiExLGlzTGVhZjpkLGlzQnJhbmNoOnUsaXNSb290Tm9kZTpzLHJhdzp0fTtpZih1KXt2YXIgbSxDPUFycmF5LmlzQXJyYXkoYSk7Q3x8UygoZnVuY3Rpb24oKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLmxvYWRDaGlsZHJlbk9wdGlvbnN9KSwoZnVuY3Rpb24oKXtyZXR1cm5cIlVubG9hZGVkIGJyYW5jaCBub2RlIGRldGVjdGVkLiBgbG9hZENoaWxkcmVuT3B0aW9uc2AgcHJvcCBpcyByZXF1aXJlZCB0byBsb2FkIGl0cyBjaGlsZHJlbi5cIn0pKSxfLmlzTG9hZGVkPUMsXy5pc1BlbmRpbmc9ITEsXy5pc0V4cGFuZGVkPWg8bi5kZWZhdWx0RXhwYW5kTGV2ZWwsXy5oYXNNYXRjaGVkQ2hpbGQ9ITEsXy5leHBhbmRzT25TZWFyY2g9ITEsXy5sb2FkaW5nQ2hpbGRyZW5FcnJvcj1cIlwiLF8uY291bnQ9KG09e30sZihtLFwiQUxMX0NISUxEUkVOXCIsMCksZihtLFwiQUxMX0RFU0NFTkRBTlRTXCIsMCksZihtLFwiTEVBRl9DSElMRFJFTlwiLDApLGYobSxcIkxFQUZfREVTQ0VOREFOVFNcIiwwKSxtKSxfLmNoaWxkcmVuPUM/bi5ub3JtYWxpemUoXyxhKTpbXSxfLmlzRXhwYW5kZWQmJiFfLmlzTG9hZGVkJiZuLmxvYWRPcHRpb25zKCExLF8pfXJldHVybiBfLmFuY2VzdG9ycy5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4gZS5jb3VudC5BTExfREVTQ0VOREFOVFMrK30pKSxkJiZfLmFuY2VzdG9ycy5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4gZS5jb3VudC5MRUFGX0RFU0NFTkRBTlRTKyt9KSksbnVsbCE9PWUmJihlLmNvdW50LkFMTF9DSElMRFJFTis9MSxkJiYoZS5jb3VudC5MRUFGX0NISUxEUkVOKz0xKSksX30pKTtpZih0aGlzLmJyYW5jaE5vZGVzRmlyc3Qpe3ZhciBzPWkuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZS5pc0JyYW5jaH0pKSxvPWkuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZS5pc0xlYWZ9KSk7aT1zLmNvbmNhdChvKX1yZXR1cm4gaX0sbG9hZE9wdGlvbnM6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO2lmKGUpe2lmKHRoaXMubG9hZGluZ1Jvb3RPcHRpb25zKXJldHVybjt2YXIgaT1mdW5jdGlvbihlLHQpe24ubG9hZGluZ1Jvb3RPcHRpb25zPSExLGU/bi5sb2FkaW5nUm9vdE9wdGlvbnNFcnJvcj1lLm1lc3NhZ2V8fFN0cmluZyhlKTp0P0FycmF5LmlzQXJyYXkodCk/KG4uaW5pdGlhbGl6ZSh0KSxuLnJvb3RPcHRpb25zTG9hZGVkPSEwKTpuLmxvYWRpbmdSb290T3B0aW9uc0Vycm9yPVwicmVjZWl2ZWQgdW5yZWNvZ25pemFibGUgZGF0YVwiOm4ubG9hZGluZ1Jvb3RPcHRpb25zRXJyb3I9XCJubyBkYXRhIHJlY2VpdmVkXCJ9O3RoaXMubG9hZGluZ1Jvb3RPcHRpb25zPSEwLHRoaXMubG9hZGluZ1Jvb3RPcHRpb25zRXJyb3I9XCJcIix0aGlzLmxvYWRSb290T3B0aW9ucyhpKX1lbHNle2lmKHQuaXNQZW5kaW5nKXJldHVybjt2YXIgcz10LnJhdyxvPWZ1bmN0aW9uKGUsaSl7dC5pc1BlbmRpbmc9ITEsZT90LmxvYWRpbmdDaGlsZHJlbkVycm9yPW4ubG9hZENoaWxkcmVuRXJyb3JUZXh0KGUpOkFycmF5LmlzQXJyYXkoaSk/KHQuY2hpbGRyZW49bi5ub3JtYWxpemUodCxpKSx0LmlzTG9hZGVkPSEwLG4uYnVpbGROb2RlQ2hlY2tlZFN0YXRlTWFwKCkpOih0LmxvYWRpbmdDaGlsZHJlbkVycm9yPVwiUmVjZWl2ZWQgdW5yZWNvZ25pemFibGUgZGF0YVwiLFMoKGZ1bmN0aW9uKCl7cmV0dXJuITF9KSwoZnVuY3Rpb24oKXtyZXR1cm5cIlJlY2VpdmVkIHVucmVjb2duaXphYmxlIGRhdGEgXCIraStcIiB3aGlsZSBsb2FkaW5nIGNoaWxkcmVuIG9wdGlvbnMgb2Ygbm9kZSBcIit0LmlkfSkpKX07dC5pc1BlbmRpbmc9ITAsdC5sb2FkaW5nQ2hpbGRyZW5FcnJvcj1cIlwiLHRoaXMubG9hZENoaWxkcmVuT3B0aW9ucyhzLG8pfX0sY2hlY2tEdXBsaWNhdGlvbjpmdW5jdGlvbihlKXt2YXIgdD10aGlzO1MoKGZ1bmN0aW9uKCl7cmV0dXJuIWEodC5ub2RlTWFwLGUuaWQpfSksKGZ1bmN0aW9uKCl7cmV0dXJuXCJEZXRlY3RlZCBkdXBsaWNhdGUgcHJlc2VuY2Ugb2Ygbm9kZSBpZCBcIitKU09OLnN0cmluZ2lmeShlLmlkKSsnLiBUaGVpciBsYWJlbHMgYXJlIFwiJyt0Lm5vZGVNYXBbZS5pZF0ubGFiZWwrJ1wiIGFuZCBcIicrZS5sYWJlbCsnXCIgcmVzcGVjdGl2ZWx5Lid9KSl9LHZlcmlmeU5vZGVTaGFwZTpmdW5jdGlvbigpe30sc2VsZWN0OmZ1bmN0aW9uKGUpe3RoaXMuc2luZ2xlJiZ0aGlzLmNsZWFyKCk7dmFyIHQ9dGhpcy5tdWx0aXBsZSYmIXRoaXMuZmxhdD8wPT09dGhpcy5ub2RlQ2hlY2tlZFN0YXRlTWFwW2UuaWRdOiF0aGlzLmlzU2VsZWN0ZWQoZSk7dD90aGlzLl9zZWxlY3ROb2RlKGUpOnRoaXMuX2Rlc2VsZWN0Tm9kZShlKSx0aGlzLmJ1aWxkU2VsZWN0ZWROb2RlTWFwKCksdGhpcy5idWlsZE5vZGVDaGVja2VkU3RhdGVNYXAoKSx0aGlzLnNlYXJjaGluZyYmdCYmKHRoaXMuc2luZ2xlfHx0aGlzLmNsZWFyT25TZWxlY3QpJiYodGhpcy5zZWFyY2hRdWVyeT1cIlwiKSx0aGlzLnNpbmdsZSYmdGhpcy5jbG9zZU9uU2VsZWN0JiYodGhpcy5jbG9zZU1lbnUoKSx0aGlzLnNlYXJjaGFibGUmJih0aGlzLl9ibHVyT25TZWxlY3Q9ITApKX0sY2xlYXI6ZnVuY3Rpb24oKXt0aGlzLmhhc1ZhbHVlJiYodGhpcy5pbnRlcm5hbFZhbHVlPVtdLHRoaXMuYnVpbGRTZWxlY3RlZE5vZGVNYXAoKSx0aGlzLmJ1aWxkTm9kZUNoZWNrZWRTdGF0ZU1hcCgpKX0sX3NlbGVjdE5vZGU6ZnVuY3Rpb24oZSl7aWYodGhpcy5hZGRWYWx1ZShlKSx0aGlzLm11bHRpcGxlJiYhdGhpcy5mbGF0JiYhZS5pc1Jvb3ROb2RlKXt2YXIgdD1lLnBhcmVudE5vZGUsbj10LmNoaWxkcmVuO24uZXZlcnkodGhpcy5pc1NlbGVjdGVkKSYmKG4uZm9yRWFjaCh0aGlzLnJlbW92ZVZhbHVlKSx0aGlzLl9zZWxlY3ROb2RlKHQpKX19LF9kZXNlbGVjdE5vZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztpZih0aGlzLnJlbW92ZVZhbHVlKGUpLHRoaXMubXVsdGlwbGUmJiF0aGlzLmZsYXQmJih0aGlzLnNlbGVjdGVkTm9kZXMuZm9yRWFjaCgoZnVuY3Rpb24obil7LTEhPT1uLmFuY2VzdG9ycy5pbmRleE9mKGUpJiZ0LnJlbW92ZVZhbHVlKG4pfSkpLCFlLmlzUm9vdE5vZGUpKXt2YXIgbj1kKGUuYW5jZXN0b3JzLHRoaXMuaXNTZWxlY3RlZCk7aWYoLTEhPT1uKXt2YXIgaT1lLmFuY2VzdG9yc1tuXSxzPWUuYW5jZXN0b3JzLmNvbmNhdChlKTt0aGlzLnJlbW92ZVZhbHVlKGkpLHRoaXMudHJhdmVyc2VEZXNjZW5kYW50cyhpLGUubGV2ZWwsKGZ1bmN0aW9uKGUpey0xPT09cy5pbmRleE9mKGUpJiZ0LmFkZFZhbHVlKGUpfSkpfX19LGFkZFZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuaW50ZXJuYWxWYWx1ZS5wdXNoKGUuaWQpLHRoaXMuc2VsZWN0ZWROb2RlTWFwW2UuaWRdPSEwLHRoaXMuc29ydFZhbHVlKCl9LHJlbW92ZVZhbHVlOmZ1bmN0aW9uKGUpe2godGhpcy5pbnRlcm5hbFZhbHVlLGUuaWQpLGRlbGV0ZSB0aGlzLnNlbGVjdGVkTm9kZU1hcFtlLmlkXX0sbWF5YmVSZW1vdmVMYXN0VmFsdWU6ZnVuY3Rpb24oKXtpZih0aGlzLmhhc1ZhbHVlKXt2YXIgZT1jKHRoaXMuaW50ZXJuYWxWYWx1ZSksdD10aGlzLmdldE5vZGUoZSk7dGhpcy5yZW1vdmVWYWx1ZSh0KSx0aGlzLmJ1aWxkU2VsZWN0ZWROb2RlTWFwKCksdGhpcy5idWlsZE5vZGVDaGVja2VkU3RhdGVNYXAoKX19LHNvcnRWYWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7XCJMRVZFTFwiPT09dGhpcy5zb3J0VmFsdWVCeT90aGlzLmludGVybmFsVmFsdWUuc29ydCgoZnVuY3Rpb24odCxuKXtyZXR1cm4gXyhlLm5vZGVNYXBbdF0sZS5ub2RlTWFwW25dKX0pKTpcIklOREVYXCI9PT10aGlzLnNvcnRWYWx1ZUJ5JiZ0aGlzLmludGVybmFsVmFsdWUuc29ydCgoZnVuY3Rpb24odCxuKXtyZXR1cm4gdihlLm5vZGVNYXBbdF0sZS5ub2RlTWFwW25dKX0pKX0scmVzdG9yZVNjcm9sbFBvc2l0aW9uOmZ1bmN0aW9uKCl7dGhpcy4kcmVmcy5tZW51JiYodGhpcy4kcmVmcy5tZW51LnNjcm9sbFRvcD10aGlzLmxhc3RTY3JvbGxQb3NpdGlvbil9LGFkanVzdFBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyl7dmFyIGU9dGhpcy4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksdD1lLnRvcCxuPXdpbmRvdy5pbm5lckhlaWdodC1lLmJvdHRvbTtuPnRoaXMubWF4SGVpZ2h0fHxuPnR8fFwiYmVsb3dcIj09PXRoaXMub3BlbkRpcmVjdGlvbnx8XCJib3R0b21cIj09PXRoaXMub3BlbkRpcmVjdGlvbj8odGhpcy5wcmVmZmVyZWRPcGVuRGlyZWN0aW9uPVwiYmVsb3dcIix0aGlzLm9wdGltaXplZEhlaWdodD1NYXRoLm1pbihuLTQwLHRoaXMubWF4SGVpZ2h0KSk6KHRoaXMucHJlZmZlcmVkT3BlbkRpcmVjdGlvbj1cImFib3ZlXCIsdGhpcy5vcHRpbWl6ZWRIZWlnaHQ9TWF0aC5taW4odC00MCx0aGlzLm1heEhlaWdodCkpfX19LGNyZWF0ZWQ6ZnVuY3Rpb24oKXt0aGlzLnZlcmlmeVByb3BzKCksdGhpcy5yZXNldEZsYWdzKCksdGhpcy5pbml0aWFsaXplKHRoaXMub3B0aW9ucyl9LG1vdW50ZWQ6ZnVuY3Rpb24oKXt0aGlzLmF1dG9mb2N1cyYmdGhpcy4kcmVmcy52YWx1ZS5mb2N1c0lucHV0KCl9LGRlc3Ryb3llZDpmdW5jdGlvbigpe3RoaXMudG9nZ2xlQ2xpY2tPdXRzaWRlRXZlbnQoITEpfX0sRD17Y29tcHV0ZWQ6e2xpbWl0VGV4dDpmdW5jdGlvbigpe3ZhciBlPXRoaXMuaW5zdGFuY2Uuc2VsZWN0ZWROb2Rlc051bWJlci10aGlzLmluc3RhbmNlLmxpbWl0O3JldHVybiB0aGlzLmluc3RhbmNlLmxpbWl0VGV4dChlKX19LG1ldGhvZHM6e2ZvY3VzSW5wdXQ6ZnVuY3Rpb24oKXt0aGlzLiRyZWZzLmlucHV0LmZvY3VzKCl9LGJsdXJJbnB1dDpmdW5jdGlvbigpe3RoaXMuJHJlZnMuaW5wdXQuYmx1cigpfSxoYW5kbGVNb3VzZURvd25PblZhbHVlOmkoKGZ1bmN0aW9uKCl7dGhpcy5pbnN0YW5jZS5fd2FzQ2xpY2tlZE9uVmFsdWVJdGVtPSEwfSkpfX0sTT17bmFtZTpcInZ1ZS10cmVlc2VsZWN0LS1wbGFjZWhvbGRlclwiLGluamVjdDpbXCJpbnN0YW5jZVwiXX0sQT1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50O3JldHVybihlLl9zZWxmLl9jfHx0KShcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19wbGFjZWhvbGRlciB2dWUtdHJlZXNlbGVjdC1oZWxwZXItem9vbS1lZmZlY3Qtb2ZmXCJ9LFtlLl90KFwicGxhY2Vob2xkZXJcIixbZS5fdihlLl9zKGUuaW5zdGFuY2UucGxhY2Vob2xkZXIpKV0pXSwyKX0sTD1bXSxUPXtyZW5kZXI6QSxzdGF0aWNSZW5kZXJGbnM6TH0sVj1ULFI9bigwKSxrPVIoTSxWLCExLG51bGwsbnVsbCxudWxsKSxJPWsuZXhwb3J0cywkPXtCQUNLU1BBQ0U6OCxFU0NBUEU6MjcsREVMRVRFOjQ2fSxCPXtuYW1lOlwidnVlLXRyZWVzZWxlY3QtLWlucHV0XCIsaW5qZWN0OltcImluc3RhbmNlXCJdLGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57aW5wdXRXaWR0aDo1fX0sY29tcHV0ZWQ6e25lZWRzQXV0b1NpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbnN0YW5jZS5tdWx0aXBsZX19LHVwZGF0ZWQ6ZnVuY3Rpb24oKXt0aGlzLm5lZWRzQXV0b1NpemUmJnRoaXMudXBkYXRlSW5wdXRXaWR0aCgpfSxtZXRob2RzOntmb2N1czpmdW5jdGlvbigpe3RoaXMuaW5zdGFuY2UuZGlzYWJsZWR8fHRoaXMuJHJlZnMuaW5wdXQmJnRoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKX0sYmx1cjpmdW5jdGlvbigpe3RoaXMuJHJlZnMuaW5wdXQmJnRoaXMuJHJlZnMuaW5wdXQuYmx1cigpfSxvbkZvY3VzOmZ1bmN0aW9uKCl7dGhpcy5pbnN0YW5jZS5pc0ZvY3VzZWQ9ITAsIXRoaXMuaW5zdGFuY2UuaXNPcGVuJiZ0aGlzLmluc3RhbmNlLm9wZW5PbkZvY3VzJiZ0aGlzLmluc3RhbmNlLm9wZW5NZW51KCl9LG9uQmx1cjpmdW5jdGlvbigpe3RoaXMuaW5zdGFuY2UuaXNGb2N1c2VkPSExLHRoaXMuaW5zdGFuY2UuY2xvc2VNZW51KCl9LG9uSW5wdXQ6ZnVuY3Rpb24oZSl7dGhpcy5pbnN0YW5jZS5zZWFyY2hRdWVyeT1lLnRhcmdldC52YWx1ZX0sb25LZXlEb3duOmZ1bmN0aW9uKGUpe2lmKCEoZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLmFsdEtleXx8ZS5tZXRhS2V5KSlzd2l0Y2goXCJ3aGljaFwiaW4gZT9lLndoaWNoOmUua2V5Q29kZSl7Y2FzZSAkLkJBQ0tTUEFDRTp0aGlzLmluc3RhbmNlLmJhY2tzcGFjZVJlbW92ZXMmJiF0aGlzLmluc3RhbmNlLnNlYXJjaFF1ZXJ5Lmxlbmd0aCYmdGhpcy5pbnN0YW5jZS5tYXliZVJlbW92ZUxhc3RWYWx1ZSgpO2JyZWFrO2Nhc2UgJC5ERUxFVEU6dGhpcy5pbnN0YW5jZS5kZWxldGVSZW1vdmVzJiYhdGhpcy5pbnN0YW5jZS5zZWFyY2hRdWVyeS5sZW5ndGgmJnRoaXMuaW5zdGFuY2UubWF5YmVSZW1vdmVMYXN0VmFsdWUoKTticmVhaztjYXNlICQuRVNDQVBFOnRoaXMuaW5zdGFuY2Uuc2VhcmNoUXVlcnkubGVuZ3RoP3RoaXMuaW5zdGFuY2Uuc2VhcmNoUXVlcnk9XCJcIjp0aGlzLmluc3RhbmNlLmlzT3Blbj90aGlzLmluc3RhbmNlLmNsb3NlTWVudSgpOnRoaXMuaW5zdGFuY2UuZXNjYXBlQ2xlYXJzVmFsdWUmJnRoaXMuaW5zdGFuY2UuY2xlYXIoKTticmVhaztkZWZhdWx0OnRoaXMuaW5zdGFuY2UuaXNPcGVufHx0aGlzLmluc3RhbmNlLm9wZW5NZW51KCl9fSxvbk1vdXNlRG93bjpmdW5jdGlvbihlKXt0aGlzLmluc3RhbmNlLnNlYXJjaFF1ZXJ5Lmxlbmd0aCYmZS5zdG9wUHJvcGFnYXRpb24oKX0scmVuZGVySW5wdXRXcmFwcGVyOmZ1bmN0aW9uKGUpe3ZhciB0PXtjbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pbnB1dC13cmFwcGVyXCJ9LG49W107cmV0dXJuIHRoaXMuaW5zdGFuY2Uuc2VhcmNoYWJsZSYmIXRoaXMuaW5zdGFuY2UuZGlzYWJsZWQmJihuLnB1c2godGhpcy5yZW5kZXJJbnB1dChlKSksdGhpcy5uZWVkc0F1dG9TaXplJiZuLnB1c2godGhpcy5yZW5kZXJTaXplcihlKSkpLHRoaXMuaW5zdGFuY2Uuc2VhcmNoYWJsZXx8bCh0LHtvbjp7Zm9jdXM6dGhpcy5vbkZvY3VzLGJsdXI6dGhpcy5vbkJsdXIsa2V5ZG93bjp0aGlzLm9uS2V5RG93bn0scmVmOlwiaW5wdXRcIn0pLHRoaXMuaW5zdGFuY2Uuc2VhcmNoYWJsZXx8dGhpcy5pbnN0YW5jZS5kaXNhYmxlZHx8bCh0LHthdHRyczp7dGFiSW5kZXg6dGhpcy5pbnN0YW5jZS50YWJJbmRleH19KSxlKFwiZGl2XCIsdCxuKX0scmVuZGVySW5wdXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUoXCJpbnB1dFwiLHtjbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pbnB1dFwiLGF0dHJzOnt0eXBlOlwidGV4dFwiLGF1dG9jb21wbGV0ZTpcIm9mZlwiLHRhYkluZGV4OnRoaXMuaW5zdGFuY2UudGFiSW5kZXh9LGRvbVByb3BzOnt2YWx1ZTp0aGlzLmluc3RhbmNlLnNlYXJjaFF1ZXJ5fSxzdHlsZTp7d2lkdGg6dGhpcy5uZWVkc0F1dG9TaXplP3RoaXMuaW5wdXRXaWR0aCtcInB4XCI6bnVsbH0sb246e2ZvY3VzOnRoaXMub25Gb2N1cyxpbnB1dDp0aGlzLm9uSW5wdXQsYmx1cjp0aGlzLm9uQmx1cixrZXlkb3duOnRoaXMub25LZXlEb3duLG1vdXNlZG93bjp0aGlzLm9uTW91c2VEb3dufSxyZWY6XCJpbnB1dFwifSl9LHJlbmRlclNpemVyOmZ1bmN0aW9uKGUpe3JldHVybiBlKFwiZGl2XCIse2NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX3NpemVyXCIsZG9tUHJvcHM6e3RleHRDb250ZW50OnRoaXMuaW5zdGFuY2Uuc2VhcmNoUXVlcnl9LHJlZjpcInNpemVyXCJ9KX0sdXBkYXRlSW5wdXRXaWR0aDpmdW5jdGlvbigpe3RoaXMuaW5wdXRXaWR0aD1NYXRoLm1heCg1LHRoaXMuJHJlZnMuc2l6ZXI/dGhpcy4kcmVmcy5zaXplci5zY3JvbGxXaWR0aCs1OjApfX0scmVuZGVyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnJlbmRlcklucHV0V3JhcHBlcihlKX19LGo9bigwKSxGPWooQixudWxsLCExLG51bGwsbnVsbCxudWxsKSx6PUYuZXhwb3J0cyxQPXtuYW1lOlwidnVlLXRyZWVzZWxlY3QtLW11bHRpLXZhbHVlXCIsY29tcG9uZW50czp7UGxhY2Vob2xkZXI6SSxTZWFyY2hJbnB1dDp6fSxtaXhpbnM6W0RdLGluamVjdDpbXCJpbnN0YW5jZVwiXX0sSD1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X192YWx1ZS13cmFwcGVyXCJ9LFtuKFwidHJhbnNpdGlvbi1ncm91cFwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19tdWx0aS12YWx1ZVwiLGF0dHJzOnt0YWc6XCJkaXZcIixuYW1lOlwidnVlLXRyZWVzZWxlY3RfX211bHRpLXZhbHVlLWl0ZW0tLXpvb21cIixhcHBlYXI6XCJcIn19LFtlLl9sKGUuaW5zdGFuY2UudmlzaWJsZVZhbHVlLChmdW5jdGlvbih0KXtyZXR1cm5bbihcImRpdlwiLHtrZXk6XCJ2YWx1ZS1cIit0LmlkLHN0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX211bHRpLXZhbHVlLWl0ZW0td3JhcHBlclwiLG9uOnttb3VzZWRvd246ZS5oYW5kbGVNb3VzZURvd25PblZhbHVlfX0sW24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbXVsdGktdmFsdWUtaXRlbVwifSxbbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbXVsdGktdmFsdWUtbGFiZWxcIn0sW2UuX3YoZS5fcyh0LmxhYmVsKSldKSxuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uIHZ1ZS10cmVlc2VsZWN0X192YWx1ZS1yZW1vdmVcIixvbjp7bW91c2Vkb3duOmZ1bmN0aW9uKG4pe2UuaW5zdGFuY2Uuc2VsZWN0KHQpfX19LFtlLl92KFwiw5dcIildKV0pXSldfSkpLGUuX3YoXCIgXCIpLGUuaW5zdGFuY2UuaGFzRXhjZWVkZWRMaW1pdD9uKFwiZGl2XCIse2tleTpcImxpbWl0LXRpcFwiLHN0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2xpbWl0LXRpcCB2dWUtdHJlZXNlbGVjdC1oZWxwZXItem9vbS1lZmZlY3Qtb2ZmXCJ9LFtuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19saW1pdC10aXAtdGV4dFwifSxbZS5fdihlLl9zKGUubGltaXRUZXh0KSldKV0pOmUuX2UoKSxlLl92KFwiIFwiKSxlLmluc3RhbmNlLmhhc1ZhbHVlfHxlLmluc3RhbmNlLnNlYXJjaFF1ZXJ5P2UuX2UoKTpuKFwicGxhY2Vob2xkZXJcIix7a2V5OlwicGxhY2Vob2xlclwifSksZS5fdihcIiBcIiksbihcInNlYXJjaC1pbnB1dFwiLHtrZXk6XCJpbnB1dFwiLHJlZjpcImlucHV0XCJ9KV0sMildLDEpfSxRPVtdLEs9e3JlbmRlcjpILHN0YXRpY1JlbmRlckZuczpRfSxXPUssVT1uKDApLHE9VShQLFcsITEsbnVsbCxudWxsLG51bGwpLFg9cS5leHBvcnRzLEo9e25hbWU6XCJ2dWUtdHJlZXNlbGVjdC0tc2luZ2xlLXZhbHVlXCIsY29tcG9uZW50czp7UGxhY2Vob2xkZXI6SSxTZWFyY2hJbnB1dDp6fSxtaXhpbnM6W0RdLGluamVjdDpbXCJpbnN0YW5jZVwiXX0sRz1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X192YWx1ZS13cmFwcGVyXCJ9LFtlLmluc3RhbmNlLmhhc1ZhbHVlJiYhZS5pbnN0YW5jZS5zZWFyY2hRdWVyeT9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX3NpbmdsZS12YWx1ZVwifSxbZS5fdihcIlxcbiAgICBcIitlLl9zKGUuaW5zdGFuY2Uuc2VsZWN0ZWROb2Rlc1swXS5sYWJlbCkrXCJcXG4gIFwiKV0pOmUuaW5zdGFuY2Uuc2VhcmNoUXVlcnk/ZS5fZSgpOm4oXCJwbGFjZWhvbGRlclwiKSxlLl92KFwiIFwiKSxuKFwic2VhcmNoLWlucHV0XCIse2tleTpcImlucHV0XCIscmVmOlwiaW5wdXRcIn0pXSwxKX0sWT1bXSxaPXtyZW5kZXI6RyxzdGF0aWNSZW5kZXJGbnM6WX0sZWU9Wix0ZT1uKDApLG5lPXRlKEosZWUsITEsbnVsbCxudWxsLG51bGwpLGllPW5lLmV4cG9ydHMsc2U9e3Byb3BzOntub2RlOnt0eXBlOk9iamVjdCxyZXF1aXJlZDohMH19LGNvbXB1dGVkOntjaGVja2VkU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbnN0YW5jZS5ub2RlQ2hlY2tlZFN0YXRlTWFwW3RoaXMubm9kZS5pZF19LHNob3VsZEV4cGFuZDpmdW5jdGlvbigpe3JldHVybiEhdGhpcy5ub2RlLmlzQnJhbmNoJiYodGhpcy5pbnN0YW5jZS5zZWFyY2hpbmc/dGhpcy5ub2RlLmV4cGFuZHNPblNlYXJjaDp0aGlzLm5vZGUuaXNFeHBhbmRlZCl9fSx3YXRjaDp7XCJub2RlLmlzRXhwYW5kZWRcIjpmdW5jdGlvbihlKXshMCE9PWV8fHRoaXMubm9kZS5pc0xvYWRlZHx8dGhpcy5pbnN0YW5jZS5sb2FkT3B0aW9ucyghMSx0aGlzLm5vZGUpfX0sbWV0aG9kczp7aGFuZGxlTW91c2VEb3duT25PcHRpb246aSgoZnVuY3Rpb24oKXt0aGlzLm5vZGUuaXNCcmFuY2gmJnRoaXMuaW5zdGFuY2UuZGlzYWJsZUJyYW5jaE5vZGVzP3RoaXMuaW5zdGFuY2UudG9nZ2xlRXhwYW5kZWQodGhpcy5ub2RlKTp0aGlzLmluc3RhbmNlLnNlbGVjdCh0aGlzLm5vZGUpfSkpLGhhbmRsZU1vdXNlRG93bk9uT3B0aW9uQXJyb3c6aSgoZnVuY3Rpb24oKXt0aGlzLmluc3RhbmNlLnRvZ2dsZUV4cGFuZGVkKHRoaXMubm9kZSl9KSl9fSxvZT17bmFtZTpcInZ1ZS10cmVlc2VsZWN0LS1vcHRpb25cIixpbmplY3Q6W1wiaW5zdGFuY2VcIixcIlVOQ0hFQ0tFRFwiLFwiSU5ERVRFUk1JTkFURVwiLFwiQ0hFQ0tFRFwiXSxtaXhpbnM6W3NlXX0scmU9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbGlzdC1pdGVtXCJ9LFtuKFwiZGl2XCIse2NsYXNzOltcInZ1ZS10cmVlc2VsZWN0X19vcHRpb25cIix7XCJ2dWUtdHJlZXNlbGVjdF9fb3B0aW9uLS1kaXNhYmxlZFwiOmUubm9kZS5kaXNhYmxlZCxcInZ1ZS10cmVlc2VsZWN0X19vcHRpb24tLXJvb3RcIjplLm5vZGUuaXNSb290Tm9kZSxcInZ1ZS10cmVlc2VsZWN0X19vcHRpb24tLWNoaWxkXCI6IWUubm9kZS5pc1Jvb3ROb2RlLFwidnVlLXRyZWVzZWxlY3RfX29wdGlvbi0tc2VsZWN0ZWRcIjplLmluc3RhbmNlLmlzU2VsZWN0ZWQoZS5ub2RlKSxcInZ1ZS10cmVlc2VsZWN0X19vcHRpb24tLW1hdGNoZWRcIjplLmluc3RhbmNlLnNlYXJjaGluZyYmZS5ub2RlLmlzTWF0Y2hlZCxcInZ1ZS10cmVlc2VsZWN0X19vcHRpb24tLWhpZGVcIjplLmluc3RhbmNlLnNlYXJjaGluZyYmIShlLm5vZGUuaXNNYXRjaGVkfHxlLm5vZGUuaGFzTWF0Y2hlZENoaWxkKX1dfSxbZS5ub2RlLmlzTGVhZj9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX29wdGlvbi1hcnJvdy1wbGFjZWhvbGRlclwifSxbZS5fdihcIsKgXCIpXSk6bihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19vcHRpb24tYXJyb3ctd3JhcHBlclwiLG9uOnttb3VzZWRvd246ZS5oYW5kbGVNb3VzZURvd25Pbk9wdGlvbkFycm93fX0sW24oXCJ0cmFuc2l0aW9uXCIse2F0dHJzOntuYW1lOlwidnVlLXRyZWVzZWxlY3RfX29wdGlvbi1hcnJvdy0tcHJlcGFyZVwiLGFwcGVhcjpcIlwifX0sW24oXCJzcGFuXCIse2NsYXNzOltcInZ1ZS10cmVlc2VsZWN0X19vcHRpb24tYXJyb3dcIix7XCJ2dWUtdHJlZXNlbGVjdF9fb3B0aW9uLWFycm93LS1yb3RhdGVkXCI6ZS5zaG91bGRFeHBhbmR9XX0pXSldLDEpLGUuX3YoXCIgXCIpLG4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbGFiZWwtd3JhcHBlclwiLG9uOnttb3VzZWRvd246ZS5oYW5kbGVNb3VzZURvd25Pbk9wdGlvbn19LFtlLmluc3RhbmNlLm11bHRpcGxlJiYhZS5pbnN0YW5jZS5kaXNhYmxlQnJhbmNoTm9kZXM/bihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19jaGVja2JveC13cmFwcGVyXCJ9LFtuKFwic3BhblwiLHtjbGFzczpbXCJ2dWUtdHJlZXNlbGVjdF9fY2hlY2tib3hcIix7XCJ2dWUtdHJlZXNlbGVjdF9fY2hlY2tib3gtLWNoZWNrZWRcIjplLmNoZWNrZWRTdGF0ZT09PWUuQ0hFQ0tFRCxcInZ1ZS10cmVlc2VsZWN0X19jaGVja2JveC0taW5kZXRlcm1pbmF0ZVwiOmUuY2hlY2tlZFN0YXRlPT09ZS5JTkRFVEVSTUlOQVRFLFwidnVlLXRyZWVzZWxlY3RfX2NoZWNrYm94LS11bmNoZWNrZWRcIjplLmNoZWNrZWRTdGF0ZT09PWUuVU5DSEVDS0VEfV19LFtuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19jaGVja2JveC1tYXJrXCJ9KV0pXSk6ZS5fZSgpLGUuX3YoXCIgXCIpLG4oXCJsYWJlbFwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19sYWJlbFwifSxbZS5fdihcIlxcbiAgICAgICAgXCIrZS5fcyhlLm5vZGUubGFiZWwpK1wiXFxuICAgICAgICBcIiksZS5ub2RlLmlzQnJhbmNoP24oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2NvdW50XCJ9LFshZS5pbnN0YW5jZS5zZWFyY2hpbmcmJmUuaW5zdGFuY2Uuc2hvd0NvdW50P1tlLl92KFwiKFwiK2UuX3MoZS5ub2RlLmNvdW50W2UuaW5zdGFuY2Uuc2hvd0NvdW50T2ZdKStcIilcIildOmUuaW5zdGFuY2Uuc2VhcmNoaW5nJiZlLmluc3RhbmNlLnNob3dDb3VudE9uU2VhcmNoQ29tcHV0ZWQ/W2UuX3YoXCIoXCIrZS5fcyhlLmluc3RhbmNlLnNlYXJjaGluZ0NvdW50W2Uubm9kZS5pZF1bZS5pbnN0YW5jZS5zaG93Q291bnRPZl0pK1wiKVwiKV06ZS5fZSgpXSwyKTplLl9lKCldKV0pXSksZS5fdihcIiBcIiksZS5zaG91bGRFeHBhbmQ/bihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19saXN0XCJ9LFtlLm5vZGUuaXNMb2FkZWQ/W2Uubm9kZS5jaGlsZHJlbi5sZW5ndGg/ZS5fbChlLm5vZGUuY2hpbGRyZW4sKGZ1bmN0aW9uKGUpe3JldHVybiBuKFwidnVlLXRyZWVzZWxlY3QtLW9wdGlvblwiLHtrZXk6ZS5pZCxhdHRyczp7bm9kZTplfX0pfSkpOm4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbm8tY2hpbGRyZW4tdGlwXCJ9LFtlLl9tKDApLGUuX3YoXCIgXCIpLG4oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX25vLWNoaWxkcmVuLXRpcC10ZXh0XCJ9LFtlLl92KGUuX3MoZS5pbnN0YW5jZS5ub0NoaWxkcmVuVGV4dCkpXSldKV06ZS5ub2RlLmlzUGVuZGluZz9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2xvYWRpbmctdGlwXCJ9LFtlLl9tKDEpLGUuX3YoXCIgXCIpLG4oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2xvYWRpbmctdGlwLXRleHRcIn0sW2UuX3YoZS5fcyhlLmluc3RhbmNlLmxvYWRpbmdUZXh0KSldKV0pOmUubm9kZS5sb2FkaW5nQ2hpbGRyZW5FcnJvcj9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2Vycm9yLXRpcFwifSxbZS5fbSgyKSxlLl92KFwiIFwiKSxuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19lcnJvci10aXAtdGV4dFwifSxbZS5fdihcIlxcbiAgICAgICAgXCIrZS5fcyhlLm5vZGUubG9hZGluZ0NoaWxkcmVuRXJyb3IpK1wiXFxuICAgICAgICBcIiksbihcImFcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fcmV0cnlcIixhdHRyczp7dGl0bGU6ZS5pbnN0YW5jZS5yZXRyeVRpdGxlfSxvbjp7Y2xpY2s6ZnVuY3Rpb24odCl7ZS5pbnN0YW5jZS5sb2FkT3B0aW9ucyghMSxlLm5vZGUpfX19LFtlLl92KFwiXFxuICAgICAgICAgIFwiK2UuX3MoZS5pbnN0YW5jZS5yZXRyeVRleHQpK1wiXFxuICAgICAgICBcIildKV0pXSk6ZS5fZSgpXSwyKTplLl9lKCldKX0sYWU9W2Z1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24td3JhcHBlclwifSxbbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9faWNvbi13YXJuaW5nXCJ9KV0pfSxmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uLXdyYXBwZXJcIn0sW24oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24tbG9hZGVyXCJ9KV0pfSxmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uLXdyYXBwZXJcIn0sW24oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24tZXJyb3JcIn0pXSl9XSxsZT17cmVuZGVyOnJlLHN0YXRpY1JlbmRlckZuczphZX0sY2U9bGUsdWU9bigwKSxkZT11ZShvZSxjZSwhMSxudWxsLG51bGwsbnVsbCksaGU9ZGUuZXhwb3J0cyxwZT17bmFtZTpcInZ1ZS10cmVlc2VsZWN0XCIsY29tcG9uZW50czp7VHJlZXNlbGVjdE9wdGlvbjpoZX0sbWl4aW5zOlt3XSxjb21wdXRlZDp7VmFsdWVDb21wb25lbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tdWx0aXBsZT9YOmllfX19LGZlPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse3JlZjpcIndyYXBwZXJcIixjbGFzczpbXCJ2dWUtdHJlZXNlbGVjdFwiLHtcInZ1ZS10cmVlc2VsZWN0LS1zaW5nbGVcIjohZS5tdWx0aXBsZSxcInZ1ZS10cmVlc2VsZWN0LS1tdWx0aVwiOmUubXVsdGlwbGUsXCJ2dWUtdHJlZXNlbGVjdC0tc2VhcmNoYWJsZVwiOmUuc2VhcmNoYWJsZSxcInZ1ZS10cmVlc2VsZWN0LS1kaXNhYmxlZFwiOmUuZGlzYWJsZWQsXCJ2dWUtdHJlZXNlbGVjdC0tZm9jdXNlZFwiOmUuaXNGb2N1c2VkLFwidnVlLXRyZWVzZWxlY3QtLWhhcy12YWx1ZVwiOmUuaGFzVmFsdWUsXCJ2dWUtdHJlZXNlbGVjdC0tb3BlblwiOmUuaXNPcGVuLFwidnVlLXRyZWVzZWxlY3QtLW9wZW4tYWJvdmVcIjpcImFib3ZlXCI9PT1lLnByZWZmZXJlZE9wZW5EaXJlY3Rpb24sXCJ2dWUtdHJlZXNlbGVjdC0tb3Blbi1iZWxvd1wiOlwiYmVsb3dcIj09PWUucHJlZmZlcmVkT3BlbkRpcmVjdGlvbixcInZ1ZS10cmVlc2VsZWN0LS1icmFuY2gtbm9kZXMtZGlzYWJsZWRcIjplLmRpc2FibGVCcmFuY2hOb2Rlc31dLG9uOnttb3VzZWRvd246ZS5oYW5kbGVNb3VzZURvd259fSxbbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19jb250cm9sXCJ9LFtuKGUuVmFsdWVDb21wb25lbnQse3JlZjpcInZhbHVlXCIsdGFnOlwiY29tcG9uZW50XCJ9KSxlLl92KFwiIFwiKSxlLnNob3VsZFNob3dDbGVhckljb24/bihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19jbGVhclwiLGF0dHJzOnt0aXRsZTplLm11bHRpcGxlP2UuY2xlYXJBbGxUZXh0OmUuY2xlYXJWYWx1ZVRleHR9LG9uOnttb3VzZWRvd246ZS5oYW5kbGVNb3VzZURvd25PbkNsZWFyfX0sW2UuX3YoXCLDl1wiKV0pOmUuX2UoKSxlLl92KFwiIFwiKSxuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2Fycm93LXdyYXBwZXJcIixvbjp7bW91c2Vkb3duOmUuaGFuZGxlTW91c2VEb3duT25BcnJvd319LFtuKFwic3BhblwiLHtjbGFzczpbXCJ2dWUtdHJlZXNlbGVjdF9fYXJyb3dcIix7XCJ2dWUtdHJlZXNlbGVjdF9fYXJyb3ctLXJvdGF0ZWRcIjplLmlzT3Blbn1dfSldKV0sMSksZS5fdihcIiBcIiksZS5pc09wZW4/bihcImRpdlwiLHtyZWY6XCJtZW51XCIsc3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbWVudVwiLHN0eWxlOnttYXhIZWlnaHQ6ZS5vcHRpbWl6ZWRIZWlnaHQrXCJweFwifX0sW2Uucm9vdE9wdGlvbnNMb2FkZWQ/W2Uuc2VhcmNoaW5nJiZlLm5vU2VhcmNoUmVzdWx0cz9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX25vLXJlc3VsdHMtdGlwXCJ9LFtlLl9tKDApLGUuX3YoXCIgXCIpLG4oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX25vLXJlc3VsdHMtdGlwLXRleHRcIn0sW2UuX3YoZS5fcyhlLm5vUmVzdWx0c1RleHQpKV0pXSk6MD09PWUubm9ybWFsaXplZE9wdGlvbnMubGVuZ3RoP24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbm8tb3B0aW9ucy10aXBcIn0sW2UuX20oMSksZS5fdihcIiBcIiksbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbm8tb3B0aW9ucy10aXAtdGV4dFwifSxbZS5fdihlLl9zKGUubm9PcHRpb25zVGV4dCkpXSldKTpuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2xpc3RcIn0sZS5fbChlLm5vcm1hbGl6ZWRPcHRpb25zLChmdW5jdGlvbihlKXtyZXR1cm4gbihcInRyZWVzZWxlY3Qtb3B0aW9uXCIse2tleTplLmlkLGF0dHJzOntub2RlOmV9fSl9KSkpXTpbZS5sb2FkaW5nUm9vdE9wdGlvbnM/bihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19sb2FkaW5nLXRpcFwifSxbZS5fbSgyKSxlLl92KFwiIFwiKSxuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19sb2FkaW5nLXRpcC10ZXh0XCJ9LFtlLl92KGUuX3MoZS5sb2FkaW5nVGV4dCkpXSldKTplLmxvYWRpbmdSb290T3B0aW9uc0Vycm9yP24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fZXJyb3ItdGlwXCJ9LFtlLl9tKDMpLGUuX3YoXCIgXCIpLG4oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2Vycm9yLXRpcC10ZXh0XCJ9LFtlLl92KFwiXFxuICAgICAgICAgIEZhaWxlZCB0byBsb2FkIG9wdGlvbnM6IFwiK2UuX3MoZS5sb2FkaW5nUm9vdE9wdGlvbnNFcnJvcikrXCIuXFxuICAgICAgICAgIFwiKSxuKFwiYVwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19yZXRyeVwiLGF0dHJzOnt0aXRsZTplLnJldHJ5VGl0bGV9LG9uOntjbGljazpmdW5jdGlvbih0KXtlLmxvYWRPcHRpb25zKCEwKX19fSxbZS5fdihcIlxcbiAgICAgICAgICAgIFwiK2UuX3MoZS5yZXRyeVRleHQpK1wiXFxuICAgICAgICAgIFwiKV0pXSldKTplLl9lKCldXSwyKTplLl9lKCldKX0sdmU9W2Z1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24td3JhcHBlclwifSxbbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9faWNvbi13YXJuaW5nXCJ9KV0pfSxmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uLXdyYXBwZXJcIn0sW24oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24td2FybmluZ1wifSldKX0sZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9faWNvbi13cmFwcGVyXCJ9LFtuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uLWxvYWRlclwifSldKX0sZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9faWNvbi13cmFwcGVyXCJ9LFtuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uLWVycm9yXCJ9KV0pfV0sX2U9e3JlbmRlcjpmZSxzdGF0aWNSZW5kZXJGbnM6dmV9LG1lPV9lLENlPW4oMCkseWU9eSxiZT1DZShwZSxtZSwhMSx5ZSxudWxsLG51bGwpLGdlPWJlLmV4cG9ydHM7bi5kKHQsXCJUcmVlc2VsZWN0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGdlfSkpLG4uZCh0LFwidHJlZXNlbGVjdE1peGluXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHd9KSksbi5kKHQsXCJvcHRpb25NaXhpblwiLChmdW5jdGlvbigpe3JldHVybiBzZX0pKSxuLmQodCxcInZhbHVlTWl4aW5cIiwoZnVuY3Rpb24oKXtyZXR1cm4gRH0pKTt0LmRlZmF1bHQ9Z2V9KSwoZnVuY3Rpb24oZSx0KXt9KSwoZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkoZSx0KXt2YXIgbj10Lmxlbmd0aCxpPWUubGVuZ3RoO2lmKGk+bilyZXR1cm4hMTtpZihpPT09bilyZXR1cm4gZT09PXQ7ZTpmb3IodmFyIHM9MCxvPTA7czxpO3MrKyl7Zm9yKHZhciByPWUuY2hhckNvZGVBdChzKTtvPG47KWlmKHQuY2hhckNvZGVBdChvKyspPT09ciljb250aW51ZSBlO3JldHVybiExfXJldHVybiEwfWUuZXhwb3J0cz1pfSksKGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiBpKGUsdCxuKXtmdW5jdGlvbiBpKHQpe3ZhciBuPUMsaT15O3JldHVybiBDPXk9dm9pZCAwLHg9dCxnPWUuYXBwbHkoaSxuKX1mdW5jdGlvbiB1KGUpe3JldHVybiB4PWUsRT1zZXRUaW1lb3V0KHAsdCksUz9pKGUpOmd9ZnVuY3Rpb24gZChlKXt2YXIgbj1lLU8saT1lLXgscz10LW47cmV0dXJuIE4/YyhzLGItaSk6c31mdW5jdGlvbiBoKGUpe3ZhciBuPWUtTyxpPWUteDtyZXR1cm4gdm9pZCAwPT09T3x8bj49dHx8bjwwfHxOJiZpPj1ifWZ1bmN0aW9uIHAoKXt2YXIgZT1vKCk7aWYoaChlKSlyZXR1cm4gZihlKTtFPXNldFRpbWVvdXQocCxkKGUpKX1mdW5jdGlvbiBmKGUpe3JldHVybiBFPXZvaWQgMCx3JiZDP2koZSk6KEM9eT12b2lkIDAsZyl9ZnVuY3Rpb24gdigpe3ZvaWQgMCE9PUUmJmNsZWFyVGltZW91dChFKSx4PTAsQz1PPXk9RT12b2lkIDB9ZnVuY3Rpb24gXygpe3JldHVybiB2b2lkIDA9PT1FP2c6ZihvKCkpfWZ1bmN0aW9uIG0oKXt2YXIgZT1vKCksbj1oKGUpO2lmKEM9YXJndW1lbnRzLHk9dGhpcyxPPWUsbil7aWYodm9pZCAwPT09RSlyZXR1cm4gdShPKTtpZihOKXJldHVybiBFPXNldFRpbWVvdXQocCx0KSxpKE8pfXJldHVybiB2b2lkIDA9PT1FJiYoRT1zZXRUaW1lb3V0KHAsdCkpLGd9dmFyIEMseSxiLGcsRSxPLHg9MCxTPSExLE49ITEsdz0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoYSk7cmV0dXJuIHQ9cih0KXx8MCxzKG4pJiYoUz0hIW4ubGVhZGluZyxOPVwibWF4V2FpdFwiaW4gbixiPU4/bChyKG4ubWF4V2FpdCl8fDAsdCk6Yix3PVwidHJhaWxpbmdcImluIG4/ISFuLnRyYWlsaW5nOncpLG0uY2FuY2VsPXYsbS5mbHVzaD1fLG19dmFyIHM9bigxKSxvPW4oOCkscj1uKDExKSxhPVwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiLGw9TWF0aC5tYXgsYz1NYXRoLm1pbjtlLmV4cG9ydHM9aX0pLChmdW5jdGlvbihlLHQsbil7dmFyIGk9bigyKSxzPWZ1bmN0aW9uKCl7cmV0dXJuIGkuRGF0ZS5ub3coKX07ZS5leHBvcnRzPXN9KSwoZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbih0KXt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5PYmplY3Q9PT1PYmplY3QmJnQ7ZS5leHBvcnRzPW59KS5jYWxsKHQsbigxMCkpfSksKGZ1bmN0aW9uKGUsdCl7dmFyIG47bj0oZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pKCk7dHJ5e249bnx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfHwoMCxldmFsKShcInRoaXNcIil9Y2F0Y2goZSl7XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmKG49d2luZG93KX1lLmV4cG9ydHM9bn0pLChmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gaShlKXtpZihcIm51bWJlclwiPT10eXBlb2YgZSlyZXR1cm4gZTtpZihvKGUpKXJldHVybiByO2lmKHMoZSkpe3ZhciB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIGUudmFsdWVPZj9lLnZhbHVlT2YoKTplO2U9cyh0KT90K1wiXCI6dH1pZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gMD09PWU/ZTorZTtlPWUucmVwbGFjZShhLFwiXCIpO3ZhciBuPWMudGVzdChlKTtyZXR1cm4gbnx8dS50ZXN0KGUpP2QoZS5zbGljZSgyKSxuPzI6OCk6bC50ZXN0KGUpP3I6K2V9dmFyIHM9bigxKSxvPW4oMTIpLHI9TmFOLGE9L15cXHMrfFxccyskL2csbD0vXlstK10weFswLTlhLWZdKyQvaSxjPS9eMGJbMDFdKyQvaSx1PS9eMG9bMC03XSskL2ksZD1wYXJzZUludDtlLmV4cG9ydHM9aX0pLChmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gaShlKXtyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgZXx8byhlKSYmcyhlKT09cn12YXIgcz1uKDEzKSxvPW4oMTYpLHI9XCJbb2JqZWN0IFN5bWJvbF1cIjtlLmV4cG9ydHM9aX0pLChmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gaShlKXtyZXR1cm4gbnVsbD09ZT92b2lkIDA9PT1lP2w6YTpjJiZjIGluIE9iamVjdChlKT9vKGUpOnIoZSl9dmFyIHM9bigzKSxvPW4oMTQpLHI9bigxNSksYT1cIltvYmplY3QgTnVsbF1cIixsPVwiW29iamVjdCBVbmRlZmluZWRdXCIsYz1zP3MudG9TdHJpbmdUYWc6dm9pZCAwO2UuZXhwb3J0cz1pfSksKGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiBpKGUpe3ZhciB0PXIuY2FsbChlLGwpLG49ZVtsXTt0cnl7ZVtsXT12b2lkIDA7dmFyIGk9ITB9Y2F0Y2goZSl7fXZhciBzPWEuY2FsbChlKTtyZXR1cm4gaSYmKHQ/ZVtsXT1uOmRlbGV0ZSBlW2xdKSxzfXZhciBzPW4oMyksbz1PYmplY3QucHJvdG90eXBlLHI9by5oYXNPd25Qcm9wZXJ0eSxhPW8udG9TdHJpbmcsbD1zP3MudG9TdHJpbmdUYWc6dm9pZCAwO2UuZXhwb3J0cz1pfSksKGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbihlKXtyZXR1cm4gcy5jYWxsKGUpfXZhciBpPU9iamVjdC5wcm90b3R5cGUscz1pLnRvU3RyaW5nO2UuZXhwb3J0cz1ufSksKGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbihlKXtyZXR1cm4gbnVsbCE9ZSYmXCJvYmplY3RcIj09dHlwZW9mIGV9ZS5leHBvcnRzPW59KV0pfSkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9AcmlvcGhhZS92dWUtdHJlZXNlbGVjdC9kaXN0L3Z1ZS10cmVlc2VsZWN0Lm1pbi5qcyIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJtYXRlcmlhbC10YWJsZVwiPlxyXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyIHRhYmxlLXNtXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cInRoZWFkLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3M9XCJjb2wtMVwiPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzPVwiY29sLThcIj5Uw6puPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzcz1cImNvbC0xXCI+xJDGoW4gduG7izwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3M9XCJjb2wtMlwiPkjDo25nPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDxtYXRlcmlhbC1yb3cgdi1mb3I9XCIocm93LCBpbmRleCkgaW4gcm93c1wiIDpyb3c9XCJyb3dcIiA6a2V5PVwiaW5kZXhcIj48L21hdGVyaWFsLXJvdz5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgVHJlZXNlbGVjdCBmcm9tICdAcmlvcGhhZS92dWUtdHJlZXNlbGVjdCc7XHJcbmltcG9ydCBNYXRlcmlhbFJvdyBmcm9tICcuL1Jvd3MvTWF0ZXJpYWxSb3cnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByb3dzOiBmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLmF4aW9zLmdldChgJHt0aGlzLiRzdG9yZS5zdGF0ZS5hcGlCYXNlfS9tYXRlcmlhbC9jYXRlZ29yaWVzYCkudGhlbiggcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdVUERBVEVfQ0FURUdPUllfTElTVCcsIHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYXhpb3MuZ2V0KGAke3RoaXMuJHN0b3JlLnN0YXRlLmFwaUJhc2V9L21hdGVyaWFsYCkudGhlbiggcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCggZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgTWF0ZXJpYWxSb3csXHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGVyaWFscy52dWU/N2E5YWY3NWUiLCI8dGVtcGxhdGU+XHJcbiAgICAgICAgPHRyIHYtaWY9XCJkZXB0aCA9PSAwXCI+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiIGNvbHNwYW49XCI0XCI+e3tyb3cubmFtZX19PC90aD5cclxuICAgICAgICA8L3RyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgcm93OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICAgICAgZGVmYXVsdDoge30sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXB0aDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZT8xNWNjZjlkYSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiTWF0ZXJpYWxSb3cudnVlXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMDA0NGJkZjJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTAwNDRiZGYyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jvd3MvTWF0ZXJpYWxSb3cudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiTWF0ZXJpYWxzLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlZjEwNGM1XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGVyaWFscy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlZjEwNGM1XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGVyaWFscy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICB2YXIgZnVuY3Rpb25hbCA9IG9wdGlvbnMuZnVuY3Rpb25hbFxuICAgIHZhciBleGlzdGluZyA9IGZ1bmN0aW9uYWxcbiAgICAgID8gb3B0aW9ucy5yZW5kZXJcbiAgICAgIDogb3B0aW9ucy5iZWZvcmVDcmVhdGVcblxuICAgIGlmICghZnVuY3Rpb25hbCkge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBleGlzdGluZyhoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmRlcHRoID09IDBcbiAgICA/IF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwicm93XCIsIGNvbHNwYW46IFwiNFwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnJvdy5uYW1lKSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wMDQ0YmRmMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDA0NGJkZjJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jvd3MvTWF0ZXJpYWxSb3cudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTAwNDRiZGYyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtdGFibGVcIiB9LCBbXG4gICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyIHRhYmxlLXNtXCIgfSwgW1xuICAgICAgX3ZtLl9tKDAsIGZhbHNlLCBmYWxzZSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgX3ZtLl9sKF92bS5yb3dzLCBmdW5jdGlvbihyb3csIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwibWF0ZXJpYWwtcm93XCIsIHsga2V5OiBpbmRleCwgYXR0cnM6IHsgcm93OiByb3cgfSB9KVxuICAgICAgICB9KVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGhlYWQtbGlnaHRcIiB9LCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xXCIsIGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIiNcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtOFwiLCBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJUw6puXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTFcIiwgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwixJDGoW4gduG7i1wiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0yXCIsIGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIkjDo25nXCIpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTVlZjEwNGM1XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZWYxMDRjNVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWF0ZXJpYWxzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi01ZWYxMDRjNVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWF0ZXJpYWxzLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDA0NGJkZjJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL01hdGVyaWFsUm93LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiODE2OWUxM2NcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDA0NGJkZjJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL01hdGVyaWFsUm93LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wMDQ0YmRmMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vTWF0ZXJpYWxSb3cudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTAwNDRiZGYyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jvd3MvTWF0ZXJpYWxSb3cudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTAwNDRiZGYyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jvd3MvTWF0ZXJpYWxSb3cudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWYxMDRjNVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vTWF0ZXJpYWxzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMzEwNzMzOGZcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWVmMTA0YzVcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL01hdGVyaWFscy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWVmMTA0YzVcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL01hdGVyaWFscy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWVmMTA0YzVcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWF0ZXJpYWxzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01ZWYxMDRjNVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NYXRlcmlhbHMudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxudmFyIGxpc3RUb1N0eWxlcyA9IHJlcXVpcmUoJy4vbGlzdFRvU3R5bGVzJylcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLXZ1ZS1zc3ItaWR+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWVmMTA0YzVcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL01hdGVyaWFscy52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwibGFzdCAyIHZlcnNpb25zXFxcIixcXFwiPiA1JSBpbiBCRVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9LFxcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCIsXFxcInRyYW5zZm9ybS1pbmxpbmUtZW52aXJvbm1lbnQtdmFyaWFibGVzXFxcIl19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wJmJ1c3RDYWNoZSEuL01hdGVyaWFscy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVlZjEwNGM1XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL01hdGVyaWFscy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxNYXRlcmlhbHMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgIHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7ICBjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZWYxMDRjNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVlZjEwNGM1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuJyArICcgIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NYXRlcmlhbHMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NYXRlcmlhbHMudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDA0NGJkZjJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL01hdGVyaWFsUm93LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlbnZcXFwiLHtcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCJsYXN0IDIgdmVyc2lvbnNcXFwiLFxcXCI+IDUlIGluIEJFXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX0sXFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIixcXFwidHJhbnNmb3JtLWlubGluZS1lbnZpcm9ubWVudC12YXJpYWJsZXNcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAmYnVzdENhY2hlIS4vTWF0ZXJpYWxSb3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wMDQ0YmRmMlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi9NYXRlcmlhbFJvdy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxSb3dzXFxcXE1hdGVyaWFsUm93LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7ICByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkgeyAgY29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDA0NGJkZjJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wMDQ0YmRmMlwiLCBDb21wb25lbnQub3B0aW9ucylcbicgKyAnICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jvd3MvTWF0ZXJpYWxSb3cudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=