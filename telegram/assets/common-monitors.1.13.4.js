!function(){"use strict";var d=function(){return(d=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)};function _(n,t){var r="function"==typeof Symbol&&n[Symbol.iterator];if(!r)return n;var e,o,i=r.call(n),u=[];try{for(;(void 0===t||0<t--)&&!(e=i.next()).done;)u.push(e.value)}catch(n){o={error:n}}finally{try{e&&!e.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}function s(n,t,r){if(r||2===arguments.length)for(var e,o=0,i=t.length;o<i;o++)!e&&o in t||((e=e||Array.prototype.slice.call(t,0,o))[o]=t[o]);return n.concat(e||Array.prototype.slice.call(t))}var h=function(){return{}};function l(n){return n}function e(n){return"object"==typeof n&&null!==n}var r=Object.prototype;function p(n){return"[object Array]"===r.toString.call(n)}function T(n){return"function"==typeof n}function v(n){return"string"==typeof n}function o(n){return"undefined"!=typeof Event&&function(n,t){try{return n instanceof t}catch(n){return}}(n,Event)}var i=function(r,n){return r&&e(r)?n.reduce(function(n,t){return n[t]=r[t],n},{}):r};function m(n){return p(n)&&n.length?function(n){for(var t=[],r=n.length,e=0;e<r;e++){var o=n[e];v(o)?t.push(o.replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1")):o&&o.source&&t.push(o.source)}return new RegExp(t.join("|"),"i")}(n):null}function c(i,u,c,a){return void 0===a&&(a=!0),function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];if(!i)return h;var r=i[u],e=c.apply(void 0,s([r],_(n),!1)),o=e;return T(o)&&a&&(o=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return e.apply(this,t)}catch(n){return T(r)&&r.apply(this,t)}}),i[u]=o,function(n){n||(o===i[u]?i[u]=r:e=r)}}}function g(e,n){var t=[];try{t=n.reduce(function(n,t){try{var r=t(e);"function"==typeof r&&n.push(r)}catch(n){}return n},[])}catch(n){}return function(n){return g(n,t)}}function u(n){function t(n){c=function(n,t){if(!p(n))return n;var r=n.indexOf(t);if(0<=r){t=n.slice();return t.splice(r,1),t}return n}(c,n),f||s()}var r,e,o,i,u,c=[],a=[],f=!1,s=(e=function(){return c.length},o=function(){f=!0,r&&r[0](),a.forEach(function(n){return n()}),a.length=0,r=void 0},-1===(i=n=void(u=0)===n?3e5:n)?h:function(){if(e())return u&&clearTimeout(u),void(u=0);0===u&&(u=setTimeout(o,i))});return{next:function(n){return g(n,c)},complete:function(n){a.push(n)},attach:function(n,t){r=[n,t]},subscribe:function(n){if(f)throw new Error("Observer is closed");return c.push(n),r&&r[1]&&r[1](n),s(),function(){return t(n)}},unsubscribe:t}}var a=function(n,t,r){r=u(r);try{n(r.next,r.attach),t&&r.complete(t)}catch(n){}return[r.subscribe,r.unsubscribe]},y=function(n,t,r,e){return n.destroyAgent.set(t,r,e)};function b(n,t){return n.initSubject(t)}function E(n,t,r){var t=_(t,2),e=t[0],t=t[1],o=n.privateSubject||{};return o[e]||(o[e]=a(t,function(){o[e]=void 0},r)),o[e]}var w=function(){return Date.now()};function S(){if("object"==typeof window&&e(window))return window}function j(){if("object"==typeof document&&e(document))return document}function x(){if(S()&&e(window.performance))return window.performance}function R(){if(S()&&T(window.PerformanceObserver))return window.PerformanceObserver}function t(){var n=S()&&S()&&window.location;return n?n.href:""}function L(o){return function(r,n){function t(n){var t;n.viewId&&n.viewId!==(null===(t=o.config())||void 0===t?void 0:t.viewId)&&(r(e),e=d(d({},I(o)),k(n)))}var e=I(o);o.on("beforeConfig",t),n(function(){o.off("beforeConfig",t)})}}function f(n){if(n)return n.__SLARDAR_REGISTRY__||(n.__SLARDAR_REGISTRY__={Slardar:{plugins:[],errors:[],subject:{}}}),n.__SLARDAR_REGISTRY__.Slardar}var k=function(n){return{pid:n.pid,view_id:n.viewId,url:t()}},I=function(n){var t=n.config(),t=k(t);return t.context=n.context?n.context.toString():{},t},A=function(r){var n=r&&r.timing||void 0;return[n,function(){return r&&r.now?r.now():(Date.now?Date.now():+new Date)-(n&&n.navigationStart||0)},function(n){var t=(r||{}).getEntriesByType;return T(t)&&t.call(r,n)||[]},function(){var n=(r||{}).clearResourceTimings;T(n)&&n.call(r)},function(n){var t=(r||{}).getEntriesByName;return T(t)&&t.call(r,n)||[]}]},M="<unknown>";function N(n){try{for(var t,r=n,e=[],o=0,i=0,u=" > ".length;r&&o++<5&&!("html"===(t=function(n){var t,r,e,o,i,u=n,c=[];if(!u||!u.tagName)return"";if(c.push(u.tagName.toLowerCase()),u.id)return"#"+u.id;n=u.className;if(n&&v(n))for(r=n.split(/\s+/),i=0;i<r.length;i++)c.push("."+r[i]);var a=["type","name","title","alt"];for(i=0;i<a.length;i++)e=a[i],(o=u.getAttribute(e))&&c.push("["+e+'="'+o+'"]');var f=u,s=1,l=!0;for(;f=f.previousElementSibling;)(null===(t=f.tagName)||void 0===t?void 0:t.toLowerCase())===(null===(t=u.tagName)||void 0===t?void 0:t.toLowerCase())&&(f.className===u.className&&a.every(function(n){return u.getAttribute(n)===(null==f?void 0:f.getAttribute(n))})&&(l=!1),s++);1<s&&!l&&c.push(":nth-of-type("+s+")");return c.join("")}(r))||1<o&&256<=i+e.length*u+t.length);)e.push(t),i+=t.length,r=r.parentNode;return e.reverse().join(" > ")}catch(n){return M}}function O(n,t,r,e){return void 0===e&&(e=!1),n.addEventListener(t,r,e),function(){n.removeEventListener(t,r,e)}}function B(n,t,r,e){return void 0===e&&(e=!1),n.addEventListener(t,r,e),function(){n.removeEventListener(t,r,e)}}var D=function(n,t){return e(n)?d(d({},t),n):!!n&&t},C=["resource"],P=["longtask"],q=function(e,o,i){var u=e&&new e(function(n,e){n.getEntries?n.getEntries().forEach(function(n,t,r){return o(n,t,r,e)}):i&&i()});return[function(n){if(!e||!u)return i&&i();try{u.observe({entryTypes:n})}catch(n){return i&&i()}},function(n,t){if(!e||!u)return i&&i();try{var r={type:n,buffered:!0};void 0!==t&&(r.durationThreshold=t),u.observe(r)}catch(n){return i&&i()}u.observe({type:n,buffered:!1})},function(){return u&&u.disconnect()}]},H=function(n,t,r){n=_(q(n,t),3),t=n[0],n=n[2];return t(r),n},U=function(n,t,r,e){n=_(q(n,t),3),t=n[1],n=n[2];return t(r,e),n},G=["longtask_0",function(n,t){var r=R();r&&t(H(r,n,P))}],X=["resource_0",function(t,n){var r,e,o=R();o&&(e=new RegExp("\\/monitor_web\\/collect|\\/monitor_browser\\/collect\\/batch","i"),r=function(n){return e.test(n)},n(H(o,function(n){r(n.name)||t(n)},C)))}],F="js_error",Y="http",W="resource_error",$="resource",J="performance",V="performance_timing",z="performance_longtask";function K(n,t,r){t=null===(n=n.config())||void 0===n?void 0:n.plugins[t];return D(t,r)}function Q(t,r){return function(n){if(r)try{t(n)}catch(n){}}}function Z(o){function i(t,r){var e;return function(n){u=void 0,n&&e!==n&&r({event:e=n,name:t})}}var u;return[i,function(e){return function(n){var t;try{t=n.target}catch(n){return}var r=t&&t.tagName;r&&("INPUT"===r||"TEXTAREA"===r||t.isContentEditable)&&(u||i("input",e)(n),clearTimeout(u),u=window.setTimeout(function(){u=void 0},o))}}]}var nn="click",tn=["click_0",function(n,t){var r,e=j();e&&(r=B(e,nn,n,!0),t(function(){r()}))}],rn="keypress",en=["keypress_0",function(n,t){var r,e=j();e&&(r=B(e,rn,n,!0),t(function(){r()}))}],on=function(n,t,r){var e,o=_(t,2),i=o[0],u=o[1],c=r.maxBreadcrumbs,a=r.onAddBreadcrumb,f=r.onMaxBreadcrumbs,t=r.dom,o=_(Z(100),2),r=o[0],o=o[1],a=_(function(r,e,o){void 0===r&&(r=20),void 0===e&&(e=l),void 0===o&&(o=function(n,t){return n.slice(-t)});var i=[];return[function(){return i},function(n){var t=e(n);t&&(n=d(d({},t),{timestamp:n.timestamp||w()}),i=0<=r&&i.length+1>r?o(s(s([],_(i),!1),[n],!1),r):s(s([],_(i),!1),[n],!1))}]}(c,a,f),2),f=a[0],a=a[1];return t&&(e=a,n.push(i[0](r(nn,Q(r=function(n){var t;try{t=n.event.target?N(n.event.target):N(n.event)}catch(n){t=M}0!==t.length&&e({type:"dom",category:"ui."+n.name,message:t})},"dom")))),n.push(u[0](o(Q(r,"dom"))))),[f,a]},un="breadcrumb",cn={maxBreadcrumbs:20,dom:!0};function an(n){var t;return!function(n){switch(Object.prototype.toString.call(n)){case"[object Error]":case"[object Exception]":case"[object DOMError]":case"[object DOMException]":return 1;default:return n instanceof Error}}(n)?(function(n){if(e(n)){if("function"!=typeof Object.getPrototypeOf)return"[object Object]"===r.toString.call(n);n=Object.getPrototypeOf(n);return n===r||null===n}}(n)||o(n)||v(n))&&(t={message:function(n){try{return v(n)?n:JSON.stringify(n)}catch(n){return"[FAILED_TO_STRINGIFY]:"+String(n)}}(n)}):t=i(n,dn),t}function fn(n){return an(n.error)}function sn(n){var t;try{var r=void 0;if("reason"in n?r=n.reason:"detail"in n&&"reason"in n.detail&&(r=n.detail.reason),r){var e=an(r);return d(d({},e),{name:null!==(t=e&&e.name)&&void 0!==t?t:"UnhandledRejection"})}}catch(n){}}function ln(n){return"[object ErrorEvent]"===Object.prototype.toString.call(n)?fn(n):("[object PromiseRejectionEvent]"===Object.prototype.toString.call(n)?sn:an)(n)}function pn(n,t){return n&&t&&n===t}function vn(){var e;return function(n){try{if(r=e,!(!(t=n)||!r)&&!(!pn(t.message,r.message)||!pn(t.stack,r.stack)))return void(e=n)}catch(n){!function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=f(S());r&&(r.errors||(r.errors=[]),r.errors.push(n))}(n)}var t,r;return e=n}}var dn=["name","message","stack","filename","lineno","colno"],hn=["EventTarget","Window","Node","ApplicationCache","ChannelMergerNode","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","MessagePort","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],mn=["setTimeout","setInterval","requestAnimationFrame","requestIdleCallback"],gn=["onload","onerror","onprogress","onreadystatechange"],yn="addEventListener",bn=["async_error_0",function(o,n){function u(n,r){if(!T(n))return n;var e={type:"capture-global",data:d({},r)},t=n._w_||(n._w_=function(){try{return(n.handleEvent&&T(n.handleEvent)?n.handleEvent:n).apply(this,[].map.call(arguments,function(n){return u(n,r)}))}catch(n){var t=an(n);throw t&&o({source:e,error:t}),n}});return t._hook_=!0,t}var t=S(),r=function(){if("function"==typeof XMLHttpRequest&&T(XMLHttpRequest))return XMLHttpRequest}(),e=[];t&&e.push.apply(e,s([],_(mn.filter(function(n){return t[n]}).map(function(o){return c(t,o,function(e){return function(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return e&&e.call.apply(e,s([this,u(n,{function:o})],_(t),!1))}},!1)()})),!1)),r&&r.prototype&&e.push(c(r.prototype,"send",function(e){return function(){for(var t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return gn.filter(function(n){return t[n]&&!t[n]._hook_}).forEach(function(n){t[n]=u(t[n],{function:n})}),e.apply(this,n)}},!1)()),hn.forEach(function(i){var n=t&&t[i]&&t[i].prototype;n&&n[yn]&&(e.push(c(n,yn,function(o){return function(n,t,r){try{var e=t.handleEvent;T(e)&&(t.handleEvent=u(e,{function:"handleEvent",target:i}))}catch(n){}return o&&o.call(this,n,u(t,{function:yn,target:i}),r)}},!1)()),e.push(c(n,"removeEventListener",function(e){return function(n,t,r){return null!=t&&t._w_&&e.call(this,n,t._w_,r),e.call(this,n,t,r)}},!1)()))}),n(function(){return e.forEach(function(n){return n()})})}],En=["err_0",function(n,t){var r,e=S();e&&(r=O(e,"error",n,!0),t(function(){r()}))}],wn=["perr_0",function(n,t){var r,e=S();e&&(r=O(e,"unhandledrejection",n,!0),t(function(){r()}))}],_n=function(o,n,t,r){function e(n){var t=n.error,r=n.extra,e=n.react,n=n.source;!(t=s?p(t):t)||!t.message||l&&l.test(t.message)||o({ev_type:F,payload:{error:t,breadcrumbs:[],extra:r,react:e,source:n}})}var i=_(t,3),u=i[0],c=i[1],a=i[2],f=r.ignoreErrors,t=r.onerror,i=r.onunhandledrejection,s=r.dedupe,r=r.captureGlobalAsync,l=m(f),p=vn();return t&&n.push(u[0](function(n){return e({error:fn(n),source:{type:"onerror"}})})),i&&n.push(c[0](function(n){return e({error:sn(n),source:{type:"onunhandledrejection"}})})),r&&n.push(a()[0](function(n){e(n)})),function(n,t,r){return e({error:ln(n),extra:t,react:r,source:{type:"manual"}})}},Tn="jsError",Sn={ignoreErrors:[],onerror:!0,onunhandledrejection:!0,captureGlobalAsync:!1,dedupe:!0};var jn=function(n){return"hidden"===n.visibilityState},xn=["hidden_3",function(t,n){var r,e,o,i=j(),u=S();i&&u&&(e=B(i,"visibilitychange",r=function(n){t("pagehide"===n.type||jn(i))},!0),o=O(u,"pagehide",r,!0),n(function(){e(),o()},function(n){n(jn(i))}))}],Rn=["load_1",function(n,t){var r,e,o,i=S(),u=j();i&&u&&(r=!1,e=h,o=function(){setTimeout(function(){n(),r=!0},0)},"complete"===u.readyState?o():e=O(i,"load",o,!1),t(function(){e()},function(n){r&&n()}))}],Ln=["unload_0",function(n,t){var r,e,o,i,u,c=S();c&&(r=_((e=n,o=!1,[function(n){o||(o=!0,e&&e(n))}]),1)[0],i=function(){r()},u=[],["unload","beforeunload","pagehide"].forEach(function(n){u.push(O(c,n,i,!1))}),t(function(){u.forEach(function(n){return n()})}))}],kn=["activated_0",function(n,t){var r,e,o,i=j();i&&(r=!1,e=h,o=function(){n(),r=!0},i&&i.prerendering?e=B(i,"prerenderingchange",o,!0):o(),t(function(){e()},function(n){r&&n()}))}],In=["xmlhttprequest","fetch","beacon"],An=function(r,e,n,t){var o,i,u,c,a=_(n,2),n=a[0],f=a[1],s=x();s&&(a=t.ignoreUrls,o=t.slowSessionThreshold,i=t.ignoreTypes,u=m(a),c=function(n,t){void 0===t&&(t=!1),function(n,t){if(p(n)&&0!==n.length)for(var r=0;r<n.length;){if(n[r]===t)return 1;r++}}(i||In,n.initiatorType)||u&&u.test(n.name)||(n={ev_type:$,payload:n},t&&(n.extra={sample_rate:1}),r(n))},e.push(n[0](function(){var n=_(A(s),3),t=n[0],n=n[2],r=function(){if(!t)return!1;var n=t.loadEventEnd-t.navigationStart;return o<n}();n("resource").forEach(function(n){return c(n,r)}),e.push(f()[0](function(n){c(n)}))})))},Mn="resource",Nn={ignoreUrls:[],slowSessionThreshold:4e3};function On(n){return n="link"===(t=n).tagName.toLowerCase()?"href":"src",T(t.getAttribute)?t.getAttribute(n)||"":t[n]||"";var t}var Bn=function(n,t){var r=n.target||n.srcElement;if(r){n=r.tagName;if(n&&v(n))return{url:On(r),tagName:n,xpath:t?N(r):void 0}}},Dn=function(n,t){var r=n.url,e=n.tagName,o=n.xpath,r=(n=r,(r=j())&&n?((r=r.createElement("a")).href=n,r.href):""),t=t(r)[0];return{type:e.toLowerCase(),url:r,xpath:o,timing:t}},Cn="resourceError",Pn={includeUrls:[],ignoreUrls:[],dedupe:!0,gatherPath:!1};function qn(r){return function(n,t){r(Yn(n,t))}}function Hn(t){var r=0,e=Xn(n,0);return[function(){r=w()},function(){var n;n=w()-r,e.value=n,t&&t(Yn(e)),r=0}]}function Un(o,n,t,i,r){var e=(r=_(r,3))[0],u=r[1],c=r[2],a=R(),f=x(),s=j(),l=Xn(n,0),p=Fn(Yn,t,i);if(!f||!a||!s)return l.isSupport=!1,void p(l);function v(){if(jn(s))return l.isSupport=!1,void p(l);function t(n){var t=n.startTime,n=$n();l.value=t<n?0:t-n,p(l)}var n,r,e=(0,_(A(f),5)[4])(o)[0];e?t(e):(i.push(H(a,function(n){n.name===o&&t(n)},[Jn])),e=c(),i.push(e[0](function(){l.isBounced=!0,p(l)})),n=function(n){n&&p(l)},r=u(),i.push(function(){return r[1](n)}),r[0](n))}i.push(function(){return e[1](v)}),e[0](v)}var Gn={isSupport:!0,isPolyfill:!1,isBounced:!1,isCustom:!1,type:"perf"},Xn=function(n,t){return d({name:n,value:t},Gn)},Fn=function(t,r,e){var o=!1;return function(n){e.length&&e.forEach(function(n){n()}),e.length=0,o||(o=!0,r&&r(t(n)))}},Yn=function(n,t){return{ev_type:J,payload:n,overrides:t}},n="spa_load",Wn=function(){var n=x();return(0,_(A(n),3)[2])("navigation")[0]},$n=function(){var n=Wn();return n&&n.activationStart||0},Jn="paint",Vn=["fp",function(n,t,r){return Un("first-paint","fp",n,t,r)}],zn=["fcp",function(n,t,r){return Un("first-contentful-paint","fcp",n,t,r)}],Kn=["keydown","click"],Qn=["lcp",function(n,o,t){var t=_(t,3),r=t[0],i=t[1],u=t[2],c=R(),a=j(),f=Xn("lcp",0),s=Fn(Yn,n,o);if(!c||!a)return f.isSupport=!1,void s(f);function e(){if(jn(a))return f.isSupport=!1,void s(f);function t(){setTimeout(function(){s(f)},0)}o.push(U(c,function(n){var t=n.startTime,r=n.element,n=$n();if(f.value=t<n?0:t-n,r)try{f.extra={element:N(r)}}catch(n){}},"largest-contentful-paint")),Kn.forEach(function(n){o.push(B(a,n,t,!0))});var n=u();function r(n){n&&s(f)}o.push(n[0](function(){f.isBounced=!0,s(f)}));var e=i();o.push(function(){return e[1](r)}),e[0](r)}o.push(function(){return r[1](e)}),r[0](e)}],Zn=["cls",function(n,t,r){var e=_(r,4),o=e[1],i=e[2],r=e[3],e=R(),u=Xn("cls",0),c=qn(n);if(!e)return u.isSupport=!1,void c(u);var a,f,n=_((a=0,f=[],[function(){a=0},function(n,t){var r,e;t.hadRecentInput||(r=f[0],e=f[f.length-1],a&&t.startTime-e<1e3&&t.startTime-r<5e3?(a+=t.value,f.push(t.startTime)):(a=t.value,f=[t.startTime]),n(a))}]),2),s=n[0],n=n[1].bind(null,function(n){n>u.value&&(u.value=n)});t.push(U(e,n,"layout-shift"));o=o();t.push(o[0](function(n){n&&s()}));r=r();t.push(r[0](function(n){c(u,n),s(),u=Xn("cls",0)}));i=i();t.push(i[0](function(){c(u)}))}],nt="event",tt=["inp",function(n,t,r){var e=_(r,4),r=e[0],o=e[2],i=e[3],u=R(),c=function(){if(S()&&T(window.PerformanceEventTiming))return window.PerformanceEventTiming}(),e=x(),a=Xn("inp",0),f=qn(n);if(!u||!c||!e)return a.isSupport=!1,void f(a);function s(){g=E(),y=[],b={}}function l(n){var t=y[y.length-1],r=b[n.interactionId];(r||y.length<10||n.duration>t.latency)&&(r?(r.entries.push(n),r.latency=Math.max(r.latency,n.duration)):(n={id:n.interactionId,latency:n.duration,entries:[n]},b[n.id]=n,y.push(n)),y.sort(function(n,t){return t.latency-n.latency}),y.splice(10).forEach(function(n){delete b[n.id]}))}function p(){var n=(n=Math.min(y.length-1,Math.floor(w()/50)),y[n]);n&&(a.value=n.latency,(n=n.entries[0].target)&&(a.extra={element:N(n)}))}function v(t){t.interactionId&&l(t),"first-input"!==t.entryType||y.some(function(n){return n.entries.some(function(n){return t.duration===n.duration&&t.startTime===n.startTime})})||l(t)}var d,h,m,g=0,y=[],b={},E=_((h=1/(d=0),m=0,t.push(U(u,function(n){n.interactionId&&(h=Math.min(h,n.interactionId),m=Math.max(m,n.interactionId),d=m?(m-h)/7+1:0)},nt,0)),[function(){return d}]),1)[0],w=function(){return E()-g};t.push(r[0](function(){t.push(U(u,v,nt,40)),"interactionId"in c.prototype&&t.push(U(u,v,"first-input"));var n=i();t.push(n[0](function(n){p(),f(a,n),s(),a=Xn("inp",0)}));n=o();t.push(n[0](function(){p(),f(a)})),t.push(s)}))}],rt="longtask",et=[rt,function(t,n,r){r=_(r,4)[3];n.push(r[0](function(n){t({ev_type:z,payload:{type:"perf",longtasks:[n]}})}))}],ot=["timing",function(n,r,t){var e=_(t,3),o=e[0],i=e[1],t=e[2],e=x(),e=_(A(e),3),u=e[0],c=e[1],a=e[2],f=Fn(function(n){var t=a("navigation")[0],r=t&&t.responseStart;return(!r||r<=0||r>c())&&(t=void 0),{ev_type:V,payload:{isBounced:n,timing:u,navigation_timing:t}}},n,r);r.push(t[0](function(){f(!0)}));function s(){function n(){f(!1)}var t=i();r.push(function(){return t[1](n)}),t[0](n)}r.push(function(){return o[1](s)}),o[0](s)}];tt[0];var it,ut,ct,at={entries:[],observer:void 0},ft="performance";ut=(null===(it=function(){if(!document)return null;if(document.currentScript)return document.currentScript;try{throw new Error}catch(n){var t=0,r=/at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i.exec(n.stack),e=r&&r[2]||!1,o=r&&r[3]||0,i=document.location.href.replace(document.location.hash,""),u="",c=document.getElementsByTagName("script");for(e===i&&(r=document.documentElement.outerHTML,o=new RegExp("(?:[^\\n]+?\\n){0,"+(o-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),u=r.replace(o,"$1").trim());t<c.length;t++){if("interactive"===c[t].readyState)return c[t];if(c[t].src===e)return c[t];if(e===i&&c[t].innerHTML&&c[t].innerHTML.trim()===u)return c[t]}return null}}())||void 0===it?void 0:it.getAttribute("src"))||"",(ct=j())&&ut&&((ct=ct.createElement("a")).href=ut,"/"!==(ut=ct.pathname||"/")[0]&&(ut="/"+ut),ct.href,ct.protocol.slice(0,-1),ct.hostname,ct.search.substring(1),ct.hash);var st="1.13.4";function lt(n,t,r){var e;(r=void 0===r?f(S()):r)&&r.plugins&&(e=n,r.plugins.filter(function(n){return n.name===e&&n.version===st})[0]||r.plugins.push({name:n,version:st,apply:t}))}lt(un,function(u){u.on("init",function(){var n,t,r,e,o,i=null===(o=u.config())||void 0===o?void 0:o.plugins[un];n=u,(o=D(t=i,cn))&&(o=(t=_(on(i=[],[b(n,tn),b(n,en)],o),2))[0],r=t[1],n.on("report",e=function(n){return n.ev_type===Y&&r({type:Y,category:n.payload.api,message:"",data:{method:n.payload.request.method,url:n.payload.request.url,status_code:String(n.payload.response.status)},timestamp:n.payload.request.timestamp}),n}),i.push(function(){n.off("report",e)}),y(n,un,F,i),n.provide("getBreadcrumbs",o),n.provide("addBreadcrumb",r))})}),lt(Tn,function(t){t.on("init",function(){var n=null===(n=t.config())||void 0===n?void 0:n.plugins[Tn];!function(t,n){window.removeEventListener("error",t.pcErr,!0),window.removeEventListener("unhandledrejection",t.pcRej,!0);var r=D(n,Sn);r&&(r=_n(function(n){t.getBreadcrumbs&&(n.payload.breadcrumbs=t.getBreadcrumbs()),t.report(n)},n=[],[b(t,En),b(t,wn),function(){return b(t,bn)}],r),y(t,Tn,F,n),t.provide("captureException",r))}(t,n)})}),lt(ft,function(v){v.on("init",function(){var n=v.pp||at;null!==(s=n.observer)&&void 0!==s&&s.disconnect();var r,t,e,o,i,u,c,a,f,s,l,p=K(v,ft,{});p&&(r=function(){return b(v,kn)},t=function(){return b(v,xn)},e=function(){return b(v,Ln)},o=b(v,Rn),i=b(v,G),u=void 0,E(v,["f_view_0",(c=v,function(n,t){var r=I(c);t(h,function(n){r&&n(r)})})],-1)[0](function(n){u=n})(),a=function(n){n=n.ev_type===J&&(n.payload.name===Zn[0]||n.payload.name===tt[0])||n.ev_type===z?n:d(d({},n),{overrides:u});v.report(n)},f=function(){return E(v,["view_0",L(v)])},[Vn,zn,Qn,tt,Zn].forEach(function(n){!1!==p[n[0]]&&(n[1](a,n=[],[r(),t,e,f]),y(v,ft,J,n))}),[et,ot].forEach(function(n){var t;!1!==p[n[0]]&&(n[1](a,t=[],[o,r,e(),i]),n=n[0]===rt?z:"timing"===n[0]?V:J,y(v,ft,n,t))}),s=(l=_(Hn(v.report.bind(v)),2))[0],l=l[1],v.provide("performanceInit",s),v.provide("performanceSend",l),n.entries.length=0,v.provide("sendCustomPerfMetric",function(n){n=d(d(d({},Gn),n),{isCustom:!0});v.report(Yn(n))}))})}),lt(Cn,function(r){r.on("init",function(){var n,t=K(r,Cn,Pn);t&&(n=[],t=function(r,n,t,e){var o=_(t,1)[0],i=S();if(i){var u=e.ignoreUrls,t=e.includeUrls,c=e.dedupe,a=e.gatherPath,f=m(t),s=m(u),l=_(A(x()),5)[4],p=void 0,v=function(n){var t=location&&location.href;t&&n.url===t||f&&!f.test(n.url)||s&&s.test(n.url)||n.url&&(c&&n.url===p||(p=n.url,(n=Dn(n,l))&&r({ev_type:W,payload:n})))};return n.push(o[0](function(n){n=n||i.event;!n||(n=Bn(n,a))&&v(n)})),v}}(r.report.bind(r),n,[b(r,En)],t),y(r,Cn,W,n),t&&r.provide("reportResourceError",t))})}),lt(Mn,function(e){e.on("init",function(){var n,t,r=null===(t=e.config())||void 0===t?void 0:t.plugins[Mn];n=e,(r=D(t=r,Nn))&&(t=[],An(n.report.bind(n),t,[b(n,Rn),function(){return b(n,X)}],r),y(n,Mn,$,t))})})}();
