define((function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e,t,n){return(h=l()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&c(i,n.prototype),i}).apply(null,arguments)}function p(e){var t="function"==typeof Map?new Map:void 0;return(p=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return h(e,arguments,u(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,e)})(e)}function f(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){var t=l();return function(){var n,r=u(e);if(t){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f(this,n)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function m(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=g(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}var w=function(t){var n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n,r){var i=t&&t.prototype instanceof h?t:h,o=Object.create(i.prototype),a=new x(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return P()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=b(a,n);if(s){if(s===l)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=c(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(e,n,a),o}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var l={};function h(){}function p(){}function f(){}var d={};d[o]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(k([])));y&&y!==n&&r.call(y,o)&&(d=y);var m=f.prototype=h.prototype=Object.create(d);function g(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function _(t,n){var i;this._invoke=function(o,a){function s(){return new n((function(i,s){!function i(o,a,s,u){var l=c(t[o],t,a);if("throw"!==l.type){var h=l.arg,p=h.value;return p&&"object"===e(p)&&r.call(p,"__await")?n.resolve(p.__await).then((function(e){i("next",e,s,u)}),(function(e){i("throw",e,s,u)})):n.resolve(p).then((function(e){h.value=e,s(h)}),(function(e){return i("throw",e,s,u)}))}u(l.arg)}(o,a,i,s)}))}return i=i?i.then(s,s):s()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=c(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=m.constructor=f,f.constructor=p,f[s]=p.displayName="GeneratorFunction",t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(m),e},t.awrap=function(e){return{__await:e}},g(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new _(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(m),m[s]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}("object"===("undefined"==typeof module?"undefined":e(module))?module.exports:{});try{regeneratorRuntime=w}catch(e){Function("r","regeneratorRuntime = r")(w)}var S=new WeakMap,x=function(e){return"function"==typeof e&&S.has(e)},k=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,P=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t!==n;){var r=t.nextSibling;e.removeChild(t),t=r}},E={},N={},O="{{lit-".concat(String(Math.random()).slice(2),"}}"),C="\x3c!--".concat(O,"--\x3e"),A=new RegExp("".concat(O,"|").concat(C)),T=function e(t,r){n(this,e),this.parts=[],this.element=r;for(var i=[],o=[],a=document.createTreeWalker(r.content,133,null,!1),s=0,u=-1,c=0,l=t.strings,h=t.values.length;c<h;){var p=a.nextNode();if(null!==p){if(u++,1===p.nodeType){if(p.hasAttributes()){for(var f=p.attributes,d=f.length,v=0,y=0;y<d;y++)j(f[y].name,"$lit$")&&v++;for(;v-- >0;){var m=l[c],g=R.exec(m)[2],_=g.toLowerCase()+"$lit$",b=p.getAttribute(_);p.removeAttribute(_);var w=b.split(A);this.parts.push({type:"attribute",index:u,name:g,strings:w}),c+=w.length-1}}"TEMPLATE"===p.tagName&&(o.push(p),a.currentNode=p.content)}else if(3===p.nodeType){var S=p.data;if(S.indexOf(O)>=0){for(var x=p.parentNode,k=S.split(A),P=k.length-1,E=0;E<P;E++){var N=void 0,C=k[E];if(""===C)N=L();else{var T=R.exec(C);null!==T&&j(T[2],"$lit$")&&(C=C.slice(0,T.index)+T[1]+T[2].slice(0,-"$lit$".length)+T[3]),N=document.createTextNode(C)}x.insertBefore(N,p),this.parts.push({type:"node",index:++u})}""===k[P]?(x.insertBefore(L(),p),i.push(p)):p.data=k[P],c+=P}}else if(8===p.nodeType)if(p.data===O){var V=p.parentNode;null!==p.previousSibling&&u!==s||(u++,V.insertBefore(L(),p)),s=u,this.parts.push({type:"node",index:u}),null===p.nextSibling?p.data="":(i.push(p),u--),c++}else for(var U=-1;-1!==(U=p.data.indexOf(O,U+1));)this.parts.push({type:"node",index:-1}),c++}else a.currentNode=o.pop()}for(var M=0,z=i;M<z.length;M++){var F=z[M];F.parentNode.removeChild(F)}},j=function(e,t){var n=e.length-t.length;return n>=0&&e.slice(n)===t},V=function(e){return-1!==e.index},L=function(){return document.createComment("")},R=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,U=function(){function e(t,r,i){n(this,e),this.__parts=[],this.template=t,this.processor=r,this.options=i}return i(e,[{key:"update",value:function(e){var t,n=0,r=b(this.__parts);try{for(r.s();!(t=r.n()).done;){var i=t.value;void 0!==i&&i.setValue(e[n]),n++}}catch(e){r.e(e)}finally{r.f()}var o,a=b(this.__parts);try{for(a.s();!(o=a.n()).done;){var s=o.value;void 0!==s&&s.commit()}}catch(e){a.e(e)}finally{a.f()}}},{key:"_clone",value:function(){for(var e,t=k?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,i=document.createTreeWalker(t,133,null,!1),o=0,a=0,s=i.nextNode();o<r.length;)if(e=r[o],V(e)){for(;a<e.index;)a++,"TEMPLATE"===s.nodeName&&(n.push(s),i.currentNode=s.content),null===(s=i.nextNode())&&(i.currentNode=n.pop(),s=i.nextNode());if("node"===e.type){var u=this.processor.handleTextExpression(this.options);u.insertAfterNode(s.previousSibling),this.__parts.push(u)}else{var c;(c=this.__parts).push.apply(c,m(this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options)))}o++}else this.__parts.push(void 0),o++;return k&&(document.adoptNode(t),customElements.upgrade(t)),t}}]),e}(),M=" ".concat(O," "),z=function(){function e(t,r,i,o){n(this,e),this.strings=t,this.values=r,this.type=i,this.processor=o}return i(e,[{key:"getHTML",value:function(){for(var e=this.strings.length-1,t="",n=!1,r=0;r<e;r++){var i=this.strings[r],o=i.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===i.indexOf("--\x3e",o+1);var a=R.exec(i);t+=null===a?i+(n?M:C):i.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+O}return t+=this.strings[e]}},{key:"getTemplateElement",value:function(){var e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}]),e}(),F=function(t){return null===t||!("object"===e(t)||"function"==typeof t)},I=function(e){return Array.isArray(e)||!(!e||!e[Symbol.iterator])},q=function(){function e(t,r,i){n(this,e),this.dirty=!0,this.element=t,this.name=r,this.strings=i,this.parts=[];for(var o=0;o<i.length-1;o++)this.parts[o]=this._createPart()}return i(e,[{key:"_createPart",value:function(){return new B(this)}},{key:"_getValue",value:function(){for(var e=this.strings,t=e.length-1,n="",r=0;r<t;r++){n+=e[r];var i=this.parts[r];if(void 0!==i){var o=i.value;if(F(o)||!I(o))n+="string"==typeof o?o:String(o);else{var a,s=b(o);try{for(s.s();!(a=s.n()).done;){var u=a.value;n+="string"==typeof u?u:String(u)}}catch(e){s.e(e)}finally{s.f()}}}}return n+=e[t]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),e}(),B=function(){function e(t){n(this,e),this.value=void 0,this.committer=t}return i(e,[{key:"setValue",value:function(e){e===E||F(e)&&e===this.value||(this.value=e,x(e)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;x(this.value);){var e=this.value;this.value=E,e(this)}this.value!==E&&this.committer.commit()}}]),e}(),$=function(){function e(t){n(this,e),this.value=void 0,this.__pendingValue=void 0,this.options=t}return i(e,[{key:"appendInto",value:function(e){this.startNode=e.appendChild(L()),this.endNode=e.appendChild(L())}},{key:"insertAfterNode",value:function(e){this.startNode=e,this.endNode=e.nextSibling}},{key:"appendIntoPart",value:function(e){e.__insert(this.startNode=L()),e.__insert(this.endNode=L())}},{key:"insertAfterPart",value:function(e){e.__insert(this.startNode=L()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;x(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=E,e(this)}var t=this.__pendingValue;t!==E&&(F(t)?t!==this.value&&this.__commitText(t):t instanceof z?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):I(t)?this.__commitIterable(t):t===N?(this.value=N,this.clear()):this.__commitText(t))}},{key:"__insert",value:function(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"__commitNode",value:function(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}},{key:"__commitText",value:function(e){var t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}},{key:"__commitTemplateResult",value:function(e){var t=this.options.templateFactory(e);if(this.value instanceof U&&this.value.template===t)this.value.update(e.values);else{var n=new U(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(t){Array.isArray(this.value)||(this.value=[],this.clear());var n,r,i=this.value,o=0,a=b(t);try{for(a.s();!(r=a.n()).done;){var s=r.value;void 0===(n=i[o])&&(n=new e(this.options),i.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(i[o-1])),n.setValue(s),n.commit(),o++}}catch(e){a.e(e)}finally{a.f()}o<i.length&&(i.length=o,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;P(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}(),D=function(){function e(t,r,i){if(n(this,e),this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=r,this.strings=i}return i(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;x(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=E,e(this)}if(this.__pendingValue!==E){var t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=E}}}]),e}(),H=function(e){s(r,e);var t=d(r);function r(e,i,o){var a;return n(this,r),(a=t.call(this,e,i,o)).single=2===o.length&&""===o[0]&&""===o[1],a}return i(r,[{key:"_createPart",value:function(){return new W(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:v(u(r.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),r}(q),W=function(e){s(r,e);var t=d(r);function r(){return n(this,r),t.apply(this,arguments)}return r}(B),G=!1;try{var J={get capture(){return G=!0,!1}};window.addEventListener("test",J,J),window.removeEventListener("test",J,J)}catch(e){}var Y=function(){function e(t,r,i){var o=this;n(this,e),this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=r,this.eventContext=i,this.__boundHandleEvent=function(e){return o.handleEvent(e)}}return i(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;x(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=E,e(this)}if(this.__pendingValue!==E){var t=this.__pendingValue,n=this.value,r=null==t||null!=n&&(t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive),i=null!=t&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=K(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=E}}},{key:"handleEvent",value:function(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),K=function(e){return e&&(G?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},Q=new(function(){function e(){n(this,e)}return i(e,[{key:"handleAttributeExpressions",value:function(e,t,n,r){var i=t[0];return"."===i?new H(e,t.slice(1),n).parts:"@"===i?[new Y(e,t.slice(1),r.eventContext)]:"?"===i?[new D(e,t.slice(1),n)]:new q(e,t,n).parts}},{key:"handleTextExpression",value:function(e){return new $(e)}}]),e}());function X(e){var t=Z.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Z.set(e.type,t));var n=t.stringsArray.get(e.strings);if(void 0!==n)return n;var r=e.strings.join(O);return void 0===(n=t.keyString.get(r))&&(n=new T(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}var Z=new Map,ee=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");function te(e,t){for(var n=e.element.content,r=e.parts,i=document.createTreeWalker(n,133,null,!1),o=re(r),a=r[o],s=-1,u=0,c=[],l=null;i.nextNode();){s++;var h=i.currentNode;for(h.previousSibling===l&&(l=null),t.has(h)&&(c.push(h),null===l&&(l=h)),null!==l&&u++;void 0!==a&&a.index===s;)a.index=null!==l?-1:a.index-u,a=r[o=re(r,o)]}c.forEach((function(e){return e.parentNode.removeChild(e)}))}var ne=function(e){for(var t=11===e.nodeType?0:1,n=document.createTreeWalker(e,133,null,!1);n.nextNode();)t++;return t},re=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=t+1;n<e.length;n++){var r=e[n];if(V(r))return n}return-1};var ie=function(e,t){return"".concat(e,"--").concat(t)},oe=!0;void 0===window.ShadyCSS?oe=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),oe=!1);var ae=function(e){return function(t){var n=ie(t.type,e),r=Z.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},Z.set(n,r));var i=r.stringsArray.get(t.strings);if(void 0!==i)return i;var o=t.strings.join(O);if(void 0===(i=r.keyString.get(o))){var a=t.getTemplateElement();oe&&window.ShadyCSS.prepareTemplateDom(a,e),i=new T(t,a),r.keyString.set(o,i)}return r.stringsArray.set(t.strings,i),i}},se=["html","svg"],ue=new Set,ce=function(e,t,n){ue.add(e);var r=n?n.element:document.createElement("template"),i=t.querySelectorAll("style"),o=i.length;if(0!==o){for(var a=document.createElement("style"),s=0;s<o;s++){var u=i[s];u.parentNode.removeChild(u),a.textContent+=u.textContent}!function(e){se.forEach((function(t){var n=Z.get(ie(t,e));void 0!==n&&n.keyString.forEach((function(e){var t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach((function(e){n.add(e)})),te(e,n)}))}))}(e);var c=r.content;n?function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=e.element.content,i=e.parts;if(null!=n)for(var o=document.createTreeWalker(r,133,null,!1),a=re(i),s=0,u=-1;o.nextNode();){u++;var c=o.currentNode;for(c===n&&(s=ne(t),n.parentNode.insertBefore(t,n));-1!==a&&i[a].index===u;){if(s>0){for(;-1!==a;)i[a].index+=s,a=re(i,a);return}a=re(i,a)}}else r.appendChild(t)}(n,a,c.firstChild):c.insertBefore(a,c.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);var l=c.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){c.insertBefore(a,c.firstChild);var h=new Set;h.add(a),te(n,h)}}else window.ShadyCSS.prepareTemplateStyles(r,e)};window.JSCompiler_renameProperty=function(e,t){return e};var le={toAttribute:function(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},he=function(e,t){return t!==e&&(t==t||e==e)},pe={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:he},fe=Promise.resolve(!0),de=function(r){s(c,r);var o,a,u=d(c);function c(){var e;return n(this,c),(e=u.call(this))._updateState=0,e._instanceProperties=void 0,e._updatePromise=fe,e._hasConnectedResolver=void 0,e._changedProperties=new Map,e._reflectingProperties=void 0,e.initialize(),e}return i(c,[{key:"initialize",value:function(){this._saveInstanceProperties(),this._requestUpdate()}},{key:"_saveInstanceProperties",value:function(){var e=this;this.constructor._classProperties.forEach((function(t,n){if(e.hasOwnProperty(n)){var r=e[n];delete e[n],e._instanceProperties||(e._instanceProperties=new Map),e._instanceProperties.set(n,r)}}))}},{key:"_applyInstanceProperties",value:function(){var e=this;this._instanceProperties.forEach((function(t,n){return e[n]=t})),this._instanceProperties=void 0}},{key:"connectedCallback",value:function(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(e,t,n){t!==n&&this._attributeToProperty(e,n)}},{key:"_propertyToAttribute",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:pe,r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){var o=r._propertyValueToAttribute(t,n);if(void 0===o)return;this._updateState=8|this._updateState,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._updateState=-9&this._updateState}}},{key:"_attributeToProperty",value:function(e,t){if(!(8&this._updateState)){var n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){var i=n._classProperties.get(r)||pe;this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,i),this._updateState=-17&this._updateState}}}},{key:"_requestUpdate",value:function(e,t){var n=!0;if(void 0!==e){var r=this.constructor,i=r._classProperties.get(e)||pe;r._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}},{key:"requestUpdate",value:function(e,t){return this._requestUpdate(e,t),this.updateComplete}},{key:"_enqueueUpdate",value:(o=regeneratorRuntime.mark((function e(){var t,n,r,i,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._updateState=4|this._updateState,r=this._updatePromise,this._updatePromise=new Promise((function(e,r){t=e,n=r})),e.prev=3,e.next=6,r;case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(3);case 10:if(this._hasConnected){e.next=13;break}return e.next=13,new Promise((function(e){return o._hasConnectedResolver=e}));case 13:if(e.prev=13,null==(i=this.performUpdate())){e.next=18;break}return e.next=18,i;case 18:e.next=23;break;case 20:e.prev=20,e.t1=e.catch(13),n(e.t1);case 23:t(!this._hasRequestedUpdate);case 24:case"end":return e.stop()}}),e,this,[[3,8],[13,20]])})),a=function(){var e=this,n=arguments;return new Promise((function(r,i){var a=o.apply(e,n);function s(e){t(a,r,i,s,u,"next",e)}function u(e){t(a,r,i,s,u,"throw",e)}s(void 0)}))},function(){return a.apply(this,arguments)})},{key:"performUpdate",value:function(){this._instanceProperties&&this._applyInstanceProperties();var e=!1,t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}},{key:"_markUpdated",value:function(){this._changedProperties=new Map,this._updateState=-5&this._updateState}},{key:"_getUpdateComplete",value:function(){return this._updatePromise}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((function(e,n){return t._propertyToAttribute(n,t[n],e)})),this._reflectingProperties=void 0)}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}},{key:"_hasConnected",get:function(){return 32&this._updateState}},{key:"_hasRequestedUpdate",get:function(){return 4&this._updateState}},{key:"hasUpdated",get:function(){return 1&this._updateState}},{key:"updateComplete",get:function(){return this._getUpdateComplete()}}],[{key:"_ensureClassProperties",value:function(){var e=this;if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((function(t,n){return e._classProperties.set(n,t)}))}}},{key:"createProperty",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:pe;if(this._ensureClassProperties(),this._classProperties.set(t,n),!n.noAccessor&&!this.prototype.hasOwnProperty(t)){var r="symbol"===e(t)?Symbol():"__".concat(t);Object.defineProperty(this.prototype,t,{get:function(){return this[r]},set:function(e){var n=this[t];this[r]=e,this._requestUpdate(t,n)},configurable:!0,enumerable:!0})}}},{key:"finalize",value:function(){var e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var t,n=this.properties,r=b([].concat(m(Object.getOwnPropertyNames(n)),m("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n):[])));try{for(r.s();!(t=r.n()).done;){var i=t.value;this.createProperty(i,n[i])}}catch(e){r.e(e)}finally{r.f()}}}},{key:"_attributeNameForProperty",value:function(e,t){var n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}},{key:"_valueHasChanged",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:he;return n(e,t)}},{key:"_propertyValueFromAttribute",value:function(e,t){var n=t.type,r=t.converter||le,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}},{key:"_propertyValueToAttribute",value:function(e,t){if(void 0!==t.reflect){var n=t.type,r=t.converter;return(r&&r.toAttribute||le.toAttribute)(e,n)}}},{key:"observedAttributes",get:function(){var e=this;this.finalize();var t=[];return this._classProperties.forEach((function(n,r){var i=e._attributeNameForProperty(r,n);void 0!==i&&(e._attributeToPropertyMap.set(i,r),t.push(i))})),t}}]),c}(p(HTMLElement));de.finalized=!0;var ve="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ye=Symbol(),me=function(){function e(t,r){if(n(this,e),r!==ye)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}return i(e,[{key:"toString",value:function(){return this.cssText}},{key:"styleSheet",get:function(){return void 0===this._styleSheet&&(ve?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}}]),e}(),ge=function(e){if(e instanceof me)return e.cssText;if("number"==typeof e)return e;throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(e,". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."))},_e=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n.reduce((function(t,n,r){return t+ge(n)+e[r+1]}),e[0]);return new me(i,ye)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");var be=function(e){return e.flat?e.flat(1/0):function e(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=0,i=t.length;r<i;r++){var o=t[r];Array.isArray(o)?e(o,n):n.push(o)}return n}(e)},we=function(e){s(r,e);var t=d(r);function r(){return n(this,r),t.apply(this,arguments)}return i(r,[{key:"initialize",value:function(){v(u(r.prototype),"initialize",this).call(this),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}},{key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open"})}},{key:"adoptStyles",value:function(){var e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ve?this.renderRoot.adoptedStyleSheets=e.map((function(e){return e.styleSheet})):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((function(e){return e.cssText})),this.localName))}},{key:"connectedCallback",value:function(){v(u(r.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"update",value:function(e){var t=this;v(u(r.prototype),"update",this).call(this,e);var n=this.render();n instanceof z&&this.constructor.render(n,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((function(e){var n=document.createElement("style");n.textContent=e.cssText,t.renderRoot.appendChild(n)})))}},{key:"render",value:function(){}}],[{key:"finalize",value:function(){v(u(r),"finalize",this).call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}},{key:"_getUniqueStyles",value:function(){var e=this.styles,t=[];Array.isArray(e)?be(e).reduceRight((function(e,t){return e.add(t),e}),new Set).forEach((function(e){return t.unshift(e)})):e&&t.push(e);return t}}]),r}(de);function Se(){var e=y(["\n  :host {\n    --primary-color: var(--cap-primary-color, #B9C800);\n    --primary-color-deep: var(--cap-primary-color-deep, #64A000);\n    --secondary-color: var(--cap-primary-color, #493c31);\n    --grey-50: var(--cap-grey-50, #fafafa);\n    --grey-100: var(--cap-grey-100, #f5f5f5);\n    --grey-200: var(--cap-grey-200, #eee);\n    --grey-300: var(--cap-grey-300, #e0e0e0);\n    --grey-400: var(--cap-grey-400, #bdbdbd);\n    --grey-500: var(--cap-grey-500, #9e9e9e);\n    --grey-600: var(--cap-grey-600, #757575);\n    --grey-700: var(--cap-grey-700, #616161);\n    --grey-800: var(--cap-grey-800, #424242);\n    --grey-900: var(--cap-grey-900, #212121);\n    --spacing-1x: var(--cap-spacing-1x, 4px);\n    --spacing-2x: var(--cap-spacing-2x, 8px);\n    --spacing-3x: var(--cap-spacing-3x, 16px);\n    --spacing-4x: var(--cap-spacing-4x, 24px);\n    --spacing-5x: var(--cap-spacing-5x, 32px);\n    --spacing-6x: var(--cap-spacing-6x, 48px);\n  }\n"]);return Se=function(){return e},e}we.finalized=!0,we.render=function(t,n,r){if(!r||"object"!==e(r)||!r.scopeName)throw new Error("The `scopeName` option is required.");var i=r.scopeName,o=ee.has(n),a=oe&&11===n.nodeType&&!!n.host,s=a&&!ue.has(i),u=s?document.createDocumentFragment():n;if(function(e,t,n){var r=ee.get(t);void 0===r&&(P(t,t.firstChild),ee.set(t,r=new $(Object.assign({templateFactory:X},n))),r.appendInto(t)),r.setValue(e),r.commit()}(t,u,Object.assign({templateFactory:ae(i)},r)),s){var c=ee.get(u);ee.delete(u);var l=c.value instanceof U?c.value.template:void 0;ce(i,u,l),P(n,n.firstChild),n.appendChild(u),ee.set(n,c)}!o&&a&&window.ShadyCSS.styleElement(n.host)};var xe=_e(Se());function ke(){var e=y(["\n  :host {\n    font-family: sans-serif;\n    font-size: 16px;\n    line-height: 26px;\n    color: var(--grey-900);\n  }\n  h1, .h1 {\n    font-size: 4.25em;\n    line-height: 1.14705882em;\n    margin-top: 0.38235294em;\n    margin-bottom: 0.76470588em;\n  }\n  h2, .h2 {\n    font-size: 2.625em;\n    line-height: 1.23809524em;\n    margin-top: 0.61904762em;\n    margin-bottom: 0.61904762em;\n  }\n  h3, .h3 {\n    font-size: 1.625em;\n    line-height: 1em;\n    margin-top: 1em;\n    margin-bottom: 0em;\n  }\n  h4, .h4 {\n    font-size: 1em;\n    line-height: 1.625em;\n    margin-top: 1.625em;\n    margin-bottom: 0em;\n  }\n  h5, .h5 {\n    font-size: 1em;\n    line-height: 1.625em;\n    margin-top: 1.625em;\n    margin-bottom: 0em;\n  }\n  p, ul, ol, pre, table, blockquote {\n    margin-top: 0em;\n    margin-bottom: 1.625em;\n  }\n  a {\n    color: var(--primary-color);\n    text-decoration: none;\n    font-weight: bold;\n  }\n  code {\n    background: var(--grey-200);\n    font-weight: bold;\n    padding: var(--spacing-1x) var(--spacing-2x);\n    border-radius: var(--spacing-1x);\n  }\n"]);return ke=function(){return e},e}var Pe=_e(ke());function Ee(){var e=y(["","rem"]);return Ee=function(){return e},e}function Ne(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return _e(Ee(),e/t)}function Oe(){var e=y(["\n  :host {\n    display: block;\n    text-align: center;\n  }\n  button {\n    display: block;\n    font-size: 1rem;\n    box-sizing: border-box;\n    text-align: center;\n    border-radius: 2px;\n    padding: "," ",";\n    background: var(--primary-color);\n    background: linear-gradient(90deg, var(--primary-color-deep) 0%, var(--primary-color) 100%);\n    text-transform: uppercase;\n    color: white;\n    font-weight: bold;\n    border: none;\n    outline: none;\n  }\n  :host(.secondary) button {\n    background: transparent;\n    color: var(--secondary-color);\n    border: 2px solid var(--secondary-color);\n  }\n"]);return Oe=function(){return e},e}var Ce=_e(Oe(),Ne(12),Ne(24));function Ae(){var e=y(["\n      <button><slot></slot></button>\n    "]);return Ae=function(){return e},e}!function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({customElements:customElements},this);n.customElements.get(e)||n.customElements.define(e,t)}("app-button",function(e){s(r,e);var t=d(r);function r(){return n(this,r),t.apply(this,arguments)}return i(r,[{key:"render",value:function(){return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new z(e,n,"html",Q)}(Ae())}}],[{key:"styles",get:function(){return[xe,Pe,Ce]}}]),r}(we))}));