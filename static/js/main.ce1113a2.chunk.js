(this["webpackJsonpmister-bitcoin"]=this["webpackJsonpmister-bitcoin"]||[]).push([[0],{79:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(23),s=n.n(r),o=n(6),i=n(48),u=n(11),l=n(8),d=n(17),j=n(47),b=n(2),m=n.n(b),p=n(4),f=[{_id:"5a5664024c096d04eeb13a8a",name:"Ochoa Hyde",password:"1234",coins:100,moves:[]},{_id:"5a3664028c093d08eeb13a8a",name:"rotem",password:"1234",coins:200,moves:[]}],h=JSON.parse(localStorage.getItem("logged user")),O=(localStorage.getItem("users")||localStorage.setItem("users",JSON.stringify(f)),JSON.parse(localStorage.getItem("users")));function v(e){return e?function(e){var t=O.find((function(t){return t.name===e.name&&t.password===e.password}));t&&localStorage.setItem("logged user",JSON.stringify(t));return JSON.parse(localStorage.getItem("logged user"))}(e):h||null}function g(){return(g=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y(t),O.push(n),localStorage.setItem("users",JSON.stringify(O)),localStorage.setItem("logged user",JSON.stringify(n)),e.abrupt("return",v());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(p.a)(m.a.mark((function e(t,n){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.coins>=n&&(h.coins-=n,a={date:new Date,amount:n,to:t._id},h.moves?h.moves.unshift(a):h.moves=[a],c=O.findIndex((function(e){return e.name===h.name})),O.splice(c,1,h),localStorage.setItem("users",JSON.stringify(O)),localStorage.setItem("logged user",JSON.stringify(h))),e.abrupt("return",v());case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w={getUser:v,logOut:function(){localStorage.removeItem("logged user")},signUp:function(e){return g.apply(this,arguments)},addMove:function(e,t){return x.apply(this,arguments)}};function y(e){return{_id:N(),name:e.name,password:e.password,coins:100,moves:[]}}function N(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getUser(e);case 2:a=t.sent,n({type:"SET_USER",loggedInUser:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function S(){return function(e){w.logOut(),e({type:"SET_USER",loggedInUser:null})}}function _(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.signUp(e);case 2:a=t.sent,n({type:"SET_USER",loggedInUser:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function I(e,t){return function(){var n=Object(p.a)(m.a.mark((function n(a){var c,r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.addMove(e,t);case 2:c=n.sent,r=c.moves,a({type:"SET_USER_MOVES",moves:r});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}var T=n(31),k=n.n(T),E="https://blockchain.info/tobtc?currency=USD&value=1",U="https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true",L="https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true&values";function A(){return(A=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("rate")){e.next=5;break}t=localStorage.getItem("rate"),t=JSON.parse(t),e.next=9;break;case 5:return e.next=7,k.a.get(E);case 7:t=e.sent,localStorage.setItem("rate",JSON.stringify(t));case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(p.a)(m.a.mark((function e(t){var n,a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem(t)){e.next=5;break}n=localStorage.getItem(t),n=JSON.parse(n),e.next=12;break;case 5:return e.next=7,k.a.get("Market Price"===t?U:L);case 7:a=e.sent,(c=a.data.values.map((function(e){return[new Date(e.x),e.y]}))).unshift([a.data.period,a.data.name]),n={name:a.data.name,description:a.data.description,period:a.data.period,unit:a.data.unit,values:c},localStorage.setItem(t,JSON.stringify(n));case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D={getRate:function(){return A.apply(this,arguments)},getStatisticsValues:function(e){return M.apply(this,arguments)}};function z(){return function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getRate();case 2:n=e.sent,t({type:"SET_RATE",rate:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}n(79);var P=n(9),R=n(10),J=n(14),B=n.p+"static/media/bitcoin-gif.40cb03d6.gif",F=n(44),G=n.n(F),V=n(0),H=function(e){var t=e.moves;return Object(V.jsxs)("div",{className:"moves-list",children:[t.length?Object(V.jsx)("h3",{className:"card-on-feed",children:"Moves"}):Object(V.jsx)("h3",{className:"card-on-feed",children:"No moves yet"}),Object(V.jsx)("ul",{className:"moves-list-ul",children:t.map((function(e){return Object(V.jsxs)("li",{className:"move card-on-feed",children:[Object(V.jsxs)("p",{children:[Object(V.jsx)("span",{children:Object(V.jsx)(R.a,{icon:J.a})})," ",G()(e.date).format("MMMM Do YYYY, h:mm:ss a")]}),Object(V.jsxs)("p",{children:[Object(V.jsx)("span",{children:Object(V.jsx)(R.a,{icon:["fab","bitcoin"]})}),e.amount," coins"]})]},e.date)}))})]})},Y={loadUser:C,logOut:S,getRate:z},q=Object(o.b)((function(e){return{loggedInUser:e.user.loggedInUser,rate:e.bitcoin.rate}}),Y)((function(e){var t=e.loggedInUser,n=e.rate,c=Object(a.useState)(""),r=Object(P.a)(c,2),s=r[0],i=r[1],l=Object(a.useState)(""),d=Object(P.a)(l,2),j=d[0],b=d[1],f=Object(o.c)();Object(a.useEffect)((function(){}),[t,n]);var h=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),f(C({name:s,password:j})),v(),f(z());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),f(S());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){i(""),b("")};return Object(V.jsx)("div",{className:"home-page page",children:t&&n?Object(V.jsxs)("div",{className:"user-logged-in",children:[Object(V.jsxs)("section",{className:"user-section",children:[Object(V.jsxs)("div",{className:"user-img-main-wrapper card-on-feed",children:[Object(V.jsx)("img",{className:"home-user-img",src:"https://robohash.org/".concat(t.name,".png"),alt:""}),Object(V.jsx)("h1",{children:t.name}),Object(V.jsx)("button",{onClick:function(e){return O(e)},className:"log-out-btn",children:"Log out"})]}),Object(V.jsxs)("section",{className:"info-section card-on-feed",children:[Object(V.jsxs)("p",{children:[Object(V.jsx)("span",{children:Object(V.jsx)(R.a,{icon:J.c})}),t.coins," coins"]}),Object(V.jsxs)("p",{children:[Object(V.jsx)("span",{children:Object(V.jsx)(R.a,{icon:J.f})}),"number of moves: ",t.moves?t.moves.length:0]}),Object(V.jsxs)("p",{children:[Object(V.jsx)("span",{children:Object(V.jsx)(R.a,{icon:J.b})}),"rate is: ",n.data]})]})]}),t.moves&&Object(V.jsx)("div",{className:"move-list-section",children:Object(V.jsx)(H,{moves:t.moves})})]}):Object(V.jsxs)("section",{className:"sign-in-sec",children:[Object(V.jsx)("h2",{className:"page-header",children:"Log in:"}),Object(V.jsxs)("form",{onSubmit:function(e){return h(e)},children:[Object(V.jsx)("label",{children:"Name: "}),Object(V.jsx)("input",{type:"text",placeholder:"Eter your name",name:"userName",value:s,onChange:function(e){return i(e.target.value)}}),Object(V.jsx)("label",{children:"Password: "}),Object(V.jsx)("input",{type:"password",placeholder:"Enter your password",name:"password",value:j,onChange:function(e){return b(e.target.value)}}),Object(V.jsx)("button",{className:"buttons",type:"submit",children:"Go"})]}),Object(V.jsxs)("h2",{className:"page-header text",children:["New arround?",Object(V.jsx)("span",{className:"sign-up",children:Object(V.jsx)(u.b,{to:"/SignUp",children:"  Sign up now"})})]}),Object(V.jsx)("img",{className:"bitcoin-gif",src:B,alt:"bitcoin gif"})]})})})),W=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812"}];function K(e){return e.sort((function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0}))}function Q(e){return e=e.toLocaleLowerCase(),W.filter((function(t){return t.name.toLocaleLowerCase().includes(e)||t.phone.toLocaleLowerCase().includes(e)||t.email.toLocaleLowerCase().includes(e)}))}var X={getContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(t,n){var a=W;e&&e.term&&(a=Q(e.term)),t(K(a))}))},getContactById:function(e){return new Promise((function(t,n){var a=W.find((function(t){return t._id===e}));a?t(a):n("Contact id ".concat(e," not found!"))}))},deleteContact:function(e){return new Promise((function(t,n){var a=W.findIndex((function(t){return t._id===e}));-1!==a&&W.splice(a,1),t(W)}))},saveContact:function(e){return e._id?function(e){return new Promise((function(t,n){var a=W.findIndex((function(t){return e._id===t._id}));-1!==a&&(W[a]=e),t(e)}))}(e):function(e){return new Promise((function(t,n){e._id=Z(),W.push(e),t(e)}))}(e)},getEmptyContact:function(){return{_id:Z(),name:"",email:"",phone:""}}};function Z(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function $(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.getContacts(e);case 2:a=t.sent,n({type:"SET_CONTACTS",contacts:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function ee(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.getContactById(e);case 2:a=t.sent,n({type:"SET_CONTACT",contact:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function te(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=!1,a=!!e._id,t.next=4,X.saveContact(e);case 4:return c=t.sent,n(a?{type:"UPDATE_CONTACT",contact:c}:{type:"ADD_CONTACT",contact:c}),t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function ne(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.deleteContact(e);case 2:a=t.sent,n({type:"DELETE_CONTACT",contact:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var ae=function(e){var t=Object(a.useState)(""),n=Object(P.a)(t,2),c=n[0],r=n[1];return Object(V.jsx)("form",{className:"contact-filter",children:Object(V.jsx)("input",{type:"text",placeholder:"Search contact by name...",onChange:function(t){return function(t){r(t.target.value),e.onFilter(c)}(t)},name:"term",value:c})})},ce=function(e){var t=e.currContact;return Object(V.jsxs)("div",{className:"contact-preview",children:[Object(V.jsx)("img",{className:"contact-img",src:"https://robohash.org/".concat(t.name),alt:""}),Object(V.jsx)("h3",{className:"contact-name",children:t.name})]})},re=function(e){var t=e.contacts;return Object(V.jsx)("ul",{className:"contact-list",children:t.map((function(e,t){return Object(V.jsx)("li",{className:"contact",children:Object(V.jsx)(u.b,{to:"/Contact/"+e._id,children:Object(V.jsx)(ce,{currContact:e})})},t)}))})},se={loadCotnacts:$},oe=Object(o.b)((function(e){return{loggedInUser:e.user.loggedInUser,contacts:e.contact.contacts}}),se)((function(e){var t=e.contacts,n=e.loggedInUser,c=Object(a.useState)({term:""}),r=Object(P.a)(c,2),s=r[0],i=r[1],l=Object(o.c)();Object(a.useEffect)((function(){d(),n||l($())}),[s.term]);var d=function(){l($(s))};return t?Object(V.jsxs)("div",{className:"contact-page page",children:[Object(V.jsx)(ae,{filterBy:s,onFilter:function(e){return function(e){i(e),d()}(e)}}),Object(V.jsx)(re,{contacts:t}),Object(V.jsxs)(u.b,{to:"/Contact/Edit",className:"add-contact-btn icon-btn",children:[Object(V.jsx)("span",{className:"text",children:"Add Contact"}),Object(V.jsx)("span",{className:"icon",children:Object(V.jsx)(R.a,{icon:J.h})})]})]}):Object(V.jsx)("h3",{children:"no contacts yet..."})})),ie=function(e){var t=e.contact,n=e.loggedInUser,c=Object(a.useState)(0),r=Object(P.a)(c,2),s=r[0],o=r[1],i=function(){var t=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e.onTransferCoins(s),o(0);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return t||n?Object(V.jsxs)("div",{className:"transfer-fund card-on-feed",children:[Object(V.jsxs)("p",{children:["Transfer coins to ",t.name,":"]}),Object(V.jsx)("form",{onSubmit:function(e){return i(e)},children:Object(V.jsxs)("p",{className:"amount-p",children:[Object(V.jsx)("label",{children:"Amount"}),Object(V.jsx)("input",{type:"number",name:"amount",min:"1",max:n.coins,required:!0,value:s,onChange:function(e){return o(e.target.value)}}),Object(V.jsx)("button",{type:"submit",children:"Tranfer"})]})})]}):Object(V.jsx)("h3",{children:"no contact yet..."})},ue={loadCotnact:ee,deleteContact:ne,clearContact:function(){return function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"SET_CONTACT",contact:null});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},addMove:I},le=Object(o.b)((function(e){return{contact:e.contact.contact,loggedInUser:e.user.loggedInUser}}),ue)((function(e){var t=e.contact,n=e.loggedInUser,c=Object(o.c)();Object(a.useEffect)((function(){r()}),[e.match.params]);var r=function(){var t=Object(p.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.match.params.id,c(ee(n));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(I(t,n));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var n=Object(p.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.history.go(-1),c(ne(t._id));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return n?t?Object(V.jsxs)("div",{className:"contact-details page",children:[Object(V.jsxs)("section",{className:"contact-section",children:[Object(V.jsxs)("div",{className:"user-img-wrapper card-on-feed",children:[Object(V.jsx)("img",{className:"contact-img",src:"https://robohash.org/".concat(t.name,".png"),alt:""}),Object(V.jsx)("h1",{children:t.name}),Object(V.jsxs)("section",{className:"btns-sec",children:[Object(V.jsx)("button",{title:"Return",className:"buttons icon-btn",onClick:function(t){e.history.go(-1)},children:Object(V.jsx)(R.a,{icon:J.j})}),Object(V.jsx)(u.b,{title:"Details",type:"button",className:"buttons icon-btn",to:"/Contact/Edit/".concat(t._id),children:Object(V.jsx)(R.a,{icon:J.d})}),Object(V.jsx)("button",{title:"Remove",className:"buttons icon-btn",onClick:i,children:Object(V.jsx)(R.a,{icon:J.i})})]})]}),Object(V.jsxs)("section",{className:"info-section card-on-feed",children:[Object(V.jsxs)("p",{children:[Object(V.jsx)("span",{children:Object(V.jsx)(R.a,{icon:J.e})}),t.email]}),Object(V.jsxs)("p",{children:[Object(V.jsx)("span",{children:Object(V.jsx)(R.a,{icon:J.g})}),t.phone]})]})]}),Object(V.jsxs)("section",{className:"feed-section",children:[n&&Object(V.jsx)(ie,{contact:t,loggedInUser:n,onTransferCoins:s}),n&&Object(V.jsx)(H,{moves:n.moves.filter((function(e){return e.to===t._id}))})]})]}):Object(V.jsx)("img",{style:{width:"5vw"},src:B,alt:"bitcoin gif"}):Object(V.jsxs)("div",{children:["Please login first ",Object(V.jsx)("button",{className:"buttons",onClick:function(t){e.history.go(-2)},children:"Go Back"})]})})),de=n(45),je=function(e){var t=e.dataToChart;return Object(V.jsx)("section",{className:"chart-cmp",children:Object(V.jsx)(de.a,{"max-width":"fit-contant",height:"400px",chartType:"Line",loader:Object(V.jsx)("img",{style:{width:"5vw"},src:B,alt:"bitcoin gif"}),data:t.values,options:{chart:{title:t.name,subtitle:t.description},colors:["#1b78f2"],hAxis:{title:t.period},vAxis:{title:t.unit}},rootProps:{"data-testid":"1"}})})},be=function(){var e=Object(a.useState)(null),t=Object(P.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(P.a)(r,2),o=s[0],i=s[1];Object(a.useEffect)((function(){u(),l()}),[]);var u=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getStatisticsValues("Market Price");case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getStatisticsValues("Exchange Trade Volume ");case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n?o?Object(V.jsxs)("div",{className:"page",children:[Object(V.jsx)("h1",{className:"page-header",children:"Statistic"}),Object(V.jsx)(je,{dataToChart:n}),Object(V.jsx)(je,{dataToChart:o})]}):Object(V.jsx)("div",{children:"no confirmed Transactions"}):Object(V.jsx)("div",{children:"no price"})},me=n(28),pe=n(7),fe={loadCotnact:ee,saveContact:te},he=Object(o.b)((function(e){return{contact:e.contact.contact}}),fe)((function(e){var t=Object(o.c)(),n=Object(a.useState)({_id:"",name:"",email:"",phone:""}),c=Object(P.a)(n,2),r=c[0],s=c[1];Object(a.useEffect)((function(){var n=e.match.params.id;n&&function(){var a=Object(p.a)(m.a.mark((function a(){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(ee(n));case 2:s(e.contact);case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()()}),[e.match.params]);var i=function(){var n=Object(p.a)(m.a.mark((function n(a){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.next=3,t(te(r));case 3:e.history.go(-1);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(e){e.preventDefault();var t=e.target,n=t.name,a=t.value;s(Object(pe.a)(Object(pe.a)({},r),{},Object(me.a)({},n,a)))};return Object(V.jsxs)("div",{className:"contact-edit page",children:[r._id?Object(V.jsxs)("h1",{children:["Edit: ",r.name]}):Object(V.jsx)("h1",{children:"Add new contact"}),Object(V.jsxs)("form",{onSubmit:function(e){return i(e)},children:[Object(V.jsx)("label",{children:"Enter a contact name: "}),Object(V.jsx)("input",{type:"text",placeholder:"Contact Name",name:"name",value:r.name,onChange:function(e){return u(e)}}),Object(V.jsx)("label",{children:"Enter email: "}),Object(V.jsx)("input",{type:"email",placeholder:"Contact email",name:"email",value:r.email,onChange:function(e){return u(e)}}),Object(V.jsx)("label",{children:"Enter phone number: "}),Object(V.jsx)("input",{type:"tel",placeholder:"Phone number",name:"phone",value:r.phone,onChange:function(e){return u(e)}}),Object(V.jsx)("button",{children:"Save"})]})]})})),Oe={signUp:_},ve=Object(o.b)((function(e){return{loggedInUser:e.user.loggedInUser}}),Oe)((function(e){var t=Object(a.useState)(""),n=Object(P.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),i=Object(P.a)(s,2),u=i[0],l=i[1],d=Object(o.c)(),j=function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={name:c,password:u},t.next=4,d(_(a));case 4:b(),e.history.push("/");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){r(""),l("")};return Object(V.jsxs)("div",{className:"sign-up-page page",children:[Object(V.jsx)("h2",{className:"page-header",children:"Sign up:"}),Object(V.jsxs)("form",{onSubmit:function(e){return j(e)},children:[Object(V.jsx)("label",{children:"Name: "}),Object(V.jsx)("input",{type:"text",placeholder:"Eter your name",name:"name",value:c,onChange:function(e){return r(e.target.value)}}),Object(V.jsx)("label",{children:"Password: "}),Object(V.jsx)("input",{type:"password",placeholder:"Enter your password",name:"password",value:u,onChange:function(e){return l(e.target.value)}}),Object(V.jsx)("button",{type:"submit",children:"Sign Up"})]})]})}));function ge(){return function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"TOGGAL_MENU"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}var xe=function(){var e=Object(o.c)();return Object(V.jsxs)("div",{className:"navbar",children:[Object(V.jsx)(u.c,{className:"nav-link",activeClassName:"active",exact:!0,to:"/",onClick:function(){return e(ge())},children:"Home"}),Object(V.jsx)(u.c,{className:"nav-link",to:"/Contact",onClick:function(){return e(ge())},children:"Contacts"}),Object(V.jsx)(u.c,{className:"nav-link",to:"/Statistic",onClick:function(){return e(ge())},children:"Statistic"})]})},we=function(){var e=Object(o.d)((function(e){return e.app.isMenuOpen})),t=Object(o.c)();return Object(V.jsx)("div",{className:"menu-btn",children:Object(V.jsx)("div",{id:"menu-bar",children:Object(V.jsxs)("div",{id:"menu",onClick:function(){return document.getElementById("menu").classList.toggle("change"),void t(ge())},className:e?"change":"",children:[Object(V.jsx)("div",{id:"bar1",className:"bar"}),Object(V.jsx)("div",{id:"bar2",className:"bar"}),Object(V.jsx)("div",{id:"bar3",className:"bar"})]})})})},ye=function(){return Object(V.jsx)("div",{className:"menu",children:Object(V.jsx)(xe,{})})},Ne=function(){var e=Object(o.d)((function(e){return e.app.isMenuOpen}));return Object(V.jsxs)("div",{className:"main-header",children:[Object(V.jsx)(we,{}),Object(V.jsxs)(u.b,{to:"/",className:"main-link",children:[Object(V.jsx)("h1",{className:"main-logo",children:"Mister Bitcoin"}),Object(V.jsx)("h1",{className:"mobile-logo",children:Object(V.jsx)(R.a,{icon:["fab","bitcoin"]})})]}),Object(V.jsx)("div",{className:"navbar-wrapper",children:Object(V.jsx)(xe,{})}),Object(V.jsx)("div",{className:"menu-wrapper "+(e?"menu-open":""),children:Object(V.jsx)(ye,{})})]})};d.b.add(j.a);var Ce=Object(i.a)(),Se={loadUser:C},_e=Object(o.b)((function(e){return{loggedInUser:e.user.loggedInUser}}),Se)((function(e){var t=e.loggedInUser,n=e.rate,c=Object(o.c)();return Object(a.useEffect)((function(){c(z()),t||c(C())}),[t,n]),Object(V.jsx)("div",{className:"App",children:Object(V.jsxs)(u.a,{history:Ce,children:[Object(V.jsx)(Ne,{}),Object(V.jsx)("main",{children:Object(V.jsxs)(l.c,{children:[Object(V.jsx)(l.a,{path:"/",exact:!0,component:q,loggedInUser:t}),Object(V.jsx)(l.a,{path:"/Contact",exact:!0,component:oe,loggedInUser:t}),Object(V.jsx)(l.a,{path:"/Contact/Edit/:id?",component:he,loggedInUser:t}),Object(V.jsx)(l.a,{path:"/Contact/:id",component:le,loggedInUser:t}),Object(V.jsx)(l.a,{path:"/Statistic",component:be,loggedInUser:t}),Object(V.jsx)(l.a,{path:"/SignUp",component:ve,loggedInUser:t})]})})]})})})),Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},Te=(n(83),n(18)),ke=n(49),Ee={isMenuOpen:!1,msg:"hello world",counter:17};var Ue=n(50),Le={contacts:[],contact:null};var Ae={loggedInUser:null};var Me={rate:null};var De=Object(Te.d)(Object(Te.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(pe.a)(Object(pe.a)({},e),{},{loggedInUser:t.loggedInUser?t.loggedInUser:null});case"SET_USER_MOVES":return Object(pe.a)(Object(pe.a)({},e),{},{loggedInUser:Object(pe.a)(Object(pe.a)({},e.loggedInUser),{},{moves:t.moves})});default:return e}},contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONTACTS":return Object(pe.a)(Object(pe.a)({},e),{},{contacts:t.contacts});case"SET_CONTACT":return Object(pe.a)(Object(pe.a)({},e),{},{contact:t.contact});case"UPDATE_CONTACT":return Object(pe.a)(Object(pe.a)({},e),{},{contacts:e.contacts.map((function(e){return e._id===t.contact._id?t.contact:e}))});case"ADD_CONTACT":return Object(pe.a)(Object(pe.a)({},e),{},{contacts:[].concat(Object(Ue.a)(e.contacts),[t.contact])});case"DELETE_CONTACT":return Object(pe.a)(Object(pe.a)({},e),{},{contacts:e.contacts.filter((function(e){return e._id!==t.contact._id}))});default:return e}},bitcoin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RATE":return Object(pe.a)(Object(pe.a)({},e),{},{rate:t.rate});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGAL_MENU":return Object(pe.a)(Object(pe.a)({},e),{},{isMenuOpen:!e.isMenuOpen});case"INC":return Object(pe.a)(Object(pe.a)({},e),{},{counter:e.counter+1});default:return e}}}),Object(Te.a)(ke.a));s.a.render(Object(V.jsx)(o.a,{store:De,children:Object(V.jsx)(c.a.StrictMode,{children:Object(V.jsx)(_e,{})})}),document.getElementById("root")),Ie()}},[[84,1,2]]]);
//# sourceMappingURL=main.ce1113a2.chunk.js.map