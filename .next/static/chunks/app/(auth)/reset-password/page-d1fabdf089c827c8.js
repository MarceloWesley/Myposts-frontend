(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{5316:function(e,t,n){Promise.resolve().then(n.bind(n,3555)),Promise.resolve().then(n.bind(n,7348))},7348:function(e,t,n){"use strict";n.r(t),n.d(t,{ResetPassword:function(){return m}});var r=n(7437);n(4590);var i=(0,n(8064).$)("c9e4f26a625a57f52b1cc07885c47cb83638ad68"),s=n(1448),a=n(6930),o=n(4990),l=n(511),d=n(1326),c=n(278),u=n(6463),f=n(2265),h=n(9343),p=n(4379),x=n.n(p);function m(){let[e,t]=(0,f.useState)(!1),{register:n,handleSubmit:p}=(0,h.cI)({}),{errorValidation:m}=(0,a.U)(),w=(0,u.useRouter)(),g=async e=>{t(!0);let n=await i(e);t(!1),n.statusCode?m(n):x().fire({title:"Password changed successfully",text:"You will be redirected to login",icon:"success"}).then(()=>{w.push("/login")})};return(0,r.jsxs)(o.Z,{component:"form",onSubmit:p(g),sx:{width:"100%",height:"auto",display:"flex",flexDirection:"column",gap:2,padding:2},children:[(0,r.jsx)(l.Z,{alignSelf:"center",fontSize:"2rem",color:"primary.light",children:"Change Password"}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(c.Z,{fullWidth:!0,id:"code",label:"Code",variant:"outlined",...n("code")})}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(c.Z,{fullWidth:!0,id:"email",label:"Email",variant:"outlined",...n("email")})}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(c.Z,{fullWidth:!0,id:"password",type:"password",label:"New Password",variant:"outlined",...n("password")})}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(c.Z,{fullWidth:!0,id:"confirmPassword",type:"password",label:"Confirm New Password",variant:"outlined",...n("confirmPassword")})}),(0,r.jsx)(d.Z,{width:"200px",alignSelf:"center",children:(0,r.jsx)(s.A,{type:"submit",fullWidth:!0,color:"primary",loading:e,children:"Change"})})]})}},1448:function(e,t,n){"use strict";n.d(t,{A:function(){return l}});var r=n(7437),i=n(8024),s=n(6548);let a=(0,i.ZP)(s.Z)(e=>{let{theme:t}=e;return{}});var o=n(3835);let l=e=>{let{children:t,loading:n,...i}=e;return(0,r.jsx)(a,{variant:"contained",...i,children:n?(0,r.jsx)(o.d,{}):t})}},3835:function(e,t,n){"use strict";n.d(t,{d:function(){return c}});var r=n(7437),i=n(1326),s=n(2784),a=n(8646);function o(){let e=(0,a._)(["\n   from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return o=function(){return e},e}let l=(0,n(3098).F4)(o()),d={animation:"".concat(l," 1s linear infinite")},c=()=>(0,r.jsx)(i.Z,{display:"flex",justifyContent:"center",borderRadius:"100%",component:"div",sx:d,children:(0,r.jsx)(s.U,{size:30})})},6930:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var r=n(2960),i=n(2804),s=n(5956);function a(){let{ToastF:e}=function(){let e=(0,r.Z)(),t=(0,i.Z)(e.breakpoints.down("tablet"));return{ToastF:e=>{let{message:n,type:r,position:i="top-right",autoClose:a=5e3}=e;s.Am[r](n,{position:i,autoClose:a,style:{...t?{width:"280px",margin:"90px 5px 0 auto",borderRadius:"5px"}:{}}})}}}();return{errorValidation:t=>{switch(t.statusCode){case 401:case 404:case 400:let n;e({message:Array.isArray(n=t.message)?n[0]:n,type:"error"});break;case 500:e({message:"Internal server error",type:"error"})}}}}}},function(e){e.O(0,[67,548,49,991,956,775,971,23,744],function(){return e(e.s=5316)}),_N_E=e.O()}]);