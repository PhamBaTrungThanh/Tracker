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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Rows/MaterialRow.vue":
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
        toggleExpand: function toggleExpand() {
            if (this.row.expanded === true) {
                this.$emit('expand', { id: this.row.id, expanded: false });
            } else if (this.row.children) {
                this.$emit('expand', { id: this.row.id, expanded: true });
            }
        },
        addChildCategory: function addChildCategory(row) {
            this.$emit('new-category', { id: row.id, name: row.name });
        },
        addMaterials: function addMaterials(row) {
            this.$emit('new-materials', { id: row.id, name: row.name });
        },
        newMaterials: function newMaterials() {
            console.log('aaa');
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
                category: this.row.type === 'category'
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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"MaterialRow.vue","sourceRoot":""}]);

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
  return _vm.row.type === "category"
    ? _c("tr", { class: _vm.classes }, [
        _c("td", { attrs: { colspan: "4" } }, [
          _vm._v(_vm._s(_vm.row.name) + " "),
          _vm.row.depth > 0 && _vm.row.children
            ? _c("span", [
                _vm._v("( " + _vm._s(_vm.row.children.length) + " )")
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("td", { staticClass: "inline-control", attrs: { colspan: "2" } }, [
          _vm.row.depth === 0
            ? _c(
                "span",
                {
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
      ])
    : _c("tr", [
        _c("td", { staticClass: "col1" }, [_vm._v(_vm._s(_vm.row.id))]),
        _vm._v(" "),
        _c("td", { staticClass: "col2" }, [_vm._v(_vm._s(_vm.row.name))]),
        _vm._v(" "),
        _c("td", { staticClass: "col3" }, [_vm._v(_vm._s(_vm.row.per))]),
        _vm._v(" "),
        _c("td", { staticClass: "col4" }, [_vm._v("vnd")]),
        _vm._v(" "),
        _c("td", { staticClass: "col5" }, [_vm._v("0")]),
        _vm._v(" "),
        _c("td", { staticClass: "col6" }, [_vm._v(_vm._s(_vm.row.brand))])
      ])
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
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"targets\":{\"browsers\":[\"last 2 versions\",\"> 5% in BE\"],\"uglify\":true},\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-object-rest-spread\",\"syntax-dynamic-import\",\"transform-inline-environment-variables\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Rows/MaterialRow.vue")
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
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJpb3BoYWUvdnVlLXRyZWVzZWxlY3QvZGlzdC92dWUtdHJlZXNlbGVjdC5taW4uanMiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWU/NjFhNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZT8zOTAxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZT8zMTIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN3YWwvZGlzdC92dWUtc3dhbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3MiXSwibmFtZXMiOlsiZSIsInQiLCJleHBvcnRzIiwibW9kdWxlIiwiVnVlVHJlZXNlbGVjdCIsImkiLCJuIiwicyIsImwiLCJjYWxsIiwibSIsImMiLCJkIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwiciIsImEiLCJvcHRpb25zIiwicmVuZGVyIiwic3RhdGljUmVuZGVyRm5zIiwiX2NvbXBpbGVkIiwiZnVuY3Rpb25hbCIsIl9zY29wZUlkIiwidSIsIiR2bm9kZSIsInNzckNvbnRleHQiLCJwYXJlbnQiLCJfX1ZVRV9TU1JfQ09OVEVYVF9fIiwiX3JlZ2lzdGVyZWRDb21wb25lbnRzIiwiYWRkIiwiX3NzclJlZ2lzdGVyIiwiaCIsImJlZm9yZUNyZWF0ZSIsIl9pbmplY3RTdHlsZXMiLCJjb25jYXQiLCJlc01vZHVsZSIsInNlbGYiLCJGdW5jdGlvbiIsIlN5bWJvbCIsInR5cGUiLCJidXR0b24iLCJ4IiwiZ2V0UHJvdG90eXBlT2YiLCJrZXlzIiwibGVuZ3RoIiwiTiIsIlMiLCJBcnJheSIsImlzQXJyYXkiLCJmaW5kSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZiIsInZhbHVlIiwid3JpdGFibGUiLCJ2IiwibGV2ZWwiLCJpbmRleCIsIl8iLCJDIiwibWVzc2FnZSIsIlN0cmluZyIsInkiLCJiIiwiZyIsIkUiLCJPIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInciLCJwcm92aWRlIiwiaW5zdGFuY2UiLCJVTkNIRUNLRUQiLCJJTkRFVEVSTUlOQVRFIiwiQ0hFQ0tFRCIsIlVOTUFUQ0hFRCIsIkRFU0NFTkRBTlRfTUFUQ0hFRCIsIk1BVENIRUQiLCJwcm9wcyIsImF1dG9mb2N1cyIsIkJvb2xlYW4iLCJiYWNrc3BhY2VSZW1vdmVzIiwiYnJhbmNoTm9kZXNGaXJzdCIsImNsZWFyYWJsZSIsImNsZWFyQWxsVGV4dCIsImNsZWFyT25TZWxlY3QiLCJjbGVhclZhbHVlVGV4dCIsImNsb3NlT25TZWxlY3QiLCJkZWxldGVSZW1vdmVzIiwiZGlzYWJsZUJyYW5jaE5vZGVzIiwiZGlzYWJsZWQiLCJkZWZhdWx0RXhwYW5kTGV2ZWwiLCJOdW1iZXIiLCJlc2NhcGVDbGVhcnNWYWx1ZSIsImZsYXQiLCJpZCIsImxpbWl0IiwibGltaXRUZXh0IiwibG9hZENoaWxkcmVuRXJyb3JUZXh0IiwibG9hZENoaWxkcmVuT3B0aW9ucyIsImxvYWRpbmdUZXh0IiwibG9hZFJvb3RPcHRpb25zIiwibWF4SGVpZ2h0IiwibXVsdGlwbGUiLCJub0NoaWxkcmVuVGV4dCIsIm5vUmVzdWx0c1RleHQiLCJub09wdGlvbnNUZXh0Iiwib3BlbkRpcmVjdGlvbiIsIm9wZW5PbkNsaWNrIiwib3Blbk9uRm9jdXMiLCJwbGFjZWhvbGRlciIsInJldGFpblNjcm9sbFBvc2l0aW9uIiwicmV0cnlUZXh0IiwicmV0cnlUaXRsZSIsInNlYXJjaGFibGUiLCJzaG93Q291bnQiLCJzaG93Q291bnRPZiIsInZhbGlkYXRvciIsInNob3dDb3VudE9uU2VhcmNoIiwic29ydFZhbHVlQnkiLCJzdWJJdGVtc0xpbWl0IiwidGFiSW5kZXgiLCJkYXRhIiwiaW50ZXJuYWxWYWx1ZSIsImlzRm9jdXNlZCIsImlzT3BlbiIsIm5vZGVDaGVja2VkU3RhdGVNYXAiLCJjcmVhdGUiLCJub2RlTWFwIiwibm9ybWFsaXplZE9wdGlvbnMiLCJub1NlYXJjaFJlc3VsdHMiLCJvcHRpbWl6ZWRIZWlnaHQiLCJwcmVmZmVyZWRPcGVuRGlyZWN0aW9uIiwicm9vdE9wdGlvbnNMb2FkZWQiLCJsb2FkaW5nUm9vdE9wdGlvbnMiLCJsb2FkaW5nUm9vdE9wdGlvbnNFcnJvciIsInNlYXJjaGluZ0NvdW50Iiwic2VhcmNoaW5nIiwic2VhcmNoUXVlcnkiLCJzZWxlY3RlZE5vZGVNYXAiLCJsYXN0U2Nyb2xsUG9zaXRpb24iLCJjb21wdXRlZCIsInNlbGVjdGVkTm9kZXNOdW1iZXIiLCJoYXNWYWx1ZSIsInNlbGVjdGVkTm9kZXMiLCJtYXAiLCJnZXROb2RlIiwic2luZ2xlIiwidmlzaWJsZVZhbHVlIiwic2xpY2UiLCJoYXNFeGNlZWRlZExpbWl0Iiwic2hvdWxkU2hvd0NsZWFySWNvbiIsInNob3dDb3VudE9uU2VhcmNoQ29tcHV0ZWQiLCJ3YXRjaCIsImNsb3NlTWVudSIsImJ1aWxkTm9kZUNoZWNrZWRTdGF0ZU1hcCIsImhhbmRsZVNlYXJjaCIsIiRlbWl0Iiwic29ydFZhbHVlIiwiZ2V0VmFsdWUiLCJidWlsZFNlbGVjdGVkTm9kZU1hcCIsIm1ldGhvZHMiLCJ2ZXJpZnlQcm9wcyIsInJlc2V0RmxhZ3MiLCJfYmx1ck9uU2VsZWN0IiwiX3dhc0NsaWNrZWRPblZhbHVlSXRlbSIsImluaXRpYWxpemUiLCJpbml0aWFsaXplUm9vdE9wdGlvbnMiLCJpbml0aWFsaXplVmFsdWUiLCJsYWJlbCIsImFuY2VzdG9ycyIsInBhcmVudE5vZGUiLCJpc1Vua25vd25Ob2RlIiwiaXNMZWFmIiwiaXNCcmFuY2giLCJpc1NlbGVjdGVkIiwiY2hlY2tJZkJyYW5jaE5vZGUiLCJ0cmF2ZXJzZURlc2NlbmRhbnRzIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwidHJhdmVyc2VBbmNlc3RvcnMiLCJ0cmF2ZXJzZUFsbE5vZGVzIiwidG9nZ2xlQ2xpY2tPdXRzaWRlRXZlbnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGlja091dHNpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZm9jdXNJbnB1dCIsIiRyZWZzIiwiYmx1cklucHV0IiwiaGFuZGxlTW91c2VEb3duIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCIkZWwiLCJjb250YWlucyIsInRhcmdldCIsIm9wZW5NZW51IiwiaGFuZGxlTW91c2VEb3duT25DbGVhciIsImNsZWFyIiwiaGFuZGxlTW91c2VEb3duT25BcnJvdyIsInRvZ2dsZU1lbnUiLCJ3cmFwcGVyIiwiZXhwYW5kc09uU2VhcmNoIiwiaGFzTWF0Y2hlZENoaWxkIiwiaXNNYXRjaGVkIiwidG9Mb3dlckNhc2UiLCJBTExfREVTQ0VOREFOVFMiLCJMRUFGX0RFU0NFTkRBTlRTIiwiQUxMX0NISUxEUkVOIiwiTEVBRl9DSElMRFJFTiIsIm1lbnUiLCJzY3JvbGxUb3AiLCIkbmV4dFRpY2siLCJhZGp1c3RQb3NpdGlvbiIsInJlc3RvcmVTY3JvbGxQb3NpdGlvbiIsImxvYWRPcHRpb25zIiwidG9nZ2xlRXhwYW5kZWQiLCJpc0V4cGFuZGVkIiwibm9ybWFsaXplIiwiY2hlY2tEdXBsaWNhdGlvbiIsInZlcmlmeU5vZGVTaGFwZSIsImlzRGlzYWJsZWQiLCJpc1Jvb3ROb2RlIiwicmF3IiwiaXNMb2FkZWQiLCJpc1BlbmRpbmciLCJsb2FkaW5nQ2hpbGRyZW5FcnJvciIsImNvdW50IiwiZmlsdGVyIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlbGVjdCIsIl9zZWxlY3ROb2RlIiwiX2Rlc2VsZWN0Tm9kZSIsImFkZFZhbHVlIiwiZXZlcnkiLCJyZW1vdmVWYWx1ZSIsInB1c2giLCJtYXliZVJlbW92ZUxhc3RWYWx1ZSIsInNvcnQiLCJ3aW5kb3ciLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJpbm5lckhlaWdodCIsImJvdHRvbSIsIk1hdGgiLCJtaW4iLCJjcmVhdGVkIiwibW91bnRlZCIsImRlc3Ryb3llZCIsIkQiLCJpbnB1dCIsImZvY3VzIiwiYmx1ciIsImhhbmRsZU1vdXNlRG93bk9uVmFsdWUiLCJNIiwibmFtZSIsImluamVjdCIsIkEiLCIkY3JlYXRlRWxlbWVudCIsIl9zZWxmIiwiX2MiLCJzdGF0aWNDbGFzcyIsIl90IiwiX3YiLCJfcyIsIkwiLCJUIiwiViIsIlIiLCJrIiwiSSIsIiQiLCJCQUNLU1BBQ0UiLCJFU0NBUEUiLCJERUxFVEUiLCJCIiwiaW5wdXRXaWR0aCIsIm5lZWRzQXV0b1NpemUiLCJ1cGRhdGVkIiwidXBkYXRlSW5wdXRXaWR0aCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbklucHV0Iiwib25LZXlEb3duIiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibWV0YUtleSIsIndoaWNoIiwia2V5Q29kZSIsIm9uTW91c2VEb3duIiwicmVuZGVySW5wdXRXcmFwcGVyIiwiY2xhc3MiLCJyZW5kZXJJbnB1dCIsInJlbmRlclNpemVyIiwib24iLCJrZXlkb3duIiwicmVmIiwiYXR0cnMiLCJhdXRvY29tcGxldGUiLCJkb21Qcm9wcyIsInN0eWxlIiwid2lkdGgiLCJtb3VzZWRvd24iLCJ0ZXh0Q29udGVudCIsIm1heCIsInNpemVyIiwic2Nyb2xsV2lkdGgiLCJqIiwiRiIsInoiLCJQIiwiY29tcG9uZW50cyIsIlBsYWNlaG9sZGVyIiwiU2VhcmNoSW5wdXQiLCJtaXhpbnMiLCJIIiwidGFnIiwiYXBwZWFyIiwiX2wiLCJrZXkiLCJfZSIsIlEiLCJLIiwiVyIsIlUiLCJxIiwiWCIsIkoiLCJHIiwiWSIsIloiLCJlZSIsInRlIiwibmUiLCJpZSIsInNlIiwibm9kZSIsInJlcXVpcmVkIiwiY2hlY2tlZFN0YXRlIiwic2hvdWxkRXhwYW5kIiwiaGFuZGxlTW91c2VEb3duT25PcHRpb24iLCJoYW5kbGVNb3VzZURvd25Pbk9wdGlvbkFycm93Iiwib2UiLCJyZSIsIl9tIiwidGl0bGUiLCJjbGljayIsImFlIiwibGUiLCJjZSIsInVlIiwiZGUiLCJoZSIsInBlIiwiVHJlZXNlbGVjdE9wdGlvbiIsIlZhbHVlQ29tcG9uZW50IiwiZmUiLCJ2ZSIsIm1lIiwiQ2UiLCJ5ZSIsImJlIiwiZ2UiLCJjaGFyQ29kZUF0IiwiYXBwbHkiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiYXJndW1lbnRzIiwiVHlwZUVycm9yIiwibGVhZGluZyIsIm1heFdhaXQiLCJ0cmFpbGluZyIsImNhbmNlbCIsImZsdXNoIiwiRGF0ZSIsIm5vdyIsImV2YWwiLCJ2YWx1ZU9mIiwicmVwbGFjZSIsInRlc3QiLCJOYU4iLCJwYXJzZUludCIsInRvU3RyaW5nVGFnIiwidG9TdHJpbmciLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwiaXRlbSIsImNvbnRlbnQiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwiam9pbiIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImNzc01hcHBpbmciLCJidG9hIiwic291cmNlTWFwcGluZyIsInRvQ29tbWVudCIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsInNvdXJjZU1hcCIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibGlzdFRvU3R5bGVzIiwicGFyZW50SWQiLCJzdHlsZXMiLCJuZXdTdHlsZXMiLCJjc3MiLCJtZWRpYSIsInBhcnQiLCJwYXJ0cyIsIndlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwicm9vdCIsImZhY3RvcnkiLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZ2V0dGVyIiwiZ2V0RGVmYXVsdCIsImdldE1vZHVsZUV4cG9ydHMiLCJvYmplY3QiLCJwcm9wZXJ0eSIsImRlZmluZSIsImFtZCIsInN3YWwiLCJDTEFTU19OQU1FUyIsIk1PREFMIiwiT1ZFUkxBWSIsIlNIT1dfTU9EQUwiLCJNT0RBTF9USVRMRSIsIk1PREFMX1RFWFQiLCJJQ09OIiwiSUNPTl9DVVNUT00iLCJDT05URU5UIiwiRk9PVEVSIiwiQlVUVE9OX0NPTlRBSU5FUiIsIkJVVFRPTiIsIkNPTkZJUk1fQlVUVE9OIiwiQ0FOQ0VMX0JVVFRPTiIsIkRBTkdFUl9CVVRUT04iLCJCVVRUT05fTE9BRElORyIsIkJVVFRPTl9MT0FERVIiLCJxdWVyeVNlbGVjdG9yIiwic3RyaW5nVG9Ob2RlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInRyaW0iLCJmaXJzdENoaWxkIiwiaW5zZXJ0QWZ0ZXIiLCJuZXh0U2libGluZyIsImluc2VydEJlZm9yZSIsInJlbW92ZU5vZGUiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJ0aHJvd0VyciIsImlzUGxhaW5PYmplY3QiLCJvcmRpbmFsU3VmZml4T2YiLCJvdmVybGF5TWFya3VwIiwiaWNvbk1hcmt1cCIsInRpdGxlTWFya3VwIiwidGV4dE1hcmt1cCIsImZvb3Rlck1hcmt1cCIsIkNPTkZJUk1fS0VZIiwiQ0FOQ0VMX0tFWSIsInZpc2libGUiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiY2xvc2VNb2RhbCIsImFzc2lnbiIsImRlZmF1bHRCdXR0b25MaXN0IiwiY29uZmlybSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiZ2V0QnV0dG9uTGlzdE9wdHMiLCJpbmplY3RFbEludG9Nb2RhbCIsImFwcGVuZENoaWxkIiwiY2xhc3NMaXN0IiwiaW5pdE1vZGFsQ29udGVudCIsImljb24iLCJpbml0VGl0bGUiLCJpbml0VGV4dCIsImJ1dHRvbnMiLCJkYW5nZXJNb2RlIiwibW9kYWxNYXJrdXAiLCJwcm9taXNlIiwiYWN0aW9ucyIsInRpbWVyIiwicmVzZXRTdGF0ZSIsInNldEFjdGlvblZhbHVlIiwic2V0QWN0aW9uT3B0aW9uc0ZvciIsIm9wZW5Nb2RhbCIsInJlbW92ZSIsIm9uQWN0aW9uIiwicmVzb2x2ZSIsImdldFN0YXRlIiwic3RvcExvYWRpbmciLCJxdWVyeVNlbGVjdG9yQWxsIiwic3dlZXRBbGVydCIsImluc2VydEF0IiwidHJhbnNmb3JtIiwibG9jYWxzIiwicmVmcyIsImJhc2UiLCJpbnNlcnRJbnRvIiwiRXJyb3IiLCJyZWwiLCJzZXRBdHRyaWJ1dGUiLCJzaW5nbGV0b24iLCJiaW5kIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiQmxvYiIsImhyZWYiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImNyZWF0ZVRleHROb2RlIiwiY2hpbGROb2RlcyIsImNvbnZlcnRUb0Fic29sdXRlVXJscyIsImFsbCIsImF0b2IiLCJERUJVRyIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0IiwicGF0aG5hbWUiLCJnZXRPcHRzIiwiUHJvbWlzZSIsInJlamVjdCIsImNsb3NlIiwic2V0RGVmYXVsdHMiLCJpbml0IiwiYm9keSIsImVycm9ySWNvbk1hcmt1cCIsIndhcm5pbmdJY29uTWFya3VwIiwic3VjY2Vzc0ljb25NYXJrdXAiLCJjb250ZW50TWFya3VwIiwiYnV0dG9uTWFya3VwIiwiZXJyb3IiLCJ3YXJuaW5nIiwic3VjY2VzcyIsInNyYyIsImluY2x1ZGVzIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGlzcGxheSIsIm9mZnNldEhlaWdodCIsImVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwiY2xvc2VPbkVzYyIsImNsb3NlT25DbGlja091dHNpZGUiLCJFbGVtZW50IiwiZ2V0Q29udGVudE9wdHMiLCJ2ZXJzaW9uIiwidW5kZWZpbmVkIiwiX3N3ZWV0YWxlcnQiLCJfc3dlZXRhbGVydDIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0Iiwib2JqIiwicGx1Z2luIiwiVnVlIiwiJHN3YWwiLCJ1c2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7QUFLQSxDQUFFLFVBQVNBLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsOENBQWlCQyxPQUFqQixNQUEwQiw0Q0FBaUJDLE1BQWpCLEVBQTFCLEdBQWtEQSxPQUFPRCxPQUFQLEdBQWVELEdBQWpFLEdBQXFFLFFBQXNDLGlDQUFPLEVBQVAsb0NBQVVBLENBQVY7QUFBQTtBQUFBO0FBQUEsb0dBQXRDLEdBQW1ELG9CQUFpQkMsT0FBakIseUNBQWlCQSxPQUFqQixLQUF5QkEsUUFBUUUsYUFBUixHQUFzQkgsR0FBL0MsR0FBbURELEVBQUVJLGFBQUYsR0FBZ0JILEdBQTNMO0FBQStMLENBQTlNLENBQWdOLElBQWhOLEVBQXNOLFlBQVU7QUFBQyxTQUFRLFVBQVNELENBQVQsRUFBVztBQUFDLGFBQVNDLENBQVQsQ0FBV0ksQ0FBWCxFQUFhO0FBQUMsVUFBR0MsRUFBRUQsQ0FBRixDQUFILEVBQVEsT0FBT0MsRUFBRUQsQ0FBRixFQUFLSCxPQUFaLENBQW9CLElBQUlL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QUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7OztBQzVDQSxJQUFNO1VBR0U7VUFDQTtlQUFXO2VBQU0seUhBQU87QUFDeEI7O2VBQ1c7QUFBUDtBQUpKLENBRk87VUFXUDtVQUNBO2VBQVc7ZUFBTSx3SEFBTztBQUN4Qjs7Y0FHUTtjQUNBO21CQUFXO21CQUFNLDZIQUFPO0FBQ3hCOzttQkFDVztBQUFQO0FBSkosS0FGRTtjQVVGO2NBQ0E7bUJBQVc7bUJBQU0seUhBQU87QUFDeEI7O21CQUNXO0FBQVA7QUFKSjtjQVFBO2NBQ0E7bUJBQVc7bUJBQU0sOEhBQU87QUFDeEI7O21CQUNXO0FBQVA7QUFKSjtjQVFBO2NBQ0E7bUJBQVc7bUJBQU0sNkhBQU87QUFDeEI7O21CQUNXO0FBQVA7QUFKSjtBQTFCUjtBQXNDUix5REFBZSxROzs7Ozs7Ozs7OztBQ2hEQztBQUNDO0FBQ2pCLDRDQUFJLElBQUk7O0FBSVIsSUFBTSxZQUFZLDhDQUFLOzs0QkFHZjtpQkFDQTtjQUNBO3NCQUdKOztBQU5JOztBQU1PLGtFQUNpQixPQUFPLE9BQzNCO2tCQUFNLHFCQUNUO0FBQ0Q7QUFKTyxvQ0FJRSxPQUFPLFlBQ1o7a0JBQU0sT0FDVDtBQUNEO0FBUE8sNERBT2MsT0FBTyxNQUN4QjtrQkFBTSxlQUNUO0FBVE07QUFDUDtBQVJKLENBRFU7O0FBcUJkLHlEQUFlLE87Ozs7Ozs7QUMzQmYseUMiLCJmaWxlIjoiXFxqc1xcYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiB2dWUtdHJlZXNlbGVjdCB2MC4wLjYgfCAoYykgMjAxNyBSaW9waGFlIExlZVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9naXRodWIuY29tL3Jpb3BoYWUvdnVlLXRyZWVzZWxlY3RcbiAqL1xuIShmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuVnVlVHJlZXNlbGVjdD10KCk6ZS5WdWVUcmVlc2VsZWN0PXQoKX0pKHRoaXMsKGZ1bmN0aW9uKCl7cmV0dXJuIChmdW5jdGlvbihlKXtmdW5jdGlvbiB0KGkpe2lmKG5baV0pcmV0dXJuIG5baV0uZXhwb3J0czt2YXIgcz1uW2ldPXtpOmksbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtpXS5jYWxsKHMuZXhwb3J0cyxzLHMuZXhwb3J0cyx0KSxzLmw9ITAscy5leHBvcnRzfXZhciBuPXt9O3JldHVybiB0Lm09ZSx0LmM9bix0LmQ9ZnVuY3Rpb24oZSxuLGkpe3QubyhlLG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6aX0pfSx0Lm49ZnVuY3Rpb24oZSl7dmFyIG49ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHQuZChuLFwiYVwiLG4pLG59LHQubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sdC5wPVwiL1wiLHQodC5zPTQpfSkoWyhmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlLHQsbixpLHMsbyl7dmFyIHIsYT1lPWV8fHt9LGw9dHlwZW9mIGUuZGVmYXVsdDtcIm9iamVjdFwiIT09bCYmXCJmdW5jdGlvblwiIT09bHx8KHI9ZSxhPWUuZGVmYXVsdCk7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgYT9hLm9wdGlvbnM6YTt0JiYoYy5yZW5kZXI9dC5yZW5kZXIsYy5zdGF0aWNSZW5kZXJGbnM9dC5zdGF0aWNSZW5kZXJGbnMsYy5fY29tcGlsZWQ9ITApLG4mJihjLmZ1bmN0aW9uYWw9ITApLHMmJihjLl9zY29wZUlkPXMpO3ZhciB1O2lmKG8/KHU9ZnVuY3Rpb24oZSl7ZT1lfHx0aGlzLiR2bm9kZSYmdGhpcy4kdm5vZGUuc3NyQ29udGV4dHx8dGhpcy5wYXJlbnQmJnRoaXMucGFyZW50LiR2bm9kZSYmdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQsZXx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX198fChlPV9fVlVFX1NTUl9DT05URVhUX18pLGkmJmkuY2FsbCh0aGlzLGUpLGUmJmUuX3JlZ2lzdGVyZWRDb21wb25lbnRzJiZlLl9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobyl9LGMuX3NzclJlZ2lzdGVyPXUpOmkmJih1PWkpLHUpe3ZhciBkPWMuZnVuY3Rpb25hbCxoPWQ/Yy5yZW5kZXI6Yy5iZWZvcmVDcmVhdGU7ZD8oYy5faW5qZWN0U3R5bGVzPXUsYy5yZW5kZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdS5jYWxsKHQpLGgoZSx0KX0pOmMuYmVmb3JlQ3JlYXRlPWg/W10uY29uY2F0KGgsdSk6W3VdfXJldHVybntlc01vZHVsZTpyLGV4cG9ydHM6YSxvcHRpb25zOmN9fX0pLChmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG4oZSl7dmFyIHQ9dHlwZW9mIGU7cmV0dXJuIG51bGwhPWUmJihcIm9iamVjdFwiPT10fHxcImZ1bmN0aW9uXCI9PXQpfWUuZXhwb3J0cz1ufSksKGZ1bmN0aW9uKGUsdCxuKXt2YXIgaT1uKDkpLHM9XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLG89aXx8c3x8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO2UuZXhwb3J0cz1vfSksKGZ1bmN0aW9uKGUsdCxuKXt2YXIgaT1uKDIpLHM9aS5TeW1ib2w7ZS5leHBvcnRzPXN9KSwoZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe1wibW91c2Vkb3duXCI9PT10LnR5cGUmJjA9PT10LmJ1dHRvbiYmZS5jYWxsKHRoaXMsdCl9fWZ1bmN0aW9uIHMoKXt9ZnVuY3Rpb24gbyhlKXtyZXR1cm4gbnVsbCE9ZSYmXCJvYmplY3RcIj09PSh2b2lkIDA9PT1lP1widW5kZWZpbmVkXCI6eChlKSkmJk9iamVjdC5nZXRQcm90b3R5cGVPZihlKT09PU9iamVjdC5wcm90b3R5cGV9ZnVuY3Rpb24gcihlLHQsbil7byhuKT8oZVt0XXx8KGVbdF09e30pLGwoZVt0XSxuKSk6ZVt0XT1ufWZ1bmN0aW9uIGEoZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9ZnVuY3Rpb24gbChlLHQpe2lmKG51bGw9PXQpO2Vsc2UgaWYobyh0KSlmb3IodmFyIG49T2JqZWN0LmtleXModCksaT0wLHM9bi5sZW5ndGg7aTxzO2krKylyKGUsbltpXSx0W25baV1dKTtlbHNlIE4oKTtyZXR1cm4gZX1mdW5jdGlvbiBjKGUpe3JldHVybiBTKChmdW5jdGlvbigpe3JldHVybiBBcnJheS5pc0FycmF5KGUpfSksKGZ1bmN0aW9uKCl7cmV0dXJuXCJ1bmV4cGVjdGVkIHR5cGVcIn0pKSxlW2UubGVuZ3RoLTFdfWZ1bmN0aW9uIHUoZSx0LG4pe2Zvcih2YXIgaT0wLHM9ZS5sZW5ndGg7aTxzO2krKylpZih0LmNhbGwobixlW2ldLGksZSkpcmV0dXJuIGk7cmV0dXJuLTF9ZnVuY3Rpb24gZChlLHQsbil7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleD9lLmZpbmRJbmRleCh0LG4pOnUoZSx0LG4pfWZ1bmN0aW9uIGgoZSx0KXt2YXIgbj1lLmluZGV4T2YodCk7LTEhPT1uJiZlLnNwbGljZShuLDEpfWZ1bmN0aW9uIHAoZSx0KXtpZihlLmxlbmd0aCE9PXQubGVuZ3RoKXJldHVybiExO2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKWlmKGVbbl0hPT10W25dKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIGYoZSx0LG4pe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6bixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09bixlfWZ1bmN0aW9uIHYoZSx0KXtmb3IodmFyIG49MDs7KXtpZihlLmxldmVsPG4pcmV0dXJuLTE7aWYodC5sZXZlbDxuKXJldHVybiAxO2lmKGUuaW5kZXhbbl0hPT10LmluZGV4W25dKXJldHVybiBlLmluZGV4W25dLXQuaW5kZXhbbl07bisrfX1mdW5jdGlvbiBfKGUsdCl7cmV0dXJuIGUubGV2ZWwhPT10LmxldmVsP2UubGV2ZWwtdC5sZXZlbDp2KGUsdCl9ZnVuY3Rpb24gbShlKXtyZXR1cm5cImFuZCBcIitlK1wiIG1vcmVcIn1mdW5jdGlvbiBDKGUpe3JldHVyblwiRmFpbGVkIHRvIGxvYWQgY2hpbGRyZW4gb3B0aW9uczogXCIrKGUubWVzc2FnZXx8U3RyaW5nKGUpKStcIi5cIn1mdW5jdGlvbiB5KGUpe24oNSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGI9big2KSxnPW4ubihiKSxFPW4oNyksTz1uLm4oRSkseD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxTPXMsTj1zLHc9e3Byb3ZpZGU6ZnVuY3Rpb24oKXtyZXR1cm57aW5zdGFuY2U6dGhpcyxVTkNIRUNLRUQ6MCxJTkRFVEVSTUlOQVRFOjEsQ0hFQ0tFRDoyLFVOTUFUQ0hFRDowLERFU0NFTkRBTlRfTUFUQ0hFRDoxLE1BVENIRUQ6Mn19LHByb3BzOnthdXRvZm9jdXM6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxiYWNrc3BhY2VSZW1vdmVzOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sYnJhbmNoTm9kZXNGaXJzdDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGNsZWFyYWJsZTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LGNsZWFyQWxsVGV4dDp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIkNsZWFyIGFsbFwifSxjbGVhck9uU2VsZWN0Ont0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sY2xlYXJWYWx1ZVRleHQ6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJDbGVhciB2YWx1ZVwifSxjbG9zZU9uU2VsZWN0Ont0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sZGVsZXRlUmVtb3Zlczp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LGRpc2FibGVCcmFuY2hOb2Rlczp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGRpc2FibGVkOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sZGVmYXVsdEV4cGFuZExldmVsOnt0eXBlOk51bWJlcixkZWZhdWx0OjB9LGVzY2FwZUNsZWFyc1ZhbHVlOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sZmxhdDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGlkOntkZWZhdWx0Om51bGx9LGxpbWl0Ont0eXBlOk51bWJlcixkZWZhdWx0OjEvMH0sbGltaXRUZXh0Ont0eXBlOkZ1bmN0aW9uLGRlZmF1bHQ6bX0sbG9hZENoaWxkcmVuRXJyb3JUZXh0Ont0eXBlOkZ1bmN0aW9uLGRlZmF1bHQ6Q30sbG9hZENoaWxkcmVuT3B0aW9uczp7dHlwZTpGdW5jdGlvbn0sbG9hZGluZ1RleHQ6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJMb2FkaW5nLi4uXCJ9LGxvYWRSb290T3B0aW9uczp7dHlwZTpGdW5jdGlvbn0sbWF4SGVpZ2h0Ont0eXBlOk51bWJlcixkZWZhdWx0OjMwMH0sbXVsdGlwbGU6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxub0NoaWxkcmVuVGV4dDp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIk5vIGNoaWxkcmVuIG9wdGlvbnMuLi5cIn0sbm9SZXN1bHRzVGV4dDp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIk5vIHJlc3VsdHMgZm91bmQuLi5cIn0sbm9PcHRpb25zVGV4dDp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIk5vIG9wdGlvbnMgYXZhaWxhYmxlLlwifSxvcGVuRGlyZWN0aW9uOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiYXV0b1wifSxvcGVuT25DbGljazp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LG9wZW5PbkZvY3VzOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sb3B0aW9uczp7dHlwZTpBcnJheX0scGxhY2Vob2xkZXI6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJTZWxlY3QuLi5cIn0scmV0YWluU2Nyb2xsUG9zaXRpb246e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxyZXRyeVRleHQ6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJSZXRyeT9cIn0scmV0cnlUaXRsZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIkNsaWNrIHRvIHJldHJ5XCJ9LHNlYXJjaGFibGU6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxzaG93Q291bnQ6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxzaG93Q291bnRPZjp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIkFMTF9DSElMRFJFTlwiLHZhbGlkYXRvcjpmdW5jdGlvbihlKXtyZXR1cm4tMSE9PVtcIkFMTF9DSElMRFJFTlwiLFwiQUxMX0RFU0NFTkRBTlRTXCIsXCJMRUFGX0NISUxEUkVOXCIsXCJMRUFGX0RFU0NFTkRBTlRTXCJdLmluZGV4T2YoZSl9fSxzaG93Q291bnRPblNlYXJjaDpudWxsLHNvcnRWYWx1ZUJ5Ont0eXBlOlN0cmluZyxkZWZhdWx0OlwiT1JERVJfU0VMRUNURURcIn0sc3ViSXRlbXNMaW1pdDp7dHlwZTpOdW1iZXIsZGVmYXVsdDoxLzB9LHRhYkluZGV4Ont0eXBlOk51bWJlcixkZWZhdWx0OjB9LHZhbHVlOm51bGx9LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57aW50ZXJuYWxWYWx1ZTpbXSxpc0ZvY3VzZWQ6ITEsaXNPcGVuOiExLG5vZGVDaGVja2VkU3RhdGVNYXA6T2JqZWN0LmNyZWF0ZShudWxsKSxub2RlTWFwOk9iamVjdC5jcmVhdGUobnVsbCksbm9ybWFsaXplZE9wdGlvbnM6bnVsbCxub1NlYXJjaFJlc3VsdHM6ITAsb3B0aW1pemVkSGVpZ2h0OjAscHJlZmZlcmVkT3BlbkRpcmVjdGlvbjpcImJlbG93XCIscm9vdE9wdGlvbnNMb2FkZWQ6ITEsbG9hZGluZ1Jvb3RPcHRpb25zOiExLGxvYWRpbmdSb290T3B0aW9uc0Vycm9yOlwiXCIsc2VhcmNoaW5nQ291bnQ6T2JqZWN0LmNyZWF0ZShudWxsKSxzZWFyY2hpbmc6ITEsc2VhcmNoUXVlcnk6XCJcIixzZWxlY3RlZE5vZGVNYXA6T2JqZWN0LmNyZWF0ZShudWxsKSxsYXN0U2Nyb2xsUG9zaXRpb246MH19LGNvbXB1dGVkOntzZWxlY3RlZE5vZGVzTnVtYmVyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW50ZXJuYWxWYWx1ZS5sZW5ndGh9LGhhc1ZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2VsZWN0ZWROb2Rlc051bWJlcj4wfSxzZWxlY3RlZE5vZGVzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW50ZXJuYWxWYWx1ZS5tYXAodGhpcy5nZXROb2RlKX0sc2luZ2xlOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMubXVsdGlwbGV9LHZpc2libGVWYWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNlbGVjdGVkTm9kZXMuc2xpY2UoMCx0aGlzLmxpbWl0KX0saGFzRXhjZWVkZWRMaW1pdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNlbGVjdGVkTm9kZXNOdW1iZXI+dGhpcy5saW1pdH0sc2hvdWxkU2hvd0NsZWFySWNvbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsZWFyYWJsZSYmIXRoaXMuZGlzYWJsZWQmJnRoaXMuaGFzVmFsdWV9LHNob3dDb3VudE9uU2VhcmNoQ29tcHV0ZWQ6ZnVuY3Rpb24oKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIHRoaXMuc2hvd0NvdW50T25TZWFyY2g/dGhpcy5zaG93Q291bnRPblNlYXJjaDp0aGlzLnNob3dDb3VudH19LHdhdGNoOntkaXNhYmxlZDpmdW5jdGlvbihlKXtlJiZ0aGlzLmlzT3BlbiYmdGhpcy5jbG9zZU1lbnUoKX0sbXVsdGlwbGU6ZnVuY3Rpb24oZSl7ZSYmdGhpcy5idWlsZE5vZGVDaGVja2VkU3RhdGVNYXAoKX0sc2VhcmNoUXVlcnk6TygpKChmdW5jdGlvbigpe3RoaXMuaGFuZGxlU2VhcmNoKCksdGhpcy4kZW1pdChcInNlYXJjaC1jaGFuZ2VcIix0aGlzLnNlYXJjaFF1ZXJ5LHRoaXMuaWQpfSksMjAwKSxzb3J0VmFsdWVCeTpmdW5jdGlvbigpe3RoaXMuc29ydFZhbHVlKCl9LGludGVybmFsVmFsdWU6ZnVuY3Rpb24oKXt0aGlzLiRlbWl0KFwiaW5wdXRcIix0aGlzLmdldFZhbHVlKCksdGhpcy5pZCl9LHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWV8fDA9PT1lP3RoaXMubXVsdGlwbGU/ZS5zbGljZSgpOltlXTpbXTshcCh0LHRoaXMuaW50ZXJuYWxWYWx1ZSkmJih0aGlzLmludGVybmFsVmFsdWU9dCx0aGlzLmJ1aWxkU2VsZWN0ZWROb2RlTWFwKCksdGhpcy5idWlsZE5vZGVDaGVja2VkU3RhdGVNYXAoKSl9fSxtZXRob2RzOnt2ZXJpZnlQcm9wczpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5sb2FkUm9vdE9wdGlvbnN8fCh0aGlzLm9wdGlvbnM/QXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMpfHxTKChmdW5jdGlvbigpe3JldHVybiExfSksKGZ1bmN0aW9uKCl7cmV0dXJuXCJFeHBlY3RlZCBwcm9wIGBvcHRpb25zYCB0byBiZSBhbiBhcnJheSwgaW5zdGVhZCBnb3Q6IFwiK2Uub3B0aW9ucytcIi5cIn0pKTpTKChmdW5jdGlvbigpe3JldHVybiExfSksKGZ1bmN0aW9uKCl7cmV0dXJuXCJSZXF1aXJlZCBwcm9wIGBvcHRpb25zYCBpcyBub3QgcHJvdmlkZWQuXCJ9KSkpfSxyZXNldEZsYWdzOmZ1bmN0aW9uKCl7dGhpcy5fYmx1ck9uU2VsZWN0PSExLHRoaXMuX3dhc0NsaWNrZWRPblZhbHVlSXRlbT0hMX0saW5pdGlhbGl6ZTpmdW5jdGlvbihlKXtBcnJheS5pc0FycmF5KGUpJiYodGhpcy5yb290T3B0aW9uc0xvYWRlZD0hMCksdGhpcy5pbml0aWFsaXplUm9vdE9wdGlvbnMoZXx8W10pLHRoaXMuaW5pdGlhbGl6ZVZhbHVlKCksdGhpcy5idWlsZFNlbGVjdGVkTm9kZU1hcCgpLHRoaXMuYnVpbGROb2RlQ2hlY2tlZFN0YXRlTWFwKCl9LGdldFZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubXVsdGlwbGU/dGhpcy5pbnRlcm5hbFZhbHVlLnNsaWNlKCk6dGhpcy5pbnRlcm5hbFZhbHVlWzBdfSxnZXROb2RlOmZ1bmN0aW9uKGUpe3JldHVybiBTKChmdW5jdGlvbigpe3JldHVybiBudWxsIT1lfSksKGZ1bmN0aW9uKCl7cmV0dXJuXCJJbnZhbGlkIG5vZGUgaWQ6IFwiK2V9KSksdGhpcy5ub2RlTWFwW2VdfHx7aWQ6ZSxsYWJlbDplK1wiICh1bmtub3duKVwiLGFuY2VzdG9yczpbXSxwYXJlbnROb2RlOm51bGwsaXNVbmtub3duTm9kZTohMCxpc0xlYWY6ITAsaXNCcmFuY2g6ITF9fSxpc1NlbGVjdGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlLmlkIGluIHRoaXMuc2VsZWN0ZWROb2RlTWFwfSxjaGVja0lmQnJhbmNoTm9kZTpmdW5jdGlvbihlKXtTKChmdW5jdGlvbigpe3JldHVybiBlJiZlLmlzQnJhbmNofSksKGZ1bmN0aW9uKCl7cmV0dXJuXCJFeHBlY3RlZCBhIGJyYW5jaCBub2RlLCBpbnN0ZWFkIGdvdDogXCIrZX0pKX0sdHJhdmVyc2VEZXNjZW5kYW50czpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpcztcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiYobj10LHQ9MS8wKSxlLmlzQnJhbmNoJiZlLmxldmVsPHQmJmUuY2hpbGRyZW4uZm9yRWFjaCgoZnVuY3Rpb24oZSl7aS50cmF2ZXJzZURlc2NlbmRhbnRzKGUsdCxuKSxuKGUpfSkpfSx0cmF2ZXJzZUFuY2VzdG9yczpmdW5jdGlvbihlLHQpe3ZhciBuPWUucGFyZW50Tm9kZTtudWxsIT09biYmKHQobiksdGhpcy50cmF2ZXJzZUFuY2VzdG9ycyhuLHQpKX0sdHJhdmVyc2VBbGxOb2RlczpmdW5jdGlvbihlKXt2YXIgdD10aGlzO3RoaXMubm9ybWFsaXplZE9wdGlvbnMuZm9yRWFjaCgoZnVuY3Rpb24obil7dC50cmF2ZXJzZURlc2NlbmRhbnRzKG4sZSksZShuKX0pKX0sdG9nZ2xlQ2xpY2tPdXRzaWRlRXZlbnQ6ZnVuY3Rpb24oZSl7ZT9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5oYW5kbGVDbGlja091dHNpZGUsITEpOmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSwhMSl9LGZvY3VzSW5wdXQ6ZnVuY3Rpb24oKXt0aGlzLiRyZWZzLnZhbHVlLmZvY3VzSW5wdXQoKX0sYmx1cklucHV0OmZ1bmN0aW9uKCl7dGhpcy4kcmVmcy52YWx1ZS5ibHVySW5wdXQoKX0saGFuZGxlTW91c2VEb3duOmkoKGZ1bmN0aW9uKGUpe2lmKGUucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpLCF0aGlzLmRpc2FibGVkKXt0aGlzLiRyZWZzLnZhbHVlLiRlbC5jb250YWlucyhlLnRhcmdldCkmJighdGhpcy5pc09wZW58fHRoaXMuc2VhcmNoYWJsZXx8dGhpcy5fd2FzQ2xpY2tlZE9uVmFsdWVJdGVtP3RoaXMuaXNPcGVufHwhdGhpcy5vcGVuT25DbGljayYmIXRoaXMuaXNGb2N1c2VkfHx0aGlzLm9wZW5NZW51KCk6dGhpcy5jbG9zZU1lbnUoKSksdGhpcy5fYmx1ck9uU2VsZWN0P3RoaXMuYmx1cklucHV0KCk6dGhpcy5mb2N1c0lucHV0KCksdGhpcy5yZXNldEZsYWdzKCl9fSkpLGhhbmRsZU1vdXNlRG93bk9uQ2xlYXI6aSgoZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSxlLnByZXZlbnREZWZhdWx0KCksdGhpcy5jbGVhcigpLHRoaXMuZm9jdXNJbnB1dCgpfSkpLGhhbmRsZU1vdXNlRG93bk9uQXJyb3c6aSgoZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5mb2N1c0lucHV0KCksdGhpcy50b2dnbGVNZW51KCl9KSksaGFuZGxlQ2xpY2tPdXRzaWRlOmZ1bmN0aW9uKGUpe3RoaXMuJHJlZnMud3JhcHBlciYmIXRoaXMuJHJlZnMud3JhcHBlci5jb250YWlucyhlLnRhcmdldCkmJih0aGlzLmJsdXJJbnB1dCgpLHRoaXMuY2xvc2VNZW51KCkpfSxoYW5kbGVTZWFyY2g6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMuc2VhcmNoUXVlcnk/KHRoaXMuc2VhcmNoaW5nPSEwLHRoaXMubm9TZWFyY2hSZXN1bHRzPSEwLHRoaXMudHJhdmVyc2VBbGxOb2RlcygoZnVuY3Rpb24odCl7aWYodC5pc0JyYW5jaCl7dmFyIG47dC5leHBhbmRzT25TZWFyY2g9ITEsdC5oYXNNYXRjaGVkQ2hpbGQ9ITEsZS5zZWFyY2hpbmdDb3VudFt0LmlkXT0obj17fSxmKG4sXCJBTExfQ0hJTERSRU5cIiwwKSxmKG4sXCJBTExfREVTQ0VOREFOVFNcIiwwKSxmKG4sXCJMRUFGX0NISUxEUkVOXCIsMCksZihuLFwiTEVBRl9ERVNDRU5EQU5UU1wiLDApLG4pfX0pKSx0aGlzLnRyYXZlcnNlQWxsTm9kZXMoKGZ1bmN0aW9uKHQpe3ZhciBuPXQuaXNNYXRjaGVkPWcoKShlLnNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCksdC5sYWJlbC50b0xvd2VyQ2FzZSgpKTtuJiYoZS5ub1NlYXJjaFJlc3VsdHM9ITEsdC5hbmNlc3RvcnMuZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIGUuc2VhcmNoaW5nQ291bnRbdC5pZF0uQUxMX0RFU0NFTkRBTlRTKyt9KSksdC5pc0xlYWYmJnQuYW5jZXN0b3JzLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiBlLnNlYXJjaGluZ0NvdW50W3QuaWRdLkxFQUZfREVTQ0VOREFOVFMrK30pKSxudWxsIT09dC5wYXJlbnROb2RlJiYoZS5zZWFyY2hpbmdDb3VudFt0LnBhcmVudE5vZGUuaWRdLkFMTF9DSElMRFJFTis9MSx0LmlzTGVhZiYmKGUuc2VhcmNoaW5nQ291bnRbdC5wYXJlbnROb2RlLmlkXS5MRUFGX0NISUxEUkVOKz0xKSkpLChufHx0LmlzQnJhbmNoJiZ0LmV4cGFuZHNPblNlYXJjaCkmJm51bGwhPT10LnBhcmVudE5vZGUmJih0LnBhcmVudE5vZGUuZXhwYW5kc09uU2VhcmNoPSEwLHQucGFyZW50Tm9kZS5oYXNNYXRjaGVkQ2hpbGQ9ITApfSkpKTp0aGlzLnNlYXJjaGluZz0hMX0sY2xvc2VNZW51OmZ1bmN0aW9uKCl7dGhpcy5pc09wZW4mJih0aGlzLmlzT3Blbj0hMSx0aGlzLnJldGFpblNjcm9sbFBvc2l0aW9uJiZ0aGlzLiRyZWZzLm1lbnUmJih0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbj10aGlzLiRyZWZzLm1lbnUuc2Nyb2xsVG9wKSx0aGlzLnRvZ2dsZUNsaWNrT3V0c2lkZUV2ZW50KCExKSx0aGlzLnNlYXJjaFF1ZXJ5PVwiXCIsdGhpcy4kZW1pdChcImNsb3NlXCIsdGhpcy5nZXRWYWx1ZSgpLHRoaXMuaWQpKX0sb3Blbk1lbnU6ZnVuY3Rpb24oKXt0aGlzLmRpc2FibGVkfHx0aGlzLmlzT3Blbnx8KHRoaXMuaXNPcGVuPSEwLHRoaXMuJG5leHRUaWNrKHRoaXMuYWRqdXN0UG9zaXRpb24pLHRoaXMucmV0YWluU2Nyb2xsUG9zaXRpb24mJnRoaXMuJG5leHRUaWNrKHRoaXMucmVzdG9yZVNjcm9sbFBvc2l0aW9uKSx0aGlzLnJvb3RPcHRpb25zTG9hZGVkfHx0aGlzLmxvYWRPcHRpb25zKCEwKSx0aGlzLnRvZ2dsZUNsaWNrT3V0c2lkZUV2ZW50KCEwKSx0aGlzLiRlbWl0KFwib3BlblwiLHRoaXMuaWQpKX0sdG9nZ2xlTWVudTpmdW5jdGlvbigpe3RoaXMuaXNPcGVuP3RoaXMuY2xvc2VNZW51KCk6dGhpcy5vcGVuTWVudSgpfSx0b2dnbGVFeHBhbmRlZDpmdW5jdGlvbihlKXt0aGlzLmNoZWNrSWZCcmFuY2hOb2RlKGUpLHRoaXMuc2VhcmNoaW5nP2UuZXhwYW5kc09uU2VhcmNoPSFlLmV4cGFuZHNPblNlYXJjaDplLmlzRXhwYW5kZWQ9IWUuaXNFeHBhbmRlZH0saW5pdGlhbGl6ZVZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5tdWx0aXBsZT8odGhpcy5pbnRlcm5hbFZhbHVlPUFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSk/dGhpcy52YWx1ZS5zbGljZSgpOltdLHRoaXMuc29ydFZhbHVlKCkpOnRoaXMuaW50ZXJuYWxWYWx1ZT1udWxsIT10aGlzLnZhbHVlP1t0aGlzLnZhbHVlXTpbXX0saW5pdGlhbGl6ZVJvb3RPcHRpb25zOmZ1bmN0aW9uKGUpe3RoaXMubm9ybWFsaXplZE9wdGlvbnM9dGhpcy5ub3JtYWxpemUobnVsbCxlKX0sYnVpbGRTZWxlY3RlZE5vZGVNYXA6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnNlbGVjdGVkTm9kZU1hcD1PYmplY3QuY3JlYXRlKG51bGwpO3RoaXMuaW50ZXJuYWxWYWx1ZS5mb3JFYWNoKChmdW5jdGlvbih0KXtlW3RdPSEwfSkpfSxidWlsZE5vZGVDaGVja2VkU3RhdGVNYXA6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9dGhpcy5ub2RlQ2hlY2tlZFN0YXRlTWFwPU9iamVjdC5jcmVhdGUobnVsbCk7dGhpcy5tdWx0aXBsZSYmKHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKChmdW5jdGlvbihuKXt0W24uaWRdPTIsZS5mbGF0fHwoZS50cmF2ZXJzZURlc2NlbmRhbnRzKG4sKGZ1bmN0aW9uKGUpe3RbZS5pZF09Mn0pKSxlLnRyYXZlcnNlQW5jZXN0b3JzKG4sKGZ1bmN0aW9uKGUpe3RbZS5pZF09MX0pKSl9KSksdGhpcy5ub3JtYWxpemVkT3B0aW9ucy5mb3JFYWNoKChmdW5jdGlvbihuKXtuLmlkIGluIHR8fCh0W24uaWRdPTApLGUudHJhdmVyc2VEZXNjZW5kYW50cyhuLChmdW5jdGlvbihlKXtlLmlkIGluIHR8fCh0W2UuaWRdPTApfSkpfSkpKX0sbm9ybWFsaXplOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcyxpPXQubWFwKChmdW5jdGlvbih0LGkpe24uY2hlY2tEdXBsaWNhdGlvbih0KSxuLnZlcmlmeU5vZGVTaGFwZSh0KTt2YXIgcz1udWxsPT09ZSxvPXQuaWQscj10LmxhYmVsLGE9dC5jaGlsZHJlbixsPXQuaXNEaXNhYmxlZCxjPXZvaWQgMCE9PWwmJmwsdT1BcnJheS5pc0FycmF5KGEpfHxudWxsPT09YXx8dm9pZCAwPT09YSYmISF0LmlzQnJhbmNoLGQ9IXUsaD1zPzA6ZS5sZXZlbCsxLHA9cz9bXTplLmFuY2VzdG9ycy5jb25jYXQoZSksdj0ocz9bXTplLmluZGV4KS5jb25jYXQoaSksXz1uLm5vZGVNYXBbb109e2lkOm8sbGFiZWw6cixsZXZlbDpoLGFuY2VzdG9yczpwLGluZGV4OnYscGFyZW50Tm9kZTplLGlzRGlzYWJsZWQ6Yyxpc01hdGNoZWQ6ITEsaXNMZWFmOmQsaXNCcmFuY2g6dSxpc1Jvb3ROb2RlOnMscmF3OnR9O2lmKHUpe3ZhciBtLEM9QXJyYXkuaXNBcnJheShhKTtDfHxTKChmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4ubG9hZENoaWxkcmVuT3B0aW9uc30pLChmdW5jdGlvbigpe3JldHVyblwiVW5sb2FkZWQgYnJhbmNoIG5vZGUgZGV0ZWN0ZWQuIGBsb2FkQ2hpbGRyZW5PcHRpb25zYCBwcm9wIGlzIHJlcXVpcmVkIHRvIGxvYWQgaXRzIGNoaWxkcmVuLlwifSkpLF8uaXNMb2FkZWQ9QyxfLmlzUGVuZGluZz0hMSxfLmlzRXhwYW5kZWQ9aDxuLmRlZmF1bHRFeHBhbmRMZXZlbCxfLmhhc01hdGNoZWRDaGlsZD0hMSxfLmV4cGFuZHNPblNlYXJjaD0hMSxfLmxvYWRpbmdDaGlsZHJlbkVycm9yPVwiXCIsXy5jb3VudD0obT17fSxmKG0sXCJBTExfQ0hJTERSRU5cIiwwKSxmKG0sXCJBTExfREVTQ0VOREFOVFNcIiwwKSxmKG0sXCJMRUFGX0NISUxEUkVOXCIsMCksZihtLFwiTEVBRl9ERVNDRU5EQU5UU1wiLDApLG0pLF8uY2hpbGRyZW49Qz9uLm5vcm1hbGl6ZShfLGEpOltdLF8uaXNFeHBhbmRlZCYmIV8uaXNMb2FkZWQmJm4ubG9hZE9wdGlvbnMoITEsXyl9cmV0dXJuIF8uYW5jZXN0b3JzLmZvckVhY2goKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNvdW50LkFMTF9ERVNDRU5EQU5UUysrfSkpLGQmJl8uYW5jZXN0b3JzLmZvckVhY2goKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNvdW50LkxFQUZfREVTQ0VOREFOVFMrK30pKSxudWxsIT09ZSYmKGUuY291bnQuQUxMX0NISUxEUkVOKz0xLGQmJihlLmNvdW50LkxFQUZfQ0hJTERSRU4rPTEpKSxffSkpO2lmKHRoaXMuYnJhbmNoTm9kZXNGaXJzdCl7dmFyIHM9aS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlzQnJhbmNofSkpLG89aS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlzTGVhZn0pKTtpPXMuY29uY2F0KG8pfXJldHVybiBpfSxsb2FkT3B0aW9uczpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7aWYoZSl7aWYodGhpcy5sb2FkaW5nUm9vdE9wdGlvbnMpcmV0dXJuO3ZhciBpPWZ1bmN0aW9uKGUsdCl7bi5sb2FkaW5nUm9vdE9wdGlvbnM9ITEsZT9uLmxvYWRpbmdSb290T3B0aW9uc0Vycm9yPWUubWVzc2FnZXx8U3RyaW5nKGUpOnQ/QXJyYXkuaXNBcnJheSh0KT8obi5pbml0aWFsaXplKHQpLG4ucm9vdE9wdGlvbnNMb2FkZWQ9ITApOm4ubG9hZGluZ1Jvb3RPcHRpb25zRXJyb3I9XCJyZWNlaXZlZCB1bnJlY29nbml6YWJsZSBkYXRhXCI6bi5sb2FkaW5nUm9vdE9wdGlvbnNFcnJvcj1cIm5vIGRhdGEgcmVjZWl2ZWRcIn07dGhpcy5sb2FkaW5nUm9vdE9wdGlvbnM9ITAsdGhpcy5sb2FkaW5nUm9vdE9wdGlvbnNFcnJvcj1cIlwiLHRoaXMubG9hZFJvb3RPcHRpb25zKGkpfWVsc2V7aWYodC5pc1BlbmRpbmcpcmV0dXJuO3ZhciBzPXQucmF3LG89ZnVuY3Rpb24oZSxpKXt0LmlzUGVuZGluZz0hMSxlP3QubG9hZGluZ0NoaWxkcmVuRXJyb3I9bi5sb2FkQ2hpbGRyZW5FcnJvclRleHQoZSk6QXJyYXkuaXNBcnJheShpKT8odC5jaGlsZHJlbj1uLm5vcm1hbGl6ZSh0LGkpLHQuaXNMb2FkZWQ9ITAsbi5idWlsZE5vZGVDaGVja2VkU3RhdGVNYXAoKSk6KHQubG9hZGluZ0NoaWxkcmVuRXJyb3I9XCJSZWNlaXZlZCB1bnJlY29nbml6YWJsZSBkYXRhXCIsUygoZnVuY3Rpb24oKXtyZXR1cm4hMX0pLChmdW5jdGlvbigpe3JldHVyblwiUmVjZWl2ZWQgdW5yZWNvZ25pemFibGUgZGF0YSBcIitpK1wiIHdoaWxlIGxvYWRpbmcgY2hpbGRyZW4gb3B0aW9ucyBvZiBub2RlIFwiK3QuaWR9KSkpfTt0LmlzUGVuZGluZz0hMCx0LmxvYWRpbmdDaGlsZHJlbkVycm9yPVwiXCIsdGhpcy5sb2FkQ2hpbGRyZW5PcHRpb25zKHMsbyl9fSxjaGVja0R1cGxpY2F0aW9uOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7UygoZnVuY3Rpb24oKXtyZXR1cm4hYSh0Lm5vZGVNYXAsZS5pZCl9KSwoZnVuY3Rpb24oKXtyZXR1cm5cIkRldGVjdGVkIGR1cGxpY2F0ZSBwcmVzZW5jZSBvZiBub2RlIGlkIFwiK0pTT04uc3RyaW5naWZ5KGUuaWQpKycuIFRoZWlyIGxhYmVscyBhcmUgXCInK3Qubm9kZU1hcFtlLmlkXS5sYWJlbCsnXCIgYW5kIFwiJytlLmxhYmVsKydcIiByZXNwZWN0aXZlbHkuJ30pKX0sdmVyaWZ5Tm9kZVNoYXBlOmZ1bmN0aW9uKCl7fSxzZWxlY3Q6ZnVuY3Rpb24oZSl7dGhpcy5zaW5nbGUmJnRoaXMuY2xlYXIoKTt2YXIgdD10aGlzLm11bHRpcGxlJiYhdGhpcy5mbGF0PzA9PT10aGlzLm5vZGVDaGVja2VkU3RhdGVNYXBbZS5pZF06IXRoaXMuaXNTZWxlY3RlZChlKTt0P3RoaXMuX3NlbGVjdE5vZGUoZSk6dGhpcy5fZGVzZWxlY3ROb2RlKGUpLHRoaXMuYnVpbGRTZWxlY3RlZE5vZGVNYXAoKSx0aGlzLmJ1aWxkTm9kZUNoZWNrZWRTdGF0ZU1hcCgpLHRoaXMuc2VhcmNoaW5nJiZ0JiYodGhpcy5zaW5nbGV8fHRoaXMuY2xlYXJPblNlbGVjdCkmJih0aGlzLnNlYXJjaFF1ZXJ5PVwiXCIpLHRoaXMuc2luZ2xlJiZ0aGlzLmNsb3NlT25TZWxlY3QmJih0aGlzLmNsb3NlTWVudSgpLHRoaXMuc2VhcmNoYWJsZSYmKHRoaXMuX2JsdXJPblNlbGVjdD0hMCkpfSxjbGVhcjpmdW5jdGlvbigpe3RoaXMuaGFzVmFsdWUmJih0aGlzLmludGVybmFsVmFsdWU9W10sdGhpcy5idWlsZFNlbGVjdGVkTm9kZU1hcCgpLHRoaXMuYnVpbGROb2RlQ2hlY2tlZFN0YXRlTWFwKCkpfSxfc2VsZWN0Tm9kZTpmdW5jdGlvbihlKXtpZih0aGlzLmFkZFZhbHVlKGUpLHRoaXMubXVsdGlwbGUmJiF0aGlzLmZsYXQmJiFlLmlzUm9vdE5vZGUpe3ZhciB0PWUucGFyZW50Tm9kZSxuPXQuY2hpbGRyZW47bi5ldmVyeSh0aGlzLmlzU2VsZWN0ZWQpJiYobi5mb3JFYWNoKHRoaXMucmVtb3ZlVmFsdWUpLHRoaXMuX3NlbGVjdE5vZGUodCkpfX0sX2Rlc2VsZWN0Tm9kZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO2lmKHRoaXMucmVtb3ZlVmFsdWUoZSksdGhpcy5tdWx0aXBsZSYmIXRoaXMuZmxhdCYmKHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKChmdW5jdGlvbihuKXstMSE9PW4uYW5jZXN0b3JzLmluZGV4T2YoZSkmJnQucmVtb3ZlVmFsdWUobil9KSksIWUuaXNSb290Tm9kZSkpe3ZhciBuPWQoZS5hbmNlc3RvcnMsdGhpcy5pc1NlbGVjdGVkKTtpZigtMSE9PW4pe3ZhciBpPWUuYW5jZXN0b3JzW25dLHM9ZS5hbmNlc3RvcnMuY29uY2F0KGUpO3RoaXMucmVtb3ZlVmFsdWUoaSksdGhpcy50cmF2ZXJzZURlc2NlbmRhbnRzKGksZS5sZXZlbCwoZnVuY3Rpb24oZSl7LTE9PT1zLmluZGV4T2YoZSkmJnQuYWRkVmFsdWUoZSl9KSl9fX0sYWRkVmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5pbnRlcm5hbFZhbHVlLnB1c2goZS5pZCksdGhpcy5zZWxlY3RlZE5vZGVNYXBbZS5pZF09ITAsdGhpcy5zb3J0VmFsdWUoKX0scmVtb3ZlVmFsdWU6ZnVuY3Rpb24oZSl7aCh0aGlzLmludGVybmFsVmFsdWUsZS5pZCksZGVsZXRlIHRoaXMuc2VsZWN0ZWROb2RlTWFwW2UuaWRdfSxtYXliZVJlbW92ZUxhc3RWYWx1ZTpmdW5jdGlvbigpe2lmKHRoaXMuaGFzVmFsdWUpe3ZhciBlPWModGhpcy5pbnRlcm5hbFZhbHVlKSx0PXRoaXMuZ2V0Tm9kZShlKTt0aGlzLnJlbW92ZVZhbHVlKHQpLHRoaXMuYnVpbGRTZWxlY3RlZE5vZGVNYXAoKSx0aGlzLmJ1aWxkTm9kZUNoZWNrZWRTdGF0ZU1hcCgpfX0sc29ydFZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztcIkxFVkVMXCI9PT10aGlzLnNvcnRWYWx1ZUJ5P3RoaXMuaW50ZXJuYWxWYWx1ZS5zb3J0KChmdW5jdGlvbih0LG4pe3JldHVybiBfKGUubm9kZU1hcFt0XSxlLm5vZGVNYXBbbl0pfSkpOlwiSU5ERVhcIj09PXRoaXMuc29ydFZhbHVlQnkmJnRoaXMuaW50ZXJuYWxWYWx1ZS5zb3J0KChmdW5jdGlvbih0LG4pe3JldHVybiB2KGUubm9kZU1hcFt0XSxlLm5vZGVNYXBbbl0pfSkpfSxyZXN0b3JlU2Nyb2xsUG9zaXRpb246ZnVuY3Rpb24oKXt0aGlzLiRyZWZzLm1lbnUmJih0aGlzLiRyZWZzLm1lbnUuc2Nyb2xsVG9wPXRoaXMubGFzdFNjcm9sbFBvc2l0aW9uKX0sYWRqdXN0UG9zaXRpb246ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KXt2YXIgZT10aGlzLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSx0PWUudG9wLG49d2luZG93LmlubmVySGVpZ2h0LWUuYm90dG9tO24+dGhpcy5tYXhIZWlnaHR8fG4+dHx8XCJiZWxvd1wiPT09dGhpcy5vcGVuRGlyZWN0aW9ufHxcImJvdHRvbVwiPT09dGhpcy5vcGVuRGlyZWN0aW9uPyh0aGlzLnByZWZmZXJlZE9wZW5EaXJlY3Rpb249XCJiZWxvd1wiLHRoaXMub3B0aW1pemVkSGVpZ2h0PU1hdGgubWluKG4tNDAsdGhpcy5tYXhIZWlnaHQpKToodGhpcy5wcmVmZmVyZWRPcGVuRGlyZWN0aW9uPVwiYWJvdmVcIix0aGlzLm9wdGltaXplZEhlaWdodD1NYXRoLm1pbih0LTQwLHRoaXMubWF4SGVpZ2h0KSl9fX0sY3JlYXRlZDpmdW5jdGlvbigpe3RoaXMudmVyaWZ5UHJvcHMoKSx0aGlzLnJlc2V0RmxhZ3MoKSx0aGlzLmluaXRpYWxpemUodGhpcy5vcHRpb25zKX0sbW91bnRlZDpmdW5jdGlvbigpe3RoaXMuYXV0b2ZvY3VzJiZ0aGlzLiRyZWZzLnZhbHVlLmZvY3VzSW5wdXQoKX0sZGVzdHJveWVkOmZ1bmN0aW9uKCl7dGhpcy50b2dnbGVDbGlja091dHNpZGVFdmVudCghMSl9fSxEPXtjb21wdXRlZDp7bGltaXRUZXh0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5pbnN0YW5jZS5zZWxlY3RlZE5vZGVzTnVtYmVyLXRoaXMuaW5zdGFuY2UubGltaXQ7cmV0dXJuIHRoaXMuaW5zdGFuY2UubGltaXRUZXh0KGUpfX0sbWV0aG9kczp7Zm9jdXNJbnB1dDpmdW5jdGlvbigpe3RoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKX0sYmx1cklucHV0OmZ1bmN0aW9uKCl7dGhpcy4kcmVmcy5pbnB1dC5ibHVyKCl9LGhhbmRsZU1vdXNlRG93bk9uVmFsdWU6aSgoZnVuY3Rpb24oKXt0aGlzLmluc3RhbmNlLl93YXNDbGlja2VkT25WYWx1ZUl0ZW09ITB9KSl9fSxNPXtuYW1lOlwidnVlLXRyZWVzZWxlY3QtLXBsYWNlaG9sZGVyXCIsaW5qZWN0OltcImluc3RhbmNlXCJdfSxBPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQ7cmV0dXJuKGUuX3NlbGYuX2N8fHQpKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX3BsYWNlaG9sZGVyIHZ1ZS10cmVlc2VsZWN0LWhlbHBlci16b29tLWVmZmVjdC1vZmZcIn0sW2UuX3QoXCJwbGFjZWhvbGRlclwiLFtlLl92KGUuX3MoZS5pbnN0YW5jZS5wbGFjZWhvbGRlcikpXSldLDIpfSxMPVtdLFQ9e3JlbmRlcjpBLHN0YXRpY1JlbmRlckZuczpMfSxWPVQsUj1uKDApLGs9UihNLFYsITEsbnVsbCxudWxsLG51bGwpLEk9ay5leHBvcnRzLCQ9e0JBQ0tTUEFDRTo4LEVTQ0FQRToyNyxERUxFVEU6NDZ9LEI9e25hbWU6XCJ2dWUtdHJlZXNlbGVjdC0taW5wdXRcIixpbmplY3Q6W1wiaW5zdGFuY2VcIl0sZGF0YTpmdW5jdGlvbigpe3JldHVybntpbnB1dFdpZHRoOjV9fSxjb21wdXRlZDp7bmVlZHNBdXRvU2l6ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmluc3RhbmNlLm11bHRpcGxlfX0sdXBkYXRlZDpmdW5jdGlvbigpe3RoaXMubmVlZHNBdXRvU2l6ZSYmdGhpcy51cGRhdGVJbnB1dFdpZHRoKCl9LG1ldGhvZHM6e2ZvY3VzOmZ1bmN0aW9uKCl7dGhpcy5pbnN0YW5jZS5kaXNhYmxlZHx8dGhpcy4kcmVmcy5pbnB1dCYmdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpfSxibHVyOmZ1bmN0aW9uKCl7dGhpcy4kcmVmcy5pbnB1dCYmdGhpcy4kcmVmcy5pbnB1dC5ibHVyKCl9LG9uRm9jdXM6ZnVuY3Rpb24oKXt0aGlzLmluc3RhbmNlLmlzRm9jdXNlZD0hMCwhdGhpcy5pbnN0YW5jZS5pc09wZW4mJnRoaXMuaW5zdGFuY2Uub3Blbk9uRm9jdXMmJnRoaXMuaW5zdGFuY2Uub3Blbk1lbnUoKX0sb25CbHVyOmZ1bmN0aW9uKCl7dGhpcy5pbnN0YW5jZS5pc0ZvY3VzZWQ9ITEsdGhpcy5pbnN0YW5jZS5jbG9zZU1lbnUoKX0sb25JbnB1dDpmdW5jdGlvbihlKXt0aGlzLmluc3RhbmNlLnNlYXJjaFF1ZXJ5PWUudGFyZ2V0LnZhbHVlfSxvbktleURvd246ZnVuY3Rpb24oZSl7aWYoIShlLmN0cmxLZXl8fGUuc2hpZnRLZXl8fGUuYWx0S2V5fHxlLm1ldGFLZXkpKXN3aXRjaChcIndoaWNoXCJpbiBlP2Uud2hpY2g6ZS5rZXlDb2RlKXtjYXNlICQuQkFDS1NQQUNFOnRoaXMuaW5zdGFuY2UuYmFja3NwYWNlUmVtb3ZlcyYmIXRoaXMuaW5zdGFuY2Uuc2VhcmNoUXVlcnkubGVuZ3RoJiZ0aGlzLmluc3RhbmNlLm1heWJlUmVtb3ZlTGFzdFZhbHVlKCk7YnJlYWs7Y2FzZSAkLkRFTEVURTp0aGlzLmluc3RhbmNlLmRlbGV0ZVJlbW92ZXMmJiF0aGlzLmluc3RhbmNlLnNlYXJjaFF1ZXJ5Lmxlbmd0aCYmdGhpcy5pbnN0YW5jZS5tYXliZVJlbW92ZUxhc3RWYWx1ZSgpO2JyZWFrO2Nhc2UgJC5FU0NBUEU6dGhpcy5pbnN0YW5jZS5zZWFyY2hRdWVyeS5sZW5ndGg/dGhpcy5pbnN0YW5jZS5zZWFyY2hRdWVyeT1cIlwiOnRoaXMuaW5zdGFuY2UuaXNPcGVuP3RoaXMuaW5zdGFuY2UuY2xvc2VNZW51KCk6dGhpcy5pbnN0YW5jZS5lc2NhcGVDbGVhcnNWYWx1ZSYmdGhpcy5pbnN0YW5jZS5jbGVhcigpO2JyZWFrO2RlZmF1bHQ6dGhpcy5pbnN0YW5jZS5pc09wZW58fHRoaXMuaW5zdGFuY2Uub3Blbk1lbnUoKX19LG9uTW91c2VEb3duOmZ1bmN0aW9uKGUpe3RoaXMuaW5zdGFuY2Uuc2VhcmNoUXVlcnkubGVuZ3RoJiZlLnN0b3BQcm9wYWdhdGlvbigpfSxyZW5kZXJJbnB1dFdyYXBwZXI6ZnVuY3Rpb24oZSl7dmFyIHQ9e2NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2lucHV0LXdyYXBwZXJcIn0sbj1bXTtyZXR1cm4gdGhpcy5pbnN0YW5jZS5zZWFyY2hhYmxlJiYhdGhpcy5pbnN0YW5jZS5kaXNhYmxlZCYmKG4ucHVzaCh0aGlzLnJlbmRlcklucHV0KGUpKSx0aGlzLm5lZWRzQXV0b1NpemUmJm4ucHVzaCh0aGlzLnJlbmRlclNpemVyKGUpKSksdGhpcy5pbnN0YW5jZS5zZWFyY2hhYmxlfHxsKHQse29uOntmb2N1czp0aGlzLm9uRm9jdXMsYmx1cjp0aGlzLm9uQmx1cixrZXlkb3duOnRoaXMub25LZXlEb3dufSxyZWY6XCJpbnB1dFwifSksdGhpcy5pbnN0YW5jZS5zZWFyY2hhYmxlfHx0aGlzLmluc3RhbmNlLmRpc2FibGVkfHxsKHQse2F0dHJzOnt0YWJJbmRleDp0aGlzLmluc3RhbmNlLnRhYkluZGV4fX0pLGUoXCJkaXZcIix0LG4pfSxyZW5kZXJJbnB1dDpmdW5jdGlvbihlKXtyZXR1cm4gZShcImlucHV0XCIse2NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2lucHV0XCIsYXR0cnM6e3R5cGU6XCJ0ZXh0XCIsYXV0b2NvbXBsZXRlOlwib2ZmXCIsdGFiSW5kZXg6dGhpcy5pbnN0YW5jZS50YWJJbmRleH0sZG9tUHJvcHM6e3ZhbHVlOnRoaXMuaW5zdGFuY2Uuc2VhcmNoUXVlcnl9LHN0eWxlOnt3aWR0aDp0aGlzLm5lZWRzQXV0b1NpemU/dGhpcy5pbnB1dFdpZHRoK1wicHhcIjpudWxsfSxvbjp7Zm9jdXM6dGhpcy5vbkZvY3VzLGlucHV0OnRoaXMub25JbnB1dCxibHVyOnRoaXMub25CbHVyLGtleWRvd246dGhpcy5vbktleURvd24sbW91c2Vkb3duOnRoaXMub25Nb3VzZURvd259LHJlZjpcImlucHV0XCJ9KX0scmVuZGVyU2l6ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGUoXCJkaXZcIix7Y2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fc2l6ZXJcIixkb21Qcm9wczp7dGV4dENvbnRlbnQ6dGhpcy5pbnN0YW5jZS5zZWFyY2hRdWVyeX0scmVmOlwic2l6ZXJcIn0pfSx1cGRhdGVJbnB1dFdpZHRoOmZ1bmN0aW9uKCl7dGhpcy5pbnB1dFdpZHRoPU1hdGgubWF4KDUsdGhpcy4kcmVmcy5zaXplcj90aGlzLiRyZWZzLnNpemVyLnNjcm9sbFdpZHRoKzU6MCl9fSxyZW5kZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucmVuZGVySW5wdXRXcmFwcGVyKGUpfX0saj1uKDApLEY9aihCLG51bGwsITEsbnVsbCxudWxsLG51bGwpLHo9Ri5leHBvcnRzLFA9e25hbWU6XCJ2dWUtdHJlZXNlbGVjdC0tbXVsdGktdmFsdWVcIixjb21wb25lbnRzOntQbGFjZWhvbGRlcjpJLFNlYXJjaElucHV0Onp9LG1peGluczpbRF0saW5qZWN0OltcImluc3RhbmNlXCJdfSxIPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX3ZhbHVlLXdyYXBwZXJcIn0sW24oXCJ0cmFuc2l0aW9uLWdyb3VwXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX211bHRpLXZhbHVlXCIsYXR0cnM6e3RhZzpcImRpdlwiLG5hbWU6XCJ2dWUtdHJlZXNlbGVjdF9fbXVsdGktdmFsdWUtaXRlbS0tem9vbVwiLGFwcGVhcjpcIlwifX0sW2UuX2woZS5pbnN0YW5jZS52aXNpYmxlVmFsdWUsKGZ1bmN0aW9uKHQpe3JldHVybltuKFwiZGl2XCIse2tleTpcInZhbHVlLVwiK3QuaWQsc3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbXVsdGktdmFsdWUtaXRlbS13cmFwcGVyXCIsb246e21vdXNlZG93bjplLmhhbmRsZU1vdXNlRG93bk9uVmFsdWV9fSxbbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19tdWx0aS12YWx1ZS1pdGVtXCJ9LFtuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19tdWx0aS12YWx1ZS1sYWJlbFwifSxbZS5fdihlLl9zKHQubGFiZWwpKV0pLG4oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24gdnVlLXRyZWVzZWxlY3RfX3ZhbHVlLXJlbW92ZVwiLG9uOnttb3VzZWRvd246ZnVuY3Rpb24obil7ZS5pbnN0YW5jZS5zZWxlY3QodCl9fX0sW2UuX3YoXCLDl1wiKV0pXSldKV19KSksZS5fdihcIiBcIiksZS5pbnN0YW5jZS5oYXNFeGNlZWRlZExpbWl0P24oXCJkaXZcIix7a2V5OlwibGltaXQtdGlwXCIsc3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbGltaXQtdGlwIHZ1ZS10cmVlc2VsZWN0LWhlbHBlci16b29tLWVmZmVjdC1vZmZcIn0sW24oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2xpbWl0LXRpcC10ZXh0XCJ9LFtlLl92KGUuX3MoZS5saW1pdFRleHQpKV0pXSk6ZS5fZSgpLGUuX3YoXCIgXCIpLGUuaW5zdGFuY2UuaGFzVmFsdWV8fGUuaW5zdGFuY2Uuc2VhcmNoUXVlcnk/ZS5fZSgpOm4oXCJwbGFjZWhvbGRlclwiLHtrZXk6XCJwbGFjZWhvbGVyXCJ9KSxlLl92KFwiIFwiKSxuKFwic2VhcmNoLWlucHV0XCIse2tleTpcImlucHV0XCIscmVmOlwiaW5wdXRcIn0pXSwyKV0sMSl9LFE9W10sSz17cmVuZGVyOkgsc3RhdGljUmVuZGVyRm5zOlF9LFc9SyxVPW4oMCkscT1VKFAsVywhMSxudWxsLG51bGwsbnVsbCksWD1xLmV4cG9ydHMsSj17bmFtZTpcInZ1ZS10cmVlc2VsZWN0LS1zaW5nbGUtdmFsdWVcIixjb21wb25lbnRzOntQbGFjZWhvbGRlcjpJLFNlYXJjaElucHV0Onp9LG1peGluczpbRF0saW5qZWN0OltcImluc3RhbmNlXCJdfSxHPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX3ZhbHVlLXdyYXBwZXJcIn0sW2UuaW5zdGFuY2UuaGFzVmFsdWUmJiFlLmluc3RhbmNlLnNlYXJjaFF1ZXJ5P24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fc2luZ2xlLXZhbHVlXCJ9LFtlLl92KFwiXFxuICAgIFwiK2UuX3MoZS5pbnN0YW5jZS5zZWxlY3RlZE5vZGVzWzBdLmxhYmVsKStcIlxcbiAgXCIpXSk6ZS5pbnN0YW5jZS5zZWFyY2hRdWVyeT9lLl9lKCk6bihcInBsYWNlaG9sZGVyXCIpLGUuX3YoXCIgXCIpLG4oXCJzZWFyY2gtaW5wdXRcIix7a2V5OlwiaW5wdXRcIixyZWY6XCJpbnB1dFwifSldLDEpfSxZPVtdLFo9e3JlbmRlcjpHLHN0YXRpY1JlbmRlckZuczpZfSxlZT1aLHRlPW4oMCksbmU9dGUoSixlZSwhMSxudWxsLG51bGwsbnVsbCksaWU9bmUuZXhwb3J0cyxzZT17cHJvcHM6e25vZGU6e3R5cGU6T2JqZWN0LHJlcXVpcmVkOiEwfX0sY29tcHV0ZWQ6e2NoZWNrZWRTdGF0ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmluc3RhbmNlLm5vZGVDaGVja2VkU3RhdGVNYXBbdGhpcy5ub2RlLmlkXX0sc2hvdWxkRXhwYW5kOmZ1bmN0aW9uKCl7cmV0dXJuISF0aGlzLm5vZGUuaXNCcmFuY2gmJih0aGlzLmluc3RhbmNlLnNlYXJjaGluZz90aGlzLm5vZGUuZXhwYW5kc09uU2VhcmNoOnRoaXMubm9kZS5pc0V4cGFuZGVkKX19LHdhdGNoOntcIm5vZGUuaXNFeHBhbmRlZFwiOmZ1bmN0aW9uKGUpeyEwIT09ZXx8dGhpcy5ub2RlLmlzTG9hZGVkfHx0aGlzLmluc3RhbmNlLmxvYWRPcHRpb25zKCExLHRoaXMubm9kZSl9fSxtZXRob2RzOntoYW5kbGVNb3VzZURvd25Pbk9wdGlvbjppKChmdW5jdGlvbigpe3RoaXMubm9kZS5pc0JyYW5jaCYmdGhpcy5pbnN0YW5jZS5kaXNhYmxlQnJhbmNoTm9kZXM/dGhpcy5pbnN0YW5jZS50b2dnbGVFeHBhbmRlZCh0aGlzLm5vZGUpOnRoaXMuaW5zdGFuY2Uuc2VsZWN0KHRoaXMubm9kZSl9KSksaGFuZGxlTW91c2VEb3duT25PcHRpb25BcnJvdzppKChmdW5jdGlvbigpe3RoaXMuaW5zdGFuY2UudG9nZ2xlRXhwYW5kZWQodGhpcy5ub2RlKX0pKX19LG9lPXtuYW1lOlwidnVlLXRyZWVzZWxlY3QtLW9wdGlvblwiLGluamVjdDpbXCJpbnN0YW5jZVwiLFwiVU5DSEVDS0VEXCIsXCJJTkRFVEVSTUlOQVRFXCIsXCJDSEVDS0VEXCJdLG1peGluczpbc2VdfSxyZT1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19saXN0LWl0ZW1cIn0sW24oXCJkaXZcIix7Y2xhc3M6W1widnVlLXRyZWVzZWxlY3RfX29wdGlvblwiLHtcInZ1ZS10cmVlc2VsZWN0X19vcHRpb24tLWRpc2FibGVkXCI6ZS5ub2RlLmRpc2FibGVkLFwidnVlLXRyZWVzZWxlY3RfX29wdGlvbi0tcm9vdFwiOmUubm9kZS5pc1Jvb3ROb2RlLFwidnVlLXRyZWVzZWxlY3RfX29wdGlvbi0tY2hpbGRcIjohZS5ub2RlLmlzUm9vdE5vZGUsXCJ2dWUtdHJlZXNlbGVjdF9fb3B0aW9uLS1zZWxlY3RlZFwiOmUuaW5zdGFuY2UuaXNTZWxlY3RlZChlLm5vZGUpLFwidnVlLXRyZWVzZWxlY3RfX29wdGlvbi0tbWF0Y2hlZFwiOmUuaW5zdGFuY2Uuc2VhcmNoaW5nJiZlLm5vZGUuaXNNYXRjaGVkLFwidnVlLXRyZWVzZWxlY3RfX29wdGlvbi0taGlkZVwiOmUuaW5zdGFuY2Uuc2VhcmNoaW5nJiYhKGUubm9kZS5pc01hdGNoZWR8fGUubm9kZS5oYXNNYXRjaGVkQ2hpbGQpfV19LFtlLm5vZGUuaXNMZWFmP24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fb3B0aW9uLWFycm93LXBsYWNlaG9sZGVyXCJ9LFtlLl92KFwiwqBcIildKTpuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX29wdGlvbi1hcnJvdy13cmFwcGVyXCIsb246e21vdXNlZG93bjplLmhhbmRsZU1vdXNlRG93bk9uT3B0aW9uQXJyb3d9fSxbbihcInRyYW5zaXRpb25cIix7YXR0cnM6e25hbWU6XCJ2dWUtdHJlZXNlbGVjdF9fb3B0aW9uLWFycm93LS1wcmVwYXJlXCIsYXBwZWFyOlwiXCJ9fSxbbihcInNwYW5cIix7Y2xhc3M6W1widnVlLXRyZWVzZWxlY3RfX29wdGlvbi1hcnJvd1wiLHtcInZ1ZS10cmVlc2VsZWN0X19vcHRpb24tYXJyb3ctLXJvdGF0ZWRcIjplLnNob3VsZEV4cGFuZH1dfSldKV0sMSksZS5fdihcIiBcIiksbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19sYWJlbC13cmFwcGVyXCIsb246e21vdXNlZG93bjplLmhhbmRsZU1vdXNlRG93bk9uT3B0aW9ufX0sW2UuaW5zdGFuY2UubXVsdGlwbGUmJiFlLmluc3RhbmNlLmRpc2FibGVCcmFuY2hOb2Rlcz9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2NoZWNrYm94LXdyYXBwZXJcIn0sW24oXCJzcGFuXCIse2NsYXNzOltcInZ1ZS10cmVlc2VsZWN0X19jaGVja2JveFwiLHtcInZ1ZS10cmVlc2VsZWN0X19jaGVja2JveC0tY2hlY2tlZFwiOmUuY2hlY2tlZFN0YXRlPT09ZS5DSEVDS0VELFwidnVlLXRyZWVzZWxlY3RfX2NoZWNrYm94LS1pbmRldGVybWluYXRlXCI6ZS5jaGVja2VkU3RhdGU9PT1lLklOREVURVJNSU5BVEUsXCJ2dWUtdHJlZXNlbGVjdF9fY2hlY2tib3gtLXVuY2hlY2tlZFwiOmUuY2hlY2tlZFN0YXRlPT09ZS5VTkNIRUNLRUR9XX0sW24oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2NoZWNrYm94LW1hcmtcIn0pXSldKTplLl9lKCksZS5fdihcIiBcIiksbihcImxhYmVsXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2xhYmVsXCJ9LFtlLl92KFwiXFxuICAgICAgICBcIitlLl9zKGUubm9kZS5sYWJlbCkrXCJcXG4gICAgICAgIFwiKSxlLm5vZGUuaXNCcmFuY2g/bihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fY291bnRcIn0sWyFlLmluc3RhbmNlLnNlYXJjaGluZyYmZS5pbnN0YW5jZS5zaG93Q291bnQ/W2UuX3YoXCIoXCIrZS5fcyhlLm5vZGUuY291bnRbZS5pbnN0YW5jZS5zaG93Q291bnRPZl0pK1wiKVwiKV06ZS5pbnN0YW5jZS5zZWFyY2hpbmcmJmUuaW5zdGFuY2Uuc2hvd0NvdW50T25TZWFyY2hDb21wdXRlZD9bZS5fdihcIihcIitlLl9zKGUuaW5zdGFuY2Uuc2VhcmNoaW5nQ291bnRbZS5ub2RlLmlkXVtlLmluc3RhbmNlLnNob3dDb3VudE9mXSkrXCIpXCIpXTplLl9lKCldLDIpOmUuX2UoKV0pXSldKSxlLl92KFwiIFwiKSxlLnNob3VsZEV4cGFuZD9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2xpc3RcIn0sW2Uubm9kZS5pc0xvYWRlZD9bZS5ub2RlLmNoaWxkcmVuLmxlbmd0aD9lLl9sKGUubm9kZS5jaGlsZHJlbiwoZnVuY3Rpb24oZSl7cmV0dXJuIG4oXCJ2dWUtdHJlZXNlbGVjdC0tb3B0aW9uXCIse2tleTplLmlkLGF0dHJzOntub2RlOmV9fSl9KSk6bihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19uby1jaGlsZHJlbi10aXBcIn0sW2UuX20oMCksZS5fdihcIiBcIiksbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbm8tY2hpbGRyZW4tdGlwLXRleHRcIn0sW2UuX3YoZS5fcyhlLmluc3RhbmNlLm5vQ2hpbGRyZW5UZXh0KSldKV0pXTplLm5vZGUuaXNQZW5kaW5nP24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbG9hZGluZy10aXBcIn0sW2UuX20oMSksZS5fdihcIiBcIiksbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbG9hZGluZy10aXAtdGV4dFwifSxbZS5fdihlLl9zKGUuaW5zdGFuY2UubG9hZGluZ1RleHQpKV0pXSk6ZS5ub2RlLmxvYWRpbmdDaGlsZHJlbkVycm9yP24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fZXJyb3ItdGlwXCJ9LFtlLl9tKDIpLGUuX3YoXCIgXCIpLG4oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2Vycm9yLXRpcC10ZXh0XCJ9LFtlLl92KFwiXFxuICAgICAgICBcIitlLl9zKGUubm9kZS5sb2FkaW5nQ2hpbGRyZW5FcnJvcikrXCJcXG4gICAgICAgIFwiKSxuKFwiYVwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19yZXRyeVwiLGF0dHJzOnt0aXRsZTplLmluc3RhbmNlLnJldHJ5VGl0bGV9LG9uOntjbGljazpmdW5jdGlvbih0KXtlLmluc3RhbmNlLmxvYWRPcHRpb25zKCExLGUubm9kZSl9fX0sW2UuX3YoXCJcXG4gICAgICAgICAgXCIrZS5fcyhlLmluc3RhbmNlLnJldHJ5VGV4dCkrXCJcXG4gICAgICAgIFwiKV0pXSldKTplLl9lKCldLDIpOmUuX2UoKV0pfSxhZT1bZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9faWNvbi13cmFwcGVyXCJ9LFtuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uLXdhcm5pbmdcIn0pXSl9LGZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24td3JhcHBlclwifSxbbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9faWNvbi1sb2FkZXJcIn0pXSl9LGZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24td3JhcHBlclwifSxbbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9faWNvbi1lcnJvclwifSldKX1dLGxlPXtyZW5kZXI6cmUsc3RhdGljUmVuZGVyRm5zOmFlfSxjZT1sZSx1ZT1uKDApLGRlPXVlKG9lLGNlLCExLG51bGwsbnVsbCxudWxsKSxoZT1kZS5leHBvcnRzLHBlPXtuYW1lOlwidnVlLXRyZWVzZWxlY3RcIixjb21wb25lbnRzOntUcmVlc2VsZWN0T3B0aW9uOmhlfSxtaXhpbnM6W3ddLGNvbXB1dGVkOntWYWx1ZUNvbXBvbmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm11bHRpcGxlP1g6aWV9fX0sZmU9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJkaXZcIix7cmVmOlwid3JhcHBlclwiLGNsYXNzOltcInZ1ZS10cmVlc2VsZWN0XCIse1widnVlLXRyZWVzZWxlY3QtLXNpbmdsZVwiOiFlLm11bHRpcGxlLFwidnVlLXRyZWVzZWxlY3QtLW11bHRpXCI6ZS5tdWx0aXBsZSxcInZ1ZS10cmVlc2VsZWN0LS1zZWFyY2hhYmxlXCI6ZS5zZWFyY2hhYmxlLFwidnVlLXRyZWVzZWxlY3QtLWRpc2FibGVkXCI6ZS5kaXNhYmxlZCxcInZ1ZS10cmVlc2VsZWN0LS1mb2N1c2VkXCI6ZS5pc0ZvY3VzZWQsXCJ2dWUtdHJlZXNlbGVjdC0taGFzLXZhbHVlXCI6ZS5oYXNWYWx1ZSxcInZ1ZS10cmVlc2VsZWN0LS1vcGVuXCI6ZS5pc09wZW4sXCJ2dWUtdHJlZXNlbGVjdC0tb3Blbi1hYm92ZVwiOlwiYWJvdmVcIj09PWUucHJlZmZlcmVkT3BlbkRpcmVjdGlvbixcInZ1ZS10cmVlc2VsZWN0LS1vcGVuLWJlbG93XCI6XCJiZWxvd1wiPT09ZS5wcmVmZmVyZWRPcGVuRGlyZWN0aW9uLFwidnVlLXRyZWVzZWxlY3QtLWJyYW5jaC1ub2Rlcy1kaXNhYmxlZFwiOmUuZGlzYWJsZUJyYW5jaE5vZGVzfV0sb246e21vdXNlZG93bjplLmhhbmRsZU1vdXNlRG93bn19LFtuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2NvbnRyb2xcIn0sW24oZS5WYWx1ZUNvbXBvbmVudCx7cmVmOlwidmFsdWVcIix0YWc6XCJjb21wb25lbnRcIn0pLGUuX3YoXCIgXCIpLGUuc2hvdWxkU2hvd0NsZWFySWNvbj9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2NsZWFyXCIsYXR0cnM6e3RpdGxlOmUubXVsdGlwbGU/ZS5jbGVhckFsbFRleHQ6ZS5jbGVhclZhbHVlVGV4dH0sb246e21vdXNlZG93bjplLmhhbmRsZU1vdXNlRG93bk9uQ2xlYXJ9fSxbZS5fdihcIsOXXCIpXSk6ZS5fZSgpLGUuX3YoXCIgXCIpLG4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fYXJyb3ctd3JhcHBlclwiLG9uOnttb3VzZWRvd246ZS5oYW5kbGVNb3VzZURvd25PbkFycm93fX0sW24oXCJzcGFuXCIse2NsYXNzOltcInZ1ZS10cmVlc2VsZWN0X19hcnJvd1wiLHtcInZ1ZS10cmVlc2VsZWN0X19hcnJvdy0tcm90YXRlZFwiOmUuaXNPcGVufV19KV0pXSwxKSxlLl92KFwiIFwiKSxlLmlzT3Blbj9uKFwiZGl2XCIse3JlZjpcIm1lbnVcIixzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19tZW51XCIsc3R5bGU6e21heEhlaWdodDplLm9wdGltaXplZEhlaWdodCtcInB4XCJ9fSxbZS5yb290T3B0aW9uc0xvYWRlZD9bZS5zZWFyY2hpbmcmJmUubm9TZWFyY2hSZXN1bHRzP24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbm8tcmVzdWx0cy10aXBcIn0sW2UuX20oMCksZS5fdihcIiBcIiksbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbm8tcmVzdWx0cy10aXAtdGV4dFwifSxbZS5fdihlLl9zKGUubm9SZXN1bHRzVGV4dCkpXSldKTowPT09ZS5ub3JtYWxpemVkT3B0aW9ucy5sZW5ndGg/bihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19uby1vcHRpb25zLXRpcFwifSxbZS5fbSgxKSxlLl92KFwiIFwiKSxuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19uby1vcHRpb25zLXRpcC10ZXh0XCJ9LFtlLl92KGUuX3MoZS5ub09wdGlvbnNUZXh0KSldKV0pOm4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fbGlzdFwifSxlLl9sKGUubm9ybWFsaXplZE9wdGlvbnMsKGZ1bmN0aW9uKGUpe3JldHVybiBuKFwidHJlZXNlbGVjdC1vcHRpb25cIix7a2V5OmUuaWQsYXR0cnM6e25vZGU6ZX19KX0pKSldOltlLmxvYWRpbmdSb290T3B0aW9ucz9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2xvYWRpbmctdGlwXCJ9LFtlLl9tKDIpLGUuX3YoXCIgXCIpLG4oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2xvYWRpbmctdGlwLXRleHRcIn0sW2UuX3YoZS5fcyhlLmxvYWRpbmdUZXh0KSldKV0pOmUubG9hZGluZ1Jvb3RPcHRpb25zRXJyb3I/bihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19lcnJvci10aXBcIn0sW2UuX20oMyksZS5fdihcIiBcIiksbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9fZXJyb3ItdGlwLXRleHRcIn0sW2UuX3YoXCJcXG4gICAgICAgICAgRmFpbGVkIHRvIGxvYWQgb3B0aW9uczogXCIrZS5fcyhlLmxvYWRpbmdSb290T3B0aW9uc0Vycm9yKStcIi5cXG4gICAgICAgICAgXCIpLG4oXCJhXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX3JldHJ5XCIsYXR0cnM6e3RpdGxlOmUucmV0cnlUaXRsZX0sb246e2NsaWNrOmZ1bmN0aW9uKHQpe2UubG9hZE9wdGlvbnMoITApfX19LFtlLl92KFwiXFxuICAgICAgICAgICAgXCIrZS5fcyhlLnJldHJ5VGV4dCkrXCJcXG4gICAgICAgICAgXCIpXSldKV0pOmUuX2UoKV1dLDIpOmUuX2UoKV0pfSx2ZT1bZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9faWNvbi13cmFwcGVyXCJ9LFtuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uLXdhcm5pbmdcIn0pXSl9LGZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24td3JhcHBlclwifSxbbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtdHJlZXNlbGVjdF9faWNvbi13YXJuaW5nXCJ9KV0pfSxmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uLXdyYXBwZXJcIn0sW24oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24tbG9hZGVyXCJ9KV0pfSxmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS10cmVlc2VsZWN0X19pY29uLXdyYXBwZXJcIn0sW24oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXRyZWVzZWxlY3RfX2ljb24tZXJyb3JcIn0pXSl9XSxfZT17cmVuZGVyOmZlLHN0YXRpY1JlbmRlckZuczp2ZX0sbWU9X2UsQ2U9bigwKSx5ZT15LGJlPUNlKHBlLG1lLCExLHllLG51bGwsbnVsbCksZ2U9YmUuZXhwb3J0cztuLmQodCxcIlRyZWVzZWxlY3RcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZ2V9KSksbi5kKHQsXCJ0cmVlc2VsZWN0TWl4aW5cIiwoZnVuY3Rpb24oKXtyZXR1cm4gd30pKSxuLmQodCxcIm9wdGlvbk1peGluXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHNlfSkpLG4uZCh0LFwidmFsdWVNaXhpblwiLChmdW5jdGlvbigpe3JldHVybiBEfSkpO3QuZGVmYXVsdD1nZX0pLChmdW5jdGlvbihlLHQpe30pLChmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gaShlLHQpe3ZhciBuPXQubGVuZ3RoLGk9ZS5sZW5ndGg7aWYoaT5uKXJldHVybiExO2lmKGk9PT1uKXJldHVybiBlPT09dDtlOmZvcih2YXIgcz0wLG89MDtzPGk7cysrKXtmb3IodmFyIHI9ZS5jaGFyQ29kZUF0KHMpO288bjspaWYodC5jaGFyQ29kZUF0KG8rKyk9PT1yKWNvbnRpbnVlIGU7cmV0dXJuITF9cmV0dXJuITB9ZS5leHBvcnRzPWl9KSwoZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIGkoZSx0LG4pe2Z1bmN0aW9uIGkodCl7dmFyIG49QyxpPXk7cmV0dXJuIEM9eT12b2lkIDAseD10LGc9ZS5hcHBseShpLG4pfWZ1bmN0aW9uIHUoZSl7cmV0dXJuIHg9ZSxFPXNldFRpbWVvdXQocCx0KSxTP2koZSk6Z31mdW5jdGlvbiBkKGUpe3ZhciBuPWUtTyxpPWUteCxzPXQtbjtyZXR1cm4gTj9jKHMsYi1pKTpzfWZ1bmN0aW9uIGgoZSl7dmFyIG49ZS1PLGk9ZS14O3JldHVybiB2b2lkIDA9PT1PfHxuPj10fHxuPDB8fE4mJmk+PWJ9ZnVuY3Rpb24gcCgpe3ZhciBlPW8oKTtpZihoKGUpKXJldHVybiBmKGUpO0U9c2V0VGltZW91dChwLGQoZSkpfWZ1bmN0aW9uIGYoZSl7cmV0dXJuIEU9dm9pZCAwLHcmJkM/aShlKTooQz15PXZvaWQgMCxnKX1mdW5jdGlvbiB2KCl7dm9pZCAwIT09RSYmY2xlYXJUaW1lb3V0KEUpLHg9MCxDPU89eT1FPXZvaWQgMH1mdW5jdGlvbiBfKCl7cmV0dXJuIHZvaWQgMD09PUU/ZzpmKG8oKSl9ZnVuY3Rpb24gbSgpe3ZhciBlPW8oKSxuPWgoZSk7aWYoQz1hcmd1bWVudHMseT10aGlzLE89ZSxuKXtpZih2b2lkIDA9PT1FKXJldHVybiB1KE8pO2lmKE4pcmV0dXJuIEU9c2V0VGltZW91dChwLHQpLGkoTyl9cmV0dXJuIHZvaWQgMD09PUUmJihFPXNldFRpbWVvdXQocCx0KSksZ312YXIgQyx5LGIsZyxFLE8seD0wLFM9ITEsTj0hMSx3PSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihhKTtyZXR1cm4gdD1yKHQpfHwwLHMobikmJihTPSEhbi5sZWFkaW5nLE49XCJtYXhXYWl0XCJpbiBuLGI9Tj9sKHIobi5tYXhXYWl0KXx8MCx0KTpiLHc9XCJ0cmFpbGluZ1wiaW4gbj8hIW4udHJhaWxpbmc6dyksbS5jYW5jZWw9dixtLmZsdXNoPV8sbX12YXIgcz1uKDEpLG89big4KSxyPW4oMTEpLGE9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIsbD1NYXRoLm1heCxjPU1hdGgubWluO2UuZXhwb3J0cz1pfSksKGZ1bmN0aW9uKGUsdCxuKXt2YXIgaT1uKDIpLHM9ZnVuY3Rpb24oKXtyZXR1cm4gaS5EYXRlLm5vdygpfTtlLmV4cG9ydHM9c30pLChmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKHQpe3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Lk9iamVjdD09PU9iamVjdCYmdDtlLmV4cG9ydHM9bn0pLmNhbGwodCxuKDEwKSl9KSwoZnVuY3Rpb24oZSx0KXt2YXIgbjtuPShmdW5jdGlvbigpe3JldHVybiB0aGlzfSkoKTt0cnl7bj1ufHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCl8fCgwLGV2YWwpKFwidGhpc1wiKX1jYXRjaChlKXtcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiYobj13aW5kb3cpfWUuZXhwb3J0cz1ufSksKGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiBpKGUpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKG8oZSkpcmV0dXJuIHI7aWYocyhlKSl7dmFyIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZS52YWx1ZU9mP2UudmFsdWVPZigpOmU7ZT1zKHQpP3QrXCJcIjp0fWlmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiAwPT09ZT9lOitlO2U9ZS5yZXBsYWNlKGEsXCJcIik7dmFyIG49Yy50ZXN0KGUpO3JldHVybiBufHx1LnRlc3QoZSk/ZChlLnNsaWNlKDIpLG4/Mjo4KTpsLnRlc3QoZSk/cjorZX12YXIgcz1uKDEpLG89bigxMikscj1OYU4sYT0vXlxccyt8XFxzKyQvZyxsPS9eWy0rXTB4WzAtOWEtZl0rJC9pLGM9L14wYlswMV0rJC9pLHU9L14wb1swLTddKyQvaSxkPXBhcnNlSW50O2UuZXhwb3J0cz1pfSksKGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiBpKGUpe3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiBlfHxvKGUpJiZzKGUpPT1yfXZhciBzPW4oMTMpLG89bigxNikscj1cIltvYmplY3QgU3ltYm9sXVwiO2UuZXhwb3J0cz1pfSksKGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiBpKGUpe3JldHVybiBudWxsPT1lP3ZvaWQgMD09PWU/bDphOmMmJmMgaW4gT2JqZWN0KGUpP28oZSk6cihlKX12YXIgcz1uKDMpLG89bigxNCkscj1uKDE1KSxhPVwiW29iamVjdCBOdWxsXVwiLGw9XCJbb2JqZWN0IFVuZGVmaW5lZF1cIixjPXM/cy50b1N0cmluZ1RhZzp2b2lkIDA7ZS5leHBvcnRzPWl9KSwoZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIGkoZSl7dmFyIHQ9ci5jYWxsKGUsbCksbj1lW2xdO3RyeXtlW2xdPXZvaWQgMDt2YXIgaT0hMH1jYXRjaChlKXt9dmFyIHM9YS5jYWxsKGUpO3JldHVybiBpJiYodD9lW2xdPW46ZGVsZXRlIGVbbF0pLHN9dmFyIHM9bigzKSxvPU9iamVjdC5wcm90b3R5cGUscj1vLmhhc093blByb3BlcnR5LGE9by50b1N0cmluZyxsPXM/cy50b1N0cmluZ1RhZzp2b2lkIDA7ZS5leHBvcnRzPWl9KSwoZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBuKGUpe3JldHVybiBzLmNhbGwoZSl9dmFyIGk9T2JqZWN0LnByb3RvdHlwZSxzPWkudG9TdHJpbmc7ZS5leHBvcnRzPW59KSwoZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBuKGUpe3JldHVybiBudWxsIT1lJiZcIm9iamVjdFwiPT10eXBlb2YgZX1lLmV4cG9ydHM9bn0pXSl9KSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL0ByaW9waGFlL3Z1ZS10cmVlc2VsZWN0L2Rpc3QvdnVlLXRyZWVzZWxlY3QubWluLmpzIiwiPHRlbXBsYXRlPlxyXG4gICAgPHRyIHYtaWY9XCJyb3cudHlwZSA9PT0gJ2NhdGVnb3J5J1wiIDpjbGFzcz1cImNsYXNzZXNcIiA+XHJcbiAgICAgICAgPHRkIGNvbHNwYW49XCI0XCIgPnt7cm93Lm5hbWV9fSA8c3BhbiB2LWlmPVwicm93LmRlcHRoID4gMCAmJiByb3cuY2hpbGRyZW5cIj4oIHt7cm93LmNoaWxkcmVuLmxlbmd0aH19ICk8L3NwYW4+PC90ZD5cclxuICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIiBjbGFzcz1cImlubGluZS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJyb3cuZGVwdGggPT09IDBcIiBAY2xpY2suc3RvcD1cImFkZENoaWxkQ2F0ZWdvcnkocm93KVwiPlRow6ptIGRhbmggbeG7pWM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJyb3cuZGVwdGggPT09IDFcIiBAY2xpY2suc3RvcD1cImFkZE1hdGVyaWFscyhyb3cpXCI+VGjDqm0gduG6rXQgdMawPC9zcGFuPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gICAgPHRyIHYtZWxzZT5cclxuICAgICAgICA8dGQgY2xhc3M9XCJjb2wxXCI+e3tyb3cuaWR9fTwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwiY29sMlwiPnt7cm93Lm5hbWV9fTwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwiY29sM1wiPnt7cm93LnBlcn19PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJjb2w0XCI+dm5kPC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJjb2w1XCI+MDwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwiY29sNlwiPnt7cm93LmJyYW5kfX08L3RkPlxyXG4gICAgPC90cj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgcm93OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICAgICAgZGVmYXVsdDoge30sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGV4cGFkaW5nX3N0YXR1czogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB0b2dnbGVFeHBhbmQoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJvdy5leHBhbmRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZXhwYW5kJywge2lkOiB0aGlzLnJvdy5pZCwgZXhwYW5kZWQ6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yb3cuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2V4cGFuZCcsIHtpZDogdGhpcy5yb3cuaWQsIGV4cGFuZGVkOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZENoaWxkQ2F0ZWdvcnkocm93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ25ldy1jYXRlZ29yeScsIHtpZDogcm93LmlkLCBuYW1lOiByb3cubmFtZX0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkTWF0ZXJpYWxzKHJvdykge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCduZXctbWF0ZXJpYWxzJywge2lkOiByb3cuaWQsIG5hbWU6IHJvdy5uYW1lfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZXdNYXRlcmlhbHMoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhYWEnKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBcclxuICAgICAgICBpc19jYXRlZ29yeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm93LnR5cGUgPT0gXCJjYXRlZ29yeVwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xhc3NlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIGBkZXB0aC0ke3RoaXMucm93LmRlcHRofWAsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ6IHRoaXMuZXhwYWRpbmdfc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGFibGU6IHRoaXMucm93LmNoaWxkcmVuICE9PSBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB0aGlzLnJvdy50eXBlID09PSAnY2F0ZWdvcnknLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLmV4cGFkaW5nX3N0YXR1cyA9IHRoaXMucm93LmV4cGFuZGVkO1xyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZT80YjdlNzFjOCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiTWF0ZXJpYWxSb3cudnVlXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMDA0NGJkZjJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTAwNDRiZGYyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jvd3MvTWF0ZXJpYWxSb3cudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqL1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgdmFyIGZ1bmN0aW9uYWwgPSBvcHRpb25zLmZ1bmN0aW9uYWxcbiAgICB2YXIgZXhpc3RpbmcgPSBmdW5jdGlvbmFsXG4gICAgICA/IG9wdGlvbnMucmVuZGVyXG4gICAgICA6IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG5cbiAgICBpZiAoIWZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gZXhpc3RpbmcoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLnJvdy50eXBlID09PSBcImNhdGVnb3J5XCJcbiAgICA/IF9jKFwidHJcIiwgeyBjbGFzczogX3ZtLmNsYXNzZXMgfSwgW1xuICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCI0XCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucm93Lm5hbWUpICsgXCIgXCIpLFxuICAgICAgICAgIF92bS5yb3cuZGVwdGggPiAwICYmIF92bS5yb3cuY2hpbGRyZW5cbiAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIoIFwiICsgX3ZtLl9zKF92bS5yb3cuY2hpbGRyZW4ubGVuZ3RoKSArIFwiIClcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJpbmxpbmUtY29udHJvbFwiLCBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9IH0sIFtcbiAgICAgICAgICBfdm0ucm93LmRlcHRoID09PSAwXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uYWRkQ2hpbGRDYXRlZ29yeShfdm0ucm93KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVGjDqm0gZGFuaCBt4bulY1wiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5yb3cuZGVwdGggPT09IDFcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgIF92bS5hZGRNYXRlcmlhbHMoX3ZtLnJvdylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlRow6ptIHbhuq10IHTGsFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICA6IF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sMVwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5yb3cuaWQpKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sMlwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5yb3cubmFtZSkpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wzXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLnJvdy5wZXIpKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sNFwiIH0sIFtfdm0uX3YoXCJ2bmRcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbDVcIiB9LCBbX3ZtLl92KFwiMFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sNlwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5yb3cuYnJhbmQpKV0pXG4gICAgICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wMDQ0YmRmMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDA0NGJkZjJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jvd3MvTWF0ZXJpYWxSb3cudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTAwNDRiZGYyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDA0NGJkZjJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL01hdGVyaWFsUm93LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiODE2OWUxM2NcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDA0NGJkZjJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wJmJ1c3RDYWNoZSEuL01hdGVyaWFsUm93LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wMDQ0YmRmMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vTWF0ZXJpYWxSb3cudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTAwNDRiZGYyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jvd3MvTWF0ZXJpYWxSb3cudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTAwNDRiZGYyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAmYnVzdENhY2hlIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jvd3MvTWF0ZXJpYWxSb3cudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxudmFyIGxpc3RUb1N0eWxlcyA9IHJlcXVpcmUoJy4vbGlzdFRvU3R5bGVzJylcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLXZ1ZS1zc3ItaWR+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIi8qIVxuICogdnVlLXN3YWwgdjAuMC4zXG4gKiAoYykgMjAxNyBBbnTDqXJpbyBWaWVpcmFcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJWdWVTd2FsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlZ1ZVN3YWxcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuIWZ1bmN0aW9uKHQsZSl7IHRydWU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5zd2FsPWUoKTp0LnN3YWw9ZSgpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUobyl7aWYobltvXSlyZXR1cm4gbltvXS5leHBvcnRzO3ZhciByPW5bb109e2k6byxsOiExLGV4cG9ydHM6e319O3JldHVybiB0W29dLmNhbGwoci5leHBvcnRzLHIsci5leHBvcnRzLGUpLHIubD0hMCxyLmV4cG9ydHN9dmFyIG49e307cmV0dXJuIGUubT10LGUuYz1uLGUuZD1mdW5jdGlvbih0LG4sbyl7ZS5vKHQsbil8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se2NvbmZpZ3VyYWJsZTohMSxlbnVtZXJhYmxlOiEwLGdldDpvfSl9LGUubj1mdW5jdGlvbih0KXt2YXIgbj10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gZS5kKG4sXCJhXCIsbiksbn0sZS5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxlLnA9XCJcIixlKGUucz04KX0oW2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1cInN3YWwtYnV0dG9uXCI7ZS5DTEFTU19OQU1FUz17TU9EQUw6XCJzd2FsLW1vZGFsXCIsT1ZFUkxBWTpcInN3YWwtb3ZlcmxheVwiLFNIT1dfTU9EQUw6XCJzd2FsLW92ZXJsYXktLXNob3ctbW9kYWxcIixNT0RBTF9USVRMRTpcInN3YWwtdGl0bGVcIixNT0RBTF9URVhUOlwic3dhbC10ZXh0XCIsSUNPTjpcInN3YWwtaWNvblwiLElDT05fQ1VTVE9NOlwic3dhbC1pY29uLS1jdXN0b21cIixDT05URU5UOlwic3dhbC1jb250ZW50XCIsRk9PVEVSOlwic3dhbC1mb290ZXJcIixCVVRUT05fQ09OVEFJTkVSOlwic3dhbC1idXR0b24tY29udGFpbmVyXCIsQlVUVE9OOm8sQ09ORklSTV9CVVRUT046bytcIi0tY29uZmlybVwiLENBTkNFTF9CVVRUT046bytcIi0tY2FuY2VsXCIsREFOR0VSX0JVVFRPTjpvK1wiLS1kYW5nZXJcIixCVVRUT05fTE9BRElORzpvK1wiLS1sb2FkaW5nXCIsQlVUVE9OX0xPQURFUjpvK1wiX19sb2FkZXJcIn0sZS5kZWZhdWx0PWUuQ0xBU1NfTkFNRVN9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmdldE5vZGU9ZnVuY3Rpb24odCl7dmFyIGU9XCIuXCIrdDtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKX0sZS5zdHJpbmdUb05vZGU9ZnVuY3Rpb24odCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZS5pbm5lckhUTUw9dC50cmltKCksZS5maXJzdENoaWxkfSxlLmluc2VydEFmdGVyPWZ1bmN0aW9uKHQsZSl7dmFyIG49ZS5uZXh0U2libGluZztlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsbil9LGUucmVtb3ZlTm9kZT1mdW5jdGlvbih0KXt0LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodCl9LGUudGhyb3dFcnI9ZnVuY3Rpb24odCl7dGhyb3cgdD10LnJlcGxhY2UoLyArKD89ICkvZyxcIlwiKSxcIlN3ZWV0QWxlcnQ6IFwiKyh0PXQudHJpbSgpKX0sZS5pc1BsYWluT2JqZWN0PWZ1bmN0aW9uKHQpe2lmKFwiW29iamVjdCBPYmplY3RdXCIhPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkpcmV0dXJuITE7dmFyIGU9T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO3JldHVybiBudWxsPT09ZXx8ZT09PU9iamVjdC5wcm90b3R5cGV9LGUub3JkaW5hbFN1ZmZpeE9mPWZ1bmN0aW9uKHQpe3ZhciBlPXQlMTAsbj10JTEwMDtyZXR1cm4gMT09PWUmJjExIT09bj90K1wic3RcIjoyPT09ZSYmMTIhPT1uP3QrXCJuZFwiOjM9PT1lJiYxMyE9PW4/dCtcInJkXCI6dCtcInRoXCJ9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyh0KXtmb3IodmFyIG4gaW4gdCllLmhhc093blByb3BlcnR5KG4pfHwoZVtuXT10W25dKX1PYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKG4oMTgpKTt2YXIgcj1uKDE5KTtlLm92ZXJsYXlNYXJrdXA9ci5kZWZhdWx0LG8obigyMCkpLG8obigyMSkpLG8obigyMikpO3ZhciBhPW4oMCksaT1hLmRlZmF1bHQuTU9EQUxfVElUTEUscz1hLmRlZmF1bHQuTU9EQUxfVEVYVCxsPWEuZGVmYXVsdC5JQ09OLGM9YS5kZWZhdWx0LkZPT1RFUjtlLmljb25NYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrbCsnXCI+PC9kaXY+JyxlLnRpdGxlTWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK2krJ1wiPjwvZGl2PlxcbicsZS50ZXh0TWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK3MrJ1wiPjwvZGl2PicsZS5mb290ZXJNYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrYysnXCI+PC9kaXY+XFxuJ30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSk7ZS5DT05GSVJNX0tFWT1cImNvbmZpcm1cIixlLkNBTkNFTF9LRVk9XCJjYW5jZWxcIjt2YXIgcj17dmlzaWJsZTohMCx0ZXh0Om51bGwsdmFsdWU6bnVsbCxjbGFzc05hbWU6XCJcIixjbG9zZU1vZGFsOiEwfSxhPU9iamVjdC5hc3NpZ24oe30scix7dmlzaWJsZTohMSx0ZXh0OlwiQ2FuY2VsXCIsdmFsdWU6bnVsbH0pLGk9T2JqZWN0LmFzc2lnbih7fSxyLHt0ZXh0OlwiT0tcIix2YWx1ZTohMH0pO2UuZGVmYXVsdEJ1dHRvbkxpc3Q9e2NhbmNlbDphLGNvbmZpcm06aX07dmFyIHM9ZnVuY3Rpb24odCl7c3dpdGNoKHQpe2Nhc2UgZS5DT05GSVJNX0tFWTpyZXR1cm4gaTtjYXNlIGUuQ0FOQ0VMX0tFWTpyZXR1cm4gYTtkZWZhdWx0OnZhciBuPXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKTtyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSxyLHt0ZXh0Om4sdmFsdWU6dH0pfX0sbD1mdW5jdGlvbih0LGUpe3ZhciBuPXModCk7cmV0dXJuITA9PT1lP09iamVjdC5hc3NpZ24oe30sbix7dmlzaWJsZTohMH0pOlwic3RyaW5nXCI9PXR5cGVvZiBlP09iamVjdC5hc3NpZ24oe30sbix7dmlzaWJsZTohMCx0ZXh0OmV9KTpvLmlzUGxhaW5PYmplY3QoZSk/T2JqZWN0LmFzc2lnbih7dmlzaWJsZTohMH0sbixlKTpPYmplY3QuYXNzaWduKHt9LG4se3Zpc2libGU6ITF9KX0sYz1mdW5jdGlvbih0KXtmb3IodmFyIGU9e30sbj0wLG89T2JqZWN0LmtleXModCk7bjxvLmxlbmd0aDtuKyspe3ZhciByPW9bbl0saT10W3JdLHM9bChyLGkpO2Vbcl09c31yZXR1cm4gZS5jYW5jZWx8fChlLmNhbmNlbD1hKSxlfSx1PWZ1bmN0aW9uKHQpe3ZhciBuPXt9O3N3aXRjaCh0Lmxlbmd0aCl7Y2FzZSAxOm5bZS5DQU5DRUxfS0VZXT1PYmplY3QuYXNzaWduKHt9LGEse3Zpc2libGU6ITF9KTticmVhaztjYXNlIDI6bltlLkNBTkNFTF9LRVldPWwoZS5DQU5DRUxfS0VZLHRbMF0pLG5bZS5DT05GSVJNX0tFWV09bChlLkNPTkZJUk1fS0VZLHRbMV0pO2JyZWFrO2RlZmF1bHQ6by50aHJvd0VycihcIkludmFsaWQgbnVtYmVyIG9mICdidXR0b25zJyBpbiBhcnJheSAoXCIrdC5sZW5ndGgrXCIpLlxcbiAgICAgIElmIHlvdSB3YW50IG1vcmUgdGhhbiAyIGJ1dHRvbnMsIHlvdSBuZWVkIHRvIHVzZSBhbiBvYmplY3QhXCIpfXJldHVybiBufTtlLmdldEJ1dHRvbkxpc3RPcHRzPWZ1bmN0aW9uKHQpe3ZhciBuPWUuZGVmYXVsdEJ1dHRvbkxpc3Q7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/bltlLkNPTkZJUk1fS0VZXT1sKGUuQ09ORklSTV9LRVksdCk6QXJyYXkuaXNBcnJheSh0KT9uPXUodCk6by5pc1BsYWluT2JqZWN0KHQpP249Yyh0KTohMD09PXQ/bj11KFshMCwhMF0pOiExPT09dD9uPXUoWyExLCExXSk6dm9pZCAwPT09dCYmKG49ZS5kZWZhdWx0QnV0dG9uTGlzdCksbn19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9bigyKSxhPW4oMCksaT1hLmRlZmF1bHQuTU9EQUwscz1hLmRlZmF1bHQuT1ZFUkxBWSxsPW4oMjMpLGM9bigyNCksdT1uKDI1KSxkPW4oMjYpO2UuaW5qZWN0RWxJbnRvTW9kYWw9ZnVuY3Rpb24odCl7dmFyIGU9by5nZXROb2RlKGkpLG49by5zdHJpbmdUb05vZGUodCk7cmV0dXJuIGUuYXBwZW5kQ2hpbGQobiksbn07dmFyIGY9ZnVuY3Rpb24odCl7dC5jbGFzc05hbWU9aSx0LnRleHRDb250ZW50PVwiXCJ9LHA9ZnVuY3Rpb24odCxlKXtmKHQpO3ZhciBuPWUuY2xhc3NOYW1lO24mJnQuY2xhc3NMaXN0LmFkZChuKX07ZS5pbml0TW9kYWxDb250ZW50PWZ1bmN0aW9uKHQpe3ZhciBlPW8uZ2V0Tm9kZShpKTtwKGUsdCksbC5kZWZhdWx0KHQuaWNvbiksYy5pbml0VGl0bGUodC50aXRsZSksYy5pbml0VGV4dCh0LnRleHQpLGQuZGVmYXVsdCh0LmNvbnRlbnQpLHUuZGVmYXVsdCh0LmJ1dHRvbnMsdC5kYW5nZXJNb2RlKX07dmFyIGI9ZnVuY3Rpb24oKXt2YXIgdD1vLmdldE5vZGUocyksZT1vLnN0cmluZ1RvTm9kZShyLm1vZGFsTWFya3VwKTt0LmFwcGVuZENoaWxkKGUpfTtlLmRlZmF1bHQ9Yn0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMykscj17aXNPcGVuOiExLHByb21pc2U6bnVsbCxhY3Rpb25zOnt9LHRpbWVyOm51bGx9LGE9T2JqZWN0LmFzc2lnbih7fSxyKTtlLnJlc2V0U3RhdGU9ZnVuY3Rpb24oKXthPU9iamVjdC5hc3NpZ24oe30scil9LGUuc2V0QWN0aW9uVmFsdWU9ZnVuY3Rpb24odCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpcmV0dXJuIGkoby5DT05GSVJNX0tFWSx0KTtmb3IodmFyIGUgaW4gdClpKGUsdFtlXSl9O3ZhciBpPWZ1bmN0aW9uKHQsZSl7YS5hY3Rpb25zW3RdfHwoYS5hY3Rpb25zW3RdPXt9KSxPYmplY3QuYXNzaWduKGEuYWN0aW9uc1t0XSx7dmFsdWU6ZX0pfTtlLnNldEFjdGlvbk9wdGlvbnNGb3I9ZnVuY3Rpb24odCxlKXt2YXIgbj0odm9pZCAwPT09ZT97fTplKS5jbG9zZU1vZGFsLG89dm9pZCAwPT09bnx8bjtPYmplY3QuYXNzaWduKGEuYWN0aW9uc1t0XSx7Y2xvc2VNb2RhbDpvfSl9LGUuZGVmYXVsdD1hfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPW4oMyksYT1uKDApLGk9YS5kZWZhdWx0Lk9WRVJMQVkscz1hLmRlZmF1bHQuU0hPV19NT0RBTCxsPWEuZGVmYXVsdC5CVVRUT04sYz1hLmRlZmF1bHQuQlVUVE9OX0xPQURJTkcsdT1uKDUpO2Uub3Blbk1vZGFsPWZ1bmN0aW9uKCl7by5nZXROb2RlKGkpLmNsYXNzTGlzdC5hZGQocyksdS5kZWZhdWx0LmlzT3Blbj0hMH07dmFyIGQ9ZnVuY3Rpb24oKXtvLmdldE5vZGUoaSkuY2xhc3NMaXN0LnJlbW92ZShzKSx1LmRlZmF1bHQuaXNPcGVuPSExfTtlLm9uQWN0aW9uPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PXIuQ0FOQ0VMX0tFWSk7dmFyIGU9dS5kZWZhdWx0LmFjdGlvbnNbdF0sbj1lLnZhbHVlO2lmKCExPT09ZS5jbG9zZU1vZGFsKXt2YXIgYT1sK1wiLS1cIit0O28uZ2V0Tm9kZShhKS5jbGFzc0xpc3QuYWRkKGMpfWVsc2UgZCgpO3UuZGVmYXVsdC5wcm9taXNlLnJlc29sdmUobil9LGUuZ2V0U3RhdGU9ZnVuY3Rpb24oKXt2YXIgdD1PYmplY3QuYXNzaWduKHt9LHUuZGVmYXVsdCk7cmV0dXJuIGRlbGV0ZSB0LnByb21pc2UsZGVsZXRlIHQudGltZXIsdH0sZS5zdG9wTG9hZGluZz1mdW5jdGlvbigpe2Zvcih2YXIgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2wpLGU9MDtlPHQubGVuZ3RoO2UrKyl7dFtlXS5jbGFzc0xpc3QucmVtb3ZlKGMpfX19LGZ1bmN0aW9uKHQsZSl7dmFyIG47bj1mdW5jdGlvbigpe3JldHVybiB0aGlzfSgpO3RyeXtuPW58fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKXx8KDAsZXZhbCkoXCJ0aGlzXCIpfWNhdGNoKHQpe1wib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJihuPXdpbmRvdyl9dC5leHBvcnRzPW59LGZ1bmN0aW9uKHQsZSxuKXsoZnVuY3Rpb24oZSl7dC5leHBvcnRzPWUuc3dlZXRBbGVydD1uKDkpfSkuY2FsbChlLG4oNykpfSxmdW5jdGlvbih0LGUsbil7KGZ1bmN0aW9uKGUpe3QuZXhwb3J0cz1lLnN3YWw9bigxMCl9KS5jYWxsKGUsbig3KSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZuKDExKTt2YXIgbz1uKDE2KS5kZWZhdWx0O3QuZXhwb3J0cz1vfSxmdW5jdGlvbih0LGUsbil7dmFyIG89bigxMik7XCJzdHJpbmdcIj09dHlwZW9mIG8mJihvPVtbdC5pLG8sXCJcIl1dKTt2YXIgcj17aW5zZXJ0QXQ6XCJ0b3BcIn07ci50cmFuc2Zvcm09dm9pZCAwO24oMTQpKG8scik7by5sb2NhbHMmJih0LmV4cG9ydHM9by5sb2NhbHMpfSxmdW5jdGlvbih0LGUsbil7ZT10LmV4cG9ydHM9bigxMykodm9pZCAwKSxlLnB1c2goW3QuaSwnLnN3YWwtaWNvbi0tZXJyb3J7Ym9yZGVyLWNvbG9yOiNmMjc0NzQ7LXdlYmtpdC1hbmltYXRpb246YW5pbWF0ZUVycm9ySWNvbiAuNXM7YW5pbWF0aW9uOmFuaW1hdGVFcnJvckljb24gLjVzfS5zd2FsLWljb24tLWVycm9yX194LW1hcmt7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazstd2Via2l0LWFuaW1hdGlvbjphbmltYXRlWE1hcmsgLjVzO2FuaW1hdGlvbjphbmltYXRlWE1hcmsgLjVzfS5zd2FsLWljb24tLWVycm9yX19saW5le3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDo1cHg7d2lkdGg6NDdweDtiYWNrZ3JvdW5kLWNvbG9yOiNmMjc0NzQ7ZGlzcGxheTpibG9jazt0b3A6MzdweDtib3JkZXItcmFkaXVzOjJweH0uc3dhbC1pY29uLS1lcnJvcl9fbGluZS0tbGVmdHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO2xlZnQ6MTdweH0uc3dhbC1pY29uLS1lcnJvcl9fbGluZS0tcmlnaHR7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3JpZ2h0OjE2cHh9QC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGVFcnJvckljb257MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7b3BhY2l0eTowfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMGRlZyk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGFuaW1hdGVFcnJvckljb257MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7b3BhY2l0eTowfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMGRlZyk7b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZVhNYXJrezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO21hcmdpbi10b3A6MjZweDtvcGFjaXR5OjB9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO21hcmdpbi10b3A6MjZweDtvcGFjaXR5OjB9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO3RyYW5zZm9ybTpzY2FsZSgxLjE1KTttYXJnaW4tdG9wOi02cHh9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO21hcmdpbi10b3A6MDtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgYW5pbWF0ZVhNYXJrezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO21hcmdpbi10b3A6MjZweDtvcGFjaXR5OjB9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO21hcmdpbi10b3A6MjZweDtvcGFjaXR5OjB9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO3RyYW5zZm9ybTpzY2FsZSgxLjE1KTttYXJnaW4tdG9wOi02cHh9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO21hcmdpbi10b3A6MDtvcGFjaXR5OjF9fS5zd2FsLWljb24tLXdhcm5pbmd7Ym9yZGVyLWNvbG9yOiNmOGJiODY7LXdlYmtpdC1hbmltYXRpb246cHVsc2VXYXJuaW5nIC43NXMgaW5maW5pdGUgYWx0ZXJuYXRlO2FuaW1hdGlvbjpwdWxzZVdhcm5pbmcgLjc1cyBpbmZpbml0ZSBhbHRlcm5hdGV9LnN3YWwtaWNvbi0td2FybmluZ19fYm9keXt3aWR0aDo1cHg7aGVpZ2h0OjQ3cHg7dG9wOjEwcHg7Ym9yZGVyLXJhZGl1czoycHg7bWFyZ2luLWxlZnQ6LTJweH0uc3dhbC1pY29uLS13YXJuaW5nX19ib2R5LC5zd2FsLWljb24tLXdhcm5pbmdfX2RvdHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTtiYWNrZ3JvdW5kLWNvbG9yOiNmOGJiODZ9LnN3YWwtaWNvbi0td2FybmluZ19fZG90e3dpZHRoOjdweDtoZWlnaHQ6N3B4O2JvcmRlci1yYWRpdXM6NTAlO21hcmdpbi1sZWZ0Oi00cHg7Ym90dG9tOi0xMXB4fUAtd2Via2l0LWtleWZyYW1lcyBwdWxzZVdhcm5pbmd7MCV7Ym9yZGVyLWNvbG9yOiNmOGQ0ODZ9dG97Ym9yZGVyLWNvbG9yOiNmOGJiODZ9fUBrZXlmcmFtZXMgcHVsc2VXYXJuaW5nezAle2JvcmRlci1jb2xvcjojZjhkNDg2fXRve2JvcmRlci1jb2xvcjojZjhiYjg2fX0uc3dhbC1pY29uLS1zdWNjZXNze2JvcmRlci1jb2xvcjojYTVkYzg2fS5zd2FsLWljb24tLXN1Y2Nlc3M6YWZ0ZXIsLnN3YWwtaWNvbi0tc3VjY2VzczpiZWZvcmV7Y29udGVudDpcIlwiO2JvcmRlci1yYWRpdXM6NTAlO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjYwcHg7aGVpZ2h0OjEyMHB4O2JhY2tncm91bmQ6I2ZmZjstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5zd2FsLWljb24tLXN1Y2Nlc3M6YmVmb3Jle2JvcmRlci1yYWRpdXM6MTIwcHggMCAwIDEyMHB4O3RvcDotN3B4O2xlZnQ6LTMzcHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo2MHB4IDYwcHg7dHJhbnNmb3JtLW9yaWdpbjo2MHB4IDYwcHh9LnN3YWwtaWNvbi0tc3VjY2VzczphZnRlcntib3JkZXItcmFkaXVzOjAgMTIwcHggMTIwcHggMDt0b3A6LTExcHg7bGVmdDozMHB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MCA2MHB4O3RyYW5zZm9ybS1vcmlnaW46MCA2MHB4Oy13ZWJraXQtYW5pbWF0aW9uOnJvdGF0ZVBsYWNlaG9sZGVyIDQuMjVzIGVhc2UtaW47YW5pbWF0aW9uOnJvdGF0ZVBsYWNlaG9sZGVyIDQuMjVzIGVhc2UtaW59LnN3YWwtaWNvbi0tc3VjY2Vzc19fcmluZ3t3aWR0aDo4MHB4O2hlaWdodDo4MHB4O2JvcmRlcjo0cHggc29saWQgaHNsYSg5OCw1NSUsNjklLC4yKTtib3JkZXItcmFkaXVzOjUwJTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTRweDt0b3A6LTRweDt6LWluZGV4OjJ9LnN3YWwtaWNvbi0tc3VjY2Vzc19faGlkZS1jb3JuZXJze3dpZHRoOjVweDtoZWlnaHQ6OTBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cG9zaXRpb246YWJzb2x1dGU7bGVmdDoyOHB4O3RvcDo4cHg7ei1pbmRleDoxOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uc3dhbC1pY29uLS1zdWNjZXNzX19saW5le2hlaWdodDo1cHg7YmFja2dyb3VuZC1jb2xvcjojYTVkYzg2O2Rpc3BsYXk6YmxvY2s7Ym9yZGVyLXJhZGl1czoycHg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyfS5zd2FsLWljb24tLXN1Y2Nlc3NfX2xpbmUtLXRpcHt3aWR0aDoyNXB4O2xlZnQ6MTRweDt0b3A6NDZweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpOy13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGVTdWNjZXNzVGlwIC43NXM7YW5pbWF0aW9uOmFuaW1hdGVTdWNjZXNzVGlwIC43NXN9LnN3YWwtaWNvbi0tc3VjY2Vzc19fbGluZS0tbG9uZ3t3aWR0aDo0N3B4O3JpZ2h0OjhweDt0b3A6MzhweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC1hbmltYXRpb246YW5pbWF0ZVN1Y2Nlc3NMb25nIC43NXM7YW5pbWF0aW9uOmFuaW1hdGVTdWNjZXNzTG9uZyAuNzVzfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVQbGFjZWhvbGRlcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9NSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTEyJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX19QGtleWZyYW1lcyByb3RhdGVQbGFjZWhvbGRlcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9NSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTEyJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGVTdWNjZXNzVGlwezAle3dpZHRoOjA7bGVmdDoxcHg7dG9wOjE5cHh9NTQle3dpZHRoOjA7bGVmdDoxcHg7dG9wOjE5cHh9NzAle3dpZHRoOjUwcHg7bGVmdDotOHB4O3RvcDozN3B4fTg0JXt3aWR0aDoxN3B4O2xlZnQ6MjFweDt0b3A6NDhweH10b3t3aWR0aDoyNXB4O2xlZnQ6MTRweDt0b3A6NDVweH19QGtleWZyYW1lcyBhbmltYXRlU3VjY2Vzc1RpcHswJXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTU0JXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTcwJXt3aWR0aDo1MHB4O2xlZnQ6LThweDt0b3A6MzdweH04NCV7d2lkdGg6MTdweDtsZWZ0OjIxcHg7dG9wOjQ4cHh9dG97d2lkdGg6MjVweDtsZWZ0OjE0cHg7dG9wOjQ1cHh9fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlU3VjY2Vzc0xvbmd7MCV7d2lkdGg6MDtyaWdodDo0NnB4O3RvcDo1NHB4fTY1JXt3aWR0aDowO3JpZ2h0OjQ2cHg7dG9wOjU0cHh9ODQle3dpZHRoOjU1cHg7cmlnaHQ6MDt0b3A6MzVweH10b3t3aWR0aDo0N3B4O3JpZ2h0OjhweDt0b3A6MzhweH19QGtleWZyYW1lcyBhbmltYXRlU3VjY2Vzc0xvbmd7MCV7d2lkdGg6MDtyaWdodDo0NnB4O3RvcDo1NHB4fTY1JXt3aWR0aDowO3JpZ2h0OjQ2cHg7dG9wOjU0cHh9ODQle3dpZHRoOjU1cHg7cmlnaHQ6MDt0b3A6MzVweH10b3t3aWR0aDo0N3B4O3JpZ2h0OjhweDt0b3A6MzhweH19LnN3YWwtaWNvbi0taW5mb3tib3JkZXItY29sb3I6I2M5ZGFlMX0uc3dhbC1pY29uLS1pbmZvOmJlZm9yZXt3aWR0aDo1cHg7aGVpZ2h0OjI5cHg7Ym90dG9tOjE3cHg7Ym9yZGVyLXJhZGl1czoycHg7bWFyZ2luLWxlZnQ6LTJweH0uc3dhbC1pY29uLS1pbmZvOmFmdGVyLC5zd2FsLWljb24tLWluZm86YmVmb3Jle2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTtiYWNrZ3JvdW5kLWNvbG9yOiNjOWRhZTF9LnN3YWwtaWNvbi0taW5mbzphZnRlcnt3aWR0aDo3cHg7aGVpZ2h0OjdweDtib3JkZXItcmFkaXVzOjUwJTttYXJnaW4tbGVmdDotM3B4O3RvcDoxOXB4fS5zd2FsLWljb257d2lkdGg6ODBweDtoZWlnaHQ6ODBweDtib3JkZXItd2lkdGg6NHB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjUwJTtwYWRkaW5nOjA7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpjb250ZW50LWJveDttYXJnaW46MjBweCBhdXRvfS5zd2FsLWljb246Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDozMnB4fS5zd2FsLWljb24tLWN1c3RvbXt3aWR0aDphdXRvO2hlaWdodDphdXRvO21heC13aWR0aDoxMDAlO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MH0uc3dhbC1pY29uIGltZ3ttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCV9LnN3YWwtdGl0bGV7Y29sb3I6cmdiYSgwLDAsMCwuNjUpO2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LXRyYW5zZm9ybTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7cGFkZGluZzoxM3B4IDE2cHg7Zm9udC1zaXplOjI3cHg7bGluZS1oZWlnaHQ6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1ib3R0b206MH0uc3dhbC10aXRsZTpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOjI2cHh9LnN3YWwtdGl0bGU6bm90KDpmaXJzdC1jaGlsZCl7cGFkZGluZy1ib3R0b206MH0uc3dhbC10aXRsZTpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MTNweH0uc3dhbC10ZXh0e2ZvbnQtc2l6ZToxNnB4O3Bvc2l0aW9uOnJlbGF0aXZlO2Zsb2F0Om5vbmU7bGluZS1oZWlnaHQ6bm9ybWFsO3ZlcnRpY2FsLWFsaWduOnRvcDt0ZXh0LWFsaWduOmxlZnQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjA7cGFkZGluZzowIDEwcHg7Zm9udC13ZWlnaHQ6NDAwO2NvbG9yOnJnYmEoMCwwLDAsLjY0KTttYXgtd2lkdGg6Y2FsYygxMDAlIC0gMjBweCk7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkO2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc3dhbC10ZXh0OmZpcnN0LWNoaWxke21hcmdpbi10b3A6NDVweH0uc3dhbC10ZXh0Omxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTo0NXB4fS5zd2FsLWZvb3Rlcnt0ZXh0LWFsaWduOnJpZ2h0O3BhZGRpbmctdG9wOjEzcHg7bWFyZ2luLXRvcDoxM3B4O3BhZGRpbmc6MTNweCAxNnB4O2JvcmRlci1yYWRpdXM6aW5oZXJpdDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0uc3dhbC1idXR0b24tY29udGFpbmVye21hcmdpbjo1cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmV9LnN3YWwtYnV0dG9ue2JhY2tncm91bmQtY29sb3I6IzdjZDFmOTtjb2xvcjojZmZmO2JvcmRlcjpub25lO2JveC1zaGFkb3c6bm9uZTtib3JkZXItcmFkaXVzOjVweDtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE0cHg7cGFkZGluZzoxMHB4IDI0cHg7bWFyZ2luOjA7Y3Vyc29yOnBvaW50ZXJ9LnN3YWwtYnV0dG9uW25vdDpkaXNhYmxlZF06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNzhjYmYyfS5zd2FsLWJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojNzBiY2UwfS5zd2FsLWJ1dHRvbjpmb2N1c3tvdXRsaW5lOm5vbmU7Ym94LXNoYWRvdzowIDAgMCAxcHggI2ZmZiwwIDAgMCAzcHggcmdiYSg0MywxMTQsMTY1LC4yOSl9LnN3YWwtYnV0dG9uW2Rpc2FibGVkXXtvcGFjaXR5Oi41O2N1cnNvcjpkZWZhdWx0fS5zd2FsLWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH0uc3dhbC1idXR0b24tLWNhbmNlbHtjb2xvcjojNTU1O2JhY2tncm91bmQtY29sb3I6I2VmZWZlZn0uc3dhbC1idXR0b24tLWNhbmNlbFtub3Q6ZGlzYWJsZWRdOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2U4ZThlOH0uc3dhbC1idXR0b24tLWNhbmNlbDphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZDdkN2Q3fS5zd2FsLWJ1dHRvbi0tY2FuY2VsOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgMXB4ICNmZmYsMCAwIDAgM3B4IHJnYmEoMTE2LDEzNiwxNTAsLjI5KX0uc3dhbC1idXR0b24tLWRhbmdlcntiYWNrZ3JvdW5kLWNvbG9yOiNlNjQ5NDJ9LnN3YWwtYnV0dG9uLS1kYW5nZXJbbm90OmRpc2FibGVkXTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNkZjQ3NDB9LnN3YWwtYnV0dG9uLS1kYW5nZXI6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I2NmNDIzYn0uc3dhbC1idXR0b24tLWRhbmdlcjpmb2N1c3tib3gtc2hhZG93OjAgMCAwIDFweCAjZmZmLDAgMCAwIDNweCByZ2JhKDE2NSw0Myw0MywuMjkpfS5zd2FsLWNvbnRlbnR7cGFkZGluZzowIDIwcHg7bWFyZ2luLXRvcDoyMHB4O2ZvbnQtc2l6ZTptZWRpdW19LnN3YWwtY29udGVudDpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206MjBweH0uc3dhbC1jb250ZW50X19pbnB1dCwuc3dhbC1jb250ZW50X190ZXh0YXJlYXstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOm5vbmU7Zm9udC1zaXplOjE0cHg7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MTAwJTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjE0KTtwYWRkaW5nOjEwcHggMTNweDtib3JkZXItcmFkaXVzOjJweDstd2Via2l0LXRyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4yczt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMnN9LnN3YWwtY29udGVudF9faW5wdXQ6Zm9jdXMsLnN3YWwtY29udGVudF9fdGV4dGFyZWE6Zm9jdXN7b3V0bGluZTpub25lO2JvcmRlci1jb2xvcjojNmRiOGZmfS5zd2FsLWNvbnRlbnRfX3RleHRhcmVhe3Jlc2l6ZTp2ZXJ0aWNhbH0uc3dhbC1idXR0b24tLWxvYWRpbmd7Y29sb3I6dHJhbnNwYXJlbnR9LnN3YWwtYnV0dG9uLS1sb2FkaW5nfi5zd2FsLWJ1dHRvbl9fbG9hZGVye29wYWNpdHk6MX0uc3dhbC1idXR0b25fX2xvYWRlcntwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6YXV0bzt3aWR0aDo0M3B4O3otaW5kZXg6MjtsZWZ0OjUwJTt0b3A6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO3RleHQtYWxpZ246Y2VudGVyO3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowfS5zd2FsLWJ1dHRvbl9fbG9hZGVyIGRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO3dpZHRoOjlweDtoZWlnaHQ6OXB4O3BhZGRpbmc6MDtib3JkZXI6bm9uZTttYXJnaW46MnB4O29wYWNpdHk6LjQ7Ym9yZGVyLXJhZGl1czo3cHg7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuOSk7LXdlYmtpdC10cmFuc2l0aW9uOmJhY2tncm91bmQgLjJzO3RyYW5zaXRpb246YmFja2dyb3VuZCAuMnM7LXdlYmtpdC1hbmltYXRpb246c3dhbC1sb2FkaW5nLWFuaW0gMXMgaW5maW5pdGU7YW5pbWF0aW9uOnN3YWwtbG9hZGluZy1hbmltIDFzIGluZmluaXRlfS5zd2FsLWJ1dHRvbl9fbG9hZGVyIGRpdjpudGgtY2hpbGQoM24rMil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LjE1czthbmltYXRpb24tZGVsYXk6LjE1c30uc3dhbC1idXR0b25fX2xvYWRlciBkaXY6bnRoLWNoaWxkKDNuKzMpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4zczthbmltYXRpb24tZGVsYXk6LjNzfUAtd2Via2l0LWtleWZyYW1lcyBzd2FsLWxvYWRpbmctYW5pbXswJXtvcGFjaXR5Oi40fTIwJXtvcGFjaXR5Oi40fTUwJXtvcGFjaXR5OjF9dG97b3BhY2l0eTouNH19QGtleWZyYW1lcyBzd2FsLWxvYWRpbmctYW5pbXswJXtvcGFjaXR5Oi40fTIwJXtvcGFjaXR5Oi40fTUwJXtvcGFjaXR5OjF9dG97b3BhY2l0eTouNH19LnN3YWwtb3ZlcmxheXtwb3NpdGlvbjpmaXhlZDt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MDtvdmVyZmxvdy15OnNjcm9sbDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQpO3otaW5kZXg6MTAwMDA7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjNzO3RyYW5zaXRpb246b3BhY2l0eSAuM3N9LnN3YWwtb3ZlcmxheTpiZWZvcmV7Y29udGVudDpcIiBcIjtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7aGVpZ2h0OjEwMCV9LnN3YWwtb3ZlcmxheS0tc2hvdy1tb2RhbHtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0b30uc3dhbC1vdmVybGF5LS1zaG93LW1vZGFsIC5zd2FsLW1vZGFse29wYWNpdHk6MTtwb2ludGVyLWV2ZW50czphdXRvO2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LWFuaW1hdGlvbjpzaG93U3dlZXRBbGVydCAuM3M7YW5pbWF0aW9uOnNob3dTd2VldEFsZXJ0IC4zczt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19LnN3YWwtbW9kYWx7d2lkdGg6NDc4cHg7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojZmZmO3RleHQtYWxpZ246Y2VudGVyO2JvcmRlci1yYWRpdXM6NXB4O3Bvc2l0aW9uOnN0YXRpYzttYXJnaW46MjBweCBhdXRvO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7dHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3otaW5kZXg6MTAwMDE7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjJzLC13ZWJraXQtdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOm9wYWNpdHkgLjJzLC13ZWJraXQtdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3Msb3BhY2l0eSAuMnM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzLG9wYWNpdHkgLjJzLC13ZWJraXQtdHJhbnNmb3JtIC4zc31AbWVkaWEgKG1heC13aWR0aDo1MDBweCl7LnN3YWwtbW9kYWx7d2lkdGg6Y2FsYygxMDAlIC0gMjBweCl9fUAtd2Via2l0LWtleWZyYW1lcyBzaG93U3dlZXRBbGVydHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9MSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSl9NDUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTt0cmFuc2Zvcm06c2NhbGUoLjk1KX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgc2hvd1N3ZWV0QWxlcnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTEley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KTt0cmFuc2Zvcm06c2NhbGUoLjUpfTQ1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7dHJhbnNmb3JtOnNjYWxlKC45NSl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX0nLFwiXCJdKX0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKHQsZSl7dmFyIG49dFsxXXx8XCJcIixyPXRbM107aWYoIXIpcmV0dXJuIG47aWYoZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYnRvYSl7dmFyIGE9byhyKTtyZXR1cm5bbl0uY29uY2F0KHIuc291cmNlcy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiK3Iuc291cmNlUm9vdCt0K1wiICovXCJ9KSkuY29uY2F0KFthXSkuam9pbihcIlxcblwiKX1yZXR1cm5bbl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiBvKHQpe3JldHVyblwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHQpKSkpK1wiICovXCJ9dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPVtdO3JldHVybiBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKGUpe3ZhciBvPW4oZSx0KTtyZXR1cm4gZVsyXT9cIkBtZWRpYSBcIitlWzJdK1wie1wiK28rXCJ9XCI6b30pLmpvaW4oXCJcIil9LGUuaT1mdW5jdGlvbih0LG4pe1wic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1bW251bGwsdCxcIlwiXV0pO2Zvcih2YXIgbz17fSxyPTA7cjx0aGlzLmxlbmd0aDtyKyspe3ZhciBhPXRoaXNbcl1bMF07XCJudW1iZXJcIj09dHlwZW9mIGEmJihvW2FdPSEwKX1mb3Iocj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgaT10W3JdO1wibnVtYmVyXCI9PXR5cGVvZiBpWzBdJiZvW2lbMF1dfHwobiYmIWlbMl0/aVsyXT1uOm4mJihpWzJdPVwiKFwiK2lbMl0rXCIpIGFuZCAoXCIrbitcIilcIiksZS5wdXNoKGkpKX19LGV9fSxmdW5jdGlvbih0LGUsbil7ZnVuY3Rpb24gbyh0LGUpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dLHI9YltvLmlkXTtpZihyKXtyLnJlZnMrKztmb3IodmFyIGE9MDthPHIucGFydHMubGVuZ3RoO2ErKylyLnBhcnRzW2FdKG8ucGFydHNbYV0pO2Zvcig7YTxvLnBhcnRzLmxlbmd0aDthKyspci5wYXJ0cy5wdXNoKHUoby5wYXJ0c1thXSxlKSl9ZWxzZXtmb3IodmFyIGk9W10sYT0wO2E8by5wYXJ0cy5sZW5ndGg7YSsrKWkucHVzaCh1KG8ucGFydHNbYV0sZSkpO2Jbby5pZF09e2lkOm8uaWQscmVmczoxLHBhcnRzOml9fX19ZnVuY3Rpb24gcih0LGUpe2Zvcih2YXIgbj1bXSxvPXt9LHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIGE9dFtyXSxpPWUuYmFzZT9hWzBdK2UuYmFzZTphWzBdLHM9YVsxXSxsPWFbMl0sYz1hWzNdLHU9e2NzczpzLG1lZGlhOmwsc291cmNlTWFwOmN9O29baV0/b1tpXS5wYXJ0cy5wdXNoKHUpOm4ucHVzaChvW2ldPXtpZDppLHBhcnRzOlt1XX0pfXJldHVybiBufWZ1bmN0aW9uIGEodCxlKXt2YXIgbj1nKHQuaW5zZXJ0SW50byk7aWYoIW4pdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7dmFyIG89eFt4Lmxlbmd0aC0xXTtpZihcInRvcFwiPT09dC5pbnNlcnRBdClvP28ubmV4dFNpYmxpbmc/bi5pbnNlcnRCZWZvcmUoZSxvLm5leHRTaWJsaW5nKTpuLmFwcGVuZENoaWxkKGUpOm4uaW5zZXJ0QmVmb3JlKGUsbi5maXJzdENoaWxkKSx4LnB1c2goZSk7ZWxzZXtpZihcImJvdHRvbVwiIT09dC5pbnNlcnRBdCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7bi5hcHBlbmRDaGlsZChlKX19ZnVuY3Rpb24gaSh0KXtpZihudWxsPT09dC5wYXJlbnROb2RlKXJldHVybiExO3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KTt2YXIgZT14LmluZGV4T2YodCk7ZT49MCYmeC5zcGxpY2UoZSwxKX1mdW5jdGlvbiBzKHQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtyZXR1cm4gdC5hdHRycy50eXBlPVwidGV4dC9jc3NcIixjKGUsdC5hdHRycyksYSh0LGUpLGV9ZnVuY3Rpb24gbCh0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtyZXR1cm4gdC5hdHRycy50eXBlPVwidGV4dC9jc3NcIix0LmF0dHJzLnJlbD1cInN0eWxlc2hlZXRcIixjKGUsdC5hdHRycyksYSh0LGUpLGV9ZnVuY3Rpb24gYyh0LGUpe09iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24obil7dC5zZXRBdHRyaWJ1dGUobixlW25dKX0pfWZ1bmN0aW9uIHUodCxlKXt2YXIgbixvLHIsYTtpZihlLnRyYW5zZm9ybSYmdC5jc3Mpe2lmKCEoYT1lLnRyYW5zZm9ybSh0LmNzcykpKXJldHVybiBmdW5jdGlvbigpe307dC5jc3M9YX1pZihlLnNpbmdsZXRvbil7dmFyIGM9dysrO249dnx8KHY9cyhlKSksbz1kLmJpbmQobnVsbCxuLGMsITEpLHI9ZC5iaW5kKG51bGwsbixjLCEwKX1lbHNlIHQuc291cmNlTWFwJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBVUkwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIEJsb2ImJlwiZnVuY3Rpb25cIj09dHlwZW9mIGJ0b2E/KG49bChlKSxvPXAuYmluZChudWxsLG4sZSkscj1mdW5jdGlvbigpe2kobiksbi5ocmVmJiZVUkwucmV2b2tlT2JqZWN0VVJMKG4uaHJlZil9KToobj1zKGUpLG89Zi5iaW5kKG51bGwsbikscj1mdW5jdGlvbigpe2kobil9KTtyZXR1cm4gbyh0KSxmdW5jdGlvbihlKXtpZihlKXtpZihlLmNzcz09PXQuY3NzJiZlLm1lZGlhPT09dC5tZWRpYSYmZS5zb3VyY2VNYXA9PT10LnNvdXJjZU1hcClyZXR1cm47byh0PWUpfWVsc2UgcigpfX1mdW5jdGlvbiBkKHQsZSxuLG8pe3ZhciByPW4/XCJcIjpvLmNzcztpZih0LnN0eWxlU2hlZXQpdC5zdHlsZVNoZWV0LmNzc1RleHQ9eShlLHIpO2Vsc2V7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUociksaT10LmNoaWxkTm9kZXM7aVtlXSYmdC5yZW1vdmVDaGlsZChpW2VdKSxpLmxlbmd0aD90Lmluc2VydEJlZm9yZShhLGlbZV0pOnQuYXBwZW5kQ2hpbGQoYSl9fWZ1bmN0aW9uIGYodCxlKXt2YXIgbj1lLmNzcyxvPWUubWVkaWE7aWYobyYmdC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLG8pLHQuc3R5bGVTaGVldCl0LnN0eWxlU2hlZXQuY3NzVGV4dD1uO2Vsc2V7Zm9yKDt0LmZpcnN0Q2hpbGQ7KXQucmVtb3ZlQ2hpbGQodC5maXJzdENoaWxkKTt0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG4pKX19ZnVuY3Rpb24gcCh0LGUsbil7dmFyIG89bi5jc3Mscj1uLnNvdXJjZU1hcCxhPXZvaWQgMD09PWUuY29udmVydFRvQWJzb2x1dGVVcmxzJiZyOyhlLmNvbnZlcnRUb0Fic29sdXRlVXJsc3x8YSkmJihvPWgobykpLHImJihvKz1cIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkocikpKSkrXCIgKi9cIik7dmFyIGk9bmV3IEJsb2IoW29dLHt0eXBlOlwidGV4dC9jc3NcIn0pLHM9dC5ocmVmO3QuaHJlZj1VUkwuY3JlYXRlT2JqZWN0VVJMKGkpLHMmJlVSTC5yZXZva2VPYmplY3RVUkwocyl9dmFyIGI9e30sbT1mdW5jdGlvbih0KXt2YXIgZTtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9dC5hcHBseSh0aGlzLGFyZ3VtZW50cykpLGV9fShmdW5jdGlvbigpe3JldHVybiB3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYn0pLGc9ZnVuY3Rpb24odCl7dmFyIGU9e307cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiB2b2lkIDA9PT1lW25dJiYoZVtuXT10LmNhbGwodGhpcyxuKSksZVtuXX19KGZ1bmN0aW9uKHQpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpfSksdj1udWxsLHc9MCx4PVtdLGg9bigxNSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIERFQlVHJiZERUJVRyYmXCJvYmplY3RcIiE9dHlwZW9mIGRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtlPWV8fHt9LGUuYXR0cnM9XCJvYmplY3RcIj09dHlwZW9mIGUuYXR0cnM/ZS5hdHRyczp7fSxlLnNpbmdsZXRvbnx8KGUuc2luZ2xldG9uPW0oKSksZS5pbnNlcnRJbnRvfHwoZS5pbnNlcnRJbnRvPVwiaGVhZFwiKSxlLmluc2VydEF0fHwoZS5pbnNlcnRBdD1cImJvdHRvbVwiKTt2YXIgbj1yKHQsZSk7cmV0dXJuIG8obixlKSxmdW5jdGlvbih0KXtmb3IodmFyIGE9W10saT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgcz1uW2ldLGw9YltzLmlkXTtsLnJlZnMtLSxhLnB1c2gobCl9aWYodCl7byhyKHQsZSksZSl9Zm9yKHZhciBpPTA7aTxhLmxlbmd0aDtpKyspe3ZhciBsPWFbaV07aWYoMD09PWwucmVmcyl7Zm9yKHZhciBjPTA7YzxsLnBhcnRzLmxlbmd0aDtjKyspbC5wYXJ0c1tjXSgpO2RlbGV0ZSBiW2wuaWRdfX19fTt2YXIgeT1mdW5jdGlvbigpe3ZhciB0PVtdO3JldHVybiBmdW5jdGlvbihlLG4pe3JldHVybiB0W2VdPW4sdC5maWx0ZXIoQm9vbGVhbikuam9pbihcIlxcblwiKX19KCl9LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5sb2NhdGlvbjtpZighZSl0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtpZighdHx8XCJzdHJpbmdcIiE9dHlwZW9mIHQpcmV0dXJuIHQ7dmFyIG49ZS5wcm90b2NvbCtcIi8vXCIrZS5ob3N0LG89bitlLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLyxcIi9cIik7cmV0dXJuIHQucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksZnVuY3Rpb24odCxlKXt2YXIgcj1lLnRyaW0oKS5yZXBsYWNlKC9eXCIoLiopXCIkLyxmdW5jdGlvbih0LGUpe3JldHVybiBlfSkucmVwbGFjZSgvXicoLiopJyQvLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGV9KTtpZigvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHIpKXJldHVybiB0O3ZhciBhO3JldHVybiBhPTA9PT1yLmluZGV4T2YoXCIvL1wiKT9yOjA9PT1yLmluZGV4T2YoXCIvXCIpP24rcjpvK3IucmVwbGFjZSgvXlxcLlxcLy8sXCJcIiksXCJ1cmwoXCIrSlNPTi5zdHJpbmdpZnkoYSkrXCIpXCJ9KX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDE3KSxyPW4oNiksYT1uKDUpLGk9bigyOSkscz1mdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxlPTA7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl0W2VdPWFyZ3VtZW50c1tlXTtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KXt2YXIgbj1pLmdldE9wdHMuYXBwbHkodm9pZCAwLHQpO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih0LGUpe2EuZGVmYXVsdC5wcm9taXNlPXtyZXNvbHZlOnQscmVqZWN0OmV9LG8uZGVmYXVsdChuKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ci5vcGVuTW9kYWwoKX0pfSl9fTtzLmNsb3NlPXIub25BY3Rpb24scy5nZXRTdGF0ZT1yLmdldFN0YXRlLHMuc2V0QWN0aW9uVmFsdWU9YS5zZXRBY3Rpb25WYWx1ZSxzLnN0b3BMb2FkaW5nPXIuc3RvcExvYWRpbmcscy5zZXREZWZhdWx0cz1pLnNldERlZmF1bHRzLGUuZGVmYXVsdD1zfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPW4oMCksYT1yLmRlZmF1bHQuTU9EQUwsaT1uKDQpLHM9bigyNyksbD1uKDI4KSxjPW4oMSk7ZS5pbml0PWZ1bmN0aW9uKHQpe28uZ2V0Tm9kZShhKXx8KGRvY3VtZW50LmJvZHl8fGMudGhyb3dFcnIoXCJZb3UgY2FuIG9ubHkgdXNlIFN3ZWV0QWxlcnQgQUZURVIgdGhlIERPTSBoYXMgbG9hZGVkIVwiKSxzLmRlZmF1bHQoKSxpLmRlZmF1bHQoKSksaS5pbml0TW9kYWxDb250ZW50KHQpLGwuZGVmYXVsdCh0KX0sZS5kZWZhdWx0PWUuaW5pdH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCkscj1vLmRlZmF1bHQuTU9EQUw7ZS5tb2RhbE1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytyKydcIj48L2Rpdj4nLGUuZGVmYXVsdD1lLm1vZGFsTWFya3VwfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigwKSxyPW8uZGVmYXVsdC5PVkVSTEFZLGE9JzxkaXYgXFxuICAgIGNsYXNzPVwiJytyKydcIlxcbiAgICB0YWJJbmRleD1cIi0xXCI+XFxuICA8L2Rpdj4nO2UuZGVmYXVsdD1hfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigwKSxyPW8uZGVmYXVsdC5JQ09OO2UuZXJyb3JJY29uTWFya3VwPWZ1bmN0aW9uKCl7dmFyIHQ9citcIi0tZXJyb3JcIixlPXQrXCJfX2xpbmVcIjtyZXR1cm4nXFxuICAgIDxkaXYgY2xhc3M9XCInK3QrJ19feC1tYXJrXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XCInK2UrXCIgXCIrZSsnLS1sZWZ0XCI+PC9zcGFuPlxcbiAgICAgIDxzcGFuIGNsYXNzPVwiJytlK1wiIFwiK2UrJy0tcmlnaHRcIj48L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgJ30sZS53YXJuaW5nSWNvbk1hcmt1cD1mdW5jdGlvbigpe3ZhciB0PXIrXCItLXdhcm5pbmdcIjtyZXR1cm4nXFxuICAgIDxzcGFuIGNsYXNzPVwiJyt0KydfX2JvZHlcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cIicrdCsnX19kb3RcIj48L3NwYW4+XFxuICAgIDwvc3Bhbj5cXG4gICd9LGUuc3VjY2Vzc0ljb25NYXJrdXA9ZnVuY3Rpb24oKXt2YXIgdD1yK1wiLS1zdWNjZXNzXCI7cmV0dXJuJ1xcbiAgICA8c3BhbiBjbGFzcz1cIicrdCtcIl9fbGluZSBcIit0KydfX2xpbmUtLWxvbmdcIj48L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVwiJyt0K1wiX19saW5lIFwiK3QrJ19fbGluZS0tdGlwXCI+PC9zcGFuPlxcblxcbiAgICA8ZGl2IGNsYXNzPVwiJyt0KydfX3JpbmdcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cIicrdCsnX19oaWRlLWNvcm5lcnNcIj48L2Rpdj5cXG4gICd9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigwKSxyPW8uZGVmYXVsdC5DT05URU5UO2UuY29udGVudE1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytyKydcIj5cXG5cXG4gIDwvZGl2Plxcbid9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApLHI9by5kZWZhdWx0LkJVVFRPTl9DT05UQUlORVIsYT1vLmRlZmF1bHQuQlVUVE9OLGk9by5kZWZhdWx0LkJVVFRPTl9MT0FERVI7ZS5idXR0b25NYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrcisnXCI+XFxuXFxuICAgIDxidXR0b25cXG4gICAgICBjbGFzcz1cIicrYSsnXCJcXG4gICAgPjwvYnV0dG9uPlxcblxcbiAgICA8ZGl2IGNsYXNzPVwiJytpKydcIj5cXG4gICAgICA8ZGl2PjwvZGl2PlxcbiAgICAgIDxkaXY+PC9kaXY+XFxuICAgICAgPGRpdj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICA8L2Rpdj5cXG4nfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89big0KSxyPW4oMiksYT1uKDApLGk9YS5kZWZhdWx0LklDT04scz1hLmRlZmF1bHQuSUNPTl9DVVNUT00sbD1bXCJlcnJvclwiLFwid2FybmluZ1wiLFwic3VjY2Vzc1wiLFwiaW5mb1wiXSxjPXtlcnJvcjpyLmVycm9ySWNvbk1hcmt1cCgpLHdhcm5pbmc6ci53YXJuaW5nSWNvbk1hcmt1cCgpLHN1Y2Nlc3M6ci5zdWNjZXNzSWNvbk1hcmt1cCgpfSx1PWZ1bmN0aW9uKHQsZSl7dmFyIG49aStcIi0tXCIrdDtlLmNsYXNzTGlzdC5hZGQobik7dmFyIG89Y1t0XTtvJiYoZS5pbm5lckhUTUw9byl9LGQ9ZnVuY3Rpb24odCxlKXtlLmNsYXNzTGlzdC5hZGQocyk7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtuLnNyYz10LGUuYXBwZW5kQ2hpbGQobil9LGY9ZnVuY3Rpb24odCl7aWYodCl7dmFyIGU9by5pbmplY3RFbEludG9Nb2RhbChyLmljb25NYXJrdXApO2wuaW5jbHVkZXModCk/dSh0LGUpOmQodCxlKX19O2UuZGVmYXVsdD1mfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigyKSxyPW4oNCksYT1mdW5jdGlvbih0KXtuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKFwiQXBwbGVXZWJLaXRcIikmJih0LnN0eWxlLmRpc3BsYXk9XCJub25lXCIsdC5vZmZzZXRIZWlnaHQsdC5zdHlsZS5kaXNwbGF5PVwiXCIpfTtlLmluaXRUaXRsZT1mdW5jdGlvbih0KXtpZih0KXt2YXIgZT1yLmluamVjdEVsSW50b01vZGFsKG8udGl0bGVNYXJrdXApO2UudGV4dENvbnRlbnQ9dCxhKGUpfX0sZS5pbml0VGV4dD1mdW5jdGlvbih0KXtpZih0KXt2YXIgZT1yLmluamVjdEVsSW50b01vZGFsKG8udGV4dE1hcmt1cCk7ZS50ZXh0Q29udGVudD10LGEoZSl9fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDQpLGE9bigwKSxpPWEuZGVmYXVsdC5CVVRUT04scz1hLmRlZmF1bHQuREFOR0VSX0JVVFRPTixsPW4oMyksYz1uKDIpLHU9big2KSxkPW4oNSksZj1mdW5jdGlvbih0LGUsbil7dmFyIHI9ZS50ZXh0LGE9ZS52YWx1ZSxmPWUuY2xhc3NOYW1lLHA9ZS5jbG9zZU1vZGFsLGI9by5zdHJpbmdUb05vZGUoYy5idXR0b25NYXJrdXApLG09Yi5xdWVyeVNlbGVjdG9yKFwiLlwiK2kpLGc9aStcIi0tXCIrdDttLmNsYXNzTGlzdC5hZGQoZyksZiYmbS5jbGFzc0xpc3QuYWRkKGYpLG4mJnQ9PT1sLkNPTkZJUk1fS0VZJiZtLmNsYXNzTGlzdC5hZGQocyksbS50ZXh0Q29udGVudD1yO3ZhciB2PXt9O3JldHVybiB2W3RdPWEsZC5zZXRBY3Rpb25WYWx1ZSh2KSxkLnNldEFjdGlvbk9wdGlvbnNGb3IodCx7Y2xvc2VNb2RhbDpwfSksbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe3JldHVybiB1Lm9uQWN0aW9uKHQpfSksYn0scD1mdW5jdGlvbih0LGUpe3ZhciBuPXIuaW5qZWN0RWxJbnRvTW9kYWwoYy5mb290ZXJNYXJrdXApO2Zvcih2YXIgbyBpbiB0KXt2YXIgYT10W29dLGk9ZihvLGEsZSk7YS52aXNpYmxlJiZuLmFwcGVuZENoaWxkKGkpfTA9PT1uLmNoaWxkcmVuLmxlbmd0aCYmbi5yZW1vdmUoKX07ZS5kZWZhdWx0PXB9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDMpLHI9big0KSxhPW4oMiksaT1uKDUpLHM9big2KSxsPW4oMCksYz1sLmRlZmF1bHQuQ09OVEVOVCx1PWZ1bmN0aW9uKHQpe3QuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsZnVuY3Rpb24odCl7dmFyIGU9dC50YXJnZXQsbj1lLnZhbHVlO2kuc2V0QWN0aW9uVmFsdWUobil9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLGZ1bmN0aW9uKHQpe2lmKFwiRW50ZXJcIj09PXQua2V5KXJldHVybiBzLm9uQWN0aW9uKG8uQ09ORklSTV9LRVkpfSksc2V0VGltZW91dChmdW5jdGlvbigpe3QuZm9jdXMoKSxpLnNldEFjdGlvblZhbHVlKFwiXCIpfSwwKX0sZD1mdW5jdGlvbih0LGUsbil7dmFyIG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKSxyPWMrXCJfX1wiK2U7by5jbGFzc0xpc3QuYWRkKHIpO2Zvcih2YXIgYSBpbiBuKXt2YXIgaT1uW2FdO29bYV09aX1cImlucHV0XCI9PT1lJiZ1KG8pLHQuYXBwZW5kQ2hpbGQobyl9LGY9ZnVuY3Rpb24odCl7aWYodCl7dmFyIGU9ci5pbmplY3RFbEludG9Nb2RhbChhLmNvbnRlbnRNYXJrdXApLG49dC5lbGVtZW50LG89dC5hdHRyaWJ1dGVzO1wic3RyaW5nXCI9PXR5cGVvZiBuP2QoZSxuLG8pOmUuYXBwZW5kQ2hpbGQobil9fTtlLmRlZmF1bHQ9Zn0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDIpLGE9ZnVuY3Rpb24oKXt2YXIgdD1vLnN0cmluZ1RvTm9kZShyLm92ZXJsYXlNYXJrdXApO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodCl9O2UuZGVmYXVsdD1hfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89big1KSxyPW4oNiksYT1uKDEpLGk9bigzKSxzPW4oMCksbD1zLmRlZmF1bHQuTU9EQUwsYz1zLmRlZmF1bHQuQlVUVE9OLHU9cy5kZWZhdWx0Lk9WRVJMQVksZD1mdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksZygpfSxmPWZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSx2KCl9LHA9ZnVuY3Rpb24odCl7aWYoby5kZWZhdWx0LmlzT3Blbilzd2l0Y2godC5rZXkpe2Nhc2VcIkVzY2FwZVwiOnJldHVybiByLm9uQWN0aW9uKGkuQ0FOQ0VMX0tFWSl9fSxiPWZ1bmN0aW9uKHQpe2lmKG8uZGVmYXVsdC5pc09wZW4pc3dpdGNoKHQua2V5KXtjYXNlXCJUYWJcIjpyZXR1cm4gZCh0KX19LG09ZnVuY3Rpb24odCl7aWYoby5kZWZhdWx0LmlzT3BlbilyZXR1cm5cIlRhYlwiPT09dC5rZXkmJnQuc2hpZnRLZXk/Zih0KTp2b2lkIDB9LGc9ZnVuY3Rpb24oKXt2YXIgdD1hLmdldE5vZGUoYyk7dCYmKHQudGFiSW5kZXg9MCx0LmZvY3VzKCkpfSx2PWZ1bmN0aW9uKCl7dmFyIHQ9YS5nZXROb2RlKGwpLGU9dC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2MpLG49ZS5sZW5ndGgtMSxvPWVbbl07byYmby5mb2N1cygpfSx3PWZ1bmN0aW9uKHQpe3RbdC5sZW5ndGgtMV0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixiKX0seD1mdW5jdGlvbih0KXt0WzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsbSl9LGg9ZnVuY3Rpb24oKXt2YXIgdD1hLmdldE5vZGUobCksZT10LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrYyk7ZS5sZW5ndGgmJih3KGUpLHgoZSkpfSx5PWZ1bmN0aW9uKHQpe2lmKGEuZ2V0Tm9kZSh1KT09PXQudGFyZ2V0KXJldHVybiByLm9uQWN0aW9uKGkuQ0FOQ0VMX0tFWSl9LGs9ZnVuY3Rpb24odCl7dmFyIGU9YS5nZXROb2RlKHUpO2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIseSksdCYmZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix5KX0sTz1mdW5jdGlvbih0KXtvLmRlZmF1bHQudGltZXImJmNsZWFyVGltZW91dChvLmRlZmF1bHQudGltZXIpLHQmJihvLmRlZmF1bHQudGltZXI9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gci5vbkFjdGlvbihpLkNBTkNFTF9LRVkpfSx0KSl9LF89ZnVuY3Rpb24odCl7dC5jbG9zZU9uRXNjP2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHApOmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHApLHQuZGFuZ2VyTW9kZT9nKCk6digpLGgoKSxrKHQuY2xvc2VPbkNsaWNrT3V0c2lkZSksTyh0LnRpbWVyKX07ZS5kZWZhdWx0PV99LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9bigzKSxhPW4oMzApLGk9e3RpdGxlOm51bGwsdGV4dDpudWxsLGljb246bnVsbCxidXR0b25zOnIuZGVmYXVsdEJ1dHRvbkxpc3QsY29udGVudDpudWxsLGNsYXNzTmFtZTpudWxsLGNsb3NlT25DbGlja091dHNpZGU6ITAsY2xvc2VPbkVzYzohMCxkYW5nZXJNb2RlOiExLHRpbWVyOm51bGx9LHM9T2JqZWN0LmFzc2lnbih7fSxpKTtlLnNldERlZmF1bHRzPWZ1bmN0aW9uKHQpe3M9T2JqZWN0LmFzc2lnbih7fSxpLHQpfTt2YXIgbD1mdW5jdGlvbih0KXt2YXIgZT10JiZ0LmJ1dHRvbixuPXQmJnQuYnV0dG9ucztyZXR1cm4gdm9pZCAwIT09ZSYmdm9pZCAwIT09biYmby50aHJvd0VycihcIkNhbm5vdCBzZXQgYm90aCAnYnV0dG9uJyBhbmQgJ2J1dHRvbnMnIG9wdGlvbnMhXCIpLHZvaWQgMCE9PWU/e2NvbmZpcm06ZX06bn0sYz1mdW5jdGlvbih0KXtyZXR1cm4gby5vcmRpbmFsU3VmZml4T2YodCsxKX0sdT1mdW5jdGlvbih0LGUpe28udGhyb3dFcnIoYyhlKStcIiBhcmd1bWVudCAoJ1wiK3QrXCInKSBpcyBpbnZhbGlkXCIpfSxkPWZ1bmN0aW9uKHQsZSl7dmFyIG49dCsxLHI9ZVtuXTtvLmlzUGxhaW5PYmplY3Qocil8fHZvaWQgMD09PXJ8fG8udGhyb3dFcnIoXCJFeHBlY3RlZCBcIitjKG4pK1wiIGFyZ3VtZW50ICgnXCIrcitcIicpIHRvIGJlIGEgcGxhaW4gb2JqZWN0XCIpfSxmPWZ1bmN0aW9uKHQsZSl7dmFyIG49dCsxLHI9ZVtuXTt2b2lkIDAhPT1yJiZvLnRocm93RXJyKFwiVW5leHBlY3RlZCBcIitjKG4pK1wiIGFyZ3VtZW50IChcIityK1wiKVwiKX0scD1mdW5jdGlvbih0LGUsbixyKXt2YXIgYT10eXBlb2YgZSxpPVwic3RyaW5nXCI9PT1hLHM9ZSBpbnN0YW5jZW9mIEVsZW1lbnQ7aWYoaSl7aWYoMD09PW4pcmV0dXJue3RleHQ6ZX07aWYoMT09PW4pcmV0dXJue3RleHQ6ZSx0aXRsZTpyWzBdfTtpZigyPT09bilyZXR1cm4gZChuLHIpLHtpY29uOmV9O3UoZSxuKX1lbHNle2lmKHMmJjA9PT1uKXJldHVybiBkKG4scikse2NvbnRlbnQ6ZX07aWYoby5pc1BsYWluT2JqZWN0KGUpKXJldHVybiBmKG4sciksZTt1KGUsbil9fTtlLmdldE9wdHM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspdFtlXT1hcmd1bWVudHNbZV07dmFyIG49e307dC5mb3JFYWNoKGZ1bmN0aW9uKGUsbyl7dmFyIHI9cCgwLGUsbyx0KTtPYmplY3QuYXNzaWduKG4scil9KTt2YXIgbz1sKG4pO3JldHVybiBuLmJ1dHRvbnM9ci5nZXRCdXR0b25MaXN0T3B0cyhvKSxkZWxldGUgbi5idXR0b24sbi5jb250ZW50PWEuZ2V0Q29udGVudE9wdHMobi5jb250ZW50KSxPYmplY3QuYXNzaWduKHt9LGkscyxuKX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9e2VsZW1lbnQ6XCJpbnB1dFwiLGF0dHJpYnV0ZXM6e3BsYWNlaG9sZGVyOlwiXCJ9fTtlLmdldENvbnRlbnRPcHRzPWZ1bmN0aW9uKHQpe3ZhciBlPXt9O3JldHVybiBvLmlzUGxhaW5PYmplY3QodCk/T2JqZWN0LmFzc2lnbihlLHQpOnQgaW5zdGFuY2VvZiBFbGVtZW50P3tlbGVtZW50OnR9OlwiaW5wdXRcIj09PXQ/cjpudWxsfX1dKX0pO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudmVyc2lvbiA9IHVuZGVmaW5lZDtcblxudmFyIF9zd2VldGFsZXJ0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9zd2VldGFsZXJ0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N3ZWV0YWxlcnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwbHVnaW4oVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUuJHN3YWwgPSBfc3dlZXRhbGVydDIuZGVmYXVsdDtcbn1cblxuLy8gSW5zdGFsbCBieSBkZWZhdWx0IGlmIHVzaW5nIHRoZSBzY3JpcHQgdGFnXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xuICB3aW5kb3cuVnVlLnVzZShwbHVnaW4pO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBwbHVnaW47XG5cbnZhciB2ZXJzaW9uID0gJ19fVkVSU0lPTl9fJztcbi8vIEV4cG9ydCBhbGwgY29tcG9uZW50cyB0b29cbmV4cG9ydHMudmVyc2lvbiA9IHZlcnNpb247XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3dhbC9kaXN0L3Z1ZS1zd2FsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInO1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcclxuXHJcbmltcG9ydCBWdWVTd2FsIGZyb20gJ3Z1ZS1zd2FsJ1xyXG5pbXBvcnQgVHJlZXNlbGVjdCBmcm9tICdAcmlvcGhhZS92dWUtdHJlZXNlbGVjdCdcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xyXG5cclxuaW1wb3J0IE1hdGVyaWFsUm93IGZyb20gXCIuL2NvbXBvbmVudHMvUm93cy9NYXRlcmlhbFJvdy52dWVcIjtcclxuXHJcblxyXG5cclxuVnVlLnVzZShWdWVSb3V0ZXIpO1xyXG5WdWUudXNlKFZ1ZXgpO1xyXG5WdWUudXNlKFZ1ZVN3YWwpO1xyXG5cclxuVnVlLmNvbXBvbmVudCgnbWF0ZXJpYWwtcm93JywgTWF0ZXJpYWxSb3cpO1xyXG5WdWUuY29tcG9uZW50KCd0cmVlc2VsZWN0JywgVHJlZXNlbGVjdCk7XHJcbi8vIEJvb3N0cmFwXHJcbi8vIEZpcnN0IHdlIG1ha2UgYXhpb3MgZ2xvYmFseSBhY2Nlc3NpYmxlXHJcbndpbmRvdy5heGlvcyA9IGF4aW9zO1xyXG5cclxuLy8gTmV4dCB3ZSBkbyBzb21lIHZ1ZSByb3V0ZXIsIHN0YXRlcywgYW5kIGFwcCBpbml0XHJcbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xyXG4gICAgcm91dGVzOiByb3V0ZXMsXHJcbiAgICBtb2RlOiAnaGlzdG9yeScsXHJcbn0pO1xyXG5cclxucm91dGVyLmFmdGVyRWFjaCgodG8sIGZyb20pID0+IHtcclxuICAgIGlmICh0eXBlb2YgdG8ubWV0YS50aXRsZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdG8ubWV0YS50aXRsZTtcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcclxuICAgIGVsOiAnI2FwcCcsXHJcbiAgICByb3V0ZXIsXHJcbiAgICBzdG9yZSxcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTAwNDRiZGYyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCZidXN0Q2FjaGUhLi9NYXRlcmlhbFJvdy52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwibGFzdCAyIHZlcnNpb25zXFxcIixcXFwiPiA1JSBpbiBCRVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9LFxcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCIsXFxcInRyYW5zZm9ybS1pbmxpbmUtZW52aXJvbm1lbnQtdmFyaWFibGVzXFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wJmJ1c3RDYWNoZSEuL01hdGVyaWFsUm93LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDA0NGJkZjJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vTWF0ZXJpYWxSb3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcUm93c1xcXFxNYXRlcmlhbFJvdy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDA0NGJkZjJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wMDQ0YmRmMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jvd3MvTWF0ZXJpYWxSb3cudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Sb3dzL01hdGVyaWFsUm93LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJjb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogXCIvbG9naW5cIixcclxuICAgICAgICBuYW1lOiBcImxvZ2luXCIsXHJcbiAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9Mb2dpbi52dWUnKSxcclxuICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIsSQxINuZyBuaOG6rXBcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgICBuYW1lOiBcImJhc2VcIixcclxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL0Jhc2UudnVlJyksXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogXCJkYXNoYm9hcmRcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFzZS5kYXNoYm9hcmRcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvRGFzaGJvYXJkLnZ1ZScpLFxyXG4gICAgICAgICAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkLhuqNuZyB0aMO0bmcgYsOhb1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IFwid29ya3NcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFzZS53b3Jrc1wiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9Xb3Jrcy52dWUnKSxcclxuICAgICAgICAgICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEYW5oIHPDoWNoIGPDtG5nIHRyxrDhu51uZ1wiLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBcIndvcmsvOmlkXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImJhc2Uud29ya1JlcG9ydFwiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9Xb3JrUmVwb3J0LnZ1ZScpLFxyXG4gICAgICAgICAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkLDoW8gY8OhbyBjaGkgdGnhur90XCIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IFwibWF0ZXJpYWxzXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImJhc2UubWF0ZXJpYWxzXCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4vY29tcG9uZW50cy9NYXRlcmlhbHMudnVlXCIpLFxyXG4gICAgICAgICAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRhbmggc8OhY2ggduG6rXQgdMawXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9yb3V0ZXMuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcclxuVnVlLnVzZShWdWV4KTtcclxuXHJcblxyXG5cclxuY29uc3Qgc3RvcmUgPSBuZXcgVnVleC5TdG9yZSh7XHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb25Ub2tlbjogXCJcIixcclxuICAgICAgICBhcGlCYXNlOiBcImh0dHA6Ly90cmFja2VyLmRldi9hcGkvdjFcIixcclxuICAgICAgICB1c2VyOiB7fSxcclxuICAgICAgICBjYXRlZ29yeUxpc3Q6IHt9LFxyXG5cclxuICAgIH0sXHJcbiAgICBtdXRhdGlvbnM6IHtcclxuICAgICAgICBTRVRfQVVUSE9SSVpBVElPTl9UT0tFTihzdGF0ZSwgdG9rZW4pIHtcclxuICAgICAgICAgICAgc3RhdGUuYXV0aG9yaXphdGlvblRva2VuID0gdG9rZW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBTRVRfVVNFUihzdGF0ZSwgdXNlck9iamVjdCkge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyID0gdXNlck9iamVjdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFVQREFURV9DQVRFR09SWV9MSVNUKHN0YXRlLCBsaXN0KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNhdGVnb3J5TGlzdCA9IGxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSA3Il0sInNvdXJjZVJvb3QiOiIifQ==