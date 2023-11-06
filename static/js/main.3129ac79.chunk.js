(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(2),l=c(8),i=c(1);c(13),c(14);function r(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var o,d=c(5),j=c.n(d),u=c(0),b=function(e){var t=e.todos,c=e.selectedTodo,s=e.selectNewTodo;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed,l=(null===c||void 0===c?void 0:c.id)===t;return Object(u.jsxs)("tr",{"data-cy":"todo",className:j()({"has-background-info-light":l}),children:[Object(u.jsx)("td",{className:"is-vcentered",children:t}),Object(u.jsx)("td",{className:"is-vcentered",children:n&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()({"has-text-danger":!n,"has-text-success":n}),children:a})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:j()("far",{"fa-eye-slash":l,"fa-eye":!l})})})})})]},t)}))})]})},h=function(e){var t=e.setNewQuery,c=e.setNewFilter,s=e.query,a=e.filter;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{value:a,"data-cy":"statusSelect",onChange:function(e){return c(e.target.value)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return t(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return t("")}})})]})]})},m=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),O=function(e){var t=e.selectedTodo,c=e.selectNewTodo,s=Object(i.useState)(null),a=Object(n.a)(s,2),l=a[0],o=a[1],d=Object(i.useState)(!0),j=Object(n.a)(d,2),b=j[0],h=j[1],O=Object(i.useState)(""),x=Object(n.a)(O,2),f=x[0],N=x[1];return Object(i.useEffect)((function(){var e;h(!0),t?(e=t.userId,r("/users/".concat(e))).then((function(e){o(e)})).catch((function(e){return N(e.message)})).finally((function(){return h(!1)})):N("No selected todo")}),[t]),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),b&&!l&&Object(u.jsx)(m,{}),!b&&!f&&t&&l&&Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(u.jsx)("button",{type:"button",className:"delete",onClick:function(){return c(null)},"data-cy":"modal-close"})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(u.jsx)("strong",{className:t.completed?"has-text-success":"has-text-danger",children:t.completed?"Done":"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:Sincere@april.biz",children:l.name})]})]})]})]})};!function(e){e.all="all",e.completed="completed",e.active="active"}(o||(o={}));var x=function(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(!0),d=Object(n.a)(a,2),j=d[0],x=d[1],f=Object(i.useState)(null),N=Object(n.a)(f,2),v=N[0],p=N[1],y=Object(i.useState)(o.all),g=Object(n.a)(y,2),w=g[0],k=g[1],S=Object(i.useState)(""),T=Object(n.a)(S,2),C=T[0],L=T[1],_=Object(i.useState)(""),E=Object(n.a)(_,2),B=E[0],F=E[1];Object(i.useEffect)((function(){x(!0),r("/todos").then((function(e){return s(e)})).catch((function(e){return F(e.message)})).finally((function(){return x(!1)}))}),[]);var I=function(e,t,c){var s=Object(l.a)(c);return"active"===e?s=s.filter((function(e){return!e.completed})):"completed"===e&&(s=s.filter((function(e){return e.completed}))),t&&(s=s.filter((function(e){return e.title.toLocaleLowerCase().includes(t.toLocaleLowerCase())}))),s}(w,C,c);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(h,{setNewQuery:function(e){return L(e.toLowerCase())},setNewFilter:function(e){return k(e)},query:C,filter:w})}),Object(u.jsxs)("div",{className:"block",children:[j&&Object(u.jsx)(m,{}),!j&&!B&&Object(u.jsx)(b,{todos:I,selectedTodo:v,selectNewTodo:function(e){return p(e)}})]})]})})}),v&&Object(u.jsx)(O,{selectedTodo:v,selectNewTodo:function(e){return p(e)}})]})};a.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3129ac79.chunk.js.map