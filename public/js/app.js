webpackJsonp([7],{

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
    el: '#app',
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
            this.axios.get(this.$store.state.apiBase + '/user', {
                headers: {
                    'Authorization': this.$store.state.authorizationToken
                }
            }).then(function (response) {
                console.info("Token is legit");
                _this.$store.commit('SET_USER', response.data.data);
                _this.axios.defaults.headers.common['Authorization'] = _this.$store.state.authorizationToken;
            }).catch(function (error) {
                if (error.response.status == 401) {
                    console.error("Token ilegal, proceed to login");
                    _this.login();
                } else {
                    console.log(error);
                }
            });
        }
    }
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
            return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "./resources/assets/js/components/WorkReport.vue"));
        },
        meta: {
            title: "Báo cáo chi tiết"
        }
    }, {
        path: "materials",
        name: "base.materials",
        component: function component() {
            return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "./resources/assets/js/components/Materials.vue"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWdCO0FBQ007QUFDTDtBQUNLOztBQUVKO0FBQ0c7O0FBRUY7QUFDRDs7QUFFbEIsNENBQUksSUFBSTtBQUNSLDRDQUFJLElBQUk7QUFDUiw0Q0FBSSxJQUFJO0FBQ1IsNENBQUksSUFBSSxtREFBVTs7QUFFbEIsSUFBTSxhQUFhO1lBRWY7VUFBTTtBQUROLENBRFc7O0FBS2YsT0FBTyxVQUFVLFVBQUMsSUFBSSxNQUNsQjtRQUFJLE9BQU8sR0FBRyxLQUFLLFVBQVUsVUFDekI7aUJBQVMsUUFBUSxHQUFHLEtBQ3ZCO0FBQ0o7QUFKRDs7QUFNQSxJQUFNLFVBQVU7UUFFWjtZQUNBO1dBQ0E7O0FBQVMsZ0NBRUQ7aUJBQUssUUFBUSxLQUFLLEVBQUMsTUFDdEI7QUFHTDtBQUxJOztBQUxZLGdDQVVOO29CQUNOOztZQUFJLENBQUMsS0FBSyxPQUFPLE1BQU0sb0JBQ25CO29CQUFRLEtBQ1I7Z0JBQU0sY0FBYyxLQUFLLFFBQVEsSUFDakM7Z0JBQUksQ0FBQyxhQUNEO3dCQUFRLE1BQ1I7cUJBQ0g7QUFIRCxtQkFLSTt3QkFBUSxLQUNSO3FCQUFLLE9BQU8sT0FBTywyQkFDdEI7QUFDSjtBQUNEO1lBQUksS0FBSyxPQUFPLE1BQU0sb0JBQ2xCO0FBQ0E7aUJBQUssTUFBTSxJQUFPLEtBQUssT0FBTyxNQUFNOztxQ0FFUCxLQUFLLE9BQU8sTUFBTTtBQUFuQztBQURKLGVBR0QsS0FBSyxvQkFDSjt3QkFBUSxLQUNSO3NCQUFLLE9BQU8sT0FBTyxZQUFZLFNBQVMsS0FDeEM7c0JBQUssTUFBTSxTQUFTLFFBQVEsT0FBTyxtQkFBbUIsTUFBSyxPQUFPLE1BQ3JFO0FBUkwsZUFTSyxNQUFNLGlCQUNIO29CQUFJLE1BQU0sU0FBUyxVQUFVLEtBQ3pCOzRCQUFRLE1BQ1I7MEJBQ0g7QUFIRCx1QkFJSTs0QkFBUSxJQUNYO0FBQ0o7QUFDSjtBQUdSO0FBN0NlO0FBQ2hCLENBRFEsRTs7Ozs7Ozs7QUM3QlosSUFBTTtVQUdFO1VBQ0E7ZUFBVztlQUFNLHlIQUFPO0FBQ3hCOztlQUNXO0FBQVA7QUFKSixDQUZPO1VBV1A7VUFDQTtlQUFXO2VBQU0sd0hBQU87QUFDeEI7O2NBR1E7Y0FDQTttQkFBVzttQkFBTSw2SEFBTztBQUN4Qjs7bUJBQ1c7QUFBUDtBQUpKLEtBRkU7Y0FVRjtjQUNBO21CQUFXO21CQUFNLHlIQUFPO0FBQ3hCOzttQkFDVztBQUFQO0FBSko7Y0FRQTtjQUNBO21CQUFXO21CQUFNLDhIQUFPO0FBQ3hCOzttQkFDVztBQUFQO0FBSko7Y0FRQTtjQUNBO21CQUFXO21CQUFNLDZIQUFPO0FBQ3hCOzttQkFDVztBQUFQO0FBSko7QUExQlI7QUFzQ1IseURBQWUsUTs7Ozs7Ozs7Ozs7QUNoREM7QUFDQztBQUNqQiw0Q0FBSSxJQUFJOztBQUlSLElBQU0sWUFBWSw4Q0FBSzs7NEJBR2Y7aUJBQ0E7Y0FDQTtzQkFHSjs7QUFOSTs7QUFNTyxrRUFDaUIsT0FBTyxPQUMzQjtrQkFBTSxxQkFDVDtBQUNEO0FBSk8sb0NBSUUsT0FBTyxZQUNaO2tCQUFNLE9BQ1Q7QUFDRDtBQVBPLDREQU9jLE9BQU8sTUFDeEI7a0JBQU0sZUFDVDtBQVRNO0FBQ1A7QUFSSixDQURVOztBQXFCZCx5REFBZSxPOzs7Ozs7O0FDM0JmLHlDIiwiZmlsZSI6IlxcanNcXGFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IFZ1ZUNvb2tpZSBmcm9tIFwidnVlLWNvb2tpZVwiO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFZ1ZUF4aW9zIGZyb20gJ3Z1ZS1heGlvcyc7XG5cbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5WdWUudXNlKFZ1ZXgpO1xuVnVlLnVzZShWdWVDb29raWUpO1xuVnVlLnVzZShWdWVBeGlvcywgYXhpb3MpO1xuXG5jb25zdCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcbiAgICByb3V0ZXM6IHJvdXRlcyxcbiAgICBtb2RlOiAnaGlzdG9yeScsXG59KTtcblxucm91dGVyLmFmdGVyRWFjaCgodG8sIGZyb20pID0+IHtcbiAgICBpZiAodHlwZW9mIHRvLm1ldGEudGl0bGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSB0by5tZXRhLnRpdGxlO1xuICAgIH1cbn0pO1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuICAgIHJvdXRlcixcbiAgICBzdG9yZSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGxvZ2luKCkge1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6IFwibG9naW5cIn0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy4kc3RvcmUuc3RhdGUuYXV0aG9yaXphdGlvblRva2VuKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJObyB0b2tlbiBmb3VuZCwgcHJvY2VzcyB0byBjaGVja2luZyBjb29raWVzXCIpO1xuICAgICAgICAgICAgY29uc3QgY29va2llVG9rZW4gPSB0aGlzLiRjb29raWUuZ2V0KCdjb29raWUtdG9rZW4nKTtcbiAgICAgICAgICAgIGlmICghY29va2llVG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ29va2llcydzIGVtcHR5LCBwcm9jZWVkIHRvIGxvZ2luXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlRva2VuIGZvdW5kIGZyb20gY29va2llc1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9BVVRIT1JJWkFUSU9OX1RPS0VOJywgY29va2llVG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLiRzdG9yZS5zdGF0ZS5hdXRob3JpemF0aW9uVG9rZW4pIHtcbiAgICAgICAgICAgIC8vIGRvIGEgY2FsbCB0byAuL3VzZXJcbiAgICAgICAgICAgIHRoaXMuYXhpb3MuZ2V0KGAke3RoaXMuJHN0b3JlLnN0YXRlLmFwaUJhc2V9L3VzZXJgLCB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdGhpcy4kc3RvcmUuc3RhdGUuYXV0aG9yaXphdGlvblRva2VuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiVG9rZW4gaXMgbGVnaXRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX1VTRVInLCByZXNwb25zZS5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSB0aGlzLiRzdG9yZS5zdGF0ZS5hdXRob3JpemF0aW9uVG9rZW47XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRva2VuIGlsZWdhbCwgcHJvY2VlZCB0byBsb2dpblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gIFxuICAgIH0sXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsImNvbnN0IHJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9sb2dpblwiLFxyXG4gICAgICAgIG5hbWU6IFwibG9naW5cIixcclxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL0xvZ2luLnZ1ZScpLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwixJDEg25nIG5o4bqtcFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgICAgIG5hbWU6IFwiYmFzZVwiLFxyXG4gICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvQmFzZS52dWUnKSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBcImRhc2hib2FyZFwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJiYXNlLmRhc2hib2FyZFwiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9EYXNoYm9hcmQudnVlJyksXHJcbiAgICAgICAgICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQuG6o25nIHRow7RuZyBiw6FvXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogXCJ3b3Jrc1wiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJiYXNlLndvcmtzXCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL1dvcmtzLnZ1ZScpLFxyXG4gICAgICAgICAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRhbmggc8OhY2ggY8O0bmcgdHLGsOG7nW5nXCIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IFwid29yay86aWRcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFzZS53b3JrUmVwb3J0XCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL1dvcmtSZXBvcnQudnVlJyksXHJcbiAgICAgICAgICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQsOhbyBjw6FvIGNoaSB0aeG6v3RcIixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogXCJtYXRlcmlhbHNcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFzZS5tYXRlcmlhbHNcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi9jb21wb25lbnRzL01hdGVyaWFscy52dWVcIiksXHJcbiAgICAgICAgICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGFuaCBzw6FjaCB24bqtdCB0xrBcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcblxyXG4gICAgXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JvdXRlcy5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xyXG5WdWUudXNlKFZ1ZXgpO1xyXG5cclxuXHJcblxyXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvblRva2VuOiBcIlwiLFxyXG4gICAgICAgIGFwaUJhc2U6IFwiaHR0cDovL3RyYWNrZXIuZGV2L2FwaS92MVwiLFxyXG4gICAgICAgIHVzZXI6IHt9LFxyXG4gICAgICAgIGNhdGVnb3J5TGlzdDoge30sXHJcblxyXG4gICAgfSxcclxuICAgIG11dGF0aW9uczoge1xyXG4gICAgICAgIFNFVF9BVVRIT1JJWkFUSU9OX1RPS0VOKHN0YXRlLCB0b2tlbikge1xyXG4gICAgICAgICAgICBzdGF0ZS5hdXRob3JpemF0aW9uVG9rZW4gPSB0b2tlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFNFVF9VU0VSKHN0YXRlLCB1c2VyT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXIgPSB1c2VyT2JqZWN0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgVVBEQVRFX0NBVEVHT1JZX0xJU1Qoc3RhdGUsIGxpc3QpIHtcclxuICAgICAgICAgICAgc3RhdGUuY2F0ZWdvcnlMaXN0ID0gbGlzdDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDciXSwic291cmNlUm9vdCI6IiJ9