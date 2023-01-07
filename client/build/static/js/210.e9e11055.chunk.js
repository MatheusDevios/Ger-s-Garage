"use strict";(self.webpackChunkgers_garage=self.webpackChunkgers_garage||[]).push([[210],{2701:function(n,e,t){var r,i,a,c=t(168),s=(t(2791),t(8789)),o=t(184);e.Z=function(n){var e=n.name,t=n.amount;return(0,o.jsxs)(d,{children:[(0,o.jsx)(l,{children:(0,o.jsxs)(m,{children:["Item: ",e]})}),(0,o.jsx)(l,{children:(0,o.jsxs)(m,{children:["Amount: ",t]})})]})};var d=s.ZP.div(r||(r=(0,c.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: center;\n  align-items: center;\n"]))),l=s.ZP.div(i||(i=(0,c.Z)(["\n  padding: 0.25rem 2rem;\n"]))),m=s.ZP.p(a||(a=(0,c.Z)([""])))},1210:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});t(2791);var r,i,a,c,s,o,d,l,m,u,h,x,p,f,g,j,Z=t(168),v=t(4165),b=t(5861),w=t(8404),y=t(8789),P=t(4772),k=t(2701),A=t(1087),I=t(184),S=function(n){var e=n.serviceId,t=n.service,r=n.products;return(0,I.jsxs)(z,{children:[(0,I.jsxs)(M,{children:[(0,I.jsxs)("h3",{children:["Status: ",t.status]}),(0,I.jsxs)("h3",{children:["Service Info: ",n.name]}),(0,I.jsxs)(F,{children:[(0,I.jsx)(A.rU,{to:"/invoice/".concat(e),state:{from:n},children:(0,I.jsx)(T,{children:"Invoice"})}),(0,I.jsx)(A.rU,{to:"/invoiceAdmin/".concat(e),state:{from:n},children:(0,I.jsx)(T,{children:"Edit Invoice"})})]})]}),(0,I.jsxs)(_,{children:["Appointment # ",e]}),(0,I.jsxs)(D,{children:["Service: ",t.name]}),r.length>0&&r.map((function(n,e){return(0,I.jsx)(k.Z,{name:n.name,amount:n.amount},e)}))]})},F=y.ZP.div(r||(r=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n"]))),z=y.ZP.li(i||(i=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid black;\n  & h3 {\n    margin: 0 0 0.25rem 0;\n    font-size: 1.4rem;\n  }\n"]))),D=y.ZP.div(a||(a=(0,Z.Z)(["\n  margin-top: 0.8rem;\n  margin-bottom: 0.2rem;\n  font-weight: bold;\n  color: #d32929;\n  font-size: 1.2rem;\n"]))),M=y.ZP.div(c||(c=(0,Z.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),T=y.ZP.button(s||(s=(0,Z.Z)(["\n  width: 100%;\n  padding: 10px 15px;\n  background-color: black;\n  box-shadow: 0 3px 24px rgb(0 0 0 / 30%);\n  border-radius: 1rem;\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),_=y.ZP.div(o||(o=(0,Z.Z)(["\n  color: rgb(163, 153, 153);\n  font-weight: 600;\n  padding-bottom: 10px;\n  font-size: 0.9rem;\n"]))),q=t(4604),W=t(3858),Y=function(){var n,e,t=new Date,r=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0"),c="".concat(a,"/").concat(i,"/").concat(r),s=localStorage.getItem("userId"),o=(0,w.a)({queryKey:["serviceInfo"],queryFn:function(){var n=(0,b.Z)((0,v.Z)().mark((function n(){var e;return(0,v.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P.W.get("appointments/".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}),d=o.data,l=o.isFetching,m=(0,w.a)({queryKey:["slotsInfo"],queryFn:function(){var n=(0,b.Z)((0,v.Z)().mark((function n(){var e;return(0,v.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P.W.get("slots/");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}),u=m.data,h=m.isFetching;return n=l?(0,I.jsx)(q.Z,{}):(0,I.jsx)(I.Fragment,{children:d.map((function(n,e){return(0,I.jsx)(S,{serviceId:n._id,status:n.service.status,name:n.name,email:n.email,phone:n.phone,type:n.type,maker:n.maker,license:n.license,mechanic:n.mechanic,comments:n.comments,totalProduct:n.totalAmountProducts,total:n.totalAppointmentAmount,orderId:n._id,service:n.service,products:n.products,date:n.createdAt,slot:n.slots},n._id)}))}),e=h?(0,I.jsx)(q.Z,{}):(0,I.jsx)(I.Fragment,{children:u.map((function(n,e){return n.slotDate===c&&(0,I.jsxs)(L,{children:["1"===n.mechanic&&(0,I.jsx)("p",{children:"Mechanic: Michael"}),"2"===n.mechanic&&(0,I.jsx)("p",{children:"Mechanic: Jordan"}),"3"===n.mechanic&&(0,I.jsx)("p",{children:"Mechanic: Tim"}),"4"===n.mechanic&&(0,I.jsx)("p",{children:"Mechanic: Wilson"}),"1"===n.slotTime&&(0,I.jsx)("p",{children:"At: 8:30 - 10:30"}),"2"===n.slotTime&&(0,I.jsx)("p",{children:"At: 10:30 - 12:30"}),"3"===n.slotTime&&(0,I.jsx)("p",{children:"At: 13:00 - 15:00"}),"4"===n.slotTime&&(0,I.jsx)("p",{children:"At: 15:30 - 17:30"}),(0,I.jsx)("br",{})]},e)}))}),(0,I.jsxs)(K,{children:[(0,I.jsx)(H,{children:"Day Schedule / Services"}),(0,I.jsxs)(U,{children:[(0,I.jsx)(E,{children:(0,I.jsxs)(G,{children:[(0,I.jsxs)(N,{children:["Date: ",c]}),(0,I.jsx)("ul",{children:e})]})}),(0,I.jsx)(J,{children:(0,I.jsx)(B,{children:(0,I.jsx)("ul",{children:n})})})]})]})},C=(0,y.F4)(d||(d=(0,Z.Z)(["\n  from {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  \n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  "]))),K=y.ZP.div(l||(l=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 60rem;\n  width: 95%;\n  margin: 2rem auto;\n  & ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  animation: "," 1s ease-out forwards;\n"])),C),U=y.ZP.div(m||(m=(0,Z.Z)(["\n  display: flex;\n  ","\n"])),(0,W.ai)({flexDirection:"column",gap:"1rem"})),E=y.ZP.div(u||(u=(0,Z.Z)(["\n  flex: 1;\n"]))),J=y.ZP.div(h||(h=(0,Z.Z)(["\n  flex: 2;\n"]))),B=y.ZP.div(x||(x=(0,Z.Z)(["\n  padding: 1rem;\n  margin: auto;\n  max-width: 60rem;\n  width: 90%;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  border-radius: 14px;\n  background-color: white;\n"]))),G=y.ZP.div(p||(p=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1rem;\n  margin: auto;\n  max-width: 60rem;\n  width: 90%;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  border-radius: 14px;\n  background-color: white;\n"]))),H=y.ZP.h3(f||(f=(0,Z.Z)(["\n  padding-bottom: 1rem;\n  font-size: 38px;\n  line-height: 1.4;\n  font-weight: 800;\n"]))),L=y.ZP.div(g||(g=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: black;\n  font-weight: 600;\n  padding-top: 0.9rem;\n  font-size: 1rem;\n"]))),N=y.ZP.div(j||(j=(0,Z.Z)(["\n  color: black;\n  font-weight: 900;\n  padding-bottom: 1.4rem;\n  font-size: 1.4rem;\n"]))),O=t(9229),Q=t(6153),R=function(){return(0,I.jsxs)("div",{children:[(0,I.jsx)(Q.Z,{}),(0,I.jsx)(Y,{}),(0,I.jsx)(O.Z,{})]})}}}]);
//# sourceMappingURL=210.e9e11055.chunk.js.map