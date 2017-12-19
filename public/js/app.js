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
        },
        addChildCategory: function addChildCategory(row) {
            this.$emit('new-category', { id: row.id, name: row.name });
        },
        addMaterials: function addMaterials(row) {
            this.$emit('new-materials', { id: row.id, name: row.name });
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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"MaterialRow.vue","sourceRoot":""}]);

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
            _vm._v("\n        " + _vm._s(_vm.row.name) + "\n        "),
            _vm.row.depth === 0
              ? _c(
                  "span",
                  {
                    staticClass: "inline-control",
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        _vm.addChildCategory(_vm.row)
                      }
                    }
                  },
                  [_vm._v("Thêm danh mục")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.row.depth === 1
              ? _c(
                  "span",
                  {
                    staticClass: "inline-control",
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        _vm.addMaterials(_vm.row)
                      }
                    }
                  },
                  [_vm._v("Thêm vật tư")]
                )
              : _vm._e()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJpb3BoYWUvdnVlLXRyZWVzZWxlY3QvZGlzdC92dWUtdHJlZXNlbGVjdC5taW4uanMiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWU/NjFhNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZT8zOTAxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZT8zMTIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN3YWwvZGlzdC92dWUtc3dhbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3MiXSwibmFtZXMiOlsiZSIsInQiLCJleHBvcnRzIiwibW9kdWxlIiwiVnVlVHJlZXNlbGVjdCIsImkiLCJuIiwicyIsImwiLCJjYWxsIiwibSIsImMiLCJkIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwiciIsImEiLCJvcHRpb25zIiwicmVuZGVyIiwic3RhdGljUmVuZGVyRm5zIiwiX2NvbXBpbGVkIiwiZnVuY3Rpb25hbCIsIl9zY29wZUlkIiwidSIsIiR2bm9kZSIsInNzckNvbnRleHQiLCJwYXJlbnQiLCJfX1ZVRV9TU1JfQ09OVEVYVF9fIiwiX3JlZ2lzdGVyZWRDb21wb25lbnRzIiwiYWRkIiwiX3NzclJlZ2lzdGVyIiwiaCIsImJlZm9yZUNyZWF0ZSIsIl9pbmplY3RTdHlsZXMiLCJjb25jYXQiLCJlc01vZHVsZSIsInNlbGYiLCJGdW5jdGlvbiIsIlN5bWJvbCIsInR5cGUiLCJidXR0b24iLCJ4IiwiZ2V0UHJvdG90eXBlT2YiLCJrZXlzIiwibGVuZ3RoIiwiTiIsIlMiLCJBcnJheSIsImlzQXJyYXkiLCJmaW5kSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZiIsInZhbHVlIiwid3JpdGFibGUiLCJ2IiwibGV2ZWwiLCJpbmRleCIsIl8iLCJDIiwibWVzc2FnZSIsIlN0cmluZyIsInkiLCJiIiwiZyIsIkUiLCJPIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInciLCJwcm92aWRlIiwiaW5zdGFuY2UiLCJVTkNIRUNLRUQiLCJJTkRFVEVSTUlOQVRFIiwiQ0hFQ0tFRCIsIlVOTUFUQ0hFRCIsIkRFU0NFTkRBTlRfTUFUQ0hFRCIsIk1BVENIRUQiLCJwcm9wcyIsImF1dG9mb2N1cyIsIkJvb2xlYW4iLCJiYWNrc3BhY2VSZW1vdmVzIiwiYnJhbmNoTm9kZXNGaXJzdCIsImNsZWFyYWJsZSIsImNsZWFyQWxsVGV4dCIsImNsZWFyT25TZWxlY3QiLCJjbGVhclZhbHVlVGV4dCIsImNsb3NlT25TZWxlY3QiLCJkZWxldGVSZW1vdmVzIiwiZGlzYWJsZUJyYW5jaE5vZGVzIiwiZGlzYWJsZWQiLCJkZWZhdWx0RXhwYW5kTGV2ZWwiLCJOdW1iZXIiLCJlc2NhcGVDbGVhcnNWYWx1ZSIsImZsYXQiLCJpZCIsImxpbWl0IiwibGltaXRUZXh0IiwibG9hZENoaWxkcmVuRXJyb3JUZXh0IiwibG9hZENoaWxkcmVuT3B0aW9ucyIsImxvYWRpbmdUZXh0IiwibG9hZFJvb3RPcHRpb25zIiwibWF4SGVpZ2h0IiwibXVsdGlwbGUiLCJub0NoaWxkcmVuVGV4dCIsIm5vUmVzdWx0c1RleHQiLCJub09wdGlvbnNUZXh0Iiwib3BlbkRpcmVjdGlvbiIsIm9wZW5PbkNsaWNrIiwib3Blbk9uRm9jdXMiLCJwbGFjZWhvbGRlciIsInJldGFpblNjcm9sbFBvc2l0aW9uIiwicmV0cnlUZXh0IiwicmV0cnlUaXRsZSIsInNlYXJjaGFibGUiLCJzaG93Q291bnQiLCJzaG93Q291bnRPZiIsInZhbGlkYXRvciIsInNob3dDb3VudE9uU2VhcmNoIiwic29ydFZhbHVlQnkiLCJzdWJJdGVtc0xpbWl0IiwidGFiSW5kZXgiLCJkYXRhIiwiaW50ZXJuYWxWYWx1ZSIsImlzRm9jdXNlZCIsImlzT3BlbiIsIm5vZGVDaGVja2VkU3RhdGVNYXAiLCJjcmVhdGUiLCJub2RlTWFwIiwibm9ybWFsaXplZE9wdGlvbnMiLCJub1NlYXJjaFJlc3VsdHMiLCJvcHRpbWl6ZWRIZWlnaHQiLCJwcmVmZmVyZWRPcGVuRGlyZWN0aW9uIiwicm9vdE9wdGlvbnNMb2FkZWQiLCJsb2FkaW5nUm9vdE9wdGlvbnMiLCJsb2FkaW5nUm9vdE9wdGlvbnNFcnJvciIsInNlYXJjaGluZ0NvdW50Iiwic2VhcmNoaW5nIiwic2VhcmNoUXVlcnkiLCJzZWxlY3RlZE5vZGVNYXAiLCJsYXN0U2Nyb2xsUG9zaXRpb24iLCJjb21wdXRlZCIsInNlbGVjdGVkTm9kZXNOdW1iZXIiLCJoYXNWYWx1ZSIsInNlbGVjdGVkTm9kZXMiLCJtYXAiLCJnZXROb2RlIiwic2luZ2xlIiwidmlzaWJsZVZhbHVlIiwic2xpY2UiLCJoYXNFeGNlZWRlZExpbWl0Iiwic2hvdWxkU2hvd0NsZWFySWNvbiIsInNob3dDb3VudE9uU2VhcmNoQ29tcHV0ZWQiLCJ3YXRjaCIsImNsb3NlTWVudSIsImJ1aWxkTm9kZUNoZWNrZWRTdGF0ZU1hcCIsImhhbmRsZVNlYXJjaCIsIiRlbWl0Iiwic29ydFZhbHVlIiwiZ2V0VmFsdWUiLCJidWlsZFNlbGVjdGVkTm9kZU1hcCIsIm1ldGhvZHMiLCJ2ZXJpZnlQcm9wcyIsInJlc2V0RmxhZ3MiLCJfYmx1ck9uU2VsZWN0IiwiX3dhc0NsaWNrZWRPblZhbHVlSXRlbSIsImluaXRpYWxpemUiLCJpbml0aWFsaXplUm9vdE9wdGlvbnMiLCJpbml0aWFsaXplVmFsdWUiLCJsYWJlbCIsImFuY2VzdG9ycyIsInBhcmVudE5vZGUiLCJpc1Vua25vd25Ob2RlIiwiaXNMZWFmIiwiaXNCcmFuY2giLCJpc1NlbGVjdGVkIiwiY2hlY2tJZkJyYW5jaE5vZGUiLCJ0cmF2ZXJzZURlc2NlbmRhbnRzIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwidHJhdmVyc2VBbmNlc3RvcnMiLCJ0cmF2ZXJzZUFsbE5vZGVzIiwidG9nZ2xlQ2xpY2tPdXRzaWRlRXZlbnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGlja091dHNpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZm9jdXNJbnB1dCIsIiRyZWZzIiwiYmx1cklucHV0IiwiaGFuZGxlTW91c2VEb3duIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCIkZWwiLCJjb250YWlucyIsInRhcmdldCIsIm9wZW5NZW51IiwiaGFuZGxlTW91c2VEb3duT25DbGVhciIsImNsZWFyIiwiaGFuZGxlTW91c2VEb3duT25BcnJvdyIsInRvZ2dsZU1lbnUiLCJ3cmFwcGVyIiwiZXhwYW5kc09uU2VhcmNoIiwiaGFzTWF0Y2hlZENoaWxkIiwiaXNNYXRjaGVkIiwidG9Mb3dlckNhc2UiLCJBTExfREVTQ0VOREFOVFMiLCJMRUFGX0RFU0NFTkRBTlRTIiwiQUxMX0NISUxEUkVOIiwiTEVBRl9DSElMRFJFTiIsIm1lbnUiLCJzY3JvbGxUb3AiLCIkbmV4dFRpY2siLCJhZGp1c3RQb3NpdGlvbiIsInJlc3RvcmVTY3JvbGxQb3NpdGlvbiIsImxvYWRPcHRpb25zIiwidG9nZ2xlRXhwYW5kZWQiLCJpc0V4cGFuZGVkIiwibm9ybWFsaXplIiwiY2hlY2tEdXBsaWNhdGlvbiIsInZlcmlmeU5vZGVTaGFwZSIsImlzRGlzYWJsZWQiLCJpc1Jvb3ROb2RlIiwicmF3IiwiaXNMb2FkZWQiLCJpc1BlbmRpbmciLCJsb2FkaW5nQ2hpbGRyZW5FcnJvciIsImNvdW50IiwiZmlsdGVyIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlbGVjdCIsIl9zZWxlY3ROb2RlIiwiX2Rlc2VsZWN0Tm9kZSIsImFkZFZhbHVlIiwiZXZlcnkiLCJyZW1vdmVWYWx1ZSIsInB1c2giLCJtYXliZVJlbW92ZUxhc3RWYWx1ZSIsInNvcnQiLCJ3aW5kb3ciLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJpbm5lckhlaWdodCIsImJvdHRvbSIsIk1hdGgiLCJtaW4iLCJjcmVhdGVkIiwibW91bnRlZCIsImRlc3Ryb3llZCIsIkQiLCJpbnB1dCIsImZvY3VzIiwiYmx1ciIsImhhbmRsZU1vdXNlRG93bk9uVmFsdWUiLCJNIiwibmFtZSIsImluamVjdCIsIkEiLCIkY3JlYXRlRWxlbWVudCIsIl9zZWxmIiwiX2MiLCJzdGF0aWNDbGFzcyIsIl90IiwiX3YiLCJfcyIsIkwiLCJUIiwiViIsIlIiLCJrIiwiSSIsIiQiLCJCQUNLU1BBQ0UiLCJFU0NBUEUiLCJERUxFVEUiLCJCIiwiaW5wdXRXaWR0aCIsIm5lZWRzQXV0b1NpemUiLCJ1cGRhdGVkIiwidXBkYXRlSW5wdXRXaWR0aCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbklucHV0Iiwib25LZXlEb3duIiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibWV0YUtleSIsIndoaWNoIiwia2V5Q29kZSIsIm9uTW91c2VEb3duIiwicmVuZGVySW5wdXRXcmFwcGVyIiwiY2xhc3MiLCJyZW5kZXJJbnB1dCIsInJlbmRlclNpemVyIiwib24iLCJrZXlkb3duIiwicmVmIiwiYXR0cnMiLCJhdXRvY29tcGxldGUiLCJkb21Qcm9wcyIsInN0eWxlIiwid2lkdGgiLCJtb3VzZWRvd24iLCJ0ZXh0Q29udGVudCIsIm1heCIsInNpemVyIiwic2Nyb2xsV2lkdGgiLCJqIiwiRiIsInoiLCJQIiwiY29tcG9uZW50cyIsIlBsYWNlaG9sZGVyIiwiU2VhcmNoSW5wdXQiLCJtaXhpbnMiLCJIIiwidGFnIiwiYXBwZWFyIiwiX2wiLCJrZXkiLCJfZSIsIlEiLCJLIiwiVyIsIlUiLCJxIiwiWCIsIkoiLCJHIiwiWSIsIloiLCJlZSIsInRlIiwibmUiLCJpZSIsInNlIiwibm9kZSIsInJlcXVpcmVkIiwiY2hlY2tlZFN0YXRlIiwic2hvdWxkRXhwYW5kIiwiaGFuZGxlTW91c2VEb3duT25PcHRpb24iLCJoYW5kbGVNb3VzZURvd25Pbk9wdGlvbkFycm93Iiwib2UiLCJyZSIsIl9tIiwidGl0bGUiLCJjbGljayIsImFlIiwibGUiLCJjZSIsInVlIiwiZGUiLCJoZSIsInBlIiwiVHJlZXNlbGVjdE9wdGlvbiIsIlZhbHVlQ29tcG9uZW50IiwiZmUiLCJ2ZSIsIm1lIiwiQ2UiLCJ5ZSIsImJlIiwiZ2UiLCJjaGFyQ29kZUF0IiwiYXBwbHkiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiYXJndW1lbnRzIiwiVHlwZUVycm9yIiwibGVhZGluZyIsIm1heFdhaXQiLCJ0cmFpbGluZyIsImNhbmNlbCIsImZsdXNoIiwiRGF0ZSIsIm5vdyIsImV2YWwiLCJ2YWx1ZU9mIiwicmVwbGFjZSIsInRlc3QiLCJOYU4iLCJwYXJzZUludCIsInRvU3RyaW5nVGFnIiwidG9TdHJpbmciLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwiaXRlbSIsImNvbnRlbnQiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwiam9pbiIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImNzc01hcHBpbmciLCJidG9hIiwic291cmNlTWFwcGluZyIsInRvQ29tbWVudCIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsInNvdXJjZU1hcCIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibGlzdFRvU3R5bGVzIiwicGFyZW50SWQiLCJzdHlsZXMiLCJuZXdTdHlsZXMiLCJjc3MiLCJtZWRpYSIsInBhcnQiLCJwYXJ0cyIsIndlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwicm9vdCIsImZhY3RvcnkiLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZ2V0dGVyIiwiZ2V0RGVmYXVsdCIsImdldE1vZHVsZUV4cG9ydHMiLCJvYmplY3QiLCJwcm9wZXJ0eSIsImRlZmluZSIsImFtZCIsInN3YWwiLCJDTEFTU19OQU1FUyIsIk1PREFMIiwiT1ZFUkxBWSIsIlNIT1dfTU9EQUwiLCJNT0RBTF9USVRMRSIsIk1PREFMX1RFWFQiLCJJQ09OIiwiSUNPTl9DVVNUT00iLCJDT05URU5UIiwiRk9PVEVSIiwiQlVUVE9OX0NPTlRBSU5FUiIsIkJVVFRPTiIsIkNPTkZJUk1fQlVUVE9OIiwiQ0FOQ0VMX0JVVFRPTiIsIkRBTkdFUl9CVVRUT04iLCJCVVRUT05fTE9BRElORyIsIkJVVFRPTl9MT0FERVIiLCJxdWVyeVNlbGVjdG9yIiwic3RyaW5nVG9Ob2RlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInRyaW0iLCJmaXJzdENoaWxkIiwiaW5zZXJ0QWZ0ZXIiLCJuZXh0U2libGluZyIsImluc2VydEJlZm9yZSIsInJlbW92ZU5vZGUiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJ0aHJvd0VyciIsImlzUGxhaW5PYmplY3QiLCJvcmRpbmFsU3VmZml4T2YiLCJvdmVybGF5TWFya3VwIiwiaWNvbk1hcmt1cCIsInRpdGxlTWFya3VwIiwidGV4dE1hcmt1cCIsImZvb3Rlck1hcmt1cCIsIkNPTkZJUk1fS0VZIiwiQ0FOQ0VMX0tFWSIsInZpc2libGUiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiY2xvc2VNb2RhbCIsImFzc2lnbiIsImRlZmF1bHRCdXR0b25MaXN0IiwiY29uZmlybSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiZ2V0QnV0dG9uTGlzdE9wdHMiLCJpbmplY3RFbEludG9Nb2RhbCIsImFwcGVuZENoaWxkIiwiY2xhc3NMaXN0IiwiaW5pdE1vZGFsQ29udGVudCIsImljb24iLCJpbml0VGl0bGUiLCJpbml0VGV4dCIsImJ1dHRvbnMiLCJkYW5nZXJNb2RlIiwibW9kYWxNYXJrdXAiLCJwcm9taXNlIiwiYWN0aW9ucyIsInRpbWVyIiwicmVzZXRTdGF0ZSIsInNldEFjdGlvblZhbHVlIiwic2V0QWN0aW9uT3B0aW9uc0ZvciIsIm9wZW5Nb2RhbCIsInJlbW92ZSIsIm9uQWN0aW9uIiwicmVzb2x2ZSIsImdldFN0YXRlIiwic3RvcExvYWRpbmciLCJxdWVyeVNlbGVjdG9yQWxsIiwic3dlZXRBbGVydCIsImluc2VydEF0IiwidHJhbnNmb3JtIiwibG9jYWxzIiwicmVmcyIsImJhc2UiLCJpbnNlcnRJbnRvIiwiRXJyb3IiLCJyZWwiLCJzZXRBdHRyaWJ1dGUiLCJzaW5nbGV0b24iLCJiaW5kIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiQmxvYiIsImhyZWYiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImNyZWF0ZVRleHROb2RlIiwiY2hpbGROb2RlcyIsImNvbnZlcnRUb0Fic29sdXRlVXJscyIsImFsbCIsImF0b2IiLCJERUJVRyIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0IiwicGF0aG5hbWUiLCJnZXRPcHRzIiwiUHJvbWlzZSIsInJlamVjdCIsImNsb3NlIiwic2V0RGVmYXVsdHMiLCJpbml0IiwiYm9keSIsImVycm9ySWNvbk1hcmt1cCIsIndhcm5pbmdJY29uTWFya3VwIiwic3VjY2Vzc0ljb25NYXJrdXAiLCJjb250ZW50TWFya3VwIiwiYnV0dG9uTWFya3VwIiwiZXJyb3IiLCJ3YXJuaW5nIiwic3VjY2VzcyIsInNyYyIsImluY2x1ZGVzIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGlzcGxheSIsIm9mZnNldEhlaWdodCIsImVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwiY2xvc2VPbkVzYyIsImNsb3NlT25DbGlja091dHNpZGUiLCJFbGVtZW50IiwiZ2V0Q29udGVudE9wdHMiLCJ2ZXJzaW9uIiwidW5kZWZpbmVkIiwiX3N3ZWV0YWxlcnQiLCJfc3dlZXRhbGVydDIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0Iiwib2JqIiwicGx1Z2luIiwiVnVlIiwiJHN3YWwiLCJ1c2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7QUFLQSxDQUFFLFVBQVNBLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsOENBQWlCQyxPQUFqQixNQUEwQiw0Q0FBaUJDLE1BQWpCLEVBQTFCLEdBQWtEQSxPQUFPRCxPQUFQLEdBQWVELEdBQWpFLEdBQXFFLFFBQXNDLGlDQUFPLEVBQVAsb0NBQVVBLENBQVY7QUFBQTtBQUFBO0FBQUEsb0dBQXRDLEdBQW1ELG9CQUFpQkMsT0FBakIseUNBQWlCQSxPQUFqQixLQUF5QkEsUUFBUUUsYUFBUixHQUFzQkgsR0FBL0MsR0FBbURELEVBQUVJLGFBQUYsR0FBZ0JILEdBQTNMO0FBQStMLENBQTlNLENBQWdOLElBQWhOLEVBQXNOLFlBQVU7QUFBQyxTQUFRLFVBQVNELENBQVQsRUFBVztBQUFDLGFBQVNDLENBQVQsQ0FBV0ksQ0FBWCxFQUFhO0FBQUMsVUFBR0MsRUFBRUQsQ0FBRixDQUFILEVBQVEsT0FBT0MsRUFBRUQsQ0FBRixFQUFLSCxPQUFaLENBQW9CLElBQUlL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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHdEQUF3RCxJQUFJOztBQUUzSTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7Ozs7QUM3Q0EsSUFBTTtVQUdFO1VBQ0E7ZUFBVztlQUFNLHlIQUFPO0FBQ3hCOztlQUNXO0FBQVA7QUFKSixDQUZPO1VBV1A7VUFDQTtlQUFXO2VBQU0sd0hBQU87QUFDeEI7O2NBR1E7Y0FDQTttQkFBVzttQkFBTSw2SEFBTztBQUN4Qjs7bUJBQ1c7QUFBUDtBQUpKLEtBRkU7Y0FVRjtjQUNBO21CQUFXO21CQUFNLHlIQUFPO0FBQ3hCOzttQkFDVztBQUFQO0FBSko7Y0FRQTtjQUNBO21CQUFXO21CQUFNLDhIQUFPO0FBQ3hCOzttQkFDVztBQUFQO0FBSko7Y0FRQTtjQUNBO21CQUFXO21CQUFNLDZIQUFPO0FBQ3hCOzttQkFDVztBQUFQO0FBSko7QUExQlI7QUFzQ1IseURBQWUsUTs7Ozs7Ozs7Ozs7QUNoREM7QUFDQztBQUNqQiw0Q0FBSSxJQUFJOztBQUlSLElBQU0sWUFBWSw4Q0FBSzs7NEJBR2Y7aUJBQ0E7Y0FDQTtzQkFHSjs7QUFOSTs7QUFNTyxrRUFDaUIsT0FBTyxPQUMzQjtrQkFBTSxxQkFDVDtBQUNEO0FBSk8sb0NBSUUsT0FBTyxZQUNaO2tCQUFNLE9BQ1Q7QUFDRDtBQVBPLDREQU9jLE9BQU8sTUFDeEI7a0JBQU0sZUFDVDtBQVRNO0FBQ1A7QUFSSixDQURVOztBQXFCZCx5REFBZSxPOzs7Ozs7O0FDM0JmLHlDIiwiZmlsZSI6IlxcanNcXGFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogdnVlLXRyZWVzZWxlY3QgdjAuMC42IHwgKGMpIDIwMTcgUmlvcGhhZSBMZWVcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yaW9waGFlL3Z1ZS10cmVlc2VsZWN0XG4gKi9cbiEoZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlZ1ZVRyZWVzZWxlY3Q9dCgpOmUuVnVlVHJlZXNlbGVjdD10KCl9KSh0aGlzLChmdW5jdGlvbigpe3JldHVybiAoZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChpKXtpZihuW2ldKXJldHVybiBuW2ldLmV4cG9ydHM7dmFyIHM9bltpXT17aTppLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbaV0uY2FsbChzLmV4cG9ydHMscyxzLmV4cG9ydHMsdCkscy5sPSEwLHMuZXhwb3J0c312YXIgbj17fTtyZXR1cm4gdC5tPWUsdC5jPW4sdC5kPWZ1bmN0aW9uKGUsbixpKXt0Lm8oZSxuKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbix7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0Oml9KX0sdC5uPWZ1bmN0aW9uKGUpe3ZhciBuPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQobixcImFcIixuKSxufSx0Lm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHQucD1cIi9cIix0KHQucz00KX0pKFsoZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0LG4saSxzLG8pe3ZhciByLGE9ZT1lfHx7fSxsPXR5cGVvZiBlLmRlZmF1bHQ7XCJvYmplY3RcIiE9PWwmJlwiZnVuY3Rpb25cIiE9PWx8fChyPWUsYT1lLmRlZmF1bHQpO3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YS5vcHRpb25zOmE7dCYmKGMucmVuZGVyPXQucmVuZGVyLGMuc3RhdGljUmVuZGVyRm5zPXQuc3RhdGljUmVuZGVyRm5zLGMuX2NvbXBpbGVkPSEwKSxuJiYoYy5mdW5jdGlvbmFsPSEwKSxzJiYoYy5fc2NvcGVJZD1zKTt2YXIgdTtpZihvPyh1PWZ1bmN0aW9uKGUpe2U9ZXx8dGhpcy4kdm5vZGUmJnRoaXMuJHZub2RlLnNzckNvbnRleHR8fHRoaXMucGFyZW50JiZ0aGlzLnBhcmVudC4kdm5vZGUmJnRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0LGV8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9ffHwoZT1fX1ZVRV9TU1JfQ09OVEVYVF9fKSxpJiZpLmNhbGwodGhpcyxlKSxlJiZlLl9yZWdpc3RlcmVkQ29tcG9uZW50cyYmZS5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG8pfSxjLl9zc3JSZWdpc3Rlcj11KTppJiYodT1pKSx1KXt2YXIgZD1jLmZ1bmN0aW9uYWwsaD1kP2MucmVuZGVyOmMuYmVmb3JlQ3JlYXRlO2Q/KGMuX2luamVjdFN0eWxlcz11LGMucmVuZGVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHUuY2FsbCh0KSxoKGUsdCl9KTpjLmJlZm9yZUNyZWF0ZT1oP1tdLmNvbmNhdChoLHUpOlt1XX1yZXR1cm57ZXNNb2R1bGU6cixleHBvcnRzOmEsb3B0aW9uczpjfX19KSwoZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBuKGUpe3ZhciB0PXR5cGVvZiBlO3JldHVybiBudWxsIT1lJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX1lLmV4cG9ydHM9bn0pLChmdW5jdGlvbihlLHQsbil7dmFyIGk9big5KSxzPVwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixvPWl8fHN8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtlLmV4cG9ydHM9b30pLChmdW5jdGlvbihlLHQsbil7dmFyIGk9bigyKSxzPWkuU3ltYm9sO2UuZXhwb3J0cz1zfSksKGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKGUpe3JldHVybiBmdW5jdGlvbih0KXtcIm1vdXNlZG93blwiPT09dC50eXBlJiYwPT09dC5idXR0b24mJmUuY2FsbCh0aGlzLHQpfX1mdW5jdGlvbiBzKCl7fWZ1bmN0aW9uIG8oZSl7cmV0dXJuIG51bGwhPWUmJlwib2JqZWN0XCI9PT0odm9pZCAwPT09ZT9cInVuZGVmaW5lZFwiOngoZSkpJiZPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSk9PT1PYmplY3QucHJvdG90eXBlfWZ1bmN0aW9uIHIoZSx0LG4pe28obik/KGVbdF18fChlW3RdPXt9KSxsKGVbdF0sbikpOmVbdF09bn1mdW5jdGlvbiBhKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfWZ1bmN0aW9uIGwoZSx0KXtpZihudWxsPT10KTtlbHNlIGlmKG8odCkpZm9yKHZhciBuPU9iamVjdC5rZXlzKHQpLGk9MCxzPW4ubGVuZ3RoO2k8cztpKyspcihlLG5baV0sdFtuW2ldXSk7ZWxzZSBOKCk7cmV0dXJuIGV9ZnVuY3Rpb24gYyhlKXtyZXR1cm4gUygoZnVuY3Rpb24oKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKX0pLChmdW5jdGlvbigpe3JldHVyblwidW5leHBlY3RlZCB0eXBlXCJ9KSksZVtlLmxlbmd0aC0xXX1mdW5jdGlvbiB1KGUsdCxuKXtmb3IodmFyIGk9MCxzPWUubGVuZ3RoO2k8cztpKyspaWYodC5jYWxsKG4sZVtpXSxpLGUpKXJldHVybiBpO3JldHVybi0xfWZ1bmN0aW9uIGQoZSx0LG4pe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXg/ZS5maW5kSW5kZXgodCxuKTp1KGUsdCxuKX1mdW5jdGlvbiBoKGUsdCl7dmFyIG49ZS5pbmRleE9mKHQpOy0xIT09biYmZS5zcGxpY2UobiwxKX1mdW5jdGlvbiBwKGUsdCl7aWYoZS5sZW5ndGghPT10Lmxlbmd0aClyZXR1cm4hMTtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKylpZihlW25dIT09dFtuXSlyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiBmKGUsdCxuKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPW4sZX1mdW5jdGlvbiB2KGUsdCl7Zm9yKHZhciBuPTA7Oyl7aWYoZS5sZXZlbDxuKXJldHVybi0xO2lmKHQubGV2ZWw8bilyZXR1cm4gMTtpZihlLmluZGV4W25dIT09dC5pbmRleFtuXSlyZXR1cm4gZS5pbmRleFtuXS10LmluZGV4W25dO24rK319ZnVuY3Rpb24gXyhlLHQpe3JldHVybiBlLmxldmVsIT09dC5sZXZlbD9lLmxldmVsLXQubGV2ZWw6dihlLHQpfWZ1bmN0aW9uIG0oZSl7cmV0dXJuXCJhbmQgXCIrZStcIiBtb3JlXCJ9ZnVuY3Rpb24gQyhlKXtyZXR1cm5cIkZhaWxlZCB0byBsb2FkIGNoaWxkcmVuIG9wdGlvbnM6IFwiKyhlLm1lc3NhZ2V8fFN0cmluZyhlKSkrXCIuXCJ9ZnVuY3Rpb24geShlKXtuKDUpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBiPW4oNiksZz1uLm4oYiksRT1uKDcpLE89bi5uKEUpLHg9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sUz1zLE49cyx3PXtwcm92aWRlOmZ1bmN0aW9uKCl7cmV0dXJue2luc3RhbmNlOnRoaXMsVU5DSEVDS0VEOjAsSU5ERVRFUk1JTkFURToxLENIRUNLRUQ6MixVTk1BVENIRUQ6MCxERVNDRU5EQU5UX01BVENIRUQ6MSxNQVRDSEVEOjJ9fSxwcm9wczp7YXV0b2ZvY3VzOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sYmFja3NwYWNlUmVtb3Zlczp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LGJyYW5jaE5vZGVzRmlyc3Q6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxjbGVhcmFibGU6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxjbGVhckFsbFRleHQ6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJDbGVhciBhbGxcIn0sY2xlYXJPblNlbGVjdDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGNsZWFyVmFsdWVUZXh0Ont0eXBlOlN0cmluZyxkZWZhdWx0OlwiQ2xlYXIgdmFsdWVcIn0sY2xvc2VPblNlbGVjdDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LGRlbGV0ZVJlbW92ZXM6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxkaXNhYmxlQnJhbmNoTm9kZXM6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxkaXNhYmxlZDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGRlZmF1bHRFeHBhbmRMZXZlbDp7dHlwZTpOdW1iZXIsZGVmYXVsdDowfSxlc2NhcGVDbGVhcnNWYWx1ZTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LGZsYXQ6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxpZDp7ZGVmYXVsdDpudWxsfSxsaW1pdDp7dHlwZTpOdW1iZXIsZGVmYXVsdDoxLzB9LGxpbWl0VGV4dDp7dHlwZTpGdW5jdGlvbixkZWZhdWx0Om19LGxvYWRDaGlsZHJlbkVycm9yVGV4dDp7dHlwZTpGdW5jdGlvbixkZWZhdWx0OkN9LGxvYWRDaGlsZHJlbk9wdGlvbnM6e3R5cGU6RnVuY3Rpb259LGxvYWRpbmdUZXh0Ont0eXBlOlN0cmluZyxkZWZhdWx0OlwiTG9hZGluZy4uLlwifSxsb2FkUm9vdE9wdGlvbnM6e3R5cGU6RnVuY3Rpb259LG1heEhlaWdodDp7dHlwZTpOdW1iZXIsZGVmYXVsdDozMDB9LG11bHRpcGxlOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sbm9DaGlsZHJlblRleHQ6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJObyBjaGlsZHJlbiBvcHRpb25zLi4uXCJ9LG5vUmVzdWx0c1RleHQ6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJObyByZXN1bHRzIGZvdW5kLi4uXCJ9LG5vT3B0aW9uc1RleHQ6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJObyBvcHRpb25zIGF2YWlsYWJsZS5cIn0sb3BlbkRpcmVjdGlvbjp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcImF1dG9cIn0sb3Blbk9uQ2xpY2s6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxvcGVuT25Gb2N1czp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LG9wdGlvbnM6e3R5cGU6QXJyYXl9LHBsYWNlaG9sZGVyOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiU2VsZWN0Li4uXCJ9LHJldGFpblNjcm9sbFBvc2l0aW9uOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0scmV0cnlUZXh0Ont0eXBlOlN0cmluZyxkZWZhdWx0OlwiUmV0cnk/XCJ9LHJldHJ5VGl0bGU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJDbGljayB0byByZXRyeVwifSxzZWFyY2hhYmxlOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sc2hvd0NvdW50Ont0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sc2hvd0NvdW50T2Y6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJBTExfQ0hJTERSRU5cIix2YWxpZGF0b3I6ZnVuY3Rpb24oZSl7cmV0dXJuLTEhPT1bXCJBTExfQ0hJTERSRU5cIixcIkFMTF9ERVNDRU5EQU5UU1wiLFwiTEVBRl9DSElMRFJFTlwiLFwiTEVBRl9ERVNDRU5EQU5UU1wiXS5pbmRleE9mKGUpfX0sc2hvd0NvdW50T25TZWFyY2g6bnVsbCxzb3J0VmFsdWVCeTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIk9SREVSX1NFTEVDVEVEXCJ9LHN1Ykl0ZW1zTGltaXQ6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MS8wfSx0YWJJbmRleDp7dHlwZTpOdW1iZXIsZGVmYXVsdDowfSx2YWx1ZTpudWxsfSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue2ludGVybmFsVmFsdWU6W10saXNGb2N1c2VkOiExLGlzT3BlbjohMSxub2RlQ2hlY2tlZFN0YXRlTWFwOk9iamVjdC5jcmVhdGUobnVsbCksbm9kZU1hcDpPYmplY3QuY3JlYXRlKG51bGwpLG5vcm1hbGl6ZWRPcHRpb25zOm51bGwsbm9TZWFyY2hSZXN1bHRzOiEwLG9wdGltaXplZEhlaWdodDowLHByZWZmZXJlZE9wZW5EaXJlY3Rpb246XCJiZWxvd1wiLHJvb3RPcHRpb25zTG9hZGVkOiExLGxvYWRpbmdSb290T3B0aW9uczohMSxsb2FkaW5nUm9vdE9wdGlvbnNFcnJvcjpcIlwiLHNlYXJjaGluZ0NvdW50Ok9iamVjdC5jcmVhdGUobnVsbCksc2VhcmNoaW5nOiExLHNlYXJjaFF1ZXJ5OlwiXCIsc2VsZWN0ZWROb2RlTWFwOk9iamVjdC5jcmVhdGUobnVsbCksbGFzdFNjcm9sbFBvc2l0aW9uOjB9fSxjb21wdXRlZDp7c2VsZWN0ZWROb2Rlc051bWJlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmludGVybmFsVmFsdWUubGVuZ3RofSxoYXNWYWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNlbGVjdGVkTm9kZXNOdW1iZXI+MH0sc2VsZWN0ZWROb2RlczpmdW5jdGlvbigpe3JldHVybiB0aGlzLmludGVybmFsVmFsdWUubWFwKHRoaXMuZ2V0Tm9kZSl9LHNpbmdsZTpmdW5jdGlvbigpe3JldHVybiF0aGlzLm11bHRpcGxlfSx2aXNpYmxlVmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZWxlY3RlZE5vZGVzLnNsaWNlKDAsdGhpcy5saW1pdCl9LGhhc0V4Y2VlZGVkTGltaXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZWxlY3RlZE5vZGVzTnVtYmVyPnRoaXMubGltaXR9LHNob3VsZFNob3dDbGVhckljb246ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGVhcmFibGUmJiF0aGlzLmRpc2FibGVkJiZ0aGlzLmhhc1ZhbHVlfSxzaG93Q291bnRPblNlYXJjaENvbXB1dGVkOmZ1bmN0aW9uKCl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiB0aGlzLnNob3dDb3VudE9uU2VhcmNoP3RoaXMuc2hvd0NvdW50T25TZWFyY2g6dGhpcy5zaG93Q291bnR9fSx3YXRjaDp7ZGlzYWJsZWQ6ZnVuY3Rpb24oZSl7ZSYmdGhpcy5pc09wZW4mJnRoaXMuY2xvc2VNZW51KCl9LG11bHRpcGxlOmZ1bmN0aW9uKGUpe2UmJnRoaXMuYnVpbGROb2RlQ2hlY2tlZFN0YXRlTWFwKCl9LHNlYXJjaFF1ZXJ5Ok8oKSgoZnVuY3Rpb24oKXt0aGlzLmhhbmRsZVNlYXJjaCgpLHRoaXMuJGVtaXQoXCJzZWFyY2gtY2hhbmdlXCIsdGhpcy5zZWFyY2hRdWVyeSx0aGlzLmlkKX0pLDIwMCksc29ydFZhbHVlQnk6ZnVuY3Rpb24oKXt0aGlzLnNvcnRWYWx1ZSgpfSxpbnRlcm5hbFZhbHVlOmZ1bmN0aW9uKCl7dGhpcy4kZW1pdChcImlucHV0XCIsdGhpcy5nZXRWYWx1ZSgpLHRoaXMuaWQpfSx2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lfHwwPT09ZT90aGlzLm11bHRpcGxlP2Uuc2xpY2UoKTpbZV06W107IXAodCx0aGlzLmludGVybmFsVmFsdWUpJiYodGhpcy5pbnRlcm5hbFZhbHVlPXQsdGhpcy5idWlsZFNlbGVjdGVkTm9kZU1hcCgpLHRoaXMuYnVpbGROb2RlQ2hlY2tlZFN0YXRlTWFwKCkpfX0sbWV0aG9kczp7dmVyaWZ5UHJvcHM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMubG9hZFJvb3RPcHRpb25zfHwodGhpcy5vcHRpb25zP0FycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zKXx8UygoZnVuY3Rpb24oKXtyZXR1cm4hMX0pLChmdW5jdGlvbigpe3JldHVyblwiRXhwZWN0ZWQgcHJvcCBgb3B0aW9uc2AgdG8gYmUgYW4gYXJyYXksIGluc3RlYWQgZ290OiBcIitlLm9wdGlvbnMrXCIuXCJ9KSk6UygoZnVuY3Rpb24oKXtyZXR1cm4hMX0pLChmdW5jdGlvbigpe3JldHVyblwiUmVxdWlyZWQgcHJvcCBgb3B0aW9uc2AgaXMgbm90IHByb3ZpZGVkLlwifSkpKX0scmVzZXRGbGFnczpmdW5jdGlvbigpe3RoaXMuX2JsdXJPblNlbGVjdD0hMSx0aGlzLl93YXNDbGlja2VkT25WYWx1ZUl0ZW09ITF9LGluaXRpYWxpemU6ZnVuY3Rpb24oZSl7QXJyYXkuaXNBcnJheShlKSYmKHRoaXMucm9vdE9wdGlvbnNMb2FkZWQ9ITApLHRoaXMuaW5pdGlhbGl6ZVJvb3RPcHRpb25zKGV8fFtdKSx0aGlzLmluaXRpYWxpemVWYWx1ZSgpLHRoaXMuYnVpbGRTZWxlY3RlZE5vZGVNYXAoKSx0aGlzLmJ1aWxkTm9kZUNoZWNrZWRTdGF0ZU1hcCgpfSxnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm11bHRpcGxlP3RoaXMuaW50ZXJuYWxWYWx1ZS5zbGljZSgpOnRoaXMuaW50ZXJuYWxWYWx1ZVswXX0sZ2V0Tm9kZTpmdW5jdGlvbihlKXtyZXR1cm4gUygoZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9ZX0pLChmdW5jdGlvbigpe3JldHVyblwiSW52YWxpZCBub2RlIGlkOiBcIitlfSkpLHRoaXMubm9kZU1hcFtlXXx8e2lkOmUsbGFiZWw6ZStcIiAodW5rbm93bilcIixhbmNlc3RvcnM6W10scGFyZW50Tm9kZTpudWxsLGlzVW5rbm93bk5vZGU6ITAsaXNMZWFmOiEwLGlzQnJhbmNoOiExfX0saXNTZWxlY3RlZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5pZCBpbiB0aGlzLnNlbGVjdGVkTm9kZU1hcH0sY2hlY2tJZkJyYW5jaE5vZGU6ZnVuY3Rpb24oZSl7UygoZnVuY3Rpb24oKXtyZXR1cm4gZSYmZS5pc0JyYW5jaH0pLChmdW5jdGlvbigpe3JldHVyblwiRXhwZWN0ZWQgYSBicmFuY2ggbm9kZSwgaW5zdGVhZCBnb3Q6IFwiK2V9KSl9LHRyYXZlcnNlRGVzY2VuZGFudHM6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXRoaXM7XCJmdW5jdGlvblwiPT10eXBlb2YgdCYmKG49dCx0PTEvMCksZS5pc0JyYW5jaCYmZS5sZXZlbDx0JiZlLmNoaWxkcmVuLmZvckVhY2goKGZ1bmN0aW9uKGUpe2kudHJhdmVyc2VEZXNjZW5kYW50cyhlLHQsbiksbihlKX0pKX0sdHJhdmVyc2VBbmNlc3RvcnM6ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLnBhcmVudE5vZGU7bnVsbCE9PW4mJih0KG4pLHRoaXMudHJhdmVyc2VBbmNlc3RvcnMobix0KSl9LHRyYXZlcnNlQWxsTm9kZXM6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczt0aGlzLm5vcm1hbGl6ZWRPcHRpb25zLmZvckVhY2goKGZ1bmN0aW9uKG4pe3QudHJhdmVyc2VEZXNjZW5kYW50cyhuLGUpLGUobil9KSl9LHRvZ2dsZUNsaWNrT3V0c2lkZUV2ZW50OmZ1bmN0aW9uKGUpe2U/ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlLCExKTpkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5oYW5kbGVDbGlja091dHNpZGUsITEpfSxmb2N1c0lucHV0OmZ1bmN0aW9uKCl7dGhpcy4kcmVmcy52YWx1ZS5mb2N1c0lucHV0KCl9LGJsdXJJbnB1dDpmdW5jdGlvbigpe3RoaXMuJHJlZnMudmFsdWUuYmx1cklucHV0KCl9LGhhbmRsZU1vdXNlRG93bjppKChmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSwhdGhpcy5kaXNhYmxlZCl7dGhpcy4kcmVmcy52YWx1ZS4kZWwuY29udGFpbnMoZS50YXJnZXQpJiYoIXRoaXMuaXNPcGVufHx0aGlzLnNlYXJjaGFibGV8fHRoaXMuX3dhc0NsaWNrZWRPblZhbHVlSXRlbT90aGlzLmlzT3Blbnx8IXRoaXMub3Blbk9uQ2xpY2smJiF0aGlzLmlzRm9jdXNlZHx8dGhpcy5vcGVuTWVudSgpOnRoaXMuY2xvc2VNZW51KCkpLHRoaXMuX2JsdXJPblNlbGVjdD90aGlzLmJsdXJJbnB1dCgpOnRoaXMuZm9jdXNJbnB1dCgpLHRoaXMucmVzZXRGbGFncygpfX0pKSxoYW5kbGVNb3VzZURvd25PbkNsZWFyOmkoKGZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuY2xlYXIoKSx0aGlzLmZvY3VzSW5wdXQoKX0pKSxoYW5kbGVNb3VzZURvd25PbkFycm93OmkoKGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMuZm9jdXNJbnB1dCgpLHRoaXMudG9nZ2xlTWVudSgpfSkpLGhhbmRsZUNsaWNrT3V0c2lkZTpmdW5jdGlvbihlKXt0aGlzLiRyZWZzLndyYXBwZXImJiF0aGlzLiRyZWZzLndyYXBwZXIuY29udGFpbnMoZS50YXJnZXQpJiYodGhpcy5ibHVySW5wdXQoKSx0aGlzLmNsb3NlTWVudSgpKX0saGFuZGxlU2VhcmNoOmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLnNlYXJjaFF1ZXJ5Pyh0aGlzLnNlYXJjaGluZz0hMCx0aGlzLm5vU2VhcmNoUmVzdWx0cz0hMCx0aGlzLnRyYXZlcnNlQWxsTm9kZXMoKGZ1bmN0aW9uKHQpe2lmKHQuaXNCcmFuY2gpe3ZhciBuO3QuZXhwYW5kc09uU2VhcmNoPSExLHQuaGFzTWF0Y2hlZENoaWxkPSExLGUuc2VhcmNoaW5nQ291bnRbdC5pZF09KG49e30sZihuLFwiQUxMX0NISUxEUkVOXCIsMCksZihuLFwiQUxMX0RFU0NFTkRBTlRTXCIsMCksZihuLFwiTEVBRl9DSElMRFJFTlwiLDApLGYobixcIkxFQUZfREVTQ0VOREFOVFNcIiwwKSxuKX19KSksdGhpcy50cmF2ZXJzZUFsbE5vZGVzKChmdW5jdGlvbih0KXt2YXIgbj10LmlzTWF0Y2hlZD1nKCkoZS5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpLHQubGFiZWwudG9Mb3dlckNhc2UoKSk7biYmKGUubm9TZWFyY2hSZXN1bHRzPSExLHQuYW5jZXN0b3JzLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiBlLnNlYXJjaGluZ0NvdW50W3QuaWRdLkFMTF9ERVNDRU5EQU5UUysrfSkpLHQuaXNMZWFmJiZ0LmFuY2VzdG9ycy5mb3JFYWNoKChmdW5jdGlvbih0KXtyZXR1cm4gZS5zZWFyY2hpbmdDb3VudFt0LmlkXS5MRUFGX0RFU0NFTkRBTlRTKyt9KSksbnVsbCE9PXQucGFyZW50Tm9kZSYmKGUuc2VhcmNoaW5nQ291bnRbdC5wYXJlbnROb2RlLmlkXS5BTExfQ0hJTERSRU4rPTEsdC5pc0xlYWYmJihlLnNlYXJjaGluZ0NvdW50W3QucGFyZW50Tm9kZS5pZF0uTEVBRl9DSElMRFJFTis9MSkpKSwobnx8dC5pc0JyYW5jaCYmdC5leHBhbmRzT25TZWFyY2gpJiZudWxsIT09dC5wYXJlbnROb2RlJiYodC5wYXJlbnROb2RlLmV4cGFuZHNPblNlYXJjaD0hMCx0LnBhcmVudE5vZGUuaGFzTWF0Y2hlZENoaWxkPSEwKX0pKSk6dGhpcy5zZWFyY2hpbmc9ITF9LGNsb3NlTWVudTpmdW5jdGlvbigpe3RoaXMuaXNPcGVuJiYodGhpcy5pc09wZW49ITEsdGhpcy5yZXRhaW5TY3JvbGxQb3NpdGlvbiYmdGhpcy4kcmVmcy5tZW51JiYodGhpcy5sYXN0U2Nyb2xsUG9zaXRpb249dGhpcy4kcmVmcy5tZW51LnNjcm9sbFRvcCksdGhpcy50b2dnbGVDbGlja091dHNpZGVFdmVudCghMSksdGhpcy5zZWFyY2hRdWVyeT1cIlwiLHRoaXMuJGVtaXQoXCJjbG9zZVwiLHRoaXMuZ2V0VmFsdWUoKSx0aGlzLmlkKSl9LG9wZW5NZW51OmZ1bmN0aW9uKCl7dGhpcy5kaXNhYmxlZHx8dGhpcy5pc09wZW58fCh0aGlzLmlzT3Blbj0hMCx0aGlzLiRuZXh0VGljayh0aGlzLmFkanVzdFBvc2l0aW9uKSx0aGlzLnJldGFpblNjcm9sbFBvc2l0aW9uJiZ0aGlzLiRuZXh0VGljayh0aGlzLnJlc3RvcmVTY3JvbGxQb3NpdGlvbiksdGhpcy5yb290T3B0aW9uc0xvYWRlZHx8dGhpcy5sb2FkT3B0aW9ucyghMCksdGhpcy50b2dnbGVDbGlja091dHNpZGVFdmVudCghMCksdGhpcy4kZW1pdChcIm9wZW5cIix0aGlzLmlkKSl9LHRvZ2dsZU1lbnU6ZnVuY3Rpb24oKXt0aGlzLmlzT3Blbj90aGlzLmNsb3NlTWVudSgpOnRoaXMub3Blbk1lbnUoKX0sdG9nZ2xlRXhwYW5kZWQ6ZnVuY3Rpb24oZSl7dGhpcy5jaGVja0lmQnJhbmNoTm9kZShlKSx0aGlzLnNlYXJjaGluZz9lLmV4cGFuZHNPblNlYXJjaD0hZS5leHBhbmRzT25TZWFyY2g6ZS5pc0V4cGFuZGVkPSFlLmlzRXhwYW5kZWR9LGluaXRpYWxpemVWYWx1ZTpmdW5jdGlvbigpe3RoaXMubXVsdGlwbGU/KHRoaXMuaW50ZXJuYWxWYWx1ZT1BcnJheS5pc0FycmF5KHRoaXMudmFsdWUpP3RoaXMudmFsdWUuc2xpY2UoKTpbXSx0aGlzLnNvcnRWYWx1ZSgpKTp0aGlzLmludGVybmFsVmFsdWU9bnVsbCE9dGhpcy52YWx1ZT9bdGhpcy52YWx1ZV06W119LGluaXRpYWxpemVSb290T3B0aW9uczpmdW5jdGlvbihlKXt0aGlzLm5vcm1hbGl6ZWRPcHRpb25zPXRoaXMubm9ybWFsaXplKG51bGwsZSl9LGJ1aWxkU2VsZWN0ZWROb2RlTWFwOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5zZWxlY3RlZE5vZGVNYXA9T2JqZWN0LmNyZWF0ZShudWxsKTt0aGlzLmludGVybmFsVmFsdWUuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZVt0XT0hMH0pKX0sYnVpbGROb2RlQ2hlY2tlZFN0YXRlTWFwOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PXRoaXMubm9kZUNoZWNrZWRTdGF0ZU1hcD1PYmplY3QuY3JlYXRlKG51bGwpO3RoaXMubXVsdGlwbGUmJih0aGlzLnNlbGVjdGVkTm9kZXMuZm9yRWFjaCgoZnVuY3Rpb24obil7dFtuLmlkXT0yLGUuZmxhdHx8KGUudHJhdmVyc2VEZXNjZW5kYW50cyhuLChmdW5jdGlvbihlKXt0W2UuaWRdPTJ9KSksZS50cmF2ZXJzZUFuY2VzdG9ycyhuLChmdW5jdGlvbihlKXt0W2UuaWRdPTF9KSkpfSkpLHRoaXMubm9ybWFsaXplZE9wdGlvbnMuZm9yRWFjaCgoZnVuY3Rpb24obil7bi5pZCBpbiB0fHwodFtuLmlkXT0wKSxlLnRyYXZlcnNlRGVzY2VuZGFudHMobiwoZnVuY3Rpb24oZSl7ZS5pZCBpbiB0fHwodFtlLmlkXT0wKX0pKX0pKSl9LG5vcm1hbGl6ZTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMsaT10Lm1hcCgoZnVuY3Rpb24odCxpKXtuLmNoZWNrRHVwbGljYXRpb24odCksbi52ZXJpZnlOb2RlU2hhcGUodCk7dmFyIHM9bnVsbD09PWUsbz10LmlkLHI9dC5sYWJlbCxhPXQuY2hpbGRyZW4sbD10LmlzRGlzYWJsZWQsYz12b2lkIDAhPT1sJiZsLHU9QXJyYXkuaXNBcnJheShhKXx8bnVsbD09PWF8fHZvaWQgMD09PWEmJiEhdC5pc0JyYW5jaCxkPSF1LGg9cz8wOmUubGV2ZWwrMSxwPXM/W106ZS5hbmNlc3RvcnMuY29uY2F0KGUpLHY9KHM/W106ZS5pbmRleCkuY29uY2F0KGkpLF89bi5ub2RlTWFwW29dPXtpZDpvLGxhYmVsOnIsbGV2ZWw6aCxhbmNlc3RvcnM6cCxpbmRleDp2LHBhcmVudE5vZGU6ZSxpc0Rpc2FibGVkOmMsaXNNYXRjaGVkOiExLGlzTGVhZjpkLGlzQnJhbmNoOnUsaXNSb290Tm9kZTpzLHJhdzp0fTtpZih1KXt2YXIgbSxDPUFycmF5LmlzQXJyYXkoYSk7Q3x8UygoZnVuY3Rpb24oKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLmxvYWRDaGlsZHJlbk9wdGlvbnN9KSwoZnVuY3Rpb24oKXtyZXR1cm5cIlVubG9hZGVkIGJyYW5jaCBub2RlIGRldGVjdGVkLiBgbG9hZENoaWxkcmVuT3B0aW9uc2AgcHJvcCBpcyByZXF1aXJlZCB0byBsb2FkIGl0cyBjaGlsZHJlbi5cIn0pKSxfLmlzTG9hZGVkPUMsXy5pc1BlbmRpbmc9ITEsXy5pc0V4cGFuZGVkPWg8bi5kZWZhdWx0RXhwYW5kTGV2ZWwsXy5oYXNNYXRjaGVkQ2hpbGQ9ITEsXy5leHBhbmRzT25TZWFyY2g9ITEsXy5sb2FkaW5nQ2hpbGRyZW5FcnJvcj1cIlwiLF8uY291bnQ9KG09e30sZihtLFwiQUxMX0NISUxEUkVOXCIsMCksZihtLFwiQUxMX0RFU0NFTkRBTlRTXCIsMCksZihtLFwiTEVBRl9DSElMRFJFTlwiLDApLGYobSxcIkxFQUZfREVTQ0VOREFOVFNcIiwwKSxtKSxfLmNoaWxkcmVuPUM/bi5ub3JtYWxpemUoXyxhKTpbXSxfLmlzRXhwYW5kZWQmJiFfLmlzTG9hZGVkJiZuLmxvYWRPcHRpb25zKCExLF8pfXJldHVybiBfLmFuY2VzdG9ycy5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4gZS5jb3VudC5BTExfREVTQ0VOREFOVFMrK30pKSxkJiZfLmFuY2VzdG9ycy5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4gZS5jb3VudC5MRUFGX0RFU0NFTkRBTlRTKyt9KSksbnVsbCE9PWUmJihlLmNvdW50LkFMTF9DSElMRFJFTis9MSxkJiYoZS5jb3VudC5MRUFGX0NISUxEUkVOKz0xKSksX30pKTtpZih0aGlzLmJyYW5jaE5vZGVzRmlyc3Qpe3ZhciBzPWkuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZS5pc0JyYW5jaH0pKSxvPWkuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZS5pc0xlYWZ9KSk7aT1zLmNvbmNhdChvKX1yZXR1cm4gaX0sbG9hZE9wdGlvbnM6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO2lmKGUpe2lmKHRoaXMubG9hZGluZ1Jvb3RPcHRpb25zKXJldHVybjt2YXIgaT1mdW5jdGlvbihlLHQpe24ubG9hZGluZ1Jvb3RPcHRpb25zPSExLGU/bi5sb2FkaW5nUm9vdE9wdGlvbnNFcnJvcj1lLm1lc3NhZ2V8fFN0cmluZyhlKTp0P0FycmF5LmlzQXJyYXkodCk/KG4uaW5pdGlhbGl6ZSh0KSxuLnJvb3RPcHRpb25zTG9hZGVkPSEwKTpuLmxvYWRpbmdSb290T3B0aW9uc0Vycm9yPVwicmVjZWl2ZWQgdW5yZWNvZ25pemFibGUgZGF0YVwiOm4ubG9hZGluZ1Jvb3RPcHRpb25zRXJyb3I9XCJubyBkYXRhIHJlY2VpdmVkXCJ9O3RoaXMubG9hZGluZ1Jvb3RPcHRpb25zPSEwLHRoaXMubG9hZGluZ1Jvb3RPcHRpb25zRXJyb3I9XCJcIix0aGlzLmxvYWRSb290T3B0aW9ucyhpKX1lbHNle2lmKHQuaXNQZW5kaW5nKXJldHVybjt2YXIgcz10LnJhdyxvPWZ1bmN0aW9uKGUsaSl7dC5pc1BlbmRpbmc9ITEsZT90LmxvYWRpbmdDaGlsZHJlbkVycm9yPW4ubG9hZENoaWxkcmVuRXJyb3JUZXh0KGUpOkFycmF5LmlzQXJyYXkoaSk/KHQuY2hpbGRyZW49bi5ub3JtYWxpemUodCxpKSx0LmlzTG9hZGVkPSEwLG4uYnVpbGROb2RlQ2hlY2tlZFN0YXRlTWFwKCkpOih0LmxvYWRpbmdDaGlsZHJlbkVycm9yPVwiUmVjZWl2ZWQgdW5yZWNvZ25pemFibGUgZGF0YVwiLFMoKGZ1bmN0aW9uKCl7cmV0dXJuITF9KSwoZnVuY3Rpb24oKXtyZXR1cm5cIlJlY2VpdmVkIHVucmVjb2duaXphYmxlIGRhdGEgXCIraStcIiB3aGlsZSBsb2FkaW5nIGNoaWxkcmVuIG9wdGlvbnMgb2Ygbm9kZSBcIit0LmlkfSkpKX07dC5pc1BlbmRpbmc9ITAsdC5sb2FkaW5nQ2hpbGRyZW5FcnJvcj1cIlwiLHRoaXMubG9hZENoaWxkcmVuT3B0aW9ucyhzLG8pfX0sY2hlY2tEdXBsaWNhdGlvbjpmdW5jdGlvbihlKXt2YXIgdD10aGlzO1MoKGZ1bmN0aW9uKCl7cmV0dXJuIWEodC5ub2RlTWFwLGUuaWQpfSksKGZ1bmN0aW9uKCl7cmV0dXJuXCJEZXRlY3RlZCBkdXBsaWNhdGUgcHJlc2VuY2Ugb2Ygbm9kZSBpZCBcIitKU09OLnN0cmluZ2lmeShlLmlkKSsnLiBUaGVpciBsYWJlbHMgYXJlIFwiJyt0Lm5vZGVNYXBbZS5pZF0ubGFiZWwrJ1wiIGFuZCBcIicrZS5sYWJlbCsnXCIgcmVzcGVjdGl2ZWx5Lid9KSl9LHZlcmlmeU5vZGVTaGFwZTpmdW5jdGlvbigpe30sc2VsZWN0OmZ1bmN0aW9uKGUpe3RoaXMuc2luZ2xlJiZ0aGlzLmNsZWFyKCk7dmFyIHQ9dGhpcy5tdWx0aXBsZSYmIXRoaXMuZmxhdD8wPT09dGhpcy5ub2RlQ2hlY2tlZFN0YXRlTWFwW2UuaWRdOiF0aGlzLmlzU2VsZWN0ZWQoZSk7dD90aGlzLl9zZWxlY3ROb2RlKGUpOnRoaXMuX2Rlc2VsZWN0Tm9kZShlKSx0aGlzLmJ1aWxkU2VsZWN0ZWROb2RlTWFwKCksdGhpcy5idWlsZE5vZGVDaGVja2VkU3RhdGVNYXAoKSx0aGlzLnNlYXJjaGluZyYmdCYmKHRoaXMuc2luZ2xlfHx0aGlzLmNsZWFyT25TZWxlY3QpJiYodGhpcy5zZWFyY2hRdWVyeT1cIlwiKSx0aGlzLnNpbmdsZSYmdGhpcy5jbG9zZU9uU2VsZWN0JiYodGhpcy5jbG9zZU1lbnUoKSx0aGlzLnNlYXJjaGFibGUmJih0aGlzLl9ibHVyT25TZWxlY3Q9ITApKX0sY2xlYXI6ZnVuY3Rpb24oKXt0aGlzLmhhc1ZhbHVlJiYodGhpcy5pbnRlcm5hbFZhbHVlPVtdLHRoaXMuYnVpbGRTZWxlY3RlZE5vZGVNYXAoKSx0aGlzLmJ1aWxkTm9kZUNoZWNrZWRTdGF0ZU1hcCgpKX0sX3NlbGVjdE5vZGU6ZnVuY3Rpb24oZSl7aWYodGhpcy5hZGRWYWx1ZShlKSx0aGlzLm11bHRpcGxlJiYhdGhpcy5mbGF0JiYhZS5pc1Jvb3ROb2RlKXt2YXIgdD1lLnBhcmVudE5vZGUsbj10LmNoaWxkcmVuO24uZXZlcnkodGhpcy5pc1NlbGVjdGVkKSYmKG4uZm9yRWFjaCh0aGlzLnJlbW92ZVZhbHVlKSx0aGlzLl9zZWxlY3ROb2RlKHQpKX19LF9kZXNlbGVjdE5vZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztpZih0aGlzLnJlbW92ZVZhbHVlKGUpLHRoaXMubXVsdGlwbGUmJiF0aGlzLmZsYXQmJih0aGlzLnNlbGVjdGVkTm9kZXMuZm9yRWFjaCgoZnVuY3Rpb24obil7LTEhPT1uLmFuY2VzdG9ycy5pbmRleE9mKGUpJiZ0LnJlbW92ZVZhbHVlKG4pfSkpLCFlLmlzUm9vdE5vZGUpKXt2YXIgbj1kKGUuYW5jZXN0b3JzLHRoaXMuaXNTZWxlY3RlZCk7aWYoLTEhPT1uKXt2YXIgaT1lLmFuY2VzdG9yc1tuXSxzPWUuYW5jZXN0b3JzLmNvbmNhdChlKTt0aGlzLnJlbW92ZVZhbHVlKGkpLHRoaXMudHJhdmVyc2VEZXNjZW5kYW50cyhpLGUubGV2ZWwsKGZ1bmN0aW9uKGUpey0xPT09cy5pbmRleE9mKGUpJiZ0LmFkZFZhbHVlKGUpfSkpfX19LGFkZFZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuaW50ZXJuYWxWYWx1ZS5wdXNoKGUuaWQpLHRoaXMuc2VsZWN0ZWROb2RlTWFwW2UuaWRdPSEwLHRoaXMuc29ydFZhbHVlKCl9LHJlbW92ZVZhbHVlOmZ1bmN0aW9uKGUpe2godGhpcy5pbnRlcm5hbFZhbHVlLGUuaWQpLGRlbGV0ZSB0aGlzLnNlbGVjdGVkTm9kZU1hcFtlLmlkXX0sbWF5YmVSZW1vdmVMYXN0VmFsdWU6ZnVuY3Rpb24oKXtpZih0aGlzLmhhc1ZhbHVlKXt2YXIgZT1jKHRoaXMuaW50ZXJuYWxWYWx1ZSksdD10aGlzLmdldE5vZGUoZSk7dGhpcy5yZW1vdmVWYWx1ZSh0KSx0aGlzLmJ1aWxkU2VsZWN0ZWROb2RlTWFwKCksdGhpcy5idWlsZE5vZGVDaGVja2VkU3RhdGVNYXAoKX19LHNvcnRWYWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7XCJMRVZFTFwiPT09dGhpcy5zb3J0VmFsdWVCeT90aGlzLmludGVybmFsVmFsdWUuc29ydCgoZnVuY3Rpb24odCxuKXtyZXR1cm4gXyhlLm5vZGVNYXBbdF0sZS5ub2RlTWFwW25dKX0pKTpcIklOREVYXCI9PT10aGlzLnNvcnRWYWx1ZUJ5JiZ0aGlzLmludGVybmFsVmFsdWUuc29ydCgoZnVuY3Rpb24odCxuKXtyZXR1cm4gdihlLm5vZGVNYXBbdF0sZS5ub2RlTWFwW25dKX0pKX0scmVzdG9yZVNjcm9sbFBvc2l0aW9uOmZ1bmN0aW9uKCl7dGhpcy4kcmVmcy5tZW51JiYodGhpcy4kcmVmcy5tZW51LnNjcm9sbFRvcD10aGlzLmxhc3RTY3JvbGxQb3NpdGlvbil9LGFkanVzdFBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyl7dmFyIGU9dGhpcy4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksdD1lLnRvcCxuPXdpbmRvdy5pbm5lckhlaWdodC1lLmJvdHRvbTtuPnRoaXMubWF4SGVpZ2h0fHxuPnR8fFwiYmVsb3dcIj09PXRoaXMub3BlbkRpcmVjdGlvbnx8XCJib3R0b21cIj09PXRoaXMub3BlbkRpcmVjdGlvbj8odGhpcy5wcmVmZmVyZWRPcGVuRGlyZWN0aW9uPVwiYmVsb3dcIix0aGlzLm9wdGltaXplZEhlaWdodD1NYXRoLm1pbihuLTQwLHRoaXMubWF4SGVpZ2h0KSk6KHRoaXMucHJlZmZlcmVkT3BlbkRpcmVjdGlvbj1cImFib3ZlXCIsdGhpcy5vcHRpbWl6ZWRIZWlnaHQ9TWF0aC5taW4odC00MCx0aGlzLm1heEhlaWdodCkpfX19LGNyZWF0ZWQ6ZnVuY3Rpb24oKXt0aGlzLnZlcmlmeVByb3BzKCksdGhpcy5yZXNldEZsYWdzKCksdGhpcy5pbml0aWFsaXplKHRoaXMub3B0aW9ucyl9LG1vdW50ZWQ6ZnVuY3Rpb24oKXt0aGlzLmF1dG9mb2N1cyYmdGhpcy4kcmVmcy52YWx1ZS5mb2N1c0lucHV0KCl9LGRlc3Ryb3llZDpmdW5jdGlvbigpe3RoaXMudG9nZ2xlQ2xpY2tPdXRzaWRlRXZlbnQoITEpfX0sRD17Y29tcHV0ZWQ6e2xpbWl0VGV4dDpmdW5jdGlvbigpe3ZhciBlPXRoaXMuaW5zdGFuY2Uuc2VsZWN0ZWROb2Rlc051bWJlci10aGlzLmluc3RhbmNlLmxpbWl0O3JldHVybiB0aGlzLmluc3RhbmNlLmxpbWl0VGV4dChlKX19LG1ldGhvZHM6e2ZvY3VzSW5wdXQ6ZnVuY3Rpb24oKXt0aGlzLiRyZWZzLmlucHV0LmZvY3VzKCl9LGJsdXJJbnB1dDpmdW5jdGlvbigpe3RoaXMuJHJlZnMuaW5wdXQuYmx1cigpfSxoYW5kbGVNb3VzZURvd25PblZhbHVlOmkoKGZ1bmN0aW9uKCl7dGhpcy5pbnN0YW5jZS5fd2FzQ2xpY2tlZE9uVmFsdWVJdGVtPSEwfSkpfX0sTT17bmFtZTpcInZ1ZS10cmVlc2VsZWN0LS1wbGFjZWhvbGRlclwiLGluamVjdDpbXCJpbnN0YW5jZVwiXX0sQT1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50O3JldHVybihlLl9zZWxmLl9jfHx0KShcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19wbGFjZWhvbGRlciB2dWUtdHJlZXNlbGVjdC1oZWxwZXItem9vbS1lZmZlY3Qtb2ZmXCJ9LFtlLl90KFwicGxhY2Vob2xkZXJcIixbZS5fdihlLl9zKGUuaW5zdGFuY2UucGxhY2Vob2xkZXIpKV0pXSwyKX0sTD1bXSxUPXtyZW5kZXI6QSxzdGF0aWNSZW5kZXJGbnM6TH0sVj1ULFI9bigwKSxrPVIoTSxWLCExLG51bGwsbnVsbCxudWxsKSxJPWsuZXhwb3J0cywkPXtCQUNLU1BBQ0U6OCxFU0NBUEU6MjcsREVMRVRFOjQ2fSxCPXtuYW1lOlwidnVlLXRyZWVzZWxlY3QtLWlucHV0XCIsaW5qZWN0OltcImluc3RhbmNlXCJdLGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57aW5wdXRXaWR0aDo1fX0sY29tcHV0ZWQ6e25lZWRzQXV0b1NpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbnN0YW5jZS5tdWx0aXBsZX19LHVwZGF0ZWQ6ZnVuY3Rpb24oKXt0aGlzLm5lZWRzQXV0b1NpemUmJnRoaXMudXBkYXRlSW5wdXRXaWR0aCgpfSxtZXRob2RzOntmb2N1czpmdW5jdGlvbigpe3RoaXMuaW5zdGFuY2UuZGlzYWJsZWR8fHRoaXMuJHJlZnMuaW5wdXQmJnRoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKX0sYmx1cjpmdW5jdGlvbigpe3RoaXMuJHJlZnMuaW5wdXQmJnRoaXMuJHJlZnMuaW5wdXQuYmx1cigpfSxvbkZvY3VzOmZ1bmN0aW9uKCl7dGhpcy5pbnN0YW5jZS5pc0ZvY3VzZWQ9ITAsIXRoaXMuaW5zdGFuY2UuaXNPcGVuJiZ0aGlzLmluc3RhbmNlLm9wZW5PbkZvY3VzJiZ0aGlzLmluc3RhbmNlLm9wZW5NZW51KCl9LG9uQmx1cjpmdW5jdGlvbigpe3RoaXMuaW5zdGFuY2UuaXNGb2N1c2VkPSExLHRoaXMuaW5zdGFuY2UuY2xvc2VNZW51KCl9LG9uSW5wdXQ6ZnVuY3Rpb24oZSl7dGhpcy5pbnN0YW5jZS5zZWFyY2hRdWVyeT1lLnRhcmdldC52YWx1ZX0sb25LZXlEb3duOmZ1bmN0aW9uKGUpe2lmKCEoZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLmFsdEtleXx8ZS5tZXRhS2V5KSlzd2l0Y2goXCJ3aGljaFwiaW4gZT9lLndoaWNoOmUua2V5Q29kZSl7Y2FzZSAkLkJBQ0tTUEFDRTp0aGlzLmluc3RhbmNlLmJhY2tzcGFjZVJlbW92ZXMmJiF0aGlzLmluc3RhbmNlLnNlYXJjaFF1ZXJ5Lmxlbmd0aCYmdGhpcy5pbnN0YW5jZS5tYXliZVJlbW92ZUxhc3RWYWx1ZSgpO2JyZWFrO2Nhc2UgJC5ERUxFVEU6dGhpcy5pbnN0YW5jZS5kZWxldGVSZW1vdmVzJiYhdGhpcy5pbnN0YW5jZS5zZWFyY2hRdWVyeS5sZW5ndGgmJnRoaXMuaW5zdGFuY2UubWF5YmVSZW1vdmVMYXN0VmFsdWUoKTticmVhaztjYXNlICQuRVNDQVBFOnRoaXMuaW5zdGFuY2Uuc2VhcmNoUXVlcnkubGVuZ3RoP3RoaXMuaW5zdGFuY2Uuc2VhcmNoUXVlcnk9XCJcIjp0aGlzLmluc3RhbmNlLmlzT3Blbj90aGlzLmluc3RhbmNlLmNsb3NlTWVudSgpOnRoaXMuaW5zdGFuY2UuZXNjYXBlQ2xlYXJzVmFsdWUmJnRoaXMuaW5zdGFuY2UuY2xlYXIoKTticmVhaztkZWZhdWx0OnRoaXMuaW5zdGFuY2UuaXNPcGVufHx0aGlzLmluc3RhbmNlLm9wZW5NZW51KCl9fSxvbk1vdXNlRG93bjpmdW5jdGlvbihlKXt0aGlzLmluc3RhbmNlLnNlYXJjaFF1ZXJ5Lmxlbmd0aCYmZS5zdG9wUHJvcGFnYXRpb24oKX0scmVuZGVySW5wdXRXcmFwcGVyOmZ1bmN0aW9uKGUpe3ZhciB0PXtjbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pbnB1dC13cmFwcGVyXCJ9LG49W107cmV0dXJuIHRoaXMuaW5zdGFuY2Uuc2VhcmNoYWJsZSYmIXRoaXMuaW5zdGFuY2UuZGlzYWJsZWQmJihuLnB1c2godGhpcy5yZW5kZXJJbnB1dChlKSksdGhpcy5uZWVkc0F1dG9TaXplJiZuLnB1c2godGhpcy5yZW5kZXJTaXplcihlKSkpLHRoaXMuaW5zdGFuY2Uuc2VhcmNoYWJsZXx8bCh0LHtvbjp7Zm9jdXM6dGhpcy5vbkZvY3VzLGJsdXI6dGhpcy5vbkJsdXIsa2V5ZG93bjp0aGlzLm9uS2V5RG93bn0scmVmOlwiaW5wdXRcIn0pLHRoaXMuaW5zdGFuY2Uuc2VhcmNoYWJsZXx8dGhpcy5pbnN0YW5jZS5kaXNhYmxlZHx8bCh0LHthdHRyczp7dGFiSW5kZXg6dGhpcy5pbnN0YW5jZS50YWJJbmRleH19KSxlKFwiZGl2XCIsdCxuKX0scmVuZGVySW5wdXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUoXCJpbnB1dFwiLHtjbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pbnB1dFwiLGF0dHJzOnt0eXBlOlwidGV4dFwiLGF1dG9jb21wbGV0ZTpcIm9mZlwiLHRhYkluZGV4OnRoaXMuaW5zdGFuY2UudGFiSW5kZXh9LGRvbVByb3BzOnt2YWx1ZTp0aGlzLmluc3RhbmNlLnNlYXJjaFF1ZXJ5fSxzdHlsZTp7d2lkdGg6dGhpcy5uZWVkc0F1dG9TaXplP3RoaXMuaW5wdXRXaWR0aCtcInB4XCI6bnVsbH0sb246e2ZvY3VzOnRoaXMub25Gb2N1cyxpbnB1dDp0aGlzLm9uSW5wdXQsYmx1cjp0aGlzLm9uQmx1cixrZXlkb3duOnRoaXMub25LZXlEb3duLG1vdXNlZG93bjp0aGlzLm9uTW91c2VEb3dufSxyZWY6XCJpbnB1dFwifSl9LHJlbmRlclNpemVyOmZ1bmN0aW9uKGUpe3JldHVybiBlKFwiZGl2XCIse2NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX3NpemVyXCIsZG9tUHJvcHM6e3RleHRDb250ZW50OnRoaXMuaW5zdGFuY2Uuc2VhcmNoUXVlcnl9LHJlZjpcInNpemVyXCJ9KX0sdXBkYXRlSW5wdXRXaWR0aDpmdW5jdGlvbigpe3RoaXMuaW5wdXRXaWR0aD1NYXRoLm1heCg1LHRoaXMuJHJlZnMuc2l6ZXI/dGhpcy4kcmVmcy5zaXplci5zY3JvbGxXaWR0aCs1OjApfX0scmVuZGVyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnJlbmRlcklucHV0V3JhcHBlcihlKX19LGo9bigwKSxGPWooQixudWxsLCExLG51bGwsbnVsbCxudWxsKSx6PUYuZXhwb3J0cyxQPXtuYW1lOlwidnVlLXRyZWVzZWxlY3QtLW11bHRpLXZhbHVlXCIsY29tcG9uZW50czp7UGxhY2Vob2xkZXI6SSxTZWFyY2hJbnB1dDp6fSxtaXhpbnM6W0RdLGluamVjdDpbXCJpbnN0YW5jZVwiXX0sSD1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X192YWx1ZS13cmFwcGVyXCJ9LFtuKFwidHJhbnNpdGlvbi1ncm91cFwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19tdWx0aS12YWx1ZVwiLGF0dHJzOnt0YWc6XCJkaXZcIixuYW1lOlwidnVlLXRyZWVzZWxlY3RfX211bHRpLXZhbHVlLWl0ZW0tLXpvb21cIixhcHBlYXI6XCJcIn19LFtlLl9sKGUuaW5zdGFuY2UudmlzaWJsZVZhbHVlLChmdW5jdGlvbih0KXtyZXR1cm5bbihcImRpdlwiLHtrZXk6XCJ2YWx1ZS1cIit0LmlkLHN0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX211bHRpLXZhbHVlLWl0ZW0td3JhcHBlclwiLG9uOnttb3VzZWRvd246ZS5oYW5kbGVNb3VzZURvd25PblZhbHVlfX0sW24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbXVsdGktdmFsdWUtaXRlbVwifSxbbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbXVsdGktdmFsdWUtbGFiZWxcIn0sW2UuX3YoZS5fcyh0LmxhYmVsKSldKSxuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uIHZ1ZS10cmVlc2VsZWN0X192YWx1ZS1yZW1vdmVcIixvbjp7bW91c2Vkb3duOmZ1bmN0aW9uKG4pe2UuaW5zdGFuY2Uuc2VsZWN0KHQpfX19LFtlLl92KFwiw5dcIildKV0pXSldfSkpLGUuX3YoXCIgXCIpLGUuaW5zdGFuY2UuaGFzRXhjZWVkZWRMaW1pdD9uKFwiZGl2XCIse2tleTpcImxpbWl0LXRpcFwiLHN0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2xpbWl0LXRpcCB2dWUtdHJlZXNlbGVjdC1oZWxwZXItem9vbS1lZmZlY3Qtb2ZmXCJ9LFtuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19saW1pdC10aXAtdGV4dFwifSxbZS5fdihlLl9zKGUubGltaXRUZXh0KSldKV0pOmUuX2UoKSxlLl92KFwiIFwiKSxlLmluc3RhbmNlLmhhc1ZhbHVlfHxlLmluc3RhbmNlLnNlYXJjaFF1ZXJ5P2UuX2UoKTpuKFwicGxhY2Vob2xkZXJcIix7a2V5OlwicGxhY2Vob2xlclwifSksZS5fdihcIiBcIiksbihcInNlYXJjaC1pbnB1dFwiLHtrZXk6XCJpbnB1dFwiLHJlZjpcImlucHV0XCJ9KV0sMildLDEpfSxRPVtdLEs9e3JlbmRlcjpILHN0YXRpY1JlbmRlckZuczpRfSxXPUssVT1uKDApLHE9VShQLFcsITEsbnVsbCxudWxsLG51bGwpLFg9cS5leHBvcnRzLEo9e25hbWU6XCJ2dWUtdHJlZXNlbGVjdC0tc2luZ2xlLXZhbHVlXCIsY29tcG9uZW50czp7UGxhY2Vob2xkZXI6SSxTZWFyY2hJbnB1dDp6fSxtaXhpbnM6W0RdLGluamVjdDpbXCJpbnN0YW5jZVwiXX0sRz1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X192YWx1ZS13cmFwcGVyXCJ9LFtlLmluc3RhbmNlLmhhc1ZhbHVlJiYhZS5pbnN0YW5jZS5zZWFyY2hRdWVyeT9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX3NpbmdsZS12YWx1ZVwifSxbZS5fdihcIlxcbiAgICBcIitlLl9zKGUuaW5zdGFuY2Uuc2VsZWN0ZWROb2Rlc1swXS5sYWJlbCkrXCJcXG4gIFwiKV0pOmUuaW5zdGFuY2Uuc2VhcmNoUXVlcnk/ZS5fZSgpOm4oXCJwbGFjZWhvbGRlclwiKSxlLl92KFwiIFwiKSxuKFwic2VhcmNoLWlucHV0XCIse2tleTpcImlucHV0XCIscmVmOlwiaW5wdXRcIn0pXSwxKX0sWT1bXSxaPXtyZW5kZXI6RyxzdGF0aWNSZW5kZXJGbnM6WX0sZWU9Wix0ZT1uKDApLG5lPXRlKEosZWUsITEsbnVsbCxudWxsLG51bGwpLGllPW5lLmV4cG9ydHMsc2U9e3Byb3BzOntub2RlOnt0eXBlOk9iamVjdCxyZXF1aXJlZDohMH19LGNvbXB1dGVkOntjaGVja2VkU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbnN0YW5jZS5ub2RlQ2hlY2tlZFN0YXRlTWFwW3RoaXMubm9kZS5pZF19LHNob3VsZEV4cGFuZDpmdW5jdGlvbigpe3JldHVybiEhdGhpcy5ub2RlLmlzQnJhbmNoJiYodGhpcy5pbnN0YW5jZS5zZWFyY2hpbmc/dGhpcy5ub2RlLmV4cGFuZHNPblNlYXJjaDp0aGlzLm5vZGUuaXNFeHBhbmRlZCl9fSx3YXRjaDp7XCJub2RlLmlzRXhwYW5kZWRcIjpmdW5jdGlvbihlKXshMCE9PWV8fHRoaXMubm9kZS5pc0xvYWRlZHx8dGhpcy5pbnN0YW5jZS5sb2FkT3B0aW9ucyghMSx0aGlzLm5vZGUpfX0sbWV0aG9kczp7aGFuZGxlTW91c2VEb3duT25PcHRpb246aSgoZnVuY3Rpb24oKXt0aGlzLm5vZGUuaXNCcmFuY2gmJnRoaXMuaW5zdGFuY2UuZGlzYWJsZUJyYW5jaE5vZGVzP3RoaXMuaW5zdGFuY2UudG9nZ2xlRXhwYW5kZWQodGhpcy5ub2RlKTp0aGlzLmluc3RhbmNlLnNlbGVjdCh0aGlzLm5vZGUpfSkpLGhhbmRsZU1vdXNlRG93bk9uT3B0aW9uQXJyb3c6aSgoZnVuY3Rpb24oKXt0aGlzLmluc3RhbmNlLnRvZ2dsZUV4cGFuZGVkKHRoaXMubm9kZSl9KSl9fSxvZT17bmFtZTpcInZ1ZS10cmVlc2VsZWN0LS1vcHRpb25cIixpbmplY3Q6W1wiaW5zdGFuY2VcIixcIlVOQ0hFQ0tFRFwiLFwiSU5ERVRFUk1JTkFURVwiLFwiQ0hFQ0tFRFwiXSxtaXhpbnM6W3NlXX0scmU9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbGlzdC1pdGVtXCJ9LFtuKFwiZGl2XCIse2NsYXNzOltcInZ1ZS10cmVlc2VsZWN0X19vcHRpb25cIix7XCJ2dWUtdHJlZXNlbGVjdF9fb3B0aW9uLS1kaXNhYmxlZFwiOmUubm9kZS5kaXNhYmxlZCxcInZ1ZS10cmVlc2VsZWN0X19vcHRpb24tLXJvb3RcIjplLm5vZGUuaXNSb290Tm9kZSxcInZ1ZS10cmVlc2VsZWN0X19vcHRpb24tLWNoaWxkXCI6IWUubm9kZS5pc1Jvb3ROb2RlLFwidnVlLXRyZWVzZWxlY3RfX29wdGlvbi0tc2VsZWN0ZWRcIjplLmluc3RhbmNlLmlzU2VsZWN0ZWQoZS5ub2RlKSxcInZ1ZS10cmVlc2VsZWN0X19vcHRpb24tLW1hdGNoZWRcIjplLmluc3RhbmNlLnNlYXJjaGluZyYmZS5ub2RlLmlzTWF0Y2hlZCxcInZ1ZS10cmVlc2VsZWN0X19vcHRpb24tLWhpZGVcIjplLmluc3RhbmNlLnNlYXJjaGluZyYmIShlLm5vZGUuaXNNYXRjaGVkfHxlLm5vZGUuaGFzTWF0Y2hlZENoaWxkKX1dfSxbZS5ub2RlLmlzTGVhZj9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX29wdGlvbi1hcnJvdy1wbGFjZWhvbGRlclwifSxbZS5fdihcIsKgXCIpXSk6bihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19vcHRpb24tYXJyb3ctd3JhcHBlclwiLG9uOnttb3VzZWRvd246ZS5oYW5kbGVNb3VzZURvd25Pbk9wdGlvbkFycm93fX0sW24oXCJ0cmFuc2l0aW9uXCIse2F0dHJzOntuYW1lOlwidnVlLXRyZWVzZWxlY3RfX29wdGlvbi1hcnJvdy0tcHJlcGFyZVwiLGFwcGVhcjpcIlwifX0sW24oXCJzcGFuXCIse2NsYXNzOltcInZ1ZS10cmVlc2VsZWN0X19vcHRpb24tYXJyb3dcIix7XCJ2dWUtdHJlZXNlbGVjdF9fb3B0aW9uLWFycm93LS1yb3RhdGVkXCI6ZS5zaG91bGRFeHBhbmR9XX0pXSldLDEpLGUuX3YoXCIgXCIpLG4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbGFiZWwtd3JhcHBlclwiLG9uOnttb3VzZWRvd246ZS5oYW5kbGVNb3VzZURvd25Pbk9wdGlvbn19LFtlLmluc3RhbmNlLm11bHRpcGxlJiYhZS5pbnN0YW5jZS5kaXNhYmxlQnJhbmNoTm9kZXM/bihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19jaGVja2JveC13cmFwcGVyXCJ9LFtuKFwic3BhblwiLHtjbGFzczpbXCJ2dWUtdHJlZXNlbGVjdF9fY2hlY2tib3hcIix7XCJ2dWUtdHJlZXNlbGVjdF9fY2hlY2tib3gtLWNoZWNrZWRcIjplLmNoZWNrZWRTdGF0ZT09PWUuQ0hFQ0tFRCxcInZ1ZS10cmVlc2VsZWN0X19jaGVja2JveC0taW5kZXRlcm1pbmF0ZVwiOmUuY2hlY2tlZFN0YXRlPT09ZS5JTkRFVEVSTUlOQVRFLFwidnVlLXRyZWVzZWxlY3RfX2NoZWNrYm94LS11bmNoZWNrZWRcIjplLmNoZWNrZWRTdGF0ZT09PWUuVU5DSEVDS0VEfV19LFtuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19jaGVja2JveC1tYXJrXCJ9KV0pXSk6ZS5fZSgpLGUuX3YoXCIgXCIpLG4oXCJsYWJlbFwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19sYWJlbFwifSxbZS5fdihcIlxcbiAgICAgICAgXCIrZS5fcyhlLm5vZGUubGFiZWwpK1wiXFxuICAgICAgICBcIiksZS5ub2RlLmlzQnJhbmNoP24oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2NvdW50XCJ9LFshZS5pbnN0YW5jZS5zZWFyY2hpbmcmJmUuaW5zdGFuY2Uuc2hvd0NvdW50P1tlLl92KFwiKFwiK2UuX3MoZS5ub2RlLmNvdW50W2UuaW5zdGFuY2Uuc2hvd0NvdW50T2ZdKStcIilcIildOmUuaW5zdGFuY2Uuc2VhcmNoaW5nJiZlLmluc3RhbmNlLnNob3dDb3VudE9uU2VhcmNoQ29tcHV0ZWQ/W2UuX3YoXCIoXCIrZS5fcyhlLmluc3RhbmNlLnNlYXJjaGluZ0NvdW50W2Uubm9kZS5pZF1bZS5pbnN0YW5jZS5zaG93Q291bnRPZl0pK1wiKVwiKV06ZS5fZSgpXSwyKTplLl9lKCldKV0pXSksZS5fdihcIiBcIiksZS5zaG91bGRFeHBhbmQ/bihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19saXN0XCJ9LFtlLm5vZGUuaXNMb2FkZWQ/W2Uubm9kZS5jaGlsZHJlbi5sZW5ndGg/ZS5fbChlLm5vZGUuY2hpbGRyZW4sKGZ1bmN0aW9uKGUpe3JldHVybiBuKFwidnVlLXRyZWVzZWxlY3QtLW9wdGlvblwiLHtrZXk6ZS5pZCxhdHRyczp7bm9kZTplfX0pfSkpOm4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbm8tY2hpbGRyZW4tdGlwXCJ9LFtlLl9tKDApLGUuX3YoXCIgXCIpLG4oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX25vLWNoaWxkcmVuLXRpcC10ZXh0XCJ9LFtlLl92KGUuX3MoZS5pbnN0YW5jZS5ub0NoaWxkcmVuVGV4dCkpXSldKV06ZS5ub2RlLmlzUGVuZGluZz9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2xvYWRpbmctdGlwXCJ9LFtlLl9tKDEpLGUuX3YoXCIgXCIpLG4oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2xvYWRpbmctdGlwLXRleHRcIn0sW2UuX3YoZS5fcyhlLmluc3RhbmNlLmxvYWRpbmdUZXh0KSldKV0pOmUubm9kZS5sb2FkaW5nQ2hpbGRyZW5FcnJvcj9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2Vycm9yLXRpcFwifSxbZS5fbSgyKSxlLl92KFwiIFwiKSxuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19lcnJvci10aXAtdGV4dFwifSxbZS5fdihcIlxcbiAgICAgICAgXCIrZS5fcyhlLm5vZGUubG9hZGluZ0NoaWxkcmVuRXJyb3IpK1wiXFxuICAgICAgICBcIiksbihcImFcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fcmV0cnlcIixhdHRyczp7dGl0bGU6ZS5pbnN0YW5jZS5yZXRyeVRpdGxlfSxvbjp7Y2xpY2s6ZnVuY3Rpb24odCl7ZS5pbnN0YW5jZS5sb2FkT3B0aW9ucyghMSxlLm5vZGUpfX19LFtlLl92KFwiXFxuICAgICAgICAgIFwiK2UuX3MoZS5pbnN0YW5jZS5yZXRyeVRleHQpK1wiXFxuICAgICAgICBcIildKV0pXSk6ZS5fZSgpXSwyKTplLl9lKCldKX0sYWU9W2Z1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24td3JhcHBlclwifSxbbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9faWNvbi13YXJuaW5nXCJ9KV0pfSxmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uLXdyYXBwZXJcIn0sW24oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24tbG9hZGVyXCJ9KV0pfSxmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uLXdyYXBwZXJcIn0sW24oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24tZXJyb3JcIn0pXSl9XSxsZT17cmVuZGVyOnJlLHN0YXRpY1JlbmRlckZuczphZX0sY2U9bGUsdWU9bigwKSxkZT11ZShvZSxjZSwhMSxudWxsLG51bGwsbnVsbCksaGU9ZGUuZXhwb3J0cyxwZT17bmFtZTpcInZ1ZS10cmVlc2VsZWN0XCIsY29tcG9uZW50czp7VHJlZXNlbGVjdE9wdGlvbjpoZX0sbWl4aW5zOlt3XSxjb21wdXRlZDp7VmFsdWVDb21wb25lbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tdWx0aXBsZT9YOmllfX19LGZlPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse3JlZjpcIndyYXBwZXJcIixjbGFzczpbXCJ2dWUtdHJlZXNlbGVjdFwiLHtcInZ1ZS10cmVlc2VsZWN0LS1zaW5nbGVcIjohZS5tdWx0aXBsZSxcInZ1ZS10cmVlc2VsZWN0LS1tdWx0aVwiOmUubXVsdGlwbGUsXCJ2dWUtdHJlZXNlbGVjdC0tc2VhcmNoYWJsZVwiOmUuc2VhcmNoYWJsZSxcInZ1ZS10cmVlc2VsZWN0LS1kaXNhYmxlZFwiOmUuZGlzYWJsZWQsXCJ2dWUtdHJlZXNlbGVjdC0tZm9jdXNlZFwiOmUuaXNGb2N1c2VkLFwidnVlLXRyZWVzZWxlY3QtLWhhcy12YWx1ZVwiOmUuaGFzVmFsdWUsXCJ2dWUtdHJlZXNlbGVjdC0tb3BlblwiOmUuaXNPcGVuLFwidnVlLXRyZWVzZWxlY3QtLW9wZW4tYWJvdmVcIjpcImFib3ZlXCI9PT1lLnByZWZmZXJlZE9wZW5EaXJlY3Rpb24sXCJ2dWUtdHJlZXNlbGVjdC0tb3Blbi1iZWxvd1wiOlwiYmVsb3dcIj09PWUucHJlZmZlcmVkT3BlbkRpcmVjdGlvbixcInZ1ZS10cmVlc2VsZWN0LS1icmFuY2gtbm9kZXMtZGlzYWJsZWRcIjplLmRpc2FibGVCcmFuY2hOb2Rlc31dLG9uOnttb3VzZWRvd246ZS5oYW5kbGVNb3VzZURvd259fSxbbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19jb250cm9sXCJ9LFtuKGUuVmFsdWVDb21wb25lbnQse3JlZjpcInZhbHVlXCIsdGFnOlwiY29tcG9uZW50XCJ9KSxlLl92KFwiIFwiKSxlLnNob3VsZFNob3dDbGVhckljb24/bihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19jbGVhclwiLGF0dHJzOnt0aXRsZTplLm11bHRpcGxlP2UuY2xlYXJBbGxUZXh0OmUuY2xlYXJWYWx1ZVRleHR9LG9uOnttb3VzZWRvd246ZS5oYW5kbGVNb3VzZURvd25PbkNsZWFyfX0sW2UuX3YoXCLDl1wiKV0pOmUuX2UoKSxlLl92KFwiIFwiKSxuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2Fycm93LXdyYXBwZXJcIixvbjp7bW91c2Vkb3duOmUuaGFuZGxlTW91c2VEb3duT25BcnJvd319LFtuKFwic3BhblwiLHtjbGFzczpbXCJ2dWUtdHJlZXNlbGVjdF9fYXJyb3dcIix7XCJ2dWUtdHJlZXNlbGVjdF9fYXJyb3ctLXJvdGF0ZWRcIjplLmlzT3Blbn1dfSldKV0sMSksZS5fdihcIiBcIiksZS5pc09wZW4/bihcImRpdlwiLHtyZWY6XCJtZW51XCIsc3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbWVudVwiLHN0eWxlOnttYXhIZWlnaHQ6ZS5vcHRpbWl6ZWRIZWlnaHQrXCJweFwifX0sW2Uucm9vdE9wdGlvbnNMb2FkZWQ/W2Uuc2VhcmNoaW5nJiZlLm5vU2VhcmNoUmVzdWx0cz9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX25vLXJlc3VsdHMtdGlwXCJ9LFtlLl9tKDApLGUuX3YoXCIgXCIpLG4oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX25vLXJlc3VsdHMtdGlwLXRleHRcIn0sW2UuX3YoZS5fcyhlLm5vUmVzdWx0c1RleHQpKV0pXSk6MD09PWUubm9ybWFsaXplZE9wdGlvbnMubGVuZ3RoP24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbm8tb3B0aW9ucy10aXBcIn0sW2UuX20oMSksZS5fdihcIiBcIiksbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbm8tb3B0aW9ucy10aXAtdGV4dFwifSxbZS5fdihlLl9zKGUubm9PcHRpb25zVGV4dCkpXSldKTpuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2xpc3RcIn0sZS5fbChlLm5vcm1hbGl6ZWRPcHRpb25zLChmdW5jdGlvbihlKXtyZXR1cm4gbihcInRyZWVzZWxlY3Qtb3B0aW9uXCIse2tleTplLmlkLGF0dHJzOntub2RlOmV9fSl9KSkpXTpbZS5sb2FkaW5nUm9vdE9wdGlvbnM/bihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19sb2FkaW5nLXRpcFwifSxbZS5fbSgyKSxlLl92KFwiIFwiKSxuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19sb2FkaW5nLXRpcC10ZXh0XCJ9LFtlLl92KGUuX3MoZS5sb2FkaW5nVGV4dCkpXSldKTplLmxvYWRpbmdSb290T3B0aW9uc0Vycm9yP24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fZXJyb3ItdGlwXCJ9LFtlLl9tKDMpLGUuX3YoXCIgXCIpLG4oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2Vycm9yLXRpcC10ZXh0XCJ9LFtlLl92KFwiXFxuICAgICAgICAgIEZhaWxlZCB0byBsb2FkIG9wdGlvbnM6IFwiK2UuX3MoZS5sb2FkaW5nUm9vdE9wdGlvbnNFcnJvcikrXCIuXFxuICAgICAgICAgIFwiKSxuKFwiYVwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19yZXRyeVwiLGF0dHJzOnt0aXRsZTplLnJldHJ5VGl0bGV9LG9uOntjbGljazpmdW5jdGlvbih0KXtlLmxvYWRPcHRpb25zKCEwKX19fSxbZS5fdihcIlxcbiAgICAgICAgICAgIFwiK2UuX3MoZS5yZXRyeVRleHQpK1wiXFxuICAgICAgICAgIFwiKV0pXSldKTplLl9lKCldXSwyKTplLl9lKCldKX0sdmU9W2Z1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24td3JhcHBlclwifSxbbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9faWNvbi13YXJuaW5nXCJ9KV0pfSxmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uLXdyYXBwZXJcIn0sW24oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24td2FybmluZ1wifSldKX0sZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9faWNvbi13cmFwcGVyXCJ9LFtuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uLWxvYWRlclwifSldKX0sZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9faWNvbi13cmFwcGVyXCJ9LFtuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uLWVycm9yXCJ9KV0pfV0sX2U9e3JlbmRlcjpmZSxzdGF0aWNSZW5kZXJGbnM6dmV9LG1lPV9lLENlPW4oMCkseWU9eSxiZT1DZShwZSxtZSwhMSx5ZSxudWxsLG51bGwpLGdlPWJlLmV4cG9ydHM7bi5kKHQsXCJUcmVlc2VsZWN0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGdlfSkpLG4uZCh0LFwidHJlZXNlbGVjdE1peGluXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHd9KSksbi5kKHQsXCJvcHRpb25NaXhpblwiLChmdW5jdGlvbigpe3JldHVybiBzZX0pKSxuLmQodCxcInZhbHVlTWl4aW5cIiwoZnVuY3Rpb24oKXtyZXR1cm4gRH0pKTt0LmRlZmF1bHQ9Z2V9KSwoZnVuY3Rpb24oZSx0KXt9KSwoZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkoZSx0KXt2YXIgbj10Lmxlbmd0aCxpPWUubGVuZ3RoO2lmKGk+bilyZXR1cm4hMTtpZihpPT09bilyZXR1cm4gZT09PXQ7ZTpmb3IodmFyIHM9MCxvPTA7czxpO3MrKyl7Zm9yKHZhciByPWUuY2hhckNvZGVBdChzKTtvPG47KWlmKHQuY2hhckNvZGVBdChvKyspPT09ciljb250aW51ZSBlO3JldHVybiExfXJldHVybiEwfWUuZXhwb3J0cz1pfSksKGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiBpKGUsdCxuKXtmdW5jdGlvbiBpKHQpe3ZhciBuPUMsaT15O3JldHVybiBDPXk9dm9pZCAwLHg9dCxnPWUuYXBwbHkoaSxuKX1mdW5jdGlvbiB1KGUpe3JldHVybiB4PWUsRT1zZXRUaW1lb3V0KHAsdCksUz9pKGUpOmd9ZnVuY3Rpb24gZChlKXt2YXIgbj1lLU8saT1lLXgscz10LW47cmV0dXJuIE4/YyhzLGItaSk6c31mdW5jdGlvbiBoKGUpe3ZhciBuPWUtTyxpPWUteDtyZXR1cm4gdm9pZCAwPT09T3x8bj49dHx8bjwwfHxOJiZpPj1ifWZ1bmN0aW9uIHAoKXt2YXIgZT1vKCk7aWYoaChlKSlyZXR1cm4gZihlKTtFPXNldFRpbWVvdXQocCxkKGUpKX1mdW5jdGlvbiBmKGUpe3JldHVybiBFPXZvaWQgMCx3JiZDP2koZSk6KEM9eT12b2lkIDAsZyl9ZnVuY3Rpb24gdigpe3ZvaWQgMCE9PUUmJmNsZWFyVGltZW91dChFKSx4PTAsQz1PPXk9RT12b2lkIDB9ZnVuY3Rpb24gXygpe3JldHVybiB2b2lkIDA9PT1FP2c6ZihvKCkpfWZ1bmN0aW9uIG0oKXt2YXIgZT1vKCksbj1oKGUpO2lmKEM9YXJndW1lbnRzLHk9dGhpcyxPPWUsbil7aWYodm9pZCAwPT09RSlyZXR1cm4gdShPKTtpZihOKXJldHVybiBFPXNldFRpbWVvdXQocCx0KSxpKE8pfXJldHVybiB2b2lkIDA9PT1FJiYoRT1zZXRUaW1lb3V0KHAsdCkpLGd9dmFyIEMseSxiLGcsRSxPLHg9MCxTPSExLE49ITEsdz0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoYSk7cmV0dXJuIHQ9cih0KXx8MCxzKG4pJiYoUz0hIW4ubGVhZGluZyxOPVwibWF4V2FpdFwiaW4gbixiPU4/bChyKG4ubWF4V2FpdCl8fDAsdCk6Yix3PVwidHJhaWxpbmdcImluIG4/ISFuLnRyYWlsaW5nOncpLG0uY2FuY2VsPXYsbS5mbHVzaD1fLG19dmFyIHM9bigxKSxvPW4oOCkscj1uKDExKSxhPVwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiLGw9TWF0aC5tYXgsYz1NYXRoLm1pbjtlLmV4cG9ydHM9aX0pLChmdW5jdGlvbihlLHQsbil7dmFyIGk9bigyKSxzPWZ1bmN0aW9uKCl7cmV0dXJuIGkuRGF0ZS5ub3coKX07ZS5leHBvcnRzPXN9KSwoZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbih0KXt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5PYmplY3Q9PT1PYmplY3QmJnQ7ZS5leHBvcnRzPW59KS5jYWxsKHQsbigxMCkpfSksKGZ1bmN0aW9uKGUsdCl7dmFyIG47bj0oZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pKCk7dHJ5e249bnx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfHwoMCxldmFsKShcInRoaXNcIil9Y2F0Y2goZSl7XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmKG49d2luZG93KX1lLmV4cG9ydHM9bn0pLChmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gaShlKXtpZihcIm51bWJlclwiPT10eXBlb2YgZSlyZXR1cm4gZTtpZihvKGUpKXJldHVybiByO2lmKHMoZSkpe3ZhciB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIGUudmFsdWVPZj9lLnZhbHVlT2YoKTplO2U9cyh0KT90K1wiXCI6dH1pZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gMD09PWU/ZTorZTtlPWUucmVwbGFjZShhLFwiXCIpO3ZhciBuPWMudGVzdChlKTtyZXR1cm4gbnx8dS50ZXN0KGUpP2QoZS5zbGljZSgyKSxuPzI6OCk6bC50ZXN0KGUpP3I6K2V9dmFyIHM9bigxKSxvPW4oMTIpLHI9TmFOLGE9L15cXHMrfFxccyskL2csbD0vXlstK10weFswLTlhLWZdKyQvaSxjPS9eMGJbMDFdKyQvaSx1PS9eMG9bMC03XSskL2ksZD1wYXJzZUludDtlLmV4cG9ydHM9aX0pLChmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gaShlKXtyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgZXx8byhlKSYmcyhlKT09cn12YXIgcz1uKDEzKSxvPW4oMTYpLHI9XCJbb2JqZWN0IFN5bWJvbF1cIjtlLmV4cG9ydHM9aX0pLChmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gaShlKXtyZXR1cm4gbnVsbD09ZT92b2lkIDA9PT1lP2w6YTpjJiZjIGluIE9iamVjdChlKT9vKGUpOnIoZSl9dmFyIHM9bigzKSxvPW4oMTQpLHI9bigxNSksYT1cIltvYmplY3QgTnVsbF1cIixsPVwiW29iamVjdCBVbmRlZmluZWRdXCIsYz1zP3MudG9TdHJpbmdUYWc6dm9pZCAwO2UuZXhwb3J0cz1pfSksKGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiBpKGUpe3ZhciB0PXIuY2FsbChlLGwpLG49ZVtsXTt0cnl7ZVtsXT12b2lkIDA7dmFyIGk9ITB9Y2F0Y2goZSl7fXZhciBzPWEuY2FsbChlKTtyZXR1cm4gaSYmKHQ/ZVtsXT1uOmRlbGV0ZSBlW2xdKSxzfXZhciBzPW4oMyksbz1PYmplY3QucHJvdG90eXBlLHI9by5oYXNPd25Qcm9wZXJ0eSxhPW8udG9TdHJpbmcsbD1zP3MudG9TdHJpbmdUYWc6dm9pZCAwO2UuZXhwb3J0cz1pfSksKGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbihlKXtyZXR1cm4gcy5jYWxsKGUpfXZhciBpPU9iamVjdC5wcm90b3R5cGUscz1pLnRvU3RyaW5nO2UuZXhwb3J0cz1ufSksKGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbihlKXtyZXR1cm4gbnVsbCE9ZSYmXCJvYmplY3RcIj09dHlwZW9mIGV9ZS5leHBvcnRzPW59KV0pfSkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9AcmlvcGhhZS92dWUtdHJlZXNlbGVjdC9kaXN0L3Z1ZS10cmVlc2VsZWN0Lm1pbi5qcyIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yb3dcIiA+XHJcbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJjbGFzc2VzXCIgdi1pZj1cInJvdy50eXBlID09PSAnY2F0ZWdvcnknXCIgQGNsaWNrPVwiZXhwYW5kX21lXCI+XHJcbiAgICAgICAgICAgIHt7IHJvdy5uYW1lIH19XHJcbiAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJyb3cuZGVwdGggPT09IDBcIiBAY2xpY2suc3RvcD1cImFkZENoaWxkQ2F0ZWdvcnkocm93KVwiIGNsYXNzPVwiaW5saW5lLWNvbnRyb2xcIiA+VGjDqm0gZGFuaCBt4bulYzwvc3Bhbj5cclxuICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJyb3cuZGVwdGggPT09IDFcIiBAY2xpY2suc3RvcD1cImFkZE1hdGVyaWFscyhyb3cpXCIgY2xhc3M9XCJpbmxpbmUtY29udHJvbFwiID5UaMOqbSB24bqtdCB0xrA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJyb3ctaW5zaWRlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wxXCI+e3tyb3cuaWR9fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sMlwiPnt7cm93Lm5hbWV9fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sM1wiPnt7cm93LnBlcn19PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2w0XCI+dm5kPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2w1XCI+MDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sNlwiPnt7cm93LmJyYW5kfX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImV4cGFkaW5nX3N0YXR1c1wiPlxyXG4gICAgICAgICAgICA8bWF0ZXJpYWwtcm93IHYtZm9yPVwiaXRlbSBpbiByb3cuY2hpbGRyZW5cIiA6a2V5PVwiaXRlbS5pZFwiIDpyb3c9XCJpdGVtXCI+PC9tYXRlcmlhbC1yb3c+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICByb3c6IHtcclxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7fSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXhwYWRpbmdfc3RhdHVzOiBmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGV4cGFuZF9tZSgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm93LmNoaWxkcmVuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFkaW5nX3N0YXR1cyA9ICF0aGlzLmV4cGFkaW5nX3N0YXR1cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkQ2hpbGRDYXRlZ29yeShyb3cpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnbmV3LWNhdGVnb3J5Jywge2lkOiByb3cuaWQsIG5hbWU6IHJvdy5uYW1lfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRNYXRlcmlhbHMocm93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ25ldy1tYXRlcmlhbHMnLCB7aWQ6IHJvdy5pZCwgbmFtZTogcm93Lm5hbWV9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBcclxuICAgICAgICBpc19jYXRlZ29yeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm93LnR5cGUgPT0gXCJjYXRlZ29yeVwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xhc3NlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIGBkZXB0aC0ke3RoaXMucm93LmRlcHRofWAsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ6IHRoaXMuZXhwYWRpbmdfc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGFibGU6IHRoaXMucm93LmNoaWxkcmVuICE9PSBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB0aGlzLnJvdy50eXBlID09PSAnY2F0ZWdvcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyb3ctaW5zaWRlJzogdGhpcy5yb3cudHlwZSA9PT0gJ2NhdGVnb3J5JyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5leHBhZGluZ19zdGF0dXMgPSB0aGlzLnJvdy5leHBhbmRlZDtcclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWU/MzZiZDBhNmYiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIk1hdGVyaWFsUm93LnZ1ZVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTAwNDRiZGYyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jvd3MvTWF0ZXJpYWxSb3cudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wMDQ0YmRmMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi9cbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIHZhciBmdW5jdGlvbmFsID0gb3B0aW9ucy5mdW5jdGlvbmFsXG4gICAgdmFyIGV4aXN0aW5nID0gZnVuY3Rpb25hbFxuICAgICAgPyBvcHRpb25zLnJlbmRlclxuICAgICAgOiBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuXG4gICAgaWYgKCFmdW5jdGlvbmFsKSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1yb3dcIiB9LFxuICAgIFtcbiAgICAgIF92bS5yb3cudHlwZSA9PT0gXCJjYXRlZ29yeVwiXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBjbGFzczogX3ZtLmNsYXNzZXMsIG9uOiB7IGNsaWNrOiBfdm0uZXhwYW5kX21lIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0ucm93Lm5hbWUpICsgXCJcXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgIF92bS5yb3cuZGVwdGggPT09IDBcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbmxpbmUtY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZENoaWxkQ2F0ZWdvcnkoX3ZtLnJvdylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVGjDqm0gZGFuaCBt4bulY1wiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLnJvdy5kZXB0aCA9PT0gMVxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlubGluZS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWRkTWF0ZXJpYWxzKF92bS5yb3cpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlRow6ptIHbhuq10IHTGsFwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdKVxuICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93LWluc2lkZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sMVwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5yb3cuaWQpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sMlwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5yb3cubmFtZSkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wzXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLnJvdy5wZXIpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sNFwiIH0sIFtfdm0uX3YoXCJ2bmRcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbDVcIiB9LCBbX3ZtLl92KFwiMFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sNlwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5yb3cuYnJhbmQpKV0pXG4gICAgICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmV4cGFkaW5nX3N0YXR1c1xuICAgICAgICA/IF92bS5fbChfdm0ucm93LmNoaWxkcmVuLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJtYXRlcmlhbC1yb3dcIiwgeyBrZXk6IGl0ZW0uaWQsIGF0dHJzOiB7IHJvdzogaXRlbSB9IH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTAwNDRiZGYyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wMDQ0YmRmMlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMDA0NGJkZjJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jvd3MvTWF0ZXJpYWxSb3cudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wMDQ0YmRmMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vTWF0ZXJpYWxSb3cudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI4MTY5ZTEzY1wiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wMDQ0YmRmMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vTWF0ZXJpYWxSb3cudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTAwNDRiZGYyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9NYXRlcmlhbFJvdy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMDA0NGJkZjJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMDA0NGJkZjJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG52YXIgbGlzdFRvU3R5bGVzID0gcmVxdWlyZSgnLi9saXN0VG9TdHlsZXMnKVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24pIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtdnVlLXNzci1pZH49XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwiLyohXG4gKiB2dWUtc3dhbCB2MC4wLjNcbiAqIChjKSAyMDE3IEFudMOpcmlvIFZpZWlyYVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlZ1ZVN3YWxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVnVlU3dhbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4hZnVuY3Rpb24odCxlKXsgdHJ1ZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLnN3YWw9ZSgpOnQuc3dhbD1lKCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShvKXtpZihuW29dKXJldHVybiBuW29dLmV4cG9ydHM7dmFyIHI9bltvXT17aTpvLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbb10uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsZSksci5sPSEwLHIuZXhwb3J0c312YXIgbj17fTtyZXR1cm4gZS5tPXQsZS5jPW4sZS5kPWZ1bmN0aW9uKHQsbixvKXtlLm8odCxuKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0Om99KX0sZS5uPWZ1bmN0aW9uKHQpe3ZhciBuPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBlLmQobixcImFcIixuKSxufSxlLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LGUucD1cIlwiLGUoZS5zPTgpfShbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPVwic3dhbC1idXR0b25cIjtlLkNMQVNTX05BTUVTPXtNT0RBTDpcInN3YWwtbW9kYWxcIixPVkVSTEFZOlwic3dhbC1vdmVybGF5XCIsU0hPV19NT0RBTDpcInN3YWwtb3ZlcmxheS0tc2hvdy1tb2RhbFwiLE1PREFMX1RJVExFOlwic3dhbC10aXRsZVwiLE1PREFMX1RFWFQ6XCJzd2FsLXRleHRcIixJQ09OOlwic3dhbC1pY29uXCIsSUNPTl9DVVNUT006XCJzd2FsLWljb24tLWN1c3RvbVwiLENPTlRFTlQ6XCJzd2FsLWNvbnRlbnRcIixGT09URVI6XCJzd2FsLWZvb3RlclwiLEJVVFRPTl9DT05UQUlORVI6XCJzd2FsLWJ1dHRvbi1jb250YWluZXJcIixCVVRUT046byxDT05GSVJNX0JVVFRPTjpvK1wiLS1jb25maXJtXCIsQ0FOQ0VMX0JVVFRPTjpvK1wiLS1jYW5jZWxcIixEQU5HRVJfQlVUVE9OOm8rXCItLWRhbmdlclwiLEJVVFRPTl9MT0FESU5HOm8rXCItLWxvYWRpbmdcIixCVVRUT05fTE9BREVSOm8rXCJfX2xvYWRlclwifSxlLmRlZmF1bHQ9ZS5DTEFTU19OQU1FU30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuZ2V0Tm9kZT1mdW5jdGlvbih0KXt2YXIgZT1cIi5cIit0O3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpfSxlLnN0cmluZ1RvTm9kZT1mdW5jdGlvbih0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLmlubmVySFRNTD10LnRyaW0oKSxlLmZpcnN0Q2hpbGR9LGUuaW5zZXJ0QWZ0ZXI9ZnVuY3Rpb24odCxlKXt2YXIgbj1lLm5leHRTaWJsaW5nO2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxuKX0sZS5yZW1vdmVOb2RlPWZ1bmN0aW9uKHQpe3QucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0KX0sZS50aHJvd0Vycj1mdW5jdGlvbih0KXt0aHJvdyB0PXQucmVwbGFjZSgvICsoPz0gKS9nLFwiXCIpLFwiU3dlZXRBbGVydDogXCIrKHQ9dC50cmltKCkpfSxlLmlzUGxhaW5PYmplY3Q9ZnVuY3Rpb24odCl7aWYoXCJbb2JqZWN0IE9iamVjdF1cIiE9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSlyZXR1cm4hMTt2YXIgZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7cmV0dXJuIG51bGw9PT1lfHxlPT09T2JqZWN0LnByb3RvdHlwZX0sZS5vcmRpbmFsU3VmZml4T2Y9ZnVuY3Rpb24odCl7dmFyIGU9dCUxMCxuPXQlMTAwO3JldHVybiAxPT09ZSYmMTEhPT1uP3QrXCJzdFwiOjI9PT1lJiYxMiE9PW4/dCtcIm5kXCI6Mz09PWUmJjEzIT09bj90K1wicmRcIjp0K1widGhcIn19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKHQpe2Zvcih2YXIgbiBpbiB0KWUuaGFzT3duUHJvcGVydHkobil8fChlW25dPXRbbl0pfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8obigxOCkpO3ZhciByPW4oMTkpO2Uub3ZlcmxheU1hcmt1cD1yLmRlZmF1bHQsbyhuKDIwKSksbyhuKDIxKSksbyhuKDIyKSk7dmFyIGE9bigwKSxpPWEuZGVmYXVsdC5NT0RBTF9USVRMRSxzPWEuZGVmYXVsdC5NT0RBTF9URVhULGw9YS5kZWZhdWx0LklDT04sYz1hLmRlZmF1bHQuRk9PVEVSO2UuaWNvbk1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytsKydcIj48L2Rpdj4nLGUudGl0bGVNYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicraSsnXCI+PC9kaXY+XFxuJyxlLnRleHRNYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrcysnXCI+PC9kaXY+JyxlLmZvb3Rlck1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytjKydcIj48L2Rpdj5cXG4nfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKTtlLkNPTkZJUk1fS0VZPVwiY29uZmlybVwiLGUuQ0FOQ0VMX0tFWT1cImNhbmNlbFwiO3ZhciByPXt2aXNpYmxlOiEwLHRleHQ6bnVsbCx2YWx1ZTpudWxsLGNsYXNzTmFtZTpcIlwiLGNsb3NlTW9kYWw6ITB9LGE9T2JqZWN0LmFzc2lnbih7fSxyLHt2aXNpYmxlOiExLHRleHQ6XCJDYW5jZWxcIix2YWx1ZTpudWxsfSksaT1PYmplY3QuYXNzaWduKHt9LHIse3RleHQ6XCJPS1wiLHZhbHVlOiEwfSk7ZS5kZWZhdWx0QnV0dG9uTGlzdD17Y2FuY2VsOmEsY29uZmlybTppfTt2YXIgcz1mdW5jdGlvbih0KXtzd2l0Y2godCl7Y2FzZSBlLkNPTkZJUk1fS0VZOnJldHVybiBpO2Nhc2UgZS5DQU5DRUxfS0VZOnJldHVybiBhO2RlZmF1bHQ6dmFyIG49dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpO3JldHVybiBPYmplY3QuYXNzaWduKHt9LHIse3RleHQ6bix2YWx1ZTp0fSl9fSxsPWZ1bmN0aW9uKHQsZSl7dmFyIG49cyh0KTtyZXR1cm4hMD09PWU/T2JqZWN0LmFzc2lnbih7fSxuLHt2aXNpYmxlOiEwfSk6XCJzdHJpbmdcIj09dHlwZW9mIGU/T2JqZWN0LmFzc2lnbih7fSxuLHt2aXNpYmxlOiEwLHRleHQ6ZX0pOm8uaXNQbGFpbk9iamVjdChlKT9PYmplY3QuYXNzaWduKHt2aXNpYmxlOiEwfSxuLGUpOk9iamVjdC5hc3NpZ24oe30sbix7dmlzaWJsZTohMX0pfSxjPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT17fSxuPTAsbz1PYmplY3Qua2V5cyh0KTtuPG8ubGVuZ3RoO24rKyl7dmFyIHI9b1tuXSxpPXRbcl0scz1sKHIsaSk7ZVtyXT1zfXJldHVybiBlLmNhbmNlbHx8KGUuY2FuY2VsPWEpLGV9LHU9ZnVuY3Rpb24odCl7dmFyIG49e307c3dpdGNoKHQubGVuZ3RoKXtjYXNlIDE6bltlLkNBTkNFTF9LRVldPU9iamVjdC5hc3NpZ24oe30sYSx7dmlzaWJsZTohMX0pO2JyZWFrO2Nhc2UgMjpuW2UuQ0FOQ0VMX0tFWV09bChlLkNBTkNFTF9LRVksdFswXSksbltlLkNPTkZJUk1fS0VZXT1sKGUuQ09ORklSTV9LRVksdFsxXSk7YnJlYWs7ZGVmYXVsdDpvLnRocm93RXJyKFwiSW52YWxpZCBudW1iZXIgb2YgJ2J1dHRvbnMnIGluIGFycmF5IChcIit0Lmxlbmd0aCtcIikuXFxuICAgICAgSWYgeW91IHdhbnQgbW9yZSB0aGFuIDIgYnV0dG9ucywgeW91IG5lZWQgdG8gdXNlIGFuIG9iamVjdCFcIil9cmV0dXJuIG59O2UuZ2V0QnV0dG9uTGlzdE9wdHM9ZnVuY3Rpb24odCl7dmFyIG49ZS5kZWZhdWx0QnV0dG9uTGlzdDtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD9uW2UuQ09ORklSTV9LRVldPWwoZS5DT05GSVJNX0tFWSx0KTpBcnJheS5pc0FycmF5KHQpP249dSh0KTpvLmlzUGxhaW5PYmplY3QodCk/bj1jKHQpOiEwPT09dD9uPXUoWyEwLCEwXSk6ITE9PT10P249dShbITEsITFdKTp2b2lkIDA9PT10JiYobj1lLmRlZmF1bHRCdXR0b25MaXN0KSxufX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDIpLGE9bigwKSxpPWEuZGVmYXVsdC5NT0RBTCxzPWEuZGVmYXVsdC5PVkVSTEFZLGw9bigyMyksYz1uKDI0KSx1PW4oMjUpLGQ9bigyNik7ZS5pbmplY3RFbEludG9Nb2RhbD1mdW5jdGlvbih0KXt2YXIgZT1vLmdldE5vZGUoaSksbj1vLnN0cmluZ1RvTm9kZSh0KTtyZXR1cm4gZS5hcHBlbmRDaGlsZChuKSxufTt2YXIgZj1mdW5jdGlvbih0KXt0LmNsYXNzTmFtZT1pLHQudGV4dENvbnRlbnQ9XCJcIn0scD1mdW5jdGlvbih0LGUpe2YodCk7dmFyIG49ZS5jbGFzc05hbWU7biYmdC5jbGFzc0xpc3QuYWRkKG4pfTtlLmluaXRNb2RhbENvbnRlbnQ9ZnVuY3Rpb24odCl7dmFyIGU9by5nZXROb2RlKGkpO3AoZSx0KSxsLmRlZmF1bHQodC5pY29uKSxjLmluaXRUaXRsZSh0LnRpdGxlKSxjLmluaXRUZXh0KHQudGV4dCksZC5kZWZhdWx0KHQuY29udGVudCksdS5kZWZhdWx0KHQuYnV0dG9ucyx0LmRhbmdlck1vZGUpfTt2YXIgYj1mdW5jdGlvbigpe3ZhciB0PW8uZ2V0Tm9kZShzKSxlPW8uc3RyaW5nVG9Ob2RlKHIubW9kYWxNYXJrdXApO3QuYXBwZW5kQ2hpbGQoZSl9O2UuZGVmYXVsdD1ifSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigzKSxyPXtpc09wZW46ITEscHJvbWlzZTpudWxsLGFjdGlvbnM6e30sdGltZXI6bnVsbH0sYT1PYmplY3QuYXNzaWduKHt9LHIpO2UucmVzZXRTdGF0ZT1mdW5jdGlvbigpe2E9T2JqZWN0LmFzc2lnbih7fSxyKX0sZS5zZXRBY3Rpb25WYWx1ZT1mdW5jdGlvbih0KXtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gaShvLkNPTkZJUk1fS0VZLHQpO2Zvcih2YXIgZSBpbiB0KWkoZSx0W2VdKX07dmFyIGk9ZnVuY3Rpb24odCxlKXthLmFjdGlvbnNbdF18fChhLmFjdGlvbnNbdF09e30pLE9iamVjdC5hc3NpZ24oYS5hY3Rpb25zW3RdLHt2YWx1ZTplfSl9O2Uuc2V0QWN0aW9uT3B0aW9uc0Zvcj1mdW5jdGlvbih0LGUpe3ZhciBuPSh2b2lkIDA9PT1lP3t9OmUpLmNsb3NlTW9kYWwsbz12b2lkIDA9PT1ufHxuO09iamVjdC5hc3NpZ24oYS5hY3Rpb25zW3RdLHtjbG9zZU1vZGFsOm99KX0sZS5kZWZhdWx0PWF9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9bigzKSxhPW4oMCksaT1hLmRlZmF1bHQuT1ZFUkxBWSxzPWEuZGVmYXVsdC5TSE9XX01PREFMLGw9YS5kZWZhdWx0LkJVVFRPTixjPWEuZGVmYXVsdC5CVVRUT05fTE9BRElORyx1PW4oNSk7ZS5vcGVuTW9kYWw9ZnVuY3Rpb24oKXtvLmdldE5vZGUoaSkuY2xhc3NMaXN0LmFkZChzKSx1LmRlZmF1bHQuaXNPcGVuPSEwfTt2YXIgZD1mdW5jdGlvbigpe28uZ2V0Tm9kZShpKS5jbGFzc0xpc3QucmVtb3ZlKHMpLHUuZGVmYXVsdC5pc09wZW49ITF9O2Uub25BY3Rpb249ZnVuY3Rpb24odCl7dm9pZCAwPT09dCYmKHQ9ci5DQU5DRUxfS0VZKTt2YXIgZT11LmRlZmF1bHQuYWN0aW9uc1t0XSxuPWUudmFsdWU7aWYoITE9PT1lLmNsb3NlTW9kYWwpe3ZhciBhPWwrXCItLVwiK3Q7by5nZXROb2RlKGEpLmNsYXNzTGlzdC5hZGQoYyl9ZWxzZSBkKCk7dS5kZWZhdWx0LnByb21pc2UucmVzb2x2ZShuKX0sZS5nZXRTdGF0ZT1mdW5jdGlvbigpe3ZhciB0PU9iamVjdC5hc3NpZ24oe30sdS5kZWZhdWx0KTtyZXR1cm4gZGVsZXRlIHQucHJvbWlzZSxkZWxldGUgdC50aW1lcix0fSxlLnN0b3BMb2FkaW5nPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrbCksZT0wO2U8dC5sZW5ndGg7ZSsrKXt0W2VdLmNsYXNzTGlzdC5yZW1vdmUoYyl9fX0sZnVuY3Rpb24odCxlKXt2YXIgbjtuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCk7dHJ5e249bnx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfHwoMCxldmFsKShcInRoaXNcIil9Y2F0Y2godCl7XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmKG49d2luZG93KX10LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLG4peyhmdW5jdGlvbihlKXt0LmV4cG9ydHM9ZS5zd2VldEFsZXJ0PW4oOSl9KS5jYWxsKGUsbig3KSl9LGZ1bmN0aW9uKHQsZSxuKXsoZnVuY3Rpb24oZSl7dC5leHBvcnRzPWUuc3dhbD1uKDEwKX0pLmNhbGwoZSxuKDcpKX0sZnVuY3Rpb24odCxlLG4pe1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJm4oMTEpO3ZhciBvPW4oMTYpLmRlZmF1bHQ7dC5leHBvcnRzPW99LGZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1uKDEyKTtcInN0cmluZ1wiPT10eXBlb2YgbyYmKG89W1t0LmksbyxcIlwiXV0pO3ZhciByPXtpbnNlcnRBdDpcInRvcFwifTtyLnRyYW5zZm9ybT12b2lkIDA7bigxNCkobyxyKTtvLmxvY2FscyYmKHQuZXhwb3J0cz1vLmxvY2Fscyl9LGZ1bmN0aW9uKHQsZSxuKXtlPXQuZXhwb3J0cz1uKDEzKSh2b2lkIDApLGUucHVzaChbdC5pLCcuc3dhbC1pY29uLS1lcnJvcntib3JkZXItY29sb3I6I2YyNzQ3NDstd2Via2l0LWFuaW1hdGlvbjphbmltYXRlRXJyb3JJY29uIC41czthbmltYXRpb246YW5pbWF0ZUVycm9ySWNvbiAuNXN9LnN3YWwtaWNvbi0tZXJyb3JfX3gtbWFya3twb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrOy13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGVYTWFyayAuNXM7YW5pbWF0aW9uOmFuaW1hdGVYTWFyayAuNXN9LnN3YWwtaWNvbi0tZXJyb3JfX2xpbmV7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjVweDt3aWR0aDo0N3B4O2JhY2tncm91bmQtY29sb3I6I2YyNzQ3NDtkaXNwbGF5OmJsb2NrO3RvcDozN3B4O2JvcmRlci1yYWRpdXM6MnB4fS5zd2FsLWljb24tLWVycm9yX19saW5lLS1sZWZ0ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7bGVmdDoxN3B4fS5zd2FsLWljb24tLWVycm9yX19saW5lLS1yaWdodHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7cmlnaHQ6MTZweH1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZUVycm9ySWNvbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgwZGVnKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgYW5pbWF0ZUVycm9ySWNvbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgwZGVnKTtvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlWE1hcmt7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7dHJhbnNmb3JtOnNjYWxlKDEuMTUpO21hcmdpbi10b3A6LTZweH10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7bWFyZ2luLXRvcDowO29wYWNpdHk6MX19QGtleWZyYW1lcyBhbmltYXRlWE1hcmt7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7dHJhbnNmb3JtOnNjYWxlKDEuMTUpO21hcmdpbi10b3A6LTZweH10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7bWFyZ2luLXRvcDowO29wYWNpdHk6MX19LnN3YWwtaWNvbi0td2FybmluZ3tib3JkZXItY29sb3I6I2Y4YmI4Njstd2Via2l0LWFuaW1hdGlvbjpwdWxzZVdhcm5pbmcgLjc1cyBpbmZpbml0ZSBhbHRlcm5hdGU7YW5pbWF0aW9uOnB1bHNlV2FybmluZyAuNzVzIGluZmluaXRlIGFsdGVybmF0ZX0uc3dhbC1pY29uLS13YXJuaW5nX19ib2R5e3dpZHRoOjVweDtoZWlnaHQ6NDdweDt0b3A6MTBweDtib3JkZXItcmFkaXVzOjJweDttYXJnaW4tbGVmdDotMnB4fS5zd2FsLWljb24tLXdhcm5pbmdfX2JvZHksLnN3YWwtaWNvbi0td2FybmluZ19fZG90e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO2JhY2tncm91bmQtY29sb3I6I2Y4YmI4Nn0uc3dhbC1pY29uLS13YXJuaW5nX19kb3R7d2lkdGg6N3B4O2hlaWdodDo3cHg7Ym9yZGVyLXJhZGl1czo1MCU7bWFyZ2luLWxlZnQ6LTRweDtib3R0b206LTExcHh9QC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlV2FybmluZ3swJXtib3JkZXItY29sb3I6I2Y4ZDQ4Nn10b3tib3JkZXItY29sb3I6I2Y4YmI4Nn19QGtleWZyYW1lcyBwdWxzZVdhcm5pbmd7MCV7Ym9yZGVyLWNvbG9yOiNmOGQ0ODZ9dG97Ym9yZGVyLWNvbG9yOiNmOGJiODZ9fS5zd2FsLWljb24tLXN1Y2Nlc3N7Ym9yZGVyLWNvbG9yOiNhNWRjODZ9LnN3YWwtaWNvbi0tc3VjY2VzczphZnRlciwuc3dhbC1pY29uLS1zdWNjZXNzOmJlZm9yZXtjb250ZW50OlwiXCI7Ym9yZGVyLXJhZGl1czo1MCU7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6NjBweDtoZWlnaHQ6MTIwcHg7YmFja2dyb3VuZDojZmZmOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnN3YWwtaWNvbi0tc3VjY2VzczpiZWZvcmV7Ym9yZGVyLXJhZGl1czoxMjBweCAwIDAgMTIwcHg7dG9wOi03cHg7bGVmdDotMzNweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjYwcHggNjBweDt0cmFuc2Zvcm0tb3JpZ2luOjYwcHggNjBweH0uc3dhbC1pY29uLS1zdWNjZXNzOmFmdGVye2JvcmRlci1yYWRpdXM6MCAxMjBweCAxMjBweCAwO3RvcDotMTFweDtsZWZ0OjMwcHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowIDYwcHg7dHJhbnNmb3JtLW9yaWdpbjowIDYwcHg7LXdlYmtpdC1hbmltYXRpb246cm90YXRlUGxhY2Vob2xkZXIgNC4yNXMgZWFzZS1pbjthbmltYXRpb246cm90YXRlUGxhY2Vob2xkZXIgNC4yNXMgZWFzZS1pbn0uc3dhbC1pY29uLS1zdWNjZXNzX19yaW5ne3dpZHRoOjgwcHg7aGVpZ2h0OjgwcHg7Ym9yZGVyOjRweCBzb2xpZCBoc2xhKDk4LDU1JSw2OSUsLjIpO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaXppbmc6Y29udGVudC1ib3g7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotNHB4O3RvcDotNHB4O3otaW5kZXg6Mn0uc3dhbC1pY29uLS1zdWNjZXNzX19oaWRlLWNvcm5lcnN7d2lkdGg6NXB4O2hlaWdodDo5MHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjI4cHg7dG9wOjhweDt6LWluZGV4OjE7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsLWljb24tLXN1Y2Nlc3NfX2xpbmV7aGVpZ2h0OjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNhNWRjODY7ZGlzcGxheTpibG9jaztib3JkZXItcmFkaXVzOjJweDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjJ9LnN3YWwtaWNvbi0tc3VjY2Vzc19fbGluZS0tdGlwe3dpZHRoOjI1cHg7bGVmdDoxNHB4O3RvcDo0NnB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7LXdlYmtpdC1hbmltYXRpb246YW5pbWF0ZVN1Y2Nlc3NUaXAgLjc1czthbmltYXRpb246YW5pbWF0ZVN1Y2Nlc3NUaXAgLjc1c30uc3dhbC1pY29uLS1zdWNjZXNzX19saW5lLS1sb25ne3dpZHRoOjQ3cHg7cmlnaHQ6OHB4O3RvcDozOHB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LWFuaW1hdGlvbjphbmltYXRlU3VjY2Vzc0xvbmcgLjc1czthbmltYXRpb246YW5pbWF0ZVN1Y2Nlc3NMb25nIC43NXN9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZVBsYWNlaG9sZGVyezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX01JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9MTIley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfX1Aa2V5ZnJhbWVzIHJvdGF0ZVBsYWNlaG9sZGVyezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX01JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9MTIley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZVN1Y2Nlc3NUaXB7MCV7d2lkdGg6MDtsZWZ0OjFweDt0b3A6MTlweH01NCV7d2lkdGg6MDtsZWZ0OjFweDt0b3A6MTlweH03MCV7d2lkdGg6NTBweDtsZWZ0Oi04cHg7dG9wOjM3cHh9ODQle3dpZHRoOjE3cHg7bGVmdDoyMXB4O3RvcDo0OHB4fXRve3dpZHRoOjI1cHg7bGVmdDoxNHB4O3RvcDo0NXB4fX1Aa2V5ZnJhbWVzIGFuaW1hdGVTdWNjZXNzVGlwezAle3dpZHRoOjA7bGVmdDoxcHg7dG9wOjE5cHh9NTQle3dpZHRoOjA7bGVmdDoxcHg7dG9wOjE5cHh9NzAle3dpZHRoOjUwcHg7bGVmdDotOHB4O3RvcDozN3B4fTg0JXt3aWR0aDoxN3B4O2xlZnQ6MjFweDt0b3A6NDhweH10b3t3aWR0aDoyNXB4O2xlZnQ6MTRweDt0b3A6NDVweH19QC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGVTdWNjZXNzTG9uZ3swJXt3aWR0aDowO3JpZ2h0OjQ2cHg7dG9wOjU0cHh9NjUle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH04NCV7d2lkdGg6NTVweDtyaWdodDowO3RvcDozNXB4fXRve3dpZHRoOjQ3cHg7cmlnaHQ6OHB4O3RvcDozOHB4fX1Aa2V5ZnJhbWVzIGFuaW1hdGVTdWNjZXNzTG9uZ3swJXt3aWR0aDowO3JpZ2h0OjQ2cHg7dG9wOjU0cHh9NjUle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH04NCV7d2lkdGg6NTVweDtyaWdodDowO3RvcDozNXB4fXRve3dpZHRoOjQ3cHg7cmlnaHQ6OHB4O3RvcDozOHB4fX0uc3dhbC1pY29uLS1pbmZve2JvcmRlci1jb2xvcjojYzlkYWUxfS5zd2FsLWljb24tLWluZm86YmVmb3Jle3dpZHRoOjVweDtoZWlnaHQ6MjlweDtib3R0b206MTdweDtib3JkZXItcmFkaXVzOjJweDttYXJnaW4tbGVmdDotMnB4fS5zd2FsLWljb24tLWluZm86YWZ0ZXIsLnN3YWwtaWNvbi0taW5mbzpiZWZvcmV7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO2JhY2tncm91bmQtY29sb3I6I2M5ZGFlMX0uc3dhbC1pY29uLS1pbmZvOmFmdGVye3dpZHRoOjdweDtoZWlnaHQ6N3B4O2JvcmRlci1yYWRpdXM6NTAlO21hcmdpbi1sZWZ0Oi0zcHg7dG9wOjE5cHh9LnN3YWwtaWNvbnt3aWR0aDo4MHB4O2hlaWdodDo4MHB4O2JvcmRlci13aWR0aDo0cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1yYWRpdXM6NTAlO3BhZGRpbmc6MDtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O21hcmdpbjoyMHB4IGF1dG99LnN3YWwtaWNvbjpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOjMycHh9LnN3YWwtaWNvbi0tY3VzdG9te3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87bWF4LXdpZHRoOjEwMCU7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowfS5zd2FsLWljb24gaW1ne21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJX0uc3dhbC10aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC42NSk7Zm9udC13ZWlnaHQ6NjAwO3RleHQtdHJhbnNmb3JtOm5vbmU7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztwYWRkaW5nOjEzcHggMTZweDtmb250LXNpemU6MjdweDtsaW5lLWhlaWdodDpub3JtYWw7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLWJvdHRvbTowfS5zd2FsLXRpdGxlOmZpcnN0LWNoaWxke21hcmdpbi10b3A6MjZweH0uc3dhbC10aXRsZTpub3QoOmZpcnN0LWNoaWxkKXtwYWRkaW5nLWJvdHRvbTowfS5zd2FsLXRpdGxlOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToxM3B4fS5zd2FsLXRleHR7Zm9udC1zaXplOjE2cHg7cG9zaXRpb246cmVsYXRpdmU7ZmxvYXQ6bm9uZTtsaW5lLWhlaWdodDpub3JtYWw7dmVydGljYWwtYWxpZ246dG9wO3RleHQtYWxpZ246bGVmdDtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW46MDtwYWRkaW5nOjAgMTBweDtmb250LXdlaWdodDo0MDA7Y29sb3I6cmdiYSgwLDAsMCwuNjQpO21heC13aWR0aDpjYWxjKDEwMCUgLSAyMHB4KTtvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7Ym94LXNpemluZzpib3JkZXItYm94fS5zd2FsLXRleHQ6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDo0NXB4fS5zd2FsLXRleHQ6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjQ1cHh9LnN3YWwtZm9vdGVye3RleHQtYWxpZ246cmlnaHQ7cGFkZGluZy10b3A6MTNweDttYXJnaW4tdG9wOjEzcHg7cGFkZGluZzoxM3B4IDE2cHg7Ym9yZGVyLXJhZGl1czppbmhlcml0O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowfS5zd2FsLWJ1dHRvbi1jb250YWluZXJ7bWFyZ2luOjVweDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0uc3dhbC1idXR0b257YmFja2dyb3VuZC1jb2xvcjojN2NkMWY5O2NvbG9yOiNmZmY7Ym9yZGVyOm5vbmU7Ym94LXNoYWRvdzpub25lO2JvcmRlci1yYWRpdXM6NXB4O2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTRweDtwYWRkaW5nOjEwcHggMjRweDttYXJnaW46MDtjdXJzb3I6cG9pbnRlcn0uc3dhbC1idXR0b25bbm90OmRpc2FibGVkXTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM3OGNiZjJ9LnN3YWwtYnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiM3MGJjZTB9LnN3YWwtYnV0dG9uOmZvY3Vze291dGxpbmU6bm9uZTtib3gtc2hhZG93OjAgMCAwIDFweCAjZmZmLDAgMCAwIDNweCByZ2JhKDQzLDExNCwxNjUsLjI5KX0uc3dhbC1idXR0b25bZGlzYWJsZWRde29wYWNpdHk6LjU7Y3Vyc29yOmRlZmF1bHR9LnN3YWwtYnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5zd2FsLWJ1dHRvbi0tY2FuY2Vse2NvbG9yOiM1NTU7YmFja2dyb3VuZC1jb2xvcjojZWZlZmVmfS5zd2FsLWJ1dHRvbi0tY2FuY2VsW25vdDpkaXNhYmxlZF06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZThlOGU4fS5zd2FsLWJ1dHRvbi0tY2FuY2VsOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNkN2Q3ZDd9LnN3YWwtYnV0dG9uLS1jYW5jZWw6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAxcHggI2ZmZiwwIDAgMCAzcHggcmdiYSgxMTYsMTM2LDE1MCwuMjkpfS5zd2FsLWJ1dHRvbi0tZGFuZ2Vye2JhY2tncm91bmQtY29sb3I6I2U2NDk0Mn0uc3dhbC1idXR0b24tLWRhbmdlcltub3Q6ZGlzYWJsZWRdOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2RmNDc0MH0uc3dhbC1idXR0b24tLWRhbmdlcjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojY2Y0MjNifS5zd2FsLWJ1dHRvbi0tZGFuZ2VyOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgMXB4ICNmZmYsMCAwIDAgM3B4IHJnYmEoMTY1LDQzLDQzLC4yOSl9LnN3YWwtY29udGVudHtwYWRkaW5nOjAgMjBweDttYXJnaW4tdG9wOjIwcHg7Zm9udC1zaXplOm1lZGl1bX0uc3dhbC1jb250ZW50Omxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbToyMHB4fS5zd2FsLWNvbnRlbnRfX2lucHV0LC5zd2FsLWNvbnRlbnRfX3RleHRhcmVhey13ZWJraXQtYXBwZWFyYW5jZTpub25lO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6bm9uZTtmb250LXNpemU6MTRweDtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxMDAlO2JvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMTQpO3BhZGRpbmc6MTBweCAxM3B4O2JvcmRlci1yYWRpdXM6MnB4Oy13ZWJraXQtdHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjJzO3RyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4yc30uc3dhbC1jb250ZW50X19pbnB1dDpmb2N1cywuc3dhbC1jb250ZW50X190ZXh0YXJlYTpmb2N1c3tvdXRsaW5lOm5vbmU7Ym9yZGVyLWNvbG9yOiM2ZGI4ZmZ9LnN3YWwtY29udGVudF9fdGV4dGFyZWF7cmVzaXplOnZlcnRpY2FsfS5zd2FsLWJ1dHRvbi0tbG9hZGluZ3tjb2xvcjp0cmFuc3BhcmVudH0uc3dhbC1idXR0b24tLWxvYWRpbmd+LnN3YWwtYnV0dG9uX19sb2FkZXJ7b3BhY2l0eToxfS5zd2FsLWJ1dHRvbl9fbG9hZGVye3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDphdXRvO3dpZHRoOjQzcHg7ei1pbmRleDoyO2xlZnQ6NTAlO3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7dGV4dC1hbGlnbjpjZW50ZXI7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjB9LnN3YWwtYnV0dG9uX19sb2FkZXIgZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7d2lkdGg6OXB4O2hlaWdodDo5cHg7cGFkZGluZzowO2JvcmRlcjpub25lO21hcmdpbjoycHg7b3BhY2l0eTouNDtib3JkZXItcmFkaXVzOjdweDtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC45KTstd2Via2l0LXRyYW5zaXRpb246YmFja2dyb3VuZCAuMnM7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4yczstd2Via2l0LWFuaW1hdGlvbjpzd2FsLWxvYWRpbmctYW5pbSAxcyBpbmZpbml0ZTthbmltYXRpb246c3dhbC1sb2FkaW5nLWFuaW0gMXMgaW5maW5pdGV9LnN3YWwtYnV0dG9uX19sb2FkZXIgZGl2Om50aC1jaGlsZCgzbisyKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouMTVzO2FuaW1hdGlvbi1kZWxheTouMTVzfS5zd2FsLWJ1dHRvbl9fbG9hZGVyIGRpdjpudGgtY2hpbGQoM24rMyl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LjNzO2FuaW1hdGlvbi1kZWxheTouM3N9QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwtbG9hZGluZy1hbmltezAle29wYWNpdHk6LjR9MjAle29wYWNpdHk6LjR9NTAle29wYWNpdHk6MX10b3tvcGFjaXR5Oi40fX1Aa2V5ZnJhbWVzIHN3YWwtbG9hZGluZy1hbmltezAle29wYWNpdHk6LjR9MjAle29wYWNpdHk6LjR9NTAle29wYWNpdHk6MX10b3tvcGFjaXR5Oi40fX0uc3dhbC1vdmVybGF5e3Bvc2l0aW9uOmZpeGVkO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZTowO292ZXJmbG93LXk6c2Nyb2xsO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNCk7ei1pbmRleDoxMDAwMDtwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MDstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuM3M7dHJhbnNpdGlvbjpvcGFjaXR5IC4zc30uc3dhbC1vdmVybGF5OmJlZm9yZXtjb250ZW50OlwiIFwiO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtoZWlnaHQ6MTAwJX0uc3dhbC1vdmVybGF5LS1zaG93LW1vZGFse29wYWNpdHk6MTtwb2ludGVyLWV2ZW50czphdXRvfS5zd2FsLW92ZXJsYXktLXNob3ctbW9kYWwgLnN3YWwtbW9kYWx7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYW5pbWF0aW9uOnNob3dTd2VldEFsZXJ0IC4zczthbmltYXRpb246c2hvd1N3ZWV0QWxlcnQgLjNzO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0uc3dhbC1tb2RhbHt3aWR0aDo0NzhweDtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXI7Ym9yZGVyLXJhZGl1czo1cHg7cG9zaXRpb246c3RhdGljO21hcmdpbjoyMHB4IGF1dG87ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7ei1pbmRleDoxMDAwMTstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjNzO3RyYW5zaXRpb246b3BhY2l0eSAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjNzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcyxvcGFjaXR5IC4yczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3Msb3BhY2l0eSAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjNzfUBtZWRpYSAobWF4LXdpZHRoOjUwMHB4KXsuc3dhbC1tb2RhbHt3aWR0aDpjYWxjKDEwMCUgLSAyMHB4KX19QC13ZWJraXQta2V5ZnJhbWVzIHNob3dTd2VldEFsZXJ0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0xJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX00NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpO3RyYW5zZm9ybTpzY2FsZSguOTUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBzaG93U3dlZXRBbGVydHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9MSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSl9NDUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTt0cmFuc2Zvcm06c2NhbGUoLjk1KX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fScsXCJcIl0pfSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4odCxlKXt2YXIgbj10WzFdfHxcIlwiLHI9dFszXTtpZighcilyZXR1cm4gbjtpZihlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBidG9hKXt2YXIgYT1vKHIpO3JldHVybltuXS5jb25jYXQoci5zb3VyY2VzLm1hcChmdW5jdGlvbih0KXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIrci5zb3VyY2VSb290K3QrXCIgKi9cIn0pKS5jb25jYXQoW2FdKS5qb2luKFwiXFxuXCIpfXJldHVybltuXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIG8odCl7cmV0dXJuXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkodCkpKSkrXCIgKi9cIn10LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9W107cmV0dXJuIGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oZSl7dmFyIG89bihlLHQpO3JldHVybiBlWzJdP1wiQG1lZGlhIFwiK2VbMl0rXCJ7XCIrbytcIn1cIjpvfSkuam9pbihcIlwiKX0sZS5pPWZ1bmN0aW9uKHQsbil7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PVtbbnVsbCx0LFwiXCJdXSk7Zm9yKHZhciBvPXt9LHI9MDtyPHRoaXMubGVuZ3RoO3IrKyl7dmFyIGE9dGhpc1tyXVswXTtcIm51bWJlclwiPT10eXBlb2YgYSYmKG9bYV09ITApfWZvcihyPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBpPXRbcl07XCJudW1iZXJcIj09dHlwZW9mIGlbMF0mJm9baVswXV18fChuJiYhaVsyXT9pWzJdPW46biYmKGlbMl09XCIoXCIraVsyXStcIikgYW5kIChcIituK1wiKVwiKSxlLnB1c2goaSkpfX0sZX19LGZ1bmN0aW9uKHQsZSxuKXtmdW5jdGlvbiBvKHQsZSl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl0scj1iW28uaWRdO2lmKHIpe3IucmVmcysrO2Zvcih2YXIgYT0wO2E8ci5wYXJ0cy5sZW5ndGg7YSsrKXIucGFydHNbYV0oby5wYXJ0c1thXSk7Zm9yKDthPG8ucGFydHMubGVuZ3RoO2ErKylyLnBhcnRzLnB1c2godShvLnBhcnRzW2FdLGUpKX1lbHNle2Zvcih2YXIgaT1bXSxhPTA7YTxvLnBhcnRzLmxlbmd0aDthKyspaS5wdXNoKHUoby5wYXJ0c1thXSxlKSk7YltvLmlkXT17aWQ6by5pZCxyZWZzOjEscGFydHM6aX19fX1mdW5jdGlvbiByKHQsZSl7Zm9yKHZhciBuPVtdLG89e30scj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgYT10W3JdLGk9ZS5iYXNlP2FbMF0rZS5iYXNlOmFbMF0scz1hWzFdLGw9YVsyXSxjPWFbM10sdT17Y3NzOnMsbWVkaWE6bCxzb3VyY2VNYXA6Y307b1tpXT9vW2ldLnBhcnRzLnB1c2godSk6bi5wdXNoKG9baV09e2lkOmkscGFydHM6W3VdfSl9cmV0dXJuIG59ZnVuY3Rpb24gYSh0LGUpe3ZhciBuPWcodC5pbnNlcnRJbnRvKTtpZighbil0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt2YXIgbz14W3gubGVuZ3RoLTFdO2lmKFwidG9wXCI9PT10Lmluc2VydEF0KW8/by5uZXh0U2libGluZz9uLmluc2VydEJlZm9yZShlLG8ubmV4dFNpYmxpbmcpOm4uYXBwZW5kQ2hpbGQoZSk6bi5pbnNlcnRCZWZvcmUoZSxuLmZpcnN0Q2hpbGQpLHgucHVzaChlKTtlbHNle2lmKFwiYm90dG9tXCIhPT10Lmluc2VydEF0KXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtuLmFwcGVuZENoaWxkKGUpfX1mdW5jdGlvbiBpKHQpe2lmKG51bGw9PT10LnBhcmVudE5vZGUpcmV0dXJuITE7dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpO3ZhciBlPXguaW5kZXhPZih0KTtlPj0wJiZ4LnNwbGljZShlLDEpfWZ1bmN0aW9uIHModCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3JldHVybiB0LmF0dHJzLnR5cGU9XCJ0ZXh0L2Nzc1wiLGMoZSx0LmF0dHJzKSxhKHQsZSksZX1mdW5jdGlvbiBsKHQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO3JldHVybiB0LmF0dHJzLnR5cGU9XCJ0ZXh0L2Nzc1wiLHQuYXR0cnMucmVsPVwic3R5bGVzaGVldFwiLGMoZSx0LmF0dHJzKSxhKHQsZSksZX1mdW5jdGlvbiBjKHQsZSl7T2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbihuKXt0LnNldEF0dHJpYnV0ZShuLGVbbl0pfSl9ZnVuY3Rpb24gdSh0LGUpe3ZhciBuLG8scixhO2lmKGUudHJhbnNmb3JtJiZ0LmNzcyl7aWYoIShhPWUudHJhbnNmb3JtKHQuY3NzKSkpcmV0dXJuIGZ1bmN0aW9uKCl7fTt0LmNzcz1hfWlmKGUuc2luZ2xldG9uKXt2YXIgYz13Kys7bj12fHwodj1zKGUpKSxvPWQuYmluZChudWxsLG4sYywhMSkscj1kLmJpbmQobnVsbCxuLGMsITApfWVsc2UgdC5zb3VyY2VNYXAmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFVSTCYmXCJmdW5jdGlvblwiPT10eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCYmXCJmdW5jdGlvblwiPT10eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCYmXCJmdW5jdGlvblwiPT10eXBlb2YgQmxvYiYmXCJmdW5jdGlvblwiPT10eXBlb2YgYnRvYT8obj1sKGUpLG89cC5iaW5kKG51bGwsbixlKSxyPWZ1bmN0aW9uKCl7aShuKSxuLmhyZWYmJlVSTC5yZXZva2VPYmplY3RVUkwobi5ocmVmKX0pOihuPXMoZSksbz1mLmJpbmQobnVsbCxuKSxyPWZ1bmN0aW9uKCl7aShuKX0pO3JldHVybiBvKHQpLGZ1bmN0aW9uKGUpe2lmKGUpe2lmKGUuY3NzPT09dC5jc3MmJmUubWVkaWE9PT10Lm1lZGlhJiZlLnNvdXJjZU1hcD09PXQuc291cmNlTWFwKXJldHVybjtvKHQ9ZSl9ZWxzZSByKCl9fWZ1bmN0aW9uIGQodCxlLG4sbyl7dmFyIHI9bj9cIlwiOm8uY3NzO2lmKHQuc3R5bGVTaGVldCl0LnN0eWxlU2hlZXQuY3NzVGV4dD15KGUscik7ZWxzZXt2YXIgYT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyKSxpPXQuY2hpbGROb2RlcztpW2VdJiZ0LnJlbW92ZUNoaWxkKGlbZV0pLGkubGVuZ3RoP3QuaW5zZXJ0QmVmb3JlKGEsaVtlXSk6dC5hcHBlbmRDaGlsZChhKX19ZnVuY3Rpb24gZih0LGUpe3ZhciBuPWUuY3NzLG89ZS5tZWRpYTtpZihvJiZ0LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsbyksdC5zdHlsZVNoZWV0KXQuc3R5bGVTaGVldC5jc3NUZXh0PW47ZWxzZXtmb3IoO3QuZmlyc3RDaGlsZDspdC5yZW1vdmVDaGlsZCh0LmZpcnN0Q2hpbGQpO3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobikpfX1mdW5jdGlvbiBwKHQsZSxuKXt2YXIgbz1uLmNzcyxyPW4uc291cmNlTWFwLGE9dm9pZCAwPT09ZS5jb252ZXJ0VG9BYnNvbHV0ZVVybHMmJnI7KGUuY29udmVydFRvQWJzb2x1dGVVcmxzfHxhKSYmKG89aChvKSksciYmKG8rPVwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIitidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShyKSkpKStcIiAqL1wiKTt2YXIgaT1uZXcgQmxvYihbb10se3R5cGU6XCJ0ZXh0L2Nzc1wifSkscz10LmhyZWY7dC5ocmVmPVVSTC5jcmVhdGVPYmplY3RVUkwoaSkscyYmVVJMLnJldm9rZU9iamVjdFVSTChzKX12YXIgYj17fSxtPWZ1bmN0aW9uKHQpe3ZhciBlO3JldHVybiBmdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT1lJiYoZT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKSksZX19KGZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdyYmZG9jdW1lbnQmJmRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9ifSksZz1mdW5jdGlvbih0KXt2YXIgZT17fTtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIHZvaWQgMD09PWVbbl0mJihlW25dPXQuY2FsbCh0aGlzLG4pKSxlW25dfX0oZnVuY3Rpb24odCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodCl9KSx2PW51bGwsdz0wLHg9W10saD1uKDE1KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgREVCVUcmJkRFQlVHJiZcIm9iamVjdFwiIT10eXBlb2YgZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO2U9ZXx8e30sZS5hdHRycz1cIm9iamVjdFwiPT10eXBlb2YgZS5hdHRycz9lLmF0dHJzOnt9LGUuc2luZ2xldG9ufHwoZS5zaW5nbGV0b249bSgpKSxlLmluc2VydEludG98fChlLmluc2VydEludG89XCJoZWFkXCIpLGUuaW5zZXJ0QXR8fChlLmluc2VydEF0PVwiYm90dG9tXCIpO3ZhciBuPXIodCxlKTtyZXR1cm4gbyhuLGUpLGZ1bmN0aW9uKHQpe2Zvcih2YXIgYT1bXSxpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciBzPW5baV0sbD1iW3MuaWRdO2wucmVmcy0tLGEucHVzaChsKX1pZih0KXtvKHIodCxlKSxlKX1mb3IodmFyIGk9MDtpPGEubGVuZ3RoO2krKyl7dmFyIGw9YVtpXTtpZigwPT09bC5yZWZzKXtmb3IodmFyIGM9MDtjPGwucGFydHMubGVuZ3RoO2MrKylsLnBhcnRzW2NdKCk7ZGVsZXRlIGJbbC5pZF19fX19O3ZhciB5PWZ1bmN0aW9uKCl7dmFyIHQ9W107cmV0dXJuIGZ1bmN0aW9uKGUsbil7cmV0dXJuIHRbZV09bix0LmZpbHRlcihCb29sZWFuKS5qb2luKFwiXFxuXCIpfX0oKX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LmxvY2F0aW9uO2lmKCFlKXRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO2lmKCF0fHxcInN0cmluZ1wiIT10eXBlb2YgdClyZXR1cm4gdDt2YXIgbj1lLnByb3RvY29sK1wiLy9cIitlLmhvc3Qsbz1uK2UucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLFwiL1wiKTtyZXR1cm4gdC5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSxmdW5jdGlvbih0LGUpe3ZhciByPWUudHJpbSgpLnJlcGxhY2UoL15cIiguKilcIiQvLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGV9KS5yZXBsYWNlKC9eJyguKiknJC8sZnVuY3Rpb24odCxlKXtyZXR1cm4gZX0pO2lmKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QocikpcmV0dXJuIHQ7dmFyIGE7cmV0dXJuIGE9MD09PXIuaW5kZXhPZihcIi8vXCIpP3I6MD09PXIuaW5kZXhPZihcIi9cIik/bityOm8rci5yZXBsYWNlKC9eXFwuXFwvLyxcIlwiKSxcInVybChcIitKU09OLnN0cmluZ2lmeShhKStcIilcIn0pfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMTcpLHI9big2KSxhPW4oNSksaT1uKDI5KSxzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXRbZV09YXJndW1lbnRzW2VdO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cpe3ZhciBuPWkuZ2V0T3B0cy5hcHBseSh2b2lkIDAsdCk7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQsZSl7YS5kZWZhdWx0LnByb21pc2U9e3Jlc29sdmU6dCxyZWplY3Q6ZX0sby5kZWZhdWx0KG4pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyLm9wZW5Nb2RhbCgpfSl9KX19O3MuY2xvc2U9ci5vbkFjdGlvbixzLmdldFN0YXRlPXIuZ2V0U3RhdGUscy5zZXRBY3Rpb25WYWx1ZT1hLnNldEFjdGlvblZhbHVlLHMuc3RvcExvYWRpbmc9ci5zdG9wTG9hZGluZyxzLnNldERlZmF1bHRzPWkuc2V0RGVmYXVsdHMsZS5kZWZhdWx0PXN9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9bigwKSxhPXIuZGVmYXVsdC5NT0RBTCxpPW4oNCkscz1uKDI3KSxsPW4oMjgpLGM9bigxKTtlLmluaXQ9ZnVuY3Rpb24odCl7by5nZXROb2RlKGEpfHwoZG9jdW1lbnQuYm9keXx8Yy50aHJvd0VycihcIllvdSBjYW4gb25seSB1c2UgU3dlZXRBbGVydCBBRlRFUiB0aGUgRE9NIGhhcyBsb2FkZWQhXCIpLHMuZGVmYXVsdCgpLGkuZGVmYXVsdCgpKSxpLmluaXRNb2RhbENvbnRlbnQodCksbC5kZWZhdWx0KHQpfSxlLmRlZmF1bHQ9ZS5pbml0fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigwKSxyPW8uZGVmYXVsdC5NT0RBTDtlLm1vZGFsTWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK3IrJ1wiPjwvZGl2PicsZS5kZWZhdWx0PWUubW9kYWxNYXJrdXB9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApLHI9by5kZWZhdWx0Lk9WRVJMQVksYT0nPGRpdiBcXG4gICAgY2xhc3M9XCInK3IrJ1wiXFxuICAgIHRhYkluZGV4PVwiLTFcIj5cXG4gIDwvZGl2Pic7ZS5kZWZhdWx0PWF9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApLHI9by5kZWZhdWx0LklDT047ZS5lcnJvckljb25NYXJrdXA9ZnVuY3Rpb24oKXt2YXIgdD1yK1wiLS1lcnJvclwiLGU9dCtcIl9fbGluZVwiO3JldHVybidcXG4gICAgPGRpdiBjbGFzcz1cIicrdCsnX194LW1hcmtcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cIicrZStcIiBcIitlKyctLWxlZnRcIj48L3NwYW4+XFxuICAgICAgPHNwYW4gY2xhc3M9XCInK2UrXCIgXCIrZSsnLS1yaWdodFwiPjwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAnfSxlLndhcm5pbmdJY29uTWFya3VwPWZ1bmN0aW9uKCl7dmFyIHQ9citcIi0td2FybmluZ1wiO3JldHVybidcXG4gICAgPHNwYW4gY2xhc3M9XCInK3QrJ19fYm9keVwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVwiJyt0KydfX2RvdFwiPjwvc3Bhbj5cXG4gICAgPC9zcGFuPlxcbiAgJ30sZS5zdWNjZXNzSWNvbk1hcmt1cD1mdW5jdGlvbigpe3ZhciB0PXIrXCItLXN1Y2Nlc3NcIjtyZXR1cm4nXFxuICAgIDxzcGFuIGNsYXNzPVwiJyt0K1wiX19saW5lIFwiK3QrJ19fbGluZS0tbG9uZ1wiPjwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XCInK3QrXCJfX2xpbmUgXCIrdCsnX19saW5lLS10aXBcIj48L3NwYW4+XFxuXFxuICAgIDxkaXYgY2xhc3M9XCInK3QrJ19fcmluZ1wiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVwiJyt0KydfX2hpZGUtY29ybmVyc1wiPjwvZGl2PlxcbiAgJ319LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApLHI9by5kZWZhdWx0LkNPTlRFTlQ7ZS5jb250ZW50TWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK3IrJ1wiPlxcblxcbiAgPC9kaXY+XFxuJ30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCkscj1vLmRlZmF1bHQuQlVUVE9OX0NPTlRBSU5FUixhPW8uZGVmYXVsdC5CVVRUT04saT1vLmRlZmF1bHQuQlVUVE9OX0xPQURFUjtlLmJ1dHRvbk1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytyKydcIj5cXG5cXG4gICAgPGJ1dHRvblxcbiAgICAgIGNsYXNzPVwiJythKydcIlxcbiAgICA+PC9idXR0b24+XFxuXFxuICAgIDxkaXYgY2xhc3M9XCInK2krJ1wiPlxcbiAgICAgIDxkaXY+PC9kaXY+XFxuICAgICAgPGRpdj48L2Rpdj5cXG4gICAgICA8ZGl2PjwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gIDwvZGl2Plxcbid9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDQpLHI9bigyKSxhPW4oMCksaT1hLmRlZmF1bHQuSUNPTixzPWEuZGVmYXVsdC5JQ09OX0NVU1RPTSxsPVtcImVycm9yXCIsXCJ3YXJuaW5nXCIsXCJzdWNjZXNzXCIsXCJpbmZvXCJdLGM9e2Vycm9yOnIuZXJyb3JJY29uTWFya3VwKCksd2FybmluZzpyLndhcm5pbmdJY29uTWFya3VwKCksc3VjY2VzczpyLnN1Y2Nlc3NJY29uTWFya3VwKCl9LHU9ZnVuY3Rpb24odCxlKXt2YXIgbj1pK1wiLS1cIit0O2UuY2xhc3NMaXN0LmFkZChuKTt2YXIgbz1jW3RdO28mJihlLmlubmVySFRNTD1vKX0sZD1mdW5jdGlvbih0LGUpe2UuY2xhc3NMaXN0LmFkZChzKTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO24uc3JjPXQsZS5hcHBlbmRDaGlsZChuKX0sZj1mdW5jdGlvbih0KXtpZih0KXt2YXIgZT1vLmluamVjdEVsSW50b01vZGFsKHIuaWNvbk1hcmt1cCk7bC5pbmNsdWRlcyh0KT91KHQsZSk6ZCh0LGUpfX07ZS5kZWZhdWx0PWZ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDIpLHI9big0KSxhPWZ1bmN0aW9uKHQpe25hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoXCJBcHBsZVdlYktpdFwiKSYmKHQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0Lm9mZnNldEhlaWdodCx0LnN0eWxlLmRpc3BsYXk9XCJcIil9O2UuaW5pdFRpdGxlPWZ1bmN0aW9uKHQpe2lmKHQpe3ZhciBlPXIuaW5qZWN0RWxJbnRvTW9kYWwoby50aXRsZU1hcmt1cCk7ZS50ZXh0Q29udGVudD10LGEoZSl9fSxlLmluaXRUZXh0PWZ1bmN0aW9uKHQpe2lmKHQpe3ZhciBlPXIuaW5qZWN0RWxJbnRvTW9kYWwoby50ZXh0TWFya3VwKTtlLnRleHRDb250ZW50PXQsYShlKX19fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPW4oNCksYT1uKDApLGk9YS5kZWZhdWx0LkJVVFRPTixzPWEuZGVmYXVsdC5EQU5HRVJfQlVUVE9OLGw9bigzKSxjPW4oMiksdT1uKDYpLGQ9big1KSxmPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1lLnRleHQsYT1lLnZhbHVlLGY9ZS5jbGFzc05hbWUscD1lLmNsb3NlTW9kYWwsYj1vLnN0cmluZ1RvTm9kZShjLmJ1dHRvbk1hcmt1cCksbT1iLnF1ZXJ5U2VsZWN0b3IoXCIuXCIraSksZz1pK1wiLS1cIit0O20uY2xhc3NMaXN0LmFkZChnKSxmJiZtLmNsYXNzTGlzdC5hZGQoZiksbiYmdD09PWwuQ09ORklSTV9LRVkmJm0uY2xhc3NMaXN0LmFkZChzKSxtLnRleHRDb250ZW50PXI7dmFyIHY9e307cmV0dXJuIHZbdF09YSxkLnNldEFjdGlvblZhbHVlKHYpLGQuc2V0QWN0aW9uT3B0aW9uc0Zvcih0LHtjbG9zZU1vZGFsOnB9KSxtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7cmV0dXJuIHUub25BY3Rpb24odCl9KSxifSxwPWZ1bmN0aW9uKHQsZSl7dmFyIG49ci5pbmplY3RFbEludG9Nb2RhbChjLmZvb3Rlck1hcmt1cCk7Zm9yKHZhciBvIGluIHQpe3ZhciBhPXRbb10saT1mKG8sYSxlKTthLnZpc2libGUmJm4uYXBwZW5kQ2hpbGQoaSl9MD09PW4uY2hpbGRyZW4ubGVuZ3RoJiZuLnJlbW92ZSgpfTtlLmRlZmF1bHQ9cH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMykscj1uKDQpLGE9bigyKSxpPW4oNSkscz1uKDYpLGw9bigwKSxjPWwuZGVmYXVsdC5DT05URU5ULHU9ZnVuY3Rpb24odCl7dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixmdW5jdGlvbih0KXt2YXIgZT10LnRhcmdldCxuPWUudmFsdWU7aS5zZXRBY3Rpb25WYWx1ZShuKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsZnVuY3Rpb24odCl7aWYoXCJFbnRlclwiPT09dC5rZXkpcmV0dXJuIHMub25BY3Rpb24oby5DT05GSVJNX0tFWSl9KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5mb2N1cygpLGkuc2V0QWN0aW9uVmFsdWUoXCJcIil9LDApfSxkPWZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpLHI9YytcIl9fXCIrZTtvLmNsYXNzTGlzdC5hZGQocik7Zm9yKHZhciBhIGluIG4pe3ZhciBpPW5bYV07b1thXT1pfVwiaW5wdXRcIj09PWUmJnUobyksdC5hcHBlbmRDaGlsZChvKX0sZj1mdW5jdGlvbih0KXtpZih0KXt2YXIgZT1yLmluamVjdEVsSW50b01vZGFsKGEuY29udGVudE1hcmt1cCksbj10LmVsZW1lbnQsbz10LmF0dHJpYnV0ZXM7XCJzdHJpbmdcIj09dHlwZW9mIG4/ZChlLG4sbyk6ZS5hcHBlbmRDaGlsZChuKX19O2UuZGVmYXVsdD1mfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPW4oMiksYT1mdW5jdGlvbigpe3ZhciB0PW8uc3RyaW5nVG9Ob2RlKHIub3ZlcmxheU1hcmt1cCk7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0KX07ZS5kZWZhdWx0PWF9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDUpLHI9big2KSxhPW4oMSksaT1uKDMpLHM9bigwKSxsPXMuZGVmYXVsdC5NT0RBTCxjPXMuZGVmYXVsdC5CVVRUT04sdT1zLmRlZmF1bHQuT1ZFUkxBWSxkPWZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSxnKCl9LGY9ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLHYoKX0scD1mdW5jdGlvbih0KXtpZihvLmRlZmF1bHQuaXNPcGVuKXN3aXRjaCh0LmtleSl7Y2FzZVwiRXNjYXBlXCI6cmV0dXJuIHIub25BY3Rpb24oaS5DQU5DRUxfS0VZKX19LGI9ZnVuY3Rpb24odCl7aWYoby5kZWZhdWx0LmlzT3Blbilzd2l0Y2godC5rZXkpe2Nhc2VcIlRhYlwiOnJldHVybiBkKHQpfX0sbT1mdW5jdGlvbih0KXtpZihvLmRlZmF1bHQuaXNPcGVuKXJldHVyblwiVGFiXCI9PT10LmtleSYmdC5zaGlmdEtleT9mKHQpOnZvaWQgMH0sZz1mdW5jdGlvbigpe3ZhciB0PWEuZ2V0Tm9kZShjKTt0JiYodC50YWJJbmRleD0wLHQuZm9jdXMoKSl9LHY9ZnVuY3Rpb24oKXt2YXIgdD1hLmdldE5vZGUobCksZT10LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrYyksbj1lLmxlbmd0aC0xLG89ZVtuXTtvJiZvLmZvY3VzKCl9LHc9ZnVuY3Rpb24odCl7dFt0Lmxlbmd0aC0xXS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGIpfSx4PWZ1bmN0aW9uKHQpe3RbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixtKX0saD1mdW5jdGlvbigpe3ZhciB0PWEuZ2V0Tm9kZShsKSxlPXQucXVlcnlTZWxlY3RvckFsbChcIi5cIitjKTtlLmxlbmd0aCYmKHcoZSkseChlKSl9LHk9ZnVuY3Rpb24odCl7aWYoYS5nZXROb2RlKHUpPT09dC50YXJnZXQpcmV0dXJuIHIub25BY3Rpb24oaS5DQU5DRUxfS0VZKX0saz1mdW5jdGlvbih0KXt2YXIgZT1hLmdldE5vZGUodSk7ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix5KSx0JiZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHkpfSxPPWZ1bmN0aW9uKHQpe28uZGVmYXVsdC50aW1lciYmY2xlYXJUaW1lb3V0KG8uZGVmYXVsdC50aW1lciksdCYmKG8uZGVmYXVsdC50aW1lcj13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiByLm9uQWN0aW9uKGkuQ0FOQ0VMX0tFWSl9LHQpKX0sXz1mdW5jdGlvbih0KXt0LmNsb3NlT25Fc2M/ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIscCk6ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIscCksdC5kYW5nZXJNb2RlP2coKTp2KCksaCgpLGsodC5jbG9zZU9uQ2xpY2tPdXRzaWRlKSxPKHQudGltZXIpfTtlLmRlZmF1bHQ9X30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDMpLGE9bigzMCksaT17dGl0bGU6bnVsbCx0ZXh0Om51bGwsaWNvbjpudWxsLGJ1dHRvbnM6ci5kZWZhdWx0QnV0dG9uTGlzdCxjb250ZW50Om51bGwsY2xhc3NOYW1lOm51bGwsY2xvc2VPbkNsaWNrT3V0c2lkZTohMCxjbG9zZU9uRXNjOiEwLGRhbmdlck1vZGU6ITEsdGltZXI6bnVsbH0scz1PYmplY3QuYXNzaWduKHt9LGkpO2Uuc2V0RGVmYXVsdHM9ZnVuY3Rpb24odCl7cz1PYmplY3QuYXNzaWduKHt9LGksdCl9O3ZhciBsPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuYnV0dG9uLG49dCYmdC5idXR0b25zO3JldHVybiB2b2lkIDAhPT1lJiZ2b2lkIDAhPT1uJiZvLnRocm93RXJyKFwiQ2Fubm90IHNldCBib3RoICdidXR0b24nIGFuZCAnYnV0dG9ucycgb3B0aW9ucyFcIiksdm9pZCAwIT09ZT97Y29uZmlybTplfTpufSxjPWZ1bmN0aW9uKHQpe3JldHVybiBvLm9yZGluYWxTdWZmaXhPZih0KzEpfSx1PWZ1bmN0aW9uKHQsZSl7by50aHJvd0VycihjKGUpK1wiIGFyZ3VtZW50ICgnXCIrdCtcIicpIGlzIGludmFsaWRcIil9LGQ9ZnVuY3Rpb24odCxlKXt2YXIgbj10KzEscj1lW25dO28uaXNQbGFpbk9iamVjdChyKXx8dm9pZCAwPT09cnx8by50aHJvd0VycihcIkV4cGVjdGVkIFwiK2MobikrXCIgYXJndW1lbnQgKCdcIityK1wiJykgdG8gYmUgYSBwbGFpbiBvYmplY3RcIil9LGY9ZnVuY3Rpb24odCxlKXt2YXIgbj10KzEscj1lW25dO3ZvaWQgMCE9PXImJm8udGhyb3dFcnIoXCJVbmV4cGVjdGVkIFwiK2MobikrXCIgYXJndW1lbnQgKFwiK3IrXCIpXCIpfSxwPWZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBhPXR5cGVvZiBlLGk9XCJzdHJpbmdcIj09PWEscz1lIGluc3RhbmNlb2YgRWxlbWVudDtpZihpKXtpZigwPT09bilyZXR1cm57dGV4dDplfTtpZigxPT09bilyZXR1cm57dGV4dDplLHRpdGxlOnJbMF19O2lmKDI9PT1uKXJldHVybiBkKG4scikse2ljb246ZX07dShlLG4pfWVsc2V7aWYocyYmMD09PW4pcmV0dXJuIGQobixyKSx7Y29udGVudDplfTtpZihvLmlzUGxhaW5PYmplY3QoZSkpcmV0dXJuIGYobixyKSxlO3UoZSxuKX19O2UuZ2V0T3B0cz1mdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxlPTA7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl0W2VdPWFyZ3VtZW50c1tlXTt2YXIgbj17fTt0LmZvckVhY2goZnVuY3Rpb24oZSxvKXt2YXIgcj1wKDAsZSxvLHQpO09iamVjdC5hc3NpZ24obixyKX0pO3ZhciBvPWwobik7cmV0dXJuIG4uYnV0dG9ucz1yLmdldEJ1dHRvbkxpc3RPcHRzKG8pLGRlbGV0ZSBuLmJ1dHRvbixuLmNvbnRlbnQ9YS5nZXRDb250ZW50T3B0cyhuLmNvbnRlbnQpLE9iamVjdC5hc3NpZ24oe30saSxzLG4pfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj17ZWxlbWVudDpcImlucHV0XCIsYXR0cmlidXRlczp7cGxhY2Vob2xkZXI6XCJcIn19O2UuZ2V0Q29udGVudE9wdHM9ZnVuY3Rpb24odCl7dmFyIGU9e307cmV0dXJuIG8uaXNQbGFpbk9iamVjdCh0KT9PYmplY3QuYXNzaWduKGUsdCk6dCBpbnN0YW5jZW9mIEVsZW1lbnQ/e2VsZW1lbnQ6dH06XCJpbnB1dFwiPT09dD9yOm51bGx9fV0pfSk7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy52ZXJzaW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX3N3ZWV0YWxlcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX3N3ZWV0YWxlcnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3dlZXRhbGVydCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHBsdWdpbihWdWUpIHtcbiAgVnVlLnByb3RvdHlwZS4kc3dhbCA9IF9zd2VldGFsZXJ0Mi5kZWZhdWx0O1xufVxuXG4vLyBJbnN0YWxsIGJ5IGRlZmF1bHQgaWYgdXNpbmcgdGhlIHNjcmlwdCB0YWdcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gIHdpbmRvdy5WdWUudXNlKHBsdWdpbik7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHBsdWdpbjtcblxudmFyIHZlcnNpb24gPSAnX19WRVJTSU9OX18nO1xuLy8gRXhwb3J0IGFsbCBjb21wb25lbnRzIHRvb1xuZXhwb3J0cy52ZXJzaW9uID0gdmVyc2lvbjtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zd2FsL2Rpc3QvdnVlLXN3YWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcblxuaW1wb3J0IFZ1ZVN3YWwgZnJvbSAndnVlLXN3YWwnXG5pbXBvcnQgVHJlZXNlbGVjdCBmcm9tICdAcmlvcGhhZS92dWUtdHJlZXNlbGVjdCdcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbmltcG9ydCBNYXRlcmlhbFJvdyBmcm9tIFwiLi9jb21wb25lbnRzL1Jvd3MvTWF0ZXJpYWxSb3cudnVlXCI7XG5cblxuXG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5WdWUudXNlKFZ1ZXgpO1xuVnVlLnVzZShWdWVTd2FsKTtcblxuVnVlLmNvbXBvbmVudCgnbWF0ZXJpYWwtcm93JywgTWF0ZXJpYWxSb3cpO1xuVnVlLmNvbXBvbmVudCgndHJlZXNlbGVjdCcsIFRyZWVzZWxlY3QpO1xuLy8gQm9vc3RyYXBcbi8vIEZpcnN0IHdlIG1ha2UgYXhpb3MgZ2xvYmFseSBhY2Nlc3NpYmxlXG53aW5kb3cuYXhpb3MgPSBheGlvcztcblxuLy8gTmV4dCB3ZSBkbyBzb21lIHZ1ZSByb3V0ZXIsIHN0YXRlcywgYW5kIGFwcCBpbml0XG5jb25zdCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcbiAgICByb3V0ZXM6IHJvdXRlcyxcbiAgICBtb2RlOiAnaGlzdG9yeScsXG59KTtcblxucm91dGVyLmFmdGVyRWFjaCgodG8sIGZyb20pID0+IHtcbiAgICBpZiAodHlwZW9mIHRvLm1ldGEudGl0bGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSB0by5tZXRhLnRpdGxlO1xuICAgIH1cbn0pO1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuICAgIHJvdXRlcixcbiAgICBzdG9yZSxcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wMDQ0YmRmMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vTWF0ZXJpYWxSb3cudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVudlxcXCIse1xcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcImxhc3QgMiB2ZXJzaW9uc1xcXCIsXFxcIj4gNSUgaW4gQkVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfSxcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiLFxcXCJ0cmFuc2Zvcm0taW5saW5lLWVudmlyb25tZW50LXZhcmlhYmxlc1xcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCZidXN0Q2FjaGUhLi9NYXRlcmlhbFJvdy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTAwNDRiZGYyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL01hdGVyaWFsUm93LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXFJvd3NcXFxcTWF0ZXJpYWxSb3cudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgIHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7ICBjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wMDQ0YmRmMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTAwNDRiZGYyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuJyArICcgIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiY29uc3Qgcm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6IFwiL2xvZ2luXCIsXHJcbiAgICAgICAgbmFtZTogXCJsb2dpblwiLFxyXG4gICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvTG9naW4udnVlJyksXHJcbiAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICB0aXRsZTogXCLEkMSDbmcgbmjhuq1wXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogXCIvXCIsXHJcbiAgICAgICAgbmFtZTogXCJiYXNlXCIsXHJcbiAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9CYXNlLnZ1ZScpLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IFwiZGFzaGJvYXJkXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImJhc2UuZGFzaGJvYXJkXCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL0Rhc2hib2FyZC52dWUnKSxcclxuICAgICAgICAgICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJC4bqjbmcgdGjDtG5nIGLDoW9cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBcIndvcmtzXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImJhc2Uud29ya3NcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvV29ya3MudnVlJyksXHJcbiAgICAgICAgICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGFuaCBzw6FjaCBjw7RuZyB0csaw4budbmdcIixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogXCJ3b3JrLzppZFwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJiYXNlLndvcmtSZXBvcnRcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvV29ya1JlcG9ydC52dWUnKSxcclxuICAgICAgICAgICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJCw6FvIGPDoW8gY2hpIHRp4bq/dFwiLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBcIm1hdGVyaWFsc1wiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJiYXNlLm1hdGVyaWFsc1wiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuL2NvbXBvbmVudHMvTWF0ZXJpYWxzLnZ1ZVwiKSxcclxuICAgICAgICAgICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEYW5oIHPDoWNoIHbhuq10IHTGsFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICBcclxuXTtcclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcm91dGVzLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXHJcblZ1ZS51c2UoVnVleCk7XHJcblxyXG5cclxuXHJcbmNvbnN0IHN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xyXG4gICAgc3RhdGU6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uVG9rZW46IFwiXCIsXHJcbiAgICAgICAgYXBpQmFzZTogXCJodHRwOi8vdHJhY2tlci5kZXYvYXBpL3YxXCIsXHJcbiAgICAgICAgdXNlcjoge30sXHJcbiAgICAgICAgY2F0ZWdvcnlMaXN0OiB7fSxcclxuXHJcbiAgICB9LFxyXG4gICAgbXV0YXRpb25zOiB7XHJcbiAgICAgICAgU0VUX0FVVEhPUklaQVRJT05fVE9LRU4oc3RhdGUsIHRva2VuKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmF1dGhvcml6YXRpb25Ub2tlbiA9IHRva2VuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU0VUX1VTRVIoc3RhdGUsIHVzZXJPYmplY3QpIHtcclxuICAgICAgICAgICAgc3RhdGUudXNlciA9IHVzZXJPYmplY3Q7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBVUERBVEVfQ0FURUdPUllfTElTVChzdGF0ZSwgbGlzdCkge1xyXG4gICAgICAgICAgICBzdGF0ZS5jYXRlZ29yeUxpc3QgPSBsaXN0O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gNyJdLCJzb3VyY2VSb290IjoiIn0=