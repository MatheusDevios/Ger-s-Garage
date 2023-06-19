"use strict";(self.webpackChunkgers_garage=self.webpackChunkgers_garage||[]).push([[823],{2701:function(n,e,t){var r,i,o,a=t(168),s=(t(2791),t(8789)),c=t(184);e.Z=function(n){var e=n.name,t=n.amount;return(0,c.jsxs)(d,{children:[(0,c.jsx)(l,{children:(0,c.jsxs)(u,{children:["Item: ",e]})}),(0,c.jsx)(l,{children:(0,c.jsxs)(u,{children:["Amount: ",t]})})]})};var d=s.ZP.div(r||(r=(0,a.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: center;\n  align-items: center;\n"]))),l=s.ZP.div(i||(i=(0,a.Z)(["\n  padding: 0.25rem 2rem;\n"]))),u=s.ZP.p(o||(o=(0,a.Z)([""])))},5823:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});t(2791);var r,i,o,a,s,c,d,l,u,m,p,h,x,f,g=t(168),Z=t(4165),v=t(5861),j=t(4604),b=t(2701),y=t(1087),w=t(8789),P=t(184),I=function(n){var e=n.serviceId,t=n.service,r=n.products;return(0,P.jsxs)(k,{children:[(0,P.jsxs)(A,{children:[(0,P.jsxs)("h3",{children:["Status: ",t.status]}),(0,P.jsx)("h3",{children:" SERVICE INFO"}),(0,P.jsx)(y.rU,{to:"/invoice/".concat(e),state:{from:n},children:(0,P.jsx)(S,{children:"Invoice"})})]}),(0,P.jsxs)(_,{children:["Appointment # ",e]}),(0,P.jsxs)(F,{children:["Service: ",t.name]}),r.length>0&&r.map((function(n,e){return(0,P.jsx)(b.Z,{name:n.name,amount:n.amount},e)}))]})},k=w.ZP.li(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid black;\n  & h3 {\n    margin: 0 0 0.25rem 0;\n    font-size: 1.4rem;\n  }\n"]))),F=w.ZP.div(i||(i=(0,g.Z)(["\n  margin-top: 0.8rem;\n  margin-bottom: 0.2rem;\n  font-weight: bold;\n  color: #d32929;\n  font-size: 1.2rem;\n"]))),A=w.ZP.div(o||(o=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),S=w.ZP.button(a||(a=(0,g.Z)(["\n  width: 100%;\n  padding: 10px 15px;\n  background-color: black;\n  box-shadow: 0 3px 24px rgb(0 0 0 / 30%);\n  border-radius: 1rem;\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),_=w.ZP.div(s||(s=(0,g.Z)(["\n  color: rgb(163, 153, 153);\n  font-weight: 600;\n  padding-bottom: 10px;\n  font-size: 0.9rem;\n"]))),z=t(8404),C=t(4772),O=t(9434),q=t(3858),N=function(n){var e=n.orderId,t=n.products,r=n.status;return(0,P.jsxs)(E,{children:[(0,P.jsxs)(K,{children:[(0,P.jsxs)("h3",{children:["Status: ",r]}),(0,P.jsx)("h3",{children:"SHOPPING INFO"}),(0,P.jsx)(y.rU,{to:"/invoice/".concat(e),state:{from:n},children:(0,P.jsx)(U,{children:"Invoice"})})]}),(0,P.jsxs)(W,{children:["Order # ",e]}),t.map((function(n,e){return(0,P.jsx)(b.Z,{name:n.name,amount:n.amount},e)}))]})},E=w.ZP.li(c||(c=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid black;\n  & h3 {\n    margin: 0 0 0.25rem 0;\n    font-size: 1.4rem;\n  }\n"]))),K=w.ZP.div(d||(d=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),U=w.ZP.button(l||(l=(0,g.Z)(["\n  width: 100%;\n  padding: 10px 15px;\n  background-color: black;\n  box-shadow: 0 3px 24px rgb(0 0 0 / 30%);\n  border-radius: 1rem;\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),W=w.ZP.div(u||(u=(0,g.Z)(["\n  color: rgb(163, 153, 153);\n  font-weight: 600;\n  padding-bottom: 10px;\n  font-size: 0.9rem;\n"]))),Y=function(){var n,e,t=localStorage.getItem("userId"),r=(0,O.v9)((function(n){return n.auth.name})),i=(0,O.v9)((function(n){return n.auth.phone})),o=(0,O.v9)((function(n){return n.auth.email})),a=(0,z.a)({queryKey:["orderInfo"],queryFn:function(){var n=(0,v.Z)((0,Z.Z)().mark((function n(){var e;return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C.W.get("orders/find/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}),s=a.data,c=a.isFetching,d=(0,z.a)({queryKey:["serviceInfo"],queryFn:function(){var n=(0,v.Z)((0,Z.Z)().mark((function n(){var e;return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C.W.get("appointments/all/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}),l=d.data,u=d.isFetching;return c||u?n=(0,P.jsx)(j.Z,{}):(n=(0,P.jsx)(P.Fragment,{children:s.map((function(n,e){return(0,P.jsx)(N,{orderId:n._id,name:r,email:o,phone:i,city:n.address.city,country:n.address.country,street:n.address.street,postalCode:n.address.postalCode,products:n.products,subtotal:n.subtotal,total:n.total,date:n.createdAt,status:n.status},n._id)}))}),e=(0,P.jsx)(P.Fragment,{children:l.map((function(n,e){return(0,P.jsx)(I,{serviceId:n._id,status:n.service.status,name:n.name,email:n.email,phone:n.phone,type:n.type,maker:n.maker,license:n.license,mechanic:n.mechanic,comments:n.comments,totalProduct:n.totalAmountProducts,total:n.totalAppointmentAmount,orderId:n._id,service:n.service,products:n.products,date:n.createdAt,slot:n.slots},n._id)}))})),(0,P.jsxs)(R,{children:[(0,P.jsx)(V,{children:"Services / Orders"}),(0,P.jsxs)(H,{children:[(0,P.jsx)(G,{children:(0,P.jsx)("ul",{children:e})}),(0,P.jsx)(G,{children:(0,P.jsx)("ul",{children:n})})]})]})},D=(0,w.F4)(m||(m=(0,g.Z)(["\n  from {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))),G=w.ZP.div(p||(p=(0,g.Z)(["\n  flex: 1;\n  padding: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  border-radius: 14px;\n  background-color: white;\n"]))),H=w.ZP.div(h||(h=(0,g.Z)(["\n  display: flex;\n  gap: 1rem;\n  ","\n"])),(0,q.ai)({flexDirection:"column"})),R=w.ZP.div(x||(x=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 60rem;\n  width: 90%;\n  margin: 2rem auto;\n  & ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  animation: "," 1s ease-out forwards;\n"])),D),V=w.ZP.h3(f||(f=(0,g.Z)(["\n  padding-bottom: 1rem;\n  font-size: 38px;\n  line-height: 1.4;\n  font-weight: 800;\n"]))),B=function(){return(0,P.jsx)("div",{children:(0,P.jsx)(Y,{})})}}}]);
//# sourceMappingURL=823.0e2d0cfd.chunk.js.map