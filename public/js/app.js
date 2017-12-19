webpackJsonp([7],{

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
//
//
//
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
        row: {
            type: Object,
            default: {}
        }
    },
    data: function data() {
        return {
            expading_status: false
        };
    },

    methods: {
        expand_me: function expand_me() {
            if (this.row.children !== null) {
                this.expading_status = !this.expading_status;
            }
        }
    },
    computed: {
        is_category: function is_category() {
            return this.row.type == "category";
        },
        classes: function classes() {
            return ['depth-' + this.row.depth, {
                expanded: this.expading_status,
                expandable: this.row.children !== null,
                category: this.row.type === 'category',
                'row-inside': this.row.type === 'category'
            }];
        }
    },
    mounted: function mounted() {
        this.expading_status = this.row.expanded;
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0044bdf2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Rows/MaterialRow.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"MaterialRow.vue","sourceRoot":""}]);

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
  return _c(
    "div",
    { staticClass: "table-row" },
    [
      _vm.row.type === "category"
        ? _c("div", { class: _vm.classes, on: { click: _vm.expand_me } }, [
            _vm._v("\n        " + _vm._s(_vm.row.name) + "\n    ")
          ])
        : _c("div", { staticClass: "row-inside" }, [
            _c("div", { staticClass: "col1" }, [_vm._v(_vm._s(_vm.row.id))]),
            _vm._v(" "),
            _c("div", { staticClass: "col2" }, [_vm._v(_vm._s(_vm.row.name))]),
            _vm._v(" "),
            _c("div", { staticClass: "col3" }, [_vm._v(_vm._s(_vm.row.per))]),
            _vm._v(" "),
            _c("div", { staticClass: "col4" }, [_vm._v("vnd")]),
            _vm._v(" "),
            _c("div", { staticClass: "col5" }, [_vm._v("0")]),
            _vm._v(" "),
            _c("div", { staticClass: "col6" }, [_vm._v(_vm._s(_vm.row.brand))])
          ]),
      _vm._v(" "),
      _vm.expading_status
        ? _vm._l(_vm.row.children, function(item) {
            return _c("material-row", { key: item.id, attrs: { row: item } })
          })
        : _vm._e()
    ],
    2
  )
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

/***/ "./node_modules/vue-swal/dist/vue-swal.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * vue-swal v0.0.3
 * (c) 2017 Antério Vieira
 * Released under the MIT License.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["VueSwal"] = factory();else root["VueSwal"] = factory();
})(this, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId]) {
					/******/return installedModules[moduleId].exports;
					/******/
				}
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/i: moduleId,
					/******/l: false,
					/******/exports: {}
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.l = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // identity function for calling harmony imports with the correct context
			/******/__webpack_require__.i = function (value) {
				return value;
			};
			/******/
			/******/ // define getter function for harmony exports
			/******/__webpack_require__.d = function (exports, name, getter) {
				/******/if (!__webpack_require__.o(exports, name)) {
					/******/Object.defineProperty(exports, name, {
						/******/configurable: false,
						/******/enumerable: true,
						/******/get: getter
						/******/ });
					/******/
				}
				/******/
			};
			/******/
			/******/ // getDefaultExport function for compatibility with non-harmony modules
			/******/__webpack_require__.n = function (module) {
				/******/var getter = module && module.__esModule ?
				/******/function getDefault() {
					return module['default'];
				} :
				/******/function getModuleExports() {
					return module;
				};
				/******/__webpack_require__.d(getter, 'a', getter);
				/******/return getter;
				/******/
			};
			/******/
			/******/ // Object.prototype.hasOwnProperty.call
			/******/__webpack_require__.o = function (object, property) {
				return Object.prototype.hasOwnProperty.call(object, property);
			};
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(__webpack_require__.s = 1);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			!function (t, e) {
				true ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) ? exports.swal = e() : t.swal = e();
			}(this, function () {
				return function (t) {
					function e(o) {
						if (n[o]) return n[o].exports;var r = n[o] = { i: o, l: !1, exports: {} };return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
					}var n = {};return e.m = t, e.c = n, e.d = function (t, n, o) {
						e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: o });
					}, e.n = function (t) {
						var n = t && t.__esModule ? function () {
							return t.default;
						} : function () {
							return t;
						};return e.d(n, "a", n), n;
					}, e.o = function (t, e) {
						return Object.prototype.hasOwnProperty.call(t, e);
					}, e.p = "", e(e.s = 8);
				}([function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = "swal-button";e.CLASS_NAMES = { MODAL: "swal-modal", OVERLAY: "swal-overlay", SHOW_MODAL: "swal-overlay--show-modal", MODAL_TITLE: "swal-title", MODAL_TEXT: "swal-text", ICON: "swal-icon", ICON_CUSTOM: "swal-icon--custom", CONTENT: "swal-content", FOOTER: "swal-footer", BUTTON_CONTAINER: "swal-button-container", BUTTON: o, CONFIRM_BUTTON: o + "--confirm", CANCEL_BUTTON: o + "--cancel", DANGER_BUTTON: o + "--danger", BUTTON_LOADING: o + "--loading", BUTTON_LOADER: o + "__loader" }, e.default = e.CLASS_NAMES;
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 }), e.getNode = function (t) {
						var e = "." + t;return document.querySelector(e);
					}, e.stringToNode = function (t) {
						var e = document.createElement("div");return e.innerHTML = t.trim(), e.firstChild;
					}, e.insertAfter = function (t, e) {
						var n = e.nextSibling;e.parentNode.insertBefore(t, n);
					}, e.removeNode = function (t) {
						t.parentElement.removeChild(t);
					}, e.throwErr = function (t) {
						throw t = t.replace(/ +(?= )/g, ""), "SweetAlert: " + (t = t.trim());
					}, e.isPlainObject = function (t) {
						if ("[object Object]" !== Object.prototype.toString.call(t)) return !1;var e = Object.getPrototypeOf(t);return null === e || e === Object.prototype;
					}, e.ordinalSuffixOf = function (t) {
						var e = t % 10,
						    n = t % 100;return 1 === e && 11 !== n ? t + "st" : 2 === e && 12 !== n ? t + "nd" : 3 === e && 13 !== n ? t + "rd" : t + "th";
					};
				}, function (t, e, n) {
					"use strict";
					function o(t) {
						for (var n in t) {
							e.hasOwnProperty(n) || (e[n] = t[n]);
						}
					}Object.defineProperty(e, "__esModule", { value: !0 }), o(n(18));var r = n(19);e.overlayMarkup = r.default, o(n(20)), o(n(21)), o(n(22));var a = n(0),
					    i = a.default.MODAL_TITLE,
					    s = a.default.MODAL_TEXT,
					    l = a.default.ICON,
					    c = a.default.FOOTER;e.iconMarkup = '\n  <div class="' + l + '"></div>', e.titleMarkup = '\n  <div class="' + i + '"></div>\n', e.textMarkup = '\n  <div class="' + s + '"></div>', e.footerMarkup = '\n  <div class="' + c + '"></div>\n';
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(1);e.CONFIRM_KEY = "confirm", e.CANCEL_KEY = "cancel";var r = { visible: !0, text: null, value: null, className: "", closeModal: !0 },
					    a = Object.assign({}, r, { visible: !1, text: "Cancel", value: null }),
					    i = Object.assign({}, r, { text: "OK", value: !0 });e.defaultButtonList = { cancel: a, confirm: i };var s = function s(t) {
						switch (t) {case e.CONFIRM_KEY:
								return i;case e.CANCEL_KEY:
								return a;default:
								var n = t.charAt(0).toUpperCase() + t.slice(1);return Object.assign({}, r, { text: n, value: t });}
					},
					    l = function l(t, e) {
						var n = s(t);return !0 === e ? Object.assign({}, n, { visible: !0 }) : "string" == typeof e ? Object.assign({}, n, { visible: !0, text: e }) : o.isPlainObject(e) ? Object.assign({ visible: !0 }, n, e) : Object.assign({}, n, { visible: !1 });
					},
					    c = function c(t) {
						for (var e = {}, n = 0, o = Object.keys(t); n < o.length; n++) {
							var r = o[n],
							    i = t[r],
							    s = l(r, i);e[r] = s;
						}return e.cancel || (e.cancel = a), e;
					},
					    u = function u(t) {
						var n = {};switch (t.length) {case 1:
								n[e.CANCEL_KEY] = Object.assign({}, a, { visible: !1 });break;case 2:
								n[e.CANCEL_KEY] = l(e.CANCEL_KEY, t[0]), n[e.CONFIRM_KEY] = l(e.CONFIRM_KEY, t[1]);break;default:
								o.throwErr("Invalid number of 'buttons' in array (" + t.length + ").\n      If you want more than 2 buttons, you need to use an object!");}return n;
					};e.getButtonListOpts = function (t) {
						var n = e.defaultButtonList;return "string" == typeof t ? n[e.CONFIRM_KEY] = l(e.CONFIRM_KEY, t) : Array.isArray(t) ? n = u(t) : o.isPlainObject(t) ? n = c(t) : !0 === t ? n = u([!0, !0]) : !1 === t ? n = u([!1, !1]) : void 0 === t && (n = e.defaultButtonList), n;
					};
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(1),
					    r = n(2),
					    a = n(0),
					    i = a.default.MODAL,
					    s = a.default.OVERLAY,
					    l = n(23),
					    c = n(24),
					    u = n(25),
					    d = n(26);e.injectElIntoModal = function (t) {
						var e = o.getNode(i),
						    n = o.stringToNode(t);return e.appendChild(n), n;
					};var f = function f(t) {
						t.className = i, t.textContent = "";
					},
					    p = function p(t, e) {
						f(t);var n = e.className;n && t.classList.add(n);
					};e.initModalContent = function (t) {
						var e = o.getNode(i);p(e, t), l.default(t.icon), c.initTitle(t.title), c.initText(t.text), d.default(t.content), u.default(t.buttons, t.dangerMode);
					};var b = function b() {
						var t = o.getNode(s),
						    e = o.stringToNode(r.modalMarkup);t.appendChild(e);
					};e.default = b;
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(3),
					    r = { isOpen: !1, promise: null, actions: {}, timer: null },
					    a = Object.assign({}, r);e.resetState = function () {
						a = Object.assign({}, r);
					}, e.setActionValue = function (t) {
						if ("string" == typeof t) return i(o.CONFIRM_KEY, t);for (var e in t) {
							i(e, t[e]);
						}
					};var i = function i(t, e) {
						a.actions[t] || (a.actions[t] = {}), Object.assign(a.actions[t], { value: e });
					};e.setActionOptionsFor = function (t, e) {
						var n = (void 0 === e ? {} : e).closeModal,
						    o = void 0 === n || n;Object.assign(a.actions[t], { closeModal: o });
					}, e.default = a;
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(1),
					    r = n(3),
					    a = n(0),
					    i = a.default.OVERLAY,
					    s = a.default.SHOW_MODAL,
					    l = a.default.BUTTON,
					    c = a.default.BUTTON_LOADING,
					    u = n(5);e.openModal = function () {
						o.getNode(i).classList.add(s), u.default.isOpen = !0;
					};var d = function d() {
						o.getNode(i).classList.remove(s), u.default.isOpen = !1;
					};e.onAction = function (t) {
						void 0 === t && (t = r.CANCEL_KEY);var e = u.default.actions[t],
						    n = e.value;if (!1 === e.closeModal) {
							var a = l + "--" + t;o.getNode(a).classList.add(c);
						} else d();u.default.promise.resolve(n);
					}, e.getState = function () {
						var t = Object.assign({}, u.default);return delete t.promise, delete t.timer, t;
					}, e.stopLoading = function () {
						for (var t = document.querySelectorAll("." + l), e = 0; e < t.length; e++) {
							t[e].classList.remove(c);
						}
					};
				}, function (t, e) {
					var n;n = function () {
						return this;
					}();try {
						n = n || Function("return this")() || (0, eval)("this");
					} catch (t) {
						"object" == (typeof window === 'undefined' ? 'undefined' : _typeof(window)) && (n = window);
					}t.exports = n;
				}, function (t, e, n) {
					(function (e) {
						t.exports = e.sweetAlert = n(9);
					}).call(e, n(7));
				}, function (t, e, n) {
					(function (e) {
						t.exports = e.swal = n(10);
					}).call(e, n(7));
				}, function (t, e, n) {
					"undefined" != typeof window && n(11);var o = n(16).default;t.exports = o;
				}, function (t, e, n) {
					var o = n(12);"string" == typeof o && (o = [[t.i, o, ""]]);var r = { insertAt: "top" };r.transform = void 0;n(14)(o, r);o.locals && (t.exports = o.locals);
				}, function (t, e, n) {
					e = t.exports = n(13)(void 0), e.push([t.i, '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button[not:disabled]:hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel[not:disabled]:hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger[not:disabled]:hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;-webkit-transition:border-color .2s;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);-webkit-transition:background .2s;transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:scroll;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;-webkit-transition:opacity .3s;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;-webkit-transition:opacity .2s,-webkit-transform .3s;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}', ""]);
				}, function (t, e) {
					function n(t, e) {
						var n = t[1] || "",
						    r = t[3];if (!r) return n;if (e && "function" == typeof btoa) {
							var a = o(r);return [n].concat(r.sources.map(function (t) {
								return "/*# sourceURL=" + r.sourceRoot + t + " */";
							})).concat([a]).join("\n");
						}return [n].join("\n");
					}function o(t) {
						return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */";
					}t.exports = function (t) {
						var e = [];return e.toString = function () {
							return this.map(function (e) {
								var o = n(e, t);return e[2] ? "@media " + e[2] + "{" + o + "}" : o;
							}).join("");
						}, e.i = function (t, n) {
							"string" == typeof t && (t = [[null, t, ""]]);for (var o = {}, r = 0; r < this.length; r++) {
								var a = this[r][0];"number" == typeof a && (o[a] = !0);
							}for (r = 0; r < t.length; r++) {
								var i = t[r];"number" == typeof i[0] && o[i[0]] || (n && !i[2] ? i[2] = n : n && (i[2] = "(" + i[2] + ") and (" + n + ")"), e.push(i));
							}
						}, e;
					};
				}, function (t, e, n) {
					function o(t, e) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n],
							    r = b[o.id];if (r) {
								r.refs++;for (var a = 0; a < r.parts.length; a++) {
									r.parts[a](o.parts[a]);
								}for (; a < o.parts.length; a++) {
									r.parts.push(u(o.parts[a], e));
								}
							} else {
								for (var i = [], a = 0; a < o.parts.length; a++) {
									i.push(u(o.parts[a], e));
								}b[o.id] = { id: o.id, refs: 1, parts: i };
							}
						}
					}function r(t, e) {
						for (var n = [], o = {}, r = 0; r < t.length; r++) {
							var a = t[r],
							    i = e.base ? a[0] + e.base : a[0],
							    s = a[1],
							    l = a[2],
							    c = a[3],
							    u = { css: s, media: l, sourceMap: c };o[i] ? o[i].parts.push(u) : n.push(o[i] = { id: i, parts: [u] });
						}return n;
					}function a(t, e) {
						var n = g(t.insertInto);if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o = x[x.length - 1];if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), x.push(e);else {
							if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e);
						}
					}function i(t) {
						if (null === t.parentNode) return !1;t.parentNode.removeChild(t);var e = x.indexOf(t);e >= 0 && x.splice(e, 1);
					}function s(t) {
						var e = document.createElement("style");return t.attrs.type = "text/css", c(e, t.attrs), a(t, e), e;
					}function l(t) {
						var e = document.createElement("link");return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", c(e, t.attrs), a(t, e), e;
					}function c(t, e) {
						Object.keys(e).forEach(function (n) {
							t.setAttribute(n, e[n]);
						});
					}function u(t, e) {
						var n, o, r, a;if (e.transform && t.css) {
							if (!(a = e.transform(t.css))) return function () {};t.css = a;
						}if (e.singleton) {
							var c = w++;n = v || (v = s(e)), o = d.bind(null, n, c, !1), r = d.bind(null, n, c, !0);
						} else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(e), o = p.bind(null, n, e), r = function r() {
							i(n), n.href && URL.revokeObjectURL(n.href);
						}) : (n = s(e), o = f.bind(null, n), r = function r() {
							i(n);
						});return o(t), function (e) {
							if (e) {
								if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;o(t = e);
							} else r();
						};
					}function d(t, e, n, o) {
						var r = n ? "" : o.css;if (t.styleSheet) t.styleSheet.cssText = y(e, r);else {
							var a = document.createTextNode(r),
							    i = t.childNodes;i[e] && t.removeChild(i[e]), i.length ? t.insertBefore(a, i[e]) : t.appendChild(a);
						}
					}function f(t, e) {
						var n = e.css,
						    o = e.media;if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;else {
							for (; t.firstChild;) {
								t.removeChild(t.firstChild);
							}t.appendChild(document.createTextNode(n));
						}
					}function p(t, e, n) {
						var o = n.css,
						    r = n.sourceMap,
						    a = void 0 === e.convertToAbsoluteUrls && r;(e.convertToAbsoluteUrls || a) && (o = h(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");var i = new Blob([o], { type: "text/css" }),
						    s = t.href;t.href = URL.createObjectURL(i), s && URL.revokeObjectURL(s);
					}var b = {},
					    m = function (t) {
						var e;return function () {
							return void 0 === e && (e = t.apply(this, arguments)), e;
						};
					}(function () {
						return window && document && document.all && !window.atob;
					}),
					    g = function (t) {
						var e = {};return function (n) {
							return void 0 === e[n] && (e[n] = t.call(this, n)), e[n];
						};
					}(function (t) {
						return document.querySelector(t);
					}),
					    v = null,
					    w = 0,
					    x = [],
					    h = n(15);t.exports = function (t, e) {
						if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === 'undefined' ? 'undefined' : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");e = e || {}, e.attrs = "object" == _typeof(e.attrs) ? e.attrs : {}, e.singleton || (e.singleton = m()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");var n = r(t, e);return o(n, e), function (t) {
							for (var a = [], i = 0; i < n.length; i++) {
								var s = n[i],
								    l = b[s.id];l.refs--, a.push(l);
							}if (t) {
								o(r(t, e), e);
							}for (var i = 0; i < a.length; i++) {
								var l = a[i];if (0 === l.refs) {
									for (var c = 0; c < l.parts.length; c++) {
										l.parts[c]();
									}delete b[l.id];
								}
							}
						};
					};var y = function () {
						var t = [];return function (e, n) {
							return t[e] = n, t.filter(Boolean).join("\n");
						};
					}();
				}, function (t, e) {
					t.exports = function (t) {
						var e = "undefined" != typeof window && window.location;if (!e) throw new Error("fixUrls requires window.location");if (!t || "string" != typeof t) return t;var n = e.protocol + "//" + e.host,
						    o = n + e.pathname.replace(/\/[^\/]*$/, "/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
							var r = e.trim().replace(/^"(.*)"$/, function (t, e) {
								return e;
							}).replace(/^'(.*)'$/, function (t, e) {
								return e;
							});if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return t;var a;return a = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(a) + ")";
						});
					};
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(17),
					    r = n(6),
					    a = n(5),
					    i = n(29),
					    s = function s() {
						for (var t = [], e = 0; e < arguments.length; e++) {
							t[e] = arguments[e];
						}if ("undefined" != typeof window) {
							var n = i.getOpts.apply(void 0, t);return new Promise(function (t, e) {
								a.default.promise = { resolve: t, reject: e }, o.default(n), setTimeout(function () {
									r.openModal();
								});
							});
						}
					};s.close = r.onAction, s.getState = r.getState, s.setActionValue = a.setActionValue, s.stopLoading = r.stopLoading, s.setDefaults = i.setDefaults, e.default = s;
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(1),
					    r = n(0),
					    a = r.default.MODAL,
					    i = n(4),
					    s = n(27),
					    l = n(28),
					    c = n(1);e.init = function (t) {
						o.getNode(a) || (document.body || c.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"), s.default(), i.default()), i.initModalContent(t), l.default(t);
					}, e.default = e.init;
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(0),
					    r = o.default.MODAL;e.modalMarkup = '\n  <div class="' + r + '"></div>', e.default = e.modalMarkup;
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(0),
					    r = o.default.OVERLAY,
					    a = '<div \n    class="' + r + '"\n    tabIndex="-1">\n  </div>';e.default = a;
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(0),
					    r = o.default.ICON;e.errorIconMarkup = function () {
						var t = r + "--error",
						    e = t + "__line";return '\n    <div class="' + t + '__x-mark">\n      <span class="' + e + " " + e + '--left"></span>\n      <span class="' + e + " " + e + '--right"></span>\n    </div>\n  ';
					}, e.warningIconMarkup = function () {
						var t = r + "--warning";return '\n    <span class="' + t + '__body">\n      <span class="' + t + '__dot"></span>\n    </span>\n  ';
					}, e.successIconMarkup = function () {
						var t = r + "--success";return '\n    <span class="' + t + "__line " + t + '__line--long"></span>\n    <span class="' + t + "__line " + t + '__line--tip"></span>\n\n    <div class="' + t + '__ring"></div>\n    <div class="' + t + '__hide-corners"></div>\n  ';
					};
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(0),
					    r = o.default.CONTENT;e.contentMarkup = '\n  <div class="' + r + '">\n\n  </div>\n';
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(0),
					    r = o.default.BUTTON_CONTAINER,
					    a = o.default.BUTTON,
					    i = o.default.BUTTON_LOADER;e.buttonMarkup = '\n  <div class="' + r + '">\n\n    <button\n      class="' + a + '"\n    ></button>\n\n    <div class="' + i + '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n';
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(4),
					    r = n(2),
					    a = n(0),
					    i = a.default.ICON,
					    s = a.default.ICON_CUSTOM,
					    l = ["error", "warning", "success", "info"],
					    c = { error: r.errorIconMarkup(), warning: r.warningIconMarkup(), success: r.successIconMarkup() },
					    u = function u(t, e) {
						var n = i + "--" + t;e.classList.add(n);var o = c[t];o && (e.innerHTML = o);
					},
					    d = function d(t, e) {
						e.classList.add(s);var n = document.createElement("img");n.src = t, e.appendChild(n);
					},
					    f = function f(t) {
						if (t) {
							var e = o.injectElIntoModal(r.iconMarkup);l.includes(t) ? u(t, e) : d(t, e);
						}
					};e.default = f;
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(2),
					    r = n(4),
					    a = function a(t) {
						navigator.userAgent.includes("AppleWebKit") && (t.style.display = "none", t.offsetHeight, t.style.display = "");
					};e.initTitle = function (t) {
						if (t) {
							var e = r.injectElIntoModal(o.titleMarkup);e.textContent = t, a(e);
						}
					}, e.initText = function (t) {
						if (t) {
							var e = r.injectElIntoModal(o.textMarkup);e.textContent = t, a(e);
						}
					};
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(1),
					    r = n(4),
					    a = n(0),
					    i = a.default.BUTTON,
					    s = a.default.DANGER_BUTTON,
					    l = n(3),
					    c = n(2),
					    u = n(6),
					    d = n(5),
					    f = function f(t, e, n) {
						var r = e.text,
						    a = e.value,
						    f = e.className,
						    p = e.closeModal,
						    b = o.stringToNode(c.buttonMarkup),
						    m = b.querySelector("." + i),
						    g = i + "--" + t;m.classList.add(g), f && m.classList.add(f), n && t === l.CONFIRM_KEY && m.classList.add(s), m.textContent = r;var v = {};return v[t] = a, d.setActionValue(v), d.setActionOptionsFor(t, { closeModal: p }), m.addEventListener("click", function () {
							return u.onAction(t);
						}), b;
					},
					    p = function p(t, e) {
						var n = r.injectElIntoModal(c.footerMarkup);for (var o in t) {
							var a = t[o],
							    i = f(o, a, e);a.visible && n.appendChild(i);
						}0 === n.children.length && n.remove();
					};e.default = p;
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(3),
					    r = n(4),
					    a = n(2),
					    i = n(5),
					    s = n(6),
					    l = n(0),
					    c = l.default.CONTENT,
					    u = function u(t) {
						t.addEventListener("input", function (t) {
							var e = t.target,
							    n = e.value;i.setActionValue(n);
						}), t.addEventListener("keyup", function (t) {
							if ("Enter" === t.key) return s.onAction(o.CONFIRM_KEY);
						}), setTimeout(function () {
							t.focus(), i.setActionValue("");
						}, 0);
					},
					    d = function d(t, e, n) {
						var o = document.createElement(e),
						    r = c + "__" + e;o.classList.add(r);for (var a in n) {
							var i = n[a];o[a] = i;
						}"input" === e && u(o), t.appendChild(o);
					},
					    f = function f(t) {
						if (t) {
							var e = r.injectElIntoModal(a.contentMarkup),
							    n = t.element,
							    o = t.attributes;"string" == typeof n ? d(e, n, o) : e.appendChild(n);
						}
					};e.default = f;
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(1),
					    r = n(2),
					    a = function a() {
						var t = o.stringToNode(r.overlayMarkup);document.body.appendChild(t);
					};e.default = a;
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(5),
					    r = n(6),
					    a = n(1),
					    i = n(3),
					    s = n(0),
					    l = s.default.MODAL,
					    c = s.default.BUTTON,
					    u = s.default.OVERLAY,
					    d = function d(t) {
						t.preventDefault(), g();
					},
					    f = function f(t) {
						t.preventDefault(), v();
					},
					    p = function p(t) {
						if (o.default.isOpen) switch (t.key) {case "Escape":
								return r.onAction(i.CANCEL_KEY);}
					},
					    b = function b(t) {
						if (o.default.isOpen) switch (t.key) {case "Tab":
								return d(t);}
					},
					    m = function m(t) {
						if (o.default.isOpen) return "Tab" === t.key && t.shiftKey ? f(t) : void 0;
					},
					    g = function g() {
						var t = a.getNode(c);t && (t.tabIndex = 0, t.focus());
					},
					    v = function v() {
						var t = a.getNode(l),
						    e = t.querySelectorAll("." + c),
						    n = e.length - 1,
						    o = e[n];o && o.focus();
					},
					    w = function w(t) {
						t[t.length - 1].addEventListener("keydown", b);
					},
					    x = function x(t) {
						t[0].addEventListener("keydown", m);
					},
					    h = function h() {
						var t = a.getNode(l),
						    e = t.querySelectorAll("." + c);e.length && (w(e), x(e));
					},
					    y = function y(t) {
						if (a.getNode(u) === t.target) return r.onAction(i.CANCEL_KEY);
					},
					    k = function k(t) {
						var e = a.getNode(u);e.removeEventListener("click", y), t && e.addEventListener("click", y);
					},
					    O = function O(t) {
						o.default.timer && clearTimeout(o.default.timer), t && (o.default.timer = window.setTimeout(function () {
							return r.onAction(i.CANCEL_KEY);
						}, t));
					},
					    _ = function _(t) {
						t.closeOnEsc ? document.addEventListener("keyup", p) : document.removeEventListener("keyup", p), t.dangerMode ? g() : v(), h(), k(t.closeOnClickOutside), O(t.timer);
					};e.default = _;
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(1),
					    r = n(3),
					    a = n(30),
					    i = { title: null, text: null, icon: null, buttons: r.defaultButtonList, content: null, className: null, closeOnClickOutside: !0, closeOnEsc: !0, dangerMode: !1, timer: null },
					    s = Object.assign({}, i);e.setDefaults = function (t) {
						s = Object.assign({}, i, t);
					};var l = function l(t) {
						var e = t && t.button,
						    n = t && t.buttons;return void 0 !== e && void 0 !== n && o.throwErr("Cannot set both 'button' and 'buttons' options!"), void 0 !== e ? { confirm: e } : n;
					},
					    c = function c(t) {
						return o.ordinalSuffixOf(t + 1);
					},
					    u = function u(t, e) {
						o.throwErr(c(e) + " argument ('" + t + "') is invalid");
					},
					    d = function d(t, e) {
						var n = t + 1,
						    r = e[n];o.isPlainObject(r) || void 0 === r || o.throwErr("Expected " + c(n) + " argument ('" + r + "') to be a plain object");
					},
					    f = function f(t, e) {
						var n = t + 1,
						    r = e[n];void 0 !== r && o.throwErr("Unexpected " + c(n) + " argument (" + r + ")");
					},
					    p = function p(t, e, n, r) {
						var a = typeof e === 'undefined' ? 'undefined' : _typeof(e),
						    i = "string" === a,
						    s = e instanceof Element;if (i) {
							if (0 === n) return { text: e };if (1 === n) return { text: e, title: r[0] };if (2 === n) return d(n, r), { icon: e };u(e, n);
						} else {
							if (s && 0 === n) return d(n, r), { content: e };if (o.isPlainObject(e)) return f(n, r), e;u(e, n);
						}
					};e.getOpts = function () {
						for (var t = [], e = 0; e < arguments.length; e++) {
							t[e] = arguments[e];
						}var n = {};t.forEach(function (e, o) {
							var r = p(0, e, o, t);Object.assign(n, r);
						});var o = l(n);return n.buttons = r.getButtonListOpts(o), delete n.button, n.content = a.getContentOpts(n.content), Object.assign({}, i, s, n);
					};
				}, function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });var o = n(1),
					    r = { element: "input", attributes: { placeholder: "" } };e.getContentOpts = function (t) {
						var e = {};return o.isPlainObject(t) ? Object.assign(e, t) : t instanceof Element ? { element: t } : "input" === t ? r : null;
					};
				}]);
			});

			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.version = undefined;

			var _sweetalert = __webpack_require__(0);

			var _sweetalert2 = _interopRequireDefault(_sweetalert);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function plugin(Vue) {
				Vue.prototype.$swal = _sweetalert2.default;
			}

			// Install by default if using the script tag
			if (typeof window !== 'undefined' && window.Vue) {
				window.Vue.use(plugin);
			}

			exports.default = plugin;

			var version = '__VERSION__';
			// Export all components too
			exports.version = version;

			/***/
		}]
		/******/)
	);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_swal__ = __webpack_require__("./node_modules/vue-swal/dist/vue-swal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_swal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_swal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__riophae_vue_treeselect__ = __webpack_require__("./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__riophae_vue_treeselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__riophae_vue_treeselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("./resources/assets/js/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store__ = __webpack_require__("./resources/assets/js/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Rows_MaterialRow_vue__ = __webpack_require__("./resources/assets/js/components/Rows/MaterialRow.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Rows_MaterialRow_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_Rows_MaterialRow_vue__);
















__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vuex__["default"]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vue_swal___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('material-row', __WEBPACK_IMPORTED_MODULE_8__components_Rows_MaterialRow_vue___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('treeselect', __WEBPACK_IMPORTED_MODULE_4__riophae_vue_treeselect___default.a);
// Boostrap
// First we make axios globaly accessible
window.axios = __WEBPACK_IMPORTED_MODULE_5_axios___default.a;

// Next we do some vue router, states, and app init
var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
    routes: __WEBPACK_IMPORTED_MODULE_6__routes__["a" /* default */],
    mode: 'history'
});

router.afterEach(function (to, from) {
    if (typeof to.meta.title === "string") {
        document.title = to.meta.title;
    }
});

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    router: router,
    store: __WEBPACK_IMPORTED_MODULE_7__store__["a" /* default */]
});

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


/***/ }),

/***/ "./resources/assets/js/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var routes = [{
    path: "/login",
    name: "login",
    component: function component() {
        return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, "./resources/assets/js/components/Login.vue"));
    },
    meta: {
        title: "Đăng nhập"
    }
}, {
    path: "/",
    name: "base",
    component: function component() {
        return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, "./resources/assets/js/components/Base.vue"));
    },
    children: [{
        path: "dashboard",
        name: "base.dashboard",
        component: function component() {
            return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, "./resources/assets/js/components/Dashboard.vue"));
        },
        meta: {
            title: "Bảng thông báo"
        }
    }, {
        path: "works",
        name: "base.works",
        component: function component() {
            return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "./resources/assets/js/components/Works.vue"));
        },
        meta: {
            title: "Danh sách công trường"
        }
    }, {
        path: "work/:id",
        name: "base.workReport",
        component: function component() {
            return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "./resources/assets/js/components/WorkReport.vue"));
        },
        meta: {
            title: "Báo cáo chi tiết"
        }
    }, {
        path: "materials",
        name: "base.materials",
        component: function component() {
            return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "./resources/assets/js/components/Materials.vue"));
        },
        meta: {
            title: "Danh sách vật tư"
        }
    }]
}];
/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ "./resources/assets/js/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["default"]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["default"].Store({
    state: {
        authorizationToken: "",
        apiBase: "http://tracker.dev/api/v1",
        user: {},
        categoryList: {}

    },
    mutations: {
        SET_AUTHORIZATION_TOKEN: function SET_AUTHORIZATION_TOKEN(state, token) {
            state.authorizationToken = token;
        },
        SET_USER: function SET_USER(state, userObject) {
            state.user = userObject;
        },
        UPDATE_CATEGORY_LIST: function UPDATE_CATEGORY_LIST(state, list) {
            state.categoryList = list;
        }
    }
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ "./resources/assets/sass/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/js/app.js");
module.exports = __webpack_require__("./resources/assets/sass/app.scss");


/***/ })

},[0]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJpb3BoYWUvdnVlLXRyZWVzZWxlY3QvZGlzdC92dWUtdHJlZXNlbGVjdC5taW4uanMiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWU/NjFhNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZT8zOTAxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZT8zMTIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN3YWwvZGlzdC92dWUtc3dhbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3MiXSwibmFtZXMiOlsiZSIsInQiLCJleHBvcnRzIiwibW9kdWxlIiwiVnVlVHJlZXNlbGVjdCIsImkiLCJuIiwicyIsImwiLCJjYWxsIiwibSIsImMiLCJkIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwiciIsImEiLCJvcHRpb25zIiwicmVuZGVyIiwic3RhdGljUmVuZGVyRm5zIiwiX2NvbXBpbGVkIiwiZnVuY3Rpb25hbCIsIl9zY29wZUlkIiwidSIsIiR2bm9kZSIsInNzckNvbnRleHQiLCJwYXJlbnQiLCJfX1ZVRV9TU1JfQ09OVEVYVF9fIiwiX3JlZ2lzdGVyZWRDb21wb25lbnRzIiwiYWRkIiwiX3NzclJlZ2lzdGVyIiwiaCIsImJlZm9yZUNyZWF0ZSIsIl9pbmplY3RTdHlsZXMiLCJjb25jYXQiLCJlc01vZHVsZSIsInNlbGYiLCJGdW5jdGlvbiIsIlN5bWJvbCIsInR5cGUiLCJidXR0b24iLCJ4IiwiZ2V0UHJvdG90eXBlT2YiLCJrZXlzIiwibGVuZ3RoIiwiTiIsIlMiLCJBcnJheSIsImlzQXJyYXkiLCJmaW5kSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZiIsInZhbHVlIiwid3JpdGFibGUiLCJ2IiwibGV2ZWwiLCJpbmRleCIsIl8iLCJDIiwibWVzc2FnZSIsIlN0cmluZyIsInkiLCJiIiwiZyIsIkUiLCJPIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInciLCJwcm92aWRlIiwiaW5zdGFuY2UiLCJVTkNIRUNLRUQiLCJJTkRFVEVSTUlOQVRFIiwiQ0hFQ0tFRCIsIlVOTUFUQ0hFRCIsIkRFU0NFTkRBTlRfTUFUQ0hFRCIsIk1BVENIRUQiLCJwcm9wcyIsImF1dG9mb2N1cyIsIkJvb2xlYW4iLCJiYWNrc3BhY2VSZW1vdmVzIiwiYnJhbmNoTm9kZXNGaXJzdCIsImNsZWFyYWJsZSIsImNsZWFyQWxsVGV4dCIsImNsZWFyT25TZWxlY3QiLCJjbGVhclZhbHVlVGV4dCIsImNsb3NlT25TZWxlY3QiLCJkZWxldGVSZW1vdmVzIiwiZGlzYWJsZUJyYW5jaE5vZGVzIiwiZGlzYWJsZWQiLCJkZWZhdWx0RXhwYW5kTGV2ZWwiLCJOdW1iZXIiLCJlc2NhcGVDbGVhcnNWYWx1ZSIsImZsYXQiLCJpZCIsImxpbWl0IiwibGltaXRUZXh0IiwibG9hZENoaWxkcmVuRXJyb3JUZXh0IiwibG9hZENoaWxkcmVuT3B0aW9ucyIsImxvYWRpbmdUZXh0IiwibG9hZFJvb3RPcHRpb25zIiwibWF4SGVpZ2h0IiwibXVsdGlwbGUiLCJub0NoaWxkcmVuVGV4dCIsIm5vUmVzdWx0c1RleHQiLCJub09wdGlvbnNUZXh0Iiwib3BlbkRpcmVjdGlvbiIsIm9wZW5PbkNsaWNrIiwib3Blbk9uRm9jdXMiLCJwbGFjZWhvbGRlciIsInJldGFpblNjcm9sbFBvc2l0aW9uIiwicmV0cnlUZXh0IiwicmV0cnlUaXRsZSIsInNlYXJjaGFibGUiLCJzaG93Q291bnQiLCJzaG93Q291bnRPZiIsInZhbGlkYXRvciIsInNob3dDb3VudE9uU2VhcmNoIiwic29ydFZhbHVlQnkiLCJzdWJJdGVtc0xpbWl0IiwidGFiSW5kZXgiLCJkYXRhIiwiaW50ZXJuYWxWYWx1ZSIsImlzRm9jdXNlZCIsImlzT3BlbiIsIm5vZGVDaGVja2VkU3RhdGVNYXAiLCJjcmVhdGUiLCJub2RlTWFwIiwibm9ybWFsaXplZE9wdGlvbnMiLCJub1NlYXJjaFJlc3VsdHMiLCJvcHRpbWl6ZWRIZWlnaHQiLCJwcmVmZmVyZWRPcGVuRGlyZWN0aW9uIiwicm9vdE9wdGlvbnNMb2FkZWQiLCJsb2FkaW5nUm9vdE9wdGlvbnMiLCJsb2FkaW5nUm9vdE9wdGlvbnNFcnJvciIsInNlYXJjaGluZ0NvdW50Iiwic2VhcmNoaW5nIiwic2VhcmNoUXVlcnkiLCJzZWxlY3RlZE5vZGVNYXAiLCJsYXN0U2Nyb2xsUG9zaXRpb24iLCJjb21wdXRlZCIsInNlbGVjdGVkTm9kZXNOdW1iZXIiLCJoYXNWYWx1ZSIsInNlbGVjdGVkTm9kZXMiLCJtYXAiLCJnZXROb2RlIiwic2luZ2xlIiwidmlzaWJsZVZhbHVlIiwic2xpY2UiLCJoYXNFeGNlZWRlZExpbWl0Iiwic2hvdWxkU2hvd0NsZWFySWNvbiIsInNob3dDb3VudE9uU2VhcmNoQ29tcHV0ZWQiLCJ3YXRjaCIsImNsb3NlTWVudSIsImJ1aWxkTm9kZUNoZWNrZWRTdGF0ZU1hcCIsImhhbmRsZVNlYXJjaCIsIiRlbWl0Iiwic29ydFZhbHVlIiwiZ2V0VmFsdWUiLCJidWlsZFNlbGVjdGVkTm9kZU1hcCIsIm1ldGhvZHMiLCJ2ZXJpZnlQcm9wcyIsInJlc2V0RmxhZ3MiLCJfYmx1ck9uU2VsZWN0IiwiX3dhc0NsaWNrZWRPblZhbHVlSXRlbSIsImluaXRpYWxpemUiLCJpbml0aWFsaXplUm9vdE9wdGlvbnMiLCJpbml0aWFsaXplVmFsdWUiLCJsYWJlbCIsImFuY2VzdG9ycyIsInBhcmVudE5vZGUiLCJpc1Vua25vd25Ob2RlIiwiaXNMZWFmIiwiaXNCcmFuY2giLCJpc1NlbGVjdGVkIiwiY2hlY2tJZkJyYW5jaE5vZGUiLCJ0cmF2ZXJzZURlc2NlbmRhbnRzIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwidHJhdmVyc2VBbmNlc3RvcnMiLCJ0cmF2ZXJzZUFsbE5vZGVzIiwidG9nZ2xlQ2xpY2tPdXRzaWRlRXZlbnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGlja091dHNpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZm9jdXNJbnB1dCIsIiRyZWZzIiwiYmx1cklucHV0IiwiaGFuZGxlTW91c2VEb3duIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCIkZWwiLCJjb250YWlucyIsInRhcmdldCIsIm9wZW5NZW51IiwiaGFuZGxlTW91c2VEb3duT25DbGVhciIsImNsZWFyIiwiaGFuZGxlTW91c2VEb3duT25BcnJvdyIsInRvZ2dsZU1lbnUiLCJ3cmFwcGVyIiwiZXhwYW5kc09uU2VhcmNoIiwiaGFzTWF0Y2hlZENoaWxkIiwiaXNNYXRjaGVkIiwidG9Mb3dlckNhc2UiLCJBTExfREVTQ0VOREFOVFMiLCJMRUFGX0RFU0NFTkRBTlRTIiwiQUxMX0NISUxEUkVOIiwiTEVBRl9DSElMRFJFTiIsIm1lbnUiLCJzY3JvbGxUb3AiLCIkbmV4dFRpY2siLCJhZGp1c3RQb3NpdGlvbiIsInJlc3RvcmVTY3JvbGxQb3NpdGlvbiIsImxvYWRPcHRpb25zIiwidG9nZ2xlRXhwYW5kZWQiLCJpc0V4cGFuZGVkIiwibm9ybWFsaXplIiwiY2hlY2tEdXBsaWNhdGlvbiIsInZlcmlmeU5vZGVTaGFwZSIsImlzRGlzYWJsZWQiLCJpc1Jvb3ROb2RlIiwicmF3IiwiaXNMb2FkZWQiLCJpc1BlbmRpbmciLCJsb2FkaW5nQ2hpbGRyZW5FcnJvciIsImNvdW50IiwiZmlsdGVyIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlbGVjdCIsIl9zZWxlY3ROb2RlIiwiX2Rlc2VsZWN0Tm9kZSIsImFkZFZhbHVlIiwiZXZlcnkiLCJyZW1vdmVWYWx1ZSIsInB1c2giLCJtYXliZVJlbW92ZUxhc3RWYWx1ZSIsInNvcnQiLCJ3aW5kb3ciLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJpbm5lckhlaWdodCIsImJvdHRvbSIsIk1hdGgiLCJtaW4iLCJjcmVhdGVkIiwibW91bnRlZCIsImRlc3Ryb3llZCIsIkQiLCJpbnB1dCIsImZvY3VzIiwiYmx1ciIsImhhbmRsZU1vdXNlRG93bk9uVmFsdWUiLCJNIiwibmFtZSIsImluamVjdCIsIkEiLCIkY3JlYXRlRWxlbWVudCIsIl9zZWxmIiwiX2MiLCJzdGF0aWNDbGFzcyIsIl90IiwiX3YiLCJfcyIsIkwiLCJUIiwiViIsIlIiLCJrIiwiSSIsIiQiLCJCQUNLU1BBQ0UiLCJFU0NBUEUiLCJERUxFVEUiLCJCIiwiaW5wdXRXaWR0aCIsIm5lZWRzQXV0b1NpemUiLCJ1cGRhdGVkIiwidXBkYXRlSW5wdXRXaWR0aCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbklucHV0Iiwib25LZXlEb3duIiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibWV0YUtleSIsIndoaWNoIiwia2V5Q29kZSIsIm9uTW91c2VEb3duIiwicmVuZGVySW5wdXRXcmFwcGVyIiwiY2xhc3MiLCJyZW5kZXJJbnB1dCIsInJlbmRlclNpemVyIiwib24iLCJrZXlkb3duIiwicmVmIiwiYXR0cnMiLCJhdXRvY29tcGxldGUiLCJkb21Qcm9wcyIsInN0eWxlIiwid2lkdGgiLCJtb3VzZWRvd24iLCJ0ZXh0Q29udGVudCIsIm1heCIsInNpemVyIiwic2Nyb2xsV2lkdGgiLCJqIiwiRiIsInoiLCJQIiwiY29tcG9uZW50cyIsIlBsYWNlaG9sZGVyIiwiU2VhcmNoSW5wdXQiLCJtaXhpbnMiLCJIIiwidGFnIiwiYXBwZWFyIiwiX2wiLCJrZXkiLCJfZSIsIlEiLCJLIiwiVyIsIlUiLCJxIiwiWCIsIkoiLCJHIiwiWSIsIloiLCJlZSIsInRlIiwibmUiLCJpZSIsInNlIiwibm9kZSIsInJlcXVpcmVkIiwiY2hlY2tlZFN0YXRlIiwic2hvdWxkRXhwYW5kIiwiaGFuZGxlTW91c2VEb3duT25PcHRpb24iLCJoYW5kbGVNb3VzZURvd25Pbk9wdGlvbkFycm93Iiwib2UiLCJyZSIsIl9tIiwidGl0bGUiLCJjbGljayIsImFlIiwibGUiLCJjZSIsInVlIiwiZGUiLCJoZSIsInBlIiwiVHJlZXNlbGVjdE9wdGlvbiIsIlZhbHVlQ29tcG9uZW50IiwiZmUiLCJ2ZSIsIm1lIiwiQ2UiLCJ5ZSIsImJlIiwiZ2UiLCJjaGFyQ29kZUF0IiwiYXBwbHkiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiYXJndW1lbnRzIiwiVHlwZUVycm9yIiwibGVhZGluZyIsIm1heFdhaXQiLCJ0cmFpbGluZyIsImNhbmNlbCIsImZsdXNoIiwiRGF0ZSIsIm5vdyIsImV2YWwiLCJ2YWx1ZU9mIiwicmVwbGFjZSIsInRlc3QiLCJOYU4iLCJwYXJzZUludCIsInRvU3RyaW5nVGFnIiwidG9TdHJpbmciLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwiaXRlbSIsImNvbnRlbnQiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwiam9pbiIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImNzc01hcHBpbmciLCJidG9hIiwic291cmNlTWFwcGluZyIsInRvQ29tbWVudCIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsInNvdXJjZU1hcCIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibGlzdFRvU3R5bGVzIiwicGFyZW50SWQiLCJzdHlsZXMiLCJuZXdTdHlsZXMiLCJjc3MiLCJtZWRpYSIsInBhcnQiLCJwYXJ0cyIsIndlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwicm9vdCIsImZhY3RvcnkiLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZ2V0dGVyIiwiZ2V0RGVmYXVsdCIsImdldE1vZHVsZUV4cG9ydHMiLCJvYmplY3QiLCJwcm9wZXJ0eSIsImRlZmluZSIsImFtZCIsInN3YWwiLCJDTEFTU19OQU1FUyIsIk1PREFMIiwiT1ZFUkxBWSIsIlNIT1dfTU9EQUwiLCJNT0RBTF9USVRMRSIsIk1PREFMX1RFWFQiLCJJQ09OIiwiSUNPTl9DVVNUT00iLCJDT05URU5UIiwiRk9PVEVSIiwiQlVUVE9OX0NPTlRBSU5FUiIsIkJVVFRPTiIsIkNPTkZJUk1fQlVUVE9OIiwiQ0FOQ0VMX0JVVFRPTiIsIkRBTkdFUl9CVVRUT04iLCJCVVRUT05fTE9BRElORyIsIkJVVFRPTl9MT0FERVIiLCJxdWVyeVNlbGVjdG9yIiwic3RyaW5nVG9Ob2RlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInRyaW0iLCJmaXJzdENoaWxkIiwiaW5zZXJ0QWZ0ZXIiLCJuZXh0U2libGluZyIsImluc2VydEJlZm9yZSIsInJlbW92ZU5vZGUiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJ0aHJvd0VyciIsImlzUGxhaW5PYmplY3QiLCJvcmRpbmFsU3VmZml4T2YiLCJvdmVybGF5TWFya3VwIiwiaWNvbk1hcmt1cCIsInRpdGxlTWFya3VwIiwidGV4dE1hcmt1cCIsImZvb3Rlck1hcmt1cCIsIkNPTkZJUk1fS0VZIiwiQ0FOQ0VMX0tFWSIsInZpc2libGUiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiY2xvc2VNb2RhbCIsImFzc2lnbiIsImRlZmF1bHRCdXR0b25MaXN0IiwiY29uZmlybSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiZ2V0QnV0dG9uTGlzdE9wdHMiLCJpbmplY3RFbEludG9Nb2RhbCIsImFwcGVuZENoaWxkIiwiY2xhc3NMaXN0IiwiaW5pdE1vZGFsQ29udGVudCIsImljb24iLCJpbml0VGl0bGUiLCJpbml0VGV4dCIsImJ1dHRvbnMiLCJkYW5nZXJNb2RlIiwibW9kYWxNYXJrdXAiLCJwcm9taXNlIiwiYWN0aW9ucyIsInRpbWVyIiwicmVzZXRTdGF0ZSIsInNldEFjdGlvblZhbHVlIiwic2V0QWN0aW9uT3B0aW9uc0ZvciIsIm9wZW5Nb2RhbCIsInJlbW92ZSIsIm9uQWN0aW9uIiwicmVzb2x2ZSIsImdldFN0YXRlIiwic3RvcExvYWRpbmciLCJxdWVyeVNlbGVjdG9yQWxsIiwic3dlZXRBbGVydCIsImluc2VydEF0IiwidHJhbnNmb3JtIiwibG9jYWxzIiwicmVmcyIsImJhc2UiLCJpbnNlcnRJbnRvIiwiRXJyb3IiLCJyZWwiLCJzZXRBdHRyaWJ1dGUiLCJzaW5nbGV0b24iLCJiaW5kIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiQmxvYiIsImhyZWYiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImNyZWF0ZVRleHROb2RlIiwiY2hpbGROb2RlcyIsImNvbnZlcnRUb0Fic29sdXRlVXJscyIsImFsbCIsImF0b2IiLCJERUJVRyIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0IiwicGF0aG5hbWUiLCJnZXRPcHRzIiwiUHJvbWlzZSIsInJlamVjdCIsImNsb3NlIiwic2V0RGVmYXVsdHMiLCJpbml0IiwiYm9keSIsImVycm9ySWNvbk1hcmt1cCIsIndhcm5pbmdJY29uTWFya3VwIiwic3VjY2Vzc0ljb25NYXJrdXAiLCJjb250ZW50TWFya3VwIiwiYnV0dG9uTWFya3VwIiwiZXJyb3IiLCJ3YXJuaW5nIiwic3VjY2VzcyIsInNyYyIsImluY2x1ZGVzIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGlzcGxheSIsIm9mZnNldEhlaWdodCIsImVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwiY2xvc2VPbkVzYyIsImNsb3NlT25DbGlja091dHNpZGUiLCJFbGVtZW50IiwiZ2V0Q29udGVudE9wdHMiLCJ2ZXJzaW9uIiwidW5kZWZpbmVkIiwiX3N3ZWV0YWxlcnQiLCJfc3dlZXRhbGVydDIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0Iiwib2JqIiwicGx1Z2luIiwiVnVlIiwiJHN3YWwiLCJ1c2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7QUFLQSxDQUFFLFVBQVNBLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsOENBQWlCQyxPQUFqQixNQUEwQiw0Q0FBaUJDLE1BQWpCLEVBQTFCLEdBQWtEQSxPQUFPRCxPQUFQLEdBQWVELEdBQWpFLEdBQXFFLFFBQXNDLGlDQUFPLEVBQVAsb0NBQVVBLENBQVY7QUFBQTtBQUFBO0FBQUEsb0dBQXRDLEdBQW1ELG9CQUFpQkMsT0FBakIseUNBQWlCQSxPQUFqQixLQUF5QkEsUUFBUUUsYUFBUixHQUFzQkgsR0FBL0MsR0FBbURELEVBQUVJLGFBQUYsR0FBZ0JILEdBQTNMO0FBQStMLENBQTlNLENBQWdOLElBQWhOLEVBQXNOLFlBQVU7QUFBQyxTQUFRLFVBQVNELENBQVQsRUFBVztBQUFDLGFBQVNDLENBQVQsQ0FBV0ksQ0FBWCxFQUFhO0FBQUMsVUFBR0MsRUFBRUQsQ0FBRixDQUFILEVBQVEsT0FBT0MsRUFBRUQsQ0FBRixFQUFLSCxPQUFaLENBQW9CLElBQUlLLElBQUVELEVBQUVELENBQUYsSUFBSyxFQUFDQSxHQUFFQSxDQUFILEVBQUtHLEdBQUUsQ0FBQyxDQUFSLEVBQVVOLFNBQVEsRUFBbEIsRUFBWCxDQUFpQyxPQUFPRixFQUFFSyxDQUFGLEVBQUtJLElBQUwsQ0FBVUYsRUFBRUwsT0FBWixFQUFvQkssQ0FBcEIsRUFBc0JBLEVBQUVMLE9BQXhCLEVBQWdDRCxDQUFoQyxHQUFtQ00sRUFBRUMsQ0FBRixHQUFJLENBQUMsQ0FBeEMsRUFBMENELEVBQUVMLE9BQW5EO0FBQTJELFNBQUlJLElBQUUsRUFBTixDQUFTLE9BQU9MLEVBQUVTLENBQUYsR0FBSVYsQ0FBSixFQUFNQyxFQUFFVSxDQUFGLEdBQUlMLENBQVYsRUFBWUwsRUFBRVcsQ0FBRixHQUFJLFVBQVNaLENBQVQsRUFBV00sQ0FBWCxFQUFhRCxDQUFiLEVBQWU7QUFBQ0osUUFBRVksQ0FBRixDQUFJYixDQUFKLEVBQU1NLENBQU4sS0FBVVEsT0FBT0MsY0FBUCxDQUFzQmYsQ0FBdEIsRUFBd0JNLENBQXhCLEVBQTBCLEVBQUNVLGNBQWEsQ0FBQyxDQUFmLEVBQWlCQyxZQUFXLENBQUMsQ0FBN0IsRUFBK0JDLEtBQUliLENBQW5DLEVBQTFCLENBQVY7QUFBMkUsS0FBM0csRUFBNEdKLEVBQUVLLENBQUYsR0FBSSxVQUFTTixDQUFULEVBQVc7QUFBQyxVQUFJTSxJQUFFTixLQUFHQSxFQUFFbUIsVUFBTCxHQUFnQixZQUFVO0FBQUMsZUFBT25CLEVBQUVvQixPQUFUO0FBQWlCLE9BQTVDLEdBQTZDLFlBQVU7QUFBQyxlQUFPcEIsQ0FBUDtBQUFTLE9BQXZFLENBQXdFLE9BQU9DLEVBQUVXLENBQUYsQ0FBSU4sQ0FBSixFQUFNLEdBQU4sRUFBVUEsQ0FBVixHQUFhQSxDQUFwQjtBQUFzQixLQUExTixFQUEyTkwsRUFBRVksQ0FBRixHQUFJLFVBQVNiLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsYUFBT2EsT0FBT08sU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NiLElBQWhDLENBQXFDVCxDQUFyQyxFQUF1Q0MsQ0FBdkMsQ0FBUDtBQUFpRCxLQUE5UixFQUErUkEsRUFBRXNCLENBQUYsR0FBSSxHQUFuUyxFQUF1U3RCLEVBQUVBLEVBQUVNLENBQUYsR0FBSSxDQUFOLENBQTlTO0FBQXVULEdBQW5kLENBQXFkLENBQUUsVUFBU1AsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQ0QsTUFBRUUsT0FBRixHQUFVLFVBQVNGLENBQVQsRUFBV0MsQ0FBWCxFQUFhSyxDQUFiLEVBQWVELENBQWYsRUFBaUJFLENBQWpCLEVBQW1CTSxDQUFuQixFQUFxQjtBQUFDLFVBQUlXLENBQUo7QUFBQSxVQUFNQyxJQUFFekIsSUFBRUEsS0FBRyxFQUFiO0FBQUEsVUFBZ0JRLFlBQVNSLEVBQUVvQixPQUFYLENBQWhCLENBQW1DLGFBQVdaLENBQVgsSUFBYyxlQUFhQSxDQUEzQixLQUErQmdCLElBQUV4QixDQUFGLEVBQUl5QixJQUFFekIsRUFBRW9CLE9BQXZDLEVBQWdELElBQUlULElBQUUsY0FBWSxPQUFPYyxDQUFuQixHQUFxQkEsRUFBRUMsT0FBdkIsR0FBK0JELENBQXJDLENBQXVDeEIsTUFBSVUsRUFBRWdCLE1BQUYsR0FBUzFCLEVBQUUwQixNQUFYLEVBQWtCaEIsRUFBRWlCLGVBQUYsR0FBa0IzQixFQUFFMkIsZUFBdEMsRUFBc0RqQixFQUFFa0IsU0FBRixHQUFZLENBQUMsQ0FBdkUsR0FBMEV2QixNQUFJSyxFQUFFbUIsVUFBRixHQUFhLENBQUMsQ0FBbEIsQ0FBMUUsRUFBK0Z2QixNQUFJSSxFQUFFb0IsUUFBRixHQUFXeEIsQ0FBZixDQUEvRixDQUFpSCxJQUFJeUIsQ0FBSixDQUFNLElBQUduQixLQUFHbUIsSUFBRSxXQUFTaEMsQ0FBVCxFQUFXO0FBQUNBLFlBQUVBLEtBQUcsS0FBS2lDLE1BQUwsSUFBYSxLQUFLQSxNQUFMLENBQVlDLFVBQTVCLElBQXdDLEtBQUtDLE1BQUwsSUFBYSxLQUFLQSxNQUFMLENBQVlGLE1BQXpCLElBQWlDLEtBQUtFLE1BQUwsQ0FBWUYsTUFBWixDQUFtQkMsVUFBOUYsRUFBeUdsQyxLQUFHLGVBQWEsT0FBT29DLG1CQUF2QixLQUE2Q3BDLElBQUVvQyxtQkFBL0MsQ0FBekcsRUFBNksvQixLQUFHQSxFQUFFSSxJQUFGLENBQU8sSUFBUCxFQUFZVCxDQUFaLENBQWhMLEVBQStMQSxLQUFHQSxFQUFFcUMscUJBQUwsSUFBNEJyQyxFQUFFcUMscUJBQUYsQ0FBd0JDLEdBQXhCLENBQTRCekIsQ0FBNUIsQ0FBM047QUFBMFAsT0FBeFEsRUFBeVFGLEVBQUU0QixZQUFGLEdBQWVQLENBQTNSLElBQThSM0IsTUFBSTJCLElBQUUzQixDQUFOLENBQTlSLEVBQXVTMkIsQ0FBMVMsRUFBNFM7QUFBQyxZQUFJcEIsSUFBRUQsRUFBRW1CLFVBQVI7QUFBQSxZQUFtQlUsSUFBRTVCLElBQUVELEVBQUVnQixNQUFKLEdBQVdoQixFQUFFOEIsWUFBbEMsQ0FBK0M3QixLQUFHRCxFQUFFK0IsYUFBRixHQUFnQlYsQ0FBaEIsRUFBa0JyQixFQUFFZ0IsTUFBRixHQUFTLFVBQVMzQixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGlCQUFPK0IsRUFBRXZCLElBQUYsQ0FBT1IsQ0FBUCxHQUFVdUMsRUFBRXhDLENBQUYsRUFBSUMsQ0FBSixDQUFqQjtBQUF3QixTQUFwRSxJQUFzRVUsRUFBRThCLFlBQUYsR0FBZUQsSUFBRSxHQUFHRyxNQUFILENBQVVILENBQVYsRUFBWVIsQ0FBWixDQUFGLEdBQWlCLENBQUNBLENBQUQsQ0FBdEc7QUFBMEcsY0FBTSxFQUFDWSxVQUFTcEIsQ0FBVixFQUFZdEIsU0FBUXVCLENBQXBCLEVBQXNCQyxTQUFRZixDQUE5QixFQUFOO0FBQXVDLEtBQTl2QjtBQUErdkIsR0FBL3dCLEVBQWt4QixVQUFTWCxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGFBQVNLLENBQVQsQ0FBV04sQ0FBWCxFQUFhO0FBQUMsVUFBSUMsV0FBU0QsQ0FBVCx5Q0FBU0EsQ0FBVCxDQUFKLENBQWUsT0FBTyxRQUFNQSxDQUFOLEtBQVUsWUFBVUMsQ0FBVixJQUFhLGNBQVlBLENBQW5DLENBQVA7QUFBNkMsT0FBRUMsT0FBRixHQUFVSSxDQUFWO0FBQVksR0FBdDNCLEVBQXkzQixVQUFTTixDQUFULEVBQVdDLENBQVgsRUFBYUssQ0FBYixFQUFlO0FBQUMsUUFBSUQsSUFBRUMsRUFBRSxDQUFGLENBQU47QUFBQSxRQUFXQyxJQUFFLG9CQUFpQnNDLElBQWpCLHlDQUFpQkEsSUFBakIsTUFBdUJBLElBQXZCLElBQTZCQSxLQUFLL0IsTUFBTCxLQUFjQSxNQUEzQyxJQUFtRCtCLElBQWhFO0FBQUEsUUFBcUVoQyxJQUFFUixLQUFHRSxDQUFILElBQU11QyxTQUFTLGFBQVQsR0FBN0UsQ0FBdUc5QyxFQUFFRSxPQUFGLEdBQVVXLENBQVY7QUFBWSxHQUE1L0IsRUFBKy9CLFVBQVNiLENBQVQsRUFBV0MsQ0FBWCxFQUFhSyxDQUFiLEVBQWU7QUFBQyxRQUFJRCxJQUFFQyxFQUFFLENBQUYsQ0FBTjtBQUFBLFFBQVdDLElBQUVGLEVBQUUwQyxNQUFmLENBQXNCL0MsRUFBRUUsT0FBRixHQUFVSyxDQUFWO0FBQVksR0FBampDLEVBQW9qQyxVQUFTUCxDQUFULEVBQVdDLENBQVgsRUFBYUssQ0FBYixFQUFlO0FBQUM7QUFBYSxhQUFTRCxDQUFULENBQVdMLENBQVgsRUFBYTtBQUFDLGFBQU8sVUFBU0MsQ0FBVCxFQUFXO0FBQUMsd0JBQWNBLEVBQUUrQyxJQUFoQixJQUFzQixNQUFJL0MsRUFBRWdELE1BQTVCLElBQW9DakQsRUFBRVMsSUFBRixDQUFPLElBQVAsRUFBWVIsQ0FBWixDQUFwQztBQUFtRCxPQUF0RTtBQUF1RSxjQUFTTSxDQUFULEdBQVksQ0FBRSxVQUFTTSxDQUFULENBQVdiLENBQVgsRUFBYTtBQUFDLGFBQU8sUUFBTUEsQ0FBTixJQUFTLGNBQVksS0FBSyxDQUFMLEtBQVNBLENBQVQsR0FBVyxXQUFYLEdBQXVCa0QsRUFBRWxELENBQUYsQ0FBbkMsQ0FBVCxJQUFtRGMsT0FBT3FDLGNBQVAsQ0FBc0JuRCxDQUF0QixNQUEyQmMsT0FBT08sU0FBNUY7QUFBc0csY0FBU0csQ0FBVCxDQUFXeEIsQ0FBWCxFQUFhQyxDQUFiLEVBQWVLLENBQWYsRUFBaUI7QUFBQ08sUUFBRVAsQ0FBRixLQUFNTixFQUFFQyxDQUFGLE1BQU9ELEVBQUVDLENBQUYsSUFBSyxFQUFaLEdBQWdCTyxFQUFFUixFQUFFQyxDQUFGLENBQUYsRUFBT0ssQ0FBUCxDQUF0QixJQUFpQ04sRUFBRUMsQ0FBRixJQUFLSyxDQUF0QztBQUF3QyxjQUFTbUIsQ0FBVCxDQUFXekIsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxhQUFPYSxPQUFPTyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ2IsSUFBaEMsQ0FBcUNULENBQXJDLEVBQXVDQyxDQUF2QyxDQUFQO0FBQWlELGNBQVNPLENBQVQsQ0FBV1IsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxVQUFHLFFBQU1BLENBQVQsRUFBVyxDQUFYLEtBQWlCLElBQUdZLEVBQUVaLENBQUYsQ0FBSCxFQUFRLEtBQUksSUFBSUssSUFBRVEsT0FBT3NDLElBQVAsQ0FBWW5ELENBQVosQ0FBTixFQUFxQkksSUFBRSxDQUF2QixFQUF5QkUsSUFBRUQsRUFBRStDLE1BQWpDLEVBQXdDaEQsSUFBRUUsQ0FBMUMsRUFBNENGLEdBQTVDO0FBQWdEbUIsVUFBRXhCLENBQUYsRUFBSU0sRUFBRUQsQ0FBRixDQUFKLEVBQVNKLEVBQUVLLEVBQUVELENBQUYsQ0FBRixDQUFUO0FBQWhELE9BQVIsTUFBK0VpRCxJQUFJLE9BQU90RCxDQUFQO0FBQVMsY0FBU1csQ0FBVCxDQUFXWCxDQUFYLEVBQWE7QUFBQyxhQUFPdUQsRUFBRyxZQUFVO0FBQUMsZUFBT0MsTUFBTUMsT0FBTixDQUFjekQsQ0FBZCxDQUFQO0FBQXdCLE9BQXRDLEVBQXlDLFlBQVU7QUFBQyxlQUFNLGlCQUFOO0FBQXdCLE9BQTVFLEdBQStFQSxFQUFFQSxFQUFFcUQsTUFBRixHQUFTLENBQVgsQ0FBdEY7QUFBb0csY0FBU3JCLENBQVQsQ0FBV2hDLENBQVgsRUFBYUMsQ0FBYixFQUFlSyxDQUFmLEVBQWlCO0FBQUMsV0FBSSxJQUFJRCxJQUFFLENBQU4sRUFBUUUsSUFBRVAsRUFBRXFELE1BQWhCLEVBQXVCaEQsSUFBRUUsQ0FBekIsRUFBMkJGLEdBQTNCO0FBQStCLFlBQUdKLEVBQUVRLElBQUYsQ0FBT0gsQ0FBUCxFQUFTTixFQUFFSyxDQUFGLENBQVQsRUFBY0EsQ0FBZCxFQUFnQkwsQ0FBaEIsQ0FBSCxFQUFzQixPQUFPSyxDQUFQO0FBQXJELE9BQThELE9BQU0sQ0FBQyxDQUFQO0FBQVMsY0FBU08sQ0FBVCxDQUFXWixDQUFYLEVBQWFDLENBQWIsRUFBZUssQ0FBZixFQUFpQjtBQUFDLGFBQU0sY0FBWSxPQUFPa0QsTUFBTW5DLFNBQU4sQ0FBZ0JxQyxTQUFuQyxHQUE2QzFELEVBQUUwRCxTQUFGLENBQVl6RCxDQUFaLEVBQWNLLENBQWQsQ0FBN0MsR0FBOEQwQixFQUFFaEMsQ0FBRixFQUFJQyxDQUFKLEVBQU1LLENBQU4sQ0FBcEU7QUFBNkUsY0FBU2tDLENBQVQsQ0FBV3hDLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUMsVUFBSUssSUFBRU4sRUFBRTJELE9BQUYsQ0FBVTFELENBQVYsQ0FBTixDQUFtQixDQUFDLENBQUQsS0FBS0ssQ0FBTCxJQUFRTixFQUFFNEQsTUFBRixDQUFTdEQsQ0FBVCxFQUFXLENBQVgsQ0FBUjtBQUFzQixjQUFTaUIsQ0FBVCxDQUFXdkIsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxVQUFHRCxFQUFFcUQsTUFBRixLQUFXcEQsRUFBRW9ELE1BQWhCLEVBQXVCLE9BQU0sQ0FBQyxDQUFQLENBQVMsS0FBSSxJQUFJL0MsSUFBRSxDQUFWLEVBQVlBLElBQUVOLEVBQUVxRCxNQUFoQixFQUF1Qi9DLEdBQXZCO0FBQTJCLFlBQUdOLEVBQUVNLENBQUYsTUFBT0wsRUFBRUssQ0FBRixDQUFWLEVBQWUsT0FBTSxDQUFDLENBQVA7QUFBMUMsT0FBbUQsT0FBTSxDQUFDLENBQVA7QUFBUyxjQUFTdUQsQ0FBVCxDQUFXN0QsQ0FBWCxFQUFhQyxDQUFiLEVBQWVLLENBQWYsRUFBaUI7QUFBQyxhQUFPTCxLQUFLRCxDQUFMLEdBQU9jLE9BQU9DLGNBQVAsQ0FBc0JmLENBQXRCLEVBQXdCQyxDQUF4QixFQUEwQixFQUFDNkQsT0FBTXhELENBQVAsRUFBU1csWUFBVyxDQUFDLENBQXJCLEVBQXVCRCxjQUFhLENBQUMsQ0FBckMsRUFBdUMrQyxVQUFTLENBQUMsQ0FBakQsRUFBMUIsQ0FBUCxHQUFzRi9ELEVBQUVDLENBQUYsSUFBS0ssQ0FBM0YsRUFBNkZOLENBQXBHO0FBQXNHLGNBQVNnRSxDQUFULENBQVdoRSxDQUFYLEVBQWFDLENBQWIsRUFBZTtBQUFDLFdBQUksSUFBSUssSUFBRSxDQUFWLElBQWM7QUFBQyxZQUFHTixFQUFFaUUsS0FBRixHQUFRM0QsQ0FBWCxFQUFhLE9BQU0sQ0FBQyxDQUFQLENBQVMsSUFBR0wsRUFBRWdFLEtBQUYsR0FBUTNELENBQVgsRUFBYSxPQUFPLENBQVAsQ0FBUyxJQUFHTixFQUFFa0UsS0FBRixDQUFRNUQsQ0FBUixNQUFhTCxFQUFFaUUsS0FBRixDQUFRNUQsQ0FBUixDQUFoQixFQUEyQixPQUFPTixFQUFFa0UsS0FBRixDQUFRNUQsQ0FBUixJQUFXTCxFQUFFaUUsS0FBRixDQUFRNUQsQ0FBUixDQUFsQixDQUE2QkE7QUFBSTtBQUFDLGNBQVM2RCxDQUFULENBQVduRSxDQUFYLEVBQWFDLENBQWIsRUFBZTtBQUFDLGFBQU9ELEVBQUVpRSxLQUFGLEtBQVVoRSxFQUFFZ0UsS0FBWixHQUFrQmpFLEVBQUVpRSxLQUFGLEdBQVFoRSxFQUFFZ0UsS0FBNUIsR0FBa0NELEVBQUVoRSxDQUFGLEVBQUlDLENBQUosQ0FBekM7QUFBZ0QsY0FBU1MsQ0FBVCxDQUFXVixDQUFYLEVBQWE7QUFBQyxhQUFNLFNBQU9BLENBQVAsR0FBUyxPQUFmO0FBQXVCLGNBQVNvRSxDQUFULENBQVdwRSxDQUFYLEVBQWE7QUFBQyxhQUFNLHVDQUFxQ0EsRUFBRXFFLE9BQUYsSUFBV0MsT0FBT3RFLENBQVAsQ0FBaEQsSUFBMkQsR0FBakU7QUFBcUUsY0FBU3VFLENBQVQsQ0FBV3ZFLENBQVgsRUFBYTtBQUFDTSxRQUFFLENBQUY7QUFBSyxZQUFPUyxjQUFQLENBQXNCZCxDQUF0QixFQUF3QixZQUF4QixFQUFxQyxFQUFDNkQsT0FBTSxDQUFDLENBQVIsRUFBckMsRUFBaUQsSUFBSVUsSUFBRWxFLEVBQUUsQ0FBRixDQUFOO0FBQUEsUUFBV21FLElBQUVuRSxFQUFFQSxDQUFGLENBQUlrRSxDQUFKLENBQWI7QUFBQSxRQUFvQkUsSUFBRXBFLEVBQUUsQ0FBRixDQUF0QjtBQUFBLFFBQTJCcUUsSUFBRXJFLEVBQUVBLENBQUYsQ0FBSW9FLENBQUosQ0FBN0I7QUFBQSxRQUFvQ3hCLElBQUUsY0FBWSxPQUFPSCxNQUFuQixJQUEyQixvQkFBaUJBLE9BQU82QixRQUF4QixDQUEzQixHQUE0RCxVQUFTNUUsQ0FBVCxFQUFXO0FBQUMsb0JBQWNBLENBQWQseUNBQWNBLENBQWQ7QUFBZ0IsS0FBeEYsR0FBeUYsVUFBU0EsQ0FBVCxFQUFXO0FBQUMsYUFBT0EsS0FBRyxjQUFZLE9BQU8rQyxNQUF0QixJQUE4Qi9DLEVBQUU2RSxXQUFGLEtBQWdCOUIsTUFBOUMsSUFBc0QvQyxNQUFJK0MsT0FBTzFCLFNBQWpFLEdBQTJFLFFBQTNFLFVBQTJGckIsQ0FBM0YseUNBQTJGQSxDQUEzRixDQUFQO0FBQW9HLEtBQS9PO0FBQUEsUUFBZ1B1RCxJQUFFaEQsQ0FBbFA7QUFBQSxRQUFvUCtDLElBQUUvQyxDQUF0UDtBQUFBLFFBQXdQdUUsSUFBRSxFQUFDQyxTQUFRLG1CQUFVO0FBQUMsZUFBTSxFQUFDQyxVQUFTLElBQVYsRUFBZUMsV0FBVSxDQUF6QixFQUEyQkMsZUFBYyxDQUF6QyxFQUEyQ0MsU0FBUSxDQUFuRCxFQUFxREMsV0FBVSxDQUEvRCxFQUFpRUMsb0JBQW1CLENBQXBGLEVBQXNGQyxTQUFRLENBQTlGLEVBQU47QUFBdUcsT0FBM0gsRUFBNEhDLE9BQU0sRUFBQ0MsV0FBVSxFQUFDeEMsTUFBS3lDLE9BQU4sRUFBY3JFLFNBQVEsQ0FBQyxDQUF2QixFQUFYLEVBQXFDc0Usa0JBQWlCLEVBQUMxQyxNQUFLeUMsT0FBTixFQUFjckUsU0FBUSxDQUFDLENBQXZCLEVBQXRELEVBQWdGdUUsa0JBQWlCLEVBQUMzQyxNQUFLeUMsT0FBTixFQUFjckUsU0FBUSxDQUFDLENBQXZCLEVBQWpHLEVBQTJId0UsV0FBVSxFQUFDNUMsTUFBS3lDLE9BQU4sRUFBY3JFLFNBQVEsQ0FBQyxDQUF2QixFQUFySSxFQUErSnlFLGNBQWEsRUFBQzdDLE1BQUtzQixNQUFOLEVBQWFsRCxTQUFRLFdBQXJCLEVBQTVLLEVBQThNMEUsZUFBYyxFQUFDOUMsTUFBS3lDLE9BQU4sRUFBY3JFLFNBQVEsQ0FBQyxDQUF2QixFQUE1TixFQUFzUDJFLGdCQUFlLEVBQUMvQyxNQUFLc0IsTUFBTixFQUFhbEQsU0FBUSxhQUFyQixFQUFyUSxFQUF5UzRFLGVBQWMsRUFBQ2hELE1BQUt5QyxPQUFOLEVBQWNyRSxTQUFRLENBQUMsQ0FBdkIsRUFBdlQsRUFBaVY2RSxlQUFjLEVBQUNqRCxNQUFLeUMsT0FBTixFQUFjckUsU0FBUSxDQUFDLENBQXZCLEVBQS9WLEVBQXlYOEUsb0JBQW1CLEVBQUNsRCxNQUFLeUMsT0FBTixFQUFjckUsU0FBUSxDQUFDLENBQXZCLEVBQTVZLEVBQXNhK0UsVUFBUyxFQUFDbkQsTUFBS3lDLE9BQU4sRUFBY3JFLFNBQVEsQ0FBQyxDQUF2QixFQUEvYSxFQUF5Y2dGLG9CQUFtQixFQUFDcEQsTUFBS3FELE1BQU4sRUFBYWpGLFNBQVEsQ0FBckIsRUFBNWQsRUFBb2ZrRixtQkFBa0IsRUFBQ3RELE1BQUt5QyxPQUFOLEVBQWNyRSxTQUFRLENBQUMsQ0FBdkIsRUFBdGdCLEVBQWdpQm1GLE1BQUssRUFBQ3ZELE1BQUt5QyxPQUFOLEVBQWNyRSxTQUFRLENBQUMsQ0FBdkIsRUFBcmlCLEVBQStqQm9GLElBQUcsRUFBQ3BGLFNBQVEsSUFBVCxFQUFsa0IsRUFBaWxCcUYsT0FBTSxFQUFDekQsTUFBS3FELE1BQU4sRUFBYWpGLFNBQVEsSUFBRSxDQUF2QixFQUF2bEIsRUFBaW5Cc0YsV0FBVSxFQUFDMUQsTUFBS0YsUUFBTixFQUFlMUIsU0FBUVYsQ0FBdkIsRUFBM25CLEVBQXFwQmlHLHVCQUFzQixFQUFDM0QsTUFBS0YsUUFBTixFQUFlMUIsU0FBUWdELENBQXZCLEVBQTNxQixFQUFxc0J3QyxxQkFBb0IsRUFBQzVELE1BQUtGLFFBQU4sRUFBenRCLEVBQXl1QitELGFBQVksRUFBQzdELE1BQUtzQixNQUFOLEVBQWFsRCxTQUFRLFlBQXJCLEVBQXJ2QixFQUF3eEIwRixpQkFBZ0IsRUFBQzlELE1BQUtGLFFBQU4sRUFBeHlCLEVBQXd6QmlFLFdBQVUsRUFBQy9ELE1BQUtxRCxNQUFOLEVBQWFqRixTQUFRLEdBQXJCLEVBQWwwQixFQUE0MUI0RixVQUFTLEVBQUNoRSxNQUFLeUMsT0FBTixFQUFjckUsU0FBUSxDQUFDLENBQXZCLEVBQXIyQixFQUErM0I2RixnQkFBZSxFQUFDakUsTUFBS3NCLE1BQU4sRUFBYWxELFNBQVEsd0JBQXJCLEVBQTk0QixFQUE2N0I4RixlQUFjLEVBQUNsRSxNQUFLc0IsTUFBTixFQUFhbEQsU0FBUSxxQkFBckIsRUFBMzhCLEVBQXUvQitGLGVBQWMsRUFBQ25FLE1BQUtzQixNQUFOLEVBQWFsRCxTQUFRLHVCQUFyQixFQUFyZ0MsRUFBbWpDZ0csZUFBYyxFQUFDcEUsTUFBS3NCLE1BQU4sRUFBYWxELFNBQVEsTUFBckIsRUFBamtDLEVBQThsQ2lHLGFBQVksRUFBQ3JFLE1BQUt5QyxPQUFOLEVBQWNyRSxTQUFRLENBQUMsQ0FBdkIsRUFBMW1DLEVBQW9vQ2tHLGFBQVksRUFBQ3RFLE1BQUt5QyxPQUFOLEVBQWNyRSxTQUFRLENBQUMsQ0FBdkIsRUFBaHBDLEVBQTBxQ00sU0FBUSxFQUFDc0IsTUFBS1EsS0FBTixFQUFsckMsRUFBK3JDK0QsYUFBWSxFQUFDdkUsTUFBS3NCLE1BQU4sRUFBYWxELFNBQVEsV0FBckIsRUFBM3NDLEVBQTZ1Q29HLHNCQUFxQixFQUFDeEUsTUFBS3lDLE9BQU4sRUFBY3JFLFNBQVEsQ0FBQyxDQUF2QixFQUFsd0MsRUFBNHhDcUcsV0FBVSxFQUFDekUsTUFBS3NCLE1BQU4sRUFBYWxELFNBQVEsUUFBckIsRUFBdHlDLEVBQXEwQ3NHLFlBQVcsRUFBQzFFLE1BQUtzQixNQUFOLEVBQWFsRCxTQUFRLGdCQUFyQixFQUFoMUMsRUFBdTNDdUcsWUFBVyxFQUFDM0UsTUFBS3lDLE9BQU4sRUFBY3JFLFNBQVEsQ0FBQyxDQUF2QixFQUFsNEMsRUFBNDVDd0csV0FBVSxFQUFDNUUsTUFBS3lDLE9BQU4sRUFBY3JFLFNBQVEsQ0FBQyxDQUF2QixFQUF0NkMsRUFBZzhDeUcsYUFBWSxFQUFDN0UsTUFBS3NCLE1BQU4sRUFBYWxELFNBQVEsY0FBckIsRUFBb0MwRyxXQUFVLG1CQUFTOUgsQ0FBVCxFQUFXO0FBQUMsbUJBQU0sQ0FBQyxDQUFELEtBQUssQ0FBQyxjQUFELEVBQWdCLGlCQUFoQixFQUFrQyxlQUFsQyxFQUFrRCxrQkFBbEQsRUFBc0UyRCxPQUF0RSxDQUE4RTNELENBQTlFLENBQVg7QUFBNEYsV0FBdEosRUFBNThDLEVBQW9tRCtILG1CQUFrQixJQUF0bkQsRUFBMm5EQyxhQUFZLEVBQUNoRixNQUFLc0IsTUFBTixFQUFhbEQsU0FBUSxnQkFBckIsRUFBdm9ELEVBQThxRDZHLGVBQWMsRUFBQ2pGLE1BQUtxRCxNQUFOLEVBQWFqRixTQUFRLElBQUUsQ0FBdkIsRUFBNXJELEVBQXN0RDhHLFVBQVMsRUFBQ2xGLE1BQUtxRCxNQUFOLEVBQWFqRixTQUFRLENBQXJCLEVBQS90RCxFQUF1dkQwQyxPQUFNLElBQTd2RCxFQUFsSSxFQUFxNERxRSxNQUFLLGdCQUFVO0FBQUMsZUFBTSxFQUFDQyxlQUFjLEVBQWYsRUFBa0JDLFdBQVUsQ0FBQyxDQUE3QixFQUErQkMsUUFBTyxDQUFDLENBQXZDLEVBQXlDQyxxQkFBb0J6SCxPQUFPMEgsTUFBUCxDQUFjLElBQWQsQ0FBN0QsRUFBaUZDLFNBQVEzSCxPQUFPMEgsTUFBUCxDQUFjLElBQWQsQ0FBekYsRUFBNkdFLG1CQUFrQixJQUEvSCxFQUFvSUMsaUJBQWdCLENBQUMsQ0FBckosRUFBdUpDLGlCQUFnQixDQUF2SyxFQUF5S0Msd0JBQXVCLE9BQWhNLEVBQXdNQyxtQkFBa0IsQ0FBQyxDQUEzTixFQUE2TkMsb0JBQW1CLENBQUMsQ0FBalAsRUFBbVBDLHlCQUF3QixFQUEzUSxFQUE4UUMsZ0JBQWVuSSxPQUFPMEgsTUFBUCxDQUFjLElBQWQsQ0FBN1IsRUFBaVRVLFdBQVUsQ0FBQyxDQUE1VCxFQUE4VEMsYUFBWSxFQUExVSxFQUE2VUMsaUJBQWdCdEksT0FBTzBILE1BQVAsQ0FBYyxJQUFkLENBQTdWLEVBQWlYYSxvQkFBbUIsQ0FBcFksRUFBTjtBQUE2WSxPQUFseUUsRUFBbXlFQyxVQUFTLEVBQUNDLHFCQUFvQiwrQkFBVTtBQUFDLGlCQUFPLEtBQUtuQixhQUFMLENBQW1CL0UsTUFBMUI7QUFBaUMsU0FBakUsRUFBa0VtRyxVQUFTLG9CQUFVO0FBQUMsaUJBQU8sS0FBS0QsbUJBQUwsR0FBeUIsQ0FBaEM7QUFBa0MsU0FBeEgsRUFBeUhFLGVBQWMseUJBQVU7QUFBQyxpQkFBTyxLQUFLckIsYUFBTCxDQUFtQnNCLEdBQW5CLENBQXVCLEtBQUtDLE9BQTVCLENBQVA7QUFBNEMsU0FBOUwsRUFBK0xDLFFBQU8sa0JBQVU7QUFBQyxpQkFBTSxDQUFDLEtBQUs1QyxRQUFaO0FBQXFCLFNBQXRPLEVBQXVPNkMsY0FBYSx3QkFBVTtBQUFDLGlCQUFPLEtBQUtKLGFBQUwsQ0FBbUJLLEtBQW5CLENBQXlCLENBQXpCLEVBQTJCLEtBQUtyRCxLQUFoQyxDQUFQO0FBQThDLFNBQTdTLEVBQThTc0Qsa0JBQWlCLDRCQUFVO0FBQUMsaUJBQU8sS0FBS1IsbUJBQUwsR0FBeUIsS0FBSzlDLEtBQXJDO0FBQTJDLFNBQXJYLEVBQXNYdUQscUJBQW9CLCtCQUFVO0FBQUMsaUJBQU8sS0FBS3BFLFNBQUwsSUFBZ0IsQ0FBQyxLQUFLTyxRQUF0QixJQUFnQyxLQUFLcUQsUUFBNUM7QUFBcUQsU0FBMWMsRUFBMmNTLDJCQUEwQixxQ0FBVTtBQUFDLGlCQUFNLGFBQVcsT0FBTyxLQUFLbEMsaUJBQXZCLEdBQXlDLEtBQUtBLGlCQUE5QyxHQUFnRSxLQUFLSCxTQUEzRTtBQUFxRixTQUFya0IsRUFBNXlFLEVBQW0zRnNDLE9BQU0sRUFBQy9ELFVBQVMsa0JBQVNuRyxDQUFULEVBQVc7QUFBQ0EsZUFBRyxLQUFLc0ksTUFBUixJQUFnQixLQUFLNkIsU0FBTCxFQUFoQjtBQUFpQyxTQUF2RCxFQUF3RG5ELFVBQVMsa0JBQVNoSCxDQUFULEVBQVc7QUFBQ0EsZUFBRyxLQUFLb0ssd0JBQUwsRUFBSDtBQUFtQyxTQUFoSCxFQUFpSGpCLGFBQVl4RSxJQUFLLFlBQVU7QUFBQyxlQUFLMEYsWUFBTCxJQUFvQixLQUFLQyxLQUFMLENBQVcsZUFBWCxFQUEyQixLQUFLbkIsV0FBaEMsRUFBNEMsS0FBSzNDLEVBQWpELENBQXBCO0FBQXlFLFNBQXpGLEVBQTJGLEdBQTNGLENBQTdILEVBQTZOd0IsYUFBWSx1QkFBVTtBQUFDLGVBQUt1QyxTQUFMO0FBQWlCLFNBQXJRLEVBQXNRbkMsZUFBYyx5QkFBVTtBQUFDLGVBQUtrQyxLQUFMLENBQVcsT0FBWCxFQUFtQixLQUFLRSxRQUFMLEVBQW5CLEVBQW1DLEtBQUtoRSxFQUF4QztBQUE0QyxTQUEzVSxFQUE0VTFDLE9BQU0sZUFBUzlELENBQVQsRUFBVztBQUFDLGNBQUlDLElBQUVELEtBQUcsTUFBSUEsQ0FBUCxHQUFTLEtBQUtnSCxRQUFMLEdBQWNoSCxFQUFFOEosS0FBRixFQUFkLEdBQXdCLENBQUM5SixDQUFELENBQWpDLEdBQXFDLEVBQTNDLENBQThDLENBQUN1QixFQUFFdEIsQ0FBRixFQUFJLEtBQUttSSxhQUFULENBQUQsS0FBMkIsS0FBS0EsYUFBTCxHQUFtQm5JLENBQW5CLEVBQXFCLEtBQUt3SyxvQkFBTCxFQUFyQixFQUFpRCxLQUFLTCx3QkFBTCxFQUE1RTtBQUE2RyxTQUF6ZixFQUF6M0YsRUFBbzNHTSxTQUFRLEVBQUNDLGFBQVksdUJBQVU7QUFBQyxjQUFJM0ssSUFBRSxJQUFOLENBQVcsS0FBSzhHLGVBQUwsS0FBdUIsS0FBS3BGLE9BQUwsR0FBYThCLE1BQU1DLE9BQU4sQ0FBYyxLQUFLL0IsT0FBbkIsS0FBNkI2QixFQUFHLFlBQVU7QUFBQyxtQkFBTSxDQUFDLENBQVA7QUFBUyxXQUF2QixFQUEwQixZQUFVO0FBQUMsbUJBQU0sMERBQXdEdkQsRUFBRTBCLE9BQTFELEdBQWtFLEdBQXhFO0FBQTRFLFdBQWpILENBQTFDLEdBQThKNkIsRUFBRyxZQUFVO0FBQUMsbUJBQU0sQ0FBQyxDQUFQO0FBQVMsV0FBdkIsRUFBMEIsWUFBVTtBQUFDLG1CQUFNLDBDQUFOO0FBQWlELFdBQXRGLENBQXJMO0FBQStRLFNBQWxULEVBQW1UcUgsWUFBVyxzQkFBVTtBQUFDLGVBQUtDLGFBQUwsR0FBbUIsQ0FBQyxDQUFwQixFQUFzQixLQUFLQyxzQkFBTCxHQUE0QixDQUFDLENBQW5EO0FBQXFELFNBQTlYLEVBQStYQyxZQUFXLG9CQUFTL0ssQ0FBVCxFQUFXO0FBQUN3RCxnQkFBTUMsT0FBTixDQUFjekQsQ0FBZCxNQUFtQixLQUFLOEksaUJBQUwsR0FBdUIsQ0FBQyxDQUEzQyxHQUE4QyxLQUFLa0MscUJBQUwsQ0FBMkJoTCxLQUFHLEVBQTlCLENBQTlDLEVBQWdGLEtBQUtpTCxlQUFMLEVBQWhGLEVBQXVHLEtBQUtSLG9CQUFMLEVBQXZHLEVBQW1JLEtBQUtMLHdCQUFMLEVBQW5JO0FBQW1LLFNBQXpqQixFQUEwakJJLFVBQVMsb0JBQVU7QUFBQyxpQkFBTyxLQUFLeEQsUUFBTCxHQUFjLEtBQUtvQixhQUFMLENBQW1CMEIsS0FBbkIsRUFBZCxHQUF5QyxLQUFLMUIsYUFBTCxDQUFtQixDQUFuQixDQUFoRDtBQUFzRSxTQUFwcEIsRUFBcXBCdUIsU0FBUSxpQkFBUzNKLENBQVQsRUFBVztBQUFDLGlCQUFPdUQsRUFBRyxZQUFVO0FBQUMsbUJBQU8sUUFBTXZELENBQWI7QUFBZSxXQUE3QixFQUFnQyxZQUFVO0FBQUMsbUJBQU0sc0JBQW9CQSxDQUExQjtBQUE0QixXQUF2RSxHQUEwRSxLQUFLeUksT0FBTCxDQUFhekksQ0FBYixLQUFpQixFQUFDd0csSUFBR3hHLENBQUosRUFBTWtMLE9BQU1sTCxJQUFFLFlBQWQsRUFBMkJtTCxXQUFVLEVBQXJDLEVBQXdDQyxZQUFXLElBQW5ELEVBQXdEQyxlQUFjLENBQUMsQ0FBdkUsRUFBeUVDLFFBQU8sQ0FBQyxDQUFqRixFQUFtRkMsVUFBUyxDQUFDLENBQTdGLEVBQWxHO0FBQWtNLFNBQTMyQixFQUE0MkJDLFlBQVcsb0JBQVN4TCxDQUFULEVBQVc7QUFBQyxpQkFBT0EsRUFBRXdHLEVBQUYsSUFBUSxLQUFLNEMsZUFBcEI7QUFBb0MsU0FBdjZCLEVBQXc2QnFDLG1CQUFrQiwyQkFBU3pMLENBQVQsRUFBVztBQUFDdUQsWUFBRyxZQUFVO0FBQUMsbUJBQU92RCxLQUFHQSxFQUFFdUwsUUFBWjtBQUFxQixXQUFuQyxFQUFzQyxZQUFVO0FBQUMsbUJBQU0sMENBQXdDdkwsQ0FBOUM7QUFBZ0QsV0FBakc7QUFBb0csU0FBMWlDLEVBQTJpQzBMLHFCQUFvQiw2QkFBUzFMLENBQVQsRUFBV0MsQ0FBWCxFQUFhSyxDQUFiLEVBQWU7QUFBQyxjQUFJRCxJQUFFLElBQU4sQ0FBVyxjQUFZLE9BQU9KLENBQW5CLEtBQXVCSyxJQUFFTCxDQUFGLEVBQUlBLElBQUUsSUFBRSxDQUEvQixHQUFrQ0QsRUFBRXVMLFFBQUYsSUFBWXZMLEVBQUVpRSxLQUFGLEdBQVFoRSxDQUFwQixJQUF1QkQsRUFBRTJMLFFBQUYsQ0FBV0MsT0FBWCxDQUFvQixVQUFTNUwsQ0FBVCxFQUFXO0FBQUNLLGNBQUVxTCxtQkFBRixDQUFzQjFMLENBQXRCLEVBQXdCQyxDQUF4QixFQUEwQkssQ0FBMUIsR0FBNkJBLEVBQUVOLENBQUYsQ0FBN0I7QUFBa0MsV0FBbEUsQ0FBekQ7QUFBOEgsU0FBeHRDLEVBQXl0QzZMLG1CQUFrQiwyQkFBUzdMLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsY0FBSUssSUFBRU4sRUFBRW9MLFVBQVIsQ0FBbUIsU0FBTzlLLENBQVAsS0FBV0wsRUFBRUssQ0FBRixHQUFLLEtBQUt1TCxpQkFBTCxDQUF1QnZMLENBQXZCLEVBQXlCTCxDQUF6QixDQUFoQjtBQUE2QyxTQUF6ekMsRUFBMHpDNkwsa0JBQWlCLDBCQUFTOUwsQ0FBVCxFQUFXO0FBQUMsY0FBSUMsSUFBRSxJQUFOLENBQVcsS0FBS3lJLGlCQUFMLENBQXVCa0QsT0FBdkIsQ0FBZ0MsVUFBU3RMLENBQVQsRUFBVztBQUFDTCxjQUFFeUwsbUJBQUYsQ0FBc0JwTCxDQUF0QixFQUF3Qk4sQ0FBeEIsR0FBMkJBLEVBQUVNLENBQUYsQ0FBM0I7QUFBZ0MsV0FBNUU7QUFBK0UsU0FBajdDLEVBQWs3Q3lMLHlCQUF3QixpQ0FBUy9MLENBQVQsRUFBVztBQUFDQSxjQUFFZ00sU0FBU0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBc0MsS0FBS0Msa0JBQTNDLEVBQThELENBQUMsQ0FBL0QsQ0FBRixHQUFvRUYsU0FBU0csbUJBQVQsQ0FBNkIsV0FBN0IsRUFBeUMsS0FBS0Qsa0JBQTlDLEVBQWlFLENBQUMsQ0FBbEUsQ0FBcEU7QUFBeUksU0FBL2xELEVBQWdtREUsWUFBVyxzQkFBVTtBQUFDLGVBQUtDLEtBQUwsQ0FBV3ZJLEtBQVgsQ0FBaUJzSSxVQUFqQjtBQUE4QixTQUFwcEQsRUFBcXBERSxXQUFVLHFCQUFVO0FBQUMsZUFBS0QsS0FBTCxDQUFXdkksS0FBWCxDQUFpQndJLFNBQWpCO0FBQTZCLFNBQXZzRCxFQUF3c0RDLGlCQUFnQmxNLEVBQUcsVUFBU0wsQ0FBVCxFQUFXO0FBQUMsY0FBR0EsRUFBRXdNLGNBQUYsSUFBbUJ4TSxFQUFFeU0sZUFBRixFQUFuQixFQUF1QyxDQUFDLEtBQUt0RyxRQUFoRCxFQUF5RDtBQUFDLGlCQUFLa0csS0FBTCxDQUFXdkksS0FBWCxDQUFpQjRJLEdBQWpCLENBQXFCQyxRQUFyQixDQUE4QjNNLEVBQUU0TSxNQUFoQyxNQUEwQyxDQUFDLEtBQUt0RSxNQUFOLElBQWMsS0FBS1gsVUFBbkIsSUFBK0IsS0FBS21ELHNCQUFwQyxHQUEyRCxLQUFLeEMsTUFBTCxJQUFhLENBQUMsS0FBS2pCLFdBQU4sSUFBbUIsQ0FBQyxLQUFLZ0IsU0FBdEMsSUFBaUQsS0FBS3dFLFFBQUwsRUFBNUcsR0FBNEgsS0FBSzFDLFNBQUwsRUFBdEssR0FBd0wsS0FBS1UsYUFBTCxHQUFtQixLQUFLeUIsU0FBTCxFQUFuQixHQUFvQyxLQUFLRixVQUFMLEVBQTVOLEVBQThPLEtBQUt4QixVQUFMLEVBQTlPO0FBQWdRO0FBQUMsU0FBMVUsQ0FBeHRELEVBQXFpRWtDLHdCQUF1QnpNLEVBQUcsVUFBU0wsQ0FBVCxFQUFXO0FBQUNBLFlBQUV5TSxlQUFGLElBQW9Cek0sRUFBRXdNLGNBQUYsRUFBcEIsRUFBdUMsS0FBS08sS0FBTCxFQUF2QyxFQUFvRCxLQUFLWCxVQUFMLEVBQXBEO0FBQXNFLFNBQXJGLENBQTVqRSxFQUFvcEVZLHdCQUF1QjNNLEVBQUcsVUFBU0wsQ0FBVCxFQUFXO0FBQUNBLFlBQUV3TSxjQUFGLElBQW1CeE0sRUFBRXlNLGVBQUYsRUFBbkIsRUFBdUMsS0FBS0wsVUFBTCxFQUF2QyxFQUF5RCxLQUFLYSxVQUFMLEVBQXpEO0FBQTJFLFNBQTFGLENBQTNxRSxFQUF3d0VmLG9CQUFtQiw0QkFBU2xNLENBQVQsRUFBVztBQUFDLGVBQUtxTSxLQUFMLENBQVdhLE9BQVgsSUFBb0IsQ0FBQyxLQUFLYixLQUFMLENBQVdhLE9BQVgsQ0FBbUJQLFFBQW5CLENBQTRCM00sRUFBRTRNLE1BQTlCLENBQXJCLEtBQTZELEtBQUtOLFNBQUwsSUFBaUIsS0FBS25DLFNBQUwsRUFBOUU7QUFBZ0csU0FBdjRFLEVBQXc0RUUsY0FBYSx3QkFBVTtBQUFDLGNBQUlySyxJQUFFLElBQU4sQ0FBVyxLQUFLbUosV0FBTCxJQUFrQixLQUFLRCxTQUFMLEdBQWUsQ0FBQyxDQUFoQixFQUFrQixLQUFLUCxlQUFMLEdBQXFCLENBQUMsQ0FBeEMsRUFBMEMsS0FBS21ELGdCQUFMLENBQXVCLFVBQVM3TCxDQUFULEVBQVc7QUFBQyxnQkFBR0EsRUFBRXNMLFFBQUwsRUFBYztBQUFDLGtCQUFJakwsQ0FBSixDQUFNTCxFQUFFa04sZUFBRixHQUFrQixDQUFDLENBQW5CLEVBQXFCbE4sRUFBRW1OLGVBQUYsR0FBa0IsQ0FBQyxDQUF4QyxFQUEwQ3BOLEVBQUVpSixjQUFGLENBQWlCaEosRUFBRXVHLEVBQW5CLEtBQXdCbEcsSUFBRSxFQUFGLEVBQUt1RCxFQUFFdkQsQ0FBRixFQUFJLGNBQUosRUFBbUIsQ0FBbkIsQ0FBTCxFQUEyQnVELEVBQUV2RCxDQUFGLEVBQUksaUJBQUosRUFBc0IsQ0FBdEIsQ0FBM0IsRUFBb0R1RCxFQUFFdkQsQ0FBRixFQUFJLGVBQUosRUFBb0IsQ0FBcEIsQ0FBcEQsRUFBMkV1RCxFQUFFdkQsQ0FBRixFQUFJLGtCQUFKLEVBQXVCLENBQXZCLENBQTNFLEVBQXFHQSxDQUE3SCxDQUExQztBQUEwSztBQUFDLFdBQW5PLENBQTFDLEVBQWdSLEtBQUt3TCxnQkFBTCxDQUF1QixVQUFTN0wsQ0FBVCxFQUFXO0FBQUMsZ0JBQUlLLElBQUVMLEVBQUVvTixTQUFGLEdBQVk1SSxJQUFJekUsRUFBRW1KLFdBQUYsQ0FBY21FLFdBQWQsRUFBSixFQUFnQ3JOLEVBQUVpTCxLQUFGLENBQVFvQyxXQUFSLEVBQWhDLENBQWxCLENBQXlFaE4sTUFBSU4sRUFBRTJJLGVBQUYsR0FBa0IsQ0FBQyxDQUFuQixFQUFxQjFJLEVBQUVrTCxTQUFGLENBQVlTLE9BQVosQ0FBcUIsVUFBUzNMLENBQVQsRUFBVztBQUFDLHFCQUFPRCxFQUFFaUosY0FBRixDQUFpQmhKLEVBQUV1RyxFQUFuQixFQUF1QitHLGVBQXZCLEVBQVA7QUFBZ0QsYUFBakYsQ0FBckIsRUFBeUd0TixFQUFFcUwsTUFBRixJQUFVckwsRUFBRWtMLFNBQUYsQ0FBWVMsT0FBWixDQUFxQixVQUFTM0wsQ0FBVCxFQUFXO0FBQUMscUJBQU9ELEVBQUVpSixjQUFGLENBQWlCaEosRUFBRXVHLEVBQW5CLEVBQXVCZ0gsZ0JBQXZCLEVBQVA7QUFBaUQsYUFBbEYsQ0FBbkgsRUFBd00sU0FBT3ZOLEVBQUVtTCxVQUFULEtBQXNCcEwsRUFBRWlKLGNBQUYsQ0FBaUJoSixFQUFFbUwsVUFBRixDQUFhNUUsRUFBOUIsRUFBa0NpSCxZQUFsQyxJQUFnRCxDQUFoRCxFQUFrRHhOLEVBQUVxTCxNQUFGLEtBQVd0TCxFQUFFaUosY0FBRixDQUFpQmhKLEVBQUVtTCxVQUFGLENBQWE1RSxFQUE5QixFQUFrQ2tILGFBQWxDLElBQWlELENBQTVELENBQXhFLENBQTVNLEdBQXFWLENBQUNwTixLQUFHTCxFQUFFc0wsUUFBRixJQUFZdEwsRUFBRWtOLGVBQWxCLEtBQW9DLFNBQU9sTixFQUFFbUwsVUFBN0MsS0FBMERuTCxFQUFFbUwsVUFBRixDQUFhK0IsZUFBYixHQUE2QixDQUFDLENBQTlCLEVBQWdDbE4sRUFBRW1MLFVBQUYsQ0FBYWdDLGVBQWIsR0FBNkIsQ0FBQyxDQUF4SCxDQUFyVjtBQUFnZCxXQUE1akIsQ0FBbFMsSUFBazJCLEtBQUtsRSxTQUFMLEdBQWUsQ0FBQyxDQUFsM0I7QUFBbzNCLFNBQS94RyxFQUFneUdpQixXQUFVLHFCQUFVO0FBQUMsZUFBSzdCLE1BQUwsS0FBYyxLQUFLQSxNQUFMLEdBQVksQ0FBQyxDQUFiLEVBQWUsS0FBS2Qsb0JBQUwsSUFBMkIsS0FBSzZFLEtBQUwsQ0FBV3NCLElBQXRDLEtBQTZDLEtBQUt0RSxrQkFBTCxHQUF3QixLQUFLZ0QsS0FBTCxDQUFXc0IsSUFBWCxDQUFnQkMsU0FBckYsQ0FBZixFQUErRyxLQUFLN0IsdUJBQUwsQ0FBNkIsQ0FBQyxDQUE5QixDQUEvRyxFQUFnSixLQUFLNUMsV0FBTCxHQUFpQixFQUFqSyxFQUFvSyxLQUFLbUIsS0FBTCxDQUFXLE9BQVgsRUFBbUIsS0FBS0UsUUFBTCxFQUFuQixFQUFtQyxLQUFLaEUsRUFBeEMsQ0FBbEw7QUFBK04sU0FBcGhILEVBQXFoSHFHLFVBQVMsb0JBQVU7QUFBQyxlQUFLMUcsUUFBTCxJQUFlLEtBQUttQyxNQUFwQixLQUE2QixLQUFLQSxNQUFMLEdBQVksQ0FBQyxDQUFiLEVBQWUsS0FBS3VGLFNBQUwsQ0FBZSxLQUFLQyxjQUFwQixDQUFmLEVBQW1ELEtBQUt0RyxvQkFBTCxJQUEyQixLQUFLcUcsU0FBTCxDQUFlLEtBQUtFLHFCQUFwQixDQUE5RSxFQUF5SCxLQUFLakYsaUJBQUwsSUFBd0IsS0FBS2tGLFdBQUwsQ0FBaUIsQ0FBQyxDQUFsQixDQUFqSixFQUFzSyxLQUFLakMsdUJBQUwsQ0FBNkIsQ0FBQyxDQUE5QixDQUF0SyxFQUF1TSxLQUFLekIsS0FBTCxDQUFXLE1BQVgsRUFBa0IsS0FBSzlELEVBQXZCLENBQXBPO0FBQWdRLFNBQXp5SCxFQUEweUh5RyxZQUFXLHNCQUFVO0FBQUMsZUFBSzNFLE1BQUwsR0FBWSxLQUFLNkIsU0FBTCxFQUFaLEdBQTZCLEtBQUswQyxRQUFMLEVBQTdCO0FBQTZDLFNBQTcySCxFQUE4MkhvQixnQkFBZSx3QkFBU2pPLENBQVQsRUFBVztBQUFDLGVBQUt5TCxpQkFBTCxDQUF1QnpMLENBQXZCLEdBQTBCLEtBQUtrSixTQUFMLEdBQWVsSixFQUFFbU4sZUFBRixHQUFrQixDQUFDbk4sRUFBRW1OLGVBQXBDLEdBQW9Ebk4sRUFBRWtPLFVBQUYsR0FBYSxDQUFDbE8sRUFBRWtPLFVBQTlGO0FBQXlHLFNBQWwvSCxFQUFtL0hqRCxpQkFBZ0IsMkJBQVU7QUFBQyxlQUFLakUsUUFBTCxJQUFlLEtBQUtvQixhQUFMLEdBQW1CNUUsTUFBTUMsT0FBTixDQUFjLEtBQUtLLEtBQW5CLElBQTBCLEtBQUtBLEtBQUwsQ0FBV2dHLEtBQVgsRUFBMUIsR0FBNkMsRUFBaEUsRUFBbUUsS0FBS1MsU0FBTCxFQUFsRixJQUFvRyxLQUFLbkMsYUFBTCxHQUFtQixRQUFNLEtBQUt0RSxLQUFYLEdBQWlCLENBQUMsS0FBS0EsS0FBTixDQUFqQixHQUE4QixFQUFySjtBQUF3SixTQUF0cUksRUFBdXFJa0gsdUJBQXNCLCtCQUFTaEwsQ0FBVCxFQUFXO0FBQUMsZUFBSzBJLGlCQUFMLEdBQXVCLEtBQUt5RixTQUFMLENBQWUsSUFBZixFQUFvQm5PLENBQXBCLENBQXZCO0FBQThDLFNBQXZ2SSxFQUF3dkl5SyxzQkFBcUIsZ0NBQVU7QUFBQyxjQUFJekssSUFBRSxLQUFLb0osZUFBTCxHQUFxQnRJLE9BQU8wSCxNQUFQLENBQWMsSUFBZCxDQUEzQixDQUErQyxLQUFLSixhQUFMLENBQW1Cd0QsT0FBbkIsQ0FBNEIsVUFBUzNMLENBQVQsRUFBVztBQUFDRCxjQUFFQyxDQUFGLElBQUssQ0FBQyxDQUFOO0FBQVEsV0FBaEQ7QUFBbUQsU0FBMTNJLEVBQTIzSW1LLDBCQUF5QixvQ0FBVTtBQUFDLGNBQUlwSyxJQUFFLElBQU47QUFBQSxjQUFXQyxJQUFFLEtBQUtzSSxtQkFBTCxHQUF5QnpILE9BQU8wSCxNQUFQLENBQWMsSUFBZCxDQUF0QyxDQUEwRCxLQUFLeEIsUUFBTCxLQUFnQixLQUFLeUMsYUFBTCxDQUFtQm1DLE9BQW5CLENBQTRCLFVBQVN0TCxDQUFULEVBQVc7QUFBQ0wsY0FBRUssRUFBRWtHLEVBQUosSUFBUSxDQUFSLEVBQVV4RyxFQUFFdUcsSUFBRixLQUFTdkcsRUFBRTBMLG1CQUFGLENBQXNCcEwsQ0FBdEIsRUFBeUIsVUFBU04sQ0FBVCxFQUFXO0FBQUNDLGdCQUFFRCxFQUFFd0csRUFBSixJQUFRLENBQVI7QUFBVSxhQUEvQyxHQUFrRHhHLEVBQUU2TCxpQkFBRixDQUFvQnZMLENBQXBCLEVBQXVCLFVBQVNOLENBQVQsRUFBVztBQUFDQyxnQkFBRUQsRUFBRXdHLEVBQUosSUFBUSxDQUFSO0FBQVUsYUFBN0MsQ0FBM0QsQ0FBVjtBQUFzSCxXQUE5SixHQUFpSyxLQUFLa0MsaUJBQUwsQ0FBdUJrRCxPQUF2QixDQUFnQyxVQUFTdEwsQ0FBVCxFQUFXO0FBQUNBLGNBQUVrRyxFQUFGLElBQVF2RyxDQUFSLEtBQVlBLEVBQUVLLEVBQUVrRyxFQUFKLElBQVEsQ0FBcEIsR0FBdUJ4RyxFQUFFMEwsbUJBQUYsQ0FBc0JwTCxDQUF0QixFQUF5QixVQUFTTixDQUFULEVBQVc7QUFBQ0EsZ0JBQUV3RyxFQUFGLElBQVF2RyxDQUFSLEtBQVlBLEVBQUVELEVBQUV3RyxFQUFKLElBQVEsQ0FBcEI7QUFBdUIsYUFBNUQsQ0FBdkI7QUFBc0YsV0FBbEksQ0FBakw7QUFBdVQsU0FBaHhKLEVBQWl4SjJILFdBQVUsbUJBQVNuTyxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGNBQUlLLElBQUUsSUFBTjtBQUFBLGNBQVdELElBQUVKLEVBQUV5SixHQUFGLENBQU8sVUFBU3pKLENBQVQsRUFBV0ksQ0FBWCxFQUFhO0FBQUNDLGNBQUU4TixnQkFBRixDQUFtQm5PLENBQW5CLEdBQXNCSyxFQUFFK04sZUFBRixDQUFrQnBPLENBQWxCLENBQXRCLENBQTJDLElBQUlNLElBQUUsU0FBT1AsQ0FBYjtBQUFBLGdCQUFlYSxJQUFFWixFQUFFdUcsRUFBbkI7QUFBQSxnQkFBc0JoRixJQUFFdkIsRUFBRWlMLEtBQTFCO0FBQUEsZ0JBQWdDekosSUFBRXhCLEVBQUUwTCxRQUFwQztBQUFBLGdCQUE2Q25MLElBQUVQLEVBQUVxTyxVQUFqRDtBQUFBLGdCQUE0RDNOLElBQUUsS0FBSyxDQUFMLEtBQVNILENBQVQsSUFBWUEsQ0FBMUU7QUFBQSxnQkFBNEV3QixJQUFFd0IsTUFBTUMsT0FBTixDQUFjaEMsQ0FBZCxLQUFrQixTQUFPQSxDQUF6QixJQUE0QixLQUFLLENBQUwsS0FBU0EsQ0FBVCxJQUFZLENBQUMsQ0FBQ3hCLEVBQUVzTCxRQUExSDtBQUFBLGdCQUFtSTNLLElBQUUsQ0FBQ29CLENBQXRJO0FBQUEsZ0JBQXdJUSxJQUFFakMsSUFBRSxDQUFGLEdBQUlQLEVBQUVpRSxLQUFGLEdBQVEsQ0FBdEo7QUFBQSxnQkFBd0oxQyxJQUFFaEIsSUFBRSxFQUFGLEdBQUtQLEVBQUVtTCxTQUFGLENBQVl4SSxNQUFaLENBQW1CM0MsQ0FBbkIsQ0FBL0o7QUFBQSxnQkFBcUxnRSxJQUFFLENBQUN6RCxJQUFFLEVBQUYsR0FBS1AsRUFBRWtFLEtBQVIsRUFBZXZCLE1BQWYsQ0FBc0J0QyxDQUF0QixDQUF2TDtBQUFBLGdCQUFnTjhELElBQUU3RCxFQUFFbUksT0FBRixDQUFVNUgsQ0FBVixJQUFhLEVBQUMyRixJQUFHM0YsQ0FBSixFQUFNcUssT0FBTTFKLENBQVosRUFBY3lDLE9BQU16QixDQUFwQixFQUFzQjJJLFdBQVU1SixDQUFoQyxFQUFrQzJDLE9BQU1GLENBQXhDLEVBQTBDb0gsWUFBV3BMLENBQXJELEVBQXVEc08sWUFBVzNOLENBQWxFLEVBQW9FME0sV0FBVSxDQUFDLENBQS9FLEVBQWlGL0IsUUFBTzFLLENBQXhGLEVBQTBGMkssVUFBU3ZKLENBQW5HLEVBQXFHdU0sWUFBV2hPLENBQWhILEVBQWtIaU8sS0FBSXZPLENBQXRILEVBQS9OLENBQXdWLElBQUcrQixDQUFILEVBQUs7QUFBQyxrQkFBSXRCLENBQUo7QUFBQSxrQkFBTTBELElBQUVaLE1BQU1DLE9BQU4sQ0FBY2hDLENBQWQsQ0FBUixDQUF5QjJDLEtBQUdiLEVBQUcsWUFBVTtBQUFDLHVCQUFNLGNBQVksT0FBT2pELEVBQUVzRyxtQkFBM0I7QUFBK0MsZUFBN0QsRUFBZ0UsWUFBVTtBQUFDLHVCQUFNLDZGQUFOO0FBQW9HLGVBQS9LLENBQUgsRUFBcUx6QyxFQUFFc0ssUUFBRixHQUFXckssQ0FBaE0sRUFBa01ELEVBQUV1SyxTQUFGLEdBQVksQ0FBQyxDQUEvTSxFQUFpTnZLLEVBQUUrSixVQUFGLEdBQWExTCxJQUFFbEMsRUFBRThGLGtCQUFsTyxFQUFxUGpDLEVBQUVpSixlQUFGLEdBQWtCLENBQUMsQ0FBeFEsRUFBMFFqSixFQUFFZ0osZUFBRixHQUFrQixDQUFDLENBQTdSLEVBQStSaEosRUFBRXdLLG9CQUFGLEdBQXVCLEVBQXRULEVBQXlUeEssRUFBRXlLLEtBQUYsSUFBU2xPLElBQUUsRUFBRixFQUFLbUQsRUFBRW5ELENBQUYsRUFBSSxjQUFKLEVBQW1CLENBQW5CLENBQUwsRUFBMkJtRCxFQUFFbkQsQ0FBRixFQUFJLGlCQUFKLEVBQXNCLENBQXRCLENBQTNCLEVBQW9EbUQsRUFBRW5ELENBQUYsRUFBSSxlQUFKLEVBQW9CLENBQXBCLENBQXBELEVBQTJFbUQsRUFBRW5ELENBQUYsRUFBSSxrQkFBSixFQUF1QixDQUF2QixDQUEzRSxFQUFxR0EsQ0FBOUcsQ0FBelQsRUFBMGF5RCxFQUFFd0gsUUFBRixHQUFXdkgsSUFBRTlELEVBQUU2TixTQUFGLENBQVloSyxDQUFaLEVBQWMxQyxDQUFkLENBQUYsR0FBbUIsRUFBeGMsRUFBMmMwQyxFQUFFK0osVUFBRixJQUFjLENBQUMvSixFQUFFc0ssUUFBakIsSUFBMkJuTyxFQUFFME4sV0FBRixDQUFjLENBQUMsQ0FBZixFQUFpQjdKLENBQWpCLENBQXRlO0FBQTBmLG9CQUFPQSxFQUFFZ0gsU0FBRixDQUFZUyxPQUFaLENBQXFCLFVBQVM1TCxDQUFULEVBQVc7QUFBQyxxQkFBT0EsRUFBRTRPLEtBQUYsQ0FBUXJCLGVBQVIsRUFBUDtBQUFpQyxhQUFsRSxHQUFxRTNNLEtBQUd1RCxFQUFFZ0gsU0FBRixDQUFZUyxPQUFaLENBQXFCLFVBQVM1TCxDQUFULEVBQVc7QUFBQyxxQkFBT0EsRUFBRTRPLEtBQUYsQ0FBUXBCLGdCQUFSLEVBQVA7QUFBa0MsYUFBbkUsQ0FBeEUsRUFBOEksU0FBT3hOLENBQVAsS0FBV0EsRUFBRTRPLEtBQUYsQ0FBUW5CLFlBQVIsSUFBc0IsQ0FBdEIsRUFBd0I3TSxNQUFJWixFQUFFNE8sS0FBRixDQUFRbEIsYUFBUixJQUF1QixDQUEzQixDQUFuQyxDQUE5SSxFQUFnTnZKLENBQXZOO0FBQXlOLFdBQTFvQyxDQUFiLENBQTBwQyxJQUFHLEtBQUt3QixnQkFBUixFQUF5QjtBQUFDLGdCQUFJcEYsSUFBRUYsRUFBRXdPLE1BQUYsQ0FBVSxVQUFTN08sQ0FBVCxFQUFXO0FBQUMscUJBQU9BLEVBQUV1TCxRQUFUO0FBQWtCLGFBQXhDLENBQU47QUFBQSxnQkFBaUQxSyxJQUFFUixFQUFFd08sTUFBRixDQUFVLFVBQVM3TyxDQUFULEVBQVc7QUFBQyxxQkFBT0EsRUFBRXNMLE1BQVQ7QUFBZ0IsYUFBdEMsQ0FBbkQsQ0FBNEZqTCxJQUFFRSxFQUFFb0MsTUFBRixDQUFTOUIsQ0FBVCxDQUFGO0FBQWMsa0JBQU9SLENBQVA7QUFBUyxTQUFobE0sRUFBaWxNMk4sYUFBWSxxQkFBU2hPLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsY0FBSUssSUFBRSxJQUFOLENBQVcsSUFBR04sQ0FBSCxFQUFLO0FBQUMsZ0JBQUcsS0FBSytJLGtCQUFSLEVBQTJCLE9BQU8sSUFBSTFJLElBQUUsU0FBRkEsQ0FBRSxDQUFTTCxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDSyxnQkFBRXlJLGtCQUFGLEdBQXFCLENBQUMsQ0FBdEIsRUFBd0IvSSxJQUFFTSxFQUFFMEksdUJBQUYsR0FBMEJoSixFQUFFcUUsT0FBRixJQUFXQyxPQUFPdEUsQ0FBUCxDQUF2QyxHQUFpREMsSUFBRXVELE1BQU1DLE9BQU4sQ0FBY3hELENBQWQsS0FBa0JLLEVBQUV5SyxVQUFGLENBQWE5SyxDQUFiLEdBQWdCSyxFQUFFd0ksaUJBQUYsR0FBb0IsQ0FBQyxDQUF2RCxJQUEwRHhJLEVBQUUwSSx1QkFBRixHQUEwQiw4QkFBdEYsR0FBcUgxSSxFQUFFMEksdUJBQUYsR0FBMEIsa0JBQXhOO0FBQTJPLGFBQS9QLENBQWdRLEtBQUtELGtCQUFMLEdBQXdCLENBQUMsQ0FBekIsRUFBMkIsS0FBS0MsdUJBQUwsR0FBNkIsRUFBeEQsRUFBMkQsS0FBS2xDLGVBQUwsQ0FBcUJ6RyxDQUFyQixDQUEzRDtBQUFtRixXQUEzWCxNQUErWDtBQUFDLGdCQUFHSixFQUFFeU8sU0FBTCxFQUFlLE9BQU8sSUFBSW5PLElBQUVOLEVBQUV1TyxHQUFSO0FBQUEsZ0JBQVkzTixJQUFFLFNBQUZBLENBQUUsQ0FBU2IsQ0FBVCxFQUFXSyxDQUFYLEVBQWE7QUFBQ0osZ0JBQUV5TyxTQUFGLEdBQVksQ0FBQyxDQUFiLEVBQWUxTyxJQUFFQyxFQUFFME8sb0JBQUYsR0FBdUJyTyxFQUFFcUcscUJBQUYsQ0FBd0IzRyxDQUF4QixDQUF6QixHQUFvRHdELE1BQU1DLE9BQU4sQ0FBY3BELENBQWQsS0FBa0JKLEVBQUUwTCxRQUFGLEdBQVdyTCxFQUFFNk4sU0FBRixDQUFZbE8sQ0FBWixFQUFjSSxDQUFkLENBQVgsRUFBNEJKLEVBQUV3TyxRQUFGLEdBQVcsQ0FBQyxDQUF4QyxFQUEwQ25PLEVBQUU4Six3QkFBRixFQUE1RCxLQUEyRm5LLEVBQUUwTyxvQkFBRixHQUF1Qiw4QkFBdkIsRUFBc0RwTCxFQUFHLFlBQVU7QUFBQyx1QkFBTSxDQUFDLENBQVA7QUFBUyxlQUF2QixFQUEwQixZQUFVO0FBQUMsdUJBQU0sa0NBQWdDbEQsQ0FBaEMsR0FBa0MsMENBQWxDLEdBQTZFSixFQUFFdUcsRUFBckY7QUFBd0YsZUFBN0gsQ0FBakosQ0FBbkU7QUFBcVYsYUFBalgsQ0FBa1h2RyxFQUFFeU8sU0FBRixHQUFZLENBQUMsQ0FBYixFQUFlek8sRUFBRTBPLG9CQUFGLEdBQXVCLEVBQXRDLEVBQXlDLEtBQUsvSCxtQkFBTCxDQUF5QnJHLENBQXpCLEVBQTJCTSxDQUEzQixDQUF6QztBQUF1RTtBQUFDLFNBQXQ4TixFQUF1OE51TixrQkFBaUIsMEJBQVNwTyxDQUFULEVBQVc7QUFBQyxjQUFJQyxJQUFFLElBQU4sQ0FBV3NELEVBQUcsWUFBVTtBQUFDLG1CQUFNLENBQUM5QixFQUFFeEIsRUFBRXdJLE9BQUosRUFBWXpJLEVBQUV3RyxFQUFkLENBQVA7QUFBeUIsV0FBdkMsRUFBMEMsWUFBVTtBQUFDLG1CQUFNLDRDQUEwQ3NJLEtBQUtDLFNBQUwsQ0FBZS9PLEVBQUV3RyxFQUFqQixDQUExQyxHQUErRCxzQkFBL0QsR0FBc0Z2RyxFQUFFd0ksT0FBRixDQUFVekksRUFBRXdHLEVBQVosRUFBZ0IwRSxLQUF0RyxHQUE0RyxTQUE1RyxHQUFzSGxMLEVBQUVrTCxLQUF4SCxHQUE4SCxpQkFBcEk7QUFBc0osV0FBM007QUFBOE0sU0FBN3JPLEVBQThyT21ELGlCQUFnQiwyQkFBVSxDQUFFLENBQTF0TyxFQUEydE9XLFFBQU8sZ0JBQVNoUCxDQUFULEVBQVc7QUFBQyxlQUFLNEosTUFBTCxJQUFhLEtBQUttRCxLQUFMLEVBQWIsQ0FBMEIsSUFBSTlNLElBQUUsS0FBSytHLFFBQUwsSUFBZSxDQUFDLEtBQUtULElBQXJCLEdBQTBCLE1BQUksS0FBS2dDLG1CQUFMLENBQXlCdkksRUFBRXdHLEVBQTNCLENBQTlCLEdBQTZELENBQUMsS0FBS2dGLFVBQUwsQ0FBZ0J4TCxDQUFoQixDQUFwRSxDQUF1RkMsSUFBRSxLQUFLZ1AsV0FBTCxDQUFpQmpQLENBQWpCLENBQUYsR0FBc0IsS0FBS2tQLGFBQUwsQ0FBbUJsUCxDQUFuQixDQUF0QixFQUE0QyxLQUFLeUssb0JBQUwsRUFBNUMsRUFBd0UsS0FBS0wsd0JBQUwsRUFBeEUsRUFBd0csS0FBS2xCLFNBQUwsSUFBZ0JqSixDQUFoQixLQUFvQixLQUFLMkosTUFBTCxJQUFhLEtBQUs5RCxhQUF0QyxNQUF1RCxLQUFLcUQsV0FBTCxHQUFpQixFQUF4RSxDQUF4RyxFQUFvTCxLQUFLUyxNQUFMLElBQWEsS0FBSzVELGFBQWxCLEtBQWtDLEtBQUttRSxTQUFMLElBQWlCLEtBQUt4QyxVQUFMLEtBQWtCLEtBQUtrRCxhQUFMLEdBQW1CLENBQUMsQ0FBdEMsQ0FBbkQsQ0FBcEw7QUFBaVIsU0FBaG5QLEVBQWluUGtDLE9BQU0saUJBQVU7QUFBQyxlQUFLdkQsUUFBTCxLQUFnQixLQUFLcEIsYUFBTCxHQUFtQixFQUFuQixFQUFzQixLQUFLcUMsb0JBQUwsRUFBdEIsRUFBa0QsS0FBS0wsd0JBQUwsRUFBbEU7QUFBbUcsU0FBcnVQLEVBQXN1UDZFLGFBQVkscUJBQVNqUCxDQUFULEVBQVc7QUFBQyxjQUFHLEtBQUttUCxRQUFMLENBQWNuUCxDQUFkLEdBQWlCLEtBQUtnSCxRQUFMLElBQWUsQ0FBQyxLQUFLVCxJQUFyQixJQUEyQixDQUFDdkcsRUFBRXVPLFVBQWxELEVBQTZEO0FBQUMsZ0JBQUl0TyxJQUFFRCxFQUFFb0wsVUFBUjtBQUFBLGdCQUFtQjlLLElBQUVMLEVBQUUwTCxRQUF2QixDQUFnQ3JMLEVBQUU4TyxLQUFGLENBQVEsS0FBSzVELFVBQWIsTUFBMkJsTCxFQUFFc0wsT0FBRixDQUFVLEtBQUt5RCxXQUFmLEdBQTRCLEtBQUtKLFdBQUwsQ0FBaUJoUCxDQUFqQixDQUF2RDtBQUE0RTtBQUFDLFNBQXo2UCxFQUEwNlBpUCxlQUFjLHVCQUFTbFAsQ0FBVCxFQUFXO0FBQUMsY0FBSUMsSUFBRSxJQUFOLENBQVcsSUFBRyxLQUFLb1AsV0FBTCxDQUFpQnJQLENBQWpCLEdBQW9CLEtBQUtnSCxRQUFMLElBQWUsQ0FBQyxLQUFLVCxJQUFyQixLQUE0QixLQUFLa0QsYUFBTCxDQUFtQm1DLE9BQW5CLENBQTRCLFVBQVN0TCxDQUFULEVBQVc7QUFBQyxhQUFDLENBQUQsS0FBS0EsRUFBRTZLLFNBQUYsQ0FBWXhILE9BQVosQ0FBb0IzRCxDQUFwQixDQUFMLElBQTZCQyxFQUFFb1AsV0FBRixDQUFjL08sQ0FBZCxDQUE3QjtBQUE4QyxXQUF0RixHQUF5RixDQUFDTixFQUFFdU8sVUFBeEgsQ0FBdkIsRUFBMko7QUFBQyxnQkFBSWpPLElBQUVNLEVBQUVaLEVBQUVtTCxTQUFKLEVBQWMsS0FBS0ssVUFBbkIsQ0FBTixDQUFxQyxJQUFHLENBQUMsQ0FBRCxLQUFLbEwsQ0FBUixFQUFVO0FBQUMsa0JBQUlELElBQUVMLEVBQUVtTCxTQUFGLENBQVk3SyxDQUFaLENBQU47QUFBQSxrQkFBcUJDLElBQUVQLEVBQUVtTCxTQUFGLENBQVl4SSxNQUFaLENBQW1CM0MsQ0FBbkIsQ0FBdkIsQ0FBNkMsS0FBS3FQLFdBQUwsQ0FBaUJoUCxDQUFqQixHQUFvQixLQUFLcUwsbUJBQUwsQ0FBeUJyTCxDQUF6QixFQUEyQkwsRUFBRWlFLEtBQTdCLEVBQW9DLFVBQVNqRSxDQUFULEVBQVc7QUFBQyxpQkFBQyxDQUFELEtBQUtPLEVBQUVvRCxPQUFGLENBQVUzRCxDQUFWLENBQUwsSUFBbUJDLEVBQUVrUCxRQUFGLENBQVduUCxDQUFYLENBQW5CO0FBQWlDLGVBQWpGLENBQXBCO0FBQXdHO0FBQUM7QUFBQyxTQUFselEsRUFBbXpRbVAsVUFBUyxrQkFBU25QLENBQVQsRUFBVztBQUFDLGVBQUtvSSxhQUFMLENBQW1Ca0gsSUFBbkIsQ0FBd0J0UCxFQUFFd0csRUFBMUIsR0FBOEIsS0FBSzRDLGVBQUwsQ0FBcUJwSixFQUFFd0csRUFBdkIsSUFBMkIsQ0FBQyxDQUExRCxFQUE0RCxLQUFLK0QsU0FBTCxFQUE1RDtBQUE2RSxTQUFyNVEsRUFBczVROEUsYUFBWSxxQkFBU3JQLENBQVQsRUFBVztBQUFDd0MsWUFBRSxLQUFLNEYsYUFBUCxFQUFxQnBJLEVBQUV3RyxFQUF2QixHQUEyQixPQUFPLEtBQUs0QyxlQUFMLENBQXFCcEosRUFBRXdHLEVBQXZCLENBQWxDO0FBQTZELFNBQTMrUSxFQUE0K1ErSSxzQkFBcUIsZ0NBQVU7QUFBQyxjQUFHLEtBQUsvRixRQUFSLEVBQWlCO0FBQUMsZ0JBQUl4SixJQUFFVyxFQUFFLEtBQUt5SCxhQUFQLENBQU47QUFBQSxnQkFBNEJuSSxJQUFFLEtBQUswSixPQUFMLENBQWEzSixDQUFiLENBQTlCLENBQThDLEtBQUtxUCxXQUFMLENBQWlCcFAsQ0FBakIsR0FBb0IsS0FBS3dLLG9CQUFMLEVBQXBCLEVBQWdELEtBQUtMLHdCQUFMLEVBQWhEO0FBQWdGO0FBQUMsU0FBN3BSLEVBQThwUkcsV0FBVSxxQkFBVTtBQUFDLGNBQUl2SyxJQUFFLElBQU4sQ0FBVyxZQUFVLEtBQUtnSSxXQUFmLEdBQTJCLEtBQUtJLGFBQUwsQ0FBbUJvSCxJQUFuQixDQUF5QixVQUFTdlAsQ0FBVCxFQUFXSyxDQUFYLEVBQWE7QUFBQyxtQkFBTzZELEVBQUVuRSxFQUFFeUksT0FBRixDQUFVeEksQ0FBVixDQUFGLEVBQWVELEVBQUV5SSxPQUFGLENBQVVuSSxDQUFWLENBQWYsQ0FBUDtBQUFvQyxXQUEzRSxDQUEzQixHQUF5RyxZQUFVLEtBQUswSCxXQUFmLElBQTRCLEtBQUtJLGFBQUwsQ0FBbUJvSCxJQUFuQixDQUF5QixVQUFTdlAsQ0FBVCxFQUFXSyxDQUFYLEVBQWE7QUFBQyxtQkFBTzBELEVBQUVoRSxFQUFFeUksT0FBRixDQUFVeEksQ0FBVixDQUFGLEVBQWVELEVBQUV5SSxPQUFGLENBQVVuSSxDQUFWLENBQWYsQ0FBUDtBQUFvQyxXQUEzRSxDQUFySTtBQUFtTixTQUFqNVIsRUFBazVSeU4sdUJBQXNCLGlDQUFVO0FBQUMsZUFBSzFCLEtBQUwsQ0FBV3NCLElBQVgsS0FBa0IsS0FBS3RCLEtBQUwsQ0FBV3NCLElBQVgsQ0FBZ0JDLFNBQWhCLEdBQTBCLEtBQUt2RSxrQkFBakQ7QUFBcUUsU0FBeC9SLEVBQXkvUnlFLGdCQUFlLDBCQUFVO0FBQUMsY0FBRyxlQUFhLE9BQU8yQixNQUF2QixFQUE4QjtBQUFDLGdCQUFJelAsSUFBRSxLQUFLME0sR0FBTCxDQUFTZ0QscUJBQVQsRUFBTjtBQUFBLGdCQUF1Q3pQLElBQUVELEVBQUUyUCxHQUEzQztBQUFBLGdCQUErQ3JQLElBQUVtUCxPQUFPRyxXQUFQLEdBQW1CNVAsRUFBRTZQLE1BQXRFLENBQTZFdlAsSUFBRSxLQUFLeUcsU0FBUCxJQUFrQnpHLElBQUVMLENBQXBCLElBQXVCLFlBQVUsS0FBS21ILGFBQXRDLElBQXFELGFBQVcsS0FBS0EsYUFBckUsSUFBb0YsS0FBS3lCLHNCQUFMLEdBQTRCLE9BQTVCLEVBQW9DLEtBQUtELGVBQUwsR0FBcUJrSCxLQUFLQyxHQUFMLENBQVN6UCxJQUFFLEVBQVgsRUFBYyxLQUFLeUcsU0FBbkIsQ0FBN0ksS0FBNkssS0FBSzhCLHNCQUFMLEdBQTRCLE9BQTVCLEVBQW9DLEtBQUtELGVBQUwsR0FBcUJrSCxLQUFLQyxHQUFMLENBQVM5UCxJQUFFLEVBQVgsRUFBYyxLQUFLOEcsU0FBbkIsQ0FBdE87QUFBcVE7QUFBQyxTQUFyNFMsRUFBNTNHLEVBQW13WmlKLFNBQVEsbUJBQVU7QUFBQyxhQUFLckYsV0FBTCxJQUFtQixLQUFLQyxVQUFMLEVBQW5CLEVBQXFDLEtBQUtHLFVBQUwsQ0FBZ0IsS0FBS3JKLE9BQXJCLENBQXJDO0FBQW1FLE9BQXoxWixFQUEwMVp1TyxTQUFRLG1CQUFVO0FBQUMsYUFBS3pLLFNBQUwsSUFBZ0IsS0FBSzZHLEtBQUwsQ0FBV3ZJLEtBQVgsQ0FBaUJzSSxVQUFqQixFQUFoQjtBQUE4QyxPQUEzNVosRUFBNDVaOEQsV0FBVSxxQkFBVTtBQUFDLGFBQUtuRSx1QkFBTCxDQUE2QixDQUFDLENBQTlCO0FBQWlDLE9BQWw5WixFQUExUDtBQUFBLFFBQThzYW9FLElBQUUsRUFBQzdHLFVBQVMsRUFBQzVDLFdBQVUscUJBQVU7QUFBQyxjQUFJMUcsSUFBRSxLQUFLZ0YsUUFBTCxDQUFjdUUsbUJBQWQsR0FBa0MsS0FBS3ZFLFFBQUwsQ0FBY3lCLEtBQXRELENBQTRELE9BQU8sS0FBS3pCLFFBQUwsQ0FBYzBCLFNBQWQsQ0FBd0IxRyxDQUF4QixDQUFQO0FBQWtDLFNBQXBILEVBQVYsRUFBZ0kwSyxTQUFRLEVBQUMwQixZQUFXLHNCQUFVO0FBQUMsZUFBS0MsS0FBTCxDQUFXK0QsS0FBWCxDQUFpQkMsS0FBakI7QUFBeUIsU0FBaEQsRUFBaUQvRCxXQUFVLHFCQUFVO0FBQUMsZUFBS0QsS0FBTCxDQUFXK0QsS0FBWCxDQUFpQkUsSUFBakI7QUFBd0IsU0FBOUYsRUFBK0ZDLHdCQUF1QmxRLEVBQUcsWUFBVTtBQUFDLGVBQUsyRSxRQUFMLENBQWM4RixzQkFBZCxHQUFxQyxDQUFDLENBQXRDO0FBQXdDLFNBQXRELENBQXRILEVBQXhJLEVBQWh0YTtBQUFBLFFBQXlnYjBGLElBQUUsRUFBQ0MsTUFBSyw2QkFBTixFQUFvQ0MsUUFBTyxDQUFDLFVBQUQsQ0FBM0MsRUFBM2diO0FBQUEsUUFBb2tiQyxJQUFFLFNBQUZBLENBQUUsR0FBVTtBQUFDLFVBQUkzUSxJQUFFLElBQU47QUFBQSxVQUFXQyxJQUFFRCxFQUFFNFEsY0FBZixDQUE4QixPQUFNLENBQUM1USxFQUFFNlEsS0FBRixDQUFRQyxFQUFSLElBQVk3USxDQUFiLEVBQWdCLEtBQWhCLEVBQXNCLEVBQUM4USxhQUFZLG1FQUFiLEVBQXRCLEVBQXdHLENBQUMvUSxFQUFFZ1IsRUFBRixDQUFLLGFBQUwsRUFBbUIsQ0FBQ2hSLEVBQUVpUixFQUFGLENBQUtqUixFQUFFa1IsRUFBRixDQUFLbFIsRUFBRWdGLFFBQUYsQ0FBV3VDLFdBQWhCLENBQUwsQ0FBRCxDQUFuQixDQUFELENBQXhHLEVBQW1LLENBQW5LLENBQU47QUFBNEssS0FBM3hiO0FBQUEsUUFBNHhiNEosSUFBRSxFQUE5eGI7QUFBQSxRQUFpeWJDLElBQUUsRUFBQ3pQLFFBQU9nUCxDQUFSLEVBQVUvTyxpQkFBZ0J1UCxDQUExQixFQUFueWI7QUFBQSxRQUFnMGJFLElBQUVELENBQWwwYjtBQUFBLFFBQW8wYkUsSUFBRWhSLEVBQUUsQ0FBRixDQUF0MGI7QUFBQSxRQUEyMGJpUixJQUFFRCxFQUFFZCxDQUFGLEVBQUlhLENBQUosRUFBTSxDQUFDLENBQVAsRUFBUyxJQUFULEVBQWMsSUFBZCxFQUFtQixJQUFuQixDQUE3MGI7QUFBQSxRQUFzMmJHLElBQUVELEVBQUVyUixPQUExMmI7QUFBQSxRQUFrM2J1UixJQUFFLEVBQUNDLFdBQVUsQ0FBWCxFQUFhQyxRQUFPLEVBQXBCLEVBQXVCQyxRQUFPLEVBQTlCLEVBQXAzYjtBQUFBLFFBQXM1YkMsSUFBRSxFQUFDcEIsTUFBSyx1QkFBTixFQUE4QkMsUUFBTyxDQUFDLFVBQUQsQ0FBckMsRUFBa0R2SSxNQUFLLGdCQUFVO0FBQUMsZUFBTSxFQUFDMkosWUFBVyxDQUFaLEVBQU47QUFBcUIsT0FBdkYsRUFBd0Z4SSxVQUFTLEVBQUN5SSxlQUFjLHlCQUFVO0FBQUMsaUJBQU8sS0FBSy9NLFFBQUwsQ0FBY2dDLFFBQXJCO0FBQThCLFNBQXhELEVBQWpHLEVBQTJKZ0wsU0FBUSxtQkFBVTtBQUFDLGFBQUtELGFBQUwsSUFBb0IsS0FBS0UsZ0JBQUwsRUFBcEI7QUFBNEMsT0FBMU4sRUFBMk52SCxTQUFRLEVBQUMyRixPQUFNLGlCQUFVO0FBQUMsZUFBS3JMLFFBQUwsQ0FBY21CLFFBQWQsSUFBd0IsS0FBS2tHLEtBQUwsQ0FBVytELEtBQVgsSUFBa0IsS0FBSy9ELEtBQUwsQ0FBVytELEtBQVgsQ0FBaUJDLEtBQWpCLEVBQTFDO0FBQW1FLFNBQXJGLEVBQXNGQyxNQUFLLGdCQUFVO0FBQUMsZUFBS2pFLEtBQUwsQ0FBVytELEtBQVgsSUFBa0IsS0FBSy9ELEtBQUwsQ0FBVytELEtBQVgsQ0FBaUJFLElBQWpCLEVBQWxCO0FBQTBDLFNBQWhKLEVBQWlKNEIsU0FBUSxtQkFBVTtBQUFDLGVBQUtsTixRQUFMLENBQWNxRCxTQUFkLEdBQXdCLENBQUMsQ0FBekIsRUFBMkIsQ0FBQyxLQUFLckQsUUFBTCxDQUFjc0QsTUFBZixJQUF1QixLQUFLdEQsUUFBTCxDQUFjc0MsV0FBckMsSUFBa0QsS0FBS3RDLFFBQUwsQ0FBYzZILFFBQWQsRUFBN0U7QUFBc0csU0FBMVEsRUFBMlFzRixRQUFPLGtCQUFVO0FBQUMsZUFBS25OLFFBQUwsQ0FBY3FELFNBQWQsR0FBd0IsQ0FBQyxDQUF6QixFQUEyQixLQUFLckQsUUFBTCxDQUFjbUYsU0FBZCxFQUEzQjtBQUFxRCxTQUFsVixFQUFtVmlJLFNBQVEsaUJBQVNwUyxDQUFULEVBQVc7QUFBQyxlQUFLZ0YsUUFBTCxDQUFjbUUsV0FBZCxHQUEwQm5KLEVBQUU0TSxNQUFGLENBQVM5SSxLQUFuQztBQUF5QyxTQUFoWixFQUFpWnVPLFdBQVUsbUJBQVNyUyxDQUFULEVBQVc7QUFBQyxjQUFHLEVBQUVBLEVBQUVzUyxPQUFGLElBQVd0UyxFQUFFdVMsUUFBYixJQUF1QnZTLEVBQUV3UyxNQUF6QixJQUFpQ3hTLEVBQUV5UyxPQUFyQyxDQUFILEVBQWlELFFBQU8sV0FBVXpTLENBQVYsR0FBWUEsRUFBRTBTLEtBQWQsR0FBb0IxUyxFQUFFMlMsT0FBN0IsR0FBc0MsS0FBS2xCLEVBQUVDLFNBQVA7QUFBaUIsbUJBQUsxTSxRQUFMLENBQWNVLGdCQUFkLElBQWdDLENBQUMsS0FBS1YsUUFBTCxDQUFjbUUsV0FBZCxDQUEwQjlGLE1BQTNELElBQW1FLEtBQUsyQixRQUFMLENBQWN1SyxvQkFBZCxFQUFuRSxDQUF3RyxNQUFNLEtBQUtrQyxFQUFFRyxNQUFQO0FBQWMsbUJBQUs1TSxRQUFMLENBQWNpQixhQUFkLElBQTZCLENBQUMsS0FBS2pCLFFBQUwsQ0FBY21FLFdBQWQsQ0FBMEI5RixNQUF4RCxJQUFnRSxLQUFLMkIsUUFBTCxDQUFjdUssb0JBQWQsRUFBaEUsQ0FBcUcsTUFBTSxLQUFLa0MsRUFBRUUsTUFBUDtBQUFjLG1CQUFLM00sUUFBTCxDQUFjbUUsV0FBZCxDQUEwQjlGLE1BQTFCLEdBQWlDLEtBQUsyQixRQUFMLENBQWNtRSxXQUFkLEdBQTBCLEVBQTNELEdBQThELEtBQUtuRSxRQUFMLENBQWNzRCxNQUFkLEdBQXFCLEtBQUt0RCxRQUFMLENBQWNtRixTQUFkLEVBQXJCLEdBQStDLEtBQUtuRixRQUFMLENBQWNzQixpQkFBZCxJQUFpQyxLQUFLdEIsUUFBTCxDQUFjK0gsS0FBZCxFQUE5SSxDQUFvSyxNQUFNO0FBQVEsbUJBQUsvSCxRQUFMLENBQWNzRCxNQUFkLElBQXNCLEtBQUt0RCxRQUFMLENBQWM2SCxRQUFkLEVBQXRCLENBQTlkO0FBQThnQixTQUF0K0IsRUFBdStCK0YsYUFBWSxxQkFBUzVTLENBQVQsRUFBVztBQUFDLGVBQUtnRixRQUFMLENBQWNtRSxXQUFkLENBQTBCOUYsTUFBMUIsSUFBa0NyRCxFQUFFeU0sZUFBRixFQUFsQztBQUFzRCxTQUFyakMsRUFBc2pDb0csb0JBQW1CLDRCQUFTN1MsQ0FBVCxFQUFXO0FBQUMsY0FBSUMsSUFBRSxFQUFDNlMsT0FBTSwrQkFBUCxFQUFOO0FBQUEsY0FBOEN4UyxJQUFFLEVBQWhELENBQW1ELE9BQU8sS0FBSzBFLFFBQUwsQ0FBYzJDLFVBQWQsSUFBMEIsQ0FBQyxLQUFLM0MsUUFBTCxDQUFjbUIsUUFBekMsS0FBb0Q3RixFQUFFZ1AsSUFBRixDQUFPLEtBQUt5RCxXQUFMLENBQWlCL1MsQ0FBakIsQ0FBUCxHQUE0QixLQUFLK1IsYUFBTCxJQUFvQnpSLEVBQUVnUCxJQUFGLENBQU8sS0FBSzBELFdBQUwsQ0FBaUJoVCxDQUFqQixDQUFQLENBQXBHLEdBQWlJLEtBQUtnRixRQUFMLENBQWMyQyxVQUFkLElBQTBCbkgsRUFBRVAsQ0FBRixFQUFJLEVBQUNnVCxJQUFHLEVBQUM1QyxPQUFNLEtBQUs2QixPQUFaLEVBQW9CNUIsTUFBSyxLQUFLNkIsTUFBOUIsRUFBcUNlLFNBQVEsS0FBS2IsU0FBbEQsRUFBSixFQUFpRWMsS0FBSSxPQUFyRSxFQUFKLENBQTNKLEVBQThPLEtBQUtuTyxRQUFMLENBQWMyQyxVQUFkLElBQTBCLEtBQUszQyxRQUFMLENBQWNtQixRQUF4QyxJQUFrRDNGLEVBQUVQLENBQUYsRUFBSSxFQUFDbVQsT0FBTSxFQUFDbEwsVUFBUyxLQUFLbEQsUUFBTCxDQUFja0QsUUFBeEIsRUFBUCxFQUFKLENBQWhTLEVBQStVbEksRUFBRSxLQUFGLEVBQVFDLENBQVIsRUFBVUssQ0FBVixDQUF0VjtBQUFtVyxTQUEzK0MsRUFBNCtDeVMsYUFBWSxxQkFBUy9TLENBQVQsRUFBVztBQUFDLGlCQUFPQSxFQUFFLE9BQUYsRUFBVSxFQUFDOFMsT0FBTSx1QkFBUCxFQUErQk0sT0FBTSxFQUFDcFEsTUFBSyxNQUFOLEVBQWFxUSxjQUFhLEtBQTFCLEVBQWdDbkwsVUFBUyxLQUFLbEQsUUFBTCxDQUFja0QsUUFBdkQsRUFBckMsRUFBc0dvTCxVQUFTLEVBQUN4UCxPQUFNLEtBQUtrQixRQUFMLENBQWNtRSxXQUFyQixFQUEvRyxFQUFpSm9LLE9BQU0sRUFBQ0MsT0FBTSxLQUFLekIsYUFBTCxHQUFtQixLQUFLRCxVQUFMLEdBQWdCLElBQW5DLEdBQXdDLElBQS9DLEVBQXZKLEVBQTRNbUIsSUFBRyxFQUFDNUMsT0FBTSxLQUFLNkIsT0FBWixFQUFvQjlCLE9BQU0sS0FBS2dDLE9BQS9CLEVBQXVDOUIsTUFBSyxLQUFLNkIsTUFBakQsRUFBd0RlLFNBQVEsS0FBS2IsU0FBckUsRUFBK0VvQixXQUFVLEtBQUtiLFdBQTlGLEVBQS9NLEVBQTBUTyxLQUFJLE9BQTlULEVBQVYsQ0FBUDtBQUF5VixTQUE3MUQsRUFBODFESCxhQUFZLHFCQUFTaFQsQ0FBVCxFQUFXO0FBQUMsaUJBQU9BLEVBQUUsS0FBRixFQUFRLEVBQUM4UyxPQUFNLHVCQUFQLEVBQStCUSxVQUFTLEVBQUNJLGFBQVksS0FBSzFPLFFBQUwsQ0FBY21FLFdBQTNCLEVBQXhDLEVBQWdGZ0ssS0FBSSxPQUFwRixFQUFSLENBQVA7QUFBNkcsU0FBbitELEVBQW8rRGxCLGtCQUFpQiw0QkFBVTtBQUFDLGVBQUtILFVBQUwsR0FBZ0JoQyxLQUFLNkQsR0FBTCxDQUFTLENBQVQsRUFBVyxLQUFLdEgsS0FBTCxDQUFXdUgsS0FBWCxHQUFpQixLQUFLdkgsS0FBTCxDQUFXdUgsS0FBWCxDQUFpQkMsV0FBakIsR0FBNkIsQ0FBOUMsR0FBZ0QsQ0FBM0QsQ0FBaEI7QUFBOEUsU0FBOWtFLEVBQW5PLEVBQW16RWxTLFFBQU8sZ0JBQVMzQixDQUFULEVBQVc7QUFBQyxlQUFPLEtBQUs2UyxrQkFBTCxDQUF3QjdTLENBQXhCLENBQVA7QUFBa0MsT0FBeDJFLEVBQXg1YjtBQUFBLFFBQWt3Z0I4VCxJQUFFeFQsRUFBRSxDQUFGLENBQXB3Z0I7QUFBQSxRQUF5d2dCeVQsSUFBRUQsRUFBRWpDLENBQUYsRUFBSSxJQUFKLEVBQVMsQ0FBQyxDQUFWLEVBQVksSUFBWixFQUFpQixJQUFqQixFQUFzQixJQUF0QixDQUEzd2dCO0FBQUEsUUFBdXlnQm1DLElBQUVELEVBQUU3VCxPQUEzeWdCO0FBQUEsUUFBbXpnQitULElBQUUsRUFBQ3hELE1BQUssNkJBQU4sRUFBb0N5RCxZQUFXLEVBQUNDLGFBQVkzQyxDQUFiLEVBQWU0QyxhQUFZSixDQUEzQixFQUEvQyxFQUE2RUssUUFBTyxDQUFDbEUsQ0FBRCxDQUFwRixFQUF3Rk8sUUFBTyxDQUFDLFVBQUQsQ0FBL0YsRUFBcnpnQjtBQUFBLFFBQWs2Z0I0RCxJQUFFLFNBQUZBLENBQUUsR0FBVTtBQUFDLFVBQUl0VSxJQUFFLElBQU47QUFBQSxVQUFXQyxJQUFFRCxFQUFFNFEsY0FBZjtBQUFBLFVBQThCdFEsSUFBRU4sRUFBRTZRLEtBQUYsQ0FBUUMsRUFBUixJQUFZN1EsQ0FBNUMsQ0FBOEMsT0FBT0ssRUFBRSxLQUFGLEVBQVEsRUFBQ3lRLGFBQVksK0JBQWIsRUFBUixFQUFzRCxDQUFDelEsRUFBRSxrQkFBRixFQUFxQixFQUFDeVEsYUFBWSw2QkFBYixFQUEyQ3FDLE9BQU0sRUFBQ21CLEtBQUksS0FBTCxFQUFXOUQsTUFBSyx3Q0FBaEIsRUFBeUQrRCxRQUFPLEVBQWhFLEVBQWpELEVBQXJCLEVBQTJJLENBQUN4VSxFQUFFeVUsRUFBRixDQUFLelUsRUFBRWdGLFFBQUYsQ0FBVzZFLFlBQWhCLEVBQThCLFVBQVM1SixDQUFULEVBQVc7QUFBQyxlQUFNLENBQUNLLEVBQUUsS0FBRixFQUFRLEVBQUNvVSxLQUFJLFdBQVN6VSxFQUFFdUcsRUFBaEIsRUFBbUJ1SyxhQUFZLDBDQUEvQixFQUEwRWtDLElBQUcsRUFBQ1EsV0FBVXpULEVBQUV1USxzQkFBYixFQUE3RSxFQUFSLEVBQTJILENBQUNqUSxFQUFFLEtBQUYsRUFBUSxFQUFDeVEsYUFBWSxrQ0FBYixFQUFSLEVBQXlELENBQUN6USxFQUFFLE1BQUYsRUFBUyxFQUFDeVEsYUFBWSxtQ0FBYixFQUFULEVBQTJELENBQUMvUSxFQUFFaVIsRUFBRixDQUFLalIsRUFBRWtSLEVBQUYsQ0FBS2pSLEVBQUVpTCxLQUFQLENBQUwsQ0FBRCxDQUEzRCxDQUFELEVBQW1GNUssRUFBRSxNQUFGLEVBQVMsRUFBQ3lRLGFBQVksbURBQWIsRUFBaUVrQyxJQUFHLEVBQUNRLFdBQVUsbUJBQVNuVCxDQUFULEVBQVc7QUFBQ04sZ0JBQUVnRixRQUFGLENBQVdnSyxNQUFYLENBQWtCL08sQ0FBbEI7QUFBcUIsYUFBNUMsRUFBcEUsRUFBVCxFQUE0SCxDQUFDRCxFQUFFaVIsRUFBRixDQUFLLEdBQUwsQ0FBRCxDQUE1SCxDQUFuRixDQUF6RCxDQUFELENBQTNILENBQUQsQ0FBTjtBQUE2WixPQUF2YyxDQUFELEVBQTJjalIsRUFBRWlSLEVBQUYsQ0FBSyxHQUFMLENBQTNjLEVBQXFkalIsRUFBRWdGLFFBQUYsQ0FBVytFLGdCQUFYLEdBQTRCekosRUFBRSxLQUFGLEVBQVEsRUFBQ29VLEtBQUksV0FBTCxFQUFpQjNELGFBQVksaUVBQTdCLEVBQVIsRUFBd0csQ0FBQ3pRLEVBQUUsTUFBRixFQUFTLEVBQUN5USxhQUFZLGdDQUFiLEVBQVQsRUFBd0QsQ0FBQy9RLEVBQUVpUixFQUFGLENBQUtqUixFQUFFa1IsRUFBRixDQUFLbFIsRUFBRTBHLFNBQVAsQ0FBTCxDQUFELENBQXhELENBQUQsQ0FBeEcsQ0FBNUIsR0FBME4xRyxFQUFFMlUsRUFBRixFQUEvcUIsRUFBc3JCM1UsRUFBRWlSLEVBQUYsQ0FBSyxHQUFMLENBQXRyQixFQUFnc0JqUixFQUFFZ0YsUUFBRixDQUFXd0UsUUFBWCxJQUFxQnhKLEVBQUVnRixRQUFGLENBQVdtRSxXQUFoQyxHQUE0Q25KLEVBQUUyVSxFQUFGLEVBQTVDLEdBQW1EclUsRUFBRSxhQUFGLEVBQWdCLEVBQUNvVSxLQUFJLFlBQUwsRUFBaEIsQ0FBbnZCLEVBQXV4QjFVLEVBQUVpUixFQUFGLENBQUssR0FBTCxDQUF2eEIsRUFBaXlCM1EsRUFBRSxjQUFGLEVBQWlCLEVBQUNvVSxLQUFJLE9BQUwsRUFBYXZCLEtBQUksT0FBakIsRUFBakIsQ0FBanlCLENBQTNJLEVBQXk5QixDQUF6OUIsQ0FBRCxDQUF0RCxFQUFvaEMsQ0FBcGhDLENBQVA7QUFBOGhDLEtBQTMvaUI7QUFBQSxRQUE0L2lCeUIsSUFBRSxFQUE5L2lCO0FBQUEsUUFBaWdqQkMsSUFBRSxFQUFDbFQsUUFBTzJTLENBQVIsRUFBVTFTLGlCQUFnQmdULENBQTFCLEVBQW5nakI7QUFBQSxRQUFnaWpCRSxJQUFFRCxDQUFsaWpCO0FBQUEsUUFBb2lqQkUsSUFBRXpVLEVBQUUsQ0FBRixDQUF0aWpCO0FBQUEsUUFBMmlqQjBVLElBQUVELEVBQUVkLENBQUYsRUFBSWEsQ0FBSixFQUFNLENBQUMsQ0FBUCxFQUFTLElBQVQsRUFBYyxJQUFkLEVBQW1CLElBQW5CLENBQTdpakI7QUFBQSxRQUFza2pCRyxJQUFFRCxFQUFFOVUsT0FBMWtqQjtBQUFBLFFBQWtsakJnVixJQUFFLEVBQUN6RSxNQUFLLDhCQUFOLEVBQXFDeUQsWUFBVyxFQUFDQyxhQUFZM0MsQ0FBYixFQUFlNEMsYUFBWUosQ0FBM0IsRUFBaEQsRUFBOEVLLFFBQU8sQ0FBQ2xFLENBQUQsQ0FBckYsRUFBeUZPLFFBQU8sQ0FBQyxVQUFELENBQWhHLEVBQXBsakI7QUFBQSxRQUFrc2pCeUUsSUFBRSxTQUFGQSxDQUFFLEdBQVU7QUFBQyxVQUFJblYsSUFBRSxJQUFOO0FBQUEsVUFBV0MsSUFBRUQsRUFBRTRRLGNBQWY7QUFBQSxVQUE4QnRRLElBQUVOLEVBQUU2USxLQUFGLENBQVFDLEVBQVIsSUFBWTdRLENBQTVDLENBQThDLE9BQU9LLEVBQUUsS0FBRixFQUFRLEVBQUN5USxhQUFZLCtCQUFiLEVBQVIsRUFBc0QsQ0FBQy9RLEVBQUVnRixRQUFGLENBQVd3RSxRQUFYLElBQXFCLENBQUN4SixFQUFFZ0YsUUFBRixDQUFXbUUsV0FBakMsR0FBNkM3SSxFQUFFLEtBQUYsRUFBUSxFQUFDeVEsYUFBWSw4QkFBYixFQUFSLEVBQXFELENBQUMvUSxFQUFFaVIsRUFBRixDQUFLLFdBQVNqUixFQUFFa1IsRUFBRixDQUFLbFIsRUFBRWdGLFFBQUYsQ0FBV3lFLGFBQVgsQ0FBeUIsQ0FBekIsRUFBNEJ5QixLQUFqQyxDQUFULEdBQWlELE1BQXRELENBQUQsQ0FBckQsQ0FBN0MsR0FBbUtsTCxFQUFFZ0YsUUFBRixDQUFXbUUsV0FBWCxHQUF1Qm5KLEVBQUUyVSxFQUFGLEVBQXZCLEdBQThCclUsRUFBRSxhQUFGLENBQWxNLEVBQW1OTixFQUFFaVIsRUFBRixDQUFLLEdBQUwsQ0FBbk4sRUFBNk4zUSxFQUFFLGNBQUYsRUFBaUIsRUFBQ29VLEtBQUksT0FBTCxFQUFhdkIsS0FBSSxPQUFqQixFQUFqQixDQUE3TixDQUF0RCxFQUFnVSxDQUFoVSxDQUFQO0FBQTBVLEtBQXZra0I7QUFBQSxRQUF3a2tCaUMsSUFBRSxFQUExa2tCO0FBQUEsUUFBNmtrQkMsSUFBRSxFQUFDMVQsUUFBT3dULENBQVIsRUFBVXZULGlCQUFnQndULENBQTFCLEVBQS9ra0I7QUFBQSxRQUE0bWtCRSxLQUFHRCxDQUEvbWtCO0FBQUEsUUFBaW5rQkUsS0FBR2pWLEVBQUUsQ0FBRixDQUFwbmtCO0FBQUEsUUFBeW5rQmtWLEtBQUdELEdBQUdMLENBQUgsRUFBS0ksRUFBTCxFQUFRLENBQUMsQ0FBVCxFQUFXLElBQVgsRUFBZ0IsSUFBaEIsRUFBcUIsSUFBckIsQ0FBNW5rQjtBQUFBLFFBQXVwa0JHLEtBQUdELEdBQUd0VixPQUE3cGtCO0FBQUEsUUFBcXFrQndWLEtBQUcsRUFBQ25RLE9BQU0sRUFBQ29RLE1BQUssRUFBQzNTLE1BQUtsQyxNQUFOLEVBQWE4VSxVQUFTLENBQUMsQ0FBdkIsRUFBTixFQUFQLEVBQXdDdE0sVUFBUyxFQUFDdU0sY0FBYSx3QkFBVTtBQUFDLGlCQUFPLEtBQUs3USxRQUFMLENBQWN1RCxtQkFBZCxDQUFrQyxLQUFLb04sSUFBTCxDQUFVblAsRUFBNUMsQ0FBUDtBQUF1RCxTQUFoRixFQUFpRnNQLGNBQWEsd0JBQVU7QUFBQyxpQkFBTSxDQUFDLENBQUMsS0FBS0gsSUFBTCxDQUFVcEssUUFBWixLQUF1QixLQUFLdkcsUUFBTCxDQUFja0UsU0FBZCxHQUF3QixLQUFLeU0sSUFBTCxDQUFVeEksZUFBbEMsR0FBa0QsS0FBS3dJLElBQUwsQ0FBVXpILFVBQW5GLENBQU47QUFBcUcsU0FBOU0sRUFBakQsRUFBaVFoRSxPQUFNLEVBQUMsbUJBQWtCLHdCQUFTbEssQ0FBVCxFQUFXO0FBQUMsV0FBQyxDQUFELEtBQUtBLENBQUwsSUFBUSxLQUFLMlYsSUFBTCxDQUFVbEgsUUFBbEIsSUFBNEIsS0FBS3pKLFFBQUwsQ0FBY2dKLFdBQWQsQ0FBMEIsQ0FBQyxDQUEzQixFQUE2QixLQUFLMkgsSUFBbEMsQ0FBNUI7QUFBb0UsU0FBbkcsRUFBdlEsRUFBNFdqTCxTQUFRLEVBQUNxTCx5QkFBd0IxVixFQUFHLFlBQVU7QUFBQyxlQUFLc1YsSUFBTCxDQUFVcEssUUFBVixJQUFvQixLQUFLdkcsUUFBTCxDQUFja0Isa0JBQWxDLEdBQXFELEtBQUtsQixRQUFMLENBQWNpSixjQUFkLENBQTZCLEtBQUswSCxJQUFsQyxDQUFyRCxHQUE2RixLQUFLM1EsUUFBTCxDQUFjZ0ssTUFBZCxDQUFxQixLQUFLMkcsSUFBMUIsQ0FBN0Y7QUFBNkgsU0FBM0ksQ0FBekIsRUFBdUtLLDhCQUE2QjNWLEVBQUcsWUFBVTtBQUFDLGVBQUsyRSxRQUFMLENBQWNpSixjQUFkLENBQTZCLEtBQUswSCxJQUFsQztBQUF3QyxTQUF0RCxDQUFwTSxFQUFwWCxFQUF4cWtCO0FBQUEsUUFBMnhsQk0sS0FBRyxFQUFDeEYsTUFBSyx3QkFBTixFQUErQkMsUUFBTyxDQUFDLFVBQUQsRUFBWSxXQUFaLEVBQXdCLGVBQXhCLEVBQXdDLFNBQXhDLENBQXRDLEVBQXlGMkQsUUFBTyxDQUFDcUIsRUFBRCxDQUFoRyxFQUE5eGxCO0FBQUEsUUFBbzRsQlEsS0FBRyxTQUFIQSxFQUFHLEdBQVU7QUFBQyxVQUFJbFcsSUFBRSxJQUFOO0FBQUEsVUFBV0MsSUFBRUQsRUFBRTRRLGNBQWY7QUFBQSxVQUE4QnRRLElBQUVOLEVBQUU2USxLQUFGLENBQVFDLEVBQVIsSUFBWTdRLENBQTVDLENBQThDLE9BQU9LLEVBQUUsS0FBRixFQUFRLEVBQUN5USxhQUFZLDJCQUFiLEVBQVIsRUFBa0QsQ0FBQ3pRLEVBQUUsS0FBRixFQUFRLEVBQUN3UyxPQUFNLENBQUMsd0JBQUQsRUFBMEIsRUFBQyxvQ0FBbUM5UyxFQUFFMlYsSUFBRixDQUFPeFAsUUFBM0MsRUFBb0QsZ0NBQStCbkcsRUFBRTJWLElBQUYsQ0FBT3BILFVBQTFGLEVBQXFHLGlDQUFnQyxDQUFDdk8sRUFBRTJWLElBQUYsQ0FBT3BILFVBQTdJLEVBQXdKLG9DQUFtQ3ZPLEVBQUVnRixRQUFGLENBQVd3RyxVQUFYLENBQXNCeEwsRUFBRTJWLElBQXhCLENBQTNMLEVBQXlOLG1DQUFrQzNWLEVBQUVnRixRQUFGLENBQVdrRSxTQUFYLElBQXNCbEosRUFBRTJWLElBQUYsQ0FBT3RJLFNBQXhSLEVBQWtTLGdDQUErQnJOLEVBQUVnRixRQUFGLENBQVdrRSxTQUFYLElBQXNCLEVBQUVsSixFQUFFMlYsSUFBRixDQUFPdEksU0FBUCxJQUFrQnJOLEVBQUUyVixJQUFGLENBQU92SSxlQUEzQixDQUF2VixFQUExQixDQUFQLEVBQVIsRUFBK2EsQ0FBQ3BOLEVBQUUyVixJQUFGLENBQU9ySyxNQUFQLEdBQWNoTCxFQUFFLEtBQUYsRUFBUSxFQUFDeVEsYUFBWSwwQ0FBYixFQUFSLEVBQWlFLENBQUMvUSxFQUFFaVIsRUFBRixDQUFLLEdBQUwsQ0FBRCxDQUFqRSxDQUFkLEdBQTRGM1EsRUFBRSxLQUFGLEVBQVEsRUFBQ3lRLGFBQVksc0NBQWIsRUFBb0RrQyxJQUFHLEVBQUNRLFdBQVV6VCxFQUFFZ1csNEJBQWIsRUFBdkQsRUFBUixFQUEyRyxDQUFDMVYsRUFBRSxZQUFGLEVBQWUsRUFBQzhTLE9BQU0sRUFBQzNDLE1BQUssdUNBQU4sRUFBOEMrRCxRQUFPLEVBQXJELEVBQVAsRUFBZixFQUFnRixDQUFDbFUsRUFBRSxNQUFGLEVBQVMsRUFBQ3dTLE9BQU0sQ0FBQyw4QkFBRCxFQUFnQyxFQUFDLHlDQUF3QzlTLEVBQUU4VixZQUEzQyxFQUFoQyxDQUFQLEVBQVQsQ0FBRCxDQUFoRixDQUFELENBQTNHLEVBQTRTLENBQTVTLENBQTdGLEVBQTRZOVYsRUFBRWlSLEVBQUYsQ0FBSyxHQUFMLENBQTVZLEVBQXNaM1EsRUFBRSxLQUFGLEVBQVEsRUFBQ3lRLGFBQVksK0JBQWIsRUFBNkNrQyxJQUFHLEVBQUNRLFdBQVV6VCxFQUFFK1YsdUJBQWIsRUFBaEQsRUFBUixFQUErRixDQUFDL1YsRUFBRWdGLFFBQUYsQ0FBV2dDLFFBQVgsSUFBcUIsQ0FBQ2hILEVBQUVnRixRQUFGLENBQVdrQixrQkFBakMsR0FBb0Q1RixFQUFFLEtBQUYsRUFBUSxFQUFDeVEsYUFBWSxrQ0FBYixFQUFSLEVBQXlELENBQUN6USxFQUFFLE1BQUYsRUFBUyxFQUFDd1MsT0FBTSxDQUFDLDBCQUFELEVBQTRCLEVBQUMscUNBQW9DOVMsRUFBRTZWLFlBQUYsS0FBaUI3VixFQUFFbUYsT0FBeEQsRUFBZ0UsMkNBQTBDbkYsRUFBRTZWLFlBQUYsS0FBaUI3VixFQUFFa0YsYUFBN0gsRUFBMkksdUNBQXNDbEYsRUFBRTZWLFlBQUYsS0FBaUI3VixFQUFFaUYsU0FBcE0sRUFBNUIsQ0FBUCxFQUFULEVBQTZQLENBQUMzRSxFQUFFLE1BQUYsRUFBUyxFQUFDeVEsYUFBWSwrQkFBYixFQUFULENBQUQsQ0FBN1AsQ0FBRCxDQUF6RCxDQUFwRCxHQUF3YS9RLEVBQUUyVSxFQUFGLEVBQXphLEVBQWdiM1UsRUFBRWlSLEVBQUYsQ0FBSyxHQUFMLENBQWhiLEVBQTBiM1EsRUFBRSxPQUFGLEVBQVUsRUFBQ3lRLGFBQVksdUJBQWIsRUFBVixFQUFnRCxDQUFDL1EsRUFBRWlSLEVBQUYsQ0FBSyxlQUFhalIsRUFBRWtSLEVBQUYsQ0FBS2xSLEVBQUUyVixJQUFGLENBQU96SyxLQUFaLENBQWIsR0FBZ0MsWUFBckMsQ0FBRCxFQUFvRGxMLEVBQUUyVixJQUFGLENBQU9wSyxRQUFQLEdBQWdCakwsRUFBRSxNQUFGLEVBQVMsRUFBQ3lRLGFBQVksdUJBQWIsRUFBVCxFQUErQyxDQUFDLENBQUMvUSxFQUFFZ0YsUUFBRixDQUFXa0UsU0FBWixJQUF1QmxKLEVBQUVnRixRQUFGLENBQVc0QyxTQUFsQyxHQUE0QyxDQUFDNUgsRUFBRWlSLEVBQUYsQ0FBSyxNQUFJalIsRUFBRWtSLEVBQUYsQ0FBS2xSLEVBQUUyVixJQUFGLENBQU8vRyxLQUFQLENBQWE1TyxFQUFFZ0YsUUFBRixDQUFXNkMsV0FBeEIsQ0FBTCxDQUFKLEdBQStDLEdBQXBELENBQUQsQ0FBNUMsR0FBdUc3SCxFQUFFZ0YsUUFBRixDQUFXa0UsU0FBWCxJQUFzQmxKLEVBQUVnRixRQUFGLENBQVdpRix5QkFBakMsR0FBMkQsQ0FBQ2pLLEVBQUVpUixFQUFGLENBQUssTUFBSWpSLEVBQUVrUixFQUFGLENBQUtsUixFQUFFZ0YsUUFBRixDQUFXaUUsY0FBWCxDQUEwQmpKLEVBQUUyVixJQUFGLENBQU9uUCxFQUFqQyxFQUFxQ3hHLEVBQUVnRixRQUFGLENBQVc2QyxXQUFoRCxDQUFMLENBQUosR0FBdUUsR0FBNUUsQ0FBRCxDQUEzRCxHQUE4STdILEVBQUUyVSxFQUFGLEVBQXRQLENBQS9DLEVBQTZTLENBQTdTLENBQWhCLEdBQWdVM1UsRUFBRTJVLEVBQUYsRUFBcFgsQ0FBaEQsQ0FBMWIsQ0FBL0YsQ0FBdFosQ0FBL2EsQ0FBRCxFQUFneEQzVSxFQUFFaVIsRUFBRixDQUFLLEdBQUwsQ0FBaHhELEVBQTB4RGpSLEVBQUU4VixZQUFGLEdBQWV4VixFQUFFLEtBQUYsRUFBUSxFQUFDeVEsYUFBWSxzQkFBYixFQUFSLEVBQTZDLENBQUMvUSxFQUFFMlYsSUFBRixDQUFPbEgsUUFBUCxHQUFnQixDQUFDek8sRUFBRTJWLElBQUYsQ0FBT2hLLFFBQVAsQ0FBZ0J0SSxNQUFoQixHQUF1QnJELEVBQUV5VSxFQUFGLENBQUt6VSxFQUFFMlYsSUFBRixDQUFPaEssUUFBWixFQUFzQixVQUFTM0wsQ0FBVCxFQUFXO0FBQUMsZUFBT00sRUFBRSx3QkFBRixFQUEyQixFQUFDb1UsS0FBSTFVLEVBQUV3RyxFQUFQLEVBQVU0TSxPQUFNLEVBQUN1QyxNQUFLM1YsQ0FBTixFQUFoQixFQUEzQixDQUFQO0FBQTZELE9BQS9GLENBQXZCLEdBQXlITSxFQUFFLEtBQUYsRUFBUSxFQUFDeVEsYUFBWSxpQ0FBYixFQUFSLEVBQXdELENBQUMvUSxFQUFFbVcsRUFBRixDQUFLLENBQUwsQ0FBRCxFQUFTblcsRUFBRWlSLEVBQUYsQ0FBSyxHQUFMLENBQVQsRUFBbUIzUSxFQUFFLE1BQUYsRUFBUyxFQUFDeVEsYUFBWSxzQ0FBYixFQUFULEVBQThELENBQUMvUSxFQUFFaVIsRUFBRixDQUFLalIsRUFBRWtSLEVBQUYsQ0FBS2xSLEVBQUVnRixRQUFGLENBQVdpQyxjQUFoQixDQUFMLENBQUQsQ0FBOUQsQ0FBbkIsQ0FBeEQsQ0FBMUgsQ0FBaEIsR0FBK1RqSCxFQUFFMlYsSUFBRixDQUFPakgsU0FBUCxHQUFpQnBPLEVBQUUsS0FBRixFQUFRLEVBQUN5USxhQUFZLDZCQUFiLEVBQVIsRUFBb0QsQ0FBQy9RLEVBQUVtVyxFQUFGLENBQUssQ0FBTCxDQUFELEVBQVNuVyxFQUFFaVIsRUFBRixDQUFLLEdBQUwsQ0FBVCxFQUFtQjNRLEVBQUUsTUFBRixFQUFTLEVBQUN5USxhQUFZLGtDQUFiLEVBQVQsRUFBMEQsQ0FBQy9RLEVBQUVpUixFQUFGLENBQUtqUixFQUFFa1IsRUFBRixDQUFLbFIsRUFBRWdGLFFBQUYsQ0FBVzZCLFdBQWhCLENBQUwsQ0FBRCxDQUExRCxDQUFuQixDQUFwRCxDQUFqQixHQUEwTDdHLEVBQUUyVixJQUFGLENBQU9oSCxvQkFBUCxHQUE0QnJPLEVBQUUsS0FBRixFQUFRLEVBQUN5USxhQUFZLDJCQUFiLEVBQVIsRUFBa0QsQ0FBQy9RLEVBQUVtVyxFQUFGLENBQUssQ0FBTCxDQUFELEVBQVNuVyxFQUFFaVIsRUFBRixDQUFLLEdBQUwsQ0FBVCxFQUFtQjNRLEVBQUUsTUFBRixFQUFTLEVBQUN5USxhQUFZLGdDQUFiLEVBQVQsRUFBd0QsQ0FBQy9RLEVBQUVpUixFQUFGLENBQUssZUFBYWpSLEVBQUVrUixFQUFGLENBQUtsUixFQUFFMlYsSUFBRixDQUFPaEgsb0JBQVosQ0FBYixHQUErQyxZQUFwRCxDQUFELEVBQW1Fck8sRUFBRSxHQUFGLEVBQU0sRUFBQ3lRLGFBQVksdUJBQWIsRUFBcUNxQyxPQUFNLEVBQUNnRCxPQUFNcFcsRUFBRWdGLFFBQUYsQ0FBVzBDLFVBQWxCLEVBQTNDLEVBQXlFdUwsSUFBRyxFQUFDb0QsT0FBTSxlQUFTcFcsQ0FBVCxFQUFXO0FBQUNELGNBQUVnRixRQUFGLENBQVdnSixXQUFYLENBQXVCLENBQUMsQ0FBeEIsRUFBMEJoTyxFQUFFMlYsSUFBNUI7QUFBa0MsV0FBckQsRUFBNUUsRUFBTixFQUEwSSxDQUFDM1YsRUFBRWlSLEVBQUYsQ0FBSyxpQkFBZWpSLEVBQUVrUixFQUFGLENBQUtsUixFQUFFZ0YsUUFBRixDQUFXeUMsU0FBaEIsQ0FBZixHQUEwQyxZQUEvQyxDQUFELENBQTFJLENBQW5FLENBQXhELENBQW5CLENBQWxELENBQTVCLEdBQTBhekgsRUFBRTJVLEVBQUYsRUFBcDZCLENBQTdDLEVBQXk5QixDQUF6OUIsQ0FBZixHQUEyK0IzVSxFQUFFMlUsRUFBRixFQUFyd0YsQ0FBbEQsQ0FBUDtBQUF1MEYsS0FBdndyQjtBQUFBLFFBQXd3ckIyQixLQUFHLENBQUMsWUFBVTtBQUFDLFVBQUl0VyxJQUFFLElBQU47QUFBQSxVQUFXQyxJQUFFRCxFQUFFNFEsY0FBZjtBQUFBLFVBQThCdFEsSUFBRU4sRUFBRTZRLEtBQUYsQ0FBUUMsRUFBUixJQUFZN1EsQ0FBNUMsQ0FBOEMsT0FBT0ssRUFBRSxLQUFGLEVBQVEsRUFBQ3lRLGFBQVksOEJBQWIsRUFBUixFQUFxRCxDQUFDelEsRUFBRSxNQUFGLEVBQVMsRUFBQ3lRLGFBQVksOEJBQWIsRUFBVCxDQUFELENBQXJELENBQVA7QUFBc0gsS0FBaEwsRUFBaUwsWUFBVTtBQUFDLFVBQUkvUSxJQUFFLElBQU47QUFBQSxVQUFXQyxJQUFFRCxFQUFFNFEsY0FBZjtBQUFBLFVBQThCdFEsSUFBRU4sRUFBRTZRLEtBQUYsQ0FBUUMsRUFBUixJQUFZN1EsQ0FBNUMsQ0FBOEMsT0FBT0ssRUFBRSxLQUFGLEVBQVEsRUFBQ3lRLGFBQVksOEJBQWIsRUFBUixFQUFxRCxDQUFDelEsRUFBRSxNQUFGLEVBQVMsRUFBQ3lRLGFBQVksNkJBQWIsRUFBVCxDQUFELENBQXJELENBQVA7QUFBcUgsS0FBL1YsRUFBZ1csWUFBVTtBQUFDLFVBQUkvUSxJQUFFLElBQU47QUFBQSxVQUFXQyxJQUFFRCxFQUFFNFEsY0FBZjtBQUFBLFVBQThCdFEsSUFBRU4sRUFBRTZRLEtBQUYsQ0FBUUMsRUFBUixJQUFZN1EsQ0FBNUMsQ0FBOEMsT0FBT0ssRUFBRSxLQUFGLEVBQVEsRUFBQ3lRLGFBQVksOEJBQWIsRUFBUixFQUFxRCxDQUFDelEsRUFBRSxNQUFGLEVBQVMsRUFBQ3lRLGFBQVksNEJBQWIsRUFBVCxDQUFELENBQXJELENBQVA7QUFBb0gsS0FBN2dCLENBQTN3ckI7QUFBQSxRQUEweHNCd0YsS0FBRyxFQUFDNVUsUUFBT3VVLEVBQVIsRUFBV3RVLGlCQUFnQjBVLEVBQTNCLEVBQTd4c0I7QUFBQSxRQUE0enNCRSxLQUFHRCxFQUEvenNCO0FBQUEsUUFBazBzQkUsS0FBR25XLEVBQUUsQ0FBRixDQUFyMHNCO0FBQUEsUUFBMDBzQm9XLEtBQUdELEdBQUdSLEVBQUgsRUFBTU8sRUFBTixFQUFTLENBQUMsQ0FBVixFQUFZLElBQVosRUFBaUIsSUFBakIsRUFBc0IsSUFBdEIsQ0FBNzBzQjtBQUFBLFFBQXkyc0JHLEtBQUdELEdBQUd4VyxPQUEvMnNCO0FBQUEsUUFBdTNzQjBXLEtBQUcsRUFBQ25HLE1BQUssZ0JBQU4sRUFBdUJ5RCxZQUFXLEVBQUMyQyxrQkFBaUJGLEVBQWxCLEVBQWxDLEVBQXdEdEMsUUFBTyxDQUFDdlAsQ0FBRCxDQUEvRCxFQUFtRXdFLFVBQVMsRUFBQ3dOLGdCQUFlLDBCQUFVO0FBQUMsaUJBQU8sS0FBSzlQLFFBQUwsR0FBY2lPLENBQWQsR0FBZ0JRLEVBQXZCO0FBQTBCLFNBQXJELEVBQTVFLEVBQTEzc0I7QUFBQSxRQUE4L3NCc0IsS0FBRyxTQUFIQSxFQUFHLEdBQVU7QUFBQyxVQUFJL1csSUFBRSxJQUFOO0FBQUEsVUFBV0MsSUFBRUQsRUFBRTRRLGNBQWY7QUFBQSxVQUE4QnRRLElBQUVOLEVBQUU2USxLQUFGLENBQVFDLEVBQVIsSUFBWTdRLENBQTVDLENBQThDLE9BQU9LLEVBQUUsS0FBRixFQUFRLEVBQUM2UyxLQUFJLFNBQUwsRUFBZUwsT0FBTSxDQUFDLGdCQUFELEVBQWtCLEVBQUMsMEJBQXlCLENBQUM5UyxFQUFFZ0gsUUFBN0IsRUFBc0MseUJBQXdCaEgsRUFBRWdILFFBQWhFLEVBQXlFLDhCQUE2QmhILEVBQUUySCxVQUF4RyxFQUFtSCw0QkFBMkIzSCxFQUFFbUcsUUFBaEosRUFBeUosMkJBQTBCbkcsRUFBRXFJLFNBQXJMLEVBQStMLDZCQUE0QnJJLEVBQUV3SixRQUE3TixFQUFzTyx3QkFBdUJ4SixFQUFFc0ksTUFBL1AsRUFBc1EsOEJBQTZCLFlBQVV0SSxFQUFFNkksc0JBQS9TLEVBQXNVLDhCQUE2QixZQUFVN0ksRUFBRTZJLHNCQUEvVyxFQUFzWSx5Q0FBd0M3SSxFQUFFa0csa0JBQWhiLEVBQWxCLENBQXJCLEVBQTRlK00sSUFBRyxFQUFDUSxXQUFVelQsRUFBRXVNLGVBQWIsRUFBL2UsRUFBUixFQUFzaEIsQ0FBQ2pNLEVBQUUsS0FBRixFQUFRLEVBQUN5USxhQUFZLHlCQUFiLEVBQVIsRUFBZ0QsQ0FBQ3pRLEVBQUVOLEVBQUU4VyxjQUFKLEVBQW1CLEVBQUMzRCxLQUFJLE9BQUwsRUFBYW9CLEtBQUksV0FBakIsRUFBbkIsQ0FBRCxFQUFtRHZVLEVBQUVpUixFQUFGLENBQUssR0FBTCxDQUFuRCxFQUE2RGpSLEVBQUVnSyxtQkFBRixHQUFzQjFKLEVBQUUsS0FBRixFQUFRLEVBQUN5USxhQUFZLHVCQUFiLEVBQXFDcUMsT0FBTSxFQUFDZ0QsT0FBTXBXLEVBQUVnSCxRQUFGLEdBQVdoSCxFQUFFNkYsWUFBYixHQUEwQjdGLEVBQUUrRixjQUFuQyxFQUEzQyxFQUE4RmtOLElBQUcsRUFBQ1EsV0FBVXpULEVBQUU4TSxzQkFBYixFQUFqRyxFQUFSLEVBQStJLENBQUM5TSxFQUFFaVIsRUFBRixDQUFLLEdBQUwsQ0FBRCxDQUEvSSxDQUF0QixHQUFrTGpSLEVBQUUyVSxFQUFGLEVBQS9PLEVBQXNQM1UsRUFBRWlSLEVBQUYsQ0FBSyxHQUFMLENBQXRQLEVBQWdRM1EsRUFBRSxLQUFGLEVBQVEsRUFBQ3lRLGFBQVksK0JBQWIsRUFBNkNrQyxJQUFHLEVBQUNRLFdBQVV6VCxFQUFFZ04sc0JBQWIsRUFBaEQsRUFBUixFQUE4RixDQUFDMU0sRUFBRSxNQUFGLEVBQVMsRUFBQ3dTLE9BQU0sQ0FBQyx1QkFBRCxFQUF5QixFQUFDLGtDQUFpQzlTLEVBQUVzSSxNQUFwQyxFQUF6QixDQUFQLEVBQVQsQ0FBRCxDQUE5RixDQUFoUSxDQUFoRCxFQUEwZSxDQUExZSxDQUFELEVBQThldEksRUFBRWlSLEVBQUYsQ0FBSyxHQUFMLENBQTllLEVBQXdmalIsRUFBRXNJLE1BQUYsR0FBU2hJLEVBQUUsS0FBRixFQUFRLEVBQUM2UyxLQUFJLE1BQUwsRUFBWXBDLGFBQVksc0JBQXhCLEVBQStDd0MsT0FBTSxFQUFDeE0sV0FBVS9HLEVBQUU0SSxlQUFGLEdBQWtCLElBQTdCLEVBQXJELEVBQVIsRUFBaUcsQ0FBQzVJLEVBQUU4SSxpQkFBRixHQUFvQixDQUFDOUksRUFBRWtKLFNBQUYsSUFBYWxKLEVBQUUySSxlQUFmLEdBQStCckksRUFBRSxLQUFGLEVBQVEsRUFBQ3lRLGFBQVksZ0NBQWIsRUFBUixFQUF1RCxDQUFDL1EsRUFBRW1XLEVBQUYsQ0FBSyxDQUFMLENBQUQsRUFBU25XLEVBQUVpUixFQUFGLENBQUssR0FBTCxDQUFULEVBQW1CM1EsRUFBRSxNQUFGLEVBQVMsRUFBQ3lRLGFBQVkscUNBQWIsRUFBVCxFQUE2RCxDQUFDL1EsRUFBRWlSLEVBQUYsQ0FBS2pSLEVBQUVrUixFQUFGLENBQUtsUixFQUFFa0gsYUFBUCxDQUFMLENBQUQsQ0FBN0QsQ0FBbkIsQ0FBdkQsQ0FBL0IsR0FBdU0sTUFBSWxILEVBQUUwSSxpQkFBRixDQUFvQnJGLE1BQXhCLEdBQStCL0MsRUFBRSxLQUFGLEVBQVEsRUFBQ3lRLGFBQVksZ0NBQWIsRUFBUixFQUF1RCxDQUFDL1EsRUFBRW1XLEVBQUYsQ0FBSyxDQUFMLENBQUQsRUFBU25XLEVBQUVpUixFQUFGLENBQUssR0FBTCxDQUFULEVBQW1CM1EsRUFBRSxNQUFGLEVBQVMsRUFBQ3lRLGFBQVkscUNBQWIsRUFBVCxFQUE2RCxDQUFDL1EsRUFBRWlSLEVBQUYsQ0FBS2pSLEVBQUVrUixFQUFGLENBQUtsUixFQUFFbUgsYUFBUCxDQUFMLENBQUQsQ0FBN0QsQ0FBbkIsQ0FBdkQsQ0FBL0IsR0FBdU03RyxFQUFFLEtBQUYsRUFBUSxFQUFDeVEsYUFBWSxzQkFBYixFQUFSLEVBQTZDL1EsRUFBRXlVLEVBQUYsQ0FBS3pVLEVBQUUwSSxpQkFBUCxFQUEwQixVQUFTMUksQ0FBVCxFQUFXO0FBQUMsZUFBT00sRUFBRSxtQkFBRixFQUFzQixFQUFDb1UsS0FBSTFVLEVBQUV3RyxFQUFQLEVBQVU0TSxPQUFNLEVBQUN1QyxNQUFLM1YsQ0FBTixFQUFoQixFQUF0QixDQUFQO0FBQXdELE9BQTlGLENBQTdDLENBQS9ZLENBQXBCLEdBQW1qQixDQUFDQSxFQUFFK0ksa0JBQUYsR0FBcUJ6SSxFQUFFLEtBQUYsRUFBUSxFQUFDeVEsYUFBWSw2QkFBYixFQUFSLEVBQW9ELENBQUMvUSxFQUFFbVcsRUFBRixDQUFLLENBQUwsQ0FBRCxFQUFTblcsRUFBRWlSLEVBQUYsQ0FBSyxHQUFMLENBQVQsRUFBbUIzUSxFQUFFLE1BQUYsRUFBUyxFQUFDeVEsYUFBWSxrQ0FBYixFQUFULEVBQTBELENBQUMvUSxFQUFFaVIsRUFBRixDQUFLalIsRUFBRWtSLEVBQUYsQ0FBS2xSLEVBQUU2RyxXQUFQLENBQUwsQ0FBRCxDQUExRCxDQUFuQixDQUFwRCxDQUFyQixHQUFxTDdHLEVBQUVnSix1QkFBRixHQUEwQjFJLEVBQUUsS0FBRixFQUFRLEVBQUN5USxhQUFZLDJCQUFiLEVBQVIsRUFBa0QsQ0FBQy9RLEVBQUVtVyxFQUFGLENBQUssQ0FBTCxDQUFELEVBQVNuVyxFQUFFaVIsRUFBRixDQUFLLEdBQUwsQ0FBVCxFQUFtQjNRLEVBQUUsTUFBRixFQUFTLEVBQUN5USxhQUFZLGdDQUFiLEVBQVQsRUFBd0QsQ0FBQy9RLEVBQUVpUixFQUFGLENBQUsseUNBQXVDalIsRUFBRWtSLEVBQUYsQ0FBS2xSLEVBQUVnSix1QkFBUCxDQUF2QyxHQUF1RSxlQUE1RSxDQUFELEVBQThGMUksRUFBRSxHQUFGLEVBQU0sRUFBQ3lRLGFBQVksdUJBQWIsRUFBcUNxQyxPQUFNLEVBQUNnRCxPQUFNcFcsRUFBRTBILFVBQVQsRUFBM0MsRUFBZ0V1TCxJQUFHLEVBQUNvRCxPQUFNLGVBQVNwVyxDQUFULEVBQVc7QUFBQ0QsY0FBRWdPLFdBQUYsQ0FBYyxDQUFDLENBQWY7QUFBa0IsV0FBckMsRUFBbkUsRUFBTixFQUFpSCxDQUFDaE8sRUFBRWlSLEVBQUYsQ0FBSyxtQkFBaUJqUixFQUFFa1IsRUFBRixDQUFLbFIsRUFBRXlILFNBQVAsQ0FBakIsR0FBbUMsY0FBeEMsQ0FBRCxDQUFqSCxDQUE5RixDQUF4RCxDQUFuQixDQUFsRCxDQUExQixHQUFxYXpILEVBQUUyVSxFQUFGLEVBQTNsQixDQUFwakIsQ0FBakcsRUFBeXZDLENBQXp2QyxDQUFULEdBQXF3QzNVLEVBQUUyVSxFQUFGLEVBQTd2RCxDQUF0aEIsQ0FBUDtBQUFteUUsS0FBNzF4QjtBQUFBLFFBQTgxeEJxQyxLQUFHLENBQUMsWUFBVTtBQUFDLFVBQUloWCxJQUFFLElBQU47QUFBQSxVQUFXQyxJQUFFRCxFQUFFNFEsY0FBZjtBQUFBLFVBQThCdFEsSUFBRU4sRUFBRTZRLEtBQUYsQ0FBUUMsRUFBUixJQUFZN1EsQ0FBNUMsQ0FBOEMsT0FBT0ssRUFBRSxLQUFGLEVBQVEsRUFBQ3lRLGFBQVksOEJBQWIsRUFBUixFQUFxRCxDQUFDelEsRUFBRSxNQUFGLEVBQVMsRUFBQ3lRLGFBQVksOEJBQWIsRUFBVCxDQUFELENBQXJELENBQVA7QUFBc0gsS0FBaEwsRUFBaUwsWUFBVTtBQUFDLFVBQUkvUSxJQUFFLElBQU47QUFBQSxVQUFXQyxJQUFFRCxFQUFFNFEsY0FBZjtBQUFBLFVBQThCdFEsSUFBRU4sRUFBRTZRLEtBQUYsQ0FBUUMsRUFBUixJQUFZN1EsQ0FBNUMsQ0FBOEMsT0FBT0ssRUFBRSxLQUFGLEVBQVEsRUFBQ3lRLGFBQVksOEJBQWIsRUFBUixFQUFxRCxDQUFDelEsRUFBRSxNQUFGLEVBQVMsRUFBQ3lRLGFBQVksOEJBQWIsRUFBVCxDQUFELENBQXJELENBQVA7QUFBc0gsS0FBaFcsRUFBaVcsWUFBVTtBQUFDLFVBQUkvUSxJQUFFLElBQU47QUFBQSxVQUFXQyxJQUFFRCxFQUFFNFEsY0FBZjtBQUFBLFVBQThCdFEsSUFBRU4sRUFBRTZRLEtBQUYsQ0FBUUMsRUFBUixJQUFZN1EsQ0FBNUMsQ0FBOEMsT0FBT0ssRUFBRSxLQUFGLEVBQVEsRUFBQ3lRLGFBQVksOEJBQWIsRUFBUixFQUFxRCxDQUFDelEsRUFBRSxNQUFGLEVBQVMsRUFBQ3lRLGFBQVksNkJBQWIsRUFBVCxDQUFELENBQXJELENBQVA7QUFBcUgsS0FBL2dCLEVBQWdoQixZQUFVO0FBQUMsVUFBSS9RLElBQUUsSUFBTjtBQUFBLFVBQVdDLElBQUVELEVBQUU0USxjQUFmO0FBQUEsVUFBOEJ0USxJQUFFTixFQUFFNlEsS0FBRixDQUFRQyxFQUFSLElBQVk3USxDQUE1QyxDQUE4QyxPQUFPSyxFQUFFLEtBQUYsRUFBUSxFQUFDeVEsYUFBWSw4QkFBYixFQUFSLEVBQXFELENBQUN6USxFQUFFLE1BQUYsRUFBUyxFQUFDeVEsYUFBWSw0QkFBYixFQUFULENBQUQsQ0FBckQsQ0FBUDtBQUFvSCxLQUE3ckIsQ0FBajJ4QjtBQUFBLFFBQWdpekI0RCxLQUFHLEVBQUNoVCxRQUFPb1YsRUFBUixFQUFXblYsaUJBQWdCb1YsRUFBM0IsRUFBbml6QjtBQUFBLFFBQWtrekJDLEtBQUd0QyxFQUFya3pCO0FBQUEsUUFBd2t6QnVDLEtBQUc1VyxFQUFFLENBQUYsQ0FBM2t6QjtBQUFBLFFBQWdsekI2VyxLQUFHNVMsQ0FBbmx6QjtBQUFBLFFBQXFsekI2UyxLQUFHRixHQUFHTixFQUFILEVBQU1LLEVBQU4sRUFBUyxDQUFDLENBQVYsRUFBWUUsRUFBWixFQUFlLElBQWYsRUFBb0IsSUFBcEIsQ0FBeGx6QjtBQUFBLFFBQWtuekJFLEtBQUdELEdBQUdsWCxPQUF4bnpCLENBQWdvekJJLEVBQUVNLENBQUYsQ0FBSVgsQ0FBSixFQUFNLFlBQU4sRUFBb0IsWUFBVTtBQUFDLGFBQU9vWCxFQUFQO0FBQVUsS0FBekMsR0FBNEMvVyxFQUFFTSxDQUFGLENBQUlYLENBQUosRUFBTSxpQkFBTixFQUF5QixZQUFVO0FBQUMsYUFBTzZFLENBQVA7QUFBUyxLQUE3QyxDQUE1QyxFQUE0RnhFLEVBQUVNLENBQUYsQ0FBSVgsQ0FBSixFQUFNLGFBQU4sRUFBcUIsWUFBVTtBQUFDLGFBQU95VixFQUFQO0FBQVUsS0FBMUMsQ0FBNUYsRUFBeUlwVixFQUFFTSxDQUFGLENBQUlYLENBQUosRUFBTSxZQUFOLEVBQW9CLFlBQVU7QUFBQyxhQUFPa1EsQ0FBUDtBQUFTLEtBQXhDLENBQXpJLENBQW9MbFEsRUFBRW1CLE9BQUYsR0FBVWlXLEVBQVY7QUFBYSxHQUE1eTRCLEVBQSt5NEIsVUFBU3JYLENBQVQsRUFBV0MsQ0FBWCxFQUFhLENBQUUsQ0FBOXo0QixFQUFpMDRCLFVBQVNELENBQVQsRUFBV0MsQ0FBWCxFQUFhSyxDQUFiLEVBQWU7QUFBQztBQUFhLGFBQVNELENBQVQsQ0FBV0wsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxVQUFJSyxJQUFFTCxFQUFFb0QsTUFBUjtBQUFBLFVBQWVoRCxJQUFFTCxFQUFFcUQsTUFBbkIsQ0FBMEIsSUFBR2hELElBQUVDLENBQUwsRUFBTyxPQUFNLENBQUMsQ0FBUCxDQUFTLElBQUdELE1BQUlDLENBQVAsRUFBUyxPQUFPTixNQUFJQyxDQUFYLENBQWFELEdBQUUsS0FBSSxJQUFJTyxJQUFFLENBQU4sRUFBUU0sSUFBRSxDQUFkLEVBQWdCTixJQUFFRixDQUFsQixFQUFvQkUsR0FBcEIsRUFBd0I7QUFBQyxhQUFJLElBQUlpQixJQUFFeEIsRUFBRXNYLFVBQUYsQ0FBYS9XLENBQWIsQ0FBVixFQUEwQk0sSUFBRVAsQ0FBNUI7QUFBK0IsY0FBR0wsRUFBRXFYLFVBQUYsQ0FBYXpXLEdBQWIsTUFBb0JXLENBQXZCLEVBQXlCLFNBQVN4QixDQUFUO0FBQXhELFNBQW1FLE9BQU0sQ0FBQyxDQUFQO0FBQVMsY0FBTSxDQUFDLENBQVA7QUFBUyxPQUFFRSxPQUFGLEdBQVVHLENBQVY7QUFBWSxHQUExaTVCLEVBQTZpNUIsVUFBU0wsQ0FBVCxFQUFXQyxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDLGFBQVNELENBQVQsQ0FBV0wsQ0FBWCxFQUFhQyxDQUFiLEVBQWVLLENBQWYsRUFBaUI7QUFBQyxlQUFTRCxDQUFULENBQVdKLENBQVgsRUFBYTtBQUFDLFlBQUlLLElBQUU4RCxDQUFOO0FBQUEsWUFBUS9ELElBQUVrRSxDQUFWLENBQVksT0FBT0gsSUFBRUcsSUFBRSxLQUFLLENBQVQsRUFBV3JCLElBQUVqRCxDQUFiLEVBQWV3RSxJQUFFekUsRUFBRXVYLEtBQUYsQ0FBUWxYLENBQVIsRUFBVUMsQ0FBVixDQUF4QjtBQUFxQyxnQkFBUzBCLENBQVQsQ0FBV2hDLENBQVgsRUFBYTtBQUFDLGVBQU9rRCxJQUFFbEQsQ0FBRixFQUFJMEUsSUFBRThTLFdBQVdqVyxDQUFYLEVBQWF0QixDQUFiLENBQU4sRUFBc0JzRCxJQUFFbEQsRUFBRUwsQ0FBRixDQUFGLEdBQU95RSxDQUFwQztBQUFzQyxnQkFBUzdELENBQVQsQ0FBV1osQ0FBWCxFQUFhO0FBQUMsWUFBSU0sSUFBRU4sSUFBRTJFLENBQVI7QUFBQSxZQUFVdEUsSUFBRUwsSUFBRWtELENBQWQ7QUFBQSxZQUFnQjNDLElBQUVOLElBQUVLLENBQXBCLENBQXNCLE9BQU9nRCxJQUFFM0MsRUFBRUosQ0FBRixFQUFJaUUsSUFBRW5FLENBQU4sQ0FBRixHQUFXRSxDQUFsQjtBQUFvQixnQkFBU2lDLENBQVQsQ0FBV3hDLENBQVgsRUFBYTtBQUFDLFlBQUlNLElBQUVOLElBQUUyRSxDQUFSO0FBQUEsWUFBVXRFLElBQUVMLElBQUVrRCxDQUFkLENBQWdCLE9BQU8sS0FBSyxDQUFMLEtBQVN5QixDQUFULElBQVlyRSxLQUFHTCxDQUFmLElBQWtCSyxJQUFFLENBQXBCLElBQXVCZ0QsS0FBR2pELEtBQUdtRSxDQUFwQztBQUFzQyxnQkFBU2pELENBQVQsR0FBWTtBQUFDLFlBQUl2QixJQUFFYSxHQUFOLENBQVUsSUFBRzJCLEVBQUV4QyxDQUFGLENBQUgsRUFBUSxPQUFPNkQsRUFBRTdELENBQUYsQ0FBUCxDQUFZMEUsSUFBRThTLFdBQVdqVyxDQUFYLEVBQWFYLEVBQUVaLENBQUYsQ0FBYixDQUFGO0FBQXFCLGdCQUFTNkQsQ0FBVCxDQUFXN0QsQ0FBWCxFQUFhO0FBQUMsZUFBTzBFLElBQUUsS0FBSyxDQUFQLEVBQVNJLEtBQUdWLENBQUgsR0FBSy9ELEVBQUVMLENBQUYsQ0FBTCxJQUFXb0UsSUFBRUcsSUFBRSxLQUFLLENBQVQsRUFBV0UsQ0FBdEIsQ0FBaEI7QUFBeUMsZ0JBQVNULENBQVQsR0FBWTtBQUFDLGFBQUssQ0FBTCxLQUFTVSxDQUFULElBQVkrUyxhQUFhL1MsQ0FBYixDQUFaLEVBQTRCeEIsSUFBRSxDQUE5QixFQUFnQ2tCLElBQUVPLElBQUVKLElBQUVHLElBQUUsS0FBSyxDQUE3QztBQUErQyxnQkFBU1AsQ0FBVCxHQUFZO0FBQUMsZUFBTyxLQUFLLENBQUwsS0FBU08sQ0FBVCxHQUFXRCxDQUFYLEdBQWFaLEVBQUVoRCxHQUFGLENBQXBCO0FBQTJCLGdCQUFTSCxDQUFULEdBQVk7QUFBQyxZQUFJVixJQUFFYSxHQUFOO0FBQUEsWUFBVVAsSUFBRWtDLEVBQUV4QyxDQUFGLENBQVosQ0FBaUIsSUFBR29FLElBQUVzVCxTQUFGLEVBQVluVCxJQUFFLElBQWQsRUFBbUJJLElBQUUzRSxDQUFyQixFQUF1Qk0sQ0FBMUIsRUFBNEI7QUFBQyxjQUFHLEtBQUssQ0FBTCxLQUFTb0UsQ0FBWixFQUFjLE9BQU8xQyxFQUFFMkMsQ0FBRixDQUFQLENBQVksSUFBR3JCLENBQUgsRUFBSyxPQUFPb0IsSUFBRThTLFdBQVdqVyxDQUFYLEVBQWF0QixDQUFiLENBQUYsRUFBa0JJLEVBQUVzRSxDQUFGLENBQXpCO0FBQThCLGdCQUFPLEtBQUssQ0FBTCxLQUFTRCxDQUFULEtBQWFBLElBQUU4UyxXQUFXalcsQ0FBWCxFQUFhdEIsQ0FBYixDQUFmLEdBQWdDd0UsQ0FBdkM7QUFBeUMsV0FBSUwsQ0FBSjtBQUFBLFVBQU1HLENBQU47QUFBQSxVQUFRQyxDQUFSO0FBQUEsVUFBVUMsQ0FBVjtBQUFBLFVBQVlDLENBQVo7QUFBQSxVQUFjQyxDQUFkO0FBQUEsVUFBZ0J6QixJQUFFLENBQWxCO0FBQUEsVUFBb0JLLElBQUUsQ0FBQyxDQUF2QjtBQUFBLFVBQXlCRCxJQUFFLENBQUMsQ0FBNUI7QUFBQSxVQUE4QndCLElBQUUsQ0FBQyxDQUFqQyxDQUFtQyxJQUFHLGNBQVksT0FBTzlFLENBQXRCLEVBQXdCLE1BQU0sSUFBSTJYLFNBQUosQ0FBY2xXLENBQWQsQ0FBTixDQUF1QixPQUFPeEIsSUFBRXVCLEVBQUV2QixDQUFGLEtBQU0sQ0FBUixFQUFVTSxFQUFFRCxDQUFGLE1BQU9pRCxJQUFFLENBQUMsQ0FBQ2pELEVBQUVzWCxPQUFOLEVBQWN0VSxJQUFFLGFBQVloRCxDQUE1QixFQUE4QmtFLElBQUVsQixJQUFFOUMsRUFBRWdCLEVBQUVsQixFQUFFdVgsT0FBSixLQUFjLENBQWhCLEVBQWtCNVgsQ0FBbEIsQ0FBRixHQUF1QnVFLENBQXZELEVBQXlETSxJQUFFLGNBQWF4RSxDQUFiLEdBQWUsQ0FBQyxDQUFDQSxFQUFFd1gsUUFBbkIsR0FBNEJoVCxDQUE5RixDQUFWLEVBQTJHcEUsRUFBRXFYLE1BQUYsR0FBUy9ULENBQXBILEVBQXNIdEQsRUFBRXNYLEtBQUYsR0FBUTdULENBQTlILEVBQWdJekQsQ0FBdkk7QUFBeUksU0FBSUgsSUFBRUQsRUFBRSxDQUFGLENBQU47QUFBQSxRQUFXTyxJQUFFUCxFQUFFLENBQUYsQ0FBYjtBQUFBLFFBQWtCa0IsSUFBRWxCLEVBQUUsRUFBRixDQUFwQjtBQUFBLFFBQTBCbUIsSUFBRSxxQkFBNUI7QUFBQSxRQUFrRGpCLElBQUVzUCxLQUFLNkQsR0FBekQ7QUFBQSxRQUE2RGhULElBQUVtUCxLQUFLQyxHQUFwRSxDQUF3RS9QLEVBQUVFLE9BQUYsR0FBVUcsQ0FBVjtBQUFZLEdBQXorNkIsRUFBNCs2QixVQUFTTCxDQUFULEVBQVdDLENBQVgsRUFBYUssQ0FBYixFQUFlO0FBQUMsUUFBSUQsSUFBRUMsRUFBRSxDQUFGLENBQU47QUFBQSxRQUFXQyxJQUFFLFNBQUZBLENBQUUsR0FBVTtBQUFDLGFBQU9GLEVBQUU0WCxJQUFGLENBQU9DLEdBQVAsRUFBUDtBQUFvQixLQUE1QyxDQUE2Q2xZLEVBQUVFLE9BQUYsR0FBVUssQ0FBVjtBQUFZLEdBQXJqN0IsRUFBd2o3QixVQUFTUCxDQUFULEVBQVdDLENBQVgsRUFBYUssQ0FBYixFQUFlO0FBQUMsS0FBQyxVQUFTTCxDQUFULEVBQVc7QUFBQyxVQUFJSyxJQUFFLG9CQUFpQkwsQ0FBakIseUNBQWlCQSxDQUFqQixNQUFvQkEsQ0FBcEIsSUFBdUJBLEVBQUVhLE1BQUYsS0FBV0EsTUFBbEMsSUFBMENiLENBQWhELENBQWtERCxFQUFFRSxPQUFGLEdBQVVJLENBQVY7QUFBWSxLQUEzRSxFQUE2RUcsSUFBN0UsQ0FBa0ZSLENBQWxGLEVBQW9GSyxFQUFFLEVBQUYsQ0FBcEY7QUFBMkYsR0FBbnE3QixFQUFzcTdCLFVBQVNOLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsUUFBSUssQ0FBSixDQUFNQSxJQUFHLFlBQVU7QUFBQyxhQUFPLElBQVA7QUFBWSxLQUF4QixFQUFGLENBQThCLElBQUc7QUFBQ0EsVUFBRUEsS0FBR3dDLFNBQVMsYUFBVCxHQUFILElBQThCLENBQUMsR0FBRXFWLElBQUgsRUFBUyxNQUFULENBQWhDO0FBQWlELEtBQXJELENBQXFELE9BQU1uWSxDQUFOLEVBQVE7QUFBQywwQkFBaUJ5UCxNQUFqQix5Q0FBaUJBLE1BQWpCLE9BQTBCblAsSUFBRW1QLE1BQTVCO0FBQW9DLE9BQUV2UCxPQUFGLEdBQVVJLENBQVY7QUFBWSxHQUF0MDdCLEVBQXkwN0IsVUFBU04sQ0FBVCxFQUFXQyxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDLGFBQVNELENBQVQsQ0FBV0wsQ0FBWCxFQUFhO0FBQUMsVUFBRyxZQUFVLE9BQU9BLENBQXBCLEVBQXNCLE9BQU9BLENBQVAsQ0FBUyxJQUFHYSxFQUFFYixDQUFGLENBQUgsRUFBUSxPQUFPd0IsQ0FBUCxDQUFTLElBQUdqQixFQUFFUCxDQUFGLENBQUgsRUFBUTtBQUFDLFlBQUlDLElBQUUsY0FBWSxPQUFPRCxFQUFFb1ksT0FBckIsR0FBNkJwWSxFQUFFb1ksT0FBRixFQUE3QixHQUF5Q3BZLENBQS9DLENBQWlEQSxJQUFFTyxFQUFFTixDQUFGLElBQUtBLElBQUUsRUFBUCxHQUFVQSxDQUFaO0FBQWMsV0FBRyxZQUFVLE9BQU9ELENBQXBCLEVBQXNCLE9BQU8sTUFBSUEsQ0FBSixHQUFNQSxDQUFOLEdBQVEsQ0FBQ0EsQ0FBaEIsQ0FBa0JBLElBQUVBLEVBQUVxWSxPQUFGLENBQVU1VyxDQUFWLEVBQVksRUFBWixDQUFGLENBQWtCLElBQUluQixJQUFFSyxFQUFFMlgsSUFBRixDQUFPdFksQ0FBUCxDQUFOLENBQWdCLE9BQU9NLEtBQUcwQixFQUFFc1csSUFBRixDQUFPdFksQ0FBUCxDQUFILEdBQWFZLEVBQUVaLEVBQUU4SixLQUFGLENBQVEsQ0FBUixDQUFGLEVBQWF4SixJQUFFLENBQUYsR0FBSSxDQUFqQixDQUFiLEdBQWlDRSxFQUFFOFgsSUFBRixDQUFPdFksQ0FBUCxJQUFVd0IsQ0FBVixHQUFZLENBQUN4QixDQUFyRDtBQUF1RCxTQUFJTyxJQUFFRCxFQUFFLENBQUYsQ0FBTjtBQUFBLFFBQVdPLElBQUVQLEVBQUUsRUFBRixDQUFiO0FBQUEsUUFBbUJrQixJQUFFK1csR0FBckI7QUFBQSxRQUF5QjlXLElBQUUsWUFBM0I7QUFBQSxRQUF3Q2pCLElBQUUsb0JBQTFDO0FBQUEsUUFBK0RHLElBQUUsWUFBakU7QUFBQSxRQUE4RXFCLElBQUUsYUFBaEY7QUFBQSxRQUE4RnBCLElBQUU0WCxRQUFoRyxDQUF5R3hZLEVBQUVFLE9BQUYsR0FBVUcsQ0FBVjtBQUFZLEdBQXJ0OEIsRUFBd3Q4QixVQUFTTCxDQUFULEVBQVdDLENBQVgsRUFBYUssQ0FBYixFQUFlO0FBQUMsYUFBU0QsQ0FBVCxDQUFXTCxDQUFYLEVBQWE7QUFBQyxhQUFNLG9CQUFpQkEsQ0FBakIseUNBQWlCQSxDQUFqQixNQUFvQmEsRUFBRWIsQ0FBRixLQUFNTyxFQUFFUCxDQUFGLEtBQU13QixDQUF0QztBQUF3QyxTQUFJakIsSUFBRUQsRUFBRSxFQUFGLENBQU47QUFBQSxRQUFZTyxJQUFFUCxFQUFFLEVBQUYsQ0FBZDtBQUFBLFFBQW9Ca0IsSUFBRSxpQkFBdEIsQ0FBd0N4QixFQUFFRSxPQUFGLEdBQVVHLENBQVY7QUFBWSxHQUFsMThCLEVBQXExOEIsVUFBU0wsQ0FBVCxFQUFXQyxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDLGFBQVNELENBQVQsQ0FBV0wsQ0FBWCxFQUFhO0FBQUMsYUFBTyxRQUFNQSxDQUFOLEdBQVEsS0FBSyxDQUFMLEtBQVNBLENBQVQsR0FBV1EsQ0FBWCxHQUFhaUIsQ0FBckIsR0FBdUJkLEtBQUdBLEtBQUtHLE9BQU9kLENBQVAsQ0FBUixHQUFrQmEsRUFBRWIsQ0FBRixDQUFsQixHQUF1QndCLEVBQUV4QixDQUFGLENBQXJEO0FBQTBELFNBQUlPLElBQUVELEVBQUUsQ0FBRixDQUFOO0FBQUEsUUFBV08sSUFBRVAsRUFBRSxFQUFGLENBQWI7QUFBQSxRQUFtQmtCLElBQUVsQixFQUFFLEVBQUYsQ0FBckI7QUFBQSxRQUEyQm1CLElBQUUsZUFBN0I7QUFBQSxRQUE2Q2pCLElBQUUsb0JBQS9DO0FBQUEsUUFBb0VHLElBQUVKLElBQUVBLEVBQUVrWSxXQUFKLEdBQWdCLEtBQUssQ0FBM0YsQ0FBNkZ6WSxFQUFFRSxPQUFGLEdBQVVHLENBQVY7QUFBWSxHQUF0aDlCLEVBQXloOUIsVUFBU0wsQ0FBVCxFQUFXQyxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDLGFBQVNELENBQVQsQ0FBV0wsQ0FBWCxFQUFhO0FBQUMsVUFBSUMsSUFBRXVCLEVBQUVmLElBQUYsQ0FBT1QsQ0FBUCxFQUFTUSxDQUFULENBQU47QUFBQSxVQUFrQkYsSUFBRU4sRUFBRVEsQ0FBRixDQUFwQixDQUF5QixJQUFHO0FBQUNSLFVBQUVRLENBQUYsSUFBSyxLQUFLLENBQVYsQ0FBWSxJQUFJSCxJQUFFLENBQUMsQ0FBUDtBQUFTLE9BQXpCLENBQXlCLE9BQU1MLENBQU4sRUFBUSxDQUFFLEtBQUlPLElBQUVrQixFQUFFaEIsSUFBRixDQUFPVCxDQUFQLENBQU4sQ0FBZ0IsT0FBT0ssTUFBSUosSUFBRUQsRUFBRVEsQ0FBRixJQUFLRixDQUFQLEdBQVMsT0FBT04sRUFBRVEsQ0FBRixDQUFwQixHQUEwQkQsQ0FBakM7QUFBbUMsU0FBSUEsSUFBRUQsRUFBRSxDQUFGLENBQU47QUFBQSxRQUFXTyxJQUFFQyxPQUFPTyxTQUFwQjtBQUFBLFFBQThCRyxJQUFFWCxFQUFFUyxjQUFsQztBQUFBLFFBQWlERyxJQUFFWixFQUFFNlgsUUFBckQ7QUFBQSxRQUE4RGxZLElBQUVELElBQUVBLEVBQUVrWSxXQUFKLEdBQWdCLEtBQUssQ0FBckYsQ0FBdUZ6WSxFQUFFRSxPQUFGLEdBQVVHLENBQVY7QUFBWSxHQUF6dzlCLEVBQTR3OUIsVUFBU0wsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxhQUFTSyxDQUFULENBQVdOLENBQVgsRUFBYTtBQUFDLGFBQU9PLEVBQUVFLElBQUYsQ0FBT1QsQ0FBUCxDQUFQO0FBQWlCLFNBQUlLLElBQUVTLE9BQU9PLFNBQWI7QUFBQSxRQUF1QmQsSUFBRUYsRUFBRXFZLFFBQTNCLENBQW9DMVksRUFBRUUsT0FBRixHQUFVSSxDQUFWO0FBQVksR0FBejI5QixFQUE0MjlCLFVBQVNOLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsYUFBU0ssQ0FBVCxDQUFXTixDQUFYLEVBQWE7QUFBQyxhQUFPLFFBQU1BLENBQU4sSUFBUyxvQkFBaUJBLENBQWpCLHlDQUFpQkEsQ0FBakIsRUFBaEI7QUFBbUMsT0FBRUUsT0FBRixHQUFVSSxDQUFWO0FBQVksR0FBdjc5QixDQUFyZCxDQUFQO0FBQXU1K0IsQ0FBeG4vQixDQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2VBOzs7a0JBSUE7cUJBR0E7QUFKQTtBQURBOzBCQU1BOzs2QkFHQTtBQUZBO0FBR0E7Ozt3Q0FFQTs0Q0FDQTs2Q0FDQTtBQUNBO0FBRUE7QUFOQTs7NENBU0E7b0NBQ0E7QUFDQTtvQ0FDQTt3Q0FFQTsrQkFFQTtrREFDQTs0Q0FDQTtnREFHQTtBQU5BLGFBRkE7QUFVQTtBQWZBO2dDQWdCQTt3Q0FDQTtBQUNBO0FBdENBLEc7Ozs7Ozs7QUNyQkE7QUFDQTs7O0FBR0E7QUFDQSxpS0FBa0ssMkZBQTJGOztBQUU3UDs7Ozs7Ozs7QUNQQTs7OztBQUlBO0FBQ0FILE9BQU9ELE9BQVAsR0FBaUIsVUFBU3lZLFlBQVQsRUFBdUI7QUFDdkMsS0FBSUMsT0FBTyxFQUFYOztBQUVBO0FBQ0FBLE1BQUtGLFFBQUwsR0FBZ0IsU0FBU0EsUUFBVCxHQUFvQjtBQUNuQyxTQUFPLEtBQUtoUCxHQUFMLENBQVMsVUFBVW1QLElBQVYsRUFBZ0I7QUFDL0IsT0FBSUMsVUFBVUMsdUJBQXVCRixJQUF2QixFQUE2QkYsWUFBN0IsQ0FBZDtBQUNBLE9BQUdFLEtBQUssQ0FBTCxDQUFILEVBQVk7QUFDWCxXQUFPLFlBQVlBLEtBQUssQ0FBTCxDQUFaLEdBQXNCLEdBQXRCLEdBQTRCQyxPQUE1QixHQUFzQyxHQUE3QztBQUNBLElBRkQsTUFFTztBQUNOLFdBQU9BLE9BQVA7QUFDQTtBQUNELEdBUE0sRUFPSkUsSUFQSSxDQU9DLEVBUEQsQ0FBUDtBQVFBLEVBVEQ7O0FBV0E7QUFDQUosTUFBS3ZZLENBQUwsR0FBUyxVQUFTNFksT0FBVCxFQUFrQkMsVUFBbEIsRUFBOEI7QUFDdEMsTUFBRyxPQUFPRCxPQUFQLEtBQW1CLFFBQXRCLEVBQ0NBLFVBQVUsQ0FBQyxDQUFDLElBQUQsRUFBT0EsT0FBUCxFQUFnQixFQUFoQixDQUFELENBQVY7QUFDRCxNQUFJRSx5QkFBeUIsRUFBN0I7QUFDQSxPQUFJLElBQUk5WSxJQUFJLENBQVosRUFBZUEsSUFBSSxLQUFLZ0QsTUFBeEIsRUFBZ0NoRCxHQUFoQyxFQUFxQztBQUNwQyxPQUFJbUcsS0FBSyxLQUFLbkcsQ0FBTCxFQUFRLENBQVIsQ0FBVDtBQUNBLE9BQUcsT0FBT21HLEVBQVAsS0FBYyxRQUFqQixFQUNDMlMsdUJBQXVCM1MsRUFBdkIsSUFBNkIsSUFBN0I7QUFDRDtBQUNELE9BQUluRyxJQUFJLENBQVIsRUFBV0EsSUFBSTRZLFFBQVE1VixNQUF2QixFQUErQmhELEdBQS9CLEVBQW9DO0FBQ25DLE9BQUl3WSxPQUFPSSxRQUFRNVksQ0FBUixDQUFYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFHLE9BQU93WSxLQUFLLENBQUwsQ0FBUCxLQUFtQixRQUFuQixJQUErQixDQUFDTSx1QkFBdUJOLEtBQUssQ0FBTCxDQUF2QixDQUFuQyxFQUFvRTtBQUNuRSxRQUFHSyxjQUFjLENBQUNMLEtBQUssQ0FBTCxDQUFsQixFQUEyQjtBQUMxQkEsVUFBSyxDQUFMLElBQVVLLFVBQVY7QUFDQSxLQUZELE1BRU8sSUFBR0EsVUFBSCxFQUFlO0FBQ3JCTCxVQUFLLENBQUwsSUFBVSxNQUFNQSxLQUFLLENBQUwsQ0FBTixHQUFnQixTQUFoQixHQUE0QkssVUFBNUIsR0FBeUMsR0FBbkQ7QUFDQTtBQUNETixTQUFLdEosSUFBTCxDQUFVdUosSUFBVjtBQUNBO0FBQ0Q7QUFDRCxFQXhCRDtBQXlCQSxRQUFPRCxJQUFQO0FBQ0EsQ0ExQ0Q7O0FBNENBLFNBQVNHLHNCQUFULENBQWdDRixJQUFoQyxFQUFzQ0YsWUFBdEMsRUFBb0Q7QUFDbkQsS0FBSUcsVUFBVUQsS0FBSyxDQUFMLEtBQVcsRUFBekI7QUFDQSxLQUFJTyxhQUFhUCxLQUFLLENBQUwsQ0FBakI7QUFDQSxLQUFJLENBQUNPLFVBQUwsRUFBaUI7QUFDaEIsU0FBT04sT0FBUDtBQUNBOztBQUVELEtBQUlILGdCQUFnQixPQUFPVSxJQUFQLEtBQWdCLFVBQXBDLEVBQWdEO0FBQy9DLE1BQUlDLGdCQUFnQkMsVUFBVUgsVUFBVixDQUFwQjtBQUNBLE1BQUlJLGFBQWFKLFdBQVdLLE9BQVgsQ0FBbUIvUCxHQUFuQixDQUF1QixVQUFVZ1EsTUFBVixFQUFrQjtBQUN6RCxVQUFPLG1CQUFtQk4sV0FBV08sVUFBOUIsR0FBMkNELE1BQTNDLEdBQW9ELEtBQTNEO0FBQ0EsR0FGZ0IsQ0FBakI7O0FBSUEsU0FBTyxDQUFDWixPQUFELEVBQVVuVyxNQUFWLENBQWlCNlcsVUFBakIsRUFBNkI3VyxNQUE3QixDQUFvQyxDQUFDMlcsYUFBRCxDQUFwQyxFQUFxRE4sSUFBckQsQ0FBMEQsSUFBMUQsQ0FBUDtBQUNBOztBQUVELFFBQU8sQ0FBQ0YsT0FBRCxFQUFVRSxJQUFWLENBQWUsSUFBZixDQUFQO0FBQ0E7O0FBRUQ7QUFDQSxTQUFTTyxTQUFULENBQW1CSyxTQUFuQixFQUE4QjtBQUM3QjtBQUNBLEtBQUlDLFNBQVNSLEtBQUtTLFNBQVNDLG1CQUFtQmpMLEtBQUtDLFNBQUwsQ0FBZTZLLFNBQWYsQ0FBbkIsQ0FBVCxDQUFMLENBQWI7QUFDQSxLQUFJelIsT0FBTyxpRUFBaUUwUixNQUE1RTs7QUFFQSxRQUFPLFNBQVMxUixJQUFULEdBQWdCLEtBQXZCO0FBQ0EsQzs7Ozs7OztBQzNFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssMkJBQTJCO0FBQ2hDO0FBQ0E7QUFDQSxxQkFBcUIsMEJBQTBCLHVCQUF1QixFQUFFO0FBQ3hFO0FBQ0E7QUFDQSxxQkFBcUIsNEJBQTRCO0FBQ2pELHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyx1QkFBdUIsWUFBWSxFQUFFO0FBQzVFLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzNDQTs7QUFFQTtBQUNBLHdWQUF5TztBQUN6TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLGtGQUFrRjtBQUN4TywrSkFBK0osa0ZBQWtGO0FBQ2pQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxpQkFBaUI7QUFDM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBLFlBQVksdUJBQXVCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3ROQTs7OztBQUlBaEksT0FBT0QsT0FBUCxHQUFpQixTQUFTOFosWUFBVCxDQUF1QkMsUUFBdkIsRUFBaUNyQixJQUFqQyxFQUF1QztBQUN0RCxNQUFJc0IsU0FBUyxFQUFiO0FBQ0EsTUFBSUMsWUFBWSxFQUFoQjtBQUNBLE9BQUssSUFBSTlaLElBQUksQ0FBYixFQUFnQkEsSUFBSXVZLEtBQUt2VixNQUF6QixFQUFpQ2hELEdBQWpDLEVBQXNDO0FBQ3BDLFFBQUl3WSxPQUFPRCxLQUFLdlksQ0FBTCxDQUFYO0FBQ0EsUUFBSW1HLEtBQUtxUyxLQUFLLENBQUwsQ0FBVDtBQUNBLFFBQUl1QixNQUFNdkIsS0FBSyxDQUFMLENBQVY7QUFDQSxRQUFJd0IsUUFBUXhCLEtBQUssQ0FBTCxDQUFaO0FBQ0EsUUFBSWUsWUFBWWYsS0FBSyxDQUFMLENBQWhCO0FBQ0EsUUFBSXlCLE9BQU87QUFDVDlULFVBQUl5VCxXQUFXLEdBQVgsR0FBaUI1WixDQURaO0FBRVQrWixXQUFLQSxHQUZJO0FBR1RDLGFBQU9BLEtBSEU7QUFJVFQsaUJBQVdBO0FBSkYsS0FBWDtBQU1BLFFBQUksQ0FBQ08sVUFBVTNULEVBQVYsQ0FBTCxFQUFvQjtBQUNsQjBULGFBQU81SyxJQUFQLENBQVk2SyxVQUFVM1QsRUFBVixJQUFnQixFQUFFQSxJQUFJQSxFQUFOLEVBQVUrVCxPQUFPLENBQUNELElBQUQsQ0FBakIsRUFBNUI7QUFDRCxLQUZELE1BRU87QUFDTEgsZ0JBQVUzVCxFQUFWLEVBQWMrVCxLQUFkLENBQW9CakwsSUFBcEIsQ0FBeUJnTCxJQUF6QjtBQUNEO0FBQ0Y7QUFDRCxTQUFPSixNQUFQO0FBQ0QsQ0F0QkQsQzs7Ozs7Ozs7O0FDSkE7Ozs7OztBQU1BLENBQUMsU0FBU00sZ0NBQVQsQ0FBMENDLElBQTFDLEVBQWdEQyxPQUFoRCxFQUF5RDtBQUN6RCxLQUFHLGdDQUFPeGEsT0FBUCxPQUFtQixRQUFuQixJQUErQixnQ0FBT0MsTUFBUCxPQUFrQixRQUFwRCxFQUNDQSxPQUFPRCxPQUFQLEdBQWlCd2EsU0FBakIsQ0FERCxLQUVLLElBQUcsSUFBSCxFQUNKLGlDQUFPLEVBQVAsb0NBQVdBLE9BQVg7QUFBQTtBQUFBO0FBQUEscUdBREksS0FFQSxJQUFHLFFBQU94YSxPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQXRCLEVBQ0pBLFFBQVEsU0FBUixJQUFxQndhLFNBQXJCLENBREksS0FHSkQsS0FBSyxTQUFMLElBQWtCQyxTQUFsQjtBQUNELENBVEQsRUFTRyxJQVRILEVBU1MsWUFBVztBQUNwQixRQUFPLFNBQVUsVUFBU3pCLE9BQVQsRUFBa0I7QUFBRTtBQUNyQyxXQURtQyxDQUN6QjtBQUNWLFdBQVUsSUFBSTBCLG1CQUFtQixFQUF2QjtBQUNWO0FBQ0EsV0FKbUMsQ0FJekI7QUFDVixXQUFVLFNBQVNDLG1CQUFULENBQTZCQyxRQUE3QixFQUF1QztBQUNqRDtBQUNBLFlBRmlELENBRXRDO0FBQ1gsWUFBVyxJQUFHRixpQkFBaUJFLFFBQWpCLENBQUgsRUFBK0I7QUFDMUMsYUFBWSxPQUFPRixpQkFBaUJFLFFBQWpCLEVBQTJCM2EsT0FBbEM7QUFDWjtBQUFZO0FBQ1osWUFOaUQsQ0FNdEM7QUFDWCxZQUFXLElBQUlDLFNBQVN3YSxpQkFBaUJFLFFBQWpCLElBQTZCO0FBQ3JELGFBQVl4YSxHQUFHd2EsUUFEc0M7QUFFckQsYUFBWXJhLEdBQUcsS0FGc0M7QUFHckQsYUFBWU4sU0FBUztBQUNyQixhQUpxRCxFQUExQztBQUtYO0FBQ0EsWUFiaUQsQ0FhdEM7QUFDWCxZQUFXK1ksUUFBUTRCLFFBQVIsRUFBa0JwYSxJQUFsQixDQUF1Qk4sT0FBT0QsT0FBOUIsRUFBdUNDLE1BQXZDLEVBQStDQSxPQUFPRCxPQUF0RCxFQUErRDBhLG1CQUEvRDtBQUNYO0FBQ0EsWUFoQmlELENBZ0J0QztBQUNYLFlBQVd6YSxPQUFPSyxDQUFQLEdBQVcsSUFBWDtBQUNYO0FBQ0EsWUFuQmlELENBbUJ0QztBQUNYLFlBQVcsT0FBT0wsT0FBT0QsT0FBZDtBQUNYO0FBQVc7QUFDWDtBQUNBO0FBQ0EsV0E3Qm1DLENBNkJ6QjtBQUNWLFdBQVUwYSxvQkFBb0JsYSxDQUFwQixHQUF3QnVZLE9BQXhCO0FBQ1Y7QUFDQSxXQWhDbUMsQ0FnQ3pCO0FBQ1YsV0FBVTJCLG9CQUFvQmphLENBQXBCLEdBQXdCZ2EsZ0JBQXhCO0FBQ1Y7QUFDQSxXQW5DbUMsQ0FtQ3pCO0FBQ1YsV0FBVUMsb0JBQW9CdmEsQ0FBcEIsR0FBd0IsVUFBU3lELEtBQVQsRUFBZ0I7QUFBRSxXQUFPQSxLQUFQO0FBQWUsSUFBekQ7QUFDVjtBQUNBLFdBdENtQyxDQXNDekI7QUFDVixXQUFVOFcsb0JBQW9CaGEsQ0FBcEIsR0FBd0IsVUFBU1YsT0FBVCxFQUFrQnVRLElBQWxCLEVBQXdCcUssTUFBeEIsRUFBZ0M7QUFDbEUsWUFBVyxJQUFHLENBQUNGLG9CQUFvQi9aLENBQXBCLENBQXNCWCxPQUF0QixFQUErQnVRLElBQS9CLENBQUosRUFBMEM7QUFDckQsYUFBWTNQLE9BQU9DLGNBQVAsQ0FBc0JiLE9BQXRCLEVBQStCdVEsSUFBL0IsRUFBcUM7QUFDakQsY0FBYXpQLGNBQWMsS0FEc0I7QUFFakQsY0FBYUMsWUFBWSxJQUZ3QjtBQUdqRCxjQUFhQyxLQUFLNFo7QUFDbEIsY0FKaUQsRUFBckM7QUFLWjtBQUFZO0FBQ1o7QUFBVyxJQVJEO0FBU1Y7QUFDQSxXQWpEbUMsQ0FpRHpCO0FBQ1YsV0FBVUYsb0JBQW9CdGEsQ0FBcEIsR0FBd0IsVUFBU0gsTUFBVCxFQUFpQjtBQUNuRCxZQUFXLElBQUkyYSxTQUFTM2EsVUFBVUEsT0FBT2dCLFVBQWpCO0FBQ3hCLFlBQVksU0FBUzRaLFVBQVQsR0FBc0I7QUFBRSxZQUFPNWEsT0FBTyxTQUFQLENBQVA7QUFBMkIsS0FEdkM7QUFFeEIsWUFBWSxTQUFTNmEsZ0JBQVQsR0FBNEI7QUFBRSxZQUFPN2EsTUFBUDtBQUFnQixLQUYvQztBQUdYLFlBQVd5YSxvQkFBb0JoYSxDQUFwQixDQUFzQmthLE1BQXRCLEVBQThCLEdBQTlCLEVBQW1DQSxNQUFuQztBQUNYLFlBQVcsT0FBT0EsTUFBUDtBQUNYO0FBQVcsSUFORDtBQU9WO0FBQ0EsV0ExRG1DLENBMER6QjtBQUNWLFdBQVVGLG9CQUFvQi9aLENBQXBCLEdBQXdCLFVBQVNvYSxNQUFULEVBQWlCQyxRQUFqQixFQUEyQjtBQUFFLFdBQU9wYSxPQUFPTyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ2IsSUFBaEMsQ0FBcUN3YSxNQUFyQyxFQUE2Q0MsUUFBN0MsQ0FBUDtBQUFnRSxJQUFySDtBQUNWO0FBQ0EsV0E3RG1DLENBNkR6QjtBQUNWLFdBQVVOLG9CQUFvQnJaLENBQXBCLEdBQXdCLEVBQXhCO0FBQ1Y7QUFDQSxXQWhFbUMsQ0FnRXpCO0FBQ1YsV0FBVSxPQUFPcVosb0JBQW9CQSxvQkFBb0JyYSxDQUFwQixHQUF3QixDQUE1QyxDQUFQO0FBQ1Y7QUFBVSxHQWxFTTtBQW1FaEI7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxPQUFPLFVBQVNKLE1BQVQsRUFBaUJELE9BQWpCLEVBQTBCMGEsbUJBQTFCLEVBQStDOztBQUV0RCxJQUFDLFVBQVMzYSxDQUFULEVBQVdELENBQVgsRUFBYTtBQUFFLFdBQUtHLE9BQU9ELE9BQVAsR0FBZUYsR0FBcEIsR0FBd0IsY0FBWSxPQUFPbWIsTUFBbkIsSUFBMkJBLE9BQU9DLEdBQWxDLEdBQXNDRCxPQUFPLEVBQVAsRUFBVW5iLENBQVYsQ0FBdEMsR0FBbUQsb0JBQWlCRSxPQUFqQix5Q0FBaUJBLE9BQWpCLEtBQXlCQSxRQUFRbWIsSUFBUixHQUFhcmIsR0FBdEMsR0FBMENDLEVBQUVvYixJQUFGLEdBQU9yYixHQUE1SDtBQUFnSSxJQUEvSSxDQUFnSixJQUFoSixFQUFxSixZQUFVO0FBQUMsV0FBTyxVQUFTQyxDQUFULEVBQVc7QUFBQyxjQUFTRCxDQUFULENBQVdhLENBQVgsRUFBYTtBQUFDLFVBQUdQLEVBQUVPLENBQUYsQ0FBSCxFQUFRLE9BQU9QLEVBQUVPLENBQUYsRUFBS1gsT0FBWixDQUFvQixJQUFJc0IsSUFBRWxCLEVBQUVPLENBQUYsSUFBSyxFQUFDUixHQUFFUSxDQUFILEVBQUtMLEdBQUUsQ0FBQyxDQUFSLEVBQVVOLFNBQVEsRUFBbEIsRUFBWCxDQUFpQyxPQUFPRCxFQUFFWSxDQUFGLEVBQUtKLElBQUwsQ0FBVWUsRUFBRXRCLE9BQVosRUFBb0JzQixDQUFwQixFQUFzQkEsRUFBRXRCLE9BQXhCLEVBQWdDRixDQUFoQyxHQUFtQ3dCLEVBQUVoQixDQUFGLEdBQUksQ0FBQyxDQUF4QyxFQUEwQ2dCLEVBQUV0QixPQUFuRDtBQUEyRCxVQUFJSSxJQUFFLEVBQU4sQ0FBUyxPQUFPTixFQUFFVSxDQUFGLEdBQUlULENBQUosRUFBTUQsRUFBRVcsQ0FBRixHQUFJTCxDQUFWLEVBQVlOLEVBQUVZLENBQUYsR0FBSSxVQUFTWCxDQUFULEVBQVdLLENBQVgsRUFBYU8sQ0FBYixFQUFlO0FBQUNiLFFBQUVhLENBQUYsQ0FBSVosQ0FBSixFQUFNSyxDQUFOLEtBQVVRLE9BQU9DLGNBQVAsQ0FBc0JkLENBQXRCLEVBQXdCSyxDQUF4QixFQUEwQixFQUFDVSxjQUFhLENBQUMsQ0FBZixFQUFpQkMsWUFBVyxDQUFDLENBQTdCLEVBQStCQyxLQUFJTCxDQUFuQyxFQUExQixDQUFWO0FBQTJFLE1BQTNHLEVBQTRHYixFQUFFTSxDQUFGLEdBQUksVUFBU0wsQ0FBVCxFQUFXO0FBQUMsVUFBSUssSUFBRUwsS0FBR0EsRUFBRWtCLFVBQUwsR0FBZ0IsWUFBVTtBQUFDLGNBQU9sQixFQUFFbUIsT0FBVDtBQUFpQixPQUE1QyxHQUE2QyxZQUFVO0FBQUMsY0FBT25CLENBQVA7QUFBUyxPQUF2RSxDQUF3RSxPQUFPRCxFQUFFWSxDQUFGLENBQUlOLENBQUosRUFBTSxHQUFOLEVBQVVBLENBQVYsR0FBYUEsQ0FBcEI7QUFBc0IsTUFBMU4sRUFBMk5OLEVBQUVhLENBQUYsR0FBSSxVQUFTWixDQUFULEVBQVdELENBQVgsRUFBYTtBQUFDLGFBQU9jLE9BQU9PLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDYixJQUFoQyxDQUFxQ1IsQ0FBckMsRUFBdUNELENBQXZDLENBQVA7QUFBaUQsTUFBOVIsRUFBK1JBLEVBQUV1QixDQUFGLEdBQUksRUFBblMsRUFBc1N2QixFQUFFQSxFQUFFTyxDQUFGLEdBQUksQ0FBTixDQUE3UztBQUFzVCxLQUFqZCxDQUFrZCxDQUFDLFVBQVNOLENBQVQsRUFBV0QsQ0FBWCxFQUFhTSxDQUFiLEVBQWU7QUFBQztBQUFhUSxZQUFPQyxjQUFQLENBQXNCZixDQUF0QixFQUF3QixZQUF4QixFQUFxQyxFQUFDOEQsT0FBTSxDQUFDLENBQVIsRUFBckMsRUFBaUQsSUFBSWpELElBQUUsYUFBTixDQUFvQmIsRUFBRXNiLFdBQUYsR0FBYyxFQUFDQyxPQUFNLFlBQVAsRUFBb0JDLFNBQVEsY0FBNUIsRUFBMkNDLFlBQVcsMEJBQXRELEVBQWlGQyxhQUFZLFlBQTdGLEVBQTBHQyxZQUFXLFdBQXJILEVBQWlJQyxNQUFLLFdBQXRJLEVBQWtKQyxhQUFZLG1CQUE5SixFQUFrTEMsU0FBUSxjQUExTCxFQUF5TUMsUUFBTyxhQUFoTixFQUE4TkMsa0JBQWlCLHVCQUEvTyxFQUF1UUMsUUFBT3BiLENBQTlRLEVBQWdScWIsZ0JBQWVyYixJQUFFLFdBQWpTLEVBQTZTc2IsZUFBY3RiLElBQUUsVUFBN1QsRUFBd1V1YixlQUFjdmIsSUFBRSxVQUF4VixFQUFtV3diLGdCQUFleGIsSUFBRSxXQUFwWCxFQUFnWXliLGVBQWN6YixJQUFFLFVBQWhaLEVBQWQsRUFBMGFiLEVBQUVvQixPQUFGLEdBQVVwQixFQUFFc2IsV0FBdGI7QUFBa2MsS0FBcmlCLEVBQXNpQixVQUFTcmIsQ0FBVCxFQUFXRCxDQUFYLEVBQWFNLENBQWIsRUFBZTtBQUFDO0FBQWFRLFlBQU9DLGNBQVAsQ0FBc0JmLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDLEVBQUM4RCxPQUFNLENBQUMsQ0FBUixFQUFyQyxHQUFpRDlELEVBQUUySixPQUFGLEdBQVUsVUFBUzFKLENBQVQsRUFBVztBQUFDLFVBQUlELElBQUUsTUFBSUMsQ0FBVixDQUFZLE9BQU8rTCxTQUFTdVEsYUFBVCxDQUF1QnZjLENBQXZCLENBQVA7QUFBaUMsTUFBcEgsRUFBcUhBLEVBQUV3YyxZQUFGLEdBQWUsVUFBU3ZjLENBQVQsRUFBVztBQUFDLFVBQUlELElBQUVnTSxTQUFTeVEsYUFBVCxDQUF1QixLQUF2QixDQUFOLENBQW9DLE9BQU96YyxFQUFFMGMsU0FBRixHQUFZemMsRUFBRTBjLElBQUYsRUFBWixFQUFxQjNjLEVBQUU0YyxVQUE5QjtBQUF5QyxNQUE3TixFQUE4TjVjLEVBQUU2YyxXQUFGLEdBQWMsVUFBUzVjLENBQVQsRUFBV0QsQ0FBWCxFQUFhO0FBQUMsVUFBSU0sSUFBRU4sRUFBRThjLFdBQVIsQ0FBb0I5YyxFQUFFb0wsVUFBRixDQUFhMlIsWUFBYixDQUEwQjljLENBQTFCLEVBQTRCSyxDQUE1QjtBQUErQixNQUE3UyxFQUE4U04sRUFBRWdkLFVBQUYsR0FBYSxVQUFTL2MsQ0FBVCxFQUFXO0FBQUNBLFFBQUVnZCxhQUFGLENBQWdCQyxXQUFoQixDQUE0QmpkLENBQTVCO0FBQStCLE1BQXRXLEVBQXVXRCxFQUFFbWQsUUFBRixHQUFXLFVBQVNsZCxDQUFULEVBQVc7QUFBQyxZQUFNQSxJQUFFQSxFQUFFb1ksT0FBRixDQUFVLFVBQVYsRUFBcUIsRUFBckIsQ0FBRixFQUEyQixrQkFBZ0JwWSxJQUFFQSxFQUFFMGMsSUFBRixFQUFsQixDQUFqQztBQUE2RCxNQUEzYixFQUE0YjNjLEVBQUVvZCxhQUFGLEdBQWdCLFVBQVNuZCxDQUFULEVBQVc7QUFBQyxVQUFHLHNCQUFvQmEsT0FBT08sU0FBUCxDQUFpQnFYLFFBQWpCLENBQTBCalksSUFBMUIsQ0FBK0JSLENBQS9CLENBQXZCLEVBQXlELE9BQU0sQ0FBQyxDQUFQLENBQVMsSUFBSUQsSUFBRWMsT0FBT3FDLGNBQVAsQ0FBc0JsRCxDQUF0QixDQUFOLENBQStCLE9BQU8sU0FBT0QsQ0FBUCxJQUFVQSxNQUFJYyxPQUFPTyxTQUE1QjtBQUFzQyxNQUEvbEIsRUFBZ21CckIsRUFBRXFkLGVBQUYsR0FBa0IsVUFBU3BkLENBQVQsRUFBVztBQUFDLFVBQUlELElBQUVDLElBQUUsRUFBUjtBQUFBLFVBQVdLLElBQUVMLElBQUUsR0FBZixDQUFtQixPQUFPLE1BQUlELENBQUosSUFBTyxPQUFLTSxDQUFaLEdBQWNMLElBQUUsSUFBaEIsR0FBcUIsTUFBSUQsQ0FBSixJQUFPLE9BQUtNLENBQVosR0FBY0wsSUFBRSxJQUFoQixHQUFxQixNQUFJRCxDQUFKLElBQU8sT0FBS00sQ0FBWixHQUFjTCxJQUFFLElBQWhCLEdBQXFCQSxJQUFFLElBQXhFO0FBQTZFLE1BQTl0QjtBQUErdEIsS0FBbHlDLEVBQW15QyxVQUFTQSxDQUFULEVBQVdELENBQVgsRUFBYU0sQ0FBYixFQUFlO0FBQUM7QUFBYSxjQUFTTyxDQUFULENBQVdaLENBQVgsRUFBYTtBQUFDLFdBQUksSUFBSUssQ0FBUixJQUFhTCxDQUFiO0FBQWVELFNBQUVzQixjQUFGLENBQWlCaEIsQ0FBakIsTUFBc0JOLEVBQUVNLENBQUYsSUFBS0wsRUFBRUssQ0FBRixDQUEzQjtBQUFmO0FBQWdELGFBQU9TLGNBQVAsQ0FBc0JmLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDLEVBQUM4RCxPQUFNLENBQUMsQ0FBUixFQUFyQyxHQUFpRGpELEVBQUVQLEVBQUUsRUFBRixDQUFGLENBQWpELENBQTBELElBQUlrQixJQUFFbEIsRUFBRSxFQUFGLENBQU4sQ0FBWU4sRUFBRXNkLGFBQUYsR0FBZ0I5YixFQUFFSixPQUFsQixFQUEwQlAsRUFBRVAsRUFBRSxFQUFGLENBQUYsQ0FBMUIsRUFBbUNPLEVBQUVQLEVBQUUsRUFBRixDQUFGLENBQW5DLEVBQTRDTyxFQUFFUCxFQUFFLEVBQUYsQ0FBRixDQUE1QyxDQUFxRCxJQUFJbUIsSUFBRW5CLEVBQUUsQ0FBRixDQUFOO0FBQUEsU0FBV0QsSUFBRW9CLEVBQUVMLE9BQUYsQ0FBVXNhLFdBQXZCO0FBQUEsU0FBbUNuYixJQUFFa0IsRUFBRUwsT0FBRixDQUFVdWEsVUFBL0M7QUFBQSxTQUEwRG5iLElBQUVpQixFQUFFTCxPQUFGLENBQVV3YSxJQUF0RTtBQUFBLFNBQTJFamIsSUFBRWMsRUFBRUwsT0FBRixDQUFVMmEsTUFBdkYsQ0FBOEYvYixFQUFFdWQsVUFBRixHQUFhLHFCQUFtQi9jLENBQW5CLEdBQXFCLFVBQWxDLEVBQTZDUixFQUFFd2QsV0FBRixHQUFjLHFCQUFtQm5kLENBQW5CLEdBQXFCLFlBQWhGLEVBQTZGTCxFQUFFeWQsVUFBRixHQUFhLHFCQUFtQmxkLENBQW5CLEdBQXFCLFVBQS9ILEVBQTBJUCxFQUFFMGQsWUFBRixHQUFlLHFCQUFtQi9jLENBQW5CLEdBQXFCLFlBQTlLO0FBQTJMLEtBQWx4RCxFQUFteEQsVUFBU1YsQ0FBVCxFQUFXRCxDQUFYLEVBQWFNLENBQWIsRUFBZTtBQUFDO0FBQWFRLFlBQU9DLGNBQVAsQ0FBc0JmLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDLEVBQUM4RCxPQUFNLENBQUMsQ0FBUixFQUFyQyxFQUFpRCxJQUFJakQsSUFBRVAsRUFBRSxDQUFGLENBQU4sQ0FBV04sRUFBRTJkLFdBQUYsR0FBYyxTQUFkLEVBQXdCM2QsRUFBRTRkLFVBQUYsR0FBYSxRQUFyQyxDQUE4QyxJQUFJcGMsSUFBRSxFQUFDcWMsU0FBUSxDQUFDLENBQVYsRUFBWUMsTUFBSyxJQUFqQixFQUFzQmhhLE9BQU0sSUFBNUIsRUFBaUNpYSxXQUFVLEVBQTNDLEVBQThDQyxZQUFXLENBQUMsQ0FBMUQsRUFBTjtBQUFBLFNBQW1FdmMsSUFBRVgsT0FBT21kLE1BQVAsQ0FBYyxFQUFkLEVBQWlCemMsQ0FBakIsRUFBbUIsRUFBQ3FjLFNBQVEsQ0FBQyxDQUFWLEVBQVlDLE1BQUssUUFBakIsRUFBMEJoYSxPQUFNLElBQWhDLEVBQW5CLENBQXJFO0FBQUEsU0FBK0h6RCxJQUFFUyxPQUFPbWQsTUFBUCxDQUFjLEVBQWQsRUFBaUJ6YyxDQUFqQixFQUFtQixFQUFDc2MsTUFBSyxJQUFOLEVBQVdoYSxPQUFNLENBQUMsQ0FBbEIsRUFBbkIsQ0FBakksQ0FBMEs5RCxFQUFFa2UsaUJBQUYsR0FBb0IsRUFBQ25HLFFBQU90VyxDQUFSLEVBQVUwYyxTQUFROWQsQ0FBbEIsRUFBcEIsQ0FBeUMsSUFBSUUsSUFBRSxTQUFGQSxDQUFFLENBQVNOLENBQVQsRUFBVztBQUFDLGNBQU9BLENBQVAsR0FBVSxLQUFLRCxFQUFFMmQsV0FBUDtBQUFtQixlQUFPdGQsQ0FBUCxDQUFTLEtBQUtMLEVBQUU0ZCxVQUFQO0FBQWtCLGVBQU9uYyxDQUFQLENBQVM7QUFBUSxZQUFJbkIsSUFBRUwsRUFBRW1lLE1BQUYsQ0FBUyxDQUFULEVBQVlDLFdBQVosS0FBMEJwZSxFQUFFNkosS0FBRixDQUFRLENBQVIsQ0FBaEMsQ0FBMkMsT0FBT2hKLE9BQU9tZCxNQUFQLENBQWMsRUFBZCxFQUFpQnpjLENBQWpCLEVBQW1CLEVBQUNzYyxNQUFLeGQsQ0FBTixFQUFRd0QsT0FBTTdELENBQWQsRUFBbkIsQ0FBUCxDQUFwSDtBQUFpSyxNQUFuTDtBQUFBLFNBQW9MTyxJQUFFLFNBQUZBLENBQUUsQ0FBU1AsQ0FBVCxFQUFXRCxDQUFYLEVBQWE7QUFBQyxVQUFJTSxJQUFFQyxFQUFFTixDQUFGLENBQU4sQ0FBVyxPQUFNLENBQUMsQ0FBRCxLQUFLRCxDQUFMLEdBQU9jLE9BQU9tZCxNQUFQLENBQWMsRUFBZCxFQUFpQjNkLENBQWpCLEVBQW1CLEVBQUN1ZCxTQUFRLENBQUMsQ0FBVixFQUFuQixDQUFQLEdBQXdDLFlBQVUsT0FBTzdkLENBQWpCLEdBQW1CYyxPQUFPbWQsTUFBUCxDQUFjLEVBQWQsRUFBaUIzZCxDQUFqQixFQUFtQixFQUFDdWQsU0FBUSxDQUFDLENBQVYsRUFBWUMsTUFBSzlkLENBQWpCLEVBQW5CLENBQW5CLEdBQTJEYSxFQUFFdWMsYUFBRixDQUFnQnBkLENBQWhCLElBQW1CYyxPQUFPbWQsTUFBUCxDQUFjLEVBQUNKLFNBQVEsQ0FBQyxDQUFWLEVBQWQsRUFBMkJ2ZCxDQUEzQixFQUE2Qk4sQ0FBN0IsQ0FBbkIsR0FBbURjLE9BQU9tZCxNQUFQLENBQWMsRUFBZCxFQUFpQjNkLENBQWpCLEVBQW1CLEVBQUN1ZCxTQUFRLENBQUMsQ0FBVixFQUFuQixDQUE1SjtBQUE2TCxNQUE1WTtBQUFBLFNBQTZZbGQsSUFBRSxTQUFGQSxDQUFFLENBQVNWLENBQVQsRUFBVztBQUFDLFdBQUksSUFBSUQsSUFBRSxFQUFOLEVBQVNNLElBQUUsQ0FBWCxFQUFhTyxJQUFFQyxPQUFPc0MsSUFBUCxDQUFZbkQsQ0FBWixDQUFuQixFQUFrQ0ssSUFBRU8sRUFBRXdDLE1BQXRDLEVBQTZDL0MsR0FBN0MsRUFBaUQ7QUFBQyxXQUFJa0IsSUFBRVgsRUFBRVAsQ0FBRixDQUFOO0FBQUEsV0FBV0QsSUFBRUosRUFBRXVCLENBQUYsQ0FBYjtBQUFBLFdBQWtCakIsSUFBRUMsRUFBRWdCLENBQUYsRUFBSW5CLENBQUosQ0FBcEIsQ0FBMkJMLEVBQUV3QixDQUFGLElBQUtqQixDQUFMO0FBQU8sY0FBT1AsRUFBRStYLE1BQUYsS0FBVy9YLEVBQUUrWCxNQUFGLEdBQVN0VyxDQUFwQixHQUF1QnpCLENBQTlCO0FBQWdDLE1BQS9nQjtBQUFBLFNBQWdoQmdDLElBQUUsU0FBRkEsQ0FBRSxDQUFTL0IsQ0FBVCxFQUFXO0FBQUMsVUFBSUssSUFBRSxFQUFOLENBQVMsUUFBT0wsRUFBRW9ELE1BQVQsR0FBaUIsS0FBSyxDQUFMO0FBQU8vQyxVQUFFTixFQUFFNGQsVUFBSixJQUFnQjljLE9BQU9tZCxNQUFQLENBQWMsRUFBZCxFQUFpQnhjLENBQWpCLEVBQW1CLEVBQUNvYyxTQUFRLENBQUMsQ0FBVixFQUFuQixDQUFoQixDQUFpRCxNQUFNLEtBQUssQ0FBTDtBQUFPdmQsVUFBRU4sRUFBRTRkLFVBQUosSUFBZ0JwZCxFQUFFUixFQUFFNGQsVUFBSixFQUFlM2QsRUFBRSxDQUFGLENBQWYsQ0FBaEIsRUFBcUNLLEVBQUVOLEVBQUUyZCxXQUFKLElBQWlCbmQsRUFBRVIsRUFBRTJkLFdBQUosRUFBZ0IxZCxFQUFFLENBQUYsQ0FBaEIsQ0FBdEQsQ0FBNEUsTUFBTTtBQUFRWSxVQUFFc2MsUUFBRixDQUFXLDJDQUF5Q2xkLEVBQUVvRCxNQUEzQyxHQUFrRCx1RUFBN0QsRUFBaEwsQ0FBc1QsT0FBTy9DLENBQVA7QUFBUyxNQUF0MkIsQ0FBdTJCTixFQUFFc2UsaUJBQUYsR0FBb0IsVUFBU3JlLENBQVQsRUFBVztBQUFDLFVBQUlLLElBQUVOLEVBQUVrZSxpQkFBUixDQUEwQixPQUFNLFlBQVUsT0FBT2plLENBQWpCLEdBQW1CSyxFQUFFTixFQUFFMmQsV0FBSixJQUFpQm5kLEVBQUVSLEVBQUUyZCxXQUFKLEVBQWdCMWQsQ0FBaEIsQ0FBcEMsR0FBdUR1RCxNQUFNQyxPQUFOLENBQWN4RCxDQUFkLElBQWlCSyxJQUFFMEIsRUFBRS9CLENBQUYsQ0FBbkIsR0FBd0JZLEVBQUV1YyxhQUFGLENBQWdCbmQsQ0FBaEIsSUFBbUJLLElBQUVLLEVBQUVWLENBQUYsQ0FBckIsR0FBMEIsQ0FBQyxDQUFELEtBQUtBLENBQUwsR0FBT0ssSUFBRTBCLEVBQUUsQ0FBQyxDQUFDLENBQUYsRUFBSSxDQUFDLENBQUwsQ0FBRixDQUFULEdBQW9CLENBQUMsQ0FBRCxLQUFLL0IsQ0FBTCxHQUFPSyxJQUFFMEIsRUFBRSxDQUFDLENBQUMsQ0FBRixFQUFJLENBQUMsQ0FBTCxDQUFGLENBQVQsR0FBb0IsS0FBSyxDQUFMLEtBQVMvQixDQUFULEtBQWFLLElBQUVOLEVBQUVrZSxpQkFBakIsQ0FBakosRUFBcUw1ZCxDQUEzTDtBQUE2TCxNQUF2UDtBQUF3UCxLQUE1c0csRUFBNnNHLFVBQVNMLENBQVQsRUFBV0QsQ0FBWCxFQUFhTSxDQUFiLEVBQWU7QUFBQztBQUFhUSxZQUFPQyxjQUFQLENBQXNCZixDQUF0QixFQUF3QixZQUF4QixFQUFxQyxFQUFDOEQsT0FBTSxDQUFDLENBQVIsRUFBckMsRUFBaUQsSUFBSWpELElBQUVQLEVBQUUsQ0FBRixDQUFOO0FBQUEsU0FBV2tCLElBQUVsQixFQUFFLENBQUYsQ0FBYjtBQUFBLFNBQWtCbUIsSUFBRW5CLEVBQUUsQ0FBRixDQUFwQjtBQUFBLFNBQXlCRCxJQUFFb0IsRUFBRUwsT0FBRixDQUFVbWEsS0FBckM7QUFBQSxTQUEyQ2hiLElBQUVrQixFQUFFTCxPQUFGLENBQVVvYSxPQUF2RDtBQUFBLFNBQStEaGIsSUFBRUYsRUFBRSxFQUFGLENBQWpFO0FBQUEsU0FBdUVLLElBQUVMLEVBQUUsRUFBRixDQUF6RTtBQUFBLFNBQStFMEIsSUFBRTFCLEVBQUUsRUFBRixDQUFqRjtBQUFBLFNBQXVGTSxJQUFFTixFQUFFLEVBQUYsQ0FBekYsQ0FBK0ZOLEVBQUV1ZSxpQkFBRixHQUFvQixVQUFTdGUsQ0FBVCxFQUFXO0FBQUMsVUFBSUQsSUFBRWEsRUFBRThJLE9BQUYsQ0FBVXRKLENBQVYsQ0FBTjtBQUFBLFVBQW1CQyxJQUFFTyxFQUFFMmIsWUFBRixDQUFldmMsQ0FBZixDQUFyQixDQUF1QyxPQUFPRCxFQUFFd2UsV0FBRixDQUFjbGUsQ0FBZCxHQUFpQkEsQ0FBeEI7QUFBMEIsTUFBakcsQ0FBa0csSUFBSXVELElBQUUsU0FBRkEsQ0FBRSxDQUFTNUQsQ0FBVCxFQUFXO0FBQUNBLFFBQUU4ZCxTQUFGLEdBQVkxZCxDQUFaLEVBQWNKLEVBQUV5VCxXQUFGLEdBQWMsRUFBNUI7QUFBK0IsTUFBakQ7QUFBQSxTQUFrRG5TLElBQUUsU0FBRkEsQ0FBRSxDQUFTdEIsQ0FBVCxFQUFXRCxDQUFYLEVBQWE7QUFBQzZELFFBQUU1RCxDQUFGLEVBQUssSUFBSUssSUFBRU4sRUFBRStkLFNBQVIsQ0FBa0J6ZCxLQUFHTCxFQUFFd2UsU0FBRixDQUFZbmMsR0FBWixDQUFnQmhDLENBQWhCLENBQUg7QUFBc0IsTUFBL0csQ0FBZ0hOLEVBQUUwZSxnQkFBRixHQUFtQixVQUFTemUsQ0FBVCxFQUFXO0FBQUMsVUFBSUQsSUFBRWEsRUFBRThJLE9BQUYsQ0FBVXRKLENBQVYsQ0FBTixDQUFtQmtCLEVBQUV2QixDQUFGLEVBQUlDLENBQUosR0FBT08sRUFBRVksT0FBRixDQUFVbkIsRUFBRTBlLElBQVosQ0FBUCxFQUF5QmhlLEVBQUVpZSxTQUFGLENBQVkzZSxFQUFFbVcsS0FBZCxDQUF6QixFQUE4Q3pWLEVBQUVrZSxRQUFGLENBQVc1ZSxFQUFFNmQsSUFBYixDQUE5QyxFQUFpRWxkLEVBQUVRLE9BQUYsQ0FBVW5CLEVBQUU2WSxPQUFaLENBQWpFLEVBQXNGOVcsRUFBRVosT0FBRixDQUFVbkIsRUFBRTZlLE9BQVosRUFBb0I3ZSxFQUFFOGUsVUFBdEIsQ0FBdEY7QUFBd0gsTUFBMUssQ0FBMkssSUFBSXZhLElBQUUsU0FBRkEsQ0FBRSxHQUFVO0FBQUMsVUFBSXZFLElBQUVZLEVBQUU4SSxPQUFGLENBQVVwSixDQUFWLENBQU47QUFBQSxVQUFtQlAsSUFBRWEsRUFBRTJiLFlBQUYsQ0FBZWhiLEVBQUV3ZCxXQUFqQixDQUFyQixDQUFtRC9lLEVBQUV1ZSxXQUFGLENBQWN4ZSxDQUFkO0FBQWlCLE1BQXJGLENBQXNGQSxFQUFFb0IsT0FBRixHQUFVb0QsQ0FBVjtBQUFZLEtBQXoxSCxFQUEwMUgsVUFBU3ZFLENBQVQsRUFBV0QsQ0FBWCxFQUFhTSxDQUFiLEVBQWU7QUFBQztBQUFhUSxZQUFPQyxjQUFQLENBQXNCZixDQUF0QixFQUF3QixZQUF4QixFQUFxQyxFQUFDOEQsT0FBTSxDQUFDLENBQVIsRUFBckMsRUFBaUQsSUFBSWpELElBQUVQLEVBQUUsQ0FBRixDQUFOO0FBQUEsU0FBV2tCLElBQUUsRUFBQzhHLFFBQU8sQ0FBQyxDQUFULEVBQVcyVyxTQUFRLElBQW5CLEVBQXdCQyxTQUFRLEVBQWhDLEVBQW1DQyxPQUFNLElBQXpDLEVBQWI7QUFBQSxTQUE0RDFkLElBQUVYLE9BQU9tZCxNQUFQLENBQWMsRUFBZCxFQUFpQnpjLENBQWpCLENBQTlELENBQWtGeEIsRUFBRW9mLFVBQUYsR0FBYSxZQUFVO0FBQUMzZCxVQUFFWCxPQUFPbWQsTUFBUCxDQUFjLEVBQWQsRUFBaUJ6YyxDQUFqQixDQUFGO0FBQXNCLE1BQTlDLEVBQStDeEIsRUFBRXFmLGNBQUYsR0FBaUIsVUFBU3BmLENBQVQsRUFBVztBQUFDLFVBQUcsWUFBVSxPQUFPQSxDQUFwQixFQUFzQixPQUFPSSxFQUFFUSxFQUFFOGMsV0FBSixFQUFnQjFkLENBQWhCLENBQVAsQ0FBMEIsS0FBSSxJQUFJRCxDQUFSLElBQWFDLENBQWI7QUFBZUksU0FBRUwsQ0FBRixFQUFJQyxFQUFFRCxDQUFGLENBQUo7QUFBZjtBQUF5QixNQUFySixDQUFzSixJQUFJSyxJQUFFLFNBQUZBLENBQUUsQ0FBU0osQ0FBVCxFQUFXRCxDQUFYLEVBQWE7QUFBQ3lCLFFBQUV5ZCxPQUFGLENBQVVqZixDQUFWLE1BQWV3QixFQUFFeWQsT0FBRixDQUFVamYsQ0FBVixJQUFhLEVBQTVCLEdBQWdDYSxPQUFPbWQsTUFBUCxDQUFjeGMsRUFBRXlkLE9BQUYsQ0FBVWpmLENBQVYsQ0FBZCxFQUEyQixFQUFDNkQsT0FBTTlELENBQVAsRUFBM0IsQ0FBaEM7QUFBc0UsTUFBMUYsQ0FBMkZBLEVBQUVzZixtQkFBRixHQUFzQixVQUFTcmYsQ0FBVCxFQUFXRCxDQUFYLEVBQWE7QUFBQyxVQUFJTSxJQUFFLENBQUMsS0FBSyxDQUFMLEtBQVNOLENBQVQsR0FBVyxFQUFYLEdBQWNBLENBQWYsRUFBa0JnZSxVQUF4QjtBQUFBLFVBQW1DbmQsSUFBRSxLQUFLLENBQUwsS0FBU1AsQ0FBVCxJQUFZQSxDQUFqRCxDQUFtRFEsT0FBT21kLE1BQVAsQ0FBY3hjLEVBQUV5ZCxPQUFGLENBQVVqZixDQUFWLENBQWQsRUFBMkIsRUFBQytkLFlBQVduZCxDQUFaLEVBQTNCO0FBQTJDLE1BQWxJLEVBQW1JYixFQUFFb0IsT0FBRixHQUFVSyxDQUE3STtBQUErSSxLQUExM0ksRUFBMjNJLFVBQVN4QixDQUFULEVBQVdELENBQVgsRUFBYU0sQ0FBYixFQUFlO0FBQUM7QUFBYVEsWUFBT0MsY0FBUCxDQUFzQmYsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUMsRUFBQzhELE9BQU0sQ0FBQyxDQUFSLEVBQXJDLEVBQWlELElBQUlqRCxJQUFFUCxFQUFFLENBQUYsQ0FBTjtBQUFBLFNBQVdrQixJQUFFbEIsRUFBRSxDQUFGLENBQWI7QUFBQSxTQUFrQm1CLElBQUVuQixFQUFFLENBQUYsQ0FBcEI7QUFBQSxTQUF5QkQsSUFBRW9CLEVBQUVMLE9BQUYsQ0FBVW9hLE9BQXJDO0FBQUEsU0FBNkNqYixJQUFFa0IsRUFBRUwsT0FBRixDQUFVcWEsVUFBekQ7QUFBQSxTQUFvRWpiLElBQUVpQixFQUFFTCxPQUFGLENBQVU2YSxNQUFoRjtBQUFBLFNBQXVGdGIsSUFBRWMsRUFBRUwsT0FBRixDQUFVaWIsY0FBbkc7QUFBQSxTQUFrSHJhLElBQUUxQixFQUFFLENBQUYsQ0FBcEgsQ0FBeUhOLEVBQUV1ZixTQUFGLEdBQVksWUFBVTtBQUFDMWUsUUFBRThJLE9BQUYsQ0FBVXRKLENBQVYsRUFBYW9lLFNBQWIsQ0FBdUJuYyxHQUF2QixDQUEyQi9CLENBQTNCLEdBQThCeUIsRUFBRVosT0FBRixDQUFVa0gsTUFBVixHQUFpQixDQUFDLENBQWhEO0FBQWtELE1BQXpFLENBQTBFLElBQUkxSCxJQUFFLFNBQUZBLENBQUUsR0FBVTtBQUFDQyxRQUFFOEksT0FBRixDQUFVdEosQ0FBVixFQUFhb2UsU0FBYixDQUF1QmUsTUFBdkIsQ0FBOEJqZixDQUE5QixHQUFpQ3lCLEVBQUVaLE9BQUYsQ0FBVWtILE1BQVYsR0FBaUIsQ0FBQyxDQUFuRDtBQUFxRCxNQUF0RSxDQUF1RXRJLEVBQUV5ZixRQUFGLEdBQVcsVUFBU3hmLENBQVQsRUFBVztBQUFDLFdBQUssQ0FBTCxLQUFTQSxDQUFULEtBQWFBLElBQUV1QixFQUFFb2MsVUFBakIsRUFBNkIsSUFBSTVkLElBQUVnQyxFQUFFWixPQUFGLENBQVU4ZCxPQUFWLENBQWtCamYsQ0FBbEIsQ0FBTjtBQUFBLFVBQTJCSyxJQUFFTixFQUFFOEQsS0FBL0IsQ0FBcUMsSUFBRyxDQUFDLENBQUQsS0FBSzlELEVBQUVnZSxVQUFWLEVBQXFCO0FBQUMsV0FBSXZjLElBQUVqQixJQUFFLElBQUYsR0FBT1AsQ0FBYixDQUFlWSxFQUFFOEksT0FBRixDQUFVbEksQ0FBVixFQUFhZ2QsU0FBYixDQUF1Qm5jLEdBQXZCLENBQTJCM0IsQ0FBM0I7QUFBOEIsT0FBbkUsTUFBd0VDLElBQUlvQixFQUFFWixPQUFGLENBQVU2ZCxPQUFWLENBQWtCUyxPQUFsQixDQUEwQnBmLENBQTFCO0FBQTZCLE1BQWxNLEVBQW1NTixFQUFFMmYsUUFBRixHQUFXLFlBQVU7QUFBQyxVQUFJMWYsSUFBRWEsT0FBT21kLE1BQVAsQ0FBYyxFQUFkLEVBQWlCamMsRUFBRVosT0FBbkIsQ0FBTixDQUFrQyxPQUFPLE9BQU9uQixFQUFFZ2YsT0FBVCxFQUFpQixPQUFPaGYsRUFBRWtmLEtBQTFCLEVBQWdDbGYsQ0FBdkM7QUFBeUMsTUFBcFMsRUFBcVNELEVBQUU0ZixXQUFGLEdBQWMsWUFBVTtBQUFDLFdBQUksSUFBSTNmLElBQUUrTCxTQUFTNlQsZ0JBQVQsQ0FBMEIsTUFBSXJmLENBQTlCLENBQU4sRUFBdUNSLElBQUUsQ0FBN0MsRUFBK0NBLElBQUVDLEVBQUVvRCxNQUFuRCxFQUEwRHJELEdBQTFELEVBQThEO0FBQUNDLFNBQUVELENBQUYsRUFBS3llLFNBQUwsQ0FBZWUsTUFBZixDQUFzQjdlLENBQXRCO0FBQXlCO0FBQUMsTUFBdlo7QUFBd1osS0FBM21LLEVBQTRtSyxVQUFTVixDQUFULEVBQVdELENBQVgsRUFBYTtBQUFDLFNBQUlNLENBQUosQ0FBTUEsSUFBRSxZQUFVO0FBQUMsYUFBTyxJQUFQO0FBQVksTUFBdkIsRUFBRixDQUE0QixJQUFHO0FBQUNBLFVBQUVBLEtBQUd3QyxTQUFTLGFBQVQsR0FBSCxJQUE4QixDQUFDLEdBQUVxVixJQUFILEVBQVMsTUFBVCxDQUFoQztBQUFpRCxNQUFyRCxDQUFxRCxPQUFNbFksQ0FBTixFQUFRO0FBQUMsMEJBQWlCd1AsTUFBakIseUNBQWlCQSxNQUFqQixPQUEwQm5QLElBQUVtUCxNQUE1QjtBQUFvQyxRQUFFdlAsT0FBRixHQUFVSSxDQUFWO0FBQVksS0FBMXdLLEVBQTJ3SyxVQUFTTCxDQUFULEVBQVdELENBQVgsRUFBYU0sQ0FBYixFQUFlO0FBQUMsTUFBQyxVQUFTTixDQUFULEVBQVc7QUFBQ0MsUUFBRUMsT0FBRixHQUFVRixFQUFFOGYsVUFBRixHQUFheGYsRUFBRSxDQUFGLENBQXZCO0FBQTRCLE1BQXpDLEVBQTJDRyxJQUEzQyxDQUFnRFQsQ0FBaEQsRUFBa0RNLEVBQUUsQ0FBRixDQUFsRDtBQUF3RCxLQUFuMUssRUFBbzFLLFVBQVNMLENBQVQsRUFBV0QsQ0FBWCxFQUFhTSxDQUFiLEVBQWU7QUFBQyxNQUFDLFVBQVNOLENBQVQsRUFBVztBQUFDQyxRQUFFQyxPQUFGLEdBQVVGLEVBQUVxYixJQUFGLEdBQU8vYSxFQUFFLEVBQUYsQ0FBakI7QUFBdUIsTUFBcEMsRUFBc0NHLElBQXRDLENBQTJDVCxDQUEzQyxFQUE2Q00sRUFBRSxDQUFGLENBQTdDO0FBQW1ELEtBQXY1SyxFQUF3NUssVUFBU0wsQ0FBVCxFQUFXRCxDQUFYLEVBQWFNLENBQWIsRUFBZTtBQUFDLG9CQUFhLE9BQU9tUCxNQUFwQixJQUE0Qm5QLEVBQUUsRUFBRixDQUE1QixDQUFrQyxJQUFJTyxJQUFFUCxFQUFFLEVBQUYsRUFBTWMsT0FBWixDQUFvQm5CLEVBQUVDLE9BQUYsR0FBVVcsQ0FBVjtBQUFZLEtBQTErSyxFQUEyK0ssVUFBU1osQ0FBVCxFQUFXRCxDQUFYLEVBQWFNLENBQWIsRUFBZTtBQUFDLFNBQUlPLElBQUVQLEVBQUUsRUFBRixDQUFOLENBQVksWUFBVSxPQUFPTyxDQUFqQixLQUFxQkEsSUFBRSxDQUFDLENBQUNaLEVBQUVJLENBQUgsRUFBS1EsQ0FBTCxFQUFPLEVBQVAsQ0FBRCxDQUF2QixFQUFxQyxJQUFJVyxJQUFFLEVBQUN1ZSxVQUFTLEtBQVYsRUFBTixDQUF1QnZlLEVBQUV3ZSxTQUFGLEdBQVksS0FBSyxDQUFqQixDQUFtQjFmLEVBQUUsRUFBRixFQUFNTyxDQUFOLEVBQVFXLENBQVIsRUFBV1gsRUFBRW9mLE1BQUYsS0FBV2hnQixFQUFFQyxPQUFGLEdBQVVXLEVBQUVvZixNQUF2QjtBQUErQixLQUFob0wsRUFBaW9MLFVBQVNoZ0IsQ0FBVCxFQUFXRCxDQUFYLEVBQWFNLENBQWIsRUFBZTtBQUFDTixTQUFFQyxFQUFFQyxPQUFGLEdBQVVJLEVBQUUsRUFBRixFQUFNLEtBQUssQ0FBWCxDQUFaLEVBQTBCTixFQUFFc1AsSUFBRixDQUFPLENBQUNyUCxFQUFFSSxDQUFILEVBQUssd2lWQUFMLEVBQThpVixFQUE5aVYsQ0FBUCxDQUExQjtBQUFvbFYsS0FBcnVnQixFQUFzdWdCLFVBQVNKLENBQVQsRUFBV0QsQ0FBWCxFQUFhO0FBQUMsY0FBU00sQ0FBVCxDQUFXTCxDQUFYLEVBQWFELENBQWIsRUFBZTtBQUFDLFVBQUlNLElBQUVMLEVBQUUsQ0FBRixLQUFNLEVBQVo7QUFBQSxVQUFldUIsSUFBRXZCLEVBQUUsQ0FBRixDQUFqQixDQUFzQixJQUFHLENBQUN1QixDQUFKLEVBQU0sT0FBT2xCLENBQVAsQ0FBUyxJQUFHTixLQUFHLGNBQVksT0FBT3FaLElBQXpCLEVBQThCO0FBQUMsV0FBSTVYLElBQUVaLEVBQUVXLENBQUYsQ0FBTixDQUFXLE9BQU0sQ0FBQ2xCLENBQUQsRUFBSXFDLE1BQUosQ0FBV25CLEVBQUVpWSxPQUFGLENBQVUvUCxHQUFWLENBQWMsVUFBU3pKLENBQVQsRUFBVztBQUFDLGVBQU0sbUJBQWlCdUIsRUFBRW1ZLFVBQW5CLEdBQThCMVosQ0FBOUIsR0FBZ0MsS0FBdEM7QUFBNEMsUUFBdEUsQ0FBWCxFQUFvRjBDLE1BQXBGLENBQTJGLENBQUNsQixDQUFELENBQTNGLEVBQWdHdVgsSUFBaEcsQ0FBcUcsSUFBckcsQ0FBTjtBQUFpSCxjQUFNLENBQUMxWSxDQUFELEVBQUkwWSxJQUFKLENBQVMsSUFBVCxDQUFOO0FBQXFCLGVBQVNuWSxDQUFULENBQVdaLENBQVgsRUFBYTtBQUFDLGFBQU0scUVBQW1Fb1osS0FBS1MsU0FBU0MsbUJBQW1CakwsS0FBS0MsU0FBTCxDQUFlOU8sQ0FBZixDQUFuQixDQUFULENBQUwsQ0FBbkUsR0FBeUgsS0FBL0g7QUFBcUksUUFBRUMsT0FBRixHQUFVLFVBQVNELENBQVQsRUFBVztBQUFDLFVBQUlELElBQUUsRUFBTixDQUFTLE9BQU9BLEVBQUUwWSxRQUFGLEdBQVcsWUFBVTtBQUFDLGNBQU8sS0FBS2hQLEdBQUwsQ0FBUyxVQUFTMUosQ0FBVCxFQUFXO0FBQUMsWUFBSWEsSUFBRVAsRUFBRU4sQ0FBRixFQUFJQyxDQUFKLENBQU4sQ0FBYSxPQUFPRCxFQUFFLENBQUYsSUFBSyxZQUFVQSxFQUFFLENBQUYsQ0FBVixHQUFlLEdBQWYsR0FBbUJhLENBQW5CLEdBQXFCLEdBQTFCLEdBQThCQSxDQUFyQztBQUF1QyxRQUF6RSxFQUEyRW1ZLElBQTNFLENBQWdGLEVBQWhGLENBQVA7QUFBMkYsT0FBakgsRUFBa0hoWixFQUFFSyxDQUFGLEdBQUksVUFBU0osQ0FBVCxFQUFXSyxDQUFYLEVBQWE7QUFBQyxtQkFBVSxPQUFPTCxDQUFqQixLQUFxQkEsSUFBRSxDQUFDLENBQUMsSUFBRCxFQUFNQSxDQUFOLEVBQVEsRUFBUixDQUFELENBQXZCLEVBQXNDLEtBQUksSUFBSVksSUFBRSxFQUFOLEVBQVNXLElBQUUsQ0FBZixFQUFpQkEsSUFBRSxLQUFLNkIsTUFBeEIsRUFBK0I3QixHQUEvQixFQUFtQztBQUFDLFlBQUlDLElBQUUsS0FBS0QsQ0FBTCxFQUFRLENBQVIsQ0FBTixDQUFpQixZQUFVLE9BQU9DLENBQWpCLEtBQXFCWixFQUFFWSxDQUFGLElBQUssQ0FBQyxDQUEzQjtBQUE4QixhQUFJRCxJQUFFLENBQU4sRUFBUUEsSUFBRXZCLEVBQUVvRCxNQUFaLEVBQW1CN0IsR0FBbkIsRUFBdUI7QUFBQyxZQUFJbkIsSUFBRUosRUFBRXVCLENBQUYsQ0FBTixDQUFXLFlBQVUsT0FBT25CLEVBQUUsQ0FBRixDQUFqQixJQUF1QlEsRUFBRVIsRUFBRSxDQUFGLENBQUYsQ0FBdkIsS0FBaUNDLEtBQUcsQ0FBQ0QsRUFBRSxDQUFGLENBQUosR0FBU0EsRUFBRSxDQUFGLElBQUtDLENBQWQsR0FBZ0JBLE1BQUlELEVBQUUsQ0FBRixJQUFLLE1BQUlBLEVBQUUsQ0FBRixDQUFKLEdBQVMsU0FBVCxHQUFtQkMsQ0FBbkIsR0FBcUIsR0FBOUIsQ0FBaEIsRUFBbUROLEVBQUVzUCxJQUFGLENBQU9qUCxDQUFQLENBQXBGO0FBQStGO0FBQUMsT0FBaFksRUFBaVlMLENBQXhZO0FBQTBZLE1BQXphO0FBQTBhLEtBQXRoaUIsRUFBdWhpQixVQUFTQyxDQUFULEVBQVdELENBQVgsRUFBYU0sQ0FBYixFQUFlO0FBQUMsY0FBU08sQ0FBVCxDQUFXWixDQUFYLEVBQWFELENBQWIsRUFBZTtBQUFDLFdBQUksSUFBSU0sSUFBRSxDQUFWLEVBQVlBLElBQUVMLEVBQUVvRCxNQUFoQixFQUF1Qi9DLEdBQXZCLEVBQTJCO0FBQUMsV0FBSU8sSUFBRVosRUFBRUssQ0FBRixDQUFOO0FBQUEsV0FBV2tCLElBQUVnRCxFQUFFM0QsRUFBRTJGLEVBQUosQ0FBYixDQUFxQixJQUFHaEYsQ0FBSCxFQUFLO0FBQUNBLFVBQUUwZSxJQUFGLEdBQVMsS0FBSSxJQUFJemUsSUFBRSxDQUFWLEVBQVlBLElBQUVELEVBQUUrWSxLQUFGLENBQVFsWCxNQUF0QixFQUE2QjVCLEdBQTdCO0FBQWlDRCxXQUFFK1ksS0FBRixDQUFROVksQ0FBUixFQUFXWixFQUFFMFosS0FBRixDQUFROVksQ0FBUixDQUFYO0FBQWpDLFNBQXdELE9BQUtBLElBQUVaLEVBQUUwWixLQUFGLENBQVFsWCxNQUFmLEVBQXNCNUIsR0FBdEI7QUFBMEJELFdBQUUrWSxLQUFGLENBQVFqTCxJQUFSLENBQWF0TixFQUFFbkIsRUFBRTBaLEtBQUYsQ0FBUTlZLENBQVIsQ0FBRixFQUFhekIsQ0FBYixDQUFiO0FBQTFCO0FBQXdELFFBQS9ILE1BQW1JO0FBQUMsYUFBSSxJQUFJSyxJQUFFLEVBQU4sRUFBU29CLElBQUUsQ0FBZixFQUFpQkEsSUFBRVosRUFBRTBaLEtBQUYsQ0FBUWxYLE1BQTNCLEVBQWtDNUIsR0FBbEM7QUFBc0NwQixXQUFFaVAsSUFBRixDQUFPdE4sRUFBRW5CLEVBQUUwWixLQUFGLENBQVE5WSxDQUFSLENBQUYsRUFBYXpCLENBQWIsQ0FBUDtBQUF0QyxTQUE4RHdFLEVBQUUzRCxFQUFFMkYsRUFBSixJQUFRLEVBQUNBLElBQUczRixFQUFFMkYsRUFBTixFQUFTMFosTUFBSyxDQUFkLEVBQWdCM0YsT0FBTWxhLENBQXRCLEVBQVI7QUFBaUM7QUFBQztBQUFDLGVBQVNtQixDQUFULENBQVd2QixDQUFYLEVBQWFELENBQWIsRUFBZTtBQUFDLFdBQUksSUFBSU0sSUFBRSxFQUFOLEVBQVNPLElBQUUsRUFBWCxFQUFjVyxJQUFFLENBQXBCLEVBQXNCQSxJQUFFdkIsRUFBRW9ELE1BQTFCLEVBQWlDN0IsR0FBakMsRUFBcUM7QUFBQyxXQUFJQyxJQUFFeEIsRUFBRXVCLENBQUYsQ0FBTjtBQUFBLFdBQVduQixJQUFFTCxFQUFFbWdCLElBQUYsR0FBTzFlLEVBQUUsQ0FBRixJQUFLekIsRUFBRW1nQixJQUFkLEdBQW1CMWUsRUFBRSxDQUFGLENBQWhDO0FBQUEsV0FBcUNsQixJQUFFa0IsRUFBRSxDQUFGLENBQXZDO0FBQUEsV0FBNENqQixJQUFFaUIsRUFBRSxDQUFGLENBQTlDO0FBQUEsV0FBbURkLElBQUVjLEVBQUUsQ0FBRixDQUFyRDtBQUFBLFdBQTBETyxJQUFFLEVBQUNvWSxLQUFJN1osQ0FBTCxFQUFPOFosT0FBTTdaLENBQWIsRUFBZW9aLFdBQVVqWixDQUF6QixFQUE1RCxDQUF3RkUsRUFBRVIsQ0FBRixJQUFLUSxFQUFFUixDQUFGLEVBQUtrYSxLQUFMLENBQVdqTCxJQUFYLENBQWdCdE4sQ0FBaEIsQ0FBTCxHQUF3QjFCLEVBQUVnUCxJQUFGLENBQU96TyxFQUFFUixDQUFGLElBQUssRUFBQ21HLElBQUduRyxDQUFKLEVBQU1rYSxPQUFNLENBQUN2WSxDQUFELENBQVosRUFBWixDQUF4QjtBQUFzRCxjQUFPMUIsQ0FBUDtBQUFTLGVBQVNtQixDQUFULENBQVd4QixDQUFYLEVBQWFELENBQWIsRUFBZTtBQUFDLFVBQUlNLElBQUVtRSxFQUFFeEUsRUFBRW1nQixVQUFKLENBQU4sQ0FBc0IsSUFBRyxDQUFDOWYsQ0FBSixFQUFNLE1BQU0sSUFBSStmLEtBQUosQ0FBVSw2R0FBVixDQUFOLENBQStILElBQUl4ZixJQUFFcUMsRUFBRUEsRUFBRUcsTUFBRixHQUFTLENBQVgsQ0FBTixDQUFvQixJQUFHLFVBQVFwRCxFQUFFOGYsUUFBYixFQUFzQmxmLElBQUVBLEVBQUVpYyxXQUFGLEdBQWN4YyxFQUFFeWMsWUFBRixDQUFlL2MsQ0FBZixFQUFpQmEsRUFBRWljLFdBQW5CLENBQWQsR0FBOEN4YyxFQUFFa2UsV0FBRixDQUFjeGUsQ0FBZCxDQUFoRCxHQUFpRU0sRUFBRXljLFlBQUYsQ0FBZS9jLENBQWYsRUFBaUJNLEVBQUVzYyxVQUFuQixDQUFqRSxFQUFnRzFaLEVBQUVvTSxJQUFGLENBQU90UCxDQUFQLENBQWhHLENBQXRCLEtBQW9JO0FBQUMsV0FBRyxhQUFXQyxFQUFFOGYsUUFBaEIsRUFBeUIsTUFBTSxJQUFJTSxLQUFKLENBQVUsb0VBQVYsQ0FBTixDQUFzRi9mLEVBQUVrZSxXQUFGLENBQWN4ZSxDQUFkO0FBQWlCO0FBQUMsZUFBU0ssQ0FBVCxDQUFXSixDQUFYLEVBQWE7QUFBQyxVQUFHLFNBQU9BLEVBQUVtTCxVQUFaLEVBQXVCLE9BQU0sQ0FBQyxDQUFQLENBQVNuTCxFQUFFbUwsVUFBRixDQUFhOFIsV0FBYixDQUF5QmpkLENBQXpCLEVBQTRCLElBQUlELElBQUVrRCxFQUFFUyxPQUFGLENBQVUxRCxDQUFWLENBQU4sQ0FBbUJELEtBQUcsQ0FBSCxJQUFNa0QsRUFBRVUsTUFBRixDQUFTNUQsQ0FBVCxFQUFXLENBQVgsQ0FBTjtBQUFvQixlQUFTTyxDQUFULENBQVdOLENBQVgsRUFBYTtBQUFDLFVBQUlELElBQUVnTSxTQUFTeVEsYUFBVCxDQUF1QixPQUF2QixDQUFOLENBQXNDLE9BQU94YyxFQUFFbVQsS0FBRixDQUFRcFEsSUFBUixHQUFhLFVBQWIsRUFBd0JyQyxFQUFFWCxDQUFGLEVBQUlDLEVBQUVtVCxLQUFOLENBQXhCLEVBQXFDM1IsRUFBRXhCLENBQUYsRUFBSUQsQ0FBSixDQUFyQyxFQUE0Q0EsQ0FBbkQ7QUFBcUQsZUFBU1EsQ0FBVCxDQUFXUCxDQUFYLEVBQWE7QUFBQyxVQUFJRCxJQUFFZ00sU0FBU3lRLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBTixDQUFxQyxPQUFPeGMsRUFBRW1ULEtBQUYsQ0FBUXBRLElBQVIsR0FBYSxVQUFiLEVBQXdCL0MsRUFBRW1ULEtBQUYsQ0FBUWtOLEdBQVIsR0FBWSxZQUFwQyxFQUFpRDNmLEVBQUVYLENBQUYsRUFBSUMsRUFBRW1ULEtBQU4sQ0FBakQsRUFBOEQzUixFQUFFeEIsQ0FBRixFQUFJRCxDQUFKLENBQTlELEVBQXFFQSxDQUE1RTtBQUE4RSxlQUFTVyxDQUFULENBQVdWLENBQVgsRUFBYUQsQ0FBYixFQUFlO0FBQUNjLGFBQU9zQyxJQUFQLENBQVlwRCxDQUFaLEVBQWU0TCxPQUFmLENBQXVCLFVBQVN0TCxDQUFULEVBQVc7QUFBQ0wsU0FBRXNnQixZQUFGLENBQWVqZ0IsQ0FBZixFQUFpQk4sRUFBRU0sQ0FBRixDQUFqQjtBQUF1QixPQUExRDtBQUE0RCxlQUFTMEIsQ0FBVCxDQUFXL0IsQ0FBWCxFQUFhRCxDQUFiLEVBQWU7QUFBQyxVQUFJTSxDQUFKLEVBQU1PLENBQU4sRUFBUVcsQ0FBUixFQUFVQyxDQUFWLENBQVksSUFBR3pCLEVBQUVnZ0IsU0FBRixJQUFhL2YsRUFBRW1hLEdBQWxCLEVBQXNCO0FBQUMsV0FBRyxFQUFFM1ksSUFBRXpCLEVBQUVnZ0IsU0FBRixDQUFZL2YsRUFBRW1hLEdBQWQsQ0FBSixDQUFILEVBQTJCLE9BQU8sWUFBVSxDQUFFLENBQW5CLENBQW9CbmEsRUFBRW1hLEdBQUYsR0FBTTNZLENBQU47QUFBUSxXQUFHekIsRUFBRXdnQixTQUFMLEVBQWU7QUFBQyxXQUFJN2YsSUFBRW1FLEdBQU4sQ0FBVXhFLElBQUUwRCxNQUFJQSxJQUFFekQsRUFBRVAsQ0FBRixDQUFOLENBQUYsRUFBY2EsSUFBRUQsRUFBRTZmLElBQUYsQ0FBTyxJQUFQLEVBQVluZ0IsQ0FBWixFQUFjSyxDQUFkLEVBQWdCLENBQUMsQ0FBakIsQ0FBaEIsRUFBb0NhLElBQUVaLEVBQUU2ZixJQUFGLENBQU8sSUFBUCxFQUFZbmdCLENBQVosRUFBY0ssQ0FBZCxFQUFnQixDQUFDLENBQWpCLENBQXRDO0FBQTBELE9BQXBGLE1BQXlGVixFQUFFMlosU0FBRixJQUFhLGNBQVksT0FBTzhHLEdBQWhDLElBQXFDLGNBQVksT0FBT0EsSUFBSUMsZUFBNUQsSUFBNkUsY0FBWSxPQUFPRCxJQUFJRSxlQUFwRyxJQUFxSCxjQUFZLE9BQU9DLElBQXhJLElBQThJLGNBQVksT0FBT3hILElBQWpLLElBQXVLL1ksSUFBRUUsRUFBRVIsQ0FBRixDQUFGLEVBQU9hLElBQUVVLEVBQUVrZixJQUFGLENBQU8sSUFBUCxFQUFZbmdCLENBQVosRUFBY04sQ0FBZCxDQUFULEVBQTBCd0IsSUFBRSxhQUFVO0FBQUNuQixTQUFFQyxDQUFGLEdBQUtBLEVBQUV3Z0IsSUFBRixJQUFRSixJQUFJRSxlQUFKLENBQW9CdGdCLEVBQUV3Z0IsSUFBdEIsQ0FBYjtBQUF5QyxPQUF2UCxLQUEwUHhnQixJQUFFQyxFQUFFUCxDQUFGLENBQUYsRUFBT2EsSUFBRWdELEVBQUU0YyxJQUFGLENBQU8sSUFBUCxFQUFZbmdCLENBQVosQ0FBVCxFQUF3QmtCLElBQUUsYUFBVTtBQUFDbkIsU0FBRUMsQ0FBRjtBQUFLLE9BQXBTLEVBQXNTLE9BQU9PLEVBQUVaLENBQUYsR0FBSyxVQUFTRCxDQUFULEVBQVc7QUFBQyxXQUFHQSxDQUFILEVBQUs7QUFBQyxZQUFHQSxFQUFFb2EsR0FBRixLQUFRbmEsRUFBRW1hLEdBQVYsSUFBZXBhLEVBQUVxYSxLQUFGLEtBQVVwYSxFQUFFb2EsS0FBM0IsSUFBa0NyYSxFQUFFNFosU0FBRixLQUFjM1osRUFBRTJaLFNBQXJELEVBQStELE9BQU8vWSxFQUFFWixJQUFFRCxDQUFKO0FBQU8sUUFBbkYsTUFBd0Z3QjtBQUFJLE9BQXBIO0FBQXFILGVBQVNaLENBQVQsQ0FBV1gsQ0FBWCxFQUFhRCxDQUFiLEVBQWVNLENBQWYsRUFBaUJPLENBQWpCLEVBQW1CO0FBQUMsVUFBSVcsSUFBRWxCLElBQUUsRUFBRixHQUFLTyxFQUFFdVosR0FBYixDQUFpQixJQUFHbmEsRUFBRThnQixVQUFMLEVBQWdCOWdCLEVBQUU4Z0IsVUFBRixDQUFhQyxPQUFiLEdBQXFCemMsRUFBRXZFLENBQUYsRUFBSXdCLENBQUosQ0FBckIsQ0FBaEIsS0FBZ0Q7QUFBQyxXQUFJQyxJQUFFdUssU0FBU2lWLGNBQVQsQ0FBd0J6ZixDQUF4QixDQUFOO0FBQUEsV0FBaUNuQixJQUFFSixFQUFFaWhCLFVBQXJDLENBQWdEN2dCLEVBQUVMLENBQUYsS0FBTUMsRUFBRWlkLFdBQUYsQ0FBYzdjLEVBQUVMLENBQUYsQ0FBZCxDQUFOLEVBQTBCSyxFQUFFZ0QsTUFBRixHQUFTcEQsRUFBRThjLFlBQUYsQ0FBZXRiLENBQWYsRUFBaUJwQixFQUFFTCxDQUFGLENBQWpCLENBQVQsR0FBZ0NDLEVBQUV1ZSxXQUFGLENBQWMvYyxDQUFkLENBQTFEO0FBQTJFO0FBQUMsZUFBU29DLENBQVQsQ0FBVzVELENBQVgsRUFBYUQsQ0FBYixFQUFlO0FBQUMsVUFBSU0sSUFBRU4sRUFBRW9hLEdBQVI7QUFBQSxVQUFZdlosSUFBRWIsRUFBRXFhLEtBQWhCLENBQXNCLElBQUd4WixLQUFHWixFQUFFc2dCLFlBQUYsQ0FBZSxPQUFmLEVBQXVCMWYsQ0FBdkIsQ0FBSCxFQUE2QlosRUFBRThnQixVQUFsQyxFQUE2QzlnQixFQUFFOGdCLFVBQUYsQ0FBYUMsT0FBYixHQUFxQjFnQixDQUFyQixDQUE3QyxLQUF3RTtBQUFDLGNBQUtMLEVBQUUyYyxVQUFQO0FBQW1CM2MsVUFBRWlkLFdBQUYsQ0FBY2pkLEVBQUUyYyxVQUFoQjtBQUFuQixRQUErQzNjLEVBQUV1ZSxXQUFGLENBQWN4UyxTQUFTaVYsY0FBVCxDQUF3QjNnQixDQUF4QixDQUFkO0FBQTBDO0FBQUMsZUFBU2lCLENBQVQsQ0FBV3RCLENBQVgsRUFBYUQsQ0FBYixFQUFlTSxDQUFmLEVBQWlCO0FBQUMsVUFBSU8sSUFBRVAsRUFBRThaLEdBQVI7QUFBQSxVQUFZNVksSUFBRWxCLEVBQUVzWixTQUFoQjtBQUFBLFVBQTBCblksSUFBRSxLQUFLLENBQUwsS0FBU3pCLEVBQUVtaEIscUJBQVgsSUFBa0MzZixDQUE5RCxDQUFnRSxDQUFDeEIsRUFBRW1oQixxQkFBRixJQUF5QjFmLENBQTFCLE1BQStCWixJQUFFMkIsRUFBRTNCLENBQUYsQ0FBakMsR0FBdUNXLE1BQUlYLEtBQUcseURBQXVEd1ksS0FBS1MsU0FBU0MsbUJBQW1CakwsS0FBS0MsU0FBTCxDQUFldk4sQ0FBZixDQUFuQixDQUFULENBQUwsQ0FBdkQsR0FBNkcsS0FBcEgsQ0FBdkMsQ0FBa0ssSUFBSW5CLElBQUUsSUFBSXdnQixJQUFKLENBQVMsQ0FBQ2hnQixDQUFELENBQVQsRUFBYSxFQUFDbUMsTUFBSyxVQUFOLEVBQWIsQ0FBTjtBQUFBLFVBQXNDekMsSUFBRU4sRUFBRTZnQixJQUExQyxDQUErQzdnQixFQUFFNmdCLElBQUYsR0FBT0osSUFBSUMsZUFBSixDQUFvQnRnQixDQUFwQixDQUFQLEVBQThCRSxLQUFHbWdCLElBQUlFLGVBQUosQ0FBb0JyZ0IsQ0FBcEIsQ0FBakM7QUFBd0QsVUFBSWlFLElBQUUsRUFBTjtBQUFBLFNBQVM5RCxJQUFFLFVBQVNULENBQVQsRUFBVztBQUFDLFVBQUlELENBQUosQ0FBTSxPQUFPLFlBQVU7QUFBQyxjQUFPLEtBQUssQ0FBTCxLQUFTQSxDQUFULEtBQWFBLElBQUVDLEVBQUVzWCxLQUFGLENBQVEsSUFBUixFQUFhRyxTQUFiLENBQWYsR0FBd0MxWCxDQUEvQztBQUFpRCxPQUFuRTtBQUFvRSxNQUF0RixDQUF1RixZQUFVO0FBQUMsYUFBT3lQLFVBQVF6RCxRQUFSLElBQWtCQSxTQUFTb1YsR0FBM0IsSUFBZ0MsQ0FBQzNSLE9BQU80UixJQUEvQztBQUFvRCxNQUF0SixDQUFYO0FBQUEsU0FBbUs1YyxJQUFFLFVBQVN4RSxDQUFULEVBQVc7QUFBQyxVQUFJRCxJQUFFLEVBQU4sQ0FBUyxPQUFPLFVBQVNNLENBQVQsRUFBVztBQUFDLGNBQU8sS0FBSyxDQUFMLEtBQVNOLEVBQUVNLENBQUYsQ0FBVCxLQUFnQk4sRUFBRU0sQ0FBRixJQUFLTCxFQUFFUSxJQUFGLENBQU8sSUFBUCxFQUFZSCxDQUFaLENBQXJCLEdBQXFDTixFQUFFTSxDQUFGLENBQTVDO0FBQWlELE9BQXBFO0FBQXFFLE1BQTFGLENBQTJGLFVBQVNMLENBQVQsRUFBVztBQUFDLGFBQU8rTCxTQUFTdVEsYUFBVCxDQUF1QnRjLENBQXZCLENBQVA7QUFBaUMsTUFBeEksQ0FBcks7QUFBQSxTQUErUytELElBQUUsSUFBalQ7QUFBQSxTQUFzVGMsSUFBRSxDQUF4VDtBQUFBLFNBQTBUNUIsSUFBRSxFQUE1VDtBQUFBLFNBQStUVixJQUFFbEMsRUFBRSxFQUFGLENBQWpVLENBQXVVTCxFQUFFQyxPQUFGLEdBQVUsVUFBU0QsQ0FBVCxFQUFXRCxDQUFYLEVBQWE7QUFBQyxVQUFHLGVBQWEsT0FBT3NoQixLQUFwQixJQUEyQkEsS0FBM0IsSUFBa0Msb0JBQWlCdFYsUUFBakIseUNBQWlCQSxRQUFqQixFQUFyQyxFQUErRCxNQUFNLElBQUlxVSxLQUFKLENBQVUsOERBQVYsQ0FBTixDQUFnRnJnQixJQUFFQSxLQUFHLEVBQUwsRUFBUUEsRUFBRW9ULEtBQUYsR0FBUSxvQkFBaUJwVCxFQUFFb1QsS0FBbkIsSUFBeUJwVCxFQUFFb1QsS0FBM0IsR0FBaUMsRUFBakQsRUFBb0RwVCxFQUFFd2dCLFNBQUYsS0FBY3hnQixFQUFFd2dCLFNBQUYsR0FBWTlmLEdBQTFCLENBQXBELEVBQW1GVixFQUFFb2dCLFVBQUYsS0FBZXBnQixFQUFFb2dCLFVBQUYsR0FBYSxNQUE1QixDQUFuRixFQUF1SHBnQixFQUFFK2YsUUFBRixLQUFhL2YsRUFBRStmLFFBQUYsR0FBVyxRQUF4QixDQUF2SCxDQUF5SixJQUFJemYsSUFBRWtCLEVBQUV2QixDQUFGLEVBQUlELENBQUosQ0FBTixDQUFhLE9BQU9hLEVBQUVQLENBQUYsRUFBSU4sQ0FBSixHQUFPLFVBQVNDLENBQVQsRUFBVztBQUFDLFlBQUksSUFBSXdCLElBQUUsRUFBTixFQUFTcEIsSUFBRSxDQUFmLEVBQWlCQSxJQUFFQyxFQUFFK0MsTUFBckIsRUFBNEJoRCxHQUE1QixFQUFnQztBQUFDLFlBQUlFLElBQUVELEVBQUVELENBQUYsQ0FBTjtBQUFBLFlBQVdHLElBQUVnRSxFQUFFakUsRUFBRWlHLEVBQUosQ0FBYixDQUFxQmhHLEVBQUUwZixJQUFGLElBQVN6ZSxFQUFFNk4sSUFBRixDQUFPOU8sQ0FBUCxDQUFUO0FBQW1CLFlBQUdQLENBQUgsRUFBSztBQUFDWSxVQUFFVyxFQUFFdkIsQ0FBRixFQUFJRCxDQUFKLENBQUYsRUFBU0EsQ0FBVDtBQUFZLGFBQUksSUFBSUssSUFBRSxDQUFWLEVBQVlBLElBQUVvQixFQUFFNEIsTUFBaEIsRUFBdUJoRCxHQUF2QixFQUEyQjtBQUFDLFlBQUlHLElBQUVpQixFQUFFcEIsQ0FBRixDQUFOLENBQVcsSUFBRyxNQUFJRyxFQUFFMGYsSUFBVCxFQUFjO0FBQUMsY0FBSSxJQUFJdmYsSUFBRSxDQUFWLEVBQVlBLElBQUVILEVBQUUrWixLQUFGLENBQVFsWCxNQUF0QixFQUE2QjFDLEdBQTdCO0FBQWlDSCxZQUFFK1osS0FBRixDQUFRNVosQ0FBUjtBQUFqQyxVQUE4QyxPQUFPNkQsRUFBRWhFLEVBQUVnRyxFQUFKLENBQVA7QUFBZTtBQUFDO0FBQUMsT0FBMU87QUFBMk8sTUFBeGpCLENBQXlqQixJQUFJakMsSUFBRSxZQUFVO0FBQUMsVUFBSXRFLElBQUUsRUFBTixDQUFTLE9BQU8sVUFBU0QsQ0FBVCxFQUFXTSxDQUFYLEVBQWE7QUFBQyxjQUFPTCxFQUFFRCxDQUFGLElBQUtNLENBQUwsRUFBT0wsRUFBRTRPLE1BQUYsQ0FBU3BKLE9BQVQsRUFBa0J1VCxJQUFsQixDQUF1QixJQUF2QixDQUFkO0FBQTJDLE9BQWhFO0FBQWlFLE1BQXJGLEVBQU47QUFBOEYsS0FBeHJwQixFQUF5cnBCLFVBQVMvWSxDQUFULEVBQVdELENBQVgsRUFBYTtBQUFDQyxPQUFFQyxPQUFGLEdBQVUsVUFBU0QsQ0FBVCxFQUFXO0FBQUMsVUFBSUQsSUFBRSxlQUFhLE9BQU95UCxNQUFwQixJQUE0QkEsT0FBTzhSLFFBQXpDLENBQWtELElBQUcsQ0FBQ3ZoQixDQUFKLEVBQU0sTUFBTSxJQUFJcWdCLEtBQUosQ0FBVSxrQ0FBVixDQUFOLENBQW9ELElBQUcsQ0FBQ3BnQixDQUFELElBQUksWUFBVSxPQUFPQSxDQUF4QixFQUEwQixPQUFPQSxDQUFQLENBQVMsSUFBSUssSUFBRU4sRUFBRXdoQixRQUFGLEdBQVcsSUFBWCxHQUFnQnhoQixFQUFFeWhCLElBQXhCO0FBQUEsVUFBNkI1Z0IsSUFBRVAsSUFBRU4sRUFBRTBoQixRQUFGLENBQVdySixPQUFYLENBQW1CLFdBQW5CLEVBQStCLEdBQS9CLENBQWpDLENBQXFFLE9BQU9wWSxFQUFFb1ksT0FBRixDQUFVLHFEQUFWLEVBQWdFLFVBQVNwWSxDQUFULEVBQVdELENBQVgsRUFBYTtBQUFDLFdBQUl3QixJQUFFeEIsRUFBRTJjLElBQUYsR0FBU3RFLE9BQVQsQ0FBaUIsVUFBakIsRUFBNEIsVUFBU3BZLENBQVQsRUFBV0QsQ0FBWCxFQUFhO0FBQUMsZUFBT0EsQ0FBUDtBQUFTLFFBQW5ELEVBQXFEcVksT0FBckQsQ0FBNkQsVUFBN0QsRUFBd0UsVUFBU3BZLENBQVQsRUFBV0QsQ0FBWCxFQUFhO0FBQUMsZUFBT0EsQ0FBUDtBQUFTLFFBQS9GLENBQU4sQ0FBdUcsSUFBRywrQ0FBK0NzWSxJQUEvQyxDQUFvRDlXLENBQXBELENBQUgsRUFBMEQsT0FBT3ZCLENBQVAsQ0FBUyxJQUFJd0IsQ0FBSixDQUFNLE9BQU9BLElBQUUsTUFBSUQsRUFBRW1DLE9BQUYsQ0FBVSxJQUFWLENBQUosR0FBb0JuQyxDQUFwQixHQUFzQixNQUFJQSxFQUFFbUMsT0FBRixDQUFVLEdBQVYsQ0FBSixHQUFtQnJELElBQUVrQixDQUFyQixHQUF1QlgsSUFBRVcsRUFBRTZXLE9BQUYsQ0FBVSxPQUFWLEVBQWtCLEVBQWxCLENBQWpELEVBQXVFLFNBQU92SixLQUFLQyxTQUFMLENBQWV0TixDQUFmLENBQVAsR0FBeUIsR0FBdkc7QUFBMkcsT0FBelcsQ0FBUDtBQUFrWCxNQUE1bEI7QUFBNmxCLEtBQXB5cUIsRUFBcXlxQixVQUFTeEIsQ0FBVCxFQUFXRCxDQUFYLEVBQWFNLENBQWIsRUFBZTtBQUFDO0FBQWFRLFlBQU9DLGNBQVAsQ0FBc0JmLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDLEVBQUM4RCxPQUFNLENBQUMsQ0FBUixFQUFyQyxFQUFpRCxJQUFJakQsSUFBRVAsRUFBRSxFQUFGLENBQU47QUFBQSxTQUFZa0IsSUFBRWxCLEVBQUUsQ0FBRixDQUFkO0FBQUEsU0FBbUJtQixJQUFFbkIsRUFBRSxDQUFGLENBQXJCO0FBQUEsU0FBMEJELElBQUVDLEVBQUUsRUFBRixDQUE1QjtBQUFBLFNBQWtDQyxJQUFFLFNBQUZBLENBQUUsR0FBVTtBQUFDLFdBQUksSUFBSU4sSUFBRSxFQUFOLEVBQVNELElBQUUsQ0FBZixFQUFpQkEsSUFBRTBYLFVBQVVyVSxNQUE3QixFQUFvQ3JELEdBQXBDO0FBQXdDQyxTQUFFRCxDQUFGLElBQUswWCxVQUFVMVgsQ0FBVixDQUFMO0FBQXhDLE9BQTBELElBQUcsZUFBYSxPQUFPeVAsTUFBdkIsRUFBOEI7QUFBQyxXQUFJblAsSUFBRUQsRUFBRXNoQixPQUFGLENBQVVwSyxLQUFWLENBQWdCLEtBQUssQ0FBckIsRUFBdUJ0WCxDQUF2QixDQUFOLENBQWdDLE9BQU8sSUFBSTJoQixPQUFKLENBQVksVUFBUzNoQixDQUFULEVBQVdELENBQVgsRUFBYTtBQUFDeUIsVUFBRUwsT0FBRixDQUFVNmQsT0FBVixHQUFrQixFQUFDUyxTQUFRemYsQ0FBVCxFQUFXNGhCLFFBQU83aEIsQ0FBbEIsRUFBbEIsRUFBdUNhLEVBQUVPLE9BQUYsQ0FBVWQsQ0FBVixDQUF2QyxFQUFvRGtYLFdBQVcsWUFBVTtBQUFDaFcsV0FBRStkLFNBQUY7QUFBYyxTQUFwQyxDQUFwRDtBQUEwRixRQUFwSCxDQUFQO0FBQTZIO0FBQUMsTUFBdFMsQ0FBdVNoZixFQUFFdWhCLEtBQUYsR0FBUXRnQixFQUFFaWUsUUFBVixFQUFtQmxmLEVBQUVvZixRQUFGLEdBQVduZSxFQUFFbWUsUUFBaEMsRUFBeUNwZixFQUFFOGUsY0FBRixHQUFpQjVkLEVBQUU0ZCxjQUE1RCxFQUEyRTllLEVBQUVxZixXQUFGLEdBQWNwZSxFQUFFb2UsV0FBM0YsRUFBdUdyZixFQUFFd2hCLFdBQUYsR0FBYzFoQixFQUFFMGhCLFdBQXZILEVBQW1JL2hCLEVBQUVvQixPQUFGLEdBQVViLENBQTdJO0FBQStJLEtBQXp5ckIsRUFBMHlyQixVQUFTTixDQUFULEVBQVdELENBQVgsRUFBYU0sQ0FBYixFQUFlO0FBQUM7QUFBYVEsWUFBT0MsY0FBUCxDQUFzQmYsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUMsRUFBQzhELE9BQU0sQ0FBQyxDQUFSLEVBQXJDLEVBQWlELElBQUlqRCxJQUFFUCxFQUFFLENBQUYsQ0FBTjtBQUFBLFNBQVdrQixJQUFFbEIsRUFBRSxDQUFGLENBQWI7QUFBQSxTQUFrQm1CLElBQUVELEVBQUVKLE9BQUYsQ0FBVW1hLEtBQTlCO0FBQUEsU0FBb0NsYixJQUFFQyxFQUFFLENBQUYsQ0FBdEM7QUFBQSxTQUEyQ0MsSUFBRUQsRUFBRSxFQUFGLENBQTdDO0FBQUEsU0FBbURFLElBQUVGLEVBQUUsRUFBRixDQUFyRDtBQUFBLFNBQTJESyxJQUFFTCxFQUFFLENBQUYsQ0FBN0QsQ0FBa0VOLEVBQUVnaUIsSUFBRixHQUFPLFVBQVMvaEIsQ0FBVCxFQUFXO0FBQUNZLFFBQUU4SSxPQUFGLENBQVVsSSxDQUFWLE1BQWV1SyxTQUFTaVcsSUFBVCxJQUFldGhCLEVBQUV3YyxRQUFGLENBQVcsdURBQVgsQ0FBZixFQUFtRjVjLEVBQUVhLE9BQUYsRUFBbkYsRUFBK0ZmLEVBQUVlLE9BQUYsRUFBOUcsR0FBMkhmLEVBQUVxZSxnQkFBRixDQUFtQnplLENBQW5CLENBQTNILEVBQWlKTyxFQUFFWSxPQUFGLENBQVVuQixDQUFWLENBQWpKO0FBQThKLE1BQWpMLEVBQWtMRCxFQUFFb0IsT0FBRixHQUFVcEIsRUFBRWdpQixJQUE5TDtBQUFtTSxLQUE3bnNCLEVBQThuc0IsVUFBUy9oQixDQUFULEVBQVdELENBQVgsRUFBYU0sQ0FBYixFQUFlO0FBQUM7QUFBYVEsWUFBT0MsY0FBUCxDQUFzQmYsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUMsRUFBQzhELE9BQU0sQ0FBQyxDQUFSLEVBQXJDLEVBQWlELElBQUlqRCxJQUFFUCxFQUFFLENBQUYsQ0FBTjtBQUFBLFNBQVdrQixJQUFFWCxFQUFFTyxPQUFGLENBQVVtYSxLQUF2QixDQUE2QnZiLEVBQUVnZixXQUFGLEdBQWMscUJBQW1CeGQsQ0FBbkIsR0FBcUIsVUFBbkMsRUFBOEN4QixFQUFFb0IsT0FBRixHQUFVcEIsRUFBRWdmLFdBQTFEO0FBQXNFLEtBQS95c0IsRUFBZ3pzQixVQUFTL2UsQ0FBVCxFQUFXRCxDQUFYLEVBQWFNLENBQWIsRUFBZTtBQUFDO0FBQWFRLFlBQU9DLGNBQVAsQ0FBc0JmLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDLEVBQUM4RCxPQUFNLENBQUMsQ0FBUixFQUFyQyxFQUFpRCxJQUFJakQsSUFBRVAsRUFBRSxDQUFGLENBQU47QUFBQSxTQUFXa0IsSUFBRVgsRUFBRU8sT0FBRixDQUFVb2EsT0FBdkI7QUFBQSxTQUErQi9aLElBQUUsdUJBQXFCRCxDQUFyQixHQUF1QixpQ0FBeEQsQ0FBMEZ4QixFQUFFb0IsT0FBRixHQUFVSyxDQUFWO0FBQVksS0FBcCtzQixFQUFxK3NCLFVBQVN4QixDQUFULEVBQVdELENBQVgsRUFBYU0sQ0FBYixFQUFlO0FBQUM7QUFBYVEsWUFBT0MsY0FBUCxDQUFzQmYsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUMsRUFBQzhELE9BQU0sQ0FBQyxDQUFSLEVBQXJDLEVBQWlELElBQUlqRCxJQUFFUCxFQUFFLENBQUYsQ0FBTjtBQUFBLFNBQVdrQixJQUFFWCxFQUFFTyxPQUFGLENBQVV3YSxJQUF2QixDQUE0QjViLEVBQUVraUIsZUFBRixHQUFrQixZQUFVO0FBQUMsVUFBSWppQixJQUFFdUIsSUFBRSxTQUFSO0FBQUEsVUFBa0J4QixJQUFFQyxJQUFFLFFBQXRCLENBQStCLE9BQU0sdUJBQXFCQSxDQUFyQixHQUF1QixpQ0FBdkIsR0FBeURELENBQXpELEdBQTJELEdBQTNELEdBQStEQSxDQUEvRCxHQUFpRSxzQ0FBakUsR0FBd0dBLENBQXhHLEdBQTBHLEdBQTFHLEdBQThHQSxDQUE5RyxHQUFnSCxrQ0FBdEg7QUFBeUosTUFBck4sRUFBc05BLEVBQUVtaUIsaUJBQUYsR0FBb0IsWUFBVTtBQUFDLFVBQUlsaUIsSUFBRXVCLElBQUUsV0FBUixDQUFvQixPQUFNLHdCQUFzQnZCLENBQXRCLEdBQXdCLCtCQUF4QixHQUF3REEsQ0FBeEQsR0FBMEQsaUNBQWhFO0FBQWtHLE1BQTNXLEVBQTRXRCxFQUFFb2lCLGlCQUFGLEdBQW9CLFlBQVU7QUFBQyxVQUFJbmlCLElBQUV1QixJQUFFLFdBQVIsQ0FBb0IsT0FBTSx3QkFBc0J2QixDQUF0QixHQUF3QixTQUF4QixHQUFrQ0EsQ0FBbEMsR0FBb0MsMENBQXBDLEdBQStFQSxDQUEvRSxHQUFpRixTQUFqRixHQUEyRkEsQ0FBM0YsR0FBNkYsMENBQTdGLEdBQXdJQSxDQUF4SSxHQUEwSSxrQ0FBMUksR0FBNktBLENBQTdLLEdBQStLLDRCQUFyTDtBQUFrTixNQUFqbkI7QUFBa25CLEtBQWpzdUIsRUFBa3N1QixVQUFTQSxDQUFULEVBQVdELENBQVgsRUFBYU0sQ0FBYixFQUFlO0FBQUM7QUFBYVEsWUFBT0MsY0FBUCxDQUFzQmYsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUMsRUFBQzhELE9BQU0sQ0FBQyxDQUFSLEVBQXJDLEVBQWlELElBQUlqRCxJQUFFUCxFQUFFLENBQUYsQ0FBTjtBQUFBLFNBQVdrQixJQUFFWCxFQUFFTyxPQUFGLENBQVUwYSxPQUF2QixDQUErQjliLEVBQUVxaUIsYUFBRixHQUFnQixxQkFBbUI3Z0IsQ0FBbkIsR0FBcUIsa0JBQXJDO0FBQXdELEtBQXYydUIsRUFBdzJ1QixVQUFTdkIsQ0FBVCxFQUFXRCxDQUFYLEVBQWFNLENBQWIsRUFBZTtBQUFDO0FBQWFRLFlBQU9DLGNBQVAsQ0FBc0JmLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDLEVBQUM4RCxPQUFNLENBQUMsQ0FBUixFQUFyQyxFQUFpRCxJQUFJakQsSUFBRVAsRUFBRSxDQUFGLENBQU47QUFBQSxTQUFXa0IsSUFBRVgsRUFBRU8sT0FBRixDQUFVNGEsZ0JBQXZCO0FBQUEsU0FBd0N2YSxJQUFFWixFQUFFTyxPQUFGLENBQVU2YSxNQUFwRDtBQUFBLFNBQTJENWIsSUFBRVEsRUFBRU8sT0FBRixDQUFVa2IsYUFBdkUsQ0FBcUZ0YyxFQUFFc2lCLFlBQUYsR0FBZSxxQkFBbUI5Z0IsQ0FBbkIsR0FBcUIsa0NBQXJCLEdBQXdEQyxDQUF4RCxHQUEwRCx1Q0FBMUQsR0FBa0dwQixDQUFsRyxHQUFvRyx1RkFBbkg7QUFBMk0sS0FBdHR2QixFQUF1dHZCLFVBQVNKLENBQVQsRUFBV0QsQ0FBWCxFQUFhTSxDQUFiLEVBQWU7QUFBQztBQUFhUSxZQUFPQyxjQUFQLENBQXNCZixDQUF0QixFQUF3QixZQUF4QixFQUFxQyxFQUFDOEQsT0FBTSxDQUFDLENBQVIsRUFBckMsRUFBaUQsSUFBSWpELElBQUVQLEVBQUUsQ0FBRixDQUFOO0FBQUEsU0FBV2tCLElBQUVsQixFQUFFLENBQUYsQ0FBYjtBQUFBLFNBQWtCbUIsSUFBRW5CLEVBQUUsQ0FBRixDQUFwQjtBQUFBLFNBQXlCRCxJQUFFb0IsRUFBRUwsT0FBRixDQUFVd2EsSUFBckM7QUFBQSxTQUEwQ3JiLElBQUVrQixFQUFFTCxPQUFGLENBQVV5YSxXQUF0RDtBQUFBLFNBQWtFcmIsSUFBRSxDQUFDLE9BQUQsRUFBUyxTQUFULEVBQW1CLFNBQW5CLEVBQTZCLE1BQTdCLENBQXBFO0FBQUEsU0FBeUdHLElBQUUsRUFBQzRoQixPQUFNL2dCLEVBQUUwZ0IsZUFBRixFQUFQLEVBQTJCTSxTQUFRaGhCLEVBQUUyZ0IsaUJBQUYsRUFBbkMsRUFBeURNLFNBQVFqaEIsRUFBRTRnQixpQkFBRixFQUFqRSxFQUEzRztBQUFBLFNBQW1NcGdCLElBQUUsU0FBRkEsQ0FBRSxDQUFTL0IsQ0FBVCxFQUFXRCxDQUFYLEVBQWE7QUFBQyxVQUFJTSxJQUFFRCxJQUFFLElBQUYsR0FBT0osQ0FBYixDQUFlRCxFQUFFeWUsU0FBRixDQUFZbmMsR0FBWixDQUFnQmhDLENBQWhCLEVBQW1CLElBQUlPLElBQUVGLEVBQUVWLENBQUYsQ0FBTixDQUFXWSxNQUFJYixFQUFFMGMsU0FBRixHQUFZN2IsQ0FBaEI7QUFBbUIsTUFBblI7QUFBQSxTQUFvUkQsSUFBRSxTQUFGQSxDQUFFLENBQVNYLENBQVQsRUFBV0QsQ0FBWCxFQUFhO0FBQUNBLFFBQUV5ZSxTQUFGLENBQVluYyxHQUFaLENBQWdCL0IsQ0FBaEIsRUFBbUIsSUFBSUQsSUFBRTBMLFNBQVN5USxhQUFULENBQXVCLEtBQXZCLENBQU4sQ0FBb0NuYyxFQUFFb2lCLEdBQUYsR0FBTXppQixDQUFOLEVBQVFELEVBQUV3ZSxXQUFGLENBQWNsZSxDQUFkLENBQVI7QUFBeUIsTUFBcFg7QUFBQSxTQUFxWHVELElBQUUsU0FBRkEsQ0FBRSxDQUFTNUQsQ0FBVCxFQUFXO0FBQUMsVUFBR0EsQ0FBSCxFQUFLO0FBQUMsV0FBSUQsSUFBRWEsRUFBRTBkLGlCQUFGLENBQW9CL2MsRUFBRStiLFVBQXRCLENBQU4sQ0FBd0MvYyxFQUFFbWlCLFFBQUYsQ0FBVzFpQixDQUFYLElBQWMrQixFQUFFL0IsQ0FBRixFQUFJRCxDQUFKLENBQWQsR0FBcUJZLEVBQUVYLENBQUYsRUFBSUQsQ0FBSixDQUFyQjtBQUE0QjtBQUFDLE1BQTljLENBQStjQSxFQUFFb0IsT0FBRixHQUFVeUMsQ0FBVjtBQUFZLEtBQWh3d0IsRUFBaXd3QixVQUFTNUQsQ0FBVCxFQUFXRCxDQUFYLEVBQWFNLENBQWIsRUFBZTtBQUFDO0FBQWFRLFlBQU9DLGNBQVAsQ0FBc0JmLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDLEVBQUM4RCxPQUFNLENBQUMsQ0FBUixFQUFyQyxFQUFpRCxJQUFJakQsSUFBRVAsRUFBRSxDQUFGLENBQU47QUFBQSxTQUFXa0IsSUFBRWxCLEVBQUUsQ0FBRixDQUFiO0FBQUEsU0FBa0JtQixJQUFFLFNBQUZBLENBQUUsQ0FBU3hCLENBQVQsRUFBVztBQUFDMmlCLGdCQUFVQyxTQUFWLENBQW9CRixRQUFwQixDQUE2QixhQUE3QixNQUE4QzFpQixFQUFFc1QsS0FBRixDQUFRdVAsT0FBUixHQUFnQixNQUFoQixFQUF1QjdpQixFQUFFOGlCLFlBQXpCLEVBQXNDOWlCLEVBQUVzVCxLQUFGLENBQVF1UCxPQUFSLEdBQWdCLEVBQXBHO0FBQXdHLE1BQXhJLENBQXlJOWlCLEVBQUU0ZSxTQUFGLEdBQVksVUFBUzNlLENBQVQsRUFBVztBQUFDLFVBQUdBLENBQUgsRUFBSztBQUFDLFdBQUlELElBQUV3QixFQUFFK2MsaUJBQUYsQ0FBb0IxZCxFQUFFMmMsV0FBdEIsQ0FBTixDQUF5Q3hkLEVBQUUwVCxXQUFGLEdBQWN6VCxDQUFkLEVBQWdCd0IsRUFBRXpCLENBQUYsQ0FBaEI7QUFBcUI7QUFBQyxNQUE3RixFQUE4RkEsRUFBRTZlLFFBQUYsR0FBVyxVQUFTNWUsQ0FBVCxFQUFXO0FBQUMsVUFBR0EsQ0FBSCxFQUFLO0FBQUMsV0FBSUQsSUFBRXdCLEVBQUUrYyxpQkFBRixDQUFvQjFkLEVBQUU0YyxVQUF0QixDQUFOLENBQXdDemQsRUFBRTBULFdBQUYsR0FBY3pULENBQWQsRUFBZ0J3QixFQUFFekIsQ0FBRixDQUFoQjtBQUFxQjtBQUFDLE1BQXpMO0FBQTBMLEtBQWxweEIsRUFBbXB4QixVQUFTQyxDQUFULEVBQVdELENBQVgsRUFBYU0sQ0FBYixFQUFlO0FBQUM7QUFBYVEsWUFBT0MsY0FBUCxDQUFzQmYsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUMsRUFBQzhELE9BQU0sQ0FBQyxDQUFSLEVBQXJDLEVBQWlELElBQUlqRCxJQUFFUCxFQUFFLENBQUYsQ0FBTjtBQUFBLFNBQVdrQixJQUFFbEIsRUFBRSxDQUFGLENBQWI7QUFBQSxTQUFrQm1CLElBQUVuQixFQUFFLENBQUYsQ0FBcEI7QUFBQSxTQUF5QkQsSUFBRW9CLEVBQUVMLE9BQUYsQ0FBVTZhLE1BQXJDO0FBQUEsU0FBNEMxYixJQUFFa0IsRUFBRUwsT0FBRixDQUFVZ2IsYUFBeEQ7QUFBQSxTQUFzRTViLElBQUVGLEVBQUUsQ0FBRixDQUF4RTtBQUFBLFNBQTZFSyxJQUFFTCxFQUFFLENBQUYsQ0FBL0U7QUFBQSxTQUFvRjBCLElBQUUxQixFQUFFLENBQUYsQ0FBdEY7QUFBQSxTQUEyRk0sSUFBRU4sRUFBRSxDQUFGLENBQTdGO0FBQUEsU0FBa0d1RCxJQUFFLFdBQVM1RCxDQUFULEVBQVdELENBQVgsRUFBYU0sQ0FBYixFQUFlO0FBQUMsVUFBSWtCLElBQUV4QixFQUFFOGQsSUFBUjtBQUFBLFVBQWFyYyxJQUFFekIsRUFBRThELEtBQWpCO0FBQUEsVUFBdUJELElBQUU3RCxFQUFFK2QsU0FBM0I7QUFBQSxVQUFxQ3hjLElBQUV2QixFQUFFZ2UsVUFBekM7QUFBQSxVQUFvRHhaLElBQUUzRCxFQUFFMmIsWUFBRixDQUFlN2IsRUFBRTJoQixZQUFqQixDQUF0RDtBQUFBLFVBQXFGNWhCLElBQUU4RCxFQUFFK1gsYUFBRixDQUFnQixNQUFJbGMsQ0FBcEIsQ0FBdkY7QUFBQSxVQUE4R29FLElBQUVwRSxJQUFFLElBQUYsR0FBT0osQ0FBdkgsQ0FBeUhTLEVBQUUrZCxTQUFGLENBQVluYyxHQUFaLENBQWdCbUMsQ0FBaEIsR0FBbUJaLEtBQUduRCxFQUFFK2QsU0FBRixDQUFZbmMsR0FBWixDQUFnQnVCLENBQWhCLENBQXRCLEVBQXlDdkQsS0FBR0wsTUFBSU8sRUFBRW1kLFdBQVQsSUFBc0JqZCxFQUFFK2QsU0FBRixDQUFZbmMsR0FBWixDQUFnQi9CLENBQWhCLENBQS9ELEVBQWtGRyxFQUFFZ1QsV0FBRixHQUFjbFMsQ0FBaEcsQ0FBa0csSUFBSXdDLElBQUUsRUFBTixDQUFTLE9BQU9BLEVBQUUvRCxDQUFGLElBQUt3QixDQUFMLEVBQU9iLEVBQUV5ZSxjQUFGLENBQWlCcmIsQ0FBakIsQ0FBUCxFQUEyQnBELEVBQUUwZSxtQkFBRixDQUFzQnJmLENBQXRCLEVBQXdCLEVBQUMrZCxZQUFXemMsQ0FBWixFQUF4QixDQUEzQixFQUFtRWIsRUFBRXVMLGdCQUFGLENBQW1CLE9BQW5CLEVBQTJCLFlBQVU7QUFBQyxjQUFPakssRUFBRXlkLFFBQUYsQ0FBV3hmLENBQVgsQ0FBUDtBQUFxQixPQUEzRCxDQUFuRSxFQUFnSXVFLENBQXZJO0FBQXlJLE1BQWplO0FBQUEsU0FBa2VqRCxJQUFFLFNBQUZBLENBQUUsQ0FBU3RCLENBQVQsRUFBV0QsQ0FBWCxFQUFhO0FBQUMsVUFBSU0sSUFBRWtCLEVBQUUrYyxpQkFBRixDQUFvQjVkLEVBQUUrYyxZQUF0QixDQUFOLENBQTBDLEtBQUksSUFBSTdjLENBQVIsSUFBYVosQ0FBYixFQUFlO0FBQUMsV0FBSXdCLElBQUV4QixFQUFFWSxDQUFGLENBQU47QUFBQSxXQUFXUixJQUFFd0QsRUFBRWhELENBQUYsRUFBSVksQ0FBSixFQUFNekIsQ0FBTixDQUFiLENBQXNCeUIsRUFBRW9jLE9BQUYsSUFBV3ZkLEVBQUVrZSxXQUFGLENBQWNuZSxDQUFkLENBQVg7QUFBNEIsYUFBSUMsRUFBRXFMLFFBQUYsQ0FBV3RJLE1BQWYsSUFBdUIvQyxFQUFFa2YsTUFBRixFQUF2QjtBQUFrQyxNQUFob0IsQ0FBaW9CeGYsRUFBRW9CLE9BQUYsR0FBVUcsQ0FBVjtBQUFZLEtBQTkyeUIsRUFBKzJ5QixVQUFTdEIsQ0FBVCxFQUFXRCxDQUFYLEVBQWFNLENBQWIsRUFBZTtBQUFDO0FBQWFRLFlBQU9DLGNBQVAsQ0FBc0JmLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDLEVBQUM4RCxPQUFNLENBQUMsQ0FBUixFQUFyQyxFQUFpRCxJQUFJakQsSUFBRVAsRUFBRSxDQUFGLENBQU47QUFBQSxTQUFXa0IsSUFBRWxCLEVBQUUsQ0FBRixDQUFiO0FBQUEsU0FBa0JtQixJQUFFbkIsRUFBRSxDQUFGLENBQXBCO0FBQUEsU0FBeUJELElBQUVDLEVBQUUsQ0FBRixDQUEzQjtBQUFBLFNBQWdDQyxJQUFFRCxFQUFFLENBQUYsQ0FBbEM7QUFBQSxTQUF1Q0UsSUFBRUYsRUFBRSxDQUFGLENBQXpDO0FBQUEsU0FBOENLLElBQUVILEVBQUVZLE9BQUYsQ0FBVTBhLE9BQTFEO0FBQUEsU0FBa0U5WixJQUFFLFNBQUZBLENBQUUsQ0FBUy9CLENBQVQsRUFBVztBQUFDQSxRQUFFZ00sZ0JBQUYsQ0FBbUIsT0FBbkIsRUFBMkIsVUFBU2hNLENBQVQsRUFBVztBQUFDLFdBQUlELElBQUVDLEVBQUUyTSxNQUFSO0FBQUEsV0FBZXRNLElBQUVOLEVBQUU4RCxLQUFuQixDQUF5QnpELEVBQUVnZixjQUFGLENBQWlCL2UsQ0FBakI7QUFBb0IsT0FBcEYsR0FBc0ZMLEVBQUVnTSxnQkFBRixDQUFtQixPQUFuQixFQUEyQixVQUFTaE0sQ0FBVCxFQUFXO0FBQUMsV0FBRyxZQUFVQSxFQUFFeVUsR0FBZixFQUFtQixPQUFPblUsRUFBRWtmLFFBQUYsQ0FBVzVlLEVBQUU4YyxXQUFiLENBQVA7QUFBaUMsT0FBM0YsQ0FBdEYsRUFBbUxuRyxXQUFXLFlBQVU7QUFBQ3ZYLFNBQUVvUSxLQUFGLElBQVVoUSxFQUFFZ2YsY0FBRixDQUFpQixFQUFqQixDQUFWO0FBQStCLE9BQXJELEVBQXNELENBQXRELENBQW5MO0FBQTRPLE1BQTVUO0FBQUEsU0FBNlR6ZSxJQUFFLFNBQUZBLENBQUUsQ0FBU1gsQ0FBVCxFQUFXRCxDQUFYLEVBQWFNLENBQWIsRUFBZTtBQUFDLFVBQUlPLElBQUVtTCxTQUFTeVEsYUFBVCxDQUF1QnpjLENBQXZCLENBQU47QUFBQSxVQUFnQ3dCLElBQUViLElBQUUsSUFBRixHQUFPWCxDQUF6QyxDQUEyQ2EsRUFBRTRkLFNBQUYsQ0FBWW5jLEdBQVosQ0FBZ0JkLENBQWhCLEVBQW1CLEtBQUksSUFBSUMsQ0FBUixJQUFhbkIsQ0FBYixFQUFlO0FBQUMsV0FBSUQsSUFBRUMsRUFBRW1CLENBQUYsQ0FBTixDQUFXWixFQUFFWSxDQUFGLElBQUtwQixDQUFMO0FBQU8sbUJBQVVMLENBQVYsSUFBYWdDLEVBQUVuQixDQUFGLENBQWIsRUFBa0JaLEVBQUV1ZSxXQUFGLENBQWMzZCxDQUFkLENBQWxCO0FBQW1DLE1BQWxkO0FBQUEsU0FBbWRnRCxJQUFFLFNBQUZBLENBQUUsQ0FBUzVELENBQVQsRUFBVztBQUFDLFVBQUdBLENBQUgsRUFBSztBQUFDLFdBQUlELElBQUV3QixFQUFFK2MsaUJBQUYsQ0FBb0I5YyxFQUFFNGdCLGFBQXRCLENBQU47QUFBQSxXQUEyQy9oQixJQUFFTCxFQUFFK2lCLE9BQS9DO0FBQUEsV0FBdURuaUIsSUFBRVosRUFBRWdqQixVQUEzRCxDQUFzRSxZQUFVLE9BQU8zaUIsQ0FBakIsR0FBbUJNLEVBQUVaLENBQUYsRUFBSU0sQ0FBSixFQUFNTyxDQUFOLENBQW5CLEdBQTRCYixFQUFFd2UsV0FBRixDQUFjbGUsQ0FBZCxDQUE1QjtBQUE2QztBQUFDLE1BQTNsQixDQUE0bEJOLEVBQUVvQixPQUFGLEdBQVV5QyxDQUFWO0FBQVksS0FBcmkwQixFQUFzaTBCLFVBQVM1RCxDQUFULEVBQVdELENBQVgsRUFBYU0sQ0FBYixFQUFlO0FBQUM7QUFBYVEsWUFBT0MsY0FBUCxDQUFzQmYsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUMsRUFBQzhELE9BQU0sQ0FBQyxDQUFSLEVBQXJDLEVBQWlELElBQUlqRCxJQUFFUCxFQUFFLENBQUYsQ0FBTjtBQUFBLFNBQVdrQixJQUFFbEIsRUFBRSxDQUFGLENBQWI7QUFBQSxTQUFrQm1CLElBQUUsU0FBRkEsQ0FBRSxHQUFVO0FBQUMsVUFBSXhCLElBQUVZLEVBQUUyYixZQUFGLENBQWVoYixFQUFFOGIsYUFBakIsQ0FBTixDQUFzQ3RSLFNBQVNpVyxJQUFULENBQWN6RCxXQUFkLENBQTBCdmUsQ0FBMUI7QUFBNkIsTUFBbEcsQ0FBbUdELEVBQUVvQixPQUFGLEdBQVVLLENBQVY7QUFBWSxLQUFudTBCLEVBQW91MEIsVUFBU3hCLENBQVQsRUFBV0QsQ0FBWCxFQUFhTSxDQUFiLEVBQWU7QUFBQztBQUFhUSxZQUFPQyxjQUFQLENBQXNCZixDQUF0QixFQUF3QixZQUF4QixFQUFxQyxFQUFDOEQsT0FBTSxDQUFDLENBQVIsRUFBckMsRUFBaUQsSUFBSWpELElBQUVQLEVBQUUsQ0FBRixDQUFOO0FBQUEsU0FBV2tCLElBQUVsQixFQUFFLENBQUYsQ0FBYjtBQUFBLFNBQWtCbUIsSUFBRW5CLEVBQUUsQ0FBRixDQUFwQjtBQUFBLFNBQXlCRCxJQUFFQyxFQUFFLENBQUYsQ0FBM0I7QUFBQSxTQUFnQ0MsSUFBRUQsRUFBRSxDQUFGLENBQWxDO0FBQUEsU0FBdUNFLElBQUVELEVBQUVhLE9BQUYsQ0FBVW1hLEtBQW5EO0FBQUEsU0FBeUQ1YSxJQUFFSixFQUFFYSxPQUFGLENBQVU2YSxNQUFyRTtBQUFBLFNBQTRFamEsSUFBRXpCLEVBQUVhLE9BQUYsQ0FBVW9hLE9BQXhGO0FBQUEsU0FBZ0c1YSxJQUFFLFNBQUZBLENBQUUsQ0FBU1gsQ0FBVCxFQUFXO0FBQUNBLFFBQUV1TSxjQUFGLElBQW1CL0gsR0FBbkI7QUFBdUIsTUFBckk7QUFBQSxTQUFzSVosSUFBRSxTQUFGQSxDQUFFLENBQVM1RCxDQUFULEVBQVc7QUFBQ0EsUUFBRXVNLGNBQUYsSUFBbUJ4SSxHQUFuQjtBQUF1QixNQUEzSztBQUFBLFNBQTRLekMsSUFBRSxTQUFGQSxDQUFFLENBQVN0QixDQUFULEVBQVc7QUFBQyxVQUFHWSxFQUFFTyxPQUFGLENBQVVrSCxNQUFiLEVBQW9CLFFBQU9ySSxFQUFFeVUsR0FBVCxHQUFjLEtBQUksUUFBSjtBQUFhLGVBQU9sVCxFQUFFaWUsUUFBRixDQUFXcGYsRUFBRXVkLFVBQWIsQ0FBUCxDQUEzQjtBQUE0RCxNQUExUTtBQUFBLFNBQTJRcFosSUFBRSxTQUFGQSxDQUFFLENBQVN2RSxDQUFULEVBQVc7QUFBQyxVQUFHWSxFQUFFTyxPQUFGLENBQVVrSCxNQUFiLEVBQW9CLFFBQU9ySSxFQUFFeVUsR0FBVCxHQUFjLEtBQUksS0FBSjtBQUFVLGVBQU85VCxFQUFFWCxDQUFGLENBQVAsQ0FBeEI7QUFBcUMsTUFBbFY7QUFBQSxTQUFtVlMsSUFBRSxTQUFGQSxDQUFFLENBQVNULENBQVQsRUFBVztBQUFDLFVBQUdZLEVBQUVPLE9BQUYsQ0FBVWtILE1BQWIsRUFBb0IsT0FBTSxVQUFRckksRUFBRXlVLEdBQVYsSUFBZXpVLEVBQUVzUyxRQUFqQixHQUEwQjFPLEVBQUU1RCxDQUFGLENBQTFCLEdBQStCLEtBQUssQ0FBMUM7QUFBNEMsTUFBamE7QUFBQSxTQUFrYXdFLElBQUUsU0FBRkEsQ0FBRSxHQUFVO0FBQUMsVUFBSXhFLElBQUV3QixFQUFFa0ksT0FBRixDQUFVaEosQ0FBVixDQUFOLENBQW1CVixNQUFJQSxFQUFFaUksUUFBRixHQUFXLENBQVgsRUFBYWpJLEVBQUVvUSxLQUFGLEVBQWpCO0FBQTRCLE1BQTlkO0FBQUEsU0FBK2RyTSxJQUFFLFNBQUZBLENBQUUsR0FBVTtBQUFDLFVBQUkvRCxJQUFFd0IsRUFBRWtJLE9BQUYsQ0FBVW5KLENBQVYsQ0FBTjtBQUFBLFVBQW1CUixJQUFFQyxFQUFFNGYsZ0JBQUYsQ0FBbUIsTUFBSWxmLENBQXZCLENBQXJCO0FBQUEsVUFBK0NMLElBQUVOLEVBQUVxRCxNQUFGLEdBQVMsQ0FBMUQ7QUFBQSxVQUE0RHhDLElBQUViLEVBQUVNLENBQUYsQ0FBOUQsQ0FBbUVPLEtBQUdBLEVBQUV3UCxLQUFGLEVBQUg7QUFBYSxNQUE1akI7QUFBQSxTQUE2akJ2TCxJQUFFLFNBQUZBLENBQUUsQ0FBUzdFLENBQVQsRUFBVztBQUFDQSxRQUFFQSxFQUFFb0QsTUFBRixHQUFTLENBQVgsRUFBYzRJLGdCQUFkLENBQStCLFNBQS9CLEVBQXlDekgsQ0FBekM7QUFBNEMsTUFBdm5CO0FBQUEsU0FBd25CdEIsSUFBRSxTQUFGQSxDQUFFLENBQVNqRCxDQUFULEVBQVc7QUFBQ0EsUUFBRSxDQUFGLEVBQUtnTSxnQkFBTCxDQUFzQixTQUF0QixFQUFnQ3ZMLENBQWhDO0FBQW1DLE1BQXpxQjtBQUFBLFNBQTBxQjhCLElBQUUsU0FBRkEsQ0FBRSxHQUFVO0FBQUMsVUFBSXZDLElBQUV3QixFQUFFa0ksT0FBRixDQUFVbkosQ0FBVixDQUFOO0FBQUEsVUFBbUJSLElBQUVDLEVBQUU0ZixnQkFBRixDQUFtQixNQUFJbGYsQ0FBdkIsQ0FBckIsQ0FBK0NYLEVBQUVxRCxNQUFGLEtBQVd5QixFQUFFOUUsQ0FBRixHQUFLa0QsRUFBRWxELENBQUYsQ0FBaEI7QUFBc0IsTUFBNXZCO0FBQUEsU0FBNnZCdUUsSUFBRSxTQUFGQSxDQUFFLENBQVN0RSxDQUFULEVBQVc7QUFBQyxVQUFHd0IsRUFBRWtJLE9BQUYsQ0FBVTNILENBQVYsTUFBZS9CLEVBQUUyTSxNQUFwQixFQUEyQixPQUFPcEwsRUFBRWllLFFBQUYsQ0FBV3BmLEVBQUV1ZCxVQUFiLENBQVA7QUFBZ0MsTUFBdDBCO0FBQUEsU0FBdTBCck0sSUFBRSxTQUFGQSxDQUFFLENBQVN0UixDQUFULEVBQVc7QUFBQyxVQUFJRCxJQUFFeUIsRUFBRWtJLE9BQUYsQ0FBVTNILENBQVYsQ0FBTixDQUFtQmhDLEVBQUVtTSxtQkFBRixDQUFzQixPQUF0QixFQUE4QjVILENBQTlCLEdBQWlDdEUsS0FBR0QsRUFBRWlNLGdCQUFGLENBQW1CLE9BQW5CLEVBQTJCMUgsQ0FBM0IsQ0FBcEM7QUFBa0UsTUFBMTZCO0FBQUEsU0FBMjZCSSxJQUFFLFNBQUZBLENBQUUsQ0FBUzFFLENBQVQsRUFBVztBQUFDWSxRQUFFTyxPQUFGLENBQVUrZCxLQUFWLElBQWlCMUgsYUFBYTVXLEVBQUVPLE9BQUYsQ0FBVStkLEtBQXZCLENBQWpCLEVBQStDbGYsTUFBSVksRUFBRU8sT0FBRixDQUFVK2QsS0FBVixHQUFnQjFQLE9BQU8rSCxVQUFQLENBQWtCLFlBQVU7QUFBQyxjQUFPaFcsRUFBRWllLFFBQUYsQ0FBV3BmLEVBQUV1ZCxVQUFiLENBQVA7QUFBZ0MsT0FBN0QsRUFBOEQzZCxDQUE5RCxDQUFwQixDQUEvQztBQUFxSSxNQUE5akM7QUFBQSxTQUErakNrRSxJQUFFLFNBQUZBLENBQUUsQ0FBU2xFLENBQVQsRUFBVztBQUFDQSxRQUFFaWpCLFVBQUYsR0FBYWxYLFNBQVNDLGdCQUFULENBQTBCLE9BQTFCLEVBQWtDMUssQ0FBbEMsQ0FBYixHQUFrRHlLLFNBQVNHLG1CQUFULENBQTZCLE9BQTdCLEVBQXFDNUssQ0FBckMsQ0FBbEQsRUFBMEZ0QixFQUFFOGUsVUFBRixHQUFhdGEsR0FBYixHQUFpQlQsR0FBM0csRUFBK0d4QixHQUEvRyxFQUFtSCtPLEVBQUV0UixFQUFFa2pCLG1CQUFKLENBQW5ILEVBQTRJeGUsRUFBRTFFLEVBQUVrZixLQUFKLENBQTVJO0FBQXVKLE1BQXB1QyxDQUFxdUNuZixFQUFFb0IsT0FBRixHQUFVK0MsQ0FBVjtBQUFZLEtBQW5pM0IsRUFBb2kzQixVQUFTbEUsQ0FBVCxFQUFXRCxDQUFYLEVBQWFNLENBQWIsRUFBZTtBQUFDO0FBQWFRLFlBQU9DLGNBQVAsQ0FBc0JmLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDLEVBQUM4RCxPQUFNLENBQUMsQ0FBUixFQUFyQyxFQUFpRCxJQUFJakQsSUFBRVAsRUFBRSxDQUFGLENBQU47QUFBQSxTQUFXa0IsSUFBRWxCLEVBQUUsQ0FBRixDQUFiO0FBQUEsU0FBa0JtQixJQUFFbkIsRUFBRSxFQUFGLENBQXBCO0FBQUEsU0FBMEJELElBQUUsRUFBQytWLE9BQU0sSUFBUCxFQUFZMEgsTUFBSyxJQUFqQixFQUFzQmEsTUFBSyxJQUEzQixFQUFnQ0csU0FBUXRkLEVBQUUwYyxpQkFBMUMsRUFBNERwRixTQUFRLElBQXBFLEVBQXlFaUYsV0FBVSxJQUFuRixFQUF3Rm9GLHFCQUFvQixDQUFDLENBQTdHLEVBQStHRCxZQUFXLENBQUMsQ0FBM0gsRUFBNkhuRSxZQUFXLENBQUMsQ0FBekksRUFBMklJLE9BQU0sSUFBakosRUFBNUI7QUFBQSxTQUFtTDVlLElBQUVPLE9BQU9tZCxNQUFQLENBQWMsRUFBZCxFQUFpQjVkLENBQWpCLENBQXJMLENBQXlNTCxFQUFFK2hCLFdBQUYsR0FBYyxVQUFTOWhCLENBQVQsRUFBVztBQUFDTSxVQUFFTyxPQUFPbWQsTUFBUCxDQUFjLEVBQWQsRUFBaUI1ZCxDQUFqQixFQUFtQkosQ0FBbkIsQ0FBRjtBQUF3QixNQUFsRCxDQUFtRCxJQUFJTyxJQUFFLFNBQUZBLENBQUUsQ0FBU1AsQ0FBVCxFQUFXO0FBQUMsVUFBSUQsSUFBRUMsS0FBR0EsRUFBRWdELE1BQVg7QUFBQSxVQUFrQjNDLElBQUVMLEtBQUdBLEVBQUU2ZSxPQUF6QixDQUFpQyxPQUFPLEtBQUssQ0FBTCxLQUFTOWUsQ0FBVCxJQUFZLEtBQUssQ0FBTCxLQUFTTSxDQUFyQixJQUF3Qk8sRUFBRXNjLFFBQUYsQ0FBVyxpREFBWCxDQUF4QixFQUFzRixLQUFLLENBQUwsS0FBU25kLENBQVQsR0FBVyxFQUFDbWUsU0FBUW5lLENBQVQsRUFBWCxHQUF1Qk0sQ0FBcEg7QUFBc0gsTUFBeks7QUFBQSxTQUEwS0ssSUFBRSxTQUFGQSxDQUFFLENBQVNWLENBQVQsRUFBVztBQUFDLGFBQU9ZLEVBQUV3YyxlQUFGLENBQWtCcGQsSUFBRSxDQUFwQixDQUFQO0FBQThCLE1BQXROO0FBQUEsU0FBdU4rQixJQUFFLFNBQUZBLENBQUUsQ0FBUy9CLENBQVQsRUFBV0QsQ0FBWCxFQUFhO0FBQUNhLFFBQUVzYyxRQUFGLENBQVd4YyxFQUFFWCxDQUFGLElBQUssY0FBTCxHQUFvQkMsQ0FBcEIsR0FBc0IsZUFBakM7QUFBa0QsTUFBelI7QUFBQSxTQUEwUlcsSUFBRSxTQUFGQSxDQUFFLENBQVNYLENBQVQsRUFBV0QsQ0FBWCxFQUFhO0FBQUMsVUFBSU0sSUFBRUwsSUFBRSxDQUFSO0FBQUEsVUFBVXVCLElBQUV4QixFQUFFTSxDQUFGLENBQVosQ0FBaUJPLEVBQUV1YyxhQUFGLENBQWdCNWIsQ0FBaEIsS0FBb0IsS0FBSyxDQUFMLEtBQVNBLENBQTdCLElBQWdDWCxFQUFFc2MsUUFBRixDQUFXLGNBQVl4YyxFQUFFTCxDQUFGLENBQVosR0FBaUIsY0FBakIsR0FBZ0NrQixDQUFoQyxHQUFrQyx5QkFBN0MsQ0FBaEM7QUFBd0csTUFBbmE7QUFBQSxTQUFvYXFDLElBQUUsU0FBRkEsQ0FBRSxDQUFTNUQsQ0FBVCxFQUFXRCxDQUFYLEVBQWE7QUFBQyxVQUFJTSxJQUFFTCxJQUFFLENBQVI7QUFBQSxVQUFVdUIsSUFBRXhCLEVBQUVNLENBQUYsQ0FBWixDQUFpQixLQUFLLENBQUwsS0FBU2tCLENBQVQsSUFBWVgsRUFBRXNjLFFBQUYsQ0FBVyxnQkFBY3hjLEVBQUVMLENBQUYsQ0FBZCxHQUFtQixhQUFuQixHQUFpQ2tCLENBQWpDLEdBQW1DLEdBQTlDLENBQVo7QUFBK0QsTUFBcGdCO0FBQUEsU0FBcWdCRCxJQUFFLFNBQUZBLENBQUUsQ0FBU3RCLENBQVQsRUFBV0QsQ0FBWCxFQUFhTSxDQUFiLEVBQWVrQixDQUFmLEVBQWlCO0FBQUMsVUFBSUMsV0FBU3pCLENBQVQseUNBQVNBLENBQVQsQ0FBSjtBQUFBLFVBQWVLLElBQUUsYUFBV29CLENBQTVCO0FBQUEsVUFBOEJsQixJQUFFUCxhQUFhb2pCLE9BQTdDLENBQXFELElBQUcvaUIsQ0FBSCxFQUFLO0FBQUMsV0FBRyxNQUFJQyxDQUFQLEVBQVMsT0FBTSxFQUFDd2QsTUFBSzlkLENBQU4sRUFBTixDQUFlLElBQUcsTUFBSU0sQ0FBUCxFQUFTLE9BQU0sRUFBQ3dkLE1BQUs5ZCxDQUFOLEVBQVFvVyxPQUFNNVUsRUFBRSxDQUFGLENBQWQsRUFBTixDQUEwQixJQUFHLE1BQUlsQixDQUFQLEVBQVMsT0FBT00sRUFBRU4sQ0FBRixFQUFJa0IsQ0FBSixHQUFPLEVBQUNtZCxNQUFLM2UsQ0FBTixFQUFkLENBQXVCZ0MsRUFBRWhDLENBQUYsRUFBSU0sQ0FBSjtBQUFPLE9BQXhHLE1BQTRHO0FBQUMsV0FBR0MsS0FBRyxNQUFJRCxDQUFWLEVBQVksT0FBT00sRUFBRU4sQ0FBRixFQUFJa0IsQ0FBSixHQUFPLEVBQUNzWCxTQUFROVksQ0FBVCxFQUFkLENBQTBCLElBQUdhLEVBQUV1YyxhQUFGLENBQWdCcGQsQ0FBaEIsQ0FBSCxFQUFzQixPQUFPNkQsRUFBRXZELENBQUYsRUFBSWtCLENBQUosR0FBT3hCLENBQWQsQ0FBZ0JnQyxFQUFFaEMsQ0FBRixFQUFJTSxDQUFKO0FBQU87QUFBQyxNQUEvd0IsQ0FBZ3hCTixFQUFFMmhCLE9BQUYsR0FBVSxZQUFVO0FBQUMsV0FBSSxJQUFJMWhCLElBQUUsRUFBTixFQUFTRCxJQUFFLENBQWYsRUFBaUJBLElBQUUwWCxVQUFVclUsTUFBN0IsRUFBb0NyRCxHQUFwQztBQUF3Q0MsU0FBRUQsQ0FBRixJQUFLMFgsVUFBVTFYLENBQVYsQ0FBTDtBQUF4QyxPQUEwRCxJQUFJTSxJQUFFLEVBQU4sQ0FBU0wsRUFBRTJMLE9BQUYsQ0FBVSxVQUFTNUwsQ0FBVCxFQUFXYSxDQUFYLEVBQWE7QUFBQyxXQUFJVyxJQUFFRCxFQUFFLENBQUYsRUFBSXZCLENBQUosRUFBTWEsQ0FBTixFQUFRWixDQUFSLENBQU4sQ0FBaUJhLE9BQU9tZCxNQUFQLENBQWMzZCxDQUFkLEVBQWdCa0IsQ0FBaEI7QUFBbUIsT0FBNUQsRUFBOEQsSUFBSVgsSUFBRUwsRUFBRUYsQ0FBRixDQUFOLENBQVcsT0FBT0EsRUFBRXdlLE9BQUYsR0FBVXRkLEVBQUU4YyxpQkFBRixDQUFvQnpkLENBQXBCLENBQVYsRUFBaUMsT0FBT1AsRUFBRTJDLE1BQTFDLEVBQWlEM0MsRUFBRXdZLE9BQUYsR0FBVXJYLEVBQUU0aEIsY0FBRixDQUFpQi9pQixFQUFFd1ksT0FBbkIsQ0FBM0QsRUFBdUZoWSxPQUFPbWQsTUFBUCxDQUFjLEVBQWQsRUFBaUI1ZCxDQUFqQixFQUFtQkUsQ0FBbkIsRUFBcUJELENBQXJCLENBQTlGO0FBQXNILE1BQXZSO0FBQXdSLEtBQXQ1NUIsRUFBdTU1QixVQUFTTCxDQUFULEVBQVdELENBQVgsRUFBYU0sQ0FBYixFQUFlO0FBQUM7QUFBYVEsWUFBT0MsY0FBUCxDQUFzQmYsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUMsRUFBQzhELE9BQU0sQ0FBQyxDQUFSLEVBQXJDLEVBQWlELElBQUlqRCxJQUFFUCxFQUFFLENBQUYsQ0FBTjtBQUFBLFNBQVdrQixJQUFFLEVBQUN3aEIsU0FBUSxPQUFULEVBQWlCQyxZQUFXLEVBQUMxYixhQUFZLEVBQWIsRUFBNUIsRUFBYixDQUEyRHZILEVBQUVxakIsY0FBRixHQUFpQixVQUFTcGpCLENBQVQsRUFBVztBQUFDLFVBQUlELElBQUUsRUFBTixDQUFTLE9BQU9hLEVBQUV1YyxhQUFGLENBQWdCbmQsQ0FBaEIsSUFBbUJhLE9BQU9tZCxNQUFQLENBQWNqZSxDQUFkLEVBQWdCQyxDQUFoQixDQUFuQixHQUFzQ0EsYUFBYW1qQixPQUFiLEdBQXFCLEVBQUNKLFNBQVEvaUIsQ0FBVCxFQUFyQixHQUFpQyxZQUFVQSxDQUFWLEdBQVl1QixDQUFaLEdBQWMsSUFBNUY7QUFBaUcsTUFBdkk7QUFBd0ksS0FBeHE2QixDQUFsZCxDQUFQO0FBQW9vN0IsSUFBcHk3QixDQUFEOztBQUVBO0FBQU8sR0FORztBQU9WO0FBQ0EsT0FBTyxVQUFTckIsTUFBVCxFQUFpQkQsT0FBakIsRUFBMEIwYSxtQkFBMUIsRUFBK0M7O0FBRXREOztBQUdBOVosVUFBT0MsY0FBUCxDQUFzQmIsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0M0RCxXQUFPO0FBRG9DLElBQTdDO0FBR0E1RCxXQUFRb2pCLE9BQVIsR0FBa0JDLFNBQWxCOztBQUVBLE9BQUlDLGNBQWM1SSxvQkFBb0IsQ0FBcEIsQ0FBbEI7O0FBRUEsT0FBSTZJLGVBQWVDLHVCQUF1QkYsV0FBdkIsQ0FBbkI7O0FBRUEsWUFBU0Usc0JBQVQsQ0FBZ0NDLEdBQWhDLEVBQXFDO0FBQUUsV0FBT0EsT0FBT0EsSUFBSXhpQixVQUFYLEdBQXdCd2lCLEdBQXhCLEdBQThCLEVBQUV2aUIsU0FBU3VpQixHQUFYLEVBQXJDO0FBQXdEOztBQUUvRixZQUFTQyxNQUFULENBQWdCQyxHQUFoQixFQUFxQjtBQUNuQkEsUUFBSXhpQixTQUFKLENBQWN5aUIsS0FBZCxHQUFzQkwsYUFBYXJpQixPQUFuQztBQUNEOztBQUVEO0FBQ0EsT0FBSSxPQUFPcU8sTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsT0FBT29VLEdBQTVDLEVBQWlEO0FBQy9DcFUsV0FBT29VLEdBQVAsQ0FBV0UsR0FBWCxDQUFlSCxNQUFmO0FBQ0Q7O0FBRUQxakIsV0FBUWtCLE9BQVIsR0FBa0J3aUIsTUFBbEI7O0FBRUEsT0FBSU4sVUFBVSxhQUFkO0FBQ0E7QUFDQXBqQixXQUFRb2pCLE9BQVIsR0FBa0JBLE9BQWxCOztBQUVBO0FBQU8sR0F2Q0c7QUF3Q1YsVUE1R2dCO0FBQWhCO0FBNkdDLENBdkhELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVnQjtBQUNNO0FBQ0w7O0FBRUc7QUFDRzs7QUFFTDs7QUFFQztBQUNEOztBQUVNOztBQUl4Qiw0Q0FBSSxJQUFJO0FBQ1IsNENBQUksSUFBSTtBQUNSLDRDQUFJLElBQUk7O0FBRVIsNENBQUksVUFBVSxnQkFBZ0I7QUFDOUIsNENBQUksVUFBVSxjQUFjO0FBQzVCO0FBQ0E7QUFDQSxPQUFPLFFBQVE7O0FBRWY7QUFDQSxJQUFNLGFBQWE7WUFFZjtVQUFNO0FBRE4sQ0FEVzs7QUFLZixPQUFPLFVBQVUsVUFBQyxJQUFJLE1BQ2xCO1FBQUksT0FBTyxHQUFHLEtBQUssVUFBVSxVQUN6QjtpQkFBUyxRQUFRLEdBQUcsS0FDdkI7QUFDSjtBQUpEOztBQU1BLElBQU0sVUFBVTtRQUVaO1lBQ0E7V0FIZ0I7QUFDaEIsQ0FEUSxFOzs7Ozs7O0FDeENaO0FBQ0E7QUFDQTtBQUNBLHFYQUFzTTtBQUN0TTtBQUNBO0FBQ0E7QUFDQSxnbEJBQTJhO0FBQzNhO0FBQ0Esb1RBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usd0RBQXdELElBQUk7O0FBRTNJO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7OztBQzdDQSxJQUFNO1VBR0U7VUFDQTtlQUFXO2VBQU0seUhBQU87QUFDeEI7O2VBQ1c7QUFBUDtBQUpKLENBRk87VUFXUDtVQUNBO2VBQVc7ZUFBTSx3SEFBTztBQUN4Qjs7Y0FHUTtjQUNBO21CQUFXO21CQUFNLDZIQUFPO0FBQ3hCOzttQkFDVztBQUFQO0FBSkosS0FGRTtjQVVGO2NBQ0E7bUJBQVc7bUJBQU0seUhBQU87QUFDeEI7O21CQUNXO0FBQVA7QUFKSjtjQVFBO2NBQ0E7bUJBQVc7bUJBQU0sOEhBQU87QUFDeEI7O21CQUNXO0FBQVA7QUFKSjtjQVFBO2NBQ0E7bUJBQVc7bUJBQU0sNkhBQU87QUFDeEI7O21CQUNXO0FBQVA7QUFKSjtBQTFCUjtBQXNDUix5REFBZSxROzs7Ozs7Ozs7OztBQ2hEQztBQUNDO0FBQ2pCLDRDQUFJLElBQUk7O0FBSVIsSUFBTSxZQUFZLDhDQUFLOzs0QkFHZjtpQkFDQTtjQUNBO3NCQUdKOztBQU5JOztBQU1PLGtFQUNpQixPQUFPLE9BQzNCO2tCQUFNLHFCQUNUO0FBQ0Q7QUFKTyxvQ0FJRSxPQUFPLFlBQ1o7a0JBQU0sT0FDVDtBQUNEO0FBUE8sNERBT2MsT0FBTyxNQUN4QjtrQkFBTSxlQUNUO0FBVE07QUFDUDtBQVJKLENBRFU7O0FBcUJkLHlEQUFlLE87Ozs7Ozs7QUMzQmYseUMiLCJmaWxlIjoiXFxqc1xcYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiB2dWUtdHJlZXNlbGVjdCB2MC4wLjYgfCAoYykgMjAxNyBSaW9waGFlIExlZVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9naXRodWIuY29tL3Jpb3BoYWUvdnVlLXRyZWVzZWxlY3RcbiAqL1xuIShmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuVnVlVHJlZXNlbGVjdD10KCk6ZS5WdWVUcmVlc2VsZWN0PXQoKX0pKHRoaXMsKGZ1bmN0aW9uKCl7cmV0dXJuIChmdW5jdGlvbihlKXtmdW5jdGlvbiB0KGkpe2lmKG5baV0pcmV0dXJuIG5baV0uZXhwb3J0czt2YXIgcz1uW2ldPXtpOmksbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtpXS5jYWxsKHMuZXhwb3J0cyxzLHMuZXhwb3J0cyx0KSxzLmw9ITAscy5leHBvcnRzfXZhciBuPXt9O3JldHVybiB0Lm09ZSx0LmM9bix0LmQ9ZnVuY3Rpb24oZSxuLGkpe3QubyhlLG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6aX0pfSx0Lm49ZnVuY3Rpb24oZSl7dmFyIG49ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHQuZChuLFwiYVwiLG4pLG59LHQubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sdC5wPVwiL1wiLHQodC5zPTQpfSkoWyhmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlLHQsbixpLHMsbyl7dmFyIHIsYT1lPWV8fHt9LGw9dHlwZW9mIGUuZGVmYXVsdDtcIm9iamVjdFwiIT09bCYmXCJmdW5jdGlvblwiIT09bHx8KHI9ZSxhPWUuZGVmYXVsdCk7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgYT9hLm9wdGlvbnM6YTt0JiYoYy5yZW5kZXI9dC5yZW5kZXIsYy5zdGF0aWNSZW5kZXJGbnM9dC5zdGF0aWNSZW5kZXJGbnMsYy5fY29tcGlsZWQ9ITApLG4mJihjLmZ1bmN0aW9uYWw9ITApLHMmJihjLl9zY29wZUlkPXMpO3ZhciB1O2lmKG8/KHU9ZnVuY3Rpb24oZSl7ZT1lfHx0aGlzLiR2bm9kZSYmdGhpcy4kdm5vZGUuc3NyQ29udGV4dHx8dGhpcy5wYXJlbnQmJnRoaXMucGFyZW50LiR2bm9kZSYmdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQsZXx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX198fChlPV9fVlVFX1NTUl9DT05URVhUX18pLGkmJmkuY2FsbCh0aGlzLGUpLGUmJmUuX3JlZ2lzdGVyZWRDb21wb25lbnRzJiZlLl9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobyl9LGMuX3NzclJlZ2lzdGVyPXUpOmkmJih1PWkpLHUpe3ZhciBkPWMuZnVuY3Rpb25hbCxoPWQ/Yy5yZW5kZXI6Yy5iZWZvcmVDcmVhdGU7ZD8oYy5faW5qZWN0U3R5bGVzPXUsYy5yZW5kZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdS5jYWxsKHQpLGgoZSx0KX0pOmMuYmVmb3JlQ3JlYXRlPWg/W10uY29uY2F0KGgsdSk6W3VdfXJldHVybntlc01vZHVsZTpyLGV4cG9ydHM6YSxvcHRpb25zOmN9fX0pLChmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG4oZSl7dmFyIHQ9dHlwZW9mIGU7cmV0dXJuIG51bGwhPWUmJihcIm9iamVjdFwiPT10fHxcImZ1bmN0aW9uXCI9PXQpfWUuZXhwb3J0cz1ufSksKGZ1bmN0aW9uKGUsdCxuKXt2YXIgaT1uKDkpLHM9XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLG89aXx8c3x8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO2UuZXhwb3J0cz1vfSksKGZ1bmN0aW9uKGUsdCxuKXt2YXIgaT1uKDIpLHM9aS5TeW1ib2w7ZS5leHBvcnRzPXN9KSwoZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe1wibW91c2Vkb3duXCI9PT10LnR5cGUmJjA9PT10LmJ1dHRvbiYmZS5jYWxsKHRoaXMsdCl9fWZ1bmN0aW9uIHMoKXt9ZnVuY3Rpb24gbyhlKXtyZXR1cm4gbnVsbCE9ZSYmXCJvYmplY3RcIj09PSh2b2lkIDA9PT1lP1widW5kZWZpbmVkXCI6eChlKSkmJk9iamVjdC5nZXRQcm90b3R5cGVPZihlKT09PU9iamVjdC5wcm90b3R5cGV9ZnVuY3Rpb24gcihlLHQsbil7byhuKT8oZVt0XXx8KGVbdF09e30pLGwoZVt0XSxuKSk6ZVt0XT1ufWZ1bmN0aW9uIGEoZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9ZnVuY3Rpb24gbChlLHQpe2lmKG51bGw9PXQpO2Vsc2UgaWYobyh0KSlmb3IodmFyIG49T2JqZWN0LmtleXModCksaT0wLHM9bi5sZW5ndGg7aTxzO2krKylyKGUsbltpXSx0W25baV1dKTtlbHNlIE4oKTtyZXR1cm4gZX1mdW5jdGlvbiBjKGUpe3JldHVybiBTKChmdW5jdGlvbigpe3JldHVybiBBcnJheS5pc0FycmF5KGUpfSksKGZ1bmN0aW9uKCl7cmV0dXJuXCJ1bmV4cGVjdGVkIHR5cGVcIn0pKSxlW2UubGVuZ3RoLTFdfWZ1bmN0aW9uIHUoZSx0LG4pe2Zvcih2YXIgaT0wLHM9ZS5sZW5ndGg7aTxzO2krKylpZih0LmNhbGwobixlW2ldLGksZSkpcmV0dXJuIGk7cmV0dXJuLTF9ZnVuY3Rpb24gZChlLHQsbil7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleD9lLmZpbmRJbmRleCh0LG4pOnUoZSx0LG4pfWZ1bmN0aW9uIGgoZSx0KXt2YXIgbj1lLmluZGV4T2YodCk7LTEhPT1uJiZlLnNwbGljZShuLDEpfWZ1bmN0aW9uIHAoZSx0KXtpZihlLmxlbmd0aCE9PXQubGVuZ3RoKXJldHVybiExO2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKWlmKGVbbl0hPT10W25dKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIGYoZSx0LG4pe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6bixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09bixlfWZ1bmN0aW9uIHYoZSx0KXtmb3IodmFyIG49MDs7KXtpZihlLmxldmVsPG4pcmV0dXJuLTE7aWYodC5sZXZlbDxuKXJldHVybiAxO2lmKGUuaW5kZXhbbl0hPT10LmluZGV4W25dKXJldHVybiBlLmluZGV4W25dLXQuaW5kZXhbbl07bisrfX1mdW5jdGlvbiBfKGUsdCl7cmV0dXJuIGUubGV2ZWwhPT10LmxldmVsP2UubGV2ZWwtdC5sZXZlbDp2KGUsdCl9ZnVuY3Rpb24gbShlKXtyZXR1cm5cImFuZCBcIitlK1wiIG1vcmVcIn1mdW5jdGlvbiBDKGUpe3JldHVyblwiRmFpbGVkIHRvIGxvYWQgY2hpbGRyZW4gb3B0aW9uczogXCIrKGUubWVzc2FnZXx8U3RyaW5nKGUpKStcIi5cIn1mdW5jdGlvbiB5KGUpe24oNSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGI9big2KSxnPW4ubihiKSxFPW4oNyksTz1uLm4oRSkseD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxTPXMsTj1zLHc9e3Byb3ZpZGU6ZnVuY3Rpb24oKXtyZXR1cm57aW5zdGFuY2U6dGhpcyxVTkNIRUNLRUQ6MCxJTkRFVEVSTUlOQVRFOjEsQ0hFQ0tFRDoyLFVOTUFUQ0hFRDowLERFU0NFTkRBTlRfTUFUQ0hFRDoxLE1BVENIRUQ6Mn19LHByb3BzOnthdXRvZm9jdXM6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxiYWNrc3BhY2VSZW1vdmVzOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sYnJhbmNoTm9kZXNGaXJzdDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGNsZWFyYWJsZTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LGNsZWFyQWxsVGV4dDp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIkNsZWFyIGFsbFwifSxjbGVhck9uU2VsZWN0Ont0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sY2xlYXJWYWx1ZVRleHQ6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJDbGVhciB2YWx1ZVwifSxjbG9zZU9uU2VsZWN0Ont0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sZGVsZXRlUmVtb3Zlczp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LGRpc2FibGVCcmFuY2hOb2Rlczp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGRpc2FibGVkOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sZGVmYXVsdEV4cGFuZExldmVsOnt0eXBlOk51bWJlcixkZWZhdWx0OjB9LGVzY2FwZUNsZWFyc1ZhbHVlOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sZmxhdDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGlkOntkZWZhdWx0Om51bGx9LGxpbWl0Ont0eXBlOk51bWJlcixkZWZhdWx0OjEvMH0sbGltaXRUZXh0Ont0eXBlOkZ1bmN0aW9uLGRlZmF1bHQ6bX0sbG9hZENoaWxkcmVuRXJyb3JUZXh0Ont0eXBlOkZ1bmN0aW9uLGRlZmF1bHQ6Q30sbG9hZENoaWxkcmVuT3B0aW9uczp7dHlwZTpGdW5jdGlvbn0sbG9hZGluZ1RleHQ6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJMb2FkaW5nLi4uXCJ9LGxvYWRSb290T3B0aW9uczp7dHlwZTpGdW5jdGlvbn0sbWF4SGVpZ2h0Ont0eXBlOk51bWJlcixkZWZhdWx0OjMwMH0sbXVsdGlwbGU6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxub0NoaWxkcmVuVGV4dDp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIk5vIGNoaWxkcmVuIG9wdGlvbnMuLi5cIn0sbm9SZXN1bHRzVGV4dDp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIk5vIHJlc3VsdHMgZm91bmQuLi5cIn0sbm9PcHRpb25zVGV4dDp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIk5vIG9wdGlvbnMgYXZhaWxhYmxlLlwifSxvcGVuRGlyZWN0aW9uOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiYXV0b1wifSxvcGVuT25DbGljazp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LG9wZW5PbkZvY3VzOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sb3B0aW9uczp7dHlwZTpBcnJheX0scGxhY2Vob2xkZXI6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJTZWxlY3QuLi5cIn0scmV0YWluU2Nyb2xsUG9zaXRpb246e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxyZXRyeVRleHQ6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJSZXRyeT9cIn0scmV0cnlUaXRsZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIkNsaWNrIHRvIHJldHJ5XCJ9LHNlYXJjaGFibGU6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxzaG93Q291bnQ6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxzaG93Q291bnRPZjp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIkFMTF9DSElMRFJFTlwiLHZhbGlkYXRvcjpmdW5jdGlvbihlKXtyZXR1cm4tMSE9PVtcIkFMTF9DSElMRFJFTlwiLFwiQUxMX0RFU0NFTkRBTlRTXCIsXCJMRUFGX0NISUxEUkVOXCIsXCJMRUFGX0RFU0NFTkRBTlRTXCJdLmluZGV4T2YoZSl9fSxzaG93Q291bnRPblNlYXJjaDpudWxsLHNvcnRWYWx1ZUJ5Ont0eXBlOlN0cmluZyxkZWZhdWx0OlwiT1JERVJfU0VMRUNURURcIn0sc3ViSXRlbXNMaW1pdDp7dHlwZTpOdW1iZXIsZGVmYXVsdDoxLzB9LHRhYkluZGV4Ont0eXBlOk51bWJlcixkZWZhdWx0OjB9LHZhbHVlOm51bGx9LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57aW50ZXJuYWxWYWx1ZTpbXSxpc0ZvY3VzZWQ6ITEsaXNPcGVuOiExLG5vZGVDaGVja2VkU3RhdGVNYXA6T2JqZWN0LmNyZWF0ZShudWxsKSxub2RlTWFwOk9iamVjdC5jcmVhdGUobnVsbCksbm9ybWFsaXplZE9wdGlvbnM6bnVsbCxub1NlYXJjaFJlc3VsdHM6ITAsb3B0aW1pemVkSGVpZ2h0OjAscHJlZmZlcmVkT3BlbkRpcmVjdGlvbjpcImJlbG93XCIscm9vdE9wdGlvbnNMb2FkZWQ6ITEsbG9hZGluZ1Jvb3RPcHRpb25zOiExLGxvYWRpbmdSb290T3B0aW9uc0Vycm9yOlwiXCIsc2VhcmNoaW5nQ291bnQ6T2JqZWN0LmNyZWF0ZShudWxsKSxzZWFyY2hpbmc6ITEsc2VhcmNoUXVlcnk6XCJcIixzZWxlY3RlZE5vZGVNYXA6T2JqZWN0LmNyZWF0ZShudWxsKSxsYXN0U2Nyb2xsUG9zaXRpb246MH19LGNvbXB1dGVkOntzZWxlY3RlZE5vZGVzTnVtYmVyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW50ZXJuYWxWYWx1ZS5sZW5ndGh9LGhhc1ZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2VsZWN0ZWROb2Rlc051bWJlcj4wfSxzZWxlY3RlZE5vZGVzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW50ZXJuYWxWYWx1ZS5tYXAodGhpcy5nZXROb2RlKX0sc2luZ2xlOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMubXVsdGlwbGV9LHZpc2libGVWYWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNlbGVjdGVkTm9kZXMuc2xpY2UoMCx0aGlzLmxpbWl0KX0saGFzRXhjZWVkZWRMaW1pdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNlbGVjdGVkTm9kZXNOdW1iZXI+dGhpcy5saW1pdH0sc2hvdWxkU2hvd0NsZWFySWNvbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsZWFyYWJsZSYmIXRoaXMuZGlzYWJsZWQmJnRoaXMuaGFzVmFsdWV9LHNob3dDb3VudE9uU2VhcmNoQ29tcHV0ZWQ6ZnVuY3Rpb24oKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIHRoaXMuc2hvd0NvdW50T25TZWFyY2g/dGhpcy5zaG93Q291bnRPblNlYXJjaDp0aGlzLnNob3dDb3VudH19LHdhdGNoOntkaXNhYmxlZDpmdW5jdGlvbihlKXtlJiZ0aGlzLmlzT3BlbiYmdGhpcy5jbG9zZU1lbnUoKX0sbXVsdGlwbGU6ZnVuY3Rpb24oZSl7ZSYmdGhpcy5idWlsZE5vZGVDaGVja2VkU3RhdGVNYXAoKX0sc2VhcmNoUXVlcnk6TygpKChmdW5jdGlvbigpe3RoaXMuaGFuZGxlU2VhcmNoKCksdGhpcy4kZW1pdChcInNlYXJjaC1jaGFuZ2VcIix0aGlzLnNlYXJjaFF1ZXJ5LHRoaXMuaWQpfSksMjAwKSxzb3J0VmFsdWVCeTpmdW5jdGlvbigpe3RoaXMuc29ydFZhbHVlKCl9LGludGVybmFsVmFsdWU6ZnVuY3Rpb24oKXt0aGlzLiRlbWl0KFwiaW5wdXRcIix0aGlzLmdldFZhbHVlKCksdGhpcy5pZCl9LHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWV8fDA9PT1lP3RoaXMubXVsdGlwbGU/ZS5zbGljZSgpOltlXTpbXTshcCh0LHRoaXMuaW50ZXJuYWxWYWx1ZSkmJih0aGlzLmludGVybmFsVmFsdWU9dCx0aGlzLmJ1aWxkU2VsZWN0ZWROb2RlTWFwKCksdGhpcy5idWlsZE5vZGVDaGVja2VkU3RhdGVNYXAoKSl9fSxtZXRob2RzOnt2ZXJpZnlQcm9wczpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5sb2FkUm9vdE9wdGlvbnN8fCh0aGlzLm9wdGlvbnM/QXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMpfHxTKChmdW5jdGlvbigpe3JldHVybiExfSksKGZ1bmN0aW9uKCl7cmV0dXJuXCJFeHBlY3RlZCBwcm9wIGBvcHRpb25zYCB0byBiZSBhbiBhcnJheSwgaW5zdGVhZCBnb3Q6IFwiK2Uub3B0aW9ucytcIi5cIn0pKTpTKChmdW5jdGlvbigpe3JldHVybiExfSksKGZ1bmN0aW9uKCl7cmV0dXJuXCJSZXF1aXJlZCBwcm9wIGBvcHRpb25zYCBpcyBub3QgcHJvdmlkZWQuXCJ9KSkpfSxyZXNldEZsYWdzOmZ1bmN0aW9uKCl7dGhpcy5fYmx1ck9uU2VsZWN0PSExLHRoaXMuX3dhc0NsaWNrZWRPblZhbHVlSXRlbT0hMX0saW5pdGlhbGl6ZTpmdW5jdGlvbihlKXtBcnJheS5pc0FycmF5KGUpJiYodGhpcy5yb290T3B0aW9uc0xvYWRlZD0hMCksdGhpcy5pbml0aWFsaXplUm9vdE9wdGlvbnMoZXx8W10pLHRoaXMuaW5pdGlhbGl6ZVZhbHVlKCksdGhpcy5idWlsZFNlbGVjdGVkTm9kZU1hcCgpLHRoaXMuYnVpbGROb2RlQ2hlY2tlZFN0YXRlTWFwKCl9LGdldFZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubXVsdGlwbGU/dGhpcy5pbnRlcm5hbFZhbHVlLnNsaWNlKCk6dGhpcy5pbnRlcm5hbFZhbHVlWzBdfSxnZXROb2RlOmZ1bmN0aW9uKGUpe3JldHVybiBTKChmdW5jdGlvbigpe3JldHVybiBudWxsIT1lfSksKGZ1bmN0aW9uKCl7cmV0dXJuXCJJbnZhbGlkIG5vZGUgaWQ6IFwiK2V9KSksdGhpcy5ub2RlTWFwW2VdfHx7aWQ6ZSxsYWJlbDplK1wiICh1bmtub3duKVwiLGFuY2VzdG9yczpbXSxwYXJlbnROb2RlOm51bGwsaXNVbmtub3duTm9kZTohMCxpc0xlYWY6ITAsaXNCcmFuY2g6ITF9fSxpc1NlbGVjdGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlLmlkIGluIHRoaXMuc2VsZWN0ZWROb2RlTWFwfSxjaGVja0lmQnJhbmNoTm9kZTpmdW5jdGlvbihlKXtTKChmdW5jdGlvbigpe3JldHVybiBlJiZlLmlzQnJhbmNofSksKGZ1bmN0aW9uKCl7cmV0dXJuXCJFeHBlY3RlZCBhIGJyYW5jaCBub2RlLCBpbnN0ZWFkIGdvdDogXCIrZX0pKX0sdHJhdmVyc2VEZXNjZW5kYW50czpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpcztcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiYobj10LHQ9MS8wKSxlLmlzQnJhbmNoJiZlLmxldmVsPHQmJmUuY2hpbGRyZW4uZm9yRWFjaCgoZnVuY3Rpb24oZSl7aS50cmF2ZXJzZURlc2NlbmRhbnRzKGUsdCxuKSxuKGUpfSkpfSx0cmF2ZXJzZUFuY2VzdG9yczpmdW5jdGlvbihlLHQpe3ZhciBuPWUucGFyZW50Tm9kZTtudWxsIT09biYmKHQobiksdGhpcy50cmF2ZXJzZUFuY2VzdG9ycyhuLHQpKX0sdHJhdmVyc2VBbGxOb2RlczpmdW5jdGlvbihlKXt2YXIgdD10aGlzO3RoaXMubm9ybWFsaXplZE9wdGlvbnMuZm9yRWFjaCgoZnVuY3Rpb24obil7dC50cmF2ZXJzZURlc2NlbmRhbnRzKG4sZSksZShuKX0pKX0sdG9nZ2xlQ2xpY2tPdXRzaWRlRXZlbnQ6ZnVuY3Rpb24oZSl7ZT9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5oYW5kbGVDbGlja091dHNpZGUsITEpOmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSwhMSl9LGZvY3VzSW5wdXQ6ZnVuY3Rpb24oKXt0aGlzLiRyZWZzLnZhbHVlLmZvY3VzSW5wdXQoKX0sYmx1cklucHV0OmZ1bmN0aW9uKCl7dGhpcy4kcmVmcy52YWx1ZS5ibHVySW5wdXQoKX0saGFuZGxlTW91c2VEb3duOmkoKGZ1bmN0aW9uKGUpe2lmKGUucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpLCF0aGlzLmRpc2FibGVkKXt0aGlzLiRyZWZzLnZhbHVlLiRlbC5jb250YWlucyhlLnRhcmdldCkmJighdGhpcy5pc09wZW58fHRoaXMuc2VhcmNoYWJsZXx8dGhpcy5fd2FzQ2xpY2tlZE9uVmFsdWVJdGVtP3RoaXMuaXNPcGVufHwhdGhpcy5vcGVuT25DbGljayYmIXRoaXMuaXNGb2N1c2VkfHx0aGlzLm9wZW5NZW51KCk6dGhpcy5jbG9zZU1lbnUoKSksdGhpcy5fYmx1ck9uU2VsZWN0P3RoaXMuYmx1cklucHV0KCk6dGhpcy5mb2N1c0lucHV0KCksdGhpcy5yZXNldEZsYWdzKCl9fSkpLGhhbmRsZU1vdXNlRG93bk9uQ2xlYXI6aSgoZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSxlLnByZXZlbnREZWZhdWx0KCksdGhpcy5jbGVhcigpLHRoaXMuZm9jdXNJbnB1dCgpfSkpLGhhbmRsZU1vdXNlRG93bk9uQXJyb3c6aSgoZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5mb2N1c0lucHV0KCksdGhpcy50b2dnbGVNZW51KCl9KSksaGFuZGxlQ2xpY2tPdXRzaWRlOmZ1bmN0aW9uKGUpe3RoaXMuJHJlZnMud3JhcHBlciYmIXRoaXMuJHJlZnMud3JhcHBlci5jb250YWlucyhlLnRhcmdldCkmJih0aGlzLmJsdXJJbnB1dCgpLHRoaXMuY2xvc2VNZW51KCkpfSxoYW5kbGVTZWFyY2g6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMuc2VhcmNoUXVlcnk/KHRoaXMuc2VhcmNoaW5nPSEwLHRoaXMubm9TZWFyY2hSZXN1bHRzPSEwLHRoaXMudHJhdmVyc2VBbGxOb2RlcygoZnVuY3Rpb24odCl7aWYodC5pc0JyYW5jaCl7dmFyIG47dC5leHBhbmRzT25TZWFyY2g9ITEsdC5oYXNNYXRjaGVkQ2hpbGQ9ITEsZS5zZWFyY2hpbmdDb3VudFt0LmlkXT0obj17fSxmKG4sXCJBTExfQ0hJTERSRU5cIiwwKSxmKG4sXCJBTExfREVTQ0VOREFOVFNcIiwwKSxmKG4sXCJMRUFGX0NISUxEUkVOXCIsMCksZihuLFwiTEVBRl9ERVNDRU5EQU5UU1wiLDApLG4pfX0pKSx0aGlzLnRyYXZlcnNlQWxsTm9kZXMoKGZ1bmN0aW9uKHQpe3ZhciBuPXQuaXNNYXRjaGVkPWcoKShlLnNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCksdC5sYWJlbC50b0xvd2VyQ2FzZSgpKTtuJiYoZS5ub1NlYXJjaFJlc3VsdHM9ITEsdC5hbmNlc3RvcnMuZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIGUuc2VhcmNoaW5nQ291bnRbdC5pZF0uQUxMX0RFU0NFTkRBTlRTKyt9KSksdC5pc0xlYWYmJnQuYW5jZXN0b3JzLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiBlLnNlYXJjaGluZ0NvdW50W3QuaWRdLkxFQUZfREVTQ0VOREFOVFMrK30pKSxudWxsIT09dC5wYXJlbnROb2RlJiYoZS5zZWFyY2hpbmdDb3VudFt0LnBhcmVudE5vZGUuaWRdLkFMTF9DSElMRFJFTis9MSx0LmlzTGVhZiYmKGUuc2VhcmNoaW5nQ291bnRbdC5wYXJlbnROb2RlLmlkXS5MRUFGX0NISUxEUkVOKz0xKSkpLChufHx0LmlzQnJhbmNoJiZ0LmV4cGFuZHNPblNlYXJjaCkmJm51bGwhPT10LnBhcmVudE5vZGUmJih0LnBhcmVudE5vZGUuZXhwYW5kc09uU2VhcmNoPSEwLHQucGFyZW50Tm9kZS5oYXNNYXRjaGVkQ2hpbGQ9ITApfSkpKTp0aGlzLnNlYXJjaGluZz0hMX0sY2xvc2VNZW51OmZ1bmN0aW9uKCl7dGhpcy5pc09wZW4mJih0aGlzLmlzT3Blbj0hMSx0aGlzLnJldGFpblNjcm9sbFBvc2l0aW9uJiZ0aGlzLiRyZWZzLm1lbnUmJih0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbj10aGlzLiRyZWZzLm1lbnUuc2Nyb2xsVG9wKSx0aGlzLnRvZ2dsZUNsaWNrT3V0c2lkZUV2ZW50KCExKSx0aGlzLnNlYXJjaFF1ZXJ5PVwiXCIsdGhpcy4kZW1pdChcImNsb3NlXCIsdGhpcy5nZXRWYWx1ZSgpLHRoaXMuaWQpKX0sb3Blbk1lbnU6ZnVuY3Rpb24oKXt0aGlzLmRpc2FibGVkfHx0aGlzLmlzT3Blbnx8KHRoaXMuaXNPcGVuPSEwLHRoaXMuJG5leHRUaWNrKHRoaXMuYWRqdXN0UG9zaXRpb24pLHRoaXMucmV0YWluU2Nyb2xsUG9zaXRpb24mJnRoaXMuJG5leHRUaWNrKHRoaXMucmVzdG9yZVNjcm9sbFBvc2l0aW9uKSx0aGlzLnJvb3RPcHRpb25zTG9hZGVkfHx0aGlzLmxvYWRPcHRpb25zKCEwKSx0aGlzLnRvZ2dsZUNsaWNrT3V0c2lkZUV2ZW50KCEwKSx0aGlzLiRlbWl0KFwib3BlblwiLHRoaXMuaWQpKX0sdG9nZ2xlTWVudTpmdW5jdGlvbigpe3RoaXMuaXNPcGVuP3RoaXMuY2xvc2VNZW51KCk6dGhpcy5vcGVuTWVudSgpfSx0b2dnbGVFeHBhbmRlZDpmdW5jdGlvbihlKXt0aGlzLmNoZWNrSWZCcmFuY2hOb2RlKGUpLHRoaXMuc2VhcmNoaW5nP2UuZXhwYW5kc09uU2VhcmNoPSFlLmV4cGFuZHNPblNlYXJjaDplLmlzRXhwYW5kZWQ9IWUuaXNFeHBhbmRlZH0saW5pdGlhbGl6ZVZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5tdWx0aXBsZT8odGhpcy5pbnRlcm5hbFZhbHVlPUFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSk/dGhpcy52YWx1ZS5zbGljZSgpOltdLHRoaXMuc29ydFZhbHVlKCkpOnRoaXMuaW50ZXJuYWxWYWx1ZT1udWxsIT10aGlzLnZhbHVlP1t0aGlzLnZhbHVlXTpbXX0saW5pdGlhbGl6ZVJvb3RPcHRpb25zOmZ1bmN0aW9uKGUpe3RoaXMubm9ybWFsaXplZE9wdGlvbnM9dGhpcy5ub3JtYWxpemUobnVsbCxlKX0sYnVpbGRTZWxlY3RlZE5vZGVNYXA6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnNlbGVjdGVkTm9kZU1hcD1PYmplY3QuY3JlYXRlKG51bGwpO3RoaXMuaW50ZXJuYWxWYWx1ZS5mb3JFYWNoKChmdW5jdGlvbih0KXtlW3RdPSEwfSkpfSxidWlsZE5vZGVDaGVja2VkU3RhdGVNYXA6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9dGhpcy5ub2RlQ2hlY2tlZFN0YXRlTWFwPU9iamVjdC5jcmVhdGUobnVsbCk7dGhpcy5tdWx0aXBsZSYmKHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKChmdW5jdGlvbihuKXt0W24uaWRdPTIsZS5mbGF0fHwoZS50cmF2ZXJzZURlc2NlbmRhbnRzKG4sKGZ1bmN0aW9uKGUpe3RbZS5pZF09Mn0pKSxlLnRyYXZlcnNlQW5jZXN0b3JzKG4sKGZ1bmN0aW9uKGUpe3RbZS5pZF09MX0pKSl9KSksdGhpcy5ub3JtYWxpemVkT3B0aW9ucy5mb3JFYWNoKChmdW5jdGlvbihuKXtuLmlkIGluIHR8fCh0W24uaWRdPTApLGUudHJhdmVyc2VEZXNjZW5kYW50cyhuLChmdW5jdGlvbihlKXtlLmlkIGluIHR8fCh0W2UuaWRdPTApfSkpfSkpKX0sbm9ybWFsaXplOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcyxpPXQubWFwKChmdW5jdGlvbih0LGkpe24uY2hlY2tEdXBsaWNhdGlvbih0KSxuLnZlcmlmeU5vZGVTaGFwZSh0KTt2YXIgcz1udWxsPT09ZSxvPXQuaWQscj10LmxhYmVsLGE9dC5jaGlsZHJlbixsPXQuaXNEaXNhYmxlZCxjPXZvaWQgMCE9PWwmJmwsdT1BcnJheS5pc0FycmF5KGEpfHxudWxsPT09YXx8dm9pZCAwPT09YSYmISF0LmlzQnJhbmNoLGQ9IXUsaD1zPzA6ZS5sZXZlbCsxLHA9cz9bXTplLmFuY2VzdG9ycy5jb25jYXQoZSksdj0ocz9bXTplLmluZGV4KS5jb25jYXQoaSksXz1uLm5vZGVNYXBbb109e2lkOm8sbGFiZWw6cixsZXZlbDpoLGFuY2VzdG9yczpwLGluZGV4OnYscGFyZW50Tm9kZTplLGlzRGlzYWJsZWQ6Yyxpc01hdGNoZWQ6ITEsaXNMZWFmOmQsaXNCcmFuY2g6dSxpc1Jvb3ROb2RlOnMscmF3OnR9O2lmKHUpe3ZhciBtLEM9QXJyYXkuaXNBcnJheShhKTtDfHxTKChmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4ubG9hZENoaWxkcmVuT3B0aW9uc30pLChmdW5jdGlvbigpe3JldHVyblwiVW5sb2FkZWQgYnJhbmNoIG5vZGUgZGV0ZWN0ZWQuIGBsb2FkQ2hpbGRyZW5PcHRpb25zYCBwcm9wIGlzIHJlcXVpcmVkIHRvIGxvYWQgaXRzIGNoaWxkcmVuLlwifSkpLF8uaXNMb2FkZWQ9QyxfLmlzUGVuZGluZz0hMSxfLmlzRXhwYW5kZWQ9aDxuLmRlZmF1bHRFeHBhbmRMZXZlbCxfLmhhc01hdGNoZWRDaGlsZD0hMSxfLmV4cGFuZHNPblNlYXJjaD0hMSxfLmxvYWRpbmdDaGlsZHJlbkVycm9yPVwiXCIsXy5jb3VudD0obT17fSxmKG0sXCJBTExfQ0hJTERSRU5cIiwwKSxmKG0sXCJBTExfREVTQ0VOREFOVFNcIiwwKSxmKG0sXCJMRUFGX0NISUxEUkVOXCIsMCksZihtLFwiTEVBRl9ERVNDRU5EQU5UU1wiLDApLG0pLF8uY2hpbGRyZW49Qz9uLm5vcm1hbGl6ZShfLGEpOltdLF8uaXNFeHBhbmRlZCYmIV8uaXNMb2FkZWQmJm4ubG9hZE9wdGlvbnMoITEsXyl9cmV0dXJuIF8uYW5jZXN0b3JzLmZvckVhY2goKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNvdW50LkFMTF9ERVNDRU5EQU5UUysrfSkpLGQmJl8uYW5jZXN0b3JzLmZvckVhY2goKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNvdW50LkxFQUZfREVTQ0VOREFOVFMrK30pKSxudWxsIT09ZSYmKGUuY291bnQuQUxMX0NISUxEUkVOKz0xLGQmJihlLmNvdW50LkxFQUZfQ0hJTERSRU4rPTEpKSxffSkpO2lmKHRoaXMuYnJhbmNoTm9kZXNGaXJzdCl7dmFyIHM9aS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlzQnJhbmNofSkpLG89aS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlzTGVhZn0pKTtpPXMuY29uY2F0KG8pfXJldHVybiBpfSxsb2FkT3B0aW9uczpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7aWYoZSl7aWYodGhpcy5sb2FkaW5nUm9vdE9wdGlvbnMpcmV0dXJuO3ZhciBpPWZ1bmN0aW9uKGUsdCl7bi5sb2FkaW5nUm9vdE9wdGlvbnM9ITEsZT9uLmxvYWRpbmdSb290T3B0aW9uc0Vycm9yPWUubWVzc2FnZXx8U3RyaW5nKGUpOnQ/QXJyYXkuaXNBcnJheSh0KT8obi5pbml0aWFsaXplKHQpLG4ucm9vdE9wdGlvbnNMb2FkZWQ9ITApOm4ubG9hZGluZ1Jvb3RPcHRpb25zRXJyb3I9XCJyZWNlaXZlZCB1bnJlY29nbml6YWJsZSBkYXRhXCI6bi5sb2FkaW5nUm9vdE9wdGlvbnNFcnJvcj1cIm5vIGRhdGEgcmVjZWl2ZWRcIn07dGhpcy5sb2FkaW5nUm9vdE9wdGlvbnM9ITAsdGhpcy5sb2FkaW5nUm9vdE9wdGlvbnNFcnJvcj1cIlwiLHRoaXMubG9hZFJvb3RPcHRpb25zKGkpfWVsc2V7aWYodC5pc1BlbmRpbmcpcmV0dXJuO3ZhciBzPXQucmF3LG89ZnVuY3Rpb24oZSxpKXt0LmlzUGVuZGluZz0hMSxlP3QubG9hZGluZ0NoaWxkcmVuRXJyb3I9bi5sb2FkQ2hpbGRyZW5FcnJvclRleHQoZSk6QXJyYXkuaXNBcnJheShpKT8odC5jaGlsZHJlbj1uLm5vcm1hbGl6ZSh0LGkpLHQuaXNMb2FkZWQ9ITAsbi5idWlsZE5vZGVDaGVja2VkU3RhdGVNYXAoKSk6KHQubG9hZGluZ0NoaWxkcmVuRXJyb3I9XCJSZWNlaXZlZCB1bnJlY29nbml6YWJsZSBkYXRhXCIsUygoZnVuY3Rpb24oKXtyZXR1cm4hMX0pLChmdW5jdGlvbigpe3JldHVyblwiUmVjZWl2ZWQgdW5yZWNvZ25pemFibGUgZGF0YSBcIitpK1wiIHdoaWxlIGxvYWRpbmcgY2hpbGRyZW4gb3B0aW9ucyBvZiBub2RlIFwiK3QuaWR9KSkpfTt0LmlzUGVuZGluZz0hMCx0LmxvYWRpbmdDaGlsZHJlbkVycm9yPVwiXCIsdGhpcy5sb2FkQ2hpbGRyZW5PcHRpb25zKHMsbyl9fSxjaGVja0R1cGxpY2F0aW9uOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7UygoZnVuY3Rpb24oKXtyZXR1cm4hYSh0Lm5vZGVNYXAsZS5pZCl9KSwoZnVuY3Rpb24oKXtyZXR1cm5cIkRldGVjdGVkIGR1cGxpY2F0ZSBwcmVzZW5jZSBvZiBub2RlIGlkIFwiK0pTT04uc3RyaW5naWZ5KGUuaWQpKycuIFRoZWlyIGxhYmVscyBhcmUgXCInK3Qubm9kZU1hcFtlLmlkXS5sYWJlbCsnXCIgYW5kIFwiJytlLmxhYmVsKydcIiByZXNwZWN0aXZlbHkuJ30pKX0sdmVyaWZ5Tm9kZVNoYXBlOmZ1bmN0aW9uKCl7fSxzZWxlY3Q6ZnVuY3Rpb24oZSl7dGhpcy5zaW5nbGUmJnRoaXMuY2xlYXIoKTt2YXIgdD10aGlzLm11bHRpcGxlJiYhdGhpcy5mbGF0PzA9PT10aGlzLm5vZGVDaGVja2VkU3RhdGVNYXBbZS5pZF06IXRoaXMuaXNTZWxlY3RlZChlKTt0P3RoaXMuX3NlbGVjdE5vZGUoZSk6dGhpcy5fZGVzZWxlY3ROb2RlKGUpLHRoaXMuYnVpbGRTZWxlY3RlZE5vZGVNYXAoKSx0aGlzLmJ1aWxkTm9kZUNoZWNrZWRTdGF0ZU1hcCgpLHRoaXMuc2VhcmNoaW5nJiZ0JiYodGhpcy5zaW5nbGV8fHRoaXMuY2xlYXJPblNlbGVjdCkmJih0aGlzLnNlYXJjaFF1ZXJ5PVwiXCIpLHRoaXMuc2luZ2xlJiZ0aGlzLmNsb3NlT25TZWxlY3QmJih0aGlzLmNsb3NlTWVudSgpLHRoaXMuc2VhcmNoYWJsZSYmKHRoaXMuX2JsdXJPblNlbGVjdD0hMCkpfSxjbGVhcjpmdW5jdGlvbigpe3RoaXMuaGFzVmFsdWUmJih0aGlzLmludGVybmFsVmFsdWU9W10sdGhpcy5idWlsZFNlbGVjdGVkTm9kZU1hcCgpLHRoaXMuYnVpbGROb2RlQ2hlY2tlZFN0YXRlTWFwKCkpfSxfc2VsZWN0Tm9kZTpmdW5jdGlvbihlKXtpZih0aGlzLmFkZFZhbHVlKGUpLHRoaXMubXVsdGlwbGUmJiF0aGlzLmZsYXQmJiFlLmlzUm9vdE5vZGUpe3ZhciB0PWUucGFyZW50Tm9kZSxuPXQuY2hpbGRyZW47bi5ldmVyeSh0aGlzLmlzU2VsZWN0ZWQpJiYobi5mb3JFYWNoKHRoaXMucmVtb3ZlVmFsdWUpLHRoaXMuX3NlbGVjdE5vZGUodCkpfX0sX2Rlc2VsZWN0Tm9kZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO2lmKHRoaXMucmVtb3ZlVmFsdWUoZSksdGhpcy5tdWx0aXBsZSYmIXRoaXMuZmxhdCYmKHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKChmdW5jdGlvbihuKXstMSE9PW4uYW5jZXN0b3JzLmluZGV4T2YoZSkmJnQucmVtb3ZlVmFsdWUobil9KSksIWUuaXNSb290Tm9kZSkpe3ZhciBuPWQoZS5hbmNlc3RvcnMsdGhpcy5pc1NlbGVjdGVkKTtpZigtMSE9PW4pe3ZhciBpPWUuYW5jZXN0b3JzW25dLHM9ZS5hbmNlc3RvcnMuY29uY2F0KGUpO3RoaXMucmVtb3ZlVmFsdWUoaSksdGhpcy50cmF2ZXJzZURlc2NlbmRhbnRzKGksZS5sZXZlbCwoZnVuY3Rpb24oZSl7LTE9PT1zLmluZGV4T2YoZSkmJnQuYWRkVmFsdWUoZSl9KSl9fX0sYWRkVmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5pbnRlcm5hbFZhbHVlLnB1c2goZS5pZCksdGhpcy5zZWxlY3RlZE5vZGVNYXBbZS5pZF09ITAsdGhpcy5zb3J0VmFsdWUoKX0scmVtb3ZlVmFsdWU6ZnVuY3Rpb24oZSl7aCh0aGlzLmludGVybmFsVmFsdWUsZS5pZCksZGVsZXRlIHRoaXMuc2VsZWN0ZWROb2RlTWFwW2UuaWRdfSxtYXliZVJlbW92ZUxhc3RWYWx1ZTpmdW5jdGlvbigpe2lmKHRoaXMuaGFzVmFsdWUpe3ZhciBlPWModGhpcy5pbnRlcm5hbFZhbHVlKSx0PXRoaXMuZ2V0Tm9kZShlKTt0aGlzLnJlbW92ZVZhbHVlKHQpLHRoaXMuYnVpbGRTZWxlY3RlZE5vZGVNYXAoKSx0aGlzLmJ1aWxkTm9kZUNoZWNrZWRTdGF0ZU1hcCgpfX0sc29ydFZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztcIkxFVkVMXCI9PT10aGlzLnNvcnRWYWx1ZUJ5P3RoaXMuaW50ZXJuYWxWYWx1ZS5zb3J0KChmdW5jdGlvbih0LG4pe3JldHVybiBfKGUubm9kZU1hcFt0XSxlLm5vZGVNYXBbbl0pfSkpOlwiSU5ERVhcIj09PXRoaXMuc29ydFZhbHVlQnkmJnRoaXMuaW50ZXJuYWxWYWx1ZS5zb3J0KChmdW5jdGlvbih0LG4pe3JldHVybiB2KGUubm9kZU1hcFt0XSxlLm5vZGVNYXBbbl0pfSkpfSxyZXN0b3JlU2Nyb2xsUG9zaXRpb246ZnVuY3Rpb24oKXt0aGlzLiRyZWZzLm1lbnUmJih0aGlzLiRyZWZzLm1lbnUuc2Nyb2xsVG9wPXRoaXMubGFzdFNjcm9sbFBvc2l0aW9uKX0sYWRqdXN0UG9zaXRpb246ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KXt2YXIgZT10aGlzLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSx0PWUudG9wLG49d2luZG93LmlubmVySGVpZ2h0LWUuYm90dG9tO24+dGhpcy5tYXhIZWlnaHR8fG4+dHx8XCJiZWxvd1wiPT09dGhpcy5vcGVuRGlyZWN0aW9ufHxcImJvdHRvbVwiPT09dGhpcy5vcGVuRGlyZWN0aW9uPyh0aGlzLnByZWZmZXJlZE9wZW5EaXJlY3Rpb249XCJiZWxvd1wiLHRoaXMub3B0aW1pemVkSGVpZ2h0PU1hdGgubWluKG4tNDAsdGhpcy5tYXhIZWlnaHQpKToodGhpcy5wcmVmZmVyZWRPcGVuRGlyZWN0aW9uPVwiYWJvdmVcIix0aGlzLm9wdGltaXplZEhlaWdodD1NYXRoLm1pbih0LTQwLHRoaXMubWF4SGVpZ2h0KSl9fX0sY3JlYXRlZDpmdW5jdGlvbigpe3RoaXMudmVyaWZ5UHJvcHMoKSx0aGlzLnJlc2V0RmxhZ3MoKSx0aGlzLmluaXRpYWxpemUodGhpcy5vcHRpb25zKX0sbW91bnRlZDpmdW5jdGlvbigpe3RoaXMuYXV0b2ZvY3VzJiZ0aGlzLiRyZWZzLnZhbHVlLmZvY3VzSW5wdXQoKX0sZGVzdHJveWVkOmZ1bmN0aW9uKCl7dGhpcy50b2dnbGVDbGlja091dHNpZGVFdmVudCghMSl9fSxEPXtjb21wdXRlZDp7bGltaXRUZXh0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5pbnN0YW5jZS5zZWxlY3RlZE5vZGVzTnVtYmVyLXRoaXMuaW5zdGFuY2UubGltaXQ7cmV0dXJuIHRoaXMuaW5zdGFuY2UubGltaXRUZXh0KGUpfX0sbWV0aG9kczp7Zm9jdXNJbnB1dDpmdW5jdGlvbigpe3RoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKX0sYmx1cklucHV0OmZ1bmN0aW9uKCl7dGhpcy4kcmVmcy5pbnB1dC5ibHVyKCl9LGhhbmRsZU1vdXNlRG93bk9uVmFsdWU6aSgoZnVuY3Rpb24oKXt0aGlzLmluc3RhbmNlLl93YXNDbGlja2VkT25WYWx1ZUl0ZW09ITB9KSl9fSxNPXtuYW1lOlwidnVlLXRyZWVzZWxlY3QtLXBsYWNlaG9sZGVyXCIsaW5qZWN0OltcImluc3RhbmNlXCJdfSxBPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQ7cmV0dXJuKGUuX3NlbGYuX2N8fHQpKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX3BsYWNlaG9sZGVyIHZ1ZS10cmVlc2VsZWN0LWhlbHBlci16b29tLWVmZmVjdC1vZmZcIn0sW2UuX3QoXCJwbGFjZWhvbGRlclwiLFtlLl92KGUuX3MoZS5pbnN0YW5jZS5wbGFjZWhvbGRlcikpXSldLDIpfSxMPVtdLFQ9e3JlbmRlcjpBLHN0YXRpY1JlbmRlckZuczpMfSxWPVQsUj1uKDApLGs9UihNLFYsITEsbnVsbCxudWxsLG51bGwpLEk9ay5leHBvcnRzLCQ9e0JBQ0tTUEFDRTo4LEVTQ0FQRToyNyxERUxFVEU6NDZ9LEI9e25hbWU6XCJ2dWUtdHJlZXNlbGVjdC0taW5wdXRcIixpbmplY3Q6W1wiaW5zdGFuY2VcIl0sZGF0YTpmdW5jdGlvbigpe3JldHVybntpbnB1dFdpZHRoOjV9fSxjb21wdXRlZDp7bmVlZHNBdXRvU2l6ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmluc3RhbmNlLm11bHRpcGxlfX0sdXBkYXRlZDpmdW5jdGlvbigpe3RoaXMubmVlZHNBdXRvU2l6ZSYmdGhpcy51cGRhdGVJbnB1dFdpZHRoKCl9LG1ldGhvZHM6e2ZvY3VzOmZ1bmN0aW9uKCl7dGhpcy5pbnN0YW5jZS5kaXNhYmxlZHx8dGhpcy4kcmVmcy5pbnB1dCYmdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpfSxibHVyOmZ1bmN0aW9uKCl7dGhpcy4kcmVmcy5pbnB1dCYmdGhpcy4kcmVmcy5pbnB1dC5ibHVyKCl9LG9uRm9jdXM6ZnVuY3Rpb24oKXt0aGlzLmluc3RhbmNlLmlzRm9jdXNlZD0hMCwhdGhpcy5pbnN0YW5jZS5pc09wZW4mJnRoaXMuaW5zdGFuY2Uub3Blbk9uRm9jdXMmJnRoaXMuaW5zdGFuY2Uub3Blbk1lbnUoKX0sb25CbHVyOmZ1bmN0aW9uKCl7dGhpcy5pbnN0YW5jZS5pc0ZvY3VzZWQ9ITEsdGhpcy5pbnN0YW5jZS5jbG9zZU1lbnUoKX0sb25JbnB1dDpmdW5jdGlvbihlKXt0aGlzLmluc3RhbmNlLnNlYXJjaFF1ZXJ5PWUudGFyZ2V0LnZhbHVlfSxvbktleURvd246ZnVuY3Rpb24oZSl7aWYoIShlLmN0cmxLZXl8fGUuc2hpZnRLZXl8fGUuYWx0S2V5fHxlLm1ldGFLZXkpKXN3aXRjaChcIndoaWNoXCJpbiBlP2Uud2hpY2g6ZS5rZXlDb2RlKXtjYXNlICQuQkFDS1NQQUNFOnRoaXMuaW5zdGFuY2UuYmFja3NwYWNlUmVtb3ZlcyYmIXRoaXMuaW5zdGFuY2Uuc2VhcmNoUXVlcnkubGVuZ3RoJiZ0aGlzLmluc3RhbmNlLm1heWJlUmVtb3ZlTGFzdFZhbHVlKCk7YnJlYWs7Y2FzZSAkLkRFTEVURTp0aGlzLmluc3RhbmNlLmRlbGV0ZVJlbW92ZXMmJiF0aGlzLmluc3RhbmNlLnNlYXJjaFF1ZXJ5Lmxlbmd0aCYmdGhpcy5pbnN0YW5jZS5tYXliZVJlbW92ZUxhc3RWYWx1ZSgpO2JyZWFrO2Nhc2UgJC5FU0NBUEU6dGhpcy5pbnN0YW5jZS5zZWFyY2hRdWVyeS5sZW5ndGg/dGhpcy5pbnN0YW5jZS5zZWFyY2hRdWVyeT1cIlwiOnRoaXMuaW5zdGFuY2UuaXNPcGVuP3RoaXMuaW5zdGFuY2UuY2xvc2VNZW51KCk6dGhpcy5pbnN0YW5jZS5lc2NhcGVDbGVhcnNWYWx1ZSYmdGhpcy5pbnN0YW5jZS5jbGVhcigpO2JyZWFrO2RlZmF1bHQ6dGhpcy5pbnN0YW5jZS5pc09wZW58fHRoaXMuaW5zdGFuY2Uub3Blbk1lbnUoKX19LG9uTW91c2VEb3duOmZ1bmN0aW9uKGUpe3RoaXMuaW5zdGFuY2Uuc2VhcmNoUXVlcnkubGVuZ3RoJiZlLnN0b3BQcm9wYWdhdGlvbigpfSxyZW5kZXJJbnB1dFdyYXBwZXI6ZnVuY3Rpb24oZSl7dmFyIHQ9e2NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2lucHV0LXdyYXBwZXJcIn0sbj1bXTtyZXR1cm4gdGhpcy5pbnN0YW5jZS5zZWFyY2hhYmxlJiYhdGhpcy5pbnN0YW5jZS5kaXNhYmxlZCYmKG4ucHVzaCh0aGlzLnJlbmRlcklucHV0KGUpKSx0aGlzLm5lZWRzQXV0b1NpemUmJm4ucHVzaCh0aGlzLnJlbmRlclNpemVyKGUpKSksdGhpcy5pbnN0YW5jZS5zZWFyY2hhYmxlfHxsKHQse29uOntmb2N1czp0aGlzLm9uRm9jdXMsYmx1cjp0aGlzLm9uQmx1cixrZXlkb3duOnRoaXMub25LZXlEb3dufSxyZWY6XCJpbnB1dFwifSksdGhpcy5pbnN0YW5jZS5zZWFyY2hhYmxlfHx0aGlzLmluc3RhbmNlLmRpc2FibGVkfHxsKHQse2F0dHJzOnt0YWJJbmRleDp0aGlzLmluc3RhbmNlLnRhYkluZGV4fX0pLGUoXCJkaXZcIix0LG4pfSxyZW5kZXJJbnB1dDpmdW5jdGlvbihlKXtyZXR1cm4gZShcImlucHV0XCIse2NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2lucHV0XCIsYXR0cnM6e3R5cGU6XCJ0ZXh0XCIsYXV0b2NvbXBsZXRlOlwib2ZmXCIsdGFiSW5kZXg6dGhpcy5pbnN0YW5jZS50YWJJbmRleH0sZG9tUHJvcHM6e3ZhbHVlOnRoaXMuaW5zdGFuY2Uuc2VhcmNoUXVlcnl9LHN0eWxlOnt3aWR0aDp0aGlzLm5lZWRzQXV0b1NpemU/dGhpcy5pbnB1dFdpZHRoK1wicHhcIjpudWxsfSxvbjp7Zm9jdXM6dGhpcy5vbkZvY3VzLGlucHV0OnRoaXMub25JbnB1dCxibHVyOnRoaXMub25CbHVyLGtleWRvd246dGhpcy5vbktleURvd24sbW91c2Vkb3duOnRoaXMub25Nb3VzZURvd259LHJlZjpcImlucHV0XCJ9KX0scmVuZGVyU2l6ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGUoXCJkaXZcIix7Y2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fc2l6ZXJcIixkb21Qcm9wczp7dGV4dENvbnRlbnQ6dGhpcy5pbnN0YW5jZS5zZWFyY2hRdWVyeX0scmVmOlwic2l6ZXJcIn0pfSx1cGRhdGVJbnB1dFdpZHRoOmZ1bmN0aW9uKCl7dGhpcy5pbnB1dFdpZHRoPU1hdGgubWF4KDUsdGhpcy4kcmVmcy5zaXplcj90aGlzLiRyZWZzLnNpemVyLnNjcm9sbFdpZHRoKzU6MCl9fSxyZW5kZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucmVuZGVySW5wdXRXcmFwcGVyKGUpfX0saj1uKDApLEY9aihCLG51bGwsITEsbnVsbCxudWxsLG51bGwpLHo9Ri5leHBvcnRzLFA9e25hbWU6XCJ2dWUtdHJlZXNlbGVjdC0tbXVsdGktdmFsdWVcIixjb21wb25lbnRzOntQbGFjZWhvbGRlcjpJLFNlYXJjaElucHV0Onp9LG1peGluczpbRF0saW5qZWN0OltcImluc3RhbmNlXCJdfSxIPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX3ZhbHVlLXdyYXBwZXJcIn0sW24oXCJ0cmFuc2l0aW9uLWdyb3VwXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX211bHRpLXZhbHVlXCIsYXR0cnM6e3RhZzpcImRpdlwiLG5hbWU6XCJ2dWUtdHJlZXNlbGVjdF9fbXVsdGktdmFsdWUtaXRlbS0tem9vbVwiLGFwcGVhcjpcIlwifX0sW2UuX2woZS5pbnN0YW5jZS52aXNpYmxlVmFsdWUsKGZ1bmN0aW9uKHQpe3JldHVybltuKFwiZGl2XCIse2tleTpcInZhbHVlLVwiK3QuaWQsc3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbXVsdGktdmFsdWUtaXRlbS13cmFwcGVyXCIsb246e21vdXNlZG93bjplLmhhbmRsZU1vdXNlRG93bk9uVmFsdWV9fSxbbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19tdWx0aS12YWx1ZS1pdGVtXCJ9LFtuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19tdWx0aS12YWx1ZS1sYWJlbFwifSxbZS5fdihlLl9zKHQubGFiZWwpKV0pLG4oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24gdnVlLXRyZWVzZWxlY3RfX3ZhbHVlLXJlbW92ZVwiLG9uOnttb3VzZWRvd246ZnVuY3Rpb24obil7ZS5pbnN0YW5jZS5zZWxlY3QodCl9fX0sW2UuX3YoXCLDl1wiKV0pXSldKV19KSksZS5fdihcIiBcIiksZS5pbnN0YW5jZS5oYXNFeGNlZWRlZExpbWl0P24oXCJkaXZcIix7a2V5OlwibGltaXQtdGlwXCIsc3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbGltaXQtdGlwIHZ1ZS10cmVlc2VsZWN0LWhlbHBlci16b29tLWVmZmVjdC1vZmZcIn0sW24oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2xpbWl0LXRpcC10ZXh0XCJ9LFtlLl92KGUuX3MoZS5saW1pdFRleHQpKV0pXSk6ZS5fZSgpLGUuX3YoXCIgXCIpLGUuaW5zdGFuY2UuaGFzVmFsdWV8fGUuaW5zdGFuY2Uuc2VhcmNoUXVlcnk/ZS5fZSgpOm4oXCJwbGFjZWhvbGRlclwiLHtrZXk6XCJwbGFjZWhvbGVyXCJ9KSxlLl92KFwiIFwiKSxuKFwic2VhcmNoLWlucHV0XCIse2tleTpcImlucHV0XCIscmVmOlwiaW5wdXRcIn0pXSwyKV0sMSl9LFE9W10sSz17cmVuZGVyOkgsc3RhdGljUmVuZGVyRm5zOlF9LFc9SyxVPW4oMCkscT1VKFAsVywhMSxudWxsLG51bGwsbnVsbCksWD1xLmV4cG9ydHMsSj17bmFtZTpcInZ1ZS10cmVlc2VsZWN0LS1zaW5nbGUtdmFsdWVcIixjb21wb25lbnRzOntQbGFjZWhvbGRlcjpJLFNlYXJjaElucHV0Onp9LG1peGluczpbRF0saW5qZWN0OltcImluc3RhbmNlXCJdfSxHPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX3ZhbHVlLXdyYXBwZXJcIn0sW2UuaW5zdGFuY2UuaGFzVmFsdWUmJiFlLmluc3RhbmNlLnNlYXJjaFF1ZXJ5P24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fc2luZ2xlLXZhbHVlXCJ9LFtlLl92KFwiXFxuICAgIFwiK2UuX3MoZS5pbnN0YW5jZS5zZWxlY3RlZE5vZGVzWzBdLmxhYmVsKStcIlxcbiAgXCIpXSk6ZS5pbnN0YW5jZS5zZWFyY2hRdWVyeT9lLl9lKCk6bihcInBsYWNlaG9sZGVyXCIpLGUuX3YoXCIgXCIpLG4oXCJzZWFyY2gtaW5wdXRcIix7a2V5OlwiaW5wdXRcIixyZWY6XCJpbnB1dFwifSldLDEpfSxZPVtdLFo9e3JlbmRlcjpHLHN0YXRpY1JlbmRlckZuczpZfSxlZT1aLHRlPW4oMCksbmU9dGUoSixlZSwhMSxudWxsLG51bGwsbnVsbCksaWU9bmUuZXhwb3J0cyxzZT17cHJvcHM6e25vZGU6e3R5cGU6T2JqZWN0LHJlcXVpcmVkOiEwfX0sY29tcHV0ZWQ6e2NoZWNrZWRTdGF0ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmluc3RhbmNlLm5vZGVDaGVja2VkU3RhdGVNYXBbdGhpcy5ub2RlLmlkXX0sc2hvdWxkRXhwYW5kOmZ1bmN0aW9uKCl7cmV0dXJuISF0aGlzLm5vZGUuaXNCcmFuY2gmJih0aGlzLmluc3RhbmNlLnNlYXJjaGluZz90aGlzLm5vZGUuZXhwYW5kc09uU2VhcmNoOnRoaXMubm9kZS5pc0V4cGFuZGVkKX19LHdhdGNoOntcIm5vZGUuaXNFeHBhbmRlZFwiOmZ1bmN0aW9uKGUpeyEwIT09ZXx8dGhpcy5ub2RlLmlzTG9hZGVkfHx0aGlzLmluc3RhbmNlLmxvYWRPcHRpb25zKCExLHRoaXMubm9kZSl9fSxtZXRob2RzOntoYW5kbGVNb3VzZURvd25Pbk9wdGlvbjppKChmdW5jdGlvbigpe3RoaXMubm9kZS5pc0JyYW5jaCYmdGhpcy5pbnN0YW5jZS5kaXNhYmxlQnJhbmNoTm9kZXM/dGhpcy5pbnN0YW5jZS50b2dnbGVFeHBhbmRlZCh0aGlzLm5vZGUpOnRoaXMuaW5zdGFuY2Uuc2VsZWN0KHRoaXMubm9kZSl9KSksaGFuZGxlTW91c2VEb3duT25PcHRpb25BcnJvdzppKChmdW5jdGlvbigpe3RoaXMuaW5zdGFuY2UudG9nZ2xlRXhwYW5kZWQodGhpcy5ub2RlKX0pKX19LG9lPXtuYW1lOlwidnVlLXRyZWVzZWxlY3QtLW9wdGlvblwiLGluamVjdDpbXCJpbnN0YW5jZVwiLFwiVU5DSEVDS0VEXCIsXCJJTkRFVEVSTUlOQVRFXCIsXCJDSEVDS0VEXCJdLG1peGluczpbc2VdfSxyZT1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19saXN0LWl0ZW1cIn0sW24oXCJkaXZcIix7Y2xhc3M6W1widnVlLXRyZWVzZWxlY3RfX29wdGlvblwiLHtcInZ1ZS10cmVlc2VsZWN0X19vcHRpb24tLWRpc2FibGVkXCI6ZS5ub2RlLmRpc2FibGVkLFwidnVlLXRyZWVzZWxlY3RfX29wdGlvbi0tcm9vdFwiOmUubm9kZS5pc1Jvb3ROb2RlLFwidnVlLXRyZWVzZWxlY3RfX29wdGlvbi0tY2hpbGRcIjohZS5ub2RlLmlzUm9vdE5vZGUsXCJ2dWUtdHJlZXNlbGVjdF9fb3B0aW9uLS1zZWxlY3RlZFwiOmUuaW5zdGFuY2UuaXNTZWxlY3RlZChlLm5vZGUpLFwidnVlLXRyZWVzZWxlY3RfX29wdGlvbi0tbWF0Y2hlZFwiOmUuaW5zdGFuY2Uuc2VhcmNoaW5nJiZlLm5vZGUuaXNNYXRjaGVkLFwidnVlLXRyZWVzZWxlY3RfX29wdGlvbi0taGlkZVwiOmUuaW5zdGFuY2Uuc2VhcmNoaW5nJiYhKGUubm9kZS5pc01hdGNoZWR8fGUubm9kZS5oYXNNYXRjaGVkQ2hpbGQpfV19LFtlLm5vZGUuaXNMZWFmP24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fb3B0aW9uLWFycm93LXBsYWNlaG9sZGVyXCJ9LFtlLl92KFwiwqBcIildKTpuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX29wdGlvbi1hcnJvdy13cmFwcGVyXCIsb246e21vdXNlZG93bjplLmhhbmRsZU1vdXNlRG93bk9uT3B0aW9uQXJyb3d9fSxbbihcInRyYW5zaXRpb25cIix7YXR0cnM6e25hbWU6XCJ2dWUtdHJlZXNlbGVjdF9fb3B0aW9uLWFycm93LS1wcmVwYXJlXCIsYXBwZWFyOlwiXCJ9fSxbbihcInNwYW5cIix7Y2xhc3M6W1widnVlLXRyZWVzZWxlY3RfX29wdGlvbi1hcnJvd1wiLHtcInZ1ZS10cmVlc2VsZWN0X19vcHRpb24tYXJyb3ctLXJvdGF0ZWRcIjplLnNob3VsZEV4cGFuZH1dfSldKV0sMSksZS5fdihcIiBcIiksbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19sYWJlbC13cmFwcGVyXCIsb246e21vdXNlZG93bjplLmhhbmRsZU1vdXNlRG93bk9uT3B0aW9ufX0sW2UuaW5zdGFuY2UubXVsdGlwbGUmJiFlLmluc3RhbmNlLmRpc2FibGVCcmFuY2hOb2Rlcz9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2NoZWNrYm94LXdyYXBwZXJcIn0sW24oXCJzcGFuXCIse2NsYXNzOltcInZ1ZS10cmVlc2VsZWN0X19jaGVja2JveFwiLHtcInZ1ZS10cmVlc2VsZWN0X19jaGVja2JveC0tY2hlY2tlZFwiOmUuY2hlY2tlZFN0YXRlPT09ZS5DSEVDS0VELFwidnVlLXRyZWVzZWxlY3RfX2NoZWNrYm94LS1pbmRldGVybWluYXRlXCI6ZS5jaGVja2VkU3RhdGU9PT1lLklOREVURVJNSU5BVEUsXCJ2dWUtdHJlZXNlbGVjdF9fY2hlY2tib3gtLXVuY2hlY2tlZFwiOmUuY2hlY2tlZFN0YXRlPT09ZS5VTkNIRUNLRUR9XX0sW24oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2NoZWNrYm94LW1hcmtcIn0pXSldKTplLl9lKCksZS5fdihcIiBcIiksbihcImxhYmVsXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2xhYmVsXCJ9LFtlLl92KFwiXFxuICAgICAgICBcIitlLl9zKGUubm9kZS5sYWJlbCkrXCJcXG4gICAgICAgIFwiKSxlLm5vZGUuaXNCcmFuY2g/bihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fY291bnRcIn0sWyFlLmluc3RhbmNlLnNlYXJjaGluZyYmZS5pbnN0YW5jZS5zaG93Q291bnQ/W2UuX3YoXCIoXCIrZS5fcyhlLm5vZGUuY291bnRbZS5pbnN0YW5jZS5zaG93Q291bnRPZl0pK1wiKVwiKV06ZS5pbnN0YW5jZS5zZWFyY2hpbmcmJmUuaW5zdGFuY2Uuc2hvd0NvdW50T25TZWFyY2hDb21wdXRlZD9bZS5fdihcIihcIitlLl9zKGUuaW5zdGFuY2Uuc2VhcmNoaW5nQ291bnRbZS5ub2RlLmlkXVtlLmluc3RhbmNlLnNob3dDb3VudE9mXSkrXCIpXCIpXTplLl9lKCldLDIpOmUuX2UoKV0pXSldKSxlLl92KFwiIFwiKSxlLnNob3VsZEV4cGFuZD9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2xpc3RcIn0sW2Uubm9kZS5pc0xvYWRlZD9bZS5ub2RlLmNoaWxkcmVuLmxlbmd0aD9lLl9sKGUubm9kZS5jaGlsZHJlbiwoZnVuY3Rpb24oZSl7cmV0dXJuIG4oXCJ2dWUtdHJlZXNlbGVjdC0tb3B0aW9uXCIse2tleTplLmlkLGF0dHJzOntub2RlOmV9fSl9KSk6bihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19uby1jaGlsZHJlbi10aXBcIn0sW2UuX20oMCksZS5fdihcIiBcIiksbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbm8tY2hpbGRyZW4tdGlwLXRleHRcIn0sW2UuX3YoZS5fcyhlLmluc3RhbmNlLm5vQ2hpbGRyZW5UZXh0KSldKV0pXTplLm5vZGUuaXNQZW5kaW5nP24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbG9hZGluZy10aXBcIn0sW2UuX20oMSksZS5fdihcIiBcIiksbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbG9hZGluZy10aXAtdGV4dFwifSxbZS5fdihlLl9zKGUuaW5zdGFuY2UubG9hZGluZ1RleHQpKV0pXSk6ZS5ub2RlLmxvYWRpbmdDaGlsZHJlbkVycm9yP24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fZXJyb3ItdGlwXCJ9LFtlLl9tKDIpLGUuX3YoXCIgXCIpLG4oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2Vycm9yLXRpcC10ZXh0XCJ9LFtlLl92KFwiXFxuICAgICAgICBcIitlLl9zKGUubm9kZS5sb2FkaW5nQ2hpbGRyZW5FcnJvcikrXCJcXG4gICAgICAgIFwiKSxuKFwiYVwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19yZXRyeVwiLGF0dHJzOnt0aXRsZTplLmluc3RhbmNlLnJldHJ5VGl0bGV9LG9uOntjbGljazpmdW5jdGlvbih0KXtlLmluc3RhbmNlLmxvYWRPcHRpb25zKCExLGUubm9kZSl9fX0sW2UuX3YoXCJcXG4gICAgICAgICAgXCIrZS5fcyhlLmluc3RhbmNlLnJldHJ5VGV4dCkrXCJcXG4gICAgICAgIFwiKV0pXSldKTplLl9lKCldLDIpOmUuX2UoKV0pfSxhZT1bZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9faWNvbi13cmFwcGVyXCJ9LFtuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uLXdhcm5pbmdcIn0pXSl9LGZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24td3JhcHBlclwifSxbbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9faWNvbi1sb2FkZXJcIn0pXSl9LGZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24td3JhcHBlclwifSxbbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9faWNvbi1lcnJvclwifSldKX1dLGxlPXtyZW5kZXI6cmUsc3RhdGljUmVuZGVyRm5zOmFlfSxjZT1sZSx1ZT1uKDApLGRlPXVlKG9lLGNlLCExLG51bGwsbnVsbCxudWxsKSxoZT1kZS5leHBvcnRzLHBlPXtuYW1lOlwidnVlLXRyZWVzZWxlY3RcIixjb21wb25lbnRzOntUcmVlc2VsZWN0T3B0aW9uOmhlfSxtaXhpbnM6W3ddLGNvbXB1dGVkOntWYWx1ZUNvbXBvbmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm11bHRpcGxlP1g6aWV9fX0sZmU9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJkaXZcIix7cmVmOlwid3JhcHBlclwiLGNsYXNzOltcInZ1ZS10cmVlc2VsZWN0XCIse1widnVlLXRyZWVzZWxlY3QtLXNpbmdsZVwiOiFlLm11bHRpcGxlLFwidnVlLXRyZWVzZWxlY3QtLW11bHRpXCI6ZS5tdWx0aXBsZSxcInZ1ZS10cmVlc2VsZWN0LS1zZWFyY2hhYmxlXCI6ZS5zZWFyY2hhYmxlLFwidnVlLXRyZWVzZWxlY3QtLWRpc2FibGVkXCI6ZS5kaXNhYmxlZCxcInZ1ZS10cmVlc2VsZWN0LS1mb2N1c2VkXCI6ZS5pc0ZvY3VzZWQsXCJ2dWUtdHJlZXNlbGVjdC0taGFzLXZhbHVlXCI6ZS5oYXNWYWx1ZSxcInZ1ZS10cmVlc2VsZWN0LS1vcGVuXCI6ZS5pc09wZW4sXCJ2dWUtdHJlZXNlbGVjdC0tb3Blbi1hYm92ZVwiOlwiYWJvdmVcIj09PWUucHJlZmZlcmVkT3BlbkRpcmVjdGlvbixcInZ1ZS10cmVlc2VsZWN0LS1vcGVuLWJlbG93XCI6XCJiZWxvd1wiPT09ZS5wcmVmZmVyZWRPcGVuRGlyZWN0aW9uLFwidnVlLXRyZWVzZWxlY3QtLWJyYW5jaC1ub2Rlcy1kaXNhYmxlZFwiOmUuZGlzYWJsZUJyYW5jaE5vZGVzfV0sb246e21vdXNlZG93bjplLmhhbmRsZU1vdXNlRG93bn19LFtuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2NvbnRyb2xcIn0sW24oZS5WYWx1ZUNvbXBvbmVudCx7cmVmOlwidmFsdWVcIix0YWc6XCJjb21wb25lbnRcIn0pLGUuX3YoXCIgXCIpLGUuc2hvdWxkU2hvd0NsZWFySWNvbj9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2NsZWFyXCIsYXR0cnM6e3RpdGxlOmUubXVsdGlwbGU/ZS5jbGVhckFsbFRleHQ6ZS5jbGVhclZhbHVlVGV4dH0sb246e21vdXNlZG93bjplLmhhbmRsZU1vdXNlRG93bk9uQ2xlYXJ9fSxbZS5fdihcIsOXXCIpXSk6ZS5fZSgpLGUuX3YoXCIgXCIpLG4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fYXJyb3ctd3JhcHBlclwiLG9uOnttb3VzZWRvd246ZS5oYW5kbGVNb3VzZURvd25PbkFycm93fX0sW24oXCJzcGFuXCIse2NsYXNzOltcInZ1ZS10cmVlc2VsZWN0X19hcnJvd1wiLHtcInZ1ZS10cmVlc2VsZWN0X19hcnJvdy0tcm90YXRlZFwiOmUuaXNPcGVufV19KV0pXSwxKSxlLl92KFwiIFwiKSxlLmlzT3Blbj9uKFwiZGl2XCIse3JlZjpcIm1lbnVcIixzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19tZW51XCIsc3R5bGU6e21heEhlaWdodDplLm9wdGltaXplZEhlaWdodCtcInB4XCJ9fSxbZS5yb290T3B0aW9uc0xvYWRlZD9bZS5zZWFyY2hpbmcmJmUubm9TZWFyY2hSZXN1bHRzP24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbm8tcmVzdWx0cy10aXBcIn0sW2UuX20oMCksZS5fdihcIiBcIiksbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbm8tcmVzdWx0cy10aXAtdGV4dFwifSxbZS5fdihlLl9zKGUubm9SZXN1bHRzVGV4dCkpXSldKTowPT09ZS5ub3JtYWxpemVkT3B0aW9ucy5sZW5ndGg/bihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19uby1vcHRpb25zLXRpcFwifSxbZS5fbSgxKSxlLl92KFwiIFwiKSxuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19uby1vcHRpb25zLXRpcC10ZXh0XCJ9LFtlLl92KGUuX3MoZS5ub09wdGlvbnNUZXh0KSldKV0pOm4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbGlzdFwifSxlLl9sKGUubm9ybWFsaXplZE9wdGlvbnMsKGZ1bmN0aW9uKGUpe3JldHVybiBuKFwidHJlZXNlbGVjdC1vcHRpb25cIix7a2V5OmUuaWQsYXR0cnM6e25vZGU6ZX19KX0pKSldOltlLmxvYWRpbmdSb290T3B0aW9ucz9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2xvYWRpbmctdGlwXCJ9LFtlLl9tKDIpLGUuX3YoXCIgXCIpLG4oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2xvYWRpbmctdGlwLXRleHRcIn0sW2UuX3YoZS5fcyhlLmxvYWRpbmdUZXh0KSldKV0pOmUubG9hZGluZ1Jvb3RPcHRpb25zRXJyb3I/bihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19lcnJvci10aXBcIn0sW2UuX20oMyksZS5fdihcIiBcIiksbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fZXJyb3ItdGlwLXRleHRcIn0sW2UuX3YoXCJcXG4gICAgICAgICAgRmFpbGVkIHRvIGxvYWQgb3B0aW9uczogXCIrZS5fcyhlLmxvYWRpbmdSb290T3B0aW9uc0Vycm9yKStcIi5cXG4gICAgICAgICAgXCIpLG4oXCJhXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX3JldHJ5XCIsYXR0cnM6e3RpdGxlOmUucmV0cnlUaXRsZX0sb246e2NsaWNrOmZ1bmN0aW9uKHQpe2UubG9hZE9wdGlvbnMoITApfX19LFtlLl92KFwiXFxuICAgICAgICAgICAgXCIrZS5fcyhlLnJldHJ5VGV4dCkrXCJcXG4gICAgICAgICAgXCIpXSldKV0pOmUuX2UoKV1dLDIpOmUuX2UoKV0pfSx2ZT1bZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9faWNvbi13cmFwcGVyXCJ9LFtuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uLXdhcm5pbmdcIn0pXSl9LGZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24td3JhcHBlclwifSxbbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9faWNvbi13YXJuaW5nXCJ9KV0pfSxmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uLXdyYXBwZXJcIn0sW24oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24tbG9hZGVyXCJ9KV0pfSxmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uLXdyYXBwZXJcIn0sW24oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24tZXJyb3JcIn0pXSl9XSxfZT17cmVuZGVyOmZlLHN0YXRpY1JlbmRlckZuczp2ZX0sbWU9X2UsQ2U9bigwKSx5ZT15LGJlPUNlKHBlLG1lLCExLHllLG51bGwsbnVsbCksZ2U9YmUuZXhwb3J0cztuLmQodCxcIlRyZWVzZWxlY3RcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZ2V9KSksbi5kKHQsXCJ0cmVlc2VsZWN0TWl4aW5cIiwoZnVuY3Rpb24oKXtyZXR1cm4gd30pKSxuLmQodCxcIm9wdGlvbk1peGluXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHNlfSkpLG4uZCh0LFwidmFsdWVNaXhpblwiLChmdW5jdGlvbigpe3JldHVybiBEfSkpO3QuZGVmYXVsdD1nZX0pLChmdW5jdGlvbihlLHQpe30pLChmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gaShlLHQpe3ZhciBuPXQubGVuZ3RoLGk9ZS5sZW5ndGg7aWYoaT5uKXJldHVybiExO2lmKGk9PT1uKXJldHVybiBlPT09dDtlOmZvcih2YXIgcz0wLG89MDtzPGk7cysrKXtmb3IodmFyIHI9ZS5jaGFyQ29kZUF0KHMpO288bjspaWYodC5jaGFyQ29kZUF0KG8rKyk9PT1yKWNvbnRpbnVlIGU7cmV0dXJuITF9cmV0dXJuITB9ZS5leHBvcnRzPWl9KSwoZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIGkoZSx0LG4pe2Z1bmN0aW9uIGkodCl7dmFyIG49QyxpPXk7cmV0dXJuIEM9eT12b2lkIDAseD10LGc9ZS5hcHBseShpLG4pfWZ1bmN0aW9uIHUoZSl7cmV0dXJuIHg9ZSxFPXNldFRpbWVvdXQocCx0KSxTP2koZSk6Z31mdW5jdGlvbiBkKGUpe3ZhciBuPWUtTyxpPWUteCxzPXQtbjtyZXR1cm4gTj9jKHMsYi1pKTpzfWZ1bmN0aW9uIGgoZSl7dmFyIG49ZS1PLGk9ZS14O3JldHVybiB2b2lkIDA9PT1PfHxuPj10fHxuPDB8fE4mJmk+PWJ9ZnVuY3Rpb24gcCgpe3ZhciBlPW8oKTtpZihoKGUpKXJldHVybiBmKGUpO0U9c2V0VGltZW91dChwLGQoZSkpfWZ1bmN0aW9uIGYoZSl7cmV0dXJuIEU9dm9pZCAwLHcmJkM/aShlKTooQz15PXZvaWQgMCxnKX1mdW5jdGlvbiB2KCl7dm9pZCAwIT09RSYmY2xlYXJUaW1lb3V0KEUpLHg9MCxDPU89eT1FPXZvaWQgMH1mdW5jdGlvbiBfKCl7cmV0dXJuIHZvaWQgMD09PUU/ZzpmKG8oKSl9ZnVuY3Rpb24gbSgpe3ZhciBlPW8oKSxuPWgoZSk7aWYoQz1hcmd1bWVudHMseT10aGlzLE89ZSxuKXtpZih2b2lkIDA9PT1FKXJldHVybiB1KE8pO2lmKE4pcmV0dXJuIEU9c2V0VGltZW91dChwLHQpLGkoTyl9cmV0dXJuIHZvaWQgMD09PUUmJihFPXNldFRpbWVvdXQocCx0KSksZ312YXIgQyx5LGIsZyxFLE8seD0wLFM9ITEsTj0hMSx3PSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihhKTtyZXR1cm4gdD1yKHQpfHwwLHMobikmJihTPSEhbi5sZWFkaW5nLE49XCJtYXhXYWl0XCJpbiBuLGI9Tj9sKHIobi5tYXhXYWl0KXx8MCx0KTpiLHc9XCJ0cmFpbGluZ1wiaW4gbj8hIW4udHJhaWxpbmc6dyksbS5jYW5jZWw9dixtLmZsdXNoPV8sbX12YXIgcz1uKDEpLG89big4KSxyPW4oMTEpLGE9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIsbD1NYXRoLm1heCxjPU1hdGgubWluO2UuZXhwb3J0cz1pfSksKGZ1bmN0aW9uKGUsdCxuKXt2YXIgaT1uKDIpLHM9ZnVuY3Rpb24oKXtyZXR1cm4gaS5EYXRlLm5vdygpfTtlLmV4cG9ydHM9c30pLChmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKHQpe3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Lk9iamVjdD09PU9iamVjdCYmdDtlLmV4cG9ydHM9bn0pLmNhbGwodCxuKDEwKSl9KSwoZnVuY3Rpb24oZSx0KXt2YXIgbjtuPShmdW5jdGlvbigpe3JldHVybiB0aGlzfSkoKTt0cnl7bj1ufHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCl8fCgwLGV2YWwpKFwidGhpc1wiKX1jYXRjaChlKXtcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiYobj13aW5kb3cpfWUuZXhwb3J0cz1ufSksKGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiBpKGUpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKG8oZSkpcmV0dXJuIHI7aWYocyhlKSl7dmFyIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZS52YWx1ZU9mP2UudmFsdWVPZigpOmU7ZT1zKHQpP3QrXCJcIjp0fWlmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiAwPT09ZT9lOitlO2U9ZS5yZXBsYWNlKGEsXCJcIik7dmFyIG49Yy50ZXN0KGUpO3JldHVybiBufHx1LnRlc3QoZSk/ZChlLnNsaWNlKDIpLG4/Mjo4KTpsLnRlc3QoZSk/cjorZX12YXIgcz1uKDEpLG89bigxMikscj1OYU4sYT0vXlxccyt8XFxzKyQvZyxsPS9eWy0rXTB4WzAtOWEtZl0rJC9pLGM9L14wYlswMV0rJC9pLHU9L14wb1swLTddKyQvaSxkPXBhcnNlSW50O2UuZXhwb3J0cz1pfSksKGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiBpKGUpe3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiBlfHxvKGUpJiZzKGUpPT1yfXZhciBzPW4oMTMpLG89bigxNikscj1cIltvYmplY3QgU3ltYm9sXVwiO2UuZXhwb3J0cz1pfSksKGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiBpKGUpe3JldHVybiBudWxsPT1lP3ZvaWQgMD09PWU/bDphOmMmJmMgaW4gT2JqZWN0KGUpP28oZSk6cihlKX12YXIgcz1uKDMpLG89bigxNCkscj1uKDE1KSxhPVwiW29iamVjdCBOdWxsXVwiLGw9XCJbb2JqZWN0IFVuZGVmaW5lZF1cIixjPXM/cy50b1N0cmluZ1RhZzp2b2lkIDA7ZS5leHBvcnRzPWl9KSwoZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIGkoZSl7dmFyIHQ9ci5jYWxsKGUsbCksbj1lW2xdO3RyeXtlW2xdPXZvaWQgMDt2YXIgaT0hMH1jYXRjaChlKXt9dmFyIHM9YS5jYWxsKGUpO3JldHVybiBpJiYodD9lW2xdPW46ZGVsZXRlIGVbbF0pLHN9dmFyIHM9bigzKSxvPU9iamVjdC5wcm90b3R5cGUscj1vLmhhc093blByb3BlcnR5LGE9by50b1N0cmluZyxsPXM/cy50b1N0cmluZ1RhZzp2b2lkIDA7ZS5leHBvcnRzPWl9KSwoZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBuKGUpe3JldHVybiBzLmNhbGwoZSl9dmFyIGk9T2JqZWN0LnByb3RvdHlwZSxzPWkudG9TdHJpbmc7ZS5leHBvcnRzPW59KSwoZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBuKGUpe3JldHVybiBudWxsIT1lJiZcIm9iamVjdFwiPT10eXBlb2YgZX1lLmV4cG9ydHM9bn0pXSl9KSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL0ByaW9waGFlL3Z1ZS10cmVlc2VsZWN0L2Rpc3QvdnVlLXRyZWVzZWxlY3QubWluLmpzIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cInRhYmxlLXJvd1wiID5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cImNsYXNzZXNcIiB2LWlmPVwicm93LnR5cGUgPT09ICdjYXRlZ29yeSdcIiBAY2xpY2s9XCJleHBhbmRfbWVcIj5cclxuICAgICAgICAgICAge3sgcm93Lm5hbWUgfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cInJvdy1pbnNpZGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbDFcIj57e3Jvdy5pZH19PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wyXCI+e3tyb3cubmFtZX19PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wzXCI+e3tyb3cucGVyfX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbDRcIj52bmQ8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbDVcIj4wPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2w2XCI+e3tyb3cuYnJhbmR9fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZXhwYWRpbmdfc3RhdHVzXCI+XHJcbiAgICAgICAgICAgIDxtYXRlcmlhbC1yb3cgdi1mb3I9XCJpdGVtIGluIHJvdy5jaGlsZHJlblwiIDprZXk9XCJpdGVtLmlkXCIgOnJvdz1cIml0ZW1cIj48L21hdGVyaWFsLXJvdz5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHJvdzoge1xyXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHt9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBleHBhZGluZ19zdGF0dXM6IGZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZXhwYW5kX21lKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yb3cuY2hpbGRyZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYWRpbmdfc3RhdHVzID0gIXRoaXMuZXhwYWRpbmdfc3RhdHVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaXNfY2F0ZWdvcnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvdy50eXBlID09IFwiY2F0ZWdvcnlcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsYXNzZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBgZGVwdGgtJHt0aGlzLnJvdy5kZXB0aH1gLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiB0aGlzLmV4cGFkaW5nX3N0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICBleHBhbmRhYmxlOiB0aGlzLnJvdy5jaGlsZHJlbiAhPT0gbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogdGhpcy5yb3cudHlwZSA9PT0gJ2NhdGVnb3J5JyxcclxuICAgICAgICAgICAgICAgICAgICAncm93LWluc2lkZSc6IHRoaXMucm93LnR5cGUgPT09ICdjYXRlZ29yeScsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMuZXhwYWRpbmdfc3RhdHVzID0gdGhpcy5yb3cuZXhwYW5kZWQ7XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jvd3MvTWF0ZXJpYWxSb3cudnVlPzMzMDhlMDhlIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJNYXRlcmlhbFJvdy52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wMDQ0YmRmMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMDA0NGJkZjJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICB2YXIgZnVuY3Rpb25hbCA9IG9wdGlvbnMuZnVuY3Rpb25hbFxuICAgIHZhciBleGlzdGluZyA9IGZ1bmN0aW9uYWxcbiAgICAgID8gb3B0aW9ucy5yZW5kZXJcbiAgICAgIDogb3B0aW9ucy5iZWZvcmVDcmVhdGVcblxuICAgIGlmICghZnVuY3Rpb25hbCkge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBleGlzdGluZyhoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtcm93XCIgfSxcbiAgICBbXG4gICAgICBfdm0ucm93LnR5cGUgPT09IFwiY2F0ZWdvcnlcIlxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgY2xhc3M6IF92bS5jbGFzc2VzLCBvbjogeyBjbGljazogX3ZtLmV4cGFuZF9tZSB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnJvdy5uYW1lKSArIFwiXFxuICAgIFwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3ctaW5zaWRlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wxXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLnJvdy5pZCkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wyXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLnJvdy5uYW1lKSldKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbDNcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0ucm93LnBlcikpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2w0XCIgfSwgW192bS5fdihcInZuZFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sNVwiIH0sIFtfdm0uX3YoXCIwXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2w2XCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLnJvdy5icmFuZCkpXSlcbiAgICAgICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZXhwYWRpbmdfc3RhdHVzXG4gICAgICAgID8gX3ZtLl9sKF92bS5yb3cuY2hpbGRyZW4sIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcIm1hdGVyaWFsLXJvd1wiLCB7IGtleTogaXRlbS5pZCwgYXR0cnM6IHsgcm93OiBpdGVtIH0gfSlcbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMDA0NGJkZjJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTAwNDRiZGYyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0wMDQ0YmRmMlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTAwNDRiZGYyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9NYXRlcmlhbFJvdy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjgxNjllMTNjXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTAwNDRiZGYyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9NYXRlcmlhbFJvdy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDA0NGJkZjJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL01hdGVyaWFsUm93LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wMDQ0YmRmMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wMDQ0YmRmMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbnZhciBsaXN0VG9TdHlsZXMgPSByZXF1aXJlKCcuL2xpc3RUb1N0eWxlcycpXG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbikge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS12dWUtc3NyLWlkfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCIvKiFcbiAqIHZ1ZS1zd2FsIHYwLjAuM1xuICogKGMpIDIwMTcgQW50w6lyaW8gVmllaXJhXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVnVlU3dhbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJWdWVTd2FsXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbiFmdW5jdGlvbih0LGUpeyB0cnVlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuc3dhbD1lKCk6dC5zd2FsPWUoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtmdW5jdGlvbiBlKG8pe2lmKG5bb10pcmV0dXJuIG5bb10uZXhwb3J0czt2YXIgcj1uW29dPXtpOm8sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtvXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyxlKSxyLmw9ITAsci5leHBvcnRzfXZhciBuPXt9O3JldHVybiBlLm09dCxlLmM9bixlLmQ9ZnVuY3Rpb24odCxuLG8pe2Uubyh0LG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6b30pfSxlLm49ZnVuY3Rpb24odCl7dmFyIG49dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIGUuZChuLFwiYVwiLG4pLG59LGUubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sZS5wPVwiXCIsZShlLnM9OCl9KFtmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89XCJzd2FsLWJ1dHRvblwiO2UuQ0xBU1NfTkFNRVM9e01PREFMOlwic3dhbC1tb2RhbFwiLE9WRVJMQVk6XCJzd2FsLW92ZXJsYXlcIixTSE9XX01PREFMOlwic3dhbC1vdmVybGF5LS1zaG93LW1vZGFsXCIsTU9EQUxfVElUTEU6XCJzd2FsLXRpdGxlXCIsTU9EQUxfVEVYVDpcInN3YWwtdGV4dFwiLElDT046XCJzd2FsLWljb25cIixJQ09OX0NVU1RPTTpcInN3YWwtaWNvbi0tY3VzdG9tXCIsQ09OVEVOVDpcInN3YWwtY29udGVudFwiLEZPT1RFUjpcInN3YWwtZm9vdGVyXCIsQlVUVE9OX0NPTlRBSU5FUjpcInN3YWwtYnV0dG9uLWNvbnRhaW5lclwiLEJVVFRPTjpvLENPTkZJUk1fQlVUVE9OOm8rXCItLWNvbmZpcm1cIixDQU5DRUxfQlVUVE9OOm8rXCItLWNhbmNlbFwiLERBTkdFUl9CVVRUT046bytcIi0tZGFuZ2VyXCIsQlVUVE9OX0xPQURJTkc6bytcIi0tbG9hZGluZ1wiLEJVVFRPTl9MT0FERVI6bytcIl9fbG9hZGVyXCJ9LGUuZGVmYXVsdD1lLkNMQVNTX05BTUVTfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5nZXROb2RlPWZ1bmN0aW9uKHQpe3ZhciBlPVwiLlwiK3Q7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSl9LGUuc3RyaW5nVG9Ob2RlPWZ1bmN0aW9uKHQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuaW5uZXJIVE1MPXQudHJpbSgpLGUuZmlyc3RDaGlsZH0sZS5pbnNlcnRBZnRlcj1mdW5jdGlvbih0LGUpe3ZhciBuPWUubmV4dFNpYmxpbmc7ZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LG4pfSxlLnJlbW92ZU5vZGU9ZnVuY3Rpb24odCl7dC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHQpfSxlLnRocm93RXJyPWZ1bmN0aW9uKHQpe3Rocm93IHQ9dC5yZXBsYWNlKC8gKyg/PSApL2csXCJcIiksXCJTd2VldEFsZXJ0OiBcIisodD10LnRyaW0oKSl9LGUuaXNQbGFpbk9iamVjdD1mdW5jdGlvbih0KXtpZihcIltvYmplY3QgT2JqZWN0XVwiIT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpKXJldHVybiExO3ZhciBlPU9iamVjdC5nZXRQcm90b3R5cGVPZih0KTtyZXR1cm4gbnVsbD09PWV8fGU9PT1PYmplY3QucHJvdG90eXBlfSxlLm9yZGluYWxTdWZmaXhPZj1mdW5jdGlvbih0KXt2YXIgZT10JTEwLG49dCUxMDA7cmV0dXJuIDE9PT1lJiYxMSE9PW4/dCtcInN0XCI6Mj09PWUmJjEyIT09bj90K1wibmRcIjozPT09ZSYmMTMhPT1uP3QrXCJyZFwiOnQrXCJ0aFwifX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8odCl7Zm9yKHZhciBuIGluIHQpZS5oYXNPd25Qcm9wZXJ0eShuKXx8KGVbbl09dFtuXSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyhuKDE4KSk7dmFyIHI9bigxOSk7ZS5vdmVybGF5TWFya3VwPXIuZGVmYXVsdCxvKG4oMjApKSxvKG4oMjEpKSxvKG4oMjIpKTt2YXIgYT1uKDApLGk9YS5kZWZhdWx0Lk1PREFMX1RJVExFLHM9YS5kZWZhdWx0Lk1PREFMX1RFWFQsbD1hLmRlZmF1bHQuSUNPTixjPWEuZGVmYXVsdC5GT09URVI7ZS5pY29uTWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK2wrJ1wiPjwvZGl2PicsZS50aXRsZU1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytpKydcIj48L2Rpdj5cXG4nLGUudGV4dE1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytzKydcIj48L2Rpdj4nLGUuZm9vdGVyTWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK2MrJ1wiPjwvZGl2Plxcbid9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpO2UuQ09ORklSTV9LRVk9XCJjb25maXJtXCIsZS5DQU5DRUxfS0VZPVwiY2FuY2VsXCI7dmFyIHI9e3Zpc2libGU6ITAsdGV4dDpudWxsLHZhbHVlOm51bGwsY2xhc3NOYW1lOlwiXCIsY2xvc2VNb2RhbDohMH0sYT1PYmplY3QuYXNzaWduKHt9LHIse3Zpc2libGU6ITEsdGV4dDpcIkNhbmNlbFwiLHZhbHVlOm51bGx9KSxpPU9iamVjdC5hc3NpZ24oe30scix7dGV4dDpcIk9LXCIsdmFsdWU6ITB9KTtlLmRlZmF1bHRCdXR0b25MaXN0PXtjYW5jZWw6YSxjb25maXJtOml9O3ZhciBzPWZ1bmN0aW9uKHQpe3N3aXRjaCh0KXtjYXNlIGUuQ09ORklSTV9LRVk6cmV0dXJuIGk7Y2FzZSBlLkNBTkNFTF9LRVk6cmV0dXJuIGE7ZGVmYXVsdDp2YXIgbj10LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSk7cmV0dXJuIE9iamVjdC5hc3NpZ24oe30scix7dGV4dDpuLHZhbHVlOnR9KX19LGw9ZnVuY3Rpb24odCxlKXt2YXIgbj1zKHQpO3JldHVybiEwPT09ZT9PYmplY3QuYXNzaWduKHt9LG4se3Zpc2libGU6ITB9KTpcInN0cmluZ1wiPT10eXBlb2YgZT9PYmplY3QuYXNzaWduKHt9LG4se3Zpc2libGU6ITAsdGV4dDplfSk6by5pc1BsYWluT2JqZWN0KGUpP09iamVjdC5hc3NpZ24oe3Zpc2libGU6ITB9LG4sZSk6T2JqZWN0LmFzc2lnbih7fSxuLHt2aXNpYmxlOiExfSl9LGM9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXt9LG49MCxvPU9iamVjdC5rZXlzKHQpO248by5sZW5ndGg7bisrKXt2YXIgcj1vW25dLGk9dFtyXSxzPWwocixpKTtlW3JdPXN9cmV0dXJuIGUuY2FuY2VsfHwoZS5jYW5jZWw9YSksZX0sdT1mdW5jdGlvbih0KXt2YXIgbj17fTtzd2l0Y2godC5sZW5ndGgpe2Nhc2UgMTpuW2UuQ0FOQ0VMX0tFWV09T2JqZWN0LmFzc2lnbih7fSxhLHt2aXNpYmxlOiExfSk7YnJlYWs7Y2FzZSAyOm5bZS5DQU5DRUxfS0VZXT1sKGUuQ0FOQ0VMX0tFWSx0WzBdKSxuW2UuQ09ORklSTV9LRVldPWwoZS5DT05GSVJNX0tFWSx0WzFdKTticmVhaztkZWZhdWx0Om8udGhyb3dFcnIoXCJJbnZhbGlkIG51bWJlciBvZiAnYnV0dG9ucycgaW4gYXJyYXkgKFwiK3QubGVuZ3RoK1wiKS5cXG4gICAgICBJZiB5b3Ugd2FudCBtb3JlIHRoYW4gMiBidXR0b25zLCB5b3UgbmVlZCB0byB1c2UgYW4gb2JqZWN0IVwiKX1yZXR1cm4gbn07ZS5nZXRCdXR0b25MaXN0T3B0cz1mdW5jdGlvbih0KXt2YXIgbj1lLmRlZmF1bHRCdXR0b25MaXN0O3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P25bZS5DT05GSVJNX0tFWV09bChlLkNPTkZJUk1fS0VZLHQpOkFycmF5LmlzQXJyYXkodCk/bj11KHQpOm8uaXNQbGFpbk9iamVjdCh0KT9uPWModCk6ITA9PT10P249dShbITAsITBdKTohMT09PXQ/bj11KFshMSwhMV0pOnZvaWQgMD09PXQmJihuPWUuZGVmYXVsdEJ1dHRvbkxpc3QpLG59fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPW4oMiksYT1uKDApLGk9YS5kZWZhdWx0Lk1PREFMLHM9YS5kZWZhdWx0Lk9WRVJMQVksbD1uKDIzKSxjPW4oMjQpLHU9bigyNSksZD1uKDI2KTtlLmluamVjdEVsSW50b01vZGFsPWZ1bmN0aW9uKHQpe3ZhciBlPW8uZ2V0Tm9kZShpKSxuPW8uc3RyaW5nVG9Ob2RlKHQpO3JldHVybiBlLmFwcGVuZENoaWxkKG4pLG59O3ZhciBmPWZ1bmN0aW9uKHQpe3QuY2xhc3NOYW1lPWksdC50ZXh0Q29udGVudD1cIlwifSxwPWZ1bmN0aW9uKHQsZSl7Zih0KTt2YXIgbj1lLmNsYXNzTmFtZTtuJiZ0LmNsYXNzTGlzdC5hZGQobil9O2UuaW5pdE1vZGFsQ29udGVudD1mdW5jdGlvbih0KXt2YXIgZT1vLmdldE5vZGUoaSk7cChlLHQpLGwuZGVmYXVsdCh0Lmljb24pLGMuaW5pdFRpdGxlKHQudGl0bGUpLGMuaW5pdFRleHQodC50ZXh0KSxkLmRlZmF1bHQodC5jb250ZW50KSx1LmRlZmF1bHQodC5idXR0b25zLHQuZGFuZ2VyTW9kZSl9O3ZhciBiPWZ1bmN0aW9uKCl7dmFyIHQ9by5nZXROb2RlKHMpLGU9by5zdHJpbmdUb05vZGUoci5tb2RhbE1hcmt1cCk7dC5hcHBlbmRDaGlsZChlKX07ZS5kZWZhdWx0PWJ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDMpLHI9e2lzT3BlbjohMSxwcm9taXNlOm51bGwsYWN0aW9uczp7fSx0aW1lcjpudWxsfSxhPU9iamVjdC5hc3NpZ24oe30scik7ZS5yZXNldFN0YXRlPWZ1bmN0aW9uKCl7YT1PYmplY3QuYXNzaWduKHt9LHIpfSxlLnNldEFjdGlvblZhbHVlPWZ1bmN0aW9uKHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXJldHVybiBpKG8uQ09ORklSTV9LRVksdCk7Zm9yKHZhciBlIGluIHQpaShlLHRbZV0pfTt2YXIgaT1mdW5jdGlvbih0LGUpe2EuYWN0aW9uc1t0XXx8KGEuYWN0aW9uc1t0XT17fSksT2JqZWN0LmFzc2lnbihhLmFjdGlvbnNbdF0se3ZhbHVlOmV9KX07ZS5zZXRBY3Rpb25PcHRpb25zRm9yPWZ1bmN0aW9uKHQsZSl7dmFyIG49KHZvaWQgMD09PWU/e306ZSkuY2xvc2VNb2RhbCxvPXZvaWQgMD09PW58fG47T2JqZWN0LmFzc2lnbihhLmFjdGlvbnNbdF0se2Nsb3NlTW9kYWw6b30pfSxlLmRlZmF1bHQ9YX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDMpLGE9bigwKSxpPWEuZGVmYXVsdC5PVkVSTEFZLHM9YS5kZWZhdWx0LlNIT1dfTU9EQUwsbD1hLmRlZmF1bHQuQlVUVE9OLGM9YS5kZWZhdWx0LkJVVFRPTl9MT0FESU5HLHU9big1KTtlLm9wZW5Nb2RhbD1mdW5jdGlvbigpe28uZ2V0Tm9kZShpKS5jbGFzc0xpc3QuYWRkKHMpLHUuZGVmYXVsdC5pc09wZW49ITB9O3ZhciBkPWZ1bmN0aW9uKCl7by5nZXROb2RlKGkpLmNsYXNzTGlzdC5yZW1vdmUocyksdS5kZWZhdWx0LmlzT3Blbj0hMX07ZS5vbkFjdGlvbj1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD1yLkNBTkNFTF9LRVkpO3ZhciBlPXUuZGVmYXVsdC5hY3Rpb25zW3RdLG49ZS52YWx1ZTtpZighMT09PWUuY2xvc2VNb2RhbCl7dmFyIGE9bCtcIi0tXCIrdDtvLmdldE5vZGUoYSkuY2xhc3NMaXN0LmFkZChjKX1lbHNlIGQoKTt1LmRlZmF1bHQucHJvbWlzZS5yZXNvbHZlKG4pfSxlLmdldFN0YXRlPWZ1bmN0aW9uKCl7dmFyIHQ9T2JqZWN0LmFzc2lnbih7fSx1LmRlZmF1bHQpO3JldHVybiBkZWxldGUgdC5wcm9taXNlLGRlbGV0ZSB0LnRpbWVyLHR9LGUuc3RvcExvYWRpbmc9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIitsKSxlPTA7ZTx0Lmxlbmd0aDtlKyspe3RbZV0uY2xhc3NMaXN0LnJlbW92ZShjKX19fSxmdW5jdGlvbih0LGUpe3ZhciBuO249ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKTt0cnl7bj1ufHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCl8fCgwLGV2YWwpKFwidGhpc1wiKX1jYXRjaCh0KXtcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiYobj13aW5kb3cpfXQuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUsbil7KGZ1bmN0aW9uKGUpe3QuZXhwb3J0cz1lLnN3ZWV0QWxlcnQ9big5KX0pLmNhbGwoZSxuKDcpKX0sZnVuY3Rpb24odCxlLG4peyhmdW5jdGlvbihlKXt0LmV4cG9ydHM9ZS5zd2FsPW4oMTApfSkuY2FsbChlLG4oNykpfSxmdW5jdGlvbih0LGUsbil7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmbigxMSk7dmFyIG89bigxNikuZGVmYXVsdDt0LmV4cG9ydHM9b30sZnVuY3Rpb24odCxlLG4pe3ZhciBvPW4oMTIpO1wic3RyaW5nXCI9PXR5cGVvZiBvJiYobz1bW3QuaSxvLFwiXCJdXSk7dmFyIHI9e2luc2VydEF0OlwidG9wXCJ9O3IudHJhbnNmb3JtPXZvaWQgMDtuKDE0KShvLHIpO28ubG9jYWxzJiYodC5leHBvcnRzPW8ubG9jYWxzKX0sZnVuY3Rpb24odCxlLG4pe2U9dC5leHBvcnRzPW4oMTMpKHZvaWQgMCksZS5wdXNoKFt0LmksJy5zd2FsLWljb24tLWVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0Oy13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGVFcnJvckljb24gLjVzO2FuaW1hdGlvbjphbmltYXRlRXJyb3JJY29uIC41c30uc3dhbC1pY29uLS1lcnJvcl9feC1tYXJre3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7LXdlYmtpdC1hbmltYXRpb246YW5pbWF0ZVhNYXJrIC41czthbmltYXRpb246YW5pbWF0ZVhNYXJrIC41c30uc3dhbC1pY29uLS1lcnJvcl9fbGluZXtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6NXB4O3dpZHRoOjQ3cHg7YmFja2dyb3VuZC1jb2xvcjojZjI3NDc0O2Rpc3BsYXk6YmxvY2s7dG9wOjM3cHg7Ym9yZGVyLXJhZGl1czoycHh9LnN3YWwtaWNvbi0tZXJyb3JfX2xpbmUtLWxlZnR7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtsZWZ0OjE3cHh9LnN3YWwtaWNvbi0tZXJyb3JfX2xpbmUtLXJpZ2h0ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTtyaWdodDoxNnB4fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlRXJyb3JJY29uezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO29wYWNpdHk6MH10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO29wYWNpdHk6MX19QGtleWZyYW1lcyBhbmltYXRlRXJyb3JJY29uezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO29wYWNpdHk6MH10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGVYTWFya3swJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTttYXJnaW4tdG9wOjI2cHg7b3BhY2l0eTowfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTttYXJnaW4tdG9wOjI2cHg7b3BhY2l0eTowfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTt0cmFuc2Zvcm06c2NhbGUoMS4xNSk7bWFyZ2luLXRvcDotNnB4fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTttYXJnaW4tdG9wOjA7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGFuaW1hdGVYTWFya3swJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTttYXJnaW4tdG9wOjI2cHg7b3BhY2l0eTowfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTttYXJnaW4tdG9wOjI2cHg7b3BhY2l0eTowfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTt0cmFuc2Zvcm06c2NhbGUoMS4xNSk7bWFyZ2luLXRvcDotNnB4fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTttYXJnaW4tdG9wOjA7b3BhY2l0eToxfX0uc3dhbC1pY29uLS13YXJuaW5ne2JvcmRlci1jb2xvcjojZjhiYjg2Oy13ZWJraXQtYW5pbWF0aW9uOnB1bHNlV2FybmluZyAuNzVzIGluZmluaXRlIGFsdGVybmF0ZTthbmltYXRpb246cHVsc2VXYXJuaW5nIC43NXMgaW5maW5pdGUgYWx0ZXJuYXRlfS5zd2FsLWljb24tLXdhcm5pbmdfX2JvZHl7d2lkdGg6NXB4O2hlaWdodDo0N3B4O3RvcDoxMHB4O2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbi1sZWZ0Oi0ycHh9LnN3YWwtaWNvbi0td2FybmluZ19fYm9keSwuc3dhbC1pY29uLS13YXJuaW5nX19kb3R7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7YmFja2dyb3VuZC1jb2xvcjojZjhiYjg2fS5zd2FsLWljb24tLXdhcm5pbmdfX2RvdHt3aWR0aDo3cHg7aGVpZ2h0OjdweDtib3JkZXItcmFkaXVzOjUwJTttYXJnaW4tbGVmdDotNHB4O2JvdHRvbTotMTFweH1ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2VXYXJuaW5nezAle2JvcmRlci1jb2xvcjojZjhkNDg2fXRve2JvcmRlci1jb2xvcjojZjhiYjg2fX1Aa2V5ZnJhbWVzIHB1bHNlV2FybmluZ3swJXtib3JkZXItY29sb3I6I2Y4ZDQ4Nn10b3tib3JkZXItY29sb3I6I2Y4YmI4Nn19LnN3YWwtaWNvbi0tc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Nn0uc3dhbC1pY29uLS1zdWNjZXNzOmFmdGVyLC5zd2FsLWljb24tLXN1Y2Nlc3M6YmVmb3Jle2NvbnRlbnQ6XCJcIjtib3JkZXItcmFkaXVzOjUwJTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo2MHB4O2hlaWdodDoxMjBweDtiYWNrZ3JvdW5kOiNmZmY7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0uc3dhbC1pY29uLS1zdWNjZXNzOmJlZm9yZXtib3JkZXItcmFkaXVzOjEyMHB4IDAgMCAxMjBweDt0b3A6LTdweDtsZWZ0Oi0zM3B4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NjBweCA2MHB4O3RyYW5zZm9ybS1vcmlnaW46NjBweCA2MHB4fS5zd2FsLWljb24tLXN1Y2Nlc3M6YWZ0ZXJ7Ym9yZGVyLXJhZGl1czowIDEyMHB4IDEyMHB4IDA7dG9wOi0xMXB4O2xlZnQ6MzBweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgNjBweDt0cmFuc2Zvcm0tb3JpZ2luOjAgNjBweDstd2Via2l0LWFuaW1hdGlvbjpyb3RhdGVQbGFjZWhvbGRlciA0LjI1cyBlYXNlLWluO2FuaW1hdGlvbjpyb3RhdGVQbGFjZWhvbGRlciA0LjI1cyBlYXNlLWlufS5zd2FsLWljb24tLXN1Y2Nlc3NfX3Jpbmd7d2lkdGg6ODBweDtoZWlnaHQ6ODBweDtib3JkZXI6NHB4IHNvbGlkIGhzbGEoOTgsNTUlLDY5JSwuMik7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNpemluZzpjb250ZW50LWJveDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi00cHg7dG9wOi00cHg7ei1pbmRleDoyfS5zd2FsLWljb24tLXN1Y2Nlc3NfX2hpZGUtY29ybmVyc3t3aWR0aDo1cHg7aGVpZ2h0OjkwcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MjhweDt0b3A6OHB4O3otaW5kZXg6MTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9LnN3YWwtaWNvbi0tc3VjY2Vzc19fbGluZXtoZWlnaHQ6NXB4O2JhY2tncm91bmQtY29sb3I6I2E1ZGM4NjtkaXNwbGF5OmJsb2NrO2JvcmRlci1yYWRpdXM6MnB4O3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6Mn0uc3dhbC1pY29uLS1zdWNjZXNzX19saW5lLS10aXB7d2lkdGg6MjVweDtsZWZ0OjE0cHg7dG9wOjQ2cHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTstd2Via2l0LWFuaW1hdGlvbjphbmltYXRlU3VjY2Vzc1RpcCAuNzVzO2FuaW1hdGlvbjphbmltYXRlU3VjY2Vzc1RpcCAuNzVzfS5zd2FsLWljb24tLXN1Y2Nlc3NfX2xpbmUtLWxvbmd7d2lkdGg6NDdweDtyaWdodDo4cHg7dG9wOjM4cHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOy13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGVTdWNjZXNzTG9uZyAuNzVzO2FuaW1hdGlvbjphbmltYXRlU3VjY2Vzc0xvbmcgLjc1c31ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlUGxhY2Vob2xkZXJ7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0xMiV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9fUBrZXlmcmFtZXMgcm90YXRlUGxhY2Vob2xkZXJ7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0xMiV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlU3VjY2Vzc1RpcHswJXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTU0JXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTcwJXt3aWR0aDo1MHB4O2xlZnQ6LThweDt0b3A6MzdweH04NCV7d2lkdGg6MTdweDtsZWZ0OjIxcHg7dG9wOjQ4cHh9dG97d2lkdGg6MjVweDtsZWZ0OjE0cHg7dG9wOjQ1cHh9fUBrZXlmcmFtZXMgYW5pbWF0ZVN1Y2Nlc3NUaXB7MCV7d2lkdGg6MDtsZWZ0OjFweDt0b3A6MTlweH01NCV7d2lkdGg6MDtsZWZ0OjFweDt0b3A6MTlweH03MCV7d2lkdGg6NTBweDtsZWZ0Oi04cHg7dG9wOjM3cHh9ODQle3dpZHRoOjE3cHg7bGVmdDoyMXB4O3RvcDo0OHB4fXRve3dpZHRoOjI1cHg7bGVmdDoxNHB4O3RvcDo0NXB4fX1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZVN1Y2Nlc3NMb25nezAle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH02NSV7d2lkdGg6MDtyaWdodDo0NnB4O3RvcDo1NHB4fTg0JXt3aWR0aDo1NXB4O3JpZ2h0OjA7dG9wOjM1cHh9dG97d2lkdGg6NDdweDtyaWdodDo4cHg7dG9wOjM4cHh9fUBrZXlmcmFtZXMgYW5pbWF0ZVN1Y2Nlc3NMb25nezAle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH02NSV7d2lkdGg6MDtyaWdodDo0NnB4O3RvcDo1NHB4fTg0JXt3aWR0aDo1NXB4O3JpZ2h0OjA7dG9wOjM1cHh9dG97d2lkdGg6NDdweDtyaWdodDo4cHg7dG9wOjM4cHh9fS5zd2FsLWljb24tLWluZm97Ym9yZGVyLWNvbG9yOiNjOWRhZTF9LnN3YWwtaWNvbi0taW5mbzpiZWZvcmV7d2lkdGg6NXB4O2hlaWdodDoyOXB4O2JvdHRvbToxN3B4O2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbi1sZWZ0Oi0ycHh9LnN3YWwtaWNvbi0taW5mbzphZnRlciwuc3dhbC1pY29uLS1pbmZvOmJlZm9yZXtjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7YmFja2dyb3VuZC1jb2xvcjojYzlkYWUxfS5zd2FsLWljb24tLWluZm86YWZ0ZXJ7d2lkdGg6N3B4O2hlaWdodDo3cHg7Ym9yZGVyLXJhZGl1czo1MCU7bWFyZ2luLWxlZnQ6LTNweDt0b3A6MTlweH0uc3dhbC1pY29ue3dpZHRoOjgwcHg7aGVpZ2h0OjgwcHg7Ym9yZGVyLXdpZHRoOjRweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXJhZGl1czo1MCU7cGFkZGluZzowO3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Y29udGVudC1ib3g7bWFyZ2luOjIwcHggYXV0b30uc3dhbC1pY29uOmZpcnN0LWNoaWxke21hcmdpbi10b3A6MzJweH0uc3dhbC1pY29uLS1jdXN0b217d2lkdGg6YXV0bztoZWlnaHQ6YXV0bzttYXgtd2lkdGg6MTAwJTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjB9LnN3YWwtaWNvbiBpbWd7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlfS5zd2FsLXRpdGxle2NvbG9yOnJnYmEoMCwwLDAsLjY1KTtmb250LXdlaWdodDo2MDA7dGV4dC10cmFuc2Zvcm06bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MTNweCAxNnB4O2ZvbnQtc2l6ZToyN3B4O2xpbmUtaGVpZ2h0Om5vcm1hbDt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tYm90dG9tOjB9LnN3YWwtdGl0bGU6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDoyNnB4fS5zd2FsLXRpdGxlOm5vdCg6Zmlyc3QtY2hpbGQpe3BhZGRpbmctYm90dG9tOjB9LnN3YWwtdGl0bGU6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEzcHh9LnN3YWwtdGV4dHtmb250LXNpemU6MTZweDtwb3NpdGlvbjpyZWxhdGl2ZTtmbG9hdDpub25lO2xpbmUtaGVpZ2h0Om5vcm1hbDt2ZXJ0aWNhbC1hbGlnbjp0b3A7dGV4dC1hbGlnbjpsZWZ0O2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjowO3BhZGRpbmc6MCAxMHB4O2ZvbnQtd2VpZ2h0OjQwMDtjb2xvcjpyZ2JhKDAsMCwwLC42NCk7bWF4LXdpZHRoOmNhbGMoMTAwJSAtIDIwcHgpO292ZXJmbG93LXdyYXA6YnJlYWstd29yZDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnN3YWwtdGV4dDpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOjQ1cHh9LnN3YWwtdGV4dDpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206NDVweH0uc3dhbC1mb290ZXJ7dGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nLXRvcDoxM3B4O21hcmdpbi10b3A6MTNweDtwYWRkaW5nOjEzcHggMTZweDtib3JkZXItcmFkaXVzOmluaGVyaXQ7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9LnN3YWwtYnV0dG9uLWNvbnRhaW5lcnttYXJnaW46NXB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfS5zd2FsLWJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOiM3Y2QxZjk7Y29sb3I6I2ZmZjtib3JkZXI6bm9uZTtib3gtc2hhZG93Om5vbmU7Ym9yZGVyLXJhZGl1czo1cHg7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxNHB4O3BhZGRpbmc6MTBweCAyNHB4O21hcmdpbjowO2N1cnNvcjpwb2ludGVyfS5zd2FsLWJ1dHRvbltub3Q6ZGlzYWJsZWRdOmhvdmVye2JhY2tncm91bmQtY29sb3I6Izc4Y2JmMn0uc3dhbC1idXR0b246YWN0aXZle2JhY2tncm91bmQtY29sb3I6IzcwYmNlMH0uc3dhbC1idXR0b246Zm9jdXN7b3V0bGluZTpub25lO2JveC1zaGFkb3c6MCAwIDAgMXB4ICNmZmYsMCAwIDAgM3B4IHJnYmEoNDMsMTE0LDE2NSwuMjkpfS5zd2FsLWJ1dHRvbltkaXNhYmxlZF17b3BhY2l0eTouNTtjdXJzb3I6ZGVmYXVsdH0uc3dhbC1idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9LnN3YWwtYnV0dG9uLS1jYW5jZWx7Y29sb3I6IzU1NTtiYWNrZ3JvdW5kLWNvbG9yOiNlZmVmZWZ9LnN3YWwtYnV0dG9uLS1jYW5jZWxbbm90OmRpc2FibGVkXTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTh9LnN3YWwtYnV0dG9uLS1jYW5jZWw6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I2Q3ZDdkN30uc3dhbC1idXR0b24tLWNhbmNlbDpmb2N1c3tib3gtc2hhZG93OjAgMCAwIDFweCAjZmZmLDAgMCAwIDNweCByZ2JhKDExNiwxMzYsMTUwLC4yOSl9LnN3YWwtYnV0dG9uLS1kYW5nZXJ7YmFja2dyb3VuZC1jb2xvcjojZTY0OTQyfS5zd2FsLWJ1dHRvbi0tZGFuZ2VyW25vdDpkaXNhYmxlZF06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZGY0NzQwfS5zd2FsLWJ1dHRvbi0tZGFuZ2VyOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNjZjQyM2J9LnN3YWwtYnV0dG9uLS1kYW5nZXI6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAxcHggI2ZmZiwwIDAgMCAzcHggcmdiYSgxNjUsNDMsNDMsLjI5KX0uc3dhbC1jb250ZW50e3BhZGRpbmc6MCAyMHB4O21hcmdpbi10b3A6MjBweDtmb250LXNpemU6bWVkaXVtfS5zd2FsLWNvbnRlbnQ6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjIwcHh9LnN3YWwtY29udGVudF9faW5wdXQsLnN3YWwtY29udGVudF9fdGV4dGFyZWF7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjpub25lO2ZvbnQtc2l6ZToxNHB4O2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjEwMCU7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNCk7cGFkZGluZzoxMHB4IDEzcHg7Ym9yZGVyLXJhZGl1czoycHg7LXdlYmtpdC10cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMnM7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjJzfS5zd2FsLWNvbnRlbnRfX2lucHV0OmZvY3VzLC5zd2FsLWNvbnRlbnRfX3RleHRhcmVhOmZvY3Vze291dGxpbmU6bm9uZTtib3JkZXItY29sb3I6IzZkYjhmZn0uc3dhbC1jb250ZW50X190ZXh0YXJlYXtyZXNpemU6dmVydGljYWx9LnN3YWwtYnV0dG9uLS1sb2FkaW5ne2NvbG9yOnRyYW5zcGFyZW50fS5zd2FsLWJ1dHRvbi0tbG9hZGluZ34uc3dhbC1idXR0b25fX2xvYWRlcntvcGFjaXR5OjF9LnN3YWwtYnV0dG9uX19sb2FkZXJ7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OmF1dG87d2lkdGg6NDNweDt6LWluZGV4OjI7bGVmdDo1MCU7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTt0ZXh0LWFsaWduOmNlbnRlcjtwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MH0uc3dhbC1idXR0b25fX2xvYWRlciBkaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt3aWR0aDo5cHg7aGVpZ2h0OjlweDtwYWRkaW5nOjA7Ym9yZGVyOm5vbmU7bWFyZ2luOjJweDtvcGFjaXR5Oi40O2JvcmRlci1yYWRpdXM6N3B4O2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDEwMCUsLjkpOy13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4yczt0cmFuc2l0aW9uOmJhY2tncm91bmQgLjJzOy13ZWJraXQtYW5pbWF0aW9uOnN3YWwtbG9hZGluZy1hbmltIDFzIGluZmluaXRlO2FuaW1hdGlvbjpzd2FsLWxvYWRpbmctYW5pbSAxcyBpbmZpbml0ZX0uc3dhbC1idXR0b25fX2xvYWRlciBkaXY6bnRoLWNoaWxkKDNuKzIpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4xNXM7YW5pbWF0aW9uLWRlbGF5Oi4xNXN9LnN3YWwtYnV0dG9uX19sb2FkZXIgZGl2Om50aC1jaGlsZCgzbiszKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouM3M7YW5pbWF0aW9uLWRlbGF5Oi4zc31ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbC1sb2FkaW5nLWFuaW17MCV7b3BhY2l0eTouNH0yMCV7b3BhY2l0eTouNH01MCV7b3BhY2l0eToxfXRve29wYWNpdHk6LjR9fUBrZXlmcmFtZXMgc3dhbC1sb2FkaW5nLWFuaW17MCV7b3BhY2l0eTouNH0yMCV7b3BhY2l0eTouNH01MCV7b3BhY2l0eToxfXRve29wYWNpdHk6LjR9fS5zd2FsLW92ZXJsYXl7cG9zaXRpb246Zml4ZWQ7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjA7b3ZlcmZsb3cteTpzY3JvbGw7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40KTt6LWluZGV4OjEwMDAwO3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4zczt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzfS5zd2FsLW92ZXJsYXk6YmVmb3Jle2NvbnRlbnQ6XCIgXCI7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO2hlaWdodDoxMDAlfS5zd2FsLW92ZXJsYXktLXNob3ctbW9kYWx7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmF1dG99LnN3YWwtb3ZlcmxheS0tc2hvdy1tb2RhbCAuc3dhbC1tb2RhbHtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0bztib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hbmltYXRpb246c2hvd1N3ZWV0QWxlcnQgLjNzO2FuaW1hdGlvbjpzaG93U3dlZXRBbGVydCAuM3M7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5zd2FsLW1vZGFse3dpZHRoOjQ3OHB4O29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO2JhY2tncm91bmQtY29sb3I6I2ZmZjt0ZXh0LWFsaWduOmNlbnRlcjtib3JkZXItcmFkaXVzOjVweDtwb3NpdGlvbjpzdGF0aWM7bWFyZ2luOjIwcHggYXV0bztkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt6LWluZGV4OjEwMDAxOy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4ycywtd2Via2l0LXRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjpvcGFjaXR5IC4ycywtd2Via2l0LXRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzLG9wYWNpdHkgLjJzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcyxvcGFjaXR5IC4ycywtd2Via2l0LXRyYW5zZm9ybSAuM3N9QG1lZGlhIChtYXgtd2lkdGg6NTAwcHgpey5zd2FsLW1vZGFse3dpZHRoOmNhbGMoMTAwJSAtIDIwcHgpfX1ALXdlYmtpdC1rZXlmcmFtZXMgc2hvd1N3ZWV0QWxlcnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTEley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KTt0cmFuc2Zvcm06c2NhbGUoLjUpfTQ1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7dHJhbnNmb3JtOnNjYWxlKC45NSl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHNob3dTd2VldEFsZXJ0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0xJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX00NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpO3RyYW5zZm9ybTpzY2FsZSguOTUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19JyxcIlwiXSl9LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbih0LGUpe3ZhciBuPXRbMV18fFwiXCIscj10WzNdO2lmKCFyKXJldHVybiBuO2lmKGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGJ0b2Epe3ZhciBhPW8ocik7cmV0dXJuW25dLmNvbmNhdChyLnNvdXJjZXMubWFwKGZ1bmN0aW9uKHQpe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIityLnNvdXJjZVJvb3QrdCtcIiAqL1wifSkpLmNvbmNhdChbYV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW25dLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gbyh0KXtyZXR1cm5cIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIitidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh0KSkpKStcIiAqL1wifXQuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1bXTtyZXR1cm4gZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbihlKXt2YXIgbz1uKGUsdCk7cmV0dXJuIGVbMl0/XCJAbWVkaWEgXCIrZVsyXStcIntcIitvK1wifVwiOm99KS5qb2luKFwiXCIpfSxlLmk9ZnVuY3Rpb24odCxuKXtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9W1tudWxsLHQsXCJcIl1dKTtmb3IodmFyIG89e30scj0wO3I8dGhpcy5sZW5ndGg7cisrKXt2YXIgYT10aGlzW3JdWzBdO1wibnVtYmVyXCI9PXR5cGVvZiBhJiYob1thXT0hMCl9Zm9yKHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIGk9dFtyXTtcIm51bWJlclwiPT10eXBlb2YgaVswXSYmb1tpWzBdXXx8KG4mJiFpWzJdP2lbMl09bjpuJiYoaVsyXT1cIihcIitpWzJdK1wiKSBhbmQgKFwiK24rXCIpXCIpLGUucHVzaChpKSl9fSxlfX0sZnVuY3Rpb24odCxlLG4pe2Z1bmN0aW9uIG8odCxlKXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIG89dFtuXSxyPWJbby5pZF07aWYocil7ci5yZWZzKys7Zm9yKHZhciBhPTA7YTxyLnBhcnRzLmxlbmd0aDthKyspci5wYXJ0c1thXShvLnBhcnRzW2FdKTtmb3IoO2E8by5wYXJ0cy5sZW5ndGg7YSsrKXIucGFydHMucHVzaCh1KG8ucGFydHNbYV0sZSkpfWVsc2V7Zm9yKHZhciBpPVtdLGE9MDthPG8ucGFydHMubGVuZ3RoO2ErKylpLnB1c2godShvLnBhcnRzW2FdLGUpKTtiW28uaWRdPXtpZDpvLmlkLHJlZnM6MSxwYXJ0czppfX19fWZ1bmN0aW9uIHIodCxlKXtmb3IodmFyIG49W10sbz17fSxyPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBhPXRbcl0saT1lLmJhc2U/YVswXStlLmJhc2U6YVswXSxzPWFbMV0sbD1hWzJdLGM9YVszXSx1PXtjc3M6cyxtZWRpYTpsLHNvdXJjZU1hcDpjfTtvW2ldP29baV0ucGFydHMucHVzaCh1KTpuLnB1c2gob1tpXT17aWQ6aSxwYXJ0czpbdV19KX1yZXR1cm4gbn1mdW5jdGlvbiBhKHQsZSl7dmFyIG49Zyh0Lmluc2VydEludG8pO2lmKCFuKXRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO3ZhciBvPXhbeC5sZW5ndGgtMV07aWYoXCJ0b3BcIj09PXQuaW5zZXJ0QXQpbz9vLm5leHRTaWJsaW5nP24uaW5zZXJ0QmVmb3JlKGUsby5uZXh0U2libGluZyk6bi5hcHBlbmRDaGlsZChlKTpuLmluc2VydEJlZm9yZShlLG4uZmlyc3RDaGlsZCkseC5wdXNoKGUpO2Vsc2V7aWYoXCJib3R0b21cIiE9PXQuaW5zZXJ0QXQpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO24uYXBwZW5kQ2hpbGQoZSl9fWZ1bmN0aW9uIGkodCl7aWYobnVsbD09PXQucGFyZW50Tm9kZSlyZXR1cm4hMTt0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCk7dmFyIGU9eC5pbmRleE9mKHQpO2U+PTAmJnguc3BsaWNlKGUsMSl9ZnVuY3Rpb24gcyh0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7cmV0dXJuIHQuYXR0cnMudHlwZT1cInRleHQvY3NzXCIsYyhlLHQuYXR0cnMpLGEodCxlKSxlfWZ1bmN0aW9uIGwodCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7cmV0dXJuIHQuYXR0cnMudHlwZT1cInRleHQvY3NzXCIsdC5hdHRycy5yZWw9XCJzdHlsZXNoZWV0XCIsYyhlLHQuYXR0cnMpLGEodCxlKSxlfWZ1bmN0aW9uIGModCxlKXtPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3Quc2V0QXR0cmlidXRlKG4sZVtuXSl9KX1mdW5jdGlvbiB1KHQsZSl7dmFyIG4sbyxyLGE7aWYoZS50cmFuc2Zvcm0mJnQuY3NzKXtpZighKGE9ZS50cmFuc2Zvcm0odC5jc3MpKSlyZXR1cm4gZnVuY3Rpb24oKXt9O3QuY3NzPWF9aWYoZS5zaW5nbGV0b24pe3ZhciBjPXcrKztuPXZ8fCh2PXMoZSkpLG89ZC5iaW5kKG51bGwsbixjLCExKSxyPWQuYmluZChudWxsLG4sYywhMCl9ZWxzZSB0LnNvdXJjZU1hcCYmXCJmdW5jdGlvblwiPT10eXBlb2YgVVJMJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBCbG9iJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBidG9hPyhuPWwoZSksbz1wLmJpbmQobnVsbCxuLGUpLHI9ZnVuY3Rpb24oKXtpKG4pLG4uaHJlZiYmVVJMLnJldm9rZU9iamVjdFVSTChuLmhyZWYpfSk6KG49cyhlKSxvPWYuYmluZChudWxsLG4pLHI9ZnVuY3Rpb24oKXtpKG4pfSk7cmV0dXJuIG8odCksZnVuY3Rpb24oZSl7aWYoZSl7aWYoZS5jc3M9PT10LmNzcyYmZS5tZWRpYT09PXQubWVkaWEmJmUuc291cmNlTWFwPT09dC5zb3VyY2VNYXApcmV0dXJuO28odD1lKX1lbHNlIHIoKX19ZnVuY3Rpb24gZCh0LGUsbixvKXt2YXIgcj1uP1wiXCI6by5jc3M7aWYodC5zdHlsZVNoZWV0KXQuc3R5bGVTaGVldC5jc3NUZXh0PXkoZSxyKTtlbHNle3ZhciBhPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHIpLGk9dC5jaGlsZE5vZGVzO2lbZV0mJnQucmVtb3ZlQ2hpbGQoaVtlXSksaS5sZW5ndGg/dC5pbnNlcnRCZWZvcmUoYSxpW2VdKTp0LmFwcGVuZENoaWxkKGEpfX1mdW5jdGlvbiBmKHQsZSl7dmFyIG49ZS5jc3Msbz1lLm1lZGlhO2lmKG8mJnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIixvKSx0LnN0eWxlU2hlZXQpdC5zdHlsZVNoZWV0LmNzc1RleHQ9bjtlbHNle2Zvcig7dC5maXJzdENoaWxkOyl0LnJlbW92ZUNoaWxkKHQuZmlyc3RDaGlsZCk7dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuKSl9fWZ1bmN0aW9uIHAodCxlLG4pe3ZhciBvPW4uY3NzLHI9bi5zb3VyY2VNYXAsYT12b2lkIDA9PT1lLmNvbnZlcnRUb0Fic29sdXRlVXJscyYmcjsoZS5jb252ZXJ0VG9BYnNvbHV0ZVVybHN8fGEpJiYobz1oKG8pKSxyJiYobys9XCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHIpKSkpK1wiICovXCIpO3ZhciBpPW5ldyBCbG9iKFtvXSx7dHlwZTpcInRleHQvY3NzXCJ9KSxzPXQuaHJlZjt0LmhyZWY9VVJMLmNyZWF0ZU9iamVjdFVSTChpKSxzJiZVUkwucmV2b2tlT2JqZWN0VVJMKHMpfXZhciBiPXt9LG09ZnVuY3Rpb24odCl7dmFyIGU7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpKSxlfX0oZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2J9KSxnPWZ1bmN0aW9uKHQpe3ZhciBlPXt9O3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gdm9pZCAwPT09ZVtuXSYmKGVbbl09dC5jYWxsKHRoaXMsbikpLGVbbl19fShmdW5jdGlvbih0KXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KX0pLHY9bnVsbCx3PTAseD1bXSxoPW4oMTUpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBERUJVRyYmREVCVUcmJlwib2JqZWN0XCIhPXR5cGVvZiBkb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7ZT1lfHx7fSxlLmF0dHJzPVwib2JqZWN0XCI9PXR5cGVvZiBlLmF0dHJzP2UuYXR0cnM6e30sZS5zaW5nbGV0b258fChlLnNpbmdsZXRvbj1tKCkpLGUuaW5zZXJ0SW50b3x8KGUuaW5zZXJ0SW50bz1cImhlYWRcIiksZS5pbnNlcnRBdHx8KGUuaW5zZXJ0QXQ9XCJib3R0b21cIik7dmFyIG49cih0LGUpO3JldHVybiBvKG4sZSksZnVuY3Rpb24odCl7Zm9yKHZhciBhPVtdLGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHM9bltpXSxsPWJbcy5pZF07bC5yZWZzLS0sYS5wdXNoKGwpfWlmKHQpe28ocih0LGUpLGUpfWZvcih2YXIgaT0wO2k8YS5sZW5ndGg7aSsrKXt2YXIgbD1hW2ldO2lmKDA9PT1sLnJlZnMpe2Zvcih2YXIgYz0wO2M8bC5wYXJ0cy5sZW5ndGg7YysrKWwucGFydHNbY10oKTtkZWxldGUgYltsLmlkXX19fX07dmFyIHk9ZnVuY3Rpb24oKXt2YXIgdD1bXTtyZXR1cm4gZnVuY3Rpb24oZSxuKXtyZXR1cm4gdFtlXT1uLHQuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCJcXG5cIil9fSgpfSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cubG9jYXRpb247aWYoIWUpdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7aWYoIXR8fFwic3RyaW5nXCIhPXR5cGVvZiB0KXJldHVybiB0O3ZhciBuPWUucHJvdG9jb2wrXCIvL1wiK2UuaG9zdCxvPW4rZS5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sXCIvXCIpO3JldHVybiB0LnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLGZ1bmN0aW9uKHQsZSl7dmFyIHI9ZS50cmltKCkucmVwbGFjZSgvXlwiKC4qKVwiJC8sZnVuY3Rpb24odCxlKXtyZXR1cm4gZX0pLnJlcGxhY2UoL14nKC4qKSckLyxmdW5jdGlvbih0LGUpe3JldHVybiBlfSk7aWYoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdChyKSlyZXR1cm4gdDt2YXIgYTtyZXR1cm4gYT0wPT09ci5pbmRleE9mKFwiLy9cIik/cjowPT09ci5pbmRleE9mKFwiL1wiKT9uK3I6bytyLnJlcGxhY2UoL15cXC5cXC8vLFwiXCIpLFwidXJsKFwiK0pTT04uc3RyaW5naWZ5KGEpK1wiKVwifSl9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxNykscj1uKDYpLGE9big1KSxpPW4oMjkpLHM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspdFtlXT1hcmd1bWVudHNbZV07aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyl7dmFyIG49aS5nZXRPcHRzLmFwcGx5KHZvaWQgMCx0KTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCxlKXthLmRlZmF1bHQucHJvbWlzZT17cmVzb2x2ZTp0LHJlamVjdDplfSxvLmRlZmF1bHQobiksc2V0VGltZW91dChmdW5jdGlvbigpe3Iub3Blbk1vZGFsKCl9KX0pfX07cy5jbG9zZT1yLm9uQWN0aW9uLHMuZ2V0U3RhdGU9ci5nZXRTdGF0ZSxzLnNldEFjdGlvblZhbHVlPWEuc2V0QWN0aW9uVmFsdWUscy5zdG9wTG9hZGluZz1yLnN0b3BMb2FkaW5nLHMuc2V0RGVmYXVsdHM9aS5zZXREZWZhdWx0cyxlLmRlZmF1bHQ9c30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDApLGE9ci5kZWZhdWx0Lk1PREFMLGk9big0KSxzPW4oMjcpLGw9bigyOCksYz1uKDEpO2UuaW5pdD1mdW5jdGlvbih0KXtvLmdldE5vZGUoYSl8fChkb2N1bWVudC5ib2R5fHxjLnRocm93RXJyKFwiWW91IGNhbiBvbmx5IHVzZSBTd2VldEFsZXJ0IEFGVEVSIHRoZSBET00gaGFzIGxvYWRlZCFcIikscy5kZWZhdWx0KCksaS5kZWZhdWx0KCkpLGkuaW5pdE1vZGFsQ29udGVudCh0KSxsLmRlZmF1bHQodCl9LGUuZGVmYXVsdD1lLmluaXR9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApLHI9by5kZWZhdWx0Lk1PREFMO2UubW9kYWxNYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrcisnXCI+PC9kaXY+JyxlLmRlZmF1bHQ9ZS5tb2RhbE1hcmt1cH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCkscj1vLmRlZmF1bHQuT1ZFUkxBWSxhPSc8ZGl2IFxcbiAgICBjbGFzcz1cIicrcisnXCJcXG4gICAgdGFiSW5kZXg9XCItMVwiPlxcbiAgPC9kaXY+JztlLmRlZmF1bHQ9YX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCkscj1vLmRlZmF1bHQuSUNPTjtlLmVycm9ySWNvbk1hcmt1cD1mdW5jdGlvbigpe3ZhciB0PXIrXCItLWVycm9yXCIsZT10K1wiX19saW5lXCI7cmV0dXJuJ1xcbiAgICA8ZGl2IGNsYXNzPVwiJyt0KydfX3gtbWFya1wiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVwiJytlK1wiIFwiK2UrJy0tbGVmdFwiPjwvc3Bhbj5cXG4gICAgICA8c3BhbiBjbGFzcz1cIicrZStcIiBcIitlKyctLXJpZ2h0XCI+PC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICd9LGUud2FybmluZ0ljb25NYXJrdXA9ZnVuY3Rpb24oKXt2YXIgdD1yK1wiLS13YXJuaW5nXCI7cmV0dXJuJ1xcbiAgICA8c3BhbiBjbGFzcz1cIicrdCsnX19ib2R5XCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XCInK3QrJ19fZG90XCI+PC9zcGFuPlxcbiAgICA8L3NwYW4+XFxuICAnfSxlLnN1Y2Nlc3NJY29uTWFya3VwPWZ1bmN0aW9uKCl7dmFyIHQ9citcIi0tc3VjY2Vzc1wiO3JldHVybidcXG4gICAgPHNwYW4gY2xhc3M9XCInK3QrXCJfX2xpbmUgXCIrdCsnX19saW5lLS1sb25nXCI+PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cIicrdCtcIl9fbGluZSBcIit0KydfX2xpbmUtLXRpcFwiPjwvc3Bhbj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cIicrdCsnX19yaW5nXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XCInK3QrJ19faGlkZS1jb3JuZXJzXCI+PC9kaXY+XFxuICAnfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCkscj1vLmRlZmF1bHQuQ09OVEVOVDtlLmNvbnRlbnRNYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrcisnXCI+XFxuXFxuICA8L2Rpdj5cXG4nfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigwKSxyPW8uZGVmYXVsdC5CVVRUT05fQ09OVEFJTkVSLGE9by5kZWZhdWx0LkJVVFRPTixpPW8uZGVmYXVsdC5CVVRUT05fTE9BREVSO2UuYnV0dG9uTWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK3IrJ1wiPlxcblxcbiAgICA8YnV0dG9uXFxuICAgICAgY2xhc3M9XCInK2ErJ1wiXFxuICAgID48L2J1dHRvbj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cIicraSsnXCI+XFxuICAgICAgPGRpdj48L2Rpdj5cXG4gICAgICA8ZGl2PjwvZGl2PlxcbiAgICAgIDxkaXY+PC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgPC9kaXY+XFxuJ30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oNCkscj1uKDIpLGE9bigwKSxpPWEuZGVmYXVsdC5JQ09OLHM9YS5kZWZhdWx0LklDT05fQ1VTVE9NLGw9W1wiZXJyb3JcIixcIndhcm5pbmdcIixcInN1Y2Nlc3NcIixcImluZm9cIl0sYz17ZXJyb3I6ci5lcnJvckljb25NYXJrdXAoKSx3YXJuaW5nOnIud2FybmluZ0ljb25NYXJrdXAoKSxzdWNjZXNzOnIuc3VjY2Vzc0ljb25NYXJrdXAoKX0sdT1mdW5jdGlvbih0LGUpe3ZhciBuPWkrXCItLVwiK3Q7ZS5jbGFzc0xpc3QuYWRkKG4pO3ZhciBvPWNbdF07byYmKGUuaW5uZXJIVE1MPW8pfSxkPWZ1bmN0aW9uKHQsZSl7ZS5jbGFzc0xpc3QuYWRkKHMpO3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7bi5zcmM9dCxlLmFwcGVuZENoaWxkKG4pfSxmPWZ1bmN0aW9uKHQpe2lmKHQpe3ZhciBlPW8uaW5qZWN0RWxJbnRvTW9kYWwoci5pY29uTWFya3VwKTtsLmluY2x1ZGVzKHQpP3UodCxlKTpkKHQsZSl9fTtlLmRlZmF1bHQ9Zn0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMikscj1uKDQpLGE9ZnVuY3Rpb24odCl7bmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcyhcIkFwcGxlV2ViS2l0XCIpJiYodC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHQub2Zmc2V0SGVpZ2h0LHQuc3R5bGUuZGlzcGxheT1cIlwiKX07ZS5pbml0VGl0bGU9ZnVuY3Rpb24odCl7aWYodCl7dmFyIGU9ci5pbmplY3RFbEludG9Nb2RhbChvLnRpdGxlTWFya3VwKTtlLnRleHRDb250ZW50PXQsYShlKX19LGUuaW5pdFRleHQ9ZnVuY3Rpb24odCl7aWYodCl7dmFyIGU9ci5pbmplY3RFbEludG9Nb2RhbChvLnRleHRNYXJrdXApO2UudGV4dENvbnRlbnQ9dCxhKGUpfX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9big0KSxhPW4oMCksaT1hLmRlZmF1bHQuQlVUVE9OLHM9YS5kZWZhdWx0LkRBTkdFUl9CVVRUT04sbD1uKDMpLGM9bigyKSx1PW4oNiksZD1uKDUpLGY9ZnVuY3Rpb24odCxlLG4pe3ZhciByPWUudGV4dCxhPWUudmFsdWUsZj1lLmNsYXNzTmFtZSxwPWUuY2xvc2VNb2RhbCxiPW8uc3RyaW5nVG9Ob2RlKGMuYnV0dG9uTWFya3VwKSxtPWIucXVlcnlTZWxlY3RvcihcIi5cIitpKSxnPWkrXCItLVwiK3Q7bS5jbGFzc0xpc3QuYWRkKGcpLGYmJm0uY2xhc3NMaXN0LmFkZChmKSxuJiZ0PT09bC5DT05GSVJNX0tFWSYmbS5jbGFzc0xpc3QuYWRkKHMpLG0udGV4dENvbnRlbnQ9cjt2YXIgdj17fTtyZXR1cm4gdlt0XT1hLGQuc2V0QWN0aW9uVmFsdWUodiksZC5zZXRBY3Rpb25PcHRpb25zRm9yKHQse2Nsb3NlTW9kYWw6cH0pLG0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtyZXR1cm4gdS5vbkFjdGlvbih0KX0pLGJ9LHA9ZnVuY3Rpb24odCxlKXt2YXIgbj1yLmluamVjdEVsSW50b01vZGFsKGMuZm9vdGVyTWFya3VwKTtmb3IodmFyIG8gaW4gdCl7dmFyIGE9dFtvXSxpPWYobyxhLGUpO2EudmlzaWJsZSYmbi5hcHBlbmRDaGlsZChpKX0wPT09bi5jaGlsZHJlbi5sZW5ndGgmJm4ucmVtb3ZlKCl9O2UuZGVmYXVsdD1wfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigzKSxyPW4oNCksYT1uKDIpLGk9big1KSxzPW4oNiksbD1uKDApLGM9bC5kZWZhdWx0LkNPTlRFTlQsdT1mdW5jdGlvbih0KXt0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKHQpe3ZhciBlPXQudGFyZ2V0LG49ZS52YWx1ZTtpLnNldEFjdGlvblZhbHVlKG4pfSksdC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIixmdW5jdGlvbih0KXtpZihcIkVudGVyXCI9PT10LmtleSlyZXR1cm4gcy5vbkFjdGlvbihvLkNPTkZJUk1fS0VZKX0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LmZvY3VzKCksaS5zZXRBY3Rpb25WYWx1ZShcIlwiKX0sMCl9LGQ9ZnVuY3Rpb24odCxlLG4pe3ZhciBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSkscj1jK1wiX19cIitlO28uY2xhc3NMaXN0LmFkZChyKTtmb3IodmFyIGEgaW4gbil7dmFyIGk9blthXTtvW2FdPWl9XCJpbnB1dFwiPT09ZSYmdShvKSx0LmFwcGVuZENoaWxkKG8pfSxmPWZ1bmN0aW9uKHQpe2lmKHQpe3ZhciBlPXIuaW5qZWN0RWxJbnRvTW9kYWwoYS5jb250ZW50TWFya3VwKSxuPXQuZWxlbWVudCxvPXQuYXR0cmlidXRlcztcInN0cmluZ1wiPT10eXBlb2Ygbj9kKGUsbixvKTplLmFwcGVuZENoaWxkKG4pfX07ZS5kZWZhdWx0PWZ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9bigyKSxhPWZ1bmN0aW9uKCl7dmFyIHQ9by5zdHJpbmdUb05vZGUoci5vdmVybGF5TWFya3VwKTtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHQpfTtlLmRlZmF1bHQ9YX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oNSkscj1uKDYpLGE9bigxKSxpPW4oMykscz1uKDApLGw9cy5kZWZhdWx0Lk1PREFMLGM9cy5kZWZhdWx0LkJVVFRPTix1PXMuZGVmYXVsdC5PVkVSTEFZLGQ9ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLGcoKX0sZj1mdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksdigpfSxwPWZ1bmN0aW9uKHQpe2lmKG8uZGVmYXVsdC5pc09wZW4pc3dpdGNoKHQua2V5KXtjYXNlXCJFc2NhcGVcIjpyZXR1cm4gci5vbkFjdGlvbihpLkNBTkNFTF9LRVkpfX0sYj1mdW5jdGlvbih0KXtpZihvLmRlZmF1bHQuaXNPcGVuKXN3aXRjaCh0LmtleSl7Y2FzZVwiVGFiXCI6cmV0dXJuIGQodCl9fSxtPWZ1bmN0aW9uKHQpe2lmKG8uZGVmYXVsdC5pc09wZW4pcmV0dXJuXCJUYWJcIj09PXQua2V5JiZ0LnNoaWZ0S2V5P2YodCk6dm9pZCAwfSxnPWZ1bmN0aW9uKCl7dmFyIHQ9YS5nZXROb2RlKGMpO3QmJih0LnRhYkluZGV4PTAsdC5mb2N1cygpKX0sdj1mdW5jdGlvbigpe3ZhciB0PWEuZ2V0Tm9kZShsKSxlPXQucXVlcnlTZWxlY3RvckFsbChcIi5cIitjKSxuPWUubGVuZ3RoLTEsbz1lW25dO28mJm8uZm9jdXMoKX0sdz1mdW5jdGlvbih0KXt0W3QubGVuZ3RoLTFdLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsYil9LHg9ZnVuY3Rpb24odCl7dFswXS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLG0pfSxoPWZ1bmN0aW9uKCl7dmFyIHQ9YS5nZXROb2RlKGwpLGU9dC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2MpO2UubGVuZ3RoJiYodyhlKSx4KGUpKX0seT1mdW5jdGlvbih0KXtpZihhLmdldE5vZGUodSk9PT10LnRhcmdldClyZXR1cm4gci5vbkFjdGlvbihpLkNBTkNFTF9LRVkpfSxrPWZ1bmN0aW9uKHQpe3ZhciBlPWEuZ2V0Tm9kZSh1KTtlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHkpLHQmJmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIseSl9LE89ZnVuY3Rpb24odCl7by5kZWZhdWx0LnRpbWVyJiZjbGVhclRpbWVvdXQoby5kZWZhdWx0LnRpbWVyKSx0JiYoby5kZWZhdWx0LnRpbWVyPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIHIub25BY3Rpb24oaS5DQU5DRUxfS0VZKX0sdCkpfSxfPWZ1bmN0aW9uKHQpe3QuY2xvc2VPbkVzYz9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIixwKTpkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIixwKSx0LmRhbmdlck1vZGU/ZygpOnYoKSxoKCksayh0LmNsb3NlT25DbGlja091dHNpZGUpLE8odC50aW1lcil9O2UuZGVmYXVsdD1ffSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPW4oMyksYT1uKDMwKSxpPXt0aXRsZTpudWxsLHRleHQ6bnVsbCxpY29uOm51bGwsYnV0dG9uczpyLmRlZmF1bHRCdXR0b25MaXN0LGNvbnRlbnQ6bnVsbCxjbGFzc05hbWU6bnVsbCxjbG9zZU9uQ2xpY2tPdXRzaWRlOiEwLGNsb3NlT25Fc2M6ITAsZGFuZ2VyTW9kZTohMSx0aW1lcjpudWxsfSxzPU9iamVjdC5hc3NpZ24oe30saSk7ZS5zZXREZWZhdWx0cz1mdW5jdGlvbih0KXtzPU9iamVjdC5hc3NpZ24oe30saSx0KX07dmFyIGw9ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5idXR0b24sbj10JiZ0LmJ1dHRvbnM7cmV0dXJuIHZvaWQgMCE9PWUmJnZvaWQgMCE9PW4mJm8udGhyb3dFcnIoXCJDYW5ub3Qgc2V0IGJvdGggJ2J1dHRvbicgYW5kICdidXR0b25zJyBvcHRpb25zIVwiKSx2b2lkIDAhPT1lP3tjb25maXJtOmV9Om59LGM9ZnVuY3Rpb24odCl7cmV0dXJuIG8ub3JkaW5hbFN1ZmZpeE9mKHQrMSl9LHU9ZnVuY3Rpb24odCxlKXtvLnRocm93RXJyKGMoZSkrXCIgYXJndW1lbnQgKCdcIit0K1wiJykgaXMgaW52YWxpZFwiKX0sZD1mdW5jdGlvbih0LGUpe3ZhciBuPXQrMSxyPWVbbl07by5pc1BsYWluT2JqZWN0KHIpfHx2b2lkIDA9PT1yfHxvLnRocm93RXJyKFwiRXhwZWN0ZWQgXCIrYyhuKStcIiBhcmd1bWVudCAoJ1wiK3IrXCInKSB0byBiZSBhIHBsYWluIG9iamVjdFwiKX0sZj1mdW5jdGlvbih0LGUpe3ZhciBuPXQrMSxyPWVbbl07dm9pZCAwIT09ciYmby50aHJvd0VycihcIlVuZXhwZWN0ZWQgXCIrYyhuKStcIiBhcmd1bWVudCAoXCIrcitcIilcIil9LHA9ZnVuY3Rpb24odCxlLG4scil7dmFyIGE9dHlwZW9mIGUsaT1cInN0cmluZ1wiPT09YSxzPWUgaW5zdGFuY2VvZiBFbGVtZW50O2lmKGkpe2lmKDA9PT1uKXJldHVybnt0ZXh0OmV9O2lmKDE9PT1uKXJldHVybnt0ZXh0OmUsdGl0bGU6clswXX07aWYoMj09PW4pcmV0dXJuIGQobixyKSx7aWNvbjplfTt1KGUsbil9ZWxzZXtpZihzJiYwPT09bilyZXR1cm4gZChuLHIpLHtjb250ZW50OmV9O2lmKG8uaXNQbGFpbk9iamVjdChlKSlyZXR1cm4gZihuLHIpLGU7dShlLG4pfX07ZS5nZXRPcHRzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXRbZV09YXJndW1lbnRzW2VdO3ZhciBuPXt9O3QuZm9yRWFjaChmdW5jdGlvbihlLG8pe3ZhciByPXAoMCxlLG8sdCk7T2JqZWN0LmFzc2lnbihuLHIpfSk7dmFyIG89bChuKTtyZXR1cm4gbi5idXR0b25zPXIuZ2V0QnV0dG9uTGlzdE9wdHMobyksZGVsZXRlIG4uYnV0dG9uLG4uY29udGVudD1hLmdldENvbnRlbnRPcHRzKG4uY29udGVudCksT2JqZWN0LmFzc2lnbih7fSxpLHMsbil9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPXtlbGVtZW50OlwiaW5wdXRcIixhdHRyaWJ1dGVzOntwbGFjZWhvbGRlcjpcIlwifX07ZS5nZXRDb250ZW50T3B0cz1mdW5jdGlvbih0KXt2YXIgZT17fTtyZXR1cm4gby5pc1BsYWluT2JqZWN0KHQpP09iamVjdC5hc3NpZ24oZSx0KTp0IGluc3RhbmNlb2YgRWxlbWVudD97ZWxlbWVudDp0fTpcImlucHV0XCI9PT10P3I6bnVsbH19XSl9KTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnZlcnNpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfc3dlZXRhbGVydCA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfc3dlZXRhbGVydDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zd2VldGFsZXJ0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gcGx1Z2luKFZ1ZSkge1xuICBWdWUucHJvdG90eXBlLiRzd2FsID0gX3N3ZWV0YWxlcnQyLmRlZmF1bHQ7XG59XG5cbi8vIEluc3RhbGwgYnkgZGVmYXVsdCBpZiB1c2luZyB0aGUgc2NyaXB0IHRhZ1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgd2luZG93LlZ1ZS51c2UocGx1Z2luKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gcGx1Z2luO1xuXG52YXIgdmVyc2lvbiA9ICdfX1ZFUlNJT05fXyc7XG4vLyBFeHBvcnQgYWxsIGNvbXBvbmVudHMgdG9vXG5leHBvcnRzLnZlcnNpb24gPSB2ZXJzaW9uO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN3YWwvZGlzdC92dWUtc3dhbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xuXG5pbXBvcnQgVnVlU3dhbCBmcm9tICd2dWUtc3dhbCdcbmltcG9ydCBUcmVlc2VsZWN0IGZyb20gJ0ByaW9waGFlL3Z1ZS10cmVlc2VsZWN0J1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxuaW1wb3J0IE1hdGVyaWFsUm93IGZyb20gXCIuL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWVcIjtcblxuXG5cblZ1ZS51c2UoVnVlUm91dGVyKTtcblZ1ZS51c2UoVnVleCk7XG5WdWUudXNlKFZ1ZVN3YWwpO1xuXG5WdWUuY29tcG9uZW50KCdtYXRlcmlhbC1yb3cnLCBNYXRlcmlhbFJvdyk7XG5WdWUuY29tcG9uZW50KCd0cmVlc2VsZWN0JywgVHJlZXNlbGVjdCk7XG4vLyBCb29zdHJhcFxuLy8gRmlyc3Qgd2UgbWFrZSBheGlvcyBnbG9iYWx5IGFjY2Vzc2libGVcbndpbmRvdy5heGlvcyA9IGF4aW9zO1xuXG4vLyBOZXh0IHdlIGRvIHNvbWUgdnVlIHJvdXRlciwgc3RhdGVzLCBhbmQgYXBwIGluaXRcbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xuICAgIHJvdXRlczogcm91dGVzLFxuICAgIG1vZGU6ICdoaXN0b3J5Jyxcbn0pO1xuXG5yb3V0ZXIuYWZ0ZXJFYWNoKCh0bywgZnJvbSkgPT4ge1xuICAgIGlmICh0eXBlb2YgdG8ubWV0YS50aXRsZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRvLm1ldGEudGl0bGU7XG4gICAgfVxufSk7XG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG4gICAgcm91dGVyLFxuICAgIHN0b3JlLFxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTAwNDRiZGYyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9NYXRlcmlhbFJvdy52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwibGFzdCAyIHZlcnNpb25zXFxcIixcXFwiPiA1JSBpbiBCRVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9LFxcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCIsXFxcInRyYW5zZm9ybS1pbmxpbmUtZW52aXJvbm1lbnQtdmFyaWFibGVzXFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wJmJ1c3RDYWNoZSEuL01hdGVyaWFsUm93LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDA0NGJkZjJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vTWF0ZXJpYWxSb3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcUm93c1xcXFxNYXRlcmlhbFJvdy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkgeyAgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHsgIGNvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTAwNDRiZGYyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDA0NGJkZjJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4nICsgJyAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jvd3MvTWF0ZXJpYWxSb3cudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJjb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogXCIvbG9naW5cIixcclxuICAgICAgICBuYW1lOiBcImxvZ2luXCIsXHJcbiAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9Mb2dpbi52dWUnKSxcclxuICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIsSQxINuZyBuaOG6rXBcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgICBuYW1lOiBcImJhc2VcIixcclxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL0Jhc2UudnVlJyksXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogXCJkYXNoYm9hcmRcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFzZS5kYXNoYm9hcmRcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvRGFzaGJvYXJkLnZ1ZScpLFxyXG4gICAgICAgICAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkLhuqNuZyB0aMO0bmcgYsOhb1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IFwid29ya3NcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFzZS53b3Jrc1wiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9Xb3Jrcy52dWUnKSxcclxuICAgICAgICAgICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEYW5oIHPDoWNoIGPDtG5nIHRyxrDhu51uZ1wiLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBcIndvcmsvOmlkXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImJhc2Uud29ya1JlcG9ydFwiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9Xb3JrUmVwb3J0LnZ1ZScpLFxyXG4gICAgICAgICAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkLDoW8gY8OhbyBjaGkgdGnhur90XCIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IFwibWF0ZXJpYWxzXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImJhc2UubWF0ZXJpYWxzXCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4vY29tcG9uZW50cy9NYXRlcmlhbHMudnVlXCIpLFxyXG4gICAgICAgICAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRhbmggc8OhY2ggduG6rXQgdMawXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcclxuVnVlLnVzZShWdWV4KTtcclxuXHJcblxyXG5cclxuY29uc3Qgc3RvcmUgPSBuZXcgVnVleC5TdG9yZSh7XHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb25Ub2tlbjogXCJcIixcclxuICAgICAgICBhcGlCYXNlOiBcImh0dHA6Ly90cmFja2VyLmRldi9hcGkvdjFcIixcclxuICAgICAgICB1c2VyOiB7fSxcclxuICAgICAgICBjYXRlZ29yeUxpc3Q6IHt9LFxyXG5cclxuICAgIH0sXHJcbiAgICBtdXRhdGlvbnM6IHtcclxuICAgICAgICBTRVRfQVVUSE9SSVpBVElPTl9UT0tFTihzdGF0ZSwgdG9rZW4pIHtcclxuICAgICAgICAgICAgc3RhdGUuYXV0aG9yaXphdGlvblRva2VuID0gdG9rZW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBTRVRfVVNFUihzdGF0ZSwgdXNlck9iamVjdCkge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyID0gdXNlck9iamVjdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFVQREFURV9DQVRFR09SWV9MSVNUKHN0YXRlLCBsaXN0KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNhdGVnb3J5TGlzdCA9IGxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSA3Il0sInNvdXJjZVJvb3QiOiIifQ==