webpackJsonp([5],{FyJt:function(t,e,n){var s=n("ghL8");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("08e94f42",s,!0)},"VU/8":function(t,e){t.exports=function(t,e,n,s,r,i){var o,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(o=t,a=t.default);var l="function"==typeof a?a.options:a;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var d;if(i?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=d):s&&(d=s),d){var u=l.functional,v=u?l.render:l.beforeCreate;u?(l._injectStyles=d,l.render=function(t,e){return d.call(e),v(t,e)}):l.beforeCreate=v?[].concat(v,d):[d]}return{esModule:o,exports:a,options:l}}},ghL8:function(t,e,n){(t.exports=n("FZ+f")(void 0)).push([t.i,"",""])},nSkG:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"accounting-wraper"}},[n("div",{staticClass:"selection--panel"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"form-group"},[n("treeselect",{attrs:{"load-root-options":t.loadWorks,placeholder:"Chọn công trình"},model:{value:t.work_id,callback:function(e){t.work_id=e},expression:"work_id"}})],1),t._v(" "),n("div",{staticClass:"form-group"},[n("treeselect",{attrs:{"load-root-options":t.loadProviders,disabled:!t.work_id,placeholder:"Chọn nhà cung cấp"},model:{value:t.provider_id,callback:function(e){t.provider_id=e},expression:"provider_id"}})],1)])]),t._v(" "),t.work_id&&t.provider_id&&!t.list?n("div",{staticClass:"row"},[t._m(0,!1,!1)]):t._e(),t._v(" "),t.list?n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("table",{staticClass:"table invoices-table"},[t._m(1,!1,!1),t._v(" "),n("tbody",t._l(t.list,function(e,s){return n("tr",{key:e.id,on:{click:function(n){t.showDetail(e.id)}}},[n("td",{staticClass:"number-col"},[t._v(t._s(s+1))]),t._v(" "),n("td",{staticClass:"date-col"},[t._v(t._s(e.signed_at))]),t._v(" "),n("td",{staticClass:"name-col"},[t._v(t._s(e.name))]),t._v(" "),n("td",{staticClass:"receives-col"},[t._v(t._s(e.receives_count))]),t._v(" "),n("td",{staticClass:"payments-col"},[t._v(t._s(e.payment_count))]),t._v(" "),n("td",{staticClass:"total-col"},[t._v(t._s(t.commafly(e.total)))]),t._v(" "),n("td",{staticClass:"payment-total-col"},[t._v(t._s(t.commafly(e.payment_total)))])])}))])])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col"},[e("h4",{staticClass:"text-center"},[this._v("Loading")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"thead-light"},[n("tr",[n("th",{staticClass:"number-col"},[t._v("#")]),t._v(" "),n("th",{staticClass:"date-col"},[t._v("Ngày")]),t._v(" "),n("th",{staticClass:"name-col"},[t._v("Tên")]),t._v(" "),n("th",{staticClass:"receives-col"},[t._v("Số lần nhận hàng")]),t._v(" "),n("th",{staticClass:"payments-col"},[t._v("Số lần thanh toán")]),t._v(" "),n("th",{staticClass:"total-col"},[t._v("Tổng tiền")]),t._v(" "),n("th",{staticClass:"payment-total-col"},[t._v("Đã thanh toán")])])])}]}},rjj0:function(t,e,n){function s(t){for(var e=0;e<t.length;e++){var n=t[e],s=l[n.id];if(s){s.refs++;for(o=0;o<s.parts.length;o++)s.parts[o](n.parts[o]);for(;o<n.parts.length;o++)s.parts.push(i(n.parts[o]));s.parts.length>n.parts.length&&(s.parts.length=n.parts.length)}else{for(var r=[],o=0;o<n.parts.length;o++)r.push(i(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:r}}}}function r(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function i(t){var e,n,s=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(s){if(p)return f;s.parentNode.removeChild(s)}if(_){var i=v++;s=u||(u=r()),e=o.bind(null,s,i,!1),n=o.bind(null,s,i,!0)}else s=r(),e=function(t,e){var n=e.css,s=e.media,r=e.sourceMap;s&&t.setAttribute("media",s);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,s),n=function(){s.parentNode.removeChild(s)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else n()}}function o(t,e,n,s){var r=n?"":s.css;if(t.styleSheet)t.styleSheet.cssText=h(e,r);else{var i=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n("tTVk"),l={},d=a&&(document.head||document.getElementsByTagName("head")[0]),u=null,v=0,p=!1,f=function(){},_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){p=n;var r=c(t,e);return s(r),function(e){for(var n=[],i=0;i<r.length;i++){var o=r[i];(a=l[o.id]).refs--,n.push(a)}e?s(r=c(t,e)):r=[];for(i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete l[a.id]}}}};var h=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},"soW+":function(t,e,n){var s=n("VU/8")(n("xkQi"),n("nSkG"),!1,function(t){n("FyJt")},null,null);t.exports=s.exports},tTVk:function(t,e){t.exports=function(t,e){for(var n=[],s={},r=0;r<e.length;r++){var i=e[r],o=i[0],a={id:t+":"+r,css:i[1],media:i[2],sourceMap:i[3]};s[o]?s[o].parts.push(a):n.push(s[o]={id:o,parts:[a]})}return n}},xkQi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{work_id:null,provider_id:null}},asyncComputed:{list:function(){var t=this;return new Promise(function(e,n){t.work_id&&t.provider_id&&axios.get(t.$store.state.apiBase+"/invoice",{params:{work_id:t.work_id,provider_id:t.provider_id}}).then(function(t){e(t.data.data)})})}},methods:{commafly:function(t){return window.commafly(t)},loadWorks:function(t){axios.get(this.$store.state.apiBase+"/work").then(function(e){var n=e.data.data.map(function(t){return{id:t.id,label:t.name}});t(null,n)}).catch(function(t){})},loadProviders:function(t){axios.get(this.$store.state.apiBase+"/provider").then(function(e){var n=e.data.map(function(t){return{id:t.id,label:t.name}});t(null,n)})},showDetail:function(t){this.$router.push({name:"invoice.show",params:{id:t}})},mounted:function(){this.$route.query.work_id&&(this.work_id=this.$route.query.work_id),this.$route.query.provider_id&&(this.provider_id=this.$route.query.provider_id)}}}}});