/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*!
 * Fuse.js v3.4.6 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Fuse",[],t):"object"==typeof exports?exports.Fuse=t():e.Fuse=t()}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=n(2),a=n(8),s=n(0),c=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.caseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m,S=n.id,x=void 0===S?null:S,b=n.keys,M=void 0===b?[]:b,_=n.shouldSort,L=void 0===_||_,w=n.getFn,A=void 0===w?a:w,C=n.sortFn,I=void 0===C?function(e,t){return e.score-t.score}:C,O=n.tokenize,j=void 0!==O&&O,P=n.matchAllTokens,F=void 0!==P&&P,T=n.includeMatches,z=void 0!==T&&T,E=n.includeScore,K=void 0!==E&&E,$=n.verbose,J=void 0!==$&&$;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k,id:x,keys:M,includeMatches:z,includeScore:K,shouldSort:L,getFn:A,sortFn:I,verbose:J,tokenize:j,matchAllTokens:F},this.setCollection(t)}var t,n,c;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,o=n.fullSearcher,i=this._search(r,o),a=i.weights,s=i.results;return this._computeScore(a,s),this.options.shouldSort&&this._sort(s),t.limit&&"number"==typeof t.limit&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,o=n.length;r<o;r+=1)t.push(new i(n[r],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var i=0,a=n.length;i<a;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var s={},c=0,h=n.length;c<h;c+=1)for(var l=n[c],u=0,f=this.options.keys.length;u<f;u+=1){var d=this.options.keys[u];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:c},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:o}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,i=e.value,a=e.record,c=e.index,h=t.tokenSearchers,l=void 0===h?[]:h,u=t.fullSearcher,f=void 0===u?[]:u,d=t.resultMap,v=void 0===d?{}:d,p=t.results,g=void 0===p?[]:p;if(null!=i){var y=!1,m=-1,k=0;if("string"==typeof i){this._log("\nKey: ".concat(""===n?"-":n));var S=f.search(i);if(this._log('Full text: "'.concat(i,'", score: ').concat(S.score)),this.options.tokenize){for(var x=i.split(this.options.tokenSeparator),b=[],M=0;M<l.length;M+=1){var _=l[M];this._log('\nPattern: "'.concat(_.pattern,'"'));for(var L=!1,w=0;w<x.length;w+=1){var A=x[w],C=_.search(A),I={};C.isMatch?(I[A]=C.score,y=!0,L=!0,b.push(C.score)):(I[A]=1,this.options.matchAllTokens||b.push(1)),this._log('Token: "'.concat(A,'", score: ').concat(I[A]))}L&&(k+=1)}m=b[0];for(var O=b.length,j=1;j<O;j+=1)m+=b[j];m/=O,this._log("Token score average:",m)}var P=S.score;m>-1&&(P=(P+m)/2),this._log("Score average:",P);var F=!this.options.tokenize||!this.options.matchAllTokens||k>=l.length;if(this._log("\nCheck Matches: ".concat(F)),(y||S.isMatch)&&F){var T=v[c];T?T.output.push({key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}):(v[c]={item:a,output:[{key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}]},g.push(v[c]))}}else if(s(i))for(var z=0,E=i.length;z<E;z+=1)this._analyze({key:n,arrayIndex:z,value:i[z],record:a,index:c},{resultMap:v,results:g,tokenSearchers:l,fullSearcher:f})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var o=t[n].output,i=o.length,a=1,s=1,c=0;c<i;c+=1){var h=e?e[o[c].key].weight:1,l=(1===h?o[c].score:o[c].score||.001)*h;1!==h?s=Math.min(s,l):(o[c].nScore=l,a*=l)}t[n].score=1===s?a:s,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===r(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t})),n=null}var o=[];this.options.includeMatches&&o.push(function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var i=n[r];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}}),this.options.includeScore&&o.push(function(e,t){t.score=e.score});for(var i=0,a=e.length;i<a;i+=1){var s=e[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},h=0,l=o.length;h<l;h+=1)o[h](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&o(t.prototype,n),c&&o(t,c),e}();e.exports=c},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(3),i=n(4),a=n(7),s=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.isCaseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=a(this.pattern))}var t,n,s;return t=e,(n=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>n)return o(e,this.pattern,r);var a=this.options,s=a.location,c=a.distance,h=a.threshold,l=a.findAllMatches,u=a.minMatchCharLength;return i(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u})}}])&&r(t.prototype,n),s&&r(t,s),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(n,"\\$&").replace(r,"|")),i=e.match(o),a=!!i,s=[];if(a)for(var c=0,h=i.length;c<h;c+=1){var l=i[c];s.push([e.indexOf(l),l.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,n){var r=n(5),o=n(6);e.exports=function(e,t,n,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,d=void 0!==f&&f,v=i.minMatchCharLength,p=void 0===v?1:v,g=s,y=e.length,m=u,k=e.indexOf(t,g),S=t.length,x=[],b=0;b<y;b+=1)x[b]=0;if(-1!==k){var M=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});if(m=Math.min(M,m),-1!==(k=e.lastIndexOf(t,g+S))){var _=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});m=Math.min(_,m)}}k=-1;for(var L=[],w=1,A=S+y,C=1<<(S<=31?S-1:30),I=0;I<S;I+=1){for(var O=0,j=A;O<j;){r(t,{errors:I,currentLocation:g+j,expectedLocation:g,distance:h})<=m?O=j:A=j,j=Math.floor((A-O)/2+O)}A=j;var P=Math.max(1,g-j+1),F=d?y:Math.min(g+j,y)+S,T=Array(F+2);T[F+1]=(1<<I)-1;for(var z=F;z>=P;z-=1){var E=z-1,K=n[e.charAt(E)];if(K&&(x[E]=1),T[z]=(T[z+1]<<1|1)&K,0!==I&&(T[z]|=(L[z+1]|L[z])<<1|1|L[z+1]),T[z]&C&&(w=r(t,{errors:I,currentLocation:E,expectedLocation:g,distance:h}))<=m){if(m=w,(k=E)<=g)break;P=Math.max(1,2*g-k)}}if(r(t,{errors:I+1,currentLocation:g,expectedLocation:g,distance:h})>m)break;L=T}return{isMatch:k>=0,score:0===w?.001:w,matchedIndices:o(x,p)}}},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=r/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===r?r=i:s||-1===r||((o=i-1)-r+1>=t&&n.push([r,o]),r=-1)}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t,n){var r=n(0);e.exports=function(e,t){return function e(t,n,o){if(n){var i=n.indexOf("."),a=n,s=null;-1!==i&&(a=n.slice(0,i),s=n.slice(i+1));var c=t[a];if(null!=c)if(s||"string"!=typeof c&&"number"!=typeof c)if(r(c))for(var h=0,l=c.length;h<l;h+=1)e(c[h],s,o);else s&&e(c,s,o);else o.push(c.toString())}else o.push(t);return o}(e,t,[])}}])});
;
/*!
 * enquire.js v2.1.6 - Awesome Media Queries in JavaScript
 * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT */

!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.enquire=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(a,b){this.query=a,this.isUnconditional=b,this.handlers=[],this.mql=window.matchMedia(a);var c=this;this.listener=function(a){c.mql=a.currentTarget||a,c.assess()},this.mql.addListener(this.listener)}var e=a(3),f=a(4).each;d.prototype={constuctor:d,addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var b=this.handlers;f(b,function(c,d){if(c.equals(a))return c.destroy(),!b.splice(d,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){f(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";f(this.handlers,function(b){b[a]()})}},b.exports=d},{3:3,4:4}],2:[function(a,b,c){function d(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}var e=a(1),f=a(4),g=f.each,h=f.isFunction,i=f.isArray;d.prototype={constructor:d,register:function(a,b,c){var d=this.queries,f=c&&this.browserIsIncapable;return d[a]||(d[a]=new e(a,f)),h(b)&&(b={match:b}),i(b)||(b=[b]),g(b,function(b){h(b)&&(b={match:b}),d[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},b.exports=d},{1:1,4:4}],3:[function(a,b,c){function d(a){this.options=a,!a.deferSetup&&this.setup()}d.prototype={constructor:d,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},b.exports=d},{}],4:[function(a,b,c){function d(a,b){var c=0,d=a.length;for(c;c<d&&b(a[c],c)!==!1;c++);}function e(a){return"[object Array]"===Object.prototype.toString.apply(a)}function f(a){return"function"==typeof a}b.exports={isFunction:f,isArray:e,each:d}},{}],5:[function(a,b,c){var d=a(2);b.exports=new d},{2:2}]},{},[5])(5)});
;
/*! lazysizes - v5.1.2 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}("undefined"!=typeof window?window:{},function(a,b){"use strict";var c,d;if(function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b])}(),!b||!b.getElementsByClassName)return{init:function(){},cfg:d,noSupport:!0};var e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("Event");return e||(e={}),e.instance=c,h.initEvent(d,!f,!g),h.detail=e,a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?(c&&c.src&&!b[i]("srcset")&&b.setAttribute("srcset",c.src),e({reevaluate:!0,elements:[b]})):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,e=d.throttleDelay,g=d.ricTimeout,h=function(){b=!1,c=f.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==d.ricTimeout&&(g=d.ricTimeout)}:A(function(){k(h)},!0);return function(a){var d;(a=!0===a)&&(g=33),b||(b=!0,d=e-(f.now()-c),d<0&&(d=0),a||d<9?i():k(i,d))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;a<d?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}},D=function(){var g,l,m,o,p,y,D,F,G,H,I,J,K=/^img$/i,L=/^iframe$/i,M="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),N=0,O=0,P=0,Q=-1,R=function(a){P--,(!a||P<0||!a.target)&&(P=0)},S=function(a){return null==J&&(J="hidden"==x(b.body,"visibility")),J||!("hidden"==x(a.parentNode,"visibility")&&"hidden"==x(a,"visibility"))},T=function(a,c){var d,f=a,g=S(a);for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)(g=(x(f,"opacity")||1)>0)&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},U=function(){var a,f,h,j,k,m,n,p,q,r,s,t,u=c.elements;if((o=d.loadMode)&&P<8&&(a=u.length)){for(f=0,Q++;f<a;f++)if(u[f]&&!u[f]._lazyRace)if(!M||c.prematureUnveil&&c.prematureUnveil(u[f]))aa(u[f]);else if((p=u[f][i]("data-expand"))&&(m=1*p)||(m=O),r||(r=!d.expand||d.expand<1?e.clientHeight>500&&e.clientWidth>500?500:370:d.expand,c._defEx=r,s=r*d.expFactor,t=d.hFac,J=null,O<s&&P<1&&Q>2&&o>2&&!b.hidden?(O=s,Q=0):O=o>1&&Q>1&&P<6?r:N),q!==m&&(y=innerWidth+m*t,D=innerHeight+m,n=-1*m,q=m),h=u[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*t&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||S(u[f]))&&(l&&P<3&&!p&&(o<3||Q<4)||T(u[f],m))){if(aa(u[f]),k=!0,P>9)break}else!k&&l&&!j&&P<4&&Q<4&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=u[f][i](d.sizesAttr)))&&(j=g[0]||u[f]);j&&!k&&aa(j)}},V=B(U),W=function(a){var b=a.target;if(b._lazyCache)return void delete b._lazyCache;R(a),s(b,d.loadedClass),t(b,d.loadingClass),u(b,Y),v(b,"lazyloaded")},X=A(W),Y=function(a){X({target:a.target})},Z=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},$=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},_=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},s(a,d.loadingClass),p&&(clearTimeout(m),m=k(R,2500),u(a,Y,!0)),l&&q.call(j.getElementsByTagName("source"),$),h?a.setAttribute("srcset",h):g&&!l&&(L.test(a.nodeName)?Z(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){var b=a.complete&&a.naturalWidth>1;p&&!b||(b&&s(a,"ls-is-cached"),W(o),a._lazyCache=!0,k(function(){"_lazyCache"in a&&delete a._lazyCache},9)),"lazy"==a.loading&&P--},!0)}),aa=function(a){if(!a._lazyRace){var b,c=K.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass)||!r(a,d.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,P++,_(a,b,f,e,c))}},ba=C(function(){d.loadMode=3,V()}),ca=function(){3==d.loadMode&&(d.loadMode=2),ba()},da=function(){if(!l){if(f.now()-p<999)return void k(da,999);l=!0,d.loadMode=3,V(),j("scroll",ca,!0)}};return{_:function(){p=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),j("scroll",V,!0),j("resize",V,!0),a.MutationObserver?new MutationObserver(V).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",V,!0),e[h]("DOMAttrModified",V,!0),setInterval(V,999)),j("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(a){b[h](a,V,!0)}),/d$|^c/.test(b.readyState)?da():(j("load",da),b[h]("DOMContentLoaded",V),k(da,2e4)),c.elements.length?(U(),z._lsFlush()):V()},checkElems:V,unveil:aa,_aLSL:ca}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;f<g;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width)&&d!==a._lazysizesWidth&&c(a,f,e,d))},f=function(){var b,c=a.length;if(c)for(b=0;b<c;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){!F.i&&b.getElementsByClassName&&(F.i=!0,E._(),D._())};return k(function(){d.init&&F()}),c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}});
;
var getParents=function(elem,selector){var parents=[];var firstChar;if(selector){firstChar=selector.charAt(0);}
for(;elem&&elem!==document;elem=elem.parentNode){if(selector){if(firstChar==='.'){if(elem.classList.contains(selector.substr(1))){parents.push(elem);}}
if(firstChar==='#'){if(elem.id===selector.substr(1)){parents.push(elem);}}
if(firstChar==='['){if(elem.hasAttribute(selector.substr(1,selector.length-1))){parents.push(elem);}}
if(elem.tagName.toLowerCase()===selector){parents.push(elem);}}else{parents.push(elem);}}
if(parents.length===0){return null;}else{return parents;}};
;
var fadeOut=function(node,duration){node.style.opacity=1;var start=performance.now();requestAnimationFrame(function tick(timestamp){var easing=(timestamp-start)/duration;node.style.opacity=Math.max(1-easing,0);if(easing<1){requestAnimationFrame(tick);}else{node.style.opacity='';node.style.display='none';}});}
var fadeIn=function(node,duration){if(getComputedStyle(node).display!=='none')return;if(node.style.display==='none'){node.style.display='';}else{node.style.display='block';}
node.style.opacity=0;var start=performance.now();requestAnimationFrame(function tick(timestamp){var easing=(timestamp-start)/duration;node.style.opacity=Math.min(easing,1);if(easing<1){requestAnimationFrame(tick);}else{node.style.opacity='';}});}
;
var closest=function(node,selector){return(node.closest||function(_selector){do{if((node.matches||node.msMatchesSelector).call(node,_selector)){return node;}
node=node.parentElement||node.parentNode;}while(node!==null&&node.nodeType===1);return null;}).call(node,selector);}
;


  "use strict";

  // ========================== poiyfill ==========================
  // forEach
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  // includes
  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      'use strict';

      if (search instanceof RegExp) {
        throw TypeError('first argument must not be a RegExp');
      }
      if (start === undefined) { start = 0; }
      return this.indexOf(search, start) !== -1;
    };
  }

  // append
  Document.prototype.append = Element.prototype.append = function append() {
    this.appendChild(_mutation(arguments));
  };
  function _mutation(nodes) {
    if (!nodes.length) {
      throw new Error('DOM Exception 8');
    } else if (nodes.length === 1) {
      return typeof nodes[0] === 'string' ? document.createTextNode(nodes[0]) : nodes[0];
    } else {
      var
      fragment = document.createDocumentFragment(),
      length = nodes.length,
      index = -1,
      node;

      while (++index < length) {
        node = nodes[index];

        fragment.appendChild(typeof node === 'string' ? document.createTextNode(node) : node);
      }

      return fragment;
    }
  }

  // startsWith
  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
      position = position || 0;
      return this.indexOf(searchString, position) === position;
    };
  }
  // ===============================================================


  document.addEventListener('DOMContentLoaded', function () {
    // ===================== navbar collapse ======================
    var navCollapseBtn = document.querySelector('.navbar__burger');
    navCollapseBtn ? navCollapseBtn.addEventListener('click', function (e) {
      var navCollapse = document.querySelector('.navbarm__collapse');

      if (navCollapse) {
        var dataOpen = navCollapse.getAttribute('data-open');

        if (dataOpen === 'true') {
          navCollapse.setAttribute('data-open', 'false');
          navCollapse.style.maxHeight = 0;
          navCollapseBtn.classList.remove('is-active');
        } else {
          navCollapse.setAttribute('data-open', 'true');
          navCollapse.style.maxHeight = navCollapse.scrollHeight + "px";
          navCollapseBtn.classList.add('is-active');
        }
      }
    }) : null;
    // ============================================================


    // =================== search-result desktop ==================
    var summaryContainer = document.querySelector('.summary__container');
    var searchResult = document.querySelector('.search-result');
    var searchResultCloseBtn = document.querySelector('.search-result__close');
    searchResultCloseBtn ? searchResultCloseBtn.addEventListener('click', function (e) {
      searchResult.setAttribute('data-display', 'none');
      summaryContainer.setAttribute('data-display', 'block');
    }) : null;
    // =============================================================


    // ============================ tab ============================
    document.querySelectorAll('.tab') ? 
    document.querySelectorAll('.tab').forEach(function(elem, idx) {
      var containerId = elem.getAttribute('id');
      var containerElem = elem;
      var tabLinks = elem.querySelectorAll('.tab__link');
      var tabContents = elem.querySelectorAll('.tab__content');
      var ids = [];

      tabLinks && tabLinks.length > 0 ?
      tabLinks.forEach(function(link, index, self) {
        link.onclick = function(e) {
          for (var i = 0; i < self.length; i++) {
            if (index === parseInt(i, 10)) {
              if (!self[i].classList.contains('active')) {
                self[i].classList.add('active');
                tabContents[i].style.display = 'block';
              }
            } else {
              self[i].classList.remove('active');
              tabContents[i].style.display = 'none';
            }
          }
        }
      }) : null;
    }) : null;
    // =============================================================


    // ========================== codetab ==========================
    document.querySelectorAll('.codetab') ? 
    document.querySelectorAll('.codetab').forEach(function(elem, idx) {
      var containerId = elem.getAttribute('id');
      var containerElem = elem;
      var codetabLinks = elem.querySelectorAll('.codetab__link');
      var codetabContents = elem.querySelectorAll('.codetab__content');
      var ids = [];

      codetabLinks && codetabLinks.length > 0 ?
      codetabLinks.forEach(function(link, index, self) {
        link.onclick = function(e) {
          for (var i = 0; i < self.length; i++) {
            if (index === parseInt(i, 10)) {
              if (!self[i].classList.contains('active')) {
                self[i].classList.add('active');
                codetabContents[i].style.display = 'block';
              }
            } else {
              self[i].classList.remove('active');
              codetabContents[i].style.display = 'none';
            }
          }
        }
      }) : null;
    }) : null;
    // =============================================================


    // ========================= go to top =========================
    var gttBtn = document.getElementById("gtt");
    gttBtn.style.display = "none";
    gttBtn.addEventListener('click', function () {
      if (window.document.documentMode) {
        document.documentElement.scrollTop = 0;
      } else {
        scrollToTop(250);
      }
    });

    function scrollToTop(scrollDuration) {
      var scrollStep = -window.scrollY / (scrollDuration / 15);
      var scrollInterval = setInterval(function () {
        if (window.scrollY != 0) {
          window.scrollBy(0, scrollStep);
        }
        else clearInterval(scrollInterval);
      }, 15);
    }

    var scrollFunction = function () {
      if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        gttBtn.style.display = "block";
      } else {
        gttBtn.style.display = "none";
      }
    }
    // ============================================================


    // ========================== expand ==========================
    var expandBtn = document.querySelectorAll('.expand__button');

    for (let i = 0; i < expandBtn.length; i++) {
      expandBtn[i].addEventListener("click", function () {
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          this.querySelector('svg').classList.add('expand-icon__right');
          this.querySelector('svg').classList.remove('expand-icon__down');
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          this.querySelector('svg').classList.remove('expand-icon__right');
          this.querySelector('svg').classList.add('expand-icon__down');
        }
      });
    }
    // ============================================================


    // ========================== scroll ==========================
    var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var tocElem = document.querySelector('.toc');
    var tableOfContentsElem = tocElem ? tocElem.querySelector('#TableOfContents') : null;
    var toggleTocElem = document.getElementById('toggle-toc');
    var singleContentsElem = document.querySelector('.single__contents');
    var navbar = document.querySelector('.navbar');
    var tocFlexbox = document.querySelector('.toc__flexbox');
    var tocFlexboxOuter = document.querySelector('.toc__flexbox--outer');
    var expandContents = document.querySelectorAll('.expand__content');
    var boxContents = document.querySelectorAll('.box');
    var notAllowedTitleIds = null;

    // {{ $tocFolding := $.Param "tocFolding" }}
    // var tocFolding = JSON.parse({{ $tocFolding | jsonify }});
    // {{ $tocLevels := ($.Param "tocLevels") }}
    // var tocLevels = JSON.parse({{ $tocLevels | jsonify }});
    
    if (tocLevels) {
      tocLevels = tocLevels.toString();
    } else {
      tocLevels = "h1, h2, h3, h4, h5, h6";
    }

    // tab
    singleContentsElem && singleContentsElem.querySelectorAll(".tab") ?
    singleContentsElem.querySelectorAll(".tab").forEach(function (elem) {
      elem.querySelectorAll(tocLevels).forEach(function (element) {
        notAllowedTitleIds = Array.isArray(notAllowedTitleIds) ?
          notAllowedTitleIds.concat(element.getAttribute('id')) :
          [element.getAttribute('id')];
      });
    }) : null;

    // expand
    expandContents ? expandContents.forEach(function(elem) {
      elem.querySelectorAll(tocLevels).forEach(function (element) {
        notAllowedTitleIds = Array.isArray(notAllowedTitleIds) ?
          notAllowedTitleIds.concat(element.getAttribute('id')) :
          [element.getAttribute('id')];
      });
    }) : null;

    // box
    boxContents ? boxContents.forEach(function(elem) {
      elem.querySelectorAll(tocLevels).forEach(function (element) {
        notAllowedTitleIds = Array.isArray(notAllowedTitleIds) ?
          notAllowedTitleIds.concat(element.getAttribute('id')) :
          [element.getAttribute('id')];
      });
    }) : null;

    
    window.onscroll = function () {
      scrollFunction();
      
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) { // scroll down
        if (st < 250) {
          gttBtn.style.display = "none";
        } else {
          gttBtn.style.display = "block";
        }

        if (st < 45) {
          return null;
        }
        
        if (!navbar.classList.contains('navbar--hide')) {
          navbar.classList.add('navbar--hide');
        } else if (navbar.classList.contains('navbar--show')) {
          navbar.classList.remove('navbar--show');
        }

        if (singleContentsElem) {
          if (singleContentsElem.querySelectorAll(tocLevels).length > 0) {
            singleContentsElem.querySelectorAll(tocLevels).forEach(function (elem) {
              if (toggleTocElem && !toggleTocElem.checked) {
                return null;
              }

              if (notAllowedTitleIds && notAllowedTitleIds.includes(elem.getAttribute('id'))) {
                return null;
              }
              
              if (document.documentElement.scrollTop >= elem.offsetTop) {
                if (tableOfContentsElem) {
                  var id = elem.getAttribute('id');
                  tocElem.querySelectorAll('a').forEach(function (elem) {
                    elem.classList.remove('active');
                  });
                  tocElem.querySelector('a[href="#' + id + '"]') ?
                    tocElem.querySelector('a[href="#' + id + '"]').classList.add('active') : null;

                  if (false === tocFolding) {
                    
                  } else {
                    tableOfContentsElem.querySelectorAll('ul') ?
                      tableOfContentsElem.querySelectorAll('ul').forEach(function (rootUl) {
                        rootUl.querySelectorAll('li').forEach(function (liElem) {
                          liElem.querySelectorAll('ul').forEach(function (ulElem) {
                            ulElem.style.display = 'none';
                          });
                        });
                      }) : null;
                  }

                  var curElem = tableOfContentsElem.querySelector("[href='#" + id + "']");
                  if (curElem && curElem.nextElementSibling) {
                    curElem.nextElementSibling.style.display = 'block';
                  }
                  getParents(curElem, 'ul') ?
                    getParents(curElem, 'ul').forEach(function (elem) {
                      elem.style.display = 'block';
                    }) : null;
                }
              }
            });
          } else {
            if (tocFlexbox) {
              tocFlexbox.setAttribute('data-position', '');
              if (!tocFlexbox.classList.contains('hide')) {
                tocFlexbox.classList.add('hide');
              }
            }
            if (tocFlexboxOuter) {
              tocFlexboxOuter.setAttribute('data-position', '');
              if (!tocFlexboxOuter.classList.contains('hide')) {
                tocFlexboxOuter.classList.add('hide');
              }
            }
          }
        }
      } else { // scroll up
        if (st < 250) {
          gttBtn.style.display = "none";
        }

        if (navbar.classList.contains('navbar--hide')) {
          navbar.classList.remove('navbar--hide');
        } else if (!navbar.classList.contains('navbar--show')) {
          navbar.classList.add('navbar--show');
        }

        if (singleContentsElem) {
          if (singleContentsElem.querySelectorAll(tocLevels).length > 0) {
            singleContentsElem.querySelectorAll(tocLevels).forEach(function (elem) {
              if (toggleTocElem && !toggleTocElem.checked) {
                return null;
              }
              
              if (notAllowedTitleIds && notAllowedTitleIds.includes(elem.getAttribute('id'))) {
                return null;
              }

              if (document.documentElement.scrollTop >= elem.offsetTop) {
                if (tableOfContentsElem) {
                  var id = elem.getAttribute('id');
                  tocElem.querySelectorAll('a').forEach(function (elem) {
                    elem.classList.remove('active');
                  });
                  tocElem.querySelector('a[href="#' + id + '"]') ?
                    tocElem.querySelector('a[href="#' + id + '"]').classList.add('active') : null;

                  if (false === tocFolding) {
                    
                  } else {
                    tableOfContentsElem.querySelectorAll('ul') ?
                      tableOfContentsElem.querySelectorAll('ul').forEach(function (rootUl) {
                        rootUl.querySelectorAll('li').forEach(function (liElem) {
                          liElem.querySelectorAll('ul').forEach(function (ulElem) {
                            ulElem.style.display = 'none';
                          });
                        });
                      }) : null;
                  }

                  var curElem = tableOfContentsElem.querySelector("[href='#" + id + "']");
                  if (curElem && curElem.nextElementSibling) {
                    curElem.nextElementSibling.style.display = 'block';
                  }
                  getParents(curElem, 'ul') ?
                    getParents(curElem, 'ul').forEach(function (elem) {
                      elem.style.display = 'block';
                    }) : null;
                }
              }
            });
          } else {
            if (tocFlexbox && !tocFlexbox.classList.contains('hide')) {
              tocFlexbox.classList.add('hide');
            }
            if (tocFlexboxOuter && !tocFlexboxOuter.classList.contains('hide')) {
              tocFlexboxOuter.classList.add('hide');
            }
          }
          
        }

        if (tableOfContentsElem && document.documentElement.scrollTop < 250) {
          if (false === tocFolding) {

          } else {
            tableOfContentsElem.querySelector('ul') ?
              tableOfContentsElem.querySelector('ul').querySelectorAll('li').forEach(function (liElem) {
                liElem.querySelectorAll('ul').forEach(function (ulElem) {
                  ulElem.style.display = 'none';
                });
              }) : null;
          }
        }
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };
  // ============================================================


  // ======================= theme change =======================
    var localTheme = localStorage.getItem('theme');
    var rootEleme = document.getElementById('root');
    var selectThemeElem = document.querySelectorAll('.select-theme');
    var selectThemeItemElem = document.querySelectorAll('.select-theme__item');

    var setMetaColor = function(themeColor) {
      var metaMsapplicationTileColor = document.getElementsByName('msapplication-TileColor')[0];
      var metaThemeColor = document.getElementsByName('theme-color')[0];
      var metaMsapplicationNavbuttonColor = document.getElementsByName('msapplication-navbutton-color')[0];
      var metaAppleMobileWebAappStatusBarStyle = document.getElementsByName('apple-mobile-web-app-status-bar-style')[0];

      if (themeColor.includes('dark')) {
        metaMsapplicationTileColor.setAttribute('content', '#fcfcfa');
        metaThemeColor.setAttribute('content', '#403E41');
        metaMsapplicationNavbuttonColor.setAttribute('content', '#403E41');
        metaAppleMobileWebAappStatusBarStyle.setAttribute('content', '#403E41');
      } else if (themeColor.includes('light')) {
        metaMsapplicationTileColor.setAttribute('content', '#555');
        metaThemeColor.setAttribute('content', '#eee');
        metaMsapplicationNavbuttonColor.setAttribute('content', '#eee');
        metaAppleMobileWebAappStatusBarStyle.setAttribute('content', '#eee');
      } else if (themeColor.includes('hacker')) {
        metaMsapplicationTileColor.setAttribute('content', '#e3cd26');
        metaThemeColor.setAttribute('content', '#252526');
        metaMsapplicationNavbuttonColor.setAttribute('content', '#252526');
        metaAppleMobileWebAappStatusBarStyle.setAttribute('content', '#252526');
      } else if (themeColor.includes('solarized')) {
        metaMsapplicationTileColor.setAttribute('content', '#d3af86');
        metaThemeColor.setAttribute('content', '#51412c');
        metaMsapplicationNavbuttonColor.setAttribute('content', '#51412c');
        metaAppleMobileWebAappStatusBarStyle.setAttribute('content', '#51412c');
      } else if (themeColor.includes('kimbie')) {
        metaMsapplicationTileColor.setAttribute('content', '#586e75');
        metaThemeColor.setAttribute('content', '#eee8d5');
        metaMsapplicationNavbuttonColor.setAttribute('content', '#eee8d5');
        metaAppleMobileWebAappStatusBarStyle.setAttribute('content', '#eee8d5');
      } 
    }
    
    if (localTheme) {
      selectThemeItemElem ? 
      selectThemeItemElem.forEach(function (elem) {
        if (elem.text.trim() === localTheme) {
          elem.classList.add('is-active');
        } else {
          elem.classList.remove('is-active');
        }
      }) : null;

      setMetaColor(localTheme);
    } else {
      setMetaColor(rootEleme.className);
    }

    selectThemeItemElem ? 
    selectThemeItemElem.forEach(function (v, i) {
      v.addEventListener('click', function (e) {
        var selectedThemeVariant = e.target.text.trim();
        localStorage.setItem('theme', selectedThemeVariant);
        setMetaColor(selectedThemeVariant);

        rootEleme.removeAttribute('class');
        rootEleme.classList.add('theme__' + selectedThemeVariant);
        selectThemeElem.forEach(function(rootElem) {
          rootElem.querySelectorAll('a').forEach(function (elem) {
            if (elem.classList) {
              if (elem.text.trim() === selectedThemeVariant) {
                if (!elem.classList.contains('is-active')) {
                  elem.classList.add('is-active');
                }
              } else {
                if (elem.classList.contains('is-active')) {
                  elem.classList.remove('is-active');
                }
              }
            }
          });
        });

        if (window.mermaid) {
          if (selectedThemeVariant === "dark" || selectedThemeVariant === "hacker") {
            mermaid.initialize({ theme: 'dark' });
            location.reload();
          } else {
            mermaid.initialize({ theme: 'default' });
            location.reload();
          }
        }

        var utterances = document.getElementById('utterances');
        if (utterances) {
          utterances.querySelector('iframe').contentWindow.postMessage({
            type: 'set-theme',
            theme: selectedThemeVariant === "dark" || selectedThemeVariant === "hacker" ? 'photon-dark' : selectedThemeVariant === 'kimbie' ? 'github-dark-orange' : 'github-light',
          }, 'https://utteranc.es');
        }

        var twitterCards = document.querySelectorAll('.twitter-timeline');
        if (twitterCards) {
          window.postMessage({
            type: 'set-twitter-theme',
            theme: selectedThemeVariant === 'light' || selectedThemeVariant === 'solarized' ? 'light' : 'dark',
          });
        }
      });
    }) : null;
  // ============================================================


  // ========================== search ==========================
    // {{ $baseurl := $.Site.BaseURL }}
    // var baseurl = JSON.parse({{ $baseurl | jsonify }});
    // {{ $permalink := .Permalink }}
    // var permalink = JSON.parse({{ $permalink | jsonify }});
    // {{ $langprefix := $.Site.LanguagePrefix }}
    // var langprefix = JSON.parse({{ $langprefix | jsonify }});
    // var searchResults = null;
    // var searchMenu = null;
    // var searchText = null;
    
    // {{ $enableSearch := ($.Param "enableSearch") }}
    // var enableSearch = JSON.parse({{ $enableSearch | jsonify }});
    // {{ $enableSearchHighlight := ($.Param "enableSearchHighlight") }}
    // var enableSearchHighlight = JSON.parse({{ $enableSearchHighlight | jsonify }});
    // {{ $searchResultPosition := ($.Param "searchResultPosition") }}
    // var searchResultPosition = JSON.parse({{ $searchResultPosition | jsonify }});
    // {{ $sectionType := .Type }}
    // var sectionType = JSON.parse({{ $sectionType | jsonify }});
    // {{ $kind := .Kind }}
    // var kind = JSON.parse({{ $kind | jsonify }});
    
    // var fuse = null;

    if (enableSearch) {
      (function initFuse() {
        var xhr = new XMLHttpRequest();
        if (sectionType === "publication" && kind !== "page") {
          xhr.open('GET', permalink + "index.json");
        } else {
          xhr.open('GET', baseurl + langprefix + "/index.json");
        }
        
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        xhr.onload = function () {
          if (xhr.status === 200) {
            fuse = new Fuse(JSON.parse(xhr.response.toString('utf-8')), {
              keys: sectionType.includes('publication') ? ['title', 'abstract'] : ['title', 'description', 'content'],
              includeMatches: enableSearchHighlight,
              shouldSort: true,
              threshold: 0.4,
              location: 0,
              distance: 100,
              maxPatternLength: 32,
              minMatchCharLength: 1,
            });
            window.fuse = fuse;
          }
          else {
            console.error('[' + xhr.status + ']Error:', xhr.statusText);
          }
        };
        xhr.send();
      })();
    }

    function makeLi(ulElem, obj) {
      var li = document.createElement('li');
      li.className = 'search-result__item';
      
      var a = document.createElement('a');
      a.innerHTML = obj.title;
      a.setAttribute('class', 'search-result__item--title');
      a.setAttribute('href', obj.permalink);

      var descDiv = document.createElement('div');
      descDiv.setAttribute('class', 'search-result__item--desc');
      if (obj.description) {
        descDiv.innerHTML = obj.description;
      } else if (obj.content) {
        descDiv.innerHTML = obj.content.substring(0, 225);
      }
      
      li.appendChild(a);
      li.appendChild(descDiv);
      ulElem.appendChild(li);
    }

    function makeHighlightLi(ulElem, obj) {
      var li = document.createElement('li');
      li.className = 'search-result__item';
      var descDiv = null;

      var a = document.createElement('a');
      a.innerHTML = obj.item.title;
      a.setAttribute('class', 'search-result__item--title');
      a.setAttribute('href', obj.item.uri);

      if (obj.matches && obj.matches.length) {
        for (var i = 0; i < obj.matches.length; i++) {
          if ('title' === obj.matches[i].key) {
            a = document.createElement('a');
            a.innerHTML = generateHighlightedText(obj.matches[i].value, obj.matches[i].indices);
            a.setAttribute('class', 'search-result__item--title');
            a.setAttribute('href', obj.item.uri);
          }
          
          if ('description' === obj.matches[i].key) {
            descDiv = document.createElement('div');
            descDiv.setAttribute('class', 'search-result__item--desc');
            descDiv.innerHTML = generateHighlightedText(obj.item.description, obj.matches[i].indices);
          } else if ('content' === obj.matches[i].key) {
            if (!descDiv) {
              descDiv = document.createElement('div');
              descDiv.setAttribute('class', 'search-result__item--desc');
              descDiv.innerHTML = generateHighlightedText(obj.item.content.substring(0, 150), obj.matches[i].indices);
            }
          } else {
            if (obj.item.description) {
              descDiv = document.createElement('div');
              descDiv.setAttribute('class', 'search-result__item--desc');
              descDiv.innerHTML = obj.item.description;
            } else {
              descDiv = document.createElement('div');
              descDiv.setAttribute('class', 'search-result__item--desc');
              descDiv.innerHTML = obj.item.content.substring(0, 150);
            }
          }
        }

        li.appendChild(a);
        if (descDiv) {
          li.appendChild(descDiv);
        }
        if (li) {
          ulElem.appendChild(li);
        }
      }
    }

    function renderSearchResultsSide(searchText, results) {
      searchResults = document.getElementById('search-results');
      searchMenu = document.getElementById('search-menu');
      searchResults.setAttribute('class', 'dropdown is-active');
      
      var ul = document.createElement('ul');
      ul.setAttribute('class', 'dropdown-content search-content');

      if (results.length) {
        results.forEach(function (result) {
          var li = document.createElement('li');
          var a = document.createElement('a');
          a.setAttribute('href', result.uri);
          a.setAttribute('class', 'dropdown-item');
          a.appendChild(li);

          var titleDiv = document.createElement('div');
          titleDiv.innerHTML = result.title;
          titleDiv.setAttribute('class', 'menu-item__title');

          var descDiv = document.createElement('div');
          descDiv.setAttribute('class', 'menu-item__desc');
          if (result.description) {
            descDiv.innerHTML = result.description;
          } else if (result.content) {
            descDiv.innerHTML = result.content.substring(0, 150);
          }

          li.appendChild(titleDiv);
          li.appendChild(descDiv);
          ul.appendChild(a);
        });
      } else {
        var li = document.createElement('li');
        li.setAttribute('class', 'dropdown-item');
        li.innerText = 'No results found';
        ul.appendChild(li);
      }

      while (searchMenu.hasChildNodes()) {
        searchMenu.removeChild(
          searchMenu.lastChild
        );
      }
      
      searchMenu.appendChild(ul);
    }

    function renderSearchHighlightResultsSide(searchText, results) {
      searchResults = document.getElementById('search-results');
      searchMenu = document.getElementById('search-menu');
      searchResults.setAttribute('class', 'dropdown is-active');

      var ul = document.createElement('ul');
      ul.setAttribute('class', 'dropdown-content search-content');

      if (results.length) {
        results.forEach(function (result) {
          var li = document.createElement('li');
          var a = document.createElement('a');
          var descDiv = null;

          a.setAttribute('href', result.item.uri);
          a.setAttribute('class', 'dropdown-item');
          a.appendChild(li);

          var titleDiv = document.createElement('div');
          titleDiv.innerHTML = result.item.title;
          titleDiv.setAttribute('class', 'menu-item__title');
          
          if (result.matches && result.matches.length) {
            for (var i = 0; i < result.matches.length; i++) {
              if ('title' === result.matches[i].key) {
                titleDiv.innerHTML = generateHighlightedText(result.matches[i].value, result.matches[i].indices);
              }

              if ('description' === result.matches[i].key) {
                descDiv = document.createElement('div');
                descDiv.setAttribute('class', 'menu-item__desc');
                descDiv.innerHTML = generateHighlightedText(result.item.description, result.matches[i].indices);
              } else if ('content' === result.matches[i].key) {
                if (!descDiv) {
                  descDiv = document.createElement('div');
                  descDiv.setAttribute('class', 'menu-item__desc');
                  descDiv.innerHTML = generateHighlightedText(result.item.content.substring(0, 150), result.matches[i].indices);
                }
              } else {
                if (result.item.description) {
                  descDiv = document.createElement('div');
                  descDiv.setAttribute('class', 'menu-item__desc');
                  descDiv.innerHTML = result.item.description;
                } else {
                  descDiv = document.createElement('div');
                  descDiv.setAttribute('class', 'menu-item__desc');
                  descDiv.innerHTML = result.item.content.substring(0, 150);
                }
              }
            }
            
            li.appendChild(titleDiv);
            if (descDiv) {
              li.appendChild(descDiv);
            }
            ul.appendChild(a);
          }
        });
      } else {
        var li = document.createElement('li');
        li.setAttribute('class', 'dropdown-item');
        li.innerText = 'No results found';
        ul.appendChild(li);
      }

      while (searchMenu.hasChildNodes()) {
        searchMenu.removeChild(
          searchMenu.lastChild
        );
      }
      searchMenu.appendChild(ul);
    }

    function renderSearchResultsMobile(searchText, results) {
      searchResults = document.getElementById('search-mobile-results');

      var content = document.createElement('div');
      content.setAttribute('class', 'mobile-search__content');

      if (results.length > 0) {
        results.forEach(function (result) {
          var item = document.createElement('a');
          item.setAttribute('href', result.uri);
          item.innerHTML = '<div class="mobile-search__item"><div class="mobile-search__item--title">📄 ' + result.title + '</div><div class="mobile-search__item--desc">' + (result.description ? result.description : result.content) + '</div></div>';
          content.appendChild(item);
        });
      } else {
        var item = document.createElement('span');
        content.appendChild(item);
      }

      let wrap = document.getElementById('search-mobile-results');
      while (wrap.firstChild) {
        wrap.removeChild(wrap.firstChild)
      }
      searchResults.appendChild(content);      
    }

    function renderSearchHighlightResultsMobile(searchText, results) {
      searchResults = document.getElementById('search-mobile-results');

      var ul = document.createElement('div');
      ul.setAttribute('class', 'mobile-search__content');

      if (results.length) {
        results.forEach(function (result) {
          var li = document.createElement('li');
          var a = document.createElement('a');
          var descDiv = null;

          a.setAttribute('href', result.item.uri);
          a.appendChild(li);
          li.setAttribute('class', 'mobile-search__item');

          var titleDiv = document.createElement('div');
          titleDiv.innerHTML = result.item.title;
          titleDiv.setAttribute('class', 'mobile-search__item--title');
          
          if (result.matches && result.matches.length) {
            for (var i = 0; i < result.matches.length; i++) {
              if ('title' === result.matches[i].key) {
                titleDiv.innerHTML = generateHighlightedText(result.matches[i].value, result.matches[i].indices);
              }

              if ('description' === result.matches[i].key) {
                descDiv = document.createElement('div');
                descDiv.setAttribute('class', 'mobile-search__item--desc');
                descDiv.innerHTML = generateHighlightedText(result.item.description, result.matches[i].indices);
              } else if ('content' === result.matches[i].key) {
                if (!descDiv) {
                  descDiv = document.createElement('div');
                  descDiv.setAttribute('class', 'mobile-search__item--desc');
                  descDiv.innerHTML = generateHighlightedText(result.item.content.substring(0, 150), result.matches[i].indices);
                }
              } else {
                if (result.item.description) {
                  descDiv = document.createElement('div');
                  descDiv.setAttribute('class', 'mobile-search__item--desc');
                  descDiv.innerHTML = result.item.description;
                } else {
                  descDiv = document.createElement('div');
                  descDiv.setAttribute('class', 'mobile-search__item--desc');
                  descDiv.innerHTML = result.item.content.substring(0, 150);
                }
              }
            }
            
            li.appendChild(titleDiv);
            if (descDiv) {
              li.appendChild(descDiv);
            }
            ul.appendChild(a);
          }
        });
      } else {
        var item = document.createElement('span');
        ul.appendChild(item);
      }

      let wrap = document.getElementById('search-mobile-results');
      while (wrap.firstChild) {
        wrap.removeChild(wrap.firstChild)
      }
      searchResults.appendChild(ul);
    }

    function generateHighlightedText(text, regions) {
      if (!regions) {
        return text;
      }

      var content = '', nextUnhighlightedRegionStartingIndex = 0;

      regions.forEach(function(region) {
        if (region[0] === region[1]) {
          return null;
        }
        
        content += '' +
          text.substring(nextUnhighlightedRegionStartingIndex, region[0]) +
          '<span class="search__highlight">' +
            text.substring(region[0], region[1] + 1) +
          '</span>' +
        '';
        nextUnhighlightedRegionStartingIndex = region[1] + 1;
      });

      content += text.substring(nextUnhighlightedRegionStartingIndex);

      return content;
    };

    var searchElem = document.getElementById('search');
    var searchMobile = document.getElementById('search-mobile');
    var searchResultsContainer = document.getElementById('search-results');

    searchElem ?
    searchElem.addEventListener('input', function(e) {
      if (!e.target.value | window.innerWidth < 770) {
        searchResultsContainer ? searchResultsContainer.setAttribute('class', 'dropdown') : null;
        searchResult ? searchResult.setAttribute('data-display', 'none') : null;
        summaryContainer ? summaryContainer.setAttribute('data-display', 'block') : null;
        return null;
      }

      searchText = e.target.value;
      var results = fuse.search(e.target.value);
      
      if (searchResultPosition === "main") {
        if (enableSearchHighlight) {
          renderSearchHighlightResultsMain(searchText, results);
        } else {
          renderSearchResultsMain(searchText, results);
        }
      } else {
        if (enableSearchHighlight) {
          renderSearchHighlightResultsSide(searchText, results);
        } else {
          renderSearchResultsSide(searchText, results);
        }
        
        var dropdownItems = searchResultsContainer.querySelectorAll('.dropdown-item');
        dropdownItems ? dropdownItems.forEach(function(item) {
          item.addEventListener('mousedown', function(e) {
            e.target.click();
          });
        }) : null;
      }
    }) : null;

    searchElem ? 
    searchElem.addEventListener('blur', function() {
      if (window.innerWidth < 770) {
        return null;
      }
      searchResultsContainer ? searchResultsContainer.setAttribute('class', 'dropdown') : null;
    }) : null;

    searchElem ? 
    searchElem.addEventListener('click', function(e) {
      if (window.innerWidth < 770) {
        return null;
      }
      if (!e.target.value) {
        searchResultsContainer ? searchResultsContainer.setAttribute('class', 'dropdown') : null;
        return null;
      }

      searchText = e.target.value;
      var results = fuse.search(e.target.value);

      if (searchResultPosition === "main") {
        if (enableSearchHighlight) {
          renderSearchHighlightResultsMain(searchText, results);
        } else {
          renderSearchResultsMain(searchText, results);
        }
      } else{
        if (enableSearchHighlight) {
          renderSearchHighlightResultsSide(searchText, results);
        } else {
          renderSearchResultsSide(searchText, results);
        }

        var dropdownItems = searchResultsContainer.querySelectorAll('.dropdown-item');
        dropdownItems ? dropdownItems.forEach(function (item) {
          item.addEventListener('mousedown', function (e) {
            e.target.click();
          });
        }) : null;
      }
    }) : null;

    var searchMenuElem = document.getElementById("search-menu");
    var activeItem = document.querySelector('#search-menu .dropdown-item.is-active');
    var activeIndex = null;
    var items = null;
    var searchContainerMaxHeight = 350;

    searchElem ? 
    searchElem.addEventListener('keydown', function(e) {
      if (window.innerWidth < 770) {
        return null;
      }

      if (e.key === 'Escape') {
        searchResult ? searchResult.setAttribute('data-display', 'none') : null;
        summaryContainer ? summaryContainer.setAttribute('data-display', 'block') : null;
      }

      var items = document.querySelectorAll('#search-menu .dropdown-item');
      var keyCode = e.which || e.keyCode;

      if (!items || !items.length) {
        return null;
      }
      
      if (e.key === 'ArrowDown' || keyCode === 40) {
        if (activeIndex === null) {
          activeIndex = 0;
          items[activeIndex].classList.remove('is-active');
        } else {
          items[activeIndex].classList.remove('is-active');
          activeIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        }
        items[activeIndex].classList.add('is-active');

        let overflowedPixel = items[activeIndex].offsetTop + items[activeIndex].clientHeight - searchContainerMaxHeight;
        if (overflowedPixel > 0) {
          document.querySelector(".search-content").scrollTop += items[activeIndex].getBoundingClientRect().height;
        } else if (activeIndex === 0) {
          document.querySelector(".search-content").scrollTop = 0;
        }
      } else if (e.key === 'ArrowUp' || keyCode === 38) {
        if (activeIndex === null) {
          activeIndex = items.length - 1;
          items[activeIndex].classList.remove('is-active');
        } else {
          items[activeIndex].classList.remove('is-active');
          activeIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        }
        items[activeIndex].classList.add('is-active');
        
        let overflowedPixel = items[activeIndex].offsetTop + items[activeIndex].clientHeight - searchContainerMaxHeight;
        if (overflowedPixel < 0) {
          document.querySelector(".search-content").scrollTop -= items[activeIndex].getBoundingClientRect().height;
        } else {
          document.querySelector(".search-content").scrollTop = overflowedPixel + items[activeIndex].getBoundingClientRect().height;
        }
      } else if (e.key === 'Enter' || keyCode === 13) {
        if (items[activeIndex] && items[activeIndex].getAttribute('href')) {
          location.href = items[activeIndex].getAttribute('href');
        }
      } else if (e.key === 'Escape' || keyCode === 27) {
        e.target.value = null;
        if (searchResults) {
          searchResults.classList.remove('is-active');
        }
      }
    }) : null;

    searchMobile ? 
    searchMobile.addEventListener('input', function(e) {
      if (!e.target.value) {
        let wrap = document.getElementById('search-mobile-results');
        while (wrap.firstChild) {
          wrap.removeChild(wrap.firstChild);
        }
        return null;
      }

      searchText = e.target.value;
      var results = fuse.search(e.target.value);
      renderSearchResultsMobile(searchText, results);
      if (enableSearchHighlight) {
        renderSearchHighlightResultsMobile(searchText, results);
      } else {
        renderSearchResultsMobile(searchText, results);
      }
    }) : null;
  // ============================================================


  // ====================== mobile search =======================
    var mobileSearchInputElem = document.querySelector('#search-mobile');
    var mobileSearchClassElem = document.querySelector('.mobile-search');
    var mobileSearchBtnElem = document.querySelector('#mobileSearchBtn');
    var mobileSearchCloseBtnElem = document.querySelector('#search-mobile-close');
    var mobileSearchContainer = document.querySelector('#search-mobile-container');
    var mobileSearchResultsElem = document.querySelector('#search-mobile-results');
    var htmlElem = document.querySelector('html');

    if (mobileSearchClassElem) {
      mobileSearchClassElem.style.display = 'none';
    }

    mobileSearchBtnElem ? 
    mobileSearchBtnElem.addEventListener('click', function () {
      if (mobileSearchContainer) {
        mobileSearchContainer.style.display = 'block';
      }

      if (mobileSearchInputElem) {
        mobileSearchInputElem.focus();
      }

      if (htmlElem) {
        htmlElem.style.overflowY = 'hidden';
      }
    }) : null;

    mobileSearchCloseBtnElem ? 
    mobileSearchCloseBtnElem.addEventListener('click', function() {
      if (mobileSearchContainer) {
        mobileSearchContainer.style.display = 'none';
      }

      if (mobileSearchInputElem) {
        mobileSearchInputElem.value = '';
      }
      
      if (mobileSearchResultsElem) {
        while (mobileSearchResultsElem.firstChild) {
          mobileSearchResultsElem.removeChild(mobileSearchResultsElem.firstChild);
        }
      }

      if (htmlElem) {
        htmlElem.style.overflowY = 'visible';
      }
    }) : null;

    mobileSearchInputElem ?
    mobileSearchInputElem.addEventListener('keydown', function(e) {
      var keyCode = e.which || e.keyCode;
      if (e.key === 'Escape' || keyCode === 27) {
        if (mobileSearchContainer) {
          mobileSearchContainer.style.display = 'none';
        }
        
        if (mobileSearchInputElem) {
          mobileSearchInputElem.value = '';
        }

        if (mobileSearchResultsElem) {
          while (mobileSearchResultsElem.firstChild) {
            mobileSearchResultsElem.removeChild(mobileSearchResultsElem.firstChild);
          }
        }
        if (htmlElem) {
          htmlElem.style.overflowY = 'visible';
        }
      }
    }) : null;
  // ============================================================


  // =================== search-result desktop ==================
    function renderSearchResultsMain(searchText, results) {
      var searchBody = document.querySelector('.search-result__body');
      var originUl = searchBody.querySelector('ul');
      var ul = document.createElement('ul');
      
      if (!searchText) {
        searchResult ? searchResult.setAttribute('data-display', 'none') : null;
        summaryContainer ? summaryContainer.setAttribute('data-display', 'block') : null;
      } else if (results) {
        if (results && results.length) {
          results.forEach(function (result) {
            makeLi(ul, result);
          });

          searchResult ? searchResult.setAttribute('data-display', 'block') : null;
          summaryContainer ? summaryContainer.setAttribute('data-display', 'none') : null;
        }
      }

      originUl.parentNode.replaceChild(ul, originUl);
    }

    function renderSearchHighlightResultsMain(searchText, results) {
      var searchBody = document.querySelector('.search-result__body');
      var originUl = searchBody.querySelector('ul');
      var ul = document.createElement('ul');

      if (!searchText) {
        searchResult ? searchResult.setAttribute('data-display', 'none') : null;
        summaryContainer ? summaryContainer.setAttribute('data-display', 'block') : null;
      } else if (results) {
        if (results && results.length) {
          results.forEach(function (result) {
            makeHighlightLi(ul, result);
          });

          searchResult ? searchResult.setAttribute('data-display', 'block') : null;
          summaryContainer ? summaryContainer.setAttribute('data-display', 'none') : null;
        }
      }

      originUl.parentNode.replaceChild(ul, originUl);
    }
  // ============================================================
  });
