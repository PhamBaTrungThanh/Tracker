webpackJsonp([4],{

/***/ "./resources/assets/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_cookie__ = __webpack_require__("./node_modules/vue-cookie/src/vue-cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_axios__ = __webpack_require__("./node_modules/vue-axios/dist/vue-axios.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("./resources/assets/js/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store__ = __webpack_require__("./resources/assets/js/store.js");













__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vuex__["default"]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vue_cookie___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5_vue_axios___default.a, __WEBPACK_IMPORTED_MODULE_4_axios___default.a);

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
    router: router,
    store: __WEBPACK_IMPORTED_MODULE_7__store__["a" /* default */],
    methods: {
        login: function login() {
            this.$router.push({ name: "login" });
        }
    },
    mounted: function mounted() {
        var _this = this;

        if (!this.$store.state.authorizationToken) {
            var cookieToken = this.$cookie.get('cookie-token');
            if (!cookieToken) {
                this.login();
            } else {
                this.$store.commit('SET_AUTHORIZATION_TOKEN', cookieToken);
            }
        }
        if (this.$store.state.authorizationToken) {
            // do a call to ./user
            this.axios.defaults.headers.common['Authorization'] = this.$store.state.authorizationToken;
            this.axios.get(this.$store.state.apiBase + '/user').then(function (response) {
                _this.$store.commit('SET_USER', response.data.data);
                _this.$router.push({ name: "base.dashboard" });
            }).catch(function (error) {
                if (error.status == 401) {
                    _this.login();
                } else {
                    console.log(error);
                }
            });
        }
    }
}).$mount('#app');

/***/ }),

/***/ "./resources/assets/js/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var routes = [{
    path: "/login",
    name: "login",
    component: function component() {
        return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, "./resources/assets/js/components/Login.vue"));
    },
    meta: {
        title: "Đăng nhập"
    }
}, {
    path: "/",
    name: "base",
    component: function component() {
        return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, "./resources/assets/js/components/Base.vue"));
    },
    children: [{
        path: "dashboard",
        name: "base.dashboard",
        component: function component() {
            return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, "./resources/assets/js/components/Dashboard.vue"));
        },
        meta: {
            title: "Bảng thông báo"
        }
    }, {
        path: "works",
        name: "base.works",
        component: function component() {
            return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, "./resources/assets/js/components/Works.vue"));
        },
        meta: {
            title: "Danh sách công trường"
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
        user: {}
    },
    mutations: {
        SET_AUTHORIZATION_TOKEN: function SET_AUTHORIZATION_TOKEN(state, token) {
            state.authorizationToken = token;
        },
        SET_USER: function SET_USER(state, userObject) {
            state.user = userObject;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWdCO0FBQ007QUFDTDtBQUNLOztBQUVKO0FBQ0c7O0FBRUY7QUFDRDs7QUFFbEIsNENBQUksSUFBSTtBQUNSLDRDQUFJLElBQUk7QUFDUiw0Q0FBSSxJQUFJO0FBQ1IsNENBQUksSUFBSSxtREFBVTs7QUFFbEIsSUFBTSxhQUFhO1lBRWY7VUFBTTtBQUROLENBRFc7O0FBS2YsT0FBTyxVQUFVLFVBQUMsSUFBSSxNQUNsQjtRQUFJLE9BQU8sR0FBRyxLQUFLLFVBQVUsVUFDekI7aUJBQVMsUUFBUSxHQUFHLEtBQ3ZCO0FBQ0o7QUFKRDs7QUFNQSxJQUFNLFVBQVU7WUFFWjtXQUNBOztBQUFTLGdDQUVEO2lCQUFLLFFBQVEsS0FBSyxFQUFDLE1BQ3RCO0FBRUw7QUFKSTtBQUpZLGdDQVFOO29CQUNOOztZQUFJLENBQUMsS0FBSyxPQUFPLE1BQU0sb0JBQ25CO2dCQUFNLGNBQWMsS0FBSyxRQUFRLElBQ2pDO2dCQUFJLENBQUMsYUFDRDtxQkFDSDtBQUZELG1CQUlJO3FCQUFLLE9BQU8sT0FBTywyQkFDdEI7QUFDSjtBQUNEO1lBQUksS0FBSyxPQUFPLE1BQU0sb0JBQ2xCO0FBQ0E7aUJBQUssTUFBTSxTQUFTLFFBQVEsT0FBTyxtQkFBbUIsS0FBSyxPQUFPLE1BQ2xFO2lCQUFLLE1BQU0sSUFBTyxLQUFLLE9BQU8sTUFBTSxtQkFDM0IsS0FBSyxvQkFDRjtzQkFBSyxPQUFPLE9BQU8sWUFBWSxTQUFTLEtBQ3hDO3NCQUFLLFFBQVEsS0FBSyxFQUFDLE1BQ3RCO0FBSlQsZUFLUyxNQUFNLGlCQUNIO29CQUFJLE1BQU0sVUFBVSxLQUNoQjswQkFDSDtBQUZELHVCQUdJOzRCQUFRLElBQ1g7QUFDSjtBQUNSO0FBR1I7QUFwQ2U7QUFDaEIsQ0FEUSxFQXFDVCxPQUFPLFE7Ozs7Ozs7O0FDbEVWLElBQU07VUFHRTtVQUNBO2VBQVc7ZUFBTSx5SEFBTztBQUN4Qjs7ZUFDVztBQUFQO0FBSkosQ0FGTztVQVdQO1VBQ0E7ZUFBVztlQUFNLHdIQUFPO0FBQ3hCOztjQUdRO2NBQ0E7bUJBQVc7bUJBQU0sNkhBQU87QUFDeEI7O21CQUNXO0FBQVA7QUFKSixLQUZFO2NBVUY7Y0FDQTttQkFBVzttQkFBTSx5SEFBTztBQUN4Qjs7bUJBQ1c7QUFBUDtBQUpKO0FBWlI7QUF3QlIseURBQWUsUTs7Ozs7Ozs7Ozs7QUNsQ0M7QUFDQztBQUNqQiw0Q0FBSSxJQUFJOztBQUlSLElBQU0sWUFBWSw4Q0FBSzs7NEJBR2Y7aUJBQ0E7Y0FFSjtBQUpJOztBQUlPLGtFQUNpQixPQUFPLE9BQzNCO2tCQUFNLHFCQUNUO0FBQ0Q7QUFKTyxvQ0FJRSxPQUFPLFlBQ1o7a0JBQU0sT0FDVDtBQU5NO0FBQ1A7QUFOSixDQURVOztBQWdCZCx5REFBZSxPOzs7Ozs7O0FDdEJmLHlDIiwiZmlsZSI6IlxcanNcXGFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IFZ1ZUNvb2tpZSBmcm9tIFwidnVlLWNvb2tpZVwiO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFZ1ZUF4aW9zIGZyb20gJ3Z1ZS1heGlvcyc7XG5cbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5WdWUudXNlKFZ1ZXgpO1xuVnVlLnVzZShWdWVDb29raWUpO1xuVnVlLnVzZShWdWVBeGlvcywgYXhpb3MpO1xuXG5jb25zdCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcbiAgICByb3V0ZXM6IHJvdXRlcyxcbiAgICBtb2RlOiAnaGlzdG9yeScsXG59KTtcblxucm91dGVyLmFmdGVyRWFjaCgodG8sIGZyb20pID0+IHtcbiAgICBpZiAodHlwZW9mIHRvLm1ldGEudGl0bGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSB0by5tZXRhLnRpdGxlO1xuICAgIH1cbn0pO1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICByb3V0ZXIsXG4gICAgc3RvcmUsXG4gICAgbWV0aG9kczoge1xuICAgICAgICBsb2dpbigpIHtcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiBcImxvZ2luXCJ9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLiRzdG9yZS5zdGF0ZS5hdXRob3JpemF0aW9uVG9rZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZVRva2VuID0gdGhpcy4kY29va2llLmdldCgnY29va2llLXRva2VuJyk7XG4gICAgICAgICAgICBpZiAoIWNvb2tpZVRva2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfQVVUSE9SSVpBVElPTl9UT0tFTicsIGNvb2tpZVRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy4kc3RvcmUuc3RhdGUuYXV0aG9yaXphdGlvblRva2VuKSB7XG4gICAgICAgICAgICAvLyBkbyBhIGNhbGwgdG8gLi91c2VyXG4gICAgICAgICAgICB0aGlzLmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSB0aGlzLiRzdG9yZS5zdGF0ZS5hdXRob3JpemF0aW9uVG9rZW47XG4gICAgICAgICAgICB0aGlzLmF4aW9zLmdldChgJHt0aGlzLiRzdG9yZS5zdGF0ZS5hcGlCYXNlfS91c2VyYClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfVVNFUicsIHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogXCJiYXNlLmRhc2hib2FyZFwifSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICBcbiAgICB9LFxufSkuJG1vdW50KCcjYXBwJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJjb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogXCIvbG9naW5cIixcclxuICAgICAgICBuYW1lOiBcImxvZ2luXCIsXHJcbiAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9Mb2dpbi52dWUnKSxcclxuICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIsSQxINuZyBuaOG6rXBcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgICBuYW1lOiBcImJhc2VcIixcclxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL0Jhc2UudnVlJyksXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogXCJkYXNoYm9hcmRcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFzZS5kYXNoYm9hcmRcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvRGFzaGJvYXJkLnZ1ZScpLFxyXG4gICAgICAgICAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkLhuqNuZyB0aMO0bmcgYsOhb1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IFwid29ya3NcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFzZS53b3Jrc1wiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9Xb3Jrcy52dWUnKSxcclxuICAgICAgICAgICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEYW5oIHPDoWNoIGPDtG5nIHRyxrDhu51uZ1wiLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcblxyXG4gICAgXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JvdXRlcy5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xyXG5WdWUudXNlKFZ1ZXgpO1xyXG5cclxuXHJcblxyXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvblRva2VuOiBcIlwiLFxyXG4gICAgICAgIGFwaUJhc2U6IFwiaHR0cDovL3RyYWNrZXIuZGV2L2FwaS92MVwiLFxyXG4gICAgICAgIHVzZXI6IHt9LFxyXG4gICAgfSxcclxuICAgIG11dGF0aW9uczoge1xyXG4gICAgICAgIFNFVF9BVVRIT1JJWkFUSU9OX1RPS0VOKHN0YXRlLCB0b2tlbikge1xyXG4gICAgICAgICAgICBzdGF0ZS5hdXRob3JpemF0aW9uVG9rZW4gPSB0b2tlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFNFVF9VU0VSKHN0YXRlLCB1c2VyT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXIgPSB1c2VyT2JqZWN0O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gNCJdLCJzb3VyY2VSb290IjoiIn0=