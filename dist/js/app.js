!function e(t,n,r){function u(i,c){if(!n[i]){if(!t[i]){var a="function"==typeof require&&require;if(!c&&a)return a(i,!0);if(o)return o(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var d=n[i]={exports:{}};t[i][0].call(d.exports,function(e){var n=t[i][1][e];return u(n||e)},d,d.exports,e,t,n,r)}return n[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)u(r[i]);return u}({1:[function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var u=r(e("./sumClock.js")),o=r(e("./progressClock.js")),i=r(e("./binaryClock.js")),c=void 0;if(document.getElementById("sumClock")){var a=document.getElementById("sum"),s=document.getElementById("num");u.setup(),c=u.makeUpdateTime(a,s)}if(document.getElementById("progressClock")){var d=document.getElementById("h"),f=document.getElementById("m"),l=document.getElementById("s");c=o.makeUpdateTime(d,f,l)}if(document.getElementById("binaryClock")){var m=document.getElementById("h"),p=document.getElementById("m"),g=document.getElementById("s");c=i.makeUpdateTime(m,p,g)}c(),setInterval(c,1e3)},{"./binaryClock.js":2,"./progressClock.js":3,"./sumClock.js":4}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.makeUpdateTime=function(e,t,n){return function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),u=e.getSeconds(),o=t.toString(2).padStart(5,"0"),i=n.toString(2).padStart(6,"0"),c=u.toString(2).padStart(6,"0");r(o,"h"),r(i,"m"),r(c,"s")}};var r=function(e,t){for(var n=0;n<e.length;n++){var r=document.getElementById(t+n);"1"==e.substring(n,n+1)?r.style.height="100%":r.style.height="0%"}}},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.makeUpdateTime=function(e,t,n){return function(){var r=new Date,u=r.getHours(),o=r.getMinutes(),i=r.getSeconds(),c=60*o+i,a=i/60*100,s=c/3600*100,d=(3600*u+c)/86400*100;e.style.width=d+"%",t.style.width=s+"%",n.style.width=a+"%"}}},{}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e>9?""+e:"0"+e},u=function(e,t){return r(e)+":"+r(t)},o=function(){for(var e=[],t=0;t<1440;t++){var n=t,r=Math.floor(n/60),o=n%60;e.push(u(r,o))}return e},i=function(e){var t=e.split("");return t.splice(2,1),t.map(function(e){return Number.parseInt(e)}).reduce(function(e,t){return e+t},0)},c=(n.makeUpdateTime=function(e,t){return function(){var n=new Date,r=n.getHours(),o=n.getMinutes(),a=u(r,o),s=i(a),d=c[s].findIndex(function(e){return e===a})+1;e.innerText=s,t.innerText=d}},void 0);n.setup=function(){c=new Array(26);for(var e=0;e<c.length;e++)c[e]=[];o().map(function(e){c[i(e)].push(e)})}},{}]},{},[1]);
//# sourceMappingURL=maps/app.js.map
