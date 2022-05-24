(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[14],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(4),a=n(0),s=(n(80),n(1));function i(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),i=n[0],c=n[1];return Object(a.useEffect)((function(){if(e.serverError){c(!0);var t=setTimeout((function(){c(!1)}),5e3);return function(){return clearTimeout(t)}}c(!1)}),[e]),Object(s.jsx)(s.Fragment,{children:i?Object(s.jsx)("p",{className:"rgsServError",children:e.serverError}):""})}},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(36),a=n.n(r),s=n(1);function i(e){return Object(s.jsx)("div",{className:a.a.errors,children:Object(s.jsx)("p",{children:e.children})})}},240:function(e,t,n){},30:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return i})),n.d(t,"i",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"j",(function(){return l})),n.d(t,"e",(function(){return m})),n.d(t,"b",(function(){return h}));var r="https://iwanttohave.herokuapp.com/api";function a(e){return fetch("".concat(r,"/auth/register"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()}))}function s(e){return fetch("".concat(r,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()}))}function i(){return fetch("".concat(r,"/auth/logout"),{method:"GET",credentials:"include"})}function c(e){return fetch("".concat(r,"/auth/sendMessage"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()}))}function o(e){return fetch("".concat(r,"/auth/getUserMessages/")+e,{credentials:"include"}).then((function(e){return e.json()}))}function u(e,t){return fetch("".concat(r,"/auth/getAllMessagesForCurrentArticle/")+e+"/"+t,{credentials:"include"}).then((function(e){return e.json()}))}function d(e,t,n){return fetch("".concat(r,"/auth/deleteDiscussion"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({artId:e,recieverId:t,senderId:n})}).then((function(e){return e.json()}))}function l(e){return fetch("".concat(r,"/upload/uploadUserImg"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({data:e})}).then((function(e){return e.json()})).then((function(e){return 200===e.status?window.location.reload():""}))}function m(){return fetch("".concat(r,"/upload/loadImages"),{method:"GET",credentials:"include"}).then((function(e){return e.json()}))}function h(e){return fetch("".concat(r,"/upload/deleteImage/")+e,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()})).then((function(e){return 200===e.status?window.location.reload():""}))}},319:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n(24),a=n.n(r),s=n(25),i=n(4),c=n(0),o=n(2),u=n(6),d=n(27),l=n(45),m=n(21),h=n(104),f=n(30),j=n(9),p=(n(240),n(1));function b(){var e=Object(o.h)(),t=Object(c.useState)([]),n=Object(i.a)(t,2),r=n[0],b=n[1],O=Object(c.useContext)(j.b).setUserData;function x(){return(x=Object(s.a)(a.a.mark((function t(n){var r,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={username:n.username,email:n.email,password:n.password,rePass:n.rePass},t.prev=1,t.next=4,Object(f.h)(r);case 4:404===(s=t.sent).status?b({error:s.message}):(O(s),e("/catalog")),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(p.jsx)("section",{className:"register",children:Object(p.jsxs)("div",{className:"register-box",children:[Object(p.jsx)("h1",{className:"register-box-title",children:"Register"}),Object(p.jsx)("p",{className:"register-untertitle",children:"Please fill in this form to create an account."}),Object(p.jsx)(d.d,{initialValues:{username:"",email:"",password:"",rePass:""},validationSchema:l.d,onSubmit:function(e){return x.apply(this,arguments)},children:Object(p.jsxs)(d.c,{className:"register-form",children:[Object(p.jsx)("label",{htmlFor:"username",children:"Name"}),Object(p.jsx)(d.b,{type:"text",id:"text",name:"username","data-testid":"username"}),Object(p.jsx)(d.a,{name:"username",component:m.a}),Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)(d.b,{type:"email",id:"email",name:"email","data-testid":"email"}),Object(p.jsx)(d.a,{name:"email",component:m.a}),Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)(d.b,{type:"password",id:"password",name:"password","data-testid":"password"}),Object(p.jsx)(d.a,{name:"password",component:m.a}),Object(p.jsx)("label",{htmlFor:"rePass",children:"Confirm-Password"}),Object(p.jsx)(d.b,{type:"password",id:"rePass",name:"rePass","data-testid":"rePass"}),Object(p.jsx)(d.a,{name:"rePass",component:m.a}),Object(p.jsx)("input",{type:"submit",className:"registerbtn",value:"Register"})]})}),void 0!==r.error?Object(p.jsx)(h.a,{serverError:r.error}):"",Object(p.jsx)("div",{className:"signin",children:Object(p.jsxs)("p",{children:["Already have an account?",Object(p.jsx)(u.b,{to:"/login",children:"Sign in"}),"."]})})]})})}},36:function(e,t,n){e.exports={errors:"Notification_errors__8Qw2T"}},45:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(56),a=/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,s=r.c().shape({username:r.e().min(5).max(20).required("Username is required!"),email:r.e().email("Wrong email").matches(a,"Invalid Email!").required("Email is required!"),password:r.e().min(4).max(15).required("Password is required!"),rePass:r.e().oneOf([r.d("password"),null],"Password must match!")}),i=r.c().shape({email:r.e().email("Wrong email").matches(a,"Invalid Email!").required("Email is required!"),password:r.e().min(4).max(15).required("Password is required!")}),c=r.c().shape({message:r.e().min(10,"Minimum 10 character!").max(500,"Maximum 500 character!").required("")}),o=r.c().shape({username:r.e().min(4).max(15).required("Name is required!"),comment:r.e().min(5,"Minimum 5 character!").max(500,"Maximum 500 character!").required("")})},80:function(e,t,n){}}]);
//# sourceMappingURL=14.79d26794.chunk.js.map