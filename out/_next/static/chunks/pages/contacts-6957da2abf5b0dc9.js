(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{9233:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contacts",function(){return n(7799)}])},7799:function(a,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var s=n(5893),t=n(1857),o=n.n(t),i=n(7294),c=n(3179),d=n.n(c);function l(){let[a,e]=(0,i.useState)({name:"",description:"",email:"",phone:""}),n=n=>{e({...a,[n.target.name]:n.target.value})},t=n=>{n.preventDefault(),fetch("http://localhost:3000/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(a=>a.json()).then(a=>{e({name:"",description:"",email:"",phone:""})}).catch(a=>console.error(a))};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o(),{id:"4f6aba925dd9c971",children:".form-text.jsx-4f6aba925dd9c971{font-size:20px;margin-left:12px;font-weight:bold}"}),(0,s.jsxs)("main",{className:"jsx-4f6aba925dd9c971 "+(d().main||""),children:[(0,s.jsx)("h1",{className:"jsx-4f6aba925dd9c971 "+(d().pageHeading||""),children:"Contact Form :"}),(0,s.jsx)("hr",{className:"jsx-4f6aba925dd9c971 "+(d().afterPageHeading||"")}),(0,s.jsxs)("form",{className:"jsx-4f6aba925dd9c971 "+(d().form||""),children:[(0,s.jsxs)("div",{className:"jsx-4f6aba925dd9c971 "+(d().name||""),children:[(0,s.jsx)("label",{htmlFor:"name",className:"jsx-4f6aba925dd9c971 "+(d().formLabels||""),children:"Name :"}),(0,s.jsx)("input",{type:"text",name:"name",id:"name","aria-describedby":"nameHelp",value:a.name,onChange:n,className:"jsx-4f6aba925dd9c971 "+(d().formControls||"")})]}),(0,s.jsxs)("div",{className:"jsx-4f6aba925dd9c971 "+(d().description||""),children:[(0,s.jsx)("label",{htmlFor:"description",className:"jsx-4f6aba925dd9c971 "+(d().formLabels||""),children:"Description : "}),(0,s.jsx)("textarea",{name:"description",id:"description",rows:"3",value:a.description,onChange:n,className:"jsx-4f6aba925dd9c971 "+(d().formControls||"")})]}),(0,s.jsxs)("div",{className:"jsx-4f6aba925dd9c971 "+(d().email||""),children:[(0,s.jsx)("label",{htmlFor:"email",className:"jsx-4f6aba925dd9c971 "+(d().formLabels||""),children:"Email address : "}),(0,s.jsx)("input",{type:"email",name:"email",id:"email","aria-describedby":"emailHelp",value:a.email,onChange:n,className:"jsx-4f6aba925dd9c971 "+(d().formControls||"")}),(0,s.jsx)("div",{id:"emailHelp",className:"jsx-4f6aba925dd9c971 form-text",children:"We'll never share your email with anyone else."})]}),(0,s.jsxs)("div",{className:"jsx-4f6aba925dd9c971 "+(d().phone||""),children:[(0,s.jsx)("label",{htmlFor:"phoneNumber",className:"jsx-4f6aba925dd9c971 "+(d().formLabels||""),children:"Phone Number : "}),(0,s.jsx)("input",{type:"tel",name:"phone",id:"phoneNumber",value:a.phone,onChange:n,className:"jsx-4f6aba925dd9c971 "+(d().formControls||"")})]}),(0,s.jsx)("div",{className:"jsx-4f6aba925dd9c971 "+(d().btnbody||""),children:(0,s.jsx)("button",{type:"submit",onClick:t,className:"jsx-4f6aba925dd9c971 "+(d().submitButton||""),children:"Submit"})})]})]})]})}},3179:function(a){a.exports={main:"Contacts_main__U0vyj",pageHeading:"Contacts_pageHeading__uzpc_",afterPageHeading:"Contacts_afterPageHeading__OVQnm",form:"Contacts_form__BpLna",name:"Contacts_name___vYkr",description:"Contacts_description__wurgd",email:"Contacts_email__aQy6j",phone:"Contacts_phone__2n6Lh",formControls:"Contacts_formControls__4we7m",btnbody:"Contacts_btnbody__mKMFg",submitButton:"Contacts_submitButton__vKPf8"}}},function(a){a.O(0,[857,774,888,179],function(){return a(a.s=9233)}),_N_E=a.O()}]);