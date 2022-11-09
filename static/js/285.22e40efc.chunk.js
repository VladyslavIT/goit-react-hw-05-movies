"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[285],{4377:function(t,e,n){n.d(e,{Hj:function(){return g},PY:function(){return f},oO:function(){return b},vw:function(){return p},y:function(){return x}});var r=n(5861),a=n(4687),c=n.n(a),i=n(1044),o=n(7596),s="https://api.themoviedb.org/3/search/movie",u="a7cfffa58e55699501e5099e5e220905";function p(t,e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e,n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.ZP.get("".concat(s,"?api_key=").concat(u,"&query=").concat(e,"&page=").concat(n));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),o.Am.error("Oops, something went wrong");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var l="https://api.themoviedb.org/3/trending/all/day";function f(){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.ZP.get("".concat(l,"?api_key=").concat(u));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),o.Am.error("Oops, something went wrong");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var d="https://api.themoviedb.org/3/movie/";function g(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.ZP.get("".concat(d).concat(e,"?api_key=").concat(u));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),o.Am.error("Oops, something went wrong");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var w="https://api.themoviedb.org/3/movie/";function x(t){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.ZP.get("".concat(w).concat(e,"/credits?api_key=").concat(u));case 3:return n=t.sent,t.abrupt("return",n.data.cast.slice(0,6));case 7:t.prev=7,t.t0=t.catch(0),o.Am.error("Oops, something went wrong");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var y="https://api.themoviedb.org/3/movie/";function b(t){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.ZP.get("".concat(y).concat(e,"/reviews?api_key=").concat(u));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),o.Am.error("Oops, something went wrong");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}},2285:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var r,a,c,i,o,s=n(885),u=n(2791),p=n(7689),h=n(4377),l=n(1454),f=n(168),v=n(3237),d=v.Z.ul(r||(r=(0,f.Z)(["\n margin-bottom: 24px;\n"]))),g=v.Z.h3(a||(a=(0,f.Z)(["\n  padding-left: 24px;\n  margin-bottom: 8px;\n"]))),m=v.Z.p(c||(c=(0,f.Z)(["\n  line-height: 24px;\n  letter-spacing: 0.04em;\n"]))),w=v.Z.p(i||(i=(0,f.Z)(["\n  text-align: center;\n  font-size: larger;\n  margin-bottom: 24px;\n"]))),x=v.Z.p(o||(o=(0,f.Z)(["\n  text-align: end;\n"]))),Z=n(184),y=function(){var t=(0,u.useState)([]),e=(0,s.Z)(t,2),n=e[0],r=e[1],a=(0,u.useState)(!1),c=(0,s.Z)(a,2),i=c[0],o=c[1],f=(0,p.UO)().movieId;if((0,u.useEffect)((function(){o(!0),(0,h.oO)(f).then((function(t){r(t),o(!1)}))}),[f]),n)return(0,Z.jsxs)(Z.Fragment,{children:[i&&(0,Z.jsx)(l.a,{}),n.length>0?(0,Z.jsx)(d,{children:n.map((function(t){var e=t.author,n=t.content,r=t.created_at,a=t.id;return(0,Z.jsxs)("li",{children:[(0,Z.jsx)(g,{children:e}),(0,Z.jsx)(m,{children:n}),(0,Z.jsx)(x,{children:new Date(r).toLocaleDateString()})]},a)}))}):(0,Z.jsx)(w,{children:"Sorry, there are no reviews yet."})]})}},1454:function(t,e,n){n.d(e,{a:function(){return s}});var r,a=n(1523),c=n(168),i=n(3237).Z.div(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 100px;\n"]))),o=n(184),s=function(){return(0,o.jsx)(i,{children:(0,o.jsx)(a.BR,{height:"80",width:"80",radisu:1,color:"cadetblue",ariaLabel:"puff-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}}}]);
//# sourceMappingURL=285.22e40efc.chunk.js.map