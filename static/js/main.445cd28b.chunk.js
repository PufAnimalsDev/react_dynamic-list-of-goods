(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var r=e(4),o=e.n(r),c=e(5),a=e(6),u=e(3),s=e.n(u),i=e(1),d=(e(12),e(0)),l=function(t){var n=t.goods;return Object(d.jsx)("ul",{children:n.map((function(t){return Object(d.jsxs)("li",{"data-cy":"good",color:t.color,style:{color:"".concat(t.color)},children:[t.name,t.name]},t.id)}))})};function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var b;!function(t){t.all="all",t.firs5="firs5",t.red="red"}(b||(b={}));var j=function(){var t=Object(i.useState)((function(){return[]})),n=Object(a.a)(t,2),e=n[0],r=n[1],o=function(){var t=Object(c.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=n,t.next=t.t0===b.all?3:t.t0===b.firs5?8:t.t0===b.red?13:3;break;case 3:return t.t1=r,t.next=6,f();case 6:return t.t2=t.sent,t.abrupt("return",(0,t.t1)(t.t2));case 8:return t.t3=r,t.next=11,f().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}));case 11:return t.t4=t.sent,t.abrupt("return",(0,t.t3)(t.t4));case 13:return t.t5=r,t.next=16,f().then((function(t){return t.filter((function(t){return"red"===t.color}))}));case 16:return t.t6=t.sent,t.abrupt("return",(0,t.t5)(t.t6));case 18:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Dynamic list of Goods"}),Object(d.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return o(b.all)},children:"Load all goods"}),Object(d.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return o(b.firs5)},children:"Load 5 first goods"}),Object(d.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return o(b.red)},children:"Load red goods"}),Object(d.jsx)(l,{goods:e})]})};o.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.445cd28b.chunk.js.map