(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[14],{104:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(4),a=t(0),s=(t(80),t(1));function i(e){var n=Object(a.useState)(!1),t=Object(r.a)(n,2),i=t[0],c=t[1];return Object(a.useEffect)((function(){if(e.serverError){c(!0);var n=setTimeout((function(){c(!1)}),5e3);return function(){return clearTimeout(n)}}c(!1)}),[e]),Object(s.jsx)(s.Fragment,{children:i?Object(s.jsx)("p",{className:"rgsServError",children:e.serverError}):""})}},21:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(36),a=t.n(r),s=t(1);function i(e){return Object(s.jsx)("div",{className:a.a.errors,children:Object(s.jsx)("p",{children:e.children})})}},240:function(e,n,t){},30:function(e,n,t){"use strict";t.d(n,"h",(function(){return a})),t.d(n,"f",(function(){return s})),t.d(n,"g",(function(){return i})),t.d(n,"i",(function(){return c})),t.d(n,"d",(function(){return o})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return d})),t.d(n,"j",(function(){return l})),t.d(n,"e",(function(){return m})),t.d(n,"b",(function(){return h}));var r="https://iwanttohave.herokuapp.com/api";function a(e){return fetch("".concat(r,"/auth/register"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()}))}function s(e){return fetch("".concat(r,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()}))}function i(){return fetch("".concat(r,"/auth/logout"),{method:"GET",credentials:"include"})}function c(e){return fetch("".concat(r,"/auth/sendMessage"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()}))}function o(e){return fetch("".concat(r,"/auth/getUserMessages/")+e,{credentials:"include"}).then((function(e){return e.json()}))}function u(e,n){return fetch("".concat(r,"/auth/getAllMessagesForCurrentArticle/")+e+"/"+n,{credentials:"include"}).then((function(e){return e.json()}))}function d(e,n,t){return fetch("".concat(r,"/auth/deleteDiscussion"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({artId:e,recieverId:n,senderId:t})}).then((function(e){return e.json()}))}function l(e){return fetch("".concat(r,"/upload/uploadUserImg"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({data:e})}).then((function(e){return e.json()})).then((function(e){return 200===e.status?window.location.reload():""}))}function m(){return fetch("".concat(r,"/upload/loadImages"),{method:"GET",credentials:"include"}).then((function(e){return e.json()}))}function h(e){return fetch("".concat(r,"/upload/deleteImage/")+e,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()})).then((function(e){return 200===e.status?window.location.reload():""}))}},319:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return b}));var r=t(24),a=t.n(r),s=t(25),i=t(4),c=t(0),o=t(2),u=t(6),d=t(27),l=t(45),m=t(21),h=t(104),f=t(30),j=t(9),p=(t(240),t(1));function b(){var e=Object(o.h)(),n=Object(c.useState)([]),t=Object(i.a)(n,2),r=t[0],b=t[1],O=Object(c.useContext)(j.b).setUserData;function x(){return(x=Object(s.a)(a.a.mark((function n(t){var r,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={username:t.username,email:t.email,password:t.password,rePass:t.rePass},n.prev=1,n.next=4,Object(f.h)(r);case 4:404===(s=n.sent).status?b({error:s.message}):(O(s),e("/catalog")),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}return Object(p.jsx)("section",{className:"register",children:Object(p.jsxs)("div",{className:"register-box",children:[Object(p.jsx)("h1",{className:"register-box-title",children:"Register"}),Object(p.jsx)("p",{className:"register-untertitle",children:"Please fill in this form to create an account."}),Object(p.jsx)(d.d,{initialValues:{username:"",email:"",password:"",rePass:""},validationSchema:l.d,onSubmit:function(e){return x.apply(this,arguments)},children:Object(p.jsxs)(d.c,{className:"register-form",children:[Object(p.jsx)("label",{htmlFor:"username",children:"Name"}),Object(p.jsx)(d.b,{type:"text",id:"text",name:"username"}),Object(p.jsx)(d.a,{name:"username",component:m.a}),Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)(d.b,{type:"email",id:"email",name:"email"}),Object(p.jsx)(d.a,{name:"email",component:m.a}),Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)(d.b,{type:"password",id:"password",name:"password"}),Object(p.jsx)(d.a,{name:"password",component:m.a}),Object(p.jsx)("label",{htmlFor:"rePass",children:"Confirm-Password"}),Object(p.jsx)(d.b,{type:"password",id:"rePass",name:"rePass"}),Object(p.jsx)(d.a,{name:"rePass",component:m.a}),Object(p.jsx)("input",{type:"submit",className:"registerbtn",value:"Register"})]})}),void 0!==r.error?Object(p.jsx)(h.a,{serverError:r.error}):"",Object(p.jsx)("div",{className:"signin",children:Object(p.jsxs)("p",{children:["Already have an account?",Object(p.jsx)(u.b,{to:"/login",children:"Sign in"}),"."]})})]})})}},36:function(e,n,t){e.exports={errors:"Notification_errors__8Qw2T"}},45:function(e,n,t){"use strict";t.d(n,"d",(function(){return s})),t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return o}));var r=t(56),a=/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,s=r.c().shape({username:r.e().min(5).max(20).required("Username is required!"),email:r.e().email("Wrong email").matches(a,"Invalid Email!").required("Email is required!"),password:r.e().min(4).max(15).required("Password is required!"),rePass:r.e().oneOf([r.d("password"),null],"Password must match!")}),i=r.c().shape({email:r.e().email("Wrong email").matches(a,"Invalid Email!").required("Email is required!"),password:r.e().min(4).max(15).required("Password is required!")}),c=r.c().shape({message:r.e().min(10,"Minimum 10 character!").max(500,"Maximum 500 character!").required("")}),o=r.c().shape({username:r.e().min(4).max(15).required("Name is required!"),comment:r.e().min(5,"Minimum 5 character!").max(500,"Maximum 500 character!").required("")})},80:function(e,n,t){}}]);
//# sourceMappingURL=14.a81442f1.chunk.js.map