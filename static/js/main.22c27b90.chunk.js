(this["webpackJsonpcookie-clicker"]=this["webpackJsonpcookie-clicker"]||[]).push([[0],{10:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var n=t(2),i=t.n(n),o=t(4),r=t.n(o),s=(t(10),t(5)),u=t(1),l=t(0);var a=function(e){var c=e.state,t=e.handleBuy,n=!1;return n=c.count>=c.multiplierPrice,Object(l.jsxs)("div",{className:"main__shop__multiplier",children:[Object(l.jsx)("h4",{children:"Multiplier"}),Object(l.jsxs)("p",{children:["x",Object(l.jsx)("span",{children:c.multiplier+1})]}),Object(l.jsxs)("p",{children:["Price: ",c.multiplierPrice,"cookies"]}),n&&Object(l.jsx)("button",{type:"button",className:"allowed",onClick:t,children:"BUY"}),!n&&Object(l.jsx)("button",{type:"button",className:"forbidden",children:"BUY"})]})};var b=function(e){var c=e.state,t=e.handleBuy,n=!1;return n=c.count>=c.cookiePerSecondPrice,Object(l.jsxs)("div",{className:"main__shop__multiplier",children:[Object(l.jsx)("h4",{children:"Helper"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:c.cookiePerSecond+1}),"c/s"]}),Object(l.jsxs)("p",{children:["Price: ",c.cookiePerSecondPrice,"cookies"]}),n&&Object(l.jsx)("button",{type:"button",className:"allowed",onClick:t,children:"BUY"}),!n&&Object(l.jsx)("button",{type:"button",className:"forbidden",children:"BUY"})]})};var j=function(e){var c=e.state,t=e.handleBuy,n=!1;return n=c.count>=c.bonusPrice&&!c.bonusState,Object(l.jsxs)("div",{className:"main__shop__multiplier",children:[Object(l.jsx)("h4",{children:"Bonus"}),Object(l.jsx)("p",{children:"200%cookies/click for two second"}),Object(l.jsxs)("p",{children:["Price: ",c.bonusPrice,"cookies"]}),n&&Object(l.jsx)("button",{type:"button",className:"allowed",onClick:t,children:"BUY"}),!n&&Object(l.jsx)("button",{type:"button",className:"forbidden",children:"BUY"})]})},d={count:0,multiplier:1,multiplierPrice:10,cookiePerSecond:0,cookiePerSecondPrice:10,bonusState:!1,bonusPrice:1e3},h=function(e,c){switch(c.type){case"increase-score":return e.bonusState?Object(u.a)(Object(u.a)({},e),{},{count:2*e.count}):Object(u.a)(Object(u.a)({},e),{},{count:e.count+1*e.multiplier});case"bought-multiplier":return Object(u.a)(Object(u.a)({},e),{},{count:e.count-e.multiplierPrice,multiplier:e.multiplier+1,multiplierPrice:2*e.multiplierPrice});case"bought-helper":return Object(u.a)(Object(u.a)({},e),{},{count:e.count-e.cookiePerSecondPrice,cookiePerSecond:e.cookiePerSecond+1,cookiePerSecondPrice:Math.floor(1.5*e.cookiePerSecondPrice)});case"bought-bonus":return Object(u.a)(Object(u.a)({},e),{},{count:e.count-e.bonusPrice,bonusState:!e.bonusState,bonusPrice:5*e.bonusPrice});case"cancel-bonus":return Object(u.a)(Object(u.a)({},e),{},{bonusState:!1});case"helper":return Object(u.a)(Object(u.a)({},e),{},{count:e.count+e.cookiePerSecond});default:return e}};var p=function(){var e=Object(n.useReducer)(h,d),c=Object(s.a)(e,2),t=c[0],o=c[1];return Object(n.useEffect)((function(){setTimeout((function(){o({type:"cancel-bonus"})}),2e3)}),[t.bonusState]),Object(n.useEffect)((function(){var e=setInterval((function(){o({type:"helper"})}),1e3);return function(){clearInterval(e)}}),[]),Object(l.jsxs)(i.a.Fragment,{children:[Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{children:"Cookie Clicker"}),Object(l.jsxs)("p",{children:["Score: ",t.count]})]}),Object(l.jsxs)("main",{className:"main",children:[Object(l.jsx)("figure",{children:Object(l.jsx)("img",{id:"cookie",src:"/media/cookie.png",alt:"Cookie",onClick:function(){o({type:"increase-score"})}})}),Object(l.jsxs)("div",{className:"main__shop",children:[Object(l.jsx)("h2",{children:"Shop"}),Object(l.jsx)(a,{state:t,handleBuy:function(){o({type:"bought-multiplier"})}}),Object(l.jsx)(b,{state:t,handleBuy:function(){o({type:"bought-helper"})}}),Object(l.jsx)(j,{state:t,handleBuy:function(){o({type:"bought-bonus"})}})]})]})]})};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.22c27b90.chunk.js.map