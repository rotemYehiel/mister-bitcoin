(this["webpackJsonpmister-bitcoin"]=this["webpackJsonpmister-bitcoin"]||[]).push([[0],{77:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),s=n(6),i=n(45),u=n(8),l=n(7),d=n(2),p=n.n(d),f=n(4),j=[{_id:"5a5664024c096d04eeb13a8a",name:"Ochoa Hyde",password:"1234",coins:100,moves:[]},{_id:"5a3664028c093d08eeb13a8a",name:"rotem",password:"1234",coins:200,moves:[]}],m=JSON.parse(localStorage.getItem("logged user")),h=(localStorage.getItem("users")||localStorage.setItem("users",JSON.stringify(j)),JSON.parse(localStorage.getItem("users")));function b(e){return e?function(e){var t=h.find((function(t){return t.name===e.name&&t.password===e.password}));t&&localStorage.setItem("logged user",JSON.stringify(t));return JSON.parse(localStorage.getItem("logged user"))}(e):m||null}function O(){return(O=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y(t),h.push(n),localStorage.setItem("users",JSON.stringify(h)),localStorage.setItem("logged user",JSON.stringify(n)),e.abrupt("return",b());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(f.a)(p.a.mark((function e(t,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.coins>=n&&(m.coins-=n,a={date:new Date,amount:n,to:t._id},m.moves?m.moves.unshift(a):m.moves=[a],r=h.findIndex((function(e){return e.name===m.name})),h.splice(r,1,m),localStorage.setItem("users",JSON.stringify(h)),localStorage.setItem("logged user",JSON.stringify(m))),e.abrupt("return",b());case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m){e.next=2;break}return e.abrupt("return");case 2:return t="",e.next=5,localStorage.removeItem("logged user");case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x={getUser:b,logOut:function(){return g.apply(this,arguments)},signUp:function(e){return O.apply(this,arguments)},addMove:function(e,t){return v.apply(this,arguments)}};function y(e){return{_id:w(),name:e.name,password:e.password,coins:100,"moves:":[]}}function w(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function C(e){return e?function(){var t=Object(f.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.getUser(e);case 2:a=t.sent,console.log("loggedInUser in action:",a),n({type:"SET_USER",loggedInUser:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}():function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getUser();case 2:n=e.sent,console.log("no cred action:",n),t({type:"SET_USER",loggedInUser:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function S(){return function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.logOut();case 2:t({type:"SET_USER",loggedInUser:null});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function N(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.signUp(e);case 2:a=t.sent,n({type:"SET_USER",loggedInUser:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function _(e,t){return function(){var n=Object(f.a)(p.a.mark((function n(a){var r,c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.addMove(e,t);case 2:r=n.sent,c=r.moves,a({type:"SET_USER_MOVES",moves:c});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}var I=n(27),T=n.n(I),E="https://blockchain.info/tobtc?currency=USD&value=1",U="https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true",k="https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true&values";function A(){return(A=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("rate")){e.next=5;break}t=localStorage.getItem("rate"),t=JSON.parse(t),e.next=9;break;case 5:return e.next=7,T.a.get(E);case 7:t=e.sent,localStorage.setItem("rate",JSON.stringify(t));case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(f.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem(t)){e.next=5;break}n=localStorage.getItem(t),n=JSON.parse(n),e.next=12;break;case 5:return e.next=7,T.a.get("Market Price"===t?U:k);case 7:a=e.sent,(r=a.data.values.map((function(e){return[new Date(e.x),e.y]}))).unshift([a.data.period,a.data.name]),n={name:a.data.name,description:a.data.description,period:a.data.period,unit:a.data.unit,values:r},localStorage.setItem(t,JSON.stringify(n));case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D={getRate:function(){return A.apply(this,arguments)},getStatisticsValues:function(e){return L.apply(this,arguments)}};function M(){return function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getRate();case 2:n=e.sent,t({type:"SET_RATE",rate:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}n(77);var z=n(10),P=n.p+"static/media/bitcoin-gif.40cb03d6.gif",R=n(40),J=n.n(R),F=n(1),B=function(e){var t=e.moves;return Object(F.jsx)("div",{className:"moves-list",children:Object(F.jsxs)("ul",{className:"moves-list-ul",children:[Object(F.jsx)("h3",{children:"Your Moves:"}),t.map((function(e){return Object(F.jsxs)("li",{className:"move",children:[Object(F.jsxs)("p",{children:["At: ",J()(e.date).format("MMMM Do YYYY, h:mm:ss a")]}),Object(F.jsxs)("p",{children:["Amount: ",e.amount," coins"]})]},e.date)}))]})})},V={loadUser:C,logOut:S,getRate:M},H=Object(s.b)((function(e){return{loggedInUser:e.user.loggedInUser,rate:e.bitcoin.rate}}),V)((function(e){var t=e.loggedInUser,n=e.rate,r=Object(a.useState)(""),c=Object(z.a)(r,2),o=c[0],i=c[1],l=Object(a.useState)(""),d=Object(z.a)(l,2),j=d[0],m=d[1],h=Object(s.c)();Object(a.useEffect)((function(){}),[t,n]);var b=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),h(C({name:o,password:j})),h(M());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),i(""),m(""),h(S()),e.history.push("/");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(F.jsx)("div",{className:"home-page",children:t&&n?Object(F.jsxs)("div",{children:[Object(F.jsxs)("section",{children:[Object(F.jsxs)("h1",{children:["Welcome ",t.name,"!"]}),Object(F.jsx)("img",{className:"home-user-img",src:"https://robohash.org/".concat(t.name,".png"),alt:""}),Object(F.jsxs)("h3",{children:["you have: ",t.coins," coins."]}),Object(F.jsxs)("h3",{children:["your moves are: ",t.moves?t.moves.length:0,"."]}),Object(F.jsxs)("h3",{children:["the current rate is: ",n.data]})]}),Object(F.jsx)("button",{onClick:function(e){return O(e)},className:"log-out-btn",children:"Log out"}),t.moves&&Object(F.jsx)(B,{moves:t.moves})]}):Object(F.jsxs)("section",{className:"sign-in-sec",children:[Object(F.jsx)("h2",{children:"Log in:"}),Object(F.jsxs)("form",{onSubmit:function(e){return b(e)},children:[Object(F.jsx)("label",{children:"Name: "}),Object(F.jsx)("input",{type:"text",placeholder:"Eter your name",name:"userName",value:o,onChange:function(e){return i(e.target.value)}}),Object(F.jsx)("label",{children:"Password: "}),Object(F.jsx)("input",{type:"password",placeholder:"Enter your password",name:"password",value:j,onChange:function(e){return m(e.target.value)}}),Object(F.jsx)("button",{type:"submit",children:"Go"})]}),Object(F.jsxs)("h2",{children:["New arround?",Object(F.jsx)("span",{className:"sign-up",children:Object(F.jsx)(u.b,{to:"/SignUp",children:"  Sign up now"})})]}),Object(F.jsx)("img",{className:"bitcoin-gif",src:P,alt:"bitcoin gif"})]})})})),Y=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812"}];function G(e){return e.sort((function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0}))}function q(e){return e=e.toLocaleLowerCase(),Y.filter((function(t){return t.name.toLocaleLowerCase().includes(e)||t.phone.toLocaleLowerCase().includes(e)||t.email.toLocaleLowerCase().includes(e)}))}var W={getContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(t,n){var a=Y;e&&e.term&&(a=q(e.term)),t(G(a))}))},getContactById:function(e){return new Promise((function(t,n){var a=Y.find((function(t){return t._id===e}));a?t(a):n("Contact id ".concat(e," not found!"))}))},deleteContact:function(e){return new Promise((function(t,n){var a=Y.findIndex((function(t){return t._id===e}));-1!==a&&Y.splice(a,1),t(Y)}))},saveContact:function(e){return e._id?function(e){return new Promise((function(t,n){var a=Y.findIndex((function(t){return e._id===t._id}));-1!==a&&(Y[a]=e),t(e)}))}(e):function(e){return new Promise((function(t,n){e._id=K(),Y.push(e),t(e)}))}(e)},getEmptyContact:function(){return{_id:K(),name:"",email:"",phone:""}}};function K(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function Q(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.getContacts(e);case 2:a=t.sent,n({type:"SET_CONTACTS",contacts:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function X(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.getContactById(e);case 2:a=t.sent,n({type:"SET_CONTACT",contact:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function Z(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.deleteContact(e);case 2:a=t.sent,n({type:"DELETE_CONTACT",contact:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var $=function(e){var t=Object(a.useState)(""),n=Object(z.a)(t,2),r=n[0],c=n[1];return Object(F.jsx)("form",{className:"contact-filter",children:Object(F.jsx)("input",{type:"text",placeholder:"Enter Contact Name...",onChange:function(t){return function(t){c(t.target.value),e.onFilter(r)}(t)},name:"term",value:r})})},ee=function(e){var t=e.currContact;return Object(F.jsxs)("div",{className:"contact-preview",children:[Object(F.jsx)("img",{className:"contact-img",src:"https://robohash.org/".concat(t.name),alt:""}),Object(F.jsx)("h3",{className:"contact-name",children:t.name})]})},te=function(e){var t=e.contacts;return Object(F.jsx)("ul",{className:"contact-list",children:t.map((function(e,t){return Object(F.jsx)("li",{className:"contact",children:Object(F.jsx)(u.b,{to:"/Contact/"+e._id,children:Object(F.jsx)(ee,{currContact:e})})},t)}))})},ne={loadCotnacts:Q},ae=Object(s.b)((function(e){return{loggedInUser:e.user.loggedInUser,contacts:e.contact.contacts}}),ne)((function(e){var t=e.contacts,n=e.loggedInUser,r=Object(a.useState)({term:""}),c=Object(z.a)(r,2),o=c[0],i=c[1],l=Object(s.c)();Object(a.useEffect)((function(){d(),n||l(Q())}),[o.term]);var d=function(){l(Q(o))};return t?Object(F.jsxs)("div",{className:"contact-page",children:[Object(F.jsx)($,{filterBy:o,onFilter:function(e){return function(e){i(e),d()}(e)}}),Object(F.jsx)(te,{contacts:t}),Object(F.jsx)("button",{className:"add-contact-btn",children:Object(F.jsx)(u.b,{to:"/Contact/Edit",children:Object(F.jsx)("i",{className:"fas fa-plus"})})})]}):Object(F.jsx)("h3",{children:"no contacts yet..."})})),re=function(e){var t=e.contact,n=e.loggedInUser,r=Object(a.useState)(0),c=Object(z.a)(r,2),o=c[0],s=c[1],i=function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e.onTransferCoins(o),s(0);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return t||n?Object(F.jsxs)("div",{className:"transfer-fund",children:[Object(F.jsxs)("p",{children:["Transfer coins to ",t.name,":"]}),Object(F.jsx)("form",{onSubmit:function(e){return i(e)},children:Object(F.jsxs)("p",{className:"amount-p",children:[Object(F.jsx)("label",{children:"Amount"}),Object(F.jsx)("input",{type:"number",name:"amount",min:"1",max:n.coins,required:!0,value:o,onChange:function(e){return s(e.target.value)}}),Object(F.jsx)("button",{type:"submit",children:"Tranfer"})]})})]}):Object(F.jsx)("h3",{children:"no contact yet..."})},ce={loadCotnact:X,deleteContact:Z,clearContact:function(){return function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"SET_CONTACT",contact:null});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},addMove:_},oe=Object(s.b)((function(e){return{contact:e.contact.contact,loggedInUser:e.user.loggedInUser}}),ce)((function(e){var t=e.contact,n=e.loggedInUser,r=Object(s.c)();Object(a.useEffect)((function(){c()}),[e.match.params]);var c=function(){var t=Object(f.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e.match.params.id),n=e.match.params.id,r(X(n));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var e=Object(f.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(_(t,n));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var n=Object(f.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.history.go(-1),r(Z(t._id));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return t?Object(F.jsxs)("div",{className:"contact-details",children:[Object(F.jsxs)("section",{className:"btns-sec",children:[Object(F.jsx)("button",{title:"Return",className:"button-icons",onClick:function(t){e.history.go(-1)},children:Object(F.jsx)("i",{className:"fas fa-undo"})}),Object(F.jsx)("button",{title:"Details",className:"button-icons",children:Object(F.jsx)(u.b,{to:"/Contact/Edit/".concat(t._id),children:Object(F.jsx)("i",{className:"fas fa-edit"})})}),Object(F.jsx)("button",{title:"Remove",className:"button-icons",onClick:i,children:Object(F.jsx)("i",{className:"far fa-trash-alt"})})]}),Object(F.jsx)("img",{src:"https://robohash.org/".concat(t.name,".png"),alt:""}),Object(F.jsx)("h1",{children:t.name}),Object(F.jsx)("h3",{children:t.email}),Object(F.jsx)("h3",{children:t.phone}),n&&Object(F.jsx)(re,{contact:t,loggedInUser:n,onTransferCoins:o}),n.moves&&Object(F.jsx)(B,{moves:n.moves.filter((function(e){return e.to===t._id}))})]}):Object(F.jsx)("div",{children:"Loading... "})})),se=n(41),ie=function(e){var t=e.dataToChart;return Object(F.jsx)("section",{className:"chart-cmp",children:Object(F.jsx)(se.a,{"max-width":"fit-contant",height:"400px",chartType:"Line",data:t.values,options:{chart:{title:t.name,subtitle:t.description},colors:["#ad8093"],hAxis:{title:t.period},vAxis:{title:t.unit}},rootProps:{"data-testid":"1"}})})},ue=function(){var e=Object(a.useState)(null),t=Object(z.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),o=Object(z.a)(c,2),s=o[0],i=o[1];Object(a.useEffect)((function(){u(),l()}),[]);var u=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getStatisticsValues("Market Price");case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getStatisticsValues("Exchange Trade Volume ");case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n?s?Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{children:"Statistic"}),Object(F.jsx)(ie,{dataToChart:n}),Object(F.jsx)(ie,{dataToChart:s})]}):Object(F.jsx)("div",{children:"no confirmed Transactions"}):Object(F.jsx)("div",{children:"no price"})},le=n(24),de=n(5),pe=n(43),fe=n(44),je=n(49),me=n(47),he=function(e){Object(je.a)(n,e);var t=Object(me.a)(n);function n(){var e;Object(pe.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contact:{_id:"",name:"",email:"",phone:""}},e.componentDidMount=Object(f.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=e.props.match.params.id)){t.next=5;break}return t.next=4,e.props.loadCotnact(n);case 4:e.setState({contact:Object(de.a)({},e.props.contact)});case 5:case"end":return t.stop()}}),t)}))),e.saveContact=function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.props.saveContact(e.state.contact);case 3:e.props.history.go(-1);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState((function(e){return{contact:Object(de.a)(Object(de.a)({},e.contact),{},Object(le.a)({},a,r))}}))},e}return Object(fe.a)(n,[{key:"render",value:function(){var e=this.state.contact;return Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{children:"Add new contact"}),Object(F.jsxs)("form",{onSubmit:this.saveContact,children:[Object(F.jsx)("label",{children:"Enter a contact name: "}),Object(F.jsx)("input",{type:"text",placeholder:"Contact Name",name:"name",value:e.name,onChange:this.handleChange}),Object(F.jsx)("label",{children:"Enter email: "}),Object(F.jsx)("input",{type:"email",placeholder:"Contact Email",name:"email",value:e.email,onChange:this.handleChange}),Object(F.jsx)("label",{children:"Enter phone number: "}),Object(F.jsx)("input",{type:"tel",placeholder:"Phone Number",name:"phone",value:e.phone,onChange:this.handleChange}),Object(F.jsx)("button",{children:"Save"})]})]})}}]),n}(a.PureComponent),be={loadCotnact:X,saveContact:function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){var a,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=!1,a=!!e._id,t.next=4,W.saveContact(e);case 4:return r=t.sent,n(a?{type:"UPDATE_CONTACT",contact:r}:{type:"ADD_CONTACT",contact:r}),t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},Oe=Object(s.b)((function(e){return{contact:e.contact.contact}}),be)(he),ve={signUp:N},ge=Object(s.b)((function(e){return{loggedInUser:e.user.loggedInUser}}),ve)((function(e){var t=Object(a.useState)(""),n=Object(z.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(""),i=Object(z.a)(o,2),u=i[0],l=i[1],d=Object(s.c)(),j=function(){var t=Object(f.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={name:r,password:u},t.next=4,d(N(a));case 4:c(""),l(""),e.history.push("/");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(F.jsxs)("div",{className:"sign-up-page",children:[Object(F.jsx)("h2",{children:"Sign up:"}),Object(F.jsxs)("form",{onSubmit:function(e){return j(e)},children:[Object(F.jsx)("label",{children:"Name: "}),Object(F.jsx)("input",{type:"text",placeholder:"Eter your name",name:"name",value:r,onChange:function(e){return c(e.target.value)}}),Object(F.jsx)("label",{children:"Password: "}),Object(F.jsx)("input",{type:"password",placeholder:"Enter your password",name:"password",value:u,onChange:function(e){return l(e.target.value)}}),Object(F.jsx)("button",{type:"submit",children:"Sign Up"})]})]})})),xe=function(){return Object(F.jsxs)("div",{className:"navbar",children:[Object(F.jsx)(u.c,{className:"nav-link",activeClassName:"active",exact:!0,to:"/",children:"Home"}),Object(F.jsx)(u.c,{className:"nav-link",to:"/Contact",children:"Contacts"}),Object(F.jsx)(u.c,{className:"nav-link",to:"/Statistic",children:"Statistic"})]})},ye=function(){return Object(F.jsxs)("div",{className:"main-header",children:[Object(F.jsx)(u.b,{to:"/",children:Object(F.jsx)("h1",{className:"main-logo",children:"Mister Bitcoin"})}),Object(F.jsx)(xe,{})]})},we=Object(i.a)(),Ce={loadUser:C},Se=Object(s.b)((function(e){return{loggedInUser:e.user.loggedInUser}}),Ce)((function(e){var t=e.loggedInUser,n=e.rate,r=Object(s.c)();return Object(a.useEffect)((function(){r(M()),t||r(C())}),[t,n]),Object(F.jsx)("div",{className:"App",children:Object(F.jsxs)(u.a,{history:we,children:[Object(F.jsx)(ye,{}),Object(F.jsx)("main",{children:Object(F.jsxs)(l.c,{children:[Object(F.jsx)(l.a,{path:"/",exact:!0,component:H,loggedInUser:t}),Object(F.jsx)(l.a,{path:"/Contact",exact:!0,component:ae,loggedInUser:t}),Object(F.jsx)(l.a,{path:"/Contact/Edit/:id?",component:Oe,loggedInUser:t}),Object(F.jsx)(l.a,{path:"/Contact/:id",component:oe,loggedInUser:t}),Object(F.jsx)(l.a,{path:"/Statistic",component:ue,loggedInUser:t}),Object(F.jsx)(l.a,{path:"/SignUp",component:ge,loggedInUser:t})]})})]})})})),Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},_e=(n(81),n(15)),Ie=n(46),Te={msg:"hello world",counter:17};var Ee=n(48),Ue={contacts:[],contact:null};var ke={loggedInUser:null};var Ae={rate:null};var Le=Object(_e.d)(Object(_e.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(de.a)(Object(de.a)({},e),{},{loggedInUser:t.loggedInUser});case"SET_USER_MOVES":return Object(de.a)(Object(de.a)({},e),{},{loggedInUser:Object(de.a)(Object(de.a)({},e.loggedInUser),{},{moves:t.moves})});default:return e}},contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONTACTS":return Object(de.a)(Object(de.a)({},e),{},{contacts:t.contacts});case"SET_CONTACT":return Object(de.a)(Object(de.a)({},e),{},{contact:t.contact});case"UPDATE_CONTACT":return Object(de.a)(Object(de.a)({},e),{},{contacts:e.contacts.map((function(e){return e._id===t.contact._id?t.contact:e}))});case"ADD_CONTACT":return Object(de.a)(Object(de.a)({},e),{},{contacts:[].concat(Object(Ee.a)(e.contacts),[t.contact])});case"DELETE_CONTACT":return Object(de.a)(Object(de.a)({},e),{},{contacts:e.contacts.filter((function(e){return e._id!==t.contact._id}))});default:return e}},bitcoin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RATE":return Object(de.a)(Object(de.a)({},e),{},{rate:t.rate});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INC":return Object(de.a)(Object(de.a)({},e),{},{counter:e.counter+1});default:return e}}}),Object(_e.a)(Ie.a));o.a.render(Object(F.jsx)(s.a,{store:Le,children:Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(Se,{})})}),document.getElementById("root")),Ne()}},[[82,1,2]]]);
//# sourceMappingURL=main.78502ee7.chunk.js.map