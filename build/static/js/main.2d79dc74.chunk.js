(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(3),l=n.n(i),c=(n(9),n(10),n(11),n(1)),d=function(){var e=Object(o.useState)(null),t=Object(c.a)(e,2),n=t[0],i=t[1],l=Object(o.useState)(null),d=Object(c.a)(l,2),u=d[0],r=d[1],s=Object(o.useState)(null),m=Object(c.a)(s,2),f=m[0],v=m[1];Object(o.useEffect)(function(){i(document.getElementById("mydiv")),r(document.getElementById("handleLeft")),v(document.getElementById("handleRight"))},[]),Object(o.useEffect)(function(){n&&(n.style.setProperty("--max-width","".concat(w,"px")),n.style.setProperty("--min-width","".concat(h,"px")))},[n]);var p=function(e){var t=0,n=0,o=0,a=0;function i(e){console.log("e",e),(e=e||window.event).preventDefault(),o=e.clientX,a=e.clientY,document.onmouseup=c,document.onmousemove=l}function l(i){(i=i||window.event).preventDefault(),t=o-i.clientX,n=a-i.clientY,o=i.clientX,a=i.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function c(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=i:e.onmousedown=i},h=150,w=.5*document.body.clientWidth,g=function(e){n.style.setProperty("--resizeable-width","".concat(e,"px"))},y=function(){var e=getComputedStyle(n).getPropertyValue("--resizeable-width");return parseInt(e,10)},E=function(e,t){e.preventDefault();var o=y(),a=e.pageX;console.log("xoffset = event.pageX",e.pageX),console.log("startingPaneWidth",o);var i=function(e){e.preventDefault(),console.log("moveEvent.pageX",e.pageX);var i="left"===t?1:-1,l=(a-e.pageX)*i+o;l>=h&&l<=w&&g((a-e.pageX)*i+o),"left"===t&&p(n),"left"===t&&l>=h&&l<=w&&(n.style.left=a+(o-y())+"px")};window.addEventListener("mousemove",i);window.addEventListener("mouseup",function(){g(Math.min(Math.max(y(),h),w)),window.removeEventListener("mousemove",i)})};return u&&u.addEventListener("mousedown",function(e){return E(e,"left")}),f&&f.addEventListener("mousedown",function(e){return E(e,"right")}),n&&p(n),a.a.createElement("div",{id:"mydiv",className:"box"},a.a.createElement("div",{id:"handleRight",className:"handle handle-right"}),a.a.createElement("div",{id:"handleLeft",className:"handle handle-left"}),a.a.createElement("div",{id:"mydivheader"},"Click here to move"),"Box")};var u=function(){return a.a.createElement("div",{className:"App"},"Move and Resize Demo",a.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.2d79dc74.chunk.js.map