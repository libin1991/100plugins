!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=23)}([function(t,e,n){t.exports=!n(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var o=n(10),r=n(15),i=n(17),u=Object.defineProperty;e.f=n(0)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){"use strict";n(7),n(22)},function(t,e){},function(t,e,n){n(18);var o=n(2).Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var o=n(1);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var o=n(9);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var o=n(1),r=n(4).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,e,n){var o=n(4),r=n(2),i=n(11),u=n(14),c=function(t,e,n){var f,a,s,l=t&c.F,p=t&c.G,d=t&c.S,v=t&c.P,m=t&c.B,y=t&c.W,h=p?r:r[e]||(r[e]={}),g=h.prototype,_=p?o:d?o[e]:(o[e]||{}).prototype;p&&(n=e);for(f in n)(a=!l&&_&&void 0!==_[f])&&f in h||(s=a?_[f]:n[f],h[f]=p&&"function"!=typeof _[f]?n[f]:m&&a?i(s,o):y&&_[f]==s?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(s):v&&"function"==typeof s?i(Function.call,s):s,v&&((h.virtual||(h.virtual={}))[f]=s,t&c.R&&g&&!g[f]&&u(g,f,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var o=n(5),r=n(16);t.exports=n(0)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(0)&&!n(3)(function(){return 7!=Object.defineProperty(n(12)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var o=n(1);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var o=n(13);o(o.S+o.F*!n(0),"Object",{defineProperty:n(5).f})},function(t,e,n){t.exports={default:n(8),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var o=n(19),r=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}()},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var r=n(20),i=o(r),u=n(21),c=o(u),f=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,i.default)(this,t),this.settings=this._applyGlobalSettings(n),e instanceof Element?this.elements=[e]:this.elements=[].slice.call(document.querySelectorAll(e)),this.config={titles:[],id:"mouse-tooltip",className:"mouse-tooltip",hiddenName:"mouse-tooltip-hidden",offset:{x:10,y:10}},this._init()}return(0,c.default)(t,[{key:"_applyGlobalSettings",value:function(t){var e={moveIn:new Function,moveOut:new Function};return{moveIn:t.moveIn||e.moveIn,moveOut:t.moveOut||e.moveOut}}},{key:"_init",value:function(){this._createElement(),this._handleMouse()}},{key:"_createElement",value:function(){var t=document.createElement("div");t.setAttribute("id",this.config.id),this._addClass(t,this.config.className),this._addClass(t,this.config.hiddenName),document.body.appendChild(t)}},{key:"_handleMouse",value:function(){var t=this;this.elements.forEach(function(e,n){var o=e.getAttribute("data-tooltip");t.config.titles.push(o);var r=!1,i=document.getElementById(t.config.id);e.addEventListener("mousemove",function(u){!r&&t.settings.moveIn(e,o,u),r=!0,t._createTooltips(e,n,u),t._removeClass(i,t.config.hiddenName)}),e.addEventListener("mouseout",function(n){t.settings.moveOut(e,o,n),r=!1,t._addClass(i,t.config.hiddenName)})})}},{key:"_createTooltips",value:function(t,e,n){var o=document.getElementById(this.config.id);o.innerHTML=this.config.titles[e];var r=document.body.clientWidth,i=this.config.offset.x,u=this.config.offset.y,c=o.clientWidth,f=(o.clientHeight,n.pageX),a=n.pageY,s=f,l=a;f+c+i>r&&(s=f-c,i*=-1),s=s+i+"px",l=l+u+"px",o.style.left=s,o.style.top=l}},{key:"_addClass",value:function(t,e){t.className=(t.className+" "+e).trim()}},{key:"_removeClass",value:function(t,e){t.className=t.className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)")," ").trim()}}]),t}();window.MouseTooltip=f,t.exports=f},function(t,e,n){t.exports=n(6)}]);