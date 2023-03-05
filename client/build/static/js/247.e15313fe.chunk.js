"use strict";(self.webpackChunkgers_garage=self.webpackChunkgers_garage||[]).push([[247],{8431:function(n,e,i){i.d(e,{Z:function(){return B}});var t,r,a,o,s,d,c,l,u,p,f,g,x=i(168),h=i(3433),m=i(4165),Z=i(5861),v=i(9439),j=i(8404),b=i(8789),y=i(4772),w=i(3858),P=i(8708),S=i(9434),k=i(1087),E=i(6094),O=i(5985),C=i(184),A=function(n){var e=n.item,i=(0,S.I0)(),t=localStorage.getItem("userId");return(0,C.jsx)(M,{children:(0,C.jsx)(I,{children:(0,C.jsxs)(R,{children:[(0,C.jsx)(k.rU,{style:{textDecoration:"none"},to:"/product/".concat(e._id),children:(0,C.jsx)(z,{src:e.img})}),(0,C.jsxs)(W,{children:[(0,C.jsx)(k.rU,{style:{textDecoration:"none"},to:"/product/".concat(e._id),children:(0,C.jsx)(U,{children:e.name})}),(0,C.jsxs)(T,{children:[(0,C.jsxs)(F,{children:["\u20ac",e.price.toFixed(2)]}),(0,C.jsx)(k.rU,{style:{textDecoration:"none"},onClick:function(){i(E.U.addItemToCartHandler({id:e._id,name:e.name,amount:1,price:e.price,img:e.img,user:t})),O.Am.success("Product added to cart")},children:(0,C.jsx)(_,{children:(0,C.jsx)(P.Z,{})})})]})]})]})})})},M=b.ZP.div(t||(t=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),I=b.ZP.div(r||(r=(0,x.Z)(["\n  height: 100%;\n  min-height: 1px;\n  padding: 0.5rem;\n"]))),R=b.ZP.div(a||(a=(0,x.Z)(["\n  position: relative;\n  width: 300px;\n  height: 100%;\n  padding: 20px;\n  box-shadow: 0 3px 24px rgb(0 0 0 / 4%);\n  border-radius: 8px;\n  background-color: #fff;\n  border: 1px solid #f0f2f3;\n"]))),z=b.ZP.img(o||(o=(0,x.Z)(["\n  width: 250px;\n  height: 250px;\n  margin: 0 auto 20px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  &:hover {\n    background-color: #e9f5f5;\n    transform: scale(1.1);\n  }\n\n  ","\n"])),(0,w.ai)({maxWidth:300})),W=b.ZP.div(s||(s=(0,x.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n"]))),U=b.ZP.div(d||(d=(0,x.Z)(["\n  color: #18181d;\n  cursor: pointer;\n  padding-bottom: 5px;\n  width: 90%;\n  border-radius: 50%;\n  transition: all 0.5s ease;\n  &:hover {\n    transform: scale(1.1);\n  }\n  cursor: pointer;\n"]))),T=b.ZP.div(c||(c=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),_=b.ZP.div(l||(l=(0,x.Z)(["\n  color: #18181d;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 10px;\n  transition: all 0.5s ease;\n  &:hover {\n    transform: scale(1.23);\n  }\n  cursor: pointer;\n"]))),F=b.ZP.p(u||(u=(0,x.Z)(["\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n"]))),D=i(4604),N=i(2791),H=i(7246),B=function(n){var e,i,t=n.filters,r=n.sort,a=n.page,o=(0,N.useState)([]),s=(0,v.Z)(o,2),d=s[0],c=s[1],l=(0,N.useState)(0),u=(0,v.Z)(l,2),p=u[0],f=u[1],g=(0,j.a)({queryKey:["productsData"],queryFn:function(){var n=(0,Z.Z)((0,m.Z)().mark((function n(){var e;return(0,m.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.g.get("/products/");case 2:return e=n.sent,a&&c(e.data.filter((function(n){return Object.entries(t).every((function(e){var i=(0,v.Z)(e,2),t=i[0],r=i[1];return n[t].includes(r)}))}))),n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}),x=g.data,b=g.isFetching,w=function(){c("newest"===r?function(n){return(0,h.Z)(n).sort((function(n,e){return n.createdAt>e.createdAt?-1:e.createdAt>n.createdAt?1:0}))}:"asc"===r?function(n){return(0,h.Z)(n).sort((function(n,e){return n.price-e.price}))}:function(n){return(0,h.Z)(n).sort((function(n,e){return e.price-n.price}))})};(0,N.useEffect)((function(){w()}),[r]),(0,N.useEffect)((function(){""===t.category?(c(x),w()):Object.keys(t).length>0&&(c(x.filter((function(n){return Object.entries(t).every((function(e){var i=(0,v.Z)(e,2),t=(i[0],i[1]);return n.category.includes(t)}))}))),P(),w())}),[t,x]),b?e=(0,C.jsx)(D.Z,{}):(i=Math.ceil(d.length/20),e=(0,C.jsx)(V,{children:a?d.slice(20*p,20*(p+1)).map((function(n){return(0,C.jsx)(A,{item:n},n._id)})):x.slice(0,5).map((function(n){return(0,C.jsx)(A,{item:n},n._id)}))}));var P=function(){f(0)};return(0,C.jsxs)(q,{children:[a?(0,C.jsx)(G,{children:"Shop With Us"}):(0,C.jsx)(G,{children:"Fresh Arrivals"}),e,a&&(0,C.jsx)(H.Z,{variant:"outlined",count:i,onChange:function(n,e){d.length>20&&f(e-1)}}),(0,C.jsx)(O.Ix,{})]})},q=b.ZP.div(p||(p=(0,x.Z)(["\n  padding: 25px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),V=b.ZP.div(f||(f=(0,x.Z)(["\n  padding: 20px 0;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  ","\n  ","\n  ","\n"])),(0,w.mi)({"grid-template-columns":"repeat(3,1fr)"}),(0,w.Mq)({"grid-template-columns":"repeat(2,1fr)"}),(0,w.ai)({"grid-template-columns":"1fr"})),G=b.ZP.h3(g||(g=(0,x.Z)(["\n  font-size: 38px;\n  line-height: 1.4;\n  font-weight: 800;\n"])))},9438:function(n,e,i){i.d(e,{aZ:function(){return c},K_:function(){return d},fT:function(){return u},yV:function(){return l},Zo:function(){return p}});var t=i.p+"static/media/avatar1.95541f81651d8200bf25.png",r=i.p+"static/media/guarantee.6f920673f8ead0d8fe53.png",a=i.p+"static/media/speed.cd5c7255649e41486ee1.png",o=i.p+"static/media/team.81d4a57b2a9de47c9269.png",s=i.p+"static/media/truck.bf99fca041b5edeebe40.png",d=[{id:1,img:"https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U9651/IMG_71532-large.jpg",title:"CHECK OUT OUR SERVICES",desc:"ENJOY OUR ACCESSORIES AVAILABLE AND TRANSFORM YOUR CAR NOW. ",button:"SCHEDUELE NOW",bg:"fcf1ed"}],c=[{_id:1,img:r,title:"Official Guarantee",desc:"We give a one-year guarantee for all work. Two years of official warranty for spare parts from our online store."},{_id:2,img:a,title:"Auto Parts Store",desc:"Own online store of original auto parts with delivery. 15% discount on spare parts when repairing your car."},{_id:3,img:o,title:"Professional Team",desc:"We employ only professional specialists with extensive experience in car services. Guarantee for all works."},{_id:4,img:s,title:"Own Tow Truck",desc:"If your car breaks down and does not go. We can quickly deliver it to our car service with our tow truck."}],l=[{id:1,img:"http://cdn.carbuzz.com/gallery-images/1600/940000/300/940330.jpg",title:"CHECK OUT OUR SERVICES",desc:"DON'T COMPROMISE ON YOUR SECURITY! GET YOUR CAR SERVICED NOW.",button:"SCHEDUELE NOW",bg:"fcf1ed"},{id:2,img:"https://i.pinimg.com/originals/80/f9/8f/80f98fb11a2de14c45f663308904ee6c.jpg",title:"MODERN AUTO PARTS",desc:"DON'T COMPROMISE ON FEATURES! GET NEW ACCESSORIES NOW.",button:"SHOP NOW",bg:"f5fafd"}],u=[{id:1,title:"Hyundai Accent"},{id:2,title:"Hyundai Elantra"},{id:3,title:"Hyundai i Series"},{id:4,title:"BMW 1 Series"},{id:5,title:"BMW 2 Series"},{id:6,title:"BMW 3 Series"},{id:7,title:"BMW 4 Series"},{id:8,title:"BMW 5 Series"},{id:9,title:"BMW 6 Series"},{id:10,title:"BMW 7 Series"},{id:12,title:"BMW i Series"},{id:13,title:"BMW M Series"},{id:14,title:"BMW X Series"},{id:15,title:"Honda Accord"},{id:16,title:"Honda Civic"},{id:17,title:"Honda CR-V"},{id:18,title:"Honda HR-V"},{id:19,title:"Ford Focus"},{id:20,title:"Ford EcoSport"},{id:21,title:"Ford Edge"},{id:22,title:"Ford F-150"},{id:23,title:"Audi A Series"},{id:24,title:"Audi Q Series"},{id:25,title:"Audi R Series"},{id:26,title:"Audi S Series"},{id:27,title:"Mercedes A Series"},{id:28,title:"Mercedes AMG Series"},{id:29,title:"Mercedes C Series"},{id:30,title:"Toyota Corolla"}],p=[{image:t,name:"Junio Xavier",review:"It really improved my workflow, as I don't have to worry about scheduling my clients, and I reaceive every appointment by Email and also on the app which gives me my agenda organized the way I please, It even helped me to get more clients. Every day one of my clients praises me about my Website. I'm really happy about it."},{image:t,name:"Debora Garcia",review:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore possimus reiciendis, voluptatibus ad impedit delectus odio deleniti error aspernatur tempora reprehenderit omnis dolor voluptate earum accusamus vitae eaque. Exercitationem, atque."}]},9827:function(n,e,i){i.r(e),i.d(e,{default:function(){return Rn}});var t,r,a,o,s,d,c,l,u,p,f,g,x,h,m,Z,v,j,b,y,w,P,S,k,E,O,C,A,M,I,R=i(2791),z=i(168),W=i(8789),U=i(9438),T=i(3858),_=i(184),F=function(){return(0,_.jsxs)(D,{children:[(0,_.jsx)(N,{children:"Advantages"}),(0,_.jsx)(H,{children:U.aZ.map((function(n){return(0,_.jsxs)(B,{children:[(0,_.jsx)(q,{src:n.img}),(0,_.jsx)(V,{children:n.title}),(0,_.jsx)(G,{children:n.desc})]},n._id)}))})]})},D=W.ZP.div(t||(t=(0,z.Z)(["\n  width: 100%;\n  max-width: 1200px;\n  margin: 4rem auto;\n"]))),N=W.ZP.h2(r||(r=(0,z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 38px;\n  line-height: 1.4;\n  font-weight: 800;\n"]))),H=W.ZP.div(a||(a=(0,z.Z)(["\n  padding-top: 2rem;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n\n  ","\n"])),(0,T.ai)({"grid-template-columns":"repeat(2,1fr)"})),B=W.ZP.div(o||(o=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n"]))),q=W.ZP.img(s||(s=(0,z.Z)(["\n  padding-bottom: 1.4rem;\n  width: 70px;\n"]))),V=W.ZP.div(d||(d=(0,z.Z)(["\n  padding: 1rem 0;\n  font-size: 24px;\n  line-height: 1.4;\n  font-weight: 500;\n"]))),G=W.ZP.div(c||(c=(0,z.Z)(["\n  font-size: 15px;\n  line-height: 2;\n  font-weight: 300;\n"]))),L=i(2558),K=i(8563),Y=(i(4676),i(5880),function(){return(0,_.jsxs)(X,{children:[(0,_.jsx)(J,{children:"Review from clients"}),(0,_.jsx)(Q,{children:"Testimonials"}),(0,_.jsx)($,{children:(0,_.jsx)(K.tq,{modules:[L.tl],spaceBetween:40,slidesPerView:1,pagination:{clickable:!0,dynamicBullets:!0},children:U.Zo.map((function(n,e){var i=n.image,t=n.name,r=n.review;return(0,_.jsx)(K.o5,{children:(0,_.jsxs)(nn,{children:[(0,_.jsx)(en,{src:i,alt:t}),(0,_.jsx)(J,{style:{color:"black"},children:t}),(0,_.jsx)(tn,{children:r})]})},e)}))})})]})}),X=W.ZP.div(l||(l=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),J=W.ZP.h5(u||(u=(0,z.Z)(["\n  margin-bottom: 10px;\n  color: #c30c0c;\n  font-size: 15px;\n"]))),Q=W.ZP.h2(p||(p=(0,z.Z)(["\n  font-size: 38px;\n  line-height: 1.4;\n  font-weight: 800;\n  margin: 10px;\n"]))),$=W.ZP.div(f||(f=(0,z.Z)(["\n  width: 50%;\n  padding: 2rem;\n  ","\n  ","\n"])),(0,T.Mq)({width:"60%"}),(0,T.ai)({width:"80%"})),nn=W.ZP.div(g||(g=(0,z.Z)(["\n  text-align: center;\n  padding: 2rem 0;\n  user-select: none;\n  background: rgb(245, 251, 253);\n  border-radius: 2rem;\n  border: 1px solid transparent;\n\n  &:hover {\n    border-color: black;\n    background: transparent;\n    transition: all ease 0.6s;\n  }\n"]))),en=W.ZP.img(x||(x=(0,z.Z)(["\n  width: 5rem;\n  aspect-ratio: 1/1;\n  overflow: hidden;\n  border-radius: 50%;\n  margin: 0 auto 1rem;\n  border: 2px solid gray;\n"]))),tn=W.ZP.small(h||(h=(0,z.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  display: block;\n  width: 80%;\n  margin: 0.8rem auto 0;\n  text-align: justify;\n"]))),rn=i(9229),an=i(6153),on=i(4165),sn=i(5861),dn=i(1087),cn=i(8404),ln=i(4772),un=function(){var n,e=(0,cn.a)({queryKey:["servicesData"],queryFn:function(){var n=(0,sn.Z)((0,on.Z)().mark((function n(){var e;return(0,on.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ln.g.get("/services/");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}),i=e.data;return n=e.isFetching?(0,_.jsx)("div",{children:"Fetching data, please wait..."}):i.map((function(n){return(0,_.jsx)(xn,{children:(0,_.jsx)(dn.rU,{style:{textDecoration:"none"},to:"/service/".concat(n._id),state:{service:n},children:(0,_.jsxs)(hn,{children:[(0,_.jsx)(mn,{src:n.homeIcon}),(0,_.jsx)(Zn,{children:n.name})]})})},n._id)})),(0,_.jsx)(pn,{children:(0,_.jsx)(fn,{children:(0,_.jsxs)(gn,{children:[(0,_.jsx)(xn,{children:(0,_.jsx)(dn.rU,{style:{textDecoration:"none"},to:"/products",children:(0,_.jsxs)(hn,{children:[(0,_.jsx)(mn,{src:"https://res.cloudinary.com/dotuxkpjj/image/upload/v1672165307/Ger%27s%20Garage/turbo-engine_jskppj.webp"}),(0,_.jsx)(Zn,{children:"Parts"})]})})}),n]})})})},pn=W.ZP.div(m||(m=(0,z.Z)(["\n  margin-top: -50px;\n  padding-top: 0;\n"]))),fn=W.ZP.div(Z||(Z=(0,z.Z)(["\n  width: 100%;\n  max-width: 1200px;\n  margin: auto;\n"]))),gn=W.ZP.div(v||(v=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 3rem;\n  ","\n  ","\n"])),(0,T.ai)({"grid-template-columns":"repeat(2, 1fr)",gap:"0.5rem"}),(0,T.Mq)({padding:"0 30px"})),xn=W.ZP.div(j||(j=(0,z.Z)(["\n  position: relative;\n  width: 100%;\n  ","\n"])),(0,T.ai)({padding:"5px 0"})),hn=W.ZP.div(b||(b=(0,z.Z)(["\n  cursor: pointer;\n  padding: 20px;\n  position: relative;\n  border: 1px solid #f0f2f3;\n  background-color: #fff;\n  border-radius: 8px;\n  z-index: 1;\n  box-shadow: 0 3px 24px rgb(0 0 0 / 4%);\n  text-align: center !important;\n  transition: all 0.5s ease;\n  transform: scale(0.95);\n  &:hover {\n    transform: scale(1.1);\n  }\n  cursor: pointer;\n"]))),mn=W.ZP.img(y||(y=(0,z.Z)(["\n  width: 50px;\n  padding-bottom: 15px;\n"]))),Zn=W.ZP.h5(w||(w=(0,z.Z)(["\n  color: #18181d;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.5;\n  ","\n"])),(0,T.ai)({fontSize:"18px"})),vn=i(9439),jn=i(2646),bn=i(215),yn=function(){var n=(0,R.useState)(0),e=(0,vn.Z)(n,2),i=e[0],t=e[1],r=U.yV.length-1,a=function(n){t("left"===n?i>0?i-1:r:i<r?i+1:0)};return(0,_.jsxs)(wn,{children:[(0,_.jsx)(Pn,{direction:"left",onClick:function(){return a("left")},children:(0,_.jsx)(jn.Z,{})}),(0,_.jsx)(Sn,{slideIndex:i,children:U.yV.map((function(n){return(0,_.jsx)(kn,{bg:n.bg,children:(0,_.jsx)(En,{image:n.img,children:(0,_.jsxs)(On,{children:[(0,_.jsx)(Cn,{children:n.title}),(0,_.jsx)(An,{children:n.desc}),(0,_.jsx)(dn.rU,{to:1===n.id?"/services":"/products",children:(0,_.jsx)(Mn,{children:n.button})})]})})},n.id)}))}),(0,_.jsx)(Pn,{direction:"right",onClick:function(){return a("right")},children:(0,_.jsx)(bn.Z,{})})]})},wn=W.ZP.div(P||(P=(0,z.Z)(["\n  width: 100%;\n  height: auto;\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  ","\n"])),(0,T.ai)({})),Pn=W.ZP.div(S||(S=(0,z.Z)(["\n  width: 50px;\n  height: 50px;\n  background-color: #fff7f7;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: ",";\n  right: ",";\n  margin: auto;\n  cursor: pointer;\n  opacity: 0.5;\n  z-index: 2;\n"])),(function(n){return"left"===n.direction&&"10px"}),(function(n){return"right"===n.direction&&"10px"})),Sn=W.ZP.div(k||(k=(0,z.Z)(["\n  height: 100%;\n  display: flex;\n  transition: all 1.5s ease;\n  transform: translateX(","vw);\n"])),(function(n){return-100*n.slideIndex})),kn=W.ZP.div(E||(E=(0,z.Z)(["\n  width: 100vw;\n  height: 60vh;\n  align-items: center;\n  background-color: #",";\n"])),(function(n){return n.bg})),En=W.ZP.div(O||(O=(0,z.Z)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: 50%;\n  background-repeat: no-repeat;\n  height: 100%;\n  display: flex;\n"])),(function(n){return n.image})),On=W.ZP.div(C||(C=(0,z.Z)(["\n  padding: 20px 150px;\n  color: whitesmoke;\n  justify-content: left;\n  align-items: left;\n  max-width: 800px;\n  position: relative;\n  ","\n"])),(0,T.ai)({padding:"0 0 0 15px"})),Cn=W.ZP.h1(A||(A=(0,z.Z)(["\n  font-size: 80px;\n  ","\n"])),(0,T.ai)({fontSize:"50px"})),An=W.ZP.p(M||(M=(0,z.Z)(["\n  margin: 25px 0px;\n  font-size: 25px;\n  font-weight: 500;\n  letter-spacing: 3px;\n  ","\n"])),(0,T.ai)({fontSize:"25px"})),Mn=W.ZP.button(I||(I=(0,z.Z)(["\n  padding: 10px;\n  color: azure;\n  font-size: 25px;\n  background-color: #c30c0c;\n  border-radius: 3rem;\n  transition: all 0.5s ease;\n  &:hover {\n    transform: scale(1.1);\n  }\n  cursor: pointer;\n  ","\n"])),(0,T.ai)({fontSize:"15px"})),In=i(8431),Rn=function(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(an.Z,{}),(0,_.jsx)(yn,{}),(0,_.jsx)(un,{}),(0,_.jsx)(F,{}),(0,_.jsx)(In.Z,{page:!1,filters:{}}),(0,_.jsx)(Y,{}),(0,_.jsx)(rn.Z,{})]})}}}]);
//# sourceMappingURL=247.e15313fe.chunk.js.map