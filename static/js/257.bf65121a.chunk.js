"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{257:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(439),a=e(700),c=e(575),u=e(576),i=e(791),o=e(502),s=e(87),f=e(184);function l(){return(0,f.jsxs)("h1",{children:["Page is not found!!! Go to ",(0,f.jsx)(s.rU,{to:"/",children:"Home page"})," "]})}function p(){var n=(0,i.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],p=(0,i.useState)(null),v=(0,r.Z)(p,2),d=v[0],h=v[1],g=(0,i.useState)(!1),m=(0,r.Z)(g,2),x=m[0],_=m[1];(0,i.useEffect)((function(){_(!0),(0,o.XT)().then((function(n){s(n)})).catch((function(n){h("Ooops. Something went wrong..."),console.log(n)})).finally((function(){return _(!1)}))}),[]);var w=!x&&!e.length;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(c.Z,{text:"Trending Movies"}),x&&"Loading ...",w&&(0,f.jsx)(l,{}),d&&(0,f.jsx)("div",{children:d}),e&&(0,f.jsx)(u.Z,{movies:e})]})})}},575:function(n,t,e){e.d(t,{Z:function(){return c}});var r="PageHeading_title__whdE-",a=e(184);function c(n){var t=n.text;return(0,a.jsx)("h1",{className:r,children:t})}},576:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(87),a="MovieList_list__aMem1",c="MovieList_list_link__h0hQN",u=e(184),i=function(n){var t=n.movies,e=n.prevLocation;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{children:t.map((function(n){var t=n.id,i=n.original_title;return(0,u.jsx)("li",{className:a,children:(0,u.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:e},children:(0,u.jsx)("h3",{className:c,children:i})})},t)}))})})}},502:function(n,t,e){e.d(t,{Hq:function(){return d},XT:function(){return v},fU:function(){return g},l2:function(){return h},sv:function(){return m}});var r=e(861),a=e(757),c=e.n(a),u=e(759),i="61704516027105ac835033833924bd54";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="/trending/movie/week",s="/search/movie",f="/movie",l="/credits",p="/reviews",v=function(){var n=(0,r.Z)(c().mark((function n(){var t,e,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,u.Z.get("".concat(o,"?api_key=").concat(i,"&page=").concat(t,"&language=en-US&include_adult=false"));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,u.Z.get("".concat(s,"?api_key=").concat(i,"&page=").concat(e,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(f,"/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t).concat(l,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,u.Z.get("/movie/".concat(t).concat(p,"?api_key=").concat(i,"&language=en-US&page=").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=257.bf65121a.chunk.js.map