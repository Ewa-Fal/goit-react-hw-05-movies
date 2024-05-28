"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[440],{440:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),a="MovieDetailsPage_backButton__qP7NP",c="MovieDetailsPage_reviews__boY9R",s="MovieDetailsPage_cast__wiu9e",i=n(700),u=n(791),o=n(689),l=n(87),d=n(502),v=n(575),p=n(184);function f(){var e=(0,u.useState)(null),t=(0,r.Z)(e,2),n=t[0],f=t[1],h=(0,u.useState)(null),g=(0,r.Z)(h,2),x=g[0],_=g[1],m=(0,u.useState)(!1),w=(0,r.Z)(m,2),j=w[0],k=w[1],Z=(0,o.UO)().movieId,b=(0,o.TH)(),y=(0,o.s0)();console.log(b);return(0,u.useEffect)((function(){k(!0),(0,d.l2)(Z).then((function(e){f(e)})).catch((function(e){_("Ooops. Something went wrong..."),console.log(e)})).finally((function(){return k(!1)}))}),[Z]),(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(i.Z,{children:[(0,p.jsx)("button",{onClick:function(){var e,t;return y(null!==(e=null===b||void 0===b||null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},className:a,children:"Go back"}),n&&(0,p.jsx)(v.Z,{text:n.title}),j&&"Loading ...",x&&(0,p.jsx)("div",{children:x}),n&&(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(n.poster_path),alt:n.title}),(0,p.jsx)("h3",{children:n.title}),(0,p.jsxs)("p",{children:["(",new Date(n.release_date).getFullYear(),")"]}),(0,p.jsxs)("p",{children:["User Score: ",n.popularity]}),(0,p.jsxs)("div",{className:"movie_overview",children:[(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:n.overview})]})]}),(0,p.jsx)("hr",{}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Additional Information"}),(0,p.jsx)(l.OL,{to:"/movies/".concat(Z,"/reviews"),state:b.state,children:(0,p.jsx)("p",{className:c,children:"Reviews"})}),(0,p.jsx)(l.OL,{to:"/movies/".concat(Z,"/cast"),state:b.state,children:(0,p.jsx)("p",{className:s,children:"Cast"})}),(0,p.jsx)("hr",{}),(0,p.jsx)(o.j3,{})]})]})})}},575:function(e,t,n){n.d(t,{Z:function(){return c}});var r="PageHeading_title__whdE-",a=n(184);function c(e){var t=e.text;return(0,a.jsx)("h1",{className:r,children:t})}},502:function(e,t,n){n.d(t,{Hq:function(){return f},XT:function(){return p},fU:function(){return g},l2:function(){return h},sv:function(){return x}});var r=n(861),a=n(757),c=n.n(a),s=n(759),i="61704516027105ac835033833924bd54";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="/trending/movie/week",o="/search/movie",l="/movie",d="/credits",v="/reviews",p=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,s.Z.get("".concat(u,"?api_key=").concat(i,"&page=").concat(t,"&language=en-US&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,s.Z.get("".concat(o,"?api_key=").concat(i,"&page=").concat(n,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(l,"/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t).concat(d,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,s.Z.get("/movie/".concat(t).concat(v,"?api_key=").concat(i,"&language=en-US&page=").concat(n));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=440.99fa3bb5.chunk.js.map