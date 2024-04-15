(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nbutton,\nh1,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  font-family: Verdana, '돋움', dotum, sans-serif;\n}\n\n/* custom-CSS */\n:root {\n  --light-gray: #f4f4f4;\n  --semi-black: #424a5a;\n  --sky-blue: #5cd3f8;\n}\n\n.header {\n  padding: 20px;\n  background-color: var(--semi-black);\n}\n\n.title {\n  color: var(--sky-blue);\n  font-size: 90px;\n  font-family: Verdana, '돋움', dotum, sans-serif;\n\n  text-align: center;\n}\n\n/* main css */\n\n.main {\n  display: flex;\n  flex-direction: column;\n  padding: 50px 0 100px 0;\n  background-color: var(--light-gray);\n  align-items: center;\n}\n\n.announce {\n  font-size: 40px;\n}\n\n.cell-container {\n  display: grid;\n  grid-template-columns: repeat(3, 100px);\n  grid-template-rows: repeat(3, 100px);\n  gap: 8px;\n\n  margin: 50px 0;\n}\n.cell {\n  background-color: white;\n  text-align: center;\n  line-height: 100px;\n\n  font-size: 40px;\n}\n\n.start-btn {\n  font-size: 40px;\n  color: white;\n\n  border-radius: 10px;\n  padding: 15px;\n  background-color: var(--semi-black);\n\n  transition: transform 0.3s ease;\n}\n\n.start-btn:hover {\n  transform: scale(1.1); /* 호버 시 크기를 1.1배로 확대합니다. */\n}\n\n/* footer-css */\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--light-gray);\n\n  font-size: 20px;\n\n  padding: 30px 0;\n}\n\n.fa-brands {\n  margin: 5px;\n  font-size: 24px;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var f=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var m=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),u=0;u<a.length;u++){var l=t(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),s=t.n(c),u=t(540),l=t.n(u),d=t(113),f=t.n(d),p=t(208),m={};m.styleTagTransform=f(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(p.A,m),p.A&&p.A.locals&&p.A.locals;const g=function(){const n=["","","","","","","","",""];return{updateBoard:function(e,t){return""===n[e]&&(n[e]=t,!0)},resetGameBoard:function(){n.forEach(((e,t)=>{n[t]=""}))},getCell:function(e){return n[e]}}}(),v=function(){const n=document.querySelectorAll(".cell"),e=document.querySelector(".announce"),t=document.querySelector(".start-btn");function r(){for(let e=0;e<n.length;e++)n[e].textContent=g.getCell(e)}return n.forEach((n=>{n.addEventListener("click",(n=>{const e=n.target.dataset.value,t=h.getCurrentPlayer();g.updateBoard(e,t)&&!h.getEndGame()&&(r(),h.nextRound(Number(e)))}))})),t.addEventListener("click",(()=>{h.resetRound()})),{changeAnnounce:function(n){e.textContent=`player ${h.getCurrentPlayer()} ${n?"Won!!!":"Turn!"} `},updateBoardUI:r,drawAnnounce:function(){e.textContent="DRAW."}}}(),h=function(){let n=1,e=!1;function t(){return n%2==0?"O":"X"}function r(n){return[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].filter((e=>e.includes(n))).some((n=>n.every((n=>g.getCell(n)===t()))))}return{nextRound:function(t){if(r(t)&&(e=!0),9===n)return v.drawAnnounce(),void(e=!0);v.changeAnnounce(h.getEndGame()),n++},getCurrentPlayer:t,checkWinner:r,getEndGame:function(){return e},resetRound:function(){e=!1,n=1,g.resetGameBoard(),v.updateBoardUI(),v.changeAnnounce(h.getEndGame())}}}()})()})();