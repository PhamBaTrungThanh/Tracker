webpackJsonp([2],{

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
        } else {
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
var Login = function Login() {
    return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "./resources/assets/js/components/Login.vue"));
};
var routes = [{
    path: "/login",
    name: "login",
    component: Login,
    meta: {
        title: "Đăng nhập"
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWdCO0FBQ007QUFDTDtBQUNLOztBQUVKO0FBQ0c7O0FBRUY7QUFDRDs7QUFFbEIsNENBQUksSUFBSTtBQUNSLDRDQUFJLElBQUk7QUFDUiw0Q0FBSSxJQUFJO0FBQ1IsNENBQUksSUFBSSxtREFBVTs7QUFFbEIsSUFBTSxhQUFhO1lBRWY7VUFBTTtBQUROLENBRFc7O0FBS2YsT0FBTyxVQUFVLFVBQUMsSUFBSSxNQUNsQjtRQUFJLE9BQU8sR0FBRyxLQUFLLFVBQVUsVUFDekI7aUJBQVMsUUFBUSxHQUFHLEtBQ3ZCO0FBQ0o7QUFKRDs7QUFNQSxJQUFNLFVBQVU7WUFFWjtXQUNBOztBQUFTLGdDQUVEO2lCQUFLLFFBQVEsS0FBSyxFQUFDLE1BQ3RCO0FBRUw7QUFKSTtBQUpZLGdDQVFOO29CQUNOOztZQUFJLENBQUMsS0FBSyxPQUFPLE1BQU0sb0JBQ25CO2dCQUFNLGNBQWMsS0FBSyxRQUFRLElBQ2pDO2dCQUFJLENBQUMsYUFDRDtxQkFDSDtBQUZELG1CQUlJO3FCQUFLLE9BQU8sT0FBTywyQkFDdEI7QUFDSjtBQVJELGVBU0k7QUFDQTtpQkFBSyxNQUFNLFNBQVMsUUFBUSxPQUFPLG1CQUFtQixLQUFLLE9BQU8sTUFDbEU7aUJBQUssTUFBTSxJQUFPLEtBQUssT0FBTyxNQUFNLG1CQUMzQixLQUFLLG9CQUNGO3NCQUFLLE9BQU8sT0FBTyxZQUFZLFNBQVMsS0FDM0M7QUFIVCxlQUlTLE1BQU0saUJBQ0g7b0JBQUksTUFBTSxVQUFVLEtBQ2hCOzBCQUNIO0FBRkQsdUJBR0k7NEJBQVEsSUFDWDtBQUNKO0FBQ1I7QUFHUjtBQWxDZTtBQUNoQixDQURRLEVBbUNULE9BQU8sUTs7Ozs7Ozs7QUNoRVYsSUFBTSxRQUFRO1dBQU0seUhBQU87QUFBM0I7QUFDQSxJQUFNO1VBR0U7VUFDQTtlQUNBOztlQUNXO0FBQVA7QUFKSixDQUZPO0FBV2YseURBQWUsUTs7Ozs7Ozs7Ozs7QUNaQztBQUNDO0FBQ2pCLDRDQUFJLElBQUk7O0FBSVIsSUFBTSxZQUFZLDhDQUFLOzs0QkFHZjtpQkFDQTtjQUVKO0FBSkk7O0FBSU8sa0VBQ2lCLE9BQU8sT0FDM0I7a0JBQU0scUJBQ1Q7QUFDRDtBQUpPLG9DQUlFLE9BQU8sWUFDWjtrQkFBTSxPQUNUO0FBTk07QUFDUDtBQU5KLENBRFU7O0FBZ0JkLHlEQUFlLE87Ozs7Ozs7QUN0QmYseUMiLCJmaWxlIjoiXFxqc1xcYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5pbXBvcnQgVnVlQ29va2llIGZyb20gXCJ2dWUtY29va2llXCI7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgVnVlQXhpb3MgZnJvbSAndnVlLWF4aW9zJztcblxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cblZ1ZS51c2UoVnVlUm91dGVyKTtcblZ1ZS51c2UoVnVleCk7XG5WdWUudXNlKFZ1ZUNvb2tpZSk7XG5WdWUudXNlKFZ1ZUF4aW9zLCBheGlvcyk7XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xuICAgIHJvdXRlczogcm91dGVzLFxuICAgIG1vZGU6ICdoaXN0b3J5Jyxcbn0pO1xuXG5yb3V0ZXIuYWZ0ZXJFYWNoKCh0bywgZnJvbSkgPT4ge1xuICAgIGlmICh0eXBlb2YgdG8ubWV0YS50aXRsZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRvLm1ldGEudGl0bGU7XG4gICAgfVxufSk7XG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICAgIHJvdXRlcixcbiAgICBzdG9yZSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGxvZ2luKCkge1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6IFwibG9naW5cIn0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBpZiAoIXRoaXMuJHN0b3JlLnN0YXRlLmF1dGhvcml6YXRpb25Ub2tlbikge1xuICAgICAgICAgICAgY29uc3QgY29va2llVG9rZW4gPSB0aGlzLiRjb29raWUuZ2V0KCdjb29raWUtdG9rZW4nKTtcbiAgICAgICAgICAgIGlmICghY29va2llVG9rZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9BVVRIT1JJWkFUSU9OX1RPS0VOJywgY29va2llVG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZG8gYSBjYWxsIHRvIC4vdXNlclxuICAgICAgICAgICAgdGhpcy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gdGhpcy4kc3RvcmUuc3RhdGUuYXV0aG9yaXphdGlvblRva2VuO1xuICAgICAgICAgICAgdGhpcy5heGlvcy5nZXQoYCR7dGhpcy4kc3RvcmUuc3RhdGUuYXBpQmFzZX0vdXNlcmApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX1VTRVInLCByZXNwb25zZS5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgXG4gICAgfSxcbn0pLiRtb3VudCgnI2FwcCcpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwiY29uc3QgTG9naW4gPSAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9Mb2dpbi52dWUnKTtcclxuY29uc3Qgcm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6IFwiL2xvZ2luXCIsXHJcbiAgICAgICAgbmFtZTogXCJsb2dpblwiLFxyXG4gICAgICAgIGNvbXBvbmVudDogTG9naW4sXHJcbiAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICB0aXRsZTogXCLEkMSDbmcgbmjhuq1wXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcclxuXTtcclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcm91dGVzLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXHJcblZ1ZS51c2UoVnVleCk7XHJcblxyXG5cclxuXHJcbmNvbnN0IHN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xyXG4gICAgc3RhdGU6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uVG9rZW46IFwiXCIsXHJcbiAgICAgICAgYXBpQmFzZTogXCJodHRwOi8vdHJhY2tlci5kZXYvYXBpL3YxXCIsXHJcbiAgICAgICAgdXNlcjoge30sXHJcbiAgICB9LFxyXG4gICAgbXV0YXRpb25zOiB7XHJcbiAgICAgICAgU0VUX0FVVEhPUklaQVRJT05fVE9LRU4oc3RhdGUsIHRva2VuKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmF1dGhvcml6YXRpb25Ub2tlbiA9IHRva2VuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU0VUX1VTRVIoc3RhdGUsIHVzZXJPYmplY3QpIHtcclxuICAgICAgICAgICAgc3RhdGUudXNlciA9IHVzZXJPYmplY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==