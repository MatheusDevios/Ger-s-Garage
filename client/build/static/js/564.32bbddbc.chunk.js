"use strict";(self.webpackChunkgers_garage=self.webpackChunkgers_garage||[]).push([[564],{9438:function(e,r,n){n.d(r,{aZ:function(){return l},K_:function(){return s},fT:function(){return u},yV:function(){return c},Zo:function(){return p}});var i=n.p+"static/media/avatar1.95541f81651d8200bf25.png",t=n.p+"static/media/guarantee.6f920673f8ead0d8fe53.png",o=n.p+"static/media/speed.cd5c7255649e41486ee1.png",a=n.p+"static/media/team.81d4a57b2a9de47c9269.png",d=n.p+"static/media/truck.bf99fca041b5edeebe40.png",s=[{id:1,img:"https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U9651/IMG_71532-large.jpg",title:"CHECK OUT OUR SERVICES",desc:"ENJOY OUR ACCESSORIES AVAILABLE AND TRANSFORM YOUR CAR NOW. ",button:"SCHEDUELE NOW",bg:"fcf1ed"}],l=[{_id:1,img:t,title:"Official Guarantee",desc:"We give a one-year guarantee for all work. Two years of official warranty for spare parts from our online store."},{_id:2,img:o,title:"Auto Parts Store",desc:"Own online store of original auto parts with delivery. 15% discount on spare parts when repairing your car."},{_id:3,img:a,title:"Professional Team",desc:"We employ only professional specialists with extensive experience in car services. Guarantee for all works."},{_id:4,img:d,title:"Own Tow Truck",desc:"If your car breaks down and does not go. We can quickly deliver it to our car service with our tow truck."}],c=[{id:1,img:"http://cdn.carbuzz.com/gallery-images/1600/940000/300/940330.jpg",title:"CHECK OUT OUR SERVICES",desc:"DON'T COMPROMISE ON YOUR SECURITY! GET YOUR CAR SERVICED NOW.",button:"SCHEDUELE NOW",bg:"fcf1ed"},{id:2,img:"https://i.pinimg.com/originals/80/f9/8f/80f98fb11a2de14c45f663308904ee6c.jpg",title:"MODERN AUTO PARTS",desc:"DON'T COMPROMISE ON FEATURES! GET NEW ACCESSORIES NOW.",button:"SHOP NOW",bg:"f5fafd"}],u=[{id:1,title:"Hyundai Accent"},{id:2,title:"Hyundai Elantra"},{id:3,title:"Hyundai i Series"},{id:4,title:"BMW 1 Series"},{id:5,title:"BMW 2 Series"},{id:6,title:"BMW 3 Series"},{id:7,title:"BMW 4 Series"},{id:8,title:"BMW 5 Series"},{id:9,title:"BMW 6 Series"},{id:10,title:"BMW 7 Series"},{id:12,title:"BMW i Series"},{id:13,title:"BMW M Series"},{id:14,title:"BMW X Series"},{id:15,title:"Honda Accord"},{id:16,title:"Honda Civic"},{id:17,title:"Honda CR-V"},{id:18,title:"Honda HR-V"},{id:19,title:"Ford Focus"},{id:20,title:"Ford EcoSport"},{id:21,title:"Ford Edge"},{id:22,title:"Ford F-150"},{id:23,title:"Audi A Series"},{id:24,title:"Audi Q Series"},{id:25,title:"Audi R Series"},{id:26,title:"Audi S Series"},{id:27,title:"Mercedes A Series"},{id:28,title:"Mercedes AMG Series"},{id:29,title:"Mercedes C Series"},{id:30,title:"Toyota Corolla"}],p=[{image:i,name:"Junio Xavier",review:"It really improved my workflow, as I don't have to worry about scheduling my clients, and I reaceive every appointment by Email and also on the app which gives me my agenda organized the way I please, It even helped me to get more clients. Every day one of my clients praises me about my Website. I'm really happy about it."},{image:i,name:"Debora Garcia",review:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore possimus reiciendis, voluptatibus ad impedit delectus odio deleniti error aspernatur tempora reprehenderit omnis dolor voluptate earum accusamus vitae eaque. Exercitationem, atque."}]},1783:function(e,r,n){n.r(r),n.d(r,{default:function(){return D}});var i,t,o,a,d,s,l,c,u,p,m,h,f=n(2791),g=n(9229),x=n(6153),b=n(168),v=n(4165),w=n(5861),S=n(9439),y=n(8789),j=n(3858),k=n(9434),C=n(1563),E=n(4772),O=n(5985),Z=n(9438),R=n(184),P=function(){var e=(0,k.I0)(),r=(0,f.useRef)(),n=(0,f.useRef)(),i=(0,f.useRef)(),t=(0,f.useRef)(),o=(0,f.useRef)(),a=(0,f.useRef)(),d=(0,f.useRef)(),s=(0,f.useRef)(),l=(0,f.useRef)(),c="",u="",p="",m="",h="",g="",x="",b="",y=(0,f.useState)({border:"1px solid white",backgroundColor:"#f1e1fc"}),j=(0,S.Z)(y,2),P=j[0],D=j[1],V=(0,f.useState)(!0),_=(0,S.Z)(V,2),Y=_[0],G=_[1],z=(0,f.useState)(!1),K=(0,S.Z)(z,2),J=K[0],X=K[1],Q=function(){D({border:"1px solid white",backgroundColor:"#f1e1fc"})},$=function(){var r=(0,w.Z)((0,v.Z)().mark((function r(n){var i,f;return(0,v.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,Y){r.next=10;break}return p=t.current.value,m=o.current.value,h=a.current.value,x=d.current.value,b=l.current.value,g=s.current.value,r.next=10,E.g.post("/auth/register",{enteredFirstName:p,enteredSurname:m,enteredMobilePhone:h,enteredEmail:c,enteredPassword:u,maker:x,type:b,license:g});case 10:return r.next=12,E.g.post("/auth/login",{enteredEmail:c,enteredPassword:u});case 12:return i=r.sent,r.next=15,i.data;case 15:f=r.sent,e(C.Y.login({token:f.accessToken,isAdmin:f.isAdmin,userId:f._id,maker:f.maker,type:f.type,license:f.license})),window.location.reload(!1),r.next=24;break;case 20:r.prev=20,r.t0=r.catch(0),D({border:"1px solid #b40e0e",backgroundColor:"#fddddd"}),O.Am.error("Credendials not valid!");case 24:case"end":return r.stop()}}),r,null,[[0,20]])})));return function(e){return r.apply(this,arguments)}}();return(0,R.jsx)(A,{children:(0,R.jsxs)(M,{children:[(0,R.jsx)(N,{children:Y?"Sign In":"Sign Up"}),(0,R.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Y||n.current.value===i.current.value?(c=r.current.value,u=n.current.value,$()):(O.Am.error("Passwords do not match!"),D({border:"1px solid #b40e0e",backgroundColor:"#fddddd"}))},children:[!Y&&(0,R.jsxs)("div",{children:[(0,R.jsxs)(T,{children:[(0,R.jsx)(U,{htmlFor:"firstName",children:"First Name"}),(0,R.jsx)(W,{type:"text",id:"firstName",placeholder:"First Name...",required:!0,ref:t})]}),(0,R.jsxs)(T,{children:[(0,R.jsx)(U,{htmlFor:"surName",children:"Surname"}),(0,R.jsx)(W,{type:"text",id:"surName",placeholder:"Last Name...",required:!0,ref:o})]}),(0,R.jsxs)(T,{children:[(0,R.jsx)(U,{htmlFor:"phone",children:"Mobile Number"}),(0,R.jsx)(W,{type:"text",id:"phone",placeholder:"Phone Number with no space...",required:!0,ref:a})]}),(0,R.jsxs)(T,{children:[(0,R.jsx)(U,{htmlFor:"carType",children:"Car Type"}),(0,R.jsxs)(F,{id:"carType",required:!0,ref:l,children:[(0,R.jsx)("option",{value:"",children:"Select your car type..."}),(0,R.jsx)("option",{value:"Motorbike",children:"Motorbike"}),(0,R.jsx)("option",{value:"Car",children:"Car"}),(0,R.jsx)("option",{value:"Small Van",children:"Small Van"}),(0,R.jsx)("option",{value:"Small Bus",children:"Small Bus"})]})]}),(0,R.jsxs)(T,{children:[(0,R.jsx)(U,{htmlFor:"maker",children:"Car Maker"}),(0,R.jsxs)(F,{id:"maker",required:!0,ref:d,children:[(0,R.jsx)("option",{value:"",children:"Select your car maker..."}),Z.fT.map((function(e){return(0,R.jsx)("option",{value:e.title,children:e.title},e.id)})),(0,R.jsx)("option",{value:"Other",children:"Other"})]})]}),(0,R.jsxs)(T,{children:[(0,R.jsx)(U,{htmlFor:"license",children:"License Plate"}),(0,R.jsx)(W,{type:"text",id:"license",placeholder:"License plate...",required:!0,ref:s})]})]}),(0,R.jsxs)(T,{children:[(0,R.jsx)(U,{htmlFor:"email",children:"Your Email"}),(0,R.jsx)(W,{type:"email",id:"email",placeholder:"Email...",required:!0,ref:r})]}),(0,R.jsxs)(T,{children:[(0,R.jsx)(U,{htmlFor:"password",children:"Your Password"}),(0,R.jsxs)(I,{invalidPassword:P,children:[(0,R.jsx)(W,{type:J?"text":"password",id:"password",ref:n,onChange:Q,placeholder:"Password...",required:!0}),!Y&&(0,R.jsx)(W,{type:J?"text":"password",id:"password",ref:i,onChange:Q,placeholder:"Password...",required:!0})]}),(0,R.jsx)("h4",{children:"Show password?"}),(0,R.jsx)(H,{id:"checkbox",type:"checkbox",checked:J,onChange:function(){X((function(e){return!e}))}})]}),(0,R.jsxs)(B,{children:[(0,R.jsx)(q,{children:Y?"Login":"Create Account"}),(0,R.jsx)(L,{type:"button",onClick:function(){G((function(e){return!e}))},children:Y?"Create new account":"Login with existing account"})]})]}),(0,R.jsx)(O.Ix,{newestOnTop:!0,autoClose:5e3,pauseOnHover:!0,theme:"dark"})]})})},A=y.ZP.section(i||(i=(0,b.Z)(["\n  border-top: 1px solid #da3939;\n  border-bottom: 1px solid #da3939;\n  min-height: 74vh;\n  display: flex;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  ","\n"])),(0,j.ai)({height:"100vh"})),M=y.ZP.div(t||(t=(0,b.Z)(["\n  margin: 1rem auto;\n  border: 1px solid #da3939;\n  box-shadow: 0 3px 24px rgb(0 0 0 / 50%);\n  border-radius: 1rem;\n  width: 40rem;\n  padding: 1rem 2rem;\n"]))),N=y.ZP.h1(o||(o=(0,b.Z)(["\n  padding-bottom: 1.4rem;\n  text-align: center;\n  color: black;\n"]))),T=y.ZP.div(a||(a=(0,b.Z)(["\n  margin-bottom: 0.5rem;\n"]))),I=y.ZP.div(d||(d=(0,b.Z)(["\n  display: flex;\n  gap: 1rem;\n  & input {\n    background-color: ",";\n    border: ",";\n  }\n"])),(function(e){return e.invalidPassword.backgroundColor}),(function(e){return e.invalidPassword.border})),W=y.ZP.input(s||(s=(0,b.Z)(["\n  display: flex;\n  gap: 1rem;\n  font: inherit;\n  color: #38015c;\n  border-radius: 4px;\n  background-color: #f1e1fc;\n  border: 1px solid white;\n  width: 100%;\n  height: 100%;\n  text-align: left;\n  padding: 0.25rem;\n"]))),F=y.ZP.select(l||(l=(0,b.Z)(["\n  display: flex;\n  gap: 1rem;\n  font: inherit;\n  color: #38015c;\n  border-radius: 4px;\n  background-color: #f1e1fc;\n  border: 1px solid white;\n  width: 100%;\n  height: 100%;\n  text-align: left;\n  padding: 0.25rem;\n"]))),U=y.ZP.label(c||(c=(0,b.Z)(["\n  display: block;\n  color: black;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n"]))),H=y.ZP.input(u||(u=(0,b.Z)(["\n  width: 3rem;\n  height: 15px;\n  align-items: center;\n  align-content: center;\n"]))),B=y.ZP.div(p||(p=(0,b.Z)(["\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  &:hover {\n    background-color: transparent;\n    color: #da3939;\n  }\n"]))),q=y.ZP.button(m||(m=(0,b.Z)(["\n  background-color: initial;\n  border: 1px solid #da3939;\n  border-radius: 25px;\n  cursor: pointer;\n  font: inherit;\n  padding: 0.5rem 2rem;\n  &:hover {\n    background-color: #da3939;\n    color: whitesmoke;\n  }\n"]))),L=y.ZP.button(h||(h=(0,b.Z)(["\n  margin-top: 10px;\n  background-color: transparent;\n  color: #e47e7e;\n  border: none;\n  padding: 8px 6px;\n  cursor: pointer;\n  &:hover {\n    background-color: transparent;\n    color: #da3939;\n  }\n"]))),D=function(){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(x.Z,{}),(0,R.jsx)(P,{}),(0,R.jsx)(g.Z,{})]})}}}]);
//# sourceMappingURL=564.32bbddbc.chunk.js.map