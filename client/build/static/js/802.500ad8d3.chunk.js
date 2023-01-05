"use strict";(self.webpackChunkgers_garage=self.webpackChunkgers_garage||[]).push([[802],{802:function(n,e,r){r.r(e),r.d(e,{default:function(){return Q}});var t,i,a,s,l,o,u,d,c,h,p,x,f,m=r(2791),v=r(168),j=r(4165),g=r(5861),y=r(9439),b={value:"",isTouched:!1},Z=function n(e,r){return"INPUT"===r.type?{value:r.value,isTouched:e.isTouched}:"BLUR"===r.type?{isTouched:!0,value:e.value}:"RESET"===r.type?{isTouched:!1,value:""}:n},C=function(n){var e=(0,m.useReducer)(Z,b),r=(0,y.Z)(e,2),t=r[0],i=r[1],a=n(t.value),s=!a&&t.isTouched;return{value:t.value,isValid:a,hasError:s,valueChangeHandler:function(n){i({type:"INPUT",value:n.target.value})},inputBlurHandler:function(n){i({type:"BLUR"})},reset:function(){i({type:"RESET"})}}},P=r(8789),w=r(5985),k=r(184),H=function(n){return""!==n.trim()},B=function(n){return n.trim().length>=7},T=function(n){var e=C(H),r=e.value,t=e.isValid,i=e.hasError,a=e.valueChangeHandler,s=e.inputBlurHandler,l=e.reset,o=C(H),u=o.value,d=o.isValid,c=o.hasError,h=o.valueChangeHandler,p=o.inputBlurHandler,x=o.reset,f=C(B),m=f.value,v=f.isValid,j=f.hasError,g=f.valueChangeHandler,y=f.inputBlurHandler,b=f.reset,Z=C(H),P=Z.value,T=Z.isValid,A=Z.hasError,N=Z.valueChangeHandler,U=Z.inputBlurHandler,V=Z.reset,D=C(H),O=D.value,M=D.isValid,L=D.hasError,Y=D.valueChangeHandler,_=D.inputBlurHandler,q=D.reset,z=t&&v&&d&&T&&M;return(0,k.jsxs)(E,{onSubmit:function(e){e.preventDefault(),z&&e?(n.onConfirm({street:u,postalCode:m,country:O,city:P}),V(),q(),b(),l(),x()):w.Am.error("Please enter valid information.")},children:[(0,k.jsxs)(F,{children:[(0,k.jsx)("label",{htmlFor:"name",children:"Your Name"}),(0,k.jsx)("input",{type:"text",id:"name",value:r,onChange:a,onBlur:s}),i&&(0,k.jsx)("p",{children:" Please enter your Name."})]}),(0,k.jsxs)(F,{children:[(0,k.jsx)("label",{htmlFor:"street",children:"Address"}),(0,k.jsx)("input",{type:"text",id:"street",value:u,onChange:h,onBlur:p}),c&&(0,k.jsx)("p",{children:" Please enter your Street Adress."})]}),(0,k.jsxs)(F,{children:[(0,k.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),(0,k.jsx)("input",{type:"text",id:"postal",value:m,onChange:g,onBlur:y}),j&&(0,k.jsx)("p",{children:" Please enter your Postal Code with 5 digits or more."})]}),(0,k.jsxs)(F,{children:[(0,k.jsx)("label",{htmlFor:"city",children:"County"}),(0,k.jsx)("input",{type:"text",id:"city",value:P,onChange:N,onBlur:U}),A&&(0,k.jsx)("p",{children:" Please enter your City Name."})]}),(0,k.jsxs)(F,{children:[(0,k.jsx)("label",{htmlFor:"city",children:"Country"}),(0,k.jsx)("input",{type:"text",id:"city",value:O,onChange:Y,onBlur:_}),L&&(0,k.jsx)("p",{children:" Please enter your City Name."})]}),(0,k.jsxs)(I,{children:[(0,k.jsx)(R,{type:"button",onClick:n.onCloseCart,children:"Cancel"}),(0,k.jsx)(S,{children:"Confirm"})]})]})},E=P.ZP.form(t||(t=(0,v.Z)(["\n  margin: 1rem 0;\n  overflow: auto;\n"]))),F=P.ZP.div(i||(i=(0,v.Z)(["\n  margin-bottom: 0.5rem;\n  & label {\n    font-weight: bold;\n    margin-bottom: 0.25rem;\n    display: block;\n  }\n  & input {\n    width: 40rem;\n    font: inherit;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    max-width: 100%;\n  }\n  & p {\n    background-color: #ffeff1;\n    color: red;\n  }\n"]))),I=P.ZP.div(a||(a=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  margin-bottom: 0.5rem;\n"]))),R=P.ZP.button(s||(s=(0,v.Z)(["\n  font: inherit;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  color: black;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  border-radius: 25px;\n  padding: 0.5rem 2rem;\n  transition: all 0.5s ease;\n  transform: scale(0.95);\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),S=P.ZP.button(l||(l=(0,v.Z)(["\n  font: inherit;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  border: 1px solid black;\n  background-color: black;\n  cursor: pointer;\n  padding: 0.5rem 2rem;\n  border-radius: 25px;\n  color: white;\n  transition: all 0.5s ease;\n  transform: scale(0.95);\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),A=r(9434),N=r(3858),U=r(4772),V=r(6094),D=r(7689),O=function(){var n=(0,D.s0)(),e=(0,A.I0)(),r=(0,A.v9)((function(n){return n.cart.items})),t=(0,A.v9)((function(n){return n.auth.userId})),i=(0,A.v9)((function(n){return n.cart.totalAmount})),a=i.toFixed(2),s=(i+5.9-0).toFixed(2),l=function(){var i=(0,g.Z)((0,j.Z)().mark((function i(l){return(0,j.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,U.W.post("/orders/".concat(t),{userId:t,products:r,subtotal:parseInt(a),total:parseInt(s),address:l});case 2:e(V.U.clearCartHandler({items:[],totalAmount:0})),w.Am.success("Order done successfully!"),setTimeout((function(){n("/")}),2e3);case 5:case"end":return i.stop()}}),i)})));return function(n){return i.apply(this,arguments)}}();return(0,k.jsx)(M,{children:(0,k.jsxs)(L,{children:[(0,k.jsx)(Y,{children:(0,k.jsx)(T,{onConfirm:l})}),(0,k.jsxs)(_,{children:[(0,k.jsx)(q,{children:"ORDER SUMMARY"}),(0,k.jsxs)(z,{children:[(0,k.jsx)(W,{children:"Subtotal"}),(0,k.jsxs)(G,{children:[a," \u20ac"]})]}),(0,k.jsxs)(z,{children:[(0,k.jsx)(W,{children:"Estimated Shipping"}),(0,k.jsxs)(G,{children:[5.9.toFixed(2)," \u20ac"]})]}),(0,k.jsxs)(z,{children:[(0,k.jsx)(W,{children:"Shipping Discount"}),(0,k.jsxs)(G,{children:[(0).toFixed(2)," \u20ac"]})]}),(0,k.jsxs)(z,{type:"total",children:[(0,k.jsx)(W,{children:"Total"}),(0,k.jsxs)(G,{children:[s," \u20ac"]})]})]}),(0,k.jsx)(w.Ix,{newestOnTop:!0,autoClose:2e3,pauseOnHover:!0,theme:"dark"})]})})},M=P.ZP.div(o||(o=(0,v.Z)([""]))),L=P.ZP.div(u||(u=(0,v.Z)(["\n  display: flex;\n  flex-direction: row;\n  margin: 0 auto;\n  width: 80%;\n  max-width: 1200px;\n  ","\n  ","\n"])),(0,N.Mq)({}),(0,N.ai)({padding:"10px",flexDirection:"column-reverse"})),Y=P.ZP.div(d||(d=(0,v.Z)(["\n  flex: 2;\n  padding-right: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),_=P.ZP.div(c||(c=(0,v.Z)(["\n  flex: 1;\n  border: 0.5px solid lightgray;\n  border-radius: 10px;\n  padding: 20px;\n  height: 50vh;\n"]))),q=P.ZP.h1(h||(h=(0,v.Z)(["\n  font-weight: 200;\n"]))),z=P.ZP.div(p||(p=(0,v.Z)(["\n  margin: 30px 0px;\n  display: flex;\n  justify-content: space-between;\n  font-weight: ",";\n  font-size: ",";\n"])),(function(n){return"total"===n.type&&"500"}),(function(n){return"total"===n.type&&"24px"})),W=P.ZP.span(x||(x=(0,v.Z)([""]))),G=P.ZP.span(f||(f=(0,v.Z)([""]))),J=r(9229),K=r(6153),Q=function(){return(0,k.jsxs)("div",{children:[(0,k.jsx)(K.Z,{}),(0,k.jsx)(O,{}),(0,k.jsx)(J.Z,{})]})}}}]);
//# sourceMappingURL=802.500ad8d3.chunk.js.map