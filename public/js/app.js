webpackJsonp([5],{

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
    created: function created() {
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
        return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, "./resources/assets/js/components/Login.vue"));
    },
    meta: {
        title: "Đăng nhập"
    }
}, {
    path: "/",
    name: "base",
    component: function component() {
        return __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, "./resources/assets/js/components/Base.vue"));
    },
    children: [{
        path: "dashboard",
        name: "base.dashboard",
        component: function component() {
            return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, "./resources/assets/js/components/Dashboard.vue"));
        },
        meta: {
            title: "Bảng thông báo"
        }
    }, {
        path: "works",
        name: "base.works",
        component: function component() {
            return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, "./resources/assets/js/components/Works.vue"));
        },
        meta: {
            title: "Danh sách công trường"
        }
    }, {
        path: "work/:id",
        name: "base.workReport",
        component: function component() {
            return __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, "./resources/assets/js/components/WorkReport.vue"));
        },
        meta: {
            title: "Báo cáo chi tiết"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWdCO0FBQ007QUFDTDtBQUNLOztBQUVKO0FBQ0c7O0FBRUY7QUFDRDs7QUFFbEIsNENBQUksSUFBSTtBQUNSLDRDQUFJLElBQUk7QUFDUiw0Q0FBSSxJQUFJO0FBQ1IsNENBQUksSUFBSSxtREFBVTs7QUFFbEIsSUFBTSxhQUFhO1lBRWY7VUFBTTtBQUROLENBRFc7O0FBS2YsT0FBTyxVQUFVLFVBQUMsSUFBSSxNQUNsQjtRQUFJLE9BQU8sR0FBRyxLQUFLLFVBQVUsVUFDekI7aUJBQVMsUUFBUSxHQUFHLEtBQ3ZCO0FBQ0o7QUFKRDs7QUFNQSxJQUFNLFVBQVU7WUFFWjtXQUNBOztBQUFTLGdDQUVEO2lCQUFLLFFBQVEsS0FBSyxFQUFDLE1BQ3RCO0FBRUw7QUFKSTtBQUpZLGdDQVFOO29CQUNOOztZQUFJLENBQUMsS0FBSyxPQUFPLE1BQU0sb0JBQ25CO2dCQUFNLGNBQWMsS0FBSyxRQUFRLElBQ2pDO2dCQUFJLENBQUMsYUFDRDtxQkFDSDtBQUZELG1CQUlJO3FCQUFLLE9BQU8sT0FBTywyQkFDdEI7QUFDSjtBQUNEO1lBQUksS0FBSyxPQUFPLE1BQU0sb0JBQ2xCO0FBQ0E7aUJBQUssTUFBTSxTQUFTLFFBQVEsT0FBTyxtQkFBbUIsS0FBSyxPQUFPLE1BQ2xFO2lCQUFLLE1BQU0sSUFBTyxLQUFLLE9BQU8sTUFBTSxtQkFDM0IsS0FBSyxvQkFDRjtzQkFBSyxPQUFPLE9BQU8sWUFBWSxTQUFTLEtBQzNDO0FBSFQsZUFJUyxNQUFNLGlCQUNIO29CQUFJLE1BQU0sVUFBVSxLQUNoQjswQkFDSDtBQUZELHVCQUdJOzRCQUFRLElBQ1g7QUFDSjtBQUNSO0FBR1I7QUFuQ2U7QUFDaEIsQ0FEUSxFQW9DVCxPQUFPLFE7Ozs7Ozs7O0FDakVWLElBQU07VUFHRTtVQUNBO2VBQVc7ZUFBTSx5SEFBTztBQUN4Qjs7ZUFDVztBQUFQO0FBSkosQ0FGTztVQVdQO1VBQ0E7ZUFBVztlQUFNLHlIQUFPO0FBQ3hCOztjQUdRO2NBQ0E7bUJBQVc7bUJBQU0sNkhBQU87QUFDeEI7O21CQUNXO0FBQVA7QUFKSixLQUZFO2NBVUY7Y0FDQTttQkFBVzttQkFBTSx5SEFBTztBQUN4Qjs7bUJBQ1c7QUFBUDtBQUpKO2NBUUE7Y0FDQTttQkFBVzttQkFBTSwrSEFBTztBQUN4Qjs7bUJBQ1c7QUFBUDtBQUpKO0FBbkJSO0FBK0JSLHlEQUFlLFE7Ozs7Ozs7Ozs7O0FDekNDO0FBQ0M7QUFDakIsNENBQUksSUFBSTs7QUFJUixJQUFNLFlBQVksOENBQUs7OzRCQUdmO2lCQUNBO2NBRUo7QUFKSTs7QUFJTyxrRUFDaUIsT0FBTyxPQUMzQjtrQkFBTSxxQkFDVDtBQUNEO0FBSk8sb0NBSUUsT0FBTyxZQUNaO2tCQUFNLE9BQ1Q7QUFOTTtBQUNQO0FBTkosQ0FEVTs7QUFnQmQseURBQWUsTzs7Ozs7OztBQ3RCZix5QyIsImZpbGUiOiJcXGpzXFxhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcbmltcG9ydCBWdWVDb29raWUgZnJvbSBcInZ1ZS1jb29raWVcIjtcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBWdWVBeGlvcyBmcm9tICd2dWUtYXhpb3MnO1xuXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxuVnVlLnVzZShWdWVSb3V0ZXIpO1xuVnVlLnVzZShWdWV4KTtcblZ1ZS51c2UoVnVlQ29va2llKTtcblZ1ZS51c2UoVnVlQXhpb3MsIGF4aW9zKTtcblxuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gICAgcm91dGVzOiByb3V0ZXMsXG4gICAgbW9kZTogJ2hpc3RvcnknLFxufSk7XG5cbnJvdXRlci5hZnRlckVhY2goKHRvLCBmcm9tKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0by5tZXRhLnRpdGxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdG8ubWV0YS50aXRsZTtcbiAgICB9XG59KTtcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gICAgcm91dGVyLFxuICAgIHN0b3JlLFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9naW4oKSB7XG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogXCJsb2dpblwifSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy4kc3RvcmUuc3RhdGUuYXV0aG9yaXphdGlvblRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCBjb29raWVUb2tlbiA9IHRoaXMuJGNvb2tpZS5nZXQoJ2Nvb2tpZS10b2tlbicpO1xuICAgICAgICAgICAgaWYgKCFjb29raWVUb2tlbikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX0FVVEhPUklaQVRJT05fVE9LRU4nLCBjb29raWVUb2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuJHN0b3JlLnN0YXRlLmF1dGhvcml6YXRpb25Ub2tlbikge1xuICAgICAgICAgICAgLy8gZG8gYSBjYWxsIHRvIC4vdXNlclxuICAgICAgICAgICAgdGhpcy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gdGhpcy4kc3RvcmUuc3RhdGUuYXV0aG9yaXphdGlvblRva2VuO1xuICAgICAgICAgICAgdGhpcy5heGlvcy5nZXQoYCR7dGhpcy4kc3RvcmUuc3RhdGUuYXBpQmFzZX0vdXNlcmApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX1VTRVInLCByZXNwb25zZS5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgXG4gICAgfSxcbn0pLiRtb3VudCgnI2FwcCcpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwiY29uc3Qgcm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6IFwiL2xvZ2luXCIsXHJcbiAgICAgICAgbmFtZTogXCJsb2dpblwiLFxyXG4gICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvTG9naW4udnVlJyksXHJcbiAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICB0aXRsZTogXCLEkMSDbmcgbmjhuq1wXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogXCIvXCIsXHJcbiAgICAgICAgbmFtZTogXCJiYXNlXCIsXHJcbiAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9CYXNlLnZ1ZScpLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IFwiZGFzaGJvYXJkXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImJhc2UuZGFzaGJvYXJkXCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL0Rhc2hib2FyZC52dWUnKSxcclxuICAgICAgICAgICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJC4bqjbmcgdGjDtG5nIGLDoW9cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBcIndvcmtzXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImJhc2Uud29ya3NcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvV29ya3MudnVlJyksXHJcbiAgICAgICAgICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGFuaCBzw6FjaCBjw7RuZyB0csaw4budbmdcIixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogXCJ3b3JrLzppZFwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJiYXNlLndvcmtSZXBvcnRcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvV29ya1JlcG9ydC52dWUnKSxcclxuICAgICAgICAgICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJCw6FvIGPDoW8gY2hpIHRp4bq/dFwiLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcblxyXG4gICAgXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JvdXRlcy5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xyXG5WdWUudXNlKFZ1ZXgpO1xyXG5cclxuXHJcblxyXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvblRva2VuOiBcIlwiLFxyXG4gICAgICAgIGFwaUJhc2U6IFwiaHR0cDovL3RyYWNrZXIuZGV2L2FwaS92MVwiLFxyXG4gICAgICAgIHVzZXI6IHt9LFxyXG4gICAgfSxcclxuICAgIG11dGF0aW9uczoge1xyXG4gICAgICAgIFNFVF9BVVRIT1JJWkFUSU9OX1RPS0VOKHN0YXRlLCB0b2tlbikge1xyXG4gICAgICAgICAgICBzdGF0ZS5hdXRob3JpemF0aW9uVG9rZW4gPSB0b2tlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFNFVF9VU0VSKHN0YXRlLCB1c2VyT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXIgPSB1c2VyT2JqZWN0O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gNSJdLCJzb3VyY2VSb290IjoiIn0=