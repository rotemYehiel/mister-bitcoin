(this["webpackJsonpmister-bitcoin"]=this["webpackJsonpmister-bitcoin"]||[]).push([[0],{79:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(23),o=n.n(r),s=n(7),i=n(48),u=n(10),l=n(8),d=n(17),j=n(47),p=n(2),b=n.n(p),f=n(4),m=[{_id:"5a5664024c096d04eeb13a8a",name:"Ochoa Hyde",password:"1234",coins:100,moves:[]},{_id:"5a3664028c093d08eeb13a8a",name:"rotem",password:"1234",coins:200,moves:[]}],h=JSON.parse(localStorage.getItem("logged user")),O=(localStorage.getItem("users")||localStorage.setItem("users",JSON.stringify(m)),JSON.parse(localStorage.getItem("users")));function v(e){return e?function(e){var t=O.find((function(t){return t.name===e.name&&t.password===e.password}));t&&localStorage.setItem("logged user",JSON.stringify(t));return JSON.parse(localStorage.getItem("logged user"))}(e):h||null}function g(){return(g=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=S(t),O.push(n),localStorage.setItem("users",JSON.stringify(O)),localStorage.setItem("logged user",JSON.stringify(n)),e.abrupt("return",v());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(f.a)(b.a.mark((function e(t,n){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.coins>=n&&(h.coins-=n,a={date:new Date,amount:n,to:t._id},h.moves?h.moves.unshift(a):h.moves=[a],c=O.findIndex((function(e){return e.name===h.name})),O.splice(c,1,h),localStorage.setItem("users",JSON.stringify(O)),localStorage.setItem("logged user",JSON.stringify(h))),e.abrupt("return",v());case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=2;break}return e.abrupt("return");case 2:return t="",e.next=5,localStorage.removeItem("logged user");case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y={getUser:v,logOut:function(){return w.apply(this,arguments)},signUp:function(e){return g.apply(this,arguments)},addMove:function(e,t){return x.apply(this,arguments)}};function S(e){return{_id:C(),name:e.name,password:e.password,coins:100,moves:[]}}function C(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function N(e){return e?function(){var t=Object(f.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.getUser(e);case 2:a=t.sent,n({type:"SET_USER",loggedInUser:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}():function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getUser();case 2:n=e.sent,t({type:"SET_USER",loggedInUser:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function _(){return function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.logOut();case 2:t({type:"SET_USER",loggedInUser:null});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function I(e){return function(){var t=Object(f.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.signUp(e);case 2:a=t.sent,n({type:"SET_USER",loggedInUser:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function T(e,t){return function(){var n=Object(f.a)(b.a.mark((function n(a){var c,r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.addMove(e,t);case 2:c=n.sent,r=c.moves,a({type:"SET_USER_MOVES",moves:r});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}var E=n(31),U=n.n(E),k="https://blockchain.info/tobtc?currency=USD&value=1",L="https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true",A="https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true&values";function D(){return(D=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("rate")){e.next=5;break}t=localStorage.getItem("rate"),t=JSON.parse(t),e.next=9;break;case 5:return e.next=7,U.a.get(k);case 7:t=e.sent,localStorage.setItem("rate",JSON.stringify(t));case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(f.a)(b.a.mark((function e(t){var n,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem(t)){e.next=5;break}n=localStorage.getItem(t),n=JSON.parse(n),e.next=12;break;case 5:return e.next=7,U.a.get("Market Price"===t?L:A);case 7:a=e.sent,(c=a.data.values.map((function(e){return[new Date(e.x),e.y]}))).unshift([a.data.period,a.data.name]),n={name:a.data.name,description:a.data.description,period:a.data.period,unit:a.data.unit,values:c},localStorage.setItem(t,JSON.stringify(n));case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z={getRate:function(){return D.apply(this,arguments)},getStatisticsValues:function(e){return M.apply(this,arguments)}};function P(){return function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.getRate();case 2:n=e.sent,t({type:"SET_RATE",rate:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}n(79);var R=n(9),J=n(12),F=n(14),B=n.p+"static/media/bitcoin-gif.40cb03d6.gif",V=n(44),H=n.n(V),G=n(0),Y=function(e){var t=e.moves;return Object(G.jsxs)("div",{className:"moves-list",children:[t.length?Object(G.jsx)("h3",{className:"card-on-feed",children:"Moves"}):Object(G.jsx)("h3",{className:"card-on-feed",children:"No moves yet"}),Object(G.jsx)("ul",{className:"moves-list-ul",children:t.map((function(e){return Object(G.jsxs)("li",{className:"move card-on-feed",children:[Object(G.jsxs)("p",{children:[Object(G.jsx)("span",{children:Object(G.jsx)(J.a,{icon:F.a})})," ",H()(e.date).format("MMMM Do YYYY, h:mm:ss a")]}),Object(G.jsxs)("p",{children:[Object(G.jsx)("span",{children:Object(G.jsx)(J.a,{icon:["fab","bitcoin"]})}),e.amount," coins"]})]},e.date)}))})]})},q={loadUser:N,logOut:_,getRate:P},W=Object(s.b)((function(e){return{loggedInUser:e.user.loggedInUser,rate:e.bitcoin.rate}}),q)((function(e){var t=e.loggedInUser,n=e.rate,c=Object(a.useState)(""),r=Object(R.a)(c,2),o=r[0],i=r[1],l=Object(a.useState)(""),d=Object(R.a)(l,2),j=d[0],p=d[1],m=Object(s.c)();Object(a.useEffect)((function(){}),[t,n]);var h=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),m(N({name:o,password:j})),m(P());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var t=Object(f.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),i(""),p(""),m(_()),e.history.push("/");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(G.jsx)("div",{className:"home-page page",children:t&&n?Object(G.jsxs)("div",{className:"user-logged-in",children:[Object(G.jsxs)("section",{className:"user-section",children:[Object(G.jsxs)("div",{className:"user-img-main-wrapper card-on-feed",children:[Object(G.jsx)("img",{className:"home-user-img",src:"https://robohash.org/".concat(t.name,".png"),alt:""}),Object(G.jsx)("h1",{children:t.name}),Object(G.jsx)("button",{onClick:function(e){return O(e)},className:"log-out-btn",children:"Log out"})]}),Object(G.jsxs)("section",{className:"info-section card-on-feed",children:[Object(G.jsxs)("p",{children:[Object(G.jsx)("span",{children:Object(G.jsx)(J.a,{icon:F.c})}),t.coins," coins"]}),Object(G.jsxs)("p",{children:[Object(G.jsx)("span",{children:Object(G.jsx)(J.a,{icon:F.f})}),"number of moves: ",t.moves?t.moves.length:0]}),Object(G.jsxs)("p",{children:[Object(G.jsx)("span",{children:Object(G.jsx)(J.a,{icon:F.b})}),"rate is: ",n.data]})]})]}),t.moves&&Object(G.jsx)(Y,{moves:t.moves})]}):Object(G.jsxs)("section",{className:"sign-in-sec",children:[Object(G.jsx)("h2",{children:"Log in:"}),Object(G.jsxs)("form",{onSubmit:function(e){return h(e)},children:[Object(G.jsx)("label",{children:"Name: "}),Object(G.jsx)("input",{type:"text",placeholder:"Eter your name",name:"userName",value:o,onChange:function(e){return i(e.target.value)}}),Object(G.jsx)("label",{children:"Password: "}),Object(G.jsx)("input",{type:"password",placeholder:"Enter your password",name:"password",value:j,onChange:function(e){return p(e.target.value)}}),Object(G.jsx)("button",{type:"submit",children:"Go"})]}),Object(G.jsxs)("h2",{children:["New arround?",Object(G.jsx)("span",{className:"sign-up",children:Object(G.jsx)(u.b,{to:"/SignUp",children:"  Sign up now"})})]}),Object(G.jsx)("img",{className:"bitcoin-gif",src:B,alt:"bitcoin gif"})]})})})),K=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812"}];function Q(e){return e.sort((function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0}))}function X(e){return e=e.toLocaleLowerCase(),K.filter((function(t){return t.name.toLocaleLowerCase().includes(e)||t.phone.toLocaleLowerCase().includes(e)||t.email.toLocaleLowerCase().includes(e)}))}var Z={getContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(t,n){var a=K;e&&e.term&&(a=X(e.term)),t(Q(a))}))},getContactById:function(e){return new Promise((function(t,n){var a=K.find((function(t){return t._id===e}));a?t(a):n("Contact id ".concat(e," not found!"))}))},deleteContact:function(e){return new Promise((function(t,n){var a=K.findIndex((function(t){return t._id===e}));-1!==a&&K.splice(a,1),t(K)}))},saveContact:function(e){return e._id?function(e){return new Promise((function(t,n){var a=K.findIndex((function(t){return e._id===t._id}));-1!==a&&(K[a]=e),t(e)}))}(e):function(e){return new Promise((function(t,n){e._id=$(),K.push(e),t(e)}))}(e)},getEmptyContact:function(){return{_id:$(),name:"",email:"",phone:""}}};function $(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function ee(e){return function(){var t=Object(f.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.getContacts(e);case 2:a=t.sent,n({type:"SET_CONTACTS",contacts:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function te(e){return function(){var t=Object(f.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.getContactById(e);case 2:a=t.sent,n({type:"SET_CONTACT",contact:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function ne(e){return function(){var t=Object(f.a)(b.a.mark((function t(n){var a,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=!1,a=!!e._id,t.next=4,Z.saveContact(e);case 4:return c=t.sent,n(a?{type:"UPDATE_CONTACT",contact:c}:{type:"ADD_CONTACT",contact:c}),t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function ae(e){return function(){var t=Object(f.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.deleteContact(e);case 2:a=t.sent,n({type:"DELETE_CONTACT",contact:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var ce=function(e){var t=Object(a.useState)(""),n=Object(R.a)(t,2),c=n[0],r=n[1];return Object(G.jsx)("form",{className:"contact-filter",children:Object(G.jsx)("input",{type:"text",placeholder:"Search contact by name...",onChange:function(t){return function(t){r(t.target.value),e.onFilter(c)}(t)},name:"term",value:c})})},re=function(e){var t=e.currContact;return Object(G.jsxs)("div",{className:"contact-preview",children:[Object(G.jsx)("img",{className:"contact-img",src:"https://robohash.org/".concat(t.name),alt:""}),Object(G.jsx)("h3",{className:"contact-name",children:t.name})]})},oe=function(e){var t=e.contacts;return Object(G.jsx)("ul",{className:"contact-list",children:t.map((function(e,t){return Object(G.jsx)("li",{className:"contact",children:Object(G.jsx)(u.b,{to:"/Contact/"+e._id,children:Object(G.jsx)(re,{currContact:e})})},t)}))})},se={loadCotnacts:ee},ie=Object(s.b)((function(e){return{loggedInUser:e.user.loggedInUser,contacts:e.contact.contacts}}),se)((function(e){var t=e.contacts,n=e.loggedInUser,c=Object(a.useState)({term:""}),r=Object(R.a)(c,2),o=r[0],i=r[1],l=Object(s.c)();Object(a.useEffect)((function(){d(),n||l(ee())}),[o.term]);var d=function(){l(ee(o))};return t?Object(G.jsxs)("div",{className:"contact-page page",children:[Object(G.jsx)(ce,{filterBy:o,onFilter:function(e){return function(e){i(e),d()}(e)}}),Object(G.jsx)(oe,{contacts:t}),Object(G.jsx)("button",{className:"add-contact-btn button",children:Object(G.jsxs)(u.b,{to:"/Contact/Edit",children:["Add Contact",Object(G.jsx)("span",{children:Object(G.jsx)(J.a,{icon:F.h})})]})})]}):Object(G.jsx)("h3",{children:"no contacts yet..."})})),ue=function(e){var t=e.contact,n=e.loggedInUser,c=Object(a.useState)(0),r=Object(R.a)(c,2),o=r[0],s=r[1],i=function(){var t=Object(f.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e.onTransferCoins(o),s(0);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return t||n?Object(G.jsxs)("div",{className:"transfer-fund card-on-feed",children:[Object(G.jsxs)("p",{children:["Transfer coins to ",t.name,":"]}),Object(G.jsx)("form",{onSubmit:function(e){return i(e)},children:Object(G.jsxs)("p",{className:"amount-p",children:[Object(G.jsx)("label",{children:"Amount"}),Object(G.jsx)("input",{type:"number",name:"amount",min:"1",max:n.coins,required:!0,value:o,onChange:function(e){return s(e.target.value)}}),Object(G.jsx)("button",{type:"submit",children:"Tranfer"})]})})]}):Object(G.jsx)("h3",{children:"no contact yet..."})},le={loadCotnact:te,deleteContact:ae,clearContact:function(){return function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"SET_CONTACT",contact:null});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},addMove:T},de=Object(s.b)((function(e){return{contact:e.contact.contact,loggedInUser:e.user.loggedInUser}}),le)((function(e){var t=e.contact,n=e.loggedInUser,c=Object(s.c)();Object(a.useEffect)((function(){r()}),[e.match.params]);var r=function(){var t=Object(f.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.match.params.id,c(te(n));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var e=Object(f.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(T(t,n)),c(N());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var n=Object(f.a)(b.a.mark((function n(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.history.go(-1),c(ae(t._id));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return n?t?Object(G.jsxs)("div",{className:"contact-details page",children:[Object(G.jsxs)("section",{className:"contact-section",children:[Object(G.jsxs)("div",{className:"user-img-wrapper card-on-feed",children:[Object(G.jsx)("img",{className:"contact-img",src:"https://robohash.org/".concat(t.name,".png"),alt:""}),Object(G.jsx)("h1",{children:t.name}),Object(G.jsxs)("section",{className:"btns-sec",children:[Object(G.jsx)("button",{title:"Return",className:"buttons icon-btn",onClick:function(t){e.history.go(-1)},children:Object(G.jsx)(J.a,{icon:F.j})}),Object(G.jsx)(u.b,{title:"Details",type:"button",className:"buttons icon-btn",to:"/Contact/Edit/".concat(t._id),children:Object(G.jsx)(J.a,{icon:F.d})}),Object(G.jsx)("button",{title:"Remove",className:"buttons icon-btn",onClick:i,children:Object(G.jsx)(J.a,{icon:F.i})})]})]}),Object(G.jsxs)("section",{className:"info-section card-on-feed",children:[Object(G.jsxs)("p",{children:[Object(G.jsx)("span",{children:Object(G.jsx)(J.a,{icon:F.e})}),t.email]}),Object(G.jsxs)("p",{children:[Object(G.jsx)("span",{children:Object(G.jsx)(J.a,{icon:F.g})}),t.phone]})]})]}),Object(G.jsxs)("section",{className:"feed-section",children:[n&&Object(G.jsx)(ue,{contact:t,loggedInUser:n,onTransferCoins:o}),n&&Object(G.jsx)(Y,{moves:n.moves.filter((function(e){return e.to===t._id}))})]})]}):Object(G.jsx)("div",{children:"Loading... "}):Object(G.jsx)("div",{children:"Please login first"})})),je=n(45),pe=function(e){var t=e.dataToChart;return Object(G.jsx)("section",{className:"chart-cmp",children:Object(G.jsx)(je.a,{"max-width":"fit-contant",height:"400px",chartType:"Line",loader:Object(G.jsx)("img",{style:{width:"5vw"},src:B,alt:"bitcoin gif"}),data:t.values,options:{chart:{title:t.name,subtitle:t.description},colors:["#1b78f2"],hAxis:{title:t.period},vAxis:{title:t.unit}},rootProps:{"data-testid":"1"}})})},be=function(){var e=Object(a.useState)(null),t=Object(R.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),o=Object(R.a)(r,2),s=o[0],i=o[1];Object(a.useEffect)((function(){u(),l()}),[]);var u=function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.getStatisticsValues("Market Price");case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.getStatisticsValues("Exchange Trade Volume ");case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n?s?Object(G.jsxs)("div",{className:"page",children:[Object(G.jsx)("h1",{children:"Statistic"}),Object(G.jsx)(pe,{dataToChart:n}),Object(G.jsx)(pe,{dataToChart:s})]}):Object(G.jsx)("div",{children:"no confirmed Transactions"}):Object(G.jsx)("div",{children:"no price"})},fe=n(28),me=n(6),he={loadCotnact:te,saveContact:ne},Oe=Object(s.b)((function(e){return{contact:e.contact.contact}}),he)((function(e){var t=Object(s.c)(),n=Object(a.useState)({_id:"",name:"",email:"",phone:""}),c=Object(R.a)(n,2),r=c[0],o=c[1];Object(a.useEffect)((function(){var n=e.match.params.id;n&&function(){var a=Object(f.a)(b.a.mark((function a(){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(te(n));case 2:o(e.contact);case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()()}),[e.match.params]);var i=function(){var n=Object(f.a)(b.a.mark((function n(a){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.next=3,t(ne(r));case 3:e.history.go(-1);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(e){e.preventDefault();var t=e.target,n=t.name,a=t.value;o(Object(me.a)(Object(me.a)({},r),{},Object(fe.a)({},n,a)))};return Object(G.jsxs)("div",{className:"page",children:[r._id?Object(G.jsxs)("h1",{children:["Edit: ",r.name]}):Object(G.jsx)("h1",{children:"Add new contact"}),Object(G.jsxs)("form",{onSubmit:function(e){return i(e)},children:[Object(G.jsx)("label",{children:"Enter a contact name: "}),Object(G.jsx)("input",{type:"text",placeholder:"Contact Name",name:"name",value:r.name,onChange:function(e){return u(e)}}),Object(G.jsx)("label",{children:"Enter email: "}),Object(G.jsx)("input",{type:"email",placeholder:"Contact email",name:"email",value:r.email,onChange:function(e){return u(e)}}),Object(G.jsx)("label",{children:"Enter phone number: "}),Object(G.jsx)("input",{type:"tel",placeholder:"Phone number",name:"phone",value:r.phone,onChange:function(e){return u(e)}}),Object(G.jsx)("button",{children:"Save"})]})]})})),ve={signUp:I},ge=Object(s.b)((function(e){return{loggedInUser:e.user.loggedInUser}}),ve)((function(e){var t=Object(a.useState)(""),n=Object(R.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),i=Object(R.a)(o,2),u=i[0],l=i[1],d=Object(s.c)(),j=function(){var t=Object(f.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={name:c,password:u},t.next=4,d(I(a));case 4:p(),e.history.push("/");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){r(""),l("")};return Object(G.jsxs)("div",{className:"sign-up-page page",children:[Object(G.jsx)("h2",{children:"Sign up:"}),Object(G.jsxs)("form",{onSubmit:function(e){return j(e)},children:[Object(G.jsx)("label",{children:"Name: "}),Object(G.jsx)("input",{type:"text",placeholder:"Eter your name",name:"name",value:c,onChange:function(e){return r(e.target.value)}}),Object(G.jsx)("label",{children:"Password: "}),Object(G.jsx)("input",{type:"password",placeholder:"Enter your password",name:"password",value:u,onChange:function(e){return l(e.target.value)}}),Object(G.jsx)("button",{type:"submit",children:"Sign Up"})]})]})})),xe=function(){return Object(G.jsxs)("div",{className:"navbar",children:[Object(G.jsx)(u.c,{className:"nav-link",activeClassName:"active",exact:!0,to:"/",children:"Home"}),Object(G.jsx)(u.c,{className:"nav-link",to:"/Contact",children:"Contacts"}),Object(G.jsx)(u.c,{className:"nav-link",to:"/Statistic",children:"Statistic"})]})},we=function(){return Object(G.jsxs)("div",{className:"main-header",children:[Object(G.jsx)(u.b,{to:"/",children:Object(G.jsx)("h1",{className:"main-logo",children:"Mister Bitcoin"})}),Object(G.jsx)(xe,{})]})};d.b.add(j.a);var ye=Object(i.a)(),Se={loadUser:N},Ce=Object(s.b)((function(e){return{loggedInUser:e.user.loggedInUser}}),Se)((function(e){var t=e.loggedInUser,n=e.rate,c=Object(s.c)();return Object(a.useEffect)((function(){c(P()),t||c(N())}),[t,n]),Object(G.jsx)("div",{className:"App",children:Object(G.jsxs)(u.a,{history:ye,children:[Object(G.jsx)(we,{}),Object(G.jsx)("main",{children:Object(G.jsxs)(l.c,{children:[Object(G.jsx)(l.a,{path:"/",exact:!0,component:W,loggedInUser:t}),Object(G.jsx)(l.a,{path:"/Contact",exact:!0,component:ie,loggedInUser:t}),Object(G.jsx)(l.a,{path:"/Contact/Edit/:id?",component:Oe,loggedInUser:t}),Object(G.jsx)(l.a,{path:"/Contact/:id",component:de,loggedInUser:t}),Object(G.jsx)(l.a,{path:"/Statistic",component:be,loggedInUser:t}),Object(G.jsx)(l.a,{path:"/SignUp",component:ge,loggedInUser:t})]})})]})})})),Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},_e=(n(83),n(18)),Ie=n(49),Te={msg:"hello world",counter:17};var Ee=n(50),Ue={contacts:[],contact:null};var ke={loggedInUser:null};var Le={rate:null};var Ae=Object(_e.d)(Object(_e.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(me.a)(Object(me.a)({},e),{},{loggedInUser:t.loggedInUser});case"SET_USER_MOVES":return Object(me.a)(Object(me.a)({},e),{},{loggedInUser:Object(me.a)(Object(me.a)({},e.loggedInUser),{},{moves:t.moves})});default:return e}},contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONTACTS":return Object(me.a)(Object(me.a)({},e),{},{contacts:t.contacts});case"SET_CONTACT":return Object(me.a)(Object(me.a)({},e),{},{contact:t.contact});case"UPDATE_CONTACT":return Object(me.a)(Object(me.a)({},e),{},{contacts:e.contacts.map((function(e){return e._id===t.contact._id?t.contact:e}))});case"ADD_CONTACT":return Object(me.a)(Object(me.a)({},e),{},{contacts:[].concat(Object(Ee.a)(e.contacts),[t.contact])});case"DELETE_CONTACT":return Object(me.a)(Object(me.a)({},e),{},{contacts:e.contacts.filter((function(e){return e._id!==t.contact._id}))});default:return e}},bitcoin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RATE":return Object(me.a)(Object(me.a)({},e),{},{rate:t.rate});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INC":return Object(me.a)(Object(me.a)({},e),{},{counter:e.counter+1});default:return e}}}),Object(_e.a)(Ie.a));o.a.render(Object(G.jsx)(s.a,{store:Ae,children:Object(G.jsx)(c.a.StrictMode,{children:Object(G.jsx)(Ce,{})})}),document.getElementById("root")),Ne()}},[[84,1,2]]]);
//# sourceMappingURL=main.fd251f49.chunk.js.map