var t={169:t=>{t.exports=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=[],o="string"==typeof t?[t]:t.slice();o[o.length-1]=o[o.length-1].replace(/\r?\n([\t ]*)$/,"");for(var a=0;a<o.length;a++){var l=void 0;(l=o[a].match(/\n[\t ]+/g))&&n.push.apply(n,l)}if(n.length){var i=Math.min.apply(Math,n.map((function(t){return t.length-1}))),c=new RegExp("\n[\t ]{"+i+"}","g");for(a=0;a<o.length;a++)o[a]=o[a].replace(c,"\n")}o[0]=o[0].replace(/^\r?\n/,"");var f=o[0];for(a=0;a<e.length;a++)f+=e[a]+o[a+1];return f}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var n={};(()=>{r.d(n,{Z:()=>o});var t=r(169);const e=/[a-z][a-z0-9]*(?:\b)*/gi,o={addMultipleEventsListener:function(t,...e){let r=e[e.length-1];if("function"!=typeof r)throw new Error("Callback not provided as final argument");for(const n of e)t.addEventListener(n,r)},extractAsObject:function(t,e,r){let n=!0;e&&!r&&(n=!1,r=e,e={});for(const n of r)e[n]=t[n];if(!n)return e},format:function(t,e){return t.replaceAll(/{([a-z0-9_]+)}/gi,((t,r)=>e[r]||r))},isObjectEmpty:function(t){if(t&&Object.getPrototypeOf(t)===Object.prototype)return 0===Object.keys(t).length},normaliseMultilineString:e=>t(e),nullCallback:function(){},sleep:function(t){return new Promise((e=>setTimeout(e,t)))},toTitleCase:function(t){let r=[];for(const n of t.match(e)){let t=n[0],e=n.slice(1),o=t.toUpperCase()+e.toLowerCase();r.push(o)}return r.join(" ")}}})();var o=n.Z;export{o as default};