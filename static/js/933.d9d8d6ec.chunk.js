"use strict";(self.webpackChunkhw5_reat_movies=self.webpackChunkhw5_reat_movies||[]).push([[933],{454:function(n,t,r){r.d(t,{O:function(){return c}});var e=r(689),a=r(731),u=r(184),c=function(n){var t=n.movies,r=(0,e.TH)();return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:t.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(n.id),state:{from:r},children:n.title})},n.id)}))})})}},933:function(n,t,r){r.r(t),r.d(t,{default:function(){return o}});var e=r(885),a=r(281),u=r(791),c=r(454),i=r(184),o=function(){var n=function(){var n=(0,u.useState)([]),t=(0,e.Z)(n,2),r=t[0],c=t[1];return(0,u.useEffect)((function(){a.Hg().then((function(n){return c(n)}))}),[]),{trendingMovies:r}}(),t=n.trendingMovies;return(0,i.jsx)("div",{children:(0,i.jsx)(c.O,{movies:t})})}},281:function(n,t,r){r.d(t,{Hg:function(){return o},TP:function(){return f},q5:function(){return d},z1:function(){return s},zv:function(){return p}});var e=r(861),a=r(757),u=r.n(a),c=r(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var i="?api_key=0a80fedb779fecb4fbbd0abd344f3050",o=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/trending/movie/day".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results.map((function(n){return{id:n.id,title:n.title}})));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/search/movie".concat(i,"&query=").concat(t,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data.results.map((function(n){return{id:n.id,title:n.title}})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t).concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t,"/credits").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.cast.map((function(n){return{name:n.name,character:n.character,profile_path:n.profile_path,id:n.id}})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t,"/reviews").concat(i,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data.results.map((function(n){return{author:n.author,content:n.content,id:n.id}})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=933.d9d8d6ec.chunk.js.map