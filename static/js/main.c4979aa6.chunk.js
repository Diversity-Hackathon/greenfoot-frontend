(window["webpackJsonpdivhack-frontend"]=window["webpackJsonpdivhack-frontend"]||[]).push([[0],{38:function(e,t){},39:function(e,t){},43:function(e,t,n){e.exports=n.p+"static/media/logo.c2fc88ef.png"},47:function(e,t){},49:function(e,t,n){e.exports=n(61)},61:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"login",(function(){return k})),n.d(r,"loginSuccess",(function(){return C})),n.d(r,"loginError",(function(){return P}));var a={};n.r(a),n.d(a,"getCurrentUserId",(function(){return R})),n.d(a,"getLoadingStatus",(function(){return T}));var o,c=n(0),i=n.n(c),u=n(26),l=n.n(u),s=n(25),d=n(14),p=(n(58),function(){return i.a.createElement(d.a,{styles:{"*, *::before, *::after":{fontFamily:"system-ui, sans-serif",boxSizing:"border-box"},a:{color:"inherit",cursor:"pointer",textDecoration:"none"},button:{backgroundColor:"transparent",borderWidth:0,color:"inherit",cursor:"pointer",outline:"none",padding:0},cite:{fontStyle:"normal"},fieldset:{borderWidth:0,margin:0,padding:0},figure:{margin:0},"h1, h2, h3, h4, h5, h6":{fontSize:"inherit",fontWeight:"inherit",margin:0},html:{fontSize:"20px"},"input::-moz-focus-inner":{border:0,margin:0,padding:0},p:{margin:0},"ul, ol, dd":{listStyle:"none",margin:0,padding:0}}})}),m=n(41),f=n(44),b=n(19),g=n(5),h=n(9),O=Object(h.a)({basename:"/"}),y=n(23),j=n(8),v=n(62),E="LOGIN";function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var x=Object(v.a)((o={},Object(j.a)(o,E,(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{isLoading:!0})})),Object(j.a)(o,"LOGIN_SUCCESS",(function(e,t){return{data:t.payload,isLoading:!1}})),o),{data:null,isLoading:!1}),S=n(63),k=Object(S.a)(E),C=Object(S.a)("LOGIN_SUCCESS"),P=Object(S.a)("LOGIN_ERROR"),R=function(e){return e.currentUserId.data},T=function(e){return e.currentUserId.isLoading},F=x,D=n(4),L=Object(d.c)({"0%":{opacity:1},"50%,100%":{opacity:.5}}),B=g.a.div((function(e){var t=e.delay,n=e.theme.colors;return{animationDuration:".5s",animationName:L,animationTimingFunction:"linear",animationIterationCount:"infinite",animationDirection:"alternate",animationDelay:t,backfaceVisibility:"hidden",background:n.maroon,borderRadius:4,display:"inline-block",height:8,perspective:1e3,width:8}})),I=g.a.div({alignItems:"center",display:"inline-flex",height:8,"& div:not(:last-child)":{marginRight:3}}),U=function(e){var t=Object(D.a)({},e);return i.a.createElement(I,t,i.a.createElement(B,{delay:"0s"}),i.a.createElement(B,{delay:".25s"}),i.a.createElement(B,{delay:".5s"}))},_=g.a.div({display:"flex",height:32,width:"100%"}),G=g.a.input((function(e){var t=e.theme.colors;return{background:t.white,border:"1px solid ".concat(t.maroon),borderBottomLeftRadius:16,borderRight:"none",borderTopLeftRadius:16,height:32,lineHeight:"20px",fontSize:20,outline:"none",paddingLeft:16,width:"calc(100%)"}})),z=g.a.button((function(e){var t=e.theme.colors;return{background:t.green,borderBottomRightRadius:16,borderTopRightRadius:16,color:t.white,fontSize:14,height:32,textTransform:"uppercase",minWidth:64}})),W=Object(g.a)(U)({marginTop:16}),N=g.a.h1((function(){return{color:"#6F0808",fontFamily:"sans-serif",marginBottom:32}})),A=function(){var e=Object(s.b)(),t=Object(c.useState)(""),n=Object(y.a)(t,2),o=n[0],u=n[1],l=Object(s.c)(a.getLoadingStatus);return i.a.createElement(i.a.Fragment,null,i.a.createElement(N,null,"Welcome to Green Foot!"),i.a.createElement(_,null,i.a.createElement(G,{name:"email",type:"email",placeholder:"Your email address",value:o,onChange:function(e){u(e.currentTarget.value)}}),i.a.createElement(z,{onClick:function(){e(r.login(o))}},"Login")),l&&i.a.createElement(W,null))},J=[{id:1,mode:"Car (gasoline)",emissions:"155.10 lbs of CO2e"},{id:2,mode:"Car (diesel)",emissions:"177.68 lbs of CO2e"},{id:3,mode:"Bus",emissions:"37.00 lbs of CO2e"}],H=g.a.div((function(e){var t=e.theme.colors;return{width:"100%",alignItems:"center",background:t.green,height:32,fontSize:16,borderRadius:16,color:t.white,padding:"8px 16px",display:"flex",justifyContent:"space-between",":not(:last-of-type)":{marginBottom:8}}})),Y=g.a.h1((function(){return{color:"#6F0808",fontFamily:"sans-serif",marginBottom:32}})),M=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Y,null,"Your footprint:"),J.map((function(e){var t=e.id,n=e.mode,r=e.emissions;return i.a.createElement(H,{key:t},i.a.createElement("div",null,n),i.a.createElement("div",null,r))})))};function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q=g.a.div({display:"flex",flexDirection:"column",marginBottom:16,width:"100%"}),K=g.a.input((function(e){var t=e.theme.colors;return{background:t.white,border:"1px solid ".concat(t.maroon),borderRadius:16,height:32,lineHeight:"20px",fontSize:20,outline:"none",paddingLeft:16,width:"calc(100%)",":not(:last-of-type)":{marginBottom:4}}})),Q=Object(g.a)(U)({marginTop:16}),X=g.a.button((function(e){var t=e.theme.colors;return{background:t.green,borderRadius:16,color:t.white,fontSize:14,height:32,textTransform:"uppercase",padding:"8px 16px"}})),Z=g.a.h3({marginBottom:8}),ee=g.a.h1((function(){return{color:"#6F0808",fontFamily:"sans-serif",marginBottom:32}})),te={Login:A,Results:M,RouteInput:function(e){var t=e.history,n=Object(c.useState)({address:"",city:"",state:""}),r=Object(y.a)(n,2),a=r[0],o=r[1],u=Object(c.useState)({address:"",city:"",state:""}),l=Object(y.a)(u,2),s=l[0],d=l[1],p=Object(c.useState)(!1),m=Object(y.a)(p,2),f=m[0],b=m[1],g=function(e){return function(t){var n=t.currentTarget.value;o((function(t){return $({},t,Object(j.a)({},e,n))}))}},h=function(e){return function(t){var n=t.currentTarget.value;d((function(t){return $({},t,Object(j.a)({},e,n))}))}};return i.a.createElement(i.a.Fragment,null,i.a.createElement(ee,null,"Enter locations:"),i.a.createElement(q,null,i.a.createElement(Z,null,"From:"),i.a.createElement(K,{type:"text",placeholder:"Street Address",value:a.address,onChange:g("address")}),i.a.createElement(K,{type:"text",placeholder:"City",value:a.city,onChange:g("city")}),i.a.createElement(K,{type:"text",placeholder:"State",value:a.state,onChange:g("state")})),i.a.createElement(q,null,i.a.createElement(Z,null,"To:"),i.a.createElement(K,{type:"text",placeholder:"Street Address",value:s.address,onChange:h("address")}),i.a.createElement(K,{type:"text",placeholder:"City",value:s.city,onChange:h("city")}),i.a.createElement(K,{type:"text",placeholder:"State",value:s.state,onChange:h("state")})),i.a.createElement(X,{onClick:function(){b(!0),setTimeout((function(){t.push("/results")}),600)}},"Calculate CO",i.a.createElement("sub",null,"2")),f&&i.a.createElement(Q,null))}},ne=n(43),re=n.n(ne),ae={colors:{white:"#FFFFFF",green:"#086F3C",brown:"#C9B6A2",lightBrown:"#EDE7E0",darkBrown:"#6F3C08",maroon:"#6F0808"}},oe=g.a.div((function(e){return{alignItems:"center",background:e.theme.colors.lightBrown,display:"flex",flexDirection:"column",margin:"auto",marginTop:100,padding:32,width:400}})),ce=(g.a.h1((function(e){return{color:e.theme.colors.maroon,fontFamily:"sans-serif",marginBottom:32}})),g.a.img({width:400,marginTop:-32,marginBottom:32}));var ie=function(e){var t=e.store;return i.a.createElement(s.a,{store:t},i.a.createElement(m.a,{theme:ae},i.a.createElement(p,null),i.a.createElement(f.a,{history:O},i.a.createElement(oe,null,i.a.createElement(ce,{src:re.a,alt:"Logo",width:"400"}),i.a.createElement(b.c,null,i.a.createElement(b.a,{exact:!0,path:"/",component:te.Login}),i.a.createElement(b.a,{path:"/start",component:te.RouteInput}),i.a.createElement(b.a,{path:"/results",component:te.Results}),i.a.createElement(b.a,{component:function(){return i.a.createElement("div",null,"404 Not Found")}}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue,le=n(16),se=n(46),de=n(48),pe=n(47),me=n.n(pe),fe=(n(38),n(39),me.a),be="GET_ROUTE";function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var he=Object(v.a)((ue={},Object(j.a)(ue,be,(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{isLoading:!0})})),Object(j.a)(ue,"GET_ROUTE_SUCCESS",(function(e,t){return{data:t.payload,isLoading:!1}})),Object(j.a)(ue,"GET_ROUTE_ERROR",(function(e,t){return{}})),ue),{data:null,isLoading:!1}),Oe=(Object(S.a)(be),Object(S.a)("GET_ROUTE_SUCCESS")),ye=Object(S.a)("GET_ROUTE_ERROR"),je=he,ve=Object(le.combineReducers)({currentTrip:fe,currentUserId:F,routeOptions:je});function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var we=Object(de.a)(),xe=Object(se.composeWithDevTools)({actionSanitizer:function(e){if(e.error){var t=e.payload;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{payload:{type:t.name,message:t.message,stack:t.stack}})}return e},name:"GreenFoot"}),Se=n(12),ke=n.n(Se),Ce=n(10),Pe="https://greenfoot-hackathon.herokuapp.com",Re=ke.a.mark(Fe),Te=ke.a.mark(De);function Fe(e){return ke.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.payload,t.prev=1,t.next=4,Object(Ce.b)(300);case 4:return t.next=6,Object(Ce.d)(C(1));case 6:O.push("/start"),t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(1),t.next=13,Object(Ce.d)(P(t.t0));case 13:case"end":return t.stop()}}),Re,null,[[1,9]])}function De(){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.f)(E,Fe);case 2:case"end":return e.stop()}}),Te)}var Le=ke.a.mark(Ie),Be=ke.a.mark(Ue);function Ie(e){var t,n,r,o;return ke.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,1,c.prev=2,c.next=5,Object(Ce.e)(a.getCurrentUserId);case 5:return n=c.sent,c.next=8,fetch("".concat(Pe,"/user/").concat(n),{method:"POST",body:JSON.stringify({destination:t})});case 8:if(r=c.sent,console.log("response",r),r.ok){c.next=12;break}throw new Error("Error");case 12:return o=r.json(),c.next=15,Object(Ce.d)(Oe(o));case 15:c.next=22;break;case 17:return c.prev=17,c.t0=c.catch(2),console.log("error",c.t0),c.next=22,Object(Ce.d)(ye(c.t0));case 22:case"end":return c.stop()}}),Le,null,[[2,17]])}function Ue(){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.f)(be,Ie);case 2:case"end":return e.stop()}}),Be)}var _e=ke.a.mark(Ge);function Ge(){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.a)([Object(Ce.c)(De),Object(Ce.c)(Ue)]);case 2:case"end":return e.stop()}}),_e)}var ze,We=(ze={},Object(le.createStore)(ve,ze,xe(Object(le.applyMiddleware)(we))));l.a.render(i.a.createElement(ie,{store:We}),document.getElementById("root")),we.run(Ge),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.c4979aa6.chunk.js.map