webpackJsonp([6],{"2Kuk":function(e,t,n){(e.exports=n("FZ+f")(void 0)).push([e.i,"",""])},"VU/8":function(e,t){e.exports=function(e,t,n,a,r,i){var s,o=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(s=e,o=e.default);var l="function"==typeof o?o.options:o;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var u;if(i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=u):a&&(u=a),u){var v=l.functional,d=v?l.render:l.beforeCreate;v?(l._injectStyles=u,l.render=function(e,t){return u.call(t),d(e,t)}):l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:s,exports:o,options:l}}},hYMu:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"invoice_edit---wrapper"},["new_payment"===e.$route.query.action?n("div",[n("div",{staticClass:"card"},[n("h3",{staticClass:"card-title text-center"},[e._v("Thêm thanh toán")]),e._v(" "),n("div",{staticClass:"card-body"},[n("div",{staticClass:"payment--container"},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_payment.name,expression:"new_payment.name"}],staticClass:"form-control hide-border",attrs:{type:"input"},domProps:{value:e.new_payment.name},on:{input:function(t){t.target.composing||e.$set(e.new_payment,"name",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-row"},[n("div",{staticClass:"form-group col-12"},[n("label",[e._v("Hình thức thanh toán")]),e._v(" "),n("treeselect",{attrs:{options:e.payment_methods},model:{value:e.new_payment.method,callback:function(t){e.$set(e.new_payment,"method",t)},expression:"new_payment.method"}})],1)]),e._v(" "),n("div",{staticClass:"form-row"},[n("div",{staticClass:"form-group col-6"},[n("label",{attrs:{for:"receive_date"}},[e._v("Ngày thanh toán")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_payment.pay_at,expression:"new_payment.pay_at"}],staticClass:"form-control",attrs:{type:"date",id:"payment_date"},domProps:{value:e.new_payment.pay_at},on:{input:function(t){t.target.composing||e.$set(e.new_payment,"pay_at",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group col-6"},[n("label",{attrs:{for:"receive_note"}},[e._v("Ghi chú")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_payment.note,expression:"new_payment.note"}],staticClass:"form-control",attrs:{type:"input",id:"payment_note",placeholder:"Nhập ghi chú"},domProps:{value:e.new_payment.note},on:{input:function(t){t.target.composing||e.$set(e.new_payment,"note",t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"form-row"},[n("div",{staticClass:"form-group col"},[n("label",{attrs:{for:"receive_note"}},[e._v("Số tiền")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_payment.amount,expression:"new_payment.amount"}],staticClass:"form-control",attrs:{type:"input",id:"payment_amount",placeholder:"Số tiền"},domProps:{value:e.new_payment.amount},on:{input:function(t){t.target.composing||e.$set(e.new_payment,"amount",t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"form-group"}),e._v(" "),n("div",{staticClass:"form-group text-center"},[n("button",{staticClass:"btn btn-primary",on:{click:e.submitPayment}},[e._v("Cập nhật")])])])])])]):e._e(),e._v(" "),"new_receive"===e.$route.query.action?n("div",[n("div",{staticClass:"card"},[n("h4",{staticClass:"card-title text-center"},[e._v("Nhận hàng đợt "+e._s(e.$route.query.index))]),e._v(" "),n("div",{staticClass:"card-body"},[n("div",{staticClass:"payment--container"},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_receive.name,expression:"new_receive.name"}],staticClass:"form-control hide-border",attrs:{type:"input"},domProps:{value:e.new_receive.name},on:{input:function(t){t.target.composing||e.$set(e.new_receive,"name",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-row"},[n("div",{staticClass:"form-group col-6"},[n("label",{attrs:{for:"receive_date"}},[e._v("Ngày nhận")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_receive.receive_at,expression:"new_receive.receive_at"}],staticClass:"form-control",attrs:{type:"date",id:"payment_date"},domProps:{value:e.new_receive.receive_at},on:{input:function(t){t.target.composing||e.$set(e.new_receive,"receive_at",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group col-6"},[n("label",{attrs:{for:"receive_note"}},[e._v("Ghi chú")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_receive.note,expression:"new_receive.note"}],staticClass:"form-control",attrs:{type:"input",id:"payment_note",placeholder:"Nhập ghi chú"},domProps:{value:e.new_receive.note},on:{input:function(t){t.target.composing||e.$set(e.new_receive,"note",t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"row"},[n("h5",[e._v("Danh mục đơn hàng")]),e._v(" "),n("table",{staticClass:"table"},[e._m(0,!1,!1),e._v(" "),n("tbody",e._l(e.tracker_list,function(t,a){return n("tr",{key:a},[n("td",[e._v(e._s(a+1))]),e._v(" "),n("td",[e._v(e._s(t.material.name))]),e._v(" "),n("td",[e._v(e._s(t.unit))]),e._v(" "),n("td",[e._v(e._s(t.received_unit))]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"row.value"}],staticClass:"inline-td",attrs:{type:"text"},domProps:{value:t.value},on:{focus:function(e){e.target.select()},input:function(n){n.target.composing||e.$set(t,"value",n.target.value)}}})])])}))])]),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"form-group text-center"},[n("button",{staticClass:"btn btn-primary",on:{click:e.submitReceive}},[e._v("Cập nhật")])])])])])]):e._e()])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",{staticClass:"thead-light"},[n("tr",[n("th",[e._v("#")]),e._v(" "),n("th",[e._v("Tên")]),e._v(" "),n("th",[e._v("Số lượng đặt hàng")]),e._v(" "),n("th",[e._v("Số lượng đã nhận")]),e._v(" "),n("th",[e._v("Nhận đợt này")])])])}]}},mWul:function(e,t,n){var a=n("VU/8")(n("sfbr"),n("hYMu"),!1,function(e){n("qwMA")},null,null);e.exports=a.exports},qwMA:function(e,t,n){var a=n("2Kuk");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("2860224e",a,!0)},rjj0:function(e,t,n){function a(e){for(var t=0;t<e.length;t++){var n=e[t],a=l[n.id];if(a){a.refs++;for(s=0;s<a.parts.length;s++)a.parts[s](n.parts[s]);for(;s<n.parts.length;s++)a.parts.push(i(n.parts[s]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var r=[],s=0;s<n.parts.length;s++)r.push(i(n.parts[s]));l[n.id]={id:n.id,refs:1,parts:r}}}}function r(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function i(e){var t,n,a=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(a){if(p)return m;a.parentNode.removeChild(a)}if(_){var i=d++;a=v||(v=r()),t=s.bind(null,a,i,!1),n=s.bind(null,a,i,!0)}else a=r(),t=function(e,t){var n=t.css,a=t.media,r=t.sourceMap;a&&e.setAttribute("media",a);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}function s(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n("tTVk"),l={},u=o&&(document.head||document.getElementsByTagName("head")[0]),v=null,d=0,p=!1,m=function(){},_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){p=n;var r=c(e,t);return a(r),function(t){for(var n=[],i=0;i<r.length;i++){var s=r[i];(o=l[s.id]).refs--,n.push(o)}t?a(r=c(e,t)):r=[];for(i=0;i<n.length;i++){var o=n[i];if(0===o.refs){for(var u=0;u<o.parts.length;u++)o.parts[u]();delete l[o.id]}}}};var f=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},sfbr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{payment_methods:[{label:"Chuyển khoản",id:"bank_transfer"},{label:"Tiền mặt",id:"cash"}],new_payment:{name:"",pay_at:"",note:"",amount:"",method:"",type:"new_payment"},new_receive:{name:"",receive_at:"",note:"",type:"new_receive",receive_list:[]},list:[],tracker_list:[]}},methods:{submitPayment:function(){var e=this;axios.patch(this.$store.state.apiBase+"/invoice/"+this.$route.params.id,this.new_payment).then(function(t){200===t.status&&e.$router.go(-1)})},submitReceive:function(){var e=this;this.new_receive.receive_list=this.tracker_list.map(function(e){return{id:e.id,value:e.value}}),axios.patch(this.$store.state.apiBase+"/invoice/"+this.$route.params.id,this.new_receive).then(function(t){200===t.status&&e.$router.go(-1)})}},mounted:function(){var e=this;this.new_payment.name="Thanh toán lần "+this.$route.query.index,this.new_receive.name="Nhận hàng đợt "+this.$route.query.index,"new_receive"===this.$route.query.action&&axios.get(this.$store.state.apiBase+"/invoice/"+this.$route.params.id+"/edit",{params:{action:"new_receive"}}).then(function(t){e.tracker_list=t.data.trackers.map(function(e){return Object.assign({},e,{value:0})})})}}},tTVk:function(e,t){e.exports=function(e,t){for(var n=[],a={},r=0;r<t.length;r++){var i=t[r],s=i[0],o={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};a[s]?a[s].parts.push(o):n.push(a[s]={id:s,parts:[o]})}return n}}});