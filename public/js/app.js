webpackJsonp([6],{

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
            console.warn("No token found, process to checking cookies");
            var cookieToken = this.$cookie.get('cookie-token');
            if (!cookieToken) {
                console.error("Cookies's empty, proceed to login");
                this.login();
            } else {
                console.info("Token found from cookies");
                this.$store.commit('SET_AUTHORIZATION_TOKEN', cookieToken);
            }
        }
        if (this.$store.state.authorizationToken) {
            // do a call to ./user
            this.axios.defaults.headers.common['Authorization'] = this.$store.state.authorizationToken;
            this.axios.get(this.$store.state.apiBase + '/user').then(function (response) {
                console.info("Token is legit");
                _this.$store.commit('SET_USER', response.data.data);
            }).catch(function (error) {
                console.log(error.response.status);
                if (error.response.status == 401) {
                    console.error("Token ilegal, proceed to login");
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
        return __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, "./resources/assets/js/components/Login.vue"));
    },
    meta: {
        title: "Đăng nhập"
    }
}, {
    path: "/",
    name: "base",
    component: function component() {
        return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, "./resources/assets/js/components/Base.vue"));
    },
    children: [{
        path: "dashboard",
        name: "base.dashboard",
        component: function component() {
            return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, "./resources/assets/js/components/Dashboard.vue"));
        },
        meta: {
            title: "Bảng thông báo"
        }
    }, {
        path: "works",
        name: "base.works",
        component: function component() {
            return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, "./resources/assets/js/components/Works.vue"));
        },
        meta: {
            title: "Danh sách công trường"
        }
    }, {
        path: "work/:id",
        name: "base.workReport",
        component: function component() {
            return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, "./resources/assets/js/components/WorkReport.vue"));
        },
        meta: {
            title: "Báo cáo chi tiết"
        }
    }, {
        path: "materials",
        name: "base.materials",
        component: function component() {
            return __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, "./resources/assets/js/components/Materials.vue"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWdCO0FBQ007QUFDTDtBQUNLOztBQUVKO0FBQ0c7O0FBRUY7QUFDRDs7QUFFbEIsNENBQUksSUFBSTtBQUNSLDRDQUFJLElBQUk7QUFDUiw0Q0FBSSxJQUFJO0FBQ1IsNENBQUksSUFBSSxtREFBVTs7QUFFbEIsSUFBTSxhQUFhO1lBRWY7VUFBTTtBQUROLENBRFc7O0FBS2YsT0FBTyxVQUFVLFVBQUMsSUFBSSxNQUNsQjtRQUFJLE9BQU8sR0FBRyxLQUFLLFVBQVUsVUFDekI7aUJBQVMsUUFBUSxHQUFHLEtBQ3ZCO0FBQ0o7QUFKRDs7QUFNQSxJQUFNLFVBQVU7WUFFWjtXQUNBOztBQUFTLGdDQUVEO2lCQUFLLFFBQVEsS0FBSyxFQUFDLE1BQ3RCO0FBRUw7QUFKSTtBQUpZLGdDQVFOO29CQUNOOztZQUFJLENBQUMsS0FBSyxPQUFPLE1BQU0sb0JBQ25CO29CQUFRLEtBQ1I7Z0JBQU0sY0FBYyxLQUFLLFFBQVEsSUFDakM7Z0JBQUksQ0FBQyxhQUNEO3dCQUFRLE1BQ1I7cUJBQ0g7QUFIRCxtQkFLSTt3QkFBUSxLQUNSO3FCQUFLLE9BQU8sT0FBTywyQkFDdEI7QUFDSjtBQUNEO1lBQUksS0FBSyxPQUFPLE1BQU0sb0JBQ2xCO0FBQ0E7aUJBQUssTUFBTSxTQUFTLFFBQVEsT0FBTyxtQkFBbUIsS0FBSyxPQUFPLE1BQ2xFO2lCQUFLLE1BQU0sSUFBTyxLQUFLLE9BQU8sTUFBTSxtQkFDM0IsS0FBSyxvQkFDRjt3QkFBUSxLQUNSO3NCQUFLLE9BQU8sT0FBTyxZQUFZLFNBQVMsS0FDM0M7QUFKVCxlQUtTLE1BQU0saUJBQ0g7d0JBQVEsSUFBSSxNQUFNLFNBQ2xCO29CQUFJLE1BQU0sU0FBUyxVQUFVLEtBQ3pCOzRCQUFRLE1BQ1I7MEJBQ0g7QUFIRCx1QkFJSTs0QkFBUSxJQUNYO0FBQ0o7QUFDUjtBQUdSO0FBekNlO0FBQ2hCLENBRFEsRUEwQ1QsT0FBTyxROzs7Ozs7OztBQ3ZFVixJQUFNO1VBR0U7VUFDQTtlQUFXO2VBQU0sMEhBQU87QUFDeEI7O2VBQ1c7QUFBUDtBQUpKLENBRk87VUFXUDtVQUNBO2VBQVc7ZUFBTSx5SEFBTztBQUN4Qjs7Y0FHUTtjQUNBO21CQUFXO21CQUFNLDhIQUFPO0FBQ3hCOzttQkFDVztBQUFQO0FBSkosS0FGRTtjQVVGO2NBQ0E7bUJBQVc7bUJBQU0seUhBQU87QUFDeEI7O21CQUNXO0FBQVA7QUFKSjtjQVFBO2NBQ0E7bUJBQVc7bUJBQU0sOEhBQU87QUFDeEI7O21CQUNXO0FBQVA7QUFKSjtjQVFBO2NBQ0E7bUJBQVc7bUJBQU0sOEhBQU87QUFDeEI7O21CQUNXO0FBQVA7QUFKSjtBQTFCUjtBQXNDUix5REFBZSxROzs7Ozs7Ozs7OztBQ2hEQztBQUNDO0FBQ2pCLDRDQUFJLElBQUk7O0FBSVIsSUFBTSxZQUFZLDhDQUFLOzs0QkFHZjtpQkFDQTtjQUVKO0FBSkk7O0FBSU8sa0VBQ2lCLE9BQU8sT0FDM0I7a0JBQU0scUJBQ1Q7QUFDRDtBQUpPLG9DQUlFLE9BQU8sWUFDWjtrQkFBTSxPQUNUO0FBTk07QUFDUDtBQU5KLENBRFU7O0FBZ0JkLHlEQUFlLE87Ozs7Ozs7QUN0QmYseUMiLCJmaWxlIjoiXFxqc1xcYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5pbXBvcnQgVnVlQ29va2llIGZyb20gXCJ2dWUtY29va2llXCI7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgVnVlQXhpb3MgZnJvbSAndnVlLWF4aW9zJztcblxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cblZ1ZS51c2UoVnVlUm91dGVyKTtcblZ1ZS51c2UoVnVleCk7XG5WdWUudXNlKFZ1ZUNvb2tpZSk7XG5WdWUudXNlKFZ1ZUF4aW9zLCBheGlvcyk7XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xuICAgIHJvdXRlczogcm91dGVzLFxuICAgIG1vZGU6ICdoaXN0b3J5Jyxcbn0pO1xuXG5yb3V0ZXIuYWZ0ZXJFYWNoKCh0bywgZnJvbSkgPT4ge1xuICAgIGlmICh0eXBlb2YgdG8ubWV0YS50aXRsZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRvLm1ldGEudGl0bGU7XG4gICAgfVxufSk7XG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICAgIHJvdXRlcixcbiAgICBzdG9yZSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGxvZ2luKCkge1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6IFwibG9naW5cIn0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICBpZiAoIXRoaXMuJHN0b3JlLnN0YXRlLmF1dGhvcml6YXRpb25Ub2tlbikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTm8gdG9rZW4gZm91bmQsIHByb2Nlc3MgdG8gY2hlY2tpbmcgY29va2llc1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZVRva2VuID0gdGhpcy4kY29va2llLmdldCgnY29va2llLXRva2VuJyk7XG4gICAgICAgICAgICBpZiAoIWNvb2tpZVRva2VuKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNvb2tpZXMncyBlbXB0eSwgcHJvY2VlZCB0byBsb2dpblwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJUb2tlbiBmb3VuZCBmcm9tIGNvb2tpZXNcIik7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfQVVUSE9SSVpBVElPTl9UT0tFTicsIGNvb2tpZVRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy4kc3RvcmUuc3RhdGUuYXV0aG9yaXphdGlvblRva2VuKSB7XG4gICAgICAgICAgICAvLyBkbyBhIGNhbGwgdG8gLi91c2VyXG4gICAgICAgICAgICB0aGlzLmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSB0aGlzLiRzdG9yZS5zdGF0ZS5hdXRob3JpemF0aW9uVG9rZW47XG4gICAgICAgICAgICB0aGlzLmF4aW9zLmdldChgJHt0aGlzLiRzdG9yZS5zdGF0ZS5hcGlCYXNlfS91c2VyYClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiVG9rZW4gaXMgbGVnaXRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9VU0VSJywgcmVzcG9uc2UuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUb2tlbiBpbGVnYWwsIHByb2NlZWQgdG8gbG9naW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gIFxuICAgIH0sXG59KS4kbW91bnQoJyNhcHAnKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsImNvbnN0IHJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9sb2dpblwiLFxyXG4gICAgICAgIG5hbWU6IFwibG9naW5cIixcclxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL0xvZ2luLnZ1ZScpLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwixJDEg25nIG5o4bqtcFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgICAgIG5hbWU6IFwiYmFzZVwiLFxyXG4gICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvQmFzZS52dWUnKSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBcImRhc2hib2FyZFwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJiYXNlLmRhc2hib2FyZFwiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9EYXNoYm9hcmQudnVlJyksXHJcbiAgICAgICAgICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQuG6o25nIHRow7RuZyBiw6FvXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogXCJ3b3Jrc1wiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJiYXNlLndvcmtzXCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL1dvcmtzLnZ1ZScpLFxyXG4gICAgICAgICAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRhbmggc8OhY2ggY8O0bmcgdHLGsOG7nW5nXCIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IFwid29yay86aWRcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFzZS53b3JrUmVwb3J0XCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL1dvcmtSZXBvcnQudnVlJyksXHJcbiAgICAgICAgICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQsOhbyBjw6FvIGNoaSB0aeG6v3RcIixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogXCJtYXRlcmlhbHNcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFzZS5tYXRlcmlhbHNcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi9jb21wb25lbnRzL01hdGVyaWFscy52dWVcIiksXHJcbiAgICAgICAgICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGFuaCBzw6FjaCB24bqtdCB0xrBcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcblxyXG4gICAgXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JvdXRlcy5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xyXG5WdWUudXNlKFZ1ZXgpO1xyXG5cclxuXHJcblxyXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvblRva2VuOiBcIlwiLFxyXG4gICAgICAgIGFwaUJhc2U6IFwiaHR0cDovL3RyYWNrZXIuZGV2L2FwaS92MVwiLFxyXG4gICAgICAgIHVzZXI6IHt9LFxyXG4gICAgfSxcclxuICAgIG11dGF0aW9uczoge1xyXG4gICAgICAgIFNFVF9BVVRIT1JJWkFUSU9OX1RPS0VOKHN0YXRlLCB0b2tlbikge1xyXG4gICAgICAgICAgICBzdGF0ZS5hdXRob3JpemF0aW9uVG9rZW4gPSB0b2tlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFNFVF9VU0VSKHN0YXRlLCB1c2VyT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXIgPSB1c2VyT2JqZWN0O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gNiJdLCJzb3VyY2VSb290IjoiIn0=