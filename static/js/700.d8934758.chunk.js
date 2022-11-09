"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[700],{4377:function(n,t,e){e.d(t,{Hj:function(){return d},PY:function(){return l},oO:function(){return Z},y:function(){return x}});var r=e(5861),i=e(4687),a=e.n(i),o=e(1044),c=e(7596),s="a7cfffa58e55699501e5099e5e220905";var p="https://api.themoviedb.org/3/trending/all/day";function l(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("".concat(p,"?api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),c.Am.error("Oops, something went wrong");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}var h="https://api.themoviedb.org/3/movie/";function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("".concat(h).concat(t,"?api_key=").concat(s));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),c.Am.error("Oops, something went wrong");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}var g="https://api.themoviedb.org/3/movie/";function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("".concat(g).concat(t,"/credits?api_key=").concat(s));case 3:return e=n.sent,n.abrupt("return",e.data.cast.slice(0,6));case 7:n.prev=7,n.t0=n.catch(0),c.Am.error("Oops, something went wrong");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}var v="https://api.themoviedb.org/3/movie/";function Z(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("".concat(v).concat(t,"/reviews?api_key=").concat(s));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),c.Am.error("Oops, something went wrong");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},7700:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var r,i,a,o,c,s,p,l,u,h,d,f,g,x,m,v=e(885),Z=e(2791),w=e(1087),j=e(7689),b=e(4377),y=e(6053),_=e(1454),k=e(168),O=e(3237),z=O.Z.div(r||(r=(0,k.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  padding-top: 40px;\n  margin-bottom: 56px;\n"]))),P=(O.Z.div(i||(i=(0,k.Z)(["\n  margin-left: 76px;\n  display: flex;\n  flex-direction: column;\n"]))),O.Z.div(a||(a=(0,k.Z)(["\n  width: 50%;\n  padding-top: 20px;\n  margin-bottom: 90px;\n"])))),S=O.Z.h1(o||(o=(0,k.Z)(["\n  margin-bottom: 16px;\n"]))),A=O.Z.p(c||(c=(0,k.Z)(["\n  margin-bottom: 24px;\n  font-style: italic;\n  font-size: large;\n"]))),C=O.Z.p(s||(s=(0,k.Z)(["\n  margin-bottom: 16px;\n  font-weight: bold;\n  font-size: large;\n"]))),F=O.Z.div(p||(p=(0,k.Z)(["\n  display: flex;\n  margin-bottom: 24px;\n  font-weight: bold;\n"]))),H=O.Z.ul(l||(l=(0,k.Z)(["\n  display: flex;\n"]))),L=O.Z.p(u||(u=(0,k.Z)(["\n  font-size: large;\n  margin-right: 20px;\n"]))),R=O.Z.li(h||(h=(0,k.Z)(["\n  font-size: large;\n  margin-right: 16px;\n  &:last-child {\n    margin: 0;\n  }\n"]))),U=O.Z.h3(d||(d=(0,k.Z)(["\n  text-align: center;\n  margin-bottom: 24px;\n"]))),B=O.Z.p(f||(f=(0,k.Z)(["\n  text-align: center;\n  font-size: large;\n  line-height: 24px;\n  letter-spacing: 0.04em;\n"]))),E=O.Z.div(g||(g=(0,k.Z)(["\n  margin-bottom: 64px;\n  text-align: center;\n  font-size: large;\n  line-height: 24px;\n  letter-spacing: 0.04em;\n"]))),G=O.Z.h3(x||(x=(0,k.Z)(["\n  margin-bottom: 24px;\n"]))),I=(0,O.Z)(w.OL)(m||(m=(0,k.Z)(["\n  font-size: x-large;\n  color: inherit;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    transform: color;\n    color: white;\n  }\n  & + & {\n    margin-left: 50px;\n  }\n  &.active {\n    color: white;\n  }\n"]))),N=e(184),T=function(){var n,t,e=(0,Z.useState)(null),r=(0,v.Z)(e,2),i=r[0],a=r[1],o=(0,Z.useState)(!1),c=(0,v.Z)(o,2),s=c[0],p=c[1],l=(0,j.UO)().movieId,u=null!==(n=null===(t=(0,j.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";if((0,Z.useEffect)((function(){p(!0),(0,b.Hj)(l).then((function(n){a(n),p(!1)}))}),[l]),i){var h=i.title,d=i.poster_path,f=i.vote_average,g=i.tagline,x=i.overview,m=i.genres;return(0,N.jsxs)(N.Fragment,{children:[s&&(0,N.jsx)(_.a,{})," ",(0,N.jsx)(z,{children:i&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("div",{children:(0,N.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(d),alt:"".concat(h)})}),(0,N.jsxs)(P,{children:[(0,N.jsx)(S,{children:h}),(0,N.jsx)(A,{children:g}),(0,N.jsxs)(C,{children:[(0,N.jsx)("span",{children:"User Score:"})," ","".concat(f.toFixed(1))]}),(0,N.jsxs)(F,{children:[(0,N.jsx)(L,{children:"Genres:"}),(0,N.jsx)(H,{children:m.map((function(n){var t=n.id,e=n.name;return(0,N.jsx)(R,{children:e},t)}))})]}),(0,N.jsx)(U,{children:"Overwiew"}),(0,N.jsx)(B,{children:x})]}),(0,N.jsx)(w.OL,{to:u,children:(0,N.jsx)(y.nfZ,{className:"icon"})})]})}),(0,N.jsxs)(E,{children:[(0,N.jsx)(G,{children:"Show more information"}),(0,N.jsx)(I,{to:"cast",children:"Cast"}),(0,N.jsx)(I,{to:"reviews",children:"Reviews"})]}),(0,N.jsx)(j.j3,{})]})}}},1454:function(n,t,e){e.d(t,{a:function(){return s}});var r,i=e(1523),a=e(168),o=e(3237).Z.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 100px;\n"]))),c=e(184),s=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(i.BR,{height:"80",width:"80",radisu:1,color:"cadetblue",ariaLabel:"puff-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}}}]);
//# sourceMappingURL=700.d8934758.chunk.js.map