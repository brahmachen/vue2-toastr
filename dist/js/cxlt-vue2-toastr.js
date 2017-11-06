!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.cxltToastr=e():t.cxltToastr=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=13)}([function(t,e,n){t.exports=!n(1)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var o=n(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(6),r=n(5);t.exports=function(t){return o(r(t))}},function(t,e,n){t.exports={default:n(15),__esModule:!0}},function(t,e){},function(t,e){},function(t,e,n){var o=n(42)(n(14),n(43),null,null);o.options.__file="C:\\Users\\caoyan\\Documents\\GitHub\\cxlt-vue2-toastr\\src\\Toastr.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] Toastr.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(9),r=n.n(o),i=n(12),s=n.n(i),u=n(11),c=(n.n(u),n(10)),a=(n.n(c),{install:function(t,e){function n(n,i){var u=t.extend(s.a),c=r()(e,n,{type:i}),a=new u({el:document.createElement("div"),propsData:c});return o.push(a),a}e||(e={});var o=[];t.prototype.$toast={success:function(t){return n(t,"success")},info:function(t){return n(t,"info")},warn:function(t){return n(t,"warning")},error:function(t){return n(t,"error")},removeAll:function(){o.forEach(function(t){t.hideToastr()}),o=[]}}}});e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CxltToastr",data:function(){return{progress:{hideEta:0,percent:0,intervalId:null},show:!1}},props:{type:{type:String,default:"success"},position:{type:String,default:"top center"},title:{type:String},message:{type:String},closeButton:{type:Boolean,default:!0},progressBar:{type:Boolean,default:!1},timeOut:{default:"1500"},showMethod:{type:String,default:"fadeIn"},hideMethod:{type:String,default:"fadeOut"},showDuration:{default:"1000"},hideDuration:{default:"1000"},delay:{default:"0"},successColor:{type:String},infoColor:{type:String},warningColor:{type:String},errorColor:{type:String},color:{type:String},onClicked:{type:Function},onMouseOver:{type:Function},onMouseOut:{type:Function},closeOnHover:{type:Boolean,default:!1}},beforeMount:function(){var t=document.querySelector(".cxlt-toastr-container.toast-"+this.positionClass);t||(t=document.createElement("div"),t.classList.add("cxlt-toastr-container"),t.classList.add("toast-"+this.positionClass),document.body.appendChild(t)),t.appendChild(this.$el)},mounted:function(){var t=this;setTimeout(function(){return t.showToastr()},this.delay)},computed:{positionClass:function(){return this.position.split(" ").join("-")},enterActiveClass:function(){return"animated "+this.showMethod},leaveActiveClass:function(){return"animated "+this.hideMethod},toastBackgroundColor:function(){return this.color?this.color:"success"===this.type&&this.successColor?this.successColor:"info"===this.type&&this.infoColor?this.infoColor:"warning"===this.type&&this.warningColor?this.warningColor:"error"===this.type&&this.errorColor?this.errorColor:null}},methods:{showToastr:function(){var t=this;this.show=!0,this.sto=setTimeout(function(){return t.hideToastr()},this.timeOut),this.progressBar&&(this.progress.hideEta=(new Date).getTime()+parseFloat(this.timeOut),this.progress.intervalId=setInterval(function(){return t.refreshProgress()},10))},hideToastr:function(){clearTimeout(this.sto),clearTimeout(this.progress.intervalId),this.show=!1},refreshProgress:function(){this.progress.percent=(this.progress.hideEta-(new Date).getTime())/this.timeOut*100},beforeEnter:function(t){t.style.animationDuration=this.showDuration+"ms"},afterEnter:function(t){this.$el.classList.add("animated"),this.$el.classList.add(this.showMethod)},beforeLeave:function(t){t.style.animationDuration=this.hideDuration+"ms"},clicked:function(){this.onClicked instanceof Function&&this.show&&this.onClicked(),this.hideToastr()},mouseOver:function(){this.onMouseOver instanceof Function&&this.onMouseOver(),this.closeOnHover||(clearTimeout(this.sto),clearInterval(this.progress.intervalId))},mouseOut:function(){this.onMouseOut instanceof Function&&this.onMouseOut(),!this.closeOnHover&&this.show&&this.showToastr()}}}},function(t,e,n){n(41),t.exports=n(4).Object.assign},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var o=n(3);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var o=n(8),r=n(37),i=n(36);t.exports=function(t){return function(e,n,s){var u,c=o(e),a=r(c.length),f=i(s,a);if(t&&n!=n){for(;a>f;)if((u=c[f++])!=u)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(16);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var o=n(3),r=n(2).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(2),r=n(4),i=n(20),s=n(25),u=function(t,e,n){var c,a,f,l=t&u.F,p=t&u.G,d=t&u.S,h=t&u.P,v=t&u.B,y=t&u.W,m=p?r:r[e]||(r[e]={}),g=m.prototype,x=p?o:d?o[e]:(o[e]||{}).prototype;p&&(n=e);for(c in n)(a=!l&&x&&void 0!==x[c])&&c in m||(f=a?x[c]:n[c],m[c]=p&&"function"!=typeof x[c]?n[c]:v&&a?i(f,o):y&&x[c]==f?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((m.virtual||(m.virtual={}))[c]=f,t&u.R&&g&&!g[c]&&s(g,c,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(28),r=n(33);t.exports=n(0)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(0)&&!n(1)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var o=n(31),r=n(29),i=n(32),s=n(38),u=n(6),c=Object.assign;t.exports=!c||n(1)(function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=o})?function(t,e){for(var n=s(t),c=arguments.length,a=1,f=r.f,l=i.f;c>a;)for(var p,d=u(arguments[a++]),h=f?o(d).concat(f(d)):o(d),v=h.length,y=0;v>y;)l.call(d,p=h[y++])&&(n[p]=d[p]);return n}:c},function(t,e,n){var o=n(17),r=n(26),i=n(39),s=Object.defineProperty;e.f=n(0)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var o=n(24),r=n(8),i=n(18)(!1),s=n(34)("IE_PROTO");t.exports=function(t,e){var n,u=r(t),c=0,a=[];for(n in u)n!=s&&o(u,n)&&a.push(n);for(;e.length>c;)o(u,n=e[c++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){var o=n(30),r=n(22);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var o=n(35)("keys"),r=n(40);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e,n){var o=n(2),r=o["__core-js_shared__"]||(o["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},function(t,e,n){var o=n(7),r=Math.max,i=Math.min;t.exports=function(t,e){return t=o(t),t<0?r(t+e,0):i(t,e)}},function(t,e,n){var o=n(7),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e,n){var o=n(5);t.exports=function(t){return Object(o(t))}},function(t,e,n){var o=n(3);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e,n){var o=n(23);o(o.S+o.F,"Object",{assign:n(27)})},function(t,e){t.exports=function(t,e,n,o){var r,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,i=t.default);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),o){var c=Object.create(u.computed||null);Object.keys(o).forEach(function(t){var e=o[t];c[t]=function(){return e}}),u.computed=c}return{esModule:r,exports:i,options:u}}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{"enter-active-class":t.enterActiveClass,"leave-active-class":t.leaveActiveClass},on:{"before-enter":t.beforeEnter,"after-enter":t.afterEnter,"before-leave":t.beforeLeave}},[t.show?n("div",{staticClass:"toast",class:["toast-"+t.type],style:{backgroundColor:t.toastBackgroundColor},on:{click:t.clicked,mouseover:t.mouseOver,mouseout:t.mouseOut}},[t.closeButton?n("button",{staticClass:"toast-close-button",attrs:{role:"button"},on:{click:t.hideToastr}},[t._v("×")]):t._e(),t._v(" "),t.progressBar?n("div",{staticClass:"toast-progress",style:"width: "+t.progress.percent+"%"}):t._e(),t._v(" "),n("div",{staticClass:"toast-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"toast-message"},[t._v(t._s(t.message))])]):t._e()])},staticRenderFns:[]},t.exports.render._withStripped=!0}])});
//# sourceMappingURL=cxlt-vue2-toastr.js.map