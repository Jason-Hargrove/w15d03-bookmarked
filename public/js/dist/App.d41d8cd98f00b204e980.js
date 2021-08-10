!function(e){function t(t){for(var n,o,c=t[0],i=t[1],s=t[2],m=0,d=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);d.length;)d.shift()();return l.push.apply(l,s||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={0:0},l=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=i;l.push([30,2]),a()}({30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),c=a(7);var i=e=>r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("div",{className:"nav"},e.routes.map(e=>{let{key:t,path:a}=e;return r.a.createElement(c.b,{className:"nav-link active",key:t,to:a},t)})))),s=a(1);function u(e,t,a,n,r,l,o){try{var c=e[l](o),i=c.value}catch(e){return void a(e)}c.done?t(i):Promise.resolve(i).then(n,r)}function m(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function o(e){u(l,n,r,o,c,"next",e)}function c(e){u(l,n,r,o,c,"throw",e)}o(void 0)}))}}function d(e){const[t,a]=Object(n.useState)({}),l=Object(n.useRef)(null),o=Object(n.useRef)(null),c=function(){var t=m((function*(t){t.preventDefault();try{const t=yield fetch("/api/bookmarks/".concat(e.match.params.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:l.current.value,url:o.current.value})}),n=yield t.json();a(n)}catch(e){console.error(e)}finally{window.location.assign("/")}}));return function(e){return t.apply(this,arguments)}}();Object(n.useEffect)(()=>{m((function*(){try{const t=yield fetch("/api/bookmarks/".concat(e.match.params.id)),n=yield t.json();a(n)}catch(e){console.error(e)}}))()},[]);const i=function(){var t=m((function*(t){try{const t=yield fetch("/api/bookmarks/".concat(e.match.params.id),{method:"DELETE",headers:{"Content-Type":"application/json"}});yield t.json()}catch(e){console.error(e)}finally{window.location.assign("/")}}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},Object.keys(t).length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t.title),r.a.createElement("a",{href:t.url},t.url)):r.a.createElement("h1",null,"Loading..."),r.a.createElement("form",{onSubmit:c},r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{className:"form-label"},"Title"),r.a.createElement("input",{type:"text",className:"form-control",ref:l,defaultValue:t.title})),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{className:"form-label"},"Url"),r.a.createElement("input",{type:"text",className:"form-control",ref:o,defaultValue:t.url}),r.a.createElement("div",{className:"form-text"},"Whatever you put in here with be a link.")),r.a.createElement("div",{className:"d-inline"},r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Update Bookmark"})),r.a.createElement("div",{className:"d-inline p-2"},r.a.createElement("button",{className:"btn btn-danger",onClick:i,type:"button"},"DELETE ME"))))}var p=e=>{let{color:t,text:a,onClick:n}=e;return r.a.createElement("button",{onClick:n,style:{backgroundColor:t},className:"btn mb-3 add-btn"},a)};var f=e=>{let{onAdd:t}=e;const[a,l]=Object(n.useState)(""),[o,c]=Object(n.useState)("");return r.a.createElement("form",{onSubmit:e=>{e.preventDefault(),a?(t({title:a,url:o}),l(""),c("")):alert("Please add a bookmark")}},r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{className:"form-label"},"Title"),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Add Bookmark",value:a,onChange:e=>l(e.target.value)}),r.a.createElement("div",{className:"form-text"},"We'll always share your email with everyone.")),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{className:"form-label"},"url"),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Add url",value:o,onChange:e=>c(e.target.value)})),r.a.createElement("input",{type:"submit",value:"Save Task",className:"btn btn-primary mb-3"}))};var b=e=>{let{title:t,onAdd:a,showAdd:n}=e;return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"mt-4 mb-4"},t),r.a.createElement(p,{color:n?"red":"green",text:n?"Close":"Add a Bookmark",onClick:a}))};function h(e,t,a,n,r,l,o){try{var c=e[l](o),i=c.value}catch(e){return void a(e)}c.done?t(i):Promise.resolve(i).then(n,r)}function y(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function o(e){h(l,n,r,o,c,"next",e)}function c(e){h(l,n,r,o,c,"throw",e)}o(void 0)}))}}var v=[{Component:function(e){const[t,a]=Object(n.useState)([]),[l,o]=Object(n.useState)(!1);Object(n.useEffect)(()=>{y((function*(){try{const e=yield fetch("/api/bookmarks"),t=yield e.json();a(t)}catch(e){console.error(e)}}))()},[]);const i=function(){var e=y((function*(e){try{const n=yield fetch("/api/bookmarks/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=yield n.json();a([...t,r])}catch(e){res.status(404).json({message:e.message})}}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container mt-3"},r.a.createElement(b,{title:"It's the bookmark page",onAdd:()=>o(!l),showAdd:l}),l&&r.a.createElement(f,{onAdd:i}),r.a.createElement("ul",{className:"list-group"},t.map(e=>r.a.createElement("li",{key:e._id,className:"list-group-item"},r.a.createElement(c.b,{to:"/".concat(e._id)},r.a.createElement("h3",null,e.title)),r.a.createElement("a",{href:e.url},e.url)))))},key:"Home",path:"/"},{Component:function(e){return r.a.createElement("div",{className:"container mt-3"},"This is the ",e.page," page. Click on a title to edit or delete.")},key:"About",path:"/about"}];var E=()=>r.a.createElement(c.a,null,r.a.createElement(i,{routes:v}),r.a.createElement(s.c,null,v.map(e=>{let{Component:t,key:a,path:n}=e;return r.a.createElement(s.a,{key:a,path:n,exact:!0,component:()=>r.a.createElement(t,{page:a})})}),"// ↓↓↓↓↓ Added my own route ↓↓↓↓↓",r.a.createElement(s.a,{path:"/:id",render:e=>r.a.createElement(d,e)})));a(25);const k=document.getElementById("app");o.a.render(r.a.createElement(E,null),k)}});