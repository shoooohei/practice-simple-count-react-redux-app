(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,n){t.exports=n(21)},21:function(t,e,n){"use strict";n.r(e);var u=n(0),r=n.n(u),o=n(4),a=n(2),c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"PLUS":return t+e.payload.num;case"MINUS":return t-e.payload.num;default:return t}},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"test title";return(arguments.length>1?arguments[1]:void 0).type,t},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"test day 2018";return(arguments.length>1?arguments[1]:void 0).type,t},d=Object(a.b)({number:c,title:i,day:l}),s=n(5),m=function(t){var e=t.number,n=t.day,u=t.title,o=t.plus,a=t.minus;return r.a.createElement("div",null,r.a.createElement("h2",null,u," ",e," ",n),r.a.createElement("button",{onClick:function(){o(10)}},"+10"),r.a.createElement("button",{onClick:function(){a(10)}},"-10"))},p=Object(s.b)(function(t){return{number:t.number,day:t.day,title:t.title}},function(t){return{plus:function(e){t(function(t){return{type:"PLUS",payload:{num:t}}}(e))},minus:function(e){t(function(t){return{type:"MINUS",payload:{num:t}}}(e))}}})(m),b=Object(a.c)(d);b.subscribe(function(){console.log(b.getState())}),Object(o.render)(r.a.createElement(s.a,{store:b},r.a.createElement(p,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.754b12b7.chunk.js.map