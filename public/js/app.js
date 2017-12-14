webpackJsonp([7],{

/***/ "./resources/assets/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__("./resources/assets/js/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__("./resources/assets/js/store.js");










__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vuex__["default"]);

// Boostrap
// First we make axios globaly accessible
window.axios = __WEBPACK_IMPORTED_MODULE_3_axios___default.a;

// Next we do some vue router, states, and app init
var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
    routes: __WEBPACK_IMPORTED_MODULE_4__routes__["a" /* default */],
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
    store: __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */]
});

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
        return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, "./resources/assets/js/components/Base.vue"));
    },
    children: [{
        path: "dashboard",
        name: "base.dashboard",
        component: function component() {
            return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, "./resources/assets/js/components/Dashboard.vue"));
        },
        meta: {
            title: "Bảng thông báo"
        }
    }, {
        path: "works",
        name: "base.works",
        component: function component() {
            return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "./resources/assets/js/components/Works.vue"));
        },
        meta: {
            title: "Danh sách công trường"
        }
    }, {
        path: "work/:id",
        name: "base.workReport",
        component: function component() {
            return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "./resources/assets/js/components/WorkReport.vue"));
        },
        meta: {
            title: "Báo cáo chi tiết"
        }
    }, {
        path: "materials",
        name: "base.materials",
        component: function component() {
            return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "./resources/assets/js/components/Materials.vue"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZ0I7QUFDTTtBQUNMOztBQUdDO0FBQ0M7QUFDRDs7QUFFbEIsNENBQUksSUFBSTtBQUNSLDRDQUFJLElBQUk7O0FBRVI7QUFDQTtBQUNBLE9BQU8sUUFBUTs7QUFFZjtBQUNBLElBQU0sYUFBYTtZQUVmO1VBQU07QUFETixDQURXOztBQUtmLE9BQU8sVUFBVSxVQUFDLElBQUksTUFDbEI7UUFBSSxPQUFPLEdBQUcsS0FBSyxVQUFVLFVBQ3pCO2lCQUFTLFFBQVEsR0FBRyxLQUN2QjtBQUNKO0FBSkQ7O0FBTUEsSUFBTSxVQUFVO1FBRVo7WUFDQTtXQUhnQjtBQUNoQixDQURRLEU7Ozs7Ozs7O0FDOUJaLElBQU07VUFHRTtVQUNBO2VBQVc7ZUFBTSx5SEFBTztBQUN4Qjs7ZUFDVztBQUFQO0FBSkosQ0FGTztVQVdQO1VBQ0E7ZUFBVztlQUFNLHdIQUFPO0FBQ3hCOztjQUdRO2NBQ0E7bUJBQVc7bUJBQU0sNkhBQU87QUFDeEI7O21CQUNXO0FBQVA7QUFKSixLQUZFO2NBVUY7Y0FDQTttQkFBVzttQkFBTSx5SEFBTztBQUN4Qjs7bUJBQ1c7QUFBUDtBQUpKO2NBUUE7Y0FDQTttQkFBVzttQkFBTSw4SEFBTztBQUN4Qjs7bUJBQ1c7QUFBUDtBQUpKO2NBUUE7Y0FDQTttQkFBVzttQkFBTSw2SEFBTztBQUN4Qjs7bUJBQ1c7QUFBUDtBQUpKO0FBMUJSO0FBc0NSLHlEQUFlLFE7Ozs7Ozs7Ozs7O0FDaERDO0FBQ0M7QUFDakIsNENBQUksSUFBSTs7QUFJUixJQUFNLFlBQVksOENBQUs7OzRCQUdmO2lCQUNBO2NBQ0E7c0JBR0o7O0FBTkk7O0FBTU8sa0VBQ2lCLE9BQU8sT0FDM0I7a0JBQU0scUJBQ1Q7QUFDRDtBQUpPLG9DQUlFLE9BQU8sWUFDWjtrQkFBTSxPQUNUO0FBQ0Q7QUFQTyw0REFPYyxPQUFPLE1BQ3hCO2tCQUFNLGVBQ1Q7QUFUTTtBQUNQO0FBUkosQ0FEVTs7QUFxQmQseURBQWUsTzs7Ozs7OztBQzNCZix5QyIsImZpbGUiOiJcXGpzXFxhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcblxuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cblZ1ZS51c2UoVnVlUm91dGVyKTtcblZ1ZS51c2UoVnVleCk7XG5cbi8vIEJvb3N0cmFwXG4vLyBGaXJzdCB3ZSBtYWtlIGF4aW9zIGdsb2JhbHkgYWNjZXNzaWJsZVxud2luZG93LmF4aW9zID0gYXhpb3M7XG5cbi8vIE5leHQgd2UgZG8gc29tZSB2dWUgcm91dGVyLCBzdGF0ZXMsIGFuZCBhcHAgaW5pdFxuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gICAgcm91dGVzOiByb3V0ZXMsXG4gICAgbW9kZTogJ2hpc3RvcnknLFxufSk7XG5cbnJvdXRlci5hZnRlckVhY2goKHRvLCBmcm9tKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0by5tZXRhLnRpdGxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdG8ubWV0YS50aXRsZTtcbiAgICB9XG59KTtcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbiAgICByb3V0ZXIsXG4gICAgc3RvcmUsXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsImNvbnN0IHJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9sb2dpblwiLFxyXG4gICAgICAgIG5hbWU6IFwibG9naW5cIixcclxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL0xvZ2luLnZ1ZScpLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwixJDEg25nIG5o4bqtcFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgICAgIG5hbWU6IFwiYmFzZVwiLFxyXG4gICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvQmFzZS52dWUnKSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBcImRhc2hib2FyZFwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJiYXNlLmRhc2hib2FyZFwiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9EYXNoYm9hcmQudnVlJyksXHJcbiAgICAgICAgICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQuG6o25nIHRow7RuZyBiw6FvXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogXCJ3b3Jrc1wiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJiYXNlLndvcmtzXCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL1dvcmtzLnZ1ZScpLFxyXG4gICAgICAgICAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRhbmggc8OhY2ggY8O0bmcgdHLGsOG7nW5nXCIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IFwid29yay86aWRcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFzZS53b3JrUmVwb3J0XCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL1dvcmtSZXBvcnQudnVlJyksXHJcbiAgICAgICAgICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQsOhbyBjw6FvIGNoaSB0aeG6v3RcIixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogXCJtYXRlcmlhbHNcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFzZS5tYXRlcmlhbHNcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi9jb21wb25lbnRzL01hdGVyaWFscy52dWVcIiksXHJcbiAgICAgICAgICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGFuaCBzw6FjaCB24bqtdCB0xrBcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcblxyXG4gICAgXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JvdXRlcy5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xyXG5WdWUudXNlKFZ1ZXgpO1xyXG5cclxuXHJcblxyXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvblRva2VuOiBcIlwiLFxyXG4gICAgICAgIGFwaUJhc2U6IFwiaHR0cDovL3RyYWNrZXIuZGV2L2FwaS92MVwiLFxyXG4gICAgICAgIHVzZXI6IHt9LFxyXG4gICAgICAgIGNhdGVnb3J5TGlzdDoge30sXHJcblxyXG4gICAgfSxcclxuICAgIG11dGF0aW9uczoge1xyXG4gICAgICAgIFNFVF9BVVRIT1JJWkFUSU9OX1RPS0VOKHN0YXRlLCB0b2tlbikge1xyXG4gICAgICAgICAgICBzdGF0ZS5hdXRob3JpemF0aW9uVG9rZW4gPSB0b2tlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFNFVF9VU0VSKHN0YXRlLCB1c2VyT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXIgPSB1c2VyT2JqZWN0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgVVBEQVRFX0NBVEVHT1JZX0xJU1Qoc3RhdGUsIGxpc3QpIHtcclxuICAgICAgICAgICAgc3RhdGUuY2F0ZWdvcnlMaXN0ID0gbGlzdDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDciXSwic291cmNlUm9vdCI6IiJ9